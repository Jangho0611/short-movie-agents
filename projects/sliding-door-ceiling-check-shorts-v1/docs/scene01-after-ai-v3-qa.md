# Scene 1 마감 후 AI v3 QA

## 생성
- built-in image_gen 국소 편집 요청 1회. 승인 before-ai-v3만 실제 Reference로 입력. 실패본 미입력.
- 결과 scene01-after-ai-v3-candidate.png: 941×1672, 확대/변환 없이 보존.
- 비교 scene01-before-v3-after-ai-v3-comparison.png: 각360×640, 왼쪽 전/오른쪽 후.
- 원본 SHA256 유지: 0a4a2e2901674e90374201dd9b1a21dcebdd56bd5e094a44436c64679f835477.

## QA (시각 평가, 기계 구조 검증 아님)
1. 마감 연결: 넓은 판의 이음선이 사라져 하나의 웜화이트 표면으로 읽힘. 개선.
2. 철물 가림: 철물 노출 없음. 실제 위치 유지/삭제 여부는 가려진 이미지로 검증 불가.
3. 문짝 상단: 상단 모서리가 마감 뒤에 가려짐. 슬롯에서 나오는 표현은 조건부.
4. 문짝: 좌측 수직 경계와 몸체 폭/두께는 대체로 유지. 오른쪽 경계는 원본부터 화면 밖이므로 검증 불가. 표면의 미세한 재합성 가능성 존재, 픽셀 동일성 주장 안 함.
5. 슬롯: 좌측 리턴과 하부 그림자로 약한 깊이는 있으나 두 가장자리/연속 개구부가 분명하지 않고 붙은 듯한 인상 가능. 미통과.
6. 원근: 오른쪽으로 과도하게 내려오던 마감은 개선. 아래면 노출이 매우 작아 정확한 깊이/원근 검증 불가.
7. 색온도/조명: 대체로 유지.
8. 별도 판 이음선: 이전의 상단 이음선 없음.
9. 범위 외 보존: 전체 분위기 유지, 원본 픽셀 불변 보장 불가.
10. 모바일: 상태 차이는 명확하나 슬롯은 가는 음영처럼 읽힘. 실기기 미검증.

## 결론 및 대안
재질/연속 마감 표현 개선, 핵심 슬롯 가독성은 미해결. 완성 승인 권고 아님. 추가 생성 중단.
실패 원인 추정: 가림/동일 문짝/최소 틈/정면 시점을 동시에 요구하면서 AI가 슬롯을 얕은 처마와 그림자로 단순화함. 확인된 원인이 아닌 결과에 대한 해석.
후속 대안(미실행): 반복 프롬프트 대신 슬롯 개구부가 읽히는 소규모 단면/원근 설계를 먼저 승인받거나, 실제 천장 매립형 도어의 사용 허용 사진으로 깊이 관계를 정한 후 필요한 경계만 편집. 현재 승인 범위에서는 중단.
영상/Remotion 수정/TTS/Scene2~4/엔딩/Git 작업 없음.

## 프롬프트
Use case: precise-object-edit. Edit ONLY the ceiling finishing area of the supplied image. This approved BEFORE image is the sole edit target. Produce ONE AFTER image, same portrait dimensions and camera. Complete the existing warm-white ceiling as a seamless architectural volume concealing the existing overhead rail and both hangers in place. Critical: the original door's TOP EDGE must now be occluded inside the ceiling, with the unchanged door body emerging downward from a narrow continuous recessed SLOT in the ceiling underside. Show a plausible softly shaded reveal with front and rear return edges and depth, not a black stripe. The front ceiling lip must occlude a SMALL portion of the existing door top without moving or resizing the door, its left side edge or thickness. Finishing encloses the header recess; it is NOT a separate broad board floating ABOVE an exposed door top. No visible joint line where new finish meets original upper wall, no added panel outline, no wedge sinking dramatically on the right. Consistent perspective and restrained finishing depth across the image. Preserve original door surface and all door pixels outside the small occluded top region as closely as possible. LOCK camera, crop, original door left/right boundaries, door position/scale/thickness, upper caption whitespace, wall color/texture, soft daylight direction and warmth. Conceal hardware, do not redesign or reposition its conceptual structure. Use same warm matte plaster material as upper ceiling, delicate texture and realistic contact shadows. No complex inner mechanisms, no additional hardware, no text/logos/labels/arrows. Generic explanatory architectural concept, not verified construction. Do not regenerate unrelated parts of the image. Only one candidate.
