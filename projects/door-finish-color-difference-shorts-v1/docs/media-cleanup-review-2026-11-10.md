# 문틀·문짝 필름 이색 미디어 정리 승인 대장

2026-11-10. 프로젝트 상대경로 기준. 실행환경을 제외하고 숨김·무시·미추적 경로를 포함해 실물 231개의 경로·크기·SHA256을 대조했다. 영상 39개, 오디오 48개, 이미지 144개(JP2 포함). 기존 감사와 경로 및 내용 차이 0개. A 12개, B 16개, C 0개, D 203개. SNS·폰트·소스·설정은 미디어 수 밖의 보호 대상이다.

최종 영상 조립은 rewrite Scene 5개, 엔딩 MP4, Scene TTS 5개와 엔딩 MP3를 읽는다. Cover v3의 승인 A 구성은 frame·door 크롭을 읽는다. film 크롭은 비교용 C 시안에만 쓰인다. v2-A PNG는 비교 QA 기준이다. 13개 과거 크롭은 cover-v3-preservation.json 전체 해시 검사에 필요하며 최종 Cover 픽셀 생성에는 필요하지 않다. YL40 비교 이미지와 같은 파일은 경첩 영상에서도 사용한다. 최초 원본·공식 출처·공용 세트는 보수적으로 보호했다.

기존 35개는 그룹 ①~③에만 속한다. 새롭게 검토한 중간 결과물은 아래 D 그룹별로 승인할 수 있다. 과거 기록은 모든 구버전 음원·영상·QA를 로컬 보존 범위로 잡고 있어 별도 지시 없이 삭제할 신규 C는 없다. ④는 나열한 쪽만 제거하는 우선안이다. ⑥·⑦·⑨는 다음 순서의 검토 대상이며 최종 검수·출처·다른 프로젝트 참고까지 함께 승인한 것으로 취급하지 않는다. 직접 사용 경로는 최종 소스 및 외부 프로젝트 경로 참조를 기준으로 판단했으며 역사적 QA 해시·참고 기록은 제작 입력과 구분했다.

대조 기준: src/RewriteScenes.tsx, src/cover-v3-entry.tsx, docs/assemble-rewrite-v1.py, docs/build-cover-v2-assets.py, docs/tts-approved-rewrite-v2-lock.json, docs/cover-v3-qa.py, docs/cleanup-candidates-2026-10-28.md 및 영상별 작업 기록. 원격 상태는 검토 시작 커밋 기준.

## A · 승인 최종 영상·Cover·Scene·Scene TTS (12개, 22,015,906 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/audio/scene01-tts-rewrite-v1.mp3` | 19776 | `bcdf96ad87f337b42c17e6b01ee4e56768ecfb15cd47742d9af5c138594b32ce` | 원격 동일 | 추가 검토 |
| `public/assets/audio/scene02-tts-rewrite-v1.mp3` | 22752 | `58704b7476eb8da9f7de7dfd56545616ff53119a166e90fa6f89546e797c8835` | 원격 동일 | 추가 검토 |
| `public/assets/audio/scene03-tts-rewrite-v1.mp3` | 26784 | `4a81912a36f905ac75aab449c50bbad3896b8620ebd33ed335f84a9a6b4e40f8` | 원격 동일 | 추가 검토 |
| `public/assets/audio/scene04-tts-rewrite-v1.mp3` | 25056 | `eab3438909b956d6659a42445cc1ff3baf385c6d8a1dd53970698d668eae73b1` | 원격 동일 | 추가 검토 |
| `public/assets/audio/scene05-tts-rewrite-v2.mp3` | 31296 | `cb42e68dc537e402d6ba33b66d042503ea0690f845296f3c4c97f05b8f932bf3` | 원격 동일 | 추가 검토 |
| `public/assets/video/door-finish-color-difference-preview-rewrite-v1.mp4` | 15014735 | `04a602db00f2d9c96b13e9def69a1fb254adebfbd6e91e3d118ec311c17259e5` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/video/scene01-preview-rewrite-v1.mp4` | 2499492 | `90d1bdf42a2462dc157c60d754a0c1e8ed1acf5ca4f37b1fb9b92459c59738c3` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/video/scene02-preview-rewrite-v1.mp4` | 512529 | `7bdbbc6b44640e846b702540ad01a2fdf54433c737ef349199ad9e601270a2f4` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/video/scene03-preview-rewrite-v1.mp4` | 2283209 | `f15c47c353ea0fbf68a3f5720cc0a6fff672d16a244a2c2e0f6d605d7a498b2e` | 원격 동일 | 추가 검토 |
| `public/assets/video/scene04-preview-rewrite-v1.mp4` | 348474 | `306ca184511b0e73651134bfbb401ba0606cb746d7752782edb22e0e44fe6f7a` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/video/scene05-preview-rewrite-v1.mp4` | 315966 | `23c20a3d6d96f9ffb6cbc5c29a235ba2404e445abe0b3fa78792f5ebef9062b0` | 원격 동일 | 추가 검토 |
| `public/covers/door-finish-color-difference-cover-v3.png` | 915837 | `e915db1ab7606eaa5093d2ec116cfb1d0fd6bdb4e9b84195d000610c4958b420` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |

## B · 재현 입력·원본·공용 세트 (16개, 56,752,727 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/audio/ending-approved-v3.mp3` | 19916 | `bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181` | 원격 동일 | 추가 검토 |
| `public/assets/images/cover-v2-door-crop.png` | 246436 | `39afc7b43b624940c789a863eaa7e75644e620f526b680b68d1c87a191d21ce5` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/cover-v2-frame-crop.png` | 584331 | `34751ceda714033528a632cfd7e5d24a68a76efeabc28eb9105ffdbdaa4028d4` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/customer-190-sample.jpeg` | 412192 | `42b58ff072b165abcf53aa5a5f8b5be2ece1f9c279e84057646d9d7cf72393dc` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/images/customer-door-sample.jpeg` | 450320 | `75287900dfa4f4880e19f40372df9f509270e996c58fa9b0f20f2c51a29cf0a1` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/images/customer-frame-panel.jpeg` | 5827847 | `318d77eba00119f779210b83f5b3294bfc2f3a2e1d4fd0463805882fb48244e9` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/images/yl40-film-vs-abs-centered-v2.png` | 5692198 | `17be40369d4be126113e96472fe6878cb6b79d984122271a74b8b12cdd76e825` | 원격 동일 | 추가 검토 |
| `public/assets/images/younglim-ya07e-px454-catalog-native.jpg` | 112661 | `491a96b9aed80bd1a563a000851db016a5bec878854b58ae70fb6d5dd710c15e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/younglim-ya07e-px454-display.png` | 1311802 | `1dfd05e3a718e0a29ee12ba46f2fca6cb95b6e296f13651f19cdff0fe5bac85f` | 원격 동일 경로 없음 / 미추적 / 기존 공개 보류 9개 | 추가 검토 |
| `public/assets/images/younglim190-film-texture-reference.JPG` | 4389326 | `cf58a171d15303486dbe3f1d67b0a6db9f24fc05a8036c955e956a621fc9ebed` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/logos/daesanlogo2.png` | 10343 | `da4fb4417970221c9caa2f00040ffd56f13eacaa86fdbad000b64606f35530ea` | 원격 동일 | 추가 검토 |
| `public/assets/video/IMG_3934.MOV` | 19049859 | `c4b52f3a215ad669b2facdd928742878ea24b79d3c05525abd02443443fd1114` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` | 9346882 | `2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5` | 원격 동일 | 추가 검토 |
| `public/assets/video/headquarters-normal-speed-hold.mp4` | 9039790 | `4cf27faed9cb1ebfdd0e738bb54575c9167e6698c136c08997034903dca12324` | 원격 동일 | 추가 검토 |
| `public/references/series-sign-v2/doormaster-series-sign-v2-outlined.svg` | 9087 | `65177f952fe4565ded486124f094a239fe07a35fa64c56cdb08916aefcf12aa0` | 원격 동일 | 추가 검토 |
| `public/references/series-sign-v2/doormaster-series-sign-v2.png` | 249737 | `304024aa3f0b76d226afcab5b83201e59201e13f5a6e3246abf550699dea89e3` | 원격 동일 | 추가 검토 |

## D · ① 명시 보존된 1차 영상·음원 (19개, 51,268,966 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/audio/full-tts-qa-v7.mp3` | 870956 | `40e4ea76fcfa820ea6f4cb4551431a335812942926c69ad3404ae1c345440b07` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/audio/full-tts-qa-with-ending-v7.mp3` | 987884 | `7de1dd13a34078612acb205f4681e6e25fb17ba7497599f6b4d0e1442249326b` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/audio/scene01-tts-v4.mp3` | 15744 | `bb186452df2eb49332d932215b215176d1c33925d0e26a0ee502c19969e71685` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/audio/scene02-tts-v5.mp3` | 37344 | `8b8b8c4efc2ced5dfe9c3b43fa6f2cbac747de418d51693f2174584ab8ef13e9` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/audio/scene03-tts-v3.mp3` | 33024 | `159ec47de426e82033b6d9e41d0bab6afefb67a682960a7ee757bfde5d05645b` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/audio/scene04-tts-v7.mp3` | 210860 | `c016918a61e9b3b0e1431d722cb72377c50125173c26d31cbd2142473dc684dd` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/audio/scene05-tts-v3.mp3` | 23904 | `0a71d4356dd2509394becf86d4a41e016ed161f3010c3a255ebd9cd9b02b83e0` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/door-finish-color-difference-preview-v5.mp4` | 16749410 | `f19aecccdd0dd17069c2de82f8f4d61bd942c06f9c0c08399daee8e91d6d54ce` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/door-finish-color-difference-preview-v6.mp4` | 16851891 | `0c143005e0cfb2bcb09adb462e6a9d4d69a0233dabb7c356474d00a2bcc7cfe2` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene01-preview-v2.mp4` | 2396027 | `23d5f30fec6644b22d4d2a9d3dabb19bd46e78fc763433a1af3396d0cdc5c761` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene01-preview-v3.mp4` | 2391690 | `55dc7032a910053a0a570d1fe5944f1f96eec9745cc4a2eb91154fcdfebacc7b` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene02-preview-v7.mp4` | 1658391 | `7f19ce0b2ffc53aa3227077b1979a7fc8275d7bfe354fd87dde80a189d152c67` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene02-preview-v8.mp4` | 1655158 | `31124716cafbfb45a2396ecaf88deb1cce9250a9eaa1877f14d9e940bb8b84fc` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene03-preview-v6.mp4` | 2452443 | `fb250ff969d1c7571f4dd366923e731adb9f1198ff163f29048c98deec30761c` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene03-preview-v7.mp4` | 2565410 | `2feedf9db92ed521259946955f71dacaea3ce0c2cdbf857f93d9bdbbd9165e96` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene04-preview-v2.mp4` | 598444 | `7b8c53186797f87d411448c474043376a10e092a1015db87839910e67fa24e3a` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene04-preview-v3.mp4` | 596836 | `3ea65887a0d62665f3b0b4abc5ba0c4b3bb5b6c1bea6723969be6314da33acce` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene05-preview-v2.mp4` | 587429 | `afbd8523f807d371f4775410e1a421d2bd235b761f12099a133a1e0b1f501e00` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/assets/video/scene05-preview-v3.mp4` | 586121 | `8b8e09dc16b997e58305fb1805c49a2772cb682383950c819adaa3f74c29c939` | 원격 동일 경로 없음 / 미추적 | 기존 35 |

## D · ② 최종 Cover 크롭 검수 증빙 (3개, 2,015,891 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/covers/qa/cover-v3-3x4.png` | 683704 | `cf8a2460498bebb21101d3b7f1295e403c3a94f75d6572dd67fa78fcc91f4d36` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v3-4x5.png` | 682984 | `51238e0a69c34f333d1726e4394f5997116bc14473e5cefac2f162cbf80b9c84` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v3-square.png` | 649203 | `f812d13d4d1d382a875322371531464e48403686697ccf78fff0cfffecaca687` | 원격 동일 경로 없음 / 미추적 | 기존 35 |

## D · ③ 과거 Cover 크롭 비교·v3 보존검사 입력 (13개, 6,540,839 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/covers/qa/cover-v1-feed-4x5-mobile.png` | 144342 | `204a3bba7e1276160853c08a95339cee393a179ccd3b0fb929f4823261bb278b` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v1-feed-4x5.png` | 699951 | `aff26aca7c621c44f0b5097513a569c68c345d11a278506a5934f5a15de47f0c` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v1-grid-3x4-mobile.png` | 144628 | `29320d67f3c12a7de3f6f6a173dbac4abf5f4f66c051c7af40ff0231daed251b` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v1-grid-3x4.png` | 700704 | `5e274bbc4d65fc9ec603f16d0f1352acf154239fc707370a9b28167bb859e6ce` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v1-original-mobile.png` | 145572 | `ca0f740727e160879df09639ed278cb185bd047ad7898e7a0798f23e2b8e7d6e` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v1-square-1x1-mobile.png` | 127943 | `a7b96db812eb9cdfa60b63f270788397f330239ef69f06c9c3a7e5f540fd38b1` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v1-square-1x1.png` | 665381 | `c73361993df51c25cae52265ba17835de694e8b91e04560e607d1726c59da3eb` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v2-A-3x4.png` | 688816 | `3fa85d943c3e14cb8946fa1357de47580b14e39121a1f85b97e6a50a74b3b5e1` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v2-A-4x5.png` | 688368 | `ee6c41edf2ac468e72b0e0629b7d990fd13f192b3f641dc2f5e321ee69db3137` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v2-A-square.png` | 655683 | `53d1dfc80ffa872fe8762e4f00c8ac9ae0ca0ab1d30617b5988e38f16808bf3f` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v2-C-3x4.png` | 638890 | `4190510b92ce881f26973d2f81862040947255846540d49a2da2554f6df0a93c` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v2-C-4x5.png` | 637829 | `f313cc0dfe283d522bcd40356d3be42bec3cfd047d4c8e57ab68860184593a7e` | 원격 동일 경로 없음 / 미추적 | 기존 35 |
| `public/covers/qa/cover-v2-C-square.png` | 602732 | `bcaf10808ce54e3023a8049345595d7434e807c66a439157dae27ab63329c174` | 원격 동일 경로 없음 / 미추적 | 기존 35 |

## D · ④ 동일 바이트 QA 사본 한쪽 축소 제안 (3개, 490,329 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/images/qa-preview-v5-s3compare.png` | 74797 | `35d8c014217b364020b4b89c25de8d681b4e37bd487cfbdf23435605592602f4` | 원격 동일 경로 없음 / 미추적 | 추가 검토 · 유지 qa-scene03-v6-compare.png |
| `public/assets/images/qa-preview-v5-s3move.png` | 105232 | `1a19e57ef0b9e1f679f5e91a3721b4241577b099b933bc615ec4406d8b14cc9a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 · 유지 qa-scene03-v6-move.png |
| `public/assets/images/qa-preview-v6-ending.png` | 310300 | `5fe44f7927d1d491f316abb48eeeccb82e8d18e7ce49833be8d8e45d2788542a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 · 유지 qa-preview-v5-ending.png |

## D · ⑤ 동일 바이트 QA의 유지 측 사본 (3개, 490,329 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/images/qa-preview-v5-ending.png` | 310300 | `5fe44f7927d1d491f316abb48eeeccb82e8d18e7ce49833be8d8e45d2788542a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v6-compare.png` | 74797 | `35d8c014217b364020b4b89c25de8d681b4e37bd487cfbdf23435605592602f4` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v6-move.png` | 105232 | `1a19e57ef0b9e1f679f5e91a3721b4241577b099b933bc615ec4406d8b14cc9a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

## D · ⑥ 이전 Scene·전체 렌더 (18개, 86,536,371 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/video/door-finish-color-difference-preview-v1.mp4` | 11369620 | `899e1c180bacff9cd67d3ac8406f1c6fe9f57f392b0eaf77832295068beef74e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/door-finish-color-difference-preview-v2.mp4` | 14930472 | `31dc9f7a13a592d06105ec4d46b6743072c4d453b994b46e1ed151eac3f9bdd7` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/door-finish-color-difference-preview-v3.mp4` | 17275171 | `65c31e3fc8221d8b7bf489de1dc99bce86fd0b478a95161e13a9f205844a3227` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/door-finish-color-difference-preview-v4.mp4` | 19893652 | `2998e6c3790c01251db7e4ba1cafa9498a0ebb514cdf66082f78cd6ab234d924` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene01-preview-v1.mp4` | 269233 | `5fb0bd364668024219288a0b299a19eda60b1f7a1febbce524bdccd598ca692f` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene02-preview-v1.mp4` | 630496 | `dd92907fa8aa5caee6ed557b7a068c043186070c775ce32a5537fcb9b885a587` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene02-preview-v2.mp4` | 1984487 | `a183a34ceefe75b6c003fcc160c46ba7c9e1d290075c07ba1e87c36af8911a34` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene02-preview-v3.mp4` | 2063604 | `a801c2ae82784a6282974af0a5a1a5e05f2a785f08e06f9dfc0e36f4c74f0951` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene02-preview-v4.mp4` | 1675122 | `dc7d4b46ae04d61a618593b7a37dca79e763f5e48c3a507fe7cebc9b8ce280bd` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene02-preview-v5.mp4` | 1662600 | `1a7b535e965e14be38e5abd1a66909210dc052db693819f3ed5a1afe696d7279` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene02-preview-v6.mp4` | 1650992 | `c8e7a1d4ca187b6f415435dd93fe121626fb530ef00df68c256f68c427c25836` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene03-preview-v1.mp4` | 423118 | `c4edf9e668d4d8c32a1ad72e94055bd1a169a1a1db938680da50a19d94a30c39` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene03-preview-v2.mp4` | 633513 | `39783e4974f4b010d93823812d13929bd3af45732c6b38467458bac436066270` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene03-preview-v3.mp4` | 2978212 | `7381eb39ebe8c29fe78abd61d0128756f4d8d65d0d74bc772f64b8df3f30c446` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene03-preview-v4.mp4` | 5596685 | `ca6a0856ec6131b0db2b980e61a458880a3b430b2aa2670e9b45487e69c698a6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene03-preview-v5.mp4` | 2516043 | `0f0fdbe6949893aee7e02d1b58986e683a515a2d16dc9553e1dd50f267a1aa1d` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene04-preview-v1.mp4` | 626917 | `b8827839e0bfc53b5d61c7296877b289d890fb739ddeccf4f56edc9c0bd54fba` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/video/scene05-preview-v1.mp4` | 356434 | `a1a9c4f7b387c3a94243a6daa6e749ef4f7006233287bd43b3d456a5dfd8a120` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

## D · ⑦ 구버전 음원·발음·청취 비교 (35개, 13,590,220 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/audio/full-tts-qa-v1.mp3` | 460844 | `4e8cc72b09e7290c51168cd2d3bc9e5015cc22412d2dced0ed3588a581bb30b5` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-v2.mp3` | 1005164 | `49d572dea2bfc1fd9242d238bd0fe6788dbf019ffb3e6f94abc15e9b474e3b5b` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-v3.mp3` | 813356 | `a17bf1cbf628ff82ea58215082b88ec22f9f32796eb075c6fef86c26c7217e82` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-v4.mp3` | 823148 | `089a84d4a0cf99bdcd19b51f877e141e87ace6faba5cf19901cfd4d988650b96` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-v5.mp3` | 846188 | `3532b08431e9ee719803ca0bc1271e0a69696a474551b0ab81a996f65a0e7f62` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-v6.mp3` | 886508 | `52be80193a6c67cf56cd3d744745610155e4b103793d0fa46f984541cae38869` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-with-ending-v1.mp3` | 577772 | `67780fe936df54471289554f9a5d614269149fa40629854e48823fc0319b193c` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-with-ending-v2.mp3` | 1122092 | `0c43a7187668615036eb1254f2a13ef8283708e300d05f3a4b050301f2d00f16` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-with-ending-v3.mp3` | 930284 | `149d772915f917390f94da3446db975a4e67146a3c30a9365bf838a6a1f24210` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-with-ending-v4.mp3` | 940076 | `be994a06583750b11101855b79dc0ae55fa2cb12c5943af3e7339b56f4d8c090` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-with-ending-v5.mp3` | 963116 | `52954a6147013c17ec2ec26af5467c7287403293e1059e92613f268aba8b3941` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-qa-with-ending-v6.mp3` | 1003436 | `170e1dde3cb90678df996d08c08795a4ce3813ccc1fd1ca9d9e57946a2cd21d8` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-rewrite-qa-v1.mp3` | 615404 | `69158244f91de5cd998936f78b834216e760b8d4283deb642211daed5e686547` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-rewrite-qa-v2.mp3` | 629804 | `0a6ee33fed067437f3d682ff45006d0a620feced1f60318a55dfe9c3dae184c2` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-rewrite-with-ending-v1.mp3` | 712844 | `2c124b019a6a3f711f422306ac9100e83a94c3109c74ef90d582ccb90896d432` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/full-tts-rewrite-with-ending-v2.mp3` | 727244 | `b3aa23e0a3958f2e2718af6c19f237015e10c435f0779d398c048210e7503004` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene01-tts-v1.mp3` | 7872 | `a126e6847f903fe0a86e4f318f13d8a66bd7945b5b8359add591ccc689f361f7` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene01-tts-v2.mp3` | 18624 | `20e7a3529a996553cdde3e466c8d8f86f51db334e0224afac3b03c8f79074096` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene01-tts-v3.mp3` | 19392 | `6e7f5016ca33ef68aecad5654c091af17cfb6a17c1986c039bcd8aad2cc8235a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene02-tts-v1.mp3` | 13056 | `6bb65f5e61fc061501099773a96c84f1feafba024312daf12923f089c11075a8` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene02-tts-v2.mp3` | 30624 | `8943a9f677da945c1caa1997a085104968337e09ec39755afa9f2a470fa46bd8` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene02-tts-v3.mp3` | 31104 | `daa1eec4a7fe96fd749e7b14463ad5b22736405e2d7d85b84b13e39a76c4db9c` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene02-tts-v4.mp3` | 30816 | `54ba7e8d349349c1d14d8fadea5942c43024d8ad004d4f47dd7c15214c00fff0` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene03-tts-v1.mp3` | 18816 | `346876c9be1dfdbc320227bc32b13026a93085d5ec5527cba45397e0c068af4e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene03-tts-v2.mp3` | 42432 | `4b0683e69aecc6ba8da42b5f9a7eb4d61dbe55daf6f22d68a187e57bc3f9f191` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-tts-v1.mp3` | 20352 | `b5cf3645cc4abd9ac3e1e835b6deda8b5f2b774f72119d47d9ecf3c65ae4fa55` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-tts-v2.mp3` | 42144 | `7ea7c513e41b80287aa975050fec123b47076362a330996386f035cbdfe64ed7` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-tts-v3.mp3` | 27936 | `787bbf47e59c83e30fdb68cdb294102f16f5577ff7c3fc54de856187ab44fb02` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-tts-v4.mp3` | 33504 | `73b4846a3ed5890b53f5f6208f836cd8f79ae61a10d456c1ed74caaf47e0666b` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-tts-v5.mp3` | 30816 | `8f08d6a85aaf5328c93f9d1340411dc87176473d43c48e3067abc671bd172c55` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-tts-v6.mp3` | 37536 | `2790f9d7d530abb557d423554fe6771d38dbf31fc005e7b6be424525cbca04d6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene04-v6-pause-review-4p8-to-7p2.mp3` | 49484 | `418bb347bc699c0fae3215ff9bc887b8fcc28df5d804e96553f1ac43f9afb515` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene05-tts-rewrite-v1.mp3` | 28416 | `2adaef85b99bdd773d20acf8d1b0411d353fae135650757e43abf408437f59f7` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene05-tts-v1.mp3` | 16512 | `20e913e8b3a5c84506ce185f33c86f988b642ff000502167cad27e65f24ea707` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/audio/scene05-tts-v2.mp3` | 33504 | `64888f7a122fca16cb56167e8602e9594521a1e6022954ece01aed590fc3f7b4` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

## D · ⑧ 최종본 검수 프레임·비교판 (14개, 2,840,468 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/images/qa-rewrite-mobile-contact.png` | 716114 | `07c3cc1a610555b210d1c89f29163bd959ea9ce73f1a453d33183944c6884dac` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s1-1.png` | 107219 | `06dc82bddb776ceb6fa3da4c8c2ab811d4161bb869fca594d4a147c24a54052a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s2-1.png` | 103959 | `e75ce3fb90b347ca04f8aa2b4a1008448b08258c230a32ca39a497fe70d3295f` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s2-3.png` | 103858 | `5f8a7ee6ab831bfa81b3695c5938da230a448e4868586ae445ed39cbe527b7fa` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s2-5.png` | 51014 | `5dace59c55bbcc03492725f99b37123866e821e8e1948b67462c6db4b346ca65` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s3-1.png` | 136409 | `bdc2c6cf192497960efcfa41638521626685b0b49ddf16c63050f283d9813293` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s3-5.5.png` | 71984 | `f6981bd9b7a70de6340bc9114111834250eb626e848e016a97395ae3be795432` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s4-1.png` | 39927 | `a3c828a04c544a1271fdcd60ed37737a5eaa6d06f00b43c20c90014d8f90e073` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s4-5.png` | 96278 | `d89943d99e61fbe6dccf5056c44f26144cdc44a7807b4c63eaa514f600d57953` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s5-2.png` | 46299 | `d28cf49a7156b4292948402119489bccf541900b4c2ca87495c9cee82b38c1bd` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-s5-6.png` | 49770 | `c659022231d4573ceb07066d56966f4e1c9d25cf6486952f7cec5282685294fe` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-rewrite-scene03-frame160.png` | 597324 | `1988024e9333b8b5a76ec1f5fc2f14fe58d95f53302d6a073ddb18a8659f5cc6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/qa/cover-v2-A-v3-mobile.png` | 146087 | `8d180d463fa9b5f9395c3135bcfa1673b3823d10f3ae51d009f2d09fdf68fee5` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/qa/cover-v3-crop-comparison.png` | 574226 | `30dd9bc6d1d5ed59e32c86a80c0615b282d31941363f719fe5dc108dc9f61eb9` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

## D · ⑨ 이전 화면 비교·검수 캡처 (83개, 21,922,937 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/images/qa-preview-v1-00.png` | 234184 | `ae6cd9366b420ad59e15317b4b362886a07a39333344e389d6e1e8dbf3247b91` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v1-01.png` | 238330 | `866c50988865b3a38babdb7acb8fe01d39efa11a9615ea22d78266e28bc5f1fb` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v1-02.png` | 113171 | `383099c8712504c6730175b89f6cad401075be539a058e5c702d1d06b9a98a73` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v1-03.png` | 117590 | `d188c03b7bc83ff7de1ab8c84f05ccfb65212f9a55b896a1ed6b1030e73d539b` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v1-04.png` | 231813 | `9c7d0d4ed59c8748642dd0bcde2102170063956980aa24e5a36f6ed676333735` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v1-05.png` | 578879 | `9b82616547eab48126b9485022dc780f49fdb4dece402ab8f75fad50704cfc8f` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v1-06.png` | 650016 | `2abbf668eeb448dc7ca4e35b684168a0a490a9c0034c998c7b1c957f4b8fe132` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-ending.png` | 286139 | `ca0f9292e34dce096eff4c426016a5f8b72e37fb339d7772b6e101968cfc5399` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s1-0.png` | 109023 | `45c315e7e300439241aa365f5c448ad8db4f0b46eda8585c2849ecf1690b9dda` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s1-1.png` | 118398 | `def2504085033aa6ae3f2f0a34e437abfff73fa40820f8ec8f895557e2127bb6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s3-0.png` | 86334 | `5832b720ceed0b4df1d45747fbaad2ae5552a737de42e71390263b55baf454fd` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s3-1.png` | 92297 | `dc4760f27089ceed2b47b01f927073c85585fa3a67a39f076917be7348c7f7e2` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s3-2.png` | 89799 | `04b7c749deebbe010c9f94a1bdcc3cf1e093a5e066236bb70548672c394f6fb5` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s3-3.png` | 109782 | `3d7667bebf0befa34e928820ee93e5f0ef5e3feecc5f42821f51d8dd43e381e0` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s4-0.png` | 66217 | `0e58fa54c3ce5fad4840d98d5c3fe425eb3efff077dd83439d28a8deb714985d` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s4-1.png` | 92954 | `95db09c1f0164ca91ae2f2770243ee0f59129b033817e8a12aa4d1be030c0306` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s4-2.png` | 96904 | `d0078514b1aea1107f3b894ee65910e1d3fe3120b1ae302e9f09ce09d09e5c7a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s5-0.png` | 99289 | `8264e9f1e3a060b6d5c387c37b79b0fd364879cc6a2bd8fe2ed399f76be8dfd6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s5-1.png` | 86253 | `f8058a571c5de8ddce2dd0bf24eab94d9a4eba3fc04762a30db44ef2a6f42e0e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s5-2.png` | 98689 | `a006a6934120c7789900f05c2d51e83011ee124cb81c03b288ec424effe2f396` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v2-s5-3.png` | 113614 | `428bbe7524462d80bf731b0297a83306223dd4c9ac9843703660f5aa1d6adde1` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v5-s1.png` | 117633 | `55415770ecb7f353a950c9e947c8686f20b685d42a8e705380d05de7e9c8b5bb` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v5-s2.png` | 93484 | `42ab6b2f7bade7849270f30ff9e288686be562985279508ef33d5cce5c9920bd` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v5-s4.png` | 96941 | `7d0a5014c2b6b0750c79fe0f67990d33c30783725d4babd1b614c896782513a8` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v5-s5.png` | 113606 | `4ae814cea03d7010532032897bdf5ede51acd09b9dda7d1a3c765a0d5b6ca8bd` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v6-s1.png` | 116816 | `206ef81277e043398cf51e0213fe5154be19774c64d0336f456520355cf866a6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v6-s2.png` | 92793 | `ed09a10fc728b1837e90fcbb98508c43dfe2cd5f66bdb4fa37a2ecf60f71462a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v6-s2frame.png` | 81831 | `fb40a50a26b9775ebd6b7cc12eb0639d8bdff3aa5c2cd884de55d435438e4238` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v6-s3.png` | 74693 | `653a511e021a2767fe2ee0479a1e738075855f28abf1f7b63d9e91b0deeabbfb` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v6-s4.png` | 96423 | `ae52d2c7513b9b69a9d951916b3ac6b73b6e36dc60b62d7942fef76f36822445` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-preview-v6-s5.png` | 113005 | `ab748a82addd74dd3750319de5db0e2838f28d821e8615791e6c353babeef038` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene01-v1.png` | 1055342 | `0ac23988e4d75ca37ced7e111ce2f470bc89b6b832c3551e494029583716b2f3` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v1.png` | 976511 | `1a36c9a0d0fd10b0c43e8a1666588a354cd13a0cbed199662d9eccbd5f7611da` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-emboss.png` | 142954 | `8daa8a419e0325d6b2a95d13877967038d04b72e19ab71f127a4d7cfab7ad9cd` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-frame-detail.png` | 1354369 | `4077cce8e4dd3d673974ddd7d5908bb2849b552964eb8082c9058a971ae38786` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-frame-whole.png` | 963557 | `d4515876ce34e2c5b6ab70aa89e0296e9cc61cdcf0eba86d55c571551d11c54a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-leaf-detail.png` | 945581 | `9a5ff36086c4fdba96dd3193b64a2502486404a80f77a29314bccea1463ba6ab` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-leaf-whole.png` | 977370 | `daddb0f0b6113b30d5848c8dade127bf1fd8a1e638935e4feb3096f3a176b2d7` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-render-deco-onset.png` | 252101 | `696de84eb41e063e466148ba381fe60fcd4a56d4dad74bca5d231e582685740e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-render-emboss-onset.png` | 99792 | `2da502fa7f9db87416ba54f1ebb00a3ec8074efd9bd81f0b1ad9a8cb1841fe2a` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v2-render-leaf-onset.png` | 164287 | `7fcd312be8ef2cf693b35e557c4d91edbf2fb1b973561df21b20b6fd38aee93f` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v3-emboss-display.png` | 825588 | `43d45d7ba6c0670f3eafb009bb82b4260cbf2f42fa2dd042f4563acb719d8fb5` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v3-emboss.png` | 237757 | `18b9dbd7b6f82787360027059715b342b963bac40de59bd93efd64e1fc59eb1d` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v4-deco.png` | 151428 | `d19151adea14a8a9c6218a4fc1acb934b1ab85442b2a9fdc8c10bcfa86905fe6` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v4-emboss.png` | 188152 | `241c93b3b81a49637474f00937ece3cf1156d81e03f01575651456a76fef8612` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v4-film.png` | 132976 | `ef0ba8e1632d3ec7e8d7ea557c3b4ed0cb551555c69967305675018d30c31a5b` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v4-summary.png` | 756712 | `791a8f86edc42d87be81f1ce8c1c8dca09d0a03bdf9e3bffdce4949a87cbb864` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v5-deco.png` | 78402 | `2d68b8b81ffd8d729fe43bcd6a3bc5d117933af5776c1daa96a11114104289e9` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v5-emboss.png` | 91159 | `0a6b112b17919487fc6987b6245f9bdc75a99e12d6506d04a5df1ae59e976ca4` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v5-film.png` | 59538 | `6c8030ac7b020dc46976ea516d3435bdf83a166187f4cf9a099f233863e2bb37` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v6-deco.png` | 76045 | `ff66a9e42d08545bdb04cfd752e248622b11530d3b9fdb7652156af4440a74df` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v6-emboss.png` | 89416 | `cc89e35d0c9486f1366a843db1c3915ed5b212ffb74b0ed59dda4fcc3f97145e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v6-film.png` | 60349 | `e77930cf03afaba4013b362c5a92549ce13f47314731a5f06526508f70dc5519` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v6-frame.png` | 128611 | `e2b70f2db15f3148117d34d20188651a8cbe2c8c069cdd2bc5629416e6d29783` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v6-summary.png` | 90929 | `353c70c819c9a60bb948a62260c920f16cb9aa6b23d8adc40605fefa43408bb2` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v7-deco.png` | 80535 | `21bc0477a30b24898f3f88cadc263be05241e17ca2e3b3cf736b936dda418597` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v7-emboss.png` | 93472 | `f7711291d58083366736ba8ca403f3f9f985eaa77b6ba132742dc018b43217eb` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v7-film.png` | 62037 | `e195b482244def4d9ee90b1264db64d80dcab44ae2718ba550da45ff45d1c5d2` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v7-frame.png` | 133246 | `4481c6d8fe427932fe3cd2f0f96ab2d353df7b227ae1eba74d87c6c4838059df` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v7-reference-v6-v7.png` | 377029 | `d3c26fbe9fc0a82b7d6583e46d4b17dd3578a5062989334855953eea3f759cfb` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene02-v7-summary.png` | 90434 | `ea9c58ab275525df13634e080ff259d3581e4c2b6493511f42c071320e055afa` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v1.png` | 181045 | `1568b7b8053aa0ca6b96277130c60c1bf53ff4a46892030468231736bfcb3701` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v3-conclusion.png` | 110736 | `39a089c5c5c35eb7180ad95d103e85d75342d62f9ec68029af881413e981f86c` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v3-diagram.png` | 62855 | `61084e8d1a0293caffc9b430ee05c676d5bdd3021484e8ef1ed408520b1874df` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v3-sample.png` | 110246 | `b2693d564faf8638f69ce377d5e9a5d93c4394efb624a72498603fc0a629190e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v3-texture.png` | 165438 | `769e48ebd5ccd6d3d03b64ad4750e7e02625f7af169a2e74ef40102458f619ba` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v3-v4-comparison.png` | 196305 | `28d996c7b5615927fe04c867f00e9604386e2ac7f2411c0433d8984bb9151208` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v4-abs.png` | 133536 | `674ea5fe51652e988620abc782da7c823806263830fbfe10f3926c2ab1a8945c` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v4-compare.png` | 68922 | `eefe865527e9ab4e546d6a7484869c9f6e5a34a6ff07f3dd94ac6623c682607b` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v4-film.png` | 149628 | `41fc7935ba1218604fc4e468740ea2f83ef0dcbb381d4f1186acbcd5cc9686d7` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v4-v5-comparison.png` | 128087 | `6c00a7abf9a6ca5cbad668793cc12aad14b4071524ab8d584fd9fd76758ad909` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v5-abs.png` | 127402 | `aadbea8916b5219f0f4f6be9465bdca12b9ff96c9b04c6b2558ab402dbf516a0` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v5-compare.png` | 73832 | `be63a7af51a9fdeac7b14cbd21ec80f0db1a6d4d4d8ee2922808e8a06c831b25` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v5-film.png` | 140342 | `35ee0d0571d83c1e9058fcfa7a982377d53abfe8db9cc94cda2879cbbb8cbe1e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v5-pan.png` | 138474 | `fba7ff12e2056df875dfef4d30939191dfd66ebfe4428446aea5cbee3c904089` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v5-v6-comparison.png` | 133476 | `5b46afba46c7184f47abf625f361ae38f9be53c205c7936cd22570dee64df439` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v6-abs.png` | 128015 | `b3fe8dbd55d133bfdfe7b4de2471fb4caa7152b3fc15a7c8950c0e1216783277` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene03-v6-film.png` | 140838 | `0a6179fc9548d821a1a5de63a1bbeea6d0ac0f666be66bcc0fc261bbf76588ec` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene04-v1.png` | 1118886 | `9224cd347e506b152a3bb311d3493d7aa5a274c86d64245ec8e15455443bccc1` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/qa-scene05-v1.png` | 1192753 | `6324994a7821ebd39759252fb8405047b0da86a35d046ccdfae3f6000054e2ba` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/qa/cover-v1-comparison.png` | 591843 | `55b122eb22c26b6588e2280cfadcb899ee51969f3dfa1caaa8adc0917209f175` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/qa/cover-v2-A-C-mobile.png` | 222133 | `a2d430b9a50b411fc2bd5573df616f15c2b2c04eff1dc722362b48a7f31514a1` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/qa/cover-v2-AB-crop-comparison.png` | 1165566 | `4da46fa15d7a633e78ac210af3c195d8cc48d63357f09592c12ab4e1f4cd0d20` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

## D · ⑩ 이전 Cover 시안·비교 원본 (3개, 2,739,871 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/covers/door-finish-color-difference-cover-v1.png` | 939962 | `030eaee73805671bdeda189135945512c89af5c6dc1650d22c0e513420cf741e` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/door-finish-color-difference-cover-v2-A.png` | 923685 | `7d652be7681b7f01cc821fa1ab13ab8f45a9fc96051c025cd3395034d01847bb` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/covers/door-finish-color-difference-cover-v2-C.png` | 876224 | `310c718c4daa3b2f1537497a279c12da86b38506c2414b17921bbb7aace43ebf` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

## D · ⑪ 출처·파생 계보 또는 외부 자료 보존 (9개, 20,335,322 B)

|경로|바이트|SHA256|Git 백업|범위|
|---|---:|---|---|---|
| `public/assets/images/cover-v2-film-crop.png` | 131336 | `092c46f8ff777151faee15027a88daee39fb9eb6c47b17ecf85a93fa34c22797` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/customer-overlaid-surfaces.jpeg` | 5119734 | `304923ea65bc566945724fa0ee0085b83d0e7c4f3aa1ee5bc4b95d00e8b1d5d0` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/yl40-abs-surface-crop-v1.png` | 2273132 | `adcb88bf5d191906a79b10092e36481051d2f197cac675ed07999353dedea696` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/yl40-film-surface-crop-v1.png` | 2775178 | `e75e58879a8310543bb1eefcd4c043027494a8d34b9af3718680a182ab300cae` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/yl40-film-vs-abs-isolated-v1.png` | 6153887 | `62c40b4635a00ef303502ea3d36f9e27dfdbe4c89e4349ce3f5f0a4ecba04193` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/younglim-official-abs-overview.jpg` | 628876 | `0b9e081d59ad103e0aad83b0baa7fa729a74170d0af76b16c15a34901a414516` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/younglim-pw968-film-scan-official.jpg` | 2393625 | `c6f502f538ccb4087f20464dd686b38e5e57eb03e452fcb8a1174574dc2bf933` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/younglim-ya07s-psm195-deco-product-catalog-native.jp2` | 65333 | `ef37d19825565b7bbc48617a6d3fe3ac456580402cd314e0b5bf92f9b9443a12` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |
| `public/assets/images/younglim-ya07s-psm195-deco-product-catalog.png` | 794221 | `60fe6c576b30bcf580ff231807a4cb3657b3b6fc3d2b31da389d07b08a49821c` | 원격 동일 경로 없음 / 미추적 | 추가 검토 |

공개 보류 이력 9개는 기존 25개 점검 범위의 수치다. 추가로 확인한 고객 사진 크롭·공식 카탈로그 원본·과거 파생물에도 공개 권한이 자동 적용되지 않는다. 최종 MP4·Cover v3는 로컬 보존이며 공개 원격 복원 불가.
