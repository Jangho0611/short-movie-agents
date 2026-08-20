# DESIGN.md 스타일 라이브러리

건축자재 Shorts의 콘텐츠 성격에 맞는 시각 언어를 선택하기 위한 10종 reference 모음이다. 각 `DESIGN.md`는 getdesign.md가 공개 웹사이트의 관찰 가능한 패턴을 독립적으로 분석한 자료이며, 해당 브랜드가 발행하거나 승인한 공식 디자인 문서가 아니다.

원문은 reference로 보존한다. 브랜드 화면을 그대로 복제하지 않고 레이아웃, 타이포그래피, 색의 역할, 시각적 위계와 모션 원칙만 건축자재 콘텐츠에 맞게 해석한다. 저장소의 [건축자재 AI 이미지 품목별 프롬프트 가이드](../건축자재_AI이미지_품목별_프롬프트_가이드.md)가 항상 상위 규칙이다.

`DESIGN.md`는 제품 외형의 Source of Truth가 아니다. 실제 제품 표현은 [`references/` canonical library](../../references/README.md)를 우선한다.

## 출처 메타데이터

| 이름 | 로컬 원문 | source URL | 확보일 | 용도 | SHA-256 |
|---|---|---|---|---|---|
| Figma | [figma/DESIGN.md](./figma/DESIGN.md) | https://getdesign.md/figma/design-md | 2026-08-20 | 친근한 설명, 컬러 블록, editorial layout 참고 | `716ce8431f47eb8b8135552710e3c4d538bccccf1202e4ceac5428c9aada9972` |
| Notion | [notion/DESIGN.md](./notion/DESIGN.md) | https://getdesign.md/notion/design-md | 2026-08-20 | 차분한 실사 정보, 여백, 절제된 화면 참고 | `6dd125ef080ed34f063fe8cd7b274359125aaab57bba4570b60423314951cd48` |
| Linear | [linear/DESIGN.md](./linear/DESIGN.md) | https://getdesign.md/linear.app/design-md | 2026-08-20 | 수치·성능·구조 비교의 정밀한 위계 참고 | `30bd30e72c48a16e4bdbd010f2d1c85fab657c6fae3cc85389399aab10f9cb5f` |
| Framer | [framer/DESIGN.md](./framer/DESIGN.md) | https://getdesign.md/framer/design-md | 2026-08-20 | 변화·훅·모션 중심 Scene의 리듬 참고 | `a5d47dddacf5a04577cec0be6fe0fc53b7402254c7686874af3e59bcc7588cb4` |
| Apple | [apple/DESIGN.md](./apple/DESIGN.md) | https://getdesign.md/apple/design-md | 2026-08-20 | 프리미엄 제품, 단일 Hero 제품, 절제된 위계 참고 | `83fbc614443a9b3d7569e9956a43e7b8740f9d0f939f58b8154f7a7cec3002b2` |
| Airbnb | [airbnb/DESIGN.md](./airbnb/DESIGN.md) | https://getdesign.md/airbnb/design-md | 2026-08-20 | 공간·인테리어·적용 사례의 사진 중심 구성 참고 | `add34130d67209ad105346d60fe2b290728b9711683969db4b7760e29477a5fe` |
| NVIDIA | [nvidia/DESIGN.md](./nvidia/DESIGN.md) | https://getdesign.md/nvidia/design-md | 2026-08-20 | 강한 기술·성능·숫자의 대비와 위계 참고 | `d649be85daf075c98a17071e707e3901c6e19150044a81716acd01ef1169cc83` |
| Stripe | [stripe/DESIGN.md](./stripe/DESIGN.md) | https://getdesign.md/stripe/design-md | 2026-08-20 | 세련된 프리미엄 정보·비교의 구조와 여백 참고 | `91d47137698936f1b6ea66aa12cc9dfa412c2ef39adfad4e75bd276555cd8ee1` |
| Spotify | [spotify/DESIGN.md](./spotify/DESIGN.md) | https://getdesign.md/spotify/design-md | 2026-08-20 | 가격·속보·주간 업데이트의 강한 훅 참고 | `72e964a6cf551d0603f9854f2f42ee08e97ad4d9e17e037f50f6233508288295` |
| Shopify | [shopify/DESIGN.md](./shopify/DESIGN.md) | https://getdesign.md/shopify/design-md | 2026-08-20 | 상품·규격·가격·구매정보의 명료한 구조 참고 | `bcf85df8bbee93a045647c2dd42ed551c0aebaed8e81bc5aece5a50fb8da03c8` |

확보에는 getdesign.md가 안내하는 CLI의 `--out` 옵션을 사용했으며, Linear의 확인된 slug는 `linear.app`이다. 10개 파일은 원문을 수정하지 않고 저장했다. 모두 getdesign.md의 독립 분석 자료이며 공식 브랜드 디자인 가이드가 아니다.

## Shorts용 스타일 선택 매트릭스

| 스타일 | 추천 콘텐츠 | 원문에서 확인한 핵심 특성 | Shorts 적용 | 주의 |
|---|---|---|---|---|
| **Figma** | 친근한 제품 설명, 소비자 정보, 자재 기본 개념, 캐릭터 혼합, 쉬운 비교 | 흑백 editorial frame, 넓은 여백, vibrant pastel color block, playful yet professional | 한 Scene 한 pastel accent, 큰 검정 타이포, 캐릭터+실사 제품, 설명형 composition | 브랜드 UI나 전용 폰트를 복제하지 않는다. 제품 정확도가 컬러보다 우선이다. |
| **Notion** | 실사 제품, 시공 주의사항, 전문 설명, 신뢰가 중요한 콘텐츠 | warm paper-calm minimalism, off-white/soft surface, 조용한 chrome, 절제된 typography | off-white·beige, 넓은 여백, 실사 제품을 크게, 장식 최소화 | 원문에는 컬러 스티커 accent도 있으나 Shorts에서는 신뢰감과 실사 제품을 우선한다. |
| **Linear** | 수치·성능 비교, 열전도율, 밀도, 규격, 구조, 기술 정보 | ultra-minimal dark canvas, precise alignment, hairline border, 단일 lavender-blue accent, product-focused hierarchy | 얇은 divider, 정밀 alignment, 한 가지 강조색, 수치·그래프·비교 Scene | SaaS UI와 dark theme를 그대로 복사하지 않는다. 기술적 명료성만 가져온다. |
| **Framer** | Flow/Veo Scene, 시공 과정, Before/After, 변화 중심 콘텐츠, 첫 3초 훅 | dark artboard, bold composition, motion-first rhythm, 큰 display type, gradient spotlight | transition rhythm, motion hierarchy, 큰 visual change, 동적 Scene | 검정·블루·gradient를 강제하지 않고 모션 문법과 위계를 우선 참고한다. |
| **Apple** | 프리미엄 건축자재, 신제품, 고급 창호·단열재, 단일 Hero 제품 | photography-first, 넓은 여백, 큰 제품 이미지, 절제된 typography, 강한 hierarchy | 정보량을 줄이고 실제 제품 하나를 화면의 주인공으로 배치 | Apple UI·제품 페이지·전용 폰트를 복제하지 않는다. |
| **Airbnb** | 인테리어 공간, 실제 시공 공간, Before/After, 주거 적용 사례 | clean white canvas, photography-driven layout, generous whitespace, soft rounding, warm accent | 실제 공간 사진을 우선하고 자재가 생활 공간에서 쓰이는 맥락을 보여준다. | rounded UI를 과도하게 복제하거나 실제 공간보다 장식을 앞세우지 않는다. |
| **NVIDIA** | 열전도율·밀도·등급·성능·수치 비교, 신기술 제품 | black/white surface, saturated single accent, angular grid, tight bold type, hairline divider | 큰 숫자, 강한 대비, 구조적인 성능 hierarchy | 게이밍·그래픽카드 느낌을 복제하지 않는다. Linear보다 강한 기술적 긴장감이 필요할 때 쓴다. |
| **Stripe** | 프리미엄 비교, 복잡한 정보 정리, 신제품, 제품 차별점 | deep ink, thin editorial display, generous space, elegant sectioning, atmospheric accent | 제품과 정보를 균형 있게 두고 여백·타이포·섹션 구조를 우선 차용 | gradient는 Visual Grammar보다 우선하지 않으며 필요할 때만 제한적으로 쓴다. |
| **Spotify** | 가격, 속보, 주간 업데이트, 상승·하락, 첫 2~3초 훅 | content-first dark surface, bold type, strong contrast, singular green accent, pill geometry | 큰 숫자와 짧은 문구로 빠른 정보 전달 | 매 영상의 기본 스타일로 쓰지 않고 가격·속보·업데이트 성격일 때 우선한다. |
| **Shopify** | 상품 소개, 규격별 가격, 품목 리스트, 대량구매·납품·판매 조건 | product narrative, cinematic/light dual canvas, large type, pricing hierarchy, pill vocabulary | 상품·규격·가격·구매 정보를 명료한 계층으로 정리 | 웹 쇼핑몰 UI처럼 보이지 않게 하고 정보 구조만 참고한다. |

매트릭스 항목 수는 10개다.

## 자동 선택 규칙

새 Shorts 기획 시 GPT/Codex는 다음 순서로 가장 적합한 reference를 선택한다.

1. 콘텐츠 유형을 판정한다.
2. 10개 `DESIGN.md` 중 1차 후보를 선택한다.
3. 해당 품목의 Canonical Product Reference를 확인한다.
4. 공통 Visual Grammar를 적용한다.
5. 선택한 `DESIGN.md`의 시각 문법을 반영한다.

- 제품 설명 / 친근한 정보 → **Figma**
- 실사 / 전문 설명 → **Notion**
- 수치 / 성능 / 기술 비교 → **Linear**
- 시공 / 변화 / 모션 훅 → **Framer**
- 프리미엄 제품 / 단일 Hero 제품 → **Apple**
- 공간 / 인테리어 / 적용 사례 → **Airbnb**
- 강한 기술 / 성능 / 숫자 → **NVIDIA**
- 세련된 프리미엄 정보 / 비교 → **Stripe**
- 가격 / 속보 / 주간 업데이트 / 강한 훅 → **Spotify**
- 상품 / 규격 / 가격 / 구매정보 → **Shopify**

한 영상 전체를 하나로 고정할 필요는 없다. 예를 들어 제품 설명은 Notion, 성능 비교는 Linear, 가격 Scene은 Spotify, 시공 변화는 Framer를 쓸 수 있다. 단, 한 Scene 안에서는 서로 다른 디자인 문법을 과도하게 섞지 않고 전체 영상의 font family, 기본 여백, 제품 representation, 브랜드 엔딩은 통일한다.

두 디자인이 모두 적합하면 핵심 정보에 더 직접적인 스타일을 선택한다. 같은 역할이 겹치면 더 단순한 디자인을 먼저 선택하고, 최근 영상에서 같은 스타일을 반복했다면 대체 가능한 스타일을 검토한다.

적용 우선순위는 다음과 같다.

1. 실제 제품 Canonical Reference
2. 공통 Visual Grammar
3. 콘텐츠별 선택 `DESIGN.md`
4. Scene 개별 요구사항

충돌할 때는 상위 규칙을 따른다. `DESIGN.md`의 웹 UI용 수치, 브랜드 색, 전용 폰트, 컴포넌트 구현은 Shorts에 자동 적용하지 않는다.

## 사용 절차

1. 콘텐츠 유형과 Scene 목적을 판정한다.
2. 위 매트릭스에서 기본 스타일을 선택한다.
3. 해당 원문에서 레이아웃·타이포·색의 역할·모션 원칙만 읽는다.
4. Visual Grammar와 실제 제품 reference로 정확성을 다시 제한한다.
5. 기준 이미지와 Preview에서 제품 정확성, 가독성, 한 Scene 한 문법을 QA한다.

## 디자인 라이브러리 유지 규칙

- 실제 Shorts 제작에 쓸 가능성이 높은 디자인만 추가하고 무작정 늘리지 않는다.
- 신규 스타일은 최소 1개 영상에서 테스트한다.
- 반복 활용 가치가 없으면 삭제 후보로 분류하고, 삭제 시 source와 변경 이력을 기록한다.
- 같은 역할의 디자인이 지나치게 많아지지 않게 관리한다.
- 기본 권장 라이브러리 규모는 10~15종이다.
- 실제 사용 후기와 실패 사례를 이 README에 계속 반영한다.
