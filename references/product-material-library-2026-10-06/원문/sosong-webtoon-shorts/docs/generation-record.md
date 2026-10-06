# Scene 01 이미지 생성 기록

- 사용 모델: OpenAI 내장 이미지 생성 모델 (정확한 백엔드 모델 식별자는 도구에서 제공되지 않음)
- 출력 해상도: 941 × 1672 px (세로 9:16)
- 파일 용량: 702,018 bytes (약 685.6 KiB)
- 생성 횟수: 1회
- 예상 비용: 내장 이미지 생성 도구가 과금 단가 및 실제 비용을 제공하지 않아 산정 불가
- 글자 오염 여부: 없음
- 자체 판정: PASS

## 실제 최종 프롬프트

```text
Use case: illustration-story
Asset type: Scene 1 reference image for a vertical webtoon-style construction-material explainer short
Primary request: Illustrate a jobsite worker sorting warped sosong lumber battens by rolling one batten on the floor to check whether it is bent.
Scene/backdrop: pure white background; no environmental scenery; clean and simple.
Subject and composition: vertical 9:16 canvas. Keep the entire main scene within the middle 55–65% of the canvas, leaving roughly 20% clear space at the top and 15% at the bottom for later Remotion captions. On the left, place 2–3 straight usable lumber battens on the floor. In the center, a small black blob-shaped worker uses one thin hand to roll a single batten while it remains lying on the floor, visually checking its bend. On the right, place 3–4 defective battens with realistic gentle bowing. The normal-versus-defective difference must read immediately. Show some end-grain cross-sections.
Critical lumber geometry: every piece must look like real Korean construction batten / sosong gakjae / darukki, with a long thin stick shape and a near-square 27×27 mm or 30×30 mm cross-section. Visible length must be at least ten times its width. Narrow width and thickness must be unmistakable. These are slender square-section timber strips, never boards.
Character: small solid-black amorphous blob, two tiny white dot eyes, very short thin arms and legs, neutral expression, diligent worker feeling; deliberately non-human body proportions; occupies little of the frame.
Action clarity: the central batten stays on the floor. One hand lightly pushes/rolls it. The character must not hug, carry, lift, or hold the batten. Small orange motion marks may show rolling.
Style/medium: professional Korean webtoon or newspaper editorial illustration for construction-material education; black hand-drawn ink lines with slightly imperfect wobble; restrained, clean, simple; not photorealistic and not commercial vector infographic.
Color palette: pure white background, black line art and character, red only to emphasize bowed defective portions, orange only for rolling motion marks; minimize all other color.
Text: no text, no numbers, no labels, no logos, no watermark, no signatures, no typographic marks.
Avoid: wide board, plank, plywood, panel, sheet material, broad rectangular timber, oversized beams; excessive S-curves or cartoonishly broken lumber; cute children's character style; human-shaped anatomy; photorealism; 3D render; glossy stock vector infographic; clutter; excessive empty space.
```

## 검수

1. 소송각재처럼 보이는가: PASS — 길고 가는 형상과 정사각형에 가까운 끝단 단면이 명확함.
2. 합판/판재처럼 보이지 않는가: PASS — 넓은 면재나 판재 형상이 없음.
3. 캐릭터가 사람형으로 보이지 않는가: PASS — 작은 검은 덩어리형 몸체와 짧고 가는 팔다리로 표현됨.
4. “각재를 굴려 휨 확인” 동작이 읽히는가: PASS — 바닥의 중앙 각재, 손의 방향과 주황색 회전 동작선으로 읽힘.
5. 웹툰형 설명 콘텐츠 스타일로 적합한가: PASS — 순백 배경, 흔들리는 검은 펜선, 제한된 강조색으로 구성됨.
6. 이후 Veo image-to-video 기준 이미지로 사용할 수 있는가: PASS — 피사체 구분과 여백이 충분하고 텍스트 오염이 없음.

가장 큰 문제점: 캐릭터 손과 중앙 각재 사이에 미세한 간격이 있어 굴리는 접촉 동작이 완벽하게 직접적이지는 않음.

---

# Scene 01 이미지 생성 기록 (Vertex AI)

- 사용 모델: `gemini-3.1-flash-image`
- 프로젝트: `gen-lang-client-0646355490`
- location: `global`
- 호출 방식: `@google/genai` SDK (`scripts/generate-vertex-image.mjs`, `ai.models.generateContent`), 사용자 ADC 인증
- 호출 횟수: 1회 (재시도 없음)
- 출력 경로: `public/assets/images/scene01-vertex-reference-v1.png`
- 실제 출력 해상도: 768 × 1376 px (세로, 약 9:16)
- 파일 용량: 227,927 bytes (약 222.6 KiB)
- 예상 비용: 약 US$0.067 (1K 이미지 출력 기준) + 소량의 입력 토큰 비용 — SDK 응답에서 정확한 과금 토큰 수는 별도로 기록하지 않아 근사치
- 글자 오염 여부: 없음
- 자체 판정: **FAIL**

## 최종 프롬프트

`scripts/generate-vertex-image.mjs`의 `DEFAULT_PROMPT` (Scene 1 — 왼쪽 곧은 각재 2개, 중앙 캐릭터가 각재를 굴려 휨 확인, 오른쪽 휘어진 불량 각재, 순백 배경, 검은 손그림 선, 27x27/30x30mm 다루끼 형태, 텍스트 금지, 세로 9:16)로 생성.

## 검수

1. 소송각재처럼 보이는가: **FAIL** — 왼쪽·오른쪽 각재는 사각 단면이 명확하지만, **중앙에서 굴려지는 대상이 원통형(도웰/롤러)으로 렌더링되어 각재가 아니라 둥근 막대처럼 보임.**
2. 합판/판재처럼 보이지 않는가: PASS — 넓은 면재·판재 형상은 없음.
3. 캐릭터가 사람형으로 보이지 않는가: PASS — 작은 검은 덩어리형 몸체, 짧고 가는 팔다리, 무표정 점 눈으로 잘 표현됨.
4. "각재를 굴려 휨 확인" 동작이 읽히는가: PARTIAL — 캐릭터 옆에 회전 동작선(주황)은 있으나, 굴려지는 대상 자체가 원통형이라 "각재의 휨을 확인한다"는 서사적 의미가 약화됨.
5. 웹툰형 설명 콘텐츠 스타일로 적합한가: PASS — 순백 배경, 흔들리는 검은 펜선, 제한된 강조색(빨강/주황) 구성은 스타일 요구와 일치.
6. 이후 Veo image-to-video 기준 이미지로 사용할 수 있는가: **FAIL** — 핵심 피사체(중앙 각재)의 형태 오류가 있는 상태로 영상화하면 오류가 그대로 전달됨.

## 가장 큰 문제점 3개

1. 중앙에서 굴려지는 소송각재가 사각 단면이 아니라 원통형(도웰/롤러)으로 생성됨 — "narrow square-section batten, never round" 핵심 요구 위반이자 이 장면의 교육적 핵심(휨 확인)을 훼손하는 가장 심각한 결함.
2. 오른쪽 불량 각재들은 목재 형태 자체의 실제 곡률은 미미하고, 분홍색 하이라이트 오버레이로만 "휨"이 표현되어 정상/불량 구분이 형태보다 색상에 의존함.
3. 중앙 장면 그룹이 세로 캔버스에서 차지하는 비중이 지시된 55~65%보다 작고, 상하 여백(특히 상단)이 과도하게 넓어 구도가 다소 헐거움.

## Veo 진행 가능 여부

**불가.** 위 1번 문제(중앙 각재의 형태 오류)를 해결하지 않고 이 이미지를 Veo의 첫 프레임 기준 이미지로 사용하면, 잘못된 원통형 소품이 영상 전체에 그대로 이어져 확대·재생산됨. 재생성 여부는 이번 단계의 "1회만 호출" 규칙에 따라 이번 턴에서는 진행하지 않으며, 사용자 승인 하에 별도 턴에서 판단 필요.

---

# Scene 01 이미지 생성 기록 (Vertex AI, v2 — 형상/라벨 수정판)

- 사용 모델: `gemini-3.1-flash-image`
- 프로젝트: `gen-lang-client-0646355490`
- location: `global`
- 호출 방식: `@google/genai` SDK (`scripts/generate-vertex-image.mjs`, `ai.models.generateContent`), 사용자 ADC 인증
- 호출 횟수: 1회 (재시도 없음)
- 출력 경로: `public/assets/images/scene01-vertex-reference-v2.png`
- 실제 출력 해상도: 768 × 1376 px (세로, 약 9:16)
- 파일 용량: 258,016 bytes (약 252.0 KiB)
- 예상 비용: 약 US$0.067 (1K 이미지 출력 기준) + 소량의 입력 토큰 비용 — SDK 응답에서 정확한 과금 토큰 수는 별도로 기록하지 않아 근사치
- 사용 프롬프트: v1 실패 사유(원통형 중앙 각재, 색상 의존 휨 표현, 과도한 상단 여백, 라벨 누락)를 반영해 재작성한 최종 프롬프트를 축약 없이 그대로 사용 (`scripts/generate-vertex-image.mjs`의 `DEFAULT_PROMPT`)
- 자체 판정: **FAIL** (v1 대비 핵심 결함 2건은 해결됐으나, 남은 결함으로 인해 통과 기준 미달)

## 검수 (사용자 지정 6개 기준)

1. 중앙 각재가 원통형이 아닌가: **PASS** — 중앙 각재가 좌측 각재와 동일한 사각 단면 스타일로 렌더링됨. 캐릭터의 손이 각재 옆면에 실제로 닿아 있음.
2. 소송각재가 합판/판재처럼 보이지 않는가: **PARTIAL** — 왼쪽·중앙 각재는 사각 단면이 뚜렷함(PASS). 다만 오른쪽 불량 각재는 사각 단면의 입체감(윗면/옆면 구분)이 거의 없이 평평한 곡선 띠(리본)에 가깝게 보여, 소송각재라기보다 색이 칠해진 곡선 스트립처럼 읽힘.
3. 불량 각재가 실제 형태로 휘어져 있는가: **PASS** — v1과 달리 목재 실루엣 자체가 완만하게 휘어 있어, 색을 제거해도 휨이 형태로 식별됨.
4. 라벨 3개가 정확한가: **PARTIAL** — 요청한 3개 문구("사용 가능한 각재", "휘어진 불량 각재", "현장 폐기 물량") 모두 철자·띄어쓰기 정확하게 등장하나, "휘어진 불량 각재"와 "현장 폐기 물량"이 각각 2회씩 중복 렌더링되어 총 5개 텍스트 인스턴스가 존재함(요청은 정확히 3개, 1회씩). 그 외 영어/숫자/로고 등 불필요한 텍스트는 없음.
5. 상단 여백이 과도하지 않은가: **PARTIAL** — v1보다는 라벨이 상단 공간을 채워 다소 개선됐으나, 캐릭터·각재 그룹 자체가 세로 캔버스의 약 60%를 채우라는 지시에는 못 미치고 상하 여백이 여전히 넓은 편.
6. Veo 첫 프레임 기준 이미지로 사용 가능한가: **불가(현 상태로는 비권장)** — 핵심 형상 결함(원통형)과 색상 의존 휨 표현은 해결됐으나, 오른쪽 불량 각재의 리본형 형태와 라벨 중복이 남아있어 그대로 다음 단계로 넘기기에는 리스크가 있음.

## 가장 큰 문제점 3개

1. 오른쪽 불량 각재가 사각 단면 입체감 없이 평평한 곡선 리본에 가깝게 렌더링됨 — "narrow square-section batten" 정체성이 불량 각재 쪽에서 약화됨(정상/중앙 각재는 해결됨).
2. 오른쪽 불량 각재 개수가 2개로, 요청한 3~4개에 미달.
3. "휘어진 불량 각재"·"현장 폐기 물량" 라벨이 각각 2회씩 중복 출력됨 — 텍스트 내용은 정확하지만 개수 규칙(정확히 3개) 위반.

## 라벨 정확도

- "사용 가능한 각재": 1회, 철자·띄어쓰기 정확, 왼쪽 그룹 근처 배치. **정확.**
- "휘어진 불량 각재": 2회 중복, 두 인스턴스 모두 철자·띄어쓰기 정확, 오른쪽 그룹 근처 배치(상단/하단). **내용은 정확하나 개수 초과.**
- "현장 폐기 물량": 2회 중복, 두 인스턴스 모두 철자·띄어쓰기 정확, 오른쪽 그룹 보조 태그로 배치. **내용은 정확하나 개수 초과.**
- 지정된 3개 문구 외 다른 텍스트(영어/숫자/로고/워터마크)는 없음.

## Veo 진행 가능 여부

**현 상태로는 비권장.** 중앙 각재 형상과 불량 각재의 실제 휨 표현이라는 v1의 두 가지 핵심 결함은 해결됐으나, 오른쪽 불량 각재의 리본형 형태와 라벨 중복이 남아 있어 이 상태로 Veo 첫 프레임에 사용하면 해당 결함이 그대로 영상에 이어짐. 추가 재생성 여부는 이번 단계의 "1회만 호출" 규칙에 따라 이번 턴에서는 진행하지 않으며, 사용자 승인 하에 별도 턴에서 판단 필요.

---

# Scene 01 이미지 생성 기록 (Vertex AI, v3 — 배경/캐릭터/라벨 수정판)

- 사용 모델: `gemini-3.1-flash-image`
- 프로젝트: `gen-lang-client-0646355490`
- location: `global`
- 호출 방식: `@google/genai` SDK (`scripts/generate-vertex-image.mjs`, `ai.models.generateContent`), 사용자 ADC 인증
- 호출 횟수: 1회 (재시도 없음)
- 출력 경로: `public/assets/images/scene01-vertex-reference-v3.png`
- 실제 출력 해상도: 768 × 1376 px (세로, 약 9:16)
- 파일 용량: 694,614 bytes (약 678.3 KiB)
- 예상 비용: 약 US$0.067 (1K 이미지 출력 기준) + 소량의 입력 토큰 비용 — 근사치
- 사용 프롬프트: v2 실패 사유(불량 각재 리본형, 라벨 중복, 상단 여백 과다) + 이후 추가 수정(라벨 중복 실제 원인 제거, 납품 각재 묶음 배경 추가, 캐릭터를 순흑색 실루엣에서 짙은 회색+분리된 얼굴 영역으로 재설계)을 모두 반영한 최종 프롬프트를 축약 없이 그대로 사용
- 자체 판정: **PASS** (사소한 잔여 개선점 있으나 이전 버전들의 핵심 결함은 모두 해소됨)

## 검수 (사용자 지정 6개 기준)

1. 중앙 검사 각재: **PASS** — 사각 단면 유지(원통형 아님), 캐릭터 손이 각재에 닿아 있음, 주황 동작선으로 굴려서 휨을 확인하는 동작이 읽힘.
2. 오른쪽 불량 각재: **PASS** — 정확히 3개, 각각 끝단에 사각 목재 단면(우드그레인 블록)이 보이고 리본/종이처럼 보이지 않음, 목재 실루엣 자체가 완만하게 휘어 있고 세 개의 휨 정도가 서로 다름. (v2보다 입체감은 개선됐으나 좌측 정상 각재만큼 뚜렷한 두께감은 아님 — 잔여 미세 개선점.)
3. 배경 납품 각재: **PASS** — 중앙~좌측 뒤편에 밴딩 스트랩이 있는 2~3단 적재 묶음이 회색 얇은 선으로 표현됨, 전경보다 시각적으로 약함, 판재처럼 보이지 않음, 캐릭터·검사 장면을 가리지 않고 화면이 복잡해지지 않음.
4. 캐릭터: **PASS** — 순흑색 유령형 실루엣이 아니라 짙은 회색/먹색 몸통 + 검정 외곽선, 얼굴이 흰색 타원으로 분리되어 눈·코가 읽힘, 팔다리·손발이 몸통과 구분되는 형태로 표현됨, 마스코트풍이 아닌 담백한 작업자 느낌. (팔다리가 지시한 "가는 검정 선"보다는 몸통과 같은 회색 채움 형태에 가까움 — 사소한 잔여 차이.)
5. 라벨: **PASS** — "사용 가능한 각재", "휘어진 불량 각재", "현장 폐기 물량" 정확히 각 1회씩 등장(총 3개 텍스트 인스턴스), 철자·띄어쓰기 정확, 중복 없음, 그 외 문자 없음.
6. 전체 구도: **PARTIAL** — 9:16 유지, "납품 → 선별 → 불량 폐기" 흐름이 배경 묶음 추가로 훨씬 명확하게 읽힘, 웹툰/기사 삽화 스타일 유지. 다만 상단 여백은 배경 묶음이 그 공간을 채워 체감상 개선됐지만, 순수 여백 자체는 지시된 20~25% 축소가 뚜렷하게 확인되지는 않음(잔여 개선점).

## 가장 큰 문제점 (최대 3개, 모두 경미함)

1. 상단 여백이 배경 묶음으로 다소 채워졌지만, 지시한 만큼의 여백 축소가 뚜렷하게 확인되지는 않음.
2. 오른쪽 불량 각재의 입체감(두께 표현)이 왼쪽 정상 각재만큼 뚜렷하지는 않음(리본형 문제는 해소, 미세한 두께감 차이만 남음).
3. 캐릭터 팔다리가 "가는 검정 선" 지시보다 몸통과 같은 짙은 회색 채움 형태로 표현됨(형태 구분 자체는 충분히 됨).

## Veo 진행 가능 여부

**가능.** 이전 버전들의 핵심 결함(중앙 각재 원통형, 색상 의존 휨, 불량 각재 리본형, 라벨 누락/중복, 캐릭터 유령형 실루엣)이 모두 해소되었고, 위 잔여 문제점은 모두 경미하여 Veo 첫 프레임 기준 이미지로 사용해도 서사·형상이 왜곡되어 전달될 위험이 낮음. 실제 Veo 호출은 이번 단계에서 진행하지 않았으며, 별도 사용자 승인 후 진행 필요.

---

# Scene 01 이미지 생성 기록 (Vertex AI, v4 — 목재 색상 수정판)

- 사용 모델: `gemini-3.1-flash-image`
- 프로젝트: `gen-lang-client-0646355490`
- location: `global`
- 호출 방식: `@google/genai` SDK (`scripts/generate-vertex-image.mjs`, `ai.models.generateContent`), 사용자 ADC 인증
- 호출 횟수: 1회 (재시도 없음)
- 출력 경로: `public/assets/images/scene01-vertex-reference-v4.png`
- 실제 출력 해상도: 768 × 1376 px (세로, 약 9:16)
- 파일 용량: 822,681 bytes (약 803.4 KiB)
- 예상 비용: 약 US$0.067 (1K 이미지 출력 기준) + 소량의 입력 토큰 비용 — 근사치
- 사용 프롬프트: v3의 형상/구도/캐릭터/라벨을 그대로 유지한 채, `TIMBER COLOR` 단락과 `STYLE` 색상 팔레트 문장 1개만 추가한 최종 프롬프트를 축약 없이 그대로 사용
- 자체 판정: **PASS**

## 검수 (이번 라운드 핵심 5개 기준)

1. 정상 각재 색상: **PASS** — 왼쪽 각재가 흰색/회색이 아니라 연한 베이지~라이트 탄 톤의 천연 목재색으로 렌더링됨, 과도하게 노랗거나 진한 갈색 아님.
2. 중앙 검사 각재: **PASS** — 왼쪽과 동일한 기본 목재색, 사각 단면(rectangular prism) 유지, 원통형 아님, 손이 실제 접촉.
3. 오른쪽 불량 각재: **PASS** — 기본 목재색이 정상 각재와 동일 계열로 유지되고 전체가 분홍/빨강으로 칠해지지 않음. 실제 휘어진 형상 + 곡선 안쪽을 따라가는 얇은 빨간 강조선만 보조적으로 사용됨. 정확히 3개, 리본형 아님(끝단 사각 단면·측면 결이 보임).
4. 배경 납품 각재 묶음: **PASS** — 같은 천연 목재색 계열이되 채도·선명도가 전경보다 낮아 배경으로 자연스럽게 물러나 보임, 밴딩된 다단 적재 묶음으로 명확히 읽힘.
5. 기존 v3 PASS 요소 유지: **PASS** — 캐릭터는 여전히 짙은 회색 몸통 + 분리된 얼굴(눈 읽힘)로 유령형이 아님, 중앙 굴리는 동작(주황 동작선) 유지, 배경 묶음 유지, 라벨 3개("사용 가능한 각재"/"휘어진 불량 각재"/"현장 폐기 물량") 각 정확히 1회·철자 정확, 9:16 구도 유지.

## 목재 색상 개선 여부

**개선됨.** v1~v3까지는 각재가 흰색/무채색 선화에 가까웠으나, v4에서는 전 그룹(정상/중앙/불량/배경)이 일관된 연한 베이지~라이트 탄 천연 목재 톤으로 렌더링되어 "실제 소송각재" 느낌이 뚜렷해짐. 특히 불량 각재가 이전처럼 전체 분홍색으로 덮이지 않고, 정상 각재와 같은 목재색 바탕 위에 곡선을 따라가는 얇은 빨간 강조선만 남아 있어 "형상으로 구분, 색은 보조 강조"라는 목표를 가장 잘 달성함.

## v3 대비 좋아진 점

1. 목재가 전 그룹에서 일관된 천연 색조로 통일되어, 흑백 선화 느낌에서 실제 자재 시각 자료에 가까운 완성도로 발전함.
2. 불량 각재의 "전체 분홍색" 문제가 사라지고, 정상/불량의 시각적 연속성(같은 목재+다른 형상)이 훨씬 자연스러워짐.
3. 정상/중앙/배경 각재가 모두 같은 색 계열을 공유해 "같은 납품 자재에서 선별"이라는 서사가 색상 차원에서도 일관되게 읽힘.

## 가장 큰 문제점 (최대 3개, 모두 경미함)

1. 상단 여백이 v3와 마찬가지로 여전히 다소 넓음(이번 라운드의 수정 대상은 아니었음).
2. 오른쪽 불량 각재의 빨간 강조선이 "절제된" 느낌보다는 다소 선명하고 두꺼운 붉은 줄무늬로 보여, "thin accent line" 지시보다 살짝 강한 인상을 줌.
3. 캐릭터 손과 각재의 접촉 지점이 아주 살짝 겹쳐 보이는 수준으로, 손가락으로 감싸 쥔 형태까지는 아니고 스치듯 닿는 느낌.

## Veo 진행 가능 여부

**가능.** 형상·구도·캐릭터·라벨의 핵심 요소가 v3에서 그대로 유지된 채 목재 색상까지 실제 자재감 있게 개선되어, 현재 이미지를 Veo 첫 프레임 기준 이미지로 사용해도 형상·서사 왜곡 위험이 낮음. 실제 Veo 호출은 이번 단계에서 진행하지 않았으며, 별도 사용자 승인 후 진행 필요.
