# Scene 1 손잡이 기준 이미지 v2 QA

사용자 시각 승인 대기. 후속 3종 및 모션 미제작.

## 실행
Codex 내장 image_gen 참조 편집 1회, 후보1장. 재시도/업스케일/기타손잡이생성0회. 실제 비용·크레딧은 도구 미제공으로 확인 불가.
입력 public/assets/images/scene01-handle-types-base-v1.png (941×1672).
출력 public/assets/images/scene01-handle-types-base-v2.png (941×1671), 생성 원본 그대로 복사. 높이1px 차이 약0.06%로 완전 동일 해상도/비율 아님. 임의 보정하지 않음.
모바일 scene01-handle-types-base-mobile-v2.png (360×640), 비교 scene01-handle-types-base-compare-v2.png (720×640, 왼쪽v1/오른쪽v2). 축소만 수행.

## 직접 시각 QA
원본 v1, 편집 출력,360×640 나란히 비교를 직접 확인.
PASS: 창·가구·화병·식물·러그와 강한 배경 명암 제거. 조용한 뉴트럴 벽·바닥·걸레받이로 실제 공간감 유지. 도어와 배경 구분, 손잡이 중심의 시선 집중 개선.
PASS(시각상): 기존 문짝 앞면/오른쪽 끝단/손잡이의 대략적 위치·구도 유지. 금속 테두리·오목면·세로 요철 식별. 명백한 추가 구멍·부품·문구·로고 없음. 뚜렷한 배경 편집 경계 파손 미관찰.
WARN: 문짝 질감과 금속 표면의 미세한 톤/디테일이 원본과 다름. 픽셀 동일 보존이 아니며 문짝·손잡이 완전 무변경 항목은 PASS 아님. 큰 형상 변형은 관찰되지 않았지만 세부 형상까지 정확히 동일하다고 확정하지 않음.
WARN: 원본비율 유지 항목은 출력 높이1px 차이로 엄밀한 동일성 미충족.
손잡이 외곽 대략 x490–628,y729–1272, 중심(559,1000.5). 오른쪽 끝단 약x653–701, 폭48px/모바일약18px. 실측치가 아닌 이미지상 근사 좌표.
PASS:360×640에서 손잡이와 앞면/끝단 읽힘. 상단 낮은 복잡도의 여백 유지.
WARN: 작은 엣지풀의 향후 모바일 식별성은 아직 검증 불가. 앞면이 아니라 오른쪽 끝단에 배치해야 하며 유형별 타공 동일성 암시 금지.
실제 아이폰 Dynamic Island/노치/플랫폼 UI QA 미확인. 향후 자막 전체 바운딩박스와 실제 기기 검증 필요. 여백 확보만으로 안전 PASS 선언하지 않음.

## 후속 사용 조건
최신 통합 실행 지침의 모바일 안전 원칙과 문도사 디자인 기준은 동일. 이번에는 텍스트/브랜드를 생성하지 않음.
이 후보를 새 공통 기준으로 사용자 승인하면 후속3종에서 동일 구도 참조 가능. 자동으로 Canonical 등록하거나 후속 제작하지 않음. v1과v2를 섞어 전환할 경우 미세 질감 차이가 보일 수 있으므로 향후 선택된 한 기준을 사용해야 함.
승인 요청: 배경 단순화 결과, 미세 표면 변화 허용 여부, 끝단 가시성과 기준 구도 채택 여부.

## 보존
기존 v1/Scene1~5/TTS/Cover/엔딩/공통가이드 변경 없음. 생성 원본 복사와 축소·비교3개 이미지 및 본 QA만 작성. Git/SNS/영상렌더 미실행. public/references 저장 없음.

## 실제 편집 프롬프트
EDIT the attached image, ONE output only. Preserve the exact pocket door, recessed handle, camera perspective, door position, lighting direction, and overall composition of the reference image. Simplify ONLY the surrounding interior background visible to the RIGHT of the door's leading edge (roughly x > 74.5% of the image). Remove the window, cabinet, vase, plant, rug, distracting furniture, decorations, complex room details, strong background contrasts and floor patterns. Replace that background with a minimal warm-neutral real architectural setting: quiet warm-white wall and subtle pale floor junction, soft natural light and subtle realistic depth, no furniture or objects. Do not make a flat graphic background. Keep the door and recessed handle the clear visual focal point. CRITICAL: do not repaint, regenerate, reshape, resize, move or recolor the door front, narrow right end face, or handle. Preserve all existing metal flange geometry, recessed cavity, vertical ribs, small details, exact installation position and door surface texture. The door including its visible narrow end face occupies approximately x0-74.5%; keep it intact. Preserve image aspect ratio and framing. No text, logos, labels, graphics, extra hardware, new holes. No upscale. This is a precise background edit, not a new composition.
