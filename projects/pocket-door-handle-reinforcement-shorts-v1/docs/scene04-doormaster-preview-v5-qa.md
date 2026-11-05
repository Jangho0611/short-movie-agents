# Scene 4 Preview v5 QA

## 결과
public/assets/video/scene04-doormaster-preview-v5.mp4
public/assets/images/scene04-doormaster-preview-v5-qa.png
src/scene04-doormaster-preview-v5.tsx
scripts/render-scene04-doormaster-preview-v5.cjs
1080×1920,30fps,255프레임,8.500초,H.264/AAC. Contact Sheet:2.000/4.833/6.333/8.333초,각360×640.

## 유일한 화면 변경
기존 x674,y1190/1234,32px 두줄 안내 제거.
신규 '실제 설치 방식은 제품별 상이',x540 중앙정렬,baseline y1450,30px,weight500,#626b65. 기존폰트 Apple SD Gothic Neo/Noto Sans KR/sans-serif 유지. 한줄,고정위치,배경패널·외곽선·그림자없음. 제품bottom1271.4와 약150px 이상 여백.
실제 표시잉크 바운딩박스(우하exclusive): [370, 1426, 708, 1452]. 임계값 측정으로 옅은 안티앨리어싱 수px오차가능.

## 보존 비교
PASS: 원본해시 scripts/scene04-preview-v5-preservation.json 전체동일(제품마스크,승인WAV,Scene1~3,기존Scene4v1~v4 등).
PASS: v4/v5 무손실렌더PNG 네 프레임 픽셀비교에서 기존/신규 안내 영역을 제외한 모든 픽셀 동일. MP4손실압축으로 픽셀변화가 번질 수 있어 PNG로 비교함. 소스 변경은 안내text 두개를 한개로 교체한 부분뿐. 제품·체크·상단자막·모션 동일.
체크등장0.500/4.300/5.133초 유지. 8.5초 유지. 승인WAV8.320초 원본유지,속도·피치·음량변경없음. AAC출력용인코딩만 수행.

## QA
PASS 기술: 전체정상디코딩,H.264/AAC,255프레임,8.500초.
모바일정지확인: 한줄 안내가 제품·체크리스트와 충분히 분리됨. 360×640에서10px로 작지만 문구 식별가능. 보조안내로 절제됐으며 편한 판독성은 실기기확인필요(조건부). 체크리스트·제품은 그대로.
배치는 기존프로젝트 잠정안전범위 참고,화면끝에 붙이지 않음. 하단으로 약470px 여백. 공식플랫폼공통안전좌표라고 주장하지 않음. 실제 Dynamic Island/노치/Shorts/Reels/Clip 및 하단UI 가림검증: 미확인. 가상오버레이PASS로 대체하지않음.
ffplay 기본1배속360×640전체재생 실행/정상종료. 모델직접연속시청·청취는 불가하여 실제시청/청감/단어동기QA 미확인. 기술PASS와구분.

## 승인 대기
사용자검토: 하단안내 위치와 실기기10px판독성,플랫폼하단UI 간섭. Scene5/공통엔딩/전체Preview 미제작. 안내외 변경없음.
