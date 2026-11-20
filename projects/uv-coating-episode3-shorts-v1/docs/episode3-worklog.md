# Episode 3 작업기록

## Veo 오브젝트 접촉 실패 패턴

캐릭터가 오브젝트(판재)를 직접 짚거나 접촉하는 포즈는 Veo 모션화 시 손-오브젝트 경계 왜곡(겹침/파고듦) 발생 경향. 접촉 없는 포즈(몸 옆 손짓 등)로 설계하거나, 접촉 포즈는 정지 이미지로 유지 권장.

이 패턴은 다른 캐릭터·오브젝트 장면에도 일반화할 수 있으므로 `short-movie-agents` 공통 가이드에 반영을 제안한다.

## 최종 자산 정리

- 삭제: 실패·불채택 이미지, 영상, TTS, 이전 위치 전체 렌더 및 `.DS_Store` 총 34개
- 확보 용량: 약 41.86 MiB
- 검증: Scene1~7 최종 Preview, 전체 조립본 및 최종 채택 원본 자산 전 구간 디코딩 정상

## 2026-11-20 · 보존 경로 확인

- UPLOAD_FINAL_VIDEO 승인 확인 대기 · `public/previews/uv-coating-episode3-full-v1.mp4`
- FINAL_SCENES 전체 조립본과 독립 파일의 승인 대응 확인 대기
- UPLOAD_FINAL_COVER 승인 확인 대기 · public/covers/square-safe/uv-coating-episode3-cover-square-safe-final.png
- UPLOAD_FINAL_SNS 승인 확인 대기 · docs/3편-SNS업로드문구-확정.md
- 최신 통합 영상 승인 근거 미확정
