# 같은 색인데, 왜 다르죠?

시리즈: **문도사의 그것이 알고싶도어**. 회차 번호를 사용하지 않는다.

상태: **제작 및 사용자 승인 완료**. 최종 본편, Cover v3, YouTube Shorts·Instagram Reels·Naver Clip SNS 문구 승인 완료.

## 최종 승인 결과물 및 보존

아래 경로는 프로젝트 기준 상대경로다. 미디어와 공개 제외 작업기록은 승인된 로컬 프로젝트에 보존되어 있으며 공개 Git에는 포함하지 않는다.

- 최종 영상: `public/assets/video/door-finish-color-difference-preview-rewrite-v1.mp4` (39.866667초, 1080×1920 / 30fps)
- 최종 Scene: `public/assets/video/scene01-preview-rewrite-v1.mp4` ~ `scene05-preview-rewrite-v1.mp4`
- 최종 Cover: `public/covers/door-finish-color-difference-cover-v3.png`
- SNS 최종 문구: [docs/sns-copy.md](docs/sns-copy.md)
- SNS QA: [docs/sns-copy-qa.md](docs/sns-copy-qa.md)
- 작업기록: `docs/26.10.28수정.md` (공개 제외, 로컬 보존)
- 최종 제작 구성 기록: [docs/preview-rewrite-v1-report.md](docs/preview-rewrite-v1-report.md) — 작성 당시 승인 대기 표기는 과거 상태이며, 현재 승인 상태는 위와 같다.

시나리오 변경 이전의 1차 승인 제작본도 최종 수정본과 구분하여 로컬에 보존한다. 1차 전체 영상은 `public/assets/video/door-finish-color-difference-preview-v6.mp4`이며, 해당 Scene·초기 승인 TTS v7·주요 QA 기록도 보존한다. 실패본으로 분류하거나 삭제하지 않는다.

## 공개 Git 정책과 재현 제한

공개 Git에는 Remotion 소스·설정·공개 검토를 통과한 문서만 포함한다. 고객 현장 사진 및 가공본, 영림 공식 이미지·카탈로그, Scene·Preview·Final 영상, Cover 이미지, TTS 및 승인 엔딩 미디어는 제외한다. 개인정보나 로컬 절대경로가 포함된 공개 제외 문서도 원문 그대로 로컬에 보존한다.

**공개 Git 저장소만 Clone하면 전체 영상의 완전한 재렌더는 불가능하다.** 필요한 미디어 자산은 승인된 로컬 프로젝트에 보존되어 있다. 재렌더에는 해당 자산과 실행 환경이 필요하며, 소스의 상대경로 참조만으로 미디어가 제공되는 것은 아니다.

## 초기 제작 이력 (과거 기록)

아래 초기화 및 TTS v1·v2 내용은 당시의 작업 이력이다. 현재 승인 상태나 최종 음원 선택을 뜻하지 않는다.

- [제작 준비 기획서](docs/production-plan.md): Scene 화면·TTS 후보·자막 순서·근거·승인 전 확인
- [자료 목록](docs/source-register.md): 확보/열람/미확보 및 사용권 구분
- [초기화 검증](docs/initialization-qa.json): 파일별 원본/복사본 SHA256
- [작업기록](docs/26.10.27수정.md)

Slim Copy 원본: `../doormaster-handle-replacement-v1`의 초기화 설정 및 공통 엔딩 소스만 선택. 본편·커버·손잡이 사진·결과물·node_modules는 복사하지 않았다. Canonical 미디어는 루트 `assets/daesan-ending`, 간판은 `docs/design-styles/door-master/assets/series-sign-v2`에서 내부로 복사했다. 런타임 외부 자산 의존 없음.

초기화 당시 `npm run studio`의 등록 Composition은 승인 공통 엔딩 하나뿐이다. 본편 길이 확정 또는 본편 구현 완료를 의미하지 않는다. 이번 작업에서는 Studio 실행 및 렌더를 하지 않았다.

의존성은 대상에서 `npm ci --offline --ignore-scripts --no-audit --no-fund`로 설치했다. package/lock의 프로젝트명만 변경했고 버전·무결성·의존성 그래프는 유지했다. 설치 스크립트 및 브라우저 다운로드는 실행하지 않았다. 향후 실제 렌더 실행 환경 확인은 별도다.

신규 결과물: `public/assets/video/`; Scene 이미지: `public/assets/images/`; Cover/QA: `public/covers/`, `public/covers/qa/`; 승인 공통 간판: `public/references/series-sign-v2/`. Cover 제작은 최종 영상 승인 이후다. Git은 Monorepo 루트 하나만 사용한다.

### 초기 TTS v1 현황

Scene1~5 및 통합 청취본 생성 완료, 사용자 청취 승인 대기. 초기화 당시의 TTS 미생성 상태는 과거 기록이다. [청취 QA 보고](docs/tts-qa-v1.md)를 참조. 본편 영상은 여전히 미구현이며 영상 렌더 미실행.

### 당시 청취 후보: TTS v2

[통합 QA 보고](docs/tts-qa-v2.md). v1은 보존, 최신 후보는v2. 본편41.832초/엔딩포함46.686초. 사용자 청취 승인 대기, 영상 미구현.
