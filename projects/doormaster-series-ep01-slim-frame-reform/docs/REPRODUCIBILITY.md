# Ep01 최종 소스 재현 범위 — 2026-10-14

승인 파일은 보존 원본이다. 이번에는 재렌더하지 않았으며 바이트 동일 재현을 검증하지 않았다.

## 의존성과 실행
- 프로젝트에서 `npm ci --ignore-scripts`로 package-lock.json의 Sharp 0.35.4를 설치한다. 현재 확인 버전이며 과거 제작 환경과 같다는 의미가 아니다. Node는 Sharp의 engines 조건을 따른다.
- Python: Pillow, NumPy, OpenCV(cv2). 현재 python3에서 Pillow 12.3.0, NumPy 2.5.3 확인; OpenCV 설치 배포판/역사적 버전 미확인. requirements.txt는 API 의존성 명세이며 역사적 Python lock이 아니다.
- 시스템: ffmpeg/ffprobe; 간판 윤곽선 변환은 macOS Swift/CoreText 필요.
- 커버 폰트: src/cover-doormaster-v2/assets/Pretendard-Black.ttf 및 Pretendard-Medium.woff2. 간판: src/cover-doormaster-sign/fonts/Pretendard-Black.ttf.
- 영상 SVG는 Apple SD Gothic Neo,Noto Sans KR,sans-serif 시스템 폰트 fallback을 사용한다. 다른 OS의 픽셀 동일성 보장 없음.
- 과거 v1~v4 실행 스크립트의 절대경로는 이력으로 보존한다. 수정 범위는 최종 v5 커버/영상 render 및 간판 render뿐이다.

## 커버 / 간판
`python3 src/cover-doormaster-v5/compose-v5.py /absolute/path/to/NEW-review-directory --reference /absolute/path/to/reference.png`
출력 디렉터리가 이미 존재하면 거부한다. 기본 reference는 Monorepo docs/design-styles/door-master/references/door-master-cover-reference-v1.png. QA JSON도 새 출력의 qa/에 저장하며 소스 QA를 수정하지 않는다.

`node src/cover-doormaster-sign/render.cjs /absolute/path/to/NEW-sign.png src/cover-doormaster-sign/doormaster-series-sign-v2-outlined.svg`
기본 v1 입력은 역사적 호환용이므로 v2 입력을 반드시 명시한다. export-text.py에도 입력 v2 SVG와 새 출력 SVG 경로를 명시한다.

## 승인 v5 조립 명세
src/preview-v5/assembly-spec.json 및 assemble-preserved.py 사용.
Scene 순서 v3,v3,v3,v4,v5,v3 + 승인 본사 엔딩. 프레임 121/100/101/112/134/148 +170 =886, 1080×1920 30fps, 총29.533333초.
기존 Scene MP4 내 오디오와 엔딩 오디오 사용. TTS 교체·재생성 없음.

`python3 src/preview-v5/assemble-preserved.py --output /absolute/path/to/NEW-review.mp4 --encoding-profile documented-v3`
기본값은 읽기/명령 출력만 하는 dry-run이다. 실제 실행은 별도 승인 후 --execute 필요. ffmpeg -n으로 덮어쓰기 금지.
오디오 aresample=48000/apad/atrim/concat, libx264 veryfast CRF19 및 AAC192k/stereo는 기존 v3 assemble.py에 확인된 조립 방식이다. 원래 v5 명령 및 인코더 버전은 미확인이다. 이 명세는 승인 Scene을 재조립하는 검토 방법이지 역사적 v5 인코딩의 완전한 복원이 아니다.


## 2026-10-15 표준 경로 통합 (이전 경로 설명보다 우선)
- 승인 영상7개는 output 원본과 SHA256 동일 확인, 재복사/수정 없음.
- 과거 보존 영상15개를 public/assets/video/에 원래 파일명으로 복사. final/approved 명칭 추가 없음. 대표 QA PNG3개만 public/assets/images/에 복사. 목록/크기/해시: docs/standard-path-integration-v1.json.
- preview-v1/finalize.py, preview-v2/assemble.py, preview-v3/assemble.py 입력을 표준 경로로 변경. 동일 승인본은 입력 별칭으로 재사용. 쓰기 대상은 원래 버전명 별도 경로이며 승인 별칭을 쓰기 대상으로 사용하지 않는다.
- preview-v1~v3/render.cjs의 MP4 출력은 public/assets/video/, PNG/SVG QA 출력은 public/assets/images/로 변경(버전명 포함). 기존 src SVG는 그대로 보존. preview-v4/v5는 output 직접 경로가 없어 변경 없음.
- v2/v3 조립의 엔딩 경로를 프로젝트 내부로 연결. 오디오 QA 목적지도 기존 public/audio/로 정합화.
- 과거 조립 소스는 생성 단계를 포함하므로 보존본이 이미 있는 경우 기존 -n/xb/존재검사에 의해 중단될 수 있다. 경로 통합은 전체 과거 파이프라인 실행 검증이 아니다. 기존 Sharp 캐시 의존·폰트 환경 등은 이번 범위에서 변경하지 않음. 원래 v5 인코딩 설정 미확인 제한 유지.
- 대표 이미지: Scene3 보강 QA, Scene4 이동 검토, Scene4→5 연결 비교. 최종 렌더 입력 또는 별도 승인 최종 Scene 이미지로 지정하지 않는다. 다른 output QA39개는 자동 복사하지 않음.
- output 원본73개 37,944,720 bytes 모두 보존. 이전 후보88개에 표준 복사/참조 해제된23개를 추가해111개 96,442,101 bytes. 정확한 경로/크기/해시중복/참조/Git여부: docs/slim-cleanup-candidates-v2.json. 휴지통 이동은 별도 승인 필요.
- 커버 v4는 v5 비교 QA 직접 입력으로 유지. v2/v3 커버와 간판 v1 SVG 기본 입력 등은 여전히 참조 보류. src 소스/폰트/로고 및 승인 자산 보존.
- QA: 승인 영상/Scene/커버/간판/배경/TTS/엔딩/SNS 해시 불변, 복사18개 SHA256 동일, 입력 별칭 파일 존재 및 Python AST/Node 구문 검사 PASS. 재렌더/재인코딩 없음.
- OS 메타데이터 public/assets/.DS_Store의 조사 전후 변경만 감지됨(본 작업에서 쓰기/정리하지 않음). 콘텐츠 해시 변화 없음.
- 기존 원본/공통 가이드/다른 프로젝트 변경 없음. Git add/commit/push 없음; 통합 변경은 로컬 승인 대기.


## 2026-10-15 기존 원본 종료 준비 경로 검증
- 과거 커버v3/v4 ROOT를 Monorepo 프로젝트 상대경로로 변경. 원본 실행경로 의존0; 입력 버전 유지. AST/입력 존재 PASS, 실제 렌더 없음.
- Scene4 마지막/Scene5 첫 PNG만 public/assets/images/scene04-last-preview-v5-qa.png 및 scene05-first-preview-v5-qa.png로 바이트 동일 복사. output15개/709,572 bytes 유지, 이동은 별도 승인.
- 원본292개/159,692,041 bytes 비교: 동일171, 의도적 수정12, 승인 휴지통 보존105, OS메타데이터4. 원본 고유 콘텐츠 누락0. 수정12개 원본 SHA는 기존 migration manifest와 일치. 기존 휴지통105개 SHA PASS.
- 승인 미디어/SNS/QA 해시 불변. 원본 폴더 무변경. 상세: docs/archive-paths-final-qa-v1.md 및 .json.
- 원본 폴더 정리는 Git push/fetch 최종 검증과 사용자 최종 승인 후에만 가능. 이번 작업은 이동하지 않음. 기타 외부 런타임/시스템 폰트 의존은 원본경로와 별개로 유지.
