# DoorMaster 2편 Preview v3 — 2026-10-15

사용자 시각·청취 승인 대기. Scene4/5는 Preview v2 도식 재사용이며 최종 승인 아님.

|Scene|TTS(s)|Video(s)|Audio|
|---|---:|---:|---|
|1|3.308542|3.333333|scene01-tts-v8.mp3|
|2|4.150750|4.166667|scene02-tts-v10-response.mp3|
|3|4.180125|4.200000|scene03-tts-v8.mp3|
|4|3.791083|3.800000|scene04-tts-v8.mp3|
|5|3.746042|3.766667|scene05-tts-v11.mp3|
|6|3.911083|3.933333|scene06-tts-v8.mp3|

본편696프레임/23.2초 + 공통엔딩170프레임/5.666667초 = 866프레임/28.866667초. 1080×1920/30fps H264/AAC.

- TTS v11 승인 구성 음원을 개별 디코드하여 변경 없이 Scene 시작에 배치. 속도/피치/대사 변경 및 생성 없음. 30fps 반올림 여유 합계 약0.112초 외 추가 무음 없음.
- Scene1 기존 문짝 영역 wipe 유지. Scene2 승인 v3(B106.5%) 이미지 사용. Scene3 승인 v3 영상 스트림 그대로 연결. Scene4/5 기존 geometry/easing 유지하고 강조 타이밍 조정. Scene6 기존 확인 목록→승인After 전환의 시작만 앞당겨 단축된 음성 길이에 맞춤.
- Scene3은 그대로 유지 지시 우선: 기존 내경/W/H/T 안내 자막 보존, 원문 전체 자막을 덮어씌우지 않음. 나머지 Scene은 v11 원문을 2줄 대사 헤더로 적용. Scene5 마지막 구절은2.6초부터 교체 표시(기존 ASR 근사).
- Canonical 엔딩 승인 MP4 자체를 영상 stream copy로 연결. 엔딩 소스3개 해시차이는 기존 staticFile assets/ 접두어만이며 정규화 비교 동일. 자산8개는 CanonicalSHA256일치.
- Scene3 126프레임과 엔딩170프레임은 최종Preview 디코드 프레임 해시가 원본과 동일.
- 전체 영상·오디오 디코딩 오류 없음. 기존 자산·소스 해시 보존. 자연스러움 최종 판단은 사용자 청취·시각 확인 필요.

결과: public/assets/video/door-panel-replacement-preview-v3.mp4
QA: docs/preview-v3-mechanical-qa.json, docs/preview-v3-ending-verification.json, public/assets/images/preview-v3-contact-sheet.png

AI/Flow/TTS생성·Cover·SNS·Final·Git·삭제·이동 없음.
