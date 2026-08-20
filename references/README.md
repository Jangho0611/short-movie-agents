# Building Material Canonical Reference Library

## 역할

실제 촬영 건축자재 사진을 AI 생성과 영상 제작의 Source of Truth로 관리한다.

## 우선순위

1. 실제 Canonical Reference
2. 제조사/공식 제품 자료
3. 승인된 기존 AI 이미지
4. AI 생성 스타일

실제 제품 정확도와 디자인이 충돌하면 실제 제품을 우선한다.

## 새 품목 추가 방식

1. 원본 확인
2. 품목 분류
3. canonical file name 지정
4. 원본과 복사본의 SHA-256 확인
5. 품목별 `REFERENCE.md` 작성
6. Visual Grammar 연결
7. Git 저장

## 금지

- AI 생성 이미지를 실제 reference 폴더에 섞지 않는다.
- 보정본과 원본을 구분 없이 저장하지 않는다.
- 사진만 보고 제품 종류를 추측하지 않는다.
- 원본을 삭제하거나 수정하지 않는다.
