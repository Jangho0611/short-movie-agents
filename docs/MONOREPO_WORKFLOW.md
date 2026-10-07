# Shorts Monorepo 운영 기준

적용일: 2026-10-07. 최신 사용자 지시가 최우선이다. 31개 프로젝트 통합 완료 후 신규 제작에 적용하며 과거 자산·작업기록을 일괄 변경하지 않는다.

## 구조와 신규 프로젝트

- 기준 루트: `/Users/janghokim/Documents/short-movie-agents`
- 신규 영상: `/Users/janghokim/Documents/short-movie-agents/projects/<project-name>`
- 공통 운영 문서: 루트 `docs/`. 영상별 날짜형 기록은 `projects/<project-name>/docs/YY.MM.DD수정.md`에서만 관리한다.
- 공통 조사/Reference: 루트 `references/`. 조사 아카이브와 승인 Canonical을 구분하며 개별 승인·출처·적용 가능성을 확인한다.
- `projects/TEST/`: Git 제외 실험 영역. 정식 프로젝트와 구분한다.
- 신규 영상을 Documents 바로 아래에 생성하지 않는다. 프로젝트별 `git init`, `.git`, origin, standalone GitHub 저장소 생성 금지. 루트 `.git` 하나만 사용한다.
- 일반 Slim Copy는 실행에 필요한 최소 코드·설정·package/lockfile·승인 공통 엔딩 직접 의존 세트·로고·대산이 PNG 3종·실사용 폰트를 프로젝트 내부에 복사하고 SHA256을 확인한다. node_modules는 복사하지 않으며 해당 lockfile 기준으로 설치한다. 공용/다른 프로젝트를 런타임 직접 참조하지 않는다.

## 프로젝트 기준 저장경로

| 용도 | 경로 |
|---|---|
| Scene / Preview / Final 영상, 생성 테스트 영상 | `public/assets/video/` |
| Scene 이미지 및 생성 후보 | `public/assets/images/` |
| Cover | `public/covers/` |
| Cover crop QA | `public/covers/qa/` |
| 승인되어 여러 편에 재사용하는 Canonical Reference | `public/references/` |

Cover를 assets/images에 새로 저장하지 않는다. references는 진행 중 생성물·Scene 영상·Preview·Final 저장소가 아니다. 신규 결과물 기본 폴더로 public/previews/ 또는 output/을 만들지 않는다. 과거 프로젝트의 legacy 경로와 역사적 MD 절대경로는 보존한다.

## 제작과 승인

ChatGPT는 조사·기획·Hook·TTS 문구·Scene 구성·의사결정과 승인을 돕고, Codex/Astra는 승인된 범위의 로컬 실행·생성·Remotion·QA·정리·Git을 담당한다. 지시 경로는 위 Monorepo 프로젝트 경로를 사용한다.

기획/대본·제작 범위 승인 → 해당 범위 제작·QA → 최종 영상 승인 → Cover 승인 → SNS 승인 → 정확한 정리 후보 보고 → 사용자 삭제 승인 → 승인 후보만 정리 → 최종 SHA256/QA → Git 종료 순서다. 승인 전 제작 및 임의 정리 금지. 다른 프로젝트의 임시파일은 함께 정리하지 않는다. 코드 미참조만으로 최종 Scene 자산을 삭제하지 않는다.

실행 방법이 확정된 TTS 재생성·자막/경로/프레임 수정·재렌더·ffmpeg/ffprobe·SHA256 QA·기록·Git은 Terminal 직접 실행 가능하다. 판단·조사·최초 구현·복잡한 수정은 Codex/Astra를 우선할 수 있으며 모든 반복 작업에 필수는 아니다.

SNS는 기존 공통 가이드를 유지한다: 전 플랫폼 해시태그 최대 5개. Naver Clip은 별도 제목 없이 첫 문구+설명+모든 줄바꿈+해시태그를 포함한 통합 본문 최대 300자이며 프로그램으로 계산한다. 긴 고정 프로모와 고정댓글은 없다. YouTube/Instagram의 승인 프로모·고정댓글 규칙은 그대로 유지한다.

## 루트 Git 종료

항상 다음 위치에서 수행한다.

```sh
cd /Users/janghokim/Documents/short-movie-agents
git status --short
git diff
```

1. branch/HEAD/origin을 확인하고 fetch 후 원격과의 관계를 확인한다.
2. 해당 프로젝트와 실제 변경된 공통 가이드, 필요한 .gitignore/.gitattributes만 검토한다. 다른 영상의 미완료 변경은 포함하지 않는다.
3. 민감정보(.env/API key/token/credential/service account/private key), 대용량/LFS, 최종 자산 보존 QA를 수행한다.
4. 검증한 정확한 경로만 stage한다. `git add .`로 무관한 변경을 일괄 포함하지 않는다.
5. `git diff --cached`로 범위를 재확인한 뒤 commit하고 main에 일반 push한다. force push/history rewrite 금지.
6. fetch 후 `HEAD == origin/main`, working tree CLEAN을 확인한다. 다른 작업 때문에 DIRTY이면 그 상태를 보고하고 임의 삭제/reset/stash로 CLEAN을 만들지 않는다.

프로젝트 내부에서 별도 push하지 않는다. .git object 유지보수는 영상 1편 종료의 자동 단계가 아니며 Monorepo 전체에 영향을 주므로 별도 범위 확인·백업·사용자 승인이 필요하다.

## Git LFS와 제외

- 보존 바이너리 <10MiB: 일반 Git. >=10MiB: Git LFS.
- 승인/재현 보존 대형 바이너리의 **정확한 경로**에만 .gitattributes 규칙을 추가한다. 확장자 전체 지정 금지.
- 100MiB 이상 보존 바이너리를 일반 Git blob으로 push하지 않는다. stage의 LFS pointer OID/size를 실파일 SHA256/크기와 비교하고 업로드·실파일 복원까지 확인한다. 동일 SHA256 object는 재사용될 수 있다.
- Git LFS 설치가 있어야 clone 후 실제 미디어를 복원할 수 있다. `git lfs install`, clone 후 필요 시 루트에서 `git lfs pull`로 복원하고 pointer만 남지 않았는지 확인한다.
- 정식 projects는 기본 추적 가능, TEST·node_modules·.venv/venv·cache·__pycache__·.remotion·.npm-cache·coverage·OS 임시파일은 제외한다. 기존 local-only 개별 경로 제외를 유지한다. Git 제외는 로컬 삭제 승인이 아니다.

## 백업과 공통 문서

기존 standalone GitHub 저장소(존재하는 것)와 migration backup은 당분간 안전백업으로 유지한다. 모든 31개에 standalone history가 있었다는 의미는 아니다. 운영 안정성 확인 후 별도 사용자 승인으로 정리할 수 있으며 자동 archive/delete하지 않는다.

공통 규칙이 실제 변경됐을 때만 루트 docs/를 수정한다. 영상 1편의 예외를 자동 승격하지 않는다. 변경한 공통 MD의 정확한 파일명을 보고하고 일반 ChatGPT 프로젝트 소스도 최신본으로 교체하도록 안내한다. 변경하지 않은 공통 MD와 영상별 작업기록은 재업로드 대상이 아니다.

## 전환 감사 기록 (2026-10-07)

수정 전 공통 MD 검색으로 발견한 사항:

| 문서/설정 | 발견 및 처리 |
|---|---|
| README | ADK 샘플 중심 생성·clone 안내를 현재 31개 Monorepo 구조와 실제 프로젝트 인덱스로 교체 |
| GEMINI / 가이드 / windows-setup-guide | 과거 도구의 repository·origin 생성 및 output 예시를 신규 Shorts 운영과 분리. 도구 출력 구현을 변경한 것으로 오인하지 않도록 범위 명시 |
| 제작 운영가이드 | Preview 별도 경로 예외, 일반 Scene reference 저장, 정리 승인 및 .git 유지보수 범위를 현재 기준으로 수정 |
| 대산 제작 지침 | Monorepo 기준 연결, Cover 경로와 SNS 포함 정리 승인 명시. TTS 파일은 사용자 승인 우선 |
| COVER | Cover/QA 전용 경로와 정리 후보 승인 명시. 디자인 유지 |
| ENDING / DAESANI | 공용 원본 상대경로와 신규 프로젝트 경로 범위 명확화. 승인 규격 유지 |
| .gitignore | 정식 projects 기본 추적 + TEST 제외. 기존 local-only 경로 보존, 과거 projects/ 규칙에 의존하던 조사 아카이브 제외 명시 |
| .gitattributes | 기존 정확한 경로 48개: 중복/존재하지 않는 경로 없음, 변경 없음 |

SNS 가이드는 이미 전 플랫폼 최대 5개 및 Naver 통합 300자 규칙과 일치해 무수정. AI 이미지 품목별 프롬프트 가이드, DESIGN 문서와 design-styles/README, 기존 Cover 정비계획, TTS-GUIDE, VIDEO-GUIDE, Changelog, 과거 공통 작업기록은 관련 검색 결과 현재 Monorepo 운영과 충돌하는 신규 제작 지시가 없어 유지했다. 역사적 사례 경로는 새 생성 위치 지시가 아니다. 영상별 projects/*/docs는 감사·수정 대상에서 제외했다.
