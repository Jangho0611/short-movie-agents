# 자이 천연석고보드 쇼츠 최종 보존본

- 최종 수정일: 2026-08-13
- 최종 전달 영상: `public/assets/video/xi-natural-gypsum-final.mp4`
- final 보존 영상: `final/video/xi-natural-gypsum-final-30fps.mp4`
- Remotion 승인 마스터: `final/video/xi-natural-gypsum-final-master-24fps.mp4`
- 전달 규격: 1080×1920, 30fps, H.264/AAC
- 최종 MP4 실측 길이: 36.266667초
- 승인 타임라인: 869 frames / 24fps (30fps 전달본은 동일 시간을 유지한 프레임 변환본)

## Scene별 최종 구성

| Scene | 길이 | 최종 비주얼 | TTS | 효과 |
|---|---:|---|---|---|
| 1 | 144f / 6.000초 | `final/video/scene01-hook-veo-v2-final.mp4` | `final/tts/scene01-tts-final-part1.mp3`, `final/tts/scene01-tts-final-part2.mp3` | 두 구간 사이 0.354초 pause |
| 2 | 207f / 8.625초 | `final/video/scene02-veo-v1-final.mp4` | `final/tts/scene02-tts-final-v4.mp3` | 승인 video motion |
| 3 | 142f / 5.917초 | `final/image/scene03-final.png` | `final/tts/scene03-tts-final-v5.mp3` | scale 1.000→1.003 |
| 4 | 122f / 5.083초 | `final/image/scene04-final.png` | `final/tts/scene04-tts-final-v4.mp3` | scale 1.000→1.003, 추가 overlay 없음 |
| 5 | 137f / 5.708초 | `final/image/scene05-final.png` | `final/tts/scene05-tts-final-v4.mp3` | scale 1.000→1.004 + 좌→우 순차 pulse |
| 6 | 117f / 4.875초 | `final/image/daesanlogo2.png` 및 `final/source/Scene5Ending.tsx` | `final/tts/scene06-tts-v3.mp3` | 기존 엔딩 유지 |

Scene 1 합성 보존 음성은 `final/tts/scene01-tts-final-split-composite.mp3`이다.

Scene 4/5 개별 30fps 전달본은 각각 `final/scene/scene04-final-motion-30fps.mp4`, `final/scene/scene05-final-motion-30fps.mp4`이다. 승인 타임라인 원본은 같은 폴더의 `*-master-24fps.mp4`로 보존한다.

최종 조립 소스 스냅샷은 `final/source/`에 있다. 원래 프로젝트 내 실제 실행 소스 경로는 `src/Root.tsx`, `src/components/Scene01Video.tsx`부터 `Scene05Static.tsx`, `XiNaturalGypsumFinal.tsx`, `DaesanLogoEnding.tsx`, `SceneCaptionsV2.tsx`, 그리고 `src/scene5/`이다.

## 최종 QA

- 1080×1920: PASS
- 30fps 전달본: PASS
- Scene 전환: PASS
- TTS/자막 싱크: PASS
- Scene 1 split TTS pause 0.354초: PASS
- 전체 길이: PASS
- H.264/AAC 전체 디코드: PASS
- 프로젝트 내부 최종본 저장: PASS
- final 보존 폴더 필수 항목: PASS
