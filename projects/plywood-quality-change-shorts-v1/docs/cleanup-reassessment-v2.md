# 완료 결과물 정리 재점검 v2

이전 cleanup 판정을 승계하지 않고 최신 사용자 지시, 통합 지침 §8, 운영 가이드 §18, Monorepo 정리 순서를 적용했습니다. 삭제·이동·렌더·소스 변경·Git 변경은 하지 않았습니다. node_modules는 유지합니다.

전체현재 153,685,683bytes, node_modules 0bytes 포함. C 3파일/3,188,775bytes, C만정리할경우 150,496,908bytes 예상. 논리파일크기 기준,APFS할당량/휴지통비우기 전실제여유공간과다름. 보고서작성전측정값.

## 최종 결과물 보존
- `public/assets/video/plywood-quality-change-preview-v3.mp4` / SHA256 `6c927e42152ae48f78c5fc54f5170fab8f279a80789cda45fd47d556de879e03`
- `public/covers/plywood-quality-change-cover-v3.png` / SHA256 `c9e2a227bdfd4e67a26a45ebf4a923de40cfd726c31948390c73bf8972e58ed7`
- `docs/sns-copy-v1.md` / SHA256 `730a606571276f32a45b62b6f083ff8595058924674c60510e5f8ae51afbb3d3`

Scene최종목록은A표에별도보존. 엔딩/폰트/로고/간판/Canonical/공식출처/소스·설정/package·lockfile/날짜형기록은 조사범위밖이어도 모두보존하며C에포함안함.

## 판단과 재현 위험
- 이전영상/TTS48개 정리는 기록과 현재파일상태가 대체로 일치. 남은Cover v1/구크롭3개는 C. Coverv2/raw는 최종v3 의존으로 B.
- 루트 qa/에는 과거자료가 있을 수 있으나 이번명시5경로밖이므로 후보량에 포함하지 않음. 전체용량에는 포함.

직접참조는최종소스와과거소스를구분한리터럴검색이며출력파일명도검출될수있다. 동적Scene/TTS/시퀀스는조립코드·작업기록으로보완. 문서언급만으로보존하지않음. C를이동하면과거테스트재현/비교문서의일부경로는없어질수있으나최종사용과구분했다. 모든후보는승인전유지.

## A. 최종 승인 결과물 — 14파일 / 16,203,791bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/scene01-tts-v2.mp3` | 134828 | 최종 사용: 최종 승인 TTS S1v2/S2~6v7 | 리터럴없음; 위근거참조 | src/preview-data-v3.json, src/preview-data.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/audio/scene02-tts-v7.mp3` | 14976 | 최종 사용: 최종 승인 TTS S1v2/S2~6v7 | 리터럴없음; 위근거참조 | src/preview-data-v3.json, scripts/tts-input-v7.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/audio/scene03-tts-v7.mp3` | 26592 | 최종 사용: 최종 승인 TTS S1v2/S2~6v7 | 리터럴없음; 위근거참조 | src/preview-data-v3.json, scripts/tts-input-v7.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/audio/scene04-tts-v7.mp3` | 27744 | 최종 사용: 최종 승인 TTS S1v2/S2~6v7 | 리터럴없음; 위근거참조 | src/preview-data-v3.json, scripts/tts-input-v7.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/audio/scene05-tts-v7.mp3` | 28512 | 최종 사용: 최종 승인 TTS S1v2/S2~6v7 | 리터럴없음; 위근거참조 | src/preview-data-v3.json, scripts/tts-input-v7.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/audio/scene06-tts-v7.mp3` | 31776 | 최종 사용: 최종 승인 TTS S1v2/S2~6v7 | 리터럴없음; 위근거참조 | src/preview-data-v3.json, scripts/tts-input-v7.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/plywood-quality-change-preview-v3.mp4` | 11888715 | 최종 사용: 최종 사용자 승인 결과물 | scripts/assemble-preview-v3.py | scripts/qa-preview-v3.py, scripts/assemble-preview-v3.py, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene01-preview-v3.mp4` | 405193 | 최종 사용: 최종 승인 Scene별 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene02-preview-v3.mp4` | 290418 | 최종 사용: 최종 승인 Scene별 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene03-preview-v3.mp4` | 855632 | 최종 사용: 최종 승인 Scene별 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene04-preview-v3.mp4` | 248723 | 최종 사용: 최종 승인 Scene별 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene05-preview-v3.mp4` | 337931 | 최종 사용: 최종 승인 Scene별 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene06-preview-v3.mp4` | 429231 | 최종 사용: 최종 승인 Scene별 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/covers/plywood-quality-change-cover-v3.png` | 1483520 | 최종 사용: 최종 사용자 승인 결과물 | 리터럴없음; 위근거참조 | 없음 | tracked |

## B. 재현 필수/최종 QA — 21파일 / 35,279,304bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/scene01-partA-v2.mp3` | 9984 | 승인 원본: 최종 Scene1 v2 합성의 Part 원본 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/audio/scene01-partB-v2.mp3` | 11424 | 승인 원본: 최종 Scene1 v2 합성의 Part 원본 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/images/daesan-plywood-warehouse-clean-v2.jpg` | 278840 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | src/index-v3.tsx, cover/index-v3.tsx | src/index.tsx, src/index-v3.tsx, cover/qa-v1.json, cover/preservation-before-v2.json, cover/index-v3.tsx, cover/index-v2.tsx, cover/index-v1.tsx, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/images/daesan-plywood-warehouse-real-01.jpg` | 343554 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/qa-v2.json | tracked |
| `public/assets/images/lumber-delivery-real-01.png` | 3062140 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/qa-v2.json | tracked |
| `public/assets/images/lumber-stack-real-01.png` | 3322960 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/qa-v2.json | tracked |
| `public/assets/images/plywood-edge-real-01.png` | 2155861 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | src/index-v3.tsx, cover/index-v3.tsx | src/index.tsx, src/index-v3.tsx, cover/qa-v1.json, cover/preservation-before-v2.json, cover/index-v3.tsx, cover/index-v2.tsx, cover/index-v1.tsx, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/images/plywood-stack-real-01.png` | 2641359 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | src/index-v3.tsx | src/index.tsx, src/index-v3.tsx, cover/qa-v1.json, cover/preservation-before-v2.json, cover/index-v1.tsx, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/images/scene03-plantation-logs-realistic-v1.png` | 3468872 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | src/Scene3Visual.tsx, src/index-v3.tsx | src/Scene3Visual.tsx, src/index-v3.tsx, cover/preservation-before-v2.json, cover/qa-v2.json | tracked |
| `public/assets/images/scene03-small-logs-realistic-v1.png` | 2975962 | 직접 입력/원본: 최종Scene/제품 실사진/편집 원본 또는 공식 재현자산 | src/Scene3Visual.tsx, src/index-v3.tsx | src/Scene3Visual.tsx, src/index-v3.tsx, cover/preservation-before-v2.json, cover/qa-v2.json | tracked |
| `public/assets/video/plywood-quality-change-visual-preview-v3.mp4` | 10822902 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | scripts/assemble-preview-v3.py | scripts/assemble-preview-v3.py, cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene01-visual-preview-v3.mp4` | 270110 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene02-visual-preview-v3.mp4` | 196602 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene03-visual-preview-v3.mp4` | 689148 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene04-visual-preview-v3.mp4` | 75513 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene05-visual-preview-v3.mp4` | 160607 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/assets/video/scene06-visual-preview-v3.mp4` | 230512 | 직접 입력: 최종 조립이 읽는 무음 Scene/전체 영상 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |
| `public/covers/daesani-cover-point-right.png` | 114274 | 최종 직접 입력: 최종 cover/index-v3.tsx의 직접 이미지 입력 | cover/index-v3.tsx | cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/index-v3.tsx, cover/qa-v2.json, cover/qa-v3.json | tracked |
| `public/covers/plywood-quality-change-cover-v2.png` | 2086664 | 재현 입력: 최종v3 합성/검증에 필요한 v2와 raw원본(작업기록 명시) | 리터럴없음; 위근거참조 | cover/preservation-before-v3.json | tracked |
| `public/covers/qa/plywood-quality-change-cover-square-v3.png` | 884733 | 최종 QA: 최종Cover 크롭 QA | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/covers/qa/plywood-quality-change-cover-v3-render-raw.png` | 1477283 | 재현 입력: 최종v3 합성/검증에 필요한 v2와 raw원본(작업기록 명시) | 리터럴없음; 위근거참조 | 없음 | tracked |

## C. 정리 가능한 테스트·중간 결과물 — 3파일 / 3,188,775bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/covers/plywood-quality-change-cover-v1.png` | 1549833 | 최종 미사용: 이전Cover/크롭 QA. 최종v3 직접입력 아님 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/qa-v2.json | tracked |
| `public/covers/qa/plywood-quality-change-cover-square-v1.png` | 759569 | 최종 미사용: 이전Cover/크롭 QA. 최종v3 직접입력 아님 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/qa-v2.json | tracked |
| `public/covers/qa/plywood-quality-change-cover-square-v2.png` | 879373 | 최종 미사용: 이전Cover/크롭 QA. 최종v3 직접입력 아님 | 리터럴없음; 위근거참조 | cover/preservation-before-v3.json | tracked |

## D. 추가 확인 필요 — 3파일 / 528,009bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/images/daesan-plywood-warehouse-clean-v1.jpg` | 319433 | 원본 관계 확인: 최종은clean-v2. 편집계보의 유일원본 여부 확인 필요 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/qa-v2.json | tracked |
| `public/covers/daesani-cover-open-arms.png` | 102546 | 보존범위 확인: 공통 캐릭터 원본. Cover최종 참조범위 확정 필요 | 리터럴없음; 위근거참조 | cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/qa-v2.json | tracked |
| `public/covers/daesani-cover-point-left.png` | 106030 | 보존범위 확인: 공통 캐릭터 원본. Cover최종 참조범위 확정 필요 | 리터럴없음; 위근거참조 | cover/qa-v1.json, cover/preservation-before-v2.json, cover/preservation-before-v3.json, cover/index-v2.tsx, cover/index-v1.tsx, cover/preservation-before-v1.json, cover/qa-v2.json | tracked |

## Git 영향
C 중 tracked 3개. 향후이동시추적파일삭제diff가생기며원격/Git과거blob용량은자동감소하지않음. 이번에는status/ls-files읽기만수행. 다른프로젝트변경비간섭.
```text
?? projects/plywood-quality-change-shorts-v1/docs/26.10.22수정.md
?? projects/plywood-quality-change-shorts-v1/docs/cleanup-reassessment-v2.json
?? projects/plywood-quality-change-shorts-v1/docs/cleanup-reassessment-v2.md
```

모든정리후보의SHA256/정확경로는동명JSON에포함. 승인범위확정후새해시대조및휴지통이동은별도명령으로만실행.
