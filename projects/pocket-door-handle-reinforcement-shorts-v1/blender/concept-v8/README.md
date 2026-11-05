# v8 single low-resolution spatial layout check — 2026-11-03

Image: public/assets/images/pocket-handle-layout-check-v8.png, 540×960. Model: blender/concept-v8/pocket-handle-layout-check-v8.blend. Reproduction: build_v8.py, refuses overwrite. One render only, Cycles 20 samples. No high-resolution, video or animation.

## Layout
Only v7 handle mesh/transforms/materials and basic paint/wood materials reused. Removed v7 panel and support geometry in memory. New finite door envelope with visible right outer edge, front/rear surfaces, separate background and local side reveal. Camera horizontal obliquity 36.00°, elevated slightly, orthographic scale 2.6 scene units. Top/bottom crop retains macro framing, no whole door.
Clearance is centered on unchanged grip, hidden mostly behind its flange. Side opening exposes spatial depth; not a machining template. Short lower lateral support example passes behind the handle/remaining front skin, inside front/rear limits, below the grip clearance. Its top and end faces are visible. One support for this illustration only; no manufacturer count, material, location, size, fastening or strength claim. No closed rectangular support frame or ellipsoid.

## QA
1 Door/background: right exterior boundary distinguishes the door, though neutral tones are similar.
2 Front/side: side thickness and rim visible at right.
3 Handle: front alignment retained, large and near-flush; manufacturer-exact fit unverified.
4 Clearance: centered geometrically; actual back-of-grip space partly occluded by final handle.
5 Support inside: improved; top/end faces and surrounding skin establish an interior placement, unlike v7's flat inset. Visible lower gap may still make it read as a shelf-like example.
6 No obstruction: support lies below conceptual clearance; positive 0.012 scene-unit separation. No actual construction dimension implied.
7 Four-part connection: conditional / NOT full PASS, because final handle hides most of its receiving space and structural support contact is not directly visible.
8 No side-by-side wood panel: improved through lower-positioned short block rather than full-height strip.
9 540×960: grip, reveal and support depth readable; small outer skin thickness weaker.
10 Technical interpretation: raw realistic image may be mistaken for actual manufacturer placement. Future notice required: '내부 보강 설명용 개념도 · 제품별 상이'. Actual hollow/core structure and SH30NI fixing unverified. No technical blanket PASS.

286 pre-existing public/src/blender files unchanged by hash. Grip identical to v7. Geometry boundary test corrected with 1e-8 numeric tolerance (initial false was floating point -0.14500000000000002 vs -0.145); no geometry changes or second render. See geometry-qa.json and preservation-qa.json.

## Before high resolution or motion
User approval of spatial layout is required. Clarify whether receiving space is sufficiently visible; if not, a later authorized revision should expose a small adjoining portion of that space while retaining support/skin depth, without a larger arbitrary cavity or unseen fasteners. Do not treat the conceptual support or final positioning as installation guidance. No motion/high-resolution authorization inferred.
No TTS, other scenes, Blender animation, AI, guide/ending edits, cover/SNS or Git work.
