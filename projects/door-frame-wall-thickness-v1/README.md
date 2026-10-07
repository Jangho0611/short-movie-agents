# 벽 두께가 다르면 문틀은 어떻게 발주할까?

대산 도어 문틀 시리즈 2편. 현재 상태: Slim Copy·공통 자산 준비 완료, 콘텐츠 제작/렌더 전.

- 승인 원문: docs/approved-request.txt
- TTS 후보와 Scene별 구현안: docs/implementation-plan.md
- TTS 입력 후보: docs/tts-candidates-v1.json
- 복사 출처·해시: docs/slim-copy-manifest.json
- 작업기록: docs/26.09.29수정.md

src/Root.tsx는 공통 엔딩만 등록한다. 본편 Scene 1~6 및 본편 Composition은 미구현이다.
의존성은 package-lock.json으로 준비했으며 설치는 아직 하지 않았다.
