// Scene1~6 타이밍/자막 정의.
//
// 최종 확정본(2026-08-04, 3차): Scene1~5는 이미지+나레이션 씬(ImageMotionScene 공용 컴포넌트),
// Scene6은 이전 프로젝트에서 검증된 고정 브랜드 엔딩 시각 구조(로고/문구/모션/길이)를 그대로 재사용하되,
// 이번 확정에서 마무리 나레이션이 추가되었다.
//
// 나레이션 생성 방식: Scene1~6 대사 전체를 공백으로 이어붙인 통짜 텍스트로 gpt-4o-mini-tts 1회 호출 후
// (문장별 개별 생성 시 각 문장이 독립된 광고 문구처럼 끊어 들리는 문제가 있어 회피), OpenAI 전사 API로
// 단어 단위 타임스탬프를 확인해 문장 경계에서 ffmpeg로 잘라 scene1-01.mp3~scene6-01.mp3로 분리했다.
// 아래 durationInFrames/fadeOut 값은 분리된 각 클립을 ffprobe로 실측한 길이 기준(추정 아님):
// scene1: 4.890s, scene2: 3.420s, scene3: 6.650s, scene4: 4.490s, scene5: 6.530s, scene6: 4.188s.
// 공식: durationInFrames = round(clip_sec*30) + 18f(0.6s tail buffer).
// Scene5->Scene6 호흡: tail buffer(18f) - crossfade(10f) = 8f(약 0.267s) 자연 확보 - 원본 통짜 오디오에서는
// "사용됩니다"와 "용도에" 사이 무음이 사실상 0이었으나, 씬 전환 구조 자체가 만드는 간격으로 0.2~0.4s 목표를 충족.

export const SCENE1 = {
  durationInFrames: 165,
  bg: { start: 0, end: 8 },
  image: "assets/images/scene1-overview.png",
  motion: { type: "pushIn", scaleTo: 1.06 } as const,
  audio: {
    clips: ["scene1-01.mp3"] as string[],
    starts: [0] as number[],
  },
  subtitle: {
    lines: ["겉으로는 비슷하지만", "내부는 다릅니다."] as const,
    lineStarts: [0, 36],
    enterDuration: 10,
    fadeOutStart: 147,
    fadeOutEnd: 165,
  },
  holdEnd: 165,
};

export const SCENE2 = {
  durationInFrames: 121,
  bg: { start: 0, end: 8 },
  image: "assets/images/scene2-cross-section.png",
  motion: { type: "dollyIn", scaleTo: 1.1 } as const,
  audio: {
    clips: ["scene2-01.mp3"] as string[],
    starts: [0] as number[],
  },
  subtitle: {
    lines: ["단면을 보면", "차이가 확실합니다."] as const,
    lineStarts: [0, 30],
    enterDuration: 10,
    fadeOutStart: 103,
    fadeOutEnd: 121,
  },
  holdEnd: 121,
};

export const SCENE3 = {
  durationInFrames: 218,
  bg: { start: 0, end: 8 },
  image: "assets/images/scene3-materials.png",
  motion: { type: "panRight", scaleTo: 1.08, translatePx: 40 } as const,
  audio: {
    clips: ["scene3-01.mp3"] as string[],
    starts: [0] as number[],
  },
  subtitle: {
    lines: ["재료부터 다릅니다.", "목재 섬유 · 목재 입자 · 베니어"] as const,
    lineStarts: [0, 36],
    enterDuration: 10,
    fadeOutStart: 200,
    fadeOutEnd: 218,
  },
  holdEnd: 218,
};

export const SCENE4 = {
  durationInFrames: 153,
  bg: { start: 0, end: 8 },
  image: "assets/images/scene4-material-to-board.png",
  motion: { type: "tiltDown", scaleTo: 1.05, translatePx: 36 } as const,
  audio: {
    clips: ["scene4-01.mp3"] as string[],
    starts: [0] as number[],
  },
  subtitle: {
    lines: ["압착과 접착을 거쳐", "판재가 완성됩니다."] as const,
    lineStarts: [0, 32],
    enterDuration: 10,
    fadeOutStart: 135,
    fadeOutEnd: 153,
  },
  holdEnd: 153,
};

export const SCENE5 = {
  durationInFrames: 214,
  bg: { start: 0, end: 8 },
  image: "assets/images/scene5-applications.png",
  motion: { type: "panDownZoomOut", translatePx: 50, scaleFrom: 1.1, scaleTo: 1.0 } as const,
  audio: {
    clips: ["scene5-01.mp3"] as string[],
    starts: [0] as number[],
  },
  subtitle: {
    lines: ["성능이 다르면", "용도도 달라집니다."] as const,
    lineStarts: [0, 32],
    enterDuration: 10,
    fadeOutStart: 196,
    fadeOutEnd: 214,
  },
  holdEnd: 214,
};

// 표준 엔딩 씬 고정 문구 (video-workflow.md 브랜드 규정 - 프로젝트 무관 고정, 대산 계열 영상 공통 사용).
// 신뢰문구가 크게 단독 등장 후 최종 크기/위치로 축소 -> 대량구매는/대산 등장 -> 로고 마지막 등장. 퇴장 없이 끝까지 유지.
// 문구 자체는 CLAUDE.md의 "Fixed brand ending scene" 규정에 따라 프로젝트마다 바꾸지 않는다(시각 스타일만 조정).
// 이전 프로젝트에서 검증된 시각 타이밍(trust/tagline/brand/logo, holdEnd=170)은 절대 변경하지 않음(사용자 지시).
// audio만 이번 확정에서 신규 추가 - 클립 길이(126f)가 holdEnd(170f) 안에 들어와 기존 길이 변경 불필요.
export const SCENE6 = {
  durationInFrames: 170,
  audio: {
    clips: ["scene6-01.mp3"] as string[],
    starts: [0] as number[],
  },
  trust: { text: "GS건설 3년 연속 납품업체", enterStart: 8, enterEnd: 16, holdEnd: 24, shrinkEnd: 34 },
  tagline: { text: "자재 대량 구매", enterStart: 31, enterEnd: 39 },
  brand: { text: "대산", enterStart: 34, enterEnd: 45 },
  logo: { enterStart: 47, enterEnd: 59 },
  holdEnd: 170,
};
