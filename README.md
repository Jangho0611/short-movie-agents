# 대산 Shorts Monorepo

건축자재 Shorts의 공통 제작 기준과 영상별 코드·승인 자산·작업기록을 함께 보존하는 저장소다. 2026-10-07 기준 정식 영상 프로젝트 31개가 통합되어 있다.

## 구조

```text
short-movie-agents/
├── .git/          # 유일한 Git 저장소
├── docs/          # 공통 운영 가이드
├── references/    # 공통 조사 아카이브 / 승인 Reference (승인 상태 개별 확인)
├── assets/        # 승인 공통 엔딩·대산이 등 배포 원본
├── projects/
│   ├── <project-name>/  # 영상별 코드·자산·docs
│   └── TEST/           # Git 제외 실험 영역
└── app/           # 기존 ADK 도구 소스
```

신규 영상은 `/Users/janghokim/Documents/short-movie-agents/projects/<project-name>`에서 시작한다. Documents 바로 아래의 독립 프로젝트 및 프로젝트 내부 .git/origin/standalone GitHub는 새로 만들지 않는다. Git은 `/Users/janghokim/Documents/short-movie-agents` 루트 하나에서 운영한다.

## 시작과 복원

Git LFS를 먼저 설치해야 대형 미디어가 pointer가 아닌 실제 파일로 복원된다.

```sh
git lfs install
git clone https://github.com/Jangho0611/short-movie-agents.git
cd short-movie-agents
git lfs pull
```

영상 실행환경은 각 프로젝트 package/lockfile 기준으로 설치한다. 공통 루트 환경으로 모든 영상을 실행할 수 있다고 가정하지 않는다. 신규 Slim Copy는 최소 코드·설정·lockfile과 승인 공통 자산 직접 의존 세트만 복사하며 node_modules는 제외한다.

## 기본 운영

- 기획/조사·대본·제작 범위 승인 → 제작·QA → 영상 승인 → Cover 승인 → SNS 승인.
- 최종 승인 후 정리 후보를 정확히 보고하고 사용자 승인 범위만 정리, SHA256/QA 후 루트 Git 종료.
- 루트 status/diff → 민감정보·LFS QA → 관련 프로젝트/실제 변경 공통 가이드만 stage → staged diff → commit → 일반 push → fetch/HEAD sync/CLEAN 확인.
- 기존 standalone 저장소와 migration backup은 안전백업으로 유지한다. 별도 승인 없이 삭제하거나 archive하지 않는다.
- 보존 바이너리 <10MiB는 일반 Git, >=10MiB는 정확한 경로 단위 Git LFS. 100MiB 이상 일반 blob 금지.
- 상세 기준: [Monorepo 운영 기준](docs/MONOREPO_WORKFLOW.md).

## 프로젝트 결과물 경로

| 용도 | 프로젝트 내부 경로 |
|---|---|
| 영상 (Scene/Preview/Final) | `public/assets/video/` |
| Scene 이미지 | `public/assets/images/` |
| Cover | `public/covers/` |
| Cover crop QA | `public/covers/qa/` |
| 승인 재사용 Canonical Reference | `public/references/` |
| 영상별 날짜형 작업기록 | `docs/YY.MM.DD수정.md` |

신규 결과물을 public/previews/ 또는 output/에 저장하지 않는다. 기존 legacy 자산 경로는 일괄 변경하지 않는다.

## 공통 가이드

- [대산 제작 지침](docs/daesan_shorts_instructions.md)
- [제작 운영가이드](docs/Shorts_제작_운영가이드.md)
- [SNS](docs/SNS_업로드_문구_가이드.md), [Cover](docs/COVER.md)
- [공통 엔딩](docs/DAESAN_ENDING.md), [대산이](docs/DAESANI_MOTION_LIBRARY.md)
- [AI 이미지](docs/건축자재_AI이미지_품목별_프롬프트_가이드.md), [디자인 스타일](docs/design-styles/README.md)

## 정식 프로젝트 인덱스

실제 projects/ 디렉터리와 Git 추적 목록 기준. 아래 상태는 편입 완료이며 각 콘텐츠의 세부 승인 상태는 해당 프로젝트 기록을 따른다.

| 프로젝트 | 상태 |
|---|---|
| [bathroom-door-moisture-shorts-v1](projects/bathroom-door-moisture-shorts-v1/) | Monorepo 편입 완료 |
| [darukki-vs-twobuy-webtoon-shorts](projects/darukki-vs-twobuy-webtoon-shorts/) | Monorepo 편입 완료 |
| [door-frame-integrated-vs-separate-v1](projects/door-frame-integrated-vs-separate-v1/) | Monorepo 편입 완료 |
| [door-frame-order-tips-v1](projects/door-frame-order-tips-v1/) | Monorepo 편입 완료 |
| [door-frame-wall-thickness-v1](projects/door-frame-wall-thickness-v1/) | Monorepo 편입 완료 |
| [door-handing-guide-shorts-v1](projects/door-handing-guide-shorts-v1/) | Monorepo 편입 완료 |
| [door-order-mistakes-shorts-v1](projects/door-order-mistakes-shorts-v1/) | Monorepo 편입 완료 |
| [door-order-tips-v1](projects/door-order-tips-v1/) | Monorepo 편입 완료 |
| [eboard-explainer-shorts-v1](projects/eboard-explainer-shorts-v1/) | Monorepo 편입 완료 |
| [eboard-installation-shorts-v2](projects/eboard-installation-shorts-v2/) | Monorepo 편입 완료 |
| [flame-retardant-episode1-shorts-v1](projects/flame-retardant-episode1-shorts-v1/) | Monorepo 편입 완료 |
| [flame-retardant-episode2-shorts-v1](projects/flame-retardant-episode2-shorts-v1/) | Monorepo 편입 완료 |
| [gypsum-board-installation-shorts](projects/gypsum-board-installation-shorts/) | Monorepo 편입 완료 |
| [gypsum-flame-retardant-shorts-v1](projects/gypsum-flame-retardant-shorts-v1/) | Monorepo 편입 완료 |
| [hidden-door-installation-shorts-v1](projects/hidden-door-installation-shorts-v1/) | Monorepo 편입 완료 |
| [light-steel-vs-sosong-shorts-v1](projects/light-steel-vs-sosong-shorts-v1/) | Monorepo 편입 완료 |
| [mdf-grade-shorts-v1](projects/mdf-grade-shorts-v1/) | Monorepo 편입 완료 |
| [mdf-spec-check-shorts](projects/mdf-spec-check-shorts/) | Monorepo 편입 완료 |
| [mdf-weakness-shorts-v1](projects/mdf-weakness-shorts-v1/) | Monorepo 편입 완료 |
| [sosong-lumber-grade-shorts-v1](projects/sosong-lumber-grade-shorts-v1/) | Monorepo 편입 완료 |
| [sosong-lvl-webtoon-shorts](projects/sosong-lvl-webtoon-shorts/) | Monorepo 편입 완료 |
| [sosong-webtoon-shorts](projects/sosong-webtoon-shorts/) | Monorepo 편입 완료 |
| [uv-coating-episode2-shorts-v1](projects/uv-coating-episode2-shorts-v1/) | Monorepo 편입 완료 |
| [uv-coating-episode3-shorts-v1](projects/uv-coating-episode3-shorts-v1/) | Monorepo 편입 완료 |
| [uv-coating-shorts-v1](projects/uv-coating-shorts-v1/) | Monorepo 편입 완료 |
| [water-resistant-gypsum-shorts](projects/water-resistant-gypsum-shorts/) | Monorepo 편입 완료 |
| [xi-natural-gypsum-food-fact-shorts](projects/xi-natural-gypsum-food-fact-shorts/) | Monorepo 편입 완료 |
| [xi-natural-gypsum-webtoon-shorts](projects/xi-natural-gypsum-webtoon-shorts/) | Monorepo 편입 완료 |
| [xps-staggered-joints-shorts](projects/xps-staggered-joints-shorts/) | Monorepo 편입 완료 |
| [xps-vs-eps-shorts](projects/xps-vs-eps-shorts/) | Monorepo 편입 완료 |
| [xps-waterproof-vs-water-absorption-shorts](projects/xps-waterproof-vs-water-absorption-shorts/) | Monorepo 편입 완료 |

## 기존 도구 문서

GEMINI.md와 기존 ADK 실행 가이드는 도구/과거 실행 방식 참고용이다. 신규 Shorts의 프로젝트 생성·저장경로·Git 운영은 위 Monorepo 기준을 우선하며 ADK 샘플 scaffold/별도 repository 생성 절차를 적용하지 않는다.
