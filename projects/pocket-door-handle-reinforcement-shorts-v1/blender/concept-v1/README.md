# Scene 2→3 concept motion test v1

## Deliverable scope
5.000 seconds, 120 frames at 24 fps, 540×960 (9:16) silent motion test. Not complete Scene 2/3, not TTS timing, not final resolution. No labels/logo/audio baked into Blender.
Final source: build_motion_final.py. Final model: pocket-core-motion-test-v1.blend.
Earlier build/review scripts, blends and stills preserved as QA history; do not confuse with final test.

## Sources and epistemic boundary
DOMUS https://www.domusmetal.co.kr/wp-content/uploads/2018/08/CIS_3455.jpg and SH30NI-1-1.jpg. Locally preserved official assets in public/assets/images/domus-*-v3.jpg were visually inspected. Front outer ratio 37:170 respected. Satin color, rounded edge, long recessed grip and ribs are simplified visual approximations. Inner radius, wall thickness, rib count, concealed back and installation geometry are not verified CAD.
No screws, brackets, adhesive, clips or DSL140 structure in model. No fastening inference.
The door is an unbranded envelope with conceptual thickness; not any actual door manufacturer's cross section. No core material or reinforcement members.
Blue rounded volume is a spatial explanatory envelope, not a measured mortise/cutting template. Amber soft volume is an abstract support-enquiry zone, not reinforcement stock, material or an actual location. Partial overlap illustrates need to compare conditions; it is not a failed installation.
A shader visibility window prevents the conceptual front skin occluding the grip bowl. This is display masking, not a physical machining mesh or verified cutting shape.

## Clip
Existing conversation findings: actual clip video/audio/frames were not verified. Project docs contain no verified clip footage. Reopening provided Naver clip URL was unsuccessful. No camera, cut speed or internal composition is claimed to be directly observed. The present motion follows the user's written direction, not a traced reproduction.

## Timing (Blender 1 based)
1–12: exterior hold.
13–43: continuous approach using single perspective camera.
44–64: hold camera; door envelope transparency reveals depth.
61–77: blue concept volume fades in.
65–83: small second continuous approach; handle fades partly for visibility.
81–98: abstract amber support-enquiry region appears.
99–120: complete visual hold, 22/24=0.917 sec.
Object mesh and transforms remain unchanged during motion. Only camera and material factors animate. AUTO_CLAMPED Bezier handles explicitly assigned via layered action API. Camera remains outside the door; transparency supplies the inside view.

## Future overlay (not baked into this test)
내부 구조 설명용 개념도 · 제품별 상이
Further optional labels: 매립 공간 개념 / 내부 지지 조건 확인.
Do not publish the unlabeled raw test as a verified product section. Add notice in Remotion if later approved.

## Reproduction
Run Blender background with build_motion_final.py in this directory. Existing final .blend causes stop; do not rerun into occupied output paths. Animation outputs public/assets/images/concept-motion-v1/frame-0001.png through frame-0120.png. Final representative stills key-001/043/064/077/120.png. No unrelated project source/model copied.
Encoder command retained in encode-test-v1.sh. It refuses overwrite.

## QA limits
Conceptual approximation, not product-accurate installation/CAD. No attachment or strength validation. Colored transparent regions alone do not explain all support mechanics without later labels. Scene2/3 connection is uninterrupted; final hold verified from image pixels. Blender representative frames visually reviewed. MP4 frame count/duration/audio absence and full decode checked separately in qa-v1.json. Full motion naturalness remains for user visual approval.
Prior v2/v3, approved TTS and common assets preserved. No Git, TTS, Flow/Veo, AI image or full video production.
