// Scene1~5 타이밍/자막 정의 (템플릿 - PF vs XPS 프로젝트에서 검증된 구조를 일반화).
//
// 사용법:
// 1. 아래 text/lines 플레이스홀더를 실제 대본으로 교체
// 2. scripts/generate-narration.js의 SCENES도 동일한 대본으로 교체 후 `npm run narration` 실행
// 3. scripts/measure-audio.js로 각 scene의 실제 오디오 길이를 측정
// 4. durationInFrames와 holdEnd를 ceil((오디오 길이 + 0.6) * 30) 공식으로 재계산
//    (holdEnd가 durationInFrames와 별도로 존재하는 씬은 반드시 두 값을 함께 갱신할 것 -
//    holdEnd는 SCENE3/SCENE4의 이미지 줌/패럴랙스처럼 [0, holdEnd] 구간을 참조하는 애니메이션에 실제로 쓰인다)
// 5. Scene4처럼 다중 비트(intro1/intro2/stage1/stage2)로 구성된 씬은 scripts/transcribe.js로 실제
//    발화 구간을 확인한 뒤, 자막 등장 프레임을 발화 시점에 맞춰 재배치할 것 (글자수 비율 추정 금지)

export const SCENE1 = {
  // TODO: 오디오 생성 후 ceil((오디오 길이 + 0.6) * 30)으로 재계산
  durationInFrames: 150,
  bg: { start: 0, end: 8 },
  label: {
    text: "핵심 질문을 입력하세요", // TODO: 훅 문구
    enterStart: 8,
    enterEnd: 18,
    holdEnd: 28,
    fadeEnd: 32, // opacity 100% -> 20% (완전히 사라지지 않음)
    fadeOpacity: 0.2,
  },
  // 숫자/키워드 3개(A vs B) 그룹이 순서대로 등장 - starts 배열 길이는 texts와 동일해야 함
  tokens: {
    texts: ["100", "vs", "200"] as const, // TODO: 비교할 숫자/키워드
    labels: ["항목 A", "", "항목 B"] as const, // TODO: 각 숫자에 대응하는 라벨(가운데는 "vs"라 라벨 없음)
    starts: [30, 38, 52],
    enterDuration: 6,
  },
  holdEnd: 150,
};

export const SCENE2 = {
  // TODO: 오디오 생성 후 ceil((오디오 길이 + 0.6) * 30)으로 재계산
  durationInFrames: 150,
  bg: { start: 0, end: 8 },
  // 카드 2장(비교 항목별 A/B 값) + 막대그래프 자동 렌더(parseNumeric 기준, Scene2Performance.tsx 참고)
  card1: {
    header: "비교 항목 1", // TODO
    labelA: "옵션 A", // TODO
    valueA: "값1", // TODO (숫자 포함 시 막대그래프 길이 자동 계산됨)
    labelB: "옵션 B", // TODO
    valueB: "값2", // TODO
    enterStart: 14,
    enterEnd: 26,
  },
  card2: {
    header: "비교 항목 2", // TODO
    labelA: "옵션 A",
    valueA: "값1",
    labelB: "옵션 B",
    valueB: "값2",
    unit: "단위", // TODO: 단위 없으면 빈 문자열
    enterStart: 34,
    enterEnd: 46,
  },
  conclusion: {
    lines: ["핵심 결론 1줄", "핵심 결론 2줄"] as const, // TODO
    enterStart: 52,
    enterEnd: 62,
    // 완전히 나타난 뒤 문장 전체에 아주 미세한 scale 강조(1.0->1.06->1.05)를 트리거하는 구간
    emphasisStart: 68,
    emphasisEnd: 76,
  },
  holdEnd: 150,
};

export const SCENE3 = {
  // TODO: 오디오 생성 후 ceil((오디오 길이 + 0.6) * 30)으로 재계산
  durationInFrames: 150,
  bg: { start: 0, end: 8 },
  productName: "제품명", // TODO: public/assets/images/sample.png 위에 표시될 제품/서비스명
  message: {
    lines: ["강조 문구 1줄", "강조 문구 2줄"] as const, // TODO
    enterStart: 16,
    enterEnd: 26,
  },
  holdEnd: 150,
};

export const SCENE4 = {
  // TODO: 오디오 생성 후 ceil((오디오 길이 + 0.6) * 30)으로 재계산.
  // 4비트(intro1 -> intro2 -> stage1 -> stage2) 구조 - 각 비트 사이 7f 안팎의 짧은 fade 전환 + 2f 빈 호흡 권장.
  durationInFrames: 180,
  bg: { start: 0, end: 6 },
  productName: "제품명", // TODO
  intro1: {
    text: "도입 문구 1", // TODO
    enterStart: 6,
    enterEnd: 13,
    holdEnd: 24,
    exitEnd: 31,
  },
  intro2: {
    lines: ["도입 문구 2-1", "도입 문구 2-2"] as const, // TODO
    enterStart: 33,
    enterEnd: 40,
    holdEnd: 70, // TODO: scripts/transcribe.js로 실제 발화 종료 시점에 맞춰 재조정
    exitEnd: 77,
  },
  stage1: {
    text: "전환 문구", // TODO (예: "하지만", "그래서")
    enterStart: 82,
    enterEnd: 89,
    holdEnd: 100,
    exitEnd: 107,
  },
  // stage2는 그룹A(먼저 등장, 이후 유지) / 그룹B(그 아래 추가로 등장, 이후 유지)로 분리된 순차 등장 구조.
  // 실제 발화 흐름에 맞춰 그룹별 enterStart/enterEnd를 재배치할 것(글자수 비율 추정 대신 scripts/transcribe.js 사용).
  stage2: {
    groupA: {
      lines: ["결론 문구 A"] as const, // TODO
      enterStart: 110,
      enterEnd: 117,
    },
    groupB: {
      lines: ["결론 문구 B-1", "결론 문구 B-2"] as const, // TODO
      enterStart: 130,
      enterEnd: 137,
    },
  },
  holdEnd: 180,
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
