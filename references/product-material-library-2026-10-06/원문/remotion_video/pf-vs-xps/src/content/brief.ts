// video-brief-v2.md 기준 씬 타이밍/자막 (Scene 1 확정값만 반영)

export const SCENE1 = {
  // 톤 일관성 Sprint(26.07.28): scene1.mp3 재생성(6.408s, 통일 Instructions 적용) 기준
  // ceil((6.408+0.6)*30) = 211f로 재계산
  durationInFrames: 211,
  bg: { start: 0, end: 8 },
  label: {
    text: "단열성능 동일?",
    enterStart: 8,
    enterEnd: 18,
    holdEnd: 28,
    fadeEnd: 32, // opacity 100% -> 20% (완전히 사라지지 않음)
    fadeOpacity: 0.2,
  },
  // vs 등장(f38) 후 settle(f44) 기준 8f beat를 두고 아이소핑크(XPS) 그룹 등장(f52)
  tokens: {
    texts: ["115mm", "vs", "160mm"] as const,
    labels: ["LX PF보드", "", "아이소핑크(XPS)"] as const,
    starts: [30, 38, 52],
    enterDuration: 6,
  },
  holdEnd: 211,
};

export const SCENE2 = {
  // 톤 일관성 Sprint(26.07.28): scene2.mp3 재생성(5.304s, 통일 Instructions 적용) 기준
  // ceil((5.304+0.6)*30) = 178f로 재계산
  durationInFrames: 178,
  bg: { start: 0, end: 8 },
  card1: {
    header: "두께",
    pfLabel: "LX PF보드",
    pfValue: "115mm",
    xpsLabel: "아이소핑크(XPS)",
    xpsValue: "160mm",
    enterStart: 14,
    enterEnd: 26,
  },
  card2: {
    header: "열전도율 (낮을수록 우수)",
    pfLabel: "LX PF보드",
    pfValue: "0.020",
    xpsLabel: "아이소핑크(XPS)",
    xpsValue: "0.028~0.030",
    unit: "W/m·K",
    enterStart: 34,
    enterEnd: 46,
  },
  // 결론 비트 강조 Sprint: enterStart를 앞당겨(60->52, 진입 소요시간 10f는 동일) 완전 등장 후
  // 최종 hold를 55f->63f(+8f)로 확보. Scene2 총 길이(125f)는 변경 없음.
  // 스토리 흐름 재설계(26.07.27): PF보드 핵심 장점 1/3(같은 성능을 더 얇게 구현) - 문구 순서만 조정, 타이밍 불변
  conclusion: {
    lines: ["같은 단열 성능을", "더 얇은 두께로 구현"] as const,
    enterStart: 52,
    enterEnd: 62,
    // 최종 마감: 완전히 나타난 뒤(enterEnd+6) 문장 전체에 아주 미세한 scale 강조(1.0->1.06->1.05)를 트리거하는 구간
    emphasisStart: 68,
    emphasisEnd: 76,
  },
  holdEnd: 178,
};

export const SCENE3 = {
  // 톤 일관성 Sprint(26.07.28): scene3.mp3 재생성(4.320s, 통일 Instructions 적용) 기준
  // ceil((4.320+0.6)*30) = 148f로 재계산. holdEnd도 동일하게 갱신
  // (Scene3Reversal.tsx의 보드 줌/패럴랙스가 [0, holdEnd] 구간을 사용하므로 함께 갱신 필요).
  durationInFrames: 148,
  bg: { start: 0, end: 8 },
  message: {
    lines: ["더 얇아진 만큼", "실내 공간을 더 확보할 수 있습니다."] as const,
    enterStart: 16,
    enterEnd: 26,
  },
  holdEnd: 148,
};

export const SCENE4 = {
  // 가독성 Sprint: 크로스페이드(겹침) 완전 제거. A hold -> 7f fade-out -> 2f 빈 호흡 -> B 7f fade-in 구조로
  // 재설계하면서 각 문구의 hold(11f/15f/11f)와 최종 여운(59f)은 이전과 동일하게 유지 -> 총 길이 123f->157f(+34f)
  // 톤 일관성 Sprint(26.07.28): scene4.mp3 재생성(10.656s, 통일 Instructions 적용) 기준
  // ceil((10.656+0.6)*30) = 338f로 재계산.
  durationInFrames: 338,
  bg: { start: 0, end: 6 },
  intro1: {
    text: "25평 기준",
    enterStart: 6,
    enterEnd: 13,
    holdEnd: 24,
    exitEnd: 31,
  },
  // 정밀 재동기화 Sprint(26.07.28): scene4.mp3 실제 전사(Whisper word timestamp) 기준 발화 구간에 맞춰
  // 재배치. "시공비는 아이소핑크가 약 20만 원 저렴합니다" 실제 발화 32~139f에 맞춰 hold 연장.
  // 등장(enterStart/enterEnd)과 enter 소요시간(7f)은 변경하지 않음.
  intro2: {
    lines: ["시공비", "약 20만 원 차이"] as const,
    enterStart: 33,
    enterEnd: 40,
    holdEnd: 139,
    exitEnd: 146,
  },
  // "하지만" 실제 발화 165~171f에 정확히 맞춤.
  stage1: {
    text: "하지만",
    enterStart: 158,
    enterEnd: 165,
    holdEnd: 171,
    exitEnd: 178, // fade out 완료
  },
  // stage2를 2그룹으로 분리(기존 3줄 동시 등장 -> 순차 등장). 문구/폰트/줄간격/컨테이너는 동일, 등장 타이밍만 분리.
  // 그룹A "오래 쓰는 단열재": 실제 발화 "단열재는 오래 쓰는 만큼"(171~223f) 시작에 맞춰 stage1 퇴장(178f) 직후 등장.
  // 그룹B "냉난방 에너지까지"/"함께 고려하세요": 실제 발화 "냉난방...합니다"(223~306f)보다 살짝 앞서 등장.
  // PF보드 강조(boardEmphasisStart)는 의미상 첫 결론 문구인 그룹A.enterStart 기준을 그대로 유지.
  stage2: {
    groupA: {
      lines: ["오래 쓰는 단열재"] as const,
      enterStart: 174,
      enterEnd: 181,
    },
    groupB: {
      lines: ["냉난방 에너지까지", "함께 고려하세요"] as const,
      enterStart: 220,
      enterEnd: 227,
    },
  },
  holdEnd: 338,
};

// 표준 엔딩 씬 고정 문구 (video-workflow.md 브랜드 규정, 프로젝트 무관 고정)
// 샘플 엔딩 재현: 신뢰문구가 크게 단독 등장 후 최종 크기/위치로 축소 -> 대량구매는/대산 등장 -> 로고 마지막 등장. 퇴장 없이 끝까지 유지
export const SCENE5 = {
  // CTA 문구 개선 Sprint(26.07.28): scene5.mp3 재생성(5.448s, "어떤 제품이 맞을지 고민되신다면,
  // 대산이 함께 도와드리겠습니다."로 교체) 기준 ceil((5.448+0.6)*30) = 182f로 재계산
  durationInFrames: 182,
  // 신뢰 문구: f8-16 중앙 메인 타이틀(큰 scale)로 단독 페이드인 -> holdEnd(24)까지 큰 스케일로 완전히
  // 정지된 채 유지 -> shrinkEnd(34)까지 상단 캡션 위치·최종 크기로 이동/축소(동일 요소, 교체 아님)
  // 연속된 카메라 흐름으로 재조정: trust는 holdEnd(24)~shrinkEnd(34) 구간에 scale/position과
  // "동시에" 본문색(textMain)->보조색(textSub, 회색)으로 색상도 전환되어 스스로 "보조 정보"가 됨
  trust: { text: "GS건설 3년 연속 납품업체", enterStart: 8, enterEnd: 16, holdEnd: 24, shrinkEnd: 34 },
  // 자재 대량 구매: trust의 이동이 "거의" 끝나는 시점(shrinkEnd 3f 전)부터 겹치며 Fade + Up 시작 -
  // 계단식(완전 정지 후 시작)이 아니라 3f 오버랩으로 연속된 흐름을 만듦
  tagline: { text: "자재 대량 구매", enterStart: 31, enterEnd: 39 },
  // 대산: 과한 Anchor Pop 없는 약한 scale(0.96->1.0) + Fade. tagline 시작과 3f 시차를 두고 이어서 등장(동시 등장 금지)
  brand: { text: "대산", enterStart: 34, enterEnd: 45 },
  // 로고: 텍스트 3개 완성 후 마지막에 위에서 짧게 내려오며 Fade + Scale (scale 0.90 -> 1.02 -> 1.0)
  logo: { enterStart: 47, enterEnd: 59 },
  holdEnd: 182,
};
