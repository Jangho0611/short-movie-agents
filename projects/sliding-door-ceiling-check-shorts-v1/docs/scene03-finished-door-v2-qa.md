# Scene 3 finished door v2 QA — 2026-11-06

## 제작
built-in image_gen edit1회. v1 실제 이미지 Reference 사용. 분위기만 유지하고 문주변 재구성 요청. 원본출력941×1672 보존. 추가생성/영상없음.
후보 scene03-finished-door-ai-v2-candidate.png
비교 scene03-finished-door-v1-v2-comparison.png (왼쪽v1/오른쪽v2)
상단확대 scene03-finished-door-v2-upper-qa.png (원본좌표30,400,900,350 크롭)

## 필수 QA
1 이동문짝: 손잡이와 측면을 가진 문짝1개 식별.
2 개구부: 보이는 통로1개. 숨겨진 전체 경계는 확인불가.
3 뒤쪽패널: 불필요한 좌측문틀/두꺼운상부띠는 줄었으나 문짝 뒤 고정벽과 개구부 우측경계 불명확. 제거완료 단정불가.
4 좌우이동: 손잡이/벽앞단차/바닥틈으로 슬라이딩문처럼 읽힘, 실제이동가능성 미검증.
5 닫힘관계: 개구부전체폭 가려져 단일문짝의 완전폐쇄 관계 미확인.
6 문/벽: 앞쪽측면/손잡이로 구분가능.
7 두꺼운가로문틀: v1의두꺼운내측상부띠 제거,얇은경계만남음.
8 천장연결: 문상단 위 여전히 넓은 수직면이 남아 천장매립인지 벽상부헤더인지 불명확.
9 주행틈: 확대상 검은선에 가까움. 입체개구부 요구 미통과.
10 접착/관통: 큰관통은보이지않으나 상단접촉처럼보일가능성남음.
11 추가철물/장식: 노출철물/점검구/추가문짝없음.
12 차별화: 실내중거리로 Scene1/2와 명확히다름.
13 모바일: 개구부/손잡이/문짝식별 가능, 내부구조판독불가.
14 그래픽공간: 상단여백있음, 질문형문구배치가능.

## 결론
부분개선이나 구조 QA 미통과. 실제시공검증아님. v1구도에 편집이 고착돼 숨은 우측개구부 경계와 입체슬롯이 해결되지 않은 것으로 해석(원인추정). 추가생성 중단. 다음 단계는 명확한 개구부 전체 경계가 보이는 구도설계 또는 사용허용 실제 사례사진을 기준으로 검토하는 것이 적합. 이번에는 미실행.
기존자산/TTS/엔딩/공통가이드/Git 변경없음.

## 프롬프트
Use case: precise-object-edit. Use supplied image as reference for warm-white room, pale wood floor, natural light, minimal architecture, portrait framing and camera angle ONLY. Reconstruct faulty door/opening/header geometry, do not preserve it. ONE candidate. Show exactly ONE moving sliding door leaf and ONE passage opening. Ordinary surface-sliding door moving parallel IN FRONT OF the adjacent wall, NOT pocket door. Door partially slid to the right so an unobstructed portion of the one opening reveals a real room beyond. Full doorway width must plausibly be covered by this one door when it slides left. Clearly distinguish the fixed wall to the right from the separate door in front with visible edge thickness and small stand-off shadow; no additional panel behind the door, no panel inside the opening, no second leaf. Door has simple recessed pull and small floor clearance. CRITICAL TOP: make the opening tall to the actual ceiling plane; ceiling-integrated concealed suspension with a narrow dimensional running recess along the door travel path. No thick horizontal lintel, no framed header, no applied fascia board, no long box above door, no extra trim. Seamless warm-white ceiling and wall return; door top enters a subtle recess with visible soft inner depth, not merely a black drawn line and not glued into ceiling. Rail/rollers remain concealed, do not invent exposed hardware or access panels. One natural coherent finished architectural photograph, generic explanatory example not a manufacturer installation. Prioritize clear one-door/one-opening closure relationship over preserving original geometry. Retain similar lighting, restrained plaster textures and overall medium-distance portrait composition; no furniture additions. No labels, text, arrows, logos, dimensions. Preserve portrait9:16 and original resolution if possible.
