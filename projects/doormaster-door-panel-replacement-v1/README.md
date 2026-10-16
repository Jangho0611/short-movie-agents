# DoorMaster 2편 — 문틀 그대로, 문짝만 교체?

최종 사용자 승인: Preview v4 / Cover v2 / TTS v11 / SNS 최종 MD.

- 영상: public/assets/video/door-panel-replacement-preview-v4.mp4 (1080×1920,30fps,28.866667초)
- Cover: public/covers/doormaster-door-panel-cover-v2.png
- SNS: docs/SNS_업로드_문구_최종.md (Naver246자)
- 기록: docs/26.10.15수정.md

## 재현

Node 의존성은 npm ci로 설치한다. Mac에서 Apple SD Gothic Neo 폰트가 사용되므로 다른 OS의 동일 렌더를 보장하지 않는다.

Scene1·2는 src/caption-test-v2.tsx의 Caption1/Caption2 (100/125프레임), Scene3~6은 src/caption-preview-v4.tsx의 CaptionV4Scene3~6 (126/114/113/118프레임)을 사용한다. 원본 도식/사진 모션은 보존한 승인 MP4를 사용한다. src/assemble-preview-v4.py가 각 Scene과 승인 엔딩을 연결하고 Preview v3의 승인 오디오를 스트림 복사한다. 기존 결과물에는 덮어쓰지 않는다.

TTS v11 구성: scene01-tts-v8, scene02-tts-v10-response, scene03-tts-v8, scene04-tts-v8, scene05-tts-v11, scene06-tts-v8. 통합 청취본 full-tts-qa-v11.mp3. 새 음성 생성 불필요.

Cover 소스: src/cover-v2/compose.py. 승인 공통 간판과 폰트는 Monorepo docs/design-styles/door-master/assets/series-sign-v2/를 참조한다. Cover v1은 필요하지 않다. --dry-run으로 입력만 확인하고 --qa-output 지정 시에만 별도 JSON을 저장한다.

과거 QA의 삭제 자산 경로는 역사적 기록이다. 실패/실험/중간 산출물 전체를 Git 재현 대상으로 삼지 않는다. 별도 저장소 생성 금지. 공통 엔딩 원본 IMG_3934.MOV는 Monorepo assets/daesan-ending에 이미 보존되어 중복 반영하지 않는다.

최종 이미지 생성 조건 원문: docs/prompts/의 Prompt 3개.
S2 합성: scripts/composite-scene02-v3.py (--dry-run / 선택 --qa-output).
조립 concat list는 시스템 임시 디렉터리를 사용하고 실행 후 자동 정리한다. 과거 QA 기록 요약은 docs/26.10.15수정.md에 보존한다.
