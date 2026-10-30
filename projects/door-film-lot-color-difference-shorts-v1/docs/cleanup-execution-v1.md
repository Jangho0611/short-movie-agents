# 승인 임시파일 정리 및 최종 보존 QA

삭제: 143개 / 105,250,357bytes / 100.37MiB
승인 범위: final-asset-cleanup-audit-v1.md의 정리 권장 143행. JSON/MD 경로·크기·SHA256 대조. 심볼릭링크/외부경로/직접의존 충돌 없음.
제외0, 실패0. 파일별 unlink만 수행, 폴더 재귀삭제 없음.
최종 승인106개+추가보존95개+판단보류2개=203개 삭제 후 및 번들 후 SHA256 일치 PASS.
최종 Preview: public/assets/video/door-film-lot-2d-preview-v5.mp4 /45.366667초/1361f/1080×1920/30fps.
Cover: public/covers/door-film-lot-cover-v1.png. SNS: docs/sns-copy.md 및 QA 보존.
공통엔딩170f, TTS·배경·컴포넌트 직접의존세트, 간판v2·로고·폰트·텍스처 보존.
Scene별 최종영상/대표이미지 보존. 다른 프로젝트 및 공통원본 변경 없음.

## 승인 TTS SHA256

- scene01-tts-v1.mp3: f3fc858c1b6e49b2384e1881d2293fd2da33b552b4e27a118a2db6153e8d4a92
- scene02-tts-v1.mp3: 7588d69858f2b2b99c29c585adbd27c42c3799546a4aaf5d9341e6daf942004f
- scene03-tts-v3.mp3: 8c9d5a2c0820fda6c0ef251f6739e33f7768f27c89c6ef6a18209f6e57ac432d
- scene04-tts-v5.mp3: ff4f0293836c7271defbcc85e135ee49fdbd15f00b862f810562ff2ec4560a78
- scene05-tts-v1.mp3: 43800cfd10fecfb2e099edeea1c08fc25023a786e19ca782cd774ea9fb54f080
- scene06-tts-v2.mp3: a5176925d18ba828cc98464fb4e225469eedcca9a32f1814abf716e00fa19f6e

## 재현 QA

Remotion bundle PASS: Info2DV5.tsx, DoorMasterCoverV1.tsx, QA용 전체 Composition.
신규 src/FinalPreviewV5QA.tsx는 기존 InfoPreview 본문 그대로 사용한 검증 전용 진입점. 최종 Scene3만 등록된 기존 엔트리는 수정하지 않음.
Chrome compositions 확인: FinalPreviewV5QA /30fps/1080×1920/1361f. 영상/PNG 재렌더 없음.
실제 최종영상 재현은 기존 scripts/assemble-qa-2d-preview-v5.py의 Scene01v2/02v2/03v5/04v3/05v2/06v2+엔딩 조립 방식.
번들 출력은 /tmp/lot-final-v5-bundle-20261030, /tmp/lot-full-v5-bundle-20261030, /tmp/lot-cover-v1-bundle-20261030.
번들/Composition 로딩 검증은 완전 재렌더 및 결과 픽셀 동일성 검증과 구분.

## 미해결 및 Git 백업 전 상태

YL40 텍스처 공개 재사용 권한 미확인 유지. 게시가능 PASS 아님.
main, 현재 프로젝트 미추적. 다른 도어 프로젝트 기존 미추적파일도 존재. commit/push/reset/stash/clean 없음. 원격 동기화 미검증.
Git 상태:
```
?? projects/door-film-lot-color-difference-shorts-v1/
?? projects/door-finish-color-difference-shorts-v1/docs/26.10.28수정.md
?? projects/door-finish-color-difference-shorts-v1/docs/cleanup-candidates-2026-10-28.md
?? projects/door-finish-color-difference-shorts-v1/docs/customer-photo-register-v1.json
?? projects/door-finish-color-difference-shorts-v1/docs/initialization-qa.json
?? projects/door-finish-color-difference-shorts-v1/docs/preview-rewrite-v1-qa.json
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v1-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v1-report.md
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v2-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v2-scene01-alignment.json
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v2-scene03-alignment.json
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v2-scene04-alignment.json
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v2-scene05-alignment.json
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v3-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v4-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v5-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/preview-v6-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/render-still-scene02-v1.log
?? projects/door-finish-color-difference-shorts-v1/docs/rewrite-v1-concat.txt
?? projects/door-finish-color-difference-shorts-v1/docs/scene02-v2-dtw-timing.json
?? projects/door-finish-color-difference-shorts-v1/docs/scene02-v2-word-timing.json
?? projects/door-finish-color-difference-shorts-v1/docs/younglim-2026-27-catalog-source.pdf
?? projects/door-finish-color-difference-shorts-v1/public/

```
기존 날짜형 작업기록은 사용자 요청에 따른 본 정리 기록 append만 수행. 과거 기록 보존.
