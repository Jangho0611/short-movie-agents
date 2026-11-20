# Scene 1 마감 후 v1 QA — 2026-11-05

## 제작 및 파일
- built-in image_gen edit 1회. 실제 Reference: public/assets/images/scene01-before-ai-v3-candidate.png.
- 결과: public/assets/images/scene01-after-ai-v1-candidate.png (941×1672 원본).
- 비교: public/assets/images/scene01-before-v3-after-v1-comparison.png. 왼쪽 마감 전 v3 / 오른쪽 마감 후 v1, 각각360×640.
- 기존 파일 수정 없음. 영상 렌더/Scene2~4/TTS/엔딩/Git 작업 없음.

## 시각 QA
- 노출 철물이 마감면에 가려지는 전후 차이 명확.
- 마감면의 하부 두께와 음영이 있어 단순 화면 사각형보다 건축 마감면으로 읽힘.
- 문짝 상단 위치, 측면 두께와 표면은 육안상 대체로 유지. 픽셀 동일성은 보장하지 않음.
- 천장 상부 경계는 대체로 같은 위치를 따름. 다만 새 마감면 하단 기울기가 상단 경계와 달라 띠 폭이 오른쪽으로 좁아 보임. 정확한 동일 평면/원근 보존 PASS 아님; 사용자 시각 검토 필요.
- 상단 여백, 웜화이트 색감, 조명 방향은 대체로 유지. 마감면 추가로 내부 그림자는 달라짐.
- 문짝 위 그림자 간격이 남아 마감면에 매립되거나 붙은 모습은 아님. 실제 주행 간섭/간극 적합성 검증 불가.
- 가려진 레일/호차의 위치는 정지 이미지에서 검증 불가. 프롬프트에 위치 고정 명시했지만 실제 유지 검증을 대신하지 않음.
- 모바일360px 비교에서 상태 차이는 식별 가능. 실제 기기 UI QA 미실시.

## 판정
일반 구조 예시의 사용자 시각 검토 후보. 하단 마감선 원근과 문짝 간격 표현은 조건부. 제조사 구조/시공/실제 주행 검증 아님. 반복 생성 없이 1장으로 중단. 사용자 승인 전 후속 제작 없음.

## 사용 프롬프트
Use case: precise-object-edit. Edit the supplied approved BEFORE image into ONE AFTER ceiling-finishing image. This exact image is the edit target, not merely style inspiration. Change ONLY the exposed header recess region by completing a physically dimensional warm-white architectural fascia/soffit continuous with the existing ceiling and side wall, concealing the existing aluminium rail, black rollers and hanger hardware behind it. Retain all hidden hardware in its original conceptual position; do not relocate or redesign it. Fascia has plausible thin thickness, a softly shaded underside and natural contact shadows in the existing perspective; not a flat pasted rectangle. It hides hardware while leaving a visible natural shadow clearance above the ORIGINAL door top so the door does not appear jammed or embedded. Do not lower, raise, enlarge, crop, move or redesign the door. LOCK exact camera, perspective, framing, all door edges/top height/thickness/surface, all wall and ceiling areas outside the edited recess, upper empty caption area, warm-white colors, light direction, shadows outside edited region. It must look like two photos from the same locked camera with only finishing state changed. No new hardware or internal mechanics, no people, text, labels, logos, arrows or watermark. Preserve input dimensions/aspect ratio. Generic architectural explanatory concept, not verified installation. Output one edited portrait image only.
