# 합판 Shorts 정리 후보 검토 — 2026-10-13

상태: 후보 보고만 완료. 삭제·이동·Git 작업 미실행. 용량은 파일 논리 크기(MiB), du 블록 사용량과 다를 수 있음.

## 보존 대상

- Preview v3 전체 및 Scene 1~6 최종 MP4, 승인 음원(Scene 1 v2 / Scene 2~6 v7), 통합 청취본 v8.
- Cover v3 및 중앙 square, SNS v1, 작업기록, 구현 소스·설정·폰트·직접 참조 자산, 공통 엔딩 전체.
- Cover v2 PNG와 v3 raw render: v3 비대상 픽셀 보존 처리의 직접 재현 자료. 중간본으로 정리하지 않음.
- 기존 Preview v1/v2, 이전 Scene 영상·음원·Cover v1/v2: 기존 보존 지시 유지.
- 최종 QA JSON·해시·contact sheet·타이밍 근거, 창고 국소복원 원본 및 마스크/스크립트 보존.
- .venv 약31.74MiB: 의존성 고정 목록 미검증으로 이번 이동 후보 제외.
- 무음 중간 영상 및 조립 WAV: 현재 조립 스크립트 의존 관계를 유지하기 위해 이번 후보 제외.

## 승인 요청 후보

### A — 재생성 가능한 렌더 캐시
2개 / 155.75 MiB

| 파일 | MiB |
|---|---:|
| `node_modules/.cache/webpack/remotion-production-4.0.523/c42075f5b0f57af363db9885cb245e81/index.pack` | 0.229 |
| `node_modules/.cache/webpack/remotion-production-4.0.523/c42075f5b0f57af363db9885cb245e81/0.pack` | 155.520 |

### B — 중복 레이아웃·개별 프레임 QA PNG
23개 / 27.25 MiB

| 파일 | MiB |
|---|---:|
| `qa/preview-v1/scene03-layout.png` | 0.142 |
| `qa/preview-v1/scene04-layout.png` | 0.108 |
| `qa/preview-v1/scene01-layout.png` | 1.839 |
| `qa/preview-v1/scene02-layout.png` | 1.269 |
| `qa/preview-v1/scene05-layout.png` | 1.014 |
| `qa/preview-v3/scene06-layout.png` | 1.189 |
| `qa/preview-v3/rendered-scene03-frame124.png` | 1.265 |
| `qa/preview-v3/rendered-scene03-frame125.png` | 1.556 |
| `qa/preview-v3/rendered-scene01-frame30.png` | 1.253 |
| `qa/preview-v3/scene03b-layout.png` | 1.916 |
| `qa/preview-v3/rendered-scene04-frame190.png` | 0.214 |
| `qa/preview-v3/scene04-layout.png` | 0.101 |
| `qa/preview-v3/scene01-layout.png` | 1.852 |
| `qa/preview-v3/rendered-scene05-frame190.png` | 0.651 |
| `qa/preview-v3/scene02-layout.png` | 1.268 |
| `qa/preview-v3/rendered-scene06-frame190.png` | 0.913 |
| `qa/preview-v3/scene03a-layout.png` | 1.765 |
| `qa/preview-v3/rendered-scene02-frame75.png` | 0.932 |
| `qa/preview-v3/scene05-layout.png` | 0.898 |
| `qa/preview-v2/rendered-cut-02.png` | 1.700 |
| `qa/preview-v2/rendered-cut-01.png` | 1.306 |
| `qa/preview-v2/scene03-before-cut.png` | 1.940 |
| `qa/preview-v2/scene03-after-cut.png` | 2.157 |

## 실행 조건

사용자가 후보 A/B를 선택해 이동 승인한 뒤에만 휴지통의 프로젝트별 폴더로 이동. 영구 삭제하지 않음. 이번 진행 지시는 후보 조사에만 적용. Git commit/push 별도 승인 필요.

## 보존 핵심 파일 SHA256

- `public/assets/video/plywood-quality-change-preview-v3.mp4`: `6c927e42152ae48f78c5fc54f5170fab8f279a80789cda45fd47d556de879e03`
- `public/covers/plywood-quality-change-cover-v3.png`: `c9e2a227bdfd4e67a26a45ebf4a923de40cfd726c31948390c73bf8972e58ed7`
- `public/covers/plywood-quality-change-cover-v2.png`: `021a169df54626a7cd2011095c64df8dc72561fdfff99fa7741ed910ca215725`
- `public/covers/qa/plywood-quality-change-cover-v3-render-raw.png`: `96001f2e83502f76a0638e9251289d0677e590b72e25c51c0a6b36662051fc8e`
- `docs/sns-copy-v1.md`: `730a606571276f32a45b62b6f083ff8595058924674c60510e5f8ae51afbb3d3`
- `public/assets/video/scene04-preview-v3.mp4`: `05eab940467e7ba8f611851d651be9cc758a2d119a3a7b68cfc61bbe739f47f5`
- `public/assets/video/scene03-preview-v3.mp4`: `01eb84e34dfc2dc6fa7d507cef8501120c879de252baa414e1ddbdf1baf19fd5`
- `public/assets/video/scene02-preview-v3.mp4`: `3127e855f26584aa474d260bd2046260b119c6f8ac8f08cf431af40dbaa1c4b3`
- `public/assets/video/scene05-preview-v3.mp4`: `1e87c99091a6e76a8811b81edff89ca9f2353deeb8ed693d035ef61275d91610`
- `public/assets/video/scene01-preview-v3.mp4`: `27f594bea1e66d95fdfa6ed3acb3c2223faec475420b7d398f739da95253ac8d`
- `public/assets/video/scene06-preview-v3.mp4`: `cdc0864a4f76589a5d459c6d4cb773bcc6c34f338da3dce01e76885bb07b3954`
- `public/assets/audio/scene01-tts-v2.mp3`: `37e6cd37cd738d58be5fda0d534e9a6ed762de831f49d403391953bdef9c75c2`
- `public/assets/audio/scene02-tts-v7.mp3`: `344f74a279a079318addfbc4ec4c760a86e309d4e88605f5e998eec7bf07eda3`
- `public/assets/audio/scene03-tts-v7.mp3`: `837ca7587ad08b1e728e1872605ac6e7693d0418e8ef5795978bee978987fbb5`
- `public/assets/audio/scene04-tts-v7.mp3`: `35666ac5086ee7e87be1730093f34c5ec75da530bdcffef32055be1edc320083`
- `public/assets/audio/scene05-tts-v7.mp3`: `bd3aea4d3e7beae68d339cf73216d6e2d2dafc53aaa693eaed19099c65d41939`
- `public/assets/audio/scene06-tts-v7.mp3`: `15feb6c4b4e8363f753bbb2383b02a03214bfa1947370d628db087481bd08541`
- `public/assets/audio/full-tts-qa-v8.mp3`: `db87e02f18df52daa1945dc563774cacb94ec07c2e71c9d013b031b0039efaf7`
