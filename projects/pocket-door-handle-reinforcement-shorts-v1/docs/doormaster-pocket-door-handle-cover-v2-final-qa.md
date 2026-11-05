# DoorMaster Cover v2 — 최신 사용자 허용 범위 반영 QA

사용자 시각 승인 대기. 기존 doormaster-pocket-door-handle-cover-v2-qa.md는 이전 생성 검토 기록이므로 덮어쓰지 않고 본 기록을 별도 저장했다.

## 적용 기준
최신 사용자 지시로 공식 SH30NI 세부 형상 일치 요구를 이번 콘셉트 Cover에 한해 완화. 과거 제품 정확성 FAIL을 취소하거나 실제 설치 사진이라고 주장하지 않음. 기존 AI 사진의 비정상적 구조 여부와 자연스러운 매립 표현으로 평가했다. 통합 실행 지침/COVER의 운영·브랜드 원칙과 DoorMaster 독립 디자인 적용. 이전 턴에 확인한 현행 가이드 유지.

## 제작
- 추가 AI 생성 0회, 공식 사진 재합성 0회.
- Hero: public/assets/images/pocket-door-cover-photoreal-v1.png (941×1672), 화면 전체1080×1920 표시, 약1.148배. 공식 제품 합성본 미사용.
- src/doormaster-pocket-door-cover-v2.tsx / scripts/render-pocket-cover-v2.cjs, Remotion 정지 렌더.
- 기존 v1의 간판 PNG·문 아이콘·승인 브랜드 PNG를 그대로 재사용.
- 간판 left110 top285 width800, 종횡비 유지.
- 제목 Pretendard Black 900: 첫줄132px 자간-5 baseline770; 둘째105px 자간-4 baseline885, -1도. 부제43px 자간-1 baseline965.
- 제목#171918, 웜화이트#F4F1E9, 브러시#FFE052. 브러시 우측 경계를 약46px 축소해 '맞' 침범 해소. 비정형 경계 유지.
- 브랜드 원본#123628, left75 top1540 width330, 비율·색상 변경 없음.
- 제목·간판·부제·브랜드는 별도 레이어. AI 배경 안에 잘못 생성된 글자·로고 노출 없음.

## 출력
public/covers/doormaster-pocket-door-handle-cover-v2.png (1080×1920)
public/covers/qa/doormaster-pocket-door-handle-3x4-v2.png (1080×1440 y240–1680)
public/covers/qa/doormaster-pocket-door-handle-4x5-v2.png (1080×1350 y285–1635)
public/covers/qa/doormaster-pocket-door-handle-1x1-v2.png (1080×1080 y420–1500)
public/covers/qa/doormaster-pocket-door-handle-reference-compare-v2.png
비교 좌→우: 최초 문도사 레퍼런스/최근 승인 손잡이교체 Cover v3/이번 Cover v2. 각360×640. 비교용 최초 레퍼런스의 옛 영문 슬로건은 새 Cover에 적용하지 않음.

## 직접 시각 QA
원본과 모든 크롭 및360×640 비교 이미지를 직접 열었다.
PASS: 주거공간의 자연광과 설치 구도, 세로형 오목이손잡이 식별, 금속 테두리·오목면·세로 요철, 문짝과 매립 관계. 큰 추가 구멍/떠 있는 부품 등 명백한 AI 오류 미관찰.
PASS: 비대칭 간판과 문 아이콘, 정확한 제목·부제, '구멍만' 브러시 범위, 승인 로고와 회사명, 캐릭터·새 슬로건 없음.
PASS:3:4·4:5에서 시리즈명·메인 제목·강조·손잡이 특징·브랜드 유지. 4:5 브랜드 하단 여백은 좁아 WARN.
PASS:360×640에서 큰 제목과 손잡이 특징 읽힘. 작은 회사명은 상대적으로 작은 글씨라 WARN.
WARN:9:16 상단 공백은 최초 레퍼런스보다 크지만 최근 승인 Cover와 유사. 디자인 완성도 최종 사용자 판단 필요.
WARN: 원본941×1672를 소폭 확대했으며 고해상도 실제 촬영본은 아님. 공식 SH30NI와 비율이 다르지만 최신 허용 범위 내 콘셉트 사용. 실제 SH30NI 설치 사례/공식 시공 사진으로 표기 금지.
선택1:1 FAIL: 간판 상부와 문도사의 일부 잘림. 브랜드 제외 WARN. 원본9:16 및 필수크롭 FAIL로 확대하지 않음. 정사각형 사용 비권장, 브랜드 제외 사용은 별도 사용자 승인 필요.
실제 아이폰 Dynamic Island/노치/Shorts/Reels/Clip 업로드 UI QA 미확인. 지정 크롭 검사를 공식 플랫폼 안전 보장으로 주장하지 않음.

## 보존 및 승인
기존 Cover v1·AI 원본·공식 합성본·과거 QA 덮어쓰기 없음. 영상/Scene/TTS/공통 엔딩/가이드 수정 없음. 새 소스·렌더 스크립트·Cover·QA만 생성. Git/SNS/Cover v3 미실행.
사용자 승인 필요: 콘셉트 Hero와 전체 디자인, 필수크롭 여백, 모바일 작은 회사명 가독성. 승인 전 후속 제작 없음.
