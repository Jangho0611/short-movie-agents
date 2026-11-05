# B 의존성 개선 — 2026-11-05

B71개 전부 디스크에 보존했다. 후속 삭제 후보70개: 과거 음원31개 + 구형 소스39개. src/index.tsx 1개는 최종 Studio 진입점으로 유지한다. 파일별 크기·SHA256·추적 여부·영향은 remaining-cleanup-b-candidates-v1.json 참조.

## 최소 변경

- scripts/assemble-scene01-tts-v10.py: 과거 전체 음원 해시 검사를 최종5 WAV와 실제 조합 입력2개 검사로 분리. 새 final-tts-required-hashes-v1.json 사용. 기존 scene01-tts-v10-preservation.json의 과거 해시는 그대로 보존.
- --verify-only: 승인 WAV를 쓰지 않고 두 입력으로 PCM을 메모리에서 재조합해 비교. 기존 트림·페이드·간격 알고리즘 유지.
- src/index.tsx: 구형 실험 진입점을 최종 scene01-images-v7로 연결. 다른 최종 Scene과 Cover의 전용 진입점 유지.

## 검증

PASS: 최종5 WAV + 조합입력2개 해시 일치. 두 입력에서 재구성한 PCM과 승인 Scene1 TTS PCM 완전 일치. 과거 B음원 접근 차단 상태에서도 verify-only 성공.

PASS: 최종 진입점의 로컬 import 연결에서 B소스는 유지 대상 index.tsx만 남음. 과거 소스끼리의 참조는 과거 실험 복원 관계로 구분. B70개는 아직 삭제하지 않았으며 후속 삭제 시 목록 해시 재검증 필요.

PASS: Scene1v7 재현 스크립트·v6·입력6PNG·기존 재현 검증 자료 해시 유지. 기존 검증은 영상 framemd5 및 오디오 PCM 동일이며 이번에는 재렌더하지 않고 입력 무결성으로 유지 확인. Scene2~5·통합 조립 경로·Cover 입력·공통 엔딩17개 해시 유지.

WARN: 과거 실험 재실행은 후보 삭제 후 Git 이력에서 해당 파일을 복원해야 함. 실제 시청·청취 QA는 이번 범위에서 미수행. B70개 삭제에는 별도 사용자 승인 필요.
