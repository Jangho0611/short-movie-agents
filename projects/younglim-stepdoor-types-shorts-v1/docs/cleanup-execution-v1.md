# 스텝도어 정리 실행 및 최종 QA v1

상태: verified. 이동 108개 / 307,643,916bytes (293.39MiB), 보류 0개. 

휴지통: `/Users/janghokim/.Trash/daesan-stepdoor-cleanup-20261022`. 원래 프로젝트 상대경로 유지. 휴지통 비우기/영구 삭제/추가 이동 없음.

보존 파일 182개 SHA256 전후 일치, 승인 manifest 13개 해시 일치, node_modules 전체 항목 경로·크기·mtime 불변 (verified 상태 기준). 최종 Scene 7개·이미지·편집 원본·TTS 원본/믹스·SNS·엔딩·소스·설정 포함. 전체 재렌더 없음.

최종 소스 문자열 참조와 동적 Scene/TTS clips를 확인했습니다. 이번 이동으로 새 최종 직접 입력 결손은 없습니다. 과거 테스트/QA/구버전 소스의 참조는 사전 보고대로 없어질 수 있습니다.

## video 폴더 잔여 전체 목록

| 상대경로 | bytes | 보존 이유 / 최종 직접 참조 | 자산 유형 |
|---|---:|---|---|
| `public/assets/video/scene01-v7.mp4` | 373842 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/scene02-v7.mp4` | 2409925 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/scene03-v5.mp4` | 2150207 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/scene04-v7.mp4` | 811124 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/scene05-v5.mp4` | 401733 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/scene06-v8.mp4` | 554605 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/scene07-v5.mp4` | 243484 | 최종 Scene 원본; assemble-qa-v8 동적 clips 직접 입력 | 최종 Scene / 승인본 |
| `public/assets/video/younglim-stepdoor-picture-silent-v8.mp4` | 14944243 | assemble-qa-v8 최종 mux의 직접 입력 | 필수 무음 중간 조립본 |
| `public/assets/video/younglim-stepdoor-preview-v8.mp4` | 16237012 | 최종 승인 Preview | 최종 결과물 |

추가 정리 후보: 없음. 남은 무음 중간 조립본은 최종 직접 입력으로 보존합니다.

## 파일별 이동 전후 SHA256

| 원래 상대경로 | bytes | 이동 전 SHA256 | 이동 후 SHA256 | 결과 |
|---|---:|---|---|---|
| `public/assets/video/scene01-v1.mp4` | 262435 | `58bbed07926cd62bff458d5952666effeaee5d7fdc8a16db4cd37ff8ff839099` | `58bbed07926cd62bff458d5952666effeaee5d7fdc8a16db4cd37ff8ff839099` | moved  |
| `public/assets/video/scene01-v2.mp4` | 256093 | `6dd7e90f2294d848430416a1400a0c9cf3d613d34967a38b1702ea2e84d7cb75` | `6dd7e90f2294d848430416a1400a0c9cf3d613d34967a38b1702ea2e84d7cb75` | moved  |
| `public/assets/video/scene01-v3.mp4` | 283404 | `a72ba1147daeb11850b80b59576588da2f81fd40f4db174b0da92725d7dbe6d9` | `a72ba1147daeb11850b80b59576588da2f81fd40f4db174b0da92725d7dbe6d9` | moved  |
| `public/assets/video/scene01-v4.mp4` | 288411 | `9fb342a269017a2622db39d9566e753c6de8c4d75315666a238ae7db610b7883` | `9fb342a269017a2622db39d9566e753c6de8c4d75315666a238ae7db610b7883` | moved  |
| `public/assets/video/scene01-v5.mp4` | 378604 | `7717da6f936cad764e6321751ed402eb794817c4cf2fa7cbac5f3b20c623410f` | `7717da6f936cad764e6321751ed402eb794817c4cf2fa7cbac5f3b20c623410f` | moved  |
| `public/assets/video/scene01-v6.mp4` | 384380 | `6f850f50df0297453a91e8e254f379b8b0469b21adc377b0eb389192989a7fbf` | `6f850f50df0297453a91e8e254f379b8b0469b21adc377b0eb389192989a7fbf` | moved  |
| `public/assets/video/scene02-label-qa-v3.mp4` | 2947214 | `95e8ea1cb5c357b30ceb9239e69ddac31defa00f12fe36967e9cd2994b5e6838` | `95e8ea1cb5c357b30ceb9239e69ddac31defa00f12fe36967e9cd2994b5e6838` | moved  |
| `public/assets/video/scene02-v1.mp4` | 2777192 | `344a76fd07ef1305ba2b2eb1708eacf8201d13e911d28259cfa65180cbaab518` | `344a76fd07ef1305ba2b2eb1708eacf8201d13e911d28259cfa65180cbaab518` | moved  |
| `public/assets/video/scene02-v2.mp4` | 2894698 | `b0a734a3e3af4a03c8334dba45d6441f45fd1879590f9c202befdc916c929cb7` | `b0a734a3e3af4a03c8334dba45d6441f45fd1879590f9c202befdc916c929cb7` | moved  |
| `public/assets/video/scene02-v3.mp4` | 2945956 | `a1331759ac1f2bb2948d12a7ee8ae192562a4d8d9254c69d424cd817a9acf05a` | `a1331759ac1f2bb2948d12a7ee8ae192562a4d8d9254c69d424cd817a9acf05a` | moved  |
| `public/assets/video/scene02-v4.mp4` | 2952839 | `ded9c4997beb2ce92ed60357e23034996f06c5438b8453947e8202a67237b950` | `ded9c4997beb2ce92ed60357e23034996f06c5438b8453947e8202a67237b950` | moved  |
| `public/assets/video/scene02-v5.mp4` | 3047871 | `0c6165c59fb74b2eae4d99c94a7e21f8d9ea38bfacedc02c45e74925635b1ba0` | `0c6165c59fb74b2eae4d99c94a7e21f8d9ea38bfacedc02c45e74925635b1ba0` | moved  |
| `public/assets/video/scene02-v6.mp4` | 2477967 | `7c6161ddd193a7ce56067f8fdc7a854a8cfdf461876e90de531aa0cf95da71ab` | `7c6161ddd193a7ce56067f8fdc7a854a8cfdf461876e90de531aa0cf95da71ab` | moved  |
| `public/assets/video/scene03-v1.mp4` | 234535 | `7ac2dcfa2013252f1f637875a0256ea2c76b77ad0242d6f72d0e3aac8ef603fc` | `7ac2dcfa2013252f1f637875a0256ea2c76b77ad0242d6f72d0e3aac8ef603fc` | moved  |
| `public/assets/video/scene03-v2.mp4` | 248354 | `10743de0a14d54effae48e4dd974a6ba25837bdedcc982cd755c7c03c244b36b` | `10743de0a14d54effae48e4dd974a6ba25837bdedcc982cd755c7c03c244b36b` | moved  |
| `public/assets/video/scene03-v3.mp4` | 1696938 | `4a5bdeaf83b6d29b34d87a5ae8132788404220e43f44b5316146c5216d32c997` | `4a5bdeaf83b6d29b34d87a5ae8132788404220e43f44b5316146c5216d32c997` | moved  |
| `public/assets/video/scene03-v4.mp4` | 2014178 | `2f3826dcab0d79cd8b8b38192be852907faeee5f4c42f6a93a68a881db00b783` | `2f3826dcab0d79cd8b8b38192be852907faeee5f4c42f6a93a68a881db00b783` | moved  |
| `public/assets/video/scene04-v1.mp4` | 452782 | `98bed4d0b39c212976535cbe55618d8a4739a8181e1fa17ded426515bbb7fe52` | `98bed4d0b39c212976535cbe55618d8a4739a8181e1fa17ded426515bbb7fe52` | moved  |
| `public/assets/video/scene04-v2.mp4` | 491841 | `4c9bd75a14b783d2dc698498920100e6a01e3249f4df35a368265db62925168c` | `4c9bd75a14b783d2dc698498920100e6a01e3249f4df35a368265db62925168c` | moved  |
| `public/assets/video/scene04-v3.mp4` | 686815 | `b5a7ea4a58d0a3d5b11be74201e78988c032977906d49a33aa3b24f84af009e6` | `b5a7ea4a58d0a3d5b11be74201e78988c032977906d49a33aa3b24f84af009e6` | moved  |
| `public/assets/video/scene04-v4.mp4` | 693155 | `90df8466387671b63369f11a57d1d30efed364a99532e54ec5dc9ed14ab48bf8` | `90df8466387671b63369f11a57d1d30efed364a99532e54ec5dc9ed14ab48bf8` | moved  |
| `public/assets/video/scene04-v5.mp4` | 811626 | `b47135d53a794606c44749a38baf39c9092a47aa7ef4e0649c413aa148d73433` | `b47135d53a794606c44749a38baf39c9092a47aa7ef4e0649c413aa148d73433` | moved  |
| `public/assets/video/scene05-v1.mp4` | 1093399 | `c4df880bd3c69babc470326e4dc5a2e6559bb5b0bafcc1402aa1a66dd9d1c7b2` | `c4df880bd3c69babc470326e4dc5a2e6559bb5b0bafcc1402aa1a66dd9d1c7b2` | moved  |
| `public/assets/video/scene05-v2.mp4` | 1405402 | `efd3ed141b31256647da194699c0e27941369508f8e817a2b9efe42fee0d0682` | `efd3ed141b31256647da194699c0e27941369508f8e817a2b9efe42fee0d0682` | moved  |
| `public/assets/video/scene05-v3.mp4` | 333407 | `5321f5d7c8103c4089d6c828b7cd9e1acd40e2a122b6870d45ccb0ab8d5a1337` | `5321f5d7c8103c4089d6c828b7cd9e1acd40e2a122b6870d45ccb0ab8d5a1337` | moved  |
| `public/assets/video/scene05-v4.mp4` | 339201 | `89aaff6df9c15d3721196ed0648b673dc868fb65558b70b2562a109d3f16cbbb` | `89aaff6df9c15d3721196ed0648b673dc868fb65558b70b2562a109d3f16cbbb` | moved  |
| `public/assets/video/scene06-v1.mp4` | 301980 | `62e9488d2d72cf430988741a893f826a50026c5ad2ac37682ab4e3913b6c6213` | `62e9488d2d72cf430988741a893f826a50026c5ad2ac37682ab4e3913b6c6213` | moved  |
| `public/assets/video/scene06-v2.mp4` | 315062 | `391ec488f89d0ad4f90a73c2f87a034853ae60d2bf20a8b533816a3a0ac5cdb9` | `391ec488f89d0ad4f90a73c2f87a034853ae60d2bf20a8b533816a3a0ac5cdb9` | moved  |
| `public/assets/video/scene06-v3.mp4` | 431807 | `21b721836aa34e3de2556f0461c6e30b401c1df5e1d759bdcc57383ffd9a039b` | `21b721836aa34e3de2556f0461c6e30b401c1df5e1d759bdcc57383ffd9a039b` | moved  |
| `public/assets/video/scene06-v4.mp4` | 432603 | `22b0253162ce265a83b0017de2a1c1f27a78d8441c6268521ba16abfc82ab737` | `22b0253162ce265a83b0017de2a1c1f27a78d8441c6268521ba16abfc82ab737` | moved  |
| `public/assets/video/scene06-v5.mp4` | 552407 | `8cd54d4c816afd8ff0a94a7fca5de6ba7d682ee2a23afd29e6857efa2a54ea3b` | `8cd54d4c816afd8ff0a94a7fca5de6ba7d682ee2a23afd29e6857efa2a54ea3b` | moved  |
| `public/assets/video/scene07-v1.mp4` | 232106 | `12e894a11151d97f04774cdb9af95be60973a1900d16b3974f87972fdf3fb24f` | `12e894a11151d97f04774cdb9af95be60973a1900d16b3974f87972fdf3fb24f` | moved  |
| `public/assets/video/scene07-v2.mp4` | 247973 | `1cd6954b260a0592edd2e0654c9980aac3c9d1c274207d2d3d7ae410eee13d5d` | `1cd6954b260a0592edd2e0654c9980aac3c9d1c274207d2d3d7ae410eee13d5d` | moved  |
| `public/assets/video/scene07-v3.mp4` | 248697 | `d10140c87a12e1a810f4e1482360818f7095cdc7def4dc0a90357cc4b9c95cfe` | `d10140c87a12e1a810f4e1482360818f7095cdc7def4dc0a90357cc4b9c95cfe` | moved  |
| `public/assets/video/younglim-stepdoor-picture-silent-v4.mp4` | 14968427 | `eaecf75c4c298d3c732960193a680c3bf0f91d467dbdaaf97e85bd24eefbbbe1` | `eaecf75c4c298d3c732960193a680c3bf0f91d467dbdaaf97e85bd24eefbbbe1` | moved  |
| `public/assets/video/younglim-stepdoor-picture-silent-v5.mp4` | 15585283 | `bbf5284da90974d439c0b91624cc2002f09ab8a41ce347e77a02b43d16c53c81` | `bbf5284da90974d439c0b91624cc2002f09ab8a41ce347e77a02b43d16c53c81` | moved  |
| `public/assets/video/younglim-stepdoor-picture-silent-v6.mp4` | 15021139 | `7ffa7e34e07823f0749cff9dd8517e4559bd571f0f4f754aed91a1b05be30c7b` | `7ffa7e34e07823f0749cff9dd8517e4559bd571f0f4f754aed91a1b05be30c7b` | moved  |
| `public/assets/video/younglim-stepdoor-picture-silent-v7.mp4` | 14942045 | `7c493887d1323db90cd089b06d39563d939b2ab6b1f8fe46edb7db97b357bb28` | `7c493887d1323db90cd089b06d39563d939b2ab6b1f8fe46edb7db97b357bb28` | moved  |
| `public/assets/video/younglim-stepdoor-picture-v1.mp4` | 13422476 | `e27ba648a246685993df03128c0e4166e17bacd590175eb9ac1b236eccd30ad5` | `e27ba648a246685993df03128c0e4166e17bacd590175eb9ac1b236eccd30ad5` | moved  |
| `public/assets/video/younglim-stepdoor-picture-v2-assembly-incomplete.mp4` | 4651673 | `3d425c340bdba7b20cbb6f44e1be93c2d03bf1e6c8b3b84580f9497df41e7aaf` | `3d425c340bdba7b20cbb6f44e1be93c2d03bf1e6c8b3b84580f9497df41e7aaf` | moved  |
| `public/assets/video/younglim-stepdoor-picture-v2.mp4` | 13858746 | `b3016cab31713aef9583b7a1f2c10a53b27f11cfcc537ebd4620e8e3f1e60726` | `b3016cab31713aef9583b7a1f2c10a53b27f11cfcc537ebd4620e8e3f1e60726` | moved  |
| `public/assets/video/younglim-stepdoor-picture-v3.mp4` | 14626367 | `874765e942ef5b93c4af38b27e6ac2e06f964260d885e2570fac11d02b68cedf` | `874765e942ef5b93c4af38b27e6ac2e06f964260d885e2570fac11d02b68cedf` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v1.mp4` | 14620772 | `899eafa80b2c3124e216ad94c5783cb40b901c4db2c20395f3ab697ae6f02c54` | `899eafa80b2c3124e216ad94c5783cb40b901c4db2c20395f3ab697ae6f02c54` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v2-assembly-incomplete.mp4` | 5941406 | `7e033ee14b11b9c2516a3a3b17e889b19b8e1f0536b9ab1d31b31160821bd225` | `7e033ee14b11b9c2516a3a3b17e889b19b8e1f0536b9ab1d31b31160821bd225` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v2.mp4` | 15151531 | `146d8b7e2d6547cd2554ec605f56dec3ef94e4798a89e6292f764bf8bbffdd05` | `146d8b7e2d6547cd2554ec605f56dec3ef94e4798a89e6292f764bf8bbffdd05` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v3.mp4` | 15919124 | `495362397bd257450cbeec43667472dd832a250c5a52aeb3565ff9bc646321e2` | `495362397bd257450cbeec43667472dd832a250c5a52aeb3565ff9bc646321e2` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v4.mp4` | 16261184 | `44bc6f2e8fd7e9ee346e1e140ad9536bd10a44cf815a2ca5739c21f0c867831c` | `44bc6f2e8fd7e9ee346e1e140ad9536bd10a44cf815a2ca5739c21f0c867831c` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v5.mp4` | 16878024 | `f0eb5c379cf0344f537b150d4d6fabe8f0f0bbc1c2dafc3b5f2204e2e4d7e341` | `f0eb5c379cf0344f537b150d4d6fabe8f0f0bbc1c2dafc3b5f2204e2e4d7e341` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v6.mp4` | 16313896 | `bc4c0617f84f490d04774a567ed4c069ae6b4410e891927916e01440e7a31f02` | `bc4c0617f84f490d04774a567ed4c069ae6b4410e891927916e01440e7a31f02` | moved  |
| `public/assets/video/younglim-stepdoor-preview-v7.mp4` | 16234814 | `b3c571319595779bb7167bde5b82be4cff4133293ead55a5ccd52b3fe618c476` | `b3c571319595779bb7167bde5b82be4cff4133293ead55a5ccd52b3fe618c476` | moved  |
| `public/assets/audio/full-tts-qa-v1.mp3` | 918284 | `bf18e39d97740052ce995b64e86a864784c0ffd1e550ce61512a76cae1870ac2` | `bf18e39d97740052ce995b64e86a864784c0ffd1e550ce61512a76cae1870ac2` | moved  |
| `public/assets/audio/full-tts-qa-v3.mp3` | 1072556 | `67c10a1643c47f177fb3756009b34890028bdd7e619949f4e1034f0612cef682` | `67c10a1643c47f177fb3756009b34890028bdd7e619949f4e1034f0612cef682` | moved  |
| `public/assets/audio/full-tts-qa-v4.mp3` | 1167020 | `a7734b807711c0959271c5fa8ec7dc66c6cae5ab891406f70e35195787ae1fb7` | `a7734b807711c0959271c5fa8ec7dc66c6cae5ab891406f70e35195787ae1fb7` | moved  |
| `public/assets/audio/preview-v1-approved-sequence.wav` | 9888078 | `d08a1b696ff96f8347468a77703f09028e88901b563b894bce595f5f6a94b5d7` | `d08a1b696ff96f8347468a77703f09028e88901b563b894bce595f5f6a94b5d7` | moved  |
| `public/assets/audio/scene01-tts-v2.mp3` | 20544 | `cadd711e78f48a275d3cdeea4e87e8ee30131afc3f3155ae29db11797b2f4323` | `cadd711e78f48a275d3cdeea4e87e8ee30131afc3f3155ae29db11797b2f4323` | moved  |
| `public/assets/audio/scene02-tts-v2.mp3` | 25536 | `9a483af9a7503b61c6a1f5d2237e201cb8a0ded9d8f1ab883572bc62a5ed32ca` | `9a483af9a7503b61c6a1f5d2237e201cb8a0ded9d8f1ab883572bc62a5ed32ca` | moved  |
| `public/assets/audio/scene03-tts-v2.mp3` | 22464 | `27de8e8fdee16b979ae6d74d7f20f3b533ddaae8692bd4fde0e7f1fa064118d8` | `27de8e8fdee16b979ae6d74d7f20f3b533ddaae8692bd4fde0e7f1fa064118d8` | moved  |
| `public/assets/audio/scene04-tts-v2.mp3` | 33024 | `21f25aacf93f063a07c5158492eea3ae6c032bb20096bc3273a3d56c9b7777f2` | `21f25aacf93f063a07c5158492eea3ae6c032bb20096bc3273a3d56c9b7777f2` | moved  |
| `public/assets/audio/scene04-tts-v3-mix.wav` | 2274150 | `65c39e156b1d72088cb70c8967c1bb097494437f11d5937089425e7963e319a8` | `65c39e156b1d72088cb70c8967c1bb097494437f11d5937089425e7963e319a8` | moved  |
| `public/assets/audio/scene04-tts-v3.mp3` | 31584 | `0be52c95dfc247e0c82e591f61a095d8274ee26425af04aa1d9f8185f8a434ed` | `0be52c95dfc247e0c82e591f61a095d8274ee26425af04aa1d9f8185f8a434ed` | moved  |
| `public/assets/audio/scene05-tts-v2.mp3` | 22656 | `53b0e6728febe6bc5ce3c7e5c4604898a67d8e628c458330f6d4e34d5188665d` | `53b0e6728febe6bc5ce3c7e5c4604898a67d8e628c458330f6d4e34d5188665d` | moved  |
| `public/assets/audio/scene05-tts-v3-mix.wav` | 1423974 | `71113c23531cf01c5803bf994f1ccf911c52d9a2ed0922b26a863ea23317c58f` | `71113c23531cf01c5803bf994f1ccf911c52d9a2ed0922b26a863ea23317c58f` | moved  |
| `public/assets/audio/scene05-tts-v3.mp3` | 19776 | `18773c2b5e976448b665b9039fa9b5d8a9777aa3b0ff181b75a6b2644d5dfc13` | `18773c2b5e976448b665b9039fa9b5d8a9777aa3b0ff181b75a6b2644d5dfc13` | moved  |
| `public/assets/audio/scene06-tts-v2.mp3` | 29952 | `fbf561245e9029531b946188ac425d2b92c03da6f6e69a69bf11ce3c5e6b9220` | `fbf561245e9029531b946188ac425d2b92c03da6f6e69a69bf11ce3c5e6b9220` | moved  |
| `public/assets/audio/scene06-tts-v3-mix.wav` | 2087526 | `351277db4435e36a62088c12e48494737589a845d23117c1c957604de53e0379` | `351277db4435e36a62088c12e48494737589a845d23117c1c957604de53e0379` | moved  |
| `public/assets/audio/scene06-tts-v3.mp3` | 28992 | `da09a6ff46a6bfd59139bafc1a54ac159c3a4fc846876e1108e2f9fbf83f8e7f` | `da09a6ff46a6bfd59139bafc1a54ac159c3a4fc846876e1108e2f9fbf83f8e7f` | moved  |
| `public/assets/audio/scene07-tts-v2.mp3` | 20832 | `cf194ceb7fd5a01d09253f400c6627f683044ee63e929e46daac259f9b50188f` | `cf194ceb7fd5a01d09253f400c6627f683044ee63e929e46daac259f9b50188f` | moved  |
| `public/assets/audio/scene07-tts-v3-mix.wav` | 1354854 | `3a23b4c791ce83f1e23807f26d515765d33fd548c54878fc41527da56c071608` | `3a23b4c791ce83f1e23807f26d515765d33fd548c54878fc41527da56c071608` | moved  |
| `public/assets/audio/scene07-tts-v3.mp3` | 18816 | `4ece1310b9deaa06ab1a92ede98b3ef908e670260d06a721cc87007d7ea21e56` | `4ece1310b9deaa06ab1a92ede98b3ef908e670260d06a721cc87007d7ea21e56` | moved  |
| `public/assets/images/preview-v1-contact-sheet.jpg` | 163084 | `3d151c04953fb5db450dc6f3bd4ce9b70c53a17444ff8b9f7400778b74df1a7a` | `3d151c04953fb5db450dc6f3bd4ce9b70c53a17444ff8b9f7400778b74df1a7a` | moved  |
| `public/assets/images/preview-v2-contact-sheet.jpg` | 163843 | `f55a6f7e5accf4855d6b7b3aedd332b083e8f40750f7d143e5c2496ff3e0203c` | `f55a6f7e5accf4855d6b7b3aedd332b083e8f40750f7d143e5c2496ff3e0203c` | moved  |
| `public/assets/images/preview-v3-contact-sheet.jpg` | 209452 | `c930ef5560bb0e942a411715198b6f5c79603fbea63b1986774b784bea1da9b8` | `c930ef5560bb0e942a411715198b6f5c79603fbea63b1986774b784bea1da9b8` | moved  |
| `public/assets/images/preview-v3-s1-hook-qa.png` | 491812 | `f2a26c5c28b04aa3eab26d890b86af52ee66fca7e7d4a4013f7e7deaf412b6d4` | `f2a26c5c28b04aa3eab26d890b86af52ee66fca7e7d4a4013f7e7deaf412b6d4` | moved  |
| `public/assets/images/preview-v3-s4-section-qa.png` | 180896 | `66074f659cf460784181965a00fe2b500ad1afa4d4ab8c85f9c265a15efd3dc4` | `66074f659cf460784181965a00fe2b500ad1afa4d4ab8c85f9c265a15efd3dc4` | moved  |
| `public/assets/images/preview-v4-contact-sheet.jpg` | 216529 | `aaa90e054b9c0b7c7c636195e6880b085dfd683bca6c15540770e9a4db8bb020` | `aaa90e054b9c0b7c7c636195e6880b085dfd683bca6c15540770e9a4db8bb020` | moved  |
| `public/assets/images/preview-v4-s3-end-qa.png` | 656937 | `a7897486bda30550d915d094e62c3edaf6ad77d49edfcd5c67b4711fb537acfc` | `a7897486bda30550d915d094e62c3edaf6ad77d49edfcd5c67b4711fb537acfc` | moved  |
| `public/assets/images/preview-v5-caption-style-qa.png` | 1634672 | `13b63574a4bae7b71702ca6ab39ff0f5065f63f10d651971d5101cb3dbc403ab` | `13b63574a4bae7b71702ca6ab39ff0f5065f63f10d651971d5101cb3dbc403ab` | moved  |
| `public/assets/images/preview-v5-contact-sheet.jpg` | 225471 | `f3e931a7d9c5df7ee4188e09b1161d0b5a1a1ed964b23d723a7dfc5eb4a68a34` | `f3e931a7d9c5df7ee4188e09b1161d0b5a1a1ed964b23d723a7dfc5eb4a68a34` | moved  |
| `public/assets/images/preview-v6-scene02-end-qa.png` | 577114 | `2a84815b99da4cdebe0fbe1de163115e522297668d399bb5163d9b8e1d4a7b33` | `2a84815b99da4cdebe0fbe1de163115e522297668d399bb5163d9b8e1d4a7b33` | moved  |
| `public/assets/images/preview-v6-scene12-qa.png` | 214213 | `94e08296c8eb95f5e92a4fb3cfdbf629545e06ee7c68256ebc5c5da1ab721736` | `94e08296c8eb95f5e92a4fb3cfdbf629545e06ee7c68256ebc5c5da1ab721736` | moved  |
| `public/assets/images/preview-v7-image-swap-qa.png` | 393625 | `104887569bd178616851b9976bd967851c9f2840dd4c19b479c42417ede3cf2a` | `104887569bd178616851b9976bd967851c9f2840dd4c19b479c42417ede3cf2a` | moved  |
| `public/assets/images/preview-v7-scene02-label-qa.png` | 578037 | `1e9babf69dbed7317f6cb226dd21b8b0a5b18242a9b2c1010b99723d17fb4a8a` | `1e9babf69dbed7317f6cb226dd21b8b0a5b18242a9b2c1010b99723d17fb4a8a` | moved  |
| `public/assets/images/qa-scene2.png` | 1624992 | `5f4042ee0d30480a899283b9207e4e222ae57ae22ffd15d8c8d3bb62796543db` | `5f4042ee0d30480a899283b9207e4e222ae57ae22ffd15d8c8d3bb62796543db` | moved  |
| `public/assets/images/qa-v2-scene1.png` | 321028 | `9612a2441bb345c80a8c18e0a74df7d09907063e651d7158322667eb1c50b134` | `9612a2441bb345c80a8c18e0a74df7d09907063e651d7158322667eb1c50b134` | moved  |
| `public/assets/images/qa-v2-scene7.png` | 114504 | `3f4d806b8cf7fc162847fe187e8f450c5c179e6dbd939025d7bb1f34c5a9e69a` | `3f4d806b8cf7fc162847fe187e8f450c5c179e6dbd939025d7bb1f34c5a9e69a` | moved  |
| `public/assets/images/scene02-label-qa-v3.png` | 575189 | `4d170d0640b20578f256e65fd871a4fa349f9abb340da410837dea8ee097fa87` | `4d170d0640b20578f256e65fd871a4fa349f9abb340da410837dea8ee097fa87` | moved  |
| `public/assets/images/scene02-label-v3-tracking-comparison.png` | 231556 | `b942d30f9c3fdd3a523e74a352ae1dd3a2f125b95184b01b7841f8de5563e954` | `b942d30f9c3fdd3a523e74a352ae1dd3a2f125b95184b01b7841f8de5563e954` | moved  |
| `public/assets/images/younglim-step-basic-handle-right-qa-v1.json` | 790 | `da3646ca9e9d50fef1f9500a87f9fcf00dced8f785ca913f401165cc6498962d` | `da3646ca9e9d50fef1f9500a87f9fcf00dced8f785ca913f401165cc6498962d` | moved  |
| `public/assets/images/younglim-step-basic-handle-right-qa-v1.png` | 557443 | `762a95bdefeb15c8b5a07c5aa9bc1ed3e9343c57aece6b0244dd5bf16314bdb8` | `762a95bdefeb15c8b5a07c5aa9bc1ed3e9343c57aece6b0244dd5bf16314bdb8` | moved  |
| `public/assets/images/younglim-step-basic-handle-right-v1.png` | 1640446 | `79385daab9fa5faadc3a87fa2889a925558f6181eb15b6219d0b1ded0f339f45` | `79385daab9fa5faadc3a87fa2889a925558f6181eb15b6219d0b1ded0f339f45` | moved  |
| `public/assets/images/younglim-step-double-basic-fix-qa-v2.png` | 559940 | `42ab737077cb068bae177fbee91f67cb0b6d8cda91cd0bc34823e20e2d95afc3` | `42ab737077cb068bae177fbee91f67cb0b6d8cda91cd0bc34823e20e2d95afc3` | moved  |
| `public/assets/images/younglim-step-double-basic-local-edit-qa-v2.json` | 656 | `6c7d23b22341fe34ec5c650de8193bb2ea01a12bd3afd7a00762b4ab91116421` | `6c7d23b22341fe34ec5c650de8193bb2ea01a12bd3afd7a00762b4ab91116421` | moved  |
| `public/assets/images/younglim-step-expanded-ai-v1.png` | 1948292 | `53ed8eeae41a72f0a2089a5957d9322c8b324acf4864895f4d4339950c23967f` | `53ed8eeae41a72f0a2089a5957d9322c8b324acf4864895f4d4339950c23967f` | moved  |
| `public/assets/images/younglim-step-expanded-diagram-v1-comparison.png` | 583838 | `bbbf2db3a9d505645122f23ade85d57cb43b00065e77cbe27edf0efccf7d470d` | `bbbf2db3a9d505645122f23ade85d57cb43b00065e77cbe27edf0efccf7d470d` | moved  |
| `public/assets/images/younglim-step-expanded-diagram-v1.png` | 2144498 | `a0811f3e9fe8107ef50c097c4ee3696a7ce14d59ca2c7ed3e5457e10d95af719` | `a0811f3e9fe8107ef50c097c4ee3696a7ce14d59ca2c7ed3e5457e10d95af719` | moved  |
| `public/assets/images/younglim-step-expanded-space-v3-comparison.png` | 794339 | `3362d700abefed0131ff7c79a3ca0f5c2bbb35633b8e381dcf9694384fa1ff48` | `3362d700abefed0131ff7c79a3ca0f5c2bbb35633b8e381dcf9694384fa1ff48` | moved  |
| `public/assets/images/younglim-step-five-space-comparison-v1.png` | 1212428 | `3dc3c5ebca9c3558dad63ce98823577834fc265c5be5c6eb91be90007492ef3e` | `3dc3c5ebca9c3558dad63ce98823577834fc265c5be5c6eb91be90007492ef3e` | moved  |
| `public/assets/images/younglim-step-five-types-qa-v3.png` | 1212465 | `c2fc51e9109d8cc70612a299e48665fbe8a70af8f373032b3a741ffa0facb036` | `c2fc51e9109d8cc70612a299e48665fbe8a70af8f373032b3a741ffa0facb036` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v1-1x1.png` | 614427 | `e461912a0a2e8b1f5bf044b3915d8b03cca7e88dca05b004e3d9c25a7642e8f3` | `e461912a0a2e8b1f5bf044b3915d8b03cca7e88dca05b004e3d9c25a7642e8f3` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v1-3x4.png` | 882357 | `1fff9a4c1877da5994b07de0aa9bf702dd7502187442ca9306ccb8805b27c4c5` | `1fff9a4c1877da5994b07de0aa9bf702dd7502187442ca9306ccb8805b27c4c5` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v1-4x5.png` | 821687 | `40ccd7672167c8ccfd93398e4c62bafb3ec4663d62c422326bd65e3b5ca85b39` | `40ccd7672167c8ccfd93398e4c62bafb3ec4663d62c422326bd65e3b5ca85b39` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v1-mobile-qa.png` | 502192 | `8570658bc1c89fc3bfb761070a71350625c07e61da4584a324a85352995742e1` | `8570658bc1c89fc3bfb761070a71350625c07e61da4584a324a85352995742e1` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v2-1x1.png` | 700570 | `fea570d92f3bedd7f4fa0a00e00dc1d782738d5ef5d06377822b6525d682213e` | `fea570d92f3bedd7f4fa0a00e00dc1d782738d5ef5d06377822b6525d682213e` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v2-3x4.png` | 970960 | `d6dcd2eeb86abac3aa12a8073e71a04850eefc0d33cd9e06e8df0c472914b9e3` | `d6dcd2eeb86abac3aa12a8073e71a04850eefc0d33cd9e06e8df0c472914b9e3` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v2-4x5.png` | 912048 | `5a9964f23ececb00d06480b88bedee241c6955d43f7156b86af448b350645a3e` | `5a9964f23ececb00d06480b88bedee241c6955d43f7156b86af448b350645a3e` | moved  |
| `public/covers/qa/younglim-stepdoor-cover-v2-mobile-qa.png` | 512685 | `5c2068624a693c474fc9089b0b0586b3241d6c2edd7bbe346cc2226fc24dbde5` | `5c2068624a693c474fc9089b0b0586b3241d6c2edd7bbe346cc2226fc24dbde5` | moved  |
| `public/covers/younglim-stepdoor-cover-v1.png` | 1193812 | `067178fd802693d78db47e3e93f8d4d4ad393289d14f98c70cf5ae5803a5be3b` | `067178fd802693d78db47e3e93f8d4d4ad393289d14f98c70cf5ae5803a5be3b` | moved  |
| `public/covers/younglim-stepdoor-cover-v2.png` | 1286232 | `d4c14897bc9f502dee83d11a319cb12be21286dff6e3d74caa2e70825f0044fa` | `d4c14897bc9f502dee83d11a319cb12be21286dff6e3d74caa2e70825f0044fa` | moved  |

## Git

branch `main`. 이동 대상 중 tracked 0개. 기록 작성 전 staged/unstaged diff가 작업 전과 동일함을 확인했습니다. 이후 이 프로젝트의 기존 날짜형 기록만 추가했습니다. 다른 프로젝트/공통 가이드 변경 없음. add/commit/push 없음.

```text
 M "projects/door-closer-shorts-v1/docs/26.10.19\354\210\230\354\240\225.md"
 D projects/plywood-quality-change-shorts-v1/public/covers/plywood-quality-change-cover-v1.png
 D projects/plywood-quality-change-shorts-v1/public/covers/qa/plywood-quality-change-cover-square-v1.png
 D projects/plywood-quality-change-shorts-v1/public/covers/qa/plywood-quality-change-cover-square-v2.png
?? "projects/door-closer-shorts-v1/docs/26.10.22\354\210\230\354\240\225.md"
?? projects/door-closer-shorts-v1/docs/ai-model-test-keyframes-v2-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-keyframes-v3-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-omni-frames-v2-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-start-v1-qa.json
?? projects/door-closer-shorts-v1/docs/ai-model-test-video-v1-qa.json
?? projects/door-closer-shorts-v1/docs/cleanup-reassessment-v2.json
?? projects/door-closer-shorts-v1/docs/cleanup-reassessment-v2.md
?? projects/doormaster-handle-replacement-v1/README.md
?? "projects/doormaster-handle-replacement-v1/docs/26.10.22\354\210\230\354\240\225.md"
?? projects/doormaster-handle-replacement-v1/docs/approved-plan-v3.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-execution-git-preflight-v1.md
?? projects/doormaster-handle-replacement-v1/docs/cleanup-execution-v1.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-final-review-v1.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-final-review-v1.md
?? projects/doormaster-handle-replacement-v1/docs/cleanup-preflight-v1.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-preflight-v1.md
?? projects/doormaster-handle-replacement-v1/docs/cleanup-reassessment-v2.json
?? projects/doormaster-handle-replacement-v1/docs/cleanup-reassessment-v2.md
?? projects/doormaster-handle-replacement-v1/docs/completed-project-cleanup-execution-v1.json
?? projects/doormaster-handle-replacement-v1/docs/completed-project-cleanup-execution-v1.md
?? projects/doormaster-handle-replacement-v1/docs/completed-project-cleanup-summary-v2.md
?? projects/doormaster-handle-replacement-v1/docs/cover-v1-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/cover-v1-qa.md
?? projects/doormaster-handle-replacement-v1/docs/cover-v2-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/cover-v2-qa.md
?? projects/doormaster-handle-replacement-v1/docs/cover-v3-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/cover-v3-qa.md
?? projects/doormaster-handle-replacement-v1/docs/ending-README.md
?? projects/doormaster-handle-replacement-v1/docs/ending-canonical-sha256.json
?? projects/doormaster-handle-replacement-v1/docs/git-preflight-status-v1.md
?? projects/doormaster-handle-replacement-v1/docs/initialization-qa.json
?? projects/doormaster-handle-replacement-v1/docs/latch-correction-preservation-v2.json
?? projects/doormaster-handle-replacement-v1/docs/latch-correction-qa-v2.md
?? projects/doormaster-handle-replacement-v1/docs/preview-caption-input-lock-v1.json
?? projects/doormaster-handle-replacement-v1/docs/preview-caption-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/preview-caption-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-qa.md
?? projects/doormaster-handle-replacement-v1/docs/preview-v1-timing.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v2-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v2-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v2-qa.md
?? projects/doormaster-handle-replacement-v1/docs/preview-v3-input-lock.json
?? projects/doormaster-handle-replacement-v1/docs/preview-v3-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/product-reference-report.md
?? projects/doormaster-handle-replacement-v1/docs/product-reference-sha256.json
?? projects/doormaster-handle-replacement-v1/docs/prompts/after-v1.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/before-v1.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/before-v2.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/scene03-position-v2.txt
?? projects/doormaster-handle-replacement-v1/docs/prompts/scene03-v1.txt
?? projects/doormaster-handle-replacement-v1/docs/scene01-before-v2-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/scene01-before-v2-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/scene02-after-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene02-input-baseline-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene02-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-full-frame-qa.md
?? projects/doormaster-handle-replacement-v1/docs/scene03-input-baseline-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-position-baseline-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-position-measurements-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene03-position-qa-v2.md
?? projects/doormaster-handle-replacement-v1/docs/scene03-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-baseline-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-design-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-grid-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-info-qa-v1.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-mechanical-qa-v1.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-style-baseline-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-style-mechanical-qa-v2.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-subtitle-style-qa-v2.md
?? projects/doormaster-handle-replacement-v1/docs/scene04-tts-v7-input.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-tts-v8-input.json
?? projects/doormaster-handle-replacement-v1/docs/scene04-tts-v9-input.json
?? projects/doormaster-handle-replacement-v1/docs/scene05-tts-v4-input.json
?? projects/doormaster-handle-replacement-v1/docs/slim-copy-manifest.json
?? projects/doormaster-handle-replacement-v1/docs/sns-upload-copy-v3.md
?? projects/doormaster-handle-replacement-v1/docs/sns-v3-save-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-breath-mechanical-v3.json
?? projects/doormaster-handle-replacement-v1/docs/tts-final-baseline-v2.json
?? projects/doormaster-handle-replacement-v1/docs/tts-final-input-v2.json
?? projects/doormaster-handle-replacement-v1/docs/tts-final-mechanical-qa-v2.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v7-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v7-mechanical.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v8-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v8-mechanical.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v9-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-natural-v9-mechanical.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-05-natural-v6-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-final-baseline-v6.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-final-input-v6.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-final-mechanical-v6.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-revised-baseline-v5.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-revised-input-v5.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-revised-mechanical-v5.json
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v4-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v5-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v7-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-scene04-v8-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-breath-correction-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-generation-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-input-v1.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v3-natural-speech-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-baseline.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-mechanical-qa.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-natural-speech-qa.md
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-part-analysis.json
?? projects/doormaster-handle-replacement-v1/docs/tts-v4-part-input.json
?? projects/doormaster-handle-replacement-v1/package-lock.json
?? projects/doormaster-handle-replacement-v1/package.json
?? projects/doormaster-handle-replacement-v1/public/assets/audio/ending-approved-v3.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene01-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene02-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene03-tts-v1.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene04-tts-v9.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/audio/scene05-tts-v4.mp3
?? projects/doormaster-handle-replacement-v1/public/assets/fonts/Pretendard-ExtraBold.woff2
?? projects/doormaster-handle-replacement-v1/public/assets/fonts/Pretendard-Medium.woff2
?? projects/doormaster-handle-replacement-v1/public/assets/fonts/Pretendard-SemiBold.woff2
?? projects/doormaster-handle-replacement-v1/public/assets/images/caption-after-patch-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/caption-removed-patch-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-components.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-drawing.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-manual.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/domus511ni-official-product.jpg
?? projects/doormaster-handle-replacement-v1/public/assets/images/preview-caption-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene01-before-candidate-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene02-after-candidate-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-handle-removed-candidate-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-handle-removed-candidate-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene03-position-edit-input-v2.png
?? projects/doormaster-handle-replacement-v1/public/assets/images/scene04-grid-qa-v1.png
?? projects/doormaster-handle-replacement-v1/public/assets/logos/daesanlogo2.png
?? projects/doormaster-handle-replacement-v1/public/assets/video/IMG_3934.MOV
?? projects/doormaster-handle-replacement-v1/public/assets/video/daesan-headquarters-ending-approved-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v3.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/doormaster-handle-replacement-preview-v4.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/handle-body-visual-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/headquarters-normal-speed-hold.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene01-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene02-caption-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene02-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene03-caption-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene03-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-grid-visual-layout2-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene04-info-preview-v4.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene05-caption-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/assets/video/scene05-preview-v1.mp4
?? projects/doormaster-handle-replacement-v1/public/covers/doormaster-handle-replacement-cover-v3.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v3-3x4.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v3-4x5.png
?? projects/doormaster-handle-replacement-v1/public/covers/qa/cover-v3-mobile.png
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/doormaster-series-sign-v2-outlined.svg
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/doormaster-series-sign-v2.png
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/doormaster-series-sign-v2.svg
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/font-settings-v2.json
?? projects/doormaster-handle-replacement-v1/public/references/series-sign-v2/fonts/Pretendard-Black.ttf
?? projects/doormaster-handle-replacement-v1/remotion.config.ts
?? projects/doormaster-handle-replacement-v1/scripts/assemble-caption-preview-v1.py
?? projects/doormaster-handle-replacement-v1/scripts/assemble-preview-v1.py
?? projects/doormaster-handle-replacement-v1/scripts/assemble-preview-v2.py
?? projects/doormaster-handle-replacement-v1/scripts/assemble-preview-v3.py
?? projects/doormaster-handle-replacement-v1/scripts/correct-tts-breath-v3.py
?? projects/doormaster-handle-replacement-v1/src/DoorMasterBodyCaptionV4.tsx
?? projects/doormaster-handle-replacement-v1/src/Scene04InfoV1.tsx
?? projects/doormaster-handle-replacement-v1/src/Scene04InfoV2.tsx
?? projects/doormaster-handle-replacement-v1/src/Scene04PreviewV1.tsx
?? projects/doormaster-handle-replacement-v1/src/caption-patch-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/cover-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/cover-v2.tsx
?? projects/doormaster-handle-replacement-v1/src/cover-v3.tsx
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/DaesanEnding.tsx
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/HeadquartersOverlay.tsx
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/brief.ts
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/fonts.ts
?? projects/doormaster-handle-replacement-v1/src/daesan-ending/approved/tokens.ts
?? projects/doormaster-handle-replacement-v1/src/index.tsx
?? projects/doormaster-handle-replacement-v1/src/preview-index-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-grid-v1-layout2.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-grid-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-index-v1.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-index-v2.tsx
?? projects/doormaster-handle-replacement-v1/src/scene04-simple-v3.tsx
?? projects/doormaster-handle-replacement-v1/tsconfig.json
?? "projects/hidden-door-carpentry-shorts-v2/docs/26.10.22\354\210\230\354\240\225.md"
?? projects/hidden-door-carpentry-shorts-v2/docs/cleanup-reassessment-v2.json
?? projects/hidden-door-carpentry-shorts-v2/docs/cleanup-reassessment-v2.md
?? "projects/plywood-quality-change-shorts-v1/docs/26.10.22\354\210\230\354\240\225.md"
?? projects/plywood-quality-change-shorts-v1/docs/cleanup-reassessment-v2.json
?? projects/plywood-quality-change-shorts-v1/docs/cleanup-reassessment-v2.md
?? projects/younglim-stepdoor-types-shorts-v1/docs/cleanup-execution-v1.json
?? projects/younglim-stepdoor-types-shorts-v1/docs/cleanup-preflight.json
?? projects/younglim-stepdoor-types-shorts-v1/docs/cleanup-preflight.md
?? projects/younglim-stepdoor-types-shorts-v1/docs/expanded-ai-v1-prompt-pending.txt
?? projects/younglim-stepdoor-types-shorts-v1/docs/younglim-2627-catalog-official.pdf
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/official-double-section.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-basic-unified-qa-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-space-v1.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-double-basic-space-v2.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/images/younglim-step-expanded-space-v2.png
?? projects/younglim-stepdoor-types-shorts-v1/public/assets/video/younglim-stepdoor-picture-silent-v8.mp4
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