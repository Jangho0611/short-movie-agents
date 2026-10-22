# doormaster-handle-replacement-v1

문도사의 그것이 알고싶도어 — 문은 그대로, 손잡이만 바꿔볼까?
대표 제품: 도무스 511 NI. 상태: Before 후보 사용자 승인 대기.

- 승인 대본: docs/approved-plan-v3.json
- 초기화/QA 보고: docs/26.10.22수정.md, docs/initialization-qa.json
- 제품 근거: docs/product-reference-report.md
- Before: public/assets/images/scene01-before-candidate-v1.png
- 프롬프트: docs/prompts/before-v1.txt

`npm run studio`는 초기화된 승인 공통 엔딩만 표시한다. 본편 미구현, 영상 렌더 미실행. 의존성 재설치: `npm ci`. Git은 Monorepo 루트만 사용.

After는 Before 사용자 승인 후 별도 실행. 그때도 공식 제품 Reference와 배경 보존 조건을 적용한다.
