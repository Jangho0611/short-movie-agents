# Short Movie Agents Windows 설치 및 실행 가이드

이 문서는 Windows, VS Code, PowerShell, `uv`, Python 3.13, ADK 1.31.1, FFmpeg 환경을 기준으로 합니다. 모든 명령은 VS Code의 PowerShell 터미널에서 실행합니다.

## 1. 필수 도구 확인

PowerShell에서 다음 명령을 차례로 실행합니다.

```powershell
git --version
code --version
winget --version
```

명령을 찾을 수 없다면 Git과 VS Code를 설치한 뒤 VS Code를 다시 시작합니다. `winget`은 최신 Windows의 앱 설치 관리자(App Installer)에 포함되어 있습니다.

## 2. uv 설치

```powershell
winget install --id astral-sh.uv --exact --source winget
```

설치 후 VS Code를 완전히 종료했다가 다시 열고 확인합니다.

```powershell
uv --version
```

## 3. 저장소 복제 및 프로젝트 열기

개인 저장소 접근 권한이 있는 GitHub 계정으로 인증해야 합니다.

```powershell
git clone https://github.com/Jangho0611/short-movie-agents.git
Set-Location .\short-movie-agents
code .
```

새 VS Code 창에서 **터미널 > 새 터미널**을 열고 이후 명령을 실행합니다.

## 4. Python 환경 설치

```powershell
uv sync --dev
uv run python --version
uv run adk --version
```

검증 환경의 버전은 Python 3.13과 ADK 1.31.1입니다.

## 5. 환경변수 설정

템플릿을 `.env`로 복사하고 VS Code에서 엽니다.

```powershell
Copy-Item .\.env-template .\.env
code .\.env
```

`.env`에 다음 값을 설정하고 저장합니다.

```dotenv
GOOGLE_GENAI_USE_VERTEXAI=FALSE
GOOGLE_API_KEY=실제*API*키
```

`실제*API*키` 부분만 본인의 Google API 키로 바꿉니다.

> **경고:** `.env`와 실제 API 키를 Git에 커밋하거나 GitHub에 올리지 마세요. 화면 공유, 로그, 문서에도 실제 키를 기록하지 마세요.

## 6. ADK 서버 실행

프로젝트 폴더의 PowerShell 터미널에서 실행합니다.

```powershell
uv run adk web . --port 8501 --reload_agents
```

브라우저에서 다음 주소로 접속합니다.

```text
http://127.0.0.1:8501
```

## 7. 영상 생성

1. 에이전트 목록에서 `app`을 선택합니다.
2. **New Session**을 눌러 새 세션을 만듭니다.
3. 만들고 싶은 짧은 영상의 주제와 요구사항을 입력합니다.
4. 생성된 스토리를 확인하고 승인합니다.
5. 생성된 각본을 확인하고 승인합니다.
6. 영상 생성 비용을 확인한 뒤 다음 문구를 그대로 입력합니다.

```text
각본을 승인합니다. 영상 생성 비용 발생에 동의하며 video_agent를 호출해 영상 생성을 진행하세요.
```

장면 영상은 다음 위치에 생성됩니다.

```text
output\세션ID\scene_N.mp4
```

`세션ID`는 실제 생성된 폴더 이름으로 확인합니다.

## 8. FFmpeg 설치

새 PowerShell 터미널에서 실행합니다.

```powershell
winget install --id Gyan.FFmpeg --source winget
```

설치 후 VS Code를 완전히 종료했다가 다시 열고 확인합니다.

```powershell
ffmpeg -version
```

## 9. 최종 영상 조립

모든 `scene_N.mp4`가 생성되었는지 확인한 뒤 프로젝트 폴더에서 실행합니다. `세션ID`를 실제 폴더 이름으로 바꿉니다.

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\assemble_final_movie.ps1 -SessionFolder "output\세션ID"
```

최종 영상은 다음 위치에 생성됩니다.

```text
output\세션ID\final_movie.mp4
```

## 10. 서버 종료 및 재실행

서버가 실행 중인 PowerShell 터미널에서 `Ctrl + C`를 눌러 종료합니다.

다시 실행할 때는 VS Code에서 프로젝트 폴더를 열고 PowerShell 터미널에서 다음 명령을 실행합니다.

```powershell
Set-Location .\short-movie-agents
uv run adk web . --port 8501 --reload_agents
```

이미 터미널이 프로젝트 폴더에 있다면 `Set-Location` 명령은 생략합니다.

## 문제 해결

### `uv` 명령을 찾을 수 없음

VS Code를 완전히 종료했다가 다시 엽니다. 계속 실패하면 uv를 다시 설치하고 새 PowerShell 터미널에서 확인합니다.

```powershell
winget install --id astral-sh.uv --exact --source winget
uv --version
```

### `Failed to fetch`

인터넷 연결, 회사 프록시 또는 방화벽을 확인한 뒤 다시 동기화합니다.

```powershell
uv sync --dev
```

계속 실패하면 오류에 표시된 패키지 서버나 Google API 접속이 차단되었는지 확인합니다.

### 8501 포트 중복

8501 포트를 사용 중인 프로세스를 확인합니다.

```powershell
Get-NetTCPConnection -LocalPort 8501 -ErrorAction SilentlyContinue
```

기존 ADK 서버 터미널에서 `Ctrl + C`로 종료합니다. 종료할 수 없다면 다른 포트로 실행하고 같은 포트로 접속합니다.

```powershell
uv run adk web . --port 8502 --reload_agents
```

```text
http://127.0.0.1:8502
```

### API 키 미저장

`.env` 파일이 프로젝트 루트에 있는지 확인하고 다시 엽니다.

```powershell
Test-Path .\.env
code .\.env
```

`GOOGLE_GENAI_USE_VERTEXAI=FALSE`와 `GOOGLE_API_KEY` 설정을 확인하여 저장한 뒤 서버를 재실행합니다. 실제 API 키는 터미널에 출력하거나 Git에 추가하지 않습니다.

### 일부 장면만 실패

`output\세션ID`에서 생성된 장면을 확인합니다.

```powershell
Get-ChildItem ".\output\세션ID\scene_*.mp4" | Sort-Object Name
```

ADK 세션에서 실패한 장면 번호를 지정해 다시 생성하도록 요청합니다. 필요한 장면이 모두 생성된 다음 최종 영상 조립 명령을 다시 실행합니다.

### `ffmpeg` 명령을 찾을 수 없음

VS Code를 완전히 종료했다가 다시 엽니다. 계속 실패하면 FFmpeg를 다시 설치하고 새 PowerShell 터미널에서 확인합니다.

```powershell
winget install --id Gyan.FFmpeg --source winget
ffmpeg -version
```
