# 완료 결과물 정리 재점검 v2

이전 cleanup 판정을 승계하지 않고 최신 사용자 지시, 통합 지침 §8, 운영 가이드 §18, Monorepo 정리 순서를 적용했습니다. 삭제·이동·렌더·소스 변경·Git 변경은 하지 않았습니다. node_modules는 유지합니다.

전체현재 538,930,299bytes, node_modules 372,088,456bytes 포함. C 61파일/64,868,042bytes, C만정리할경우 474,062,257bytes 예상. 논리파일크기 기준,APFS할당량/휴지통비우기 전실제여유공간과다름. 보고서작성전측정값.

## 최종 결과물 보존
- `public/assets/video/doormaster-handle-replacement-preview-v4.mp4` / SHA256 `d111f35cdbc100579cecbb01b8c10ef0ae91177c7a248fac2cd7740ee77bfe5e`
- `public/covers/doormaster-handle-replacement-cover-v3.png` / SHA256 `9a2e01af027e958021ba02f650ecc8910ddad86876e0d3262d24881bb9161c64`
- `docs/sns-upload-copy-v3.md` / SHA256 `3be69d5d0496a155dcd83d0964853f5fe21e999b625546b111f197f90682404c`

Scene최종목록은A표에별도보존. 엔딩/폰트/로고/간판/Canonical/공식출처/소스·설정/package·lockfile/날짜형기록은 조사범위밖이어도 모두보존하며C에포함안함.

## 판단과 재현 위험
- 최종 assemble-caption-preview-v1.py는 Preview v3 오디오와 구 Scene 입력 사용. Preview v3→v1 의존 연쇄를 승인원음/최종Scene으로 단순화하기 전 D 6개는 이동 금지. 이번엔 소스 수정 안 함.
- 기존 cleanup-final-review-v1의 과거 QA 언급/실패 이력만으로 보존한 판단은 철회. 비결정적 생성도 최종 사용/유일 원본이 아니면 후보 가능.

직접참조는최종소스와과거소스를구분한리터럴검색이며출력파일명도검출될수있다. 동적Scene/TTS/시퀀스는조립코드·작업기록으로보완. 문서언급만으로보존하지않음. C를이동하면과거테스트재현/비교문서의일부경로는없어질수있으나최종사용과구분했다. 모든후보는승인전유지.

## A. 최종 승인 결과물 — 15파일 / 21,848,696bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/scene01-tts-v1.mp3` | 14784 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py, scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene02-tts-v1.mp3` | 19296 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py, scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene03-tts-v1.mp3` | 18624 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py, scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene04-tts-v9.mp3` | 29952 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py, scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/audio/scene05-tts-v4.mp3` | 19392 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py | untracked/ignored |
| `public/assets/images/scene01-before-candidate-v1.png` | 2609721 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | src/preview-index-v1.tsx | src/preview-index-v1.tsx | untracked/ignored |
| `public/assets/images/scene02-after-candidate-v1.png` | 2450791 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | src/preview-index-v1.tsx, src/caption-patch-v1.tsx, src/cover-v3.tsx | src/preview-index-v1.tsx, src/caption-patch-v1.tsx, src/cover-v1.tsx, src/cover-v2.tsx, src/cover-v3.tsx | untracked/ignored |
| `public/assets/images/scene03-handle-removed-candidate-v2.png` | 2301147 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | src/preview-index-v1.tsx, src/caption-patch-v1.tsx, src/scene04-grid-v1-layout2.tsx | src/preview-index-v1.tsx, src/caption-patch-v1.tsx, src/Scene04InfoV2.tsx, src/Scene04InfoV1.tsx, src/scene04-simple-v3.tsx, src/Scene04PreviewV1.tsx, src/scene04-grid-v1.tsx, src/scene04-grid-v1-layout2.tsx | untracked/ignored |
| `public/assets/video/doormaster-handle-replacement-preview-v4.mp4` | 11215027 | 최종 사용: 최종 사용자 승인 결과물 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene01-preview-v1.mp4` | 353565 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-caption-preview-v1.py | scripts/assemble-caption-preview-v1.py, scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/scene02-caption-preview-v1.mp4` | 391940 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene03-caption-preview-v1.mp4` | 392871 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene04-info-preview-v4.mp4` | 353656 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | scripts/assemble-caption-preview-v1.py | scripts/assemble-caption-preview-v1.py, scripts/assemble-preview-v3.py | untracked/ignored |
| `public/assets/video/scene05-caption-preview-v1.mp4` | 397663 | 최종 사용: 최종 Scene별 영상/이미지/선택 TTS | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/doormaster-handle-replacement-cover-v3.png` | 1280267 | 최종 사용: 최종 사용자 승인 결과물 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |

## B. 재현 필수/최종 QA — 18파일 / 43,807,719bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/ending-approved-v3.mp3` | 19916 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | src/daesan-ending/DaesanEnding.tsx | untracked/ignored |
| `public/assets/images/caption-after-patch-v1.png` | 120621 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | scripts/assemble-caption-preview-v1.py | scripts/assemble-caption-preview-v1.py | untracked/ignored |
| `public/assets/images/caption-removed-patch-v1.png` | 116195 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | scripts/assemble-caption-preview-v1.py | scripts/assemble-caption-preview-v1.py | untracked/ignored |
| `public/assets/images/domus511ni-official-components.jpg` | 142329 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/domus511ni-official-drawing.jpg` | 44376 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/domus511ni-official-manual.jpg` | 768275 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | src/scene04-grid-v1-layout2.tsx | src/Scene04InfoV2.tsx, src/Scene04InfoV1.tsx, src/scene04-simple-v3.tsx, src/Scene04PreviewV1.tsx, src/scene04-grid-v1.tsx, src/scene04-grid-v1-layout2.tsx | untracked/ignored |
| `public/assets/images/domus511ni-official-product.jpg` | 166649 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-caption-qa-v1.png` | 497494 | 최종 QA: 최종 승인 화면의 최소 QA 증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene03-handle-removed-candidate-v1.png` | 2528770 | 복원 원본: 승인 Scene3 국소수정의 유일한 베이스/입력 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene03-position-edit-input-v2.png` | 59228 | 복원 원본: 승인 Scene3 국소수정의 유일한 베이스/입력 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-grid-qa-v1.png` | 130864 | 최종 QA: 최종 승인 화면의 최소 QA 증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/IMG_3934.MOV` | 19049859 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` | 9346882 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | scripts/assemble-preview-v1.py, scripts/assemble-caption-preview-v1.py | scripts/assemble-preview-v1.py, scripts/assemble-caption-preview-v1.py, scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/headquarters-normal-speed-hold.mp4` | 9039790 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | src/daesan-ending/DaesanEnding.tsx | untracked/ignored |
| `public/assets/video/scene04-grid-visual-layout2-v1.mp4` | 180970 | 직접 입력: 최종 공식 근거/캡션 또는 Scene4 재현 입력 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v3.py | untracked/ignored |
| `public/covers/qa/cover-v3-3x4.png` | 716519 | 최종 QA: 최종 Cover의 최소 크롭/모바일 QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v3-4x5.png` | 681514 | 최종 QA: 최종 Cover의 최소 크롭/모바일 QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v3-mobile.png` | 197468 | 최종 QA: 최종 Cover의 최소 크롭/모바일 QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |

## C. 정리 가능한 테스트·중간 결과물 — 61파일 / 64,868,042bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/full-tts-qa-v1.mp3` | 489644 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v2.mp3` | 508844 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v3.mp3` | 517004 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/full-tts-qa-v4.mp3` | 530444 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v5.mp3` | 512684 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v6.mp3` | 534284 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v7.mp3` | 553964 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v8.mp3` | 516524 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v9.mp3` | 511724 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-part-a-tts-v4.mp3` | 8736 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-part-b-tts-v4.mp3` | 8064 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-part-c-tts-v4.mp3` | 12672 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-tts-v1.mp3` | 24576 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-tts-v2.mp3` | 28416 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene04-tts-v3.mp3` | 147404 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene04-tts-v4.mp3` | 148844 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-tts-v5.mp3` | 28224 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-tts-v6.mp3` | 32544 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-tts-v7.mp3` | 38400 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene04-tts-v8.mp3` | 30912 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene05-part-a-tts-v3.mp3` | 9024 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene05-part-b-tts-v3.mp3` | 14592 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene05-tts-v1.mp3` | 20352 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene05-tts-v2.mp3` | 108044 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | scripts/correct-tts-breath-v3.py | untracked/ignored |
| `public/assets/audio/scene05-tts-v3.mp3` | 119564 | 최종 미사용: 최종 선택 외 TTS/Part/통합 청취QA. 과거 문서 언급은 영구보존 사유 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-body-mobile-qa.png` | 1097817 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-final-mobile-qa.png` | 2125335 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-scene04-mobile-qa.png` | 325840 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene01-before-candidate-v2.png` | 2392948 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene01-before-v1-v2-qa.png` | 5506482 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene02-before-after-qa-v1.png` | 5486188 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene03-full-frame-qa.png` | 4669253 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene03-position-qa-v2.png` | 1847461 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene03-qa-v1.png` | 5733369 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-check-01.png` | 1465350 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-check-02.png` | 119701 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-check-03.png` | 200107 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-check-04.png` | 1462902 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-final-backset-qa-v1.png` | 395211 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-mobile-qa-v1.png` | 390352 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-info-qa-v1.png` | 786597 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-subtitle-reference-comparison-v2.png` | 181683 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/scene04-subtitle-style-qa-v2.png` | 847927 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/tts-breath-source-waveform-v3.png` | 18230 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/doormaster-handle-replacement-preview-v2.mp4` | 11628515 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/scene04-grid-visual-v1.mp4` | 178739 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene04-info-preview-v1.mp4` | 1242972 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene04-info-preview-v2.mp4` | 1309088 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene04-info-preview-v3.mp4` | 846651 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/scene04-preview-v1.mp4` | 1200766 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/scene04-simple-visual-v3.mp4` | 694853 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v2.py | untracked/ignored |
| `public/covers/doormaster-handle-replacement-cover-v1.png` | 1281225 | 최종 미사용: 미승인/대체된 Cover 후보; 최종v3와 소스 보존으로 충분 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/doormaster-handle-replacement-cover-v2.png` | 1279981 | 최종 미사용: 미승인/대체된 Cover 후보; 최종v3와 소스 보존으로 충분 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v1-3x4.png` | 717610 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v1-4x5.png` | 682657 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v1-mobile-comparison.png` | 198355 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v1-reference-same-scale.png` | 942037 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v1-v2-comparison.png` | 378803 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v2-3x4.png` | 716602 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v2-4x5.png` | 681627 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/covers/qa/cover-v2-v3-comparison.png` | 379324 | 최종 미사용: 과거 실패/시험/대체된 이미지·영상·비교QA; 최종 입력 아님 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |

## D. 추가 확인 필요 — 6파일 / 26,308,836bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/video/doormaster-handle-replacement-preview-v1.mp4` | 11982428 | 코드 의존 해소 필요: 현재 최종 조립 연쇄의 입력. 승인 원음/Scene으로 독립 재현하도록 스크립트 정리 후에만 제거 검토 | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py, scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/doormaster-handle-replacement-preview-v3.mp4` | 11135432 | 코드 의존 해소 필요: 현재 최종 조립 연쇄의 입력. 승인 원음/Scene으로 독립 재현하도록 스크립트 정리 후에만 제거 검토 | scripts/assemble-caption-preview-v1.py | scripts/assemble-caption-preview-v1.py, scripts/assemble-preview-v3.py | untracked/ignored |
| `public/assets/video/handle-body-visual-preview-v1.mp4` | 2088097 | 코드 의존 해소 필요: 현재 최종 조립 연쇄의 입력. 승인 원음/Scene으로 독립 재현하도록 스크립트 정리 후에만 제거 검토 | scripts/assemble-preview-v1.py | scripts/assemble-preview-v1.py | untracked/ignored |
| `public/assets/video/scene02-preview-v1.mp4` | 367570 | 코드 의존 해소 필요: 현재 최종 조립 연쇄의 입력. 승인 원음/Scene으로 독립 재현하도록 스크립트 정리 후에만 제거 검토 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/scene03-preview-v1.mp4` | 365750 | 코드 의존 해소 필요: 현재 최종 조립 연쇄의 입력. 승인 원음/Scene으로 독립 재현하도록 스크립트 정리 후에만 제거 검토 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |
| `public/assets/video/scene05-preview-v1.mp4` | 369559 | 코드 의존 해소 필요: 현재 최종 조립 연쇄의 입력. 승인 원음/Scene으로 독립 재현하도록 스크립트 정리 후에만 제거 검토 | 리터럴없음; 위근거참조 | scripts/assemble-preview-v3.py, scripts/assemble-preview-v2.py | untracked/ignored |

## Git 영향
C 중 tracked 0개. 향후이동시추적파일삭제diff가생기며원격/Git과거blob용량은자동감소하지않음. 이번에는status/ls-files읽기만수행. 다른프로젝트변경비간섭.
```text
?? projects/doormaster-handle-replacement-v1/
```

모든정리후보의SHA256/정확경로는동명JSON에포함. 승인범위확정후새해시대조및휴지통이동은별도명령으로만실행.
