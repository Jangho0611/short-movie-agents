# 대산 Shorts Cover System

- 문서 버전: `v1.3`
- 제정일: `2026-08-21`
- 상태: `운영 기준 / 지속 고도화`
- 역할: `Shorts / Reels / Clip 대표이미지의 제작·QA·승인·정리 기준`

## 1. 목적과 역할 분리

대산의 모든 대표이미지를 하나의 고정 템플릿으로 복제하지 않는다. 콘텐츠와 품목에 맞게 구도와 분위기는 바꾸되, 피드 전체에서 같은 시각적 정체성이 느껴지도록 공통 문법을 유지한다.

> 통일성은 템플릿 복제가 아니라 시각 문법에서 만든다.

- [Visual Grammar](./건축자재_AI이미지_품목별_프롬프트_가이드.md): 건축자재 이미지 생성의 공통 시각·재질·reference 원칙
- [DESIGN.md 스타일 라이브러리](./design-styles/README.md): 콘텐츠별 디자인 스타일 선택 기준
- **COVER.md**: SNS 대표이미지의 hierarchy, brand lockup, crop, 승인과 정리 규칙
- [Shorts 제작 운영가이드](./Shorts_제작_운영가이드.md): 전체 제작 파이프라인과 문서 연결 허브

## 2. 핵심 Visual Identity 10개

1. 건축자재가 즉시 식별되는 `Hero Product`를 둔다.
2. 모바일에서 즉시 읽히는 강한 핵심 Headline을 사용한다.
3. 정보형 콘텐츠임을 보여주는 작은 Category를 둔다.
4. 대산 Green은 구조 전체가 아니라 제한적인 accent로 사용한다.
5. Headline과 제품이 경쟁하지 않도록 충분한 Negative Space를 확보한다.
6. 실제 제품 물성을 살린 Editorial Product Photography를 우선한다.
7. 하단에는 승인된 DAESAN Brand Lockup을 일관된 위계로 둔다.
8. Instagram profile grid를 포함한 Feed Safe Zone을 검증한다.
9. AI가 생성한 한글, 제품 문자, 대산 로고는 사용하지 않는다.
10. 품목과 콘텐츠 성격에 따라 MAIN / SECONDARY `DESIGN.md`를 선택해 구도와 분위기를 변형한다.

## 3. 기본 Cover Hierarchy

1. Category
2. Main Headline
3. 필요할 때만 Supporting Copy
4. Hero Product
5. DAESAN Brand Lockup

Supporting Copy는 강제하지 않는다. Headline만으로 메시지가 충분하면 생략한다. Headline은 짧은 질문형·문제 제기형을 우선하고 모바일에서 즉시 이해되어야 하며, 기본 2~4줄로 제한한다. 영상 제목 전체를 그대로 복사하지 않는다.

## 4. DAESAN Brand Lockup

기본 구성은 `[승인 대산 심볼] / DAESAN / 대산종합건축자재`다.

- AI로 대산 로고를 생성하지 않는다.
- 각 프로젝트의 실제 엔딩 Scene에서 사용 중인 승인 logo asset을 먼저 확인한다.
- 기억이나 추정으로 다른 로고를 선택하지 않는다.
- 승인 logo의 비율과 색을 바꾸지 않는다.
- `DAESAN`과 `대산종합건축자재`는 정확한 후처리 typography layer로 만든다.
- Brand Lockup은 Headline보다 먼저 보이거나 강해지면 안 된다.
- 하단 좌·중·우 위치는 composition에 따라 바꿀 수 있으나 크기와 시각적 위계는 유사하게 유지한다.
- Brand Lockup은 불투명 흰색 카드 안에 넣지 않는다. 기본은 배경 위에 `[심볼] + DAESAN + 대산종합건축자재`를 직접 배치한다.
- 밝은 배경에서는 대산 Green을 중심으로 사용하고, 어두운 배경에서는 White 또는 충분히 밝은 색을 사용할 수 있다.
- 가독성 문제는 위치, 색과 주변 대비의 최소 보정으로 해결하며 큰 카드·박스를 추가하지 않는다. Brand Lockup은 정보 카드가 아니라 브랜드 서명으로 보이게 한다.

현재 승인 asset 예시는 `public/assets/logos/daesanlogo2.png`다.

## 5. Vertex와 Codex 역할 분리

> Vertex = Visual / Codex = Typography + Brand

**Vertex AI가 담당할 것**

- Hero Product
- Studio Environment
- Lighting과 Shadow
- Composition
- Material visualization

**Codex / 후처리가 담당할 것**

- 한글 Category, Headline, Supporting Copy
- 승인 DAESAN logo와 text lockup
- 정확한 브랜드 컬러
- Feed Safe Zone 조정

AI 이미지 안에 한글, 대산 로고, 가격표, UI를 직접 생성하지 않는다. Vertex 출력은 제품+환경 원본으로 보존하고 텍스트·브랜드 레이어와 분리한다.

## 6. Canonical Reference 운영

Canonical Reference가 있으면 프롬프트 작성 전에 반드시 확인한다. Reference는 제품 형상, 비율, 두께, 표면, 색, 구조와 실제 자재 특성의 Source of Truth다.

Canonical Reference가 최종 Cover Background여야 한다는 뜻은 아니다. 필요하면 Vertex AI로 editorial Hero Product를 재구성할 수 있지만 제품 정체성이 달라지면 FAIL이다. 사진에서 보이는 면이 소비자가 대표적으로 인식하는 제품 면인지도 함께 판단한다.

Cover용 Vertex reference는 제품 identity를 설명하는 대표 2~3장부터 시작한다. 기본 조합은 `전체/사선 + 정면/표면 + 단면`이며, 사진 수가 많다고 항상 더 좋은 결과가 나오는 것은 아니다. Canonical 원본은 수정하지 않고 호출용 축소 copy를 만든다.

이보드 사례에서는 canonical reference 9장(실제 이미지 약 36MB, base64 약 48MB)을 inline으로 전달한 요청에서 이미지 output이 없었다. 대표 3장을 1600×2134로 축소한 copy(총 binary 약 1.63MB, 예상 base64 약 2.18MB)로 구성한 다음 요청에서는 이미지가 정상 생성됐다. 이 사례에서 과도한 inline payload를 가장 유력한 실패 원인으로 기록하되, 단일 사례만으로 모델의 고정 이미지 개수 제한이라고 단정하지 않는다.

## 7. 제품 정확도 QA

AI Hero 생성 뒤 다음을 PASS / WARN / FAIL로 검사한다.

- 제품 종류가 즉시 인지되는가.
- 다른 자재로 오인되지 않는가.
- 실제 비율과 두께인가.
- 실제 표면과 재질인가.
- 휘거나 뒤틀리지 않았는가.
- 요청한 제품 수와 일치하는가.
- 불필요한 AI 문자·로고·스티커가 없는가.
- AI/CGI 느낌이 과하지 않은가.
- 모바일에서 제품 핵심부가 읽히는가.

건축자재에서는 `실제보다 두꺼운 판재`를 고정 QA 항목으로 둔다. 인지에 문제가 없는 경미한 WARN은 승인할 수 있으나 작업 기록에 남기고 다음 프롬프트에서 보완한다.

## 8. DESIGN.md 선택

Cover 시작 시 `MAIN DESIGN / SECONDARY DESIGN`을 먼저 결정한다. 항상 Notion+Apple을 쓰지 않는다.

- 제품 설명·차분한 정보형: Notion
- Premium Hero Product: Apple
- 기술 비교·구조: Figma 또는 Linear
- 강한 Visual Hero: Framer
- 그 밖의 콘텐츠: [선택 매트릭스](./design-styles/README.md)를 따른다.

브랜드 화면 자체를 복제하지 않고 레이아웃, 타이포, 색의 역할과 hierarchy만 적용한다. 실제 제품 정확성과 Visual Grammar가 항상 우선한다.

## 9. Vertex 비용 절약

기본 후보는 1~2장이다. QA 전에 자동 재생성하지 않으며 단순 취향 문제로 후보를 무작정 늘리지 않는다.

`Reference 확인 → Prompt 설계 → 1~2장 생성 → Product QA → 사용자 확인 → 필요한 경우에만 수정`

성공·실패와 관계없이 민감정보를 제외한 response summary를 남길 수 있다. 기록 항목은 candidate count, part type, inlineData 존재 여부, MIME, finishReason, blockReason, usage metadata로 제한한다. raw base64, credential, token, API key는 기록하지 않는다.

## 10. Cover 표준 Workflow 13단계

1. 영상 최종 승인
2. Cover Headline 결정
3. Canonical Reference 확인
4. MAIN / SECONDARY DESIGN 선택
5. Hero Product 생성 필요 여부 판단
6. 필요하면 Vertex AI로 1~2장 생성
7. Product QA
8. Typography / Brand 후처리
9. Feed Safe QA
10. 사용자 Cover 승인
11. 업로드
12. 실패·중간 자산 정리
13. 재사용할 학습 내용 문서화

## 11. Feed Safe와 출력

- 기본 원본: `1080×1920 PNG`, 세로 9:16
- 사용 대상: Instagram Reels / profile grid, YouTube Shorts, Naver Clip
- Headline, Category, Hero Product 핵심부와 Brand Lockup이 크롭에서 지나치게 잘리지 않게 중앙 안전영역을 고려한다.
- 특히 Instagram profile grid 중앙 crop에서 Headline과 Category가 유지되는지 확인한다.
- 필요하면 crop preview를 만들 수 있으나 승인 후 임시 preview는 정리한다.

## 12. Cover와 Video Hook의 분리

Cover는 영상 Scene과 별도 자산으로 관리한다. 대표이미지를 위해 영상 첫 Scene을 임의 변경하지 않는다.

> Video Hook ≠ Cover

영상은 영상 훅에, Cover는 피드 클릭과 즉시 인지에 최적화한다. 플랫폼이 별도 Cover 업로드를 지원하면 PNG Cover를 사용한다. 영상 프레임만 선택 가능한 플랫폼은 현재 정책과 기능을 확인해 대응한다.

## 13. 승인·보존·정리

- 승인 Cover는 버전 파일명으로 보존하고 덮어쓰지 않는다.
- 장기 가치가 있는 승인본은 `references/covers/`에 Canonical Cover Case로 별도 보존한다.
- 최종 승인본, 재편집에 필요한 Hero, canonical product reference, 승인 logo와 final 영상은 삭제하지 않는다.
- 실패·중간 Cover는 코드·문서 의존성을 확인한 뒤 macOS 휴지통으로 이동한다. 영구 삭제하지 않는다.
- 정리한 파일 수와 절약 용량을 프로젝트 작업 기록에 남긴다.

### 외부 제작 / 스케치컷 영상 Cover

원본 프로젝트 기록, 작업 MD, canonical reference가 없는 사수/외부 제작 스케치컷·드로잉형 영상은 다음 순서로 진행한다.

`영상 제공 → 실제 영상 내용 분석 → 대표 프레임/스케치 요소 선정 → DAESAN Cover System 재구성 → 사용자 시각 승인`

- 파일명만 보고 내용을 추정하거나 기억만으로 Headline을 작성하지 않는다.
- 원본 영상은 수정하지 않고 Cover만 별도 생성한다.
- 원본 Scene을 사각형 카드처럼 그대로 삽입하지 않는다.
- 영상 프레임의 full-bleed/crop, 스케치 요소의 독립 Hero 재구성, 기존 손글씨·그림의 자연스러운 활용을 우선한다.
- 제품·캐릭터·선화 손상 위험이 있으면 억지로 배경을 제거하지 않고 자연스러운 full-bleed/crop을 사용한다.

## 14. Canonical Cover Case 01 — 석고보드, 먹어도 되나요?

### 초기 실사 Cover

실제 canonical 석고보드 사진을 그대로 Notion/Apple Cover에 사용했다. 제품은 정확했지만 도로, 트럭, 적재장 배경 때문에 정보형 브랜드 Cover보다 현장 기록 사진처럼 보였다.

**교훈:** `Canonical Reference ≠ 반드시 최종 Cover Background`

### Vertex v1

canonical 실사의 베이지색 원지 면을 identity로 너무 강하게 반영했다. 제품 존재감은 좋아졌지만 석고보드보다 MDF·보드류처럼 보일 가능성이 생겼다.

**교훈:** reference fidelity뿐 아니라 category recognizability를 반드시 검사한다. 사진에 보이는 면이 소비자가 대표적으로 인식하는 제품 면인지 먼저 판단한다.

### Vertex v2 — 최종 승인

- 흰색 paper-faced gypsum board, 제품 인쇄 완전 제거
- 정확히 2장, 우측 Hero Product, 좌측 Negative Space
- warm ivory studio, soft natural daylight, diagonal window shadow
- MAIN Notion restraint + SECONDARY Apple hero hierarchy
- 한글·로고 후처리, DAESAN Brand Lockup 적용
- `gemini-3.1-flash-image`, project `gen-lang-client-0646355490`, location `global`
- 측면이 실제보다 약간 두꺼워 보이는 경미한 WARN을 기록하고 다음 prompt의 고정 QA로 승격

최종 승인 Cover는 `references/covers/gypsum-food-cover-approved-v1.png`에 보존한다. 이 사례의 구도를 모든 Cover에 복제하지 않고 공통 Visual Grammar만 계승한다.

## 15. Approved Case 02 — 이보드

- 콘텐츠: `이보드`
- Cover headline: `단열 후 / 석고보드까지?`
- 승인 Cover: `eboard-cover-v1.png`
- MAIN DESIGN: `Apple`
- SECONDARY DESIGN: `Figma`
- Vertex 모델: `gemini-3.1-flash-image`
- 승인 Hero: `eboard-hero-v1.png`
- 제품: 복합단열재 이보드
- 제품 identity: 검정 계열 표면 + 분홍 XPS core
- Brand Lockup: `DAESAN / 대산종합건축자재`
- Feed Safe: Instagram profile grid를 포함한 중앙 crop `PASS`
- 최종 상태: `APPROVED`
- 승인일: `2026-08-21`

최종 승인 Cover는 `references/covers/eboard-cover-approved-v1.png`에 보존한다. Vertex Hero와 정확한 한글 typography·Brand Lockup을 분리해 조립했으며, 제품의 표면과 단면 identity를 모바일에서도 읽을 수 있게 유지했다.

## 16. Approved Case 03 — 석고보드 벽체 시공

- 콘텐츠명: `석고보드 벽체 시공`
- Headline: `석고보드 벽, / 안쪽은 어떻게 만들까?`
- Category: `건축자재 상식 · 석고보드 시공`
- MAIN DESIGN: `Framer`
- SECONDARY DESIGN: `Notion`
- 사용 asset: `gypsum-board-installation-shorts/public/references/scene05-start-v1.png`
- Vertex 사용 여부: `미사용 / 0회`
- Brand Lockup: 배경 위에 승인 심볼과 대산 Green 계열 텍스트를 직접 배치. 불투명 카드 없이 가독성을 위해 Lockup 색만 최소 보정
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/gypsum-wall-cover-final.png`
- 공통 보존: `references/covers/gypsum-wall-cover-approved-v1.png`

## 17. Approved Case 04 — 다루끼 vs 투바이

- 콘텐츠명: `다루끼 vs 투바이`
- Headline: `다루끼 vs 투바이, / 크기만 다를까?`
- Category: `건축자재 상식 · 각재`
- MAIN DESIGN: `Figma`
- SECONDARY DESIGN: `Linear`
- 사용 asset: `darukki-vs-twobuy-webtoon-shorts/public/references/scene01-hook-reference-final.png`
- Vertex 사용 여부: `미사용 / 0회`
- Brand Lockup: 밝은 배경 위에 승인 심볼과 대산 Green 계열 텍스트를 직접 배치
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/daruki-vs-twoby-cover-final.png`
- 공통 보존: `references/covers/daruki-vs-twoby-cover-approved-v1.png`

## 18. Approved Case 05 — MDF·PB·합판

- 콘텐츠명: `MDF·PB·합판`
- Headline: `MDF·PB·합판, / 속은 어떻게 다를까?`
- Category: `건축자재 상식 · 판재`
- MAIN DESIGN: `Linear`
- SECONDARY DESIGN: `NVIDIA`
- 사용 asset: `MDF_vs_PB_vs_Plywood/reference/generated/scene2-compare-final.png`
- Vertex 사용 여부: `미사용 / 0회`
- Brand Lockup: 어두운 배경 위에 승인 심볼과 White 계열 텍스트를 직접 배치
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/mdf-pb-plywood-cover-final.png`
- 공통 보존: `references/covers/mdf-pb-plywood-cover-approved-v1.png`
- 확인 필요사항: 원 프로젝트 작업기록에는 최종 렌더 완료가 명시되어 있으나 현재 final MP4 위치는 확인되지 않음

## 19. Approved Case 06 — 소송각재 납품 품질

- 콘텐츠명: `소송각재 납품 품질`
- Headline: `각재가 휘었다면, / 원인은 뭘까?`
- Category: `현장 자재 상식 · 소송각재`
- MAIN DESIGN: `Notion`
- SECONDARY DESIGN: `Figma`
- 사용 asset: `sosong-webtoon-shorts/public/assets/images/scene01-vertex-reference-v4.png`
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 승인 Scene에서 정상·휘어진·묶음 각재와 대산이를 독립 Hero로 재구성하고 배경 제거 artifact를 v3에서 수정
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/sosong-lumber-quality-cover-v3.png`
- 공통 보존: `references/covers/sosong-lumber-quality-cover-approved-v1.png`

## 20. Approved Case 07 — 소송각재 vs LVL

- 콘텐츠명: `소송각재 vs LVL`
- Headline: `소송각재 vs LVL, / 무엇이 다를까?`
- Category: `건축자재 비교 · 구조용 각재`
- MAIN DESIGN: `Stripe`
- SECONDARY DESIGN: `Linear`
- 사용 asset: `sosong-lvl-webtoon-shorts/public/assets/images/scene01-reference-v1.png`
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 소송각재와 LVL 적층 구조를 좌우 독립 Hero로 재구성
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/sosong-vs-lvl-cover-v2.png`
- 공통 보존: `references/covers/sosong-vs-lvl-cover-approved-v1.png`

## 21. Approved Case 08 — 천연석고 vs 배연탈황석고

- 콘텐츠명: `천연석고 vs 배연탈황석고`
- Headline: `같은 석고보드, / 원료도 같을까?`
- Category: `건축자재 상식 · 석고보드 원료`
- MAIN DESIGN: `Airbnb`
- SECONDARY DESIGN: `Figma`
- 사용 asset: `xi-natural-gypsum-webtoon-shorts/public/assets/images/scene02-final.png`
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 천연석고와 배연탈황석고 스케치 요소를 독립 비교 Hero로 재구성
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/natural-vs-fgd-gypsum-cover-v2.png`
- 공통 보존: `references/covers/natural-vs-fgd-gypsum-cover-approved-v1.png`

## 22. Approved Case 09 — PF보드 vs XPS

- 콘텐츠명: `PF보드 vs XPS`
- Headline: `같은 단열 성능, / 두께는 왜 다를까?`
- Category: `건축자재 비교 · 단열재`
- MAIN DESIGN: `Shopify`
- SECONDARY DESIGN: `Linear`
- 사용 asset: `remotion_video/pf-vs-xps/src/components/ProductBoard.tsx`, `src/scenes/Scene1Hook.tsx`
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 코드형 제품 geometry를 PF 115mm와 XPS 160mm 독립 Hero로 재구성
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/pf-vs-xps-cover-v1.png`
- 공통 보존: `references/covers/pf-vs-xps-cover-approved-v1.png`

## 23. Approved Case 10 — MDF 밀도

- 콘텐츠명: `MDF 밀도`
- Headline: `같은 MDF인데, / 왜 처질까?`
- Category: `건축자재 상식 · MDF`
- MAIN DESIGN: `NVIDIA`
- SECONDARY DESIGN: `Figma`
- 사용 asset: `remotion_video/mdf-density/reference/scene1-v5-reference-001-9x16.png`
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 처진 MDF 선반 사진을 full-bleed crop하고 선반 중심으로 최소 명암 보정
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/mdf-density-cover-v2.png`
- 공통 보존: `references/covers/mdf-density-cover-approved-v1.png`

## 24. Approved Case 11 — 창호 결로

- 콘텐츠명: `창호 결로`
- Headline: `새 창호인데, / 왜 결로가 생길까?`
- Category: `시공 상식 · 창호와 단열`
- MAIN DESIGN: `Airbnb`
- SECONDARY DESIGN: `Apple`
- 사용 asset: `remotion_video/projects/window-condensation-shorts-v1/public/assets/images/scene01.png`
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 실제 창호·결로 사진을 full-bleed로 사용하고 불필요한 지시 그래픽을 제거
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/window-condensation-cover-v2.png`
- 공통 보존: `references/covers/window-condensation-cover-approved-v1.png`

## 25. Approved Case 12 — 자이 천연석고 외부영상

- 원본: 외부 제작 MP4 `external-shorts/자이천연석고1.mp4`
- 프로젝트 기록: 없음
- 콘텐츠명: `자이 천연석고`
- Headline: `석고보드의 시작, / 땅일까 설비일까?`
- Category: `건축자재 원료 · 석고보드`
- MAIN DESIGN: `Figma`
- SECONDARY DESIGN: `Notion`
- 분석/asset: 실제 MP4 내용 분석 후 천연석고 채굴과 합성석고 탈황설비 스케치 프레임 사용
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: 영상 프레임의 스케치 요소를 DAESAN Cover System 비교 Hero로 재구성
- 원본 MP4: 무수정
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/xi-natural-gypsum-external-cover-v1.png`
- 공통 보존: `references/covers/xi-natural-gypsum-external-cover-approved-v1.png`

## 26. Approved Case 13 — 중국산 석고보드 외부영상

- 원본: 외부 제작 MP4 `external-shorts/중국산석고1.mp4`
- 프로젝트 기록: 없음
- 콘텐츠명: `중국산 석고보드`
- Headline: `10% 저렴한데, / 왜 선택받지 못했을까?`
- Category: `건축자재 비교 · 석고보드`
- MAIN DESIGN: `Spotify`
- SECONDARY DESIGN: `Linear`
- 분석/asset: 실제 MP4 내용 분석 후 중국산·국산·소비자·저울 비교 스케치 프레임 사용
- Vertex 사용 여부: `미사용 / 0회`
- Cover 방식: Hero 전체를 보존한 비교형 composition으로 재구성하고 v2에서 손글씨와 비교 요소를 완전 노출
- 원본 MP4: 무수정
- Feed Safe QA: 1080×1920 및 Instagram 중앙 crop `PASS`
- 승인일: `2026-08-21`
- 상태: `APPROVED`
- 최종 Cover: `public/covers/chinese-gypsum-external-cover-v2.png`
- 공통 보존: `references/covers/chinese-gypsum-external-cover-approved-v1.png`

## 변경 이력

| 날짜 | 버전 | 변경 내용 |
|---|---|---|
| 2026-08-21 | v1.3 | Case 06~13, 외부 제작/스케치컷 영상 운영 규칙과 전체 Cover 정비 완료 상태 추가 |
| 2026-08-21 | v1.2 | BATCH 01 Approved Case 03~05와 배경 직접 배치 Brand Lockup 규칙 추가 |
| 2026-08-21 | v1.1 | 이보드 Approved Case 02, 3-reference 기본 규칙과 Vertex response 진단 규칙 추가 |
| 2026-08-21 | v1.0 | 대산 Cover System 제정 및 석고보드 첫 Canonical Cover Case 등록 |
