# Scene 1 원형 매립손잡이 v2 QA

- 제작일: 2026-11-04
- image_gen 편집 1회, 후보 1장. 재시도/업스케일 없음.
- 입력: scene01-handle-types-base-v2.png만 사용. 제조사 사진 입력 없음.
- 실제 결과: 941×1670 PNG. 기준은 941×1671. 원본 결과 그대로 복사 보존.
- 모바일: 360×640. 비교: 720×640, 왼쪽 기준 / 오른쪽 v2.
- 비용: 도구에서 실제 과금액·사용 크레딧을 제공하지 않아 확인 불가.

## 판정
전체: **FAIL — 동일 설치 중심 유지 조건 미충족. 후속 전환 자산 자동 채택 금지.**

| 항목 | 결과 | 관찰 |
|---|---|---|
| 일반적인 원형 매립 형태 | WARN | 단일 오목면과 금속 테두리 식별. 테두리가 요청한 매우 얇은 느낌보다 넓고 약간 돌출된 듯 보여 사용자 시각 판단 필요 |
| 기존 세로형 흔적 제거 | PASS | 정지 원본/모바일 비교에서 직사각형 잔상·추가 가공홈 보이지 않음 |
| 설치 중심 | FAIL | 기준 약 (559,1001), 결과 약 (543,933). 약 Δx=-16, Δy=-68px |
| 배경·문짝 동일성 | WARN | 주요 외곽과 끝단 구도 유사하나 표면 질감·명암이 재해석되어 픽셀 보존 아님 |
| 손가락 걸림 공간 | PASS | 오목한 컵이 식별됨. 실제 사용성이나 제조사 규격 검증은 아님 |
| 추가 장식·잠금 기구 | PASS | 버튼·나사·잠금 조작부·문구·로고 관찰되지 않음 |
| 모바일 식별 | PASS | 360×640에서 원형과 오목면 식별 |
| 빠른 하드컷 | FAIL | 중심 이동이 모바일 약 x=-6,y=-26px로 나타나 위치 점프 예상. 영상 재생 검증은 하지 않음 |
| 실제 기기·플랫폼 UI | 미확인 | 이미지에 자막 없음. 후속 실제 자막/UI 검증 필요 |

## 측정 방법과 한계
육안 금속 외곽 경계 기준 결과 bbox 약 x462~624,y847~1019, 중심 (543,933), 오차 약 ±3px. 기준 중심은 기존 기록과 비교 이미지로 확인한 근사값이다.
해상도 높이 1px 차이를 보정해 기준 좌표로 환산하면 결과 y≈933.6, Δy≈-67.4px로 결론은 동일하다.
형태의 원근 및 실제 시공 크기는 검증하지 않았다. EMTEK 2211 공식 사진 또는 복제품으로 표기하지 않는다.

배경 수치 비교는 결과를 기준 크기로 분석용 리사이즈한 뒤 RGB 평균 절대차(0~255)를 계산:
- 상부 문짝 ROI (50,100)-(600,650): 3.71
- 오른쪽 배경 ROI (720,100)-(870,1500): 2.46
- 문짝 끝단 ROI (645,100)-(708,1500): 2.76

이 값은 질감/명암/위치 차이를 함께 포함하며 구조 보존의 증거가 아니다. 비교 이미지에서 미세한 표면 재해석을 확인했다.

## 보존 및 승인
기존 원본에 대한 수정·삭제·이동 없이 새 후보와 모바일/비교/이 QA만 작성했다.
영상·TTS·Cover·공통 엔딩·가이드·다른 유형 제작 및 Git 작업 없음.
추가 편집은 실행하지 않았다. 현재 후보의 형태 평가와 중심 불일치 처리 방향에 대한 사용자 판단이 필요하다.

## 실제 편집 프롬프트
Edit the supplied reference image, producing exactly one portrait image.
Preserve the exact existing warm-white sliding door, door perimeter and right edge, minimal architectural background, camera perspective, lighting direction, shadows and overall composition. Only locally change the existing tall rectangular recessed handle and its immediate installation footprint. Reference dimensions are approximately 941 by 1671; the current handle center is approximately x559,y1001. Keep the new handle precisely centered there.
Replace the tall handle with a realistic simple circular recessed flush pull installed flush into the FRONT face of the door. Use a thin satin brushed-nickel rim and a single smooth, naturally recessed finger cup, modest depth and realistic residential hardware scale (outer diameter approximately 145 pixels in the reference coordinate system). No decorative concentric rings, thick rims, excessive gloss, ribs, lock controls, buttons, screws, mechanisms, protruding grip or extra holes. This is an independent generic round flush pull concept, not a replica or official manufacturer photo.
Completely remove the previous rectangular handle and rectangular cutout, restoring matching clean door texture and lighting in that footprint. Do not reposition or redesign the door or its end face. Make it look like a genuine architectural hardware photograph rather than a stylized AI rendering. Keep the original portrait aspect ratio and empty upper door area. No text, labels, logos, dimensions, graphics, or additional hardware.

