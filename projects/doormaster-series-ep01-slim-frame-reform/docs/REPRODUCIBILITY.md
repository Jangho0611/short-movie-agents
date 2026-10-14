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
