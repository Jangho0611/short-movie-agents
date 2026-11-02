# Scene1 material and lighting revision v2

Loaded the approved concept-v1/hinge-concept-v1.blend; no reconstruction of geometry or animation. adjust_material_lighting.py saves a separate hinge-concept-v2.blend.

Visual tuning values only, not manufacturer material specifications:
- Base Color linear RGB .56/.59/.62 → neutral .74/.74/.74.
- Metallic .72 → .88.
- Roughness .28 → .23 for cylinder; .38 for leaves.
- Key: rectangle4×22,3200W,(-8,-12,5).
- Fill: rectangle8×18,2200W,(10,-8,3).
- Rim: rectangle6×16,1800W,(3,8,10).
- Neutral white area lights; neutral worldRGB .75, strength .65.
- Geometry, modifier dimensions, camera settings, non-light world transforms sampled at all76frames compared exactly before/after. invariance-qa.json records result.
- All background, text, placement and TTS retained; Remotion source differs only in PNG sequence path.

Render using Blender5.2.3 LTS background on saved .blend. Set a fresh output path when reproducing to preserve prior files. PNG sequence is public/assets/images/blender-concept-v2/. Final scene public/assets/video/scene01-blender-concept-test-v2.mp4. No other Scene modified.
