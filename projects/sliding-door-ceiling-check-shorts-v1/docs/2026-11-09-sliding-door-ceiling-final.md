# 슬라이딩 도어 천장 마감 편 최종 정리 · 2026-11-09

댐퍼 교체 현장에서 발생한 마감재 재시공 사례와 유지보수 접근 경로를 다룬 영상. 사용자 승인 범위는 신규 5개 Scene 영상, 커버, Scene별 음원·시안, 세 플랫폼 SNS 문구다.

## 정리와 QA

사용자 지정 public/assets/audio/new-five-scenes-tts-listening-v1.mp3 1개를 삭제했다. 일반 파일, 프로젝트 내부 실경로, 소스 참조 부재, 154,124바이트 및 SHA256 125aaf9ae472dc1e320d0630523dcce5c8c3ee567ca3cf944629f8b124684947을 확인했다. 삭제 후 경로 부재, 기존 조사 대상 중 남은 282개 파일(후보 보고서 포함)의 삭제 전후 SHA256 일치를 확인했다. D 잔여 49개와 기존 E 119개는 보류다. 개별 경로는 sliding-door-ceiling-cleanup-candidates.md에 있다.

최종 MP4는 H.264/AAC, 1080×1920, 30fps, 1358프레임, 45.266667초. FFmpeg로 두 스트림 끝까지 디코딩했다. 커버 PNG도 전체 판독했다(1080×1920). SNS 문서에서 YouTube Shorts·Instagram Reels·Naver Clip을 확인했다. 공통 엔딩은 승인 MP4의 내장 오디오를 사용하며 컴포넌트·본사 원본 MOV·배경 MP4·로고·폰트 3종·음원을 보존했다.

## 보존 자산 SHA256

모든 값은 삭제 전후 일치했다. 과거 QA 기록에서도 같은 해시가 발견된 항목은 별도로 표시했다.

- `docs/sliding-door-ceiling-sns-upload-v1.md` — `8c33ff3e6c5341787d3c756fdef893413658e53a4ccb4e8bfea6602ecdb35ca5`
- `public/assets/audio/new-scene01-tts-v4-b.mp3` — `11776df9192ad0f413e7bae0247d56e7dc542a1b0be0e66b15d2a0c0f3d0fe3d`
- `public/assets/audio/new-scene02-tts-v3.mp3` — `0fc528496475767f4fcc459746bfc9cbad48f0f6b39ad7d9162dfa0751fcc2ce`
- `public/assets/audio/new-scene03-tts-v3.mp3` — `1ca5d278a508c8616ebbaaaf3dc2ab93459f051d73a7264a05a05446ef90cda9`
- `public/assets/audio/new-scene04-tts-v3.mp3` — `a85a5136b581b16f92bf07a5085d63474f11b86e3d72604f7e4b49c6a39c7256`
- `public/assets/audio/new-scene05-tts-v2.mp3` — `a92d212ba89017be36ba01188e8eedab37614027ae43bf6f93ad5f5f2f13de0d` (과거 QA 값 일치)
- `public/assets/images/doormaster-sliding-ceiling-cover-v1.png` — `36ec6342fcb5511172e8b2c48f7887a231a6371099633022023a2221e406b31c`
- `public/assets/images/new-scene01-hook-v2.png` — `fb37ed040933b458cdab0735725808ee412d7330ad513d8742fc4ba07f25e496`
- `public/assets/images/new-scene02-finished-v2-candidate.png` — `117ae10b91be8db6d4c580bcf059cf445c2530ffc041165ef881fbecd9dc1972` (과거 QA 값 일치)
- `public/assets/images/new-scene02-finished-v3-candidate.png` — `ea5262f343ac9944e35007e7aad354783d75a4a7db302ed046905c3d94b89ac6`
- `public/assets/images/new-scene02-real-v3-a.png` — `19f8696b4573674a09c9d2dfe0a9b6d59a67ac32b13ac0e6820bdc6d22bfb5d0`
- `public/assets/images/new-scene02-result-v1.png` — `4cbdcf20a775be49c5a96638b6cd8eb271d8e17313987e5547bfe3bf4e5bbbbe`
- `public/assets/images/new-scene03-real-comparison-v2.png` — `ee5d75cef33013750c047c19833d04ccc28622064036c6accadbfa3813d1f8ce`
- `public/assets/images/new-scene04-hardware-v2.png` — `e918b6640e29370fb9bfa68d19a10c9aa39f12c80ee79f9b07b9bb9909e3f864`
- `public/assets/images/new-scene05-checklist-v1.png` — `77030294fe32f24bb7855ea2a768fd61564908cf1775fd1386130630f83c9fa5`
- `public/assets/images/scene01-before-ai-v3-candidate.png` — `0a4a2e2901674e90374201dd9b1a21dcebdd56bd5e094a44436c64679f835477` (과거 QA 값 일치)
- `public/assets/video/new-scene01-preview-v1.mp4` — `12aecc2999292d046e21095eb72d1b881f139f7bb2d138701733cc05c7e5428e`
- `public/assets/video/new-scene02-preview-v1.mp4` — `b61839db037181dd967f4636429f3e04238643f61dea70b2a4803cbb347c1fea`
- `public/assets/video/new-scene03-preview-v1.mp4` — `b324768e7dded2b59870a0e9f5719afad3fb0fae8b80d66520f8066ff491b9f4`
- `public/assets/video/new-scene04-preview-v1.mp4` — `c0e8699bd70c2aca1f0a3ccacd1aaa5d810358fb55659164dddb1361026f28bf`
- `public/assets/video/new-scene05-preview-v1.mp4` — `13b857f71df2891719ecd9ba585fd8558cf0a7cd11ab4d3ddef17e0d5fcc97d7`
- `public/assets/video/sliding-door-ceiling-check-new-five-scenes-preview-v1.mp4` — `2b97ce00c299a0d88bf3981b5fed0e711f272c9131aa3517cd71697bda2b7067`
- `public/assets/audio/ending-approved-v3.mp3` — `bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181` (과거 QA 값 일치)
- `public/assets/fonts/Pretendard-ExtraBold.woff2` — `dd7c1e156f508eb962acc7a33a7a1896d1e0b71e11156fad96e731689ceb6dc3` (과거 QA 값 일치)
- `public/assets/fonts/Pretendard-Medium.woff2` — `d03481330eeba0659ab5b87f25ceb504a35de377dd90a0d0aba2982eb2d05e2c` (과거 QA 값 일치)
- `public/assets/fonts/Pretendard-SemiBold.woff2` — `c863f76a7de5c1ddc1ed8b2fa794964530774592c4f31407a84e2a2ae93f17f0` (과거 QA 값 일치)
- `public/assets/logos/daesanlogo2.png` — `da4fb4417970221c9caa2f00040ffd56f13eacaa86fdbad000b64606f35530ea` (과거 QA 값 일치)
- `public/assets/video/IMG_3934.MOV` — `c4b52f3a215ad669b2facdd928742878ea24b79d3c05525abd02443443fd1114` (과거 QA 값 일치)
- `public/assets/video/daesan-headquarters-ending-approved-v1.mp4` — `2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5` (과거 QA 값 일치)
- `public/assets/video/headquarters-normal-speed-hold.mp4` — `4cf27faed9cb1ebfdd0e738bb54575c9167e6698c136c08997034903dca12324` (과거 QA 값 일치)

## 공통 가이드와 Git 백업

프로젝트 생성(11월 5일 14:01 KST) 이후 저장소 공통 docs의 가이드 변경 기록 및 현재 미커밋 변경 없음. 같은 날 10:43 가이드 갱신은 프로젝트 생성 이전이다.

승인 자산·제작 소스와 관련 QA를 선별해 main 브랜치에 백업한다. 해당 백업의 커밋은 이 기록을 처음 추가한 커밋으로 조회할 수 있다.

백업 결과: 61개 파일을 ebcd5feca66a7872a058e0bea33476967e1bbc12로 커밋하고 origin/main에 push 성공. 직후 local HEAD와 origin/main 일치. 추적 파일 변경 0개, 미추적 파일 482개(현재 프로젝트 219개, 다른 경로 263개). 이 결과를 본 기록에 추가한 후 기록만 별도 백업한다.

## 2026-11-09 후속 Slim Archive

사용자가 승인한 Slim 보고서 ②의 122개를 /Users/janghokim/.Trash/sliding-door-ceiling-check-cleanup-20261109/ 아래 원래 상대경로로 이동했다. MP4 16개 14,744,653 B, MP3·WAV 36개 7,446,312 B, PNG 67개 28,836,819 B, Finder 메타데이터 3개 26,636 B. 합계 51,054,420 B. 각 원래 경로 부재와 이동본 크기·SHA256 일치 확인. 실패 0, 제외 0.

남은 MP4 8개(전체본 1, Scene 5, 엔딩 2)와 오디오 6개(승인 TTS 5, 엔딩 1) 전체 디코딩 완료. 승인 전체본 1080×1920, 30 fps, 1358프레임, 45.266667초. 커버 PNG 전체 판독 및 1080×1920 확인. 위 승인 자산 해시 재대조 및 보존 목록 161개 이동 직후 해시 일치. 상부 구조 생성 입력·2-B 직접 원본·SNS·엔딩 소스 보존. node_modules 보존. 공통 가이드 변경 없음.

루트 main에서 날짜형 기록과 Slim 보고서 2개만 백업 대상으로 선택. 실행 전 미추적 프로젝트 101개(보고서 포함), 외부 263개. 보고서를 커밋하면 프로젝트 100개가 남는다. 승인 엔딩 촬영 MOV는 기존 일반 Git blob이며 추후 LFS 검토 대상이다.
