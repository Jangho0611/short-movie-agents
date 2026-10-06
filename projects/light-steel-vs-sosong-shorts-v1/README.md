# 경량철골 vs 소송각재 — 독립 Slim Copy

현재 단계: TTS v1 보존 및 독립 실행환경 준비. 본편 Scene/Composition/진입점은 아직 구현하지 않음.

## 실행환경
기존 sosong-lumber-grade-shorts-v1의 고정 package/lockfile과 TypeScript/Remotion 설정을 사용한다.
`npm ci --no-audit --no-fund`로 프로젝트 내부에 의존성을 설치하고 `npm run typecheck`로 검증한다.
다른 프로젝트의 node_modules, 소스, 공통 자산을 런타임 참조하지 않는다.
본편 구현 전이므로 preview/render 명령은 등록하지 않았다. Git 초기화 없음.

## 승인 자산
- src/scene5/: 요청된 기존 Scene5Ending과 직접 의존 소스 원본 보존(24fps, 136프레임). 신규 구현 아님.
- public/assets/fonts/: Pretendard Medium/SemiBold/Bold/ExtraBold.
- public/assets/logos/daesanlogo2.png
- public/assets/audio/scene06-tts-v3.mp3: 기존 승인 엔딩 음원 그대로 복사.
엔딩 자산은 보관만 하며 현재 본편에 배치하거나 렌더하지 않는다.

## TTS v1
Google Cloud TTS, ko-KR-Chirp3-HD-Alnilam, speakingRate 1.0, pitch 미지정.
Scene 1: 4.464초 / Scene 2: 6.216초 / Scene 3: 6.624초 / Scene 4: 6.168초 / Scene 5: 7.536초.
총 31.008초. full-tts-qa-v1.mp3 포함 기존 음원은 바이트 그대로 보존.
Scene 5 “용도입니다. / 작업에 맞는” 사이 약 1.151초 무음은 수정하지 않음.
입력 및 실측 기록: scripts/tts-input-v1.json, scripts/tts-measurements-v1.json.
복사 원본 경로는 docs/slim-copy-integrity-v1.json의 출처 기록으로만 사용한다.
