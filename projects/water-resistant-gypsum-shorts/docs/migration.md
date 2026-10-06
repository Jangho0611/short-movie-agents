# Monorepo migration

Previous standalone repository:
https://github.com/Jangho0611/water-resistant-gypsum-shorts

Previous standalone HEAD:
b748129695f2f2fe702f3b82ad010815bc3369a9

Migrated to monorepo:
2026-10-06

기존 독립 history는 합치지 않으며 기존 GitHub 저장소는 보존한다.
Git metadata는 Documents/shorts-monorepo-migration-backup-2026-10-06/pilot-git/에 복사본과 원본을 별도 보존했다.

후속 QA:
- 프로젝트 lockfile Remotion 4.0.496 유지. composition 확인에 사용한 상위 환경은 4.0.523이며 독립 실행환경 정책과 lockfile 기준 검증은 별도 진행한다.
- Cover v1의 기존 외부 fallback 의존성은 변경하지 않았으며 후속 QA 대상으로 유지한다.
