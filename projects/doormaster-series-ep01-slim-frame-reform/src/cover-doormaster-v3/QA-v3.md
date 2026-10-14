# DoorMaster 004 cover v3 candidate

Status: WARN, user approval pending. No AI generation. No Git operations.

## Source and reproduction
- compose-v3.py assembles independent RGBA layers using Pillow.
- layout-v3.json keeps exact editable Korean strings, position, size, font choice and graphic points.
- Run `python3 compose-v3.py /absolute/new/output-directory`; outputs must not exist.
- Background, approved sign and logo are referenced directly from existing project assets without modifying them.
- Pretendard Black: title, labels, DAESAN; Pretendard Medium: subtitle and Korean company name. Not asserted as reference's original font.
- Brand position and source follow compose-v2.py.

## Mechanical QA
See technical-qa-v3.json: 1080×1920; original asset SHA256 unchanged; 0 changed background pixels outside overlay masks. Sign is resized with aspect ratio preserved; source bytes unchanged, not output-pixel identity.

## Visual QA
- 9:16 WARN: coherent palette and readable title, but crop-safe sign leaves more upper wall than v2; title block is more compact and less dynamic. Brush edges are vector-like compared with the reference's bristles. Do not automatically replace v2.
- 3:4: required series text/title/product comparison visible. Overall WARN because approved brand is excluded.
- 4:5: main text and product remain visible; top door-icon/decorative tips cropped, brand excluded: WARN.
- 1:1: series text cut, FAIL for optional compatibility only.
- 360×640 mobile: main words legible; subtitle/labels smaller, WARN for fine-print readability.
- No rectangular background patches or horizontal seams observed; original background unchanged.
- Labels point to corresponding casing surfaces; product composition/materials unchanged.
- Product is generated exterior illustration, not an actual before/after photograph or verified installation diagram. Label '9mm 슬림 문선' is exact requested text; it may imply measured face width without video context. WARN; no unrequested wording alteration.

## Approval
User must assess 9:16 design tradeoff, brand exclusion from crops, and 4:5 decorative clipping before adoption. Canonical/final status not assigned.
