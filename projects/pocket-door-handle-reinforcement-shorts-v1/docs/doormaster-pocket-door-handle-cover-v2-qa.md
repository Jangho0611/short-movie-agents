# DoorMaster Cover v2 제작 검토 QA

상태: 제품 외형 QA 불합격으로 Cover 합성 보류. 사용자 지시의 제품 정확성 게이트에 따라 추가 생성 및 합성 강행 없음.

## 생성
- Codex 내장 image_gen 1회 / 후보 1장. 자동 재시도 0회.
- 참고: public/assets/images/domus-CIS_3455-v3.jpg (공식 SH30NI).
- 결과: public/assets/images/pocket-door-cover-photoreal-v1.png
- 실제 청구액·사용 크레딧: 도구에서 제공되지 않아 확인 불가.
- 별도 ChatGPT 생성 이미지는 이 대화에서 접근하지 못함. 사용자의 공간·조명·구도 설명만 반영.
- 생성 원본은 별도 보존하고 요청 경로로 바이트 동일 복사.

## 직접 시각 비교
공식 제품 사진과 생성 이미지를 직접 열어 비교했다.
PASS: 따뜻한 주거공간, 웜화이트 문짝, 자연광, 금속 테두리, 오목면과 세로 요철 식별. 텍스트·브랜드·시리즈 간판 생성 없음.
WARN: 이 장면만으로 실제 포켓도어의 벽체 내부 슬라이딩 구조를 검증할 수 없음. 설치 사진이 아니라 AI 생성 연출 이미지.
FAIL: 공식 사진보다 생성 손잡이가 상대적으로 좁고 길다. 외곽 폭/높이의 육안 경계 근사치는 공식 약 118/396=0.298, 생성 표시 이미지 약 131/532=0.246. 이는 사진 투영 비교이며 제품 실측 치수가 아니다. 비율 차이를 원근만으로 정당화하지 않았다.
WARN: 오목면 모서리와 플랜지 여백도 완전 동일하지 않으며 DOMUS 각인은 텍스트 생성 금지에 따라 없음. 실제 SH30NI 설치 사진으로 사용할 수 없음.
선명도: 기존 확대 이미지보다 표면·요철이 뚜렷하게 보이나, 선명한 AI 형상이 공식 제품 정확성을 보장하지 않음.

## 비생성 합성 검토
공식 사진 전체는 1200×696이나 제품이 차지하는 유효 영역은 약 122×398이다. 이 제품을 큰 Hero로 합성하면 확대 선명도 문제가 재발할 수 있다. 또한 생성 손잡이를 완전히 가리면서 정확한 접촉 경계와 원근을 맞추는 작업이 필요하다. 현재 저해상도 공식 제품으로 무리하게 합성하지 않았다. 고해상도 공식 정면/설치 사진 확보 후 비생성 합성을 우선 검토할 수 있다.

## 미제작 항목
Cover v2, 3:4·4:5·1:1 크롭, 레퍼런스 비교 이미지는 제품 정확성 게이트에서 중단하여 미제작. 따라서 문도사 디자인·브러시 범위 수정·크롭·모바일 가독성은 PASS 판정하지 않음. 실제 기기·플랫폼 QA도 미확인.

## 보존
이번 실행은 신규 이미지 복사와 이 QA 및 프롬프트 기록만 수행. 기존 Cover v1, Scene 1~5, 전체 Preview, 승인 TTS, 공통 엔딩, 공통 가이드 수정·삭제·이동 없음. Git 작업 없음.

## 승인 필요
추가 생성은 수행하지 않음. 다음 진행은 고해상도 공식 제품/설치 사진을 이용한 비생성 합성 또는 제품 비율을 보완하는 추가 생성 1회에 대한 사용자 선택·승인 필요. 현재 이미지는 공간 분위기 참고로만 유지하며 제품 정확성이 필요한 Cover에 그대로 채택하지 않는 것을 권고.

## 실제 생성 프롬프트

Create ONE high-resolution portrait 9:16 architectural interior photograph, no typography, no logo, no watermark. Use the attached official SH30NI product photograph as strict visual reference for the installed recessed pull handle: long narrow satin nickel rectangular metal flange, rectangular deeply recessed inner well, clearly visible fine VERTICAL ribs inside the well, same aspect ratio and metal finish. Do not invent knobs, screws, extra holes, floating pieces or rear hardware. Modern restrained residential pocket/sliding door, warm white painted door, believable wall and door jamb, warm soft natural daylight, subtle light oak interior beyond. Camera close to the door at a very gentle oblique angle, minimal perspective distortion. Realistic handle-to-door proportions; achieve a large clearly resolved handle by close camera framing, not oversized hardware. Handle fully embedded flush in door, crisp metal edges and contact boundary, no anomalous gaps. Compose for a cover: quiet softly lit warm-white upper half with no important objects, handle as hero at horizontal 62 percent and vertical 70 percent of frame, its complete height roughly 24 percent of frame; residential doorway context visible at sides and bottom but visually subordinate. High quality natural material detail, tasteful editorial architecture photography, no exploded view, no cutaway, no diagrams. No text of any language, no brand lettering even on handle. This is an illustrative installation scene, not a documentary product installation photograph.

생성 이미지 실제 해상도: 941×1672. 최종 1080×1920 Cover 원본은 미제작.
