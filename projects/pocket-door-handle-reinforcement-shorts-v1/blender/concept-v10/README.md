# v10 pre/post educational coupling stills — 2026-11-03

Two outputs only, 540×960:
- public/assets/images/pocket-handle-pre-assembly-v10.png
- public/assets/images/pocket-handle-post-assembly-v10.png
Matching .blend files and build_v10.py in this directory. Script refuses overwrite. Two renders, no animation, no high resolution.

## Changes from v9
Existing white door exterior, right edge, rear skin, handle mesh/materials, camera and lighting retained. A separation reduced from 0.8 to 0.2 arbitrary scene units along door normal only; entire grip now inside frame. Receiving opening remains centered on visible bowl proxy X/Z and smaller than outer flange. Exact flange rear-plane contact with front exterior y=-0.2 established by a -0.0075000048 normal translation, not by altering grip mesh. No actual product machining dimension asserted.
Two alternate front skins occupy the identical door position: A contains the educational side reveal; B has only the concealed grip-receiving opening. B closes the explanatory reveal, hiding all support wood. This skin visibility change is editorial and not a physical patch installation.
One v9 lateral vertical support example remains inside the envelope, clear of receiving aperture. Shape/count/wood appearance/location are hypothetical teaching choices, not manufacturer reinforcement specifications or universal requirements. No fasteners or actual rear attachment added.

## QA
Geometry: X/Z receiving center matches bowl proxy; A/B grip differs only along normal; opening accommodates proxy while outer flange covers it; support clear of receiving space; camera unchanged; flange contact error ~2.98e-9 scene units. See geometry-qa.json. These checks do not validate actual SH30NI installation/strength/tolerance.
Visual full 540×960 inspection: A complete grip fits frame and is closer to aligned receiving opening. However the grip occludes much of that opening; body-to-hole size relation is not fully self-evident from this still. Separate support reveal can still be mistaken for another installation slot; criterion 2 visual clarity and criterion 3 remain conditional, not unconditional PASS.
B appears seated, no side receiving hole/wood exposure; criteria 5/6/7 visually satisfied within the conceptual scope. No detached handle/obvious surface penetration. Front/rim remains slightly raised as a flange. Same camera/door envelope/scale in A/B; only grip normal position and editorial skin visibility differ.
Mobile-size reading: pre/post difference clear, A aperture relationship weaker than B completion. Support depth/actual load path not established. Realistic wood can imply manufacturer specificity; future notice required: '내부 보강 설명용 개념도 · 제품별 상이'. Raw unlabeled still is not actual construction evidence.
303 pre-existing public/src/blender files unchanged by hash (preservation-qa.json).

## Future motion, not produced
Endpoints share a normal-only conceptual path. Before any authorized motion: show support in reveal; close editorial reveal; then move grip along normal; hold completed exterior. The skin change must be presented as ending the explanatory view, not patching/assembly. Need user approval of A's receiving-space readability and B final appearance first. Actual SH30NI mounting order remains unknown; no installation instruction claim.
No TTS, other scenes, high-res/video/AI, guide/ending edits, cover/SNS or Git work.
