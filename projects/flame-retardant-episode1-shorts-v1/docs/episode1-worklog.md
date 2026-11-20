# 방염코팅 1편 작업기록

- 최종 영상: `public/previews/flame-retardant-episode1-full-v1.mp4`
- 최종 실측 길이: `36.416초` (운영 표기 `36.4초`)
- 최종 커버: `public/covers/flame-retardant-episode1-cover-final.png`

## Scene별 최종 채택 파일

| Scene | 화면 자산 | 음원 | 확정 길이 |
|---|---|---|---:|
| 1 | `public/assets/video/scene01-veo-v2-trimmed.mp4` | `public/assets/audio/scene01.wav` | 3.233초 |
| 2 | `public/assets/video/scene02-veo-v2-trimmed.mp4` | `public/assets/audio/scene02.wav` | 5.167초 |
| 3 | `public/assets/video/scene03-flow-v1.mp4` | `public/assets/audio/scene03.wav` | 4.933초 |
| 4 | `public/assets/images/scene04-start-v11.png` | `public/assets/audio/scene04.wav` | 5.300초 |
| 5 | `public/assets/images/scene05-start-v2.png`, `scene05-place-v2.png`, `scene05-place-v3.png` | `public/assets/audio/scene05-v2.wav` | 5.900초 |
| 6 | `public/assets/video/scene06-veo-v2.mp4` | `public/assets/audio/scene06.wav` | 6.167초 |
| 7 | `public/assets/video/scene07-daesan-ending-final.mp4` | `public/assets/audio/scene07-ending.wav` | 5.667초 |

## 주요 시행착오

- Scene1 TTS는 쉼표 pause가 붙어 들려 문장을 두 구간으로 생성하고 0.18초 무음을 결합했다. 최종 TTS 실측은 2.536초이며 hold 포함 97프레임으로 확정했다.
- Scene5 TTS는 장소명이 붙어 들리는 문제를 해결하기 위해 장소별 발화를 분리하고 쉼표마다 0.22초 무음을 적용했다. 최종 TTS 실측은 5.187초이며 hold 포함 177프레임으로 확정했다.
- Veo 캐릭터 장면은 입 모양 변형, 팔 자세 변화, 상하 검은 여백 문제가 반복되어 안정 구간 순수 트림, 마지막 프레임 freeze, scale-up crop으로 정리했다.
- 커버 1차는 신규 Vertex Visual의 상·하단 분리감과 canonical 불일치가 문제였다. 2차는 Scene3 전체 프레임과 캐릭터 합성에서 실험 지그가 과도하게 강조됐다. 3차에서 Scene3의 판재·불꽃·토치만 누끼 처리하고 우측 bleed로 확대 배치했으며 canonical 대산이를 하단에 배치해 최종 후보 B를 채택했다.
- 커버의 한글 타이포그래피와 승인 DAESAN 로고는 COVER.md의 역할 분리에 따라 Codex 후처리로 합성했다.


## 2026-11-20 테스트 산출물 정리

- UPLOAD_FINAL_VIDEO `public/previews/flame-retardant-episode1-full-v1.mp4`
- UPLOAD_FINAL_COVER `NEEDS_APPROVAL`
- UPLOAD_FINAL_SNS `NEEDS_APPROVAL (docs/episode1-sns-copy.md)`
- SHA256 `public/previews/flame-retardant-episode1-full-v1.mp4` — `bb0053013f75d0c86cbe438897c623d415726786e2bcc82438eb5e6b4bd21763`

Git 추적 파일 6개 삭제. 삭제 전 할당량 9,117,696 B. 삭제 전후 보존 파일 170개의 SHA256 일치.

- `public/assets/video/scene06-veo-v3.mp4` (1,441,792 B) — episode1-worklog.md 최종 채택표와 Scene06 코드가 v2 선택. S1·2 v2 트림 원본 보존. 독립 Veo 시도본.
- `public/assets/video/scene06-veo-v1.mp4` (1,417,216 B) — episode1-worklog.md 최종 채택표와 Scene06 코드가 v2 선택. S1·2 v2 트림 원본 보존. 독립 Veo 시도본.
- `public/assets/video/scene01-veo-v1.mp4` (1,454,080 B) — episode1-worklog.md 최종 채택표와 Scene01 코드가 v2 선택. S1·2 v2 트림 원본 보존. 독립 Veo 시도본.
- `public/assets/video/scene01-veo-v3.mp4` (1,576,960 B) — episode1-worklog.md 최종 채택표와 Scene01 코드가 v2 선택. S1·2 v2 트림 원본 보존. 독립 Veo 시도본.
- `public/assets/video/scene02-veo-v1.mp4` (1,429,504 B) — episode1-worklog.md 최종 채택표와 Scene02 코드가 v2 선택. S1·2 v2 트림 원본 보존. 독립 Veo 시도본.
- `public/assets/video/scene02-veo-v3.mp4` (1,798,144 B) — episode1-worklog.md 최종 채택표와 Scene02 코드가 v2 선택. S1·2 v2 트림 원본 보존. 독립 Veo 시도본.

기존 후보 중 보류 0개. 추가 검토 항목은 승인·의존성 확인까지 보존. 전체 작업의 데이터 볼륨 가용 공간 관측 차이 0 B.
Git 이력은 이 절을 추가한 커밋 `Remove verified Shorts test outputs and record archive checks`에서 조회한다.

## 2026-11-20 · 승인본 경로와 Slim Archive 후속 점검

- UPLOAD_FINAL_VIDEO `public/assets/video/flame-retardant-episode1-shorts-v1-final.mp4`
- FINAL_SCENES 승인 구간·독립 파일 대응 확인 대기
- UPLOAD_FINAL_COVER 승인 확인 대기 · `public/covers/flame-retardant-episode1-cover-final.png`
- UPLOAD_FINAL_SNS 승인 확인 대기 · `docs/episode1-sns-copy.md`

파일명 변경 전후 SHA256·바이트·해상도·FPS·프레임 수를 대조했다.
- `public/previews/flame-retardant-episode1-full-v1.mp4` → `public/assets/video/flame-retardant-episode1-shorts-v1-final.mp4` · 9390664 B · 1080×1920 · 30/1 fps · 1091f · `bb0053013f75d0c86cbe438897c623d415726786e2bcc82438eb5e6b4bd21763`

신규 삭제 0건. 개별 삭제 승인과 잔여 파일 판정 대기.
- 개별 Scene 승인·최종 화면 및 조립 입력 대응 확인 필요

## 2026-11-20 승인 자산의 휴지통 이동

통합 후속 보고서에서 이 프로젝트에 승인된 파일을 원래 상대경로 그대로 이동했다. 아래 SHA256은 이동 전 Git 보존본과 원본, 이동 후 휴지통 사본에서 일치했다. 원래 경로 부재 확인. 실패·보류 0개.

| 프로젝트 상대경로 | 바이트 | 이동 전후 동일 SHA256 |
|---|---:|---|
| `public/assets/images/scene01-frames/f_0.00s.png` | 214682 | `46c1301de5fe246bd124ce2637a56ae3e03da2c483043bf215469250c0e1788a` |
| `public/assets/images/scene01-frames/f_0.25s.png` | 228677 | `b202e0e18b37ac7225ac2fa10cfb89491b8076f23929cd07d98ee06723326010` |
| `public/assets/images/scene01-frames/f_0.50s.png` | 253148 | `8d880208b2344bea2f387fe799421c7fe4f7a644feaf910676a683a6f199cc7b` |
| `public/assets/images/scene01-frames/f_0.75s.png` | 302311 | `bd07eccfc8420d593ad5132ca23cb4df361d68809ae95b1a38a198499d74d8c1` |
| `public/assets/images/scene01-frames/f_1.00s.png` | 308825 | `84b922d2353e09468741a7df73f5f829cc5b2eb251ecb29aeadef271278e4204` |
| `public/assets/images/scene01-frames/f_1.25s.png` | 322635 | `bcb7ba9c2c3959ff9d91011a8cfde22a2e0afa534e6c56dd8cebfa3ffb06614b` |
| `public/assets/images/scene01-frames/f_1.50s.png` | 321174 | `74614547d93e5764d5fec170f7093bd3b0022241d3f026bd8adfed700f5380a3` |
| `public/assets/images/scene01-frames/f_1.75s.png` | 333785 | `0724c0fb99e47c050a0c9f9010cd0f91f95d055497e675761682ffb3315beca2` |
| `public/assets/images/scene01-frames/f_2.00s.png` | 335747 | `568316f123824b777e12bddaf7a50aaec5921c825c1ef141f05ea41feec1b3b3` |
| `public/assets/images/scene01-frames/f_2.25s.png` | 346827 | `741cc79fffc8675cb94b26b050636ec396df13dfb75d8a5e491098fe15f0fd79` |
| `public/assets/images/scene01-frames/f_2.50s.png` | 350977 | `62227ffd23a436a339c8f4fcc09ce3fab92a524a6f1b4e22528c7b0656367832` |
| `public/assets/images/scene01-frames/f_2.75s.png` | 385187 | `8f364aa2f57e5c0a49b36e95b80425efe6cf117ab90284e339bfb4765dc0d834` |
| `public/assets/images/scene01-frames/f_3.00s.png` | 379054 | `545779ebbf8748e64b4bda306238e0fb1d70d18fb044ecbb2cf453c1c22d3384` |
| `public/assets/images/scene01-frames/f_3.25s.png` | 383773 | `aa9964856659e04265c8408a62c5cdf1e7ec236993688627c1bd03348906ce3e` |
| `public/assets/images/scene01-frames/f_3.50s.png` | 376635 | `bee76ec1fe6b25602d94d491d53084ff28dbf3d26215aeba1186193d16295701` |
| `public/assets/images/scene01-frames/f_3.75s.png` | 385734 | `8f58fd265f9195f81724a55bb0f64ae37375f377bab19ab4308d03ce20267da4` |
| `public/assets/images/scene01-frames/f_4.00s.png` | 383857 | `95e88acc3a932fc01116d0ec7a497da79ac0775b0ebe4a8a6e49b6819f3e7d8a` |
| `public/assets/images/scene01-frames/f_4.25s.png` | 392396 | `c0d245946499a3cf068a559468a08547646326d776e279c15c8556a98e9f3788` |
| `public/assets/images/scene01-frames/f_4.50s.png` | 387866 | `728953fb57df53880b038df43022cac6e264f1ce22b535f249632ae44bd56830` |
| `public/assets/images/scene01-frames/f_4.75s.png` | 396970 | `bc986b4f7b843bde940267c75308aa37be4aafdc81433f608d0d803c51409c8f` |
| `public/assets/images/scene01-frames/f_5.00s.png` | 402775 | `b2c75d6e78bde858b0636c0cdf166ce35805812875291cedbe45658ded20daec` |
| `public/assets/images/scene01-frames/f_5.25s.png` | 424159 | `52cfb66171dc67a41a5ddae453a871c4bf77452430f8a6c399d77222c072cb5a` |
| `public/assets/images/scene01-frames/f_5.50s.png` | 411410 | `82401ce8ce768da31ecd92b4b25491d9ae2890a584fb22b4acbc36718342dca6` |
| `public/assets/images/scene01-frames/f_5.75s.png` | 404274 | `c9adc69512a570cebccab2afb66d3b3e106ec7c53809a121b58fb4dd0f95b8a4` |
| `public/assets/images/scene01-frames/f_6.00s.png` | 401699 | `4bbd3d0a2525b587f28face6b9aace798c8e7c89634e6e172be10c3387c9bdd8` |
| `public/assets/images/scene01-frames/f_6.25s.png` | 407485 | `ec44ec79163306bf9d0b1810f1ae40ac84efcec9efdbbf4bbafbbb29c01f4118` |
| `public/assets/images/scene01-frames/f_6.50s.png` | 410403 | `782bd6a13289aa1c80cc242ab41edb371a31545650b350286c7817e0ea938b9d` |
| `public/assets/images/scene01-frames/f_6.75s.png` | 424751 | `125886a1ca2eb25e6d237dfdba7884fe606856f72c8089b25fd267c70996fac0` |
| `public/assets/images/scene01-frames/f_7.00s.png` | 409022 | `26ca7a570ef721499af658eea9d638fa62198e3288c740bad36851a5a6528bb3` |
| `public/assets/images/scene01-frames/f_7.25s.png` | 412157 | `c6f5cc43970efb41ab10309bb395b42b7e67cfbbabf912e30d782d9c938466f9` |
| `public/assets/images/scene01-frames/f_7.50s.png` | 406524 | `818bdb855bcb53304cac0dc55d10fdbd50435f3e48f2796accbf088778b4d873` |
| `public/assets/images/scene01-frames/f_7.75s.png` | 416251 | `10f86d8470d5e366fc5a05171ee03c39b9abd14d15e726bb4cd8069399b7e316` |
| `public/assets/images/scene02-frames/f_0.00s.png` | 232412 | `a904f072596cac6b019bc6ea78d5bf6b1ee062a86f750fb06dbba482ba42f9f5` |
| `public/assets/images/scene02-frames/f_0.25s.png` | 257718 | `a3ca401ab191a869efe2d727cd0fbbe585404a762cf2a151e61edf4892deb51d` |
| `public/assets/images/scene02-frames/f_0.50s.png` | 288018 | `d26de0d15e1ccdbb8c5c70fb133825a9fed83e022e6d35ae8acc6074a69f3c36` |
| `public/assets/images/scene02-frames/f_0.75s.png` | 319484 | `d9ea7b18d7a370e6db4ed28be7a687da01e917b0b77c8c99573277d78ebd59e3` |
| `public/assets/images/scene02-frames/f_1.00s.png` | 332170 | `8ab8209e75307f1807b084fd2a8f628604cc3b12b5d0555d43c669044240fb8a` |
| `public/assets/images/scene02-frames/f_1.25s.png` | 350517 | `e1348a32e707db8d25dbc851f6bb5d1b739b2f24c1f15119ac077cd6ca57c1bb` |
| `public/assets/images/scene02-frames/f_1.50s.png` | 351968 | `ca54cc91f8f15e54cd90a93549017ac08b55a247cf40a18969f34a197339912d` |
| `public/assets/images/scene02-frames/f_1.75s.png` | 370386 | `469d6bfc2136dfdd07fcf97a7c8aff891391ba77e765eb666cd3b053fae8593d` |
| `public/assets/images/scene02-frames/f_2.00s.png` | 376584 | `23b5005fd29b916287fa87602b2147ba0b0a495fbea809311d433fab755c938a` |
| `public/assets/images/scene02-frames/f_2.25s.png` | 384739 | `8c935be3d943c1922a50516a79e3edb79acc7b1747e3eeed3fa703d52672fe57` |
| `public/assets/images/scene02-frames/f_2.50s.png` | 378852 | `21edfb6eb2634322161ee1b7182e6f8058cf7ca49f8ed644e72a0cd379bbdc94` |
| `public/assets/images/scene02-frames/f_2.75s.png` | 403193 | `751019388476fc7a25a6b1af260170df65a3446e56f20f2d6bff0d733ded2622` |
| `public/assets/images/scene02-frames/f_3.00s.png` | 396464 | `954721fd118f87fbb16a27ffaab7e53946d36ffe8980cdaa7f17815dae402b91` |
| `public/assets/images/scene02-frames/f_3.25s.png` | 407441 | `6fcb71def5f4e9ddbe0d9ec135039f5250fe852961a910ca6191eb60579be871` |
| `public/assets/images/scene02-frames/f_3.50s.png` | 410524 | `86e05d306f6a2ccae35754a59d1c10ad39d753d68e05558cb660e08266ebcc01` |
| `public/assets/images/scene02-frames/f_3.75s.png` | 416665 | `947d3b86bae1ef867b04309ed40373595df24c69594626d963d225287d2768b1` |
| `public/assets/images/scene02-frames/f_4.00s.png` | 416099 | `6ff351004e202ca96cff145a6e0cbdd8fb6c4fa6e31019c8d206bef7b8d2a580` |
| `public/assets/images/scene02-frames/f_4.25s.png` | 414178 | `6397da8bb26ce13f6a8fa21d317fa305f7112ef3aaa4fe856696b34f073d210c` |
| `public/assets/images/scene02-frames/f_4.50s.png` | 422902 | `21ce17fe24d3a166e255e6edd39cec253d2921f48728179aeab5cf1308a7e467` |
| `public/assets/images/scene02-frames/f_4.75s.png` | 418300 | `3fd2024c84b62fe59bfc9c07d5250622ea3b8bf3b81aee914fffbb6e0653541b` |
| `public/assets/images/scene02-frames/f_5.00s.png` | 425581 | `d7bda47c0d3f79c4a24e00a6768d1280381241393c620facb9890f1dc0077159` |
| `public/assets/images/scene02-frames/f_5.25s.png` | 433576 | `edf116ba90aae7e26c78d9c3aeb59abf5d51c0cc531388108911ed7f732d8b83` |
| `public/assets/images/scene02-frames/f_5.50s.png` | 426903 | `75aab5e2518ebabca91fdaaa0544bed2f34029b45cb59c042ff62409cd07b61b` |
| `public/assets/images/scene02-frames/f_5.75s.png` | 417390 | `df3687b496722f780c9ba7680e3173b0f760655d5fb6bb7f6c09910635efcc0f` |
| `public/assets/images/scene02-frames/f_6.00s.png` | 413394 | `de1aa4580f287a7e1acab742091de65afcee7f3e9a3864b193733405343c4ca8` |
| `public/assets/images/scene02-frames/f_6.25s.png` | 419703 | `98d7a7285383c2460335ee183d78a14be9e2a278392ff956a3a4a474da7af650` |
| `public/assets/images/scene02-frames/f_6.50s.png` | 417015 | `9bf9ca9e3bb068f62fbdc7ee06f5ceecfc1cdc345025ecc4c57438d73fc2cfc6` |
| `public/assets/images/scene02-frames/f_6.75s.png` | 422829 | `3d744f6fbf4097d1d1360a217497db5b0a560b891e30fcf2f393a2291c7c4b35` |
| `public/assets/images/scene02-frames/f_7.00s.png` | 414316 | `891e715cd953091f4a81ec71a74eaefda495546fe88b28792bb6861a45b4c3d1` |
| `public/assets/images/scene02-frames/f_7.25s.png` | 418425 | `d01c2332f490f845d58df6c7e0ed488763f3f031176ebe6346c7f7f0d831d495` |
| `public/assets/images/scene02-frames/f_7.50s.png` | 410797 | `e0a9b9863e07a5415222bd5659d9fc68438d0c22709a8dda55f10e975297bb63` |
| `public/assets/images/scene02-frames/f_7.75s.png` | 414511 | `57500c8dd297339cd47fe4438c9b79f6de58713d7d19c59936baf6719b5cbd06` |

- `~/.Trash/flame-retardant-episode1-shorts-v1-cleanup-20261120/`에 64개, 24,104,224 B 보존. 프로젝트 일반 파일 170 → 106개(실행환경 제외).
- 작업기록 갱신 전 비대상 106개 모두 이동 전후 해시 일치. 최종 통합 영상 `public/assets/video/flame-retardant-episode1-shorts-v1-final.mp4`의 SHA256은 `bb0053013f75d0c86cbe438897c623d415726786e2bcc82438eb5e6b4bd21763`.
- 최종 통합본 및 assets/video의 MP4 전부 영상·음성 전체 디코딩 성공. Scene 1·2 트림본 및 입력 원본, 최종 구성 요소 보존. 독립 Scene MP4 전 장면 확보 여부는 별도 검증 대상.
- 2편 합산 동일 볼륨 가용 공간 714,272,256,000 → 714,272,591,872 B. 차이 +335,872 B의 원인은 미확인.
- Git 반영은 두 프로젝트의 이동 경로와 작업기록만 포함한다. 이 절의 실제 커밋·원격 push 검증 결과는 종료 보고에서 확인한다. 보존 지시 철회와 추가 정리는 별도 승인 대상이다.
