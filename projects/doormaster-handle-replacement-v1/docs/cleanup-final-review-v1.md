# C/D 정리 후보 최종 검토 v1

범위: 기존 C32개 + D41항목(파일40개와node_modules디렉터리1개)만 확인. 원본파일·편집소스·이전보고서 수정 없음. 삭제/이동/휴지통/Git 명령 실행 없음. 문서/JSON 보고서만 신규작성.

## 결론

- 검토73항목: 보존 66항목(파일65개 + node_modules1개), 정리 가능 4파일, 추가 판단 3파일.
- 기존 A/B 161파일 필수보존 점검. 이번 C/D 보존파일을 합하면 기존목록 기준 226파일 + node_modules1개 보존. 추가판단3파일도 결론 전까지 그대로 둔다. 이후 생성한 QA/작업기록/이번보고서 역시 별도보존하며 이수량에 중복가산하지 않았다.
- 안전한 이동후보 합계 810,836bytes (0.773MiB). 휴지통 이동은 실제 디스크 여유공간 확보가 아니며 휴지통 비우기는 별도행위다.
- C: 28개 보존/4개 정리 가능. D: D1 38항목 보존/D2 0개/D3 3개 추가판단. node_modules는 명시적으로 로컬보존하며 정리량에서 제외.

## 참조 검사 범위와 해석
기존 inventory에 있던 src/scripts/docs와 최신 관련QA만 검색. 파일명 리터럴 일치의 파일·행번호를 아래 기록했다. 소스의 출력경로도 일치하므로 ‘코드 참조’ 자체가 입력 의존성을 뜻하지 않는다. 입력으로 확인한 경우 재현항목에 별도명시. 동적경로는 리터럴 검색만으로 완전검증할 수 없으며 코드미참조만으로 정리하지 않았다. JSON 보호목록/해시언급과 실제 설명문 참조를 구분했다. node_modules는 재귀스캔하지 않고 디렉터리존재와기존용량만 확인.

## 기존 C 개별 판정

### C-01 `.DS_Store` — 정리 가능

- 크기: 8,196 bytes
- 생성 목적: Finder 폴더 보기 메타데이터
- 최종 승인본과 관계: 승인 콘텐츠/재현과 무관
- 복구·재현: 불필요. Finder 보기 설정만 초기화될 수 있음
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:19,20`; `docs/cover-v2-input-lock.json:20,22`; `docs/cover-v3-input-lock.json:21,24`; `docs/preview-caption-input-lock-v1.json:18,19`; `docs/preview-v1-input-lock.json:296,297`; `docs/preview-v2-input-lock.json:15,16`; `docs/preview-v3-input-lock.json:16,17`; `docs/tts-breath-mechanical-v3.json:629,630`; `docs/tts-final-baseline-v2.json:13,14`; `docs/tts-natural-v7-baseline.json:13,14`; `docs/tts-natural-v8-baseline.json:13,14`; `docs/tts-natural-v9-baseline.json:13,14`; `docs/tts-scene04-final-baseline-v6.json:13,14`; `docs/tts-scene04-revised-baseline-v5.json:13,14`; `docs/tts-v3-baseline.json:13,14`; `docs/tts-v4-baseline.json:13,14`
- SHA256: `21c30e30a49b8d0cd53d9a3c983e6a9ff61287f2e4a87a4e467f18d438a45140`

### C-02 `public/.DS_Store` — 정리 가능

- 크기: 8,196 bytes
- 생성 목적: Finder 폴더 보기 메타데이터
- 최종 승인본과 관계: 승인 콘텐츠/재현과 무관
- 복구·재현: 불필요. Finder 보기 설정만 초기화될 수 있음
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:19,20`; `docs/cover-v2-input-lock.json:20,22`; `docs/cover-v3-input-lock.json:21,24`; `docs/preview-caption-input-lock-v1.json:18,19`; `docs/preview-v1-input-lock.json:296,297`; `docs/preview-v2-input-lock.json:15,16`; `docs/preview-v3-input-lock.json:16,17`; `docs/tts-breath-mechanical-v3.json:629,630`; `docs/tts-final-baseline-v2.json:13,14`; `docs/tts-natural-v7-baseline.json:13,14`; `docs/tts-natural-v8-baseline.json:13,14`; `docs/tts-natural-v9-baseline.json:13,14`; `docs/tts-scene04-final-baseline-v6.json:13,14`; `docs/tts-scene04-revised-baseline-v5.json:13,14`; `docs/tts-v3-baseline.json:13,14`; `docs/tts-v4-baseline.json:13,14`
- SHA256: `c885c033318d50dbf1ab9ed2fc1dfda762b38aa7e297a49f1dca9505dfef25e6`

### C-03 `public/assets/.DS_Store` — 정리 가능

- 크기: 6,148 bytes
- 생성 목적: Finder 폴더 보기 메타데이터
- 최종 승인본과 관계: 승인 콘텐츠/재현과 무관
- 복구·재현: 불필요. Finder 보기 설정만 초기화될 수 있음
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:19,20`; `docs/cover-v2-input-lock.json:20,22`; `docs/cover-v3-input-lock.json:21,24`; `docs/preview-caption-input-lock-v1.json:18,19`; `docs/preview-v1-input-lock.json:296,297`; `docs/preview-v2-input-lock.json:15,16`; `docs/preview-v3-input-lock.json:16,17`; `docs/tts-breath-mechanical-v3.json:629,630`; `docs/tts-final-baseline-v2.json:13,14`; `docs/tts-natural-v7-baseline.json:13,14`; `docs/tts-natural-v8-baseline.json:13,14`; `docs/tts-natural-v9-baseline.json:13,14`; `docs/tts-scene04-final-baseline-v6.json:13,14`; `docs/tts-scene04-revised-baseline-v5.json:13,14`; `docs/tts-v3-baseline.json:13,14`; `docs/tts-v4-baseline.json:13,14`
- SHA256: `f20ca08810916d72bb0d71dbfaf8838ce94feb6adb6e2d9093893f75c97d0cf1`

### C-04 `public/assets/audio/full-tts-qa-v1.mp3` — 보존

- 크기: 489,644 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:76`; `docs/tts-v3-generation-qa.md:13`; `docs/tts-v3-natural-speech-qa.md:65,81`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:82`; `docs/cover-v2-input-lock.json:84`; `docs/cover-v3-input-lock.json:86`; `docs/preview-caption-input-lock-v1.json:74`; `docs/preview-v1-input-lock.json:334`; `docs/preview-v2-input-lock.json:62`; `docs/preview-v3-input-lock.json:67`; `docs/tts-breath-mechanical-v3.json:662`; `docs/tts-final-baseline-v2.json:46`; `docs/tts-natural-v7-baseline.json:50`; `docs/tts-natural-v8-baseline.json:51`; `docs/tts-natural-v9-baseline.json:51`; `docs/tts-scene04-final-baseline-v6.json:49`; `docs/tts-scene04-revised-baseline-v5.json:48`; `docs/tts-v4-baseline.json:47`
- SHA256: `e9314cc1e18f5d4ad0fd09e4d0e8d831e3f394e63e8fe9082cacfc027c524c52`

### C-05 `public/assets/audio/full-tts-qa-v2.mp3` — 보존

- 크기: 508,844 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:86`; `docs/tts-v3-generation-qa.md:116,126`; `docs/tts-v3-natural-speech-qa.md:65`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:84`; `docs/cover-v2-input-lock.json:86`; `docs/cover-v3-input-lock.json:88`; `docs/preview-caption-input-lock-v1.json:76`; `docs/preview-v1-input-lock.json:336`; `docs/preview-v2-input-lock.json:64`; `docs/preview-v3-input-lock.json:69`; `docs/tts-breath-mechanical-v3.json:663`; `docs/tts-natural-v7-baseline.json:52`; `docs/tts-natural-v8-baseline.json:53`; `docs/tts-natural-v9-baseline.json:53`; `docs/tts-scene04-final-baseline-v6.json:51`; `docs/tts-scene04-revised-baseline-v5.json:50`; `docs/tts-v4-baseline.json:49`
- SHA256: `6cb5d8949f58d5591844b917226f6d959e15f7e13322182cb9cf899f5c9852eb`

### C-06 `public/assets/audio/full-tts-qa-v3.mp3` — 보존

- 크기: 517,004 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: `scripts/correct-tts-breath-v3.py:22,24`
- 문서 설명 참조: `docs/tts-v3-breath-correction-qa.md:36,53`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:83`; `docs/cover-v2-input-lock.json:85`; `docs/cover-v3-input-lock.json:87`; `docs/preview-caption-input-lock-v1.json:75`; `docs/preview-v1-input-lock.json:335`; `docs/preview-v2-input-lock.json:63`; `docs/preview-v3-input-lock.json:68`; `docs/tts-breath-mechanical-v3.json:457`; `docs/tts-natural-v7-baseline.json:51`; `docs/tts-natural-v8-baseline.json:52`; `docs/tts-natural-v9-baseline.json:52`; `docs/tts-scene04-final-baseline-v6.json:50`; `docs/tts-scene04-revised-baseline-v5.json:49`; `docs/tts-v4-baseline.json:48`
- SHA256: `aae7df048672fd1114b0af3a6fb4cd7b59da227762a77f83e1e6e4a7407a493d`

### C-07 `public/assets/audio/full-tts-qa-v4.mp3` — 보존

- 크기: 530,444 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v4-qa.md:7`; `docs/tts-v4-natural-speech-qa.md:44,65`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:80`; `docs/cover-v2-input-lock.json:82`; `docs/cover-v3-input-lock.json:84`; `docs/preview-caption-input-lock-v1.json:72`; `docs/preview-v1-input-lock.json:332`; `docs/preview-v2-input-lock.json:60`; `docs/preview-v3-input-lock.json:65`; `docs/tts-natural-v7-baseline.json:48`; `docs/tts-natural-v8-baseline.json:49`; `docs/tts-natural-v9-baseline.json:49`; `docs/tts-scene04-final-baseline-v6.json:47`; `docs/tts-scene04-revised-baseline-v5.json:46`; `docs/tts-v4-mechanical-qa.json:353`
- SHA256: `f7ed7dc12bdc2e1cfda1dec9664fb05258095e4738e32d9942d8fb2ea5128708`

### C-08 `public/assets/audio/full-tts-qa-v5.mp3` — 보존

- 크기: 512,684 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v4-qa.md:7,28`; `docs/tts-scene04-v5-qa.md:13`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:79`; `docs/cover-v2-input-lock.json:81`; `docs/cover-v3-input-lock.json:83`; `docs/preview-caption-input-lock-v1.json:71`; `docs/preview-v1-input-lock.json:331`; `docs/preview-v2-input-lock.json:59`; `docs/preview-v3-input-lock.json:64`; `docs/tts-natural-v7-baseline.json:47`; `docs/tts-natural-v8-baseline.json:48`; `docs/tts-natural-v9-baseline.json:48`; `docs/tts-scene04-final-baseline-v6.json:46`; `docs/tts-scene04-revised-mechanical-v5.json:224`
- SHA256: `63c363dad2aec93a67baa7f3e1d6ecfb72617af35f998f41683409ed843375d9`

### C-09 `public/assets/audio/full-tts-qa-v6.mp3` — 보존

- 크기: 534,284 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v5-qa.md:26`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:77`; `docs/cover-v2-input-lock.json:79`; `docs/cover-v3-input-lock.json:81`; `docs/preview-caption-input-lock-v1.json:69`; `docs/preview-v1-input-lock.json:329`; `docs/preview-v2-input-lock.json:57`; `docs/preview-v3-input-lock.json:62`; `docs/tts-natural-v7-baseline.json:46`; `docs/tts-natural-v8-baseline.json:46`; `docs/tts-natural-v9-baseline.json:46`; `docs/tts-scene04-final-mechanical-v6.json:228`
- SHA256: `a109388c2f502f1f8364eb2ae7c97d71cee78ec1406960007680eeb85c74c700`

### C-10 `public/assets/audio/full-tts-qa-v7.mp3` — 보존

- 크기: 553,964 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-05-natural-v6-qa.md:31,45`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:78`; `docs/cover-v2-input-lock.json:80`; `docs/cover-v3-input-lock.json:82`; `docs/preview-caption-input-lock-v1.json:70`; `docs/preview-v1-input-lock.json:330`; `docs/preview-v2-input-lock.json:58`; `docs/preview-v3-input-lock.json:63`; `docs/tts-natural-v7-mechanical.json:224`; `docs/tts-natural-v8-baseline.json:47`; `docs/tts-natural-v9-baseline.json:47`
- SHA256: `6d2b265116427b12d2b95eba84d2310bec0e063a65c3ad1e4de902e72d11c9b1`

### C-11 `public/assets/audio/full-tts-qa-v8.mp3` — 보존

- 크기: 516,524 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v7-qa.md:16,31`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:106`; `docs/cover-v2-input-lock.json:108`; `docs/cover-v3-input-lock.json:110`; `docs/preview-caption-input-lock-v1.json:98`; `docs/preview-v1-input-lock.json:358`; `docs/preview-v2-input-lock.json:86`; `docs/preview-v3-input-lock.json:91`; `docs/tts-natural-v8-mechanical.json:208`; `docs/tts-natural-v9-baseline.json:73`
- SHA256: `d8b6e9711e20d293623051a53492f815a0d2036a68beb219d70e6b491510b32d`

### C-12 `public/assets/audio/scene04-part-a-tts-v4.mp3` — 보존

- 크기: 8,736 bytes
- 생성 목적: 의미단위 분리 생성 원본
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v4-natural-speech-qa.md:15,58,68`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:96`; `docs/cover-v2-input-lock.json:98`; `docs/cover-v3-input-lock.json:100`; `docs/preview-caption-input-lock-v1.json:88`; `docs/preview-v1-input-lock.json:348`; `docs/preview-v2-input-lock.json:76`; `docs/preview-v3-input-lock.json:81`; `docs/tts-natural-v7-baseline.json:63`; `docs/tts-natural-v8-baseline.json:65`; `docs/tts-natural-v9-baseline.json:65`; `docs/tts-scene04-final-baseline-v6.json:61`; `docs/tts-scene04-revised-baseline-v5.json:59`; `docs/tts-v4-mechanical-qa.json:4`; `docs/tts-v4-part-analysis.json:3`; `docs/tts-v4-part-input.json:2`
- SHA256: `75db52c5871e06142a1fcf5b31e3d896f1e7b89e1adfc4453b7ea27f72ea4738`

### C-13 `public/assets/audio/scene04-part-b-tts-v4.mp3` — 보존

- 크기: 8,064 bytes
- 생성 목적: 의미단위 분리 생성 원본
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v4-natural-speech-qa.md:16,59,68,69`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:92`; `docs/cover-v2-input-lock.json:94`; `docs/cover-v3-input-lock.json:96`; `docs/preview-caption-input-lock-v1.json:84`; `docs/preview-v1-input-lock.json:344`; `docs/preview-v2-input-lock.json:72`; `docs/preview-v3-input-lock.json:77`; `docs/tts-natural-v7-baseline.json:59`; `docs/tts-natural-v8-baseline.json:61`; `docs/tts-natural-v9-baseline.json:61`; `docs/tts-scene04-final-baseline-v6.json:57`; `docs/tts-scene04-revised-baseline-v5.json:55`; `docs/tts-v4-mechanical-qa.json:31`; `docs/tts-v4-part-analysis.json:27`; `docs/tts-v4-part-input.json:3`
- SHA256: `32c9ba64bc05df48074c72b941244d11df2d9d84fcc233cedc110d78aa5ab177`

### C-14 `public/assets/audio/scene04-part-c-tts-v4.mp3` — 보존

- 크기: 12,672 bytes
- 생성 목적: 의미단위 분리 생성 원본
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v4-natural-speech-qa.md:17,60,69`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:102`; `docs/cover-v2-input-lock.json:104`; `docs/cover-v3-input-lock.json:106`; `docs/preview-caption-input-lock-v1.json:94`; `docs/preview-v1-input-lock.json:354`; `docs/preview-v2-input-lock.json:82`; `docs/preview-v3-input-lock.json:87`; `docs/tts-natural-v7-baseline.json:67`; `docs/tts-natural-v8-baseline.json:69`; `docs/tts-natural-v9-baseline.json:70`; `docs/tts-scene04-final-baseline-v6.json:65`; `docs/tts-scene04-revised-baseline-v5.json:63`; `docs/tts-v4-mechanical-qa.json:54`; `docs/tts-v4-part-analysis.json:47`; `docs/tts-v4-part-input.json:4`
- SHA256: `6ebe4ebdd628d9be91aabfc10f526803b42df6cd8038cc9e5d56e6de77f13e7b`

### C-15 `public/assets/audio/scene04-tts-v1.mp3` — 보존

- 크기: 24,576 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v3-generation-qa.md:22`; `docs/tts-v3-natural-speech-qa.md:79`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:90`; `docs/cover-v2-input-lock.json:92`; `docs/cover-v3-input-lock.json:94`; `docs/preview-caption-input-lock-v1.json:82`; `docs/preview-v1-input-lock.json:342`; `docs/preview-v2-input-lock.json:70`; `docs/preview-v3-input-lock.json:75`; `docs/tts-breath-mechanical-v3.json:665`; `docs/tts-final-baseline-v2.json:48`; `docs/tts-natural-v7-baseline.json:57`; `docs/tts-natural-v8-baseline.json:59`; `docs/tts-natural-v9-baseline.json:59`; `docs/tts-scene04-final-baseline-v6.json:55`; `docs/tts-scene04-revised-baseline-v5.json:53`; `docs/tts-v3-input-v1.json:5`; `docs/tts-v3-mechanical-qa.json:94`; `docs/tts-v4-baseline.json:51`
- SHA256: `83d2855113f15d273fa1528b9f5cb98f1c52920eb940bf727f97ab9a65025481`

### C-16 `public/assets/audio/scene04-tts-v2.mp3` — 보존

- 크기: 28,416 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: `scripts/correct-tts-breath-v3.py:13`
- 문서 설명 참조: `docs/26.10.22수정.md:86`; `docs/tts-v3-generation-qa.md:123`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:91`; `docs/cover-v2-input-lock.json:93`; `docs/cover-v3-input-lock.json:95`; `docs/preview-caption-input-lock-v1.json:83`; `docs/preview-v1-input-lock.json:343`; `docs/preview-v2-input-lock.json:71`; `docs/preview-v3-input-lock.json:76`; `docs/tts-breath-mechanical-v3.json:5,666`; `docs/tts-final-input-v2.json:2`; `docs/tts-final-mechanical-qa-v2.json:97`; `docs/tts-natural-v7-baseline.json:58`; `docs/tts-natural-v8-baseline.json:60`; `docs/tts-natural-v9-baseline.json:60`; `docs/tts-scene04-final-baseline-v6.json:56`; `docs/tts-scene04-revised-baseline-v5.json:54`; `docs/tts-v4-baseline.json:52`
- SHA256: `2fbf399ec39703e6c24d695239c1c75c5ba6f334fd3967f46252ed393443b6a0`

### C-17 `public/assets/audio/scene04-tts-v3.mp3` — 보존

- 크기: 147,404 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: `scripts/correct-tts-breath-v3.py:13,21`
- 문서 설명 참조: `docs/tts-v3-breath-correction-qa.md:34,51`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:94`; `docs/cover-v2-input-lock.json:96`; `docs/cover-v3-input-lock.json:98`; `docs/preview-caption-input-lock-v1.json:86`; `docs/preview-v1-input-lock.json:346`; `docs/preview-v2-input-lock.json:74`; `docs/preview-v3-input-lock.json:79`; `docs/tts-breath-mechanical-v3.json:53,352`; `docs/tts-natural-v7-baseline.json:61`; `docs/tts-natural-v8-baseline.json:63`; `docs/tts-natural-v9-baseline.json:63`; `docs/tts-scene04-final-baseline-v6.json:59`; `docs/tts-scene04-revised-baseline-v5.json:57`; `docs/tts-v4-baseline.json:53`
- SHA256: `c73516eb1b4ec6a1b12371592b9088c4c97e7debcd0be63cc21988cc331a1919`

### C-18 `public/assets/audio/scene04-tts-v4.mp3` — 보존

- 크기: 148,844 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v4-qa.md:7`; `docs/tts-v4-natural-speech-qa.md:42,63`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:87`; `docs/cover-v2-input-lock.json:89`; `docs/cover-v3-input-lock.json:91`; `docs/preview-caption-input-lock-v1.json:79`; `docs/preview-v1-input-lock.json:339`; `docs/preview-v2-input-lock.json:67`; `docs/preview-v3-input-lock.json:72`; `docs/tts-natural-v7-baseline.json:54`; `docs/tts-natural-v8-baseline.json:56`; `docs/tts-natural-v9-baseline.json:56`; `docs/tts-scene04-final-baseline-v6.json:52`; `docs/tts-scene04-revised-baseline-v5.json:51`; `docs/tts-v4-mechanical-qa.json:258`
- SHA256: `19737078f12fd78cdc82a2c163f17b14e3251e28c2fa157885d615a2ec3fce4e`

### C-19 `public/assets/audio/scene04-tts-v5.mp3` — 보존

- 크기: 28,224 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v4-qa.md:7,26`; `docs/tts-scene04-v5-qa.md:13`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:89`; `docs/cover-v2-input-lock.json:91`; `docs/cover-v3-input-lock.json:93`; `docs/preview-caption-input-lock-v1.json:81`; `docs/preview-v1-input-lock.json:341`; `docs/preview-v2-input-lock.json:69`; `docs/preview-v3-input-lock.json:74`; `docs/tts-natural-v7-baseline.json:56`; `docs/tts-natural-v8-baseline.json:58`; `docs/tts-natural-v9-baseline.json:58`; `docs/tts-scene04-final-baseline-v6.json:54`; `docs/tts-scene04-revised-input-v5.json:2`; `docs/tts-scene04-revised-mechanical-v5.json:120`
- SHA256: `a2f3cce64543557dcc8294a7c88eac9138a0890ac3f0ff0d0e6b79bb7bb1fd0d`

### C-20 `public/assets/audio/scene04-tts-v6.mp3` — 보존

- 크기: 32,544 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v5-qa.md:24`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:86`; `docs/cover-v2-input-lock.json:88`; `docs/cover-v3-input-lock.json:90`; `docs/preview-caption-input-lock-v1.json:78`; `docs/preview-v1-input-lock.json:338`; `docs/preview-v2-input-lock.json:66`; `docs/preview-v3-input-lock.json:71`; `docs/tts-natural-v7-baseline.json:53`; `docs/tts-natural-v8-baseline.json:55`; `docs/tts-natural-v9-baseline.json:55`; `docs/tts-scene04-final-input-v6.json:2`; `docs/tts-scene04-final-mechanical-v6.json:120`
- SHA256: `8cd8381bf1af125d8fde634f5c6b7376dff865db591a28e36ac8745f0925b236`

### C-21 `public/assets/audio/scene04-tts-v7.mp3` — 보존

- 크기: 38,400 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-05-natural-v6-qa.md:29,43`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:85`; `docs/cover-v2-input-lock.json:87`; `docs/cover-v3-input-lock.json:89`; `docs/preview-caption-input-lock-v1.json:77`; `docs/preview-v1-input-lock.json:337`; `docs/preview-v2-input-lock.json:65`; `docs/preview-v3-input-lock.json:70`; `docs/scene04-tts-v7-input.json:2`; `docs/tts-natural-v7-mechanical.json:120`; `docs/tts-natural-v8-baseline.json:54`; `docs/tts-natural-v9-baseline.json:54`
- SHA256: `dc3843f0c049a1789a21ba9abc82049299b75f5ff9ae650797988189d7d87f73`

### C-22 `public/assets/audio/scene04-tts-v8.mp3` — 보존

- 크기: 30,912 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v7-qa.md:16,29`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:97`; `docs/cover-v2-input-lock.json:99`; `docs/cover-v3-input-lock.json:101`; `docs/preview-caption-input-lock-v1.json:89`; `docs/preview-v1-input-lock.json:349`; `docs/preview-v2-input-lock.json:77`; `docs/preview-v3-input-lock.json:82`; `docs/scene04-tts-v8-input.json:2`; `docs/tts-natural-v8-mechanical.json:120`; `docs/tts-natural-v9-baseline.json:66`
- SHA256: `5a245c6b49ba2f0ff9966bc7e3a9eb9df916f2e2bfe59abc635809b8e4f166fc`

### C-23 `public/assets/audio/scene05-part-a-tts-v3.mp3` — 보존

- 크기: 9,024 bytes
- 생성 목적: 의미단위 분리 생성 원본
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v4-natural-speech-qa.md:18,61,70`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:95`; `docs/cover-v2-input-lock.json:97`; `docs/cover-v3-input-lock.json:99`; `docs/preview-caption-input-lock-v1.json:87`; `docs/preview-v1-input-lock.json:347`; `docs/preview-v2-input-lock.json:75`; `docs/preview-v3-input-lock.json:80`; `docs/tts-natural-v7-baseline.json:62`; `docs/tts-natural-v8-baseline.json:64`; `docs/tts-natural-v9-baseline.json:64`; `docs/tts-scene04-final-baseline-v6.json:60`; `docs/tts-scene04-revised-baseline-v5.json:58`; `docs/tts-v4-mechanical-qa.json:81`; `docs/tts-v4-part-analysis.json:71`; `docs/tts-v4-part-input.json:5`
- SHA256: `f2d9b8422687acc0bccfd43cbbb70848900b859688d44d29720a72b9cc58ee75`

### C-24 `public/assets/audio/scene05-part-b-tts-v3.mp3` — 보존

- 크기: 14,592 bytes
- 생성 목적: 의미단위 분리 생성 원본
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v4-natural-speech-qa.md:19,62,70`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:93`; `docs/cover-v2-input-lock.json:95`; `docs/cover-v3-input-lock.json:97`; `docs/preview-caption-input-lock-v1.json:85`; `docs/preview-v1-input-lock.json:345`; `docs/preview-v2-input-lock.json:73`; `docs/preview-v3-input-lock.json:78`; `docs/tts-natural-v7-baseline.json:60`; `docs/tts-natural-v8-baseline.json:62`; `docs/tts-natural-v9-baseline.json:62`; `docs/tts-scene04-final-baseline-v6.json:58`; `docs/tts-scene04-revised-baseline-v5.json:56`; `docs/tts-v4-mechanical-qa.json:104`; `docs/tts-v4-part-analysis.json:91`; `docs/tts-v4-part-input.json:6`
- SHA256: `c0c1a7fd9cf383fae889c2c51ce36f1797168523215c4ed1900e019da5b588b1`

### C-25 `public/assets/audio/scene05-tts-v1.mp3` — 보존

- 크기: 20,352 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: `scripts/correct-tts-breath-v3.py:13`
- 문서 설명 참조: `docs/tts-v3-generation-qa.md:23,124`; `docs/tts-v3-natural-speech-qa.md:80`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:101`; `docs/cover-v2-input-lock.json:103`; `docs/cover-v3-input-lock.json:105`; `docs/preview-caption-input-lock-v1.json:93`; `docs/preview-v1-input-lock.json:353`; `docs/preview-v2-input-lock.json:81`; `docs/preview-v3-input-lock.json:86`; `docs/tts-breath-mechanical-v3.json:112,669`; `docs/tts-final-baseline-v2.json:51`; `docs/tts-final-mechanical-qa-v2.json:124`; `docs/tts-natural-v7-baseline.json:66`; `docs/tts-natural-v8-baseline.json:68`; `docs/tts-natural-v9-baseline.json:69`; `docs/tts-scene04-final-baseline-v6.json:64`; `docs/tts-scene04-revised-baseline-v5.json:62`; `docs/tts-v3-input-v1.json:6`; `docs/tts-v3-mechanical-qa.json:120`; `docs/tts-v4-baseline.json:56`
- SHA256: `2c6dcfb6be2d7cbdd777431a185ca9096d44e1989172ac79734f524c086e9638`

### C-26 `public/assets/audio/scene05-tts-v2.mp3` — 보존

- 크기: 108,044 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: `scripts/correct-tts-breath-v3.py:13,21`
- 문서 설명 참조: `docs/tts-scene04-v4-qa.md:27`; `docs/tts-scene04-v5-qa.md:25`; `docs/tts-v3-breath-correction-qa.md:35,52`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:103`; `docs/cover-v2-input-lock.json:105`; `docs/cover-v3-input-lock.json:107`; `docs/preview-caption-input-lock-v1.json:95`; `docs/preview-v1-input-lock.json:355`; `docs/preview-v2-input-lock.json:83`; `docs/preview-v3-input-lock.json:88`; `docs/tts-breath-mechanical-v3.json:168,400`; `docs/tts-natural-v7-baseline.json:68`; `docs/tts-natural-v8-baseline.json:70`; `docs/tts-natural-v9-baseline.json:71`; `docs/tts-scene04-final-baseline-v6.json:66`; `docs/tts-scene04-final-mechanical-v6.json:172`; `docs/tts-scene04-revised-baseline-v5.json:64`; `docs/tts-scene04-revised-mechanical-v5.json:168`; `docs/tts-v4-baseline.json:57`
- SHA256: `6ec6082eb684477039e8c038647e1cd15475f29711b6a21659b9b7f5b184df54`

### C-27 `public/assets/audio/scene05-tts-v3.mp3` — 보존

- 크기: 119,564 bytes
- 생성 목적: Scene별 TTS 생성 또는 호흡 보정 후보 원음
- 최종 승인본과 관계: 최종 승인 선택 원음 자체는 아님; 발화/호흡/대본 수정 이력의 비교 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v4-natural-speech-qa.md:43,64`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:104`; `docs/cover-v2-input-lock.json:106`; `docs/cover-v3-input-lock.json:108`; `docs/preview-caption-input-lock-v1.json:96`; `docs/preview-v1-input-lock.json:356`; `docs/preview-v2-input-lock.json:84`; `docs/preview-v3-input-lock.json:89`; `docs/tts-natural-v7-baseline.json:69`; `docs/tts-natural-v8-baseline.json:71`; `docs/tts-natural-v9-baseline.json:72`; `docs/tts-scene04-final-baseline-v6.json:67`; `docs/tts-scene04-revised-baseline-v5.json:65`; `docs/tts-v4-mechanical-qa.json:305`
- SHA256: `80352980fc7971b97c1f73f6974e9d34bd4db541f236413017bd0370c9c9c35a`

### C-28 `public/assets/images/scene01-before-candidate-v2.png` — 보존

- 크기: 2,392,948 bytes
- 생성 목적: Before 구조 재생성 실패 후보
- 최종 승인본과 관계: 최종은Before v1,실패의 원본 증빙
- 복구·재현: 보존: 실패판정·v1/v2 비교 원본. AI원본은 동일 재생성 보장 불가
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:74`; `docs/cover-v2-input-lock.json:76`; `docs/cover-v3-input-lock.json:78`; `docs/preview-caption-input-lock-v1.json:66`; `docs/preview-v1-input-lock.json:326`; `docs/preview-v2-input-lock.json:54`; `docs/preview-v3-input-lock.json:59`; `docs/scene01-before-v2-mechanical-qa.json:13`; `docs/scene03-position-baseline-v2.json:16`; `docs/scene04-baseline-v1.json:25`; `docs/scene04-style-baseline-v2.json:34`; `docs/tts-breath-mechanical-v3.json:658`; `docs/tts-final-baseline-v2.json:42`; `docs/tts-natural-v7-baseline.json:43`; `docs/tts-natural-v8-baseline.json:43`; `docs/tts-natural-v9-baseline.json:43`; `docs/tts-scene04-final-baseline-v6.json:43`; `docs/tts-scene04-revised-baseline-v5.json:43`; `docs/tts-v3-baseline.json:42`; `docs/tts-v4-baseline.json:43`
- SHA256: `222d60a3dd195eb547955a77e5009d95c2553f08b639e507c800f3541c785762`

### C-29 `public/assets/video/scene04-grid-visual-v1.mp4` — 보존

- 크기: 178,739 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 첫 grid 렌더, 설치자국 강조선 하단 잘림으로 layout2 교체
- 복구·재현: 보존: src/scene04-grid-v1.tsx와 대응하는 실패/수정 비교 원본
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:21`; `docs/cover-v2-input-lock.json:23`; `docs/cover-v3-input-lock.json:25`; `docs/preview-caption-input-lock-v1.json:20`
- SHA256: `4c6a8e320eca3980e71d9230366b07935e5415687da5df51113cd30b219c3c93`

### C-30 `public/covers/doormaster-handle-replacement-cover-v1.png` — 보존

- 크기: 1,281,225 bytes
- 생성 목적: 이전 Cover 렌더 후보
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:154`; `docs/cover-v1-qa.md:7,40`
- JSON/해시 참조: `docs/cover-v2-input-lock.json:21`; `docs/cover-v3-input-lock.json:23`
- SHA256: `2ff5c60ee06d49226eda9c35e527467046c76641875adcf586c44d45b158098f`

### C-31 `public/covers/doormaster-handle-replacement-cover-v2.png` — 보존

- 크기: 1,279,981 bytes
- 생성 목적: 이전 Cover 렌더 후보
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v2-qa.md:23,30`
- JSON/해시 참조: `docs/cover-v3-input-lock.json:22`
- SHA256: `b897796dbe792abf5020e39db19376105344991741d59169c907e4ff0e998498`

### C-32 `public/covers/qa/cover-v1-reference-comparison.png` — 정리 가능

- 크기: 788,296 bytes
- 생성 목적: 최초 레퍼런스와 Cover v1 비교; 잘못된 축소 축척
- 최종 승인본과 관계: 동일축척 cover-v1-reference-same-scale.png로 대체, cover-v1-qa.md에 오류 명시
- 복구·재현: 최종 재현 불필요. 원본 Cover/Reference/정상 비교본과 오류기록은 보존
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v2-input-lock.json:116`; `docs/cover-v3-input-lock.json:119`
- SHA256: `ac8c3b8ca038c30970601f640ae5780e608a1a10a43f95a63f7996909813b7e8`

## 기존 D 개별 판정

### D-01 `public/assets/audio/full-tts-qa-v9.mp3` — D1

- 크기: 511,724 bytes
- 생성 목적: Scene 통합 청취/비교 결과
- 최종 승인본과 관계: 최종 선택 S1v1/S2v1/S3v1/S4v9/S5v4 통합 청취 근거
- 복구·재현: 보존: 비결정적 TTS는 재생성으로 동일 파형 복구 보장 불가. Part/원음 및 청취 비교 이력 유지
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-scene04-v8-qa.md:32`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:105`; `docs/cover-v2-input-lock.json:107`; `docs/cover-v3-input-lock.json:109`; `docs/preview-caption-input-lock-v1.json:97`; `docs/preview-v1-input-lock.json:357`; `docs/preview-v2-input-lock.json:85`; `docs/preview-v3-input-lock.json:90`; `docs/tts-natural-v9-mechanical.json:212`
- SHA256: `21a5daab6366bc83fd26ac17f14fcf31fddd627033898989ec35833d54f2a4af`

### D-02 `public/assets/images/preview-caption-qa-v1.png` — D1

- 크기: 497,494 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:149`; `docs/preview-caption-qa-v1.md:19,40`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:46`; `docs/cover-v2-input-lock.json:48`; `docs/cover-v3-input-lock.json:50`
- SHA256: `8047a650c4c80722183498e2d206df1e92364c9acfa259fddfc0e7f7a67f937f`

### D-03 `public/assets/images/preview-v1-body-mobile-qa.png` — D1

- 크기: 1,097,817 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/preview-v1-qa.md:11`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:57`; `docs/cover-v2-input-lock.json:59`; `docs/cover-v3-input-lock.json:61`; `docs/preview-caption-input-lock-v1.json:51`; `docs/preview-v2-input-lock.json:41`; `docs/preview-v3-input-lock.json:45`
- SHA256: `c1671ebdc85a53480cf925a82a8d86f5ba656ce7a77b62b681df4f3c4b9a9c9a`

### D-04 `public/assets/images/preview-v1-final-mobile-qa.png` — D1

- 크기: 2,125,335 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/preview-v1-qa.md:10`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:48`; `docs/cover-v2-input-lock.json:50`; `docs/cover-v3-input-lock.json:52`; `docs/preview-caption-input-lock-v1.json:42`; `docs/preview-v2-input-lock.json:32`; `docs/preview-v3-input-lock.json:36`
- SHA256: `2f00bd6608341d89a8ccc40e31563705196eeb4c7235f8af048b46e32e50fb53`

### D-05 `public/assets/images/preview-v2-scene04-mobile-qa.png` — D1

- 크기: 325,840 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:135`; `docs/preview-v2-qa.md:40`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:62`; `docs/cover-v2-input-lock.json:64`; `docs/cover-v3-input-lock.json:66`; `docs/preview-caption-input-lock-v1.json:55`; `docs/preview-v3-input-lock.json:49`
- SHA256: `b2239c9f4f804eea1edc9080e0a2190b677ddbd9bf7884f3730640663a739e83`

### D-06 `public/assets/images/scene01-before-v1-v2-qa.png` — D1

- 크기: 5,506,482 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:72`; `docs/cover-v2-input-lock.json:74`; `docs/cover-v3-input-lock.json:76`; `docs/preview-caption-input-lock-v1.json:64`; `docs/preview-v1-input-lock.json:324`; `docs/preview-v2-input-lock.json:52`; `docs/preview-v3-input-lock.json:57`; `docs/scene01-before-v2-mechanical-qa.json:14`; `docs/scene03-position-baseline-v2.json:15`; `docs/scene04-baseline-v1.json:23`; `docs/scene04-style-baseline-v2.json:32`; `docs/tts-breath-mechanical-v3.json:656`; `docs/tts-final-baseline-v2.json:40`; `docs/tts-natural-v7-baseline.json:41`; `docs/tts-natural-v8-baseline.json:41`; `docs/tts-natural-v9-baseline.json:41`; `docs/tts-scene04-final-baseline-v6.json:41`; `docs/tts-scene04-revised-baseline-v5.json:41`; `docs/tts-v3-baseline.json:40`; `docs/tts-v4-baseline.json:41`
- SHA256: `37e6dfb268b8c65952923e147a48a86e81d95ba3366c8ca4ba2f50e0689bbbf3`

### D-07 `public/assets/images/scene02-before-after-qa-v1.png` — D1

- 크기: 5,486,188 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene02-after-qa-v1.md:8`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:52`; `docs/cover-v2-input-lock.json:54`; `docs/cover-v3-input-lock.json:56`; `docs/preview-caption-input-lock-v1.json:46`; `docs/preview-v1-input-lock.json:309`; `docs/preview-v2-input-lock.json:36`; `docs/preview-v3-input-lock.json:40`; `docs/scene01-before-v2-baseline.json:8`; `docs/scene02-mechanical-qa-v1.json:29`; `docs/scene03-input-baseline-v1.json:7`; `docs/scene03-position-baseline-v2.json:9`; `docs/scene04-baseline-v1.json:15`; `docs/scene04-style-baseline-v2.json:19`; `docs/tts-breath-mechanical-v3.json:642`; `docs/tts-final-baseline-v2.json:26`; `docs/tts-natural-v7-baseline.json:26`; `docs/tts-natural-v8-baseline.json:26`; `docs/tts-natural-v9-baseline.json:26`; `docs/tts-scene04-final-baseline-v6.json:26`; `docs/tts-scene04-revised-baseline-v5.json:26`; `docs/tts-v3-baseline.json:26`; `docs/tts-v4-baseline.json:26`
- SHA256: `9f03562ed06c63217e065d27ca839b37a8c22a0683ad489faf8682ba3d7d9c9c`

### D-08 `public/assets/images/scene03-full-frame-qa.png` — D1

- 크기: 4,669,253 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene03-full-frame-qa.md:25`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:73`; `docs/cover-v2-input-lock.json:75`; `docs/cover-v3-input-lock.json:77`; `docs/preview-caption-input-lock-v1.json:65`; `docs/preview-v1-input-lock.json:325`; `docs/preview-v2-input-lock.json:53`; `docs/preview-v3-input-lock.json:58`; `docs/scene04-baseline-v1.json:24`; `docs/scene04-style-baseline-v2.json:33`; `docs/tts-breath-mechanical-v3.json:657`; `docs/tts-final-baseline-v2.json:41`; `docs/tts-natural-v7-baseline.json:42`; `docs/tts-natural-v8-baseline.json:42`; `docs/tts-natural-v9-baseline.json:42`; `docs/tts-scene04-final-baseline-v6.json:42`; `docs/tts-scene04-revised-baseline-v5.json:42`; `docs/tts-v3-baseline.json:41`; `docs/tts-v4-baseline.json:42`
- SHA256: `c79eb0cec328120f5df3e75311ad60784a4fe3ea4f5fc7ac7124e02d34ec2995`

### D-09 `public/assets/images/scene03-handle-removed-candidate-v1.png` — D1

- 크기: 2,528,770 bytes
- 생성 목적: Scene3 탈거 최초 전체 구도
- 최종 승인본과 관계: 승인 Scene3 v2 국소편집의 베이스 원본
- 복구·재현: 필수 보존: v2 배경/패치 외 픽셀 복구 근거
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene03-full-frame-qa.md:33`; `docs/scene03-qa-v1.md:7`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:61`; `docs/cover-v2-input-lock.json:63`; `docs/cover-v3-input-lock.json:65`; `docs/latch-correction-preservation-v2.json:4`; `docs/preview-caption-input-lock-v1.json:54`; `docs/preview-v1-input-lock.json:316`; `docs/preview-v2-input-lock.json:44`; `docs/preview-v3-input-lock.json:48`; `docs/scene01-before-v2-baseline.json:12`; `docs/scene03-mechanical-qa-v1.json:19`; `docs/scene03-position-baseline-v2.json:13`; `docs/scene04-baseline-v1.json:19`; `docs/scene04-style-baseline-v2.json:25`; `docs/tts-breath-mechanical-v3.json:649`; `docs/tts-final-baseline-v2.json:33`; `docs/tts-natural-v7-baseline.json:33`; `docs/tts-natural-v8-baseline.json:33`; `docs/tts-natural-v9-baseline.json:33`; `docs/tts-scene04-final-baseline-v6.json:33`; `docs/tts-scene04-revised-baseline-v5.json:33`; `docs/tts-v3-baseline.json:33`; `docs/tts-v4-baseline.json:33`
- SHA256: `dbcda4af0f05f3bbe2002986aec71e67a447695e6873eb468f2c73d9d145428f`

### D-10 `public/assets/images/scene03-position-edit-input-v2.png` — D1

- 크기: 59,228 bytes
- 생성 목적: Scene3 타공위치 국소수정 입력
- 최종 승인본과 관계: 승인 Scene3 v2 제작 입력
- 복구·재현: 필수 보존: 위치보정 재현/비교
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene03-full-frame-qa.md:9`; `docs/scene03-position-qa-v2.md:11`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:45`; `docs/cover-v2-input-lock.json:47`; `docs/cover-v3-input-lock.json:49`; `docs/preview-caption-input-lock-v1.json:40`; `docs/preview-v1-input-lock.json:304`; `docs/preview-v2-input-lock.json:30`; `docs/preview-v3-input-lock.json:34`; `docs/scene03-position-baseline-v2.json:5`; `docs/scene04-baseline-v1.json:11`; `docs/scene04-style-baseline-v2.json:14`; `docs/tts-breath-mechanical-v3.json:637`; `docs/tts-final-baseline-v2.json:21`; `docs/tts-natural-v7-baseline.json:21`; `docs/tts-natural-v8-baseline.json:21`; `docs/tts-natural-v9-baseline.json:21`; `docs/tts-scene04-final-baseline-v6.json:21`; `docs/tts-scene04-revised-baseline-v5.json:21`; `docs/tts-v3-baseline.json:21`; `docs/tts-v4-baseline.json:21`
- SHA256: `028ffaaecc00b1e7c5bc848aeceb8a65ad162c56b5ccce83ee22da73f8d10ab9`

### D-11 `public/assets/images/scene03-position-qa-v2.png` — D1

- 크기: 1,847,461 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene03-full-frame-qa.md:9`; `docs/scene03-position-qa-v2.md:8`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:63`; `docs/cover-v2-input-lock.json:65`; `docs/cover-v3-input-lock.json:67`; `docs/preview-caption-input-lock-v1.json:56`; `docs/preview-v1-input-lock.json:317`; `docs/preview-v2-input-lock.json:45`; `docs/preview-v3-input-lock.json:50`; `docs/scene04-baseline-v1.json:20`; `docs/scene04-style-baseline-v2.json:26`; `docs/tts-breath-mechanical-v3.json:650`; `docs/tts-final-baseline-v2.json:34`; `docs/tts-natural-v7-baseline.json:34`; `docs/tts-natural-v8-baseline.json:34`; `docs/tts-natural-v9-baseline.json:34`; `docs/tts-scene04-final-baseline-v6.json:34`; `docs/tts-scene04-revised-baseline-v5.json:34`; `docs/tts-v3-baseline.json:34`; `docs/tts-v4-baseline.json:34`
- SHA256: `57f7868014116616ce6e5a57282f626217bd4e20ca4a6d217413a91d1ab75754`

### D-12 `public/assets/images/scene03-qa-v1.png` — D1

- 크기: 5,733,369 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene03-qa-v1.md:8`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:51`; `docs/cover-v2-input-lock.json:53`; `docs/cover-v3-input-lock.json:55`; `docs/preview-caption-input-lock-v1.json:45`; `docs/preview-v1-input-lock.json:308`; `docs/preview-v2-input-lock.json:35`; `docs/preview-v3-input-lock.json:39`; `docs/scene01-before-v2-baseline.json:7`; `docs/scene03-mechanical-qa-v1.json:18`; `docs/scene03-position-baseline-v2.json:8`; `docs/scene04-baseline-v1.json:14`; `docs/scene04-style-baseline-v2.json:18`; `docs/tts-breath-mechanical-v3.json:641`; `docs/tts-final-baseline-v2.json:25`; `docs/tts-natural-v7-baseline.json:25`; `docs/tts-natural-v8-baseline.json:25`; `docs/tts-natural-v9-baseline.json:25`; `docs/tts-scene04-final-baseline-v6.json:25`; `docs/tts-scene04-revised-baseline-v5.json:25`; `docs/tts-v3-baseline.json:25`; `docs/tts-v4-baseline.json:25`
- SHA256: `a99cb637a631ac6ef62f4bfe8549c0ca299d83d76c9f2582891a165c3d61c58d`

### D-13 `public/assets/images/scene04-grid-qa-v1.png` — D1

- 크기: 130,864 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:142`; `docs/scene04-grid-qa-v1.md:49`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:67`; `docs/cover-v2-input-lock.json:69`; `docs/cover-v3-input-lock.json:71`; `docs/preview-caption-input-lock-v1.json:60`
- SHA256: `11208087df25a2c7e0dbd87bf8b160b07d330619b3fc30e075239680b2f9722c`

### D-14 `public/assets/images/scene04-info-check-01.png` — D3

- 크기: 1,465,350 bytes
- 생성 목적: Scene4 초기 정보화면 개별 체크 정지 이미지
- 최종 승인본과 관계: 승인 최종 grid와 다름; 해시 목록 외 개별 사용/추출시점 근거 부족
- 복구·재현: 정상 QA 몽타주와 동일 내용인지 별도 픽셀/프레임 대조 전 보존
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:75`; `docs/cover-v2-input-lock.json:77`; `docs/cover-v3-input-lock.json:79`; `docs/preview-caption-input-lock-v1.json:67`; `docs/preview-v1-input-lock.json:327`; `docs/preview-v2-input-lock.json:55`; `docs/preview-v3-input-lock.json:60`; `docs/scene04-style-baseline-v2.json:35`; `docs/tts-breath-mechanical-v3.json:659`; `docs/tts-final-baseline-v2.json:43`; `docs/tts-natural-v7-baseline.json:44`; `docs/tts-natural-v8-baseline.json:44`; `docs/tts-natural-v9-baseline.json:44`; `docs/tts-scene04-final-baseline-v6.json:44`; `docs/tts-scene04-revised-baseline-v5.json:44`; `docs/tts-v3-baseline.json:43`; `docs/tts-v4-baseline.json:44`
- SHA256: `99adead757266aab700f18f86c1822409431a752eb74db46de6d0293ce55f699`

### D-15 `public/assets/images/scene04-info-check-02.png` — D3

- 크기: 119,701 bytes
- 생성 목적: Scene4 초기 정보화면 개별 체크 정지 이미지
- 최종 승인본과 관계: 승인 최종 grid와 다름; 해시 목록 외 개별 사용/추출시점 근거 부족
- 복구·재현: 정상 QA 몽타주와 동일 내용인지 별도 픽셀/프레임 대조 전 보존
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:71`; `docs/cover-v2-input-lock.json:73`; `docs/cover-v3-input-lock.json:75`; `docs/preview-caption-input-lock-v1.json:63`; `docs/preview-v1-input-lock.json:323`; `docs/preview-v2-input-lock.json:51`; `docs/preview-v3-input-lock.json:56`; `docs/scene04-style-baseline-v2.json:31`; `docs/tts-breath-mechanical-v3.json:655`; `docs/tts-final-baseline-v2.json:39`; `docs/tts-natural-v7-baseline.json:40`; `docs/tts-natural-v8-baseline.json:40`; `docs/tts-natural-v9-baseline.json:40`; `docs/tts-scene04-final-baseline-v6.json:40`; `docs/tts-scene04-revised-baseline-v5.json:40`; `docs/tts-v3-baseline.json:39`; `docs/tts-v4-baseline.json:40`
- SHA256: `00c5a46d228a539a3989b5ee6171eb576b2f7fa0cdc1290378b7737ca9b1224c`

### D-16 `public/assets/images/scene04-info-check-03.png` — D1

- 크기: 200,107 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-info-qa-v1.md:62`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:66`; `docs/cover-v2-input-lock.json:68`; `docs/cover-v3-input-lock.json:70`; `docs/preview-caption-input-lock-v1.json:59`; `docs/preview-v1-input-lock.json:320`; `docs/preview-v2-input-lock.json:48`; `docs/preview-v3-input-lock.json:53`; `docs/scene04-style-baseline-v2.json:29`; `docs/tts-breath-mechanical-v3.json:653`; `docs/tts-final-baseline-v2.json:37`; `docs/tts-natural-v7-baseline.json:37`; `docs/tts-natural-v8-baseline.json:37`; `docs/tts-natural-v9-baseline.json:37`; `docs/tts-scene04-final-baseline-v6.json:37`; `docs/tts-scene04-revised-baseline-v5.json:37`; `docs/tts-v3-baseline.json:37`; `docs/tts-v4-baseline.json:37`
- SHA256: `9193bf0898e9b0c796bfe9eb257f543f632d7c30ffe8ec4ec638412ed3b96b03`

### D-17 `public/assets/images/scene04-info-check-04.png` — D3

- 크기: 1,462,902 bytes
- 생성 목적: Scene4 초기 정보화면 개별 체크 정지 이미지
- 최종 승인본과 관계: 승인 최종 grid와 다름; 해시 목록 외 개별 사용/추출시점 근거 부족
- 복구·재현: 정상 QA 몽타주와 동일 내용인지 별도 픽셀/프레임 대조 전 보존
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:64`; `docs/cover-v2-input-lock.json:66`; `docs/cover-v3-input-lock.json:68`; `docs/preview-caption-input-lock-v1.json:57`; `docs/preview-v1-input-lock.json:318`; `docs/preview-v2-input-lock.json:46`; `docs/preview-v3-input-lock.json:51`; `docs/scene04-style-baseline-v2.json:27`; `docs/tts-breath-mechanical-v3.json:651`; `docs/tts-final-baseline-v2.json:35`; `docs/tts-natural-v7-baseline.json:35`; `docs/tts-natural-v8-baseline.json:35`; `docs/tts-natural-v9-baseline.json:35`; `docs/tts-scene04-final-baseline-v6.json:35`; `docs/tts-scene04-revised-baseline-v5.json:35`; `docs/tts-v3-baseline.json:35`; `docs/tts-v4-baseline.json:35`
- SHA256: `7b7577cfb066c9204401bba84b8acc67d35653ffd475157a4347116d44c874f3`

### D-18 `public/assets/images/scene04-info-final-backset-qa-v1.png` — D1

- 크기: 395,211 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-info-qa-v1.md:10,62`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:54`; `docs/cover-v2-input-lock.json:56`; `docs/cover-v3-input-lock.json:58`; `docs/preview-caption-input-lock-v1.json:48`; `docs/preview-v1-input-lock.json:311`; `docs/preview-v2-input-lock.json:38`; `docs/preview-v3-input-lock.json:42`; `docs/scene04-style-baseline-v2.json:21`; `docs/tts-breath-mechanical-v3.json:644`; `docs/tts-final-baseline-v2.json:28`; `docs/tts-natural-v7-baseline.json:28`; `docs/tts-natural-v8-baseline.json:28`; `docs/tts-natural-v9-baseline.json:28`; `docs/tts-scene04-final-baseline-v6.json:28`; `docs/tts-scene04-revised-baseline-v5.json:28`; `docs/tts-v3-baseline.json:28`; `docs/tts-v4-baseline.json:28`
- SHA256: `c36fce3f20ddd87ce4a6c8c50a8282121b5263627c2ac40c28d3383ef05e9356`

### D-19 `public/assets/images/scene04-info-mobile-qa-v1.png` — D1

- 크기: 390,352 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-info-qa-v1.md:9`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:56`; `docs/cover-v2-input-lock.json:58`; `docs/cover-v3-input-lock.json:60`; `docs/preview-caption-input-lock-v1.json:50`; `docs/preview-v1-input-lock.json:313`; `docs/preview-v2-input-lock.json:40`; `docs/preview-v3-input-lock.json:44`; `docs/scene04-style-baseline-v2.json:22`; `docs/tts-breath-mechanical-v3.json:646`; `docs/tts-final-baseline-v2.json:30`; `docs/tts-natural-v7-baseline.json:30`; `docs/tts-natural-v8-baseline.json:30`; `docs/tts-natural-v9-baseline.json:30`; `docs/tts-scene04-final-baseline-v6.json:30`; `docs/tts-scene04-revised-baseline-v5.json:30`; `docs/tts-v3-baseline.json:30`; `docs/tts-v4-baseline.json:30`
- SHA256: `033acc2422774ce014ae67eb8e736a80bd67e4607062f7a73fe667ea133138df`

### D-20 `public/assets/images/scene04-info-qa-v1.png` — D1

- 크기: 786,597 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-info-qa-v1.md:8,62`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:50`; `docs/cover-v2-input-lock.json:52`; `docs/cover-v3-input-lock.json:54`; `docs/preview-caption-input-lock-v1.json:44`; `docs/preview-v1-input-lock.json:307`; `docs/preview-v2-input-lock.json:34`; `docs/preview-v3-input-lock.json:38`; `docs/scene04-style-baseline-v2.json:17`; `docs/tts-breath-mechanical-v3.json:640`; `docs/tts-final-baseline-v2.json:24`; `docs/tts-natural-v7-baseline.json:24`; `docs/tts-natural-v8-baseline.json:24`; `docs/tts-natural-v9-baseline.json:24`; `docs/tts-scene04-final-baseline-v6.json:24`; `docs/tts-scene04-revised-baseline-v5.json:24`; `docs/tts-v3-baseline.json:24`; `docs/tts-v4-baseline.json:24`
- SHA256: `a2e66034b067c984c6cf1b2a88b40a6199fb2453ced6b5ca74a1e406b5b5d9cd`

### D-21 `public/assets/images/scene04-subtitle-reference-comparison-v2.png` — D1

- 크기: 181,683 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-subtitle-style-qa-v2.md:60`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:55`; `docs/cover-v2-input-lock.json:57`; `docs/cover-v3-input-lock.json:59`; `docs/preview-caption-input-lock-v1.json:49`; `docs/preview-v1-input-lock.json:312`; `docs/preview-v2-input-lock.json:39`; `docs/preview-v3-input-lock.json:43`; `docs/tts-breath-mechanical-v3.json:645`; `docs/tts-final-baseline-v2.json:29`; `docs/tts-natural-v7-baseline.json:29`; `docs/tts-natural-v8-baseline.json:29`; `docs/tts-natural-v9-baseline.json:29`; `docs/tts-scene04-final-baseline-v6.json:29`; `docs/tts-scene04-revised-baseline-v5.json:29`; `docs/tts-v3-baseline.json:29`; `docs/tts-v4-baseline.json:29`
- SHA256: `834835ba70a1c2266eb15ef53079fb072ae58a0dd89f383d2a6c866d8c66f94c`

### D-22 `public/assets/images/scene04-subtitle-style-qa-v2.png` — D1

- 크기: 847,927 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-subtitle-style-qa-v2.md:59`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:44`; `docs/cover-v2-input-lock.json:46`; `docs/cover-v3-input-lock.json:48`; `docs/preview-caption-input-lock-v1.json:39`; `docs/preview-v1-input-lock.json:303`; `docs/preview-v2-input-lock.json:29`; `docs/preview-v3-input-lock.json:33`; `docs/tts-breath-mechanical-v3.json:636`; `docs/tts-final-baseline-v2.json:20`; `docs/tts-natural-v7-baseline.json:20`; `docs/tts-natural-v8-baseline.json:20`; `docs/tts-natural-v9-baseline.json:20`; `docs/tts-scene04-final-baseline-v6.json:20`; `docs/tts-scene04-revised-baseline-v5.json:20`; `docs/tts-v3-baseline.json:20`; `docs/tts-v4-baseline.json:20`
- SHA256: `880e871885ddec4f8a65fed9fe83541c5f80cdc41de9673edd155880997fb4bd`

### D-23 `public/assets/images/tts-breath-source-waveform-v3.png` — D1

- 크기: 18,230 bytes
- 생성 목적: Scene 또는 음성 QA 시각 증빙
- 최종 승인본과 관계: 승인 전후 비교/위치/기술/스타일/파형 판정 근거
- 복구·재현: 보존: 문서의 실제 시각 판단을 다시 확인하는 자료
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/tts-v3-breath-correction-qa.md:64`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:68`; `docs/cover-v2-input-lock.json:70`; `docs/cover-v3-input-lock.json:72`; `docs/preview-caption-input-lock-v1.json:61`; `docs/preview-v1-input-lock.json:321`; `docs/preview-v2-input-lock.json:49`; `docs/preview-v3-input-lock.json:54`; `docs/tts-natural-v7-baseline.json:38`; `docs/tts-natural-v8-baseline.json:38`; `docs/tts-natural-v9-baseline.json:38`; `docs/tts-scene04-final-baseline-v6.json:38`; `docs/tts-scene04-revised-baseline-v5.json:38`; `docs/tts-v4-baseline.json:38`
- SHA256: `d142157b29d8e10a681d9cf58c542b639bd50ce5ffcc4cc61d72dbaeb02c660a`

### D-24 `public/assets/video/doormaster-handle-replacement-preview-v2.mp4` — D1

- 크기: 11,628,515 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 최종 영상의 화면 발전/타이밍 비교 이력
- 복구·재현: 보존: 이전 승인·수정 비교 및 재현 자료; 출력경로 참조는 입력참조와 구분
- 현재 코드 리터럴 참조: `scripts/assemble-preview-v2.py:12`
- 문서 설명 참조: `docs/26.10.22수정.md:134`; `docs/preview-v2-qa.md:39`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:24`; `docs/cover-v2-input-lock.json:26`; `docs/cover-v3-input-lock.json:28`; `docs/preview-caption-input-lock-v1.json:22`; `docs/preview-v2-mechanical-qa.json:131`; `docs/preview-v3-input-lock.json:19`
- SHA256: `9d532a12f333ee7b7a8a7365a2d56634711000a179059a67eaf8bcf2d46b150c`

### D-25 `public/assets/video/scene04-info-preview-v1.mp4` — D1

- 크기: 1,242,972 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 최종 영상의 화면 발전/타이밍 비교 이력
- 복구·재현: 보존: 이전 승인·수정 비교 및 재현 자료; 출력경로 참조는 입력참조와 구분
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-info-qa-v1.md:7`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:28`; `docs/cover-v2-input-lock.json:30`; `docs/cover-v3-input-lock.json:32`; `docs/preview-caption-input-lock-v1.json:26`; `docs/preview-v1-input-lock.json:298`; `docs/preview-v2-input-lock.json:18`; `docs/preview-v3-input-lock.json:21`; `docs/scene04-style-baseline-v2.json:10`; `docs/tts-breath-mechanical-v3.json:631`; `docs/tts-final-baseline-v2.json:15`; `docs/tts-natural-v7-baseline.json:15`; `docs/tts-natural-v8-baseline.json:15`; `docs/tts-natural-v9-baseline.json:15`; `docs/tts-scene04-final-baseline-v6.json:15`; `docs/tts-scene04-revised-baseline-v5.json:15`; `docs/tts-v3-baseline.json:15`; `docs/tts-v4-baseline.json:15`
- SHA256: `5fc45903b3ac6984e537b0b13b539082b8b9e495c8d0a1ce7d9c7afa4c7ab947`

### D-26 `public/assets/video/scene04-info-preview-v2.mp4` — D1

- 크기: 1,309,088 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 최종 영상의 화면 발전/타이밍 비교 이력
- 복구·재현: 보존: 이전 승인·수정 비교 및 재현 자료; 출력경로 참조는 입력참조와 구분
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/scene04-subtitle-style-qa-v2.md:58`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:30`; `docs/cover-v2-input-lock.json:32`; `docs/cover-v3-input-lock.json:34`; `docs/preview-caption-input-lock-v1.json:28`; `docs/preview-v1-input-lock.json:300`; `docs/preview-v2-input-lock.json:20`; `docs/preview-v3-input-lock.json:23`; `docs/scene04-style-mechanical-qa-v2.json:77`; `docs/tts-breath-mechanical-v3.json:633`; `docs/tts-final-baseline-v2.json:17`; `docs/tts-natural-v7-baseline.json:17`; `docs/tts-natural-v8-baseline.json:17`; `docs/tts-natural-v9-baseline.json:17`; `docs/tts-scene04-final-baseline-v6.json:17`; `docs/tts-scene04-revised-baseline-v5.json:17`; `docs/tts-v3-baseline.json:17`; `docs/tts-v4-baseline.json:17`
- SHA256: `4a21c94a01093e0363a83d4d831fc6ed4a8532bbbcdd841dd72bbc58490e7c2d`

### D-27 `public/assets/video/scene04-info-preview-v3.mp4` — D1

- 크기: 846,651 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 최종 영상의 화면 발전/타이밍 비교 이력
- 복구·재현: 보존: assemble-preview-v2.py가 생성 후 concat 입력으로 사용
- 현재 코드 리터럴 참조: `scripts/assemble-preview-v2.py:5`
- 문서 설명 참조: `docs/26.10.22수정.md:133`; `docs/preview-v2-qa.md:38`
- JSON/해시 참조: `docs/cover-v1-input-lock.json:31`; `docs/cover-v2-input-lock.json:33`; `docs/cover-v3-input-lock.json:35`; `docs/preview-caption-input-lock-v1.json:29`; `docs/preview-v3-input-lock.json:24`
- SHA256: `015cd62f70d7dee53e7533a7550d82c249754098a6372006e1549de9bfe3a50b`

### D-28 `public/assets/video/scene04-preview-v1.mp4` — D1

- 크기: 1,200,766 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 최종 영상의 화면 발전/타이밍 비교 이력
- 복구·재현: 보존: 이전 승인·수정 비교 및 재현 자료; 출력경로 참조는 입력참조와 구분
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:33`; `docs/cover-v2-input-lock.json:35`; `docs/cover-v3-input-lock.json:37`; `docs/preview-caption-input-lock-v1.json:31`; `docs/preview-v1-timing.json:507,632`; `docs/preview-v2-input-lock.json:22`; `docs/preview-v3-input-lock.json:26`
- SHA256: `ace263cada28f08576edbfabf032baf2178ec954e1e143fc4bb947e8e9338da8`

### D-29 `public/assets/video/scene04-simple-visual-v3.mp4` — D1

- 크기: 694,853 bytes
- 생성 목적: 과거 Scene/전체 Preview 또는 무음 렌더 중간본
- 최종 승인본과 관계: 최종 영상의 화면 발전/타이밍 비교 이력
- 복구·재현: 필수 보존: assemble-preview-v2.py의 영상 입력
- 현재 코드 리터럴 참조: `scripts/assemble-preview-v2.py:6`
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v1-input-lock.json:26`; `docs/cover-v2-input-lock.json:28`; `docs/cover-v3-input-lock.json:30`; `docs/preview-caption-input-lock-v1.json:24`; `docs/preview-v3-input-lock.json:20`
- SHA256: `538c8ccdcc5ba1210c53644ecb9db4d0a790c0e7be1bc5243d00c6d3f80e5093`

### D-30 `public/covers/qa/cover-v1-3x4.png` — D1

- 크기: 717,610 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v2-input-lock.json:115`; `docs/cover-v3-input-lock.json:117`
- SHA256: `c7e3fac678334105fa546885e2bac523b070629d58fad0674110495f7981e017`

### D-31 `public/covers/qa/cover-v1-4x5.png` — D1

- 크기: 682,657 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v2-input-lock.json:117`; `docs/cover-v3-input-lock.json:122`
- SHA256: `ae576e3935fa33e21c5a571c7571611701eed6c1d3bb172bc8365e6b06e73dca`

### D-32 `public/covers/qa/cover-v1-mobile-comparison.png` — D1

- 크기: 198,355 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: `docs/cover-v2-input-lock.json:113`; `docs/cover-v3-input-lock.json:115`
- SHA256: `c219a5ba8e0e966436c7d1349e0ee4b9a5802452f711793309f5a1d70fce08b6`

### D-33 `public/covers/qa/cover-v1-reference-same-scale.png` — D1

- 크기: 942,037 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v1-qa.md:32`
- JSON/해시 참조: `docs/cover-v2-input-lock.json:114`; `docs/cover-v3-input-lock.json:116`
- SHA256: `9388b68007058027b62c6ae1cd5f080e93190b1058e62f86addc1cb8bfb372a6`

### D-34 `public/covers/qa/cover-v1-v2-comparison.png` — D1

- 크기: 378,803 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v2-qa.md:26`
- JSON/해시 참조: `docs/cover-v3-input-lock.json:118`
- SHA256: `512492c1fb9e102c5b9c4eb979f99756f75154670c6b366b936ff6cd7e80706e`

### D-35 `public/covers/qa/cover-v2-3x4.png` — D1

- 크기: 716,602 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v2-qa.md:24`
- JSON/해시 참조: `docs/cover-v3-input-lock.json:121`
- SHA256: `021bc4f6d987f6069d42990be7376bdcd2dd37916df91e8383f68257d2f30830`

### D-36 `public/covers/qa/cover-v2-4x5.png` — D1

- 크기: 681,627 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v2-qa.md:25`
- JSON/해시 참조: `docs/cover-v3-input-lock.json:120`
- SHA256: `5f0d44cf63ccd2c0ee967da969636c4e633f27407a944684d6dd7ba784d76a2f`

### D-37 `public/covers/qa/cover-v2-v3-comparison.png` — D1

- 크기: 379,324 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v3-qa.md:23`
- JSON/해시 참조: 검색 범위 내 없음
- SHA256: `9ecfe92765f07ac799df0d4a92b9cd82e990e791fba7f1d4c4006bb821ab7a34`

### D-38 `public/covers/qa/cover-v3-3x4.png` — D1

- 크기: 716,519 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v3-qa.md:21`
- JSON/해시 참조: 검색 범위 내 없음
- SHA256: `0e6dc844f2eaa8db3a47ea983d2ca896a8249f40e320c7f382b85f0b01e025f8`

### D-39 `public/covers/qa/cover-v3-4x5.png` — D1

- 크기: 681,514 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/cover-v3-qa.md:22`
- JSON/해시 참조: 검색 범위 내 없음
- SHA256: `472a016a386e867411522fdcc613bd0b25d6b262aae0945a08bb6a4a294974d6`

### D-40 `public/covers/qa/cover-v3-mobile.png` — D1

- 크기: 197,468 bytes
- 생성 목적: Cover 원본/크롭/수정 비교 QA
- 최종 승인본과 관계: Cover v3의 수정 이력 또는 최종 크롭/브랜드 검증 증빙
- 복구·재현: 보존: 승인 경위·원형 비교·크롭 검증 복원
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: 검색 범위 내 없음
- JSON/해시 참조: 검색 범위 내 없음
- SHA256: `090d35bd8175a8e2474fd35131df61a3dc41e9bbe60e7085f6743b4b14763c4d`

### D-41 `node_modules/` — D1

- 크기: 372,088,456 bytes (기존 측정값)
- 생성 목적: 현재 로컬 Remotion/Node 실행환경
- 최종 승인본과 관계: 현재 승인본 재현을 위한 실행 의존성
- 복구·재현: 사용자 명시 보존. Git 제외 유지; 재귀 재조사/단일SHA 계산 안 함, 용량은 기존 측정값
- 현재 코드 리터럴 참조: 검색 범위 내 없음
- 문서 설명 참조: `docs/26.10.22수정.md:10,12,171`; `docs/ending-README.md:40`
- JSON/해시 참조: 검색 범위 내 없음
- SHA256: 디렉터리라 단일파일해시 미적용; 이동대상 아님

## 필수 보존 검사

A/B161파일 실재확인,이전승인잠금에포함된 자산은SHA대조. Preview v4,Cover v3,SNS v3,최종Scene이미지/영상,TTS,엔딩원본/음원/소스/폰트/로고,Remotion소스/설정/package/lockfile,공통간판v2,제품공식자료와출처,날짜형작업기록은 모두 후보에서제외. 과거Preview v1/v3와Scene2/3/5 원래영상도현재조립입력이라유지. 필수상세목록은기존cleanup-preflight-v1.md의A/B를참조.

## 승인 시에만 이동할 정확한 목록

작업별 macOS휴지통 폴더 아래 원래상대구조를유지한다. 같은이름파일3개의충돌을막는다. 현재는폴더도생성하지않았다.

- 원본: `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/.DS_Store`
  - 제안 도착: `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/.DS_Store`
  - 크기 8,196bytes / SHA256 `21c30e30a49b8d0cd53d9a3c983e6a9ff61287f2e4a87a4e467f18d438a45140`
- 원본: `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/.DS_Store`
  - 제안 도착: `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/public/.DS_Store`
  - 크기 8,196bytes / SHA256 `c885c033318d50dbf1ab9ed2fc1dfda762b38aa7e297a49f1dca9505dfef25e6`
- 원본: `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/assets/.DS_Store`
  - 제안 도착: `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/public/assets/.DS_Store`
  - 크기 6,148bytes / SHA256 `f20ca08810916d72bb0d71dbfaf8838ce94feb6adb6e2d9093893f75c97d0cf1`
- 원본: `/Users/janghokim/Documents/short-movie-agents/projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v1-reference-comparison.png`
  - 제안 도착: `/Users/janghokim/.Trash/doormaster-handle-replacement-v1-cleanup-review-v1/public/covers/qa/cover-v1-reference-comparison.png`
  - 크기 788,296bytes / SHA256 `ac8c3b8ca038c30970601f640ae5780e608a1a10a43f95a63f7996909813b7e8`

## 위험·복원 절차
안전후보4개는최종렌더입력이아님. .DS_Store는Finder보기설정이사라지거나자동재생성될수있고,오류비교이미지는그오류의실물증빙이프로젝트밖으로이동한다. 정상비교이미지·원본Cover·오류설명은남는다. 이4개만이동하면최종영상/Cover재현입력은보존된다. 과거TTS/Part·실패Before·과거Cover는원음/AI원본/수정이력의동일복구가중요하므로미승인이라는이유로정리하지않는다.

사용자승인후별도실행에서 원본SHA/크기 재확인→휴지통권한·도착경로충돌검사→상대구조유지이동→도착SHA검사 순서. 충돌시덮어쓰기금지. 복원은원본경로가비어있는지확인한뒤 SHA대조후되돌린다. 휴지통을비우면복원할수없으므로별도승인없이는비우지않는다.

D3의check-01/02/04는최종QA와의중복이확정되지않아그대로보존. 필요하면별도비교검증후새판정. 자동이동없음.
