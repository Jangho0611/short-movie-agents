# Scene 1 잠금형 v4 QA
2026-11-04. 전체 WARN / 사용자 승인 대기. 실제 HB690 구조 정확성 PASS 아님.

## 실행
내장 image_gen 편집 정확히 1회, 후보 1장. 입력 scene01-handle-privacy-v3.png 단독.
공식 제조사 사진 입력/복사/합성 없음. 재시도·업스케일·후속 구조수정 없음.
생성 원본 941×1671 PNG를 바이트 복사 보존.
모바일 360×640, v3/v4 비교 720×640(왼쪽 v3 / 오른쪽 v4).
비용·크레딧 도구 미제공으로 실제 금액 확인 불가. 별도 구매 없음.

## 공식 구조 참고
이전 턴에서 직접 확인한 공식 사진과 작동 설명 적용:
https://www.hallidaybaillie.com/uk/product/hb690-series-sliding-door-privacy-lock-55mm-backset/
https://www.hallidaybaillie.com/nz/wp-content/uploads/sites/2/2022/05/HB_NZ_HB690_Privacy%20Series.pdf
https://www.hallidaybaillie.com/uk/wp-content/uploads/sites/12/2022/09/HB690-Series_poster.pdf
오목부 하단 통합 snib, 위로 미는 블록, 측면 잠금부와 인출부의 구분만 참고.
정확한 작동거리·내부 구조·실제 설치 적합성은 미확인. 독립 AI 콘셉트이며 공식 제품사진 아님.

## 직접 시각 QA
생성 원본, 하드웨어 확대, 360×640 비교를 직접 확인.
| 항목 | 판정 | 결과 |
|---|---|---|
| 기존 돌출 탭 제거 | PASS | 평판 아래쪽의 세로 탭 사라짐 |
| 별도 긴 홈 제거 | PASS | 오목부 밖에 있던 좁은 세로 홈 제거 |
| snib 위치 통합 | PASS(시각) | 오목부 하단 내부에 가로형 블록 배치 |
| 슬라이드식 인지 | WARN | 돌출 빗장 느낌은 개선. 이동 여유/가이드가 뚜렷하지 않아 평평한 버튼처럼 읽힐 가능성 남음 |
| 금속 마감 | PASS(시각) | 컵과 블록의 무광 금속 색상 유사, 과도한 그림자 감소 |
| 측면 세로 플레이트 | PASS | 기존 끝단에 유지 |
| 잠금부·인출부 구분 | WARN | 상부 긴 구획과 하부 작은 구획으로 분리. 구획 존재가 실제 기구 재현의 증거는 아님 |
| 가상 돌출 잠금쇠 | PASS(관찰) | 돌출 bolt/claw, 추가 원형구멍·나사 없음 |
| 앞면·측면 높이 관계 | WARN | 측면 플레이트가 여전히 앞면보다 짧고 상단 쪽에 치우침. 충분히 개선되었다고 판정하지 않음 |
| 문짝 두께/구도 | WARN | 주요 외곽 유사. 실제 두께·원근 정확성 검증 아님 |
| 배경·조명 픽셀 보존 | WARN | 분위기 유사하나 질감·명암 변화 있음 |
| 설치 중심 | PASS(육안 오차 내) | 앞면 bbox 약 x481~615,y727~1282, 중심(548,1004.5). v3(548,1004) 대비 약(0,+0.5)px, 육안 오차 ±3px |
| 모바일 | WARN | 앞면 블록 약30×16px, 측면 판 약11px 폭. 두 구획은 보이나 작동 방식은 즉시 판독 어려움 |
| 하드컷/실기기 | 미확인 | 실제 영상/기기 재생 수행 안 함 |

## 배경 변화 수치
v3와 v4 동일 크기 RGB 평균 절대차(0~255):
상부 문짝 ROI x50~600,y100~650: 3.88
배경 ROI x720~870,y100~1500: 3.79
끝단 상부 ROI x645~708,y100~700: 5.05
이는 미세 색상/질감/위치 차이를 함께 포함. 국소 영역 외 픽셀 동일성은 충족하지 않음.
측면 폭은 약58px(모바일22px)로 큰 변화 없음. 세로형·원형과의 동일구도 하드컷 적합성은 미확인.

## 보존 및 승인
기존 v3 및 세로형·원형·TTS·영상·Cover·엔딩·가이드에 쓰기 작업 없음.
새 PNG3개와 본 QA만 추가. 엣지풀·영상·SNS·Git 작업 없음.
현재 후보는 일부 외형 개선을 확인했으나 실제 기구처럼 읽히는지는 미해결이다.
사용자 승인 필요: snib가 버튼으로 보이지 않는지, 측면 구획의 자연스러움, 배경 변화 허용 여부.
실제 HB690 구조 PASS로 채택하지 않음. 자동 재편집하지 않음.

## 실제 프롬프트
Edit the supplied architectural hardware image. ONE candidate.
Preserve exactly the existing door silhouette, thickness, right edge, warm-white finish, background, camera, lighting and shadows, image proportions, front handle outer frame and center. Local changes only to TWO hardware regions.
FIRST: remove the separate narrow vertical slot and protruding upright tab below the finger cup. Restore that flat outer plate area cleanly. Integrate a low-profile sliding privacy snib INSIDE the bottom portion of the existing recessed finger cup. It is a small, horizontally broad thumb block contained across the cup's inner width, recessed/low-relief, with subtle vertical sliding allowance. It must read as an integral slide block operated upwards, not a hanging lever, exposed bolt, push button or rotary knob. No separate slot cut in the flat outer plate, no dark exaggerated shadow. Preserve upper cup and outside plate geometry, brushed nickel finish.
SECOND: refine the vertical faceplate on the narrow RIGHT end face, keeping the door edge unchanged. Distinguish an upper recessed lock section and a separate lower integrated retractable finger-pull section. Both mechanisms stay stowed, static and low-profile. A subtle perimeter separation and fitted metal elements should read as functioning recessed hardware rather than a single blank decorative rectangle. Align the assembly's overall installation height with the front pull; modestly extend the plate downward if required within the same narrow edge. Do not invent exposed internal mechanisms, projecting claws or rectangular deadbolts. No circular holes, decorative buttons, extra screws or unrelated fittings.
This is an independent generic privacy pocket-door concept based on observed hardware relationships, not a precise manufacturer replica or official installation photo. Do not change the rest of the scene. Natural restrained metal texture/reflections and contact boundaries. No text, logo, label, graphic or collage.

