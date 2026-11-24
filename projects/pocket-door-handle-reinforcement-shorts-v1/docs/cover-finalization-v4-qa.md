# Cover final 확정 QA — 2026-11-24

PASS: 사용자 Cover v4/3:4/4:5 최종 승인. 기존 v2 대체. v4 바이트를 final에 복사(원본 보존), 재렌더·재인코딩 없음. 손잡이 하향110.3px·기존 문도사 디자인·로고·왼쪽 문짝/오른쪽 열린 공간은 승인 v4 그대로.

1:1 FAIL 사용 제한: 시리즈 일부·로고·손잡이 하단 잘림. 1:1 업로드용으로 사용하지 않음. 실기기 검증은 기존 미확인 상태.

재현 필수 자산과 영상/TTS/SNS 보존 해시는 cover-final-manifest-v1.json. 엔딩17개 승인 해시 일치. 현재 Cover 렌더 출력 및 README/manifest 업로드 경로 동기화. 과거 v2/v3 스크립트 및 승인 이력은 변경하지 않음.

실제 시작 HEAD 094c137은 이전 기준4cae8b7 이후 커밋이며 로컬/원격 동일. 기존 작업을 되돌리지 않고 그 위에 Cover 전용 커밋. 다른 프로젝트 staging 제외.

## 이전 Cover 정리 후보 — 삭제/이동 미실행

v1은 현재 해당 Cover 경로에 없음. 아래 파일은 final 직접 입력이 아닌 과거 결과·크롭·비교이며 정리 시 과거 시각 비교를 잃음. 과거 승인 v2는 복구 이력이 있어 보존 권장, 나머지는 별도 승인 후 정리 가능. 문서 QA·제작 이력·공용 디자인 자산은 후보 제외.

| 상대경로 | bytes | 사유 |
|---|---:|---|
| `public/covers/doormaster-pocket-door-handle-cover-v2.png` | 1528900 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/doormaster-pocket-door-handle-cover-v3.png` | 1360518 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v2.png` | 663695 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v3.png` | 582439 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v2.png` | 874148 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v3.png` | 752720 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v2.png` | 830339 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v3.png` | 719309 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-compare-v3.png` | 306966 | 이전 결과/비교·크롭, final 직접 입력 아님 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v2.png` | 655577 | 이전 결과/비교·크롭, final 직접 입력 아님 |
