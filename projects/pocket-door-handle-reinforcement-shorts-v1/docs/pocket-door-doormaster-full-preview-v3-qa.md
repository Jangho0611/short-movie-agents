# 전체 통합 Preview v3 QA
2026-11-05 / 기술PASS,사용자최종시청승인대기WARN.

## 규격 및 타임라인
1080×1920,30fps,H.264 High/yuv420p,AAC-LC48k stereo,1115프레임. 영상/오디오트랙37.166667초.
|구간|프레임 끝제외|시작–종료초|
|---|---|---|
|Scene1 v7|0–147|0–4.9|
|Scene2 v3|147–312|4.9–10.4|
|Scene3 v2|312–525|10.4–17.5|
|Scene4 v5|525–780|17.5–26|
|Scene5 v1|780–945|26–31.5|
|승인엔딩|945–1115|31.5–37.166667|

## 영상 검증
각Scene MP4의영상timebase만90000으로remux한후concat stream copy. 재렌더/영상재인코딩/전환효과없음.
Scene1 첫147프레임framemd5는승인v7과모두동일. 이후968프레임은기존전체Previewv2와모두동일. 모든경계마지막/첫프레임포함누락없음.
손잡이전환0/18/36/60/80,두단계자막0~79/80~146,80구멍만강조보존. 엣지풀구도/오른쪽기둥제거결과그대로. 설치방식/실제제조사제품으로새로해석하지않음.

## 엔딩 세트
assets/daesan-ending/docs/asset-sha256.json의17파일전부존재/해시일치. 승인영상/컴포넌트/직접의존/이미지/로고/폰트/오디오/설정확인.170프레임Canonical영상그대로사용.
승인영상SHA256:2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5
승인TTS SHA256:bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181

## 오디오
기존Scene MP4 음성사용.48k stereo호환화후AAC192k1회인코딩,속도/피치/gain변경없음.BGM/효과음추가없음.영상길이까지말미무음패딩,정확한경계시점배치.
기존통합v2와mono48k 구간별상관도모두≈1.0(최소0.9999999999999998).samplepeak0.979095,디지털오버없음. Scene1v7 AAC는승인v6음성과동일한검증연계. 새단어별청취판정아님.
Scene5음원31.2초종료,엔딩31.5초시작으로0.3초여유.데이터상중복/잘림없음. 클릭·팝/음절잘림/급격한체감음량변화는청취미확인.

## 시각·모바일
실제디코딩12개360×640프레임직접검토:Scene1두단계자막/손잡이4종/기둥제거확인. 엣지풀인출부식별가능,잠금snib는작음. Scene3보조라벨/Scene4하단안내/엔딩번호는실기기확인필요.
Scene1→2 구도및제품크기변화있음. 승인컷을그대로연결하며자연스러움자동PASS하지않음. Scene5→엔딩은v2와프레임동일.
기존자막위치유지. DynamicIsland/노치/상태표시/Shorts/Reels/Clip실기기UI검증미확인. 가상좌표로실기기PASS판정안함.
ffplay360×640 전체1배속재생실행. 모델직접연속시청·청취를입증할수없어리듬/발음/자막동기/청각적자연스러움미확인.

## 보존
기존영상/승인WAV/Cover총63파일 SHA256작업전후동일. Previewv1/v2/Scene원본보존. 승인이미지/엔딩/가이드에쓰기작업없음. AI0회/Git0/SNS없음.
검증 scripts/full-preview-v3-scene01-v7-verification.json
재현 scripts/assemble-full-preview-v3.py

## 출력
public/assets/video/pocket-door-doormaster-full-preview-v3.mp4
public/assets/images/pocket-door-doormaster-full-qa-v3.png
public/assets/images/pocket-door-doormaster-scene01-compare-v3.png (좌통합v2/우통합v3,위frame36/아래frame90)
public/assets/images/pocket-door-doormaster-full-mobile-qa-v3.png

최종사용자승인필요:전체연속시청·청취,Scene간호흡/구도변화,모바일실기기UI가림및작은안내가독성. Final확정/게시/파일정리없음.
