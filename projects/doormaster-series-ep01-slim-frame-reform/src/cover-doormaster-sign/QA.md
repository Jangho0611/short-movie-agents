# DoorMaster 공통 간판 후보 v1

상태: 사용자 승인 대기, Canonical 미등록. 신규 AI 생성/커버 추출/배경 복원 없음.

## 자산
편집용 SVG: doormaster-series-sign-v1.svg. 텍스트 유지 및 원본 폰트 바이트 임베드.
표시용 SVG: doormaster-series-sign-v1-outlined.svg. 폰트 의존성 없는 글리프 윤곽선. 원본 폰트 파일은 변경하지 않음.
PNG: 2480×1160 RGBA, viewBox 620×290의 4배. 전체 캔버스 비율 유지해 축소.
레이어: sign-body, door-icon, series-text, wood-border, decorations, shadow.

## 폰트 설정
로컬 Pretendard Black(900), PostScript Pretendard-Black. 원본 레퍼런스 폰트나 공식 DoorMaster 폰트로 확정한 것이 아님.
문도사의: 54 디자인 단위, 자간 -2, 가로 목표폭 190.
그것이 알고싶: 72, 자간 -2.5, 목표폭 380.
도어: 80, 자간 -2.5, 목표폭 130.
각 텍스트 skewX -5도 / skewY -5도. 모든 값은 SVG viewBox 단위. textLength로 폭 조정, 원본 폰트 자체 변형 없음.

## QA
- PASS: 문도사의 / 그것이 알고싶도어 정확 표기. 도어만 우드톤. 글자·아이콘·장식선 잘림 없음.
- PASS: 투명 배경 alpha 0~255, 캔버스 경계와 실제 도형 사이 여유 확인.
- PASS: 밝은/어두운 배경 및 620px/310px 폭에서 가독성과 형태 유지. 불필요한 흰색 외곽 테두리 없음.
- PASS: 6개 독립 그룹 및 편집 가능한 text. 편집용 SVG → 윤곽선 변환 → PNG 재출력 결과가 납품 PNG와 픽셀 동일.
- PASS: 원본 폰트 복사본 해시 일치. 기존 커버와 가이드 수정 없음.
- WARN: 실제 레퍼런스와 폰트가 같다고 검증되지 않음. 후보의 흰색 문구 폭·기울기·글리프 형태 차이, 문도사의가 다소 넓게 보임.
- WARN: 간판의 주요 꺾임/비율은 관찰 좌표 기반으로 재구성했으나 픽셀 복제 아님. 문 아이콘은 우드 테두리와 닫힌 프레임 선이 더 뚜렷하고 레퍼런스의 굵은 흰 문틀 느낌과 차이 있음.
- WARN: 레퍼런스의 회화적 표면·입체 테두리 대신 깨끗한 벡터 면과 얇은 우드 선, 절제된 흐림 그림자를 사용. 더 평면적·정돈된 질감.

기술 QA PASS / 레퍼런스 재현도 WARN. 사용자 시각 승인 전 공식 간판·Canonical Reference로 확정하지 않음.

## 재출력
macOS CoreText/Swift, Python3 표준 라이브러리, Node+Sharp 사용.
python3 export-text.py doormaster-series-sign-v1.svg 새-윤곽선.svg
node render.cjs 새-출력.png 새-윤곽선.svg
입출력은 새 파일명을 사용. render.cjs의 Sharp 경로는 이 제작 환경의 실제 런타임 경로이며 다른 환경에서는 설치된 Sharp로 경로 조정 필요.
텍스트 변경 시 export-text.py를 먼저 실행한다. 도형만 바꿔도 같은 절차로 재출력 가능. 현재 변환기는 단일 text 요소와 부모 transform을 지원하며 복잡한 tspan 편집은 지원하지 않음.
