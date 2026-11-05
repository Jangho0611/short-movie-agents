# Scene1 손잡이 유형별 생성 v1 QA

사용자 승인 대기. 기준 세로형v2는 그대로 재사용. 신규3종 각1회, 총image_gen편집3회. 자동 재시도/수정/업스케일 없음. 확인 가능한 실제 비용·크레딧 정보 없음. 별도 결제/구매 없음.

## 공식 형태 조사
EMTEK 2025 Door Hardware Booklet 인쇄p76–77(PDF39페이지)를 직접 렌더해 사진 확인.
https://www.emtek.com/media/documents/2025_Emtek_Door_Hardware_Booklet.pdf
제품 코드/마감 보조 자료:
https://www.emtek.com/media/documents/2025_Emtek_Door_Hardware_Price_Book_EN_1.pdf
- 원형: EMTEK Round Flush Pull 2211. 원형 테두리와 오목한 finger cup, 문짝 앞면 매립, 잠금 없음.
- 사각: EMTEK Square Flush Pull 2213. 사각 외곽에 원형 오목부, 앞면 매립, 잠금 없음. 가상의 세로 홈 대신 확인한 실제 형태 사용.
- 잠금형: EMTEK Square Pocket Door Tubular Lock privacy 2135 유형. 사각 trim, 원형 내측 finger pull/가로 grip과 중앙 thumbturn, 끝단 latch assembly. 공식 설치 사진을 참고. 정확한 제조사 제품 재현/설치 적합성 검증 아님.
공식제품의형태를 확인한 뒤 기준v2와 카탈로그 페이지를 모두 image_gen 참조로 사용했다. 사용자가 언급한 미채택2×2이미지는 접근/사용하지 않았다. 엣지풀 단독유형 제외.

## 산출
원형 scene01-handle-round-v1.png 941×1671
사각 scene01-handle-square-v1.png 941×1670
잠금 scene01-handle-privacy-v1.png 941×1671
모두 public/assets/images/. 생성 원본 바이트 복사, 후처리 형태수정 없음.
scene01-handle-types-comparison-v1.png 2160×960: 세로/원형/사각/잠금 순서, 각540×960
scene01-handle-types-mobile-v1.png 1440×640: 같은순서 각360×640
비교본은 개별 이미지를 나란히 배치한 QA 자료일 뿐 생성 콜라주나 영상용 자산 아님.

## 직접 구조 및 모바일 QA
각 생성 결과와4종360×640비교를 직접 확인.
원형: 형태 PASS. 원형 금속 rim과 concave cup 식별, 기존 긴 손잡이 잔상/추가 구멍 미관찰. 위치일치 WARN.
사각: 형태 PASS. 공식 참고와 같은 사각 plate+원형 cup. 가상세로홈 없음, 기존 긴plate 잔상 없음. 위치일치 WARN. 원본높이1px차이 WARN.
잠금형: WARN/최종채택보류. 전면 가로grip/중앙회전조작부/상하체결부는 공식예와 유사하나 끝단의 둥근 오목부가 실제 latch/edge-pull기구와 정확히 대응하는지 확정할 수 없음. 기능검증PASS금지. 사용자가 부자연스럽다고 평가하면 미채택보존하며 자동재생성하지 않음.
공통: 문짝 오른쪽 끝단·배경·카메라의 큰 구도 유지. 미세한 표면/조명 변화가 있어 픽셀동일성PASS아님. 금속 경계와 오목면 식별, 텍스트/로고 없음. 작은 잠금조작부는 모바일에서 세부 판독 제한.
설치 중심 대략 원본좌표: 세로(559,1001), 원형(547,973), 사각(552,949), 잠금(549,977). 육안 외곽 중점 근사이며 자동 정밀측정 아님. 기준대비 약28/52/24px 위로 이동. 모바일 약11/20/9px차이. 설치중심정확일치 항목 FAIL. 이를 동일좌표로 보고하지 않음.
빠른하드컷: 유형변화는 읽히나 중심 점프와 미세 배경톤변화가 생길 수 있으므로 현재 이미지로 완전고정전환PASS 선언하지 않음. 실제 영상 렌더·연속재생미실행.
실제기기/플랫폼UI QA 미확인. 기존상단여백유지. 유형별타공·설치구조동일성암시금지.

## 보존/다음단계
기준v2·Scene1~5·TTS·Cover·공통엔딩·가이드변경없음. Git/SNS/영상렌더 없음. public/references 등록없음.
사용자 승인 필요: 원형/사각 형태, 잠금형 끝단 표현, 중심차이를 허용할지 여부. 현재3종은 검토후보이며 자동 모션제작금지. 추가생성 없이 호출상한3회에서 종료.
