# Scene 1 마감 전 v3 QA — 2026-11-05

## 제작
- built-in image_gen edit 1회. 실제 입력: public/assets/images/scene01-before-ai-v2-candidate.png. 텍스트 단독 신규 생성 아님.
- 결과: public/assets/images/scene01-before-ai-v3-candidate.png.
- 비교: public/assets/images/scene01-before-v2-v3-comparison.png (왼쪽 v2, 오른쪽 v3, 각 360×640).
- 기존 파일 보존. 마감 후/영상/TTS/엔딩/Scene2~4 작업 없음.

## 시각 QA
1. 맞물림: 부분 개선. 롤러 아래 연속 금속 턱이 생겨 지지 관계가 이전보다 읽힘.
2. 부유/관통: 명백한 공중 부유 인상은 줄었으나 가려진 접촉면과 브래킷 통과 간극은 확인 불가. 완전 PASS 아님.
3. 호차 일관성: 두 호차가 같은 방식으로 표현되고 원근에 따른 높이 차이는 자연스러움. 정밀 치수 동일성 미검증.
4. 문짝 연결: 두 금속 브래킷이 문짝 상단에 연속 연결되어 보임.
5. 재질/조명: 알루미늄 반사, 검은 롤러, 문짝 표면 및 부드러운 조명 대체로 유지.
6. 배경/구도: 육안상 천장, 문짝 경계와 원근, 상단 여백 유지. 픽셀 단위 불변 보장 아님.
7. 추가 구조: 하부 주행 턱/채널이 길게 추가됨. 요청한 접촉 관계 수정에 관련되지만 국소 두 부위만의 변경은 아님. 댐퍼/추가 호차는 보이지 않음.
8. 모바일: 360×640 축소에서 철물과 연결부 식별 가능. 실제 기기/플랫폼 UI QA 미실시.

## 결론
시각적 지지 관계 부분 개선, 사용자 조건부 검토용. 실제 제조사 구조/하중 지지/시공 가능성 검증 아님. 하부 턱을 일반 구조 예시로 수용할지 시각 승인 필요. 추가 생성 미실행.

## 사용 프롬프트
Use case: precise-object-edit. EDIT the supplied v2 image, do not recreate from text. ONE candidate only. Local correction only in the two rail/black-roller contact regions: make both black roller hanger carriages visibly seated and supported in the aluminium rail running channel, with coherent overlap/occlusion and contact shadows so the wheels do not appear suspended below a disconnected bar. The running lip must visibly support the lower circumference of the wheels; simplify concealed internals. Both hangers must have consistent construction and perspective-relative height and retain continuous metal brackets connected to the existing door top. Do not add bearings, dampers, elaborate mechanics, extra hangers or unrelated components. Generic explanatory concept, not a manufacturer's verified mechanism. LOCK everything else: exact camera, perspective, crop, rail extending beyond both edges, door position/shape/thickness/texture, warm-white ceiling and wall, existing header depth, upper caption whitespace, lighting, aluminium brushed reflections, black nonmetal wheel versus metal bracket materials. No overall redesign, no new text labels logos arrows or dimensions. Preserve original portrait aspect ratio and original image dimensions if possible. Output just the edited single image.

