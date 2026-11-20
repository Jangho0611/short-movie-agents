# Scene 3 신규 구도 v1 QA — 2026-11-06

## 자산 및 생성
현재 프로젝트 images/references 제한 확인. 기존 생성후보/QA/텍스처만 확인, 새 실내구도에 적합한 실제 사진 및 Canonical 미발견. built-in image_gen 1회 신규 생성, 기존 실패본/마감전이미지를 Reference로 입력하지 않음.
결과 public/assets/images/scene03-finished-door-ai-v1-candidate.png 941×1672. 원본크기 보존,추가생성/영상렌더 없음.
비교 public/assets/images/scene03-new-composition-v1-qa.png: Scene1/Scene2A/Scene2B/신규Scene3 순서.

## 시각 QA
1. 노출철물/클로즈업과 다른 실내 중거리 구도 확보.
2. 열린 개구부,매입손잡이,문짝 선단 두께,바닥 간격으로 슬라이딩문 인식 가능. 고정벽 인상 감소.
3. 문짝은 벽체와 평행하게 개구부 일부를 가림. 실제 이동거리/기계주행은 미검증.
4. 천장/상부벽이 연속된 마감으로 읽힘, 별도 큰 덧댐판 없음. 실제 천장 매립인지 벽상부 헤더인지 정확한 시공분류는 이미지로 확정불가.
5. 상부 얇은 음영은 유지. 내부레일/호차/슬롯 상세는 보이지 않으며 구조적정확성 검증 안함.
6. 임의점검구/분해화살표/추가철물/브랜드표시 없음. 향후 점검교체 질문그래픽 배경으로 조건부 적합.
7. 상단 빈공간 있음. 문상단이 상단약27~33%에 있어 텍스트 안전영역과 분리설계 필요. 비교 축소270px에서도 문/개구부 식별,실기기UI 미검증.
8. 베이지/웜화이트 분위기 일치,새 자연광 공간은 기존철물사진보다 밝음. 동일현장/제품의 마감후라고 표현하면 안됨.
9. 열린방 커튼/바닥에 자연광 있음. 큰가구/장식 없음.

사용자 시각승인 필요. Scene1/2/3기존파일/TTS/엔딩 변경없음. Scene4/전체영상/Git 작업없음.

## 사용 프롬프트
Use case: photorealistic-natural. Create ONE new portrait 9:16 architectural photograph, ideally1080x1920. A modern warm-white interior with ONE partially open overhead sliding interior door, photographed at medium distance from a gentle three-quarter angle. This is a finished architectural space, not a hardware closeup. Clearly show a real doorway opening into a quiet adjoining room; the matte warm ivory door leaf has slid sideways halfway across the opening, overlapping the adjacent wall, with visible thickness, leading vertical edge, small recessed finger pull, and a small realistic floor clearance. It must unmistakably read as a movable sliding door, not a fixed wall panel. The leaf stays parallel to the wall, no swing angle or hinges. Concealed overhead track and rollers hidden behind a seamlessly finished integrated ceiling/header, no exposed metal rails. Door top subtly enters a plausible narrow concealed head recess, with soft depth shadows, not glued to ceiling. No separate oversized fascia board, no arbitrary inspection hatch or removable-panel seams, no hardware disassembly or arrows. Show doorway jamb, open passage, door side edge and clear adjacent wall area that makes horizontal sliding travel understandable without diagrams. Whole leaf and surrounding architecture visible, door/head junction around upper-middle of frame; leave calm upper 20% ceiling/wall for future text and bottom 12% noncritical floor. Warmwhite plaster and neutral beige, restrained natural daylight, authentic subtle material texture and soft shadows, ordinary premium interior photography, no glossy CGI, no dramatic lighting, no people, minimal furniture preferably none. Preserve clean uncluttered focus on finished door and ceiling relationship. No text, labels, logos, watermark, diagram, inset, dimensions. Generic visual concept not any manufacturer product or validated construction. Generate one image only.
