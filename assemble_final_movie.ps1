[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$SessionFolder,

    [Parameter(Position = 1)]
    [string]$OutputPath
)

$ErrorActionPreference = 'Stop'

try {
    $ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
    if (-not $ffmpeg) {
        throw 'FFmpeg가 설치되어 있지 않거나 PATH에서 찾을 수 없습니다.'
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

        & $ffmpeg.Source -y -f concat -safe 0 -i $concatListPath -c copy $OutputPath
        if ($LASTEXITCODE -ne 0) {
            throw "FFmpeg 영상 결합에 실패했습니다. 종료 코드: $LASTEXITCODE"
        }
    } finally {
        Remove-Item -LiteralPath $concatListPath -Force -ErrorAction SilentlyContinue
    }

    Write-Host "완료: $OutputPath"
} catch {
    Write-Error $_
    exit 1
}
