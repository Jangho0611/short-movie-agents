# 슬라이딩 도어 전체 Preview v1 QA

2026-11-06 / 최종 Preview 사용자 시각·청취 승인 대기

## 입력 및 시간표 (종료는 다음 구간 시작, exclusive)
|구간|승인 파일|프레임 범위|시간|
|---|---|---|---|
|Scene1|scene01-preview-v6.mp4|0~125|0.000~4.200|
|Scene2|scene02-preview-v4.mp4|126~329|4.200~11.000|
|Scene3|scene03-preview-v2.mp4|330~473|11.000~15.800|
|Scene4|scene04-preview-v3.mp4|474~641|15.800~21.400|
|엔딩|daesan-headquarters-ending-approved-v1.mp4|642~811|21.400~27.066667|

## 공통 엔딩 검증
프로젝트 src/daesan-ending/DaesanEnding.tsx와 approved/HeadquartersOverlay.tsx, fonts.ts, tokens.ts, brief.ts: 공용 assets/daesan-ending 소스와 staticFile 경로 정규화 후 모두 동일.
직접 자산 public/assets/video/headquarters-normal-speed-hold.mp4, audio/ending-approved-v3.mp3, logos/daesanlogo2.png, fonts/Pretendard-{Medium,SemiBold,ExtraBold}.woff2는 공용 자산과 SHA256 동일.
승인 엔딩 MP4 SHA256 2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5 일치,170프레임30fps 확인. 이 MP4를 재렌더 없이 사용. 본사 전경 승인 엔딩이며 별도 캐릭터를 추가하지 않음.
엔딩 음원 SHA256 bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181 일치.

## 조립
승인5개 MP4를 FFmpeg concat filter로 연결. 각 비디오 프레임 수 유지, 정규화된 PTS 사용. full-range BT601인 Scene1~3/엔딩을 BT709 limited로 변환, Scene4 BT709 유지. 출력에서만 H264 High/yuv420p/BT709/CFR30/1080×1920/AAC192k 인코딩. 개별 자산 및 소스 재렌더·수정 없음.
본편 각 MP4의 영상 길이 초과 오디오는 디코딩 peak0.0인 무음만 제거하여 경계 정렬. 엔딩의 영상 대비 부족한0.013333초는 말미 무음 패딩. 발화·음량·속도·피치 변경 없음. AAC 재인코딩에 따른 샘플 차이는 존재.

## QA
- 812프레임, 영상·오디오27.066667초. 전체 디코딩 정상, CFR PTS 오차 0.000000334초 미만.
- 전체812프레임 검정 화면 자동 검사: 없음(180×320 RGB 평균<5 기준; 모든 형태의 이상 프레임 검출을 의미하지 않음).
- 연결부 각 전후2프레임 직접 시각 확인: 검은 삽입/비율 변화/자막 잔상 없음. 의도된 컷 전환 유지.
- Scene1 첫 Hook, Scene2 A/B, Scene3 질문, 엔딩 로고·전화번호 대표 화면 직접 확인.
- Scene4 전체168프레임 contact sheet 직접 확인: 배경·두 카드·아이콘·개념도·마지막 문구 유지. 시작 타일 반복 재발 없음.
- 음원 배치는 겹치지 않는 직렬 연결. 엔딩 오디오 한 번만 배치. 전 구간 오디오 파형 상관/레벨 비교 아래 기록.
- 실제 플레이어 전체1배속 시청·청취 및 실기기 테스트는 미실시. 오디오의 자연스러움/체감 음량/사용자 환경 재생은 승인 필요. 시각 검토는 대표 및 연결부, Scene4 전체 프레임 범위이며 전체812프레임을 사람이 모두 본 것으로 주장하지 않음.
- Scene3 AI 구조의 기존 미검증 한계는 조립으로 해소되지 않음.

## 오디오 검증 (입력 대비 상관계수, RMS dB 차이)
[('scene01-preview-v6.mp4', 0.9999939826236144, -0.005093780811876059), ('scene02-preview-v4.mp4', 0.9999956538759094, -0.004341126419603825), ('scene03-preview-v2.mp4', 0.9999726932522488, -0.011304507032036781), ('scene04-preview-v3.mp4', 0.9999921266087693, -0.005142475012689829), ('daesan-headquarters-ending-approved-v1.mp4', 0.9999823383823868, -0.005790031980723143)]

## 승인 원본 보존
작업 전후 기존 자산·소스 115개 SHA256 동일. 주요 입력 해시:
- scene01-preview-v6.mp4: d94f1dea1430aca5378b7bc27de5b104c0189dc31c84ac2605f42fd49798e3cf
- scene02-preview-v4.mp4: 6074b94e82c5d2d6a14de416b779e1692c603caa1fbb22144042bea9d2fc525e
- scene03-preview-v2.mp4: ed66caad35ffc07e1089327c2da14f23fbffaa8daf4d4717b7b8a2f388daa0ad
- scene04-preview-v3.mp4: 02bde76a24c6461cce76e0d77b9b54be1818dbc513d17dd9ebc939316b58c929
- daesan-headquarters-ending-approved-v1.mp4: 2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5

## 승인 후 단계
현재 Preview만 제작. Final 확정/Cover/SNS/정리/Git 작업 없음.
