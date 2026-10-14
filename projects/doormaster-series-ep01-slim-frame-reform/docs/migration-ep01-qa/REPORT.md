# DoorMaster Ep01 Monorepo 이전 검증 — 2026-10-14

판정: 복사 무결성 PASS / 실행 재현·Git 보존 준비 WARN.

원본 291개 파일 / 159,681,797 bytes (152.284 MiB), 제외 0. 전체 목록·크기·SHA256 동일, 원본 재검증 동일.
표준 승인 영상 1개를 추가 복사(6,941,149 bytes). 재인코딩 없음. 원본291+표준영상1=292개, 166,622,946 bytes. 본 QA 문서/JSON은 별도 추가파일.
영상 SHA256: 1560196878e6ebf10568ffc7335725d3da1fd8bad9c980bf5a8c6119f1d70d3f
승인 커버·간판SVG/PNG·배경·SNS·기존 작업기록은 manifest 전수 검사로 동일.

## 씬/TTS/엔딩
최종 사용 버전 기록에 따른 씬 MP4 6개 존재/복사 확인:
- output/preview-v3/scene01-v3.mp4
- output/preview-v3/scene02-v3.mp4
- output/preview-v3/scene03-v3.mp4
- output/preview-v4/scene04-v4.mp4
- output/preview-v5/scene05-v5.mp4
- output/preview-v3/scene06-v3.mp4
실사용 TTS 6개와 승인 엔딩 MP4/MP3 존재/복사 확인. direct-asset-check.json 참고.
Scene 영상은 legacy output 경로에 보존되어 있으며 표준 public/assets/video에는 아직 없음. 임의 생성/이동하지 않음.
씬별 QA 이미지 및 SVG는 전부 보존. 최신6씬을 한 세트로 확정한 final 이미지 매핑은 없음(씬3 v3/씬4 v4·v5/씬5 v5 이미지, 씬1·2·6 과거 QA만 존재). 재생성하지 않음.

## 재현성 및 경로 문제
원본에 package.json/lockfile/node_modules/Remotion 프로젝트 설정 없음. SVG/Sharp·Pillow·ffmpeg 기반 소스가 존재. v4/v5 render.cjs는 프레임 함수를 export하며, 최종 v5 통합 조립 실행 스크립트는 없음.
Python Pillow/NumPy/OpenCV, macOS CoreText, ffmpeg/ffprobe, Node Sharp 필요. 의존성 버전 고정 근거 부족.
Sharp 로컬 런타임 절대경로 의존. 공통 레퍼런스는 현재 존재하지만 프로젝트 외부 직접 참조이며 이번 공통자산 이동 금지로 복사하지 않음.
TTS 스크립트는 사용자 홈의 gcloud ADC 및 /opt/homebrew/bin/gcloud 외부 환경 사용. 자격증명 파일은 열거나 복사하지 않음.
역사적 docs 타임라인의 /private/tmp/slim-preview-v3/audio 경로는 그대로 보존, 실사용 public/audio 파일 확인.
preview-v3/assemble.py:22의 p/audio 출력과 preview-v1/finalize.py:14의 p/audio 출력은 public/audio와 다른 기존 경로 문제. 실행 소스 무수정.

### 정확한 실행 경로 참조 위치
- `src/cover-doormaster-sign/render.cjs:1` — `const path=require('path');const sharp=require('/Users/janghokim/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');`
- `src/cover-doormaster-v3/compose-v3.py:4` — `ROOT=Path('/Users/janghokim/Documents/daesan-field-shorts/004-slim-frame-reform')`
- `src/cover-doormaster-v4/compose-v4.py:4` — `ROOT=Path('/Users/janghokim/Documents/daesan-field-shorts/004-slim-frame-reform')`
- `src/cover-doormaster-v4/compose-v4.py:52` — `comparison(Image.open('/Users/janghokim/Documents/short-movie-agents/docs/design-styles/door-master/references/door-master-cover-reference-v1.png'),'REFERENCE','cover-v4-reference-comparison.png')`
- `src/cover-doormaster-v5/compose-v5.py:4` — `ROOT=Path('/Users/janghokim/Documents/daesan-field-shorts/004-slim-frame-reform')`
- `src/cover-doormaster-v5/compose-v5.py:62` — `comparison(Image.open('/Users/janghokim/Documents/short-movie-agents/docs/design-styles/door-master/references/door-master-cover-reference-v1.png'),'REFERENCE','cover-v5-reference-comparison.png')`
- `src/preview-v1/render.cjs:2` — `const sharp=require('/Users/janghokim/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');`
- `src/preview-v2/assemble.py:5` — `ending=Path('/Users/janghokim/Documents/daesan-field-shorts/004-slim-frame-reform/public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4')`
- `src/preview-v2/render.cjs:2` — `const sharp=require('/Users/janghokim/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');`
- `src/preview-v3/assemble.py:4` — `project=Path('/Users/janghokim/Documents/daesan-field-shorts/004-slim-frame-reform')`
- `src/preview-v3/render.cjs:2` — `const sharp=require('/Users/janghokim/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');`
- `src/preview-v4/render.cjs:2` — `const sharp=require('/Users/janghokim/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');`
- `src/preview-v5/render.cjs:2` — `const sharp=require('/Users/janghokim/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');`

## Git/LFS
branch main, HEAD 71745ccb219722a00803e6d95413f505e6fe1d42
LFS 3.8.0 사용 가능. 10MiB 이상 바이너리 0, 100MiB 이상 파일 0, LFS 신규 후보 없음. .gitattributes 무수정.
새 프로젝트 표준 영상은 ignore 대상 아님, filter unspecified(10MiB 미만 일반 Git 대상).
기존 ignore에 걸리는 로컬 복사 파일 76개. 전체 정확한 목록은 git-ignored-files.txt. 대부분 output/ 및 .DS_Store. stage 전에 보존 정책 처리가 필요하다.
기존 변경: M docs/design-styles/README.md, ?? docs/design-styles/door-master/. 그대로 유지. 추가 변경은 새 프로젝트 폴더뿐.
민감 파일명/일반 키·개인키 패턴 검사 후보 없음. 완전한 비밀정보 부재 보증은 아님.
git add/commit/push 및 history 변경 없음.

## 다음 단계
이번은 복사·검증 완료. 삭제/정리 자동 진행 불가. 경로/의존성/씬 표준경로와 ignore 보존 처리 범위를 먼저 승인받아야 한다.
DoorMaster는 이번 Ep01에 지정된 시리즈이며 다른 영상에 자동 적용하지 않는다. 공통 간판 별도 등록·공통 가이드 수정 없음.
