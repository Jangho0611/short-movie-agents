# 최종 확정·정리 사전 점검 — 2026-11-02

최종 SHA256: `f5b63f68e5ccfbb7ef094b60c00e6a0aa67f7edde2d13b97a278c11bfd4914fb`. 원본 revision2와 바이트 동일. 재렌더/재인코딩 없음.

## 분류 기준
A 최종/승인/비교 자산 보존, B 직접 제작 의존, C 재현/기록, D 승인 필요 정리 후보, E 불확실하여 보존. B는 최종 mp4가 외부 파일을 실행 시 참조한다는 뜻이 아님. 전체 개별 경로·크기·참조 증거는 JSON 참조.

## 정리 후보 (실행 안 함)
| 경로 (프로젝트 기준) | bytes | 목적/근거 | 삭제·이동 영향 |
|---|---:|---|---|
| .DS_Store | 8196 | macOS 폴더 보기 메타데이터 | Finder 보기 설정 초기화 가능 |
| public/.DS_Store | 8196 | macOS 폴더 보기 메타데이터 | Finder 보기 설정 초기화 가능 |
| public/assets/.DS_Store | 6148 | macOS 폴더 보기 메타데이터 | Finder 보기 설정 초기화 가능 |
| public/assets/video/assembly-v2-revision2-video-01.mp4 | 160862 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-revision2-video-02.mp4 | 188766 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-revision2-video-03.mp4 | 113617 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-revision2-video-04.mp4 | 94393 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-revision2-video-05.mp4 | 197874 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-revision2-video-06.mp4 | 9208422 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-video-01.mp4 | 160862 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-video-02.mp4 | 188766 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-video-03.mp4 | 85990 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-video-04.mp4 | 94393 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-video-05.mp4 | 197874 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| public/assets/video/assembly-v2-video-06.mp4 | 9208422 | 승인 Scene 영상에서 분리한 조립용 무음 비디오 | 재조립 전 중간 파일 재생성 필요. 기존 스크립트 exclusive-write로 전체 단순 재실행 불가; 출력 충돌 처리 계획 필요 |
| node_modules | 361572277 | 로컬 npm 의존 패키지 | 삭제 후 실행 불가, 재설치 필요. 승인 전 보존 |

후보 합계 381,495,058 bytes (363.82 MiB), 논리 크기 기준. 같은 디스크 이동은 절감 없음. 승인 소스·과거 비교본은 후보에서 제외.

## 재현 및 미확인 사항
- Cover 편집 소스 scripts/create_cover_v1.py, create_cover_v1_layout2.py, correct_cover_logo_v2.py 보존. 로고 스크립트는 다른 승인 프로젝트 커버/폰트 경로에 의존한다. 프로젝트 단독 완전 재현은 미보장; 해당 외부 승인 원본도 유지 필요.
- Blender concept-v1 build_and_render.py와 concept-v2 adjust_material_lighting.py 및 양쪽 blend/README/로그 보존. v2는 v1을 기준으로 조정하므로 v1도 삭제 금지.
- 이전 영상·TTS·이미지·Cover 및 QA는 비교/승인 이력으로 보존. 실패 판정 또는 참조 부재만으로 삭제 후보화하지 않음.
- approved-cover-v5-brand-lockup.png는 E로 보존; 최종 로고는 extracted.png.

## Git
- branch main; HEAD 및 로컬 origin/main: e4e8007868c866dec561ab940e0d9ea788488106. fetch 미실행, 원격 최신 여부 미확인.
- 이번 프로젝트 변경/미추적 경로 372개 (이번 보고서 생성 전 스냅샷); 개별 목록 JSON. 프로젝트 전체 미추적 상태.
- 무관한 변경 257개: door-finish-color-difference-shorts-v1 프로젝트. 이번 Git 대상에서 제외.
- 현재 LFS 적용 0개. 50MiB 이상 파일 0개; 목록 JSON. 커밋 전 LFS 정책 확인 필요.
- docs/BLENDER_3D_SHORTS_GUIDE.md: 미추적 신규 문서. docs/daesan_shorts_instructions.md: 수정 상태, Blender 가이드 링크 2줄 추가. 이번 작업에서 변경하지 않음.
- 민감파일 이름/키 패턴 제한 검사 결과 0개. 완전한 비밀정보 부재 보증 아님. .env/자격증명/node_modules/.DS_Store 제외 규칙 존재, 실제 적용 결과 JSON.
- 정리 및 Git add/commit/push 모두 승인 대기.
