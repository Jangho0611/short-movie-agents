# v12 receiving-pocket geometry QA — 2026-11-03

Two 540×960 PNGs: public/assets/images/pocket-handle-alignment-front-v12.png and pocket-handle-alignment-oblique-v12.png. Corresponding .blend files and build_v12.py here. One render per view, no animation/high-res.

v11 loaded; former stepped front, support, rear and edge objects remain in scene but disabled, NOT deleted/modified. New validation envelope has a narrow blind rectangular pocket. Its solid material represents only a QA collision envelope, not actual solid-core construction. Existing visible bowl proxy is the only conceptual embedded body; no new rear or mounting hardware.

Before rendering: seated transforms copied exactly from existing v10 B. Evaluated meshes (including modifiers) determine body bounds. X/Z center body and hole: (-0.2449999824,0.0769999921). Body width/height/depth: 0.21799998/1.227999985/0.131999999. Opening width/height/depth: 0.24199998/1.261999985/0.151499993. Depth is y=-0.2 to -0.0485000074; body rear y=-0.0735000074 leaves 0.025 clearance. Body extends slightly in front of surface into flange region, which is permitted in this proxy. All values arbitrary Blender units, not mm or real product specifications.
Flange external width/height: 0.3700000085/1.7000000477. Cover margins left/right/bottom/top: 0.064000035/0.063999994/0.296000023/0.142000039. Back contact plane y=-0.20000000298 vs exterior -0.2 (error 2.98e-9). Body/hole Y centers need not coincide: shared axis is parallel Y with identical X/Z; depth clearance differs.

## 3D interference QA
Each evaluated bowl/wall/end/rib mesh intersected with the actual boolean-cut door solid using Blender EXACT Boolean INTERSECT; resulting bmesh signed volume magnitude is 0 for every piece. Containment/extents and flange coverage separately checked. Subsequent door bevel removes edge material, not adds obstruction. Model-specific geometric fit PASS; NOT manufacturer tolerance/strength/installation validation. See geometry-qa.json.

## Views and limitations
Same handle/door pose in both views; handle separated only along Y by -0.28. Front camera is perpendicular and uses projected QA lines at front of object: cyan pocket outline, amber body envelope, grey shared vertical axis. These lines are annotations, not hardware. Orthographic projection necessarily makes the seated-axis body obscure actual pocket from front; outlines reveal comparison.
Oblique camera unchanged from v10 B (~36°); full grip inside frame, pocket edges/depth visible but partly occluded. Geometric criteria 4/5/6/8 PASS within this model; visual sufficiency of criterion 8 remains conditional rather than claiming unobstructed construction explanation. No stepped opening or support visible. No complete fit claim for real SH30NI.
319 pre-existing public/src/blender files unchanged by hash. Only new v12 assets created. No reinforcement modifications.

Next: obtain user approval of this narrow aperture/body/flange relation before returning to reinforcement Cutaway. Do not merge a broad editorial reveal into the receiving profile again. Future cutaway must clearly distinguish receiving aperture from explanatory skin removal. No automatic further creation authorized.
