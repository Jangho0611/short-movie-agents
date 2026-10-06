// Scene1~5 타이밍/자막 정의 (PF vs XPS 프로젝트에서 검증된 구조를 일반화한 템플릿에서 출발, mdf-density용으로 확정).
//
// Scene1~4는 나레이션을 문장 단위 짧은 클립으로 쪼개 생성한다(scripts/generate-narration.js) - 각 클립을
// Remotion에서 0.2초 기본 간격으로 이어 붙이므로, 이 파일의 `audio.starts`가 실제 재생 타임라인의 기준이다.
// SCENE.holdEnd/durationInFrames를 바꿀 경우 반드시 오디오도 다시 생성/측정해 offset을 함께 갱신할 것.

// 최종 Render Sprint(2026-07-31): Scene1~4 나레이션·VOICE(cedar)·문장 단위 분할·기본 무음 간격(0.2s) 전부 확정.
// 아래 durationInFrames/오디오 offset은 실제 생성된 클립 길이를 ffprobe로 측정해 계산한 값이다(추정 아님).
// 공식: 클립 offset(frame) = 이전 클립 offset + 이전 클립 길이(frame, round(sec*30)) + GAP_FRAMES(6f = 0.2s)
//       durationInFrames = 마지막 클립 종료 프레임 + TAIL_BUFFER_FRAMES(18f = 0.6s)
// 자막은 각 클립의 실제 시작 프레임에 맞춰 개별적으로 등장한다(전부 동시에 뜨지 않음).

export const SCENE1 = {
  durationInFrames: 203,
  video: "generated/mdf-density/scene1-v5-002.mp4",
  audio: {
    clips: ["scene1-01.mp3", "scene1-02.mp3"],
    starts: [0, 95], // scene1-01: 2.952s(89f), gap 6f -> scene1-02 시작 95f
  },
  subtitle: {
    lines: ["이 선반, 이상한 점 보이시나요?", "자세히 보면, 이미 조금 처져 있습니다."] as const,
    lineStarts: [0, 95], // 각 줄이 대응 클립 시작과 동시에 등장
    enterDuration: 10,
    fadeOutStart: 185, // scene1-02 종료(95+90)
    fadeOutEnd: 203, // durationInFrames와 동일 - tail buffer 동안 자연스럽게 사라짐
  },
};

export const SCENE2 = {
  durationInFrames: 217,
  bg: { start: 0, end: 8 },
  image: "assets/images/mdf-density/scene2-final.png",
  audio: {
    clips: ["scene2-01.mp3", "scene2-02.mp3"],
    starts: [0, 83], // scene2-01: 2.568s(77f), gap 6f -> 83f
  },
  message: {
    lines: ["위와 아래, 무게는 같습니다.", "하지만 밀도가 다르면, 결과는 달라집니다."] as const,
    lineStarts: [0, 83],
    enterDuration: 10,
    fadeOutStart: 199, // scene2-02 종료(83+116)
    fadeOutEnd: 217,
  },
  holdEnd: 217,
};

export const SCENE3 = {
  durationInFrames: 240,
  bg: { start: 0, end: 8 },
  audio: {
    clips: ["scene3-01.mp3", "scene3-02.mp3"],
    starts: [0, 113], // scene3-01: 3.552s(107f), gap 6f -> 113f
  },
  message: {
    lines: ["MDF는 두께도, 밀도도 다양합니다.", "그럼, 어떤 MDF가 나에게 맞을까요?"] as const,
    lineStarts: [0, 113],
    enterDuration: 10,
    fadeOutStart: 222, // scene3-02 종료(113+109)
    fadeOutEnd: 240,
  },
  holdEnd: 240,
};

export const SCENE4 = {
  // 최종 확정(2026-07-31, 문구 교체 후 재측정) - 더 이상 문구 수정 없음.
  durationInFrames: 330,
  bg: { start: 0, end: 6 },
  audio: {
    clips: ["scene4-01.mp3", "scene4-02.mp3", "scene4-03.mp3"],
    starts: [0, 118, 249], // scene4-01: 3.72s(112f)+gap6=118f / scene4-02: 4.152s(125f)+gap6=249f
  },
  // 3문장을 순차 등장/퇴장하는 단일 비트로 표시(Scene1~3의 누적형과 다름 - 문장이 길어 동시 노출 시 과밀해짐).
  // 각 비트는 자기 클립이 재생되는 동안만 유지되고, 다음 클립 시작 직전(gap 구간)에 사라진다.
  beats: [
    {
      lines: ["그 답은,", "제품이 아니라 선택에 있습니다."] as const,
      enterStart: 0,
      enterEnd: 8,
      holdEnd: 112, // scene4-01 종료
      exitEnd: 118, // scene4-02 시작과 동시에 완전히 사라짐
    },
    {
      lines: ["용도에 맞는 MDF를", "선택하는 것입니다."] as const,
      enterStart: 118,
      enterEnd: 126,
      holdEnd: 243, // scene4-02 종료(118+125)
      exitEnd: 249, // scene4-03 시작과 동시에 완전히 사라짐
    },
    {
      lines: ["대산이 도와드리겠습니다."] as const,
      enterStart: 249,
      enterEnd: 257,
      holdEnd: 312, // scene4-03 종료(249+63)
      exitEnd: 330, // durationInFrames와 동일 - tail buffer 동안 사라짐
    },
  ],
  holdEnd: 330,
};

// 표준 엔딩 씬 고정 문구 (video-workflow.md 브랜드 규정 - 프로젝트 무관 고정, 대산 계열 영상 공통 사용).
// 신뢰문구가 크게 단독 등장 후 최종 크기/위치로 축소 -> 대량구매는/대산 등장 -> 로고 마지막 등장. 퇴장 없이 끝까지 유지.
// 문구 자체는 CLAUDE.md의 "Fixed brand ending scene" 규정에 따라 프로젝트마다 바꾸지 않는다(시각 스타일만 조정).
export const SCENE5 = {
  // TODO: 오디오 생성 후 ceil((오디오 길이 + 0.6) * 30)으로 재계산
  durationInFrames: 170,
  trust: { text: "GS건설 3년 연속 납품업체", enterStart: 8, enterEnd: 16, holdEnd: 24, shrinkEnd: 34 },
  tagline: { text: "자재 대량 구매", enterStart: 31, enterEnd: 39 },
  brand: { text: "대산", enterStart: 34, enterEnd: 45 },
  logo: { enterStart: 47, enterEnd: 59 },
  holdEnd: 170,
};
