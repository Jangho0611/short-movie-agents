# Scene 4 Preview v3 전체 구간 QA

2026-11-06. 사용자 재생 확인 대기, 최종 PASS 아님.

## 분석
정확한 경로: 이 프로젝트 public/assets/video/scene04-preview-v1.mp4 및 scene04-preview-v2.mp4.
v1/v2 전체168프레임 YUV420 비교에서 frame1만 다름. 기존167프레임 동일 보고는 재현됨. v1 frame1은 제목 타일 반복 및 카드 소실, v2는 정상 frame0으로 교체된 상태. 이후 배경·카드·그래픽이 누락된 디코딩 프레임은 확인되지 않음.

v2 프로파일은 High 4:4:4 Predictive(무손실 x264), 실제 픽셀은 yuvj420p/full range, 알파 없음. v1은 High/yuvj420p/full range. 양쪽 BT470BG 표기. PTS는 모두 n/30에 일치(표기 반올림 오차0.000000334초 미만), 순서·프레임 수 정상. 시작 교체에 필요한 frame0 중복 외 시간 이동 없음.

사용자의 실제 플레이어/파일 선택/캐시 및 화면을 직접 확인하지 못하여 배경이 사라져 보인 정확한 원인은 미확인. 프로파일 호환성은 가능한 위험 요인이지 확정 원인 아님. 이전 픽셀 동일성만으로 사용자 재생 정상이라고 판단할 수 없음을 정정.

## 최소 수정
v2를 입력으로 사용하지 않고 v1에서 frame1만 frame0으로 교체. 소스 변경 없음. 전체를 H.264 High level4.1 CRF16, 8bit yuv420p, limited range BT709로 변환하고 faststart 적용. bt601/full→bt709/limited 명시 변환. 색 변환 및 손실 압축으로 v1과 픽셀 단위 동일하지 않지만 디자인·순서·모션은 유지. AAC는 v1에서 전체 stream copy, 승인 MP3 변경 없음.

## 시각 검토
v3 전체168프레임을 4개 contact sheet로 직접 검토. 0~1초 연속 프레임, 설치도 등장54~62, 작업 공간94~102, 마지막 문구139~149 및 마지막167까지 확인.
- 웜화이트 배경과 두 카드: 전 구간 유지.
- 문서 아이콘: 시작부터 희미하게 표시,54~62프레임에서 강조, 이후 유지.
- 설치도 문구:54~62프레임 Fade, 이후 유지.
- 작업 공간 문구/관계도/점선/구조 예시:94~102프레임 Fade, 이후 유지.
- 노란 제목 포인트: 전 구간 유지.
- 마지막 확인 문구:139~149프레임 Fade, 이후 유지.
- 시작부 제목 타일 반복 없음. 특정 시점 이후 전체 레이어 소실 없음.
- 요청 시점0/1/2/15/45/63/105/141/165프레임을 v1/v2/v3 나란히 비교.

영상 플레이어에서 1배속 전체 재생을 직접 관찰하지 못함. 검증은 디코딩 전체 프레임의 시각 검토이며 실기기 재생/청취와 구분. 사용자 환경의 소실 현상 해결을 확정 PASS 처리하지 않음. 카드 대비가 낮고 시작 카드가 비어 보이는 기존 디자인은 변경하지 않음.

## 기계적 QA
1080×1920,30fps,168프레임,영상5.600초. AAC/컨테이너5.653333초(기존 오디오 말미 보존). 전체 영상·오디오 디코딩 정상. PTS n/30 정상. AAC 추출 바이트 v1/v2/v3 동일.
기존 파일 baseline 107개 해시 변경 없음. Scene1~3 승인본, Scene4 v1/v2 및 소스/TTS 보존.
승인 TTS SHA256 ed1894a3f98116705244227f502ec9157496af4bd0dbe39bb63ca52eede2580e.

## 실제 파일 검증값
```json
{
  "1": {
    "sha256": "6e6f6403857c6e64fb17bc0025f91b4d3d34be304dbbebfc4e2c5f06a17b01b2",
    "profile": "High",
    "pixel_format": "yuvj420p",
    "frames": 168,
    "pts_error": 3.33333333379926e-07,
    "audio_hash": "bac1ca9535fe5005ac5f5ecf9fac4c9d32e8e4521de15f958b7b5929ab56f029"
  },
  "2": {
    "sha256": "ec9b4cdd15c0c66f3abbcf1d131c4052260201f6b5f2a1ccfde8ac6ef5aab507",
    "profile": "High 4:4:4 Predictive",
    "pixel_format": "yuvj420p",
    "frames": 168,
    "pts_error": 3.33333333379926e-07,
    "audio_hash": "bac1ca9535fe5005ac5f5ecf9fac4c9d32e8e4521de15f958b7b5929ab56f029"
  },
  "3": {
    "sha256": "02bde76a24c6461cce76e0d77b9b54be1818dbc513d17dd9ebc939316b58c929",
    "profile": "High",
    "pixel_format": "yuv420p",
    "frames": 168,
    "pts_error": 3.33333333379926e-07,
    "audio_hash": "bac1ca9535fe5005ac5f5ecf9fac4c9d32e8e4521de15f958b7b5929ab56f029"
  }
}
```

전체 조립·AI 생성·공통 가이드 변경·Git 작업 없음. 사용자 환경에서 v3 재생 확인 후 승인 필요.
