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
