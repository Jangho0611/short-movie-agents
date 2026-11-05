# 포켓도어 문도사 전체 Preview v1 QA

## 결과
영상: public/assets/video/pocket-door-doormaster-full-preview-v1.mp4
Contact Sheet: public/assets/images/pocket-door-doormaster-full-qa-v1.png
재현 스크립트: scripts/assemble-full-preview-v1.py
1080×1920,30fps,H.264,AAC48kHz stereo,37.166667초,1115프레임.
Contact Sheet는Scene1~5,엔딩 순서(3열2행),각360×640.

| 구간 | 시작 | 종료 | 프레임 |
|---|---:|---:|---:|
| Scene1 v2 |0.000|4.900|147|
| Scene2 v3 |4.900|10.400|165|
| Scene3 v2 |10.400|17.500|213|
| Scene4 v5 |17.500|26.000|255|
| Scene5 v1 |26.000|31.500|165|
| 승인 엔딩 |31.500|37.166667|170|

## 승인 엔딩 세트
공용 assets/daesan-ending/docs/asset-sha256.json의17개파일 모두실제존재/해시일치. 컴포넌트DaesanEnding.tsx와직접import하는overlay/fonts/tokens/brief,index,배경원본·hold영상,로고,폰트3개,TTS,CanonicalPreview,설정세트확인.
승인Preview SHA256:2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5.
승인엔딩TTS SHA256:bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181.
Canonical영상170프레임그대로사용. 가이드의TTS4.854초기준유지,엔딩영상에포함된오디오사용. 새로운엔딩렌더/자산변경없음.

## 영상 통합 QA
영상은ffmpeg concat+stream copy. 원본Scene 재렌더/재인코딩없음. 명확한컷만연결. 전체디코딩프레임1115개를원본각Scene+엔딩의프레임과framemd5비교:모두픽셀동일(yuv420p). 경계의마지막/첫프레임포함 누락·중복·화면변경없음.
처음압축패킷해시비교는컨테이너/H264헤더변환때문에일치하지않아디코딩프레임전체비교로검증함. 기록 scripts/full-preview-v1-frame-verification.json.
전체H.264/AAC 정상디코딩,총길이/프레임수PASS.

## 오디오
Scene MP4 오디오와승인WAV를같은시점24kHz mono로비교:상관도Scene1 .999238,Scene2 .999984,Scene3 .999948,Scene4 .999982,Scene5 .999919. 승인음원과높은신호대응확인(음성인식/청취대조아님).
기존MP4오디오를사용,승인WAV를재합성하지않음. 본문24kHz mono/엔딩48kHz stereo라통합오디오만48kHz stereo로호환화하고AAC192k설정으로1회인코딩. 속도·피치·게인변경없음,음악/효과추가없음. mono→stereo변환으로채널별표현수준은달라질수있으나전체음성내용보존. 원본WAV변경없음.
Scene별오디오종료후영상끝까지각0.171208/0.220/0.220/0.180/0.300초 무음채움. 엔딩약0.013334초 무음채움. 음성중간삽입없음. 각각영상시작점0/4.9/10.4/17.5/26/31.5초에맞춰배치,중복없음.
통합본구간과원본MP4오디오상관도모두 .99989이상. 기록 scripts/full-preview-v1-audio-verification.json. 전체sample peak -3.19dBFS,디지털오버 없음. 구간RMS약 -20.22/-22.65/-22.23/-21.71/-22.62/-25.67dBFS(무음포함),엔딩이더작게측정됨. 원본동일음량조건유지하며임의정규화하지않음. 실제갑작스러운음량변화·클릭·팝·청감자연스러움은미확인.
Scene5음원전체5.2초는전역31.2초에종료,엔딩31.5초시작까지0.3초여유. 소스말미무음까지보존,데이터잘림/음성중복없음. 마지막음절청감QA는미확인.

## 시각·모바일 QA
통합MP4에서추출한6개360×640화면직접확인:승인제품/자막/도식/체크리스트/결론/엔딩순서정상. Scene3의작은라벨,Scene4의작은하단안내,엔딩의작은문구/전화번호하단UI간섭은실기기확인필요. 기존안전영역을변경하지않음. 실제DynamicIsland·노치·Shorts/Reels/Clip UI검증미확인. Scene4v5아이폰/플랫폼QA도여전히미확인.
ffplay 기본1배속360×640전체37.167초재생실행후자동정상종료(exit0). 모델의직접연속시청·청취는불가하여시간적전환자연스러움·발음·리듬·청감PASS선언하지않음. 정지관찰/기술검증과구분.

## 보존 및 승인대기
scripts/full-preview-v1-preservation.json에기록한6영상및5승인WAV원본SHA-256재확인동일. Scene1~5/공통엔딩수정없음,재설계없음. 기존파일덮어쓰기없음.
사용자최종승인필요:전체연속시청·청취,Scene경계호흡·음량,Scene5→엔딩컷,실기기UI/가독성. Preview검토본이며Final확정/게시미실행.
