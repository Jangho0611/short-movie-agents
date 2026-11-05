# Scene 1 손잡이 유형 공통 구도 기준 v1

사용자 승인 전 후보. Canonical Reference 미등록.

## 생성과 출력
Codex 내장 image_gen 정확히1회/후보1장. 재시도·추가종류·업스케일0회. 비용/크레딧은 도구 미제공으로 확인 불가.
원본 public/assets/images/scene01-handle-types-base-v1.png: 941×1672. 생성 파일을 변경 없이 복사. 1080×1920 네이티브 생성이라고 보고하지 않음.
모바일 public/assets/images/scene01-handle-types-base-mobile-v1.png: 360×640 Lanczos 축소, 비생성 검토본.
Cover v2는 분위기 참고로만 사용. 한글·간판·로고·브러시·라벨 생성 없음.

## 구도와 대략적 좌표
원본 픽셀에서 손잡이 외곽 약 x490–628,y729–1273, 중심 약(559,1001). 화면 약59.4%,59.9%.
문짝 앞면은 x0–653, 오른쪽 끝단은 약x653–701. 끝단 너비 약48px, 모바일 약18px. 뒤 주거공간과 끝단 구분 가능.
향후1080×1920 대응 중심 약(642,1150). 화면상 투영 좌표이지 실제 치수/타공 규격 아님.
원형·잠금형은 현재 앞면 설치 부근의 여유를 활용할 수 있음. 엣지풀은 오른쪽 끝단, 대략 같은 높이에 별도 표시해야 하며 앞면 중심에 억지로 맞추지 않음.

## 직접 시각 QA
생성 원본과360×640 검토본을 열어 확인.
PASS: 자연광·웜화이트 도어·주거공간 분위기, 앞면과 끝단 구분, 세로형 매립손잡이 식별, 금속 테두리·오목면·세로 요철, 자연스러운 접촉 경계. 명백한 추가 구멍/떠 있는 부품/텍스트·로고 오류 미관찰.
PASS: 모바일에서도 손잡이와 끝단 식별. 상단 약1/3은 향후 자막용 낮은 복잡도의 여백 확보.
WARN: 손잡이 크기의 현실성은 시각상 판단이며 실측 자료 없음. 실제 SH30NI 또는 제조사 설치 사례가 아님.
WARN: 슬라이딩 도어를 의도한 열린 문짝 구도지만 사진에 레일/포켓 내부가 없어 실제 작동 방식 검증은 불가.
WARN: 끝단은 모바일18px 정도여서 작은 엣지풀 디테일의 가독성은 향후 해당 후보 제작 후 검토 필요. 현재 상태에서 후속3종의 구도 일치나 식별성 PASS를 보장하지 않음.
WARN: 생성 해상도941×1672이며1080×1920보다 작음. 자동업스케일 미실행. 금속 경계와 오목면은 현재 원본/축소본에서 읽힘.
실제 아이폰 Dynamic Island/노치/Shorts/Reels/Clip UI QA 미확인. 향후 자막 실제 바운딩박스 검사 필요. 상단 여백만으로 모든 플랫폼 안전을 보장하지 않음.

## 후속 계획 — 미실행
승인 후 동일한 문짝·카메라·배경·조명 참조를 유지해 원형/엣지풀/잠금형을 개별 제작 검토. 유형별 설치 방식·타공은 동일하다고 암시하지 않음. 엣지풀은 끝단 위치 사용.
4.90초147프레임 내 세로형→원형→엣지풀→잠금형→기존SH30NI외관의 하드컷 방향만 유지. 실제 타이밍·영상·효과음 작업 없음. 기존SH30NI외관 복귀는 구도 차이에 따른 점프가 있을 수 있어 추후 연결 QA 필요.

## 보존 및 승인
기존 Scene1~5/TTS/Cover/엔딩/가이드 변경 없음. 이미지2개와 이 기록만 신규 작성. Git 작업 없음.
사용자 승인 항목: 공통 구도·손잡이 크기와 위치·끝단 가시성·생성 해상도. 승인 전 후속3종·모션 제작 금지.

## 실제 생성 프롬프트
Use case: photorealistic-natural. Generate ONE portrait 9:16 high-resolution architectural photograph for a 1080x1920 vertical video. Input reference is MOOD ONLY: warm residential natural light, warm white door, restrained light oak interior. NEVER copy any reference lettering, logo, sign, yellow graphic or typography. New composition: a partially open warm-white residential sliding/pocket door, nearly frontal gentle three-quarter view. Crucial: clearly show BOTH broad front face and the narrow vertical leading END FACE of this same door, with visible realistic door thickness and open air beyond it, not a wall trim masquerading as an edge. Camera fixed at handle height, mild angle and minimal distortion. One long vertical brushed nickel recessed pull on front face close to the leading edge, realistic proportions, crisp metal flange and recessed inner depth, seamless flush contact, no floating parts or extra holes. Handle center around x55%, y59%, height around23% of frame, large and legible. Door leading end face around x69%, visibly wide enough for a later edge-pull variant but NO edge-pull now. Leave clean front face around handle for later circular or locking recessed variants; these are future edits, DO NOT depict them now. Quiet upper third for future captions, no text now. Soft warm daylight, natural fine painted surface texture, gentle contact shadows, elegant restrained modern residential background subordinate to door. No hinges or swing-door motion cues, no exaggerated perspective, no collage, no labels, no measurements, no arrows, no hardware diagram, no branding. This is a conceptual installation scene, not an exact SH30NI product photo. Deliver one image only.
