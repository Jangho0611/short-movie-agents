# 대산 공식 공통 엔딩 — 본사 전경 approved v1

사용자 승인된 Headquarters Ending Test v2를 현재 Canonical 공통 엔딩으로 등록한다. 신규 Shorts에 적용하며, 기존 완료 영상 4편에는 이번 등록 단계에서 적용하지 않는다.

## 잠긴 승인 기준

- 1080×1920, 170 frames / 30fps = 5.666667초(표기 5.667초).
- 본사 원본 `video/IMG_3934.MOV`: 3.233333초. 원본 움직임과 형상을 유지한다.
- 실제 배경 `video/headquarters-normal-speed-hold.mp4`: 0~3.233333초 정상속도, 3.233333~5.666667초 마지막 프레임 복제 Hold. slow motion/loop/역재생/AI 보간 없음.
- TTS `audio/ending-approved-v3.mp3`: 4.854초, Scene 시작부터 그대로 재생. 재생성·절단·속도/pitch 변경 금지.
- TTS SHA256: `bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181`.
- 화면 문구: `GS건설 3년 연속 납품업체` / `자재 대량 구매` / `대산`.
- 대표번호: `031-388-3833`, `1661-6612`. 전화번호는 TTS로 읽지 않는다.
- Test v2 승인 자막/로고 모션·좌표·색·가독성 보조 처리를 그대로 유지한다. 내부 24fps 모션 좌표는 `min(135, floor(frame*24/30))`으로 매핑한다.
- 출력 프레임 기준: trust 8~17 등장 / 24~34 축소, tagline 32~39, brand 34~45, logo 48~59, 번호 65~75 fade/slide. 기존 easing과 opacity/position/scale 유지.
- 승인 엔딩을 임의 재설계하지 않는다. AI 생성 없음.

## 사용자 승인 Canonical Preview

`video/daesan-headquarters-ending-approved-v1.mp4`는 **새 재렌더 결과가 아니라 사용자 승인 Test v2 영상의 바이트 동일 복사본**이다.

SHA256: `2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5`.

재렌더 QA는 이 Canonical Preview를 기준으로 수행하며 승인본을 덮어쓰지 않는다.

## 최소 직접 의존 파일

- `src/DaesanEnding.tsx`: 승인 화면·배경·TTS·번호 조립 컴포넌트.
- `src/approved/HeadquartersOverlay.tsx`: 승인 자막/로고 모션.
- `src/approved/brief.ts`, `tokens.ts`, `fonts.ts`: 직접 import 의존성.
- `src/index.tsx`: 독립 재현용 Composition 등록(170frames/30fps).
- `video/headquarters-normal-speed-hold.mp4`: 실제 재생 배경.
- `video/IMG_3934.MOV`: 배경 원본 보존/재현용.
- `audio/ending-approved-v3.mp3`.
- `logos/daesanlogo2.png`.
- `fonts/Pretendard-Medium.woff2`, `Pretendard-SemiBold.woff2`, `Pretendard-ExtraBold.woff2`: 실제 500/600/800 weight. 사용하지 않는 700 폰트 제외.
- `package.json`, `tsconfig.json`, `remotion.config.ts`: 독립 실행 설정. Remotion/CLI 4.0.523, React/React DOM 19.3.0 직접 버전 고정.
- `docs/asset-sha256.json`: 등록 파일 해시.

`Scene5Ending.tsx`의 미사용 원본 사본, 테스트 스크립트/QA 이미지, node_modules, cache는 배포 자산에 포함하지 않는다. 기존 Legacy Scene5Ending과 자산 및 테스트 원본은 원래 위치에 그대로 보존하고 즉시 삭제하지 않는다.

## 신규 프로젝트 Slim Copy

위 src 직접 의존 파일과 video 원본/재생본, audio, logos, fonts를 프로젝트 내부로 복사한다. Canonical Preview 및 이 README도 승인 기준으로 보존한다. `docs/asset-sha256.json`으로 바이트 동일성을 확인한다.

- 예: `src/daesan-ending/`에 컴포넌트와 approved 하위 소스를 복사한다. 기존 프로젝트 root 등록에 `DaesanEnding`을 연결하며 `index.tsx`의 registerRoot를 중복 호출하지 않는다.
- 자산은 프로젝트 `public/daesan-ending/{video,audio,logos,fonts}/`에 복사하고, `staticFile` 경로에 `daesan-ending/` prefix만 추가한다. 동작·문구·모션·170프레임·TTS는 변경하지 않는다.
- 공용 폴더, 테스트 프로젝트, 다른 영상 프로젝트를 런타임 직접 참조하지 않는다. symlink로 자산을 연결하지 않는다.
- 30fps 기준 170프레임을 유지한다. 다른 fps 영상에 임의로 170프레임을 적용하지 않는다.

## 독립 재현

이 폴더의 `package.json`으로 의존성을 설치한 뒤 아래 명령을 사용한다. `remotion.config.ts`의 publicDir은 현재 폴더이며 모든 콘텐츠 의존성은 폴더 내부에 있다. Chrome/ffmpeg/Node는 실행 도구로 별도 필요하다. 등록 QA에서는 기존 설치된 동일 버전 Remotion 실행기를 사용했으며 다른 프로젝트의 소스나 자산은 참조하지 않았다.

```sh
npm run render -- /absolute/path/to/qa/rerender.mp4 --codec=h264 --crf=18 --audio-bitrate=192k --concurrency=2 --browser-executable='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
```

배경 재생본의 재현 명령(원본 보호, 새 파일에만 출력):

```sh
ffmpeg -n -i video/IMG_3934.MOV -vf 'scale=1080:1920:flags=lanczos,setsar=1,fps=30,tpad=stop_mode=clone:stop_duration=3' -frames:v 170 -an -c:v libx264 -crf 16 /absolute/path/to/qa/background.mp4
```

독립 재렌더/비교 QA 결과는 `tests/daesan-ending-registration-qa/`에 보관하며 Slim Copy 대상에서는 제외한다.
