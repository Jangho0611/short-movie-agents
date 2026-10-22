# 승인 4개 파일 휴지통 이동 및 Git 사전 점검

## 정리 결과
승인된4개만 이동,합계810,836bytes. 원래상대경로구조유지,도착경로충돌없음. 이동전 일반파일·실제경로·비심볼릭링크·크기·보고서SHA대조. 이동후원본없음/도착파일해시동일. 휴지통비우기/영구삭제없음.

- `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/.DS_Store`
  - → `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/.DS_Store`
  - 8,196bytes, SHA256 `21c30e30a49b8d0cd53d9a3c983e6a9ff61287f2e4a87a4e467f18d438a45140` (이동전후동일)
- `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/.DS_Store`
  - → `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/public/.DS_Store`
  - 8,196bytes, SHA256 `c885c033318d50dbf1ab9ed2fc1dfda762b38aa7e297a49f1dca9505dfef25e6` (이동전후동일)
- `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/assets/.DS_Store`
  - → `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/public/assets/.DS_Store`
  - 6,148bytes, SHA256 `f20ca08810916d72bb0d71dbfaf8838ce94feb6adb6e2d9093893f75c97d0cf1` (이동전후동일)
- `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-reference-comparison.png`
  - → `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/public/covers/qa/cover-v1-reference-comparison.png`
  - 788,296bytes, SHA256 `ac8c3b8ca038c30970601f640ae5780e608a1a10a43f95a63f7996909813b7e8` (이동전후동일)

## 보존
실행직전 나머지프로젝트파일235개의SHA256이동후동일. 승인Previewv4/Coverv3/SNSv3/최종Scene/TTS/엔딩/간판/공식Reference/실행소스/설정/QA/작업기록 포함. node_modules디렉터리유지(내용전체해시재검사는생략). 추가판단Scene4check01/02/04도보호해시목록에포함. 보고서작성후날짜형작업기록에이번결과만추가예정. 전체재렌더없음. 직접자산은기존검토와불변해시로보존확인.

## Git 읽기전용 점검
- branch: `main`
- 프로젝트상태 236개. untracked 236개,합계166,717,628bytes. 상태스냅샷은이보고서/작업기록추가직전기준.
- Monorepo상태전체431개,다른프로젝트변경존재. 이번작업에서수정안함.
- 프로젝트내.git없음. add/commit/push/fetch/설정변경없음.

### 추적 대상 상태
```text
?? projects/doormaster-handle-replacement-v1/README.md
?? projects/doormaster-handle-replacement-v1/docs/26.10.22수정.md
?? projects/doormaster-handle-replacement-v1/docs/approved-plan-v3.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-execution-v1.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-final-review-v1.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-final-review-v1.md
?? projects/doormaster-handle-replacement-v1/docs/cleanup-preflight-v1.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-preflight-v1.md
?? projects/doormaster-handle-replacement-v1/docs/cover-v1-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/cover-v1-qa.md
?? projects/doormaster-handle-replacement-v1/docs/cover-v2-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/cover-v2-qa.md
?? projects/doormaster-handle-replacement-v1/docs/cover-v3-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/cover-v3-qa.md
?? projects/doormaster-handle-replacement-v1/docs/ending-README.md
?? projects/doormaster-handle-replacement-v1/docs/ending-canonical-sha256.json
?? projects/doormaster-handle-replacement-v1/docs/git-preflight-status-v1.md
?? projects/doormaster-handle-replacement-v1/docs/initialization-qa.json
?? projects/doormaster-handle-replacement-v1/docs/latch-correction-preservation-v2.json
?? projects/doormaster-handle-replacement-v1/docs/latch-correction-qa-v2.md
?? projects/doormaster-handle-replacement-v1/docs/preview-caption-input-lock-v1.json
?? projects/doormaster-handle-replacement-v1/docs/preview-caption-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/preview-caption-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-qa.md
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-timing.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v2-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v2-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v2-qa.md
?? projects/doormaster-handle-replacement-v1/docs/preview-v3-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v3-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/product-reference-report.md
?? projects/doormaster-handle-replacement-v1/docs/product-reference-sha256.json
?? projects/doormaster-handle-replacement-v1/docs/prompts/after-v1.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/before-v1.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/before-v2.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/scene03-position-v2.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/scene03-v1.txt
?? projects/doormaster-handle-replacement-v1/docs/scene01-before-v2-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/scene01-before-v2-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/scene02-after-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene02-input-baseline-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene02-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-full-frame-qa.md
?? projects/doormaster-handle-replacement-v1/docs/scene03-input-baseline-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-position-baseline-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-position-measurements-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-position-qa-v2.md
?? projects/doormaster-handle-replacement-v1/docs/scene03-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-baseline-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-design-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-grid-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-info-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-style-baseline-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-style-mechanical-qa-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-subtitle-style-qa-v2.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-tts-v7-input.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-tts-v8-input.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-tts-v9-input.json
?? projects/doormaster-handle-replacement-v1/docs/scene05-tts-v4-input.json
?? projects/doormaster-handle-replacement-v1/docs/slim-copy-manifest.json
?? projects/doormaster-handle-replacement-v1/docs/sns-upload-copy-v3.md
?? projects/doormaster-handle-replacement-v1/docs/sns-v3-save-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-breath-mechanical-v3.json
?? projects/doormaster-handle-replacement-v1/docs/tts-final-baseline-v2.json
?? projects/doormaster-handle-replacement-v1/docs/tts-final-input-v2.json
?? projects/doormaster-handle-replacement-v1/docs/tts-final-mechanical-qa-v2.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v7-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v7-mechanical.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v8-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v8-mechanical.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v9-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v9-mechanical.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-05-natural-v6-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-final-baseline-v6.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-final-input-v6.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-final-mechanical-v6.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-revised-baseline-v5.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-revised-input-v5.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-revised-mechanical-v5.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v4-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v5-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v7-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v8-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-breath-correction-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-generation-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-input-v1.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-natural-speech-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-natural-speech-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-part-analysis.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-part-input.json
?? projects/doormaster-handle-replacement-v1/package-lock.json
?? projects/doormaster-handle-replacement-v1/package.json
?? projects/doormaster-handle-replacement-v1/public/assets/audio/ending-approved-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v2.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v5.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v6.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v7.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v8.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/full-tts-qa-v9.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene01-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene02-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene03-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-part-a-tts-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-part-b-tts-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-part-c-tts-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v2.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v5.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v6.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v7.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v8.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v9.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-part-a-tts-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-part-b-tts-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-tts-v2.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-tts-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-tts-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/fonts/Pretendard-ExtraBold.woff2
?? projects/doormaster-handle-replacement-v1/public/assets/fonts/Pretendard-Medium.woff2
?? projects/doormaster-handle-replacement-v1/public/assets/fonts/Pretendard-SemiBold.woff2
?? projects/doormaster-handle-replacement-v1/public/assets/images/caption-after-patch-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/caption-removed-patch-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-components.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-drawing.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-manual.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-product.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/preview-caption-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/preview-v1-body-mobile-qa.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/preview-v1-final-mobile-qa.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/preview-v2-scene04-mobile-qa.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene01-before-candidate-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene01-before-candidate-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene01-before-v1-v2-qa.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene02-after-candidate-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene02-before-after-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-full-frame-qa.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-handle-removed-candidate-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-handle-removed-candidate-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-position-edit-input-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-position-qa-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-grid-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-check-01.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-check-02.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-check-03.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-check-04.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-final-backset-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-mobile-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-info-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-subtitle-reference-comparison-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-subtitle-style-qa-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/tts-breath-source-waveform-v3.png
?? projects/doormaster-handle-replacement-v1/public/assets/logos/daesanlogo2.png
?? projects/doormaster-handle-replacement-v1/public/assets/video/IMG_3934.MOV
?? projects/doormaster-handle-replacement-v1/public/assets/video/daesan-headquarters-ending-approved-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v2.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v3.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v4.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/handle-body-visual-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/headquarters-normal-speed-hold.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene01-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene02-caption-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene02-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene03-caption-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene03-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-grid-visual-layout2-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-grid-visual-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-info-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-info-preview-v2.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-info-preview-v3.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-info-preview-v4.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-simple-visual-v3.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene05-caption-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene05-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/covers/doormaster-handle-replacement-cover-v1.png
?? projects/doormaster-handle-replacement-v1/public/covers/doormaster-handle-replacement-cover-v2.png
?? projects/doormaster-handle-replacement-v1/public/covers/doormaster-handle-replacement-cover-v3.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-3x4.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-4x5.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-mobile-comparison.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-reference-same-scale.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-v2-comparison.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v2-3x4.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v2-4x5.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v2-v3-comparison.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v3-3x4.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v3-4x5.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v3-mobile.png
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/doormaster-series-sign-v2-outlined.svg
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/doormaster-series-sign-v2.png
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/doormaster-series-sign-v2.svg
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/font-settings-v2.json
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/fonts/Pretendard-Black.ttf
?? projects/doormaster-handle-replacement-v1/remotion.config.ts
?? projects/doormaster-handle-replacement-v1/scripts/assemble-caption-preview-v1.py
?? projects/doormaster-handle-replacement-v1/scripts/assemble-preview-v1.py
?? projects/doormaster-handle-replacement-v1/scripts/assemble-preview-v2.py
?? projects/doormaster-handle-replacement-v1/scripts/assemble-preview-v3.py
?? projects/doormaster-handle-replacement-v1/scripts/correct-tts-breath-v3.py
?? projects/doormaster-handle-replacement-v1/src/DoorMasterBodyCaptionV4.tsx
?? projects/doormaster-handle-replacement-v1/src/Scene04InfoV1.tsx
?? projects/doormaster-handle-replacement-v1/src/Scene04InfoV2.tsx
?? projects/doormaster-handle-replacement-v1/src/Scene04PreviewV1.tsx
?? projects/doormaster-handle-replacement-v1/src/caption-patch-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/cover-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/cover-v2.tsx
?? projects/doormaster-handle-replacement-v1/src/cover-v3.tsx
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/DaesanEnding.tsx
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/HeadquartersOverlay.tsx
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/brief.ts
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/fonts.ts
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/tokens.ts
?? projects/doormaster-handle-replacement-v1/src/index.tsx
?? projects/doormaster-handle-replacement-v1/src/preview-index-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-grid-v1-layout2.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-grid-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-index-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-index-v2.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-simple-v3.tsx
?? projects/doormaster-handle-replacement-v1/tsconfig.json
```

### 제외 규칙
```text
.gitignore:28:node_modules/	/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/node_modules
.gitignore:26:.DS_Store	/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/.DS_Store
.gitignore:26:.DS_Store	/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/.DS_Store
```
node_modules는Git제외이며로컬보존. OS메타데이터도제외. Git제외는삭제허가가아님.

### 10MiB 이상 파일 / LFS 검토
- `projects/doormaster-handle-replacement-v1/public/assets/video/IMG_3934.MOV`: 19,049,859bytes, `projects/doormaster-handle-replacement-v1/public/assets/video/IMG_3934.MOV: filter: unspecified`
- `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v1.mp4`: 11,982,428bytes, `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v1.mp4: filter: unspecified`
- `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v2.mp4`: 11,628,515bytes, `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v2.mp4: filter: unspecified`
- `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v3.mp4`: 11,135,432bytes, `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v3.mp4: filter: unspecified`
- `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v4.mp4`: 11,215,027bytes, `projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v4.mp4: filter: unspecified`

보존대형바이너리는정확경로단위LFS가필요하다. filter=unspecified인경로는현재LFS미적용이며이번단계에서.gitattributes변경안함. Git승인시보존범위/LFS포인터/원격상태를검증해야한다. 구버전Preview도현재재현또는이력보존대상이므로자동제외하지않는다.

### 민감정보
고위험패턴/민감파일명확인결과: []. 값은출력하지않았다. 제한적정적검사이며모든비밀정보부재를보장하지않음. 실제stage전diff및인증설정/경로재검사필요.

## 다음 승인 필요
Git작업과정확프로젝트경로stage범위,LFS설정변경은별도승인후실행. 휴지통파일복원은원본경로충돌/SHA확인후가능하며휴지통비우기승인은없다. 추가정리없음.
