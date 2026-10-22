# 스텝도어편 누락 정리 사전 점검

프로젝트: `/Users/janghokim/Documents/short-movie-agents/projects/younglim-stepdoor-types-shorts-v1`

2026-10-21 작업기록의 최종 승인 및 SNS 원문 확보 완료를 확인했습니다. 최신 공통 지침 §8, 운영 가이드 §18, MONOREPO_WORKFLOW 정리 승인 규칙을 적용했습니다. 기존 4개 프로젝트는 변경하지 않았습니다. 삭제·이동·렌더·Git 변경은 실행하지 않았습니다.

현재 전체 논리 용량 886,623,382bytes (845.55MiB), node_modules 362,124,838bytes 포함. 후보 108개 / 307,643,916bytes (293.39MiB). 후보 정리 후 예상 578,979,466bytes (552.16MiB). 보고서 작성 전 측정이며 실제 디스크 할당량과 다릅니다.

## 최종 보존 결과물

- Preview: `public/assets/video/younglim-stepdoor-preview-v8.mp4` (기존 QA 54.300초/1629프레임).
- Cover: `public/covers/younglim-stepdoor-cover-v3.png`.
- SNS: `docs/sns-copy.md` — SHA256 `498f1c999e927cadfbd31e3ce9af0d5dfa3805f80300b96062071fda4e85a317`.
- Scene: S1·2·4 v7 / S3·5·7 v5 / S6 v8.
- TTS: S1~3 v3-mix.wav / S4~7 v4-mix.wav, 해당 원본 MP3도 보존.
- 승인 manifest 13개 파일의 실제 SHA256 전부 일치. 개별 Scene 파일 존재 확인.
- 전체 소스·설정·package/lockfile·공통 엔딩·간판·폰트·로고·Canonical·공식 PDF/출처·날짜형 작업기록은 보존. 이번 후보는 지정된 결과물 경로만 포함.

## 이전 후보와 달라진 판단

- 이전 90개를 그대로 승인 목록으로 간주하지 않았습니다. v8 무음 영상은 최종 조립 직접 입력으로 보존합니다.
- 확장형 space-v2, 더블기본형 space-v1/v2는 승인 이미지의 실제 편집·참조 원본 계보로 보존합니다.
- 이전 TTS 및 통합 청취 QA는 승인 원본·믹스와 구분해 후보에 추가했습니다. preview-v2-approved-sequence.wav는 v8 조립이 재사용하므로 보존합니다.
- 최종 소스는 v8만이 아니라 실제 채택 Scene의 v5/v7 구현 및 timing-v2와 조립/Cover 소스를 확인했습니다. 리터럴 참조는 출력·미사용 분기도 포함할 수 있어 단독으로 사용 여부를 단정하지 않았습니다.
- 기존 QA 문서 언급은 중간 결과물을 영구 보존하는 이유로 적용하지 않았습니다. 과거 버전/실패 후보 재현 및 비교 링크는 정리 후 손실될 수 있습니다. 최종 재렌더 검증은 수행하지 않았습니다.

## A. 최종 승인 — 20개 / 45,951,671bytes

| 정확한 프로젝트 상대경로 | bytes | SHA256 | 근거 | 최종 소스 문자열 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/video/scene01-v7.mp4` | 373842 | `9b2460a33fa249e8942908025a9e0747f8d2e29b6cf385a649a333208d924909` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/scene02-v7.mp4` | 2409925 | `fae9f460c68c977f8daba6073f2123a035087ef0e9500eace8e25369be8fd56b` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/scene03-v5.mp4` | 2150207 | `cc260b8e27502847ca0b575299e44437e01ffaec3a9039d88f04f73c1d68bc79` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/scene04-v7.mp4` | 811124 | `829a9a22a14b4a85946fbb92cdcda8c0ff92aa02cf67fd4cb2fd7c172ea0eabb` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/scene05-v5.mp4` | 401733 | `9ad8a678ccf89eb0ee6d39c69c5bc0ea8d3b2ba801101fa7b0ef5ed5b732f1d8` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/scene06-v8.mp4` | 554605 | `fe7b4467373eb377c21bcb7f96780e1b8838bf5704ba9c3159b2e66a6fecee82` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/scene07-v5.mp4` | 243484 | `2aca5ffea60be9c8f12514a4378388d31338ac32bd5ebc1770bed0ed999c8d0b` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/video/younglim-stepdoor-preview-v8.mp4` | 16237012 | `f341dd82bea1dc376e574481c5e8d4ffa0d5ea46712110b1ccf7b7bba56ce746` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | scripts/assemble-qa-v8.py | tracked |
| `public/assets/audio/scene01-tts-v3-mix.wav` | 1534566 | `2b47d47e8d21177fd087cd273af2db5605c93cae97f804136eaebee9ba462e78` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/audio/scene02-tts-v3-mix.wav` | 1963110 | `62dd6adfd00715f8106d69258221c46d36dd1b0835aa083812655258b8aaba0a` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/audio/scene03-tts-v3-mix.wav` | 1769574 | `0d1cf75ca6eaca86ebdc74282fcda37b854e2b7f9f3f5e9b597977e10f08bbf4` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/audio/scene04-tts-v4-mix.wav` | 2661222 | `2e91d5a55bb71b63acb654268853987f36cbaee77bdf0f8da228cc53e4eb72a1` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/audio/scene05-tts-v4-mix.wav` | 1645158 | `15be052532cbbe34ff137799fc9eb4fa6d4de2a0ede5634b959e92cf8bddd2f8` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/audio/scene06-tts-v4-mix.wav` | 2308710 | `65f34bc839c42f1bb405c80bbe1b6d5b8235db7e8265ff5a1eddf2b61b8b2b64` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/audio/scene07-tts-v4-mix.wav` | 1658982 | `97acc67b599e2627244b1acaa88231f131515c9f964c13bb7c86164a2ca94a16` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/timing-v2.json | tracked |
| `public/assets/images/younglim-step-basic-unified-v1.png` | 1860116 | `d114ce502b45051d44c953f16852b6f51b76ffe4a968c86afa2d564ad2d95507` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/index-v8.tsx, src/index-v7.tsx, scripts/render-cover-v3.py | tracked |
| `public/assets/images/younglim-step-double-expanded-space-v1.png` | 2048904 | `d7d7dccf36b89a268d85abb68ed64091e13a04fa00a9b81ce632d3bb6757a4e8` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx | tracked |
| `public/assets/images/younglim-step-expanded-space-v3.png` | 2095583 | `550fae6eb27370539367a7a84dcdd383c66f78a7229323e219520dc699e2f2be` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx, scripts/render-cover-v3.py | tracked |
| `public/assets/images/younglim-step-pocket-space-ai-v1.png` | 1941238 | `44fe165b41b2cbfd2f9db7747b7aa4c936b0f467fb5f14ceec2a27543713c77f` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx | tracked |
| `public/covers/younglim-stepdoor-cover-v3.png` | 1282576 | `57fa187048b0d24e9b27bd32295b33f41b3eeb4ac889c7306e4e6d027f61e588` | 최종 승인 결과물/Scene/TTS (10월21일 기록 및 v8 조립) | scripts/render-cover-v3.py | tracked |
## B. 직접 의존/원본/최종 QA 보존 — 29개 / 43,879,046bytes

| 정확한 프로젝트 상대경로 | bytes | SHA256 | 근거 | 최종 소스 문자열 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/video/younglim-stepdoor-picture-silent-v8.mp4` | 14944243 | `08bc7ae2a0558bd93d5670a0ef621ea0aabbc7e33a912c357fde83d6856d9725` | 최종 assemble-qa-v8.py가 읽는 직접 입력 | scripts/assemble-qa-v8.py | untracked/ignored |
| `public/assets/audio/preview-v2-approved-sequence.wav` | 15638502 | `fa8d7369a80408da7180cc2cccd875b95712489d95ba65ce9c6b8ab67b4247e8` | 최종 assemble-qa-v8.py가 읽는 직접 입력 | scripts/assemble-qa-v8.py | tracked |
| `public/assets/audio/scene01-tts-v3.mp3` | 21312 | `3ea015ed700b3ce60feaf49b589824613ad473be570d04453293360f283ff81b` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/audio/scene02-tts-v3.mp3` | 27264 | `90ebbb775a36d32e716c483d2cca4ce19705290142709839ac76b8cfa08fd08f` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/audio/scene03-tts-v3.mp3` | 24576 | `0cd5712bdfadbd737473a352642216a014401f9f2b76e6608c3dd0d0b0fff397` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/audio/scene04-tts-v4.mp3` | 36960 | `001f0a874dfbadf9febdeb05fe0c6efd164d4b1fb2b19400b284c1a7d660c136` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/audio/scene05-tts-v4.mp3` | 22848 | `5c29fc632ed1ce2e3a60dbdaa59258a671d93d655f4b582a4a6cbbb221de2fda` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/audio/scene06-tts-v4.mp3` | 32064 | `c79590bebb1823bd467eac1151cf9325a6b62c6cd6bec7c3047ec5b81c7098c4` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/audio/scene07-tts-v4.mp3` | 23040 | `cbb23e50be94c090ec7f46ed37be00d6931b65c910d3f6bff2e253ae16ee3b31` | 승인 믹스의 생성 원본 MP3 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/double-section-detail.png` | 36411 | `ff3d9423768aaabe839301840d022440e34ddb5144a9962be71296e978e73fdd` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx | tracked |
| `public/assets/images/official-basic-space.jpg` | 731472 | `09c3d07312ea8e4cf8d5d4ccb8bfe53a46ae5db7572314840ed366177ea29a3f` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx | tracked |
| `public/assets/images/official-double-section.png` | 48459 | `a1404693be5e7077298a3b1bdc8ad8d8371a7f743cf6e1d71f7324f4ff568f53` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/official-four-types.png` | 880652 | `af7fe91e44cbe4521258e15d30ea568927fff939b42e41201c4c2efa71a75857` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/official-pocket-motion.jpg` | 50699 | `a4e114442cdc82d68e02a44c9c086e9a80a0b20238d67757093d6ba0e2cf5643` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx | tracked |
| `public/assets/images/official-pocket-space.jpg` | 304596 | `6dd63995e2c0202962365acf6b879560d770ac98b96cadd0bc966ad7adb64958` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | src/index-v8.tsx, src/index-v7.tsx, src/index-v5.tsx | tracked |
| `public/assets/images/preview-v8-scene06-qa.png` | 474877 | `9d95b05afcdeafa63f71a5158a96af8b2d98eaa0922a44411195090b48d7e267` | 최종 승인본의 최소 QA 증빙 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/type-1.png` | 212073 | `86dbe1c0591b06b595c3db7c7b06477b3460480d98ed98357fa8e7a78ebd5b84` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/type-2.png` | 208788 | `c544d9f8aa7b623d035f4fbaf453ca9d1b09d94917363c44b5bd1cf0091d7564` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/type-3.png` | 204176 | `444fe8d4721b6590e7759e045db7c13c2bf5cfde5ee600413dc769555c0361aa` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/type-4.png` | 199832 | `bb2414c6e2ac71d18d989f39eb4e121814be60380deba6a38040a81f7c59c8cf` | 공식 Reference/최종 동적 type 이미지 및 단면 자료 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/assets/images/younglim-step-basic-unified-qa-v1.png` | 779393 | `90041203e4995338ba76c89d594c450a583e3307afa2388887fb9734e8ed8ea2` | 최종 승인본의 최소 QA 증빙 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-double-basic-space-v1.png` | 1935425 | `87b036e9529abc5991acf3a176967368acd21737fde9c6026acdc2363c4c3952` | 승인 AI 이미지의 실제 참조/국소편집 원본 계보 (10월20일 기록) | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-double-basic-space-v2.png` | 1775189 | `980825d46c30c1faee9b94dac79d0bcd4dc59bf8688db974bd1082dcef3f63e7` | 승인 AI 이미지의 실제 참조/국소편집 원본 계보 (10월20일 기록) | src/index-v5.tsx | untracked/ignored |
| `public/assets/images/younglim-step-expanded-space-v2.png` | 2184679 | `f98229ececadfb1a90ee53e0f9fa5ad8fa9ae9531b605d7e9109454d42ef1bd2` | 승인 AI 이미지의 실제 참조/국소편집 원본 계보 (10월20일 기록) | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v3-1x1.png` | 696639 | `fd1d8827d1071e45f050bfc9c19b4c7f9eb19e31ec1c5064ee56b6e92f646ba6` | 최종 승인본의 최소 QA 증빙 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/covers/qa/younglim-stepdoor-cover-v3-3x4.png` | 967823 | `fe3081ab1afdc556a196d46c5a407b03143e8907cf818835a07f6fdc14091cff` | 최종 승인본의 최소 QA 증빙 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/covers/qa/younglim-stepdoor-cover-v3-4x5.png` | 909992 | `8add84a9c259068a8f5c4b60cf13aefd22ee5b5f70e72dcc1cf06faf7ce90fdf` | 최종 승인본의 최소 QA 증빙 | 없음; 동적 경로는 본문 근거 확인 | tracked |
| `public/covers/qa/younglim-stepdoor-cover-v3-mobile-qa.png` | 506863 | `675f079c35fce4a72bda26c60c81070dc5fe2047e957460374f9be0a3b4dbe54` | 최종 승인본의 최소 QA 증빙 | scripts/render-cover-v3.py | tracked |
| `public/covers/qa/younglim-stepdoor-cover-v3-pixel-qa.json` | 199 | `9a02b59a8e79e392a1ec4f224d5039a19c4f5902e586b829c6e10cb1b82df45e` | 최종 승인본의 최소 QA 증빙 | 없음; 동적 경로는 본문 근거 확인 | tracked |
## C. 정리 후보 — 사용자 승인 필요 — 108개 / 307,643,916bytes

| 정확한 프로젝트 상대경로 | bytes | SHA256 | 근거 | 최종 소스 문자열 참조 | Git |
|---|---:|---|---|---|---|
| `public/assets/video/scene01-v1.mp4` | 262435 | `58bbed07926cd62bff458d5952666effeaee5d7fdc8a16db4cd37ff8ff839099` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene01-v2.mp4` | 256093 | `6dd7e90f2294d848430416a1400a0c9cf3d613d34967a38b1702ea2e84d7cb75` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene01-v3.mp4` | 283404 | `a72ba1147daeb11850b80b59576588da2f81fd40f4db174b0da92725d7dbe6d9` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene01-v4.mp4` | 288411 | `9fb342a269017a2622db39d9566e753c6de8c4d75315666a238ae7db610b7883` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene01-v5.mp4` | 378604 | `7717da6f936cad764e6321751ed402eb794817c4cf2fa7cbac5f3b20c623410f` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene01-v6.mp4` | 384380 | `6f850f50df0297453a91e8e254f379b8b0469b21adc377b0eb389192989a7fbf` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-label-qa-v3.mp4` | 2947214 | `95e8ea1cb5c357b30ceb9239e69ddac31defa00f12fe36967e9cd2994b5e6838` | 라벨 추적 테스트/비교 QA 또는 완료본으로 대체된 불완전 조립본; 최종 직접 입력 없음 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-v1.mp4` | 2777192 | `344a76fd07ef1305ba2b2eb1708eacf8201d13e911d28259cfa65180cbaab518` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-v2.mp4` | 2894698 | `b0a734a3e3af4a03c8334dba45d6441f45fd1879590f9c202befdc916c929cb7` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-v3.mp4` | 2945956 | `a1331759ac1f2bb2948d12a7ee8ae192562a4d8d9254c69d424cd817a9acf05a` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-v4.mp4` | 2952839 | `ded9c4997beb2ce92ed60357e23034996f06c5438b8453947e8202a67237b950` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-v5.mp4` | 3047871 | `0c6165c59fb74b2eae4d99c94a7e21f8d9ea38bfacedc02c45e74925635b1ba0` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene02-v6.mp4` | 2477967 | `7c6161ddd193a7ce56067f8fdc7a854a8cfdf461876e90de531aa0cf95da71ab` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene03-v1.mp4` | 234535 | `7ac2dcfa2013252f1f637875a0256ea2c76b77ad0242d6f72d0e3aac8ef603fc` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene03-v2.mp4` | 248354 | `10743de0a14d54effae48e4dd974a6ba25837bdedcc982cd755c7c03c244b36b` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene03-v3.mp4` | 1696938 | `4a5bdeaf83b6d29b34d87a5ae8132788404220e43f44b5316146c5216d32c997` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene03-v4.mp4` | 2014178 | `2f3826dcab0d79cd8b8b38192be852907faeee5f4c42f6a93a68a881db00b783` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene04-v1.mp4` | 452782 | `98bed4d0b39c212976535cbe55618d8a4739a8181e1fa17ded426515bbb7fe52` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene04-v2.mp4` | 491841 | `4c9bd75a14b783d2dc698498920100e6a01e3249f4df35a368265db62925168c` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene04-v3.mp4` | 686815 | `b5a7ea4a58d0a3d5b11be74201e78988c032977906d49a33aa3b24f84af009e6` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene04-v4.mp4` | 693155 | `90df8466387671b63369f11a57d1d30efed364a99532e54ec5dc9ed14ab48bf8` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene04-v5.mp4` | 811626 | `b47135d53a794606c44749a38baf39c9092a47aa7ef4e0649c413aa148d73433` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene05-v1.mp4` | 1093399 | `c4df880bd3c69babc470326e4dc5a2e6559bb5b0bafcc1402aa1a66dd9d1c7b2` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene05-v2.mp4` | 1405402 | `efd3ed141b31256647da194699c0e27941369508f8e817a2b9efe42fee0d0682` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene05-v3.mp4` | 333407 | `5321f5d7c8103c4089d6c828b7cd9e1acd40e2a122b6870d45ccb0ab8d5a1337` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene05-v4.mp4` | 339201 | `89aaff6df9c15d3721196ed0648b673dc868fb65558b70b2562a109d3f16cbbb` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene06-v1.mp4` | 301980 | `62e9488d2d72cf430988741a893f826a50026c5ad2ac37682ab4e3913b6c6213` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene06-v2.mp4` | 315062 | `391ec488f89d0ad4f90a73c2f87a034853ae60d2bf20a8b533816a3a0ac5cdb9` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene06-v3.mp4` | 431807 | `21b721836aa34e3de2556f0461c6e30b401c1df5e1d759bdcc57383ffd9a039b` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene06-v4.mp4` | 432603 | `22b0253162ce265a83b0017de2a1c1f27a78d8441c6268521ba16abfc82ab737` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene06-v5.mp4` | 552407 | `8cd54d4c816afd8ff0a94a7fca5de6ba7d682ee2a23afd29e6857efa2a54ea3b` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene07-v1.mp4` | 232106 | `12e894a11151d97f04774cdb9af95be60973a1900d16b3974f87972fdf3fb24f` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene07-v2.mp4` | 247973 | `1cd6954b260a0592edd2e0654c9980aac3c9d1c274207d2d3d7ae410eee13d5d` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/scene07-v3.mp4` | 248697 | `d10140c87a12e1a810f4e1482360818f7095cdc7def4dc0a90357cc4b9c95cfe` | 최종 조립 미사용 Scene 버전; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-silent-v4.mp4` | 14968427 | `eaecf75c4c298d3c732960193a680c3bf0f91d467dbdaaf97e85bd24eefbbbe1` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-silent-v5.mp4` | 15585283 | `bbf5284da90974d439c0b91624cc2002f09ab8a41ce347e77a02b43d16c53c81` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-silent-v6.mp4` | 15021139 | `7ffa7e34e07823f0749cff9dd8517e4559bd571f0f4f754aed91a1b05be30c7b` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-silent-v7.mp4` | 14942045 | `7c493887d1323db90cd089b06d39563d939b2ab6b1f8fe46edb7db97b357bb28` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-v1.mp4` | 13422476 | `e27ba648a246685993df03128c0e4166e17bacd590175eb9ac1b236eccd30ad5` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-v2-assembly-incomplete.mp4` | 4651673 | `3d425c340bdba7b20cbb6f44e1be93c2d03bf1e6c8b3b84580f9497df41e7aaf` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-v2.mp4` | 13858746 | `b3016cab31713aef9583b7a1f2c10a53b27f11cfcc537ebd4620e8e3f1e60726` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-picture-v3.mp4` | 14626367 | `874765e942ef5b93c4af38b27e6ac2e06f964260d885e2570fac11d02b68cedf` | 무음 조립 중간 영상; 승인 Preview 별도 보존; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v1.mp4` | 14620772 | `899eafa80b2c3124e216ad94c5783cb40b901c4db2c20395f3ab697ae6f02c54` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v2-assembly-incomplete.mp4` | 5941406 | `7e033ee14b11b9c2516a3a3b17e889b19b8e1f0536b9ab1d31b31160821bd225` | 라벨 추적 테스트/비교 QA 또는 완료본으로 대체된 불완전 조립본; 최종 직접 입력 없음 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v2.mp4` | 15151531 | `146d8b7e2d6547cd2554ec605f56dec3ef94e4798a89e6292f764bf8bbffdd05` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v3.mp4` | 15919124 | `495362397bd257450cbeec43667472dd832a250c5a52aeb3565ff9bc646321e2` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v4.mp4` | 16261184 | `44bc6f2e8fd7e9ee346e1e140ad9536bd10a44cf815a2ca5739c21f0c867831c` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v5.mp4` | 16878024 | `f0eb5c379cf0344f537b150d4d6fabe8f0f0bbc1c2dafc3b5f2204e2e4d7e341` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v6.mp4` | 16313896 | `bc4c0617f84f490d04774a567ed4c069ae6b4410e891927916e01440e7a31f02` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/video/younglim-stepdoor-preview-v7.mp4` | 16234814 | `b3c571319595779bb7167bde5b82be4cff4133293ead55a5ccd52b3fe618c476` | 이전 Preview; 승인 v8 대체; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v1.mp3` | 918284 | `bf18e39d97740052ce995b64e86a864784c0ffd1e550ce61512a76cae1870ac2` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v3.mp3` | 1072556 | `67c10a1643c47f177fb3756009b34890028bdd7e619949f4e1034f0612cef682` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/full-tts-qa-v4.mp3` | 1167020 | `a7734b807711c0959271c5fa8ec7dc66c6cae5ab891406f70e35195787ae1fb7` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/preview-v1-approved-sequence.wav` | 9888078 | `d08a1b696ff96f8347468a77703f09028e88901b563b894bce595f5f6a94b5d7` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene01-tts-v2.mp3` | 20544 | `cadd711e78f48a275d3cdeea4e87e8ee30131afc3f3155ae29db11797b2f4323` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene02-tts-v2.mp3` | 25536 | `9a483af9a7503b61c6a1f5d2237e201cb8a0ded9d8f1ab883572bc62a5ed32ca` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene03-tts-v2.mp3` | 22464 | `27de8e8fdee16b979ae6d74d7f20f3b533ddaae8692bd4fde0e7f1fa064118d8` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene04-tts-v2.mp3` | 33024 | `21f25aacf93f063a07c5158492eea3ae6c032bb20096bc3273a3d56c9b7777f2` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene04-tts-v3-mix.wav` | 2274150 | `65c39e156b1d72088cb70c8967c1bb097494437f11d5937089425e7963e319a8` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene04-tts-v3.mp3` | 31584 | `0be52c95dfc247e0c82e591f61a095d8274ee26425af04aa1d9f8185f8a434ed` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene05-tts-v2.mp3` | 22656 | `53b0e6728febe6bc5ce3c7e5c4604898a67d8e628c458330f6d4e34d5188665d` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene05-tts-v3-mix.wav` | 1423974 | `71113c23531cf01c5803bf994f1ccf911c52d9a2ed0922b26a863ea23317c58f` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene05-tts-v3.mp3` | 19776 | `18773c2b5e976448b665b9039fa9b5d8a9777aa3b0ff181b75a6b2644d5dfc13` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene06-tts-v2.mp3` | 29952 | `fbf561245e9029531b946188ac425d2b92c03da6f6e69a69bf11ce3c5e6b9220` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene06-tts-v3-mix.wav` | 2087526 | `351277db4435e36a62088c12e48494737589a845d23117c1c957604de53e0379` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene06-tts-v3.mp3` | 28992 | `da09a6ff46a6bfd59139bafc1a54ac159c3a4fc846876e1108e2f9fbf83f8e7f` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene07-tts-v2.mp3` | 20832 | `cf194ceb7fd5a01d09253f400c6627f683044ee63e929e46daac259f9b50188f` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene07-tts-v3-mix.wav` | 1354854 | `3a23b4c791ce83f1e23807f26d515765d33fd548c54878fc41527da56c071608` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/audio/scene07-tts-v3.mp3` | 18816 | `4ece1310b9deaa06ab1a92ede98b3ef908e670260d06a721cc87007d7ea21e56` | 최종 선택 외 이전 TTS/통합 청취 QA/구 조립 음원 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v1-contact-sheet.jpg` | 163084 | `3d151c04953fb5db450dc6f3bd4ce9b70c53a17444ff8b9f7400778b74df1a7a` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v2-contact-sheet.jpg` | 163843 | `f55a6f7e5accf4855d6b7b3aedd332b083e8f40750f7d143e5c2496ff3e0203c` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v3-contact-sheet.jpg` | 209452 | `c930ef5560bb0e942a411715198b6f5c79603fbea63b1986774b784bea1da9b8` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v3-s1-hook-qa.png` | 491812 | `f2a26c5c28b04aa3eab26d890b86af52ee66fca7e7d4a4013f7e7deaf412b6d4` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v3-s4-section-qa.png` | 180896 | `66074f659cf460784181965a00fe2b500ad1afa4d4ab8c85f9c265a15efd3dc4` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v4-contact-sheet.jpg` | 216529 | `aaa90e054b9c0b7c7c636195e6880b085dfd683bca6c15540770e9a4db8bb020` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v4-s3-end-qa.png` | 656937 | `a7897486bda30550d915d094e62c3edaf6ad77d49edfcd5c67b4711fb537acfc` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v5-caption-style-qa.png` | 1634672 | `13b63574a4bae7b71702ca6ab39ff0f5065f63f10d651971d5101cb3dbc403ab` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v5-contact-sheet.jpg` | 225471 | `f3e931a7d9c5df7ee4188e09b1161d0b5a1a1ed964b23d723a7dfc5eb4a68a34` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v6-scene02-end-qa.png` | 577114 | `2a84815b99da4cdebe0fbe1de163115e522297668d399bb5163d9b8e1d4a7b33` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v6-scene12-qa.png` | 214213 | `94e08296c8eb95f5e92a4fb3cfdbf629545e06ee7c68256ebc5c5da1ab721736` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v7-image-swap-qa.png` | 393625 | `104887569bd178616851b9976bd967851c9f2840dd4c19b479c42417ede3cf2a` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/preview-v7-scene02-label-qa.png` | 578037 | `1e9babf69dbed7317f6cb226dd21b8b0a5b18242a9b2c1010b99723d17fb4a8a` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/qa-scene2.png` | 1624992 | `5f4042ee0d30480a899283b9207e4e222ae57ae22ffd15d8c8d3bb62796543db` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/qa-v2-scene1.png` | 321028 | `9612a2441bb345c80a8c18e0a74df7d09907063e651d7158322667eb1c50b134` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/qa-v2-scene7.png` | 114504 | `3f4d806b8cf7fc162847fe187e8f450c5c179e6dbd939025d7bb1f34c5a9e69a` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/scene02-label-qa-v3.png` | 575189 | `4d170d0640b20578f256e65fd871a4fa349f9abb340da410837dea8ee097fa87` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/scene02-label-v3-tracking-comparison.png` | 231556 | `b942d30f9c3fdd3a523e74a352ae1dd3a2f125b95184b01b7841f8de5563e954` | 라벨 추적 테스트/비교 QA 또는 완료본으로 대체된 불완전 조립본; 최종 직접 입력 없음 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-basic-handle-right-qa-v1.json` | 790 | `da3646ca9e9d50fef1f9500a87f9fcf00dced8f785ca913f401165cc6498962d` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-basic-handle-right-qa-v1.png` | 557443 | `762a95bdefeb15c8b5a07c5aa9bc1ed3e9343c57aece6b0244dd5bf16314bdb8` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-basic-handle-right-v1.png` | 1640446 | `79385daab9fa5faadc3a87fa2889a925558f6181eb15b6219d0b1ded0f339f45` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-double-basic-fix-qa-v2.png` | 559940 | `42ab737077cb068bae177fbee91f67cb0b6d8cda91cd0bc34823e20e2d95afc3` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-double-basic-local-edit-qa-v2.json` | 656 | `6c7d23b22341fe34ec5c650de8193bb2ea01a12bd3afd7a00762b4ab91116421` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-expanded-ai-v1.png` | 1948292 | `53ed8eeae41a72f0a2089a5957d9322c8b324acf4864895f4d4339950c23967f` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-expanded-diagram-v1-comparison.png` | 583838 | `bbbf2db3a9d505645122f23ade85d57cb43b00065e77cbe27edf0efccf7d470d` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-expanded-diagram-v1.png` | 2144498 | `a0811f3e9fe8107ef50c097c4ee3696a7ce14d59ca2c7ed3e5457e10d95af719` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-expanded-space-v3-comparison.png` | 794339 | `3362d700abefed0131ff7c79a3ca0f5c2bbb35633b8e381dcf9694384fa1ff48` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-five-space-comparison-v1.png` | 1212428 | `3dc3c5ebca9c3558dad63ce98823577834fc265c5be5c6eb91be90007492ef3e` | 최종 소스 미참조 AI/편집 후보; 이력 참고 여부 확인 후 정리; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/assets/images/younglim-step-five-types-qa-v3.png` | 1212465 | `c2fc51e9109d8cc70612a299e48665fbe8a70af8f373032b3a741ffa0facb036` | 이전 QA; 시각 이력 보존 선택 필요; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v1-1x1.png` | 614427 | `e461912a0a2e8b1f5bf044b3915d8b03cca7e88dca05b004e3d9c25a7642e8f3` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v1-3x4.png` | 882357 | `1fff9a4c1877da5994b07de0aa9bf702dd7502187442ca9306ccb8805b27c4c5` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v1-4x5.png` | 821687 | `40ccd7672167c8ccfd93398e4c62bafb3ec4663d62c422326bd65e3b5ca85b39` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v1-mobile-qa.png` | 502192 | `8570658bc1c89fc3bfb761070a71350625c07e61da4584a324a85352995742e1` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v2-1x1.png` | 700570 | `fea570d92f3bedd7f4fa0a00e00dc1d782738d5ef5d06377822b6525d682213e` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v2-3x4.png` | 970960 | `d6dcd2eeb86abac3aa12a8073e71a04850eefc0d33cd9e06e8df0c472914b9e3` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v2-4x5.png` | 912048 | `5a9964f23ececb00d06480b88bedee241c6955d43f7156b86af448b350645a3e` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/qa/younglim-stepdoor-cover-v2-mobile-qa.png` | 512685 | `5c2068624a693c474fc9089b0b0586b3241d6c2edd7bbe346cc2226fc24dbde5` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/younglim-stepdoor-cover-v1.png` | 1193812 | `067178fd802693d78db47e3e93f8d4d4ad393289d14f98c70cf5ae5803a5be3b` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
| `public/covers/younglim-stepdoor-cover-v2.png` | 1286232 | `d4c14897bc9f502dee83d11a319cb12be21286dff6e3d74caa2e70825f0044fa` | 미채택 Cover 및 이전 QA; 최종 재현 입력 아님 | 없음; 동적 경로는 본문 근거 확인 | untracked/ignored |
## D. 판단 보류 — 0개 / 0bytes

| 정확한 프로젝트 상대경로 | bytes | SHA256 | 근거 | 최종 소스 문자열 참조 | Git |
|---|---:|---|---|---|---|

## Git 및 승인 전 조건

후보 중 Git 추적 파일 0개. 이전 선택 커밋에서 중간 결과물을 로컬에 보존하고 제외한 기록과 실제 추적 상태를 대조했습니다. node_modules는 유지합니다. 기존 후보90개 로컬보존 지시를 변경하는 실제 이동은 이번 보고서에 대한 별도 승인 이후에만 가능합니다.

```text
?? projects/younglim-stepdoor-types-shorts-v1/docs/cleanup-preflight.json
?? projects/younglim-stepdoor-types-shorts-v1/docs/cleanup-preflight.md
?? projects/younglim-stepdoor-types-shorts-v1/docs/expanded-ai-v1-prompt-pending.txt
?? projects/younglim-stepdoor-types-shorts-v1/docs/younglim-2627-catalog-official.pdf
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/full-tts-qa-v1.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/full-tts-qa-v3.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/full-tts-qa-v4.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/preview-v1-approved-sequence.wav
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene01-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene02-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene03-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene04-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene04-tts-v3-mix.wav
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene04-tts-v3.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene05-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene05-tts-v3-mix.wav
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene05-tts-v3.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene06-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene06-tts-v3-mix.wav
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene06-tts-v3.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene07-tts-v2.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene07-tts-v3-mix.wav
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/audio/scene07-tts-v3.mp3
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/official-double-section.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v1-contact-sheet.jpg
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v2-contact-sheet.jpg
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v3-contact-sheet.jpg
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v3-s1-hook-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v3-s4-section-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v4-contact-sheet.jpg
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v4-s3-end-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v5-caption-style-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v5-contact-sheet.jpg
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v6-scene02-end-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v6-scene12-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v7-image-swap-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/preview-v7-scene02-label-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/qa-scene2.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/qa-v2-scene1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/qa-v2-scene7.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/scene02-label-qa-v3.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/scene02-label-v3-tracking-comparison.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-basic-handle-right-qa-v1.json
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-basic-handle-right-qa-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-basic-handle-right-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-basic-unified-qa-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-fix-qa-v2.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-local-edit-qa-v2.json
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-space-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-space-v2.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-ai-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-diagram-v1-comparison.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-diagram-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-space-v2.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-space-v3-comparison.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-five-space-comparison-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-five-types-qa-v3.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene01-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene01-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene01-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene01-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene01-v5.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene01-v6.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-label-qa-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-v5.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene02-v6.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene03-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene03-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene03-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene03-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene04-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene04-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene04-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene04-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene04-v5.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene05-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene05-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene05-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene05-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene06-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene06-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene06-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene06-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene06-v5.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene07-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene07-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/scene07-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v5.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v6.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v7.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v8.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-v2-assembly-incomplete.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v1.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v2-assembly-incomplete.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v2.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v3.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v4.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v5.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v6.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-preview-v7.mp4
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v1-1x1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v1-3x4.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v1-4x5.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v1-mobile-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v2-1x1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v2-3x4.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v2-4x5.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/qa/younglim-stepdoor-cover-v2-mobile-qa.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/younglim-stepdoor-cover-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/covers/younglim-stepdoor-cover-v2.png
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v2.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v3.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v4.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v5.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v6.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa-v7.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/assemble-qa.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/generate_tts.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/prepare-assets.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v2-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v3-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v4-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v5-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v6-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v7-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/preview-v8-concat.txt
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-tts-v3.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-tts-v4.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v3-integrity.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v4-integrity.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v5-integrity.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v5-preservation.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v6-integrity.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v6-preservation.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v7-integrity.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/qa-v7-preservation.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-cover-v1.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-cover-v2.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v2.sh
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v3.sh
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v4.sh
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes-v6.sh
?? projects/younglim-stepdoor-types-shorts-v1/scripts/render-scenes.sh
?? projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v2.json
?? projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v3.json
?? projects/younglim-stepdoor-types-shorts-v1/scripts/tts-v4-ssml.json
?? projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v2.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v3.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v4.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa-v5.py
?? projects/younglim-stepdoor-types-shorts-v1/scripts/visual-qa.py

```