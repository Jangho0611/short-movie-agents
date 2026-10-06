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
