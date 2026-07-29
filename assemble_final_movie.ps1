[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$SessionFolder,

    [Parameter(Position = 1)]
    [string]$OutputPath,

    [string]$BgmPath,

    [double]$BgmVolume = 1.0,

    [double]$BgmFadeOutSeconds = 2.0,

    [string]$LogoPath,

    [string]$SubtitleConfigPath
)

$ErrorActionPreference = 'Stop'

function Test-FiniteJsonNumber {
    param([object]$Value)

    $numericTypes = @(
        [byte], [sbyte], [int16], [uint16], [int32], [uint32],
        [int64], [uint64], [single], [double], [decimal]
    )
    if ($null -eq $Value -or $Value.GetType() -notin $numericTypes) {
        return $false
    }

    $number = [double]$Value
    return -not [double]::IsNaN($number) -and
        -not [double]::IsInfinity($number)
}

function ConvertTo-AssTimestamp {
    param([double]$Seconds)

    $totalCentiseconds = [int64][Math]::Round(
        $Seconds * 100,
        [MidpointRounding]::AwayFromZero
    )
    $hours = [Math]::Floor($totalCentiseconds / 360000)
    $remaining = $totalCentiseconds % 360000
    $minutes = [Math]::Floor($remaining / 6000)
    $remaining %= 6000
    $wholeSeconds = [Math]::Floor($remaining / 100)
    $centiseconds = $remaining % 100
    return '{0}:{1:00}:{2:00}.{3:00}' -f `
        $hours, $minutes, $wholeSeconds, $centiseconds
}

function ConvertTo-AssText {
    param([string]$Text)

    $escaped = $Text.Replace("`r`n", "`n").Replace("`r", "`n")
    $escaped = $escaped.Replace('\', '\\')
    $escaped = $escaped.Replace('{', '\{').Replace('}', '\}')
    return $escaped.Replace("`n", '\N')
}

try {
    $ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
    if (-not $ffmpeg) {
        throw 'FFmpeg가 설치되어 있지 않거나 PATH에서 찾을 수 없습니다.'
    }

    $ffprobe = $null
    $subtitleEntries = @()
    if (-not [string]::IsNullOrWhiteSpace($SubtitleConfigPath)) {
        if (-not [string]::IsNullOrWhiteSpace($LogoPath)) {
            throw '이번 자막 MVP에서는 로고와 자막을 함께 사용할 수 없습니다.'
        }
        if (-not (Test-Path -LiteralPath $SubtitleConfigPath -PathType Leaf)) {
            throw "자막 JSON 파일이 아닙니다: $SubtitleConfigPath"
        }
        if ([System.IO.Path]::GetExtension($SubtitleConfigPath) -ine '.json') {
            throw "자막 설정 파일 확장자는 .json이어야 합니다: $SubtitleConfigPath"
        }
        $SubtitleConfigPath = (Resolve-Path -LiteralPath $SubtitleConfigPath).Path

        try {
            $jsonBytes = [System.IO.File]::ReadAllBytes($SubtitleConfigPath)
            $strictUtf8 = [System.Text.UTF8Encoding]::new($false, $true)
            $jsonText = $strictUtf8.GetString($jsonBytes)
        } catch {
            throw "자막 설정 파일이 유효한 UTF-8이 아닙니다: $SubtitleConfigPath"
        }

        try {
            $subtitleConfig = $jsonText | ConvertFrom-Json
        } catch {
            throw "자막 설정 파일이 유효한 JSON이 아닙니다: $($_.Exception.Message)"
        }

        if ($null -eq $subtitleConfig -or
            $subtitleConfig.PSObject.Properties.Name -notcontains 'subtitles' -or
            $subtitleConfig.subtitles -isnot [array] -or
            $subtitleConfig.subtitles.Count -eq 0) {
            throw '자막 설정의 subtitles는 비어 있지 않은 배열이어야 합니다.'
        }

        $entryIndex = 0
        foreach ($entry in $subtitleConfig.subtitles) {
            $entryIndex++
            if ($null -eq $entry -or
                $entry.PSObject.Properties.Name -notcontains 'start' -or
                $entry.PSObject.Properties.Name -notcontains 'end' -or
                $entry.PSObject.Properties.Name -notcontains 'text') {
                throw "자막 $entryIndex`: start, end, text 필드가 모두 필요합니다."
            }
            if (-not (Test-FiniteJsonNumber $entry.start) -or
                -not (Test-FiniteJsonNumber $entry.end)) {
                throw "자막 $entryIndex`: start와 end는 유한한 숫자여야 합니다."
            }

            $start = [double]$entry.start
            $end = [double]$entry.end
            if ($start -lt 0) {
                throw "자막 $entryIndex`: start는 0 이상이어야 합니다."
            }
            if ($end -le $start) {
                throw "자막 $entryIndex`: end는 start보다 커야 합니다."
            }
            if ($entry.text -isnot [string] -or
                [string]::IsNullOrWhiteSpace($entry.text)) {
                throw "자막 $entryIndex`: text는 비어 있지 않은 문자열이어야 합니다."
            }

            $subtitleEntries += [pscustomobject]@{
                Start = $start
                End = $end
                Text = [string]$entry.text
                OriginalIndex = $entryIndex
            }
        }

        $subtitleEntries = @(
            $subtitleEntries |
                Sort-Object Start, OriginalIndex
        )
        for ($index = 1; $index -lt $subtitleEntries.Count; $index++) {
            if ($subtitleEntries[$index].Start -lt $subtitleEntries[$index - 1].End) {
                throw "자막 시간 구간이 중복됩니다: 자막 $($subtitleEntries[$index].OriginalIndex)"
            }
        }

        $ffprobe = Get-Command ffprobe -ErrorAction SilentlyContinue
        if (-not $ffprobe) {
            throw '자막 처리에 필요한 ffprobe를 PATH에서 찾을 수 없습니다.'
        }
    }

    if (-not [string]::IsNullOrWhiteSpace($BgmPath)) {
        if ($BgmVolume -lt 0) {
            throw 'BgmVolume은 0 이상이어야 합니다.'
        }
        if ($BgmFadeOutSeconds -lt 0) {
            throw 'BgmFadeOutSeconds는 0 이상이어야 합니다.'
        }
        if (-not (Test-Path -LiteralPath $BgmPath -PathType Leaf)) {
            throw "BGM 파일이 아닙니다: $BgmPath"
        }
        $BgmPath = (Resolve-Path -LiteralPath $BgmPath).Path
        $ffprobe = Get-Command ffprobe -ErrorAction SilentlyContinue
        if (-not $ffprobe) {
            throw 'BGM 처리에 필요한 ffprobe를 PATH에서 찾을 수 없습니다.'
        }
    }

    if (-not [string]::IsNullOrWhiteSpace($LogoPath)) {
        if (-not (Test-Path -LiteralPath $LogoPath -PathType Leaf)) {
            throw "로고 PNG 파일이 아닙니다: $LogoPath"
        }
        if ([System.IO.Path]::GetExtension($LogoPath) -ine '.png') {
            throw "로고 파일 확장자는 .png여야 합니다: $LogoPath"
        }
        $LogoPath = (Resolve-Path -LiteralPath $LogoPath).Path
    }

    if ([string]::IsNullOrWhiteSpace($SessionFolder)) {
        $outputRoot = Join-Path $PSScriptRoot 'output'
        if (-not (Test-Path -LiteralPath $outputRoot -PathType Container)) {
            throw "output 폴더를 찾을 수 없습니다: $outputRoot"
        }
        $candidates = @(
            Get-ChildItem -LiteralPath $outputRoot -Directory | ForEach-Object {
                $validScenes = @(
                    Get-ChildItem -LiteralPath $_.FullName -File |
                        Where-Object { $_.Name -match '^scene_(\d+)\.mp4$' }
                )
                if ($validScenes.Count -gt 0) {
                    [pscustomobject]@{
                        Folder = $_
                        LatestSceneWriteTime = ($validScenes |
                            Measure-Object -Property LastWriteTime -Maximum).Maximum
                    }
                }
            } | Sort-Object `
                @{ Expression = 'LatestSceneWriteTime'; Descending = $true },
                @{ Expression = { $_.Folder.Name }; Descending = $false }
        )
        if ($candidates.Count -eq 0) {
            throw "유효한 장면 영상이 있는 세션 폴더를 찾을 수 없습니다: $outputRoot"
        }
        $SessionFolder = $candidates[0].Folder.FullName
        Write-Host "자동 선택된 세션: $SessionFolder"
    }

    $sessionPath = (Resolve-Path -LiteralPath $SessionFolder).Path
    if (-not (Test-Path -LiteralPath $sessionPath -PathType Container)) {
        throw "세션 폴더가 아닙니다: $SessionFolder"
    }

    $sceneFiles = @(
        Get-ChildItem -LiteralPath $sessionPath -File |
            Where-Object { $_.Name -match '^scene_(\d+)\.mp4$' } |
            Sort-Object { [int64]([regex]::Match($_.Name, '^scene_(\d+)\.mp4$').Groups[1].Value) }
    )

    if ($sceneFiles.Count -eq 0) {
        throw "입력 영상(scene_*.mp4)이 없습니다: $sessionPath"
    }

    if ([string]::IsNullOrWhiteSpace($OutputPath)) {
        $OutputPath = Join-Path $sessionPath 'final_movie.mp4'
    } elseif (-not [System.IO.Path]::IsPathRooted($OutputPath)) {
        $OutputPath = Join-Path (Get-Location).Path $OutputPath
    }

    $concatListPath = Join-Path $sessionPath ('.ffmpeg_concat_{0}.txt' -f [guid]::NewGuid().ToString('N'))
    $temporaryVideoPath = $null
    $temporaryAssPath = $null

    try {
        $concatLines = $sceneFiles | ForEach-Object {
            $escapedName = $_.Name.Replace('\', '\\').Replace("'", "'\''")
            "file '$escapedName'"
        }
        [System.IO.File]::WriteAllLines(
            $concatListPath,
            [string[]]$concatLines,
            [System.Text.UTF8Encoding]::new($false)
        )

        if ([string]::IsNullOrWhiteSpace($BgmPath) -and
            [string]::IsNullOrWhiteSpace($LogoPath) -and
            [string]::IsNullOrWhiteSpace($SubtitleConfigPath)) {
            & $ffmpeg.Source -y -f concat -safe 0 -i $concatListPath -c copy $OutputPath
            if ($LASTEXITCODE -ne 0) {
                throw "FFmpeg 영상 결합에 실패했습니다. 종료 코드: $LASTEXITCODE"
            }
        } else {
            $temporaryVideoPath = Join-Path $sessionPath (
                '.ffmpeg_video_{0}.mp4' -f [guid]::NewGuid().ToString('N')
            )
            & $ffmpeg.Source -y -f concat -safe 0 -i $concatListPath -c copy $temporaryVideoPath
            if ($LASTEXITCODE -ne 0) {
                throw "FFmpeg 임시 영상 결합에 실패했습니다. 종료 코드: $LASTEXITCODE"
            }

            if (-not [string]::IsNullOrWhiteSpace($BgmPath)) {
                $durationText = & $ffprobe.Source -v error -show_entries format=duration `
                    -of default=noprint_wrappers=1:nokey=1 $temporaryVideoPath
                if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($durationText)) {
                    throw '최종 영상 길이를 확인할 수 없습니다.'
                }

                $culture = [System.Globalization.CultureInfo]::InvariantCulture
                $duration = [double]::Parse($durationText.Trim(), $culture)
                $fadeDuration = [Math]::Min($BgmFadeOutSeconds, $duration)
                $fadeStart = [Math]::Max(0, $duration - $fadeDuration)
                $durationValue = $duration.ToString('0.######', $culture)
                $volumeValue = $BgmVolume.ToString('0.######', $culture)
                $audioFilter = "volume=$volumeValue"
                if ($fadeDuration -gt 0) {
                    $fadeStartValue = $fadeStart.ToString('0.######', $culture)
                    $fadeDurationValue = $fadeDuration.ToString('0.######', $culture)
                    $audioFilter += ",afade=t=out:st=$fadeStartValue`:d=$fadeDurationValue"
                }
            }

            if (-not [string]::IsNullOrWhiteSpace($SubtitleConfigPath)) {
                if ([string]::IsNullOrWhiteSpace($BgmPath)) {
                    $durationText = & $ffprobe.Source -v error -show_entries format=duration `
                        -of default=noprint_wrappers=1:nokey=1 $temporaryVideoPath
                    if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($durationText)) {
                        throw '최종 영상 길이를 확인할 수 없습니다.'
                    }

                    $culture = [System.Globalization.CultureInfo]::InvariantCulture
                    $duration = [double]::Parse($durationText.Trim(), $culture)
                }
                foreach ($entry in $subtitleEntries) {
                    if ($entry.Start -ge $duration) {
                        throw "자막 $($entry.OriginalIndex)의 start가 영상 길이 이상입니다."
                    }
                    if ($entry.End -gt $duration) {
                        throw "자막 $($entry.OriginalIndex)의 end가 영상 길이를 초과합니다."
                    }
                }

                $temporaryAssPath = Join-Path $sessionPath (
                    '.ffmpeg_subtitle_{0}.ass' -f [guid]::NewGuid().ToString('N')
                )
                $assHeader = @'
[Script Info]
ScriptType: v4.00+
PlayResX: 720
PlayResY: 1280
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Malgun Gothic,64,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,4,0,2,40,40,80,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
'@
                $dialogueLines = @(
                    $subtitleEntries | ForEach-Object {
                        $startValue = ConvertTo-AssTimestamp $_.Start
                        $endValue = ConvertTo-AssTimestamp $_.End
                        $textValue = ConvertTo-AssText $_.Text
                        "Dialogue: 0,$startValue,$endValue,Default,,0,0,0,,$textValue"
                    }
                )
                $assContent = $assHeader + "`r`n" +
                    ($dialogueLines -join "`r`n") + "`r`n"
                [System.IO.File]::WriteAllText(
                    $temporaryAssPath,
                    $assContent,
                    [System.Text.UTF8Encoding]::new($false)
                )

                $assFileName = [System.IO.Path]::GetFileName($temporaryAssPath)
                Push-Location -LiteralPath $sessionPath
                try {
                    if ([string]::IsNullOrWhiteSpace($BgmPath)) {
                        & $ffmpeg.Source -y -i $temporaryVideoPath `
                            -vf "ass=filename='$assFileName'" `
                            -map '0:v:0' -map '0:a:0?' `
                            -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p `
                            -c:a copy $OutputPath
                    } else {
                        & $ffmpeg.Source -y -i $temporaryVideoPath `
                            -stream_loop -1 -i $BgmPath `
                            -vf "ass=filename='$assFileName'" `
                            -map '0:v:0' -map '1:a:0' `
                            -filter:a $audioFilter -t $durationValue `
                            -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p `
                            -c:a aac -b:a 192k $OutputPath
                    }
                } finally {
                    Pop-Location
                }
            } elseif (-not [string]::IsNullOrWhiteSpace($LogoPath)) {
                $logoFilter = "[1:v]format=rgba[logo];" +
                    "[0:v]split[base][ref];" +
                    "[logo][ref]scale=w='min(iw,rw*0.15)':h=-1[scaled];" +
                    "[base][scaled]overlay=x='W-w-W*0.03':y='H*0.03':" +
                    "eof_action=repeat:format=auto[outv]"

                if ([string]::IsNullOrWhiteSpace($BgmPath)) {
                    & $ffmpeg.Source -y -i $temporaryVideoPath -i $LogoPath `
                        -filter_complex $logoFilter -map '[outv]' -map '0:a:0?' `
                        -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p `
                        -c:a copy $OutputPath
                } else {
                    & $ffmpeg.Source -y -i $temporaryVideoPath -i $LogoPath `
                        -stream_loop -1 -i $BgmPath -filter_complex $logoFilter `
                        -map '[outv]' -map '2:a:0' -filter:a $audioFilter `
                        -t $durationValue -c:v libx264 -preset medium -crf 18 `
                        -pix_fmt yuv420p -c:a aac -b:a 192k $OutputPath
                }
            } else {
                & $ffmpeg.Source -y -i $temporaryVideoPath -stream_loop -1 -i $BgmPath `
                    -map '0:v:0' -map '1:a:0' -filter:a $audioFilter -t $durationValue `
                    -c:v copy -c:a aac -b:a 192k $OutputPath
            }
            if ($LASTEXITCODE -ne 0) {
                throw "FFmpeg 최종 영상 처리에 실패했습니다. 종료 코드: $LASTEXITCODE"
            }
        }
    } finally {
        Remove-Item -LiteralPath $concatListPath -Force -ErrorAction SilentlyContinue
        if ($temporaryVideoPath) {
            Remove-Item -LiteralPath $temporaryVideoPath -Force -ErrorAction SilentlyContinue
        }
        if ($temporaryAssPath) {
            Remove-Item -LiteralPath $temporaryAssPath -Force -ErrorAction SilentlyContinue
        }
    }

    Write-Host "사용한 세션: $sessionPath"
    if (-not [string]::IsNullOrWhiteSpace($BgmPath)) {
        Write-Host "사용한 BGM: $BgmPath"
    }
    if (-not [string]::IsNullOrWhiteSpace($LogoPath)) {
        Write-Host "사용한 로고: $LogoPath"
    }
    if (-not [string]::IsNullOrWhiteSpace($SubtitleConfigPath)) {
        Write-Host "사용한 자막 설정: $SubtitleConfigPath"
    }
    Write-Host "최종 출력: $OutputPath"
} catch {
    Write-Error $_
    exit 1
}
