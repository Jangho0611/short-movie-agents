# Common Prompt (MDF Density Shorts)

Shared across every Scene1~5 Veo prompt. Do not repeat these blocks inside individual scene files — reference this file instead.

## Reference-first Workflow (confirmed 2026-07-31)

For any scene whose message depends on a specific shape, structure, or physical deformation (e.g., a sagging shelf), **do not rely on Veo text prompting alone**. Follow this pipeline instead:

```
Scene 기획 → AI Reference Image 생성 → 사용자 승인 → Veo Reference Image 입력 → 영상 생성 → Remotion
```

This replaces the old `Scene Prompt → Veo → 영상` pipeline for shape-critical scenes. Steps:
1. Write a Reference Image spec (required elements, composition, what must NOT appear).
2. Generate 2–3 candidate still images with an AI image model (see model comparison in the relevant scene file / project-history log).
3. Get explicit user approval on one final image.
4. Feed the approved image to Veo as a `referenceImages`/image-conditioning input (image-to-video), not as text-only shape description.
5. Veo's job is only to bring the already-approved still to life with minimal, controlled motion — not to invent the shape from scratch.
6. Remotion handles narration, subtitles, logos, and graphics as before.

Do not skip step 3 (user approval) even under time pressure — an unapproved reference image must never be fed into a paid Veo generation call.

## Production Principle (v2 — confirmed 2026-07-30, current default, final)

**The subject of this video is MDF and real phenomena, not people.**

Core rule:

```
One Scene = One Message = One Action
People under 20%
Product and phenomenon over 80%
```

- The main subject of the video is MDF and real phenomena — not people.
- No visible human face by default.
- People, if used at all, stay under ~20% of total screen time across the whole video.
- When a person is needed, only hands, arms, or partial body — never a full face.
- No dialogue is generated in Veo, by default.
- No text, numbers, labels, brand names, or logos are generated in Veo — all handled in Remotion post-production.
- No interview composition, no camera gaze, no lavalier microphone.
- Hands-only demonstration is preferred over any face-forward acting.
- Static or minimally moving product-focused camera.
- One simple action per clip.
- Narration and on-screen labels are post-production elements, never spoken/rendered inside the Veo clip.
- Veo footage must remain usable even without generated audio (silence-safe).
- Veo generation focuses on: the problem/phenomenon, the product, the workbench, hand-only actions, and general B-roll.
- Prefer structures reusable from the PF vs XPS project's approach (Remotion text/data-card/bar-graph driven scenes with plain background footage) over character-driven live-action drama.

## Shape Prompt → Visual Comparison Prompt (v3 principle — confirmed 2026-07-31)

When a scene's message depends on a subtle physical deformation (e.g., a sagging shelf), **do not rely on shape-descriptive text alone** ("sagging", "bent", "curved", "bowed" and their synonyms piled up in the prompt). Scene1's v2 experiments (`scene1-v2-001.mp4`, `scene1-v2-002.mp4`, 2026-07-31) proved this reliably fails: Veo either normalizes the shape back to a plausible, tidy furniture design, or the deformation reads as ambiguous once there is no reference point to compare it against.

Instead, design the shot so the viewer perceives the deformation **by comparison**, not by isolated shape:
- Keep a straight/normal reference line or pattern in the same frame as the deformed one (e.g., a straight shelf/frame edge next to the sagging one).
- Or use an indirect visual cue that naturally reveals the deformation (e.g., objects resting on the surface whose top/bottom line follows the sag — this partially worked in v013/v017/v018).
- Or condition generation on a real/prepared reference image showing the actual deformation (this fully worked in v009 — see `docs/project-history/project-log-2026-07-30-mdf-density.md` and `reference/scene1_reference.png`).

Do not "fix" a failed shape-only attempt by only adding more synonyms, only expanding the Negative Prompt, or only tightening the close-up — those were tried and did not solve the underlying problem (see Scene1 v3 planning notes in `prompts/scene1.md`).

This supersedes the two-character, dialogue-driven approach below as the **default** for new scenes. That approach is kept for reference, not deleted — see the "Character Lock (v1, reference only)" section below and `docs/project-history/project-log-2026-07-30-mdf-density.md` for the full experiment record (Scene1 v001–v022 + alternate concepts + v5.1 final, Scene2 v001–v003) and why it was set aside (cost of iteration, inconsistent camera/gaze/prop control, uncanny dialogue delivery). If a future scene genuinely needs a person speaking on camera, treat it as a deliberate exception, not the default, and pull the relevant character spec back from the v1 section below.

## Character Lock (v1, reference only)

**v1 reference only. Not used in the v2 default production pipeline. Character-based scenes require separate user approval.**

Two distinct recurring characters. Each must stay visually identical across every scene he appears in, and the two must always remain clearly distinguishable from each other (different face type, different clothing, glasses vs. no glasses).

### Character A — Customer (appears from Scene1)

Ordinary homeowner. Not an MDF expert. His role is to discover the problem, feel curious, listen to Character B's explanation, and ask/react on behalf of the audience. He never explains MDF properties, never professionally compares materials, never takes on an expert role.

- Korean male, early 30s, slim build.
- Black rectangular glasses.
- Short neat black hair with a natural side part.
- Clean and well-groomed appearance.
- Beige or white casual T-shirt, dark pants.
- Calm, trustworthy, natural, questioning expression.

### Character B — Professional Service Engineer (appears from Scene2)

He is NOT a simple "employee." He is a **Professional Service Engineer / Technical Consultant / Field Technical Specialist** who visits the customer's site to diagnose and explain the problem. Prefer these terms over "employee" throughout the prompts. He examines the problem, and — starting Scene2 — explains that similar-looking MDF can have different properties, then in later scenes guides density/usage differences. He never sells, never uses tools to repair, never over-explains numbers/grades in Scene2, and never behaves like a salesman.

- Handsome Korean male, early-to-mid 30s, average-to-fit build.
- Modern, clean-cut appearance. Stylish and well-groomed hairstyle. Healthy skin. Friendly but professional smile. Calm and confident. Approachable.
- Overall image: professional service engineer — NOT elderly, NOT a rugged carpenter look, NOT a construction-worker appearance, NOT a salesman appearance.
- No glasses (so he stays clearly distinguishable from Character A).
- Modern navy company work jacket, business-casual workwear, minimalist design, premium service-engineer uniform feel. Clean and professional, not dirty, not heavily worn.
- No construction helmet, no safety vest, no formal business suit.
- **Company logo patch**: a small logo patch on the LEFT chest of his uniform (his left, as seen from the front-facing camera this typically reads as screen-left-of-center on his body). Top priority is that it reads naturally as a real company uniform patch. "대산" (no space) is the ideal text, but "대 산" (spaced) is also acceptable — imperfect lettering is fine as long as it still looks like a natural embroidered/fabric patch. Never oversized, never banner-like, never advertisement-like, never a floating on-screen graphic, never rendered as subtitle/watermark text, never "DAESAN" (English), never "대산우드랜드", never any other/invented brand name, never a logo on the back.
- Because Veo can render Korean text/logos imperfectly, visually verify after generation that the patch reads "대산" or "대 산" (both pass), is not some other/invented word, and is not duplicated elsewhere on the body/background.

Maintain identical face, hairstyle, clothing style, and body type for each character across every scene they appear in.

Note: Character A/B replaces the original single "40-year-old woodworking craftsman" character used in early Scene1 drafts (v001–v017). Do not reintroduce the craftsman/workshop character.

## Location Lock (v2 — confirmed via Scene1 Master v5.1)

Same realistic, bright modern Korean apartment across every scene (exact room may vary by scene — bedroom/wardrobe, desk, living room, etc. — but the apartment identity, lighting quality, and documentary tone stay consistent).
Soft natural daylight, realistic and lived-in, not a showroom, not a workshop, not staged.
No workshop, no tools, no sawdust props (superseded from v1 — see note above).

## Camera Style

Locked-off, static documentary camera by default — the camera behaves like an invisible observer, not a film crew.
No camera movement, no zoom, no scene transitions, no artistic/dynamic angles (no Dutch angle, no low/high angle), no cinematic orbit, no rack focus.
Single continuous shot per scene. No cuts.
If a person appears at all and needs to move, keep it natural and minimal — avoid complex multi-beat camera choreography (wide-then-push-in sequences, and multi-person dialogue blocking, both proved unreliable across v001–v022 / Scene2 v001–v003 testing; prefer locked-off static instead).

## Lighting

Soft natural daylight through a window.
Soft natural shadows.
No artificial studio lighting.
No dramatic movie lighting.

## Video Spec

9:16 vertical.
Real camera look, not CGI.
Natural depth of field.
No slow motion.
No dramatic movie effects.
Ultra realistic documentary filmmaking style.
Default: no person, or hand/arm-only presence — see Production Principle (v2). If a person does appear, keep it natural and unscripted-feeling — subtle, not staged, no presentation gestures, no pointing, no overacting, no dialogue by default.
No commercial advertising look.

## Negative Prompt

Note: "Logo" below means no on-screen graphic logos, banners, or watermarks. It does NOT forbid Character B's small embroidered "대산" chest patch, which is described explicitly in his character lock and only applies in scenes where he appears.

CGI
3D render
Animation
Plastic skin
AI face
Cartoon
Unrealistic hands
Extra fingers
Text
Subtitle
Logo (on-screen graphic/watermark, not Character B's uniform patch)
Watermark
Large or banner-style logo
Back logo
English brand text ("DAESAN")
Invented/unrelated brand name
Advertisement-style logo presentation
Unrealistic furniture
Dramatic movie lighting
No camera shake artifacts
No duplicated objects
No duplicated people
No morphing
No flickering
No warped furniture
No floating objects
No deformed hands
No distorted face
No inconsistent background
Time-lapse
Calendar
Clock
Workshop
Woodworking tools
Sawdust
Apron
Elderly appearance
Gray hair
Beard
Dramatic acting
Presentation pose
Pointing gesture
Touching the main object unless the scene explicitly calls for it
Facial close-up (v2 default: minimal/no face time)
Person speaking (v2 default: no dialogue in Veo clips — narration is added in Remotion)
Interview setup
Television presenter
Multi-person conversation blocking
