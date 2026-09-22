# 건축자재 Shorts 제작 운영가이드

- 문서 버전: `v1.15`
- 작성 기준일: `2026-08-20`
- 상태: `운영 기준 / 지속 고도화`
- 역할: `기획 → 조사 → 이미지 → Flow/Veo → Remotion → TTS → QA → 최종 렌더 → 정리 → Git` 전체 제작 프로세스

## 문서 목적과 적용 범위

이 문서는 실제로 최종 렌더까지 진행한 건축자재 Shorts 프로젝트의 소스와 작업 기록을 바탕으로, 다른 작업자와 Codex가 같은 방식으로 작업을 이어 가기 위한 운영 기준이다. 반복 시행착오를 줄이고, 생성 비용을 통제하며, Scene·TTS·Remotion QA의 일관성과 프로젝트 종료 후 재현 가능성을 보존한다.

이미지와 화면 자체를 만드는 문법은 공식 Visual Grammar 문서인 [건축자재 AI 이미지 품목별 프롬프트 가이드](./건축자재_AI이미지_품목별_프롬프트_가이드.md)를 따른다. SNS 대표이미지는 [대산 Shorts Cover System](./COVER.md)을 따른다. 이 운영가이드는 **어떤 순서로 제작하는가**, Visual Grammar는 **어떤 이미지와 화면을 만드는가**, COVER.md는 **대표이미지를 어떻게 제작·QA·운영하는가**를 담당한다. 세부 규칙을 이 문서에 중복하지 않는다.

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

## 검증된 공통 운영 규칙 39개

아래 38개를 공통 규칙으로 관리한다.

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
33. 새 프로젝트는 전체 프로젝트 복제가 아니라 실행에 필요한 코드·설정·lockfile·승인 자산만 가져오는 슬림 복사를 기본으로 한다.
34. `node_modules`는 복사하지 않고 대상 프로젝트의 lockfile 기준으로 의존성을 재설치한다.
35. Scene reference는 과도한 하위 폴더보다 `public/references/` flat 구조를 우선하고 Scene 번호와 역할이 드러나는 파일명으로 구분한다.
36. 짧은 영상 생성은 실제 사용할 시간에 가까운 최소 지원 길이를 우선해 불필요한 생성 구간과 비용을 줄인다.
37. 핵심 동작이 마지막 프레임과 동시에 끝나지 않도록 `핵심 동작 → 결과 상태 hold → 종료` 구조를 확보한다.
38. Vertex AI 이미지와 Veo/Flow에 실제 전달하는 생성 프롬프트는 영어로 작성한다.
39. 화면 자막은 TTS 문구를 그대로 따르지 않고, 무음 시청자도 자막만으로 핵심 내용을 유추할 수 있도록 별도로 작성한다.

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

TTS(발화)와 화면 자막(무음 시청 대비 핵심 요약)은 별도로 작성하며 동일 문장을 재사용하지 않는다.

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

- Flow는 GPT가 승인된 기준 이미지에 맞춰 프롬프트를 작성하고, 사용자가 Flow에서 직접 생성·다운로드한 결과 파일을 공유하면 GPT가 QA한다. 필요한 트림·패치/하단 Veo 표시 제거 등 후처리만 Codex에 최소 단위로 지시한다.

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

캐릭터가 포함된 image-to-video prompt에는 다음 보존 문구를 기본 후보로 둔다.

- 눈: `character's eyes must remain perfectly stable and unchanged throughout, exactly matching reference image`
- 입: `mouth stays exactly as shown in reference image, no mouth movement, no talking animation`
- 손: `pointing hand must maintain its exact shape, fingers stay clearly defined, no melting or blob-like deformation`
- 세로 영상: output aspect ratio를 `9:16` full frame으로 명시한다. 누락 시 상하단 letterbox가 생길 수 있다.

특히 3초 이후 후반 프레임에서 눈·입·손 drift를 확인한다. 후반부에만 왜곡이 있으면 무조건 재생성하지 않고 안정 구간 직전까지 trim한 뒤 마지막 프레임 freeze로 길이를 보충하는 방식을 우선 비교한다.

Flow 원본 audio는 기본 사용하지 않고 최종 영상에는 별도 승인 TTS를 쓴다. 후반 캐릭터가 깨지면 원본 파일을 보존하고 안정 프레임 직전까지 trim한다. trim 지점은 프레임 번호와 시간으로 작업 기록에 남긴다.

짧은 생성 영상은 실제 사용할 시간에 가까운 최소 지원 길이를 우선한다. 불필요한 준비 동작을 줄이고 핵심 동작을 앞쪽에서 완료한 뒤 결과 상태를 잠깐 hold하여, 중요한 동작과 영상 종료가 같은 프레임에 겹치지 않게 한다. Vertex/Veo에 실제 전달하는 생성 프롬프트는 영어로 작성한다.

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
- Part A/B 방식은 `0.15~0.2초` 무음으로 의미 단위를 분명하게 만들 수 있지만, Part B 시작부의 톤이 부자연스럽게 올라갈 수 있으므로 연결부를 반드시 청취한다.
- SSML break는 `0.3~0.4초`를 쉼표 위치에 넣은 단일 문장에서 안정적인 대안이 될 수 있지만, 일부 생성에서는 필러음(`음~`)이 생길 수 있다. 필러음이 한 번 발생하면 같은 방식으로 반복 생성하지 않고 문장 분리 방식으로 전환한다.
- 반대로 문장 분리에서 톤 연결이 실패하면 SSML break 단일 문장 방식으로 전환한다. Scene별 최적 방식이 다르므로 같은 실패 설정을 반복하지 않는다.

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
- 표준 엔딩 음원 원본: `darukki-vs-twobuy-webtoon-shorts/public/assets/audio/scene06-tts-v3.mp3` (문구 확인 근거: 해당 프로젝트 `26.08.14작업기록.md`). 신규 프로젝트는 이 파일을 `public/assets/audio/scene-ending-tts.mp3`로 복사해 재사용한다.
- 표준 엔딩 로고 원본: 동일 프로젝트 `public/assets/logos/daesanlogo2.png`
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

## 17A. 대표이미지 제작과 업로드 흐름

최종 영상 승인 뒤 영상 첫 Scene과 별도로 대표이미지를 제작한다. 세부 hierarchy, Hero Product, Brand Lockup, Feed Safe, 승인·정리 규칙은 [대산 Shorts Cover System](./COVER.md)을 따른다.

`최종 영상 승인 → 대표이미지 제작 → COVER.md 기준 QA → 업로드 문구 제작 → 업로드 → 불필요 자산 정리`

- Cover Headline과 MAIN / SECONDARY DESIGN을 먼저 결정하되 기존 승인 Cover 또는 최근 동일 시스템의 Cover를 우선 재사용한다. 사용자 지적 요소만 최소 수정하고 승인된 나머지 요소를 유지하며 악화되면 마지막 승인본으로 복귀한다.
- 실제 제품 사진·승인 Canonical·승인 Scene을 우선하고 새 AI Hero가 반드시 필요하지 않으면 생성하지 않는다.
- 세로 1080×1920과 중앙 square crop을 실제 이미지로 시각 QA한다. Headline 전체·핵심 Hero/비교 대상·Brand Lockup·필요한 캐릭터 얼굴/상체를 보존하고 겹침·제품 가림·모바일 제목 위계·무게중심을 확인한다. Category는 crop 밖이어도 허용할 수 있으며 이를 위해 승인 레이아웃을 임의 이동하지 않는다.
- Vertex를 사용하면 제품+환경만 생성하고 한글과 DAESAN branding은 정확한 후처리 layer로 분리한다.
- 최종 Cover를 위해 영상 첫 Scene, TTS, Remotion Scene을 임의 수정하지 않는다.
- 최종 세로 Cover·square QA/최종 square-safe·구현 소스·직접 참조 Hero/제품/캐릭터·승인 로고·재현용 폰트/자산을 함께 보존한다. 직접 참조 Source를 중간 후보로 오인하지 않는다. 정리는 기존 사용자 승인 절차를 따른다.

### SNS 실행 기준

상세 기준과 공식 제한 출처는 [SNS 업로드 문구 가이드](./SNS_업로드_문구_가이드.md)를 따른다.

- 출력: YouTube는 제목 → 설명 → 고정 프로모 → 해시태그 → 고정댓글, Instagram은 본문 → 고정 프로모 → 해시태그 → 고정댓글, Naver Clip은 제목 → 설명 → 해시태그 → 글자 수 QA이며 고정댓글은 없다.
- YouTube/Instagram 본문은 TTS·자막 복사나 단순 요약 대신 결론 → 이유/원리 → 현장 의미 → 적용·선택·시공 확인점 → 구매·가격·대량구매·납품 정보로 충분히 풀어쓴다. 확정되지 않은 사실을 만들지 않고 검색 키워드를 본문에도 자연스럽게 포함한다.
- 고정 프로모는 본문 뒤에 위·아래 구분선을 포함한 원문 그대로 배치하고 뒤에 해시태그를 둔다. 본문 중간 삽입·문구 축약·변경·도메인 중복을 금지한다. 고정댓글은 별도 질문형이며 사이트 안내는 필요 시 포함한다.
- 모든 플랫폼 최대 5개: 자재 핵심 → `#건축자재` → `#대량구매` → 해당 자재 가격 → 자재 관련 핵심 키워드. 고정 2개 외 주제·검색 가치로 선택하고 관련 없는 태그나 릴스 태그를 자동 추가하지 않는다.
- Naver는 긴 프로모 없이 제품 특징 → 이유/원리 → 현장 의미 → 적용·선택 → 구매 정보를 가능한 범위에서 설명하고 마지막에 기본 5개 태그를 둔다. 사이트는 텍스트명으로 사용한다. 공식 클립 동영상 설명은 300자(2026-09-22 확인); 제목은 플랫폼의 현재 허용 글자 수 이내로 작성하고 최신 제한을 업로드 시 재확인한다. 제목/설명(줄바꿈·태그 포함) 실제 글자 수를 계산한다.
- 새 기준으로 승인 SNS를 재작성할 때는 기존본을 보존하고 별도 버전으로 저장한다. 영상·Cover·TTS는 수정하지 않고 특별한 이유가 없으면 제목·핵심 메시지를 유지한다.

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

새 프로젝트를 시작할 때는 전체 프로젝트를 복제하지 않는다. 실행에 필요한 source, 설정, `package.json`, lockfile, 승인 asset, canonical reference만 슬림 복사한다. `node_modules`는 복사하지 않고 대상 프로젝트에서 lockfile 기준으로 재설치한다. Scene reference는 특별한 분리 사유가 없으면 `public/references/` flat 구조를 우선하고 파일명으로 Scene과 역할을 구분한다.

## 18.1 완료 프로젝트 Slim Archive

최종 영상·Cover·SNS 문구·작업기록까지 승인된 프로젝트는 장기 로컬 보관 시 실행환경과 Git 임시 객체가 누적되지 않도록 Slim Archive 절차를 적용한다.

### Slim 전 확인

1. 현재 branch, `git status`, `HEAD`, upstream을 확인한다.
2. 최신 작업기록·SNS·Cover·제작 소스가 Git에 빠져 있지 않은지 확인한다.
3. 루트에 있는 작업기록은 `docs/YY.MM.DD수정.md`와 SHA256 동일성을 확인한 뒤 rename으로 Git 반영한다.
4. `M`, `D`, `??` 파일은 자동 처리하지 않고 각각의 역할과 승인 여부를 확인한다.
5. 최종 영상과 Scene별 최종 영상·이미지는 별개의 보존 대상으로 다시 확인한다.

### 항상 보존

- 승인 최종 영상
- Scene별 최종 영상과 최종 이미지
- 실제 최종 영상에 사용한 Scene별 TTS
- 승인 Cover와 재편집에 필요한 승인 Hero
- canonical/reference 원본
- Remotion 및 제작 소스
- `package.json`과 lockfile
- 최종 SNS 문구
- `docs/YY.MM.DD수정.md`
- 재현에 필요한 README/manifest

코드가 현재 직접 참조하지 않는다는 이유만으로 Scene별 최종 자산을 삭제하지 않는다.

### `node_modules` Slim

`node_modules`는 다음 조건을 모두 만족할 때만 Slim 대상으로 본다.

- 프로젝트 제작이 완료됐다.
- 필요한 최신 변경이 Git에 반영됐다.
- `HEAD`와 upstream이 동기화됐다.
- `package.json`과 lockfile 등 재설치 근거가 있다.
- 최종 영상·Scene·TTS·Cover·소스가 별도로 보존돼 있다.

조건을 만족하면 `node_modules`를 프로젝트에서 제거하고 필요 시 `npm ci` 등 lockfile 기준으로 재설치한다. 바로 영구 삭제하지 않고 `~/.Trash/`의 작업별 폴더로 이동한 뒤 검증하는 방식을 우선한다.

### 미추적·수정 파일

미추적(`??`), 수정(`M`), 삭제(`D`) 파일이 있으면 CLEAN 상태를 만들기 위해 임의 삭제하거나 reset하지 않는다.

- 최신 승인 작업이면 필요한 파일만 Git에 반영한다.
- 작업기록의 단순 위치 이동이면 SHA256 동일성을 확인하고 rename으로 반영한다.
- 승인 여부가 불명확한 Cover·테스트 영상·생성 후보는 판단 전까지 보존한다.
- 타 프로젝트 파일이 명확하면 영구삭제하지 않고 휴지통 격리 후 검증한다.

### 비정상적으로 큰 `.git`

완료 프로젝트의 `.git`이 프로젝트 크기에 비해 비정상적으로 크면 다음 순서로 조사한다.

1. `.git` 및 `.git/objects` 용량 확인
2. `git count-objects -vH`
3. 전체 refs와 `refs/codex/` 확인
4. main reachable 객체와 all-refs reachable 객체 비교
5. unreachable/garbage 객체 확인
6. history의 대용량 blob과 현재 main의 대용량 추적 파일 구분

Codex checkpoint/capture refs 또는 unreachable/garbage 객체가 원인으로 확인돼도 바로 제거하지 않는다.

### Git object 정리 안전장치

Git object 정리 전에는 반드시:

- `git bundle create <backup>.bundle --all`
- `git bundle verify <backup>.bundle`
- refs, Git log, status 기록
- 미추적 중요 자산 목록 및 SHA256 기록

을 수행한다.

Complete Bundle이 정상 검증된 뒤에만 불필요한 로컬 `refs/codex/...`를 제거할 수 있다. 이후 reflog 만료와 `git gc --prune=now` 범위에서 정리한다.

금지:

- main history rewrite
- force push
- 원격 main 변경
- 용량 절감만을 목적으로 현재 main에 필요한 최종 영상/reference history 제거

정리 후에는:

- `git fsck --full`
- `git count-objects -vH`
- `HEAD = origin/main`
- 필요한 remote ref 보존
- working tree
- 미추적 중요 자산 SHA256
- `.git` 정리 전후 용량

을 검증한다.

### 안전백업 사후 처리

Git 정리 전에 만든 Complete Bundle은 정리 성공 직후 삭제하지 않는다. 실제 프로젝트를 이후 다시 열고 필요한 수정·재설치·렌더 작업에 문제가 없음을 확인한 뒤 삭제 후보로 보고한다. 사용자 승인 없이 안전백업을 삭제하지 않는다.

### 종료 기록

Slim Archive 완료 시 작업기록에는 최소한 다음을 남긴다.

- Slim 전후 프로젝트 용량
- 제거한 `node_modules`/캐시 등 실행환경 용량
- 최종 보존 자산 확인 결과
- Git commit/push hash
- `HEAD = origin/main` 여부
- `.git` object 정리를 했다면 정리 전후 용량과 bundle 백업 위치
- 판단 보류로 남긴 미추적/수정 자산

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

- Codex 지시는 `[최소모드]` 태그로 시작하는 자연어 통합 지시서를 기본으로 한다 (단순 반복 bash 스크립트가 아니라 여러 작업을 번호로 묶은 한 번의 호출).
- 지시서 마지막에는 "결과(구체 항목)만 보고, 다른 작업 금지"를 명시한다.
- 여러 단계를 쪼개서 여러 번 호출하지 않고 가능한 한 하나의 통합 지시로 묶는다.

- 프로젝트·기록·local asset 조사와 관리
- Vertex API 실행과 결과 회수
- TTS 생성, 측정, 통합 QA 파일 생성
- Remotion 구현, render, 자동 QA
- 정리 대상 점검, 보안검사, Git, 작업 MD
- 판단이 필요 없는 순수 기계적 실행(Remotion render, ffmpeg concat/overlay, 파일 복사 등)은 Codex나 다른 AI 에이전트(Claude Code 포함)를 거치지 않고, 완성된 명령어를 그대로 사용자 터미널에서 직접 실행한다. AI 판단이 필요한 작업(코드 작성, 파일 선택 판단, QA)에만 Codex를 사용한다.

#### 토큰 절약 원칙

- QA/컴파일 체크(`npx tsc --noEmit` 등)는 코드 구조 변경이 있을 때만 수행하고, 텍스트·색상 등 경미한 수정에는 생략한다.
- 이미지 생성 시 해상도 보정(1080×1920 변환)을 별도 호출로 분리하지 않고, 생성 지시서에 처음부터 포함해 한 번에 처리한다.
- 이미지 생성 후보 수는 기본 1장으로 고정한다.
- Flow 결과물의 트림·패치 제거·워터마크 제거는 항상 하나의 통합 지시로 처리한다. 이미 적용 중인 원칙임을 재확인한다.
- 여러 Scene을 연속 작업할 때 Scene마다 개별 프리뷰를 만들지 않고, 관련 Scene들을 한 번에 수정한 뒤 마지막에 한 번만 통합 프리뷰를 렌더한다.

- 실사/Flow 영상이 포함된 Scene은 Remotion으로 캡처(video-in-video 렌더링)하지 않는다. Remotion은 정지 이미지 렌더(자막·박스 등 그래픽 레이어)와 외부 영상이 없는 순수 그래픽 Scene(엔딩 등)에만 사용한다.
- 실사/Flow 영상+자막 합성은 (1) 자막·박스를 투명 배경 PNG로 Remotion still 렌더 → (2) ffmpeg로 원본 영상에 오버레이+TTS 오디오 mux 순서로 진행한다.
- 여러 Scene을 하나로 합칠 때는 Remotion 통합 Composition 렌더 대신 ffmpeg concat을 기본값으로 사용한다.
- 문제 진단은 최대 1회로 제한하고, 해결 안 되면 즉시 이 방식(ffmpeg 기반 합성)으로 우회한다.

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

- [ ] 전체 복제 대신 source·설정·lockfile·승인 자산만 슬림 복사
- [ ] `node_modules`는 복사하지 않고 lockfile 기준으로 재설치
- [ ] Scene reference는 `public/references/` flat 구조 우선
- [ ] `Wiki_시장`과 기존 source MD 확인
- [ ] 해당 품목의 [canonical reference library](../references/README.md) 존재 여부 확인
- [ ] canonical reference가 있으면 `references/<product>/REFERENCE.md` 먼저 읽기
- [ ] 부족 데이터만 외부 조사하고 출처 기록
- [ ] 건축자재 지식과 영상 기획 문서 분리
- [ ] 핵심 주제·시청자·한 문장 결론 확정
- [ ] 콘텐츠 유형과 훅 확정
- [ ] Scene 구조와 Scene별 한 메시지 확정
- [ ] 실사 / 캐릭터 / 정보그래픽 방식 판정
- [ ] 최신 [Visual Grammar](./건축자재_AI이미지_품목별_프롬프트_가이드.md) 읽기
- [ ] [10종 DESIGN.md 스타일 라이브러리](./design-styles/README.md) 선택 매트릭스 확인
- [ ] 콘텐츠 유형에 맞는 DESIGN.md를 선택 매트릭스에서 영상 또는 Scene 단위로 선택
- [ ] 실제 제품 reference와 canonical 캐릭터 확보
- [ ] 기준 이미지 생성·사용자 승인·canonical 저장
- [ ] Flow/Veo가 꼭 필요한 Scene만 선정
- [ ] Start Frame과 prompt 사전 QA
- [ ] Vertex/Veo 실제 생성 프롬프트를 영어로 작성
- [ ] 실제 사용시간에 가까운 최소 영상 길이와 종료 전 결과 hold 확보
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
- [ ] 최종 영상 승인 뒤 [COVER.md](./COVER.md) 기준 대표이미지 제작
- [ ] Cover Product QA, Feed Safe QA, DAESAN Brand Lockup 및 사용자 승인
- [ ] 플랫폼별 업로드 문구 제작과 별도 PNG Cover 적용 여부 확인
- [ ] 실패본 정리 전 코드 참조와 승인본 확인
- [ ] 프로젝트에만 필요한 복사본과 장기 재사용 canonical reference 구분
- [ ] 신규 실사 촬영본의 canonical library 승격 여부를 프로젝트 종료 전에 판단
- [ ] 정리 전후 용량과 보존 자산 기록
- [ ] `YY.MM.DD수정.md`에 실제 사용한 `DESIGN.md`를 Main·Scene별로 기록하고 final README/manifest 작성
- [ ] secret·credential 보안검사
- [ ] 관련 파일만 commit
- [ ] `origin/main` push와 최종 git status 확인

### DESIGN.md 사용 기록

각 프로젝트의 `YY.MM.DD수정.md`에는 실제 적용한 스타일만 다음처럼 기록한다.

```text
사용 DESIGN.md
Main: Notion
Scene 3: Linear
Scene 5: Framer
```

실제로 사용하지 않은 `DESIGN.md`는 기록하지 않는다. 이 기록은 건축자재 콘텐츠에서 효과적이었던 스타일과 실패 사례를 축적하는 근거로 사용한다.

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
| 2026-09-22 | v1.15 | 상단 버전 불일치 정정, 승인 Cover 최소 수정·시각 QA·재현 자산 보존, SNS 상세 설명·최대 5개 태그·프로모·공식 Clip 제한·별도 버전 재작성 기준 동기화 |
| 2026-09-22 | v1.14 | 완료 프로젝트 Slim Archive 절차 추가: 재현 가능한 node_modules 정리, 최종/Scene/TTS/Cover/소스 보존, 미추적 변경 선확인, Complete Bundle 기반 Git object 안전 정리, 무결성 검증 및 안전백업 사후 삭제 규칙 확정 |
| 2026-09-14 | v1.12 | Codex 토큰 소진 시 터미널 완전 대체 방법(Vertex REST 직접 호출, Pillow Cover 조립, OpenCV 알파 처리)과 터미널 명령어 전달 시 반복 실패 패턴 추가 |
| 2026-09-14 | v1.11 | 패딩 캐릭터 레퍼런스, OffthreadVideo 알파 필수 규칙, 대산 Cover 표준 템플릿 좌표 추가 |
| 2026-09-09 | v1.10 | Codex 역할 분담에 순수 기계적 실행(render, ffmpeg 등)은 AI 에이전트 없이 터미널 직접 실행 원칙 추가 |
| 2026-09-09 | v1.9 | 공통 운영 규칙 39번 및 대본·Scene 기획에 TTS와 무음 시청용 화면 자막의 별도 작성 원칙 추가 |
| 2026-09-09 | v1.8 | Flow 역할 분담 규칙 추가: GPT 프롬프트 작성·QA, 사용자 직접 생성·다운로드 및 결과 공유, Codex 최소 단위 후처리 |
| 2026-09-09 | v1.7 | Codex 토큰 절약 원칙에 실사/Flow 캡처 금지, 투명 PNG+ffmpeg 합성·TTS mux, concat 기본값, 진단 1회 후 우회 원칙 추가 |
| 2026-09-09 | v1.6 | Codex 운영에 토큰 절약 원칙 5개 추가: QA 범위 제한, 이미지 해상도 보정 통합·기본 후보 1장, Flow 후처리 통합 재확인, 여러 Scene의 마지막 통합 프리뷰 렌더 |
| 2026-09-08 | v1.5 | 표준 엔딩 음원·로고 원본과 음원 복사 경로 명시, Codex 최소모드 통합 지시·결과 보고 범위 규칙 추가 |
| 2026-08-21 | v1.4 | 슬림 복사, node_modules 재설치, flat Scene reference, 최소 생성 길이, 종료 전 hold, Vertex/Veo 영어 프롬프트 규칙 추가 |
| 2026-08-21 | v1.3 | 대산 Shorts Cover System 연결, 최종 영상 승인 이후 대표이미지·업로드·정리 흐름 추가 |
| 2026-08-20 | v1.2 | DESIGN.md reference library 4종 → 10종 확장 및 실제 스타일 사용 기록 규칙 추가 |
| 2026-08-20 | v1.1 | canonical reference 사전 확인과 장기 자산 승격·정리 절차 연결 |
| 2026-08-20 | v1.0 | 기존 Shorts 제작 기록 기반 최초 통합 |
| 2026-09-16 | v1.13 | 이미지/영상 생성 결과물 저장 경로 표준(assets vs references 구분) 추가, 영상 최종본과 Scene별 최종 이미지를 별개 보존 대상으로 명시 |

### Codex 사용 기본값 (2026-09-10 갱신)

- 기본값은 **터미널 직접 실행**이다. Codex는 다음 두 경우에만 명시적으로 사용한다:
  1. **Vertex AI 이미지 생성** — Google Cloud 크리덴셜이 Codex 환경에만 설정돼 있어 대체 불가능
  2. **Remotion 코드 애니메이션** — 비교 그래픽, 모션 등 실제 코드 작성·렌더 로직이 필요한 경우 (Python/PIL은 정지 이미지만 가능)
- 그 외 전부(TTS 생성, ffmpeg 트림·믹싱·워터마크 제거, 정지 자막/Cover 제작, 파일 정리, Git commit/push)는 터미널 명령어로 직접 처리하는 걸 기본으로 한다.

## 21. 패딩 캐릭터 레퍼런스 (2026-09-14 추가)

신규 에피소드 슬림카피 시 canonical 캐릭터 원본과 함께 여백을 추가한 패딩 버전도 항상 같이 복사한다.

- 원본: `public/references/characters/small-daesan-canonical-v1.png`
- 패딩본: `public/references/characters/small-daesan-canonical-padded-v1.png` (원본 대비 가로세로 1.6배 캔버스, 중앙 배치, 흰 배경)
- 근거: Flow에서 팔을 벌리는 등 큰 제스처를 생성할 때 원본 그대로 쓰면 팔이 프레임 경계에서 잘리는 문제가 반복 발생. 패딩본을 쓰면 여백이 확보되어 잘림 없이 생성됨.
- 생성 방법: Pillow로 `Image.new('RGBA', (w*1.6, h*1.6), white)`에 원본을 중앙 paste.

## 22. Remotion 알파 영상(OffthreadVideo) 필수 규칙 (2026-09-14 추가)

캐릭터 등 투명 배경이 필요한 영상을 Remotion에 배치할 때:

- `<Video>` 컴포넌트는 브라우저 video 태그 한계로 알파 채널을 렌더링하지 못한다. 반드시 `<OffthreadVideo>`를 사용한다.
- `<OffthreadVideo>`를 쓰더라도 **`transparent` prop을 명시하지 않으면 알파가 무시되고 흰 배경이 그대로 노출된다.** 예: `<OffthreadVideo src={...} transparent muted .../>`
- VP9 webm에 `-pix_fmt yuva420p`로 인코딩해도 실제 알파 채널이 보존되지 않는 경우가 있었다(ffmpeg 환경에 따라 다름). 인코딩 직후 `ffprobe -show_entries stream=pix_fmt`로 실제 `yuva420p`인지 확인하는 절차를 생성 직후에 반드시 거친다.
- 배경이 흰색/밝은 계열인 Scene에서는 알파가 깨져도 시각적으로 티가 안 나 문제를 놓치기 쉽다. 실사/어두운 배경 Scene에서 먼저 검증하거나, 모든 Scene에 캐릭터를 배치하기 전에 초록 배경 등 대비되는 색 위에 합성해 알파를 별도로 확인한다.

## 23. 대산 Cover 표준 템플릿 (2026-09-14 추가, 방염 시리즈 Ep1/Ep2 기준)

1080×1920 기준 기본 템플릿 좌표다. 사용자 최신 승인본과 최신 명시 지시가 우선하며, 변경 지시가 없으면 기존 승인 좌표와 Visual Grammar를 유지한다:

- **박스**: `(53, 341) ~ (770, 694)`, radius 36, 네이비 `#2B4356`, 불투명도 92%
- **카테고리 바**: `(90, box_top-62) ~ (98, box_top-32)`, 색상 `#EB674E`
- **카테고리 텍스트**: `x=114, y=box_top-62`, Pretendard-SemiBold 30px, 흰색
- **점 인디케이터**: 박스 우측 상단 `(box_right-60~48, box_top+29~41)` 활성(오렌지) + `(box_right-42~30, 동일 y)` 비활성(회색)
- **헤드라인**: `x=92` 고정, 줄간격 92px, Pretendard-Black 60px, 마지막 줄만 `#EB674E` 강조·나머지 흰색
- **로고**: 78×78px, 좌우 위치는 이미지 구도에 따라 가변
- **DAESAN 텍스트**: 심볼 기준 x+90, y+7, Pretendard-Black 46px
- **서브텍스트**: 심볼 기준 x+90, y+61, Pretendard-Medium 26px
- **주의**: 로고·텍스트 색상은 반드시 로고 파일 실제 색상을 스포이트해서 사용한다(`daesanlogo2.png` 실측 `#123628`). tokens.ts의 `daesanGreen`(`#146335`)과 미세하게 달라 혼용 시 색이 어긋나 보인다.

## 24. Codex 토큰 소진 시 터미널 완전 대체 (2026-09-14 추가)

Codex 토큰이 소진되거나 호출이 불가능한 상황에서도, 아래 작업은 전부 터미널에서 직접 처리 가능하다. Codex 재충전을 기다리지 않고 즉시 우회한다.

- **Vertex AI 이미지 생성**: Codex 없이도 `gcloud auth application-default print-access-token`으로 발급받은 토큰과 `curl`로 `aiplatform.googleapis.com/.../gemini-2.5-flash-image:generateContent` REST 엔드포인트를 직접 호출해 이미지 생성 가능. `x-goog-user-project` 헤더에 프로젝트 ID 명시 필수. `generationConfig.imageConfig.aspectRatio`를 반드시 지정해야 9:16 비율로 나온다(누락 시 정사각형 반환).
- **Cover 이미지 조립**: Python Pillow(`PIL.Image`, `ImageDraw`, `ImageFont`)로 배경 합성, 텍스트 오버레이, 로고 합성, 라운드 박스, 정사각 crop까지 전부 터미널에서 처리 가능. 폰트는 프로젝트의 `node_modules/pretendard/.../static/alternative/*.ttf` 실물 파일을 직접 참조.
- **캐릭터 배경 투명 처리**: OpenCV(`cv2`) + flood-fill 방식으로 처리(본 문서 22번 항목 참고). Codex 없이 터미널 python3 스크립트로 완결 가능.
- **Remotion 컴포넌트 코드 수정 및 렌더**: `.tsx` 파일을 `cat > file << 'EOF'`로 직접 덮어쓰거나 Python 스크립트의 `str.replace()`로 부분 수정한 뒤 `npx remotion render`로 직접 렌더. Codex 없이 완결 가능.
- **원칙**: Codex는 애초에 필수가 아니라 편의 도구였다. 터미널 직접 작업이 기본값이고 Codex는 선택 사항이라는 인식으로 전환한다. Codex 토큰 상태와 무관하게 작업이 막히지 않아야 한다.

### 터미널 명령어 전달 시 주의사항 (반복 실패 패턴)

- 긴 heredoc(`<< 'EOF'`)이 포함된 명령어는 한 번에 전체를 통째로 복사하지 않으면 셸이 다음 줄을 계속 대기하며 깨진다. 명령어를 여러 조각으로 나눠 주지 않는다.
- 사용자가 매번 복사하기 쉽도록 모든 명령어는 `{ ... } | tee /dev/tty | pbcopy` 로 감싸서 제공한다(터미널 출력과 클립보드 복사를 동시에 처리). 이 wrapping을 빠뜨리는 실수가 반복됐으므로 매번 명시적으로 확인한다.
- macOS 기본 `/bin/bash`는 3.2 버전으로 연관배열(`declare -A`)을 지원하지 않는다. `key|value` 형식 문자열 + `while IFS='|' read` 루프로 대체한다.

## 25. 이미지/영상 생성 결과물 저장 경로 표준 (2026-09-16 추가)

- 이미지·영상 생성 결과물(테스트·반복 시도 포함)은 예외 없이 `public/assets/images/`, `public/assets/video/`에 저장한다. Cover는 `public/covers/`, 전체 Preview 렌더는 `public/previews/`처럼 별도 목적의 폴더가 있는 경우 그 경로를 따르되, 그 외 캐릭터/제품/배경 등 생성 이미지·영상 테스트본은 반드시 `assets/images`, `assets/video`로 통일한다.
- `public/references/`는 이미 승인되어 여러 편에서 재사용하는 canonical 자료(실제 제품 사진, 확정 캐릭터 컷아웃, 시공 기준 diagram 등)만 저장한다. 진행 중인 테스트/반복 시도 파일을 references/에 넣지 않는다.
- 경로를 매번 동일하게 유지하는 이유: 새 버전이 이전 버전보다 항상 나은 건 아니므로(§14 승인본 복원 참조), 승인 전까지는 같은 경로 안에 버전을 그대로 쌓아두고 비교·복원할 수 있어야 한다. 경로가 매번 달라지면 정리 시 무엇이 최종인지 판단이 꼬인다.
- 정리(§18) 시 "영상 최종본"과 "Scene별 최종 이미지"는 별개의 보존 대상이다. 영상 최종본(final MP4)만 남기고 Scene별 최종 이미지까지 함께 삭제하지 않는다. 여러 버전이 쌓인 assets/images, assets/video 안에서도 각 Scene/항목의 최신 승인 버전은 개별적으로 판단해 보존한다.

**재발 방지 근거**: door-order-tips-v1(2026-09-16) 작업에서 캐릭터 테스트본이 `references/characters/`에 저장되고 Scene별 최종 프레임이 정리 중 함께 삭제되는 사고가 있었음. 원인은 테스트본 저장 경로가 references/로 흩어지고, 영상 최종본과 Scene별 최종 이미지를 동일한 것으로 오인했기 때문.
