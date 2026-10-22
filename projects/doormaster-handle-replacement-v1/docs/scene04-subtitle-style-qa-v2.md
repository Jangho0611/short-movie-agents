# Scene 4 본편 자막 스타일 v2 QA

2026-10-22 / 사용자 승인 대기. 16초 무음 임시 타이밍 유지. TTS 싱크 미검증.

## 승인 스타일 근거와 재사용

Slim Copy 원본 `doormaster-door-panel-replacement-v1`의 `docs/26.10.15수정.md` 최종 승인 기록(Preview v4, Scene 3~6 핵심 자막 통합)과 실제 `public/assets/video/door-panel-replacement-preview-v4.mp4` 310/430프레임을 확인했다. Cover 스타일을 적용하지 않았다.

- 실제 원본 구현: `../doormaster-door-panel-replacement-v1/src/caption-preview-v4.tsx`의 Scene 내부 SVG 자막 레이어.
- 재사용 컴포넌트: `src/DoorMasterBodyCaptionV4.tsx`. 원본의 자막 JSX를 추출하고 문구·로컬 프레임만 입력으로 분리했다. 원본 프로젝트는 수정하지 않았다.
- Scene 4 소스: `src/Scene04InfoV2.tsx`, 독립 등록: `src/scene04-index-v2.tsx`, ID `Scene04InfoV2`.
- 원본의 일반 2줄 버전을 사용. Scene 3 전용 compact(206px 높이, 90/100px) 예외는 적용하지 않았다.

| 항목 | 승인 구현과 적용값 |
|---|---|
| 폰트 | `Apple SD Gothic Neo,Noto Sans KR,sans-serif` 동일. 현재 Mac에 AppleSDGothicNeo.ttc 존재 확인. 별도 폰트 교체 없음. 브라우저 resolved glyph face를 별도 계측한 것은 아님. |
| weight | SVG fontWeight 900 |
| 크기 | 첫 줄 100px, 강조 둘째 줄 107px |
| 정렬·위치 | x540 중앙, 기준선 y124/y244, 기준선 간격120px |
| 상단 영역 | top0, 폭1080, 높이298px, 웜화이트 #F4F1E9 |
| 색 | 기본 #303431, 강조 #FFE600 |
| 외곽선 | 강조에만 #343735 /3.66px, paintOrder stroke fill |
| 그림자 | 없음 |
| 등장 | 5프레임 opacity0→1, 12px 아래에서 원위치, 1-(1-p)^3 ease |
| 퇴장 | 원본처럼 별도 퇴장 모션 없이 다음 구간 교체 |

## 변경 전후

v1의 작은 번호 헤더·좌측 72px 제목·노란 밑줄을 제거하고 기존 본편의 중앙 2줄 자막으로 교체했다. 큰 자막은 핵심 메시지, 중앙 도면·수치는 근거 정보, 하단은 주의사항, 가장 작은 회색 문구는 출처로 분리했다. 원본 정보 그래픽과 도면의 위치·크기는 변경하지 않았다. 하단 정보는 본편 주자막과 다른 보조 정보 스타일을 유지했다.

| 임시 구간 | 주자막(각 2줄) |
|---|---|
| 0–4초 | 기존 타공 / 크기·위치 확인! |
| 4–8초 | 문두께 / 적용 범위 확인! |
| 8–12초 | 백셋·래치 / 규격 확인! |
| 12–16초 | 기존 설치 자국 / 가려지는지 확인! |

첫 12프레임은 Scene 3 원본 연결을 유지하고 그 뒤 승인 자막 등장 모션을 적용했다. 구간별 정보 그래픽의 기존 fade는 유지했다. 승인 TTS v3 원문은 변경하지 않았으며 주자막으로 그대로 반복하지 않았다. 화면의 임시 번호는 제거했다. silent timing test 문구는 출력하지 않는다. 소스의 임시 타이밍 주석은 비표시 메타데이터로 유지한다. QA 보드의 버전/시각 표시는 QA용이며 영상 내부 문구가 아니다.

## QA 결과

| 검증 | 판정·내용 |
|---|---|
| 승인 본편과 시각 일치 | PASS. 실제 승인 렌더와 v2를 360×640으로 나란히 확인. 일반 2줄 자막의 글자색·외곽선·위치·크기 동일 구현. |
| 모바일 주자막 | PASS. 4개 핵심 자막 최대2줄, 줄바꿈 의미 단위 유지. 좌우 잘림 및 정보 요소와 겹침 없음. |
| 안전영역 | PASS(승인 스타일 기준). 상단 자막 위치 보존, 가장 긴 문구도 좌우 여유 확보. 플랫폼별 실제 UI 오버레이 검증은 별도. |
| 정보 그래픽 보존 | PASS. Scene 3 원본, 강조 타원·문두께 개념도·제조사 설명서 크롭·하단 주의사항 유지. 도면 재작성 없음. |
| 작은 출처 | WARN 유지. 주자막과 크기·색·위치 분리. 27px 출처는 360폭에서 약9px이므로 모바일 실기기 확인 필요. |
| 문두께·백셋 | PASS. 511NI 적용 문두께35~45mm, 설명서 백셋60mm 유지. 문 끝단에서 회전축 중심까지 의미 및 래치/문틀 받이 구분 유지. |
| Ø54/Ø55 | WARN·미해결 유지. 공식 설명서Ø54와 사용자 제공 대산 등록Ø55 별도 표시. 동일 규격 또는 실제 호환 PASS 주장 없음. |
| 자국 은폐 | PASS(설명). 제품·설치 상태에 따라 다름 유지. 실제 은폐 가능성은 미검증. |
| 영상 | PASS. H.264 1080×1920, 30fps, 480프레임,16초, 음성 스트림 없음. ffmpeg 전체 디코딩 exit0 및 OpenCV480프레임 디코딩 성공. |
| 기존 파일 보존 | PASS. 기준 src/public/승인 대본45개 SHA256 불변. v1 소스·영상·승인 Scene1~3 보존. |
| TTS 싱크 | 미검증. 4초씩 임시 구간이며 최종 승인 타이밍 아님. |

## 결과물

- `public/assets/video/scene04-info-preview-v2.mp4`
- `public/assets/images/scene04-subtitle-style-qa-v2.png`: 최종 영상의60/180/300/420프레임
- `public/assets/images/scene04-subtitle-reference-comparison-v2.png`: 승인 본편 / Scene4 v1 / Scene4 v2, 각360×640
- `docs/scene04-style-mechanical-qa-v2.json`: probe/디코딩/해시
- `docs/scene04-style-baseline-v2.json`: 기존45개 파일 기준 해시

승인 TTS 생성 후 실제 발화 의미 구간에 맞춰 자막 교체·등장 시점과 정보 체류 시간을 조정하고 통합 청취 QA를 해야 한다. 이번에는 음성 생성, Scene5, 전체 Preview/Final, AI 이미지, Cover/SNS, 삭제·이동, Git commit/push를 수행하지 않았다. 사용자 승인 전 다음 제작 단계로 진행하지 않는다.

원본 자막 구현 SHA256: `3e32886455f6d1fa6eb05ccd2f569a2fc71fe7862038a52e5c930addf3b3add0`
