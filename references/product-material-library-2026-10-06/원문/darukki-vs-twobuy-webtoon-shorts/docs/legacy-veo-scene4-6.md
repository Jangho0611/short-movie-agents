# Scene 4~6 legacy Veo 실행 메모

## 공통 고정 설정

- 실행기: `scripts/generate-vertex-video.mjs`
- 모델 기본값: `veo-3.1-fast-generate-001`
- 9:16, 720p, 24fps, 4초, 오디오 없음
- start image 필수
- last frame은 필요한 Scene에서만 `--last-frame`으로 전달
- 한 프로세스당 `generateVideos` 제출 1회
- 자동 재시도 없음
- 출력 파일이 이미 있으면 실행 거부
- Scene별 승인 프롬프트는 별도 `.txt` 파일로 저장하며 문체를 임의 변경하지 않음
- 공통 프롬프트 골격: `prompts/veo/legacy-preservation-template.txt`

## 실행 순서

### 1. start frame만 사용하는 dry-run

```sh
node scripts/generate-vertex-video.mjs \
  --image public/references/sceneNN-start-v1.png \
  --prompt-file prompts/veo/sceneNN-legacy-prompt-v1.txt \
  --out public/assets/video/sceneNN-veo-legacy-v1.mp4
```

### 2. start + last frame을 사용하는 dry-run

```sh
node scripts/generate-vertex-video.mjs \
  --image public/references/sceneNN-start-v1.png \
  --last-frame public/references/sceneNN-end-v1.png \
  --prompt-file prompts/veo/sceneNN-legacy-prompt-v1.txt \
  --out public/assets/video/sceneNN-veo-legacy-v1.mp4
```

### 3. 사용자 승인 후 실제 1회 제출

위에서 검증한 명령 끝에만 `--yes`를 추가한다. 실패해도 같은 명령을 자동으로 다시 실행하지 않는다.

## Scene 3 후처리 메모

- 대상: `public/assets/video/scene03-veo-legacy-v1.mp4`
- 마지막 약 0.4초에 캐릭터 블러가 있음
- Veo 재생성하지 않음
- Remotion 연결 시 약 3.5~3.6초까지만 영상 구간을 사용하고, 이후에는 직전 정상 프레임을 hold하는 방식을 권장
