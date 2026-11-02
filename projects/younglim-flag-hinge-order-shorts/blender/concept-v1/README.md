# Scene 1 — Blender conceptual hinge test v1

Conceptual external geometry only. Not a manufacturer CAD model or verified mechanism, operating-angle, handing-conversion or door-direction guide.

Blender 5.2.3 LTS. Reproducible build script: build_and_render.py. Saved scene: hinge-concept-v1.blend. The original product photos and earlier tests are not modified.

- Fixed spindle; independently rotating upper/lower sleeves and leaves.
- Diagram-inspired proportions: axis diameter2.4, overall height17.2, leaf thickness0.3 in model units. These proportions do not certify the simplified back, holes or connector geometry.
- Two thick plates with rounded edges; five cylindrical through-holes each, staggered. Countersinks and internal springs/dampers deliberately omitted.
- Orthographic camera, fixed shallow oblique view, soft area lights, silver metallic material, Cycles24samples/denoising.
- Blender frames1/7:0 degrees;28/34:upper−90/lower+90;58/76:upper−180/lower+180. These are concept-animation angles, not product specifications.
- Frames1–76 at30fps. Transparent PNG sequence in public/assets/images/blender-concept-v1/.
- Remotion overlay source src/Scene1BlenderConceptV1.tsx. Scene1 TTS remains scene01-tts-script-v3-take-v1.mp3.

To reproduce, use a fresh output directory and .blend filename; do not overwrite this test. Run Blender background with build_and_render.py after adjusting its output paths. Render the Remotion entry separately, then mux the original TTS to exactly76/30seconds with ffmpeg. Existing source/model files are preserved as this test's reproducible baseline.
