# v14 single receiving pocket — 2026-11-03

Outputs, 540×960, two renders only:
- public/assets/images/pocket-handle-single-cutout-pre-v14.png
- public/assets/images/pocket-handle-single-cutout-post-v14.png
Matching .blend files and build_v14.py in this folder. Refuses overwrite.

Loaded v13; disabled (not deleted) old reveal/transparent/support/envelope and QA graphics. Linked a local copy of the exact v12 validated single-pocket envelope. No new support, opening or core structure. Restored exact seated handle transforms from v10 B. Receiving pocket has no side cutaway. The QA solid envelope does not assert actual solid-core construction.

## Geometry
v12 relative values retained: body width/height/depth ~0.218/1.228/0.132; pocket ~0.242/1.262/0.1515; flange ~0.370/1.700. Body/pocket axis X/Z=(-0.245,0.077); Y normal coupling. Pocket rear depth allowance .025. Flange outer margins left/right/bottom/top ~.064/.064/.296/.142, surface contact error ~3e-9. Not mm or actual machining tolerances.
EXACT Boolean intersection of each seated evaluated body part with restored door returned zero volume for every part. Dense 90×160 front ray grid detects one connected recessed opening. 84 aperture-outline samples cast toward orthographic camera have zero handle occlusions in A. Coordinate framing search performed without test renders; selected normal separation .55, same ~36° camera rotation, x translation -.15 and ortho scale2.8 for BOTH images. No lateral handle translation/rotation.

## Visual QA
A entire handle and entire narrow rectangular receiving outline visible; low contrast on white pocket walls remains, but shape and size can be identified. B final flange covers receiving opening with no adjacent hole/wood/window. Mandatory criteria1/2/3/5/7/8 pass within the conceptual alignment check, not real SH30NI installation validation. No blanket production-style approval. Orthographic parallax makes separated grip project left of opening; this is normal-axis separation, not a displaced X/Z installation axis.
Front alignment uses unchanged v12 verified geometry/QA outlines; no new front render, because requested outputs are same-camera A/B only. Do not claim v14 has a separately rendered front view.
335 existing public/src/blender files hash-checked unchanged. geometry-qa.json / preservation-qa.json contain checks.

Next support stage remains subject to user visual approval. Do not reintroduce a second physical-looking hole or merge an editorial window into receiving aperture. Actual SH30NI hole dimensions, fastening and door/support construction remain unknown. Future concept notice required. No motion/high-resolution/TTS/other scenes/AI/guides/ending/Git work.
