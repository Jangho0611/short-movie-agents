# Cover v4 candidate — WARN / approval pending

Only title and brush changed. compose-v4.py uses independently editable text runs from layout-v4.json. Existing background, sign, subtitle, labels, connectors and brand use the unchanged v3 composition. No AI generation.

Font: Pretendard Black; original reference font unknown. First title run 160px rasterized to 650×135 then rotated +1.8 degrees; emphasis 140px to 472×118 +1.5 degrees; question 78px to 476×76 -0.7 degrees. These are independent text transforms, not a global cover transform. The brush uses reproducible seed 41 and varied bristle lengths/opacity, with the existing yellow RGB.

Mechanical QA: 1080×1920 PNG; hashes of sign/background/logo unchanged; changes outside title/brush region x25..1039 y560..855 = 0. Actual changed bbox (30,564,1023,852). All other composited elements remain pixel identical to v3.

Visual QA:
- Title hierarchy and asymmetry: PASS, wider first line and separate baseline directions; emphasis remains dominant.
- Brush: PASS for distinct bristles and irregular ends; WARN because procedural horizontal streaks are more uniform than the reference's organic brush.
- Title/sign/subtitle spacing and mobile legibility: PASS, no observed overlap/cut text.
- 9:16: WARN overall; typography improved but unchanged top whitespace remains and reference's larger composition cannot be fully matched within fixed surroundings.
- 3:4: content PASS; overall WARN because brand excluded.
- 4:5: main words and products PASS; WARN for existing icon/decoration tips clipped and brand excluded.
- 1:1: optional FAIL, series text clipped as in v3.
- Products unchanged. Generated appearance is not verified installation documentation.

No automatic adoption. User approval required for typography/brush and existing crop limitations. v3 retained.

Reproduce: python3 compose-v4.py /absolute/new/output-directory. Existing output PNGs are protected against overwrite. Read layout JSON to edit runs/positions, compose source for bristle generation.
