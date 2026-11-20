# Scene 4 Preview v1 QA

2026-11-06 / 사용자 시각·청취 승인 대기

## 결과물 및 구성
- src/Scene04PreviewV1.tsx, src/scene04-preview-v1-entry.tsx: 신규 독립 소스.
- public/assets/video/scene04-preview-v1.mp4
- public/assets/images/scene04-preview-v1-qa.png: 30/80/160프레임을 360×640으로 비교.
- Main: Notion식 정보 위계 / 최소 Fade 모션. Pretendard 800/500, 웜화이트, 블랙, 프로젝트 적용색 #D5AC40.
- 기존 사진 미사용. 문서 아이콘과 단순 관계도는 실제 제조사 설치도가 아닌 개념 그래픽. 모델명·치수·분리 경로·작업 방향 없음.

## 타이밍
- 시작: 천장 마감 전 / 필수 확인 제목, 빈 항목 카드와 희미한 문서 아이콘.
- 54~62프레임(1.800~2.067초): 사용하는 철물 / 설치도 확인 등장.
- 94~102프레임(3.133~3.400초): 문짝 설치·조정 / 작업 공간 확인 및 점선 개념 영역 등장.
- 139~149프레임(4.633~4.967초): 마감 전에 꼭 확인하세요 등장, 마지막까지 정적 유지.
- 음원 무음 검출 -35dB, 0.12초 기준: 시작~0.276917, 1.790375~2.036458, 3.079667~3.371083, 5.128458~5.376초.
- 무음은 의미 경계의 증명이 아님. 실제 청취·단어별 정렬은 미확인, 싱크 PASS 판정하지 않음.

## 기계적 QA
- H.264 / AAC, 1080×1920, 30fps, 디코딩 168프레임, 영상 스트림 5.600000초.
- AAC 및 MP4 컨테이너 길이 5.653333초. 영상보다 약 0.053초 길며 별도 음원 편집하지 않음.
- 영상·오디오 전체 FFmpeg 디코딩 정상(exit 0).
- 승인 Scene 4 MP3 5.376초, SHA256: ed1894a3f98116705244227f502ec9157496af4bd0dbe39bb63ca52eede2580e
- 작업 전 기존 소스·이미지·영상·오디오 101개 해시와 작업 후 해시 비교: 변경 없음. Scene 1~3 포함.

## 직접 확인한 시각 QA
- 360×640 대표 화면에서 주요 제목과 두 확인 항목 판독 가능, 글자 겹침·잘림 없음.
- 설치도 문서와 작업 공간 관계도의 역할 구분, 기존 Scene 1~3 사진 배경과 명확히 차별화.
- 작업 공간 도식은 일반 관계 예시이며 실제 시공도나 규정된 작업 범위로 검증한 것 아님. 구조 예시 · 치수 아님 표시.
- 두 항목을 남긴 안정적인 마지막 화면. 공통 엔딩 연결은 구성상 가능하나 실제 조립 테스트는 미실시.

## 남은 한계 / 사용자 검토
- 첫 구간의 빈 카드 면적이 크고 정적임: 단계적 공개를 위한 의도이나 템포·시각적 완성도 승인 필요.
- 축소 화면에서 보조 라벨과 구조 예시 안내는 작음. 핵심 문구는 읽히지만 실제 기기 UI와의 간섭은 미검증.
- 기존 Scene의 x=105/top=275 제목 정렬을 참고. 필수 항목은 화면 안에 있으나 플랫폼·기기별 실측 마스크/glyph bounds 측정은 미실시. 모바일 안전 영역 완전 PASS 아님.
- 실제 청취·전체 재생 감상, 엔딩 연결, 실제 설치 적합성은 미검증.

전체 영상·엔딩·Scene 1~3 수정, AI 생성, Git 작업 없음.

## 보존 기준 해시
- projects/sliding-door-ceiling-check-shorts-v1/src/Scene03PreviewV2.tsx: a587633b9fb4014bcfb8097c914876857362e93195fa01543cbaf817a2844242
- projects/sliding-door-ceiling-check-shorts-v1/src/Scene02PreviewV4.tsx: ff2232960cb910508e5e014bae64f195045c0792188c5d3b20a4e97c00373e2c
- projects/sliding-door-ceiling-check-shorts-v1/src/Scene01PreviewV6.tsx: 519116f0ec7aa4d82e682d347f4e4ac27de4295260e9e5534368fc4834628dbe
- projects/sliding-door-ceiling-check-shorts-v1/public/assets/video/scene02-preview-v4.mp4: 6074b94e82c5d2d6a14de416b779e1692c603caa1fbb22144042bea9d2fc525e
- projects/sliding-door-ceiling-check-shorts-v1/public/assets/video/scene03-preview-v2.mp4: ed66caad35ffc07e1089327c2da14f23fbffaa8daf4d4717b7b8a2f388daa0ad
- projects/sliding-door-ceiling-check-shorts-v1/public/assets/video/scene01-preview-v6.mp4: d94f1dea1430aca5378b7bc27de5b104c0189dc31c84ac2605f42fd49798e3cf
