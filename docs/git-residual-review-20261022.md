# Git 잔여 변경사항 최종 분류 — 2026-10-22

## 조사 범위와 현재 상태

기준 커밋 `37dbfc36d613a31d69e76e97640fc118be68d7f1`. branch main, 로컬 HEAD와 로컬 origin/main 추적 ref 일치. 이번에는 원격 fetch/실시간 원격 조회를 하지 않았습니다. staged 0개, unstaged 수정 1개, 미추적 64개로 기존 보고 65개와 일치합니다. 현재 status에 잡힌 파일과 해당 최종 소스/기록만 확인했습니다.

프로젝트별: 도어클로저 6개(수정1+미추적5), 손잡이 8개, 스텝도어 51개. 합판/히든도어 잔여 없음.

## 도어클로저 작업기록 변경

`projects/door-closer-shorts-v1/docs/26.10.19수정.md`: HEAD 대비 64줄 추가, 삭제 없음. Flow 시작 이미지, 모델별8초 비교, 내장 이미지 키프레임, 4초 Omni 시작/끝 프레임 실험 기록입니다. 작업기록에는 사용자 생성 허용·비용 확인·각1회 실행 및 결과 평가 대기가 명시돼 있습니다. 실험 실행 승인과 최종 본편 채택/이력 Git 승인은 별개입니다. 다른 프로젝트 제작과 무관하며 본편 최종 자산은 바꾸지 않았습니다.

처리 제안 D: 이 기록과 미추적 QA JSON 5개를 실험 이력으로 Git에 보존할지 사용자 결정. 보존 권장이나 본편 필수 자산으로 자동 포함하지 않습니다. 기록 삭제/되돌리기 금지. clean을 위해서는 기록 보존 commit 승인이 필요하며, JSON만 제외해도 추적 작업기록 수정은 남습니다.

## 미추적 64개 분류 합계

| 분류 | 파일 수 | bytes | 처리 |
|---|---:|---:|---|
| A | 16 | 21,686,501 | 추가 Git 반영 필수 |
| B | 3 | 87,801,163 | 로컬 보존 / 정확 경로 Git 제외 제안 |
| C | 40 | 165,026 | 승인 후 휴지통 이동 후보 |
| D | 5 | 27,283 | 사용자 판단 |

위 통계는 기존 미추적64개만 집계합니다. 수정 작업기록 1개는 별도 D(전체 파일 크기는 추가 변경량이 아니므로 합계 제외). 새 본 보고서는 별도 A이며 통계에 섞지 않았습니다.

## A. 추가 Git 반영 필수

| 정확한 상대경로 | bytes | 파일 종류 | 목적·최종본 관계·Git/정리 판단 | 확인된 소스 참조 |
|---|---:|---|---|---|
| `projects/doormaster-handle-replacement-v1/docs/prompts/after-v1.txt` | 1853 | ASCII text, with very long lines (1057) | 최종 채택 이미지 또는 승인 탈거 이미지 편집의 실제 프롬프트. 최종 생성/편집 계보 재현 기록. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/doormaster-handle-replacement-v1/docs/prompts/before-v1.txt` | 1652 | ASCII text, with very long lines (514) | 최종 채택 이미지 또는 승인 탈거 이미지 편집의 실제 프롬프트. 최종 생성/편집 계보 재현 기록. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/doormaster-handle-replacement-v1/docs/prompts/scene03-position-v2.txt` | 1415 | ASCII text, with very long lines (1414) | 최종 채택 이미지 또는 승인 탈거 이미지 편집의 실제 프롬프트. 최종 생성/편집 계보 재현 기록. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/doormaster-handle-replacement-v1/docs/prompts/scene03-v1.txt` | 1937 | ASCII text, with very long lines (1332) | 최종 채택 이미지 또는 승인 탈거 이미지 편집의 실제 프롬프트. 최종 생성/편집 계보 재현 기록. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/public/assets/images/official-double-section.png` | 48459 | PNG image data, 960 x 1336, 8-bit/color RGB, non-interlaced | 최종 조립 직접 입력/공식 단면 원본/승인 이미지의 실제 편집 원본/승인 QA. cleanup-preflight에서 보존 확정, 미추적 누락 보완 필요. | projects/younglim-stepdoor-types-shorts-v1/scripts/prepare-assets.py |
| `projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-basic-unified-qa-v1.png` | 779393 | PNG image data, 1200 x 760, 8-bit/color RGB, non-interlaced | 최종 조립 직접 입력/공식 단면 원본/승인 이미지의 실제 편집 원본/승인 QA. cleanup-preflight에서 보존 확정, 미추적 누락 보완 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-space-v1.png` | 1935425 | PNG image data, 1063 x 1480, 8-bit/color RGB, non-interlaced | 최종 조립 직접 입력/공식 단면 원본/승인 이미지의 실제 편집 원본/승인 QA. cleanup-preflight에서 보존 확정, 미추적 누락 보완 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-space-v2.png` | 1775189 | PNG image data, 1063 x 1480, 8-bit/color RGB, non-interlaced | 최종 조립 직접 입력/공식 단면 원본/승인 이미지의 실제 편집 원본/승인 QA. cleanup-preflight에서 보존 확정, 미추적 누락 보완 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-space-v2.png` | 2184679 | PNG image data, 940 x 1672, 8-bit/color RGB, non-interlaced | 최종 조립 직접 입력/공식 단면 원본/승인 이미지의 실제 편집 원본/승인 QA. cleanup-preflight에서 보존 확정, 미추적 누락 보완 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v8.mp4` | 14944243 | ISO Media, MP4 Base Media v1 [ISO 14496-12:2003] | 최종 조립 직접 입력/공식 단면 원본/승인 이미지의 실제 편집 원본/승인 QA. cleanup-preflight에서 보존 확정, 미추적 누락 보완 필요. | projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v8.py |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/generate_tts.py` | 4840 | Python script text executable, Unicode text, UTF-8 text | 승인 TTS 원본·믹스 또는 공식 단면/type 파생 자산 재현 소스와 입력 설정. 이전 버전 명칭이어도 최종 S1~3 v3 및 S4~7 v4에 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/prepare-assets.py` | 761 | Python script text executable, ASCII text | 승인 TTS 원본·믹스 또는 공식 단면/type 파생 자산 재현 소스와 입력 설정. 이전 버전 명칭이어도 최종 S1~3 v3 및 S4~7 v4에 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-tts-v3.py` | 2422 | Python script text executable, ASCII text | 승인 TTS 원본·믹스 또는 공식 단면/type 파생 자산 재현 소스와 입력 설정. 이전 버전 명칭이어도 최종 S1~3 v3 및 S4~7 v4에 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-tts-v4.py` | 2435 | Python script text executable, ASCII text | 승인 TTS 원본·믹스 또는 공식 단면/type 파생 자산 재현 소스와 입력 설정. 이전 버전 명칭이어도 최종 S1~3 v3 및 S4~7 v4에 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v3.json` | 1004 | JSON data | 승인 TTS 원본·믹스 또는 공식 단면/type 파생 자산 재현 소스와 입력 설정. 이전 버전 명칭이어도 최종 S1~3 v3 및 S4~7 v4에 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v4-ssml.json` | 794 | JSON data | 승인 TTS 원본·믹스 또는 공식 단면/type 파생 자산 재현 소스와 입력 설정. 이전 버전 명칭이어도 최종 S1~3 v3 및 S4~7 v4에 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
## B. 로컬 보존 / 정확 경로 Git 제외 제안

| 정확한 상대경로 | bytes | 파일 종류 | 목적·최종본 관계·Git/정리 판단 | 확인된 소스 참조 |
|---|---:|---|---|---|
| `projects/doormaster-handle-replacement-v1/docs/completed-project-cleanup-execution-v1.json` | 1599742 | ASCII text | 휴지통 복원/해시 감사용 전체 스냅샷. Git 상태·로컬 절대경로·실행환경 메타데이터 포함. 요약 및 전후 해시는 추적 MD에 보존; 원본 JSON은 로컬 복구 자료로 유지. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/docs/cleanup-execution-v1.json` | 6185785 | ASCII text | 휴지통 복원/해시 감사용 전체 스냅샷. Git 상태·로컬 절대경로·실행환경 메타데이터 포함. 요약 및 전후 해시는 추적 MD에 보존; 원본 JSON은 로컬 복구 자료로 유지. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/docs/younglim-2627-catalog-official.pdf` | 80015636 | PDF document, version 1.6 (zip deflate encoded) | 이전 사용자 선택: 공식 PDF 로컬 보존/Git 제외. 공식 원본이며 삭제 금지. Git 아카이브로 바꿀 경우 별도 승인과 정확 경로 LFS 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
## C. 승인 후 휴지통 이동 후보

| 정확한 상대경로 | bytes | 파일 종류 | 목적·최종본 관계·Git/정리 판단 | 확인된 소스 참조 |
|---|---:|---|---|---|
| `projects/doormaster-handle-replacement-v1/docs/cleanup-final-review-v1.json` | 101960 | JSON data | 철회된 이전 보수적 분류의 중복 상세 JSON. 추적 MD와 최신 재점검/이동 기록이 있어 현재 복원 필수 아님. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/doormaster-handle-replacement-v1/docs/prompts/before-v2.txt` | 2130 | ASCII text, with very long lines (911) | 실패 Before v2의 미사용 프롬프트. 승인 v1/v2 이미지 재현 입력 아님. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/doormaster-handle-replacement-v1/scripts/correct-tts-breath-v3.py` | 2964 | Python script text executable, ASCII text, with very long lines (452) | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/docs/expanded-ai-v1-prompt-pending.txt` | 1545 | ASCII text, with very long lines (1224) | 초기 확장형 AI 제안용 미확정 프롬프트. 최종 채택 이미지 편집 기준과 다름. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v2.py` | 2722 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v3.py` | 2722 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v4.py` | 2750 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v5.py` | 2729 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v6.py` | 2746 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v7.py` | 2754 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa.py` | 2948 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v2-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v3-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v4-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v5-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v6-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v7-concat.txt` | 1257 | ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v8-concat.txt` | 1257 | ASCII text | 최종 조립 스크립트가 매 실행 재작성하는 로컬 절대경로 concat 목록. 원본 Scene과 조립 소스가 있어 복구 필수 아님. 사용자 승인 후 정리 가능. | projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v8.py |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v3-integrity.py` | 2240 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v4-integrity.py` | 2240 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v5-integrity.py` | 2240 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v5-preservation.py` | 2222 | Python script text executable, ASCII text, with very long lines (978) | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v6-integrity.py` | 2240 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v6-preservation.py` | 937 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v7-integrity.py` | 2240 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v7-preservation.py` | 1043 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-cover-v1.py` | 2575 | Python script text executable, Unicode text, UTF-8 text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-cover-v2.py` | 2648 | Python script text executable, Unicode text, UTF-8 text, with very long lines (351) | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v2.sh` | 289 | POSIX shell script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v3.sh` | 336 | POSIX shell script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v4.sh` | 334 | POSIX shell script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v6.sh` | 326 | POSIX shell script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes.sh` | 286 | POSIX shell script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v2.json` | 996 | JSON data | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v2.py` | 754 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v3.py` | 760 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v4.py` | 776 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v5.py` | 764 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa.py` | 754 | Python script text executable, ASCII text | 이미 대체·정리된 TTS/Scene/Cover/Preview를 생성·비교하는 과거 스크립트 또는 concat 목록. 최신 조립·선택 Scene·TTS 재현 경로에서 사용하지 않음. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
## D. 사용자 판단

| 정확한 상대경로 | bytes | 파일 종류 | 목적·최종본 관계·Git/정리 판단 | 확인된 소스 참조 |
|---|---:|---|---|---|
| `projects/door-closer-shorts-v1/docs/ai-model-test-keyframes-v2-qa.json` | 1918 | JSON data | AI 모델 비교 실험의 비용·설정·실패/조건부 QA 기록. 본편 직접 입력 아님. 작업기록과 묶어 실험 이력 Git 보존 여부 승인 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/door-closer-shorts-v1/docs/ai-model-test-keyframes-v3-qa.json` | 1835 | JSON data | AI 모델 비교 실험의 비용·설정·실패/조건부 QA 기록. 본편 직접 입력 아님. 작업기록과 묶어 실험 이력 Git 보존 여부 승인 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/door-closer-shorts-v1/docs/ai-model-test-omni-frames-v2-qa.json` | 5251 | JSON data | AI 모델 비교 실험의 비용·설정·실패/조건부 QA 기록. 본편 직접 입력 아님. 작업기록과 묶어 실험 이력 Git 보존 여부 승인 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/door-closer-shorts-v1/docs/ai-model-test-start-v1-qa.json` | 1810 | JSON data | AI 모델 비교 실험의 비용·설정·실패/조건부 QA 기록. 본편 직접 입력 아님. 작업기록과 묶어 실험 이력 Git 보존 여부 승인 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |
| `projects/door-closer-shorts-v1/docs/ai-model-test-video-v1-qa.json` | 16469 | JSON data | AI 모델 비교 실험의 비용·설정·실패/조건부 QA 기록. 본편 직접 입력 아님. 작업기록과 묶어 실험 이력 Git 보존 여부 승인 필요. | 선정 최종 소스 리터럴 없음; 본문 계보 판단 적용 |

## 안전·LFS·제외 규칙

- node_modules/캐시/.env/.DS_Store는 잔여64개에 없습니다. 기존 ignore를 확대할 이유 없음.
- B 3개는 사용자 승인 후 `.git/info/exclude`에 파일별 정확 경로를 추가하는 로컬 제외 권장. 공통 .gitignore 변경 불필요. 이번 변경 없음.
- A의 `public/assets/video/younglim-stepdoor-picture-silent-v8.mp4`는 14,944,243bytes이며 filter unspecified. Git 반영 전에 해당 경로에만 LFS 지정하고 pointer OID/size 검증 필요.
- B 공식 PDF는 80,015,636bytes, 현재 LFS 미지정. 기존 로컬보존 선택 유지. PDF를 Git에 넣는 별도 선택 시 LFS 필수.
- 잔여 텍스트 내용과 파일명에서 API키/개인키/토큰/비밀번호 패턴 검사 결과: 확인된 자격증명 없음. ADC 참조 코드는 인증정보 자체가 아님. 바이너리 내부와 모든 형식의 비밀정보 부재까지 보증하지 않습니다.
- 실행 JSON에는 사용자 홈 절대경로, 과거 Git 목록, node_modules metadata가 들어 있어 로컬 보존으로 분류했습니다. 외부 게시 전 불필요한 로컬 경로 노출 검토가 필요합니다.
- 기존 완료 SHA256 검사는 반복하지 않았습니다. 잔여 A 자산은 실제 존재/종류/크기·소스 관계를 확인. 최종 승인 Preview/Cover/SNS/Scene/TTS/엔딩은 수정하지 않았으며 앞선 보존 QA 결과 유지.
- 휴지통 544개는 현재 존재 및 기록 크기 일치 확인. 내용 해시는 이번에 재계산하지 않았습니다.

## working tree clean을 위한 최소 후속 작업

1. A 파일 및 본 보고서의 정확 경로만 LFS/민감정보 검증 후 추가 commit 승인.
2. B 3개를 로컬에 유지하고 정확 경로 로컬 exclude 승인.
3. C 목록만 별도 휴지통 이동 승인. 기존544개 휴지통은 건드리지 않음.
4. D AI 실험 기록과 JSON의 보존 정책 결정. 작업기록은 되돌리지 말고 보존 commit을 권장.
5. 이후 남은 status 확인. broad git clean/reset/restore/ignore 사용 금지.

모든 선택이 승인되면 clean 가능하지만 현재는 D가 미결정이고 어떤 처리도 실행하지 않았습니다. 후속 commit/push는 별도 승인 대상입니다.

## 보고서 자체의 Git 분류

`docs/git-residual-review-20261022.md`는 이번 새 A(추가 Git 반영 대상)입니다. 공통 가이드가 아닌 요청된 감사 보고서입니다. 이번에는 staging하지 않았으므로 작성 후 status는 기존65개+보고서1개=66개입니다. 보고서 자체를 무기한 미추적 상태로 두지 않도록 후속 A 승인 범위에 명시했습니다.

최종 존재 확인 보완: 기존 승인 목록 기반 66개 승인 미디어와 각 프로젝트 최종 영상·Cover·SNS, 스텝도어 Scene7개의 파일 존재를 재확인했습니다. 전체 재탐색·미디어 재해시·재렌더는 하지 않았습니다.


## 2026-10-22 잔여 변경 승인 처리 결과
C40개 165,026bytes를 지정 휴지통으로 이동하고 전후 SHA256 일치 확인. B3개는 파일/해시 유지 및 .git/info/exclude 정확 경로 제외. A16개, 보고서1개, D QA5개와 작업기록1개를 Git 반영 대상으로 검증. 스텝도어 최종 무음 조립본은 정확 경로 LFS 적용. 기존 휴지통544개(스텝도어108개 포함) 보존. commit/push는 staging 검증 후 실행하며 실제 해시/원격 결과는 최종 보고와 Git 이력으로 확인; 해시 기록용 후속 커밋 없음.

휴지통: `/Users/janghokim/.Trash/daesan-git-residual-cleanup-20261022`

| 이동한 Monorepo 상대경로 | bytes | 이동 전후 동일 SHA256 |
|---|---:|---|
| `projects/doormaster-handle-replacement-v1/docs/cleanup-final-review-v1.json` | 101960 | `79ad87031e942f11357ade18a2a286adfcfd02ee55d633f648a3a51112fc517b` |
| `projects/doormaster-handle-replacement-v1/docs/prompts/before-v2.txt` | 2130 | `bb4927279dceba60cd9e74430d0344498fef8a3667dbae12b837a2398130790f` |
| `projects/doormaster-handle-replacement-v1/scripts/correct-tts-breath-v3.py` | 2964 | `1a5dcf61620c26ee92ccdaa706a9ae8db5244bd39563284e257f581e901de61e` |
| `projects/younglim-stepdoor-types-shorts-v1/docs/expanded-ai-v1-prompt-pending.txt` | 1545 | `31aea89da73ef024a8082bc599c36535455e55f6363fa2be047478346263d8c5` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v2.py` | 2722 | `db59137ed6c23e95ea6d4e4983151e982c18fe49a58ce6253ba713bd85669021` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v3.py` | 2722 | `00baef984767925f637fe43b21591d51e59dfc0bf2bd9c2cd8b31ee5bd7c2d3b` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v4.py` | 2750 | `8a7f7955ade94fa007f2c3ed4a2e5d912b4e214541d153479864098b2cfa5acc` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v5.py` | 2729 | `a4d394270640f25fbe488ba7a573b4ab02f3a1a3251fb0180a20f76f343c201c` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v6.py` | 2746 | `fdebb739c396c30026dda14c0702ba5dc41c8446dc0227b11197956f212b6676` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v7.py` | 2754 | `65f5d754fea10c5ee34cd300b4889669a6657dfbf9689d7996786720dd1b68c7` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa.py` | 2948 | `563a555011cb25664a325b2fe19bae1bd21e844487086608827072296c75dcfc` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-concat.txt` | 1257 | `52952dfeeb5836e68e9e9f017779c0a3e232ae42ca72132b50d6cbe46e6464de` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v2-concat.txt` | 1257 | `a5c9320822017092148c9a0bc995ea53bb786efdfdcb2dc861d49d4fb49bb1b8` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v3-concat.txt` | 1257 | `1af535f361849e57540cc81aa844d7561374c3f5847c22a2cc5d940fc2a02d4f` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v4-concat.txt` | 1257 | `36be83a1343b217361afcb07d59d9374aab89a2b0d5a3ab05b030200c7eca16b` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v5-concat.txt` | 1257 | `6c05bacc9a00b28b8914a8cb8d0c844ce58caaade61d1457d46c786ed2c1521f` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v6-concat.txt` | 1257 | `d31e2a792374f5c80cb63e89c8eb2ab23f02992056de3fa56ebb5489e3d234db` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v7-concat.txt` | 1257 | `3142ee4e30d746b59d864d1b1bb3bf1e02629b3bc7d6c6473b4c0b610a99c05f` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v8-concat.txt` | 1257 | `25189402c156389fe79aa1dd2aee924dacec3373b8c4d58f6cb1b555772582be` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v3-integrity.py` | 2240 | `b4f23a432981e403d91e164bea918491f7bfa1c4c0ad388ee5eabf941467eefa` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v4-integrity.py` | 2240 | `d6e1d3ff6841764931e864b7dfcf40823bd551af26aa1334dbae709153135108` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v5-integrity.py` | 2240 | `a3bdc88194f73f08efe6c148540720f3262e2fb3b9dd8728cc955153fac51c10` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v5-preservation.py` | 2222 | `81f5febc51586765d09bcc935c60eab8c2b65e5010b32ff963f16d9fc108d61e` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v6-integrity.py` | 2240 | `9cbd3c0485a0f382349a6aae5adb4d8e6db015ced17e1c2d0ba7e441e2fa296e` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v6-preservation.py` | 937 | `f189c19b82b45a76e529bf961d90f8ac0d8237e4eb279129d40d0cbfaf36cc4a` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v7-integrity.py` | 2240 | `d2a83302f4397790a22fb51ec2c9d0cb8b1cd645b26a87eeaad1f493c7006d9e` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v7-preservation.py` | 1043 | `8ea7cbc9e9cc3ec6aef466745594e65819d72f98996d5d5e3eb17bc78821d4b1` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-cover-v1.py` | 2575 | `b6e6343cb79894e033fffcab54a052e5adddbb883857b42442d8d195108b83db` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-cover-v2.py` | 2648 | `c7924435cbfc330ae4cd4c0a0709d3e28011fc55cab151916c1354685ef930f1` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v2.sh` | 289 | `284020623a9dbed30c36300ce60cac03567a3c410f86eb236aab4c8fa3c5514b` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v3.sh` | 336 | `f182529607bbb6b270b7ba3d311290434727c05de7187990614feeb2bd053683` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v4.sh` | 334 | `5a0c11a2ad603850a32e59164897fb530a5ff7ba417f00156fc12e836be2e49c` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v6.sh` | 326 | `36cd0fd3b294d05dc8655bfa0d503d6206db54dbbb7bc340273a67637989e024` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes.sh` | 286 | `6f143c018768ce26b136da81f3114b5f8a33931f16e5861b4e8670bd996daf5b` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v2.json` | 996 | `c5739bc0572bfee10a26e86f94f3674523891916f7049f35d1181d349db661b1` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v2.py` | 754 | `2ba37e6f0a8c6551d4c23ff23f2b573f894ac029fd939a8269a514e7a39f7194` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v3.py` | 760 | `0d0e427926769ba82497a4388389869f605b96b9c94f474feca7fe7e59a97745` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v4.py` | 776 | `b46a218e196a3634616279bc2d01911ef095c9dfed63a8dd0b059bdf2ba217f5` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v5.py` | 764 | `152f3d3debf4d99bdc076bcf871f2b114591def2c1f842bf565c4d86d2c931c1` |
| `projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa.py` | 754 | `b80856c43d9630304f11392acf440f2e8b9c68063b8d4de94fce1602e6b44fc9` |
