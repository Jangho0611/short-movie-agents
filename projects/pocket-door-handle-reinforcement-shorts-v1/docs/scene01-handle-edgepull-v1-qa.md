# Scene 1 일반 접이식 엣지풀 v1 QA
2026-11-04. 사용자 최신 지시로 HB680 푸시버튼식 대신 일반 접이식 유형 조사 후 제작. 전체 WARN / 시각 승인 대기.

## 공식 조사
Deltana EP475, Edge Pull 4×3/4:
https://deltana.net/catalog/knobs-pulls-and-plates/viewing/edge-pulls-solid-brass/258_edge-pull-4x-34
제조사 페이지의 사진을 브라우저로 직접 확인. 길고 좁은 플레이트와 회동하는 가느다란 걸이, 상하 체결부 관찰. 제조사는 포켓도어용 또는 단독 부품으로 설명. Brushed Nickel EP475U15 마감 제공.
보조 공식 자료 Baldwin 0465:
https://images.baldwinhardware.com/is/content/Baldwin/Baldwin-Reserve-Price-Book-2024
공식 설명에서 spring-loaded lever가 faceplate에 flush하게 돌아가고 pocket door용임을 확인. 이번 이미지는 두 제조사 정확한 복제품이 아닌 일반 유형 콘셉트.
HB680의 별도 푸시버튼 및 평행 인출 구조를 혼합하지 않음.
바닥 기준 설치 높이/실제 작동거리/최종 설치 적합성 미확인. 기존 이미지의 시각적 설치 부근만 참고.
공식 사진은 조사용으로만 보고 도구 입력/합성에 사용하지 않음.

## 호출 및 산출
직전 HB680 생성 호출은 사용자에 의해 0.3초 뒤 중단됨. 결과 파일은 생성 폴더에서 확인되지 않았음. 서버 실행/과금 여부는 확인 불가하므로 호출시도 자체를 없었다고 계산하지 않음.
이후 사용자의 다른 일반 엣지풀 요청 및 '조사후 진행'에 따라 새 디자인 호출1회 완료, 후보1장. 완료 결과1장, 별도 중단시도1건.
재시도/다중후보/업스케일 없음. 실제 비용·크레딧 도구 미제공으로 미확인. 별도 구매 없음.
입력: scene01-handle-types-base-v2.png 단독. 생성 원본941×1671.
모바일360×640, 비교1440×640: 왼쪽부터 세로형v2 / 원형v3 / 엣지풀v1 / 잠금형v5.
출력 원본 바이트 복사, 형태 후처리 없음.

## 직접 시각 QA
- PASS: 앞면 손잡이·잠금조작부 없음. 깨끗한 문짝 앞면.
- PASS(시각): 좁은 오른쪽 끝단 위 플레이트 설치. 원래 긴 손잡이 잔상 없음.
- PASS(유형): 상부 회동 지점에서 아래 자유단이 바깥으로 나온 얇은 접이식 걸이. 끝단 바깥으로 펼쳐진 인상.
- PASS: HB680 푸시버튼/잠금쇠/앞면 버튼 혼합 없음. 상하2개 체결부는 참고 유형에서 관찰한 배치.
- WARN: 실제 힌지·스프링·수납 가능성은 이미지로 검증 불가. 공식 제품 작동 사진으로 주장하지 않음.
- WARN: 끝단 폭 약72px→모바일27.5px, 초기목표36~48px에는 못 미침.
- PASS(정지 식별): 모바일에서 플레이트와 펼쳐진 걸이 구분 가능. 세부 기구/실기기UI는 미확인.
- WARN: 플레이트 약x604~656,y689~1177, 중심(630,933). 기준 앞면중심(559,1001)과 다른 설치 면이므로 x동일 강제 안 함. 화면상 높이는 약68px(모바일26px) 위로 이동.
- WARN: 문짝 끝단 약x592~664로 기준x653~701과 다름. 배경 프레이밍·바닥 명암도 바뀜. 동일 배경 하드컷의 완전 고정성 PASS 아님.
- WARN: 좁은 끝단 위 설치로 읽히고 심한 비정상 두께는 관찰되지 않지만 실제 문짝 치수는 검증하지 않음.
- WARN: 따뜻한 웜화이트 분위기는 유지하나 정밀 조명/픽셀 동일성 없음.
- 실제 하드컷 연속영상/플랫폼/아이폰 QA 미실행.

## 보존 및 승인
기존 세로형·원형·잠금형·영상·TTS·Cover·엔딩·가이드 수정 없음. 엣지풀PNG와 모바일/비교/이 QA만 신규 추가.
현재 후보는 유형 표현 검토용. 정확한 Deltana/Baldwin/HB680 공식 제품이나 실제 설치 사례로 표기하지 않음.
사용자 승인 필요: 접이식 형태 채택, 모바일 식별성, 끝단 구도·높이·배경 변화 허용 여부. 자동 후속생성/영상 제작 없음.

## 실제 프롬프트
Create ONE photorealistic architectural pocket-door installation concept based on the supplied user's image for room, warm-white door and soft daylight only. Change the hardware type to a simple traditional folding EDGE PULL. This is an independent generic concept, NOT an official manufacturer photo.
Remove ALL hardware and cutouts from the BROAD FRONT face: it is clean plain warm-white, no front pull, no snib, no button. Hardware exists ONLY on the narrow RIGHT LEADING END FACE.
Camera slightly closer and angled toward that end face, broad front still visible left, neutral room visible right. End-face apparent width roughly 10–13% of portrait width, obtained by perspective, NOT an abnormally thick slab. Natural residential door proportions. Hardware center around60% image height, keep upper space clean.
Use a SIMPLE traditional pivoting folding pocket-door edge pull inspired by the general topology of common solid-brass edge pulls: slender vertical satin/brushed-nickel rectangular faceplate recessed in the end grain, two small flush countersunk fastenings one at top and one at bottom, narrow vertical recess containing a single slim flat finger lever. The lever pivots at its UPPER end and is shown partly swung OUTWARD from the end face into the open air to the RIGHT, its lower free end angled downwards and out, as in a small folding edge grip. Modest compact projection, not a giant door lever, ring, rectangular loop, hook, or horizontal bar. The stowage pocket behind is narrow, mechanically coherent; internal spring and mounting parts remain hidden inside door. No separate release button, no HB680 parallel-arm pop-out mechanism, no lockbolt, no invented gears, no extra holes or fastenings.
Maintain quiet warm-neutral minimal background and soft natural light. Sharp subtle metal surface, clean flush installation boundary, realistic modest shadows. No exaggerated glossy rendering or floating parts. One portrait candidate, no collage, text, logos, labels, dimensions or graphics.

