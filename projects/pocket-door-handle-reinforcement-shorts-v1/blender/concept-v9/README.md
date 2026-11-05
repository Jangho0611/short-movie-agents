# v9 pre/post layout test — 2026-11-03

Two 540×960 renders only:
- public/assets/images/pocket-handle-pre-assembly-v9.png
- public/assets/images/pocket-handle-post-assembly-v9.png
Matching .blend files in this directory. build_v9.py reproduces both with overwrite protection. finish_post_v9.py completed B after a numeric restoration assertion stopped the first run following A. Exact original matrices were restored, with no A rerender and no geometry alternatives. No animation or high-resolution output.

## Geometry and source
v8 door exterior/right edge, camera (36°), scale, lighting and grip meshes/materials retained. Replaced front skin and lower shelf-like support. Receiving opening derives from the existing visible bowl proxy's bounds, NOT manufacturer hidden-body CAD or installation dimensions. Proxy width/height ~0.218/1.228, opening ~0.242/1.262, flange 0.37/1.70 in arbitrary scene units. X/Z center ~(-0.245,0.077) matches the bowl proxy, not necessarily external-flange center. Opening has ~11% width and ~3% height clearance over proxy and remains smaller than flange. Rear envelope leaves depth beyond proxy; not machining tolerance validation.
Separate editorial window beside opening reveals one vertical lateral support example between skins, at same bowl height. Support extends behind uncut skin above/below; no continuous rectangular ring. It does not intersect the conceptual receiving volume. Wood appearance/count/dimensions/position are not actual specs. Other interior omitted, no fixings.
A translates grip along door normal by -0.8 scene units; B uses exact v8 grip transform. This is explanatory separated/final positioning, not validated SH30NI mounting procedure. Same door/camera/scale in both.

## QA: NOT PASS overall
Geometry: model proxy fits opening, support does not intersect opening, flange covers receiving hole, original grip/camera preserved. See geometry-qa.json. These are model checks, not installation suitability.
A visual failure: handle's left edge is cropped because separation distance is too large for unchanged camera framing. Opening is visible but full body-to-hole comparison is compromised.
B: final grip appears near-flush and hides receiving opening. Vertical support removes shelf impression but still reads strongly as a wood strip/inset, with limited visible support depth. Interior placement partly evident from window shadow; core criteria 5 and 8 remain conditional/not sufficient for PASS. No claimed verified support/load path.
At 540×960, both openings and final handle visible, but A crop and B wood-strip reading prevent approval of motion endpoints. No additional trial renders made as requested.
Technical risk: realistic wood could be mistaken for standard manufacturer reinforcement; future concept notice required. Actual hole/depth/fastening/core/support specs remain unknown.

293 pre-existing public/src/blender files hash-checked unchanged; preservation-qa.json.

## Next approval needed
Before motion, reduce A normal separation and/or minimally reframe BOTH states to keep entire grip visible, and adjust reveal/camera to show support end/side depth rather than just a broad wood face. Do not add hardware or larger unsupported cavity. No automatic further render authorized. Current files can define conceptual start/end transforms but are not visually approved motion endpoints.
No TTS, other scenes, high-res, motion, AI, guides/ending, cover/SNS or Git changes.
