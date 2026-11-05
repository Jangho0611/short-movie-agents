# Scene 1·2 모바일 안전 영역 v3 QA

## 출력
Scene01 v2 4.90초/147프레임, Scene02 v3 5.50초/165프레임, Preview v3 10.40초/312프레임. 1080×1920 30fps H.264 AAC192k. 전체 정상 디코딩.

## 좌표와 변경 범위
기존 자막 패널 y0–298, baseline124/244, 100/107px, stroke3.66. Scene1 강조 프레임에서 실제 검출 글자 범위 x268–804,y41–252.
신규 패널 y250–500. SVG viewBox를250/298배 축소하여 baseline354.03/454.70, 유효 글자83.89/89.77px, stroke3.07. Scene1 픽셀 검출 x312–761,y284–461. Scene2 두 번째 자막 x233–841,y285–462. 검출은 글자/노란색/외곽선 색상 임계 기준이며 압축 잔상 전체를 완전 포괄하는 기하학적 측정은 아니다.
소스상 글자 주변 보수적 영역 x200–880,y275–480을 검사영역으로 사용. 그림자 없음. 위치 이동 모션 없음(최대이동0), 기존 opacity 5프레임 유지. 모든 opacity 프레임은 동일 bounds 이내. 문구/강조 단어/Scene1 frame80 및 Scene2 frame84 강조 타이밍 동일.
Scene2 안내 top1450(기존 bottom95), 문구/폰트 유지. 중앙 제품 y520–1400 및 홈 y576–1344와 비간섭. 안내 문구는 모바일에서 작으므로 가독성 조건부.

## 안전 영역 근거
이번 임시 작업 범위 x100–980,y280–1500은 제작상 가정이며 플랫폼 공식 수치도 실기기 보장도 아니다. 실제 기종/OS/앱/fit-fill 표시와 캡처를 얻어 검증해야 최종 승인 가능.
QA 이미지: 360×640 기준 Island x130–230,y10–48; notch x90–270,y0–60; generic UI top80,bottom130,right30px 및 side12px 가림 가정. 모두 설명용 임의 스트레스 테스트이며 실측 아님. side 가림은 실제 크롭 확대를 재현한 것이 아님.
- 원본/360 축소: 주요 글자와 제품 겹침 없음.
- 가상 Island/노치/UI: 가정한 마스크에서 가림 없음, 조건부.
- iPhone 실기기: 미확인.
- YouTube Shorts: 광고용 Google 자료 참고, 일반 Shorts UI 실측 미확인.
- Instagram Reels: 공식 도움말 로그인 제한, 실제 UI 미확인.
- Naver Clip: 제작 도움말에서 공통 픽셀값 확인 못함, 실제 UI 미확인.
어느 플랫폼에도 실제 PASS를 선언하지 않음. 기존 가림 사용자 보고를 이번 가상 테스트로 해소 확정하지 않음.

## 보존/재생
기존 원본 음원/배경 및 이전 영상 SHA256을 scene02-v2-preservation.json과 비교해 일치. Scene01·02 새 소스는 기존 Scene02 v2에서 패널 top/height/SVG 크기, 안내 top,composition 등록만 변경. 제품/홈 좌표·색/타이밍·음원 입력 그대로. AAC 손실 인코딩만 허용 적용. 원본 WAV 불변, 속도/피치/gain 변경 없음.
전체 MP4 ffplay 정상속도 재생 실행. 모델 직접 연속 시청·청취는 확인 불가이므로 시각 리듬/발음/청각 클리핑 PASS 아님. 승인 원본 기존 fullscale 특성도 그대로이며 무클리핑 확정 금지.

## 공통 가이드
원본: /Users/janghokim/Documents/short-movie-agents/docs/daesan_shorts_instructions.md 및 Shorts_제작_운영가이드.md.
수정 전 .before-safe-area-20261104.bak를 이 프로젝트 docs에 보존. 기존 원문 prefix 동일 검증, 끝에 관련 절만 추가. diff: mobile-safe-area-guide-20261104.diff.
통합 지침: 전 시리즈 적용 공통 원칙. 운영가이드: 실측 역변환/2줄 bounds+stroke+shadow+모션 합집합/가상·공식·실기기 구분/판정 및 출처. 커버/엔딩 기준 변경 없음.
ChatGPT 프로젝트 소스 재업로드 대상은 위 공통 MD 두 개만. 백업·프로젝트 QA는 공통 소스로 올리지 않음.

## 최종 상태
기술 및 정지 가상 QA 완료, 실기기/플랫폼 승인 대기. Scene3 이후 제작 없음.
