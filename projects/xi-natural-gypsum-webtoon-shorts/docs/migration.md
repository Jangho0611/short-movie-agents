# Migration to monorepo

Previous standalone repository: https://github.com/Jangho0611/xi-natural-gypsum-webtoon-shorts.git
Previous standalone HEAD: 5b513b5ec7a7ca054a0704f47539bab8c38d355e
Migrated to monorepo: 2026-10-07

Final approved video: public/assets/video/xi-natural-gypsum-final.mp4
Final SHA256: e13051b318e6006d3ccd0fcfbb1c9414b560d81cda0b2942aab764b2f0d60c4d

## Migration additions
- scripts/generate-vertex-image.mjs
- public/assets/video/scene05-final-motion.mp4

## Local-only preserved changes
- Modified generate-vertex-video.mjs was backed up and intentionally not adopted because it changes default duration 4→6 seconds.
- Modified SceneCaptions.tsx was backed up and intentionally not adopted because final scenes use SceneCaptionsV2.
- Both tracked files use the standalone HEAD contents in this project.
- Remaining 100 untracked candidate/test assets are preserved locally but excluded from Monorepo Git.
- Prior classification of 101 local-only items includes the modified SceneCaptions file; the additional video-script change makes 102 excluded changes in total, including two separately backed-up modifications.
- Modified file backups: /Users/janghokim/Documents/shorts-monorepo-migration-backup-2026-10-06/dirty-files/xi-natural-gypsum-webtoon-shorts/
- Git metadata and full pre-move manifest: /Users/janghokim/Documents/shorts-monorepo-migration-backup-2026-10-06/dirty-projects-git/

No local-only assets were deleted.

## Independent environment QA
PASS_WITH_LEGACY_WARN: lockfile installation in a temporary copy; Remotion/CLI 4.0.496; composition loading, src TypeScript and static asset references pass. XiNaturalGypsumFinal: 1080×1920, 24fps, 869 frames. Delivered final remains the approved 30fps file.
Full-project TypeScript checking includes pre-existing final/source archival snapshots with unresolved relative imports. Runtime src is unaffected. No source/config repairs, renders or generation API calls were performed.
