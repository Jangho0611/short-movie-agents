# 승인 업로드 Cover — 2026-11-24

UPLOAD_FINAL_COVER: `public/covers/pocket-door-handle-reinforcement-shorts-v1-cover-final.png`

Cover v4 최종 승인으로 v2 대체. 3:4·4:5 승인. 1:1 크롭은 시리즈명·로고·제품 일부 잘림으로 사용 금지.

재현: `scripts/render-pocket-cover-v4.cjs` → final 경로(기존 파일 충돌 시 중단). 자산/해시: `docs/cover-final-manifest-v1.json`. 영상·SNS 승인 내용과 파일은 그대로 유지. SNS 문서의 Cover v2 표기는 당시 승인 이력이며 현재 업로드 경로는 위 final을 사용.

---
기존 제작 초기 기록(현재 업로드 지침 아님):

# Pocket door handle reinforcement Shorts — still review

Current review: public/assets/images/contact-sheet-scene02-04-v2.jpg

Seven 1080×1920 Still compositions are registered in src/index.tsx.

Render a new, non-existing filename (overwrite disabled):

```sh
node_modules/.bin/remotion still src/index.tsx s04-02-review public/assets/images/s04-02-review-next.png
```

No video/Audio compositions. TTS is preserved verbatim in docs/approved-tts-v1.json.
Official source and scope: docs/26.11.02수정.md.
