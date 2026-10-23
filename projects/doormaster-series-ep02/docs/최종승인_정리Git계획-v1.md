# 문도사 2편 승인 반영 후 정리·Git 계획 v1

이번 사용자 메시지로 영상 Preview v5, Cover v1, SNS 최종 승인 확정. Cover 3:4/4:5 브랜드 제외 WARN은 이번 편에 한해 허용. 이 문서는 실행 없는 계획이며 삭제·stage·commit·push는 수행하지 않았다.

## Final

- 경로: `public/assets/video/doormaster-ep02-final.mp4`
- SHA256: `f993c96f58be4235245e851a0ad17a115baa5dc7b952f8d9e7287d32aa7591a6`
- 승인 Preview v5와 바이트 동일. 신규 렌더 없이 xb 모드 무손실 파일 복사. 원본 Preview 보존.
- 1080×1920 / 30fps / H.264·AAC / 28.600초 / 858프레임. FFmpeg -xerror 전체 디코딩 종료0, 오류 없음.
- 기존 TTS/자막/Scene3/엔딩 QA 그대로 유효. Final의 동일 해시로 콘텐츠 동일성 확인.
- 신규 Gemini Alnilam 엔딩은 이번 편 승인 구성요소. 공통 Canonical 등록 전. 기존 공통 승인v1 및 직접 의존 세트 보존.

## 반드시 로컬 보존

- Final 및 Preview v5, 승인 Cover 및 크롭 QA, SNS 원문, 승인 Scene1~5 WAV, 실제 DOMUS 재고/712 NI 원본 및 렌더 파생본, 배송 원본/승인 편집본, Scene1 승인 v4 및 필요한 합성 입력.
- 기존 공통 엔딩·신규 엔딩·원본 TTS·배경영상·로고·폰트·컴포넌트, 승인 간판, src/preview-v5.tsx 및 src/cover-v1.tsx, 렌더/조립/QA 스크립트, package/lock/config, 날짜형 작업기록.
- 별도 승인 전에는 아래 삭제 후보도 모두 보존.

## 삭제 검토 후보 — 실제 삭제 아님

기존 점검표 B 목록69개 그대로 재확인. 합계 **136,103,498 bytes / 129.798 MiB**. 미승인 버전과 실패 비교자료가 중심이나 현재 삭제 권한 없음. JSON QA 자료는 음원 자체가 아니라 진단 근거이므로 관련 원본과 묶어 보존 필요성 판단.

| 정확한 파일명(프로젝트 상대) | bytes | MiB | 삭제 검토 사유 |
|---|---:|---:|---|
| `docs/ending-alnilam-preview-v1-audio.log` | 12,230 | 0.012 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/ending-v2-tts-qa.json` | 4,204 | 0.004 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `docs/full-tts-qa-v1.json` | 2,623 | 0.003 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `docs/preview-v1-audio-peak.log` | 50,936 | 0.049 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v2-audio-peak.log` | 50,936 | 0.049 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v2-ending-ssim.log` | 2,888 | 0.003 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v3-audio-peak.log` | 50,838 | 0.048 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v3-ending-audio.log` | 12,195 | 0.012 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v3-scene5-audio.log` | 11,848 | 0.011 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v3-transition-audio.log` | 7,641 | 0.007 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v4-audio-peak.log` | 50,838 | 0.048 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v4-ending-audio.log` | 12,195 | 0.012 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v4-scene5-audio.log` | 11,848 | 0.011 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v4-transition-audio.log` | 7,641 | 0.007 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v5-audio-peak.log` | 50,838 | 0.048 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v5-ending-audio.log` | 12,195 | 0.012 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v5-scene5-audio.log` | 11,848 | 0.011 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/preview-v5-transition-audio.log` | 7,641 | 0.007 | 재생성 가능한 상세 진단 로그; 요약 QA와 대조 후 정리 검토 |
| `docs/scene01-tts-v5-192k-48khz-qa.json` | 1,165 | 0.001 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `public/assets/audio/ending-gemini-alnilam-v2-tts-v1.wav` | 1,469,370 | 1.401 | 미승인/실패 TTS 비교 후보; 이력 및 사용자 보존 지시 유지 |
| `public/assets/audio/full-tts-qa-v1.wav` | 1,095,154 | 1.044 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `public/assets/audio/scene01-tts-v1.mp3` | 11,616 | 0.011 | 미승인/실패 TTS 비교 후보; 이력 및 사용자 보존 지시 유지 |
| `public/assets/audio/scene01-tts-v2.mp3` | 16,032 | 0.015 | 미승인/실패 TTS 비교 후보; 이력 및 사용자 보존 지시 유지 |
| `public/assets/audio/scene01-tts-v3.mp3` | 15,360 | 0.015 | 미승인/실패 TTS 비교 후보; 이력 및 사용자 보존 지시 유지 |
| `public/assets/audio/scene01-tts-v4.mp3` | 13,728 | 0.013 | 미승인/실패 TTS 비교 후보; 이력 및 사용자 보존 지시 유지 |
| `public/assets/audio/scene01-tts-v5-192k-48khz.mp3` | 74,924 | 0.071 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `public/assets/audio/scene01-tts-v5-192k.mp3` | 62,924 | 0.060 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `public/assets/audio/scene05-ending-v2-tts-qa-v1.wav` | 1,720,570 | 1.641 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `public/assets/audio/scene05-ending-v2-tts-qa-v2.wav` | 422,650 | 0.403 | 원본 WAV에서 파생된 비교/통합 청취용 파일; 사용자 승인 후 정리 검토 |
| `public/assets/images/preview-v1-contact-sheet.png` | 1,260,539 | 1.202 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v1-qa-Scene01.png` | 2,219,234 | 2.116 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v1-qa-Scene03.png` | 1,864,206 | 1.778 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v1-qa-Scene04.png` | 2,469,626 | 2.355 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v1-qa-Scene05.png` | 148,204 | 0.141 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v2-contact-sheet.png` | 1,337,900 | 1.276 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v2-qa-Scene03.png` | 2,505,714 | 2.390 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v2-scene03-transition-qa.png` | 396,665 | 0.378 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v2-scene03-v1-diagnosis.png` | 579,259 | 0.552 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v3-contact-qa.png` | 977,929 | 0.933 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v3-qa-Scene03.png` | 2,507,588 | 2.391 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v3-scene03-transition-qa.png` | 410,340 | 0.391 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v4-contact-qa.png` | 872,750 | 0.832 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v4-layout-check.png` | 2,504,830 | 2.389 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/images/preview-v4-scene03-transition-qa.png` | 398,061 | 0.380 | 이전 렌더의 재생성 가능한 시각 QA; 진단 근거 보존 후 정리 검토 |
| `public/assets/video/daesan-ending-gemini-alnilam-preview-v1.mp4` | 9,300,344 | 8.869 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/doormaster-ep02-preview-v1.mp4` | 20,706,234 | 19.747 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/doormaster-ep02-preview-v2.mp4` | 17,937,415 | 17.106 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/doormaster-ep02-preview-v3.mp4` | 17,927,395 | 17.097 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/doormaster-ep02-preview-v4.mp4` | 12,671,387 | 12.084 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene01-preview-v1.mp4` | 713,355 | 0.680 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene01-preview-v2.mp4` | 720,319 | 0.687 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene01-preview-v3.mp4` | 721,294 | 0.688 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene01-preview-v4.mp4` | 771,241 | 0.736 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene02-preview-v1.mp4` | 327,712 | 0.313 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene02-preview-v2.mp4` | 313,200 | 0.299 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene02-preview-v3.mp4` | 324,585 | 0.310 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene02-preview-v4.mp4` | 330,411 | 0.315 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene03-preview-v1.mp4` | 4,183,532 | 3.990 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene03-preview-v2.mp4` | 1,235,225 | 1.178 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene03-preview-v3.mp4` | 1,292,216 | 1.232 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene03-preview-v4.mp4` | 1,302,814 | 1.242 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene04-preview-v1.mp4` | 5,725,199 | 5.460 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene04-preview-v2.mp4` | 5,972,181 | 5.696 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene04-preview-v3.mp4` | 5,974,459 | 5.698 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene04-preview-v4.mp4` | 623,896 | 0.595 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene05-preview-v1.mp4` | 310,758 | 0.296 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene05-preview-v2.mp4` | 323,433 | 0.308 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene05-preview-v3.mp4` | 319,494 | 0.305 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |
| `public/assets/video/scene05-preview-v4.mp4` | 347,678 | 0.332 | 이전 미승인 렌더; v5로 대체. 현재 사용자 보존 지시로 삭제 불가 |

## Git 사전 계획

- 현재 branch `main`; status `?? projects/doormaster-series-ep02/`. 프로젝트 tracked0, staged0. 아래 목록은 보고서 생성 직전 snapshot이며 본 보고서와 작업기록 추가도 향후 포함 대상.
- 아래 포함은 제안이며 git add 명령을 실행하지 않음. 전체 프로젝트 일괄 add 금지: 배송 개인정보 원본 및 후보가 현재 ignore되지 않아 포함될 수 있음.
- 배송 원본은 로컬 반드시 보존하되 Git에서는 제외. 현재 .gitignore를 변경하지 않았으므로 실제 staging 전에 해당 파일 제외 규칙 또는 명시적인 allowlist가 필요.
- node_modules(약403MiB), .cache/.remotion/__pycache__, .env·인증키·임시파일은 기존 ignore 대상. 실행환경은 기존 lockfile과 불일치 이력이 있어 node_modules를 지금 삭제하지 않음.
- 민감키 패턴 검사는 직전 점검 결과0건을 재사용. 민감정보 없음의 보증은 아님. 배송 원본의 식별정보, 사진 및 로컬경로·Cloud 메타데이터 공개범위 별도검토.
- 중첩 Git 저장소 없음. Monorepo projects/하위 구성 유지. 모든 생성 미디어 public/assets/ 또는 public/covers/ 규칙 유지.

### 포함 검토: 160개

| 파일 | 사유 |
|---|---|
| `docs/26.10.23수정.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/SNS_업로드_문구.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/cover-v1-asset-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-README.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-alnilam-preview-v1-input-check.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-alnilam-preview-v1-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-canonical-sha256.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-attempt.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v1-transcript.txt` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v2-attempt.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v2-diagnosis.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v2-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v2-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v2-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/ending-v2-tts-v2-transcript.txt` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/final-approved-qa-v1.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/pre-v2-existing-files-sha256.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v1-asset-verification.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v1-review.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v1-technical-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v2-asset-verification.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v2-review.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v2-scene03-frame-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v2-scene03-v1-diagnosis.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v2-technical-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v3-ending-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v3-final-audio-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v3-scene03-frame-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v3-technical-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v4-ending-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v4-final-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v4-preservation-baseline.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v4-scene03-frame-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v4-technical-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v5-alignment-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v5-caption-bounds.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v5-ending-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v5-preservation-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v5-scene03-frame-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/preview-v5-technical-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v1-v2-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v3-actual-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v3-generation-proposal.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v3-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v4-actual-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v4-audio-diagnosis.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v4-preservation.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v4-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v4-response-metadata.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v5-actual-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v5-preservation.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v5-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v5-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-tts-v5-synthesis-attempt.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-v4-composite.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-white-door-hook-v1-prompt.txt` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-white-door-hook-v1-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-white-door-hook-v2-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-white-door-hook-v3-prompt.txt` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-white-door-hook-v3-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene01-white-door-hook-v4-qa.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene02-tts-v1-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene02-tts-v1-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene03-tts-v1-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene03-tts-v1-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene04-tts-v1-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene04-tts-v1-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene05-tts-v1-request.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scene05-tts-v1-response.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scenes01-05-technical-qa-v1.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/scenes02-05-preexisting-sha256.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/slim-copy-manifest-v1.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `docs/최종점검_정리준비-v1.md` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `package-lock.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `package.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/ending-approved-v3.mp3` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/ending-gemini-alnilam-v2-tts-v2.wav` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/scene01-tts-v5.wav` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/scene02-tts-v1.wav` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/scene03-tts-v1.wav` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/scene04-tts-v1.wav` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/audio/scene05-tts-v1.wav` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/fonts/Pretendard-ExtraBold.woff2` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/fonts/Pretendard-Medium.woff2` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/fonts/Pretendard-SemiBold.woff2` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-caption-scene01-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-caption-scene02-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-caption-scene03-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-caption-scene04-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-caption-scene05-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-contact-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/preview-v5-scene03-transition-qa.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene01-white-door-hook-v4-edit-mask.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene01-white-door-hook-v4-source.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene01-white-door-hook-v4.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-712ni-product-render-v2.jpg` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-712ni-product.JPG` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-package-render-v2.jpg` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-package.JPG` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-stock-closeup-render-v2.jpg` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-stock-closeup.JPG` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-stock-wide-render-v2.jpg` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene03-domus-stock-wide.JPG` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/images/scene04-delivery-clean-approved-preview-v1.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/logos/daesanlogo2.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/IMG_3934.MOV` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/doormaster-ep02-final.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/doormaster-ep02-preview-v5.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/headquarters-normal-speed-hold.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/scene01-preview-v5.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/scene02-preview-v5.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/scene03-preview-v5.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/scene04-preview-v5.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/assets/video/scene05-preview-v5.mp4` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/covers/doormaster-ep02-cover-v1.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/covers/qa/doormaster-ep02-cover-v1-1x1.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/covers/qa/doormaster-ep02-cover-v1-3x4.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/covers/qa/doormaster-ep02-cover-v1-4x5.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/covers/qa/doormaster-ep02-cover-v1-mobile.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/references/series-sign-v2/doormaster-series-sign-v2-outlined.svg` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/references/series-sign-v2/doormaster-series-sign-v2.png` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/references/series-sign-v2/doormaster-series-sign-v2.svg` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/references/series-sign-v2/font-settings-v2.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `public/references/series-sign-v2/fonts/Pretendard-Black.ttf` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `remotion.config.ts` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/assemble-preview-v3.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/assemble-preview-v4.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/assemble-preview-v5.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/generate_tts.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v1.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v2.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v3-ending.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v3.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v4-ending.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v4-final.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v4.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v5-alignment.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v5-ending.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-preview-v5.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-scene03-v2-frames.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-scene03-v3-frames.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-scene03-v4-frames.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/qa-scene03-v5-frames.py` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `scripts/render-preview-v5.cjs` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/cover-v1.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/daesan-ending/DaesanEnding.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/daesan-ending/approved/HeadquartersOverlay.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/daesan-ending/approved/brief.ts` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/daesan-ending/approved/fonts.ts` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/daesan-ending/approved/tokens.ts` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/index.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/preview-v1.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/preview-v2.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/preview-v3.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/preview-v4.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `src/preview-v5.tsx` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |
| `tsconfig.json` | 승인 결과·직접 의존·재현 소스·설정·작업/QA 기록 포함 검토 |

### 제외 계획(로컬 보존): 70개

| 파일 | 사유 |
|---|---|
| `docs/ending-alnilam-preview-v1-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/ending-v2-tts-qa.json` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/full-tts-qa-v1.json` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v1-audio-peak.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v2-audio-peak.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v2-ending-ssim.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v3-audio-peak.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v3-ending-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v3-scene5-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v3-transition-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v4-audio-peak.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v4-ending-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v4-scene5-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v4-transition-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v5-audio-peak.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v5-ending-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v5-scene5-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/preview-v5-transition-audio.log` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `docs/scene01-tts-v5-192k-48khz-qa.json` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/ending-gemini-alnilam-v2-tts-v1.wav` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/full-tts-qa-v1.wav` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene01-tts-v1.mp3` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene01-tts-v2.mp3` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene01-tts-v3.mp3` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene01-tts-v4.mp3` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene01-tts-v5-192k-48khz.mp3` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene01-tts-v5-192k.mp3` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene05-ending-v2-tts-qa-v1.wav` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/audio/scene05-ending-v2-tts-qa-v2.wav` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v1-contact-sheet.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v1-qa-Scene01.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v1-qa-Scene03.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v1-qa-Scene04.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v1-qa-Scene05.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v2-contact-sheet.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v2-qa-Scene03.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v2-scene03-transition-qa.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v2-scene03-v1-diagnosis.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v3-contact-qa.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v3-qa-Scene03.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v3-scene03-transition-qa.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v4-contact-qa.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v4-layout-check.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/preview-v4-scene03-transition-qa.png` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/images/scene04-delivery-original.jpeg` | 배송 식별정보 원본: 로컬 보존, Git 제외 필수 |
| `public/assets/video/daesan-ending-gemini-alnilam-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/doormaster-ep02-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/doormaster-ep02-preview-v2.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/doormaster-ep02-preview-v3.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/doormaster-ep02-preview-v4.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene01-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene01-preview-v2.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene01-preview-v3.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene01-preview-v4.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene02-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene02-preview-v2.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene02-preview-v3.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene02-preview-v4.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene03-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene03-preview-v2.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene03-preview-v3.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene03-preview-v4.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene04-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene04-preview-v2.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene04-preview-v3.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene04-preview-v4.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene05-preview-v1.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene05-preview-v2.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene05-preview-v3.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |
| `public/assets/video/scene05-preview-v4.mp4` | 정리검토 후보: 로컬 보존, 현재 Git 포함 보류 |

### 판단 보류: 9개

| 파일 | 사유 |
|---|---|
| `public/assets/images/scene01-white-door-hook-v1-source.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v1-v2-qa.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v1.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v2-source.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v2.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v3-comparison-qa.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v3-source.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v3-v4-qa.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |
| `public/assets/images/scene01-white-door-hook-v3.png` | 승인 v4 합성/수정의 이력 원본, 재현·보존 범위 결정 필요 |

### 대용량 파일(10MiB 이상)

| 파일 | MiB |
|---|---:|
| `public/assets/video/doormaster-ep02-preview-v1.mp4` | 19.747 |
| `public/assets/video/IMG_3934.MOV` | 18.167 |
| `public/assets/video/doormaster-ep02-preview-v2.mp4` | 17.106 |
| `public/assets/video/doormaster-ep02-preview-v3.mp4` | 17.097 |
| `public/assets/video/doormaster-ep02-final.mp4` | 12.096 |
| `public/assets/video/doormaster-ep02-preview-v5.mp4` | 12.096 |
| `public/assets/video/doormaster-ep02-preview-v4.mp4` | 12.084 |

## 승인 파일 식별 해시

| 파일 | SHA256 |
|---|---|
| `public/covers/doormaster-ep02-cover-v1.png` | `7c005d2844f8d941614343952aa291779bf945cee9594136e3aad89a5a09fbb9` |
| `docs/SNS_업로드_문구.md` | `e17687d5c370631c07b2a41fa073fecda41609993da76bfb1a2b448fdeaab808` |
| `public/assets/video/daesan-ending-gemini-alnilam-preview-v1.mp4` | `932e23cb1bf5ed63f1cc7572007e9a81ff088069cc9f41577777425595ba5d12` |
| `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` | `2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5` |
| `public/assets/images/scene04-delivery-original.jpeg` | `a46ada23b499d7e2856acf0efaa98eb89e58bfbefe45d50df55b336b2a19bbfa` |

## 남은 사용자 결정

- 삭제 후보69개 및 보류 이미지의 실제 삭제/계속 보존 범위.
- Git 포함·제외 계획 최종 확인과 후속 add/commit/push 권한.
- 신규 엔딩의 타 영상 재사용 Canonical 등록은 이번 승인에 포함되지 않음.
- 승인된 영상/Cover/SNS에 대한 재승인은 필요하지 않음.
