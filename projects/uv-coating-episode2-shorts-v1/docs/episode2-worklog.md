# UV코팅판 2편 작업기록

- 기록 상태: 최종 산출물 정리 기록 (Git 작업 없음)
- 최종 전체본: `public/previews/final/uv-coating-episode2-full-final.mp4`
- 최종 길이: 34.944초
- 화면 규격: 1080×1920, 9:16

## Scene별 최종 채택 파일

| Scene | 최종 파일 | 길이 | 주요 자산 |
|---|---|---:|---|
| Scene1 | `public/previews/final/scene01-final.mp4` | 5.184초 | `episode2-scene01-veo-v3.mp4`, 분리 생성·0.18초 결합 TTS |
| Scene2 | `public/previews/final/scene02-final.mp4` | 2.048초 | `episode2-scene02-startframe-v1.png`, 정지 이미지 |
| Scene3 | `public/previews/final/scene03-final.mp4` | 6.528초 | `episode2-scene03-veo-v2.mp4`, SSML break 350ms TTS, 마지막 프레임 freeze |
| Scene4 | `public/previews/final/scene04-final.mp4` | 4.544초 | `episode2-scene04-veo-v1.mp4` |
| Scene5 | `public/previews/final/scene05-final.mp4` | 6.059초 | Scene5 Veo 안정 구간 채택, 마지막 프레임 freeze |
| Scene6 | `public/previews/final/scene06-final.mp4` | 5.184초 | `episode2-scene06-veo-v1.mp4`, 자막 `새로 생긴 면입니다` 최종 반영 |
| Scene7 | `public/previews/final/scene07-final.mp4` | 5.717초 | `scene07-daesan-ending-final.mp4`, 1편 최종본에서 추출한 엔딩 음성 별도 연결 |

## 주요 시행착오와 개선

### 이미지·Veo

- 판재가 유리처럼 보이거나 실제보다 두껍게 생성된 시도가 있어, 밝은 우드톤의 불투명 패널과 6~18mm 두께를 반복 명시했다.
- 절단면이 정면에서 보이지 않는 문제는 판재를 30~40도 회전해 코팅된 넓은 면과 무광 절단면이 동시에 보이도록 개선했다.
- 과장된 별 모양 광택은 제거하고 부드러운 대각선 하이라이트만 남겼다.
- 드릴홀이 스피커 우퍼처럼 커지는 문제는 판재 폭의 5% 이하, 1개, 옅은 원목 내부 톤으로 제한했다.
- Veo에서 레터박스, 입·눈 왜곡, 후반 손·얼굴 변형이 발생했다. 9:16 출력 명시, 고정 카메라, 얼굴 특징 고정 프롬프트를 적용하고 불안정한 후반부는 트림·freeze 처리했다.
- 캐릭터 눈 안정성을 위해 `character's eyes must remain perfectly stable and unchanged throughout, exactly matching reference image`를 프롬프트에 명시한다. 누락된 시도에서는 눈 모양이 순간적으로 왜곡됐다.
- 입 모양은 `mouth stays exactly as shown in reference image, no mouth movement, no talking animation`으로 잠근다. 누락하면 입이 길어지거나 웃는 모양으로 변형될 수 있다.
- 손가락 포즈에는 `pointing hand must maintain its exact shape, fingers stay clearly defined, no melting or blob-like deformation`을 추가한다. 특히 3초 이후 후반 프레임에서 손이 뭉개지는 경향이 있었다.
- 출력 aspect ratio는 반드시 `9:16` 풀프레임으로 명시한다. 누락하면 상하단 레터박스가 생길 수 있다.
- 후반부에만 왜곡이 생기면 재생성보다 안정 구간 직전까지 트림하고 마지막 프레임 freeze로 필요한 길이를 보충하는 방식이 효율적이었다.

### TTS·오디오

- 쉼표만으로 의미 단위가 붙거나 SSML 구간에서 필러음이 생기는 문제가 있어 Scene1·6은 두 발화로 나눠 생성한 뒤 0.18초 무음으로 결합했다.
- 쉼표만으로는 자연스러운 pause가 보장되지 않았다.
- SSML break에서 필러음(`음~`)이 발생하면 같은 방식으로 재시도하지 않고 즉시 문장 분리 방식으로 전환한다.
- 문장을 둘로 나눠 각각 생성한 뒤 `0.15~0.2초` 무음으로 결합하는 방식은 효과적이지만, 두 번째 문장 시작 톤이 부자연스럽게 올라갈 수 있다.
- 분리 발화의 톤 연결이 불안정하면 문장 분리를 중단하고, 쉼표 위치에 SSML break `0.3~0.4초`를 넣은 단일 문장 생성으로 전환할 수 있다. Scene별 최적 방식이 다르므로 한 방식이 한 번 실패하면 같은 설정을 반복하기보다 다른 접근을 시험한다.
- Scene3는 속도를 높여 4초 영상에 맞추는 방식이 부자연스러워 speakingRate 1.00으로 복원하고, 영상 종료 후 마지막 프레임을 freeze하는 방식으로 전환했다.
- Scene3의 문장 끝 질문조·상승 억양과 여러 대사 후보를 검토했다. 최종 대사는 `원래 UV코팅된 표면과 달리, 절단면은 원재료가 노출됩니다.`이며 쉼표 위치에 SSML break 350ms를 적용했다.
- Scene7 원본 영상에는 음성 트랙이 없어, `uv-coating-episode1-full-final.mp4`의 엔딩 구간에서 실제 확정 음성을 추출해 Remotion `Audio` 트랙으로 명시 연결했다.

## 커버 후보

- `public/covers/episode2-cover-a-v1.png`
- `public/covers/episode2-cover-b-v1.png`
- 규격: 1080×1920 PNG
- 제작 방식: Vertex AI `gemini-2.5-flash-image`가 제품·캐릭터·환경 비주얼을 생성하고, Codex/Remotion이 한글 타이포그래피와 승인 브랜드 로고를 후처리했다.
- 주제: UV코팅판의 광택 표면과 무광 절단면 차이
- 디자인: MAIN Notion / SECONDARY Apple

## 2026-11-20 · 승인본 경로와 Slim Archive 후속 점검

- UPLOAD_FINAL_VIDEO `public/assets/video/uv-coating-episode2-shorts-v1-final.mp4`
- FINAL_SCENES 승인 구간·독립 파일 대응 확인 대기
- UPLOAD_FINAL_COVER 승인 확인 대기 · `public/covers/square-safe/uv-coating-episode2-cover-square-safe-final.png`
- UPLOAD_FINAL_SNS 승인 확인 대기 · `docs/2편-SNS업로드문구-확정.md`

파일명 변경 전후 SHA256·바이트·해상도·FPS·프레임 수를 대조했다.
- `public/previews/final/uv-coating-episode2-full-final.mp4` → `public/assets/video/uv-coating-episode2-shorts-v1-final.mp4` · 8888882 B · 1080×1920 · 30/1 fps · 1047f · `f4ec41d26d5196b90118dd7986e3b28135a9594fd945099ab0bf74df87f53c9c`

신규 삭제 0건. 개별 삭제 승인과 잔여 파일 판정 대기.
- 개별 Scene 승인·최종 화면 및 조립 입력 대응 확인 필요

### 승인 경로 후속 대조 (2026-11-20)

- UPLOAD_FINAL_VIDEO `public/assets/video/uv-coating-episode2-shorts-v1-final.mp4`
- FINAL_SCENES `public/assets/video/scene01-final.mp4`, `public/assets/video/scene02-final.mp4`, `public/assets/video/scene03-final.mp4`, `public/assets/video/scene04-final.mp4`, `public/assets/video/scene05-final.mp4`, `public/assets/video/scene06-final.mp4`, `public/assets/video/scene07-final.mp4`
- UPLOAD_FINAL_COVER 승인 확인 대기 · public/covers/square-safe/uv-coating-episode2-cover-square-safe-final.png
- UPLOAD_FINAL_SNS 승인 확인 대기 · docs/2편-SNS업로드문구-확정.md
- `public/previews/final/scene01-final.mp4` → `public/assets/video/scene01-final.mp4` · 1556308 B · 1080×1920 · 30/1 fps · 154f · SHA256 `10794c9d6e83a0bb5c6579edac18f5cccd013f0283dcaa9c237df39d8d03d392` 전후 일치
- `public/previews/final/scene02-final.mp4` → `public/assets/video/scene02-final.mp4` · 167091 B · 1080×1920 · 30/1 fps · 60f · SHA256 `5e9f4d68098c76fca95c7722edb77be18d4450d30ec56f1512f375e79c544dcf` 전후 일치
- `public/previews/final/scene03-final.mp4` → `public/assets/video/scene03-final.mp4` · 2207457 B · 1080×1920 · 30/1 fps · 194f · SHA256 `8112521075755d86450918cf93fab2e5839f4d7ef00ff2d0d451373c0fe1edcb` 전후 일치
- `public/previews/final/scene04-final.mp4` → `public/assets/video/scene04-final.mp4` · 1961943 B · 1080×1920 · 30/1 fps · 135f · SHA256 `f8cd527ed3cabaab73a20d5b573bdf57a266aef98b7a6ab8c0d0c494ea27f312` 전후 일치
- `public/previews/final/scene05-final.mp4` → `public/assets/video/scene05-final.mp4` · 1304228 B · 1080×1920 · 30/1 fps · 180f · SHA256 `6eabb92db44c441f615a102b1e4dac3613b5ee782203b0ff90a9dd36c9112def` 전후 일치
- `public/previews/final/scene06-final.mp4` → `public/assets/video/scene06-final.mp4` · 1390258 B · 1080×1920 · 30/1 fps · 154f · SHA256 `4c12d4cbe80ca2c404b50e15586f095d47757fd4a8e8ce7b7364a234157840b5` 전후 일치
- `public/previews/final/scene07-final.mp4` → `public/assets/video/scene07-final.mp4` · 464391 B · 1080×1920 · 24/1 fps · 136f · SHA256 `42f1698bf6eb7938bc2273cb88b2a05452b5e37ae75346020d7fbc2b0b498d45` 전후 일치
신규 삭제 0건. 기존 승인 기록과 QA 결과는 보존했다.
