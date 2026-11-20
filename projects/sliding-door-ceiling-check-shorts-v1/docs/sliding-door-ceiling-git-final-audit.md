# 슬라이딩 도어 천장 마감 편 최종 Git 감사

2026-11-09 · 루트 main. 로컬 HEAD, 로컬 origin/main 및 git ls-remote로 조회한 원격 main 모두 `37ec3620e97f8c4c9a7ddc0b18d2a0438d8d9de6`. 추적 파일의 staged/unstaged 변경 0개. 프로젝트 추적 파일 62개 모두 HEAD blob과 현재 파일의 바이트 일치.

조사 시작 시 프로젝트 미추적 100개, 외부 263개. 이 보고서 작성으로 내부 101개, 모노레포 합계 364개. 총계에는 Git 제외된 설치 환경이 들어가지 않는다.

## 승인본 및 백업 범위

이전 최종 작업기록의 승인·직접 자산 30개 SHA256 일치. 승인 전체 MP4, Scene MP4 5개, TTS 5개, 커버, Scene 정지 이미지, SNS 문서와 엔딩 직접 자산이 HEAD에 있다. 제작에 사용된 추적 소스·설정도 아래 명단에 포함된다. 편집 계보의 누락은 상부 구조 이미지 v3를 생성할 때 입력한 v2 원본이며 scene01-still-v3-qa.md에 실제 입력이 명시돼 있다. 완성 PNG 재사용과 과거 생성 과정 보존은 서로 다른 요구다.

- `docs/sliding-door-ceiling-sns-upload-v1.md`
- `package-lock.json`
- `package.json`
- `public/assets/audio/ending-approved-v3.mp3`
- `public/assets/audio/new-scene01-tts-v4-b.mp3`
- `public/assets/audio/new-scene02-tts-v3.mp3`
- `public/assets/audio/new-scene03-tts-v3.mp3`
- `public/assets/audio/new-scene04-tts-v3.mp3`
- `public/assets/audio/new-scene05-tts-v2.mp3`
- `public/assets/fonts/Pretendard-ExtraBold.woff2`
- `public/assets/fonts/Pretendard-Medium.woff2`
- `public/assets/fonts/Pretendard-SemiBold.woff2`
- `public/assets/images/doormaster-sliding-ceiling-cover-v1.png`
- `public/assets/images/new-scene01-hook-v2.png`
- `public/assets/images/new-scene02-finished-v2-candidate.png`
- `public/assets/images/new-scene02-finished-v3-candidate.png`
- `public/assets/images/new-scene02-real-v3-a.png`
- `public/assets/images/new-scene02-result-v1.png`
- `public/assets/images/new-scene03-real-comparison-v2.png`
- `public/assets/images/new-scene04-hardware-v2.png`
- `public/assets/images/new-scene05-checklist-v1.png`
- `public/assets/images/scene01-before-ai-v3-candidate.png`
- `public/assets/logos/daesanlogo2.png`
- `public/assets/video/IMG_3934.MOV`
- `public/assets/video/daesan-headquarters-ending-approved-v1.mp4`
- `public/assets/video/headquarters-normal-speed-hold.mp4`
- `public/assets/video/new-scene01-preview-v1.mp4`
- `public/assets/video/new-scene02-preview-v1.mp4`
- `public/assets/video/new-scene03-preview-v1.mp4`
- `public/assets/video/new-scene04-preview-v1.mp4`
- `public/assets/video/new-scene05-preview-v1.mp4`
- `public/assets/video/sliding-door-ceiling-check-new-five-scenes-preview-v1.mp4`
- `remotion.config.ts`
- `scripts/make-doormaster-cover-v1.py`
- `src/NewFiveScenesPreviewV1.tsx`
- `src/NewScene01HookV2.tsx`
- `src/NewScene02RealV3A.tsx`
- `src/NewScene02ResultV1.tsx`
- `src/NewScene03RealComparisonV2.tsx`
- `src/NewScene04HardwareV2.tsx`
- `src/NewScene145StillsV1.tsx`
- `src/daesan-ending/DaesanEnding.tsx`
- `src/daesan-ending/approved/HeadquartersOverlay.tsx`
- `src/daesan-ending/approved/brief.ts`
- `src/daesan-ending/approved/fonts.ts`
- `src/daesan-ending/approved/tokens.ts`
- `src/index.tsx`
- `tsconfig.json`

## 프로젝트 내부 미추적 파일

중복 집계를 피하기 위해 A는 최종 자산의 재현 계보, C는 추가 백업 권장, B는 그 밖의 보존 기록으로 배정했다. D는 로컬 실행환경, E는 정리 후보, F는 추가 판단이다. 조사 시작 기준 A 1개, B 46개, C 9개, D 0개, E 0개, F 44개. 이 감사 보고서는 작성 후 B에 1개 추가된다. 현재 8개 MP4와 6개 오디오는 전부 추적 중이다. 추가 정리 권장 파일은 0개다.

|분류|프로젝트 상대경로|유형|바이트|용도·승인본과의 관계|Git 권장 조치|
|---|---|---|---:|---|---|
|A|public/assets/images/scene01-before-ai-v2-candidate.png|.png|1920150|상부 구조 v3의 실제 생성 입력. 최종 MP4 조립은 승인 v3 사용|계보 복원용 추적 권장|
|B|README.md|.md|414|초기 프로젝트 안내·당시 상태|이력 보존, 아카이브 추적 범위 승인|
|B|docs/approved-tts-v1.json|.json|684|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/audio-qa-v1.json|.json|3865|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/audio-qa-v2.json|.json|4898|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/audio-qa-v3.json|.json|990|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/audio-qa-v4.json|.json|5053|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/initialization-qa-v1.json|.json|299|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-five-scenes-tts-v1-qa.md|.md|3767|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-scene02-03-concepts-v1-qa.md|.md|2212|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-scene02-03-concepts-v2-qa.md|.md|2135|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-scene02-finished-v1-qa.md|.md|1676|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-scene02b-03-image-plan-v1.md|.md|4765|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-scene03-real-comparison-v1-qa.md|.md|2147|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/new-tts-v2-voice-comparison-qa.md|.md|3323|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene-plan-v1.md|.md|3568|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-after-ai-v3-qa.md|.md|4146|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-after-v1-qa.md|.md|3317|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-mask-layout-v1-qa.md|.md|2095|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-mask-layout-v2-qa.md|.md|1793|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-preview-v2-qa.md|.md|1741|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-preview-v3-qa.md|.md|2024|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-preview-v4-qa.md|.md|1620|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-preview-v5-qa.md|.md|1757|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-preview-v6-qa.md|.md|1825|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-still-v2-prompt.txt|.txt|1434|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene01-still-v2-qa.md|.md|1153|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene02-preview-v1-qa.md|.md|1911|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene02-preview-v2-qa.md|.md|1752|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene02-preview-v3-qa.md|.md|1851|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene02-preview-v4-qa.md|.md|1308|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene03-finished-door-v2-qa.md|.md|4026|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene03-new-composition-v1-qa.md|.md|3854|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene03-preview-v1-qa.md|.md|1791|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene03-preview-v2-qa.md|.md|3352|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene04-preview-v1-qa.md|.md|3985|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene04-preview-v2-qa.md|.md|2582|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/scene04-preview-v3-qa.md|.md|4257|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/sliding-door-ceiling-check-preview-v1-qa.md|.md|4252|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/slim-copy-manifest-v1.json|.json|6485|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-qa-v1.md|.md|1528|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-qa-v2.md|.md|1887|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-qa-v3.md|.md|1579|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-qa-v4.md|.md|1615|기획·생성 입력·버전별 QA 작업기록|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-v2-preservation.json|.json|650|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-v3-preservation.json|.json|1018|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|B|docs/tts-v4-preservation.json|.json|1808|이전 설정·측정·보존 스냅샷|이력 보존, 아카이브 추적 범위 승인|
|C|docs/26.11.05수정.md|.md|3925|제작일 기록|선별 백업 권장|
|C|docs/26.11.06수정.md|.md|624|제작일 기록|선별 백업 권장|
|C|docs/new-scene02-finished-v2-qa.md|.md|1830|승인 자산의 제작 계보·시각 검토 증빙|선별 백업 권장|
|C|docs/new-scene04-05-final-review-qa.md|.md|3362|승인 자산의 제작 계보·시각 검토 증빙|선별 백업 권장|
|C|docs/scene01-still-v3-qa.md|.md|3079|승인 자산의 제작 계보·시각 검토 증빙|선별 백업 권장|
|C|public/assets/images/doormaster-sliding-ceiling-cover-v1-3x4-qa.png|.png|1169106|승인 커버의 크롭·레퍼런스 비교 증빙|선별 백업 권장|
|C|public/assets/images/doormaster-sliding-ceiling-cover-v1-4x5-qa.png|.png|1123197|승인 커버의 크롭·레퍼런스 비교 증빙|선별 백업 권장|
|C|public/assets/images/doormaster-sliding-ceiling-cover-v1-reference-qa.png|.png|1110119|승인 커버의 크롭·레퍼런스 비교 증빙|선별 백업 권장|
|C|scripts/generate_tts.py|.py|4840|기존 ADC 기반 TTS 생성 도구. 완성 MP3 재생에는 불필요|선별 백업 권장|
|F|scripts/assemble-tts-v3.py|.py|2804|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/audio-qa-v1.py|.py|2260|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/audio-qa-v2.py|.py|2299|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/audio-qa-v4.py|.py|2296|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/tts-batch-v1.json|.json|441|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/tts-batch-v2.json|.json|262|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/tts-batch-v3-parts.json|.json|149|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|scripts/tts-batch-v4.json|.json|114|구 TTS 입력·비교 또는 QA 실행용|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/NewMaintenanceConceptsV1.tsx|.tsx|4087|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/NewMaintenanceConceptsV2.tsx|.tsx|4181|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/NewScene03RealComparisonV1.tsx|.tsx|1921|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01MaskLayout.tsx|.tsx|2049|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01MaskLayoutV2.tsx|.tsx|2185|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01PreviewV2.tsx|.tsx|2044|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01PreviewV3.tsx|.tsx|2045|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01PreviewV4.tsx|.tsx|1528|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01PreviewV5.tsx|.tsx|1464|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01PreviewV6.tsx|.tsx|1355|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene01Test.tsx|.tsx|1845|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene02PreviewV1.tsx|.tsx|2086|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene02PreviewV2.tsx|.tsx|2053|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene02PreviewV3.tsx|.tsx|1974|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene02PreviewV4.tsx|.tsx|1983|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene03PreviewV1.tsx|.tsx|2100|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene03PreviewV2.tsx|.tsx|1854|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/Scene04PreviewV1.tsx|.tsx|2984|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/SlidingDoorDiagram.tsx|.tsx|2057|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/new-maintenance-stills-entry.tsx|.tsx|315|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/new-maintenance-stills-v2-entry.tsx|.tsx|315|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-mask-layout-entry.tsx|.tsx|280|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-mask-layout-v2-entry.tsx|.tsx|288|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-preview-v2-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-preview-v3-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-preview-v4-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-preview-v5-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-preview-v6-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene01-test-entry.tsx|.tsx|256|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene02-preview-v1-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene02-preview-v2-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene02-preview-v3-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene02-preview-v4-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene03-preview-v1-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene03-preview-v2-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|
|F|src/scene04-preview-v1-entry.tsx|.tsx|276|구 장면 편집·렌더 진입점|과거 편집·QA 재실행 수요 확인 후 추적 결정|

## LFS 및 실행환경

공통 엔딩 촬영 원본은 `public/assets/video/IMG_3934.MOV`. 크기 19,049,859 B, Git 추적 중이며 HEAD의 일반 blob OID는 `cea881e32e04c6907d1e067604923114dfaed781`다. 저장된 blob과 로컬 원본을 직접 대조했다. git check-attr filter는 unspecified. 루트 .gitattributes는 일부 대형 자산의 개별 경로에 LFS를 지정한다. 신규 보존 바이너리 10 MiB 이상은 신규 파일의 정확한 경로에 규칙을 적용하고 stage 시 포인터 OID·크기와 실제 파일을 검증하는 것이 공통 워크플로다. 기존 MOV 처리는 별도 결정 사항이다.

node_modules는 .gitignore의 node_modules/ 규칙으로 제외되는 로컬 실행환경이다. package.json과 package-lock.json은 추적 중이다. §8.1의 CLEAN/SYNC 중 CLEAN 조건 미충족으로 현 시점 Slim 삭제 대상에서 제외한다.

## 모노레포 상태 및 승인 사항

다른 프로젝트는 Git이 반환한 상대경로 목록으로만 집계했다. 외부 미추적 파일이 263개이므로 이 프로젝트의 101개를 모두 처리해도 모노레포는 dirty다. 외부 프로젝트별 수량: {'door-finish-color-difference-shorts-v1': 257, 'pocket-door-handle-reinforcement-shorts-v1': 6}.

사용자 결정 대상은 A+C의 선별 백업, B의 추가 아카이브 범위, F의 이전 소스 보존 정책이다. 현재 승인 결과물 전달을 위한 긴급 복구 작업은 없다.
