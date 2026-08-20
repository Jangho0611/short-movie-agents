# 건축자재 Shorts 제작 운영가이드

- 문서 버전: `v1.0`
- 작성 기준일: `2026-08-20`
- 상태: `운영 기준 / 지속 고도화`
- 역할: `기획 → 조사 → 이미지 → Flow/Veo → Remotion → TTS → QA → 최종 렌더 → 정리 → Git` 전체 제작 프로세스

## 문서 목적과 적용 범위

이 문서는 실제로 최종 렌더까지 진행한 건축자재 Shorts 프로젝트의 소스와 작업 기록을 바탕으로, 다른 작업자와 Codex가 같은 방식으로 작업을 이어 가기 위한 운영 기준이다. 반복 시행착오를 줄이고, 생성 비용을 통제하며, Scene·TTS·Remotion QA의 일관성과 프로젝트 종료 후 재현 가능성을 보존한다.

이미지와 화면 자체를 만드는 문법은 공식 Visual Grammar 문서인 [건축자재 AI 이미지 품목별 프롬프트 가이드](./건축자재_AI이미지_품목별_프롬프트_가이드.md)를 따른다. 이 운영가이드는 **어떤 순서로 제작하는가**, Visual Grammar는 **어떤 이미지와 화면을 만드는가**를 담당한다. 품목별 프롬프트를 이 문서에 중복하지 않는다.

## 조사 근거와 규칙 등급

### 조사한 프로젝트

다음 10개 프로젝트와 그 안의 README, 수정 기록, final 문서·manifest, Remotion Root/Scene, TTS 스크립트, final/preview 자산 구조를 조사했다.

1. `short-movie-agents`
2. `xi-natural-gypsum-food-fact-shorts`
3. `eboard-explainer-shorts-v1`
4. `remotion_video/projects/window-condensation-shorts-v1`
5. `remotion_video/MDF_vs_PB_vs_Plywood`
6. `remotion_video/mdf-density`
7. `sosong-webtoon-shorts`
8. `sosong-lvl-webtoon-shorts`
9. `gypsum-board-installation-shorts`
10. `xi-natural-gypsum-webtoon-shorts`

보조 비교 대상으로 `darukki-vs-twobuy-webtoon-shorts`의 승인 hold와 Remotion 전환 구조도 확인했다. 이 프로젝트는 위 10개 집계에는 포함하지 않았다.

### 규칙 등급

- **[공통]** 여러 프로젝트의 기록 또는 실행 소스에서 반복 확인된 운영 규칙이다.
- **[재발 방지]** 실패 뒤 원인과 복구 결과가 기록되어 다시 지킬 가치가 명확한 규칙이다.
- **[선택 옵션·검증 중]** 한 프로젝트에서만 확인됐거나 콘텐츠에 따라 달라질 수 있다. 기본 규칙으로 강제하지 않는다.
- **품목 고유** 제품 구조, 단면, 시공법, 표현 방식처럼 특정 품목에만 해당하는 내용은 이 문서에 일반화하지 않고 프로젝트 기록 또는 Visual Grammar에 둔다.

## 검증된 공통 운영 규칙 32개

아래 32개를 v1.0의 공통 규칙으로 관리한다.

1. 건축자재 지식과 영상 제작 정보를 서로 다른 문서 영역에 보관한다.
2. 핵심 메시지와 훅을 먼저 확정한 뒤 Scene을 나눈다.
3. 한 Scene에는 한 메시지를 우선한다.
4. 실사·캐릭터·정보그래픽·생성 영상의 역할을 Scene 기획에서 먼저 정한다.
5. 실제 제품 사진과 canonical reference를 생성보다 우선한다.
6. 승인된 기준 이미지를 canonical start frame으로 보존한다.
7. 기준 이미지 승인 전 Remotion 본 제작에 들어가지 않는다.
8. 생성 이미지에 자막·라벨·로고를 굽지 않고 Remotion에서 처리한다.
9. Flow/Veo에는 꼭 필요한 최소 모션만 맡긴다.
10. 제품·캐릭터·이동·구조를 한 번에 생성하려 하지 않는다.
11. Flow Start Frame은 움직임 없이도 의미가 읽히는 완성 화면이어야 한다.
12. Flow 결과의 제품·캐릭터 변형과 후반 drift를 끝 프레임까지 검사한다.
13. Flow 원본 오디오는 최종본에서 기본적으로 음소거한다.
14. 생성 영상이 후반에 깨지면 원본을 보존하고 마지막 안정 프레임 전까지 trim한다.
15. 정보형 Scene과 텍스트 제어는 Remotion을 우선한다.
16. 자막은 최대 2줄, 의미 단위 줄바꿈을 기본으로 한다.
17. 제품을 가리는 라벨과 과도한 네임택·transition을 피한다.
18. 전체 대본 승인 후 Scene별 TTS를 일괄 생성한다.
19. TTS 속도로 긴 대본을 억지로 러닝타임에 맞추지 않는다.
20. Scene별 음원을 보존하고 전체 순서의 `full-tts-qa`를 별도로 만든다.
21. `full-tts-qa`는 청취 승인용이며 최종 영상에는 Scene별 승인 음원을 배치한다.
22. 발화 순서와 화면 강조 순서를 일치시킨다.
23. Scene duration은 실제 TTS 길이와 자연스러운 여유를 기준으로 정한다.
24. Flow의 `playbackRate`는 기본 `1.0`을 유지한다.
25. 긴 freeze hold 전에 대본·종료점·hold·전환 분리를 먼저 검토한다.
26. Preview는 버전별 변경 사항을 기록하고 unrelated 수정을 한 번에 섞지 않는다.
27. 새 수정이 악화되면 사용자가 마지막으로 승인한 버전으로 복귀한다.
28. 같은 생성 문제가 2회 반복되면 생성 방식 또는 구현 수단을 바꾼다.
29. 최종본은 1080×1920, 프로젝트 FPS, H.264/AAC로 렌더하고 전체 디코딩한다.
30. 승인 후 실패본과 임시 자산을 정리하되 재현 필수 자산은 보존한다.
31. 프로젝트 종료 시 날짜형 수정 기록을 남긴다.
32. 정리와 보안검사 뒤 관련 파일만 commit하고 push한다.

## 1. 콘텐츠 주제 선정

소비자가 실제로 궁금해할 하나의 핵심 질문을 먼저 적는다. 주제는 다음 유형으로 구분한다.

- **제품 설명형**: 무엇으로 구성되고 어디에 쓰이는가.
- **비교형**: 비슷한 자재의 차이와 선택 기준은 무엇인가.
- **시공형**: 올바른 순서, 주의점, 실패 원인은 무엇인가.
- **가격정보형**: 가격을 좌우하는 규격·수량·조건은 무엇인가. 가격 기준일과 범위를 반드시 명시한다.
- **오해·상식 교정형**: 흔한 오해와 실제 사실의 차이는 무엇인가.

한 영상에서 여러 질문을 동시에 해결하려 하지 않는다. 주제 후보마다 `대상 시청자 / 한 문장 결론 / 시청 후 행동`을 적고, 가장 설명 가치가 높은 하나를 선택한다.

## 2. 기초자료 조사

1. `Wiki_시장`의 기존 자료와 source MD를 먼저 확인한다.
2. 근거가 부족하거나 최신 확인이 필요한 부분만 외부 시장조사를 한다.
3. 새로 확인한 건축자재 사실은 출처와 확인일을 포함한 Wiki source MD로 별도 기록한다.
4. Wiki 지식 DB에는 Shorts 기획, Scene, TTS, 프롬프트, 영상 제작 정보와 QA 기록을 넣지 않는다.
5. 영상용 해석·훅·대본·Scene 결정은 프로젝트 폴더의 brief나 작업 MD에 둔다.

사실, 추론, 홍보 표현을 구분한다. 수치·규격·가격·인증은 원출처를 다시 확인하며, 확인되지 않은 내용을 자연스러운 대본이라는 이유로 보충하지 않는다.

## 3. 대본 및 Scene 기획

다음 순서를 고정한다.

1. 핵심 메시지 한 문장
2. 첫 1~3초의 훅
3. 필요한 Scene 수와 각 Scene의 역할
4. Scene별 TTS 후보
5. 실사 / 캐릭터 / 정보그래픽 구분
6. Flow/Veo가 필요한 Scene 판정
7. Remotion으로 구현할 Scene 판정

각 Scene 표에는 `메시지, 화면, TTS, 방식, 필요 자산, 승인 상태`를 둔다. 대본을 길게 쓴 뒤 speakingRate로 압축하지 않는다. TTS가 길면 군더더기, 중복 수식, 화면만으로 전달되는 말을 먼저 삭제한다.

## 4. 기준 이미지 제작

- 실제 제품 reference와 실제 촬영 누끼를 우선한다.
- 캐릭터는 승인된 단일 canonical reference를 우선한다.
- 제품 구조·표면·단면은 실제 촬영 reference를 기준으로 확인한다.
- 생성 후보 중 사용자 승인본만 canonical start frame으로 지정하고 파일명과 기록에 승인 상태를 남긴다.
- 승인 전에는 영상 생성과 Remotion 본 제작을 시작하지 않는다.
- 자막, 숫자, 제품 라벨, 로고는 이미지에 굽지 않고 Remotion에서 추가한다.
- 한 번에 하나만 수정하고 승인된 제품·캐릭터·구도는 prompt에서 잠근다.

세부 구도, 재질, reference, negative prompt, safe area 문법은 [Visual Grammar](./건축자재_AI이미지_품목별_프롬프트_가이드.md)를 사용한다.

## 5. GPT / Vertex AI / Veo / Flow / Remotion 사용 판단

| 도구 | 기본 역할 | 사용 기준 |
|---|---|---|
| GPT | 기획, 대본, Scene 설계, prompt 작성, 결과 QA | 제작 판단과 텍스트 설계 |
| Vertex AI 이미지 | 1차 이미지와 복수 후보 생성 | Google Cloud credit를 활용한 후보 탐색 |
| Veo on Vertex | 영상 생성 후보 | API 기반 생성·회수와 재현 기록이 필요할 때 |
| Flow | 중요한 핵심 Scene, Vertex 결과가 부족한 Scene | 승인된 Start Frame 기반 최소 모션 |
| Remotion | 자막, 네임택, 비교 애니메이션, 이미지 미세 모션, 전체 조립 | 정확한 텍스트·타이밍·레이아웃 제어 |

제품+캐릭터+이동+구조를 Flow/Veo 한 번에 해결하지 않는다. 정보 전달, 라벨, 순차 강조, 단순 확대·이동은 Remotion으로 해결하고 생성 횟수를 쓰지 않는다.

## 6. Flow Start Frame 규칙

- 첫 프레임 자체로 게시 가능한 완성 화면이어야 한다.
- 제품과 캐릭터의 크기·위치를 미리 확정한다.
- 카메라 각도, 크롭, 이동 여백을 확정한다.
- 텍스트·로고·생성 워터마크를 넣지 않는다.
- 움직임이 없어도 Scene 의미가 읽혀야 한다.
- prompt에는 exact first frame, fixed camera, 보존 대상, 허용 동작 하나를 명시한다.

## 7. Flow 영상 QA

처음, 중간, 마지막 구간을 프레임 단위로 확인한다.

- 제품 형상·인쇄·단면 변형
- 캐릭터 얼굴·색·비율·팔다리 변형
- late-frame drift와 마지막 프레임 붕괴
- 의도하지 않은 카메라 흔들림·줌·재구도
- 생성 로고, 글자, 마크, 워터마크
- 마지막 프레임의 정지·전환 품질
- 원치 않는 오디오 트랙 존재 여부

Flow 원본 audio는 기본 사용하지 않고 최종 영상에는 별도 승인 TTS를 쓴다. 후반 캐릭터가 깨지면 원본 파일을 보존하고 안정 프레임 직전까지 trim한다. trim 지점은 프레임 번호와 시간으로 작업 기록에 남긴다.

## 8. Remotion 구현

- 승인 asset만 import한다.
- 비교, 구조, 순차 강조 등 정보형 Scene은 Remotion을 우선한다.
- 자막은 최대 2줄이며 문법보다 의미와 호흡 단위로 줄바꿈한다.
- 라벨은 제품 위를 가리지 않고 제품 아래 또는 빈 여백에 둔다.
- Scene별 네임택, pulse, zoom 효과는 메시지에 필요한 최소 수준으로 쓴다.
- clean cut을 기본으로 하고 과도한 transition, push-in, crossfade를 피한다.
- Root/Composition에 width, height, fps, duration을 명시한다.
- 영상 asset의 audio는 명시적으로 음소거하고 승인 TTS를 별도 배치한다.

## 9. TTS 제작

기본 voice는 실제 프로젝트에서 반복 사용한 `ko-KR-Chirp3-HD-Alnilam`이다.

실제 승인 기록에는 `speakingRate 0.89`와 `1.00`이 모두 존재한다. `xi-natural-gypsum-food-fact-shorts` 최종 기록은 `0.89`, `xi-natural-gypsum-webtoon-shorts`와 그 후속 운영 기록은 `1.00`을 사용했다. 따라서 신규 프로젝트의 출발값은 최근 공통 기준인 `1.00`으로 하되, **고정 규칙으로 간주하지 않고 통합 청취 QA로 확정**한다. 조사한 생성 스크립트는 `pitch`를 지정하지 않았으므로 Google TTS 기본값을 사용한다. 임의 pitch 값을 문서 규칙으로 만들지 않는다.

- 전체 대본 승인 후 한 번에 생성한다.
- Scene별 최종 MP3와 입력 문장을 함께 보존한다.
- speakingRate로 러닝타임을 억지로 줄이지 않고 대본을 먼저 압축한다.
- 쉼표는 실제 호흡을 보장하지 않는다.
- 문장 수정으로 해결되지 않을 때 Part A/B로 나누고 짧은 내부 무음을 둔다.
- 실제 기록의 내부 무음은 `0.15~0.25초` 범위가 사용됐으며, Scene별 청취 승인 없이 일괄 적용하지 않는다.

## 10. 통합 TTS QA

Scene별 최종 후보를 순서대로 이어 붙인 `full-tts-qa` 음원을 반드시 만든다. 파일명에는 버전을 넣고 다음을 한 번에 듣는다.

- 전체 발화 속도와 톤
- Scene 사이 호흡
- 문장 연결과 중복
- 발음, 숫자, 제품명
- 엔딩 진입감

사용자는 Scene 파일을 하나씩 듣기 전에 통합 파일로 전체 흐름을 승인한다. 승인 후 실제 영상에는 Scene별 MP3를 개별 배치한다. `full-tts-qa` 자체를 최종 영상 audio로 사용하지 않으며, 최종 정리 때 QA 결정이 작업 MD에 남아 있으면 삭제할 수 있다.

## 11. TTS와 시각 강조 싱크

강조는 대본 텍스트의 예상 위치가 아니라 실제 MP3 발화 시작 프레임에 맞춘다. 예를 들어 TTS가 `XPS → PP 표면판 → 부직포`라면 화면의 네임택·pulse도 같은 순서여야 한다. 파형 또는 프레임 청취로 시작점을 기록하고, 대본 수정 뒤 기존 강조 타이밍을 그대로 재사용하지 않는다.

## 12. Scene duration

기본식은 `TTS 실제 길이 + 최소한의 자연스러운 여유`다. Flow 영상의 `playbackRate`는 임의로 바꾸지 않고 기본 `1.0`을 유지한다.

TTS와 영상 길이가 맞지 않으면 다음 순서로 해결한다.

1. 대본의 길이와 중복을 검토한다.
2. 생성 영상의 자연스러운 종료 프레임을 찾는다.
3. 필요한 hold 시간을 프레임과 초로 계산한다.
4. 화면 전환과 음성 전환을 분리할 수 있는지 검토한다.
5. 짧은 안정 hold 또는 다음 Scene 선진입을 선택한다.

긴 freeze hold로 무조건 채우거나 TTS 때문에 영상을 가속하지 않는다.

## 13. Preview QA

Preview는 `v1`, `v2`, `v3`처럼 증가시키고 각 버전에서 바꾼 항목을 기록한다. unrelated 수정은 한 버전에 섞지 않고, 승인 요소는 잠근다.

- TTS 자연스러움과 발음
- 자막 가독성, 최대 2줄, safe area
- Scene 템포와 duration
- 캐릭터 일관성
- 제품 구조·표면·인쇄 정확성
- Flow 마지막 프레임과 종료감
- Scene transition과 엔딩 진입
- 엔딩 TTS·로고·문구
- 1080×1920 및 프로젝트 FPS
- audio/video 전체 decoding

## 14. 승인본 복원

새 수정이 이전보다 나쁘면 최신본을 계속 고치지 않고 `사용자가 마지막으로 승인한 버전`으로 돌아간다. 승인본 파일을 덮어쓰지 않고 버전으로 보존한다.

**이보드 Scene 5 재발 방지 사례:** v4는 Flow 원본의 자연스러움이 승인됐다. v5는 hold 증가로 종료가 끊겼고, v6는 push-in/crossfade 보정으로 더 악화됐다. v7은 v4의 `playbackRate 1.0`, 원본 144프레임 전체 재생, 짧은 13프레임 hold, 추가 zoom/crossfade 없음, Scene 6 hard cut 방식으로 복원되어 최종 승인됐다. 교훈은 효과를 더하기 전에 마지막 승인본의 duration·hold·재생 방식을 정확히 복원하는 것이다.

## 15. 실패 반복 제한과 대응

동일한 생성 문제가 2회 이상 반복되면 같은 prompt를 다시 실행하지 않는다.

1. 실패 원인을 제품, 캐릭터, 구도, 모션, 텍스트 중 하나로 분류한다.
2. 승인 요소를 잠그고 수정 대상 하나만 남긴다.
3. Remotion으로 제어 가능한 문제는 Remotion으로 전환한다.
4. Flow가 실패하면 Vertex/Veo 후보 또는 승인 GPT 이미지 기반으로 바꾼다.
5. 실제 제품 정확도가 문제면 실제 촬영 reference나 누끼로 전환한다.
6. 더 나은 결과가 없으면 기존 승인본을 복원한다.

**[재발 방지]** 캐릭터 크기·제품 형상을 번갈아 재생성하면 이미 승인된 요소까지 퇴보했다. 한 번에 하나만 수정한다. **[선택 옵션·검증 중]** 단순 색상만 문제일 때 로컬 pixel recolor로 해결한 사례가 있으나 모든 자산의 기본 방식으로 일반화하지 않는다.

## 16. 대산 엔딩 규칙

엔딩은 최종 Scene에 두되 전체 Scene 수에 따라 번호가 달라진다. 6 Scene 프로젝트에서는 Scene 6, 이보드 7 Scene 프로젝트에서는 Scene 7이었다. 번호가 아니라 `마지막 Scene`이라는 역할을 고정한다.

- 최신 반복 사용 로고: `public/assets/logos/daesanlogo2.png`
- 엔딩 TTS: `자재 선택이 고민된다면, 대산이 도와드립니다.`
- 화면 문구: `GS건설 3년 연속 납품업체 / 자재 대량 구매 / 대산`
- 구현: 승인된 `Scene5Ending` Remotion 구조와 승인 엔딩 음원을 프로젝트에 복사해 재사용
- TTS 위치: 엔딩 Scene 시작 프레임에 배치하는 것이 기본이며, 앞 Scene 잔여 발화가 있으면 겹침을 검사해 Scene 내부 offset을 기록한다.
- 엔딩의 로고, 문구, 모션, duration과 TTS는 콘텐츠 Scene 수정과 분리해 잠근다.

과거 `window-condensation`에는 다른 투명 로고와 프로젝트 전용 엔딩 문구가 존재했다. 이는 과거 프로젝트 고유 기록이며 신규 프로젝트 공통 자산으로 되돌리지 않는다.

## 17. 최종 렌더

- 파일: 승인된 `final MP4`
- 캔버스: `1080×1920`, 세로 9:16
- FPS: 프로젝트 Composition 기준. 조사 프로젝트에는 24fps 마스터, 30fps 프로젝트·전달본이 모두 있으므로 임의 통일하지 않는다.
- 영상: H.264
- 오디오: AAC
- 검사: 컨테이너 정보, 해상도, FPS, 길이, 오디오 존재, 처음부터 끝까지 audio/video decoding

전달본 FPS를 변환한 경우 승인 Remotion 마스터와 전달본의 재생 시간이 같은지 확인하고 둘의 역할을 final README에 기록한다.

## 18. 최종 자산 정리

정리 전에 전체 프로젝트 용량을 기록하고 final과 코드 참조를 확인한다.

**삭제 후보**

- 실패 이미지와 실패 Flow/Veo
- 테스트 영상과 중간 Preview
- 폐기 TTS와 승인 완료된 QA 임시파일
- `.DS_Store`, cache, temp

**보존 대상**

- final MP4
- 필요하면 마지막 승인 Preview 1개
- canonical 이미지와 실제 제품 reference
- 실제 사용한 승인 Flow/Veo
- Scene별 승인 TTS와 엔딩 TTS
- 엔딩 로고와 필요한 폰트
- Remotion source, Root, config, package lock
- 작업 MD, final README/manifest
- 재현에 필수인 prompt와 reference

삭제 후 용량과 절약 용량을 기록한다. 삭제 전 `최종 렌더가 존재하는가 / 코드가 참조하는가 / 더 나은 승인본이 있는가 / 작업 기록이 남는가`를 확인한다. 이 가이드 작성 작업에서는 기존 프로젝트 자산을 삭제하지 않는다.

## 19. Git 저장

순서는 `최종 승인 → 실패본 정리 → 작업 MD → 보안검사 → commit → push`다.

- 현재 branch와 remote를 확인한다.
- `.env`, credential, service account JSON, API key, token, private key, client secret을 stage하지 않는다.
- 기존 `.env` ignore 설정을 유지한다.
- `git diff`와 staged diff에서 이번 작업 파일만 포함됐는지 확인한다.
- force push하지 않는다.
- push 뒤 `git status`와 원격 추적 상태를 확인한다.

## 20. 프로젝트 작업 기록

종료 시 `YY.MM.DD수정.md` 형식의 작업 기록을 남긴다. 최소 항목은 다음과 같다.

- 최종 Scene 순서, duration, 구현 방식
- Scene별 TTS 문장, voice, speakingRate, 분할·무음
- 실제 사용 asset과 canonical/reference
- final 경로, 길이, 해상도, FPS, codec
- Preview 및 디코딩 QA 결과
- 실패 시도, 원인, 복구 과정
- 다음 프로젝트에 재사용할 공통 규칙과 품목 고유 규칙의 구분
- 삭제 파일 유형, 정리 전후 용량, 절약 용량
- commit hash와 push 결과

## 비용 절약 원칙

- `조사 → 승인 → 최소 수정 → 승인 → 완료` 순서를 지킨다.
- 승인 없는 재생성을 최소화하고 후보 수를 미리 정한다.
- Flow/Veo 실행 전에 prompt, Start Frame, 보존 요소, 허용 모션을 QA한다.
- 같은 문제가 2회 반복되면 같은 prompt가 아닌 구현 방식을 바꾼다.
- Vertex AI의 Google Cloud credit를 1차 후보 생성에 적극 활용한다.
- 실제 제품 형태·인쇄가 중요하면 AI 반복 수정 대신 실제 촬영 reference를 쓴다.
- 자막, 라벨, 비교, pulse, 단순 미세 모션은 Remotion으로 해결한다.
- 승인 asset을 잠그고 한 번에 한 요소만 수정한다.
- TTS 길이는 재생 속도보다 대본 압축으로 먼저 해결한다.
- 최종 승인 후 실패본과 불필요한 QA 파일을 정리한다.

## 역할 분담

### GPT

- 콘텐츠 기획, 대본, Scene 설계
- 이미지·영상 prompt 작성
- 결과 비교와 QA 항목 정리
- Codex 작업 감독과 의사결정 보조

### Codex

- 프로젝트·기록·local asset 조사와 관리
- Vertex API 실행과 결과 회수
- TTS 생성, 측정, 통합 QA 파일 생성
- Remotion 구현, render, 자동 QA
- 정리 대상 점검, 보안검사, Git, 작업 MD

### 사용자

- 최종 콘텐츠·표현 판단
- 실제 제품 reference 촬영과 제공
- 기준 이미지·Flow/Veo 결과 승인
- 최종 TTS 통합 청취와 영상 시청 QA

### Vertex AI 이미지

- Cloud credit를 활용한 1차 이미지와 복수 후보 생성
- 승인 전 저비용 탐색과 reference 기반 후보 제작

### Veo on Vertex

- API로 생성·추적할 영상 후보 제작
- 중요 Scene의 카메라·모션 테스트와 결과 회수

### Flow

- 승인된 Start Frame을 기반으로 중요한 핵심 Scene의 최소 모션 제작
- Vertex 결과가 충분하지 않을 때의 정밀 후보 제작

### Remotion

- 승인 자산 조립, 자막, 네임택, 정보 강조, 비교 애니메이션
- 이미지 미세 모션, Scene duration, TTS 싱크, 엔딩, 최종 렌더

## 새 Shorts 시작 체크리스트

- [ ] `Wiki_시장`과 기존 source MD 확인
- [ ] 부족 데이터만 외부 조사하고 출처 기록
- [ ] 건축자재 지식과 영상 기획 문서 분리
- [ ] 핵심 주제·시청자·한 문장 결론 확정
- [ ] 콘텐츠 유형과 훅 확정
- [ ] Scene 구조와 Scene별 한 메시지 확정
- [ ] 실사 / 캐릭터 / 정보그래픽 방식 판정
- [ ] 최신 [Visual Grammar](./건축자재_AI이미지_품목별_프롬프트_가이드.md) 읽기
- [ ] [DESIGN.md 스타일 라이브러리](./design-styles/README.md) 선택 매트릭스 확인
- [ ] 콘텐츠 유형에 맞는 DESIGN.md를 영상 또는 Scene 단위로 선택
- [ ] 실제 제품 reference와 canonical 캐릭터 확보
- [ ] 기준 이미지 생성·사용자 승인·canonical 저장
- [ ] Flow/Veo가 꼭 필요한 Scene만 선정
- [ ] Start Frame과 prompt 사전 QA
- [ ] Flow/Veo 영상의 처음·중간·마지막 프레임 QA
- [ ] 전체 TTS 최종 문장 승인
- [ ] Scene별 TTS 생성·길이 측정
- [ ] `full-tts-qa` 생성·통합 청취 승인
- [ ] TTS 발화와 화면 강조 순서·프레임 싱크
- [ ] Scene duration과 hold 계산
- [ ] Remotion 승인 asset·음소거·자막 safe area 확인
- [ ] Preview 버전별 변경 기록과 전체 QA
- [ ] 대산 엔딩 로고·TTS·문구·Scene 번호 확인
- [ ] final 1080×1920 H.264/AAC 렌더
- [ ] 해상도·FPS·길이·audio/video 전체 디코딩
- [ ] 실패본 정리 전 코드 참조와 승인본 확인
- [ ] 정리 전후 용량과 보존 자산 기록
- [ ] `YY.MM.DD수정.md`와 final README/manifest 작성
- [ ] secret·credential 보안검사
- [ ] 관련 파일만 commit
- [ ] `origin/main` push와 최종 git status 확인

## 문서 고도화 규칙

- 새 프로젝트에서 반복 검증된 공통 운영 노하우만 본문 공통 규칙으로 승격한다.
- 품목 고유 정보는 프로젝트 기록 또는 Visual Grammar에 둔다.
- 실패 1회만으로 일반 규칙을 만들지 않는다.
- 반복 검증되거나 명확한 재발 방지 가치가 있을 때만 승격한다.
- 단일 실험은 `선택 옵션·검증 중`으로 표시한다.
- 기존 규칙을 삭제하거나 의미를 바꾸면 변경 이력에 이유와 근거 프로젝트를 기록한다.
- 변경 때 문서 버전을 증가시키고 Git 변경 이력을 유지한다.

## 변경 이력

| 날짜 | 버전 | 변경 내용 |
|---|---|---|
| 2026-08-20 | v1.0 | 기존 Shorts 제작 기록 기반 최초 통합 |
