# DESIGN.md 스타일 라이브러리

건축자재 Shorts의 콘텐츠 성격에 맞는 시각 언어를 선택하기 위한 reference 모음이다. 각 `DESIGN.md`는 getdesign.md가 공개 웹사이트의 관찰 가능한 패턴을 독립적으로 분석한 자료이며, Figma·Notion·Linear·Framer가 발행하거나 승인한 공식 디자인 문서가 아니다.

원문은 reference로 보존한다. 브랜드 화면을 그대로 복제하지 않고 레이아웃, 타이포그래피, 색의 역할, 시각적 위계와 모션 원칙만 건축자재 콘텐츠에 맞게 해석한다. 저장소의 [건축자재 AI 이미지 품목별 프롬프트 가이드](../건축자재_AI이미지_품목별_프롬프트_가이드.md)가 항상 상위 규칙이다.

`DESIGN.md`는 제품 외형의 Source of Truth가 아니다. 실제 제품 표현은 [`references/` canonical library](../../references/README.md)를 우선한다.

## 출처 메타데이터

| 이름 | 로컬 원문 | source URL | 확보일 | 용도 |
|---|---|---|---|---|
| Figma | [figma/DESIGN.md](./figma/DESIGN.md) | https://getdesign.md/figma/design-md | 2026-08-20 | 친근한 설명, 컬러 블록, editorial layout 참고 |
| Notion | [notion/DESIGN.md](./notion/DESIGN.md) | https://getdesign.md/notion/design-md | 2026-08-20 | 차분한 실사 정보, 여백, 절제된 화면 참고 |
| Linear | [linear/DESIGN.md](./linear/DESIGN.md) | https://getdesign.md/linear.app/design-md | 2026-08-20 | 수치·성능·구조 비교의 정밀한 위계 참고 |
| Framer | [framer/DESIGN.md](./framer/DESIGN.md) | https://getdesign.md/framer/design-md | 2026-08-20 | 변화·훅·모션 중심 Scene의 리듬 참고 |

확보에는 getdesign.md가 안내하는 CLI의 `--out` 옵션을 사용했으며, Linear의 확인된 slug는 `linear.app`이다. 네 파일은 원문을 수정하지 않고 저장했다.

## Shorts용 스타일 선택 매트릭스

| 스타일 | 추천 콘텐츠 | 원문에서 확인한 핵심 특성 | Shorts 적용 | 주의 |
|---|---|---|---|---|
| **Figma** | 친근한 제품 설명, 소비자 정보, 자재 기본 개념, 캐릭터 혼합, 쉬운 비교 | 흑백 editorial frame, 넓은 여백, vibrant pastel color block, playful yet professional | 한 Scene 한 pastel accent, 큰 검정 타이포, 캐릭터+실사 제품, 설명형 composition | 브랜드 UI나 전용 폰트를 복제하지 않는다. 제품 정확도가 컬러보다 우선이다. |
| **Notion** | 실사 제품, 시공 주의사항, 전문 설명, 신뢰가 중요한 콘텐츠 | warm paper-calm minimalism, off-white/soft surface, 조용한 chrome, 절제된 typography | off-white·beige, 넓은 여백, 실사 제품을 크게, 장식 최소화 | 원문에는 컬러 스티커 accent도 있으나 Shorts에서는 신뢰감과 실사 제품을 우선한다. |
| **Linear** | 수치·성능 비교, 열전도율, 밀도, 규격, 구조, 기술 정보 | ultra-minimal dark canvas, precise alignment, hairline border, 단일 lavender-blue accent, product-focused hierarchy | 얇은 divider, 정밀 alignment, 한 가지 강조색, 수치·그래프·비교 Scene | SaaS UI와 dark theme를 그대로 복사하지 않는다. 기술적 명료성만 가져온다. |
| **Framer** | Flow/Veo Scene, 시공 과정, Before/After, 변화 중심 콘텐츠, 첫 3초 훅 | dark artboard, bold composition, motion-first rhythm, 큰 display type, gradient spotlight | transition rhythm, motion hierarchy, 큰 visual change, 동적 Scene | 검정·블루·gradient를 강제하지 않고 모션 문법과 위계를 우선 참고한다. |

매트릭스 항목 수는 4개다.

## 자동 선택 규칙

새 Shorts 기획 시 GPT/Codex는 먼저 콘텐츠 유형을 판정한 뒤 가장 적합한 reference를 선택한다.

- 제품 설명 / 친근한 정보 → **Figma**
- 실사 / 전문 설명 → **Notion**
- 수치 / 성능 / 기술 비교 → **Linear**
- 시공 / 변화 / 모션 훅 → **Framer**

한 영상 전체를 하나로 고정할 필요는 없다. 예를 들어 전체 톤은 Notion으로 유지하고 성능 비교 Scene만 Linear의 정렬·divider·강조색 원칙을 쓸 수 있다. 단, 한 Scene 안에서는 서로 다른 디자인 문법을 과도하게 섞지 않는다.

적용 우선순위는 다음과 같다.

1. 공통 Visual Grammar
2. 선택한 `DESIGN.md`의 참고 가능한 원칙
3. 해당 Scene의 실제 제품·콘텐츠 요구사항

충돌할 때는 상위 규칙을 따른다. `DESIGN.md`의 웹 UI용 수치, 브랜드 색, 전용 폰트, 컴포넌트 구현은 Shorts에 자동 적용하지 않는다.

## 사용 절차

1. 콘텐츠 유형과 Scene 목적을 판정한다.
2. 위 매트릭스에서 기본 스타일을 선택한다.
3. 해당 원문에서 레이아웃·타이포·색의 역할·모션 원칙만 읽는다.
4. Visual Grammar와 실제 제품 reference로 정확성을 다시 제한한다.
5. 기준 이미지와 Preview에서 제품 정확성, 가독성, 한 Scene 한 문법을 QA한다.
