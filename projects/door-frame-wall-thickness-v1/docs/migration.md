Previous standalone repository:
https://github.com/Jangho0611/door-frame-wall-thickness-v1.git

Previous standalone HEAD:
c0d8915716e650dabd909086836b861139336860

Migrated to monorepo:
2026-10-07

Migration changes:
- QA scripts qa-preview-v1.py, qa-preview-v2.py, qa-preview-v3.py: absolute project path replaced with Path(__file__).resolve().parents[1].

Migration QA:
- Isolated npm ci and DoorFrameWidth composition load: PASS
- Final direct assets/audio/Ending/imports and QA script root: PASS
- No new migration error; package/lockfile and assets unchanged.

Final approved video:
public/assets/video/door-frame-wall-thickness-preview-v4.mp4

Final SHA256:
9993134eed953f7e0cb05b075a0b1243f3fd86c3c323924a247e442b41ebc228

Approval evidence: docs/26.09.30수정.md records Preview v4 review and approval to proceed with Cover. Cover remains awaiting approval; existing tracked assets preserved.
