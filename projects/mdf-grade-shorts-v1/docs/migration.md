

## Monorepo Batch 1B migration

Previous standalone repository:
https://github.com/Jangho0611/mdf-grade-shorts-v1.git

Previous standalone HEAD:
fa2d33a3a868c766544a01c7f4201ee45166c4f8

Migrated to monorepo:
2026-10-07

Migration QA:
- standalone package/lockfile 환경 재현 PASS
- final composition/load QA PASS
- migration으로 발생한 신규 오류 없음

Legacy warning:
과거 방염2 별도 entry에 기존 누락 reference가 존재함.
현재 최종 MdfGradeFull에서는 사용하지 않음.
Migration 중 수정하지 않음.
