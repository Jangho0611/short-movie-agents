# 다루끼 vs 투바이 웹툰 쇼츠

완료된 자이 천연석고보드 쇼츠에서 실행 설정, Remotion 소스 구조, 공통 폰트·로고와 캐릭터 레퍼런스만 선별 복사한 최소 작업 베이스다.

## 설치 및 실행 준비

- `node_modules/`는 복사하지 않고 `package-lock.json` 기준 `npm ci`로 설치했다.
- 기존 자이 전용 Scene 이미지·영상·TTS는 복사하지 않았으므로, 새 6씬 자산과 컴포지션을 연결한 뒤 Studio/렌더 검증을 진행한다.
- Scene 1 기준 이미지와 비교용 Veo 테스트 2건까지 완료했으며, 최종 영상 렌더는 아직 수행하지 않았다.
- 신규 작업 composition은 `DarukkiVsTwobuy`이며 Scene 1~6 플레이스홀더만 연결돼 있다.
- 신규 구조는 `src/darukki-vs-twobuy/`에 분리돼 있고 기존 자이 소스는 템플릿 참고용으로 유지한다.

## 새 작업 기준

- 새 주제: **다루끼 vs 투바이**
- 스토리 구조는 사용자가 준비한 6씬 기획안을 기준으로 한다.
- 캐릭터 비주얼 기준은 **소송각재 vs LVL 2탄**이다.
- 처음부터 Veo 고려형으로 진행한다.
- Scene별로 움직일 요소를 먼저 설계한다.
- 소송각재 1·2탄에서 실제 사용한 기존 **작은 대산이**를 Scene 1~6 전체의 단일 고정 캐릭터로 사용한다.
- 어른 대산이와 아기 대산이 reference 제작은 이번 프로젝트 범위에서 제외한다.
- 자산은 가능하면 배경·캐릭터·소품·텍스트가 분리 가능한 구조로 준비한다.
- 비쥬얼그레마는 스토리 기준이 아니라 연출 참고용으로만 사용한다.
- Prompt 1, 2, 4의 역할 표현은 참고할 수 있다.
- Prompt 3의 하자 증폭 스토리는 이번 편에서 제외한다.

## 작은 대산이 골드 reference

원본 프로젝트: `/Users/janghokim/Documents/sosong-lvl-webtoon-shorts`

| 용도 | 골드 reference |
|---|---|
| Canonical 외형 | `public/assets/images/scene01-vertex-reference-v4.png` |
| 실제 Scene 배치 / 정면 | `public/assets/images/scene01-reference-v1.png` |
| 측면 / 동작 | `public/assets/images/scene02-reference-v1.png` |
| 포인터 / 손동작 | `public/assets/images/scene03-reference-v1.png` |
| 손가락 제스처 | `public/assets/images/scene05-reference-v2.png` |
| 디자인 규격 | `docs/character-reference.md` |

### 캐릭터 고정 원칙

- 새 작은 대산이 디자인을 생성하지 않는다.
- 기존 캐릭터 identity, 얼굴 구조, 실루엣, 체형과 머리 비율을 그대로 유지한다.
- Scene마다 얼굴, 체형 또는 크기를 임의로 변경하지 않는다.
- 모든 Scene에서 동일 캐릭터로 인식되도록 위 reference를 반복 사용한다.
- 캐릭터 높이는 화면 높이의 약 18~20%를 기준으로 하며, 최대 21%를 넘지 않는다.
- 캐릭터 기준 팔레트는 Body `#636361`, Face `#E4DFD9`, Outline `#1E1E1E`, Eyes / Mouth `#0A0A0A`로 고정한다.
- 인간형, 실사 또는 3D 캐릭터로 재해석하지 않는다.

## 새로 준비할 reference

이번 프로젝트에서 새로 준비할 reference 범위는 캐릭터가 아닌 다음 항목으로 제한한다.

1. 다루끼
2. 투바이
3. Scene별로 필요한 하지, 가벽, 라운드 구조

Scene 1 기준 이미지 제작과 Veo 비교 테스트는 종료했으며, 승인 전 추가 이미지 생성이나 Veo 실행은 진행하지 않는다.

### 자재 단독 reference 기준

- 최종 다루끼 reference: `public/references/darukki-reference-v2.png`
- 최종 투바이 reference: `public/references/twobuy-reference-final.png`
- 다루끼는 약 27×27mm의 정사각 단면 비율, 옅은 자연 목재색, 명확한 직선 모서리와 절제된 나뭇결을 유지한다.
- 투바이는 약 27×67mm의 단면 비율을 유지하고 다루끼와 동일한 목재색, 선화와 질감을 사용한다.
- 두 자재의 차이는 폭으로 자연스럽게 인식되게 하며 투바이를 더 좋거나 강한 자재처럼 과장하지 않는다.
- 두 자재 모두 Veo에서 작은 대산이가 들고 이동하거나 구조의 빈 위치에 끼울 수 있는 단순한 직사각 목재 형태로 준비한다.

### Scene 2~6 구조 reference 확정 기준

- **Scene 2:** 완성된 벽을 중심으로 구성한다. 천장은 고정하고 벽 마감면만 서서히 반투명해지며 내부 목재 하지틀이 드러나게 한다. 파손, 철거 또는 균열 표현은 사용하지 않는다.
- **Scene 3:** 다루끼가 촘촘하게 들어가는 벽체 하지 구조로 고정한다. 다루끼 한 개가 추가될 빈 슬롯과 작은 대산이가 자재를 들고 이동할 동선을 확보한다. 천장 하지 구도는 사용하지 않는다.
- **Scene 4:** 투바이가 들어가는 가벽 또는 보강틀로 구성한다. 투바이 한 개가 들어갈 빈 위치를 확보하고, Scene 3의 촘촘한 벽 하지와 역할 차이가 화면만으로 드러나게 한다.
- **Scene 5:** 투바이 수직 기본 틀 사이에 가로 방향 다루끼 한 개가 보조적으로 추가되는 한 구간의 작업 장면으로 구성한다. 전체 공법 설명이나 표준·정답 공법처럼 보이는 표현은 사용하지 않는다.
- **Scene 6:** 각재 리브가 라운드 뼈대를 형성하는 라운드 벽 코너 구조로 고정한다. 오징어합판은 뼈대가 아니라 곡면을 따라 덮이는 마감·덮개로 명확히 구분한다. 천장 곡면이나 독립 조형물 형태는 사용하지 않는다.

### Reference 제작 및 Veo 연결 원칙

- 기존 6씬 스토리를 변경하지 않는다.
- 비쥬얼그레마 Prompt 1·2·4는 연출 참고로만 사용하며 Prompt 3의 하자·파손 스토리는 제외한다.
- 치수 비교표나 인포그래픽 형태로 제작하지 않는다.
- Reference 이미지 생성 단계부터 움직일 요소의 시작 위치, 이동 경로와 종료 위치를 한 화면 안에 확보한다.
- 작은 대산이의 얼굴, 몸통과 실루엣이 이동 자재나 구조에 가려지지 않게 한다.
- Veo 실행은 각 reference 이미지가 확정된 이후에만 진행한다.

### Scene 1 최종 방식

- 최종 기준 이미지는 `public/references/scene01-hook-reference-final.png`를 사용한다.
- `public/assets/video/scene01-veo-test-v1.mp4`와 `public/assets/video/scene01-veo-quality-test-v1.mp4`는 캐릭터 포즈와 외형이 재해석되어 사용하지 않는다.
- Scene 1은 Vertex/Veo로 추가 생성하지 않고, 승인된 정지 이미지를 Remotion에서 그대로 사용한다.
- 화면과 카메라는 고정하며 캐릭터와 자재를 변형하거나 이동하지 않는다.
- 정지 이미지 전체에 `1.00 → 1.015 → 1.00` 범위의 매우 미세한 breathing/scale 효과만 허용한다.
- 과한 zoom, 좌우 pan과 흔들림은 사용하지 않는다.
- 다음 단계는 Scene 2 기준 이미지 제작 준비이며, Scene 2 이미지는 Codex가 생성하지 않는다.

## 다음 단계: Scene 1~6 Veo 설계표

사용자의 6씬 기획안을 받은 뒤 아래 표를 채운다.

| Scene | 핵심 메시지 | 시작 구도 | 움직일 요소 | 고정 요소 | 캐릭터 반응 | 카메라 | 끝 프레임 연결 | 분리 자산 | TTS/자막 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| 2 | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| 3 | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| 4 | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| 5 | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| 6 | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## 보존·제외 원칙

- 원본 프로젝트는 수정하지 않는다.
- 새 자산은 기존 자이 파일명과 충돌하지 않게 만든다.
- `node_modules/`, `.git/`, `build/`, `final/`, 기존 MP4·TTS·Scene 렌더와 임시 프리뷰는 베이스 복사에서 제외한다.

## Scene 1 최종 방식 — 갱신 (2026-08-14)

위 "### Scene 1 최종 방식" 절의 "Vertex/Veo 추가 생성 금지, 정지 이미지 사용" 결정은
사용자 승인에 따라 **갱신**되었다. 최신 결정은 `26.08.14작업기록.md`를 따른다.

- Scene 1 최종 채택 파일: `public/assets/video/scene01-veo-claude-legacy-test-v1.mp4`
  (소송각재 1탄/2탄 legacy Veo 호출 구조를 그대로 이식해 생성)
- 기존 정지 이미지 버전(`Scene01Remotion.tsx`, `Scene01RemotionPreview` composition)은
  삭제하지 않고 백업으로만 보존한다.
- Codex/일반 Vertex 테스트보다 캐릭터 외형 보존과 연출이 우수한 것으로 판단.
- 경미한 손동작(포인팅)이 있으나 현 단계에서는 허용 가능.
- Scene 2~6도 이후 이 legacy Veo 방식을 우선 적용하는 방향으로 준비한다.

## 최종 6씬 스토리 구조 — 확정 (2026-08-14)

이전 기획의 "다음 단계: Scene 1~6 Veo 설계표"(TBD 표)와 기존 Scene 6(라운드 코너/오징어합판) 내용은
아래 구조로 **대체**되었다. 최신 근거는 `src/darukki-vs-twobuy/scene-spec.ts`의
`DARUKKI_SCENE_SPECS`를 단일 기준으로 삼는다.

핵심 구조: **훅 → 답 공개 → 다루끼 근거 → 투바이 근거 → 현장 사례 → 결론 회수**
(Scene 1~2만 봐도 핵심 메시지가 전달되도록 설계, Scene 3~5는 Scene 2 주장의 근거, Scene 6은 Scene 1의 질문을 회수)

| Scene | 역할 | 자막 | TTS |
|---|---|---|---|
| 1 | 훅 | 다루끼랑 투바이,\n크기만 다른 걸까? | 다루끼랑 투바이, 그냥 크기만 다른 각재일까요? |
| 2 | 핵심 답 먼저 공개 | 차이는 크기보다\n쓰이는 역할 | 둘 다 소송각재 계열이지만, 필요한 폭과 쓰이는 역할이 다릅니다. |
| 3 | 다루끼 근거 | 다루끼\n가벼운 벽·천장 하지 | 단면이 작은 다루끼는 벽체나 천장의 가벼운 하지에 많이 사용됩니다. |
| 4 | 투바이 근거 | 투바이\n폭 필요한 가벽·보강틀 | 폭이 더 넓은 투바이는 가벽이나 보강틀처럼 폭이 필요한 곳에 활용됩니다. |
| 5 | 현장 사례 (표준 공법처럼 표현 금지) | 현장 조건에 따라\n함께 쓰기도 합니다 | 그리고 현장 조건에 따라 두 자재를 보조적으로 함께 쓰기도 합니다. |
| 6 | 결론 회수 | 큰 게 정답이 아니라\n맞는 역할이 정답 | 결국 큰 자재가 더 좋은 게 아니라, 필요한 폭과 역할에 맞게 고르는 게 핵심입니다. |

Scene 1은 이미 채택된 legacy Veo 결과(`scene01-veo-claude-legacy-test-v1.mp4`)를 그대로 유지한다.

### Scene 4 legacy Veo 최종 채택

- 최종 사용: `public/assets/video/scene04-veo-legacy-v1.mp4`
- `public/assets/video/scene04-veo-legacy-v2.mp4`는 최종 영상에 사용하지 않는다.
- v1은 투바이 이동이 다소 크지만 가벽 기본 틀로 사용되는 흐름과 Scene 3과의 차이가 더 직관적이므로 채택한다.
- Scene 4 Veo는 추가 재생성하지 않는다.

Scene 2~6은 이 구조를 기준으로 legacy Veo 방식을 우선 적용해 순서대로 준비한다.

## "Scene 2~6 구조 reference 확정 기준" 섹션 — 일부 대체 안내 (2026-08-14)

위쪽 "### Scene 2~6 구조 reference 확정 기준" 절 중 **Scene 2**("완성된 벽... 벽 마감면만
서서히 반투명해지며 내부 목재 하지틀이 드러나게 한다")와 **Scene 6**("각재 리브가 라운드
뼈대를 형성하는 라운드 벽 코너 구조... 오징어합판")은 스토리 개편으로 **폐기**되었다.
이 두 항목은 삭제하지 않고 과거 기록으로만 남기며, 실제 기준은 아래
"최종 6씬 스토리 구조 — 확정 (2026-08-14)" 표를 따른다.

Scene 3~5의 기존 문구(다루끼 촘촘한 하지 / 투바이 가벽·보강틀 / 투바이 기본틀에 다루끼 보조)는
새 스토리와 개념적으로 대체로 부합하므로 그대로 유지하되, 최종 캡션·TTS 문구는 아래 표를 기준으로 한다.

# 최종 릴리스 상태

- 최종 영상: `public/assets/video/darukki-vs-twobuy-final.mp4`
- 사양: 1080×1920 / 30fps / 38.06초
- Scene 1~6 확정 영상과 Scene 3/5/6 hold 후처리를 적용했다.
- 엔딩은 기존 대산 로고와 CTA TTS를 유지하며 별도 자막 오버레이는 사용하지 않는다.
