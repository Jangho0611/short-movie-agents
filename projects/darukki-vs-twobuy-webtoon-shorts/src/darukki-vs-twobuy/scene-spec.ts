export const DARUKKI_VS_TWOBUY_FPS = 30;
export const DARUKKI_VS_TWOBUY_SCENE_FRAMES = 90;

export type DarukkiSceneNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type DarukkiSceneSpec = {
  scene: DarukkiSceneNumber;
  captionText: string;
  spokenText: string;
  movingElements: string[];
  fixedElements: string[];
  requiredReferences: string[];
};

// Final 6-scene story structure (2026-08-14 확정).
// 구조: 훅 → 답 공개 → 다루끼 근거 → 투바이 근거 → 현장 사례 → 결론 회수.
// 이전 기획의 Scene 6(라운드 코너/오징어합판) 내용은 이번 영상에서 제외한다.
export const DARUKKI_SCENE_SPECS: Record<DarukkiSceneNumber, DarukkiSceneSpec> = {
  1: {
    scene: 1,
    captionText: '다루끼랑 투바이,\n크기만 다른 걸까?',
    spokenText: '다루끼랑 투바이, 그냥 크기만 다른 각재일까요?',
    movingElements: ['작은 대산이 시선/고개(좌→우)', '작은 궁금한 표정 마무리'],
    fixedElements: ['다루끼(좌)', '투바이(우)', '흰 배경', '카메라'],
    requiredReferences: ['scene01-veo-simple-start-v1.png (채택 완료)'],
  },
  2: {
    scene: 2,
    captionText: '차이는 크기보다\n쓰이는 역할',
    spokenText: '둘 다 소송각재 계열이지만, 필요한 폭과 쓰이는 역할이 다릅니다.',
    movingElements: [
      '다루끼/투바이 뒤 배경에 옅은 쓰임 실루엣 페이드인(각각 얇은 하지 vs 폭 있는 보강틀, 구체 묘사 없이 형태 암시만)',
      '대산이 표정: 궁금함 → 살짝 납득한 차분한 표정',
    ],
    fixedElements: ['다루끼(좌) 크기·위치·질감', '투바이(우) 크기·위치·질감', '카메라', '흰 배경'],
    requiredReferences: [
      'Scene 2 시작 이미지 (Scene 1 마지막 구도와 동일 카메라/배치)',
      'Scene 2 종료 이미지 (동일 구도 + 옅은 역할 실루엣 추가)',
    ],
  },
  3: {
    scene: 3,
    captionText: '다루끼\n가벼운 벽·천장 하지',
    spokenText: '단면이 작은 다루끼는 벽체나 천장의 가벼운 하지에 많이 사용됩니다.',
    movingElements: ['다루끼가 벽/천장 하지 구조의 빈 슬롯에 들어가는 짧은 동작', '대산이 자재를 옮기는 동선'],
    fixedElements: ['촘촘한 벽/천장 하지 구조', '카메라', '투바이는 등장하지 않음(다루끼 근거에 집중)'],
    requiredReferences: ['Scene 3 시작/종료 이미지 (벽·천장 하지 구조 + 빈 슬롯)'],
  },
  4: {
    scene: 4,
    captionText: '투바이\n폭 필요한 가벽·보강틀',
    spokenText: '폭이 더 넓은 투바이는 가벽이나 보강틀처럼 폭이 필요한 곳에 활용됩니다.',
    movingElements: ['투바이가 가벽/보강틀의 빈 위치에 들어가는 짧은 동작', '대산이 자재를 옮기는 동선'],
    fixedElements: ['가벽/보강틀 구조', '카메라', 'Scene 3 하지 구조와 화면상 역할 차이가 드러나야 함'],
    requiredReferences: ['Scene 4 시작/종료 이미지 (가벽·보강틀 구조 + 빈 위치)'],
  },
  5: {
    scene: 5,
    captionText: '현장 조건에 따라\n함께 쓰기도 합니다',
    spokenText: '그리고 현장 조건에 따라 두 자재를 보조적으로 함께 쓰기도 합니다.',
    movingElements: ['투바이 수직 기본틀 사이에 다루끼 1개가 가로로 보조 추가되는 한 동작'],
    fixedElements: ['투바이 수직 기본틀', '카메라'],
    requiredReferences: ['Scene 5 시작/종료 이미지 (투바이 기본틀 + 다루끼 보조 삽입 위치)'],
  },
  6: {
    scene: 6,
    captionText: '큰 게 정답이 아니라\n맞는 역할이 정답',
    spokenText: '결국 큰 자재가 더 좋은 게 아니라, 필요한 폭과 역할에 맞게 고르는 게 핵심입니다.',
    movingElements: ['대산이 다루끼/투바이를 번갈아 보며 결론짓는 짧은 마무리 반응'],
    fixedElements: ['다루끼(좌)', '투바이(우)', 'Scene 1 구도 회수(카메라/배치 유사하게)', '흰 배경'],
    requiredReferences: ['Scene 6 시작/종료 이미지 (Scene 1 구도를 회수하는 결론 컷)'],
  },
};
