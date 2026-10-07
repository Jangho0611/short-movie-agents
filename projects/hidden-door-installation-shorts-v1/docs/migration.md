# Migration — 2026-10-07

Previous standalone repository: None
Previous standalone Git: None
Migrated to monorepo: 2026-10-07

Final approved video: public/assets/video/hidden-door-installation-preview-v8.mp4
Final SHA256: d8cbddb313e4d80baa418bac6e418c9cd95f5949ae7aa238f2cdd861928ad82a
Final approved Cover: public/covers/hidden-door-installation-cover-v3.png
Cover SHA256: 2865e67ba690be9b8ad2f920d1c59d3624495d4bb87d74e3e01ee758622830d6
Final SNS: docs/hidden-door-installation-sns-copy-final-v1.md
SNS SHA256: 50f316e92a23ca7a0a26cbe5e478be046f6517d74fb5b8aac91bd44b4de02011

Cleanup:
- node_modules removed from project
- OS metadata 3 files removed
- render/still logs 28 removed
- temporary QA JPG 24 removed
- historical production assets retained: A 79 + B 117
- Approved C preserved in /Users/janghokim/.Trash/hidden-door-cleanup-2026-10-07/ for recovery.

No standalone Git history existed before migration.

## Verification
Existing backup: 239 files / 290,334,005 bytes, SHA256 verified.
Current A+B: 196 files / 293,982,819 bytes, backup and pre/post-move SHA256 verified.
Verification manifests and latest A+B backup:
/Users/janghokim/Documents/shorts-monorepo-migration-backup-2026-10-06/verification/hidden-door-final-2026-10-07/

Independent temporary npm ci succeeded with lockfile; Remotion 4.0.523 loaded src/HiddenDoorPreviewV8.tsx and all five final scene compositions. Final references checked. Preview full decoding passed; no render performed.

Cover scripts resolve their own project root dynamically; old absolute paths occur only in unused fallback branches. No runtime path correction required. Historical logs retained unchanged.

Commit identity is available from Git history (chore: migrate hidden door project into monorepo). Post-push remote restoration results are reported in the external verification directory and completion report, avoiding a documentation-only second commit.
