# Scene 3 silent motion test v2 — 2026-11-03

Output: public/assets/video/scene03-photo-section-motion-test-v2.mp4.
1080×1920, 30fps, 150 frames, 5.000 seconds, H.264, no audio stream.
Source: src/scene03-motion-test-v2.tsx; renderer: scripts/render-motion-test-v2.cjs (refuses overwrite).
Section reference confirmed in docs/scene03-layered-section-test-v1.md: public/assets/images/scene03-layered-section-test-v1.png, src/scene03-layered-section-test-v1.tsx.
Uses unchanged DOMUS official photo public/assets/images/domus-CIS_3455-v3.jpg.

## Changes and timing
Photo/scale/translation/connector variables exactly retain v1 values. 0–17 recognition, 18–44 approach, 45–76 section transition, 77–97 connection/emphasis, 98–149 final hold. Final hold 1.733 seconds. No TTS duration inference.
Replaced flat section with approved-for-test separated surface illustration, its shading and texture. Removed the outer reveal clip from this group to avoid cutting shadow silhouettes; section opacity still follows v1 reveal ease(45,76). This is the only reveal-mechanism adjustment; photo timing/motion unchanged.
Notice '내부 구성은 제품별로 다름' is split into two lines, begins during section reveal, fades frames 78–88. Final '손잡이 위치, / 보강 필요 여부 확인' fades frames 88–98. Existing main title, subtitle and footer retained. Notice and final enquiry do not overlap in time. No actual internal components added.

## QA
Eight representative frames: 0/44/55/64/76/88/98/120; contact sheet public/assets/images/scene03-motion-test-v2-contact-sheet.png (each tile 360×640). Full decode error-free. ffprobe confirms video-only stream and requested dimensions/rate/duration/frame count. 257 pre-existing public/src/blender files unchanged. Left photo/title region is pixel-identical to v1 at frames 0/44/64/88/120. See motion-test-v2-qa.json.
Visual QA conditional, not unconditional PASS: front/rear depth and location remain recognizable, shapes/shadows no longer clipped by reveal mask. Early dissolve briefly overlaps photo's right edge (around frame 55); stronger overlap separation would require separately approved reveal opacity timing adjustment. Final enquiry's long second line fits but is small at mobile width (~10px), while main title is clear. User should review pacing/readability. Frame-based QA performed, not a claim of real-time playback observation.
Technical scope: no inferred core, reinforcement, hidden handle geometry, fastening or machining. Early variability notice and educational/not-construction labels retained. Empty-looking interval can still be mistaken for a hollow-core door if notices are missed; no zero-risk/generalized construction claim.

User approval needed for transition overlap, small final enquiry, overall depth/readability and continuation. No other scenes, TTS, Blender/AI, full preview/final, ending, guides, SNS/cover or Git operations.
