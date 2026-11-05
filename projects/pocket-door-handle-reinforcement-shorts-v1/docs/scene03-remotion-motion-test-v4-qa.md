# Scene 3 Remotion silent motion test v4 QA

## Technical — PASS
10.000 seconds,300 frames,30fps,1080x1920,H264 yuv420p. ffprobe shows only video; full ffmpeg decode succeeds. Six source asset hashes match v3 and render-before/after. v1–v3 assets/source/video retained. Source and render script isolated as v4. TTS remains unidentified;10sec is comparison timing, not synchronized approved speech.

## Changes
A→B1 and B1→B2 unchanged. B2 image fixed at45,140,450x800 on540 design canvas. Same target coordinates: cavity307.5,515; upper295,323.333; lower295,731.667. Lines2→3px; dot radius6; dark green#344c40 and brown#665034. Nonoverlapping intervals90–117,118–146,147–177; fade ramps2frames, substantially longer full-opacity holds. At360 display lines2px,dots8px diameter. Footer20→23px/weight600,15.3px at360. No structure/texture editing.

B3 simulation removed: no settle variable, product scale/shadow animation, wipe or fade in final comparison. Initial product-out retained only for A→B1. B1 stays until8sec; approved A full image cuts in at8sec. Comparison captions:7.4–8 '가공 위치',8–8.6 '손잡이 설치 후'.8.6–10 exact A layer with no overlays. Background and product center unchanged; H264 is lossy so no decoded-to-PNG pixel identity claim.

## Actual playback
IINA opened v4 and played from initial state through10sec stop. Playback menu confirms1x. Consecutive screen observations collected throughout11sec at~0.5sec intervals (no exported playback recording). Observed empty cavity pointer→upper beige→lower beige, B1 comparison→A, terminalA. No playback/session interruption. Playback completion PASS.

## Visual judgments
B2 emphasis PASS for visibility/ordering: darker/thicker leaders point inside intended regions, no simultaneous leaders, structural view remains clear. Footer fits without clipping and is easier to read at360x640 contact-sheet review. Mobile static readability PASS; actual360x640-sized video playback not performed, so mobile temporalQA conditional.
B1→A comparison PASS under approved before/after objective: direct cut with stable background, no expanding/popping object, ghosting or wipe. Clearly an editorial state change, not insertion. Comparison after-caption lasts0.6sec, relatively brief; finalA remains for1.4sec. Overall rhythm conditional: B2 is denser than outer states; scene-view cuts remain deliberate and visible. FinalA uses approved original without overlay after8.6. User final visual approval pending.

Technical interpretation conditional: photoreal B2 still resembles a particular reinforcement arrangement/removable skin. Disclaimer present; no verified SH30NI machining/fastening/strength claim. No AI, Blender, audio, other-scene/full-preview output. No canonical registration.
