# Scene 1 잠금형 매립손잡이 v2 QA
2026-11-04. 조건부 WARN / 사용자 시각 승인 대기.

## 조사
공식 제품: Halliday + Baillie HB690 Privacy Set
https://www.hallidaybaillie.com/uk/product/hb690-series-sliding-door-privacy-lock-55mm-backset/
공식 페이지의 설명과 브라우저 제품 사진을 직접 확인했다. 웹 추출기의 사진/PDF fetch는 실패했으나 브라우저 사진은 정상 표시되어 시각 확인했다.
- 긴 세로형 전면 매립부와 손가락 걸림 공간, 그 아래 작은 snib를 확인.
- 실내측 snib와 반대쪽 emergency-release pull은 서로 다른 면이다.
- 끝단에는 별도 lock body/faceplate가 있으며 전면 snib와 관계된 잠금 세트이다. 이번 콘셉트는 그 내부 작동을 검증하거나 끝단 부품을 재현하지 않는다.
- 제조사 사진은 조사에만 사용. AI 입력·복사·합성하지 않았다. 정확한 HB690 복제품 또는 공식 설치 사진이 아님.

## 실행
image_gen 편집 정확히 1회 / 후보 1장. 입력은 scene01-handle-types-base-v2.png 단독.
재시도·업스케일·추가 생성 없음. 실제 비용/크레딧은 도구에서 제공되지 않아 확인 불가. 별도 구매 없음.
출력 생성 원본 941×1671 PNG를 바이트 복사 보존.
모바일 360×640, 비교 720×640(왼쪽 기준, 오른쪽 생성 v2).
비생성 중심 보정은 불필요하다고 판단하여 v3를 만들지 않았다.

## 중심 및 보존 측정
금속 외곽 육안 확대 확인: 기준 약 x490~628,y729~1272; 결과 약 x489~627,y729~1271.
중심 기준 약 (559,1001), 결과 약 (558,1000). Δ(-1,-1)px이며 측정 불확실성 ±3px 안이다. 정확한 서브픽셀 동일성을 주장하지 않음.
해상도 동일, 전체 이동/비균일 확대 없음.
배경 ROI RGB MAE(0~255):
- 상부 문짝 x50~600,y100~650: 3.47
- 오른쪽 배경 x720~870,y100~1500: 1.69
- 끝단 x645~708,y100~1500: 2.80
큰 구도는 유사하지만 질감·명암의 AI 재해석이 있으며 픽셀 보존 아님. MAE는 기하 동일성 증명이 아님.

## 시각 QA
| 항목 | 판정 | 근거 |
|---|---|---|
| 중심 정렬 | PASS(측정 허용오차 내) | 약 1px 차이, 확대 측정 ±3px |
| 긴 매립부·금속 경계 | PASS(시각) | 매립 깊이와 컵, 얇은 외곽 경계 식별 |
| 실내측 조작부 | WARN | 컵 아래 작은 직사각형 탭 식별. 실제 작동 기구·조작 방향·기계적 적합성은 검증 불가 |
| 비상 해제부 혼합 | PASS(시각) | 별도 원형 해제 구멍/슬롯 보이지 않음 |
| 기존 세로 요철/중복 손잡이 | PASS | 기존 요철 사라지고 새 매끈한 컵으로 교체, 추가 손잡이 없음 |
| 가상 부품/장식 | WARN | 큰 원형 버튼·나사·끝단 구멍 없음. 하단 탭이 버튼처럼 읽힐 가능성은 남음 |
| 문짝·배경 | WARN | 외곽 구도 유지, 픽셀/질감 동일하지 않음 |
| 모바일 | WARN | 360×640에서 하단 조작부 약 21×9px로 보임. 일반 손잡이와 차이는 보이나 잠금 기능 즉시 인지는 확정 불가 |
| 실제 기기/UI 및 하드컷 연속 재생 | 미확인 | 영상 미제작, 정지 원본/확대/모바일 비교만 확인 |

명백한 추가 구멍이나 중복 손잡이는 관찰되지 않았다. 실제 하드웨어 작동 검증 PASS는 아님.
상단 빈 공간은 유지. 기존 자막/UI와의 최종 조합은 후속 승인 단계에서 확인 필요.

## 보존
기존 원형 v3, 세로형 v2, 실패 잠금형 v1, 영상/TTS/Cover/엔딩/가이드에 쓰기 작업 없음.
새 PNG 3개와 이 QA만 추가. 엣지풀·모션·SNS·Git 작업 없음.
승인 필요: 하단 snib 표현의 자연스러움, 모바일 유형 식별성, 미세 질감 변화 허용 여부.

## 실제 프롬프트
Edit the supplied reference image, one candidate only. Preserve the exact warm-white sliding door, minimal architectural background, right door edge, camera perspective, lighting, shadows, color and composition. Local edit only at the existing tall handle. Maintain its center at (559,1001) in the 941x1671 reference and approximately the same outer bounds x490..628,y729..1272.
Replace the ribbed ordinary pull with a realistic generic interior privacy recessed sliding door pull: slim satin brushed-nickel rectangular perimeter, a long smooth recessed finger-grip cup occupying the upper majority, and a SMALL integrated rectangular snib control low in the assembly beneath the finger cup. The snib is a short flat thumb-operated rectangular tab within a small recessed seat, modest in size, not a large central circular button and not a long horizontal grab bar. This is the interior control, NOT the external emergency-release slot. Smooth cup, no decorative ribs, no invented circles, buttons, screws, labels or extra mechanisms.
This is an independent generic architectural hardware concept, not an exact reproduction or official photo of any manufacturer. Do not add any end-face lock holes or hardware: keep the existing right door edge unchanged. Remove all prior ribs and old handle traces. Flush installation, restrained metal reflections and plausible recess/contact shadow. Genuine hardware photography, no stylized product render. No text, logos, diagrams or graphics. Preserve portrait ratio and background.

