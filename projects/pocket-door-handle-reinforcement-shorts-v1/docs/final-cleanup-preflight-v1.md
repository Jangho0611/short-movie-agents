# 최종 정리 및 Git 백업 사전 점검 v1

2026-11-05. 최신 사용자 승인: 영상 v3 / Cover v2 / SNS 최종 / Scene1 v7. 과거 QA의 승인대기 문구는 당시 상태이며 현재 승인 상태를 대체하지 않음.
파일 삭제·이동·기존 수정·렌더·Git add/commit/push 없음. 이번 보고서와 파일별 JSON만 프로젝트 docs에 신규 저장.

## 최종 보존과 재현성

- `public/assets/video/pocket-door-doormaster-full-preview-v3.mp4` — 11,036,422 bytes / 존재 확인
- `public/assets/video/scene01-doormaster-v7.mp4` — 473,352 bytes / 존재 확인
- `public/assets/video/scene02-doormaster-v3.mp4` — 200,982 bytes / 존재 확인
- `public/assets/video/scene03-doormaster-preview-v2.mp4` — 188,446 bytes / 존재 확인
- `public/assets/video/scene04-doormaster-preview-v5.mp4` — 241,565 bytes / 존재 확인
- `public/assets/video/scene05-doormaster-preview-v1.mp4` — 233,864 bytes / 존재 확인
- `public/assets/video/scene01-doormaster-v6.mp4` — 451,385 bytes / 존재 확인
- `public/assets/images/scene01-handle-types-base-v3.png` — 1,393,278 bytes / 존재 확인
- `public/assets/images/scene01-handle-round-v4.png` — 1,365,476 bytes / 존재 확인
- `public/assets/images/scene01-handle-edgepull-v2.png` — 1,617,100 bytes / 존재 확인
- `public/assets/images/scene01-handle-privacy-v6.png` — 1,364,227 bytes / 존재 확인
- `public/covers/doormaster-pocket-door-handle-cover-v2.png` — 1,528,900 bytes / 존재 확인
- `public/assets/audio/scene01-tts-v10.wav` — 227,026 bytes / 존재 확인
- `public/assets/audio/scene02-tts-v4.wav` — 253,484 bytes / 존재 확인
- `public/assets/audio/scene03-tts-v5.wav` — 330,284 bytes / 존재 확인
- `public/assets/audio/scene04-tts-v4.wav` — 399,404 bytes / 존재 확인
- `public/assets/audio/scene05-tts-v4.wav` — 249,644 bytes / 존재 확인
- `docs/pocket-door-doormaster-sns-final.md` — 3,551 bytes / 존재 확인
- `docs/pocket-door-doormaster-sns-qa.md` — 3,584 bytes / 존재 확인

공통 엔딩: 모노레포 `assets/daesan-ending/docs/asset-sha256.json`의 17개 파일 현재 SHA256 전부 일치. 외부 공용 세트도 반드시 보존. 프로젝트 내 폰트 외 공용 엔딩 직접 참조 존재. 개별 프로젝트만 복사하면 완결 백업이 아님.

중요 재현 의존:
- `scripts/assemble-full-preview-v3.py`는 최종 Scene5개와 공용 엔딩 영상·해시 manifest 직접 참조.
- Scene1v7은 v6 영상의 오른쪽만 패치한 결과. `scene01-doormaster-v6.mp4` 삭제 금지. src/scene01-images-v7.tsx 단독 렌더가 최종 결과와 완전 동일하지 않음.
- 실제 패치 스크립트 `/tmp/build-v7.py` 존재 확인. `/tmp/scene01-v7-{0,18,60}.png`, 이전 렌더 PNG, `/tmp/v7-before.json` 참조. 프로젝트 안으로 보존하고 경로·덮어쓰기 위험(-y/assert out.exists)을 정리할 후속 작업 필요. 이번에는 복사/수정하지 않음. 재현 완결성 WARN.
- Cover 최종 QA는 `docs/doormaster-pocket-door-handle-cover-v2-final-qa.md`. 같은 이름의 `...cover-v2-qa.md`는 과거 미채택 생성 QA이므로 삭제 대신 이력으로 유지.
- Cover 소스는 photoreal-v1.png, covers/assets-v1/series-sign-v2 간판 PNG·Pretendard-Black.ttf, covers/assets-v1/brand.png 직접 참조.
- Apple SD Gothic Neo 시스템 폰트 사용: 환경 의존을 기록하고 폰트 라이선스 없이 임의 복사하지 않음.

## 분류 원칙 및 범위

프로젝트 제작 파일 1159개. A 303 / B 125 / C 15 / D 716.
파일명 문자열로 실행 소스·기록 역참조 검사. 동적 경로/템플릿 참조를 완전히 증명하는 분석이 아니므로 미참조만으로 삭제 확정하지 않음. A는 보수적으로 구버전 실행 소스 참조까지 포함한다. JSON에는 발견된 참조 목록 전체 보존.
node_modules 14,336파일 / 7,773,180,439bytes는 이번 삭제 후보에서 제외(설치 환경 유지). package/lockfile만으로 모든 시스템 의존성이 복구된다고 가정하지 않음.

## Git 상태

- 상위 모노레포만 사용, main. HEAD `b9dab72fa9f08e77d42cf6401616dc7ee8c955a7`.
- origin: https://github.com/Jangho0611/short-movie-agents.git
- 읽기 전용 ls-remote로 실제 원격 main 동일 확인. 로컬 origin/main 대비 ahead/behind 0/0. fetch 미실행.
- 해당 프로젝트 전체 untracked. 현재 Git 백업되지 않음.
- 공통 가이드 2개 Modified, staged/deleted 항목 없음. 다른 door-finish-color-difference 프로젝트 untracked도 존재; 이번 백업에서 제외.
- 대형 파일 ≥10MiB 4개: 아래 LFS 필터 결과. 정확한 경로별 LFS 검토 필요. 이번 .gitattributes 변경 없음.

## 민감정보

제작 텍스트에서 private-key / 일부 일반 API key 패턴 검사: 0개 의심 파일. 민감 파일명 검사: 0개. 값은 기록하지 않음. 정규식은 완전한 비밀 검사가 아님; 최종 stage 전 JSON 요청·로그·스크립트·공식 자료/사진 사용권 추가 검토 필요. 의심 파일 [].

## 저장경로와 공통 가이드

새 승인 영상 assets/video, 이미지 assets/images, Cover covers 및 covers/qa, 오디오 assets/audio 정상.
public/references는 아래 목록을 파일별 B로 보존하되 승인된 재사용 Canonical인지 별도 확인 필요. 현재 존재만으로 승인 판정하지 않음.
공용 엔딩 직접 참조는 프로젝트 자급형 Slim Copy 원칙과 차이. 이번 이동/복사 없음.
루트 docs/daesan_shorts_instructions.md +7줄, Shorts 제작 운영가이드 +20줄: 기존 모바일 안전 영역 개정이며 이번 수정 없음. 실제 미커밋 변경 있음. 일반 ChatGPT 프로젝트에 해당 개정이 반영됐는지는 접근 증거 없음. 미반영인 경우 이 두 파일만 최신본으로 교체 필요; 다른 가이드 재업로드 불필요.

## 작업기록·후속 실행 계획

정리 승인 후 프로젝트 docs/26.11.05수정.md 신규 기록: 주제 / 최종승인버전 / Scene타임라인 / 승인TTS / 이미지이력 / 4종하드컷 / 모바일안전영역 / Cover / SNS / QA / 승인된 파일별 보존·삭제 / Git 커밋·푸시 결과 / 미확인 사항.
기존 docs/26.11.02수정.md는 초기 정지화면 이력으로 보존.
순서: 재현 스크립트·임시 의존 보존 승인 → 파일별 삭제 목록 승인 → 승인된 항목만 정리 → 자산 SHA256·LFS·비밀 검사 → 정확한 경로 stage/diff → commit/push 검증. 이번 실행하지 않음.
실기기/플랫폼 UI 및 직접 연속 청취 미확인은 사용자 콘텐츠 승인과 구분해 유지.

## 파일별 분류표

경로는 프로젝트 상대경로. C도 삭제 승인이 아님. D는 삭제 금지(추가 확인 전).

### A. 반드시 보존

| 상대경로(파일명 포함) | bytes | 생성 목적 | 최종 사용 | 참조 관계 | 이유·삭제 영향 |
|---|---:|---|---|---|---|
| `blender/concept-v2/qa-v2.json` | 515 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `docs/motion-test-v1-preservation.json` | 29083 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-motion-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `docs/pocket-door-doormaster-sns-final.md` | 3551 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `docs/pocket-door-doormaster-sns-qa.md` | 3584 | QA/비교 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `docs/scene01-tts-v7-qa.md` | 3692 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v7.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `docs/slim-copy-manifest.json` | 379 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `docs/still-qa-v2.json` | 2661 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `package-lock.json` | 139439 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `package.json` | 299 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/audio/full-tts-qa-v3.wav` | 1228480 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/analyze-tts-candidates-v3.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/full-tts-qa-v4.wav` | 1185268 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/analyze-assemble-tts-v4.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/full-tts-qa-v5.wav` | 1401744 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-tts-qa-v5.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v10-part-b.wav` | 115244 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-scene01-tts-v10.py; scripts/generate-scene01-tts-v10-part-b.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v10.wav` | 227026 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py; scripts/assemble-full-tts-qa-v5.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/audio/scene01-tts-v4.wav` | 132204 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v4.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v5.wav` | 140204 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v5.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v6.wav` | 159404 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v6.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v7-part-a.wav` | 105644 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v7.py; scripts/assemble-scene01-tts-v7.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v7-part-b.wav` | 101804 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v7.py; scripts/assemble-scene01-tts-v7.py; scripts/assemble-scene01-tts-v9.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v7.wav` | 178762 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v7.py; scripts/assemble-scene01-tts-v7.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v8.wav` | 203564 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v8.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v9-part-a.wav` | 134444 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene01-tts-v9-part-a.py; scripts/assemble-scene01-tts-v10.py; scripts/assemble-scene01-tts-v9.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene01-tts-v9.wav` | 198166 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-scene01-tts-v9.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene02-tts-v4.wav` | 253484 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py; scripts/assemble-full-tts-qa-v5.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/audio/scene03-tts-v2.wav` | 384044 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene03-tts-v2.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene03-tts-v4.wav` | 251564 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/generate-scene03-tts-v4.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/audio/scene03-tts-v5.wav` | 330284 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-preview-v2.cjs; scripts/render-scene03-doormaster-preview-v1.cjs; scripts/assemble-full-preview-v2-scene01-v6.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/audio/scene04-tts-v4.wav` | 399404 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v4.cjs; scripts/render-scene04-doormaster-preview-v5.cjs; scripts/render-scene04-doormaster-preview-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/audio/scene05-tts-v4.wav` | 249644 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py; scripts/assemble-full-tts-qa-v5.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/images/contact-sheet-scene02-04-v2.jpg` | 312517 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/domus-CIS_3455-v3.jpg` | 47113 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/composite-sh30-exterior-v1.py; src/scene03-layered-section-test-v1.tsx; src/scene03-photo-section-v2.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/mobile-s03-mismatch-v2.png` | 79384 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/mobile-s04-review-v2.png` | 82323 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/official-zl-front-lines.png` | 33314 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/index.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/official-zl-install.png` | 62008 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/index.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/official-zl-photo.png` | 357893 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/index.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/official-zl-section.png` | 70912 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/index.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-clean-background-v1.png` | 1645284 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-exploded-concept-v2.cjs; scripts/render-scene03-doormaster-mismatch-v1.cjs; scripts/render-scene03-remotion-motion-test-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-cover-photoreal-v1.png` | 1791874 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/composite-cover-sh30-v1.py; src/doormaster-pocket-door-cover-v2.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-cover-sh30-composite-v1.png` | 1548534 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/composite-cover-sh30-v1.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-doormaster-full-qa-v1.png` | 679168 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v1.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-doormaster-full-qa-v2.png` | 726030 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v2.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-doormaster-full-qa-v3.png` | 726972 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v3.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-exploded-concept-v1.png` | 513687 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-exploded-concept-v2.cjs; scripts/render-sh30-exploded-concept-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-exploded-concept-v2.png` | 496752 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-exploded-concept-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-exploded-photoreal-v1.png` | 510789 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-remotion-motion-test-v2.cjs; scripts/render-scene03-remotion-motion-test-v3.cjs; scripts/render-scene03-remotion-motion-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-exterior-v1.png` | 506671 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-exploded-concept-v2.cjs; scripts/render-scene03-remotion-motion-test-v2.cjs; scripts/render-scene03-remotion-motion-test-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-internal-v1.png` | 656900 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-internal-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-mask-v1.png` | 53539 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-exploded-concept-v2.cjs; scripts/render-scene03-remotion-motion-test-v2.cjs; scripts/render-scene03-remotion-motion-test-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-pre-assembly-v1.png` | 653941 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-remotion-motion-test-v2.cjs; scripts/render-scene03-remotion-motion-test-v3.cjs; scripts/render-scene03-remotion-motion-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-recess-v1.png` | 626091 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-exploded-concept-v2.cjs; scripts/render-scene03-remotion-motion-test-v2.cjs; scripts/render-scene03-remotion-motion-test-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-door-sh30-reinforcement-check-v1.png` | 633499 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-sh30-recess-pair-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-handle-cutaway-v4.png` | 1708503 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/scene03-overlay-v4.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/pocket-handle-cutaway-v6.png` | 1698543 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/scene03-concept-v6.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/s03-02-mismatch-v2.png` | 244654 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/s04-01-template-v2.png` | 242085 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/contact_sheet.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene01-handle-edgepull-v2.png` | 1617100 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/scene01-handle-types-v3.tsx; src/scene01-subtitle-v6.tsx; src/scene01-handle-types-v4.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/images/scene01-handle-privacy-v5.png` | 1379972 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/scene01-handle-types-v3.tsx; src/scene01-subtitle-v6.tsx; src/scene01-handle-types-v4.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene01-handle-privacy-v6.png` | 1364227 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/scene01-images-v7.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/images/scene01-handle-round-v3.png` | 1382750 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/scene01-handle-types-v3.tsx; src/scene01-subtitle-v6.tsx; src/scene01-handle-types-v4.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene01-handle-round-v4.png` | 1365476 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/scene01-images-v7.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/images/scene01-handle-types-base-v2.png` | 1667642 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | src/scene01-handle-types-v3.tsx; src/scene01-subtitle-v6.tsx; src/scene01-handle-types-v4.tsx | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene01-handle-types-base-v3.png` | 1393278 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/scene01-images-v7.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/images/scene03-concept-overlay-v4.png` | 1653322 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | render-overlay-v4.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-2d-comparison-v1.png` | 114157 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-2d-comparison-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-2d-comparison-v2.png` | 115478 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-preview-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-concept-v1.png` | 1411697 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-concept-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-concept-v2.png` | 880968 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-concept-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-concept-v3.png` | 1364936 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-concept-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-concept-v4.png` | 1531752 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-concept-v4.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-mismatch-v1.png` | 1366478 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-mismatch-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-doormaster-preview-v2-qa.png` | 59693 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-preview-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-layered-section-test-v1.png` | 607103 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-layered-section-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-photo-section-v2.png` | 404106 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-photo-section-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-realistic-section-test-v1.png` | 621741 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-realistic-section-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene03-section-concept-v1.png` | 124313 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-section-concept-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene04-doormaster-preview-v1-qa.png` | 79998 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene04-doormaster-preview-v2-qa.png` | 84992 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene04-doormaster-preview-v3-qa.png` | 61182 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene04-doormaster-preview-v4-qa.png` | 64582 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v4.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene04-doormaster-preview-v5-qa.png` | 64297 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v5.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/images/scene05-doormaster-preview-v1-qa.png` | 212048 | QA/비교 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene05-doormaster-preview-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/pocket-door-doormaster-full-preview-v1.mp4` | 10734724 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v1.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/pocket-door-doormaster-full-preview-v2.mp4` | 11014455 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v2.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/pocket-door-doormaster-full-preview-v3.mp4` | 11036422 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/video/scene01-02-doormaster-preview-v2.mp4` | 377033 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene02-doormaster-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene01-doormaster-v1.mp4` | 340263 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene02-doormaster-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene01-doormaster-v2.mp4` | 172480 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v1.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene01-doormaster-v3.mp4` | 365133 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene01-handle-types-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene01-doormaster-v5.mp4` | 435173 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/assemble-full-preview-v2.py | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene01-doormaster-v6.mp4` | 451385 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/video/scene01-doormaster-v7.mp4` | 473352 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/video/scene02-doormaster-v2.mp4` | 205074 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene02-doormaster-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene02-doormaster-v3.mp4` | 200982 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py; scripts/assemble-full-preview-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/video/scene03-assembly-motion-test-v1.mp4` | 199119 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-assembly-motion-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-doormaster-preview-v1.mp4` | 183695 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-doormaster-preview-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-doormaster-preview-v2.mp4` | 188446 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-preview-v2.cjs; scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/video/scene03-photo-section-motion-test-v1.mp4` | 470367 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-motion-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-photo-section-motion-test-v2.mp4` | 520106 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-motion-test-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-remotion-motion-test-v1.mp4` | 412970 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-remotion-motion-test-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-remotion-motion-test-v2.mp4` | 685938 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-remotion-motion-test-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-remotion-motion-test-v3.mp4` | 687718 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-remotion-motion-test-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene03-remotion-motion-test-v4.mp4` | 639751 | 중간/실험 후보 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene03-remotion-motion-test-v4.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene04-doormaster-preview-v1.mp4` | 277492 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene04-doormaster-preview-v2.mp4` | 268015 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v2.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene04-doormaster-preview-v3.mp4` | 239960 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v3.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene04-doormaster-preview-v4.mp4` | 242455 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-scene04-doormaster-preview-v4.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/assets/video/scene04-doormaster-preview-v5.mp4` | 241565 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v5.cjs; scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/assets/video/scene05-doormaster-preview-v1.mp4` | 233864 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py; scripts/assemble-full-preview-v1.py; scripts/assemble-full-preview-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/brand.png` | 5413 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/doormaster-pocket-door-cover-v2.tsx; src/doormaster-pocket-door-cover-v1.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2-outlined.svg` | 9087 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.png` | 249737 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/doormaster-pocket-door-cover-v2.tsx; src/doormaster-pocket-door-cover-v1.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.svg` | 3556101 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/export-text.py` | 1146 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/font-settings-v2.json` | 481 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/fonts/Pretendard-Black.ttf` | 2665004 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/doormaster-pocket-door-cover-v2.tsx; src/doormaster-pocket-door-cover-v1.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/outline.swift` | 1726 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/assets-v1/series-sign-v2/render.cjs` | 325 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/covers/doormaster-pocket-door-handle-cover-v1.png` | 1118288 | 제작 자산/기록 | 참조 있음(최종 실행 여부 별도) | scripts/render-pocket-cover-v1.cjs | 실행 소스에서 파일명 참조 발견; 구버전 참조라도 삭제 제외; 참조 소스 실행 실패 가능 |
| `public/covers/doormaster-pocket-door-handle-cover-v2.png` | 1528900 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-pocket-cover-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/daesan-ending/fonts/Pretendard-ExtraBold.woff2` | 793540 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/fonts.ts | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/daesan-ending/fonts/Pretendard-Medium.woff2` | 778432 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/fonts.ts | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `public/daesan-ending/fonts/Pretendard-SemiBold.woff2` | 785856 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | src/fonts.ts | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `remotion.config.ts` | 110 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/analyze-assemble-tts-v4.py` | 2698 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/analyze-tts-candidates-v3.py` | 2542 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/audio-path-migration-v1.md; docs/audio-path-migration-v1.json | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-full-preview-v1.py` | 2340 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-full-preview-v2-scene01-v6.py` | 2606 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-full-preview-v2.py` | 2595 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-full-preview-v3.py` | 2606 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v3-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-full-tts-qa-v5.py` | 2412 | QA/비교 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-scene01-tts-v10.py` | 2142 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-scene01-tts-v7.py` | 2072 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/assemble-scene01-tts-v9.py` | 2136 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/composite-cover-sh30-v1.py` | 1605 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-composite-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/composite-sh30-exterior-v1.py` | 3192 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-internal-v1.cjs; src/sh30-internal-v1.tsx | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/contact_sheet.py` | 2011 | QA/비교 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/cover-v1-preservation.json` | 2268 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v1-audio-verification.json` | 1054 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v1-frame-verification.json` | 67 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v1-preservation.json` | 2351 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v1.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v2-frame-verification.json` | 76 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v2-preservation.json` | 2351 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v2-scene01-v6-preservation.json` | 2351 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v2-scene01-v6.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v2-scene01-v6-verification.json` | 472 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v3-scene01-v7-preservation.json` | 2351 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-full-preview-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-preview-v3-scene01-v7-verification.json` | 472 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/pocket-door-doormaster-full-preview-v3-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/full-tts-qa-v5-analysis.json` | 3344 | QA/비교 | 최종 또는 재현/검증 보존 | scripts/assemble-full-tts-qa-v5.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v10-part-b.py` | 1670 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v4.py` | 1665 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v5.py` | 1664 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v6.py` | 1688 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v7.py` | 1863 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v8.py` | 1703 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene01-tts-v9-part-a.py` | 1683 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene03-tts-v2.py` | 1760 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/audio-path-migration-v1.md; docs/audio-path-migration-v1.json | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-scene03-tts-v4.py` | 1743 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-tts-batch-20261104.py` | 1502 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/generate-tts-candidates-v3.py` | 1642 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/audio-path-migration-v1.md; docs/audio-path-migration-v1.json | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/pocket-door-sh30-exploded-concept-v1-layout.json` | 1336 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-sh30-exploded-concept-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/pocket-door-sh30-exploded-concept-v2-layout.json` | 1534 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-sh30-exploded-concept-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/pocket-door-sh30-exterior-v1-layout.json` | 1706 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/composite-sh30-exterior-v1.py; scripts/render-sh30-internal-v1.cjs; scripts/render-sh30-recess-pair-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/pocket-door-sh30-internal-v1-layout.json` | 1341 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-internal-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/pocket-door-sh30-pre-assembly-v1-layout.json` | 1590 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-pre-assembly-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/pocket-door-sh30-recess-pair-v1-layout.json` | 1006 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-recess-pair-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-assembly-motion-test-v1.cjs` | 962 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-assembly-motion-test-v1.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-layered-section-test-v1.cjs` | 601 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-layered-section-test-v1.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-motion-test-v1.cjs` | 1057 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-motion-test-v1.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-motion-test-v2.cjs` | 947 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-motion-test-v2.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-photo-section-v2.cjs` | 587 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-photo-section-v2.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-pocket-cover-v1.cjs` | 604 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-pocket-cover-v2.cjs` | 604 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-final-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-realistic-section-test-v1.cjs` | 605 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-realistic-section-test-v1.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-02-doormaster-v1.cjs` | 1881 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-02-doormaster-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-02-safe-area-v3.cjs` | 1979 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-handle-types-v3.cjs` | 1006 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-doormaster-v3-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-handle-types-v4.cjs` | 451 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-doormaster-v4-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-handle-types-v5.cjs` | 451 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-images-v7.cjs` | 457 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-doormaster-v7-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene01-subtitle-v6.cjs` | 450 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-doormaster-v6-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene02-doormaster-v2.cjs` | 1926 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-concept-v2-layout-fix.cjs` | 1069 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-2d-comparison-v1.cjs` | 625 | QA/비교 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-concept-v1.cjs` | 1090 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-concept-v2.cjs` | 1090 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-concept-v3.cjs` | 1090 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-concept-v4.cjs` | 1090 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-mismatch-v1.cjs` | 1092 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-preview-v1.cjs` | 1164 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-doormaster-preview-v2.cjs` | 1517 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-doormaster-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-remotion-motion-test-v1.cjs` | 2393 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-remotion-motion-test-v2.cjs` | 2393 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-remotion-motion-test-v3.cjs` | 2393 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene03-remotion-motion-test-v4.cjs` | 2429 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene04-doormaster-preview-v1.cjs` | 1528 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene04-doormaster-preview-v2.cjs` | 1528 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene04-doormaster-preview-v3.cjs` | 1528 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v3-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene04-doormaster-preview-v4.cjs` | 1528 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v4-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene04-doormaster-preview-v5.cjs` | 1528 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v5-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-scene05-doormaster-preview-v1.cjs` | 1526 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene05-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-section-concept-v1.cjs` | 591 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-section-concept-v1.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-sh30-exploded-concept-v1.cjs` | 1875 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-sh30-exploded-concept-v2.cjs` | 2000 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-sh30-internal-v1.cjs` | 1768 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-sh30-pre-assembly-v1.cjs` | 2643 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/render-sh30-recess-pair-v1.cjs` | 2423 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v10-edit.json` | 444 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-scene01-tts-v10.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v10-part-b-request.json` | 358 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v10-part-b.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v10-preservation.json` | 3051 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-scene01-tts-v10.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v3-request.json` | 267 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v4-request.json` | 369 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v4.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v5-request.json` | 368 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v5.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v6-request.json` | 392 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v6.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v7-edit.json` | 416 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-scene01-tts-v7.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v7-part-a-request.json` | 233 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v7-part-b-request.json` | 234 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-tts-v9-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v7-preservation.json` | 2478 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v7.py; scripts/assemble-scene01-tts-v7.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v8-request.json` | 407 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v8.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v9-edit.json` | 442 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-scene01-tts-v9.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v9-part-a-request.json` | 373 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene01-tts-v9-part-a.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene01-tts-v9-preservation.json` | 2860 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/assemble-scene01-tts-v9.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene02-tts-v3-request.json` | 315 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene02-tts-v4-request.json` | 304 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene02-v2-preservation.json` | 711 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene01-02-doormaster-v2-qa.md; docs/scene01-02-safe-area-v3-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-ab-v1-preservation.json` | 364 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-concept-v2-source-hashes.json` | 473 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-concept-v3-source-hashes.json` | 865 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-concept-v4-source-hashes.json` | 600 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-preview-v1-preservation.json` | 476 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-preview-v2-preservation.json` | 712 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-doormaster-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-preview-v2-text-bounds.json` | 442 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene03-doormaster-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-remotion-motion-test-v1-layout.json` | 1345 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-remotion-motion-test-v2-layout.json` | 1345 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-remotion-motion-test-v3-layout.json` | 1345 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-remotion-motion-test-v4-layout.json` | 1408 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v4.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-tts-v2-request.json` | 464 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene03-tts-v2.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-tts-v3-request.json` | 320 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-tts-v4-measurements.json` | 813 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/analyze-assemble-tts-v4.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-tts-v4-request.json` | 446 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-scene03-tts-v4.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene03-tts-v5-request.json` | 324 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-preview-v1-preservation.json` | 704 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-preview-v1-text-bounds.json` | 850 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-preview-v2-preservation.json` | 824 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v2-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-preview-v3-preservation.json` | 949 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v3-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-preview-v4-preservation.json` | 1074 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v4-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-preview-v5-preservation.json` | 1308 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene04-doormaster-preview-v5-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-tts-v3-request.json` | 324 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene04-tts-v4-request.json` | 347 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene05-preview-v1-preservation.json` | 719 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/scene05-doormaster-preview-v1-qa.md | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene05-tts-v3-request.json` | 296 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/scene05-tts-v4-request.json` | 296 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/tts-batch-20261104-input.json` | 1316 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-tts-batch-20261104.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/tts-batch-20261104-preservation.json` | 3244 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/tts-candidates-v3-input.json` | 1341 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/generate-tts-candidates-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/tts-candidates-v3-measurements.json` | 4207 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/analyze-tts-candidates-v3.py | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `scripts/tts-v4-preservation-before.json` | 2088 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/doormaster-pocket-door-cover-v1.tsx` | 1846 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-pocket-cover-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/doormaster-pocket-door-cover-v2.tsx` | 1846 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-pocket-cover-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/fonts.ts` | 846 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/index.tsx` | 7462 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | package.json | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-02-doormaster-v1.tsx` | 5458 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-02-doormaster-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-02-safe-area-v3.tsx` | 5393 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-02-safe-area-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-handle-types-v3.tsx` | 1361 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-handle-types-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-handle-types-v4.tsx` | 1454 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-handle-types-v4.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-handle-types-v5.tsx` | 1454 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-handle-types-v5.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-images-v7.tsx` | 1509 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-images-v7.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene01-subtitle-v6.tsx` | 1509 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene01-subtitle-v6.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene02-doormaster-v2.tsx` | 5191 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene02-doormaster-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-assembly-motion-test-v1.tsx` | 4657 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-assembly-motion-test-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-compare-v5.tsx` | 1919 | QA/비교 | 최종 또는 재현/검증 보존 | render-compare-v5.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-concept-v6.tsx` | 1520 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-2d-comparison-v1.tsx` | 1880 | QA/비교 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-2d-comparison-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-concept-v1.tsx` | 4478 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-concept-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-concept-v2.tsx` | 4195 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-concept-v2-layout-fix.cjs; scripts/render-scene03-doormaster-concept-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-concept-v3.tsx` | 4182 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-concept-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-concept-v4.tsx` | 5470 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-concept-v4.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-mismatch-v1.tsx` | 4189 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-mismatch-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-preview-v1.tsx` | 2559 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-preview-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-doormaster-preview-v2.tsx` | 3117 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene03-doormaster-preview-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-layered-section-test-v1.tsx` | 6211 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-layered-section-test-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-motion-test-v1.tsx` | 3643 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-motion-test-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-motion-test-v2.tsx` | 6452 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-motion-test-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-overlay-v4.tsx` | 2746 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | render-overlay-v4.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-photo-section-v2.tsx` | 2850 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-photo-section-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-realistic-section-test-v1.tsx` | 5547 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-realistic-section-test-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-remotion-motion-test-v1.tsx` | 2757 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-remotion-motion-test-v2.tsx` | 4161 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-remotion-motion-test-v3.tsx` | 4297 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-remotion-motion-test-v4.tsx` | 4070 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-scene03-remotion-motion-test-v4.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene03-section-concept-v1.tsx` | 3084 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-section-concept-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene04-doormaster-preview-v1.tsx` | 1804 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene04-doormaster-preview-v2.tsx` | 1812 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene04-doormaster-preview-v3.tsx` | 1514 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene04-doormaster-preview-v4.tsx` | 1790 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v4.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene04-doormaster-preview-v5.tsx` | 1734 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene04-doormaster-preview-v5.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/scene05-doormaster-preview-v1.tsx` | 1255 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-scene05-doormaster-preview-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/sh30-exploded-concept-v1.tsx` | 5208 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-sh30-exploded-concept-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/sh30-exploded-concept-v2.tsx` | 5956 | 중간/실험 후보 | 최종 또는 재현/검증 보존 | scripts/render-sh30-exploded-concept-v2.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/sh30-internal-v1.tsx` | 2280 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-internal-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/sh30-pre-assembly-v1.tsx` | 1420 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-pre-assembly-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/sh30-recess-pair-v1.tsx` | 3381 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | scripts/render-sh30-recess-pair-v1.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `src/stills-v3.tsx` | 5900 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | render-stills-v3.cjs | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |
| `tsconfig.json` | 356 | 제작 자산/기록 | 최종 또는 재현/검증 보존 | 정적 검사 미발견; 동적 참조 미확정 | 최종 승인·제작/검증 소스·설정 또는 직접 의존 보존; 결과물/재현/검증 손실 |

### B. 보존 권장

| 상대경로(파일명 포함) | bytes | 생성 목적 | 최종 사용 | 참조 관계 | 이유·삭제 영향 |
|---|---:|---|---|---|---|
| `docs/26.11.02수정.md` | 4603 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-remotion-motion-test-v1-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/Shorts_제작_운영가이드.md.before-safe-area-20261104.bak` | 56119 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/approved-tts-v1.json` | 608 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/26.11.02수정.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/assembly-motion-test-v1-preservation.json` | 31999 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/assembly-motion-test-v1-qa.json` | 2710 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-assembly-motion-test-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/audio-path-migration-v1.json` | 5932 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-tts-v2-qa.md; docs/tts-candidates-v3-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/audio-path-migration-v1.md` | 1359 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/daesan_shorts_instructions.md.before-safe-area-20261104.bak` | 44960 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/doormaster-body-design-reference-tts-v3.md` | 2100 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/doormaster-pocket-door-handle-cover-v1-qa.md` | 4721 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/doormaster-pocket-door-handle-cover-v2-composite-qa.md` | 4197 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/doormaster-pocket-door-handle-cover-v2-final-qa.md` | 4195 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/doormaster-pocket-door-handle-cover-v2-qa.md` | 4913 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-final-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/full-tts-qa-v5-qa.md` | 3162 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/layered-section-test-v1-preservation.json` | 30401 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/layered-section-test-v1-qa.json` | 218 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-layered-section-test-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/mobile-safe-area-guide-20261104.diff` | 5450 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene01-02-safe-area-v3-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/motion-test-v1-qa.json` | 2671 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-assembly-motion-test-v1.md; docs/scene03-motion-test-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/motion-test-v2-preservation.json` | 30640 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/motion-test-v2-qa.json` | 2793 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-motion-test-v2.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/photo-section-v2-preservation.json` | 28858 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/photo-section-v2-qa.json` | 85 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-photo-section-v2.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/pocket-door-doormaster-full-preview-v1-qa.md` | 4356 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/pocket-door-doormaster-full-preview-v2-qa-scene01-v5-preserved.md` | 3404 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/pocket-door-doormaster-full-preview-v2-qa.md` | 3919 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/pocket-door-doormaster-full-preview-v3-qa.md` | 3486 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/realistic-section-test-v1-preservation.json` | 30158 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/realistic-section-test-v1-qa.json` | 209 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-realistic-section-test-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-02-doormaster-v1-qa.md` | 3037 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-02-doormaster-v2-qa.md` | 1953 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-02-safe-area-v3-qa.md` | 3807 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-door-clean-background-v1-qa.md` | 3046 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-door-structure-review-v1.md` | 5220 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-doormaster-v3-qa.md` | 4947 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-doormaster-v4-qa.md` | 3994 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-doormaster-v5-qa.md` | 3435 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene01-doormaster-v5-test-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-doormaster-v5-test-qa.md` | 3622 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-doormaster-v6-qa.md` | 3243 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-doormaster-v7-qa.md` | 3040 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-edgepull-v1-qa.md` | 6021 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-edgepull-v2-qa.md` | 3398 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-privacy-v2-qa.md` | 5333 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-privacy-v3-qa.md` | 6229 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-privacy-v4-qa.md` | 5869 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-privacy-v5-qa.md` | 3784 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-round-v2-qa.md` | 4664 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-round-v3-qa.md` | 3234 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-types-base-v1-qa.md` | 5190 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-types-base-v2-qa.md` | 4499 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-handle-types-generation-v1-qa.md` | 3955 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-tts-v10-qa.md` | 3630 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene01-doormaster-v6-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-tts-v4-qa.md` | 2991 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-tts-v5-qa.md` | 2255 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-tts-v6-qa.md` | 2174 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-tts-v8-qa.md` | 2286 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene01-tts-v9-qa.md` | 3356 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-assembly-motion-test-v1.md` | 3020 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-2d-comparison-v1-qa.md` | 2639 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-ab-comparison-v1-qa.md` | 1522 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-concept-v1-qa.md` | 2577 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-concept-v2-qa.md` | 1796 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-concept-v3-qa.md` | 2715 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-concept-v4-qa.md` | 2433 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-preview-v1-qa.md` | 4292 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-doormaster-preview-v2-qa.md` | 5049 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-layered-section-test-v1.md` | 2179 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-motion-test-v2.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-motion-test-v1.md` | 3874 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-motion-test-v2.md` | 2932 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-assembly-motion-test-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-photo-section-v2.md` | 2271 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-motion-test-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-realistic-section-test-v1.md` | 2214 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-remotion-motion-test-v1-qa.md` | 2262 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-remotion-motion-test-v2-qa.md` | 2511 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-remotion-motion-test-v3-qa.md` | 2565 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-remotion-motion-test-v4-qa.md` | 2790 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-section-concept-v1.md` | 2158 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene03-tts-v2-qa.md` | 5072 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.md; docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene04-doormaster-preview-v1-qa.md` | 4142 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene04-doormaster-preview-v2-qa.md` | 3885 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene04-doormaster-preview-v3-qa.md` | 3917 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene04-doormaster-preview-v4-qa.md` | 3802 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene04-doormaster-preview-v5-qa.md` | 2469 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/scene05-doormaster-preview-v1-qa.md` | 3188 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/section-concept-v1-preservation.json` | 28629 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/section-concept-v1-qa.json` | 79 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene03-section-concept-v1.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/still-qa-v3.json` | 2115 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/visual-production-v3.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/sugatsune-zl2501-official-p71.pdf` | 484130 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/26.11.02수정.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/tts-candidates-v3-qa.md` | 5174 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.md; docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/tts-v4-natural-speech-qa.md` | 6285 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `docs/visual-production-v3.md` | 2642 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/full-tts-qa-v3.mp3` | 513644 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json; docs/tts-v4-natural-speech-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/full-tts-qa-v4.mp3` | 495404 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/tts-v4-natural-speech-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/full-tts-qa-v5.mp3` | 585644 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene01-tts-review-v3.mp3` | 59084 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene01-tts-review-v3.wav` | 137792 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene01-tts-v3.wav` | 147884 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene02-tts-review-v3.mp3` | 116684 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene02-tts-review-v3.wav` | 276144 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene02-tts-v3.wav` | 288044 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene03-tts-review-v3.mp3` | 121964 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene03-tts-review-v3.wav` | 288368 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene03-tts-review-v4.mp3` | 103724 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene03-tts-review-v4.wav` | 245156 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/tts-v4-natural-speech-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene03-tts-v3.wav` | 324524 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene04-tts-review-v3.mp3` | 121964 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene04-tts-review-v3.wav` | 289026 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene04-tts-v3.wav` | 293804 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene05-tts-review-v3.mp3` | 88844 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene05-tts-review-v3.wav` | 208696 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/audio/scene05-tts-v3.wav` | 220844 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/audio-path-migration-v1.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/pocket-door-doormaster-full-preview-v2-scene01-v5-preserved.mp4` | 10998203 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene01-02-doormaster-preview-v1.mp4` | 727423 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene01-02-doormaster-preview-v3.mp4` | 371554 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene01-doormaster-v4.mp4` | 893677 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene01-doormaster-v4-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene01-handle-round-hardcut-test-v1.mp4` | 431541 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/scene01-handle-round-v3-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene02-03-concept-motion-test-v1.mp4` | 225027 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene02-doormaster-v1.mp4` | 387706 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/assets/video/scene03-blender-assembly-motion-test-v19.mp4` | 409844 | 중간/실험 후보 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v1.png` | 450380 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v2.png` | 663695 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-final-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v1.png` | 588995 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v2.png` | 874148 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-final-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v1.png` | 564560 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 정적 검사 미발견; 동적 참조 미확정 | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v2.png` | 830339 | 제작 자산/기록 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-final-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v1.png` | 646467 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v1-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v2.png` | 655577 | QA/비교 | 최종 직접 사용 미확인; 이력 보존 | 기록: docs/doormaster-pocket-door-handle-cover-v2-final-qa.md | 승인/복구 이력·QA·공식자료 보수적 보존; 복구·감사 비교 근거 손실 |

### C. 삭제 검토

| 상대경로(파일명 포함) | bytes | 생성 목적 | 최종 사용 | 참조 관계 | 이유·삭제 영향 |
|---|---:|---|---|---|---|
| `.DS_Store` | 10244 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v1/build-authorized.log` | 2269 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v1/build.log` | 375 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v1/refine.log` | 2299 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v1/render-final.log` | 25196 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v2/render-authorized.log` | 1200 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v2/render.log` | 375 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v3/render-authorized.log` | 936 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v3/render.log` | 375 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v4/render-authorized.log` | 960 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v4/render.log` | 375 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v5/render-authorized.log` | 831 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `blender/concept-v5/render.log` | 375 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `public/.DS_Store` | 8196 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |
| `public/assets/.DS_Store` | 12292 | 제작 자산/기록 | 최종 미사용 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | OS 메타데이터/임시 실행 기록, 소스 참조 없음; 미디어 영향 없음; 실행 로그 이력 감소 |

### D. 판단 보류

| 상대경로(파일명 포함) | bytes | 생성 목적 | 최종 사용 | 참조 관계 | 이유·삭제 영향 |
|---|---:|---|---|---|---|
| `README.md` | 511 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/README.md` | 3907 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/build_motion.py` | 5533 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/build_motion_final.py` | 7086 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/build_motion_refined.py` | 7018 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/encode-test-v1.sh` | 286 | 중간/실험 후보 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/pocket-core-motion-reviewed-v1.blend` | 155139 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/pocket-core-motion-test-v1.blend` | 155083 | 중간/실험 후보 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/pocket-core-motion-v1.blend` | 153647 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/qa-v1.json` | 640 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v1/qa_test.py` | 1730 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/README.md` | 3445 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/build_v10.py` | 4570 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/geometry-qa.json` | 699 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/pocket-handle-post-assembly-v10.blend` | 113621 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/pocket-handle-pre-assembly-v10.blend` | 113189 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/preservation-before.json` | 36180 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v10/preservation-qa.json` | 143 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v11/README.md` | 2201 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v11/build_v11.py` | 3799 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v11/geometry-qa.json` | 586 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v11/pocket-handle-pre-assembly-v11.blend` | 112633 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v11/preservation-before.json` | 37233 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v11/preservation-qa.json` | 43 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/README.md` | 3217 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/build_v12.py` | 6798 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/geometry-qa.json` | 2283 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/pocket-handle-alignment-front-v12.blend` | 115563 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/pocket-handle-alignment-oblique-v12.blend` | 115537 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/preservation-before.json` | 38029 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v12/preservation-qa.json` | 37 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v13/README.md` | 2767 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v13/build_v13.py` | 4515 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v13/geometry-qa.json` | 953 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v13/pocket-handle-reinforcement-cutaway-v13.blend` | 118857 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v13/preservation-before.json` | 39096 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v13/preservation-qa.json` | 37 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/README.md` | 2706 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/build_v14.py` | 5524 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/geometry-qa.json` | 4080 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/pocket-handle-single-cutout-post-v14.blend` | 121319 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/pocket-handle-single-cutout-pre-v14.blend` | 121309 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/preservation-before.json` | 39910 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v14/preservation-qa.json` | 37 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v15/README.md` | 2479 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v15/build_v15.py` | 5738 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v15/geometry-qa.json` | 5315 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v15/pocket-handle-xray-reinforcement-v15.blend` | 128119 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v15/preservation-before.json` | 40983 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v15/preservation-qa.json` | 63 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v16/README.md` | 2357 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v16/build_v16.py` | 4993 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v16/geometry-qa.json` | 4878 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v16/pocket-handle-horizontal-section-v16.blend` | 133878 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v16/preservation-before.json` | 41791 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v16/preservation-qa.json` | 43 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v17/README.md` | 2552 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v17/build_v17.py` | 6094 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v17/geometry-qa.json` | 646 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v17/pocket-handle-horizontal-section-v17.blend` | 139040 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v17/preservation-before.json` | 42599 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v17/preservation-qa.json` | 43 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v18/README.md` | 2493 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v18/build_v18.py` | 4674 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v18/geometry-qa.json` | 8845 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v18/pocket-handle-horizontal-section-v18.blend` | 138829 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v18/preservation-before.json` | 43407 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v18/preservation-qa.json` | 43 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/README.md` | 3569 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/build_v19.py` | 5745 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/build_v19_checked.py` | 5876 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/final-image-comparison.json` | 148 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/finish_v19.py` | 2115 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/independent-geometry-qa.json` | 242 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/motion-qa-checked.json` | 24518 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/motion-qa.json` | 24518 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/preservation-before.json` | 44215 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/preservation-qa.json` | 52 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/render-manifest-checked.json` | 56584 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/render-manifest.json` | 55040 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/scene03-assembly-motion-v19-checked.blend` | 167866 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/scene03-assembly-motion-v19.blend` | 167823 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/verify_v19.py` | 1530 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/verify_v19_tolerance.py` | 1624 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v19/video-probe.json` | 2968 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v2/README.md` | 2653 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v2/build_cutaway.py` | 6412 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v2/pocket-handle-macro-cutaway-v2.blend` | 118282 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v2/preservation-before.json` | 23813 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v3/README.md` | 2660 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v3/build_cutaway_v3.py` | 4507 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v3/geometry-qa.json` | 1005 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v3/pocket-handle-macro-cutaway-v3.blend` | 123332 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v3/preservation-before.json` | 24703 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v3/qa-v3.json` | 1406 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/visual-production-v3.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v4/README.md` | 2933 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v4/build_cutaway_v4.py` | 3125 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v4/geometry-qa.json` | 873 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v4/pocket-handle-cutaway-v4.blend` | 114277 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v4/preservation-before.json` | 25703 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v4/preservation-qa.json` | 196 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v5/README.md` | 2375 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v5/before.json` | 26922 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v5/build_v5.py` | 4045 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v5/comparison-v5.blend` | 190991 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v5/geometry-qa.json` | 220 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v5/preservation-qa.json` | 93 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/README.md` | 2789 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/build_v6.py` | 3172 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/geometry-qa.json` | 1037 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/pocket-handle-cutaway-v6.blend` | 107581 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/preservation-before.json` | 27418 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/preservation-qa.json` | 94 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v6/render-overlay-v6.cjs` | 657 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v7/README.md` | 3370 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v7/build_v7.py` | 5292 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v7/geometry-qa.json` | 1108 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v7/pocket-handle-reinforced-assembly-v7.blend` | 112967 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v7/preservation-before.json` | 33443 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v7/preservation-qa.json` | 79 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v8/README.md` | 3343 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v8/build_v8.py` | 4105 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v8/geometry-qa.json` | 535 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v8/pocket-handle-layout-check-v8.blend` | 112773 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v8/preservation-before.json` | 34244 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v8/preservation-qa.json` | 77 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/README.md` | 3462 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/build_v9.py` | 4634 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/finish_post_v9.py` | 1028 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/geometry-qa.json` | 810 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/pocket-handle-post-assembly-v9.blend` | 112662 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/pocket-handle-pre-assembly-v9.blend` | 112750 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/preservation-before.json` | 35031 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `blender/concept-v9/preservation-qa.json` | 143 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0001.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0002.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0003.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0004.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0005.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0006.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0007.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0008.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0009.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0010.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0011.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0012.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0013.png` | 417881 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0014.png` | 417404 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0015.png` | 417928 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0016.png` | 417979 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0017.png` | 417380 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0018.png` | 417703 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0019.png` | 417504 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0020.png` | 417152 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0021.png` | 417641 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0022.png` | 417144 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0023.png` | 417910 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0024.png` | 417143 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0025.png` | 416756 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0026.png` | 416479 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0027.png` | 417043 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0028.png` | 417515 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0029.png` | 417101 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0030.png` | 418675 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0031.png` | 418961 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0032.png` | 418672 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0033.png` | 419809 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0034.png` | 419237 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0035.png` | 420673 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0036.png` | 421111 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0037.png` | 421736 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0038.png` | 420842 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0039.png` | 423400 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0040.png` | 423901 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0041.png` | 422217 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0042.png` | 422651 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0043.png` | 423093 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0044.png` | 423312 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0045.png` | 423031 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0046.png` | 422837 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0047.png` | 422142 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0048.png` | 421771 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0049.png` | 422277 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0050.png` | 421534 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0051.png` | 421071 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0052.png` | 419499 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0053.png` | 419254 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0054.png` | 420223 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0055.png` | 419862 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0056.png` | 417838 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0057.png` | 423490 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0058.png` | 422823 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0059.png` | 418319 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0060.png` | 419986 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0061.png` | 423069 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0062.png` | 426074 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0063.png` | 421608 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0064.png` | 419421 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0065.png` | 420863 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0066.png` | 420513 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0067.png` | 421021 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0068.png` | 420785 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0069.png` | 419013 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0070.png` | 420632 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0071.png` | 420711 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0072.png` | 420463 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0073.png` | 420477 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0074.png` | 420015 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0075.png` | 419430 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0076.png` | 419860 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0077.png` | 420700 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0078.png` | 420729 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0079.png` | 420215 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0080.png` | 419585 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0081.png` | 420367 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0082.png` | 419279 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0083.png` | 420135 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0084.png` | 417150 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0085.png` | 419613 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0086.png` | 420417 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0087.png` | 420078 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0088.png` | 420553 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0089.png` | 421132 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0090.png` | 420298 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0091.png` | 420165 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0092.png` | 421181 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0093.png` | 421248 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0094.png` | 421139 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0095.png` | 421062 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0096.png` | 421299 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0097.png` | 421010 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0098.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0099.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0100.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0101.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0102.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0103.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0104.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0105.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0106.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0107.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0108.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0109.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0110.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0111.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0112.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0113.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0114.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0115.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0116.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0117.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0118.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0119.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/frame-0120.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/key-001.png` | 418321 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/key-043.png` | 423093 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/key-064.png` | 419421 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/key-077.png` | 420700 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/key-120.png` | 421259 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/key-states-contact-v1.png` | 319820 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/review-001.png` | 418127 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/review-043.png` | 423095 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/review-064.png` | 419084 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/review-077.png` | 420777 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/review-120.png` | 422521 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/state-001.png` | 416675 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/state-043.png` | 416219 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/state-064.png` | 416204 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/state-077.png` | 421692 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/concept-motion-v1/state-120.png` | 422770 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/contact-sheet-v3.png` | 243638 | QA/비교 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/visual-production-v3.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/domus-CIS_7622-v3.jpg` | 64120 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/domus-DSL140-1-4-v3.jpg` | 86844 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/domus-DSL140-6-v3.jpg` | 21923 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/domus-SH30NI-1-1-v3.jpg` | 9536 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/official-p71-6000.png` | 1655645 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/official-section-verified-detail.png` | 305749 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/official-zl-front.png` | 51823 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2-scene01-v5-preserved.png` | 1599230 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2.png` | 1597865 | QA/비교 | 판단 보류 | 기록: docs/pocket-door-doormaster-full-preview-v2-qa-scene01-v5-preserved.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v3.png` | 1604740 | QA/비교 | 판단 보류 | 기록: docs/pocket-door-doormaster-full-preview-v3-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-full-qa-v2-scene01-v5-preserved.png` | 702147 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2-scene01-v5-preserved.png` | 261936 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2.png` | 425930 | QA/비교 | 판단 보류 | 기록: docs/pocket-door-doormaster-full-preview-v2-qa-scene01-v5-preserved.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v3.png` | 329047 | QA/비교 | 판단 보류 | 기록: docs/pocket-door-doormaster-full-preview-v3-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-cutaway-edit-source-v2.png` | 1603949 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-cutaway-source-v1.png` | 1791455 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-cutaway-v1.png` | 481091 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-cutaway-v2.png` | 475745 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-exploded-source-v1.png` | 1865697 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-internal-open-source-v1.png` | 1845446 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-internal-section-source-v1.png` | 1816621 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-door-sh30-internal-section-v1.png` | 508112 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-alignment-front-v12.png` | 440811 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-alignment-oblique-v12.png` | 438259 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-horizontal-section-v16.png` | 446033 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-horizontal-section-v17.png` | 447370 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-horizontal-section-v18.png` | 429519 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-layout-check-v8.png` | 450546 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-macro-cutaway-v2.png` | 1703891 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-macro-cutaway-v3.png` | 1730493 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-post-assembly-v10.png` | 442473 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-post-assembly-v9.png` | 448886 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-pre-assembly-v10.png` | 449558 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-pre-assembly-v11.png` | 446068 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-pre-assembly-v9.png` | 444599 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-reinforced-assembly-v7.png` | 1724805 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-reinforcement-cutaway-v13.png` | 440954 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-single-cutout-post-v14.png` | 435561 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-single-cutout-pre-v14.png` | 436008 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/pocket-handle-xray-reinforcement-v15.png` | 437438 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-01-exterior-v1.png` | 557863 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-01-exterior-v2.png` | 511343 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-01-exterior-v3.png` | 270946 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-02-position-v3.png` | 268113 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-02-recess-v2.png` | 211388 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-03-conditions-v3.png` | 276835 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s02-03-fixing-v2.png` | 216884 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s03-01-internal-check-v3.png` | 286820 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s03-01-support-v2.png` | 238977 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s03-02-location-check-v3.png` | 298656 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s03-02-mismatch-v1.png` | 244654 | 중간/실험 후보 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s04-01-basic-check-v3.png` | 293132 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s04-02-lock-example-v3.png` | 302576 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s04-02-review-v2.png` | 242434 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/s04-03-final-check-v3.png` | 254670 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-02-doormaster-qa-v1.png` | 260997 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-02-doormaster-qa-v2.png` | 159283 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-02-safe-area-qa-v3.png` | 337798 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-clean-background-before-after-v1.png` | 1143219 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-clean-background-comparison-v1.png` | 1070674 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-clean-background-mobile-v1.png` | 605317 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-right-edge-detail-v1.png` | 1341843 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-door-structure-review-v1.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-structure-comparison-v1.png` | 1068000 | QA/비교 | 판단 보류 | 기록: docs/scene01-door-structure-review-v1.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-structure-mobile-qa-v1.png` | 603303 | QA/비교 | 판단 보류 | 기록: docs/scene01-door-structure-review-v1.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-door-structure-removal-mask-v1.png` | 1025454 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-door-structure-review-v1.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v3-mobile-qa.png` | 298731 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v3-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v3-qa.png` | 433317 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v3-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v4-qa.png` | 557191 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v4-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v5-mobile-qa.png` | 411781 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v5-test-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v6-mobile-qa.png` | 270013 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v6-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v6-qa.png` | 551546 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v6-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v7-compare.png` | 806827 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v7-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v7-mobile-qa.png` | 407144 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v7-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-doormaster-v7-qa.png` | 560765 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v7-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-edgepull-door-boundary-v5.png` | 1880967 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-doormaster-v5-test-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-edgepull-position-compare-v4.png` | 259663 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v4-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-edgepull-position-compare-v5.png` | 297390 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v5-test-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-edgepull-compare-v1.png` | 598039 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-edgepull-compare-v2.png` | 355321 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-edgepull-mobile-v1.png` | 187842 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-edgepull-mobile-v2.png` | 185764 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-edgepull-v1.png` | 1646979 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-edgepull-v2-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-compare-v2.png` | 371743 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-compare-v3.png` | 373490 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-compare-v4.png` | 373311 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-compare-v5.png` | 407093 | QA/비교 | 판단 보류 | 기록: docs/scene01-handle-privacy-v5-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-mobile-v2.png` | 186091 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-mobile-v3.png` | 187833 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-mobile-v4.png` | 187700 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-mobile-v5.png` | 188389 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-privacy-v5-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-v1.png` | 1600121 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-generation-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-v2.png` | 1624369 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-privacy-v5-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-v3.png` | 1639727 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-privacy-v5-qa.md; docs/scene01-handle-privacy-v4-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-privacy-v4.png` | 1584527 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-round-compare-v2.png` | 374554 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-round-compare-v3.png` | 222783 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-round-mobile-v2.png` | 188417 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-round-mobile-v3.png` | 188146 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-round-v1.png` | 1649988 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-generation-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-round-v2.png` | 1662250 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-round-v3-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-square-v1.png` | 1654406 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-generation-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-types-base-compare-v2.png` | 410249 | QA/비교 | 판단 보류 | 기록: docs/scene01-handle-types-base-v2-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-types-base-mobile-v1.png` | 221010 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-base-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-types-base-mobile-v2.png` | 187708 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-base-v2-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-types-base-v1.png` | 1959969 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-base-v1-qa.md; docs/scene01-handle-types-base-v2-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-types-comparison-v1.png` | 1802306 | QA/비교 | 판단 보류 | 기록: docs/scene01-handle-types-generation-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-handle-types-mobile-v1.png` | 738766 | 제작 자산/기록 | 판단 보류 | 기록: docs/scene01-handle-types-generation-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene01-subtitle-compare-v6.png` | 162435 | QA/비교 | 판단 보류 | 기록: docs/scene01-doormaster-v6-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-contact-sheet.png` | 253456 | QA/비교 | 판단 보류 | 기록: docs/scene03-assembly-motion-test-v1.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f000.png` | 534592 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f024.png` | 534592 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f046.png` | 519674 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f068.png` | 464593 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f088.png` | 464593 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f108.png` | 517484 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f125.png` | 518887 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-assembly-motion-test-v1-f165.png` | 518887 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-blender-assembly-contact-sheet-v19.png` | 595758 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-blender-assembly-key-001-v19.png` | 435395 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-blender-assembly-key-085-v19.png` | 428339 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-blender-assembly-key-141-v19.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-2d-comparison-mobile-v1.png` | 47449 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-2d-comparison-mobile-v2.png` | 48438 | QA/비교 | 판단 보류 | 기록: docs/scene03-doormaster-preview-v1-qa.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-ab-comparison-v1.png` | 249451 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-concept-mobile-v1.png` | 192487 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-concept-mobile-v2.png` | 184453 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-concept-mobile-v3.png` | 181545 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-concept-mobile-v4.png` | 145327 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-doormaster-mismatch-mobile-v1.png` | 182459 | 중간/실험 후보 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v1-contact-sheet.png` | 213947 | QA/비교 | 판단 보류 | 기록: docs/realistic-section-test-v1-preservation.json; docs/motion-test-v2-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v1-f000.png` | 370132 | 중간/실험 후보 | 판단 보류 | 기록: docs/realistic-section-test-v1-preservation.json; docs/motion-test-v2-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v1-f044.png` | 395858 | 중간/실험 후보 | 판단 보류 | 기록: docs/realistic-section-test-v1-preservation.json; docs/motion-test-v2-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v1-f064.png` | 401478 | 중간/실험 후보 | 판단 보류 | 기록: docs/realistic-section-test-v1-preservation.json; docs/motion-test-v2-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v1-f088.png` | 401716 | 중간/실험 후보 | 판단 보류 | 기록: docs/realistic-section-test-v1-preservation.json; docs/motion-test-v2-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v1-f120.png` | 409193 | 중간/실험 후보 | 판단 보류 | 기록: docs/realistic-section-test-v1-preservation.json; docs/motion-test-v2-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-contact-sheet.png` | 343052 | QA/비교 | 판단 보류 | 기록: docs/scene03-motion-test-v2.md; docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f000.png` | 370132 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f044.png` | 395858 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f055.png` | 496616 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f064.png` | 573677 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f076.png` | 598156 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f088.png` | 595849 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f098.png` | 605003 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-motion-test-v2-f120.png` | 605003 | 중간/실험 후보 | 판단 보류 | 기록: docs/assembly-motion-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-reinforcement-concept-v6.png` | 1802518 | 중간/실험 후보 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-remotion-motion-test-v1-contact-sheet.png` | 389765 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-remotion-motion-test-v2-contact-sheet.png` | 522401 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-remotion-motion-test-v3-contact-sheet.png` | 523019 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-remotion-motion-test-v4-contact-sheet.png` | 502425 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-support-mismatch-v5.png` | 1903042 | 중간/실험 후보 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/scene03-support-review-v5.png` | 1905834 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0001.png` | 435395 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0026.png` | 436139 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0027.png` | 437048 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0028.png` | 436465 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0029.png` | 433647 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0030.png` | 431968 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0031.png` | 431895 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0032.png` | 431187 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0033.png` | 430585 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0034.png` | 430994 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0035.png` | 430654 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0036.png` | 430529 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0037.png` | 432592 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0038.png` | 430089 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0039.png` | 428008 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0040.png` | 427704 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0041.png` | 427037 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0042.png` | 427702 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0043.png` | 427312 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0106.png` | 426445 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0108.png` | 428008 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0109.png` | 429273 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0110.png` | 431950 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0112.png` | 430789 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0113.png` | 430297 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0114.png` | 430277 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0116.png` | 432459 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0117.png` | 434317 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0118.png` | 436687 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0120.png` | 435983 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0121.png` | 435296 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0122.png` | 436601 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0123.png` | 436445 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0124.png` | 436155 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0125.png` | 435503 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0126.png` | 435209 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0127.png` | 435228 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0128.png` | 435375 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0129.png` | 436514 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0130.png` | 437170 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0131.png` | 437018 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0132.png` | 437120 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0133.png` | 437229 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0134.png` | 438620 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0135.png` | 437695 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0136.png` | 436057 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0137.png` | 437320 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0138.png` | 436898 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0139.png` | 437953 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0140.png` | 435428 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-ext-0141.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0044.png` | 421210 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0062.png` | 421457 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0063.png` | 421550 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0064.png` | 422328 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0065.png` | 422082 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0066.png` | 422781 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0067.png` | 423360 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0068.png` | 423609 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0069.png` | 423710 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0070.png` | 424227 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0071.png` | 424530 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0072.png` | 424868 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0073.png` | 425061 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0074.png` | 425380 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0075.png` | 426186 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0076.png` | 425871 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0077.png` | 426422 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0078.png` | 426791 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0079.png` | 427169 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0080.png` | 427373 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0081.png` | 427713 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0082.png` | 427835 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0083.png` | 428170 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0084.png` | 428213 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/checked-sec-0085.png` | 428339 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0001.png` | 383865 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0026.png` | 379479 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0027.png` | 368511 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0028.png` | 370682 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0029.png` | 369705 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0030.png` | 376677 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0031.png` | 394270 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0032.png` | 420149 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0033.png` | 428017 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0035.png` | 417705 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0036.png` | 420971 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0037.png` | 423712 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0038.png` | 424959 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0039.png` | 425942 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0040.png` | 428165 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0041.png` | 428056 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0042.png` | 429241 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0043.png` | 429063 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0106.png` | 428841 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0108.png` | 427961 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0109.png` | 425419 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/ext-0110.png` | 424012 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0001.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0002.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0003.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0004.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0005.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0006.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0007.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0008.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0009.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0010.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0011.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0012.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0013.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0014.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0015.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0016.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0017.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0018.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0019.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0020.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0021.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0022.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0023.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0024.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0025.png` | 435395 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0026.png` | 436139 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0027.png` | 437048 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0028.png` | 436465 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0029.png` | 433647 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0030.png` | 431968 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0031.png` | 431895 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0032.png` | 431187 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0033.png` | 430585 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0034.png` | 430994 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0035.png` | 430654 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0036.png` | 430529 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0037.png` | 432592 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0038.png` | 430089 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0039.png` | 428008 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0040.png` | 427704 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0041.png` | 427037 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0042.png` | 427702 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0043.png` | 427312 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0044.png` | 331961 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0045.png` | 333238 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0046.png` | 334306 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0047.png` | 335097 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0048.png` | 336787 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0049.png` | 335231 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0050.png` | 336539 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0051.png` | 336432 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0052.png` | 332514 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0053.png` | 336173 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0054.png` | 334306 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0055.png` | 336329 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0056.png` | 334772 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0057.png` | 332281 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0058.png` | 329414 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0059.png` | 328454 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0060.png` | 325910 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0061.png` | 421210 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0062.png` | 421457 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0063.png` | 421550 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0064.png` | 422328 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0065.png` | 422082 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0066.png` | 422781 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0067.png` | 423360 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0068.png` | 423609 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0069.png` | 423710 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0070.png` | 424227 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0071.png` | 424530 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0072.png` | 424868 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0073.png` | 425061 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0074.png` | 425380 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0075.png` | 426186 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0076.png` | 425871 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0077.png` | 426422 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0078.png` | 426791 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0079.png` | 427169 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0080.png` | 427373 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0081.png` | 427713 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0082.png` | 427835 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0083.png` | 428170 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0084.png` | 428213 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0085.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0086.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0087.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0088.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0089.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0090.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0091.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0092.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0093.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0094.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0095.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0096.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0097.png` | 428339 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0098.png` | 335410 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0099.png` | 340319 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0100.png` | 344020 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0101.png` | 340157 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0102.png` | 338802 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0103.png` | 338767 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0104.png` | 335078 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0105.png` | 332063 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0106.png` | 426445 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0107.png` | 427037 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0108.png` | 428008 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0109.png` | 429273 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0110.png` | 431950 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0111.png` | 430529 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0112.png` | 430789 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0113.png` | 430297 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0114.png` | 430277 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0115.png` | 431895 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0116.png` | 432459 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0117.png` | 434317 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0118.png` | 436687 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0119.png` | 436139 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0120.png` | 435983 | 제작 자산/기록 | 판단 보류 | 기록: docs/section-concept-v1-preservation.json; docs/realistic-section-test-v1-preservation.json | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0121.png` | 435296 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0122.png` | 436601 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0123.png` | 436445 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0124.png` | 436155 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0125.png` | 435503 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0126.png` | 435209 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0127.png` | 435228 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0128.png` | 435375 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0129.png` | 436514 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0130.png` | 437170 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0131.png` | 437018 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0132.png` | 437120 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0133.png` | 437229 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0134.png` | 438620 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0135.png` | 437695 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0136.png` | 436057 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0137.png` | 437320 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0138.png` | 436898 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0139.png` | 437953 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0140.png` | 435428 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0141.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0142.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0143.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0144.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0145.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0146.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0147.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0148.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0149.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0150.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0151.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0152.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0153.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0154.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0155.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0156.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0157.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0158.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0159.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0160.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0161.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0162.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0163.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0164.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0165.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0166.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0167.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/frame-0168.png` | 435443 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0044.png` | 421202 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0062.png` | 421449 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0063.png` | 421542 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0064.png` | 422320 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0065.png` | 422074 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0066.png` | 422773 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0067.png` | 423352 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0068.png` | 423601 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0069.png` | 423702 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0070.png` | 424219 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0071.png` | 424522 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0072.png` | 424860 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0073.png` | 425053 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0074.png` | 425372 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0075.png` | 426178 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0076.png` | 425863 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0077.png` | 426414 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0078.png` | 426783 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0079.png` | 427161 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0080.png` | 427365 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0081.png` | 427705 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0082.png` | 427827 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0083.png` | 428162 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0084.png` | 428205 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `public/assets/images/v19-frames/sec-0085.png` | 428331 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `render-compare-v5.cjs` | 746 | QA/비교 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `render-overlay-v4.cjs` | 509 | 제작 자산/기록 | 판단 보류 | 정적 검사 미발견; 동적 참조 미확정 | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |
| `render-stills-v3.cjs` | 531 | 제작 자산/기록 | 판단 보류 | 기록: docs/visual-production-v3.md | 최종 사용/동적 참조·재현 의존 확인 불충분; 삭제 안전성 미확인 |

## LFS 필터 현황 (10MiB 이상)

```text
projects/pocket-door-handle-reinforcement-shorts-v1/public/assets/video/pocket-door-doormaster-full-preview-v1.mp4: filter: unspecified
projects/pocket-door-handle-reinforcement-shorts-v1/public/assets/video/pocket-door-doormaster-full-preview-v2-scene01-v5-preserved.mp4: filter: unspecified
projects/pocket-door-handle-reinforcement-shorts-v1/public/assets/video/pocket-door-doormaster-full-preview-v2.mp4: filter: unspecified
projects/pocket-door-handle-reinforcement-shorts-v1/public/assets/video/pocket-door-doormaster-full-preview-v3.mp4: filter: unspecified
```
