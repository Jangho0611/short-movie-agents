# Scene 3 전체 구도 재확인

2026-10-22. 처리 A: 정상 전체 구도이므로 v2 유지. 후보 수정·추가 생성0회, v3 미생성.

## 실제 파일 확인

scene03-handle-removed-candidate-v2.png를 직접 디코딩하고 view_image로 전경을 확인했다. 실제 크기는 **1080×1920**, 세로9:16. 타공만 확대한 이미지가 아니다. Before와 동일한 범위의 문짝·문틀·벽·바닥이 포함된다. 여기서 전체 구도는 원본 프레임 전체를 뜻하며, 원래 Before에 없던 문 상단까지 보인다는 뜻은 아니다.

직전 편집에서 화면에 크게 표시된 타공 단독 이미지는 image_gen이 만든 **국소 편집용 패치**였다. 원본 경로는 /Users/janghokim/.codex/generated_images/01a16133-fe4b-79e1-ad14-7a3500278a11/exec-87b5f957-fe7a-413d-9df3-a58216252428.png. 이는 완성된 Scene3 v2 전체 파일과 다르다. scene03-position-qa-v2.png는1800×1800 비교 보드로 하단에 확대 컷을 포함한다. scene03-position-edit-input-v2.png는200×260 편집 입력 크롭이다.

최종 후보는 **public/assets/images/scene03-handle-removed-candidate-v2.png**로 유지한다.

## 재확인 QA

- Before와 나란히 전경 비교: 같은3/4 구도, 문 패널선·문틀·벽·바닥의 배치 및 촬영 범위 유지. Scene3 v1 생성 때 생긴 미세 질감 차이는 남아 있으며 Before와 픽셀 동일하다는 의미는 아니다.
- Scene3 v1/v2 실제 픽셀 차이 재계산: 변경 경계 x406~603/y618~875 (양끝 포함). 기존 패치 범위 x405~604/y617~876 밖 변경 **0픽셀**. 문 측면 금속판과 문틀·바닥·배경은 Scene3 v1과 동일.
- 타공 중심: 기존 측정값과 파일 해시 대조. Scene3 좌표계 목표(484.44,749.71), v2 개구 중심(484.28,750.05), 추정 목표 오차0.38px. 이번에는 후보나 중심을 이동하지 않았다. 실제 축 추정에 수 px 불확실성이 있는 기존 한계 유지.
- 원형 플레이트 흔적: 타공 주변에 유지. 기존 외곽 적합 중심과 타공 약3.23px 편차 WARN 유지. 타공 장축 약3.3% 변화도 기존 WARN 유지.
- 내부: 비정상 금속 소켓이 없고 어두운 단순 내부로 보임. 절단면/깊이의 기술적 정확성은 미검증.
- 모바일:360×640 전체 축소 직접 확인. 타공 식별 가능, 미세 자국·중심 오차는 모바일에서 판독하기 어려움.
- 시각적 정렬과 실제 설치 규격은 별도 판정. Ø54/Ø55 호환성 미확인, 래치·문두께·기존 타공 실측 검증 없음.

## 결과와 승인 상태

새 QA: public/assets/images/scene03-full-frame-qa.png —2160×2040, 양쪽 원본을 크롭/확대 없이1080×1920 그대로 배치하고 여백에만 제목 추가.
기존 Scene3 시각 판단은 유지하며 기술 검증 완료로 승격하지 않는다. 전체 화면에 대한 사용자 최종 확인·승인 전 다음 제작 단계로 진행하지 않음.
Before/After v1 및 Scene3 v1/v2 파일 해시 불변. 실패한 Before v2 미사용. Scene4/TTS/영상/Cover/SNS 제작, 삭제/이동/덮어쓰기, Git commit/push 없음. public/previews/output 생성 없음.

## 확인 해시

- scene01-before-candidate-v1.png: `b80d5b3912e83b9a4014e0bfaa9facb15bea20c80cc7c4ab51ef18078502a281`
- scene02-after-candidate-v1.png: `17fef2602293ed95a4dc1607a684fe62982a24e3f77668701c281887b0adf868`
- scene03-handle-removed-candidate-v1.png: `dbcda4af0f05f3bbe2002986aec71e67a447695e6873eb468f2c73d9d145428f`
- scene03-handle-removed-candidate-v2.png: `7f233978563beb43dbded7cf5358036366a28c16885ecafc9b1f90f484b8f36d`
