Previous standalone repository:
https://github.com/Jangho0611/eboard-installation-shorts-v2.git

Previous standalone HEAD:
78db44f79f3c393df2bf291d9ad2fdf2083ced63

Migrated to monorepo:
2026-10-07

Final approved video:
public/final/eboard-installation-shorts-final.mp4

Final SHA256:
e8f89876b1178bbfa932b0a2d53172aab929d4a389fe8676a6eaa4d45b1bfed4

Final composition: EboardInstallationFullPreview, 1080x1920, 24fps, 815 frames.
Approval record: docs/26.08.24수정.md

Migration policy:
- standalone tracked files preserved
- 4 untracked Cover reproduction inputs/scripts selected for Monorepo (not approved Covers):
- public/covers/hero/eboard-role-hero-v1.png
- public/covers/source/eboard-role-frame-05.0s.png
- scripts/render-eboard-role-cover.js
- scripts/render-eboard-role-sketch-cover.js
- 6 unapproved/unverified Cover/imagegen candidates preserved locally but excluded from Git:
- public/covers/eboard-role-cover-v1.png
- public/covers/qa/eboard-role-cover-v1-instagram-center-crop.png
- public/covers/qa/eboard-role-sketch-cover-v1-instagram-center-crop.png
- public/references/products/imagegen-input/eboard-cross-section-detail-v1.png
- public/references/products/imagegen-input/eboard-cross-section-main-v1.png
- public/references/products/imagegen-input/eboard-wallpaper-angle-v1.png
- OS metadata excluded from Git, preserved locally

Cover candidate tooling warning:
render-eboard-role-cover.js, render-eboard-role-sketch-cover.js and tracked render-mdf-cover-v2.cjs directly require /Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp. sharp is not declared in package.json/lockfile. These candidate scripts cannot be reproduced from an independent clone as-is. Their hard-coded standalone ROOT paths also remain unchanged. Final approved video is unaffected. Candidate Covers are not approved; scripts/dependencies were intentionally not modified. Apple SD Gothic Neo/Arial are local font dependencies; pixel-identical Cover reproduction requires separate QA.

Sketch output:
Expected: public/covers/eboard-role-sketch-cover-v1.png
Actual: absent; QA crop exists. No approval record. Cause unknown; no output generated during migration.

Migration QA:
Git metadata copy hashes/HEAD/refs/origin verified. Complete local tree moved without content changes. A/B/OS files preserved. Approved final and preview hashes unchanged. No render or dependency installation performed.
