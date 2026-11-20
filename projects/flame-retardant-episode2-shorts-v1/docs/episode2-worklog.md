# 방염코팅 2편 작업 로그

최종 업데이트: 2026-09-02

## 확정 사항

- Scene 1~6 대본 확정: `docs/script-final.md`
- Voice: `ko-KR-Chirp3-HD-Alnilam`
- Scene별 TTS 생성 및 duration 확정 완료

| Scene | TTS 실측 | 확정 duration | 프레임(30fps) |
|---|---:|---:|---:|
| 1 | 3.009초 | 3.7초 | 111 |
| 2 | 3.830초 | 4.5초 | 135 |
| 3 | 4.378초 | 5.0초 | 150 |
| 4 | 5.160초 | 5.8초 | 174 |
| 5 | 5.112초 | 5.8초 | 174 |
| 6 | 4.510초 | 5.2초 | 156 |

- Scene4 스타트프레임 확정: `public/assets/images/scene04-start-final.png`
- Scene4 이미지 내용: 카페 배경 + 대산이 + 마감재 뒤에 숨는 다루끼 골조

## 파일 관리 규칙

- 모든 반복 생성물은 `-v1`, `-v2`, `-raw`, `-edited` 등 별도 파일명으로 보존한다.
- 기존 파일 자동 덮어쓰기 금지.
- 사용자 승인 후에만 `-final`을 별도 저장한다.
- 미채택 버전도 삭제 승인 전까지 유지한다.

## 다음 작업

1. Scene1·2·3·5·6 스타트프레임 이미지 생성(Vertex)
2. 각 Scene 확정 duration에 맞춰 Flow/Veo 영상화
3. Remotion 조립
4. 프리뷰 및 리뷰
5. 커버 이미지 제작
6. SNS 문구 작성
7. GitHub push

## 2026-11-20 · 승인본 경로와 Slim Archive 후속 점검

- UPLOAD_FINAL_VIDEO `public/assets/video/flame-retardant-episode2-shorts-v1-final.mp4`
- FINAL_SCENES `public/assets/video/scene04-final.mp4`, `public/assets/video/scene06-final.mp4`
- UPLOAD_FINAL_COVER 승인 확인 대기 · `public/covers/square-safe/flame-retardant-episode2-cover-square-safe-final.png`
- UPLOAD_FINAL_SNS 승인 확인 대기 · `docs/episode2-sns-copy.md`

파일명 변경 전후 SHA256·바이트·해상도·FPS·프레임 수를 대조했다.
- `public/previews/flame-retardant-episode2-preview.mp4` → `public/assets/video/flame-retardant-episode2-shorts-v1-final.mp4` · 10410002 B · 1080×1920 · 30/1 fps · 1043f · `92fa43ab18478df01d67932ae1a9643eefeed9c49d996ac0c291956d3c658143`

신규 삭제 0건. 개별 삭제 승인과 잔여 파일 판정 대기.
- 기존 표준명 Scene의 승인 구간 대조 필요
