# 전체 통합 Preview v2 QA
2026-11-05. 최종 사용자 승인 대기. 종합 WARN(실기기·직접 연속 시청 미확인).

## 결과
1080×1920,30fps,H.264 High/yuv420p,AAC-LC48k stereo,1115프레임.
영상과 오디오 트랙 모두37.166667초. Scene영상 재렌더·재인코딩 없음. 각 영상트랙 timebase를1/90000으로 remux해 통일한 뒤 concat stream copy. 최초 조립 시 timebase 차이로 길이 오류를 발견하여 이 실행에서 만든 결과만 교정했다. 최종 길이/전체 디코딩/프레임 비교 재검증 완료.

|구간|프레임 끝제외|시작–종료 초|
|---|---|---|
|Scene1 v5|0–147|0–4.9|
|Scene2 v3|147–312|4.9–10.4|
|Scene3 v2|312–525|10.4–17.5|
|Scene4 v5|525–780|17.5–26|
|Scene5 v1|780–945|26–31.5|
|승인 엔딩|945–1115|31.5–37.166667|

## 보존·엔딩
공용 assets/daesan-ending/docs/asset-sha256.json의17파일 모두존재/해시일치. 승인영상/오디오/컴포넌트/직접의존/로고/이미지/폰트세트 동일. 엔딩170프레임 기존Canonical사용, 재설계없음.
엔딩영상SHA256 2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5.
엔딩TTS SHA256 bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181.
Scene1 첫147프레임은승인v5와디코딩framemd5전체일치. 이후968프레임은기존전체v1과모두일치. Scene경계프레임 누락/추가없음. 기존입력6영상및5WAV 해시 작업전후동일(scripts/full-preview-v2-preservation.json). Cover/이미지/기존전체v1에 쓰기작업없음.

## 음성
기존Scene MP4 오디오 사용. 본문mono/엔딩stereo를48k stereo로통일해AAC192k1회인코딩, 기존v1조립방법동일. 속도/피치/gain변경없음. 각Scene영상길이에만말미무음패딩, 음성중복없음.
v1 대비 구간별mono48k신호상관도 Scene1 0.9999999999,나머지약1.0. samplepeak0.979095(<1). 디지털 오버 없음. 승인WAV대응은기존v1검증과Scene1v5 동일AAC검증연계. 신규단어별청취검증아님.
Scene5→엔딩31.5초컷,Scene5음원종료31.2초로0.3초여유. 청각적 마지막음절/클릭·팝/음량자연스러움 미확인.

## 모바일·시각
실제디코딩한12개360×640프레임으로4종손잡이/각Scene/엔딩검토. 엣지풀인출부식별가능,잠금형snib는작음. Scene3보조라벨/Scene4하단안내/엔딩번호는실기기확인필요.
Scene1→2는새로운실사형배경에서기존가공홈화면으로컷되어제품크기와구도변화존재. 승인Scene내용을보존했으며자연스러운연결로자동PASS하지않음. Scene5→엔딩은v1과동일프레임.
기존자막좌표유지. DynamicIsland/노치/Shorts/Reels/Clip실기기QA미확인. 임의픽셀값을공식안전기준으로간주하지않음.
ffplay360×640전체1배속재생실행. 모델직접연속시청·청취는확인불가이므로리듬/발음/청감PASS아님.

## 산출물
- public/assets/video/pocket-door-doormaster-full-preview-v2.mp4
- public/assets/images/pocket-door-doormaster-full-qa-v2.png
- public/assets/images/pocket-door-doormaster-scene01-compare-v2.png (왼쪽통합v1/오른쪽통합v2)
- public/assets/images/pocket-door-doormaster-full-mobile-qa-v2.png

최종승인필요:전체연속시청·청취,Scene1→2구도전환,모바일UI가림및작은문구가독성. SNS/Git/새이미지생성/전체Final확정없음.
