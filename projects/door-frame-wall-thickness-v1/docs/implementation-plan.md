# 도어 문틀 시리즈 2편 — 구현 준비

제목: 벽 두께가 다르면 문틀은 어떻게 발주할까?
대상: 인테리어 업체 / 현장 담당자 / 자재 발주 담당자.
핵심: 벽체 두께만 보고 문틀 폭을 정하지 않는다.
기획·팩트·Scene 구조는 사용자 승인 원문 `approved-request.txt`를 그대로 기준으로 한다. 이번 단계는 구현 준비와 TTS 후보 보고이며 콘텐츠 Scene 코드·음성·렌더는 제작 전이다.

## Scene별 명세

공통: 1080×1920 / 30fps, Main Linear의 정밀 정렬·얇은 divider·명확한 위계·제한적 accent를 적용할 예정. 웹 UI 복제 없음. Pretendard 사용. 일반형 130 강조색을 Scene 3과 연결. 장면 길이는 TTS 실제 발화와 규격표 가독성 확인 후 결정하며 현재 미확정.

| Scene | 메시지 / 화면 | 실제 발화용 TTS 후보 | 구현 방식 / 필요 자산 | 상태 |
|---|---|---|---|---|
| 1 Hook | 벽 두께만 알면 / 문틀 폭 결정 끝? 벽체 단면 115mm, 필요한 문틀 폭 ? | 문틀 발주할 때, 벽 두께만 확인하고 계신가요? | Remotion 벽체 개념 블록·치수선. 첫 프레임부터 질문 노출, 1~2초 내 인지. 승인 point-right 모션은 작게 보조 | 기획 승인 / TTS 후보 / 미구현 |
| 2 최종 마감 두께 | 벽체 두께만 확인 X / 최종 마감 두께까지 확인. 타일 등 마감재에 따라 최종 두께가 달라질 수 있음 | 현장에서는 벽체 두께만 보면 안 됩니다. | Remotion 115mm 벽체에 타일 마감 레이어 추가. 마감층 두께의 숫자·합산값은 제시하지 않음. 실제 상세 시공도·축척도로 오인되지 않는 개념도 | 동일 |
| 3 실제 발주 사례 | 115 벽체 + 타일 마감 → 발포문틀 130바 필요. 벽체 115mm = 항상 130mm라는 의미는 아님 | 실제 발주에서는 이렇게 달라질 수 있습니다. | Remotion 단계 전개: 115mm 벽체 → +타일 마감 → 발포문틀 130mm. 타일 마감·발포문틀 조건 지속 노출, 130 강조 | 동일 |
| 4 발포문틀 운영 규격 | 발포문틀 / 정해진 운영 폭에서 선택. 타입별 표, 단위 mm | 발포문틀은 타입별 운영 규격도 함께 확인해야 합니다. | Remotion 3개 타입을 세로 행으로 쌓고 숫자는 각 행 안에서 읽기 좋은 2줄 배열. 일반형 130만 accent. 전체 규격이 동시에 보이는 정지 구간 확보, 숫자 TTS 열거 없음 | 동일 |
| 5 가변형 문틀 | 가변형 문틀 / 60~250mm / 5mm 단위. 필요한 문틀 폭에 맞춰 발주 | 가변형은 필요한 폭에 맞춰 더 세분화해서 발주할 수 있습니다. | Remotion 60~250mm 범위선, 5mm 간격 눈금. 양 끝값과 단위 고정. 혼합형=가변형 표기나 기성폭과 동일 분류 축의 비교표 없음 | 동일 |
| 6 발주 체크포인트 | 문틀 폭 발주 전 / 이 3가지는 꼭 확인. 01 벽체 두께 ✓ / 02 최종 마감 두께 ✓ / 03 제품별 공급 규격 ✓. 현장에 필요한 문틀 폭으로 발주 | 문틀 폭은 벽체만 보지 말고, 마감 후 필요한 폭과 제품별 공급 규격까지 확인해서 발주하세요. | Remotion 체크 순차 강조 → 마지막 핵심 문구. 승인 open-arms-explain 보조 모션 → Canonical 엔딩 clean cut | 동일 |

Scene 1~5 TTS는 승인 방향 문구를 그대로 유지했다. Scene 6만 군더더기를 줄인 후보이며 확정 문구 변경으로 취급하지 않는다. 전체 TTS 문구 확정 후 Scene별 음성과 full-tts-qa 제작, 통합 청취 QA를 진행한다. voice 후보 ko-KR-Chirp3-HD-Alnilam / speakingRate 1.00, 임의 pitch 없음.

## 잠긴 팩트

- 일반형: 110 / 130 / 140 / 155 / 175 / 195 / 210 / 230 / 245mm.
- 와이드형: 110 / 140 / 155 / 175 / 195 / 210 / 230 / 245mm.
- 슬림와이드형: 110 / 140 / 155 / 175 / 195 / 210 / 230 / 245mm.
- 가변형: 60~250mm, 5mm 단위 발주.
- 실제 사례: 벽체 115mm + 타일 마감 + 발포문틀 조건에서 130바 필요. 범용 계산식 금지.
- 팩트 근거 상태: 발포 규격은 사용자가 전달한 영림 공식 Door Frame 확인 결과, 가변형은 발주 담당자 현업 확인 및 신규 책자 P360 기재에 관한 사용자 확인. 이번 준비 단계에서 별도 재조사·원문 검증은 하지 않았다.

## 공통 엔딩 및 자산

- 공용 원본: /Users/janghokim/Documents/short-movie-agents/assets/daesan-ending/
- 프로젝트 `src/daesan-ending/`: DaesanEnding 및 approved의 HeadquartersOverlay / brief / tokens / fonts. public 경로 prefix만 변경.
- 프로젝트 `public/daesan-ending/`: 본사 원본 IMG_3934.MOV, 정상속도+Hold 배경, 승인 Canonical Preview, ending-approved-v3.mp3, 로고, Pretendard 500/600/800.
- 엔딩: 170frames / 30fps, 5.667초. 3.233초 정상 재생 후 Hold. 승인 자막·로고 모션과 대표번호 031-388-3833 / 1661-6612 유지.
- `public/assets/video/`: daesani-point-right.mp4, daesani-open-arms-explain.mp4.
- `public/assets/images/`: 승인 cover-point-right / cover-point-left / cover-open-arms 투명 PNG 3종(공통 기본 세트 복사만 수행, Cover 제작 아님).
- `public/references/`: daesani-motion-safe-reference.png.
- `public/assets/logos/`: daesanlogo2.png.
- 모션은 원본 보존. 실제 Scene 합성 전 배경 제거 필요; 알파 파생본은 assets/video에 버전 저장 후 OffthreadVideo transparent muted로 사용. 현재 배경 제거·영상 가공 없음. 승인 PNG를 쓰는 경우 위치·크기만 조정한다.
- 상세 복사 출처 및 SHA256: slim-copy-manifest.json. 공용 및 타 프로젝트 런타임 직접 참조 / symlink 없음.

## 확인 필요 / 다음 단계

- TTS 후보 중 Scene 6의 최소 다듬기 확정 및 이후 실제 청취 QA.
- small-daesan-pose-front-v1.png / small-daesan-pose-point-right-v1.png / small-daesan-pose-explain-v1.png 공용 원본 위치 확인 필요. 제한 확인한 assets/public/references에 없고 1편 준비 기록에도 미확보로 기재됨. 이름 변경·신규 생성으로 대체하지 않음.
- Scene 4의 실제 모바일 규격표 가독성과 Scene별 duration은 제작·QA에서 확정.
- npm 의존성은 package-lock으로 준비했으며 node_modules 복사·설치 없음. 제작 단계 진입 시 프로젝트에서 npm ci 필요.
- 1편 package/lock의 Remotion 4.0.496 유지. Canonical 독립 패키지의 4.0.523과 차이가 있으므로 향후 엔딩 재렌더 시 Canonical Preview 기준으로 시각 QA 필요. 현재 의존성 임의 업그레이드 없음.

## 저장 규칙

Scene 이미지 public/assets/images/; Scene 영상·Preview·Final public/assets/video/; TTS public/assets/audio/; Cover·Cover QA public/covers/; 승인 공통 reference만 public/references/.
Canonical 엔딩 세트는 엔딩 가이드 지정 public/daesan-ending/ 경로 유지.
public/previews/ 및 output/ 사용 금지. 이미지 생성, 콘텐츠 제작·렌더, Cover/SNS, 정리, Git 단계는 실행하지 않았다.
