# 완료 결과물 정리 재점검 v2

이전 cleanup 판정을 승계하지 않고 최신 사용자 지시, 통합 지침 §8, 운영 가이드 §18, Monorepo 정리 순서를 적용했습니다. 삭제·이동·렌더·소스 변경·Git 변경은 하지 않았습니다. node_modules는 유지합니다.

전체현재 743,171,094bytes, node_modules 327,124,036bytes 포함. C 372파일/112,855,960bytes, C만정리할경우 630,315,134bytes 예상. 논리파일크기 기준,APFS할당량/휴지통비우기 전실제여유공간과다름. 보고서작성전측정값.

## 최종 결과물 보존
- `public/assets/video/door-closer-preview-v3.mp4` / SHA256 `0f674a0dc503f8cf5e3e42eb2ad7f2e8378aded78abb54b8b1abff44232fd0f8`
- `public/covers/door-closer-cover-v3.png` / SHA256 `87f2d9604a7fc4cda280624bdbf3130f28453b1eb75e73a913743637f8702e43`
- `docs/SNS_업로드_문구_최종.md` / SHA256 `ad45bb4598061915918b0b6b6d7b7822e3de02a36416df0ab8866e7f0327ac75`

Scene최종목록은A표에별도보존. 엔딩/폰트/로고/간판/Canonical/공식출처/소스·설정/package·lockfile/날짜형기록은 조사범위밖이어도 모두보존하며C에포함안함.

## 판단과 재현 위험
- AI 테스트는 본편 정리 완료 이후 추가됨. 최근 일부 테스트 평가대기 상태는 후보 목록에 명시; 자동이동 금지.
- render-cover-v3.py는 비교검사용 door-closer-cover-v2.png를 읽지만 현재 그 파일이 없음. 기존 정리 후 재현검사 의존 결손이며 이번C후보 정리로 발생한 문제 아님. 승인v3/원본Hero/소스 보존, 향후비교의존 제거 또는 구본복구 승인 필요.
- 원본 실촬영/최종 Overlay 시퀀스는 재현 필수라 보존. 이전 Overlay1/4-v1만 후보.

직접참조는최종소스와과거소스를구분한리터럴검색이며출력파일명도검출될수있다. 동적Scene/TTS/시퀀스는조립코드·작업기록으로보완. 문서언급만으로보존하지않음. C를이동하면과거테스트재현/비교문서의일부경로는없어질수있으나최종사용과구분했다. 모든후보는승인전유지.

## A. 최종 승인 결과물 — 12파일 / 28,140,911bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/scene01-tts-v2.mp3` | 54284 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/audio/scene02-tts-v2.mp3` | 76364 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/audio/scene03-tts-v2.mp3` | 84044 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/audio/scene04-tts-v2.mp3` | 135884 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/audio/scene05-tts-v5.mp3` | 38976 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | scripts/tts-input-v5.json | tracked |
| `public/assets/video/door-closer-preview-v3.mp4` | 18585485 | 최종 사용: 최종 사용자 승인 결과물 | scripts/assemble-preview-v3.py | scripts/qa-preview-v3.py, scripts/assemble-preview-v3.py | tracked |
| `public/assets/video/scene01-preview-v3.mp4` | 1330713 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/scene02-preview-v1.mp4` | 1820704 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/scene03-preview-v1.mp4` | 1505576 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/scene04-preview-v2.mp4` | 226704 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | scripts/qa-preview-v3.py | tracked |
| `public/assets/video/scene05-preview-v1.mp4` | 3695363 | 최종 사용: 작업기록/최종concat에 확정된 Scene 영상 또는 TTS | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/covers/door-closer-cover-v3.png` | 586814 | 최종 사용: 최종 사용자 승인 결과물 | scripts/render-cover-v3.py | scripts/render-cover-v3.py | tracked |

## B. 재현 필수/최종 QA — 943파일 / 189,489,196bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/preview-v3-approved-sequence.wav` | 6566478 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | scripts/assemble-preview-v3.py | scripts/qa-preview-v3.py, scripts/assemble-preview-v3.py | untracked/ignored |
| `public/assets/audio/scene01-tts-v2-source.mp3` | 12192 | 승인 원본: 승인 음성의 후처리 전 원본 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json | untracked/ignored |
| `public/assets/audio/scene02-tts-v2-source.mp3` | 15744 | 승인 원본: 승인 음성의 후처리 전 원본 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json | untracked/ignored |
| `public/assets/audio/scene03-tts-v2-source.mp3` | 17664 | 승인 원본: 승인 음성의 후처리 전 원본 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json | untracked/ignored |
| `public/assets/audio/scene04-tts-v2-source.mp3` | 28224 | 승인 원본: 승인 음성의 후처리 전 원본 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/complete.json` | 40 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-000.png` | 48192 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-001.png` | 81460 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-002.png` | 83732 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-003.png` | 84072 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-004.png` | 84151 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-005.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-006.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-007.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-008.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-009.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-010.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-011.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-012.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-013.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-014.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-015.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-016.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-017.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-018.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-019.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-020.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-021.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-022.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-023.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-024.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-025.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-026.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-027.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-028.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-029.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-030.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-031.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-032.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-033.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-034.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-035.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-036.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-037.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-038.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-039.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-040.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-041.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-042.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-043.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-044.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-045.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-046.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-047.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-048.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-049.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-050.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-051.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-052.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-053.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-054.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-055.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-056.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-057.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-058.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-059.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-060.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-061.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-062.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-063.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-064.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-065.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-066.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-067.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-068.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-069.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-070.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-071.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-072.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-073.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-074.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-075.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-076.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-077.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-078.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-079.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-080.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-081.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-082.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-083.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-084.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-085.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-086.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-087.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-088.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-089.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-090.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-091.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-092.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-093.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-094.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-095.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-096.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-097.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-098.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-099.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-100.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-101.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-102.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-103.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-104.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-105.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-106.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-107.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-108.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-109.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-110.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-111.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-112.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-113.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-114.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-115.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-116.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-117.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-118.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-119.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-120.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-121.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-122.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-123.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-124.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-125.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-126.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-127.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-128.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-129.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-130.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-131.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-132.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-133.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-134.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-135.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-136.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-137.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-138.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-139.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-140.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-141.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-142.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-143.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-144.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-145.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-146.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-147.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-148.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v2/element-149.png` | 83627 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/complete.json` | 40 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-000.png` | 48192 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-001.png` | 81505 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-002.png` | 83746 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-003.png` | 84171 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-004.png` | 84334 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-005.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-006.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-007.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-008.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-009.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-010.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-011.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-012.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-013.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-014.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-015.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-016.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-017.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-018.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-019.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-020.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-021.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-022.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-023.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-024.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-025.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-026.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-027.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-028.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-029.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-030.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-031.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-032.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-033.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-034.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-035.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-036.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-037.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-038.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-039.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-040.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-041.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-042.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-043.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-044.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-045.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-046.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-047.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-048.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-049.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-050.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-051.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-052.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-053.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-054.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-055.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-056.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-057.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-058.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-059.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-060.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-061.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-062.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-063.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-064.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-065.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-066.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-067.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-068.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-069.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-070.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-071.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-072.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-073.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-074.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-075.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-076.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-077.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-078.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-079.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-080.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-081.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-082.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-083.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-084.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-085.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-086.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-087.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-088.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-089.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-090.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-091.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-092.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-093.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-094.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-095.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-096.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-097.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-098.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-099.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-100.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-101.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-102.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-103.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-104.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-105.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-106.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-107.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-108.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-109.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-110.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-111.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-112.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-113.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-114.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-115.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay2-v1/element-116.png` | 83798 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/complete.json` | 40 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-000.png` | 81523 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-001.png` | 113684 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-002.png` | 116264 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-003.png` | 116642 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-004.png` | 116774 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-005.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-006.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-007.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-008.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-009.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-010.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-011.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-012.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-013.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-014.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-015.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-016.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-017.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-018.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-019.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-020.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-021.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-022.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-023.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-024.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-025.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-026.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-027.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-028.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-029.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-030.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-031.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-032.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-033.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-034.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-035.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-036.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-037.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-038.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-039.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-040.png` | 116204 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-041.png` | 152002 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-042.png` | 153142 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-043.png` | 153364 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-044.png` | 153113 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-045.png` | 153227 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-046.png` | 153227 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-047.png` | 153166 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-048.png` | 153211 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-049.png` | 153209 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-050.png` | 153218 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-051.png` | 153178 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-052.png` | 153245 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-053.png` | 153219 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-054.png` | 153173 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-055.png` | 153214 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-056.png` | 153196 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-057.png` | 153224 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-058.png` | 153164 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-059.png` | 153231 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-060.png` | 153222 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-061.png` | 153181 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-062.png` | 153243 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-063.png` | 153196 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-064.png` | 153223 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-065.png` | 114835 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-066.png` | 143819 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-067.png` | 145509 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-068.png` | 145638 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-069.png` | 145776 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-070.png` | 145433 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-071.png` | 145439 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-072.png` | 145382 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-073.png` | 145504 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-074.png` | 145449 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-075.png` | 145400 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-076.png` | 145503 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-077.png` | 145422 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-078.png` | 145435 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-079.png` | 145396 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-080.png` | 145567 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-081.png` | 145496 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-082.png` | 145428 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-083.png` | 145484 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-084.png` | 145398 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-085.png` | 145526 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-086.png` | 145391 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-087.png` | 145475 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-088.png` | 145513 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-089.png` | 145477 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-090.png` | 145468 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-091.png` | 145422 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-092.png` | 145435 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-093.png` | 145411 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-094.png` | 145561 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-095.png` | 145581 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-096.png` | 145405 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-097.png` | 145515 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-098.png` | 145421 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-099.png` | 145442 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-100.png` | 145357 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-101.png` | 145550 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-102.png` | 145523 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-103.png` | 145348 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-104.png` | 145502 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-105.png` | 145433 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-106.png` | 145439 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-107.png` | 145382 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-108.png` | 145504 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-109.png` | 145449 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-110.png` | 145400 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-111.png` | 145503 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-112.png` | 145422 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-113.png` | 145435 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-114.png` | 145396 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-115.png` | 145567 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-116.png` | 145496 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-117.png` | 145428 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-118.png` | 145484 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-119.png` | 145398 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-120.png` | 145526 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-121.png` | 145391 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-122.png` | 145475 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-123.png` | 145513 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-124.png` | 145477 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-125.png` | 145468 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-126.png` | 145422 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-127.png` | 145435 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay3-v1/element-128.png` | 145411 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/complete.json` | 40 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-000.png` | 317493 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-001.png` | 342326 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-002.png` | 343750 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-003.png` | 344146 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-004.png` | 344361 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-005.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-006.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-007.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-008.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-009.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-010.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-011.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-012.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-013.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-014.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-015.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-016.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-017.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-018.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-019.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-020.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-021.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-022.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-023.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-024.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-025.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-026.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-027.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-028.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-029.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-030.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-031.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-032.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-033.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-034.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-035.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-036.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-037.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-038.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-039.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-040.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-041.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-042.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-043.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-044.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-045.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-046.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-047.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-048.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-049.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-050.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-051.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-052.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-053.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-054.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-055.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-056.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-057.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-058.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-059.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-060.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-061.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-062.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-063.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-064.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-065.png` | 344013 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-066.png` | 319071 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-067.png` | 348318 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-068.png` | 350517 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-069.png` | 350744 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-070.png` | 350936 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-071.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-072.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-073.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-074.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-075.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-076.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-077.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-078.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-079.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-080.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-081.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-082.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-083.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-084.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-085.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-086.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-087.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-088.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-089.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-090.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-091.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-092.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-093.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-094.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-095.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-096.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-097.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-098.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-099.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-100.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-101.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-102.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-103.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-104.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-105.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-106.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-107.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-108.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-109.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-110.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-111.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-112.png` | 350269 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-113.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-114.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-115.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-116.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-117.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-118.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-119.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-120.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-121.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-122.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-123.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-124.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-125.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-126.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-127.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-128.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-129.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-130.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-131.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-132.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-133.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-134.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-135.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-136.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-137.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-138.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-139.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-140.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-141.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-142.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-143.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-144.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-145.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-146.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-147.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-148.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-149.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-150.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-151.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-152.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-153.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-154.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-155.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-156.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-157.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-158.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-159.png` | 350651 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-160.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-161.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-162.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-163.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-164.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-165.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-166.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-167.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-168.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-169.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-170.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-171.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-172.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-173.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-174.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-175.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-176.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-177.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-178.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-179.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-180.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-181.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-182.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-183.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-184.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-185.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-186.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-187.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-188.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-189.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-190.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-191.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-192.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-193.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-194.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-195.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-196.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-197.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-198.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-199.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-200.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-201.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-202.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-203.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-204.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-205.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v2/element-206.png` | 349024 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/complete.json` | 40 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-000.png` | 82567 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-001.png` | 109521 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-002.png` | 111209 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-003.png` | 111414 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-004.png` | 111388 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-005.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-006.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-007.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-008.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-009.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-010.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-011.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-012.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-013.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-014.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-015.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-016.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-017.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-018.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-019.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-020.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-021.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-022.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-023.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-024.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-025.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-026.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-027.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-028.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-029.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-030.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-031.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-032.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-033.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-034.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-035.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-036.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-037.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-038.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-039.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-040.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-041.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-042.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-043.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-044.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-045.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-046.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-047.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-048.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-049.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-050.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-051.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-052.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-053.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-054.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-055.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-056.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-057.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-058.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-059.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-060.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-061.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-062.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-063.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-064.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-065.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-066.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-067.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-068.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-069.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-070.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-071.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-072.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-073.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-074.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-075.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-076.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-077.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-078.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-079.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-080.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-081.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-082.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-083.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-084.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-085.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-086.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-087.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-088.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-089.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-090.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-091.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-092.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-093.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-094.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-095.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-096.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-097.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-098.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-099.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-100.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-101.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-102.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-103.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-104.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-105.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-106.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-107.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-108.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-109.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-110.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-111.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-112.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-113.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-114.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-115.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-116.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-117.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-118.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-119.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-120.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-121.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-122.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-123.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-124.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-125.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-126.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-127.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-128.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-129.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-130.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-131.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-132.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-133.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-134.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-135.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-136.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-137.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-138.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-139.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-140.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-141.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-142.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-143.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-144.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-145.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-146.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-147.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-148.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-149.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-150.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-151.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-152.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-153.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-154.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-155.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-156.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-157.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-158.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-159.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-160.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-161.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-162.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-163.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-164.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-165.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-166.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-167.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-168.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-169.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-170.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-171.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-172.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-173.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-174.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-175.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-176.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-177.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-178.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-179.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-180.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-181.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-182.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-183.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-184.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-185.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-186.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-187.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-188.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-189.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-190.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-191.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-192.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-193.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-194.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-195.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-196.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-197.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-198.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-199.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-200.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-201.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-202.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-203.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-204.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-205.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-206.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-207.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-208.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-209.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-210.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-211.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-212.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-213.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-214.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-215.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-216.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-217.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-218.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-219.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-220.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-221.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-222.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-223.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-224.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-225.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-226.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-227.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-228.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-229.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-230.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-231.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-232.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-233.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-234.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-235.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-236.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-237.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-238.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-239.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-240.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-241.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-242.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-243.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-244.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-245.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-246.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-247.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-248.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-249.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-250.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-251.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-252.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-253.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-254.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-255.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-256.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-257.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-258.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-259.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-260.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-261.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-262.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-263.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-264.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-265.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-266.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-267.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-268.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-269.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-270.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-271.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-272.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-273.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-274.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-275.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-276.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-277.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-278.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-279.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-280.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-281.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-282.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-283.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-284.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-285.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-286.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-287.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-288.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-289.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-290.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-291.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-292.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-293.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-294.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-295.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-296.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay5-v1/element-297.png` | 111207 | 직접 입력: 최종 Scene에 합성하는 자막/정보 PNG 시퀀스; 파일 수만으로 정리 금지 | scripts/assemble-preview-v3.py → final Scene 재현 PNG 패턴 | 없음 | untracked/ignored |
| `public/assets/images/door-closer-cover-source-A-2p5s.png` | 265645 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | scripts/render-cover-v3.py | scripts/render-cover-v3.py, scripts/render-cover-v2.py | tracked |
| `public/assets/images/preview-v3-contact-sheet.png` | 654101 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | scripts/qa-preview-v3.py | untracked/ignored |
| `public/assets/images/preview-v3-cut-analysis.png` | 275097 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-1.png` | 525745 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-2.png` | 529637 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-3.png` | 543366 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-4.png` | 318373 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-5.png` | 507009 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-6.png` | 400097 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-7.png` | 422114 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v3-qa-8.png` | 1981371 | 최종 QA: 최종본 QA 최소증빙 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ts83-official-extracted-0-Im0.png` | 416824 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | src/preview-v1.tsx | src/preview-v1.tsx | untracked/ignored |
| `public/assets/images/ts83-official-page1.png` | 236510 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ts83-official-page4.png` | 84901 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | src/preview-v1.tsx | src/preview-v1.tsx | untracked/ignored |
| `public/assets/images/younglim-2627-native-p201.png` | 1405991 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-2627-native-p45.png` | 2801967 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-2627-research-p201.png` | 878856 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-2627-research-p45.png` | 2013594 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-concealed-closer-official-Im18.jp2` | 24365 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-concealed-closer-official-reference.png` | 26812 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | src/preview-v2.tsx | src/preview-v2.tsx | untracked/ignored |
| `public/assets/images/younglim-install-closer-detail.png` | 280455 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-install-connection-reference.png` | 110096 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | src/preview-v2.tsx | src/preview-v2.tsx | untracked/ignored |
| `public/assets/images/younglim-install-research-1.png` | 126555 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-research-p13.png` | 923976 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/younglim-research-p55.png` | 936232 | 공식 근거: 공식 제품·시공 Reference와 출처 확인 자료 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/KakaoTalk_Video_2026-10-19-10-00-03.mp4` | 992659 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | 리터럴없음; 위근거참조 | scripts/render-cover-v2.py, scripts/render-cover-v1.py | tracked |
| `public/assets/video/KakaoTalk_Video_2026-10-19-10-00-08.mp4` | 1094183 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | 리터럴없음; 위근거참조 | 없음 | tracked |
| `public/assets/video/door-closer-preview-v3-picture.mp4` | 17782951 | 직접 입력: 최종 본편/Cover의 실촬영 원본 또는 직접 입력 | scripts/assemble-preview-v3.py | scripts/assemble-preview-v3.py | untracked/ignored |
| `public/covers/door-closer-cover-v3-layout.json` | 863 | 최종 QA: 최종Cover layout/최소QA 세트 | scripts/render-cover-v3.py | scripts/render-cover-v3.py | untracked/ignored |
| `public/covers/qa/door-closer-cover-v3-3x4.png` | 444730 | 최종 QA: 최종Cover layout/최소QA 세트 | scripts/render-cover-v3.py | scripts/render-cover-v3.py | untracked/ignored |
| `public/covers/qa/door-closer-cover-v3-4x5.png` | 410738 | 최종 QA: 최종Cover layout/최소QA 세트 | scripts/render-cover-v3.py | scripts/render-cover-v3.py | untracked/ignored |
| `public/covers/qa/door-closer-cover-v3-mobile-qa.png` | 374298 | 최종 QA: 최종Cover layout/최소QA 세트 | scripts/render-cover-v3.py | scripts/render-cover-v3.py | untracked/ignored |

## C. 정리 가능한 테스트·중간 결과물 — 372파일 / 112,855,960bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/audio/full-tts-qa-v5.mp3` | 540044 | 최종 미사용: 통합청취 또는 폐기 Scene5 v2 원본; 최종S5는v5 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/audio/scene05-tts-v2-source.mp3` | 16704 | 최종 미사용: 통합청취 또는 폐기 Scene5 v2 원본; 최종S5는v5 | 리터럴없음; 위근거참조 | scripts/tts-input-v2.json | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/complete.json` | 39 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-00.png` | 48192 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-01.png` | 81460 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-02.png` | 83732 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-03.png` | 84072 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-04.png` | 84151 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-05.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-06.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-07.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-08.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-09.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-10.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-11.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-12.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-13.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-14.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-15.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-16.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-17.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-18.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-19.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-20.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-21.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-22.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-23.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-24.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-25.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-26.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-27.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-28.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-29.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-30.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-31.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-32.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-33.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-34.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-35.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-36.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-37.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-38.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-39.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-40.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-41.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-42.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-43.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-44.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-45.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-46.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-47.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-48.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-49.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-50.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-51.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-52.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-53.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-54.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-55.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-56.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-57.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-58.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-59.png` | 83627 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-60.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-61.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-62.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-63.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-64.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-65.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-66.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-67.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-68.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-69.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-70.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-71.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-72.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-73.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-74.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-75.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-76.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-77.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-78.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-79.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-80.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-81.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-82.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay1-v1/element-83.png` | 116249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/complete.json` | 40 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | scripts/render-overlays-v2.cjs, scripts/render-overlays-v1.cjs | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-000.png` | 422602 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-001.png` | 448523 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-002.png` | 450690 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-003.png` | 450826 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-004.png` | 451676 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-005.png` | 450934 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-006.png` | 451104 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-007.png` | 451384 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-008.png` | 451245 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-009.png` | 451394 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-010.png` | 451729 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-011.png` | 451600 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-012.png` | 451765 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-013.png` | 451809 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-014.png` | 452058 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-015.png` | 452592 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-016.png` | 452695 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-017.png` | 453529 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-018.png` | 454034 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-019.png` | 454124 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-020.png` | 454502 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-021.png` | 455052 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-022.png` | 455193 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-023.png` | 454633 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-024.png` | 454753 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-025.png` | 455414 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-026.png` | 455721 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-027.png` | 456392 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-028.png` | 456673 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-029.png` | 456969 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-030.png` | 457515 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-031.png` | 457670 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-032.png` | 457675 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-033.png` | 457577 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-034.png` | 458076 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-035.png` | 458162 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-036.png` | 457744 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-037.png` | 458365 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-038.png` | 458895 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-039.png` | 459019 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-040.png` | 458955 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-041.png` | 459142 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-042.png` | 459784 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-043.png` | 460642 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-044.png` | 460863 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-045.png` | 460649 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-046.png` | 461020 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-047.png` | 461536 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-048.png` | 461576 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-049.png` | 462244 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-050.png` | 462324 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-051.png` | 462534 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-052.png` | 463053 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-053.png` | 463280 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-054.png` | 463558 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-055.png` | 463744 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-056.png` | 463552 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-057.png` | 463703 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-058.png` | 465147 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-059.png` | 465061 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-060.png` | 465131 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-061.png` | 464882 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-062.png` | 464986 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-063.png` | 465597 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-064.png` | 466082 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-065.png` | 466249 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-066.png` | 111319 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-067.png` | 142860 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-068.png` | 145037 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-069.png` | 145244 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-070.png` | 145459 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-071.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-072.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-073.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-074.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-075.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-076.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-077.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-078.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-079.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-080.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-081.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-082.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-083.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-084.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-085.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-086.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-087.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-088.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-089.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-090.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-091.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-092.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-093.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-094.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-095.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-096.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-097.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-098.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-099.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-100.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-101.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-102.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-103.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-104.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-105.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-106.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-107.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-108.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-109.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-110.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-111.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-112.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-113.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-114.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-115.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-116.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-117.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-118.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-119.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-120.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-121.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-122.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-123.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-124.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-125.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-126.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-127.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-128.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-129.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-130.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-131.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-132.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-133.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-134.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-135.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-136.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-137.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-138.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-139.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-140.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-141.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-142.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-143.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-144.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-145.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-146.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-147.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-148.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-149.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-150.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-151.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-152.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-153.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-154.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-155.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-156.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-157.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-158.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-159.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-160.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-161.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-162.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-163.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-164.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-165.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-166.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-167.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-168.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-169.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-170.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-171.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-172.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-173.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-174.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-175.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-176.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-177.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-178.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-179.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-180.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-181.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-182.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-183.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-184.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-185.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-186.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-187.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-188.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-189.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-190.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-191.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-192.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-193.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-194.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-195.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-196.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-197.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-198.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-199.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-200.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-201.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-202.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-203.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-204.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-205.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/DoorCloserOverlay4-v1/element-206.png` | 144911 | 최종 미사용: 대체된 Overlay1/4 v1 시퀀스, 최종은 해당 v2 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-comparison-frame-v1.png` | 1164821 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-comparison-header-v1.png` | 9067 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-end-v2-original.png` | 1839333 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-end-v2.png` | 2033958 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-end-v3-original.png` | 1855759 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-end-v3.png` | 2051989 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v1-original.png` | 2009800 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v1.png` | 2232295 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v2-original.png` | 1636880 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v2.png` | 1714691 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v3-original.png` | 1656348 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v3.png` | 1742933 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v4-original.png` | 1625066 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-hidden-push-start-v4.png` | 1703164 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-keyframes-v2-qa.png` | 691291 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-keyframes-v3-qa.png` | 685786 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-middle-v2-original.png` | 1911022 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-middle-v2.png` | 2136605 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-middle-v3-original.png` | 1902411 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-middle-v3.png` | 2122398 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-omni-contact-v1.png` | 718897 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-omni-frames-v2-contact.png` | 1481033 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-omni-last-v1.png` | 486158 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-real-reference-contact-v1.png` | 627259 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-start-v1-flow-original.jpg` | 82163 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-start-v1.png` | 983091 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-start-v2-original.png` | 2056889 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-start-v2.png` | 2315688 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-veo-contact-v1.png` | 840918 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/ai-model-test-veo-last-v1.png` | 487291 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-A-0.png` | 61180 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-A-1.png` | 82108 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-A-2.png` | 80796 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-A-3.png` | 86321 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-A-4.png` | 41608 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-A-5.png` | 71409 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-B-0.png` | 60863 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-B-1.png` | 74656 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-B-2.png` | 72084 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-B-3.png` | 75560 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/cut-qa-contact.png` | 697785 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/door-closer-cover-source-A-4s.png` | 279906 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | scripts/render-cover-v1.py | untracked/ignored |
| `public/assets/images/preview-v1-contact-sheet.png` | 527676 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s1-0.8.png` | 82241 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s1-2.3.png` | 85833 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s2-1.5.png` | 73289 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s3-2.8.png` | 78505 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s4-1.png` | 39555 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s4-4.png` | 35054 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s5-2.png` | 88169 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v1-qa-s5-7.png` | 72621 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-contact-sheet.png` | 599089 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | scripts/qa-preview-v2.py | untracked/ignored |
| `public/assets/images/preview-v2-qa-1.png` | 525745 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-2.png` | 529791 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-3.png` | 556175 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-4.png` | 400097 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-5.png` | 419265 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-6.png` | 421915 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-7.png` | 422114 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/preview-v2-qa-8.png` | 1981371 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-00.0.png` | 45233 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-00.5.png` | 58662 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-01.0.png` | 62585 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-01.5.png` | 59587 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-02.0.png` | 58984 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-02.5.png` | 56583 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-03.0.png` | 54923 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-03.5.png` | 59106 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-04.0.png` | 60480 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-04.5.png` | 59360 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-05.0.png` | 59353 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-05.5.png` | 62269 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-06.0.png` | 61615 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-06.5.png` | 62037 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-07.0.png` | 60815 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/v2-analysis-A-contact.png` | 853929 | 최종 미사용: 과거 컷분석/비교스틸/미사용Cover Hero/이전Preview QA | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/video/ai-model-test-omni-frames-v2.mp4` | 789337 | 실험/평가대기: 정리 완료 후 추가한 별도 AI 비교실험. 본편 최종 미사용; 일부 평가 대기이므로 이동은 별도 승인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |

## D. 추가 확인 필요 — 4파일 / 399,775bytes

| 상대경로 | bytes | 승인상태·사용/생성목적·판정 | 최종 소스 참조 | 기타현재소스 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/images/caption-reference-approved-v4.png` | 76925 | 승인 참조 여부 확인: 승인 스타일 참조로 보이는 파일이나 실제 승인/Canonical 사용 근거 미확인. 단순 QA로 폐기하지 않고 확인 필요 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/daesani-cover-open-arms.png` | 102546 | 미사용 공통자산: 본편 미사용 공통캐릭터. 재사용 보존 범위를 별도 결정 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/daesani-cover-point-left.png` | 106030 | 미사용 공통자산: 본편 미사용 공통캐릭터. 재사용 보존 범위를 별도 결정 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |
| `public/assets/images/daesani-cover-point-right.png` | 114274 | 미사용 공통자산: 본편 미사용 공통캐릭터. 재사용 보존 범위를 별도 결정 | 리터럴없음; 위근거참조 | 없음 | untracked/ignored |

## Git 영향
C 중 tracked 0개. 향후이동시추적파일삭제diff가생기며원격/Git과거blob용량은자동감소하지않음. 이번에는status/ls-files읽기만수행. 다른프로젝트변경비간섭.
```text
 M projects/door-closer-shorts-v1/docs/26.10.19수정.md
?? projects/door-closer-shorts-v1/docs/26.10.22수정.md
?? projects/door-closer-shorts-v1/docs/ai-model-test-keyframes-v2-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-keyframes-v3-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-omni-frames-v2-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-start-v1-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-video-v1-qa.json
?? projects/door-closer-shorts-v1/docs/cleanup-reassessment-v2.json
?? projects/door-closer-shorts-v1/docs/cleanup-reassessment-v2.md
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-comparison-frame-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-comparison-header-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-end-v2-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-end-v2.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-end-v3-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-end-v3.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v1-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v2-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v2.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v3-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v3.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v4-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-hidden-push-start-v4.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-keyframes-v2-qa.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-keyframes-v3-qa.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-middle-v2-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-middle-v2.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-middle-v3-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-middle-v3.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-omni-contact-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-omni-frames-v2-contact.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-omni-last-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-real-reference-contact-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-start-v1-flow-original.jpg
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-start-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-start-v2-original.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-start-v2.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-veo-contact-v1.png
?? projects/door-closer-shorts-v1/public/assets/images/ai-model-test-veo-last-v1.png
?? projects/door-closer-shorts-v1/public/assets/video/ai-model-test-omni-frames-v2.mp4
```

모든정리후보의SHA256/정확경로는동명JSON에포함. 승인범위확정후새해시대조및휴지통이동은별도명령으로만실행.
