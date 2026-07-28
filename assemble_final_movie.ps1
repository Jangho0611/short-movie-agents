[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$SessionFolder,

    [Parameter(Position = 1)]
    [string]$OutputPath,

    [string]$BgmPath,

    [double]$BgmVolume = 1.0,

    [double]$BgmFadeOutSeconds = 2.0,

    [string]$LogoPath
)

$ErrorActionPreference = 'Stop'

try {
    $ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
    if (-not $ffmpeg) {
        throw 'FFmpeg가 설치되어 있지 않거나 PATH에서 찾을 수 없습니다.'
    }

    $ffprobe = $null
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
            [string]::IsNullOrWhiteSpace($LogoPath)) {
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

            if (-not [string]::IsNullOrWhiteSpace($LogoPath)) {
                $logoFilter = "[1:v]format=rgba[logo];" +
                    "[logo][0:v]scale2ref=w='min(iw,main_w*0.15)':h=-1[scaled][base];" +
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
    }

    Write-Host "사용한 세션: $sessionPath"
    if (-not [string]::IsNullOrWhiteSpace($BgmPath)) {
        Write-Host "사용한 BGM: $BgmPath"
    }
    if (-not [string]::IsNullOrWhiteSpace($LogoPath)) {
        Write-Host "사용한 로고: $LogoPath"
    }
    Write-Host "최종 출력: $OutputPath"
} catch {
    Write-Error $_
    exit 1
}
