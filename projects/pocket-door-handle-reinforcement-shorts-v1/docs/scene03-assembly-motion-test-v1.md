# Scene 3 assembly-style explanatory test v1 — 2026-11-03

Output: public/assets/video/scene03-assembly-motion-test-v1.mp4. 1080×1920, 30fps, 180 frames, 6.000 seconds, H.264/yuv420p, no audio. Source src/scene03-assembly-motion-test-v1.tsx; renderer scripts/render-assembly-motion-test-v1.cjs refuses overwrites.
References confirmed: docs/scene03-motion-test-v2.md; src/scene03-layered-section-test-v1.tsx; DOMUS photo public/assets/images/domus-CIS_3455-v3.jpg. New independent composition; not flattened prior video.

## Timeline
0.00–0.80s (0–23): separated surfaces hold, official photo independent and static.
0.80–2.30s (24–68): smooth approach using horizontal spacing plus 36→17px oblique edge depth, front scale 1.015→1, rear .96→1, smaller shadow offset/blur.
2.30–2.93s (69–87): closer explanatory envelope hold, interior interval retained. This is not physical assembly completion.
2.93–4.17s (88–124): reopen partway, front opacity falls to .52, enquiry text/heading underline highlight fades in frames105–125.
4.17–6.00s (125–179): final hold 1.833 seconds.
Photo unrotated/unwarped at fixed position and scale. Fixed yellow reference and connector y1100 do not move with plane geometry. No physical handle insertion or removal.

## QA / limits
Full frame decode passes, ffprobe video-only/180frames/6sec/30fps verified. Eight phase frames inspected in 360×640 contact sheet at public/assets/images/scene03-assembly-motion-test-v1-contact-sheet.png. Photo crop pixels identical in sampled frames. 268 prior public/src/blender files unchanged; see assembly-motion-test-v1-qa.json.
Visual communication: heading and final enquiry clear, surface separation visible, easing has no position jumps. NOT unconditional PASS for assembly realism: approach still reads partly as two strips moving closer, with only modest depth cues; no convincing continuous joined door body is demonstrated. Front translucency makes the final front surface less prominent. Preserve this limitation for user review; do not add unsupported core to solve it.
Technical scope: explicit '설명용 레이어 · 실제 조립 공정 아님', persistent product-variability notice and omitted-core label. No fabricated core/reinforcement/attachment or cutting geometry. Empty interval can still imply hollow construction if notices missed, so not zero-risk technical PASS. Fixed enquiry marker represents a reference location, not a mounting point attached to the moving surface. Frame-based visual review, no claim of full real-time playback QA.

User approval needed for layer approach/assembly impression, final translucency, fixed enquiry reference and message clarity. Potential next authorized revision: more coherent shallow perspective of the two surface sheets and less front fading, retaining no internal geometry and no handle movement. Do not change other scenes or final production on this basis.
No TTS, Blender, AI, other scenes, full preview/final, ending, guides, cover/SNS or Git work.
