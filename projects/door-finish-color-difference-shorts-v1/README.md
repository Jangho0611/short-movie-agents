# 같은 색인데, 왜 다르죠?

시리즈: **문도사의 그것이 알고싶도어**. 회차 번호를 사용하지 않는다.

상태: 신규 프로젝트 초기화·제작 준비 완료, 본편 구현/제작 승인 대기.

- [제작 준비 기획서](docs/production-plan.md): Scene 화면·TTS 후보·자막 순서·근거·승인 전 확인
- [자료 목록](docs/source-register.md): 확보/열람/미확보 및 사용권 구분
- [초기화 검증](docs/initialization-qa.json): 파일별 원본/복사본 SHA256
- [작업기록](docs/26.10.27수정.md)

Slim Copy 원본: `../doormaster-handle-replacement-v1`의 초기화 설정 및 공통 엔딩 소스만 선택. 본편·커버·손잡이 사진·결과물·node_modules는 복사하지 않았다. Canonical 미디어는 루트 `assets/daesan-ending`, 간판은 `docs/design-styles/door-master/assets/series-sign-v2`에서 내부로 복사했다. 런타임 외부 자산 의존 없음.

`npm run studio`의 현재 등록 Composition은 승인 공통 엔딩 하나뿐이다. 본편 길이 확정 또는 본편 구현 완료를 의미하지 않는다. 이번 작업에서는 Studio 실행 및 렌더를 하지 않았다.

의존성은 대상에서 `npm ci --offline --ignore-scripts --no-audit --no-fund`로 설치했다. package/lock의 프로젝트명만 변경했고 버전·무결성·의존성 그래프는 유지했다. 설치 스크립트 및 브라우저 다운로드는 실행하지 않았다. 향후 실제 렌더 실행 환경 확인은 별도다.

신규 결과물: `public/assets/video/`; Scene 이미지: `public/assets/images/`; Cover/QA: `public/covers/`, `public/covers/qa/`; 승인 공통 간판: `public/references/series-sign-v2/`. Cover 제작은 최종 영상 승인 이후다. Git은 Monorepo 루트 하나만 사용한다.

## TTS v1 현황

Scene1~5 및 통합 청취본 생성 완료, 사용자 청취 승인 대기. 초기화 당시의 TTS 미생성 상태는 과거 기록이다. [청취 QA 보고](docs/tts-qa-v1.md)를 참조. 본편 영상은 여전히 미구현이며 영상 렌더 미실행.

## 최신 청취 후보: TTS v2

[통합 QA 보고](docs/tts-qa-v2.md). v1은 보존, 최신 후보는v2. 본편41.832초/엔딩포함46.686초. 사용자 청취 승인 대기, 영상 미구현.
