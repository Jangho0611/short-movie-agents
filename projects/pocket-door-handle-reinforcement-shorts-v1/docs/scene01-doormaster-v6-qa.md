# Scene 1 자막 Preview v6 QA

2026-11-05 / 종합 WARN, 사용자 승인 대기.

## 결과
1080×1920,30fps,H.264 High/yuv420p(level4.1),AAC-LC,4.900초/147프레임. 영상트랙 timescale90000.
- public/assets/video/scene01-doormaster-v6.mp4
- public/assets/images/scene01-doormaster-v6-qa.png
- public/assets/images/scene01-subtitle-compare-v6.png (좌v5/우v6,첫구간)
- public/assets/images/scene01-doormaster-v6-mobile-qa.png (각360×640,첫/둘째 자막)
- src/scene01-subtitle-v6.tsx
- scripts/render-scene01-subtitle-v6.cjs

## 자막 시간
|프레임(끝제외)|시간|문구|
|---|---|---|
|0–80|0–2.666667초|오목이손잡이 / 설치할 때|
|80–147|2.666667–4.900초|구멍만 맞추면 / 끝일까요?|
질문 첫프레임80부터 ‘구멍만’ 기존노란색과외곽선 적용. 첫구간은블랙. 두자막 중첩없음,새등장모션/장식없음.

## 타이밍 근거와 제한
승인 scene01-tts-v10.wav 길이4.728792초. 기존 docs/scene01-tts-v10-qa.md 및 scripts/scene01-tts-v10-edit.json 확인. PartA/B 편집기록은있지만 단어별청취/강제정렬자료가아니다. 기존무음검출을 ‘구멍만’의 정확한 발화경계로 확정하지 않았다. 사용자지시에따라80프레임 잠정유지. 의미상첫문장/질문분리PASS,단어단위실제동기미확인.

## 디자인·모바일
기존font Apple SD Gothic Neo,Noto Sans KR,sans-serif,weight900,색#303431/#FFE600,외곽#343735 유지. panel #F4F1E9 top250,height250,SVG viewBox1080×298,폰트100/107,baseline124/244 유지. 기존질문 강조는 노란글자+외곽선 구현이므로 새브러시장식을 만들지않음.
실제출력 어두운글자 검출:첫구간x325–749,y285–461;질문x313–761,y285–461. 강조색·외곽선 포함 보수검사영역x300–780,y275–480. 그림자/이동모션없음.
직접360×640결과이미지검토:두문구읽힘,최대2줄,제품과겹침없음. 실기기 DynamicIsland/노치/Shorts/Reels/Clip QA미확인. 임의공통안전좌표로실제PASS선언하지않음.

## 보존 검증
v5 전체디코딩YUV프레임을기본으로하고0~79프레임의y250~499자막패널만Remotion출력픽셀로교체.80~146프레임입력전체는v5그대로. 자막밖픽셀은인코딩전모두동일. 모바일호환CRF18 재인코딩후자막외YUV 평균절대차이0.029754/255,개별프레임평균최대0.060500/255. 압축오차이며내용변경아님;최종픽셀완전동일주장안함.
전환0/18/36/60/80프레임유지. 엣지풀v5 X-48,Y-50,1.12배의렌더된영상그대로재사용. 이미지재배치/재생성없음.
AAC stream copy,추출ADTS 바이트동일. 승인WAV변경없음.효과음없음.
작업전후기존67파일(이미지/영상/TTS/Cover)SHA256모두동일. Scene2~5/전체통합Preview/공통엔딩/가이드/Git변경없음.

## 재생·기술 QA
PASS:전체H.264/AAC디코딩,147프레임,4.9초,타임라인.
ffplay360×640 전체1배속재생실행후정상종료. 직접연속시청·청취는확인불가로TTS동기/청감/전환리듬PASS아님.
사용자승인필요:80프레임의자막전환이실제질문발화와맞는지,모바일실기기가독성. 이번에는Scene1단독만제작,전체재조립없음.
