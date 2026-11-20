# 신규 TTS v2 화자 비교 및 경로 이동 QA

프로젝트 전용 오디오 저장소 public/assets/audio 사용. 기존 구버전 Scene 및 엔딩 오디오는 이미 audio에 있어 이동하지 않음. 이동 대상은 ffprobe에서 단일 MP3 음성 스트림으로 확인. 파일명 충돌 없음.

|이전 경로|현재 경로|이동 전후 동일 SHA256|
|---|---|---|
|public/assets/video/new-five-scenes-tts-listening-v1.mp3|public/assets/audio/new-five-scenes-tts-listening-v1.mp3|125aaf9ae472dc1e320d0630523dcce5c8c3ee567ca3cf944629f8b124684947|
|public/assets/video/new-scene01-tts-v1.mp3|public/assets/audio/new-scene01-tts-v1.mp3|2898054352bafa74491c5750c53be60fa0c586e560c4d58de4832e2e3c559b3d|
|public/assets/video/new-scene02-tts-v1.mp3|public/assets/audio/new-scene02-tts-v1.mp3|912c9f0b04ae0a68854e6218fdeb893d3a3a655d593e682b0887a925ae6028e0|
|public/assets/video/new-scene03-tts-v1.mp3|public/assets/audio/new-scene03-tts-v1.mp3|dc3da9fc0e69eda5808b07b82b2d16fee8d839db8f43305de986a269cb274d14|
|public/assets/video/new-scene04-tts-v1.mp3|public/assets/audio/new-scene04-tts-v1.mp3|d914c52f22c8e21dbccf155d4ecd8580f66cba6d3b13872f373ec8e5c6177519|
|public/assets/video/new-scene05-tts-v1.mp3|public/assets/audio/new-scene05-tts-v1.mp3|a92d212ba89017be36ba01188e8eedab37614027ae43bf6f93ad5f5f2f13de0d|

프로젝트 내부 src/scripts 및 설정 등에서 이동 대상 파일명과 이전 video MP3 경로를 조사. 활성 참조 없음, 수정 파일 0개. 새 경로 6개 존재/해시 확인, video 잔여 MP3 없음. 과거 QA 경로는 당시 기록으로 유지. 공통 지침 수정 없음.

## 합성
Google Cloud Text-to-Speech voices.list(languageCode=ko-KR) 실시간 조회. 기존 Alnilam과 다른 Charon(MALE) 및 Sulafat(FEMALE) 등록 확인. 동일 Chirp3-HD 계열에서 남성 대체 음색과 여성 대안의 차이를 비교하기 위해 선정. 설명조·질문 억양의 우열은 사전 가정하지 않음. 기존 프로젝트 합성 스크립트/인증 사용. 두 후보 각 1회, speakingRate=1.00, pitch/volumeGainDb 미지정, MP3, SSML 없음. 입력은 v1과 동일, 쉼표와 줄바꿈 유지:

댐퍼 하나 교체하려다가,
천장 마감재까지 다시 뜯었다고요?

## 디코딩 및 측정
파일 길이 ffprobe, 쉼은 FFmpeg silencedetect -40dB/최소 80ms, 음량과 true peak는 EBU R128. 파일별 전 구간 디코딩 확인. 내부 저레벨 구간은 단어 정렬 결과가 아님.

|화자|파일(바이트)|길이 초|앞/뒤 초|내부 저레벨 구간 초|LUFS-I|dBTP|
|---|---|---:|---|---|---:|---:|
|Alnilam|new-scene01-tts-v1.mp3 (17184)|4.296|0.096 / 0.132|1.395–2.164 (0.769), 3.474–3.581 (0.107), 3.756–3.858 (0.103)|-19.0|-1.4|
|Charon|new-scene01-tts-v2-candidate-a.mp3 (20832)|5.208|0.304 / 0.000|0.391–0.829 (0.438), 2.194–3.049 (0.855)|-19.1|-1.9|
|Sulafat|new-scene01-tts-v2-candidate-b.mp3 (18144)|4.536|0.096 / 0.248|0.198–0.355 (0.158), 1.724–2.269 (0.545), 3.826–3.913 (0.087)|-18.2|-0.3|

청취 QA 미완료. 발음 정확성(댐퍼/천장 마감재), 어절 연결, 질문 끝 뜯었다고요?, 체감 속도·음색·호흡의 자연스러움은 파형만으로 판정하지 않음. 검출되지 않은 짧은 쉼은 없다는 뜻이 아님. 사용자 청취 선택 전 Scene 2~5 재합성 보류.
