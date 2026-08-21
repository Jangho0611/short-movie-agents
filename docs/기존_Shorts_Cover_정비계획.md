# 기존 Shorts Cover 정비계획

## 목적

Instagram에 이미 게시했거나 업로드용으로 완성된 대산 Shorts/Reels의 대표이미지를 `대산 Shorts Cover System`의 공통 시각 문법으로 순차 정비한다. 모든 게시물을 같은 템플릿으로 복제하지 않고, 품목과 영상 형식에 맞춰 구도·배경·Headline 위치를 달리하면서도 한 채널로 인지되게 한다.

이번 문서는 조사와 제작 계획만 다룬다. Cover·Hero 이미지를 생성하거나 기존 영상, TTS, Remotion 소스를 수정하지 않았다.

## 조사 범위와 판정 기준

- 조사 위치: `/Users/janghokim/Documents`
- 조사 프로젝트: 10개
- 실제 완성 Shorts: 8개
- 제외: `window-condensation-shorts-v1`(TTS 프리뷰만 존재, QA 문서에 렌더·업로드 미실행 명시), `mdf-density`(작업기록상 약 60%, 전체 final 없음)
- 포함 주의: `MDF_vs_PB_vs_Plywood`는 작업기록에 최종 렌더 완료가 명시되어 완성 콘텐츠로 포함했으나 현재 프로젝트 폴더에는 final MP4가 없다. Cover 제작 전 게시본 또는 최종 파일 위치를 재확인해야 한다.
- Instagram 피드 캡처 원본은 이번 첨부와 저장소에서 확인되지 않았다. 현재 피드 진단은 사용자 요청문에 명시된 혼재 유형을 근거로 한다.

## 현재 피드 문제

현재 피드는 실제 영상 프레임, 현장 실사, 제품 사진, 흰 배경 웹툰, 손글씨·메모 스타일, 단색 배경과 서로 다른 타이포 위치가 혼재한다. 문제는 형식의 다양성 자체가 아니라 `Headline → Category → Hero Product → DAESAN Brand Lockup`의 공통 위계와 Feed Safe가 일정하지 않아 같은 건축자재 채널이라는 인지가 약한 점이다.

## Cover System 적용 원칙

1. 짧고 강한 질문·비교·오해·핵심정보형 Headline을 모바일에서 2~4초 안에 읽히게 구성한다.
2. 작은 Category, 제한적인 대산 Green Accent, 충분한 Negative Space, 핵심 Hero, `DAESAN / 대산종합건축자재` Lockup을 공통 Identity로 유지한다.
3. 1080×1920 원본과 Instagram profile grid 중앙 crop에서 Headline, Category, Hero 핵심부와 Brand Lockup을 검증한다.
4. 자산 우선순위는 `승인 Canonical Reference → 실제 촬영 제품사진 → 승인 AI 이미지 → 고품질 영상 Hero → Vertex 신규 Hero`다.
5. AI 이미지 안에 한글·로고를 생성하지 않고 Typography와 Brand는 후처리 레이어로 분리한다.
6. 같은 템플릿을 복제하지 않는다. 콘텐츠마다 MAIN/SECONDARY DESIGN을 최대 2개만 선택하고 제품 정확도를 디자인보다 우선한다.
7. Vertex가 필요해지면 대표 reference는 최대 3장(`전체형 + 표면형 + 단면형`)부터 시작하고 호출용 축소본을 사용한다. 이번 조사에서는 호출하지 않았다.

## 기존 완성 콘텐츠 목록

표의 `Reference`는 공통 저장소의 Canonical Product Reference 보유 여부를 우선 표시한다. `기존 Cover`는 프로젝트 또는 공통 저장소에서 독립 Cover 파일을 확인한 경우만 `있음`으로 판정했다.

| 우선순위 | 콘텐츠 | 프로젝트 | 기존 Cover | Reference | Headline | MAIN DESIGN | SECONDARY | Vertex 필요 | 상태 |
|---:|---|---|---|---|---|---|---|---|---|
| 제외 | 석고보드, 먹어도 되나요? (석고보드/황산칼슘 오해 교정, 실사+캐릭터 정보형) | `xi-natural-gypsum-food-fact-shorts` | 있음: 승인본 | 있음: 석고보드 제품 + Cover | 석고보드, 먹어도 되나요? | Notion | Apple | 아니오 | **APPROVED COVER** · final 있음 · Hero 후보 있음 · 작은 대산이 사용 |
| 제외 | 이보드 구조·마감·시공 주의 (복합단열재, 실사+캐릭터 정보형) | `eboard-explainer-shorts-v1` | 있음: 승인본 | 있음: 이보드 제품 + Cover | 단열 후 석고보드까지? | Apple | Figma | 아니오 | **APPROVED COVER** · final 있음 · Hero 후보 있음 · 작은 대산이 사용 |
| 완료 | 석고보드 벽체 시공 순서 (석고보드, 실사 시공형) | `gypsum-board-installation-shorts` | 있음: `public/covers/gypsum-wall-cover-final.png` | 있음: 석고보드 제품 | 석고보드 벽,\n안쪽은 어떻게 만들까? | Framer | Notion | 아니오 | **APPROVED / COMPLETED** · Case 03 · final 영상 있음 · 대산이 미사용 |
| 완료 | 다루끼 vs 투바이, 크기와 역할 (소송각재, 캐릭터 비교형) | `darukki-vs-twobuy-webtoon-shorts` | 있음: `public/covers/daruki-vs-twoby-cover-final.png` | 제품 canonical 없음; 승인 Scene/reference 있음 | 다루끼 vs 투바이,\n크기만 다를까? | Figma | Linear | 아니오 | **APPROVED / COMPLETED** · Case 04 · 업로드 완료 기록 · 작은 대산이 사용 |
| 완료 | MDF·PB·합판의 단면·원료·용도 차이 (목질판재, 비교형) | `remotion_video/MDF_vs_PB_vs_Plywood` | 있음: `public/covers/mdf-pb-plywood-cover-final.png` | 제품 canonical 없음; 실사/승인 비교 이미지 있음 | MDF·PB·합판,\n속은 어떻게 다를까? | Linear | NVIDIA | 아니오 | **APPROVED / COMPLETED / VERIFY FINAL MP4** · Case 05 · 렌더 완료 기록 있으나 final MP4 부재 · 대산이 미사용 |
| 4 | 소송각재 납품 시 휨·건조·실측 주의 (소송각재, 캐릭터/웹툰형) | `sosong-webtoon-shorts` | 없음 | 제품 canonical 없음; canonical character 있음 | 각재가 휘었다면,\n원인은 뭘까? | Notion | Figma | 아니오 | 이후 Batch · final 있음 · 승인 Scene Hero 있음 · 작은 대산이 사용 · System 미적용 |
| 5 | 소송각재 vs LVL의 구조·뒤틀림·선택 기준 (목재/LVL, 캐릭터 비교형) | `sosong-lvl-webtoon-shorts` | 없음 | 제품 canonical 없음; canonical character 있음 | 소송각재 vs LVL,\n무엇이 다를까? | Stripe | Linear | 아니오 | 이후 Batch · final 있음 · 승인 Scene Hero 있음 · 작은 대산이 사용 · System 미적용 |
| 6 | 천연석고와 배연탈황석고의 원료 차이 (석고보드 원료, 캐릭터/웹툰 비교형) | `xi-natural-gypsum-webtoon-shorts` | 없음 | 있음: 석고보드 제품; canonical character 있음 | 같은 석고보드,\n원료도 같을까? | Airbnb | Figma | 아니오 | 이후 Batch · final 있음 · 승인 Scene Hero 있음 · 대산이 캐릭터 사용 · System 미적용 |

### DESIGN 선택 근거

- 석고보드 시공: `Framer`의 변화·시공 리듬을 MAIN으로, `Notion`의 실사 신뢰감과 절제된 여백을 SECONDARY로 사용한다.
- 다루끼 vs 투바이: `Figma`의 친근한 컬러 블록과 캐릭터 혼합을 MAIN으로, `Linear`의 좌우 비교 정렬을 SECONDARY로 사용한다.
- MDF·PB·합판: `Linear`의 정밀한 단면 비교 hierarchy를 MAIN으로, 더 강한 기술 대비가 필요한 부분에 `NVIDIA`를 SECONDARY로 사용한다.
- 소송각재 휨: `Notion`의 차분한 전문 설명을 MAIN으로, 흰 배경 웹툰의 친근함을 유지하는 `Figma`를 SECONDARY로 사용한다.
- 소송각재 vs LVL: 복잡한 비교를 정돈하는 `Stripe`를 MAIN으로, 구조와 적층 차이를 명확히 하는 `Linear`를 SECONDARY로 사용한다.
- 석고 원료 차이: 원료가 실제 건축·생활 맥락으로 이어지는 사진 중심 `Airbnb`를 MAIN으로, 캐릭터와 쉬운 설명을 위한 `Figma`를 SECONDARY로 사용한다.

## BATCH 01 — APPROVED / COMPLETED

- 승인일: `2026-08-21`
- Case 03: `public/covers/gypsum-wall-cover-final.png`
- Case 04: `public/covers/daruki-vs-twoby-cover-final.png`
- Case 05: `public/covers/mdf-pb-plywood-cover-final.png`
- MDF·PB·합판의 final MP4 부재는 Cover 완료와 별도의 확인 필요사항으로 유지한다.

### 1. 석고보드 벽체 시공 순서

- 콘텐츠: 하지 구조 설치부터 석고보드 고정, 벽면 완성까지 보여주는 실사 시공형 Shorts
- 추천 Headline: `석고보드 벽, / 안쪽은 어떻게 만들까?`
- Cover 방향: 완성 벽과 내부 하지 구조가 함께 읽히는 Before/Inside 구도. 시공 동작보다 구조 관계가 즉시 보이는 실사 Hero를 중앙~우측에 두고 좌측 또는 상단에 질문형 Headline을 배치한다.
- 사용할 기존 자산: `gypsum-board-installation-shorts/public/references`의 실제 reference, 최종 Flow Scene 1·2·5의 안정 프레임, 공통 `references/gypsum-board`의 실사 제품 사진
- DESIGN.md: MAIN `Framer`, SECONDARY `Notion`
- Vertex 필요 여부: 아니오
- 선택 이유: 제품 인지도가 높고 시공 전후 훅이 강하며, 승인 Canonical Product Reference와 좋은 실사 영상 자산이 있어 신규 생성 없이도 피드 통일 효과가 크다.

### 2. 다루끼 vs 투바이

- 콘텐츠: 두 소송각재의 차이가 단순 크기가 아니라 필요한 폭과 현장 역할에 있음을 설명하는 캐릭터 비교형 Shorts
- 추천 Headline: `다루끼 vs 투바이, / 크기만 다를까?`
- Cover 방향: 다루끼와 투바이를 같은 시점·조명·비중으로 좌우 비교하고, 작은 대산이는 중앙 하단의 보조 설명자로 제한한다. 한 개의 부드러운 대산 Green 계열 accent block으로 비교축만 묶는다.
- 사용할 기존 자산: `public/references/darukki-reference-v2.png`, `twobuy-reference-final.png`, `scene01-hook-reference-final.png` 및 최종 Scene의 안정 프레임
- DESIGN.md: MAIN `Figma`, SECONDARY `Linear`
- Vertex 필요 여부: 아니오
- 선택 이유: Instagram 업로드 완료가 명시된 콘텐츠이고 질문형 훅이 이미 검증됐으며, 두 제품 reference와 작은 대산이 골드 reference가 확보돼 웹툰형 피드를 브랜드 Cover로 전환하기 쉽다.

### 3. MDF·PB·합판

- 콘텐츠: 세 목질판재의 단면, 원료, 제조 흐름과 용도 차이를 설명하는 비교형 Shorts
- 추천 Headline: `MDF·PB·합판, / 속은 어떻게 다를까?`
- Cover 방향: 세 판재를 동일한 크기와 시점으로 배치하되 단면 차이가 Hero가 되게 한다. 카드 UI 복제가 아니라 얇은 divider와 정밀 alignment만 사용하며 제품명은 작은 Category/label 계층으로 후처리한다.
- 사용할 기존 자산: `reference/mdf-reference-*`, `pb-reference-*`, `plywood-reference-*`, `reference/generated/scene2-compare-final.png`, `scene2-cross-section.png`
- DESIGN.md: MAIN `Linear`, SECONDARY `NVIDIA`
- Vertex 필요 여부: 아니오
- 선택 이유: 세 제품 인지와 비교 검색성이 높고 단면형 Cover 훅이 강하며 기존 실사·승인 비교 자산이 풍부하다. 단, 제작 시작 전 현재 Instagram 게시본 또는 최종 MP4 위치를 먼저 확인한다.

## 이후 Batch 후보

1. 소송각재 납품 품질: `각재가 휘었다면, / 원인은 뭘까?` — MAIN Notion / SECONDARY Figma
2. 소송각재 vs LVL: `소송각재 vs LVL, / 무엇이 다를까?` — MAIN Stripe / SECONDARY Linear
3. 천연석고 vs 배연탈황석고: `같은 석고보드, / 원료도 같을까?` — MAIN Airbnb / SECONDARY Figma

## BATCH 01 승인 후 정리

- 정리일: `2026-08-21`
- 삭제 후보: 10개(v1 Cover 3개, v2 Cover 3개, 이전 Contact Sheet 2개, 임시 crop QA 2개)
- 실제 처리: 10개 모두 macOS 휴지통의 `short-movie-agents-batch01-intermediate-20260821`로 이동
- 절약 용량: 18,794,563 bytes(17.92 MiB)
- 보존: final Cover 3개, 승인 Reference 3개, final Contact Sheet, 원본 Hero asset, 승인 logo와 재현 스크립트
- 복구 가능 여부: macOS 휴지통에서 복구 가능

## 집계

- 조사한 프로젝트: 10개
- 실제 완성 Shorts: 8개
- Cover System 적용 완료: 5개
- 신규 Cover 정비 대상: 6개 중 3개 완료, 3개 잔여
- Canonical Product Reference 보유 콘텐츠: 4개(석고보드 관련 3개, 이보드 1개)
- Vertex 필요 예상: 0개. 모든 대상에서 실제 촬영 reference, 승인 이미지 또는 고품질 영상 Hero를 우선 사용할 수 있다.
- 작은 대산이/대산이 캐릭터 사용: 6개

## 실행 제한 확인

- BATCH 01 final Cover 제작 및 승인: 완료
- Vertex 호출: 0회
- 기존 영상/TTS/Remotion 수정: 없음
