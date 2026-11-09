# 슬라이딩 도어 천장 마감 편 정리 후보 조사

2026-11-09 · 사용자 최종 승인 기준. 조사 시점의 프로젝트 파일을 대상으로 했으며 설치된 node_modules 트리와 이번 보고서는 집계에서 제외했다. 설치 의존성은 package.json과 lockfile을 보존한다. 빈 public/references에는 조사할 파일이 없었다.

## 승인 및 참조 확인

최종 MP4는 ffprobe 기준 1080×1920, 30 fps, 1,358프레임, 45.266667초다. 파일명의 preview와 초기 QA 문서의 승인 대기 상태보다 최신 사용자 승인을 우선했다. SNS 세 플랫폼 문구와 커버도 승인 상태다.

src/NewFiveScenesPreviewV1.tsx의 pictures·voices 배열, Scene 2 분기, 최종 조립 QA를 대조했다. 아래 A의 TTS 5개와 장면 이미지 7개를 사용한다. 이전 Alnilam 후보와 Charon(A)·Sulafat(B)는 이 배열에서 제외된다. 신규 개별 Scene MP4 5개도 조립 및 비교를 위해 보존한다.

커버 스크립트와 2-A·4 편집 소스는 scene01-before-ai-v3-candidate.png를 사용한다. Scene 3 편집본은 이 원본과 승인 2-B v3를 함께 사용한다. 2-B의 국소 편집 원본 v2도 보존한다. 커버가 사용하는 프로젝트 외부 공통 간판·Pretendard Black·최초 레퍼런스는 커버 스크립트의 guide 및 sign_assets 경로에 있으며 이번 집계 밖이다.

최종 조립 기록에는 승인 엔딩 MP4의 내장 AAC 사용이 기재돼 있다. 엔딩 컴포넌트는 headquarters-normal-speed-hold.mp4와 ending-approved-v3.mp3를 참조하고 Overlay·fonts는 로고와 폰트 3종을 사용한다. 촬영 MOV와 엔딩 구현 파일도 B에 포함했다.

현재 소스와 프로젝트 스크립트의 파일명·확장자 없는 자산 키를 조사했다. 이전 코드에 직접 참조가 남으면 보류했고, 과거 검토 산출물은 문서 근거와 현행 입력 목록을 대조했다. 프로젝트 밖 역참조와 백업은 조사 범위 밖이다. 삭제 후보는 파일별 승인 대상으로, 여러 개를 함께 없애면 비교 이미지 재구성에 필요한 이전 원본도 사라질 수 있다.

## 집계

전체 282개. A 34개 · B 14개 · C 65개 · D 50개 · E 119개.
삭제 후보 논리 크기 합계 19,446,425바이트 (18.55 MiB).

## A. 필수 보존

- `docs/sliding-door-ceiling-sns-upload-v1.md` — 승인 결과·입력 또는 조립용 Scene 영상
- `package-lock.json` — 현행 편집·렌더·의존성 재현
- `package.json` — 현행 편집·렌더·의존성 재현
- `public/assets/audio/new-scene01-tts-v4-b.mp3` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/audio/new-scene02-tts-v3.mp3` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/audio/new-scene03-tts-v3.mp3` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/audio/new-scene04-tts-v3.mp3` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/audio/new-scene05-tts-v2.mp3` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/doormaster-sliding-ceiling-cover-v1.png` — 승인 결과·입력 또는 조립용 Scene 영상 · scripts/make-doormaster-cover-v1.py
- `public/assets/images/new-scene01-hook-v2.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/new-scene02-finished-v2-candidate.png` — 승인 2-B v3 손잡이 국소 편집의 직접 원본
- `public/assets/images/new-scene02-finished-v3-candidate.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx, src/NewScene03RealComparisonV1.tsx, src/NewScene03RealComparisonV2.tsx
- `public/assets/images/new-scene02-real-v3-a.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/new-scene02-result-v1.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/new-scene03-real-comparison-v2.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/new-scene04-hardware-v2.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/new-scene05-checklist-v1.png` — 승인 결과·입력 또는 조립용 Scene 영상 · src/NewFiveScenesPreviewV1.tsx
- `public/assets/images/scene01-before-ai-v3-candidate.png` — 승인 결과·입력 또는 조립용 Scene 영상 · scripts/make-doormaster-cover-v1.py, src/NewScene02RealV3A.tsx, src/NewScene03RealComparisonV1.tsx
- `public/assets/video/new-scene01-preview-v1.mp4` — 승인 결과·입력 또는 조립용 Scene 영상
- `public/assets/video/new-scene02-preview-v1.mp4` — 승인 결과·입력 또는 조립용 Scene 영상
- `public/assets/video/new-scene03-preview-v1.mp4` — 승인 결과·입력 또는 조립용 Scene 영상
- `public/assets/video/new-scene04-preview-v1.mp4` — 승인 결과·입력 또는 조립용 Scene 영상
- `public/assets/video/new-scene05-preview-v1.mp4` — 승인 결과·입력 또는 조립용 Scene 영상
- `public/assets/video/sliding-door-ceiling-check-new-five-scenes-preview-v1.mp4` — 승인 결과·입력 또는 조립용 Scene 영상
- `remotion.config.ts` — 현행 편집·렌더·의존성 재현
- `scripts/make-doormaster-cover-v1.py` — 현행 편집·렌더·의존성 재현
- `src/NewFiveScenesPreviewV1.tsx` — 현행 편집·렌더·의존성 재현
- `src/NewScene01HookV2.tsx` — 현행 편집·렌더·의존성 재현
- `src/NewScene02RealV3A.tsx` — 현행 편집·렌더·의존성 재현
- `src/NewScene02ResultV1.tsx` — 현행 편집·렌더·의존성 재현
- `src/NewScene03RealComparisonV2.tsx` — 현행 편집·렌더·의존성 재현
- `src/NewScene04HardwareV2.tsx` — 현행 편집·렌더·의존성 재현
- `src/NewScene145StillsV1.tsx` — 현행 편집·렌더·의존성 재현
- `tsconfig.json` — 현행 편집·렌더·의존성 재현

## B. 공통 자산 보존

- `public/assets/audio/ending-approved-v3.mp3` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · scripts/audio-qa-v1.py, src/daesan-ending/DaesanEnding.tsx
- `public/assets/fonts/Pretendard-ExtraBold.woff2` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/approved/fonts.ts
- `public/assets/fonts/Pretendard-Medium.woff2` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/approved/fonts.ts
- `public/assets/fonts/Pretendard-SemiBold.woff2` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/approved/fonts.ts
- `public/assets/logos/daesanlogo2.png` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · scripts/make-doormaster-cover-v1.py, src/daesan-ending/approved/HeadquartersOverlay.tsx
- `public/assets/video/IMG_3934.MOV` — 공통 엔딩 계보·진입점 또는 브랜드 자산
- `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` — 공통 엔딩 계보·진입점 또는 브랜드 자산
- `public/assets/video/headquarters-normal-speed-hold.mp4` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/DaesanEnding.tsx
- `src/daesan-ending/DaesanEnding.tsx` — 공통 엔딩 계보·진입점 또는 브랜드 자산
- `src/daesan-ending/approved/HeadquartersOverlay.tsx` — 공통 엔딩 계보·진입점 또는 브랜드 자산
- `src/daesan-ending/approved/brief.ts` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/approved/brief.ts
- `src/daesan-ending/approved/fonts.ts` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/approved/fonts.ts
- `src/daesan-ending/approved/tokens.ts` — 공통 엔딩 계보·진입점 또는 브랜드 자산 · src/daesan-ending/approved/tokens.ts
- `src/index.tsx` — 공통 엔딩 계보·진입점 또는 브랜드 자산

## C. 작업기록 보존

- `README.md` — 이력·출처·설정/QA 증빙 보존
- `docs/26.11.05수정.md` — 이력·출처·설정/QA 증빙 보존
- `docs/26.11.06수정.md` — 이력·출처·설정/QA 증빙 보존
- `docs/approved-tts-v1.json` — 이력·출처·설정/QA 증빙 보존
- `docs/audio-qa-v1.json` — 이력·출처·설정/QA 증빙 보존 · scripts/audio-qa-v1.py
- `docs/audio-qa-v2.json` — 이력·출처·설정/QA 증빙 보존 · scripts/audio-qa-v2.py
- `docs/audio-qa-v3.json` — 이력·출처·설정/QA 증빙 보존 · scripts/assemble-tts-v3.py
- `docs/audio-qa-v4.json` — 이력·출처·설정/QA 증빙 보존 · scripts/audio-qa-v4.py
- `docs/doormaster-sliding-ceiling-cover-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/ending-approved-reference.md` — 이력·출처·설정/QA 증빙 보존
- `docs/initialization-qa-v1.json` — 이력·출처·설정/QA 증빙 보존
- `docs/new-five-scenes-preview-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-five-scenes-tts-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-five-scenes-tts-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-five-scenes-tts-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene01-04-05-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene01-hook-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02-03-concepts-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02-03-concepts-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02-03-real-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02-finished-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02-finished-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02-finished-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene02b-03-image-plan-v1.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene03-real-comparison-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene03-real-comparison-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene04-05-final-review-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-scene04-hardware-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/new-tts-v2-voice-comparison-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene-plan-v1.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-after-ai-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-after-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-mask-layout-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-mask-layout-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-preview-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-preview-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-preview-v4-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-preview-v5-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-preview-v6-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-still-v2-prompt.txt` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-still-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene01-still-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene02-preview-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene02-preview-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene02-preview-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene02-preview-v4-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene03-finished-door-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene03-new-composition-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene03-preview-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene03-preview-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene04-preview-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene04-preview-v2-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/scene04-preview-v3-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/sliding-door-ceiling-check-preview-v1-qa.md` — 이력·출처·설정/QA 증빙 보존
- `docs/slim-copy-manifest-v1.json` — 이력·출처·설정/QA 증빙 보존
- `docs/tts-qa-v1.md` — 이력·출처·설정/QA 증빙 보존
- `docs/tts-qa-v2.md` — 이력·출처·설정/QA 증빙 보존
- `docs/tts-qa-v3.md` — 이력·출처·설정/QA 증빙 보존
- `docs/tts-qa-v4.md` — 이력·출처·설정/QA 증빙 보존
- `docs/tts-v2-preservation.json` — 이력·출처·설정/QA 증빙 보존 · scripts/audio-qa-v2.py
- `docs/tts-v3-preservation.json` — 이력·출처·설정/QA 증빙 보존 · scripts/assemble-tts-v3.py
- `docs/tts-v4-preservation.json` — 이력·출처·설정/QA 증빙 보존 · scripts/audio-qa-v4.py
- `public/assets/images/doormaster-sliding-ceiling-cover-v1-3x4-qa.png` — 승인 커버의 크롭·레퍼런스 검토 기록
- `public/assets/images/doormaster-sliding-ceiling-cover-v1-4x5-qa.png` — 승인 커버의 크롭·레퍼런스 검토 기록
- `public/assets/images/doormaster-sliding-ceiling-cover-v1-reference-qa.png` — 승인 커버의 크롭·레퍼런스 검토 기록

## D. 삭제 후보

### 오디오 · 19개 · 1,435,764바이트

|파일명|프로젝트 상대경로|형식|크기(B)|생성 목적|현행 사용·후보 근거|삭제 영향|복구 가능성|권장 조치|
|---|---|---|---:|---|---|---|---|---|
|new-five-scenes-tts-listening-v1.mp3|`public/assets/audio/new-five-scenes-tts-listening-v1.mp3`|mp3|154,124|청취용 합본|현행 입력 제외 · new-tts-v2-voice-comparison-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-five-scenes-tts-listening-v2.mp3|`public/assets/audio/new-five-scenes-tts-listening-v2.mp3`|mp3|148,844|청취용 합본|현행 입력 제외 · new-five-scenes-tts-v2-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-five-scenes-tts-listening-v3-review.mp3|`public/assets/audio/new-five-scenes-tts-listening-v3-review.mp3`|mp3|159,212|청취용 합본|현행 입력 제외 · new-five-scenes-tts-v3-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene01-tts-v1.mp3|`public/assets/audio/new-scene01-tts-v1.mp3`|mp3|17,184|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v1-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene01-tts-v2-candidate-a.mp3|`public/assets/audio/new-scene01-tts-v2-candidate-a.mp3`|mp3|20,832|이전 발화·화자 후보|현행 입력 제외 · new-tts-v2-voice-comparison-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene01-tts-v2-candidate-b.mp3|`public/assets/audio/new-scene01-tts-v2-candidate-b.mp3`|mp3|18,144|이전 발화·화자 후보|현행 입력 제외 · new-tts-v2-voice-comparison-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene01-tts-v3-b.mp3|`public/assets/audio/new-scene01-tts-v3-b.mp3`|mp3|17,664|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v2-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene01-tts-v4-a.mp3|`public/assets/audio/new-scene01-tts-v4-a.mp3`|mp3|17,376|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v3-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene02-tts-v1.mp3|`public/assets/audio/new-scene02-tts-v1.mp3`|mp3|36,192|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v1-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene02-tts-v2.mp3|`public/assets/audio/new-scene02-tts-v2.mp3`|mp3|33,312|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v2-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene03-tts-v1.mp3|`public/assets/audio/new-scene03-tts-v1.mp3`|mp3|32,064|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v1-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene03-tts-v2.mp3|`public/assets/audio/new-scene03-tts-v2.mp3`|mp3|31,584|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v2-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene04-tts-v1.mp3|`public/assets/audio/new-scene04-tts-v1.mp3`|mp3|26,976|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v1-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene04-tts-v2.mp3|`public/assets/audio/new-scene04-tts-v2.mp3`|mp3|24,576|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v2-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene05-tts-v1.mp3|`public/assets/audio/new-scene05-tts-v1.mp3`|mp3|41,472|이전 발화·화자 후보|현행 입력 제외 · new-five-scenes-tts-v1-qa.md|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-tts-v3-pause-025.mp3|`public/assets/audio/scene01-tts-v3-pause-025.mp3`|mp3|96,524|이전 발화·화자 후보|현행 입력 제외 · audio-qa-v3.json|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-tts-v3-pause-025.wav|`public/assets/audio/scene01-tts-v3-pause-025.wav`|wav|227,980|이전 발화·화자 후보|현행 입력 제외 · audio-qa-v3.json|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-tts-v3-pause-035.mp3|`public/assets/audio/scene01-tts-v3-pause-035.mp3`|mp3|98,924|이전 발화·화자 후보|현행 입력 제외 · audio-qa-v3.json|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-tts-v3-pause-035.wav|`public/assets/audio/scene01-tts-v3-pause-035.wav`|wav|232,780|이전 발화·화자 후보|현행 입력 제외 · audio-qa-v3.json|당시 발화·쉼의 직접 비교 소실|동일 파일 백업 미확인|개별 승인 후 정리|

### 비교·검토 이미지 · 16개 · 4,039,585바이트

|파일명|프로젝트 상대경로|형식|크기(B)|생성 목적|현행 사용·후보 근거|삭제 영향|복구 가능성|권장 조치|
|---|---|---|---:|---|---|---|---|---|
|new-scene02-03-concepts-v1-qa.png|`public/assets/images/new-scene02-03-concepts-v1-qa.png`|png|158,824|크롭·버전·프레임 비교|현행 입력 제외 · new-scene02-03-concepts-v1-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene02-result-v1-qa.png|`public/assets/images/new-scene02-result-v1-qa.png`|png|18,703|크롭·버전·프레임 비교|현행 입력 제외 · new-scene02b-03-image-plan-v1.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-before-v2-v3-comparison.png|`public/assets/images/scene01-before-v2-v3-comparison.png`|png|423,636|크롭·버전·프레임 비교|현행 입력 제외 · scene01-still-v3-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-before-v3-after-ai-v3-comparison.png|`public/assets/images/scene01-before-v3-after-ai-v3-comparison.png`|png|386,089|크롭·버전·프레임 비교|현행 입력 제외 · scene01-after-ai-v3-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-before-v3-after-mask-v2-comparison.png|`public/assets/images/scene01-before-v3-after-mask-v2-comparison.png`|png|364,502|크롭·버전·프레임 비교|현행 입력 제외 · scene01-mask-layout-v2-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-before-v3-after-v1-comparison.png|`public/assets/images/scene01-before-v3-after-v1-comparison.png`|png|384,372|크롭·버전·프레임 비교|현행 입력 제외 · scene01-after-v1-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-before-v3-mask-layout-v1-qa.png|`public/assets/images/scene01-before-v3-mask-layout-v1-qa.png`|png|354,606|크롭·버전·프레임 비교|현행 입력 제외 · scene01-mask-layout-v1-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v1-qa.png|`public/assets/images/scene01-preview-v1-qa.png`|png|53,866|크롭·버전·프레임 비교|현행 입력 제외 · 26.11.05수정.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v2-qa.png|`public/assets/images/scene01-preview-v2-qa.png`|png|168,556|크롭·버전·프레임 비교|현행 입력 제외 · scene01-preview-v2-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v3-qa.png|`public/assets/images/scene01-preview-v3-qa.png`|png|344,959|크롭·버전·프레임 비교|현행 입력 제외 · 26.11.06수정.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v4-qa.png|`public/assets/images/scene01-preview-v4-qa.png`|png|164,228|크롭·버전·프레임 비교|현행 입력 제외 · scene01-preview-v4-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene02-preview-v1-qa.png|`public/assets/images/scene02-preview-v1-qa.png`|png|194,435|크롭·버전·프레임 비교|현행 입력 제외 · 26.11.06수정.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene03-finished-door-v1-v2-comparison.png|`public/assets/images/scene03-finished-door-v1-v2-comparison.png`|png|401,151|크롭·버전·프레임 비교|현행 입력 제외 · scene03-finished-door-v2-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene03-finished-door-v2-upper-qa.png|`public/assets/images/scene03-finished-door-v2-upper-qa.png`|png|271,674|크롭·버전·프레임 비교|현행 입력 제외 · scene03-finished-door-v2-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene03-new-composition-v1-qa.png|`public/assets/images/scene03-new-composition-v1-qa.png`|png|303,309|크롭·버전·프레임 비교|현행 입력 제외 · scene03-new-composition-v1-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene04-preview-v1-qa.png|`public/assets/images/scene04-preview-v1-qa.png`|png|46,675|크롭·버전·프레임 비교|현행 입력 제외 · scene04-preview-v1-qa.md|QA 문서에서 해당 화면 재열람 제한|동일 파일 백업 미확인|개별 승인 후 정리|

### 중간 이미지 · 8개 · 11,122,945바이트

|파일명|프로젝트 상대경로|형식|크기(B)|생성 목적|현행 사용·후보 근거|삭제 영향|복구 가능성|권장 조치|
|---|---|---|---:|---|---|---|---|---|
|new-scene02-concept-v1.png|`public/assets/images/new-scene02-concept-v1.png`|png|108,308|이전 구도·디자인 검토|현행 입력 제외 · new-scene02-03-concepts-v1-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|new-scene03-comparison-v1.png|`public/assets/images/new-scene03-comparison-v1.png`|png|113,157|이전 구도·디자인 검토|현행 입력 제외 · new-scene02-03-concepts-v1-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-after-ai-v1-candidate.png|`public/assets/images/scene01-after-ai-v1-candidate.png`|png|1,638,316|이전 구도·디자인 검토|현행 입력 제외 · scene01-after-v1-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-after-ai-v3-candidate.png|`public/assets/images/scene01-after-ai-v3-candidate.png`|png|1,643,357|이전 구도·디자인 검토|현행 입력 제외 · scene01-after-ai-v3-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-after-mask-layout-v1.png|`public/assets/images/scene01-after-mask-layout-v1.png`|png|1,714,071|이전 구도·디자인 검토|현행 입력 제외 · scene01-mask-layout-v1-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-after-mask-layout-v2.png|`public/assets/images/scene01-after-mask-layout-v2.png`|png|2,283,736|이전 구도·디자인 검토|현행 입력 제외 · scene01-mask-layout-v2-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-before-ai-v2-candidate.png|`public/assets/images/scene01-before-ai-v2-candidate.png`|png|1,920,150|이전 구도·디자인 검토|현행 입력 제외 · scene01-still-v2-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|
|scene03-finished-door-ai-v1-candidate.png|`public/assets/images/scene03-finished-door-ai-v1-candidate.png`|png|1,701,850|이전 구도·디자인 검토|현행 입력 제외 · scene03-new-composition-v1-qa.md|이전 시안의 원본 픽셀 비교 제한|동일 파일 백업 미확인|개별 승인 후 정리|

### 이전 영상 · 7개 · 2,848,131바이트

|파일명|프로젝트 상대경로|형식|크기(B)|생성 목적|현행 사용·후보 근거|삭제 영향|복구 가능성|권장 조치|
|---|---|---|---:|---|---|---|---|---|
|scene01-preview-v1.mp4|`public/assets/video/scene01-preview-v1.mp4`|mp4|282,142|구 구성 장면/조립 검토|현행 입력 제외 · 26.11.05수정.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v2.mp4|`public/assets/video/scene01-preview-v2.mp4`|mp4|391,849|구 구성 장면/조립 검토|현행 입력 제외 · scene01-preview-v2-qa.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v3.mp4|`public/assets/video/scene01-preview-v3.mp4`|mp4|351,611|구 구성 장면/조립 검토|현행 입력 제외 · 26.11.06수정.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene01-preview-v4.mp4|`public/assets/video/scene01-preview-v4.mp4`|mp4|314,876|구 구성 장면/조립 검토|현행 입력 제외 · scene01-preview-v4-qa.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene02-preview-v1.mp4|`public/assets/video/scene02-preview-v1.mp4`|mp4|514,489|구 구성 장면/조립 검토|현행 입력 제외 · 26.11.06수정.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene04-preview-v1.mp4|`public/assets/video/scene04-preview-v1.mp4`|mp4|340,973|구 구성 장면/조립 검토|현행 입력 제외 · scene04-preview-v1-qa.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|
|scene04-preview-v2.mp4|`public/assets/video/scene04-preview-v2.mp4`|mp4|652,191|구 구성 장면/조립 검토|현행 입력 제외 · scene04-preview-v3-qa.md|당시 화면·인코딩 비교본 소실|동일 파일 백업 미확인|개별 승인 후 정리|

## E. 판단 보류

- `.DS_Store` — Finder 메타데이터. 콘텐츠 조사와 별개
- `public/.DS_Store` — Finder 메타데이터. 콘텐츠 조사와 별개
- `public/assets/.DS_Store` — Finder 메타데이터. 콘텐츠 조사와 별개
- `public/assets/audio/full-tts-qa-v1.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v1.py
- `public/assets/audio/full-tts-qa-v1.wav` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v1.py
- `public/assets/audio/full-tts-qa-v2.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v2.py
- `public/assets/audio/full-tts-qa-v2.wav` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v2.py
- `public/assets/audio/full-tts-qa-v3.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py
- `public/assets/audio/full-tts-qa-v3.wav` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py
- `public/assets/audio/full-tts-qa-v4.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v4.py
- `public/assets/audio/full-tts-qa-v4.wav` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v4.py
- `public/assets/audio/new-scene01-tts-v3-a.mp3` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/audio/scene01-tts-v1.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/tts-batch-v1.json
- `public/assets/audio/scene01-tts-v2.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v2.py, scripts/tts-batch-v2.json
- `public/assets/audio/scene01-tts-v3-part-a.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py, scripts/tts-batch-v3-parts.json
- `public/assets/audio/scene01-tts-v3-part-b.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py, scripts/tts-batch-v3-parts.json
- `public/assets/audio/scene01-tts-v4.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/audio-qa-v4.py, scripts/tts-batch-v4.json, src/Scene01PreviewV2.tsx
- `public/assets/audio/scene02-tts-v1.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/tts-batch-v1.json
- `public/assets/audio/scene02-tts-v2.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py, scripts/audio-qa-v2.py, scripts/audio-qa-v4.py
- `public/assets/audio/scene03-tts-v1.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py, scripts/audio-qa-v2.py, scripts/audio-qa-v4.py
- `public/assets/audio/scene04-tts-v1.mp3` — 프로젝트 소스·스크립트 참조 확인 · scripts/assemble-tts-v3.py, scripts/audio-qa-v2.py, scripts/audio-qa-v4.py
- `public/assets/images/new-five-scenes-final-review-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-five-scenes-v1-storyboard-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene01-02c-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene01-04-05-v1-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene01-hook-v1-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene01-hook-v1.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene01-hook-v2-mobile-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-03-concepts-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-03-real-comparison-v1-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-03-v1-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-a-b-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-before-after-v1-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-concept-v2.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-finished-v1-candidate.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-finished-v1-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-finished-v2-v3-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-handle-v2-v3-diff.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene02-handle-v2-v3-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-04-transition-review-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-04-v2-transition-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-comparison-v2.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-real-comparison-v1-mobile-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-real-comparison-v1.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-real-comparison-v2-mobile-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene03-real-v1-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene04-05-final-review-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene04-hardware-v1-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene04-hardware-v1.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene04-hardware-v2-mobile-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/new-scene05-mobile-review-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene01-ceiling-texture-v3.png` — 프로젝트 소스·스크립트 참조 확인 · src/Scene01PreviewV3.tsx
- `public/assets/images/scene01-preview-v5-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene01-preview-v6-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene02-preview-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene02-preview-v3-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene02-preview-v4-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene03-finished-door-ai-v2-candidate.png` — 프로젝트 소스·스크립트 참조 확인 · src/Scene03PreviewV2.tsx
- `public/assets/images/scene03-preview-v1-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene03-preview-v2-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene04-preview-v2-start-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene04-preview-v3-full-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/scene04-preview-v3-start-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/sliding-door-ceiling-check-preview-v1-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/images/sliding-door-ceiling-check-transitions-v1-qa.png` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/video/scene01-preview-v5.mp4` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/video/scene01-preview-v6.mp4` — 구 구성 승인 이력. 별도 폐기 결정 필요
- `public/assets/video/scene02-preview-v2.mp4` — 구 구성 승인 이력. 별도 폐기 결정 필요
- `public/assets/video/scene02-preview-v3.mp4` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/video/scene02-preview-v4.mp4` — 구 구성 승인 이력. 별도 폐기 결정 필요
- `public/assets/video/scene03-preview-v1.mp4` — 사용처 또는 복구 근거 추가 확인 필요
- `public/assets/video/scene03-preview-v2.mp4` — 구 구성 승인 이력. 별도 폐기 결정 필요
- `public/assets/video/scene04-preview-v3.mp4` — 구 구성 승인 이력. 별도 폐기 결정 필요
- `public/assets/video/sliding-door-ceiling-check-preview-v1.mp4` — 사용처 또는 복구 근거 추가 확인 필요
- `scripts/assemble-tts-v3.py` — 이전 버전 편집·QA 실행의 재현성
- `scripts/audio-qa-v1.py` — 이전 버전 편집·QA 실행의 재현성
- `scripts/audio-qa-v2.py` — 이전 버전 편집·QA 실행의 재현성
- `scripts/audio-qa-v4.py` — 이전 버전 편집·QA 실행의 재현성
- `scripts/generate_tts.py` — 프로젝트 소스·스크립트 참조 확인 · scripts/generate_tts.py
- `scripts/tts-batch-v1.json` — 이전 버전 편집·QA 실행의 재현성
- `scripts/tts-batch-v2.json` — 이전 버전 편집·QA 실행의 재현성
- `scripts/tts-batch-v3-parts.json` — 이전 버전 편집·QA 실행의 재현성
- `scripts/tts-batch-v4.json` — 이전 버전 편집·QA 실행의 재현성
- `src/NewMaintenanceConceptsV1.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/NewMaintenanceConceptsV2.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/NewScene03RealComparisonV1.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01MaskLayout.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01MaskLayoutV2.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01PreviewV2.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01PreviewV3.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01PreviewV4.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01PreviewV5.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01PreviewV6.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene01Test.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene02PreviewV1.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene02PreviewV2.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene02PreviewV3.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene02PreviewV4.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene03PreviewV1.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene03PreviewV2.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/Scene04PreviewV1.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/SlidingDoorDiagram.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/new-maintenance-stills-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/new-maintenance-stills-v2-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-mask-layout-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-mask-layout-v2-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-preview-v2-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-preview-v3-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-preview-v4-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-preview-v5-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-preview-v6-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene01-test-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene02-preview-v1-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene02-preview-v2-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene02-preview-v3-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene02-preview-v4-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene03-preview-v1-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene03-preview-v2-entry.tsx` — 이전 버전 편집·QA 실행의 재현성
- `src/scene04-preview-v1-entry.tsx` — 이전 버전 편집·QA 실행의 재현성

## 승인 필요 사항

D 목록의 파일만 유형 또는 개별 경로로 승인할 수 있다. 이전 승인 영상과 재현 의존성이 남은 E는 별도 판단 대상으로 둔다.

기존 조사 파일 282개의 작업 전후 SHA256이 모두 일치했다.
