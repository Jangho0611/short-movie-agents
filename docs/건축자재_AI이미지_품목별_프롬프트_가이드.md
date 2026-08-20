# 건축자재 AI 이미지 품목별 프롬프트 가이드 v1.2

- 문서 버전: `v1.2`
- 최초 작성일: `2026-08-19`
- 상태: `운영 중 / 지속 고도화`
- 역할: `건축자재 AI 이미지 및 Flow Start Frame 제작을 위한 공통 마스터 가이드`

## 변경 이력

### v1.2 — 2026-08-20

- Figma / Notion / Linear / Framer `DESIGN.md` 외부 디자인 reference 라이브러리 연결
- 콘텐츠 유형별 reference 선택 구조 추가
- 기존 공통 Visual Grammar를 상위 규칙으로 유지
- 원문은 브랜드 복제가 아닌 레이아웃·타이포·색·모션 참고 자료로만 사용

### v1.1 — 2026-08-20

- Figma-inspired Shorts visual grammar 추가
- 한 Scene 한 pastel accent 원칙 추가
- 실사 제품과 Remotion 정보 레이어 분리 원칙 강화
- 제품 표면 위 라벨 지양 및 미세한 제품 차이 과장 금지
- Flow Start Frame 완성도와 최소 모션 원칙 강화
- 제품/캐릭터 역할 분리 및 반복 이미지 수정 제한 추가
- 마지막 승인본 복원 규칙과 실패 회복 절차 추가
- Vertex AI 우선 후보 생성과 도구별 역할 분리 방향 추가
- MASTER TEMPLATE 및 생성 후 QA 체크리스트 고도화
- 근거 프로젝트: `eboard-explainer-shorts-v1`

### v1.0 — 2026-08-19

- 기존 건축자재 Shorts 프로젝트 조사 기반 최초 작성
- 공통 이미지 생성 규칙 정리
- 품목별 상세 문법 초안
- Flow Start Frame 규칙 정리
- Small Daesan canonical 규칙 반영
- 실제 제품 reference/누끼 workflow 반영
- 실패 패턴 DB 22개 반영
- MASTER TEMPLATE 및 QUICK TEMPLATE 생성

앞으로 변경할 때마다 아래 항목을 추가하는 구조로 유지한다.

- 버전
- 날짜
- 변경 내용
- 근거 프로젝트

## 1. 문서 목적

이 문서는 실제 건축자재 Shorts/Reels 제작 기록에서 확인된 성공·실패 사례를 재사용 가능한 AI 이미지 생성 규칙으로 정리한 가이드다. 새로운 상품 지식을 추정하거나, 기록에 없는 성공 공식을 만들어내는 문서가 아니다.

목적은 다음과 같다.

- 건축자재 Shorts/Reels용 이미지 생성을 표준화한다.
- Flow Start Frame, 정보형 이미지, 실사 현장 이미지, 캐릭터 결합 이미지를 구분한다.
- 자재의 형상·단면·규격·표면을 AI가 임의로 바꾸는 오류를 줄인다.
- 이미지 생성 단계부터 Flow 동작과 Remotion 자막·그래픽 후편집을 고려한다.
- 실제 제품 사진, 누끼, canonical character reference의 사용 기준을 통일한다.
- 실패한 prompt를 같은 방식으로 반복하지 않고 기록된 해결책으로 전환한다.

### 이미지 유형 구분

| 유형 | 주목적 | 기본 원칙 |
|---|---|---|
| Flow Start Frame | 영상의 정확한 최초 구조 제공 | 구조와 형상을 첫 프레임에서 완성하고 한 가지 동작만 허용 |
| 정보형 이미지 | 비교·원료·단면·구조 설명 | 텍스트는 최소화하고 Remotion 후편집 우선 |
| 실사 현장 이미지 | 실제 시공 상태와 손·공구 관계 설명 | real camera look, 실제 재질, 자연광, 정확한 접촉 관계 |
| 캐릭터 결합 이미지 | Hook·리액션·브랜드 연속성 | 단일 canonical reference, 실제 사물은 고정, 캐릭터만 최소 변화 |

## 2. 근거 등급

모든 규칙은 다음 세 등급 중 하나로 해석한다.

- **[원문 확보]**: 프로젝트 안에 실제 이미지·Veo/Flow prompt 전문 또는 핵심 원문이 파일로 남아 있다. 가장 강한 근거다.
- **[기록 기반 재구성]**: 작업기록에 시도, 문제, 원인 판단, 해결, 최종 채택이 남아 있지만 당시 prompt 전문은 없다. 기록의 범위를 넘어 문법을 확장하지 않는다.
- **[근거 부족]**: 결과 이미지나 기획만 있고 prompt 및 반복 검증 기록이 부족하다. v1.0에서는 상세 문법을 만들지 않고 추후 보완 대상으로 남긴다.

근거가 강한 대표 프로젝트는 `sosong-webtoon-shorts`, `sosong-lvl-webtoon-shorts`, `remotion_video/mdf-density`, `darukki-vs-twobuy-webtoon-shorts`, `xi-natural-gypsum-webtoon-shorts`다. 석고보드 시공과 Xi 실제 제품 사례는 상세 작업기록에 기반한 재구성이다.

### 외부 디자인 레퍼런스

콘텐츠 성격에 따라 다음 원문을 선택 가능한 시각 reference로 사용할 수 있다.

- [Figma DESIGN.md](./design-styles/figma/DESIGN.md)
- [Notion DESIGN.md](./design-styles/notion/DESIGN.md)
- [Linear DESIGN.md](./design-styles/linear/DESIGN.md)
- [Framer DESIGN.md](./design-styles/framer/DESIGN.md)

선택 기준은 [DESIGN.md 스타일 라이브러리](./design-styles/README.md)를 참조한다. 이 자료는 getdesign.md의 독립 분석이며 공식 브랜드 가이드가 아니다. 브랜드 디자인을 복제하지 않고 레이아웃·타이포·색의 역할·모션 원칙만 참고한다. 본 문서의 공통 Visual Grammar가 항상 상위 규칙이다.

## 3. 공통 이미지 생성 26개 규칙

### 3.1 화면 — 7개

1. **[원문 확보]** 기본 캔버스는 세로 9:16으로 지정한다.
2. **[원문 확보]** 상단 약 20%를 Remotion 자막용 빈 공간으로 고려한다.
3. **[원문 확보]** 하단 약 15%를 자막·UI·크롭 안전영역으로 고려한다.
4. **[원문 확보]** 핵심 장면은 화면 중앙 55~65% 안에서 즉시 읽히게 배치한다.
5. **[원문 확보]** 제품·현상을 주인공으로 두고 사람·캐릭터는 보조 요소로 제한한다.
6. **[원문 확보]** Flow에서 움직일 대상은 이동 방향 앞쪽에 여백을 둔다.
7. **[원문 확보]** Start Frame에서는 핵심 형상, 개수, 구조와 접촉 관계가 이미 완성되어 있어야 한다.

### 3.2 실사 표현 — 6개

8. **[원문 확보]** `real camera look, not CGI`를 명시한다.
9. **[원문 확보]** 실제 한국 건설현장·주거공간 등 구체적인 현실 맥락을 명시한다.
10. **[원문 확보]** 자연광과 부드러운 실제 그림자를 우선한다.
11. **[원문 확보]** 과도한 스튜디오 광고광, 영화광, dramatic lighting을 금지한다.
12. **[원문 확보]** 재료의 결, 입자, 섬유, 원지와 단면을 실제 표면 질감으로 표현한다.
13. **[원문 확보]** `CGI, 3D render, animation, plastic surface, glossy commercial render`를 negative에 포함한다.

### 3.3 자재 형태 — 7개

14. **[원문 확보]** 규격은 숫자뿐 아니라 길이:폭 비율, 단면 형태와 실제 물체 유형으로 함께 설명한다.
15. **[원문 확보]** 자재가 혼동될 수 있는 금지 형태를 구체적으로 열거한다.
16. **[원문 확보]** 단면 장면은 끝단 면, 측면, 두께가 동시에 읽히게 구성한다.
17. **[원문 확보]** 휨·처짐은 강조색이 아니라 실제 실루엣과 geometry로 표현한다.
18. **[원문 확보]** 미묘한 형상·변형이 핵심이면 text-only 생성보다 reference-first workflow를 사용한다.
19. **[원문 확보]** 정상 기준선 또는 정상 자재를 같은 화면에 두어 변형을 비교 가능하게 한다.
20. **[원문 확보]** 개수, 겹 수, 좌우 위치와 비어 있어야 할 공간까지 명시해 임의 추가를 막는다.

### 3.4 텍스트·reference — 6개

21. **[원문 확보]** 생성 이미지에는 기본적으로 텍스트, 숫자, 라벨, 로고와 워터마크를 넣지 않는다.
22. **[원문 확보]** 자막과 정보 그래픽은 Remotion에서 추가한다.
23. **[기록 기반 재구성]** 실제 제품 인쇄가 핵심이면 AI가 표면을 다시 그리게 하지 않는다.
24. **[기록 기반 재구성]** 한글 제품명이 있는 제품은 실제 사진 또는 누끼를 우선한다.
25. **[기록 기반 재구성]** 캐릭터 생성은 단일 canonical reference를 우선한다.
26. **[원문 확보]** reference edit가 전체 이미지를 재해석하면 단순 색상 수정은 로컬 pixel recolor를 사용한다.

## 4. 기본 Prompt 문법

Prompt는 아래 순서로 작성한다. 필요 없는 블록은 삭제할 수 있지만 순서를 바꾸어 핵심 형상 지시가 뒤로 밀리지 않게 한다.

1. **역할/목표**: 무엇을 위한 어떤 종류의 자산인지 정의한다.
2. **기준 reference**: 사용할 reference의 역할과 보존 강도를 정의한다.
3. **Scene 목적**: Hook, 비교, 단면, 시공 등 한 가지 목적을 명시한다.
4. **핵심 자재**: 자재명과 혼동하면 안 되는 다른 자재를 적는다.
5. **정확한 형상/규격**: 단면, 길이비, 두께, 개수, 적층 방향을 적는다.
6. **배치/구도**: 9:16, safe area, 좌우·전후 위치, 화면 점유율을 적는다.
7. **재질/표면**: 실제 색상, 결, 입자, 심재와 표면 질감을 적는다.
8. **조명/카메라**: 자연광·고정 카메라·시점과 렌즈 느낌을 적는다.
9. **허용 동작**: Flow용일 때 한 가지 동작과 최대 범위를 정의한다.
10. **절대 보존 요소**: 형상, 개수, 문자, 캐릭터, 카메라 등 변하면 안 되는 것을 적는다.
11. **Negative prompt**: 자주 발생한 실제 오류를 구체적인 명사와 동사로 적는다.
12. **후편집 요소**: 자막, 숫자, 화살표, 로고는 Remotion 처리임을 명시한다.
13. **Flow 연계 조건**: exact first frame, fixed camera, static object, final-frame stability를 적는다.

### 표준 골격

```text
ROLE / ASSET GOAL:
Create one [asset type] for a vertical construction-material explainer short.

REFERENCE:
Use [reference] as [exact first frame / canonical identity / material geometry reference].

SCENE PURPOSE:
One scene, one message: [message].

MAIN MATERIAL:
[material name and real-world context].

CRITICAL GEOMETRY AND SPECIFICATION:
[cross-section, dimensions, ratios, layer count, orientation, quantity].

COMPOSITION:
Vertical 9:16. Reserve caption-safe space. [positions and movement space].

MATERIAL AND SURFACE:
[color, grain, fiber/particle texture, facing/core/end-grain].

CAMERA AND LIGHTING:
[fixed camera / angle]. Natural lighting, soft real shadows, real camera look, not CGI.

ALLOWED MOTION:
Only [one action].

PRESERVE EXACTLY:
[geometry, count, location, character, product print, background].

NEGATIVE PROMPT:
[known failure forms].

POST-PRODUCTION:
No generated captions, labels or logos. Add them later in Remotion.

FLOW CONDITIONS:
Use this as the exact first frame. No reframe, crop change or late-frame drift.
```

## 5. 9:16 Shorts 화면 규칙

- **[원문 확보]** 상단 약 20%: 자막 safe area. 중요한 얼굴·제품 끝단·단면을 침범시키지 않는다.
- **[원문 확보]** 하단 약 15%: 플랫폼 UI와 후편집 안전영역으로 둔다.
- **[원문 확보]** 핵심 오브젝트 그룹: 화면 중간 55~65%에서 읽히게 한다.
- **[원문 확보]** Flow 이동이 있으면 이동 방향 앞에 공간을 둔다.
- **[원문 확보]** 한 Scene에는 한 메시지와 한 동작만 둔다.
- **[원문 확보]** 빈 공간을 지나치게 키워 제품이 작아지지 않게 한다.
- **[원문 확보]** safe area는 “아무것도 없는 공간”만 뜻하지 않는다. 약한 배경 요소는 허용하되 핵심 정보는 배치하지 않는다.

## 5A. Figma-inspired Shorts 비주얼 문법

이 섹션은 특정 품목의 디자인을 복제하는 규칙이 아니라, 건축자재 정보형 Shorts에서 검증된 범용 화면 구성 원칙이다. 실제 제품 정확도가 모든 그래픽 스타일보다 우선한다.

1. **9:16 layout**: 세로 9:16을 기본으로 하고 제품·캐릭터·정보의 시각적 위계를 첫 프레임에서 읽히게 한다.
2. **Upper negative space**: 상단 20~30%를 넓은 여백과 typography safe zone으로 계획한다. 긴 문장은 의미 단위 최대 2줄로 나눈다.
3. **Pastel color block**: warm off-white canvas 위에 한 개의 rounded pastel color block을 보조 그래픽으로 사용할 수 있다.
4. **One accent color**: 한 Scene에는 pastel accent를 하나만 사용한다. 여러 색으로 정보를 분류해야 할 때도 제품의 실제 색을 임의 변경하지 않는다.
5. **No-gradient/no-glow default**: gradient, glow, 강한 그림자와 광고형 광택은 기본적으로 사용하지 않는다. 필요한 예외는 메시지 전달 근거가 있을 때만 허용한다.
6. **Real product priority**: 실제 촬영 reference, 승인 제품 이미지, 디자인 스타일 순으로 우선한다. 실사 표면·단면·인쇄를 그래픽 스타일에 맞추려고 재해석하지 않는다.
7. **Remotion information layer**: 텍스트, 라벨, 화살표, 숫자와 순차 강조는 이미지에 굽지 않고 Remotion 후편집 레이어로 분리한다.
8. **Label readability**: 질감과 차이를 설명해야 하는 제품 표면 위에 라벨을 놓지 않는다. 제품 아래 또는 깨끗한 여백에 대응 관계가 명확하게 배치한다.
9. **Comparison layout**: 비교 대상은 좌우에 같은 시점과 시각 비중으로 두고 가운데 여백을 확보한다. 우열이 목적이 아니면 밝기, 크기, 청결도와 glow로 한쪽을 과장하지 않는다.
10. **Close-up texture layout**: 단면·표면 close-up은 실제 촬영 reference를 우선하고 층 순서, 끝단, 경계와 두께를 보존한다. 라벨은 후편집한다.
11. **Subtle difference honesty**: 육안 차이가 작은 제품은 AI로 차이를 키우지 않는다. “겉보기에는 비슷하지만 실제 표면이 다르다”는 사실 자체를 시각 문법으로 사용한다.
12. **Product/character hierarchy**: 제품 정보 Scene에서는 제품이 주인공이고 캐릭터는 보조다. Hook·마무리 Scene에서만 캐릭터 비중을 필요 범위에서 높인다.
13. **Controlled mixed media**: 제품은 photorealistic, 캐릭터는 canonical flat 2D/editorial 스타일을 유지할 수 있다. 둘을 억지로 하나의 CGI 스타일로 통일하지 않는다.
14. **Flow-ready start frame**: Flow Start Frame은 움직임이 없어도 한 장의 완성된 정보 화면이어야 하며, 상단 safe area와 Remotion 라벨 공간까지 미리 확보한다.
15. **Failure recovery**: 같은 이미지에서 수정 대상은 한 번에 하나만 두고 나머지는 LOCK한다. 2~3회 실패하거나 승인 요소가 퇴보하면 생성을 반복하지 않고 마지막 승인본으로 복귀한 뒤 Remotion 또는 다른 방식으로 전환한다.

### 승인본과 변경 범위 관리

- Preview/후보마다 바뀐 항목을 기록하고 서로 무관한 변경을 한 번에 섞지 않는다.
- 최신 후보가 항상 최선이라고 가정하지 않는다. 새 수정이 악화되면 사용자가 마지막으로 승인한 버전을 기준으로 복원한다.
- 캐릭터, 제품, 배경을 번갈아 반복 수정하지 않는다. `수정 대상 1개 + 나머지 LOCK`을 기본 단위로 한다.

### Flow 최소 모션 원칙

- 제품은 가능한 한 static으로 선언한다.
- 캐릭터의 시선, 손짓 또는 한 가지 작은 반응만 허용한다.
- 카메라 이동은 메시지에 꼭 필요할 때만 최소화한다.
- 제품, 캐릭터, 크기, 위치, 제품 모션과 카메라를 한 번에 해결하려 하지 않는다.
- late-frame drift, 얼굴·단면·외곽선 변형과 마지막 프레임 안정성을 확인한다.
- 자연스러운 원본 움직임 위에 push-in, zoom, crossfade를 자동 보정처럼 추가하지 않는다. 먼저 마지막 승인본과 재생 방식의 차이를 조사한다.

## 5B. 생성 도구 운영 방향

도구는 역할에 따라 분리한다. 특정 생성 모델을 제품 정확도의 정답으로 간주하지 않는다.

- **GPT**: 기획, prompt 작성, reference 요구사항 정리와 QA 체크리스트 구성
- **Vertex AI**: 1차 이미지 후보 생성과 후보 비교의 우선 경로
- **Veo on Vertex**: 승인 Start Frame을 기반으로 한 영상 생성 후보
- **Flow**: 핵심 Scene이거나 Vertex/Veo 후보가 요구 품질에 미달할 때 선택적으로 사용
- **Remotion**: 자막, 라벨, 정보 강조, 최소 모션, 음성 싱크와 최종 조립

Vertex AI 사용 전에도 실제 건축자재 reference와 사람의 QA가 필수다. Google Cloud credential, API key, token, service account JSON과 인증 경로는 prompt, 작업 기록, 가이드와 Git 저장소에 기록하지 않는다.

## 6. 실사 표현 문법

### 반드시 포함

```text
real camera look, not CGI
realistic material texture
natural lighting
soft real shadows
realistic construction-site context
```

### 상황에 따라 포함

```text
ultra realistic documentary photography
natural depth of field
soft natural daylight through a window
actual Korean construction site / lived-in Korean apartment
```

### 금지

```text
plastic surface
plastic skin
glossy commercial render
cinematic exaggeration
dramatic movie lighting
3D render look
animation look
commercial advertising look
```

**[원문 확보]** 실제 현상·제품이 주인공인 장면에서는 사람 얼굴보다 자재와 현상이 화면의 80% 이상을 담당하는 구성이 검증되었다. 사람은 필요할 때 손·팔·부분 신체만 사용한다.

## 7. 텍스트/로고/제품 인쇄 규칙

1. **[원문 확보]** 기본값은 `no text, no numbers, no labels, no logos, no watermark`다.
2. **[원문 확보]** 자막, 비교 수치, 화살표와 정보 라벨은 Remotion에서 만든다.
3. **[기록 기반 재구성]** 제품 인쇄가 진위·브랜드 식별의 핵심이면 실제 제품 누끼를 사용한다.
4. **[기록 기반 재구성]** 한글 제품명과 세로 인쇄를 생성 모델에 다시 그리게 하지 않는다.
5. **[기록 기반 재구성]** 반복 수정으로 글자가 계속 변하면 prompt 강화가 아니라 생성 경로를 중단한다.
6. **[기록 기반 재구성]** 제품 text의 완전 보존이 절대조건이면 Flow보다 정지 이미지+Remotion을 우선한다.
7. **[원문 확보]** 기존 이미지에 정확한 글자가 이미 있다면 `do not rewrite, fade, remove, duplicate, morph, or animate existing text`를 사용한다. 다만 완전 보장을 의미하지는 않는다.

## 8. Reference 사용 규칙

### 8.1 Single reference

**[원문 확보/기록 기반 재구성]** 다음 상황에서 단일 reference를 우선한다.

- canonical character identity를 유지할 때
- 처짐, 휨, 적층과 단면처럼 형상 민감 자재를 만들 때
- 승인된 이미지를 Flow/Veo exact first frame으로 사용할 때
- 실제 제품의 인쇄와 실루엣을 보존할 때

Reference의 역할은 반드시 하나로 정의한다.

```text
Use the supplied image as the exact structural and compositional starting frame.
```

또는

```text
Use the supplied character image only as the canonical identity reference.
```

### 8.2 Multiple reference

**[기록 기반 재구성]** 여러 캐릭터 reference를 동시에 제공했을 때 generic 3D mascot, Pixar/toy style 또는 특징이 섞인 제3의 캐릭터가 생성됐다.

사용 가능한 조건:

- 각 reference의 역할이 서로 다르고 명확할 때: 예) 캐릭터 identity 1장 + 실제 제품 cutout 1장
- 캐릭터 reference는 반드시 하나만 canonical로 지정할 때
- 제품은 재해석 대상이 아니라 고정 합성 자산임을 명시할 때

금지 사례:

- 서로 다른 버전의 캐릭터 reference 여러 장을 동등한 스타일 기준으로 제공
- 웹툰 캐릭터 reference와 generic 3D mascot reference 혼합
- 제품 사진 여러 장을 주고 정확한 한글 인쇄를 새로 합성하도록 요구

## 9. Small Daesan canonical

### 확정 규격

| 요소 | 규칙 | 근거 |
|---|---|---|
| Body | `#636361` | 원문 확보 |
| Face | `#E4DFD9` | 원문 확보 |
| Outline | `#1E1E1E` | 원문 확보 |
| Eyes/Mouth | `#0A0A0A` | 원문 확보 |
| 얼굴 | 옅은 ivory-gray의 분리된 단순 얼굴, 작은 점 눈과 단순 입 | 원문 확보 |
| 비율 | 큰 머리, 짧은 몸통, 짧은 팔·다리, compact proportions | 원문 확보 |
| 화면 크기 | 화면 높이 약 18~20%, 최대 21% | 원문 확보 |
| 스타일 | editorial webtoon, black hand-drawn ink line | 원문 확보 |
| 금지 | generic 3D mascot, Pixar, toy, photorealistic human | 기록 기반 재구성 |
| reference | 단일 canonical reference 우선 | 기록 기반 재구성 |

공식 기준 이미지:

`xi-natural-gypsum-food-fact-shorts/public/references/characters/small-daesan-canonical-v1.png`

여러 reference를 함께 사용했을 때 얼굴, 눈 크기, 신체 비율과 스타일이 섞였고 제3의 캐릭터가 생성됐다. 이후 단일 canonical reference로 전환해 Scene 간 일관성을 개선했다.

> **중요:** `small-daesan-canonical-v1.png`를 최초 생성한 canonical prompt 전문은 미보존이다. 위 규칙은 기존 소송 canonical 문서와 후속 제작기록에서 확인된 규격이며, 최초 prompt를 재구성한 것이 아니다.

## 10. Flow Start Frame 18개 규칙

1. **[원문 확보]** 첫 프레임에서 제품 형상과 구조가 이미 정확해야 한다.
2. **[원문 확보]** 잘못된 첫 프레임은 영상 전체에서 확대·재생산되므로 영상화하지 않는다.
3. **[원문 확보]** 정확한 9:16 입력 이미지를 사용한다.
4. **[원문 확보]** exact first-frame conditioning과 일반 style reference를 구분한다.
5. **[원문 확보]** 첫 프레임과 마지막 프레임의 형상·구도를 거의 동일하게 요구한다.
6. **[원문 확보]** 카메라는 `fixed`, `locked-off`로 지정한다.
7. **[원문 확보]** zoom, pan, tilt, dolly, orbit, push-in을 금지한다.
8. **[원문 확보]** reframe과 crop change를 금지한다.
9. **[원문 확보]** 동작 방향 앞에 충분한 공간을 확보한다.
10. **[원문 확보]** 한 장면에는 한 메시지와 한 동작만 허용한다.
11. **[기록 기반 재구성]** 4초 장면은 시선 이동, 작은 리액션, 짧은 자세 변화에 적합하다.
12. **[기록 기반 재구성]** 6초 장면은 단일 구조 reveal 또는 한 가지 시공 동작에 적합하다.
13. **[원문 확보]** 움직이지 않을 제품·배경·패널은 static object로 선언한다.
14. **[기록 기반 재구성]** 캐릭터만 움직일 때 `character-only animation`을 명시한다.
15. **[원문 확보]** 캐릭터 위치, 크기, 얼굴, 비율과 canonical 색상을 고정한다.
16. **[원문 확보]** 기존 텍스트의 rewrite, morph, fade, duplicate를 금지한다.
17. **[원문 확보]** 새 물체, 새 신체 부위, 새 그래픽 추가를 금지한다.
18. **[원문 확보]** `late-frame drift`와 중간 구간의 형상 변형까지 명시적으로 금지한다.

### Start Frame 핵심 블록

```text
Use the supplied image as the exact first frame.
Keep the camera completely fixed.
Preserve all static objects, material geometry, object count and composition.
Animate only [one allowed action].
No reframe, crop change, zoom, pan, new objects or late-frame drift.
The final frame must retain nearly identical geometry and composition.
```

## 11. Scene 목적별 문법

### 11.1 Hook

- 화면 구성: 질문을 즉시 만드는 2~3개 핵심 사물만 배치한다.
- 허용 오브젝트 수: 검증 기록상 캐릭터와 핵심 사물 2개 수준이 안정적이다. 이를 모든 Hook의 절대 상한으로 일반화하지는 않는다.
- 캐릭터 리액션: 시선 이동 또는 작은 의아함 한 가지.
- 권장 길이: 약 4초.
- 근거: **[기록 기반 재구성]** Xi 식용 팩트 Scene 1.

```text
Create a strong vertical 9:16 hook image using only [object A], [object B], and [canonical character].
The question must read visually at first glance. Leave top caption space.
For animation, allow only one small eye-line shift from A to B and a restrained puzzled reaction.
```

### 11.2 비교

- 좌우 대상은 같은 크기, 조명, 시점과 시각 비중으로 배치한다.
- 차이를 설명하는 변수만 다르게 한다.
- 우열을 말하지 않는 장면은 한쪽을 더 깨끗하거나 밝게 만들지 않는다.
- 근거: **[원문 확보]** 자이 원료차이와 MDF 비교 기록.

```text
Show A on the left and B on the right at equal scale, equal lighting, equal visual weight and the same camera angle.
Change only [comparison variable]. Do not imply superiority through color, cleanliness, glow or size.
```

### 11.3 원료 설명

- 원료 → 설명자/관계 → 제품 순서가 한눈에 읽히게 한다.
- 원료와 완제품을 같은 물체로 합치지 않는다.
- 근거: **[원문 확보/기록 기반 재구성]** 자이 원료차이, Xi 식용 팩트 Scene 5.

```text
Arrange a clear visual flow: raw material on the left, relationship/explainer in the center, finished product on the right.
Keep all three visually distinct. Do not morph the raw material into the final product inside the still image.
```

### 11.4 구조/단면

- 정면 또는 3/4 cutaway를 사용한다.
- 층의 순서, 접촉 관계, 끝단과 두께를 동시에 보여준다.
- CAD 도면처럼 지나치게 매끈하게 만들지 않을지, 교육용 도식으로 만들지 Scene 목적에 따라 선택한다.
- 근거: **[원문 확보]** 소송 Scene 2.

```text
Show one simple cutaway with the front layer, supporting member and contact relationship clearly visible.
The end face, side face and thickness must all be readable. No extra layers or invented structural members.
```

### 11.5 실제 시공

- 손, 공구, 자재와 하지재의 실제 접촉 관계가 핵심이다.
- 정지 이미지에 복잡한 공구 recoil을 만들지 않는다.
- 근거: **[기록 기반 재구성]** 석고보드 시공.

```text
Show one real construction action: [tool/hand] physically contacting [material] at [support member].
Real camera look, natural work posture, realistic hand-tool contact, no staged presentation pose.
```

### 11.6 Before → After

- 동일한 카메라와 공통 구조를 사용한다.
- 전체 opacity crossfade보다 방향성 mask reveal이 고스팅 방지에 유리했다.
- 근거: **[기록 기반 재구성]** 석고보드 시공 Scene 4.

```text
Create matched start and end frames with identical camera, framing and unchanged shared structure.
Only [installed/changed element] differs. Prepare for a left-to-right mask reveal, not a full-image crossfade.
```

### 11.7 오해 → 반전

- 질문 Hook, 실제 활용 사례, 오해 차단 장면을 분리한다.
- 경고 장면은 불필요한 Flow 모션 없이 정지 이미지가 더 적합할 수 있다.
- 근거: **[기록 기반 재구성]** Xi 식용 팩트.

```text
Create a calm misconception-correction frame. The character uses one clear stop/no gesture.
Keep the material static and leave the key correction text for Remotion.
```

### 11.8 원료 → 제품

- 실제 원료와 실제 제품을 고정하고 캐릭터만 최소 이동한다.
- 제품 인쇄는 재생성하지 않는다.
- 근거: **[기록 기반 재구성]** Xi 식용 팩트 Scene 5.

```text
Keep the raw material and the supplied real product cutout completely static.
Animate only the canonical character with one small transition gesture. Preserve product printing unchanged.
```

### 11.9 제품 소개

- 실제 제품 누끼를 우선한다.
- 제품 주변을 단순화하고 제품 실루엣과 인쇄를 가리지 않는다.
- 근거: **[기록 기반 재구성]** Xi 제품 reference.

```text
Use the supplied product cutout unchanged as the main subject.
Do not redraw, relabel, stylize or regenerate the printed surface. Keep the background simple and secondary.
```

### 11.10 캐릭터 리액션

- 단일 canonical을 사용한다.
- 표정, 시선, 몸 이동 중 한 가지 변화만 허용한다.
- 근거: **[기록 기반 재구성]** Small Daesan Flow 사례.

```text
Use the single supplied canonical character reference.
Allow only [one restrained reaction]. Preserve face, palette, outline, body proportions, position and size.
```

### 11.11 정보형 인포그래픽

- 배경 이미지는 제품·현상만 담당한다.
- 수치, 라벨, 막대그래프와 자막은 Remotion이 담당한다.
- 근거: **[원문 확보/기록 기반 재구성]** MDF 밀도, PF/XPS.

```text
Create a clean material-focused background image with no generated text, numbers, labels or logos.
Reserve clear areas for Remotion comparison cards and captions.
```

## 12. 품목별 문법

### 12.1 각재/목재/LVL — 강한 근거

근거 등급: **[원문 확보]**

#### AI가 자주 틀린 부분

- 각재를 원통, 도웰 또는 파이프로 만든다.
- 길고 가는 각재를 넓은 보드·판재로 만든다.
- 휘어진 각재를 두께 없는 리본으로 만든다.
- 실제 휨 대신 목재 전체를 빨간색으로 칠한다.

#### 성공한 표현

```text
square-section construction batten
rectangular prism
approximately 27x27 mm or 30x30 mm cross-section
visible length at least ten times its width
flat faces and four sharp longitudinal edges
visible square end-grain face
pale natural softwood, clean pale beige to light tan
```

LVL:

```text
multiple thin veneer layers laminated parallel to the member length
grain direction runs parallel along the long axis
not cross-laminated plywood and not thick-lamella glulam
```

#### 필수 negative

```text
board, plank, plywood, panel, sheet material,
cylinder, cylindrical rod, dowel, pipe, tube,
flat ribbon, paper strip, belt, tape,
rounded beam, exaggerated S-curve,
wood recolored entirely red
```

#### Flow 연계

굴리기 동작은 바닥 접촉, 사각 끝단의 방향 변화, 좌우 이동을 모두 명시한다. 단순 sliding, lifting, dragging, hugging과 pressing은 금지한다.

### 12.2 MDF/PB — 강한 근거

근거 등급: **[원문 확보]**

#### 형태·단면

```text
MDF: fine, dense, homogeneous wood-fiber core with no visible large chips or veneer layers
PB: coarse compressed wood-particle core with clearly visible irregular chips and particles
```

MDF와 PB를 같은 화면에서 비교할 때 외부 표면색만 바꾸지 말고 절단 단면의 입자 크기 차이를 핵심으로 한다. 합판의 연속 veneer layer가 보이면 실패다.

#### 처짐 장면 필수 요소

```text
one perfectly straight normal reference line or shelf
one already-sagging MDF shelf
the sagging geometry is the final existing condition
use the supplied approved reference as the exact first frame
preserve the center sag, both supports and comparison line
```

#### 필수 negative

```text
straightening, flattening, repairing or redesigning the shelf,
progressive deformation, ongoing collapse,
changing shelf geometry,
warping the normal reference line,
zoom, pan, tilt, reframe
```

형상 동의어를 반복하거나 negative만 늘리는 방식은 처짐 생성 실패를 해결하지 못했다. 정상 기준선과 승인 reference를 사용한다.

### 12.3 합판 — 제한적

근거 등급: **[원문 확보: LVL과의 구분] / [근거 부족: 합판 고급 세부]**

확정 가능한 기본 규칙:

```text
visible stacked veneer layers at the cut edge
alternating/cross-oriented veneer grain, clearly different from homogeneous MDF and particleboard
real wood face veneer, not a fiber core and not coarse particles
```

금지:

```text
homogeneous MDF core, coarse particleboard core,
parallel-only LVL lamination when ordinary plywood is intended,
single solid-wood slab
```

홀수 ply, 갑판/을판, 자작합판과 일반합판의 상세 시각 차이는 실제 prompt·실패 기록이 부족하므로 **추후 보완**한다.

### 12.4 석고보드 — 부분 근거

근거 등급: **[기록 기반 재구성]**

확정 가능한 규칙:

- 판재가 하지 구조의 어느 면에 접하고 고정되는지 명시한다.
- 실제 시공 동작은 손·공구·판재·하지재의 접촉 관계를 우선한다.
- Xi 등 실제 제품의 인쇄가 중요하면 실제 제품 누끼를 사용한다.
- 한글 인쇄를 AI가 다시 생성하지 않게 한다.
- 타카 고정처럼 정밀한 손·공구 동작은 정지 이미지 recoil보다 실제 Flow 모션이 적합했다.
- Flow 장면 간 동일 작업자 외형보다 시공 단계의 의미와 동작 자연성을 우선한 사례가 있다.

보류:

- 실제 판재 규격과 길이:두께 비율의 표준 prompt
- 원지와 심재의 정확한 색·질감 문법
- 타카 간격, 개수와 시공 표준

### 12.5 PF보드/아이소핑크 — 상세 AI 이미지 문법 미확정

근거 등급: **[근거 부족]**

현재 확인 가능한 것은 Remotion 정보 시각화 원칙이다.

- 좌우 동일 비중 비교 카드
- `115 mm vs 160 mm`와 열전도율 등 수치의 명확한 후편집
- 숫자, 라벨과 그래프는 생성 이미지가 아니라 Remotion에서 표현
- 같은 성능 비교에서 한쪽을 시각적으로 과장해 우월하게 보이지 않게 함

판재 표면, 끝단, 2겹 시공과 실제 현장 상태의 AI prompt는 v1.0에서 만들지 않는다.

### 12.6 창호 — 구조 설명 목적만 확정

근거 등급: **[기록 기반 재구성/근거 부족]**

확정 가능한 시각 목적:

- 창호 제품만이 아니라 창틀 주변 단열과 충진의 연속성을 보여준다.
- 결로를 “창호 교체만으로 완전 해결”된다고 표현하지 않는다.
- 취약부를 설명할 때 프레임 주변 구조가 가려지지 않게 한다.

프레임 단면, 유리 구성, 앵커, 충진재의 세부 실사 prompt는 원문과 반복 검증이 부족해 추후 보완한다.

### 12.7 도어 — v1.0 상세 문법 제외

근거 등급: **[근거 부족]**

조사 프로젝트에서 재사용 가능한 실제 이미지 prompt와 시행착오가 확인되지 않았다. 일반 건축 지식으로 문법을 추정하지 않는다.

## 13. 실제 제품 reference workflow

대표 사례: Xi 천연석고보드. 근거 등급: **[기록 기반 재구성]**

### 시도

실제 자이 천연석고보드를 촬영하고, 생성 이미지와 Flow에서 원석·Small Daesan·제품을 한 장면에 배치했다.

### 문제

이미지·영상 생성 과정에서 제품 표면의 세로 한글 인쇄가 반복해서 깨졌다. 여러 번 수정해도 정확한 원문으로 고정되지 않고 다른 글자로 변형됐다.

### 원인 판단

생성 모델이 제품 인쇄를 보존해야 할 고정 그래픽이 아니라 재생성 가능한 표면 texture로 해석했다. Flow에서는 프레임 간 시간적 일관성 때문에 글자가 추가로 흔들릴 수 있었다.

### 해결

현장 촬영 제품에서 배경을 제거해 실제 누끼를 제작했다.

`xi-natural-gypsum-food-fact-shorts/public/references/products/xi-natural-gypsum-board-cutout-v1.png`

제품과 원석을 static object로 두고 Small Daesan만 움직이게 했다. 완전한 글자 고정이 필요한 경우에는 Flow 대신 정지 이미지+Remotion을 우선하는 규칙을 확정했다.

### 최종 채택

제품 글자에 미세한 흔들림은 남았지만 사용 가능한 Flow 결과를 채택했다. 따라서 이 사례는 “Flow가 글자를 완전히 보존했다”는 성공 근거가 아니라, “실제 누끼로 오류를 줄였지만 완전 보존은 보장할 수 없다”는 근거다.

## 14. 실패 패턴 DB

### 14.1 각재가 원통·도웰로 변함

- 시도: 바닥에서 각재를 굴려 휨을 확인하는 장면 생성.
- 결과: 중앙 자재가 원통형 롤러로 생성됨.
- 원인 판단: `roll` 동작이 원통 물체와 강하게 연결됨.
- 수정 문법: square-section, rectangular prism, flat faces, square end-grain을 반복 고정.
- 최종 해결: 사각 단면이 보이는 reference를 승인 후 사용.
- 재발 방지 규칙: cylinder, dowel, rod, pipe, tube를 negative에 명시.

### 14.2 각재가 보드·판재로 변함

- 시도: 소송 각재를 일반 목재 설명만으로 생성.
- 결과: 폭이 넓은 plank/panel로 표현됨.
- 원인 판단: 규격 숫자만으로 길이비가 충분히 고정되지 않음.
- 수정 문법: visible length at least ten times its width.
- 최종 해결: 실제 단면 규격과 길고 가는 비율을 함께 명시.
- 재발 방지 규칙: board, plank, plywood, panel, sheet material 금지.

### 14.3 휘어진 각재가 리본처럼 변함

- 시도: 불량 각재의 완만한 휨을 요청.
- 결과: 두께와 단면이 없는 곡선 띠로 생성됨.
- 원인 판단: curved/warped 실루엣만 강조하고 3D 단면 보존이 약했음.
- 수정 문법: every defective piece retains square end grain, side face and thickness.
- 최종 해결: 끝단 사각 단면과 측면 결이 보이는 결과를 채택.
- 재발 방지 규칙: flat ribbon, paper strip, belt, tape 금지.

### 14.4 색상으로만 휨을 표현

- 시도: 불량 부위를 빨간색으로 강조.
- 결과: 실제 geometry는 거의 곧고 빨간 overlay만 생김.
- 원인 판단: 강조색이 결함 형상보다 강하게 해석됨.
- 수정 문법: defect is communicated by actual geometry, not recoloring.
- 최종 해결: 목재 기본색 유지 + 얇은 국소 강조선만 허용.
- 재발 방지 규칙: 색을 제거해도 휨이 읽히는지 QA한다.

### 14.5 텍스트 라벨이 중복됨

- 시도: 정확한 한글 라벨 3개를 이미지에 직접 생성.
- 결과: 일부 라벨이 2회씩 중복됨.
- 원인 판단: 생성 모델이 의미 연결을 위해 라벨을 반복 배치함.
- 수정 문법: exactly one instance each, total count 명시.
- 최종 해결: 해당 프로젝트에서는 재생성으로 개선했지만 일반 원칙은 Remotion 후편집.
- 재발 방지 규칙: 생성 이미지 텍스트 기본 금지.

### 14.6 한글 제품 인쇄가 변형됨

- 시도: Xi 제품의 실제 한글 인쇄를 생성·영상화.
- 결과: 프레임과 수정본마다 글자가 깨지거나 바뀜.
- 원인 판단: 인쇄가 고정 그래픽이 아닌 생성 texture로 처리됨.
- 수정 문법: supplied product cutout unchanged; do not redraw printed surface.
- 최종 해결: 실제 촬영 누끼 우선, 완전 보존 시 정지+Remotion.
- 재발 방지 규칙: 실제 제품 인쇄를 AI로 새로 만들지 않는다.

### 14.7 규격 숫자는 맞지만 실제 비율이 틀림

- 시도: `27×27 mm` 숫자만 prompt에 포함.
- 결과: 물체의 폭과 길이는 넓은 판재처럼 보일 수 있었음.
- 원인 판단: 모델이 수치보다 일반 목재 이미지를 우선함.
- 수정 문법: 숫자 + square-section + length ratio + 금지 형태.
- 최종 해결: 네 종류의 형상 신호를 함께 사용.
- 재발 방지 규칙: 수치만으로 규격을 고정하지 않는다.

### 14.8 요청보다 많은 자재·선반 생성

- 시도: 정상 1단과 처진 1단의 비교 이미지 생성.
- 결과: 정상 선반이 하나 더 생겨 3단 구조가 됨.
- 원인 판단: 일반적인 가구 구조를 모델이 보완함.
- 수정 문법: exactly two shelves; empty space below; no additional shelf.
- 최종 해결: 빈 공간까지 명시한 재생성에서 2단 확보.
- 재발 방지 규칙: 개수와 “없어야 할 위치”를 함께 적는다.

### 14.9 generic 3D mascot/Pixar/toy화

- 시도: Small Daesan을 일반 설명과 여러 스타일 reference로 생성.
- 결과: 3D 피규어·Pixar풍 캐릭터로 재해석됨.
- 원인 판단: canonical identity와 2D line style 고정이 약함.
- 수정 문법: editorial webtoon, hand-drawn ink line, not 3D/Pixar/toy.
- 최종 해결: 단일 canonical reference 사용.
- 재발 방지 규칙: 캐릭터를 prompt만으로 새로 정의하지 않는다.

### 14.10 multiple reference가 제3의 캐릭터를 생성

- 시도: 캐릭터 reference 여러 장을 동시에 제공.
- 결과: 얼굴·체형·스타일이 섞인 새 캐릭터가 생성됨.
- 원인 판단: 모델이 어느 이미지도 canonical로 선택하지 않고 평균화함.
- 수정 문법: one canonical identity reference only.
- 최종 해결: 공식 canonical 한 장을 별도 보관하고 우선 사용.
- 재발 방지 규칙: 서로 다른 캐릭터 버전을 동등한 reference로 넣지 않는다.

### 14.11 캐릭터 얼굴색·눈·팔다리·크기 변화

- 시도: Scene별 reference edit로 캐릭터를 맞춤.
- 결과: 얼굴색, 눈 크기, 몸통과 다리 길이가 달라짐.
- 원인 판단: 편집 과정에서 전체 character geometry가 재해석됨.
- 수정 문법: palette HEX, 18~20% height, compact proportions, preserve face geometry.
- 최종 해결: 색상은 로컬 recolor, 새 장면은 최초부터 canonical 적용.
- 재발 방지 규칙: 색·체형 검수를 자재 검수보다 먼저 수행.

### 14.12 reference edit가 전체 이미지를 재해석

- 시도: 캐릭터 색상만 바꾸는 reference edit.
- 결과: 배경·제품·구도까지 달라질 위험 발생.
- 원인 판단: 생성 편집은 픽셀 선택 편집이 아니라 전체 재생성일 수 있음.
- 수정 문법: change only character colors; preserve everything else exactly.
- 최종 해결: 단순 색 변경은 로컬 pixel recolor.
- 재발 방지 규칙: 생성형 편집이 불필요한 수정은 비생성형 도구 사용.

### 14.13 MDF 처짐을 정상 가구로 복원

- 시도: sagging/bent/bowed를 text-only prompt로 반복.
- 결과: 선반이 반듯하거나 둥근 디자인 모서리로 정상화됨.
- 원인 판단: 모델이 비정상 구조를 그럴듯한 가구로 복원함.
- 수정 문법: 승인 reference exact first frame + 정상 기준선.
- 최종 해결: reference-first image-conditioned 생성.
- 재발 방지 규칙: 형상 동의어만 추가하는 실험을 반복하지 않는다.

### 14.14 정상 비교 선반까지 물결침

- 시도: 처진 선반 reference를 영상화.
- 결과: 중간 프레임에서 정상 선반이 일시적으로 물결침.
- 원인 판단: 정상 기준선의 전 구간 rigid 보존 지시가 약했음.
- 수정 문법: remain perfectly straight and rigid for the full duration, including the middle.
- 최종 해결: 한 문장 보강 후 전 구간 안정.
- 재발 방지 규칙: 첫·끝뿐 아니라 중간 구간까지 명시한다.

### 14.15 정지 타카 이미지에 recoil을 주어 전체가 진동

- 시도: 단일 실사 이미지의 공구에 1~2px recoil·진동 적용.
- 결과: 공구만이 아니라 작업자와 화면 전체가 흔들려 보임.
- 원인 판단: 손·공구·몸·배경이 한 평면에 묶여 있음.
- 수정 문법: 복잡한 공구 동작은 실제 영상으로 전환.
- 최종 해결: 실제 타카 시공 모션이 있는 Flow 결과 채택.
- 재발 방지 규칙: 분리 레이어 없는 정지 이미지에 관절 동작을 강제하지 않는다.

### 14.16 타카 SFX만으로 시공 동작을 보완하지 못함

- 시도: 완전 정지 이미지에 타카 SFX를 동기화.
- 결과: 소리는 나지만 시각적 고정 동작이 전달되지 않음.
- 원인 판단: 핵심 메시지가 물리적 접촉 동작이기 때문.
- 수정 문법: 시공 의미가 동작에 의존하면 실제 모션 확보.
- 최종 해결: Flow 실사 사용.
- 재발 방지 규칙: 음향을 누락된 핵심 시각 정보의 대체물로 쓰지 않는다.

### 14.17 crossfade 고스팅

- 시도: start/end 시공 이미지를 opacity crossfade.
- 결과: 인물과 구조물 경계가 동시에 겹쳐 보임.
- 원인 판단: 두 전체 이미지를 섞어 공통 구조도 이중화됨.
- 수정 문법: matched camera + directional mask reveal.
- 최종 해결: 좌→우 mask wipe.
- 재발 방지 규칙: 동일 구도 Before→After는 전체 crossfade보다 reveal을 우선 검토.

### 14.18 Flow 원본 재렌더 시 체감 끊김

- 시도: 24fps Flow MP4를 Remotion 24/30fps로 재렌더.
- 결과: 프레임은 거의 같지만 원본보다 끊겨 보임.
- 원인 판단: 단순 FPS 문제보다 재인코딩·업스케일·색 처리 부담 가능성.
- 수정 문법: 이미지 prompt 문제가 아니라 파이프라인 보존 규칙으로 전환.
- 최종 해결: Flow 원본 MP4 유지, FFmpeg 중심 조립.
- 재발 방지 규칙: 확정 Flow 원본을 불필요하게 재인코딩하지 않는다.

### 14.19 불필요한 zoom/pan/creeping zoom

- 시도: 정적 현상 장면을 일반 영상 prompt로 생성.
- 결과: 카메라가 넓어지거나 서서히 줌하여 핵심 형상이 약해짐.
- 원인 판단: 모델이 정지 장면에 자동으로 cinematic motion을 추가함.
- 수정 문법: locked-off, no zoom/pan/tilt/dolly/reveal.
- 최종 해결: 거의 정지 사진 수준의 image-conditioned 영상.
- 재발 방지 규칙: 카메라 움직임은 명시적 목적이 있을 때만 허용.

### 14.20 시공 구조를 영상 중 임의 변경

- 시도: 구조 reveal과 자연스러운 모션을 함께 요청.
- 결과: 선반·판재·배경 요소가 중간에 변형될 위험 발생.
- 원인 판단: “살아 있는 장면” 지시가 정적 구조에도 적용됨.
- 수정 문법: static object preservation, no new visual storytelling.
- 최종 해결: 구조는 고정하고 캐릭터 또는 reveal 하나만 허용.
- 재발 방지 규칙: 움직이는 대상과 고정 대상을 분리해 목록화한다.

### 14.21 대화 장면의 핀마이크·카메라 응시·로고 오생성

- 시도: 두 인물이 MDF 문제를 설명하는 다큐 대화 장면.
- 결과: 핀마이크가 반복 생성되고 카메라를 응시하며 한글 로고가 틀림.
- 원인 판단: 대화 구도가 인터뷰·방송 패턴을 유도함.
- 수정 문법: 제품/현상 중심, 사람은 20% 미만, 대화와 생성 로고 제거.
- 최종 해결: 인물 대화형에서 제품 중심 B-roll+Remotion으로 전환.
- 재발 방지 규칙: 제품 설명을 생성 영상 속 대사와 로고에 의존하지 않는다.

### 14.22 4초에 구조 reveal과 긴 설명을 함께 넣음

- 시도: 완성 벽에서 내부 하지 구조 reveal과 긴 TTS를 4초에 배치.
- 결과: 구조 인지와 자연스러운 발화를 모두 수용하지 못함.
- 원인 판단: 시각 변화와 설명에 필요한 시간이 다름.
- 수정 문법: 6초 단일 reveal, TTS 문장 축약, playbackRate 유지.
- 최종 해결: 6초 Flow 원본 + 5.184초 TTS.
- 재발 방지 규칙: 4초는 리액션, 6초는 구조 reveal을 기본 판단 기준으로 삼되 장면별 검수한다.

## 15. 생성 후 QA 체크리스트

- [ ] 출력 화면이 정확한 9:16인가?
- [ ] 상단 약 20% 자막 safe area가 확보됐는가?
- [ ] 하단 약 15% 안전영역이 확보됐는가?
- [ ] 핵심 자재 종류가 정확한가?
- [ ] 길이/폭/두께 비율이 실제 자재처럼 보이는가?
- [ ] 단면 형태가 정확하고 끝단·측면·두께가 읽히는가?
- [ ] 요청한 자재·층·선반·캐릭터 개수가 정확한가?
- [ ] 비어 있어야 할 위치에 불필요한 물체가 없는가?
- [ ] 텍스트·숫자·라벨·로고·워터마크 오류가 없는가?
- [ ] 실제 제품 인쇄가 훼손되거나 재생성되지 않았는가?
- [ ] Small Daesan의 색, 얼굴, 외곽선과 비율이 canonical과 일치하는가?
- [ ] multiple reference가 제3의 캐릭터나 혼합 스타일을 만들지 않았는가?
- [ ] Flow 동작 방향 앞에 충분한 여백이 있는가?
- [ ] 카메라와 구도를 영상 전체에서 고정할 수 있는가?
- [ ] 움직이는 대상과 static object가 명확히 분리됐는가?
- [ ] 자재의 휨·처짐이 색이 아닌 geometry로 읽히는가?
- [ ] CGI, plastic, glossy 3D render 느낌이 없는가?
- [ ] 실제 현장 조명, 그림자와 재료 texture가 자연스러운가?
- [ ] 첫 프레임 오류가 영상화 과정에서 확대될 위험이 없는가?
- [ ] Final Start Frame을 사람이 승인했는가?
- [ ] 한 Scene에 pastel accent가 하나만 사용됐는가?
- [ ] 제품 표면을 라벨이나 자막이 가리지 않는가?
- [ ] 실사 제품과 Remotion 정보 레이어가 분리됐는가?
- [ ] 미세한 제품 차이를 색, 광택, 크기로 과장하지 않았는가?
- [ ] 움직임이 없어도 Start Frame 자체가 완성된 화면인가?
- [ ] 제품과 캐릭터의 주·보조 관계가 Scene 목적에 맞는가?
- [ ] 수정 대상 외 승인 요소가 LOCK됐는가?
- [ ] 실패 시 복귀할 마지막 승인본과 변경 범위가 기록됐는가?

## 16. MASTER TEMPLATE

### 사용자 입력 폼

```text
[품목]
[Scene 역할]
[실사/웹툰/혼합]
[reference 유무]
[Flow 사용 여부]
[핵심 전달 메시지]
[자재 규격]
[보존 요소]
[금지 요소]
[상단 typography safe area]
[Scene pastel accent 1개]
[Remotion 라벨 여백]
[제품/캐릭터 주·보조 관계]
[마지막 승인본]
[이번 수정 대상 1개]
```

### 복붙용 영어 Prompt MASTER TEMPLATE

```text
ROLE / ASSET GOAL
Create one production-ready vertical image for a Korean construction-material Shorts/Reels project.
Asset type: [Flow Start Frame / informational still / realistic jobsite still / character-plus-product image].
Visual mode: [photorealistic / editorial webtoon / controlled mixed media].

REFERENCE RULE
[No reference / Use the supplied image as the exact structural first frame / Use the supplied character image as the single canonical identity reference / Use the supplied real product cutout unchanged.]
Do not blend the canonical character with any other character design.

REFERENCE PRIORITY
Use references in this order: verified real product photography, approved product image, then visual style.
Never sacrifice material accuracy to match a decorative style.

PRODUCT ACCURACY LOCK
Lock the approved material geometry, cross-section, layer order, surface texture, edge detail, print and object count.
Do not exaggerate subtle product differences through invented color, gloss, scale or cleanliness.

SCENE PURPOSE
One scene, one message: [CORE MESSAGE].
The viewer must understand [SCENE ROLE] at first glance.

MAIN MATERIAL
The main subject is [MATERIAL], not the person or background.
It must read as the real construction material used in [REAL CONTEXT].

CRITICAL GEOMETRY AND SPECIFICATION
- Cross-section: [CROSS-SECTION].
- Dimensions and ratio: [DIMENSIONS / LENGTH-TO-WIDTH / THICKNESS].
- Layering and direction: [LAYER COUNT / GRAIN ORIENTATION].
- Exact quantity: [COUNT].
- Contact/installation state: [SUPPORT / FASTENER / EDGE / JOINT RELATIONSHIP].
- Empty areas that must remain empty: [EMPTY AREA].

COMPOSITION
Vertical 9:16 canvas.
Reserve approximately 20-30% at the top as an upper typography safe area and approximately 15% at the bottom as a safe area.
Keep the main object group within the middle 55-65% of the frame.
Place [OBJECT POSITIONS].
Leave clear movement space in front of [MOVING SUBJECT] toward [DIRECTION].
Use one restrained pastel accent color only. Keep labels off the product surface and reserve clean Remotion label space below or beside the product.
Default to no gradient, no glow and no strong decorative shadow.

MATERIAL AND SURFACE
Show realistic [GRAIN / FIBER / PARTICLE / PAPER FACING / CORE / END-GRAIN] texture.
Color: [ACTUAL MATERIAL COLOR].
The material difference must be visible through real surface and geometry, not through arbitrary color coding.

CAMERA AND LIGHTING
[CAMERA ANGLE], locked-off fixed camera.
Real camera look, not CGI.
Natural lighting, soft real shadows, realistic material texture and natural depth of field.
No dramatic movie lighting or glossy commercial advertising look.

CHARACTER RULE, IF USED
Use only the single supplied canonical reference.
Preserve the exact face, palette, outline, head-to-body ratio, short torso and short limbs.
The character is secondary to the material.

PRODUCT VS CHARACTER HIERARCHY
For product-information scenes, the real product is the primary subject and the character is secondary.
Increase character prominence only when the scene role is a hook, reaction or closing tip.

ALLOWED MOTION, IF FLOW IS USED
Allow only one action: [ONE ACTION].
Duration target: [4 seconds for a restrained reaction / 6 seconds for one structural reveal or construction action].
All other objects remain completely static.

PRESERVE EXACTLY
Preserve [GEOMETRY, OBJECT COUNT, POSITION, BACKGROUND, PRODUCT PRINT, CHARACTER IDENTITY] from the first frame through the final frame.
The first and final frames must retain nearly identical geometry and composition.

LOCK UNCHANGED ELEMENTS
Change only [ONE TARGET ELEMENT].
Lock every previously approved product, character, background, camera, lighting and composition element.
If the result regresses after 2-3 attempts, stop regenerating and restore [LAST APPROVED VERSION].

NEGATIVE PROMPT
CGI, 3D render, plastic surface, glossy commercial render, cinematic exaggeration,
dramatic movie lighting, incorrect material, changed cross-section, changed thickness,
changed geometry, extra layers, extra objects, duplicated objects, morphing, flickering,
text, numbers, labels, subtitles, fake Korean text, logos, watermark,
zoom, pan, tilt, dolly, orbit, push-in, reframe, crop change, camera shake,
new objects, late-frame drift,
[MATERIAL-SPECIFIC NEGATIVES],
[USER-SUPPLIED FORBIDDEN ELEMENTS].

POST-PRODUCTION
Do not generate captions, numeric labels, arrows or graphic logos.
These elements will be added later in Remotion.
Do not redraw real product printing; preserve the supplied product cutout unchanged.
Reserve clean overlay space so Remotion labels never cover important product texture.

FLOW START-FRAME CONDITIONS
Use this image as the exact first frame.
Do not reinterpret the approved structure.
Keep static objects frozen and animate only [MOVING SUBJECT].
No reframe, crop change, new visual storytelling or late-frame drift.
The still frame must already work as a complete composition without motion.
Do not add corrective push-in, zoom or crossfade before comparing against the last approved motion treatment.
```

## 17. 품목별 QUICK TEMPLATE

### 17.1 각재

```text
Create a vertical 9:16 real construction-material image of one long slender Korean softwood batten. It is a rectangular prism with a square 27x27 mm or 30x30 mm cross-section, visible length at least ten times its width, flat faces, four sharp long edges and a visible square end-grain face. Pale natural softwood, light beige to light tan, realistic grain. Never a board, plank, plywood, panel, cylinder, dowel, pipe, tube or ribbon. No text or logo. Real camera look, natural light, not CGI.
```

### 17.2 LVL

```text
Create a vertical 9:16 close material view of a real LVL member. Show multiple thin wood veneer layers laminated parallel along the full member length, with grain direction running along the long axis. Keep the rectangular structural-member geometry and clearly visible layered edge. Not cross-laminated plywood, not thick-lamella glulam, not solid timber, not MDF or particleboard. Realistic veneer texture, natural light, no text, no CGI.
```

### 17.3 MDF

```text
Create a vertical 9:16 realistic MDF material image. Show a cut edge with a fine, dense, homogeneous wood-fiber core, no large chips and no veneer layers. If showing sagging, include one perfectly straight reference line and use the supplied approved sagging image as the exact first frame. Preserve the existing center sag and supports; do not straighten, repair, redesign or progressively deform the shelf. Fixed camera, no text, no CGI.
```

### 17.4 PB

```text
Create a vertical 9:16 realistic particleboard material image. Show a cut edge with clearly visible coarse compressed irregular wood chips and particles. The core must not look like fine homogeneous MDF and must not contain stacked plywood veneer layers. Natural board color, realistic particles and soft real shadows. No text, labels, logos, glossy render or CGI.
```

### 17.5 합판

```text
Create a vertical 9:16 realistic basic plywood cross-section image. Show stacked wood veneer layers clearly at the cut edge, with alternating/cross-oriented grain, and a real wood face veneer. It must not look like homogeneous MDF, coarse particleboard, a single solid-wood slab or parallel-only LVL. No generated ply-count claim, grade label or species claim. Natural light, no text, not CGI.
```

### 17.6 석고보드

```text
Create a vertical 9:16 realistic gypsum-board installation image. Show one board positioned directly against the specified supporting frame so the board-to-frame contact relationship is clear. Use a real product cutout unchanged if printed product identity matters; do not redraw or regenerate Korean product printing. Show only one clear installation action with natural hand-tool contact. Real jobsite lighting, fixed camera, no fake text, no CGI. Detailed board dimensions, core specification and fastener spacing must be supplied from verified product data before generation.
```

## 18. 원문 prompt 부록

이 부록은 프로젝트에 실제로 남아 있는 prompt의 핵심 원문을 보존한다. 길이가 매우 긴 prompt는 형상·카메라·negative 등 재사용 핵심 블록을 원문 그대로 발췌하고 원본 파일 위치를 함께 기록한다. 원문 미보존 항목은 재구성하지 않는다.

### 18.1 소송 1탄 — Scene 1 이미지

근거: `sosong-webtoon-shorts/docs/generation-record.md`

```text
Use case: illustration-story
Asset type: Scene 1 reference image for a vertical webtoon-style construction-material explainer short
Primary request: Illustrate a jobsite worker sorting warped sosong lumber battens by rolling one batten on the floor to check whether it is bent.

Scene/backdrop: pure white background; no environmental scenery; clean and simple.

Subject and composition: vertical 9:16 canvas. Keep the entire main scene within the middle 55–65% of the canvas, leaving roughly 20% clear space at the top and 15% at the bottom for later Remotion captions.

Critical lumber geometry: every piece must look like real Korean construction batten / sosong gakjae / darukki, with a long thin stick shape and a near-square 27×27 mm or 30×30 mm cross-section. Visible length must be at least ten times its width. Narrow width and thickness must be unmistakable. These are slender square-section timber strips, never boards.

Action clarity: the central batten stays on the floor. One hand lightly pushes/rolls it. The character must not hug, carry, lift, or hold the batten.

Text: no text, no numbers, no labels, no logos, no watermark, no signatures, no typographic marks.

Avoid: wide board, plank, plywood, panel, sheet material, broad rectangular timber, oversized beams; excessive S-curves or cartoonishly broken lumber; cute children's character style; human-shaped anatomy; photorealism; 3D render; glossy stock vector infographic; clutter; excessive empty space.
```

### 18.2 LVL — 핵심 형상 원문

근거: `sosong-lvl-webtoon-shorts/docs/scene04-image-prompt.md`, 프로젝트 작업기록.

```text
thin veneer layers laminated along the member length
grain direction parallel to the long axis
not plywood cross-lamination
not glulam
```

> LVL 문서의 전체 Scene prompt는 원본 파일에 보존한다. 위 네 줄은 반복 기록에서 확인되는 핵심 형상 문구다.

### 18.3 MDF density — 최종 image-conditioned Veo prompt

근거: `remotion_video/mdf-density/prompts/scene1.md`

```text
Use the supplied image as the exact structural and compositional starting frame. Preserve the visible downward bow of the MDF shelf exactly as shown. Do not straighten, flatten, redesign, repair, or reinterpret the shelf. Maintain the same left support, center sag, right support, bedding placement, wardrobe framing, and horizontal comparison line throughout the entire shot. The straight reference shelf directly above must remain perfectly straight and rigid for the full duration of the clip, never bending, rippling, waving, or distorting at any point, including the middle of the shot. The first frame and final frame must retain the same shelf geometry and nearly identical composition.

This is a mostly static B-roll shot, close to a still photograph brought barely to life. The camera does not move. The scene's purpose is to show the state of the sagging shelf, not object motion.

Allowed: extremely subtle, natural indoor light variation; the faintest, almost imperceptible stillness of the fabric texture; realistic sensor-level texture consistent with a real living space.

Forbidden: zoom in, zoom out, pan, tilt, dolly, handheld shake, rack focus, cinematic reveal, shelf deformation animation, the shelf bending further or straightening back, bedding sliding or falling, doors opening or closing, new objects appearing, people, hands, arms.
```

Negative 원문:

```text
straight shelf, flat shelf, rigid shelf, repaired shelf, shelf returning to level, changing shelf geometry, redesigned furniture, warped wardrobe frame, wide room shot, camera movement, zoom, pan, tilt, handheld, cinematic reveal, letterbox, film border, black border, picture frame border, people, hands, arms, text, logo, watermark
```

### 18.4 다루끼/투바이 — static preservation 핵심 원문

근거: `darukki-vs-twobuy-webtoon-shorts/prompts/veo/legacy-preservation-template.txt` 및 Scene prompt.

```text
Preserve the supplied reference image as strictly as possible.
Keep the camera fixed.
Keep all existing objects, positions, colors, lighting, composition and graphic elements static.
Do not add new objects, new graphics, new symbols or new text.
No camera movement, zoom, push-in, pan, tilt, orbit, reframing or crop change.
Maintain the exact original image appearance through the final frame.
```

### 18.5 자이 천연석고 원료차이 — identity/text preservation 핵심 원문

근거: `xi-natural-gypsum-webtoon-shorts/scripts/prompts/scene02-raw-material-v2.txt`, `scene02-veo-v4-sosong-style.txt`.

```text
Show the left and right material characters somewhat larger than they appeared in Scene 1 so the raw-material difference is easy to understand. Give them equal scale, equal prominence, balanced neutral lighting, and equal visual weight. Neither character may look better, safer, cleaner, greener, darker, dangerous, polluted, superior, or inferior.

Do not turn either material character into a gypsum rock or mineral lump.
Do not redesign them as different people or different creatures.
Do not alter their face, head silhouette, colors, body proportions, or expression language.
LEFT always equals 천연석고.
RIGHT always equals 배연탈황석고.
Never swap or mirror the two sides.
```

Veo 보존 원문:

```text
Preserve the supplied reference image as strictly as possible.
The camera must remain fixed.
Do not rewrite, fade, remove, duplicate, morph, or animate existing Korean text.
No new text.
No fake Korean text.
No zoom.
No push-in.
No pan.
No tilt.
No reframing.
No transition.
```

### 원문 미보존 항목

다음은 작업기록은 있으나 당시 생성 prompt 전문이 없어 이 부록에서 재구성하지 않는다.

- MDF/PB/합판 비교 이미지 prompt
- 석고보드 시공 Flow prompt
- Xi 식용 팩트 Scene별 이미지·Flow prompt
- 창호 결로 이미지 prompt
- PF보드/아이소핑크 이미지 prompt
- Small Daesan 최초 canonical 생성 prompt

## 19. 추후 보완 항목

1. PF보드 실제 표면, 끝단, 두께와 시공 상태 prompt
2. 아이소핑크 실제 표면, 끝단, 2겹 시공 prompt
3. 창호 프레임·유리·앵커·충진부 실사 prompt
4. 도어 품목별 실사·단면 prompt
5. 합판 홀수 ply, 갑판/을판, 자작합판/일반합판 문법
6. 석고보드 원지·심재·상세 규격과 타카 간격 문법
7. Small Daesan 최초 canonical prompt 원문

## 문서 운영 구조

`프로젝트 작업기록`
→ `검증`
→ `재사용 가치 판단`
→ `마스터 가이드 승격`
→ `MASTER/QUICK TEMPLATE 갱신`

역할:

- 프로젝트 MD = 상세 시행착오와 원본 작업일지
- 마스터 가이드 = 검증된 재사용 표준

## 가이드 고도화 운영 규칙

1. 새로운 시행착오는 먼저 해당 프로젝트의 `docs/YY.MM.DD수정.md`에 기록한다.

2. 프로젝트 기록 형식은 기본적으로 `시도 → 문제 → 원인 판단 → 해결 → 최종 채택`을 사용한다.

3. 한 번의 우연한 성공만으로 마스터 가이드의 공통 규칙으로 확정하지 않는다.

4. 아래 중 하나를 만족할 때 마스터 가이드 승격을 검토한다.
   - 다른 Scene/프로젝트에서도 재현됨
   - 실패 원인과 해결 원인이 명확함
   - 실제 reference/최종 승인본으로 검증됨
   - 품목 고유 특성으로 반복 적용 가치가 높음

5. 마스터 가이드에 규칙을 추가할 때 가능하면 아래 메타정보를 함께 남긴다.
   - 근거 프로젝트
   - 작업 날짜
   - 근거 수준: `원문 확보 / 기록 기반 재구성 / 근거 부족`

6. 기존 규칙과 새로운 결과가 충돌하면 기존 내용을 조용히 덮어쓰지 않는다. 변경 이력에 아래 내용을 기록한다.
   - 기존 규칙
   - 새 결과
   - 변경 이유

7. 더 이상 사용하지 않는 규칙도 단순 삭제하지 않고 필요하면 실패 패턴 DB 또는 변경 이력에 남긴다.

8. 근거가 부족한 품목은 추정으로 문법을 채우지 않고 `추후 보완` 상태를 유지한다.

9. 품목별 규칙이 변경되면 관련 QUICK TEMPLATE도 함께 검토한다.

10. 공통 문법이 변경되면 MASTER TEMPLATE도 함께 검토한다.

11. 이미지 생성 시에는 현재 마스터 가이드의 최신 규칙을 1차 기준으로 사용한다.

12. 실제 상품 정보/현장 지식과 가이드가 충돌하면 정확한 상품·현장 정보가 우선이며, 가이드의 잘못된 규칙을 수정 후보로 기록한다.

13. 프로젝트 종료 시 아래 순서로 운영한다.
    - 프로젝트 일일 MD 검토
    - 재사용 가능한 노하우 선별
    - 마스터 가이드 승격 여부 판단

14. 마스터 가이드는 매일 복사본을 만드는 방식이 아니라 하나의 통합 문서를 지속 고도화한다.

15. 각 프로젝트의 일일 MD는 마스터 가이드 규칙이 생긴 근거를 역추적할 수 있는 원본 작업기록으로 보존한다.

## 사용 원칙

- 이 가이드는 실제 제작 근거에 기반한다.
- 품목별 규칙과 검증된 실제 상품 지식이 충돌하면 상품 지식을 우선한다.
- 제조사 규격, 법정 기준과 시공 기준은 별도 공식 자료로 확인한다.
- 생성 단계에서는 자막과 텍스트를 최소화하고 Remotion 후편집을 우선한다.
- 실제 제품 로고와 인쇄는 AI가 새로 만들지 않는다.
- 캐릭터는 단일 canonical reference를 우선한다.
- 형상 민감 자재는 reference-first workflow를 사용한다.
- Final Start Frame을 사람이 승인한 후 Flow로 진행한다.
- 실패 prompt를 그대로 반복하지 말고 실패 패턴 DB에서 대응 문법을 찾는다.
- 근거 부족으로 표시된 품목은 일반 지식으로 상세 prompt를 추정하지 않는다.
