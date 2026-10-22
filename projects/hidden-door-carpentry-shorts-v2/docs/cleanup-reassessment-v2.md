# 완료 결과물 정리 재점검 v2

이전 cleanup 판정을 승계하지 않고 최신 사용자 지시, 통합 지침 §8, 운영 가이드 §18, Monorepo 정리 순서를 적용했습니다. 삭제·이동·렌더·소스 변경·Git 변경은 하지 않았습니다. node_modules는 유지합니다.

전체현재 73,533,778bytes, node_modules 0bytes 포함. C 0파일/0bytes, C만정리할경우 73,533,778bytes 예상. 논리파일크기 기준,APFS할당량/휴지통비우기 전실제여유공간과다름. 보고서작성전측정값.

## 최종 결과물 보존
- `public/assets/video/hidden-door-carpentry-preview-v8.mp4` / SHA256 `837330865c9587a68874a143e4caea099eaa08c86e973312a1092b8c919e9118`
- `public/covers/hidden-door-carpentry-cover-v3.png` / SHA256 `c8f6494f14a65729552c2eb44abddcf8759f4c0cdafb9b1a2de2cd9b41f961cb`
- `docs/hidden-door-carpentry-sns-copy-final-v1.md` / SHA256 `9a08126d13f848c715b986e8259c63cecf99beb161ef96efaead177493a620aa`

Scene최종목록은A표에별도보존. 엔딩/폰트/로고/간판/Canonical/공식출처/소스·설정/package·lockfile/날짜형기록은 조사범위밖이어도 모두보존하며C에포함안함.

## 판단과 재현 위험
- 정리완료기록 이후 조사범위에서 명백한 테스트 잔존 C는 없음. 미사용 대산이 모션/PNG는 이전 USER_KEEP 재사용보존 기록이 있어 D로 제시.

직접참조는최종소스와과거소스를구분한리터럴검색이며출력파일명도검출될수있다. 동적Scene/TTS/시퀀스는조립코드·작업기록으로보완. 문서언급만으로보존하지않음. C를이동하면과거테스트재현/비교문서의일부경로는없어질수있으나최종사용과구분했다. 모든후보는승인전유지.

## A. 최종 승인 결과물 — 12파일 / 11,892,546bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/scene01-tts-v4.mp3` | 13536 | 최종 사용: 최종v8 Scene별 영상/승인TTS | src/CarpentryScenesV8.tsx | src/CarpentryScenesV8.tsx, scripts/assemble_preview_v8.py | tracked |
| `public/assets/audio/scene02-tts-v8.mp3` | 23232 | 최종 사용: 최종v8 Scene별 영상/승인TTS | src/CarpentryScenesV8.tsx | src/CarpentryScenesV8.tsx, scripts/assemble_preview_v8.py | tracked |
| `public/assets/audio/scene03-tts-v11.mp3` | 16512 | 최종 사용: 최종v8 Scene별 영상/승인TTS | src/CarpentryScenesV8.tsx | src/CarpentryScenesV8.tsx, scripts/assemble_preview_v8.py | tracked |
| `public/assets/audio/scene04-tts-v4.mp3` | 22944 | 최종 사용: 최종v8 Scene별 영상/승인TTS | src/CarpentryScenesV8.tsx | src/CarpentryScenesV8.tsx, scripts/assemble_preview_v8.py | tracked |
| `public/assets/audio/scene05-tts-v6.mp3` | 22656 | 최종 사용: 최종v8 Scene별 영상/승인TTS | src/CarpentryScenesV8.tsx | src/CarpentryScenesV8.tsx, scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/hidden-door-carpentry-preview-v8.mp4` | 10013086 | 최종 사용: 최종 사용자 승인 결과물 | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/scene01-preview-v8.mp4` | 157519 | 최종 사용: 최종v8 Scene별 영상/승인TTS | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/scene02-preview-v8.mp4` | 703806 | 최종 사용: 최종v8 Scene별 영상/승인TTS | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/scene03-preview-v8.mp4` | 241513 | 최종 사용: 최종v8 Scene별 영상/승인TTS | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/scene04-preview-v8.mp4` | 243114 | 최종 사용: 최종v8 Scene별 영상/승인TTS | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/scene05-preview-v8-label-fix.mp4` | 277213 | 최종 사용: 최종v8 Scene별 영상/승인TTS | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/covers/hidden-door-carpentry-cover-v3.png` | 157415 | 최종 사용: 최종 사용자 승인 결과물 | scripts/create-hidden-door-carpentry-cover-v3.py | scripts/create-hidden-door-carpentry-cover-v3.py | tracked |

## B. 재현 필수/최종 QA — 6파일 / 37,715,788bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/ending-approved-v3.mp3` | 19916 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | src/DaesanEnding.tsx | tracked |
| `public/assets/images/daesani-cover-point-right.png` | 114274 | 최종 재현: 최종Cover/QA 또는 직접 원본 | scripts/create-hidden-door-carpentry-cover-v3.py | scripts/create-hidden-door-carpentry-cover-v3.py | tracked |
| `public/assets/video/IMG_3934.MOV` | 19049859 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` | 9346882 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | scripts/assemble_preview_v8.py | tracked |
| `public/assets/video/headquarters-normal-speed-hold.mp4` | 9039790 | 최종 사용: 승인 엔딩 원본/직접 의존 자산 | 리터럴없음; 위근거참조 | src/DaesanEnding.tsx | tracked |
| `public/covers/qa/hidden-door-carpentry-cover-v3-instagram-square.png` | 145067 | 최종 재현: 최종Cover/QA 또는 직접 원본 | scripts/create-hidden-door-carpentry-cover-v3.py | scripts/create-hidden-door-carpentry-cover-v3.py | tracked |

## C. 정리 가능한 테스트·중간 결과물 — 0파일 / 0bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|

## D. 추가 확인 필요 — 6파일 / 20,470,726bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/images/daesani-cover-open-arms.png` | 102546 | 재사용 보존 재확인: 기존작업기록에 별도 USER_KEEP/재사용 보존 명시. 최종미사용만으로 이동 불가 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/images/daesani-cover-point-left.png` | 106030 | 재사용 보존 재확인: 기존작업기록에 별도 USER_KEEP/재사용 보존 명시. 최종미사용만으로 이동 불가 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/daesani-open-arms-explain-alpha-v2.mov` | 8567978 | 재사용 보존 재확인: 기존작업기록에 별도 USER_KEEP/재사용 보존 명시. 최종미사용만으로 이동 불가 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/daesani-open-arms-explain.mp4` | 183028 | 재사용 보존 재확인: 기존작업기록에 별도 USER_KEEP/재사용 보존 명시. 최종미사용만으로 이동 불가 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/daesani-point-right-alpha-v2.mov` | 11312004 | 재사용 보존 재확인: 기존작업기록에 별도 USER_KEEP/재사용 보존 명시. 최종미사용만으로 이동 불가 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/daesani-point-right.mp4` | 199140 | 재사용 보존 재확인: 기존작업기록에 별도 USER_KEEP/재사용 보존 명시. 최종미사용만으로 이동 불가 | 리터럴없음; 위근거참조 | 없음 | tracked |

## Git 영향
C 중 tracked 0개. 향후이동시추적파일삭제diff가생기며원격/Git과거blob용량은자동감소하지않음. 이번에는status/ls-files읽기만수행. 다른프로젝트변경비간섭.
```text
?? projects/hidden-door-carpentry-shorts-v2/docs/26.10.22수정.md
?? projects/hidden-door-carpentry-shorts-v2/docs/cleanup-reassessment-v2.json
?? projects/hidden-door-carpentry-shorts-v2/docs/cleanup-reassessment-v2.md
```

모든정리후보의SHA256/정확경로는동명JSON에포함. 승인범위확정후새해시대조및휴지통이동은별도명령으로만실행.
