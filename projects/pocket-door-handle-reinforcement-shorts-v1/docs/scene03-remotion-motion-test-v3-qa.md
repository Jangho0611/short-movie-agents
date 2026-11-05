# Scene 3 Remotion motion test v3 QA

Output: 10.000s, 300 frames, 30fps,1080x1920,H264,video only. ffmpeg full decode passes. Six source asset hashes equal v2 and before/after render. v1/v2 not overwritten.

Only B2 pointers and B3 changed. Timeline unchanged:0–.8 A;.8–2.5 B1;2.5–6 B2;6–7.4 B1;7.4–8.6 B3;8.6–10 A. TTS remains unidentified; temporary comparison timing, no audio/script edits.

B2 reference source540x960 shown at left45 top140 size450x800 in540 design canvas. Mapping is (45+5*x/6,140+5*y/6), then2x output. Source cavity point(315,450) maps(615,1030) output. Upper beige(300,220) maps(590,646.666); lower beige(300,710) maps(590,1463.334). Visual inspection of original and360x640 contact tiles confirms points inside gray cavity and beige faces, not sidewall/skin. Short lines do cross nearby image surfaces but endpoints now distinguish targets. No dimensions, parts or texture modifications. Disclaimer13.3px at360 display, readable; fine leaders relatively subtle.

B3 selected option B: whole opaque product appears atframe222, centered269.5,480; uniform1.012→1 over222–246, contact shadow narrows. No mask wipe, opacity remains1, no sideways motion or rear geometry. This removes wipe/ghosting but instantaneous appearance remains a perceptual risk; not proof of physical insertion. Last42frames use original A with no overlays. Lossy encoded frames are not pixel-identical PNGs. v2/v3 decodedframes0,54,65 identical;207,290 not byte-identical due to interframe compression, not source changes.

Actual playback: IINA successfully opened v3 and played from beginning to final A, then restarted at00:00 and reached final A again. UI observations sampled initial A, B1 and final A. Unlike browser attempts playback session stayed available, but screenshot sampling did not capture every transition instant; continuous motion-naturalness assessment is therefore LIMITED, not unconditional PASS. Technical playback completion is separate from perceptual approval. B3 sudden onset and overall rhythm require user review. Contact sheet alone not treated as motion PASS.

Technical QA PASS. B2 position and B3 opacity/center invariants PASS. Overall visual QA conditional/held pending perceived seating and full rhythm review. Photoreal support example can be mistaken for real manufacturer configuration despite educational disclaimer; no actual machining, reinforcement requirement or installation suitability claimed.

No AI/Blender/TTS/other scene/full preview generation. User approval required before subsequent production.
