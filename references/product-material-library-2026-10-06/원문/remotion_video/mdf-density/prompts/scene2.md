# Scene2 Prompt — Final Reference (2026-07-31)

**Status: Reference Image 확정, Veo 프롬프트는 아직 작성하지 않음.** 실험 과정 전체(v1/v2 옛 컨셉, v3-001~007, 실험 A/B/C/D)는 `prompts/experiment_scene2.md`에 별도 보존되어 있습니다. 이 문서는 최종 채택 기준만 유지합니다.

## Scene2 목표

Scene1 메시지("MDF 선반이 장기간 하중으로 약간 처질 수 있다")에 이어, Scene2는 "왜 이런 현상이 발생하는가"를 직관적으로 설명합니다. 핵심 원인은 **밀도(density)** — 같은 무게(리빙박스)를 올려도 밀도가 낮은 MDF는 미세하게 처지고, 밀도가 높은 MDF는 그렇지 않다는 것을 상·하 비교로 보여줍니다.

**핵심 철학**: Scene2는 "실험"이 아니라 "실제 가정에서 충분히 일어날 수 있는 상황"처럼 보여야 합니다. 연출 의도: 시청자가 "같은 리빙박스를 올려놨는데 왜 아래만 조금 처져 있지?"라고 자연스럽게 이해하는 것.

| 항목 | 내용 |
|---|---|
| 1. 핵심 메시지 | "같은 무게라도 밀도가 다르면 처지는 정도가 다르다." |
| 2. 연출 컨셉 | 제품/현상 중심 정적 클로즈업. 위(고밀도, 거의 직선) / 아래(저밀도, 미세 처짐) 두 선반을 동일한 리빙박스 하중과 함께 상하로 비교. 손·사람 없음. |
| 3. 카메라 구도 | 정면(Front), 고정, 완전 정적. 위아래 두 선반과 캐비닛 좌우 측판이 모두 한 프레임 안에 들어와 즉시 비교 가능해야 함(세로 비교 구도). |
| 4. 배경 | 실제 가정집 붙박이장 또는 수납장 내부 — 공방/실험실 아님. Scene1과 동일한 생활 공간의 연장선. |
| 5. 소품 | 리빙박스는 상단·하단 각각 정확히 1개씩, 총 2개. 각 선반 중앙에 동일한 리빙박스 1개만 배치 — 동일 제품·동일 모델·동일 크기·동일 색상·동일 방향·동일 위치를 상/하 모두 유지. 리빙박스는 겨울 이불·패딩·두꺼운 담요·계절 의류로 가득 차 육안으로도 무게감이 느껴져야 함. 텍스트/라벨/화살표/브랜드/로고 없음. |
| 6. 움직임 | 없음 — 완전 정적 상태. 카메라 완전 고정. |
| 7. 화면에서 강조할 요소 | 위(고밀도, 거의 완전한 직선) vs 아래(저밀도, 처음 보면 직선처럼 보이지만 조금만 보면 중앙이 아주 미세하게 내려간 것이 보이는 수준 — 과장된 휨 금지). 처짐은 리빙박스 자체 때문이 아니라 장기간 동일한 하중을 받아 생긴 상태처럼 표현(Scene1의 "이미 처진 상태, 사건이 아님" 원칙과 동일). |
| 8. 시청자가 3초 안에 이해해야 하는 내용 | "같은 무게를 올려도 밀도가 다르면 처지는 정도가 다르다." |

Scene1과 동일하게 유지할 원칙: 실사 스타일, 한국 환경, 과장 없는 표현, 광고 느낌 금지, AI 느낌 금지.

내레이션(후반 작업, Veo 비생성): "겉보기에는 비슷해도 MDF의 특성은 모두 같지 않습니다."

## Scene2 승인 기준 (7가지 모두 충족)

1. 동일한 리빙박스처럼 보인다.
2. 같은 하중이라는 것이 즉시 이해된다.
3. 아래 선반만 아주 미세하게 휘어 있다.
4. 실제 가정집 수납장처럼 자연스럽다.
5. AI 이미지처럼 과장되지 않는다.
6. 상단과 하단 모두 동일한 리빙박스 1개를 중앙에 동일한 위치로 배치해야 한다.
7. 리빙박스가 실제 가정에서 흔히 사용하는 수납용품처럼 보여야 한다.

## 최종 Reference Image 장면 설명

정면에서 바라본 붙박이장/수납장 내부 — 캐비닛의 좌우 수직 측판이 대칭으로 명확히 보이는 구도. 위아래로 정확히 두 개의 선반이 있으며, 각 선반은 좌우 지지 브라킷으로 측판에 고정되어 있음(브라킷이 시각적 비교 기준선 역할). 각 선반 중앙에 동일한 반투명 리빙박스 1개씩(겨울 이불·담요·패딩 등으로 가득 참) 놓여 있음. 상단 선반은 완전한 직선을 유지하고, 하단 선반은 균일한 두께를 유지한 채 판 전체가 하나처럼 아주 완만하게 아래로 휘어 있음(가운데만 두꺼워지지 않음, 앞단만 변형되지 않음). 문/경첩 등 캐비닛 개폐부는 보이지 않고 좌우 측판과 두 선반만으로 구성된 대칭적 비교 구도.

## Reference Image 프롬프트 (채택본)

```
A photorealistic still photograph of the interior of an open built-in wardrobe or storage cabinet in a bright, realistic modern Korean apartment. Natural daylight, ordinary residential lighting - not a product advertisement, not a showroom, not a laboratory, everyday lived-in atmosphere, real DSLR photo feel.

The camera is front-facing and perfectly level, a static locked-off framing. Exactly two shelves are visible in the same frame, stacked vertically: an upper shelf and a lower shelf, positioned so both can be directly compared within a single vertical composition.

On the upper shelf sits exactly one storage box (a semi-transparent plastic storage bin), centered on the shelf. On the lower shelf sits exactly one more storage box of the identical product - same model, same size, same color, same orientation, same centered position as the one above. There are exactly two storage boxes total in the entire image, one per shelf - do not add more boxes, do not add fewer.

Both storage boxes are filled completely full with heavy-looking winter bedding, a thick padded jacket, a thick blanket, and folded seasonal clothing, visibly packed to the top so the boxes clearly look heavy and loaded with weight - not empty, not lightly filled.

The upper shelf is high-density MDF and remains almost perfectly straight and level under the box's weight, a single flat panel of uniform thickness.

The lower shelf is a single flat panel of uniform, constant thickness along its entire length - the shelf's thickness at the center must look exactly the same as its thickness at the left and right ends. The entire panel, top surface and bottom surface together, bends downward as one continuous, very gentle arc: both the left support point and the right support point stay at the original shelf height, while the whole board's centerline is visibly, but only modestly, lower in the middle. The top surface and the bottom surface of the shelf remain parallel to each other along the whole curve. This is the same kind of gentle whole-panel bending sag as a thin wooden board that has bowed under long-term load - not a change in the board's shape or volume, only its vertical curve.

The sag must be immediately noticeable at normal viewing size when comparing the upper and lower shelves, without needing to zoom in. It represents natural long-term deformation under continuous load, not a sudden or dramatic event. The shelf remains structurally intact - it is not broken or cracked.

The upper shelf stays completely straight along its entire length, with no dip anywhere. Both shelves have the same structure, the same length, and the same depth, and are fixed to the same vertical side panels of the same cabinet, directly comparable within the same frame. Each shelf's left and right ends attach to the cabinet's side panels at clearly matching, aligned positions. The cabinet's vertical side panels and both horizontal shelves are all clearly visible without obstruction, giving the viewer a clear straight-line reference for comparing the two shelves directly.

Do not increase the thickness, depth, or height of the shelf at the center. Do not make the shelf look bulged, swollen, or thicker in the middle. Do not deform only the front edge while leaving the rest of the board flat - the whole panel must bend together as a single piece. Do not create a dramatic bow or a deep U-shaped curve. The dip should be modest but unmistakable at normal viewing size.

MDF material texture, believable wood-grain laminate finish for both shelves. The overall scene should look like an ordinary Korean household built-in wardrobe or storage cabinet, not a staged studio shot.

Vertical portrait composition suited for a 9:16 crop, single fixed camera position (this image will be used as a locked-off video's first frame).

Do not include: people, hands, arms, faces, text, labels, arrows, numbers, leader lines, brand names, logos, watermark-like marks, a third shelf, more than two storage boxes, empty-looking storage boxes, a dramatic bow, exaggerated deformation, a thicker or bulging shelf center, a wide shot showing the whole room, a camera angle that is not perfectly front-facing.
```

모델: `gpt-image-1`, size `1024x1536`, quality `medium`, n=1, 비용 $0.063.

## Veo 생성 시 예상 리스크

- **Creeping zoom 재발 가능성**: Scene1에서 프롬프트로 해결 불가능한 것으로 확인된 Veo 고유 한계 — 동일 재발 가능.
- **처짐 정도 과장/과소 위험**: 위/아래 차이가 너무 미세하면 메시지 전달 실패, 너무 과하면 비현실적으로 보일 위험(Scene1과 동일 패턴) — 승인 기준 3, 5번과 직결.
- **리빙박스 개수/배치 불일치 재발 위험**: 상/하 각각 정확히 1개로 고정했음에도 Veo가 개수를 임의로 늘리거나 줄일 위험 — 생성 후 반드시 개수(1개씩)·위치·방향 일치 여부를 확인해야 함 — 승인 기준 1, 2, 6번과 직결.
- **텍스트·로고 없이 밀도 차이를 전달해야 하는 제약**: 순수 시각적 대비만으로 전달, 실패 시 내레이션 의존도 상승.

---

## 최종 Reference

`reference/scene2-exp-C-baseline.png`
