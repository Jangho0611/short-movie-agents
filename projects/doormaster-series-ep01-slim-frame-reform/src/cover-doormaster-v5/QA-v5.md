# Cover v5 candidate / WARN / awaiting approval

## Feasibility
Approved background remains a combined image, not independent door layers. Upper 400 rows remain exact. Only wall-only region is smoothly extended using a continuous cubic displacement map from destination y400 to1020; lower source y860 onward is translated exactly +160px, no scaling or interpolation. Door geometry starts below source y860. Product translation pixel mismatch = 0. Original background/sign/logo hashes unchanged.

Wall texture within the extension is vertically resampled; it is not pixel-identical. Visual full-size and mobile checks found no horizontal seam or rectangular patch. Lower 160 source rows are cropped at canvas bottom; door sides continue naturally. No AI generation or inpainting.

## Changes
- Both doors, labels and pointer endpoints +160px vertically.
- Sign unchanged at [165,240], width750.
- Native Pretendard Black sizes160/137/65; independent rotations2/1.5/0.2 degrees. No nonuniform or other glyph resize.
- Title run positions [173,575], [44,768], [600,798].
- Subtitle y860 to970; text/size unchanged.
- Filled yellow brush, irregular ends and edges, no repeated interior stripes.
- Independent muted wood double-chevron at x534/591 y1340..1450.
- Brand asset, text and placement unchanged.

## Visual QA
- 9:16 PASS for improvement over v4: natural text proportions and breathing room. Existing upper margin unchanged, not newly enlarged. Product visible height reduced160px: WARN tradeoff.
- 3:4 required content PASS: full series words/title and door corners. Overall WARN for brand exclusion.
- 4:5 content PASS; WARN unchanged icon/decorative tips clipped and brand excluded.
- 1:1 optional FAIL: series text clipped.
- Mobile360×640 main title and comparison readable. Fine subtitle small as before.
- Brush fill improved; procedural edge remains more regular than reference, WARN stylistic limitation.
- Products are generated external appearance, not installation evidence; no measured dimensions inferred from label9mm.
- Arrow stays in central wall gap, not over door corners.

## Reproduction
python3 compose-v5.py /absolute/new/output-directory
Pillow+NumPy+OpenCV, direct existing font/assets. Editable layout-v5.json, independent layer composition. New output path required. No automatic adoption or canonical registration.
