# Scene 3 Remotion silent motion test v1 — 2026-11-03

User visual approval pending. Based on docs/scene03-photo-section-v2.md, whose latest still is public/assets/images/scene03-photo-section-v2.png. Static composite was not animated as a flattened image.

Output: public/assets/video/scene03-photo-section-motion-test-v1.mp4.
1080×1920, 30fps, 150 frames, exactly 5 seconds, H.264/yuv420p; video stream only, no audio.
Source: src/scene03-motion-test-v1.tsx. Renderer: scripts/render-motion-test-v1.cjs. Existing files are protected; repair mode only allowed files absent from the before-task preservation manifest. A current-run SVG clipping error was corrected before delivery; original assets untouched.
Representative frames: public/assets/images/scene03-motion-test-v1-f000.png, f044.png, f064.png, f088.png, f120.png (same prefix). Contact sheet: public/assets/images/scene03-motion-test-v1-contact-sheet.png.

## Timing (frame indices start at zero)
- 0.000–0.600 s, frames 0–17: centered real photo recognition hold.
- 0.600–1.500 s, frames 18–44: smooth uniform photo scaling 2.25×→2.45× (8.9% relative increase), around the same photo-height anchor. Location dot fades in frames 24–38.
- 1.500–2.567 s, frames 45–76: photo layer moves left 235px while independent educational section reveals left-to-right using SVG mask and opacity. No rotation, extraction or physical camera penetration.
- 2.567–3.267 s, frames 77–97: connector completes (76–88), reinforcement enquiry text fades in (88–98).
- 3.267–5.000 s, frames 98–149: final composition holds 1.733 seconds.
Header, pre-manufacture reminder and concept notice remain visible throughout. Duration is a visual test, not final TTS duration.

## Evidence / limits
Uses unchanged official asset public/assets/images/domus-CIS_3455-v3.jpg, originating from https://www.domusmetal.co.kr/wp-content/uploads/2018/08/CIS_3455.jpg. Uniform scale/background crop only, no filters or altered product geometry. Source photo limits full-size sharpness. Section adapted from the accepted explanation in src/scene03-photo-section-v2.tsx; not a manufacturer section. Grey field is unspecified interior, yellow indicates an enquiry position, neither represents reinforcement stock or an actual machining location.

## QA
Full H.264 decode completed without error; ffprobe verified 150 frames, 5.000s, 1080×1920, 30fps and no audio. 244 pre-existing public/src/blender files hash-checked unchanged. See motion-test-v1-qa.json.
Five phase frames inspected at 360×640 in contact sheet. Final front/rear labels, product, headline and enquiry text visible. Independent photo translation, scale, section reveal and connector/text timing verified in source. Smoothstep easing has zero endpoint velocity, no position discontinuities at phase boundaries. This is frame-based visual QA, not a claim of real-time playback review.
Visual communication: four-stage reading order is supported; motion's subjective naturalness and sufficient 'inside exploration' feeling await user review. Approach is intentionally modest and becomes a lateral editorial reveal, not a physical dive. Do not mark the full requested motion experience unconditionally PASS.
Technical scope: no guessed rear geometry, drilling, mounting operation, reinforcement, fasteners, completion or strength verdict. Concept labels required to avoid interpreting photo and diagram as validated installation combination.

No Blender, TTS, other-scene generation, full preview/final, cover, SNS, AI generation, guides/ending edits or Git work. Scene 3 TTS v2 remains candidate, other approved TTS unchanged.

After visual approval, align phase timing to separately approved/generated TTS, likely extending final reading hold as needed. Do not accelerate speech to fit this five-second test. No motion expansion authorized by this file.
