Previous standalone repository:
https://github.com/Jangho0611/mdf-spec-check-shorts.git

Previous standalone HEAD:
962e625a7f94879e5109182a516056e19c536bfb

Migrated to monorepo:
2026-10-07

Final approved video:
public/previews/mdf-spec-check-full-v5.mp4

Final SHA256:
4e01360748d408c62d765b97a94f50d360c09b3a11a9159746037395aff2b8fa

Final approved Cover:
public/covers/mdf-spec-check-cover-v6.png

Cover v6 SHA256:
3f90b386b26d834b7e93fd70e21a210ad7d88e5ac37b814b364b49424139eb37

User decision:
- Cover v6 is the current final approved Cover, superseding historical v3 approval without altering prior records.
- Cover v4/v5 are previous local candidates and intentionally excluded from Monorepo Git.
- mfg-test-press.mp4 and mfg-test-render.tsx / ManufacturingTest are test-only and not used in final production.
- Test assets remain locally preserved but intentionally excluded from Monorepo Git.

Migration QA:
- Full local manifest and Git metadata backup SHA256 PASS; no existing file changed.
- Isolated lockfile npm ci and MdfSpecCheckFinal composition load PASS. Final Flow, TTS and Ending dependencies present.
- Final exact output is the preserved FFmpeg overlay/mux assembly described in docs/26.09.09수정.md; no full render performed.
- Cover v6 1080x1920 PNG full decode PASS.
- No package/lockfile/source/asset changes; no new migration error. Legacy warning: old Static/Scene01Video/DaesanLogoEnding/darukki sources have references already absent at standalone HEAD; final MdfSpecCheckFinal does not use these sources. Preserved without modification.
