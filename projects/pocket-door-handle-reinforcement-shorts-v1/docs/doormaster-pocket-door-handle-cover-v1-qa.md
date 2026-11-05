# DoorMaster 포켓도어 Cover v1 QA

## 결과 및 승인상태
사용자 시각승인대기. Cover v1만 제작. AI0회,영상/음성/공통가이드/Git변경없음. v2/SNS/정리미실행.
원본 public/covers/doormaster-pocket-door-handle-cover-v1.png (1080×1920)
크롭 public/covers/qa/doormaster-pocket-door-handle-{3x4,4x5,1x1}-v1.png
비교 public/covers/qa/doormaster-pocket-door-handle-reference-compare-v1.png
소스 src/doormaster-pocket-door-cover-v1.tsx
렌더 scripts/render-pocket-cover-v1.cjs

## 확인한 기준
DESIGN_DoorMaster v4 및2026-10-14승인간판등록, COVER.md브랜드/운영원칙. 일반카드형좌표/폰트강제미적용.
최초 docs/design-styles/door-master/references/door-master-cover-reference-v1.png 직접확인.
최근승인 doormaster-handle-replacement-v1/public/covers/doormaster-handle-replacement-cover-v3.png 직접확인. 승인근거 해당프로젝트 docs/cleanup-reassessment-v2.md 및 cleanup-preflight-v1.md의 최종사용자승인결과물기록.
비교PNG 좌→우 최초레퍼런스/최근승인손잡이교체v3/이번Cover. 최초레퍼런스의미승인슬로건은비교자료에만있고새Cover에는없음.

## 자산/레이어
승인공통간판v2 전체세트(편집SVG,outlinedSVG,PNG,폰트,설정,재현스크립트)를 public/covers/assets-v1/series-sign-v2에복사. 공통원본미변경. 표시PNG비율그대로사용(left110,top285,width800,height374.194). 문아이콘/비대칭간판/시리즈문자편집없음.
브랜드: younglim-flag-hinge-order-shorts/public/references/doormaster-approved-brand-v5/approved-cover-v5-brand-lockup.png를바이트그대로assets-v1/brand.png에복사. 승인 DAESAN/대산종합건축자재 표시. 색상변경없음. left75,top1540,width330,높이자동. 별도배경카드없음.
Hero: 승인A pocket-door-sh30-exterior-v1.png540×960을1620×2880으로균일3배,left0,top220. 원본제품비율/색/요철보존,오목면과요철중심으로하단확대크롭. 손잡이전체하단은화면밖. 새제품/내부/체결구조생성없음.
웜화이트#F4F1E9 상단과부드러운CSS그라데이션으로기존A배경연결. 수평패치경계없음. 상단문구/간판/제품/브랜드개별레이어.

## 타이포
간판승인폰트세트의Pretendard Black을제목폰트로선택(일반가이드자동적용아님). 최초레퍼런스원본폰트라고주장하지않음.
제목1 x80,baseline770,132px,900,자간-5: 오목이손잡이
제목2 x72,baseline885,105px,900,자간-4,그룹-1도: 구멍만 맞추면 끝?
부제 x85,baseline965,43px,900,자간-1: 포켓도어 설치 전 확인할 것
제목#171918. 브러시#FFE052,비정형SVG경계+얇은보조획. 단순직사각형아님.

## 직접 시각 QA
원본/3:4/4:5/1:1과360×640레퍼런스비교를직접열어확인.
PASS: 승인간판·문아이콘결합/정확한시리즈명,큰블랙제목,정확한제목·부제,캐릭터·미승인슬로건없음,브랜드표기,배경합성이음선/직사각패치없음.
PASS:3:4(y240–1680)필수시리즈명·제목·부제·오목면/요철·브랜드유지. 제품하단크롭은의도한Hero구도.
PASS:4:5(y285–1635)같은필수요소와브랜드표시. 브랜드하단여백은좁음.
WARN:9:16상단여백이최초레퍼런스보다큼(최근승인Cover와유사). 원본완성도는사용자판단필요.
WARN:원본A확대에따른금속/요철선명도저하. 제품특징은식별되지만고해상도실사처럼평가하지않음. 제품의전장확인은이번크롭으로불가.
WARN:브러시가'구멍만'뒤를덮지만끝부분이'맞'의왼쪽일부까지걸림. 핵심어만엄밀하게분리하는기준은완전충족아님. 자동v2나덮어쓰기미실행.
선택1:1 FAIL(해당크롭만): 시리즈간판상단/문도사의일부/문아이콘잘림,브랜드제외WARN. 메인제목/부제/제품특징은남음. 이것만으로원본불합격처리하지않음. 정사각사용은권장하지않음,브랜드제외사용은별도사용자승인필요.
모바일:큰제목과시리즈명/제품은식별. 작은회사명은읽기여유제한WARN. 실제아이폰DynamicIsland/노치/Shorts/Reels/Clip 업로드/UI QA는미확인. Cover크롭은사용자지정검토범위이지플랫폼공식안전보장아님.

## 보존과 다음단계
scripts/cover-v1-preservation.json의기준전체Preview/승인A/공통간판/브랜드원본SHA256동일. 기존Scene/TTS파일은읽거나수정하지않음. 새파일만생성,공통원본보존. 사용자승인전v2/SNS/정리/Git미진행.
사용자승인항목:원본상단여백과Hero크롭,확대선명도,브러시끝이맞에걸치는WARN허용여부. 1:1브랜드제외는별도승인대상.
