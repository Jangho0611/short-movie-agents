# v2 렌더 / QA — 2026-09-18

- Composition: `src/index-v2.tsx`, `XpsVsEpsTestV2`; timing: `src/timing-v2.ts`.
- 결과: `public/assets/video/xps-vs-eps-test-v2.mp4`.
- 1080×1920, 30fps, H.264/AAC, 805 video frames.
- Scene duration: 151 / 139 / 110 / 120 / 115 frames = 5.0333 / 4.6333 / 3.6667 / 4.0000 / 3.8333초.
- 본편 635 frames = 21.1667초. 승인 엔딩 170 frames = 5.6667초 유지.
- 영상 트랙 총 26.8333초; AAC 패킷 패딩을 포함한 MP4 컨테이너 26.8800초.
- TTS 파일 실측: 4.824 / 4.416 / 3.456 / 3.768 / 3.624초, 합계 20.088초(파일 내 무음 포함). rate 1.0 유지. 모든 음원은 각 Scene 안에 들어감.
- 첫 프레임/1초/각 Scene/엔딩 및 전환 경계 실제 렌더 프레임을 이미지로 확인. 핑크 XPS 왼쪽, 흰색 EPS 오른쪽 유지. 주요 텍스트/자막 겹침 없음, 자막 최대 2줄.
- Hook 질문은 첫 프레임부터 시각적으로 표시. 전체 질문 TTS는 4.824초이며 1~2초로 가속하지 않음.
- 전체 영상·오디오 ffmpeg 디코딩 성공. 평균 음량 -23.9dB, 최대 -4.7dB. 청취 기반 발음/억양 QA는 수행하지 않음.
- 기술 표현: 특정 성능 수치/가격/절대 방수/항상 우수 주장 없음. EPS 비드 내부도 독립기포임을 화면에 표시. Wiki와 공식 근거는 fact-check-v2.md에서 분리.
- v1 MP4, index.tsx, timing.ts, Ending.tsx, Scene5Ending.tsx, brief.ts, fonts.ts, tokens.ts, 공통 엔딩 음원/로고 SHA-256이 변경 전과 일치.
- 엔딩 첫 프레임의 배경만 보이는 도입 구간을 포함해 기존 컴포넌트/내부 타이밍 그대로 재사용.
- 기존 v1/기존 공통 엔딩 파일 및 공통 가이드/Wiki 원본 수정 없음. AI 이미지/영상 생성, Cover/SNS/Git/정리 작업 없음.
