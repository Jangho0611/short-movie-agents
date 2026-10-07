

## Monorepo Batch 1B migration

Previous standalone repository:
https://github.com/Jangho0611/door-order-tips-v1.git

Previous standalone HEAD:
776d67a1fab87eb60fab66615c3d86347292cd92

Migrated to monorepo:
2026-10-07

Migration QA:
- standalone package/lockfile 환경 재현 PASS
- final composition/load QA PASS
- migration으로 발생한 신규 오류 없음

Legacy warning:
미사용 Scene07의 scene07-daesan-ending-final.mp4가 standalone HEAD부터 존재하지 않음.
현재 최종 DoorOrderFull에서는 사용하지 않음.
Migration 중 수정하지 않음.
