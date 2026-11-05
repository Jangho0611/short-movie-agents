# Scene 3 Remotion silent motion test v1

10.000 seconds, 300 frames, 30fps, 1080x1920 H.264, no audio stream. Full ffmpeg decode completed without errors.

TTS: docs/26.11.02수정.md explicitly records approved text only, no generated audio. No audio files found in this project. Speech end and audio duration cannot be measured. 10 seconds is provisional visual timing, not approved TTS synchronization.

Timing: A 0–0.8; product-out/cavity-in 0.8–1.4; B1 1.4–2.5; B2 2.5–6.0; B1 return 6.0–7.4; B3 7.4–8.6; exact A image 8.6–10.0. B2 uses explicit cuts and the longest hold. No simulated camera orbit or part movement.

Source preservation: all six input images SHA256 checked before/after render; unchanged. See scripts/scene03-remotion-motion-test-v1-layout.json. Product center 269.5,480, size135x440; cavity center269.5,480 size90x384 on540x960 canvas, rendered2x. Uniform original product aspect preserved. Terminal state directly uses approved A image (H264 compression means decoded pixels are not lossless).

Visual QA HOLD, not PASS: contact sheet reviewed at360x640 tiles. Main message and product readable; footer small. B2 support/cavity are visible but sequential region emphasis has not been implemented. B1/B2 hard cut intentionally changes view; same-location association relies on sequence and caption. B3 fade temporarily shows cavity through product, reads as dissolve rather than seating. No invented rear hardware. Product/cavity endpoints stay aligned. Final A preserved.

Actual MP4 playback was opened in in-app browser; moving player reached around7seconds and displayed B1 return. Browser session then became unavailable. Complete continuous playback observation was not achieved; playback smoothness and cut timing remain unverified. Decode/contact sheet are not counted as motion PASS.

Technical risk: B2 can look like a specific real reinforcement configuration or removable panel. Educational disclaimer present, but does not validate SH30NI machining/fastening/strength. No TTS generated, no other scene, AI, Blender or full-video render. User review required for B2 hold/attention, B3 dissolve, view transitions and provisional duration. Do not proceed to TTS integration without approved audio identification.
