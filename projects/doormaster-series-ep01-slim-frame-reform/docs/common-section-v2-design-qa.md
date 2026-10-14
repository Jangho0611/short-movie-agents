# 공통 단면 화면 v2 디자인 적용 및 검증

2026-10-13. 정지 시안 1장, 사용자 승인 대기. v1 및 기존 파일 보존.

## 실제 확인한 기준

- /Users/janghokim/Documents/daesan-field-shorts/docs/PROJECT_HANDOFF.md — 현장형 지침, 승인 기준본, 자막과 피사체 가림 방지, 최신 지시 우선.
- /Users/janghokim/Documents/short-movie-agents/docs/daesan_shorts_instructions.md — v2.10 공통 실행 지침, 최대 2줄, 단일 메시지, 디자인 라이브러리 적용 관계, 캐릭터 단일 canonical 원칙.
- /Users/janghokim/Documents/short-movie-agents/docs/Shorts_제작_운영가이드.md — §8 정보형 화면, 라벨 가림 방지, 최소 모션, clean cut.
- /Users/janghokim/Documents/short-movie-agents/docs/design-styles/README.md — 외부 웹 디자인 분석 참고 라이브러리임을 명시. 대산 승인 화면이나 브랜드 공식 문서가 아님.
- /Users/janghokim/Documents/short-movie-agents/docs/design-styles/airbnb/DESIGN_Airbnb.md — 실제 존재하는 파일. 흰 배경, 여백, 사진 중심 위계와 절제된 깊이감. 이전 공간 이미지와 관련된 참고 문서이나 이번 단면의 색·폰트를 결정하는 승인 기준으로 사용하지 않음. README의 DESIGN.md 링크명과 실제 파일명 차이 확인.
- /Users/janghokim/Documents/daesan-field-shorts/docs/26.09.11_테스트레퍼런스.md — 현장형 초굵은 한글, 검정 외곽선, 핵심어 노랑, 최대 2줄, POP 등.
- /Users/janghokim/Documents/daesan-field-shorts/001-morning-logistics/src/daesan-field-caption-v7.tsx — 승인본 자막 구현값 확인.
- /Users/janghokim/Documents/daesan-field-shorts/001-morning-logistics/output/daesan-field-preview-v7.mp4 — 기존 추출 5초 프레임으로 승인 영상의 상단 2줄과 주시각 배치 확인.

별도의 단일 '대산 승인 디자인 DESIGN.md'는 확인한 문서 집합에서 찾지 못했다. 위 현장형 지침과 명시적으로 승인/LOCK된 v7 구현을 우선 적용했다. Airbnb의 핑크나 웹 전용 폰트를 대산 색·폰트라고 간주하지 않았다.

## 기준 분석과 적용

| 항목 | 확인된 기준 | 이번 적용 |
|---|---|---|
| 배경 | 승인 영상은 현장 영상과 어두운 여백. 소스 바탕색 #111 | #111 단색 바탕에 단면 배치. 실사 배경을 단면 화면으로 바꾼 시안 해석이며 모든 대산 영상의 고정 배경 규칙은 아님 |
| 포인트 | v7 흰색 #fff, 노랑 #FFE600, 외곽 #080808 | 제목 흰색/노랑, 보강 영역 노랑. 원본 샘플의 청록·네이비 카드 제거 |
| 폰트 | Apple SD Gothic Neo, Noto Sans KR, sans-serif; weight 900; stroke 5px; 자간 0 | 동일 계열·굵기·외곽 적용, 제목 96/112px. SVG 글자는 편집 가능 |
| 제목 | v7 상단 영역 x55,width970,top170,height600. 씬별 약94~132px | 상단 2줄, 중앙 정렬. 기준선 y395/530. 내용은 '곡면의 빈 공간, / 받침으로 보강' |
| 주시각 | 핵심 피사체를 크게 두고 자막으로 가리지 않음 | 단면 약 x85~995,y778~1183. 부품 간 관계 유지 |
| 여백 | 상하 빈 공간 활용, 극단 하단 UI 피함 | 제목/단면/보강 라벨 분리, 하단 안전 여백 확보 |
| 캐릭터 | 사용 시 승인 단일 canonical 사용 | 이번 구조 설명에는 추가하지 않음. 승인 현장 영상도 캐릭터 필수 규칙 없음 |
| 전환·모션 | clean cut, 필요시 글자/단어 POP·핵심어 강조 | 정지 시안만 제작. 모션·전환 준수 여부는 이번에 평가하지 않음 |

## v1 대비 변경

원본 샘플의 상단 분류 문구, 둥근 설명 바, 흰 카드, 기술 검토 문구를 제거했다. 단면 설명을 위한 짧은 부품명과 받침 보강 라벨만 유지했다. 실제 구조의 미확정 사항은 화면 대신 SVG 메타데이터 및 문서에 보존했다.

문짝·문틀·벽체·기존 문선의 SVG 그룹은 XML 직렬화 비교에서 v1과 동일하다. 원래 406×720 좌표는 section-model 내부에 그대로 두고 전체 그룹에 동일한 translate(32.5 100) scale(2.5)를 적용했다. 비균등 확대·원근·개별 부품 이동 없음. 1080×1920 화면으로 재배치한 것이며 구조 좌표를 변경하지 않았다.

support-zone 영역의 위치·크기는 유지하고 색과 라벨만 바꿨다. 여전히 점선의 보강 위치 표시이며 실제 자재 형상이 아니다. mdf는 빈 독립 그룹. existing-casing은 기본 숨김. 씬2~5는 동일 그룹을 재사용 가능하다.

## 검증 결과

- PNG 1080×1920, 직접 시각 검수: 제목 잘림·단면 가림 없음, 상단 2줄, 포인트색 일치.
- 6개 독립 부품 그룹 유지. 네 구조 그룹의 외곽·음영 동일성 자동 확인.
- 기존 곡면 유지, 새 내부 홈·MDF 도형·고정재 없음.
- 정면과 얕은 음영 유지, 과장된 3D 없음.
- 디자인 지침의 정지 화면 관련 기준 적용. 기존 승인 영상의 실사 배경과 동일한 화면은 아니며 단면 콘텐츠에 맞춘 적용 시안이다. 최종 디자인 승인은 대기.
- PNG는 요청된 정지 시안 확인을 위한 SVG 래스터 변환물. Remotion·모션·영상 렌더·TTS·AI 생성 없음.

MDF 끝단·최종 돌출 방향·벽 마감 기준면, 받침 실제 형상 및 고정법은 미확정 상태를 유지한다.
