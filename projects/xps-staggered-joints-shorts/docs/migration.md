
## Monorepo Batch 2 migration

Previous standalone repository:
https://github.com/Jangho0611/xps-staggered-joints-shorts.git

Previous standalone HEAD:
2d41479d6e15e10c1e91700965b72171bfcbb07e

Migrated to monorepo: 2026-10-07

Final approved video:
public/assets/video/xps-staggered-joints-preview-v8.mp4

Final SHA256:
7761b06c1533929c2cc627890778bab32d2c98523f9a9e7f41e8871a9479f7c8

Migration QA:
- Isolated lockfile environment and final composition load: PASS
- Final direct dependencies and Ending: PASS
- No new migration error.

Legacy warning:
src/Ending.tsx references missing assets/audio/scene06-tts-v3.mp3, already absent at standalone HEAD. Final v8 and latest assembly use Canonical Ending and are unaffected. Legacy source unchanged.
