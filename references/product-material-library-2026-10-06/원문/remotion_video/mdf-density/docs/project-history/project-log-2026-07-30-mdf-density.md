# Project Log — mdf-density — 2026-07-30

## 개요

Sprint 4~6.x에서 Scene1(선반 처짐 발견)과 Scene2(대산 직원 AS 방문)를 인물 대화 중심 다큐멘터리 연출로 시도했다. Scene1은 v001~v022(단일 인물, "두 책장 비교" → "옷장 선반" 컨셉 전환 포함) 및 대안 컨셉(벽걸이 선반, 옷장 v2~v5.3) 총 20여 회 반복 끝에 **v5.1을 최종 채택**했다. Scene2는 2인 대화 구조로 v001~v003 3회 반복했으나 카메라 응시, 핀마이크 아티팩트, 로고 오생성 문제가 반복적으로 재현되어 완전히 해결되지 못했다.

2026-07-30, 이 경험을 근거로 **제작 방향을 v2로 전면 전환**했다: 인물 대화 중심 구조를 폐기(삭제 아님, 비권장 실험 기록으로 보존)하고, PF vs XPS 프로젝트 방식처럼 "사람보다 제품/현상이 주인공"인 단순 다큐멘터리 구조로 재설계했다.

## Scene1 실험 타임라인 (요약)

- v001~v008: "두 책장 나란히 비교" 컨셉. 카메라 구도(정면/와이드) 대 처짐 표현이 계속 트레이드오프됨. 인물 나이/표정/워크샵 리얼리티를 단계적으로 개선.
- v009~v010: Reference Image(이미지-투-비디오) 방식 도입. v009는 참조 이미지와 거의 동일한 처짐/구도를 재현해 가장 성공적이었으나 레터박스 발생. v010은 레터박스 수정 시도 중 필름 스트립 테두리 아티팩트 발생.
- v011~v022: 텍스트 전용 방식으로 복귀, "두 책장" 컨셉을 폐기하고 **옷장(built-in wardrobe) 선반**으로 장소 전환. 카메라 락(외부 고정) 성공(v012) → 책 텍스트 강조 시 카메라 재퇴행(v014) → 우선순위 구조화로 동시 성공(v015) → 손 접촉 없는 관찰 연기 확립(v018, **100점 기준 92점, 최초 채택 후보**) → 이후 선반 칸수/책 표지 텍스트 미세조정 시도(v019~v022)는 모두 v018 대비 퇴행.
- Scene1 대안 컨셉 실험: 벽걸이 선반(v2, 인물이 선반을 가림), 옷장 discovery v3(끝부분 문 닫힘), v4(처짐 소실+접촉), **v5(즉시 발견 구도, 90점)**, **v5.1(하중-처짐 인과관계 최고 수준, 90점, 최종 확정)**, v5.2/v5.3(손 접촉 재발/개선하였으나 위치 타이트).
- **최종 확정: v5.1.** 이후 Character A/B 2인 체계, "대산" 로고 규칙, common.md/scene1.md/scene2.md 문서화까지 완료됨.

### Scene1 Master v5.1 — 보존된 전체 스펙 (참고용, 현재 기본 아님)

```
[CHARACTER LOCK]
A handsome Korean male, 30 to 35 years old, slim build, black rectangular glasses, natural handsome and approachable appearance, clean-shaven, short neat black hair. Plain light gray or beige T-shirt, comfortable pants, barefoot.

[BOOKSHELF -> WARDROBE SHELF - CRITICAL, REALISTIC DEFORMATION]
Modern laminated MDF wardrobe shelf. Middle shelf carries the heaviest load - filled with several thick folded blankets, quilts, pillows, and bulky bedding, clearly heavy enough to have caused long-term sagging. Visibly sagged downward in the center, immediately obvious at first glance, both ends still firmly attached. Upper shelf holds only one small storage box and one thin folded blanket - obviously lighter - remains perfectly straight. Lower compartment almost empty, one lightweight storage basket.

[CAMERA]
Front view of the entire bookshelf/wardrobe, facing it directly, occupying most of the frame. Hold this front view, mostly still, for about the first second so the audience can compare the straight shelves against the sagging shelf. Single continuous handheld shot, no cuts, documentary style, natural lighting.

[SCENE ACTION]
Standing naturally beside the wardrobe as the shot opens (no walking-in). Leans in slightly, gently touches the underside of the sagging shelf with fingertips, quiet curiosity, does not stare into camera, no smile.

Duration: 6 seconds, 9:16, sampleCount=1, model veo-3.1-fast-generate-001.
```

생성 파일: `public/generated/mdf-density/scene1-v5.1-final.mp4` (보존됨, 삭제하지 않음).

## Scene2 실험 타임라인 (요약)

- **v001**: 2인(고객+대산 직원) 대화 구조 첫 시도. 문제: 로고가 "대산"/"대 산" 어느 쪽도 아닌 임의 텍스트로 생성, 인물이 옆모습→정면 응시로 전환되는 부자연스러운 구도 변화. 종합 62/100.
- **v002**: 자연스러운 대화체·시선 처리 개선 시도. 문제: 양쪽 인물 모두 핀마이크(라발리에 마이크) 클립 생성, 엔딩에서 두 사람이 카메라를 보고 미소, 고객이 설명하듯 손짓, 선반이 이불에 가려 거의 안 보임.
- **v003**: "카메라는 보이지 않는 관찰자" 프레이밍 재시도, 로고 정확도는 이번 통과 기준에서 제외. 결과: 대화 톤은 개선됐으나 (1) 3초경 직원이 카메라를 정면 응시, (2) 고객 옷깃에 핀마이크 클립 3연속 재현, (3) 선반의 처진 나무 판 자체가 이불에 완전히 가려 확인 불가. 5개 기준 중 2개 실패, 1개 부분충족.

### 반복적으로 재현된 문제 (교훈)
1. **핀마이크/방송장비 아티팩트**: "두 사람이 서서 대화하는" 구도에서 Veo가 라발리에 마이크를 학습된 패턴으로 반복 삽입. Negative Prompt만으로 3연속 억제 실패.
2. **카메라 응시 회귀**: 대화 중간 또는 끝에 인물이 카메라를 정면으로 보는 경향이 반복됨 — "인터뷰처럼 보이지 않게" 지시에도 불구.
3. **로고 텍스트 정확도**: 한글 2~3글자 로고를 유니폼에 정확히 렌더링하는 것은 신뢰도가 낮음(완화된 "대 산" 허용 기준으로도 통과 어려움).
4. **비용**: 이번 세션 동안 Scene1+Scene2 합산 성공 생성 31회, Google 공식 Cloud Billing Catalog API 기준(Veo 3 Fast 720p Audio, $0.10/초) 추정 약 $19 (약 26,600원, 참고용 환산). 반복 시도 대비 개선 폭이 점차 줄어드는 패턴 확인.

### Scene2 v003 최종 프롬프트 (참고용, 현재 기본 아님)

```
[CHARACTER A - CUSTOMER]
Early 30s, slim, black rectangular glasses, beige/white T-shirt, dark pants. Ordinary homeowner, mostly listens, no explaining/pointing, glances between shelf and engineer, never at camera.

[CHARACTER B - PROFESSIONAL SERVICE ENGINEER]
Handsome, early-to-mid 30s, modern clean-cut, no glasses, navy company jacket, small simple left-chest patch (logo accuracy not required). Calm, hands relaxed, looks mainly at shelf/customer, never camera.

[POSITION]
Sagging shelf stays visual center. Both people angled toward each other, not blocking the bent front edge.

[ACTION]
Candid conversation, camera as invisible observer. ~4s: engineer turns to customer, says "겉보기엔 비슷해도, MDF마다 차이가 있습니다." Continues until last frame, never turns to camera.

[CAMERA]
Locked-off, static, no pan/zoom/movement. Neither looks at camera at any point.

Duration: 6 seconds, 9:16, sampleCount=1, model veo-3.1-fast-generate-001.
```

생성 파일: `public/generated/mdf-density/scene2-v001.mp4`, `scene2-v002.mp4`, `scene2-v003.mp4` (모두 보존됨, 삭제하지 않음).

## PF vs XPS 프로젝트에서 재사용 가능한 요소

`pf-vs-xps` 프로젝트(이 템플릿의 원형)는 Veo 인물 드라마 없이, Remotion 텍스트/카드/막대그래프로 메시지를 전달하는 구조였다. mdf-density의 `src/scenes/Scene1Hook.tsx` ~ `Scene5Ending.tsx`와 `src/content/brief.ts`는 이미 이 구조(훅 문구, A/B 비교 카드+막대그래프, 제품 이미지+강조문구, 4비트 전환, 고정 엔딩)를 그대로 물려받고 있어 **코드 변경 없이 재사용 가능**하다. v2 전환의 핵심은 "Veo가 만드는 배경 영상"의 내용을 인물 대화에서 제품/현상/B-roll로 바꾸는 것이며, Remotion 오버레이 구조 자체는 바뀌지 않는다.

## Update (같은 날, 추가 단순화)

v2 방향을 더 단순화: Scene1은 손/팔조차 등장하지 않는 완전 무인 정지 장면으로 확정. "People under 20% / Product and phenomenon over 80%" 원칙과 "One Scene = One Message = One Action"을 프로젝트 기본값으로 명문화. Scene3 기획 초안을 신설(두 MDF 판재 체감 비교, 손/팔만 등장, 정식 시험처럼 보이지 않게 하는 문구 가이드 포함).

### 원본 템플릿의 기존 scene3.md (보존, 참고용 — 워크샵 장인 컨셉)

Sprint 4 최초 템플릿에 이미 존재했던 Scene3 내용(목공소 장인이 MDF 판을 들고 서 있는 "철학적 순간" 컷). v2 피벗으로 대체되었으나 삭제하지 않고 아래에 보존한다:

```
# Scene3 Prompt

Use together with common.md (Character Lock, Workshop Lock, Camera Style, Lighting, Video Spec, Negative Prompt).

Signature scene of the video.

## Purpose

Deliver the signature philosophical moment of the video through visual storytelling.

The shot should communicate that choosing the right MDF for the intended purpose is more important than simply choosing a "better" MDF, without relying on any on-screen text. The most memorable shot of the video; the composition alone, without any caption, must feel meaningful and contemplative.

## Subject

A single MDF board held with both hands at chest height.

## Environment

Same workshop, background simplified — surrounding clutter kept out of frame or softly out of focus.

## Action

The craftsman stands still holding the MDF board, looking down at it quietly and thoughtfully. Minimal movement throughout; near the end of the shot he becomes completely still for a brief moment.

## Camera

Slow, deliberate handheld push-in from a medium shot to a close-up. The camera holds completely still for the final 0.3–0.5 seconds of the shot — a distinct pause with no movement. Single continuous shot. No cuts.

## Important Details

Composition must read as meaningful and quietly emotional even with zero on-screen text.

The entire scene should feel like a real documentary filmed inside an actual Korean woodworking shop. Nothing should look staged.
```

## v2 피벗 결정 사유

- 인물 2인 대화 구조는 매 반복마다 카메라/시선/소품(마이크)/로고 중 최소 1개가 무너지는 패턴이 22회+3회 반복 후에도 해소되지 않음.
- 대사가 있는 장면은 립싱크·시선·자세를 모두 동시에 통제해야 해서 실패 확률이 구조적으로 높음.

## Scene1 v2 (제품/현상 중심) 결과 — 2026-07-31

v001과 무관하게, "사람 없이 처진 MDF 선반 자체를 주인공으로" 하는 신규 v2 방향으로 2회 시도:

- **v2-001** (`scene1-v2-001.mp4`, 1차 서버 과부하 실패 후 재시도로 성공): 처짐 없음(모든 선반이 반듯함), 카메라가 0.1초의 타이트한 구도에서 3초경 옷장 전체가 보이는 넓은 구도로 서서히 줌아웃 — "완전 고정" 실패. 옷장 전체 인테리어 B-roll처럼 보여 선반이 주인공이 아니었음. PASS 6 / FAIL 4.
- **v2-002** (`scene1-v2-002.mp4`, MAIN SUBJECT/CAMERA/COMPOSITION 섹션 재설계 후 1회 생성): 선반 중심 클로즈업 구도 성공, 카메라 완전 고정 성공(6초 전 구간 동일 프레임 확인), 사람·손·팔·로고·텍스트 제거 성공, MDF 선반을 메인 피사체로 만드는 데 성공. **그러나 처짐 형상 자체는 생성되지 않음** — 둥근 모서리가 정상 가구 디자인처럼 보였고, 비교 기준점(다른 반듯한 부분)이 프레임에서 완전히 사라져 처짐 인지 가능성이 v2-001보다 오히려 낮아짐. v2-001 대비 구도·Remotion 활용성은 개선, 핵심 메시지 전달은 개선되지 않음. PASS 10 / FAIL 5(15개 기준).

**최종 판단(2026-07-31): C.** 텍스트 프롬프트만으로 미묘한 물리적 변형(처짐)을 통제하려는 접근(Shape Prompt)은 여기서 종료. 참조 이미지 또는 시각적 비교 구조(Visual Comparison Prompt)로 전환 — 상세 내용은 `prompts/scene1.md`의 "v3 Scene1 — 구조 초안" 섹션 및 `prompts/common.md`의 "Shape Prompt → Visual Comparison Prompt" 원칙 참고.

## 참조 이미지 출처 상태 — 확인 대기 (2026-07-31)

- 파일: `reference/scene1_reference.png`
- 해상도: 1023×1537
- 내용: 5개 샷(Wide/Medium/MCU/CU/Medium Wide)과 한글 설명이 포함된 스토리보드형 이미지 ("MDF 선반 처짐 – 정면 표현 구성 (v008, 최종안)")
- `scene1-v009.mp4` 생성 시 SHOT1을 크롭해 Reference Image로 사용한 이력 있음
- **직접 촬영, 직접 제작, AI 생성, 외부 이미지 중 어느 것인지 현재 확인되지 않음. 사용 권한도 확인되지 않음.**
- 출처가 확정되기 전까지 외부 공개 영상이나 상업적 결과물에 재사용하지 않음

### 사용자 확인 대기 질문
1. `reference/scene1_reference.png`는 사용자가 직접 제작하거나 생성한 이미지인가?
2. 외부 이미지 또는 타인의 자료를 포함하고 있는가?
3. 대산 내부 제작물 또는 업무용으로 자유롭게 사용할 수 있는가?
4. 최종 홍보 영상에 사용해도 되는가?

### 파생 임시 파일 상태 (2026-07-31 확인)
`shot1_crop2.png`, `shot1_916.png`, `shot1_crop.png`가 세션 스크래치패드(`AppData\Local\Temp\claude\...\scratchpad\`)에 여전히 존재함을 확인. 프로젝트 폴더 밖 임시 위치이므로 세션 종료 후 사라질 수 있음. **원본 사용 권한이 확정되기 전에는 프로젝트 내부로 복사하지 않음.**

### 사용 가능이 확정될 경우 다음 작업(계획만, 미실행)
SHOT1 우선 검토 → 처진 선반과 정상 수평 기준선이 함께 보이는지 확인 → 9:16 크롭 시 핵심 처짐이 잘리지 않는지 확인 → 한글 설명/선/번호/라벨 제거, 사진 부분만 사용 → 선반·수납물이 프레임 대부분을 차지하도록 크롭 → 새 파일명(`reference/scene1-v3-reference-001.png`, 기존 있으면 다음 번호)으로 저장, 원본 보존.

## Reference-first Workflow 도입 (2026-07-31)

기존 `reference/scene1_reference.png`의 출처 확인이 보류된 것과 별개로, "AI 이미지 생성 모델로 새 기준 이미지를 먼저 만들고 승인받은 뒤 Veo Reference Image로 사용한다"는 **Reference-first Workflow**를 공식 프로젝트 원칙으로 채택(`prompts/common.md`). 이 경로는 생성 이력이 프로젝트 안에 그대로 남아 출처 문제를 원천적으로 피할 수 있음.

**이미지 생성 모델 조사 결과**: 이번 세션에서 이미 인증된 모델만 비교 — Vertex AI Imagen 4(Fast $0.02 / Standard $0.04 / Ultra $0.06, 공식 Cloud Billing Catalog API 확인)와 GPT Image(`OPENAI_API_KEY` 이미 설정됨, 정확한 단가 미확인) 두 가지가 즉시 사용 가능. FLUX(Replicate)와 KIE 기반 모델은 API 키 미설정으로 이번 세션 후보에서 제외.

**추천: Vertex AI Imagen 4 (Fast 우선)** — Veo와 완전히 동일한 GCP 인증/결제 파이프라인 재사용 가능, 압도적으로 저렴, 같은 생태계라 Veo Reference Image로 연결이 매끄러움.

상세 사양서, 이미지 생성 프롬프트 초안, 3안 생성 계획은 `prompts/scene1.md` 참고. 이번 세션에서는 이미지 생성을 실행하지 않음(계획 및 문서화만 완료).

## Imagen 4 Fast 최초 호출 실패 및 원인 조사 (2026-07-31)

`imagen-4.0-fast-generate-001`로 `scene1-v3-reference-001.png` 1장 생성을 1회 시도했으나 **HTTP 404**("Publisher model ... was not found or your project does not have access to it")로 실패, 이미지 미생성. 자동 재시도하지 않음.

**조사 결과**:
- 모델 ID(`imagen-4.0-fast-generate-001`)는 공식 문서와 정확히 일치 — GA 상태 확인됨(단종 예정일: 2026-06-30로 표기된 자료가 있어 실제 서비스 상태 재확인 필요할 수 있음)
- 엔드포인트 형식(`.../publishers/google/models/{MODEL_ID}:predict`)은 Veo와 동일 패턴, REST 레퍼런스와 일치
- 공식 문서에 "Control access to Model Garden models"라는 **모델별 개별 접근 통제 메커니즘**이 존재함을 확인 — Veo는 이미 정상 작동하지만 Imagen은 이번이 최초 호출이라 이 게이트에 걸렸을 가능성이 가장 높음(가능성: 높음)
- 리전(us-central1) 문제 여부는 공식 문서만으로 완전히 확정하지 못함(가능성: 중간, 공식 문서에서 확인 안 됨)
- **가장 가능성 높은 원인: 이 프로젝트에서 Imagen 모델에 대한 Model Garden 접근이 아직 활성화되지 않음.** 콘솔에서 사용자 직접 확인 필요.

**다음 승인 대기 상태**: 사용자가 Google Cloud Console → Vertex AI → Model Garden에서 Imagen 접근 상태를 확인한 뒤, (1) 활성화되면 동일 코드로 재시도 승인, 또는 (2) Imagen 사용이 불가능하면 GPT Image 전환 승인 중 하나를 결정 대기 중.

## 확정 결과 — GPT Image 경로로 Reference Image 확보 (2026-07-31)

Imagen 접근 문제는 보류 상태로 남기고(추가 조사 없이), `gpt-image-1`(공식 확인, $0.063/장, 1024×1536)로 전환해 `reference/scene1-v3-reference-001.png` 1장 생성 성공. 8개 평가 전원 PASS — 프로젝트 전체에서 처짐이 가장 명확하게 표현된 결과물. 이후 비생성형 중앙 크롭(1024→864, 높이 유지)으로 정확한 9:16 파생본 `reference/scene1-v3-reference-001-9x16.png` 제작, 10개 평가 전원 PASS, 원본 대비 저하 없음. 최종 판정 PASS. 상세 기록은 `docs/26.07.31수정.md` 참고. 다음 단계(Veo Reference Image 입력)는 사용자 승인 대기 중.

## Scene1 v3 최종 Veo 생성 — image 필드(첫 프레임 고정) 방식 (2026-07-31)

공식 확인: Veo 3.1의 `image` 필드(첫 프레임 고정)와 `referenceImages`(에셋/스타일, 9:16·6초 미지원, `image`와 동시 사용 불가)는 별개 메커니즘 — 구조 보존이 목표이므로 `image` 필드 채택. `personGeneration: allow_none`(공식 확인된 값) 사용.

9:16 파생 Reference Image를 `image` 필드로 입력해 `veo-3.1-fast-generate-001` 1회 생성(전송 계층 417 오류 1회는 이미지 미전송으로 과금 없이 별도 처리, `Expect:` 헤더 비활성화로 실질적 1회 성공) → `scene1-v3-001.mp4` 성공.

**15개 평가 중 14개 PASS** — 프로젝트 전체 최고 결과. 처진 선반은 전 구간 안정적으로 유지, 첫/끝 프레임 형상 일치, 카메라 완전 고정, 인물/로고/텍스트/테두리 아티팩트 전무. **유일한 FAIL**: 처진 선반 바로 위 반듯한 비교 기준선 선반이 약 1.0~3.0초 구간에서 일시적으로 물결치듯 왜곡되었다가 마지막 프레임에 다시 반듯해짐.

**최종 판정: B** — 활용 가능하나 "비교 기준선 선반의 중간 구간 안정성" 한 가지 요소의 후속 실험 필요. Scene2 진행 전 사용자 승인 대기 중.
- "One Scene = One Message = One Action" 원칙과 최소 인물 노출 전략이 Veo의 강점(정적 장면, 짧은 단일 액션)과 더 잘 맞음.

## Scene1 v3-002 — 원인 규명 실험, 단일 문장 보강 (2026-07-31)

목적: v3-001의 중간 구간 왜곡이 프롬프트 문제인지 Veo의 시간적 일관성 한계인지 확인. 변경한 유일한 변수는 프롬프트에 추가한 문장 1개("The straight reference shelf directly above must remain perfectly straight and rigid for the full duration of the clip, never bending, rippling, waving, or distorting at any point, including the middle of the shot."). Reference Image, image 입력 방식, 모델, 생성 설정, Negative Prompt, 그 외 프롬프트 문장은 v3-001과 동일.

`scene1-v3-002.mp4` 1회 생성 성공. 동일 프레임(0.1s/1.0s/2.0s/3.0s/4.5s/5.8s) 확인 결과 **15/15 PASS** — v3-001에서 왜곡이 발생했던 1.0~3.0s 구간을 포함해 비교 기준선 선반이 전 구간 반듯하게 유지됨.

**최종 판정: A — 단일 문장 프롬프트 보강만으로 해결.** Veo의 시간적 일관성 한계가 아니라 프롬프트에서 "중간 구간까지" 명시적으로 강조하지 않은 것이 원인이었던 것으로 판단. 자동 후속 생성 없이 사용자 승인 대기.

## Scene1 v3-003 — 2단 구조 재설계 + "이미 처진 상태" 명시 (2026-07-31)

목적: (1) 영상 내내 계속 처지는 듯한 느낌 제거, (2) 가운데 선반 제거로 "정상 1개 vs 처진 1개" 비교 구조 단순화.

Reference Image를 GPT Image로 새로 생성. 1차 시도(`scene1-v3-reference-003.png`)는 선반 3개(정상 2 + 처진 1)로 잘못 생성되어 Veo에 사용하지 않고 사용자에게 즉시 보고, 프롬프트 보강 승인을 받아 2차 시도 진행. 2차 시도(`scene1-v3-reference-003-b.png`, "처진 선반 아래는 빈 공간" 명시)에서 정확한 2단 구조 확보 → 9:16 크롭(`scene1-v3-reference-003-b-9x16.png`, 기존과 동일한 비생성형 중앙 크롭 방식).

Veo 프롬프트는 v3-002 전체를 유지하고 "공급된 이미지는 이미 최종 손상 상태이며 영상 중 추가 변형이 없다"는 의미의 문단 1개만 추가. 카메라/구도/조명/Negative Prompt/생성 설정/모델/image 입력 방식은 변경하지 않음.

`scene1-v3-003.mp4` 1회 생성 성공. 0.1s~5.8s 6개 프레임 확인 결과 **6/6 PASS** — 선반 형상이 전 구간 완전히 동일(추가 처짐 없음), 정상 선반 1개·처진 선반 1개만 존재, 카메라 완전 고정.

**최종 판정: PASS — Scene1 최종 LOCK 후보.** Scene2로 자동 진행하지 않고 사용자 승인 대기 중.
