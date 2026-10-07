# 소송각재 등급 / 품질 차이 — 독립 프로젝트

위치: Monorepo의 `projects/sosong-lumber-grade-shorts-v1/`
1080×1920 / 30fps / 영상 885프레임(29.5초). 원래 Preview v1·TTS·src·자산을 보존합니다.

## 설치 및 실행
Node.js/npm과 Chrome이 필요합니다. QA에는 Python 3, ffmpeg, ffprobe가 필요합니다.

```sh
# 이 프로젝트 루트에서 실행
npm ci
npm run typecheck
npm run preview
```

설치는 package-lock.json을 사용하는 `npm ci`로 수행합니다. node_modules는 복사하지 않습니다.
Remotion 4.0.523, React/ReactDOM 19.2.3을 사용합니다.
설치된 macOS Chrome을 기본으로 사용하며 다른 경로는 `REMOTION_BROWSER_EXECUTABLE`로 지정합니다.

## 기존 v1을 보존하는 렌더

```sh
npx --no-install remotion render src/index.ts SosongGrade out/sosong-lumber-grade-preview-v1-independent-check.mp4 --codec=h264 --crf=18 --audio-bitrate=192k --concurrency=2
```

위 검증 파일도 이미 있으면 새 출력명을 사용합니다. `npm run render:preview`는 보존된 v1 경로를
가리키므로 기존 v1에 재실행하지 않습니다. `setOverwriteOutput(false)`를 유지합니다.

## 독립 QA

```sh
python3 scripts/qa-preview.py --video out/sosong-lumber-grade-preview-v1-independent-check.mp4 --baseline out/sosong-lumber-grade-preview-v1.mp4 --version v2
```

v2 결과가 존재하면 다음 실행은 `--version v3` 등 새 버전을 사용합니다. QA v1/v2를 덮어쓰지 않습니다.
QA는 로컬 `out/qa/slim-copy-integrity-v2.json`에 기록된 기준 SHA256과 프로젝트 안의 파일만 읽습니다.
`docs/asset-sources.json`의 외부 경로는 원본 출처 기록이며 외부 파일이 없어도 Preview/Render/QA가 가능합니다.

기존 Scene TTS 6개, 엔딩 TTS, full-tts-qa-v1.mp3를 그대로 사용합니다. 재생성하지 않습니다.
TTS 생성기와 승인 문구는 이력용으로 보존합니다. 향후 TTS를 새로 생성할 경우에만
Google ADC와 Python google-auth/requests가 필요합니다. 인증정보는 포함하지 않습니다.

## 기록
- `docs/26.09.23수정.md`: 최초 구현과 독립 이전 기록
- `docs/asset-sources.json`: 역사적 출처와 기준 SHA256
- `src/timing.json`: Scene 타이밍
- `out/sosong-lumber-grade-preview-v1.mp4`: 기존 Preview v1
- `out/qa/`: 보존된 QA v1 및 독립 검증 v2

Git init/commit/push, 원본 삭제/이동, 신규 AI 이미지/영상·TTS 생성은 수행하지 않습니다.
