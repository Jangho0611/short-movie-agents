# Scene1 Prompt — status: v3 Final Veo Prompt (2026-07-31), v3 draft/v2/v1 archived below

## Scene1 v3 — Final Veo Prompt (image-conditioned)

**Input strategy (officially confirmed)**: Use the `image` field (first-frame conditioning / image-to-video) with the approved 9:16 reference image, NOT `referenceImages` (asset/style ingredients — officially confirmed to not support 9:16/6s for Veo 3.1, and cannot be combined with `image` in the same request).

- Reference image: `reference/scene1-v3-reference-001-9x16.png` (864×1536, exact 9:16)
- Model: `veo-3.1-fast-generate-001`
- aspectRatio: `9:16`, durationSeconds: `6`, sampleCount: `1`
- personGeneration: `allow_none` (officially confirmed current accepted value; no person should ever appear)

### Prompt text

```
Use the supplied image as the exact structural and compositional starting frame. Preserve the visible downward bow of the MDF shelf exactly as shown. Do not straighten, flatten, redesign, repair, or reinterpret the shelf. Maintain the same left support, center sag, right support, bedding placement, wardrobe framing, and horizontal comparison line throughout the entire shot. The straight reference shelf directly above must remain perfectly straight and rigid for the full duration of the clip, never bending, rippling, waving, or distorting at any point, including the middle of the shot. The first frame and final frame must retain the same shelf geometry and nearly identical composition.

This is a mostly static B-roll shot, close to a still photograph brought barely to life. The camera does not move. The scene's purpose is to show the state of the sagging shelf, not object motion.

Allowed: extremely subtle, natural indoor light variation; the faintest, almost imperceptible stillness of the fabric texture; realistic sensor-level texture consistent with a real living space.

Forbidden: zoom in, zoom out, pan, tilt, dolly, handheld shake, rack focus, cinematic reveal, shelf deformation animation, the shelf bending further or straightening back, bedding sliding or falling, doors opening or closing, new objects appearing, people, hands, arms.
```

### Negative Prompt

```
straight shelf, flat shelf, rigid shelf, repaired shelf, shelf returning to level, changing shelf geometry, redesigned furniture, warped wardrobe frame, wide room shot, camera movement, zoom, pan, tilt, handheld, cinematic reveal, letterbox, film border, black border, picture frame border, people, hands, arms, text, logo, watermark
```

### Output
`public/generated/mdf-density/scene1-v3-001.mp4` — **generated 2026-07-31, 1 attempt, result: 14/15 PASS.**

Result summary: the sagging shelf (with bedding) stayed correctly sagged in every checked frame (0.1s/1.0s/2.0s/3.0s/4.5s/5.8s), and first/last frame composition matched almost exactly — the strongest result in the project so far. One issue found: the straight comparison shelf directly above the sagging one temporarily developed a wavy/undulating front edge around t=1.0–3.0s, then returned to straight by the final frame. Judgment: **B — usable, but one element (mid-clip stability of the straight reference shelf) needs a follow-up test.** Full evaluation preserved in `docs/26.07.31수정.md` and the project-history log.

### v3-002 — single-sentence reinforcement experiment (2026-07-31)

**Changed variable (only one)**: added one sentence to the prompt text — "The straight reference shelf directly above must remain perfectly straight and rigid for the full duration of the clip, never bending, rippling, waving, or distorting at any point, including the middle of the shot." (inserted into the same paragraph, before the first/last-frame sentence). No other prompt text, Negative Prompt, camera/composition instructions, reference image, model, or generation settings changed.

**Purpose**: determine whether the v3-001 mid-clip warping of the straight comparison shelf was a prompt-emphasis gap or a Veo temporal-consistency limitation.

`public/generated/mdf-density/scene1-v3-002.mp4` — **generated 2026-07-31, 1 attempt, result: 15/15 PASS.**

Result summary: checked the same six frames as v3-001 (0.1s/1.0s/2.0s/3.0s/4.5s/5.8s). The straight reference shelf stayed perfectly straight in every frame, including the 1.0–3.0s window where v3-001 previously showed a wavy/undulating distortion. The sagging shelf remained correctly and consistently sagged throughout, camera stayed fully locked, and first/last frame composition matched almost exactly. No new defects introduced. Judgment: **A — the single-sentence prompt reinforcement resolved the issue.**

### v3-003 — new 2-shelf reference image + "already-damaged, fully static" reinforcement (2026-07-31)

**Purpose**: fix the last two remaining issues — (1) the shelf reading as if it's still sagging/settling during the clip rather than being an already-existing condition, and (2) the unnecessary middle shelf diluting the "1 normal vs 1 sagging" comparison structure.

**Reference image change**: new GPT Image generation replacing `scene1-v3-reference-001(-9x16).png`. First attempt (`reference/scene1-v3-reference-003.png`) produced 3 shelves (2 normal + 1 sagging) — rejected, not used for Veo. Second attempt with a reinforced prompt (explicit "no shelf below the sagging shelf, floor is empty space") produced the correct 2-shelf structure: `reference/scene1-v3-reference-003-b.png` → center-cropped (1024→864, same method as v3-001) to `reference/scene1-v3-reference-003-b-9x16.png` (864×1536, exact 9:16). This is the image used as Veo's `image` input for v3-003.

**Veo prompt change**: kept the full v3-002 prompt text unchanged, only added one new paragraph: "The supplied image already shows the final, permanently damaged condition of the shelf - the sag already exists before the clip begins. The shelf is not bending during the clip; no additional deformation occurs; there is no progressive sagging. The shelf geometry is completely static from the first frame to the last frame. This video documents an already-existing damaged shelf, not a shelf in the process of failing. Do not animate structural deformation. Do not simulate ongoing collapse." Camera, composition, lighting, Negative Prompt, duration, resolution, model, and image-input method unchanged.

`public/generated/mdf-density/scene1-v3-003.mp4` — **generated 2026-07-31, 1 attempt (plus 1 rejected reference-image regeneration, no video cost incurred), result: 6/6 PASS.**

Result summary: checked 0.1s/1.0s/2.0s/3.0s/4.5s/5.8s. Exactly two shelves present in every frame (1 straight upper, 1 sagging lower with bedding), no third shelf ever appears, floor beneath the sagging shelf stays empty. Shelf geometry is visually identical across all six frames — no progressive sagging, no settling motion. Camera fully locked. Judgment: **PASS — Scene1 final LOCK candidate.**

---

# Archived — Scene1 planning history (v1, v2, v3 draft) below

**Current strategy: v3 — Visual Comparison Prompt.** As of 2026-07-31, this project stops trying to make Veo generate the "sagging shape" purely from shape-descriptive text (Shape Prompt). v2 achieved excellent composition/camera/subject-priority control but never made the sag itself legible — see the "Archived — v2" section below for the full final record, kept for reference and not deleted. v3's approach: give the viewer a **visual comparison structure** (a normal reference line/pattern next to the sagging one) so the sag reads as "different from normal" even if the deformation itself is subtle.

Forbidden approaches under v3 (confirmed not to work / not to retry blindly):
- Only piling on more "sagging/bent/curved/bowed" synonyms in the text.
- Only expanding the Negative Prompt further.
- Only pushing the close-up tighter.
- Regenerating with the same text prompt hoping for a different result.

## v3 Scene1 — structural draft (NOT a final Veo prompt yet)

| Field | Draft content |
|---|---|
| 핵심 메시지 | "처진 MDF 선반" (unchanged) |
| 시청자가 처짐을 인지하는 비교 기준 | A visible normal/straight reference line in the same frame as the sagging line — currently planned via **Candidate D (reference image)**, optionally reinforced by **Candidate C (books/thin items whose top or bottom line follows the sag)**. Not yet finalized which combination. |
| 메인 피사체 | The sagging MDF shelf front edge. |
| 보조 피사체 | A straight reference shelf/frame line (or a straight-topped row of books/items) visible in the same frame for comparison. |
| 카메라 거리 | Close enough that the shelf is dominant (per v2's successful composition lesson), but NOT so tight that the comparison line falls out of frame — this is the key tension v3 must resolve. |
| 카메라 각도 | Front-facing, eye-level, matching the successful angle from v009 and v2-002. |
| 프레임 안의 수평 기준선 | At least one straight horizontal reference must be visible simultaneously with the sagging edge, in every frame. |
| 첫 프레임 구성 | Both the straight reference and the sagging edge already visible and readable within the first second. |
| 마지막 프레임 구성 | Same as first frame — camera does not move (carried over from v2, confirmed working). |
| 허용되는 움직임 | None, or only imperceptible ambient light change. |
| 금지되는 움직임 | Pan, tilt, zoom (including creeping zoom), push-in, orbit, rack focus — same as v2. |
| Veo 담당 요소 | The still shot itself (reference-image-conditioned first frame if Candidate D is used). |
| Remotion 담당 요소 | Narration, subtitles, logos, grade graphics — unchanged. |
| 실패 판정 기준 | The sag disappears or becomes ambiguous relative to the reference line; OR the camera moves; OR prior artifacts reappear (letterbox, film-strip border, denied 9:16, etc. — see v009/v010 history). |

고정 메시지 ("선반이 왜 이렇게 휘었을까요?") is added as post-production narration, not generated by Veo.

**Next step (not yet done):** finalize which candidate(s) to use, prepare the actual reference image/composition, and only then write the final Veo prompt with full Camera/Style/Negative Prompt sections.

### Reference image status — BLOCKED pending user confirmation (2026-07-31)

`reference/scene1_reference.png` (1023×1537, 5-shot storyboard with Korean annotations, previously cropped for `scene1-v009.mp4`) has **unconfirmed provenance**. Do not reuse it in any externally published or commercial output until provenance and usage rights are confirmed by the user. Open questions (see project-history log for the full list): is it user-made/generated, does it contain third-party material, is it free to use for Daesan internal/business purposes, is it approved for the final promotional video. No assumption has been made either way.

### Candidate D-solo vs D+C hybrid — comparison (decision deferred)

| 기준 | D 단독 | D+C 하이브리드 |
|---|---|---|
| 원본 훼손 위험 | 낮음 (크롭만) | 있음 (물체 재배치 편집 필요) |
| AI가 형상을 유지할 가능성 | v009로 입증됨, 상대적으로 높음 | 미검증, 하이브리드 변수 추가로 불확실성 증가 |
| 첫 1초 처짐 인지 가능성 | 높음 (참조 이미지 자체가 처짐을 담고 있음) | 이론상 더 높을 수 있으나 미검증 |
| 자연스러운 생활 공간 표현 | 높음 (원본 그대로) | 편집 흔적에 따라 저하 가능 |
| 이미지 편집 작업량 | 낮음 (크롭만) | 높음 (물체 배치 편집 필요) |
| 실패 시 원인 분석 용이성 | 높음 (변수 1개: 참조 이미지 자체) | 낮음 (변수 2개: 참조 이미지 + 물체 배열 중 원인 특정 어려움) |

**권장 실험 순서**: 1차 D 단독 (변수 최소화) → 1차 실패 시에만 2차 D+C 하이브리드 검토. "One Experiment = One Changed Variable" 원칙 적용 (common.md의 Incremental 규칙과 동일 취지).

**현재 상태: 참조 이미지 사용 권한이 확정되기 전까지 크롭/편집/새 파일 저장 보류.**

## Reference-first Workflow 적용 (2026-07-31) — 신규 AI 생성 기준 이미지 경로

`reference/scene1_reference.png`의 출처 확인이 보류 중인 것과 별개로, common.md에 추가된 "Reference-first Workflow"에 따라 **AI 이미지 생성 모델로 새 기준 이미지를 처음부터 만드는 경로**를 병행 계획합니다. 이 경로는 출처가 명확한(생성 이력이 이 프로젝트 안에 그대로 남는) 자산이므로, 기존 참조 이미지의 출처 확인 결과와 무관하게 진행할 수 있습니다.

```
Scene1 기획 (완료) → AI Reference Image 생성 (미실행) → 사용자 승인 (대기) → Veo Reference Image 입력 (미실행) → 영상 생성 (미실행) → Remotion (미실행)
```

### Scene1 Reference Image 사양서

**목표**: "처진 MDF 선반"이 첫 프레임에서 즉시 인지되는 기준 이미지 1장.

| 구분 | 필수 요소 |
|---|---|
| 피사체 | MDF 선반이 화면의 주인공 |
| 구조 | 정상적인 붙박이장 구조가 함께 보임 (배경 맥락으로) |
| 핵심 결함 | 처진 선반 앞 모서리가 명확히 보임 |
| 비교 기준 | 수평 기준선(다른 반듯한 선반/프레임 라인)이 처진 선을 함께 존재 |
| 소품 | 동일한 수납물 또는 이불이 자연스럽게 놓여 있음 |
| 장소 | 한국 아파트 붙박이장 |
| 조명 | 현실적인 생활 조명 (쇼룸/광고 조명 아님) |
| 구도 | 9:16, 카메라 고정을 전제로 한 단일 정지 구도 |
| 금지 | 사람, 손, 로고, 텍스트, 화살표, 번호, 설명 라벨 |

### AI 이미지 생성 프롬프트 초안 (아직 생성하지 않음)

```
A photorealistic still photograph of the interior of an open built-in wardrobe in a bright, realistic modern Korean apartment bedroom. Natural daylight, ordinary residential lighting - not a product advertisement, not an interior magazine spread, everyday lived-in atmosphere.

The MDF shelf is the clear subject. The middle shelf visibly sags downward at the front edge under the weight of neatly folded bedding resting on it. The sagging front edge is clearly visible and reads as a real physical defect, not a design feature. A straight, level shelf or wardrobe frame line is also visible in the same frame, directly above or beside the sagging shelf, so the viewer can compare the two and immediately recognize the sag.

Vertical 9:16 composition, front-facing, eye-level, single fixed camera position (this image will be used as a locked-off video's first frame). MDF material texture, believable wood-grain laminate finish.

No people, no hands, no logos, no text, no arrows, no numbers, no labels, no captions, no watermarks. Not a showroom. Not a luxury advertisement. Realistic documentary-photo quality, not illustration, not 3D render.
```

### 이미지 생성 모델 비교

이번 세션에서 이미 인증/설정되어 **즉시 사용 가능한** 모델만 비교합니다(새 API 키 발급이 필요한 모델은 후보에서 제외 — 필요 시 별도 승인 후 검토):

| 모델 | 사실감 | 구조 유지 | 참조 이미지 적합성 | 생성 속도 | 예상 비용(공식 확인) | 비고 |
|---|---|---|---|---|---|---|
| **Vertex AI Imagen 4 (Fast/Standard/Ultra)** | 높음 | Veo와 동일한 근본적 한계 가능성(미검증) — 텍스트 기반이라 미세한 변형 통제는 보장 안 됨 | 9:16 지원, Veo와 동일 GCP 생태계라 그대로 연결 용이 | 빠름(수 초~수십 초) | **Fast $0.02 / Standard $0.04 / Ultra $0.06 (이미지 1장, 공식 Cloud Billing Catalog API 확인, 2026-07-31)** | **이미 인증된 동일 Vertex AI 파이프라인(ADC, 같은 프로젝트·결제) 그대로 재사용 — 추가 설정 전혀 불필요** |
| GPT Image (OpenAI `gpt-image-1`) | 높음, 실내 사진 스타일에 강점 | 동일한 근본적 한계 가능성(미검증) | 다양한 비율 지원, 단 Vertex/Veo와 별도 생태계라 다운로드 후 재업로드 단계 추가 필요 | 보통 | 정확한 실시간 단가는 이번 조사에서 확인하지 않음(별도 확인 필요) | `OPENAI_API_KEY`가 이미 프로젝트에 설정되어 있어(내레이션용) 즉시 사용 가능 |
| FLUX (Replicate) | 높음 | 미검증 | 미검증 | - | - | `REPLICATE_API_TOKEN` 미설정 — 새 서비스 도입 필요, 이번 세션 후보에서 제외 |
| KIE 기반(Nano Banana Pro 등) | - | - | - | - | - | `KIE_API_KEY` 미설정 — Sprint 4에서 이미 도입 보류 결정됨, 후보에서 제외 |

### 추천 모델 1순위: Vertex AI Imagen 4 (Fast 또는 Standard)

**이유**: (1) 이번 세션 내내 Veo 생성에 사용해 온 것과 **완전히 동일한 인증(ADC)·프로젝트·결제 파이프라인**을 그대로 재사용할 수 있어 추가 설정이 전혀 없음. (2) 공식 Cloud Billing Catalog API로 확인된 **압도적으로 저렴한 단가**(장당 $0.02~$0.06, Veo 6초 클립 1회 비용의 1/10 이하). (3) Veo와 같은 Vertex AI 생태계라 생성된 이미지를 Veo의 `referenceImages` 입력으로 연결하기 매끄러움. Fast 등급으로 3안을 저비용으로 빠르게 뽑아본 뒤, 최종 승인본만 필요시 Standard/Ultra로 재생성하는 방식을 권장합니다.

### Scene1 이미지 생성 계획 (실행 전, 계획만)

1. 위 프롬프트로 **3안**을 Imagen 4 Fast로 생성 (예상 비용: 3장 × $0.02 = $0.06)
2. 3안을 사용자에게 제시, 승인 대기
3. 승인된 1장을 확정 (필요 시 Standard/Ultra 등급으로 고화질 재생성 검토)
4. 확정본을 `reference/scene1-v3-reference-001.png`(또는 다음 번호)로 저장, 원본 보존
5. 확정본을 Veo의 Reference Image로 입력해 Scene1 v3 최종 영상 생성 — **이 단계 전까지 최종 Veo 프롬프트는 작성하지 않음**

---

## Archived — v2 (final result, 2026-07-31)

v2's two iterations (`scene1-v2-001.mp4`, `scene1-v2-002.mp4`) are preserved as the full historical record of the "Shape Prompt" approach. Not deleted; not the current strategy.

### v2-001 → v2-002 결과 요약
- 선반 중심 클로즈업 구도: **성공** (v2-002에서 확립)
- 카메라 완전 고정: **성공** (v2-002에서 6초 전 구간 완전 정지 확인)
- 사람·손·팔·로고·텍스트 제거: **성공**
- MDF 선반을 메인 피사체로 만드는 것: **성공**
- 처짐 형상 자체 생성: **실패** — 둥근 모서리가 정상 가구 디자인처럼 보임
- 비교 기준점 부재로 처짐 인지 가능성이 v2-001보다 오히려 낮아짐
- v2-001 대비 구도/활용성은 개선, 핵심 메시지 전달은 개선되지 않음
- **최종 판단: C — 텍스트 프롬프트만으로 미묘한 물리적 변형(처짐)을 통제하는 방식은 여기서 종료. 참조 이미지 또는 시각적 비교 구조로 전환.**

### v2.1 (v2-002에 사용된) 전체 프롬프트 (참고용)

```
[MAIN SUBJECT - HIGHEST PRIORITY]
The visibly sagging MDF shelf is the dominant subject of the entire frame. The sagging front edge occupies a large portion of the image - this is a close, defect-focused shot, not a furniture-showcase shot. Everything else (wardrobe body, room, folded bedding) exists only as supporting context around this one curved edge. The wardrobe is background only.

[CAMERA]
The camera is positioned to emphasize the curved front edge of the sagging shelf - close enough that this edge is large and unmistakable in frame. No wide establishing shot. No room overview. No cinematic reveal.
Locked-off static camera. No pan/tilt/zoom (including creeping zoom)/push-in/handheld/orbit/rack focus. The framing does not change at all between the first and last frame.

[COMPOSITION]
Upper frame: folded bedding. Center: shelf surface. Lower third: curved sagging front edge - visual anchor. Background: wardrobe interior only, out of primary focus.

[LOCATION - background context only]
A bright, realistic modern Korean apartment bedroom, open built-in wardrobe, wide MDF shelf. Natural daylight, ordinary residential lighting, lived-in and practical, not a showroom.

[ACTION]
No person, no hands/arms, no touching, no repair, no falling objects. Scene remains still throughout.

[NEGATIVE PROMPT]
person, human face, hands, arms, ..., perfectly straight shelf, flat shelf, rigid shelf, perfect furniture, symmetrical shelf, architectural showcase, wide room shot, room overview, cinematic establishing shot, luxury interior advertisement
```

(Full text preserved in git history / prior conversation; this is the condensed reference copy.)

---

## Archived — v001–v022 및 v5.1 등 v1 실험

전체 기록은 `docs/project-history/project-log-2026-07-30-mdf-density.md` 참고. 삭제되지 않음.
