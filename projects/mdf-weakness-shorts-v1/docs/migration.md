# Monorepo migration

Previous standalone repository:
https://github.com/Jangho0611/mdf-weakness-shorts-v1.git

Previous standalone HEAD:
529e8e25badb77b7ce7e7cd86c0a89936560a41b

Migrated to monorepo: 2026-10-07

Git metadata backup: Documents/shorts-monorepo-migration-backup-2026-10-06/batch1-git/ (검증된 복사본 및 원본 별도 보존).

Legacy WARN: migration으로 새로 발생한 문제가 아니며 standalone HEAD에서도 동일했다. 과거/미사용 composition 또는 기존 reference 문제이며 현재 최종 승인 결과물에는 영향 없음. 해당 legacy composition 재렌더 시 독립 dependency 환경과 reference를 별도 QA해야 한다. 이번 migration에서 소스는 수정하지 않았다.

Scene4 소스는 기존 public/generated 경로를 참조하지만 이미지 원본은 public/images/scene4-sheet-finish-interior-v1.png에 보존되어 있다. 현재 최종 영상에는 영향 없으며 소스 재렌더 전 별도 경로 QA가 필요하다.
