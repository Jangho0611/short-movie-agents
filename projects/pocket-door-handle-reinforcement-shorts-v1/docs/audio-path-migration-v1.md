# 오디오 경로 정정

기존 audio 폴더는 없었음. 최신 사용자 지정 표준 public/assets/audio/를 생성하여 오디오 전용 18개 이동. 신규 계층을 임의 제안한 것이 아니라 지정 경로 적용.

각 파일 ffprobe로 audio 스트림만 존재 확인, TTS/통합 청취 용도 확인. 이동 전후 SHA-256 모두 동일. 재인코딩 없음. video 오디오 전용 잔존 0개. audio 0→18개, video 오디오 18→0개.

수정 참조:
- scripts/generate-scene03-tts-v2.py
- scripts/generate-tts-candidates-v3.py
- scripts/analyze-tts-candidates-v3.py
- docs/scene03-tts-v2-qa.md
- docs/tts-candidates-v3-qa.md

Remotion src에 이동 대상 TTS 직접 참조 없음. 생성/분석 스크립트의 오디오 경로만 치환했으며 영상 경로는 변경하지 않음. 과거 QA의 생성 당시 경로는 유지하고 현재 위치 정정 추가.

보존 검사: 기존 이미지 및 video의 이동 대상 외 파일 547개 SHA-256 불변. 다른 프로젝트에는 쓰기 없음.

향후 TTS 원본/리뷰/통합 출력 public/assets/audio/. 영상 public/assets/video/, 이미지 public/assets/images/, 승인 reference public/references/.

공통 지침의 이미지·영상 저장 규칙에는 오디오 분리 경로가 명시되지 않아 보완 필요. 공통 MD 미수정; 변경은 별도 승인 대상.
