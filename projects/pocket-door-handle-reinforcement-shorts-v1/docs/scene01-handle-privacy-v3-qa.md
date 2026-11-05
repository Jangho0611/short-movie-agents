# Scene 1 잠금형 B 구도 v3 QA
2026-11-04. 전체 판정 FAIL — 측면 잠금 구조의 명확성/근거 부족. 미승인 후보 보존, 자동 후속 제작 금지.

## 제작
- 내장 image_gen 1회 / 후보 1장. 재시도·업스케일·제품 보정 없음.
- 입력은 scene01-handle-types-base-v2.png만 사용. 제조사 공식 사진 AI 입력·복사·합성 없음.
- 실제 생성 941×1671 PNG. 생성 원본 바이트 복사.
- 모바일 360×640, 비교 720×640(왼쪽 기준 / 오른쪽 v3).
- 실제 비용/크레딧은 도구에서 제공하지 않아 확인 불가. 별도 구매 없음.

## 구조 참고
https://www.hallidaybaillie.com/uk/product/hb690-series-sliding-door-privacy-lock-55mm-backset/
https://www.hallidaybaillie.com/nz/wp-content/uploads/sites/2/2022/05/HB_NZ_HB690_Privacy%20Series.pdf
https://www.hallidaybaillie.com/uk/wp-content/uploads/sites/12/2022/09/HB690-Series_poster.pdf
이전 턴 공식 페이지·설치 사진·자료 조사 결과 적용. 실내측 하단 슬라이드 snib(위로 잠금), 반대편 비상 해제부 구분. 표준 끝단 기구는 claw throw와 integrated pop out을 포함.
이번 생성은 일반 유형 콘셉트이며 HB690 정확한 구조·작동·치수 또는 공식 설치 사진으로 검증하지 않음.

## 실제 관찰 및 좌표(육안 근사, ±3px)
- 앞면 금속판 bbox 약 x481~615,y725~1282. 중심 (548,1004).
- 기준 (559,1001) 대비 약 (-11,+3)px. 설치 높이 유사, 수평 위치 변화 있음.
- 문짝 끝단 약 x642~700: 폭58px → 모바일22.2px.
- 기준 끝단 약48px → 모바일18.4px. 개선량 약3.8px이며 목표28~36px 미달.
- 측면 페이스플레이트 약 x663~690,y741~1137: 폭27px → 모바일10.3px.
- 핵심 측면 내측 부분 폭 약16px → 모바일6.1px.
- 앞면 snib는 세로로 열린 홈 하단의 작은 직사각형 탭. 회전 다이얼이나 큰 원형 버튼 없음.

## QA
| 항목 | 판정 | 결과 |
|---|---|---|
| 앞면과 끝단 동시 표시 | PASS(시각) | 두 면과 금속판이 구분됨 |
| 매립 손가락 걸림 공간 | PASS(시각) | 매끄러운 컵·금속 경계·깊이 식별 |
| 슬라이드식 snib | WARN | 위쪽 이동 여유 홈으로 슬라이더 인상은 개선. 홈·탭 비례와 실제 기계적 구조는 미검증 |
| 측면 페이스플레이트 식별 | PASS(시각) | 끝단 위 세로 금속판 보임 |
| 실제 수납 잠금 기구 대응 | FAIL | 내부가 단순 긴 직사각 금속판처럼 표시됨. 공식 표준 기구의 수납 상태/통합 인출부와 대응을 확인할 수 없음 |
| 불필요한 부품 | WARN | 큰 구멍·돌출 bolt·나사·버튼은 없지만, 부품이 적다는 사실이 구조 정확성을 보장하지 않음 |
| 문짝 두께·원근 | WARN | 정지 이미지에서 극단적 왜곡은 없으나 카메라 이동보다 끝단 폭만 조금 늘어난 듯 보일 여지. 실제 두께 미검증 |
| 배경·조명 | WARN | 웜화이트 공간과 자연광 분위기 유사. 배경/문짝 픽셀 동일 아님 |
| 모바일 앞면·측면 | WARN | 두 금속판은 식별되나 측면 실제 기구 세부는 읽기 어려움. 끝단 폭 목표 미달 |
| 하드컷 연결 | WARN | 높이 유사. 문짝 경계와 앞면 중심 변화로 시점 점프 가능. 영상 제작/연속 재생 안 함 |
| 실제 기기·플랫폼 UI | 미확인 | 360×640 정지 비교만 확인 |
| 공식 사진 오인 | WARN | 실사풍이지만 독립 AI 콘셉트. 공식 제품/설치 사례로 표기 금지 |

## 보존 및 다음 판단
원본·모바일·확대·기준 비교 이미지를 직접 시각 확인했다.
기존 세로형/원형/잠금 v2/영상/TTS/Cover/공통 엔딩/가이드 변경 없음. 엣지풀·SNS·Git 작업 없음.
후속 자동 생성하지 않는다. 사용자 검토 필요: 현재 후보의 시각 방향, 측면 구조의 추가 근거 확보 후 새 후보 필요 여부.
현 후보를 검증된 측면 잠금 세트로 채택하는 것은 권장하지 않음.

## 실제 생성 프롬프트
Create ONE photorealistic architectural hardware close-up based on the supplied user-owned reference. Independent generic privacy pocket-door hardware concept, NOT an exact manufacturer replica or official product photograph.
Keep the same warm-white sliding door, understated warm-neutral room, soft daylight direction and color, and approximately the same handle installation height (center 60% down portrait). Change the camera minimally toward the RIGHT leading edge so the broad front face and narrow RIGHT END FACE are both clearly visible. Realistic residential door thickness: obtain visibility by perspective, not thickening the slab. In the portrait composition aim for the narrow end face to occupy about 8–10% of image width near the handle, versus the reference's approximately 5%. Avoid dramatic angle or wide-angle distortion; preserve generous empty upper door area.
On the broad front face place a slim brushed-nickel tall rectangular recessed privacy pull, smooth elongated finger cup, and a SMALL rectangular SLIDING snib below the cup. The thumb block sits in a short vertical slide track with visible upward travel space: a slide control, not a push button, knob, rotary dial, or decorative horizontal grip. Interior side only; no outside emergency release.
On the narrow RIGHT leading edge place a slender vertical metal lock faceplate, proportionate to and aligned with the front assembly. It must read as integrated recessed lock hardware in the RETRACTED state: a restrained fitted recessed rectangular mechanism area with closed/retracted metal elements. No projecting bolt, no invented claw shape, no large circular holes, no decorative parts, no extra screws or buttons. Do not make the edge plate an oversized feature or paste it onto the broad front face. Front and edge assembly should be spatially coherent, with no floating pieces.
Natural restrained metal reflections, clean flush boundaries, real photographic texture and subtle contact shadows. Remove the original ribbed pull. Do not reuse its vertical ridges. No text, logos, labels, measurements, graphics, furniture, or additional handles. One portrait image only, no collage.

