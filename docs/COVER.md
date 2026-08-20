# 대산 Shorts Cover System

- 문서 버전: `v1.0`
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

## 변경 이력

| 날짜 | 버전 | 변경 내용 |
|---|---|---|
| 2026-08-21 | v1.0 | 대산 Cover System 제정 및 석고보드 첫 Canonical Cover Case 등록 |
