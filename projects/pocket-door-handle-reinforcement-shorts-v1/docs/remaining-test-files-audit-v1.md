# 실제 로컬 잔여 파일 점검 v1

실제 절대경로: `~/Documents/short-movie-agents/projects/pocket-door-handle-reinforcement-shorts-v1`
Git 루트: `~/Documents/short-movie-agents`. 지정 프로젝트와 동일, 프로젝트 symlink 아님. 사용자 Finder에서 열린 창 자체는 직접 확인하지 못했으나 지정 경로 realpath와 일치.
이전 삭제기록847개 중846개 없음, `public/assets/.DS_Store` 1개 재존재. 원인 미확인; OS 메타데이터 자동생성 가능성은 있으나 실제 생성 주체를 단정하지 않음. 영상·TTS·테스트이미지의 원래 삭제 경로 재등장0개.
현재 지정폴더+관련 소스 실물 319개 조사. 이전 inventory만으로 판정하지 않음. 다른 복사본/프로젝트 탐색 없음. 다른 위치의 같은 이름 후보는 JSON에 기록했으며 내용동일·복원이라고 단정하지 않음.

## 결과

A 반드시보존 192 / B 의존성 개선 후 삭제 가능 71 / C 즉시삭제추천 44 / D 판단보류 12.
C도 이번 삭제하지 않음. 실행·기록을 분리하여 이전 승인 Preview를 일괄 복구필수로 두지 않음.

### B 예상 절감

| 종류 | 개수 | bytes |
|---|---:|---:|
| 영상 | 0 | 0 |
| 이미지 | 0 | 0 |
| TTS·오디오 | 31 | 8,610,702 |
| 기타 | 40 | 138,513 |

### C 예상 절감

| 종류 | 개수 | bytes |
|---|---:|---:|
| 영상 | 16 | 37,190,046 |
| 이미지 | 27 | 24,157,462 |
| TTS·오디오 | 0 | 0 |
| 기타 | 1 | 12,292 |

## 현재 영상 전체 목록

| 상대경로 | bytes | 분류 | 실행·재현/근거 | Git |
|---|---:|---|---|---|
| `public/assets/video/pocket-door-doormaster-full-preview-v1.mp4` | 10734724 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/pocket-door-doormaster-full-preview-v2-scene01-v5-preserved.mp4` | 10998203 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/pocket-door-doormaster-full-preview-v2.mp4` | 11014455 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/pocket-door-doormaster-full-preview-v3.mp4` | 11036422 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene01-doormaster-v1.mp4` | 340263 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene01-doormaster-v2.mp4` | 172480 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene01-doormaster-v3.mp4` | 365133 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene01-doormaster-v4.mp4` | 893677 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene01-doormaster-v5.mp4` | 435173 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene01-doormaster-v6.mp4` | 451385 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene01-doormaster-v7-reproduction-v1.mp4` | 473352 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene01-doormaster-v7.mp4` | 473352 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene01-handle-round-hardcut-test-v1.mp4` | 431541 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene02-doormaster-v1.mp4` | 387706 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene02-doormaster-v2.mp4` | 205074 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene02-doormaster-v3.mp4` | 200982 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene03-doormaster-preview-v1.mp4` | 183695 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene03-doormaster-preview-v2.mp4` | 188446 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene04-doormaster-preview-v1.mp4` | 277492 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene04-doormaster-preview-v2.mp4` | 268015 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene04-doormaster-preview-v3.mp4` | 239960 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene04-doormaster-preview-v4.mp4` | 242455 | C | 현재 최종 조립은 승인 Scene5개만 입력; 이전 Preview/하드컷은 과거 비교·복구 이력만 존재 | True |
| `public/assets/video/scene04-doormaster-preview-v5.mp4` | 241565 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |
| `public/assets/video/scene05-doormaster-preview-v1.mp4` | 233864 | A | 최종 승인 영상 또는 v7 재현/검증 입력 | True |

## 현재 TTS·오디오 전체 목록

| 상대경로 | bytes | 분류 | 실행·재현/근거 | Git |
|---|---:|---|---|---|
| `public/assets/audio/full-tts-qa-v3.mp3` | 513644 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/full-tts-qa-v3.wav` | 1228480 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/full-tts-qa-v4.mp3` | 495404 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/full-tts-qa-v4.wav` | 1185268 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-review-v3.mp3` | 59084 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-review-v3.wav` | 137792 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v10-part-b.wav` | 115244 | A | 승인 음원 또는 실제 최종 조합 입력 | True |
| `public/assets/audio/scene01-tts-v10.wav` | 227026 | A | 승인 음원 또는 실제 최종 조합 입력 | True |
| `public/assets/audio/scene01-tts-v3.wav` | 147884 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v4.wav` | 132204 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v5.wav` | 140204 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v6.wav` | 159404 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v7-part-a.wav` | 105644 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v7-part-b.wav` | 101804 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v7.wav` | 178762 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v8.wav` | 203564 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene01-tts-v9-part-a.wav` | 134444 | A | 승인 음원 또는 실제 최종 조합 입력 | True |
| `public/assets/audio/scene01-tts-v9.wav` | 198166 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene02-tts-review-v3.mp3` | 116684 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene02-tts-review-v3.wav` | 276144 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene02-tts-v3.wav` | 288044 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene02-tts-v4.wav` | 253484 | A | 승인 음원 또는 실제 최종 조합 입력 | True |
| `public/assets/audio/scene03-tts-review-v3.mp3` | 121964 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-review-v3.wav` | 288368 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-review-v4.mp3` | 103724 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-review-v4.wav` | 245156 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-v2.wav` | 384044 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-v3.wav` | 324524 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-v4.wav` | 251564 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene03-tts-v5.wav` | 330284 | A | 승인 음원 또는 실제 최종 조합 입력 | True |
| `public/assets/audio/scene04-tts-review-v3.mp3` | 121964 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene04-tts-review-v3.wav` | 289026 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene04-tts-v3.wav` | 293804 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene04-tts-v4.wav` | 399404 | A | 승인 음원 또는 실제 최종 조합 입력 | True |
| `public/assets/audio/scene05-tts-review-v3.mp3` | 88844 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene05-tts-review-v3.wav` | 208696 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene05-tts-v3.wav` | 220844 | B | 최종 TTS 조합 마지막 assert에서 실파일 해시 검사. 과거 음성 검사를 필수입력 검사와 분리한 후 삭제 가능 | True |
| `public/assets/audio/scene05-tts-v4.wav` | 249644 | A | 승인 음원 또는 실제 최종 조합 입력 | True |

## Scene별 오디오 개수

- Scene1: 14개; A 3, B 11, C 0
- Scene2: 4개; A 1, B 3, C 0
- Scene3: 8개; A 1, B 7, C 0
- Scene4: 4개; A 1, B 3, C 0
- Scene5: 4개; A 1, B 3, C 0

## 이미지 및 기타 후보 파일별 목록

| 상대경로 | bytes | 분류 | 이유 | Git |
|---|---:|---|---|---|
| `public/assets/.DS_Store` | 12292 | C | OS 메타데이터. 자동 재생성 가능 | False |
| `public/assets/images/domus-CIS_3455-v3.jpg` | 47113 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/domus-CIS_7622-v3.jpg` | 64120 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/domus-DSL140-1-4-v3.jpg` | 86844 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/domus-DSL140-6-v3.jpg` | 21923 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/domus-SH30NI-1-1-v3.jpg` | 9536 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-p71-6000.png` | 1655645 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-section-verified-detail.png` | 305749 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-zl-front-lines.png` | 33314 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-zl-front.png` | 51823 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-zl-install.png` | 62008 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-zl-photo.png` | 357893 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/official-zl-section.png` | 70912 | D | 공식자료 근거 원본. 최종 실행과 별개인 자료보존 필요성 추가 확인 | True |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2-scene01-v5-preserved.png` | 1599230 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2.png` | 1597865 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/pocket-door-doormaster-full-qa-v1.png` | 679168 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/pocket-door-doormaster-full-qa-v2-scene01-v5-preserved.png` | 702147 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/pocket-door-doormaster-full-qa-v2.png` | 726030 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2-scene01-v5-preserved.png` | 261936 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2.png` | 425930 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-doormaster-v3-qa.png` | 433317 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-doormaster-v4-qa.png` | 557191 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-doormaster-v6-qa.png` | 551546 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-edgepull-v1.png` | 1646979 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-privacy-v2.png` | 1624369 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-privacy-v3.png` | 1639727 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-privacy-v5.png` | 1379972 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-round-v2.png` | 1662250 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-round-v3.png` | 1382750 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-types-base-v1.png` | 1959969 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene01-handle-types-base-v2.png` | 1667642 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene04-doormaster-preview-v1-qa.png` | 79998 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene04-doormaster-preview-v2-qa.png` | 84992 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene04-doormaster-preview-v3-qa.png` | 61182 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/assets/images/scene04-doormaster-preview-v4-qa.png` | 64582 | C | 최종 입력은 승인 수정본/보존 PNG로 완결. 이전 손잡이·구형 QA는 원본 제작 이력만 연결 | True |
| `public/covers/doormaster-pocket-door-handle-cover-v1.png` | 1118288 | C | 이전 Cover 결과/크롭: 최종 v2 직접 입력 아님 | True |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v1.png` | 450380 | C | 이전 Cover 결과/크롭: 최종 v2 직접 입력 아님 | True |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v1.png` | 588995 | C | 이전 Cover 결과/크롭: 최종 v2 직접 입력 아님 | True |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v1.png` | 564560 | C | 이전 Cover 결과/크롭: 최종 v2 직접 입력 아님 | True |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v1.png` | 646467 | C | 이전 Cover 결과/크롭: 최종 v2 직접 입력 아님 | True |
| `src/doormaster-pocket-door-cover-v1.tsx` | 1846 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/fonts.ts` | 846 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/index.tsx` | 7462 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene01-02-doormaster-v1.tsx` | 5458 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene01-handle-types-v3.tsx` | 1361 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene01-handle-types-v4.tsx` | 1454 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene01-handle-types-v5.tsx` | 1454 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene01-subtitle-v6.tsx` | 1509 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene02-doormaster-v2.tsx` | 5191 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-assembly-motion-test-v1.tsx` | 4657 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-compare-v5.tsx` | 1919 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-concept-v6.tsx` | 1520 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-2d-comparison-v1.tsx` | 1880 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-concept-v1.tsx` | 4478 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-concept-v2.tsx` | 4195 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-concept-v3.tsx` | 4182 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-concept-v4.tsx` | 5470 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-mismatch-v1.tsx` | 4189 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-doormaster-preview-v1.tsx` | 2559 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-layered-section-test-v1.tsx` | 6211 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-motion-test-v1.tsx` | 3643 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-motion-test-v2.tsx` | 6452 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-overlay-v4.tsx` | 2746 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-photo-section-v2.tsx` | 2850 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-realistic-section-test-v1.tsx` | 5547 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-remotion-motion-test-v1.tsx` | 2757 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-remotion-motion-test-v2.tsx` | 4161 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-remotion-motion-test-v3.tsx` | 4297 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-remotion-motion-test-v4.tsx` | 4070 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene03-section-concept-v1.tsx` | 3084 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene04-doormaster-preview-v1.tsx` | 1804 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene04-doormaster-preview-v2.tsx` | 1812 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene04-doormaster-preview-v3.tsx` | 1514 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/scene04-doormaster-preview-v4.tsx` | 1790 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/sh30-exploded-concept-v1.tsx` | 5208 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/sh30-exploded-concept-v2.tsx` | 5956 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/sh30-internal-v1.tsx` | 2280 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/sh30-pre-assembly-v1.tsx` | 1420 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/sh30-recess-pair-v1.tsx` | 3381 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |
| `src/stills-v3.tsx` | 5900 | B | package.json studio는 src/index.tsx 진입. 구형 등록/import 경로를 최종 진입점으로 정비 후 삭제 가능 | True |

## 남은 이유와 최소 다음 작업

이전847개 삭제는 실제 실행됐다. 남은 이전MP4는 과거 승인 이력으로 광범위하게 복구용 보존했기 때문이며 이번에는 최종직접입력과 분리했다. 전체Previewv1/v2는 assemble-full-preview-v3.py 입력이 아니다. Scene1v6는 reproduce-scene01-v7.py의 실제 입력이므로 유지한다.
과거TTS는 assemble-scene01-tts-v10.py의 마지막 manifest 해시검증 때문에 남아 있다. 승인5음원·두 조합입력은 유지하고, 과거 전체음원 검증을 별도 아카이브 검사로 분리하는 최소 수정 후 B음원을 정리할 수 있다. 이번 스크립트 수정/음성 생성 없음.
이미지 중 최종4종·6PNG·제품 마스크·배경·Cover Hero/간판/로고/폰트는 유지. 과거 손잡이 원본을 삭제하면 이미지 수정 이력 재현은 Git 복원이 필요하지만 현재 최종영상 재현 입력은 유지한다.
다음: C 정확한 파일목록 승인 → 해시/실행참조 직전검증 → 승인경로만 정리. B는 검증/Studio 진입점 의존 개선 별도 승인 후 테스트·재분류. D 공식 자료는 별도 보존 판단. 추적파일 삭제 시 후속 커밋 필요. 이번 Git변경·삭제·이동0건.
