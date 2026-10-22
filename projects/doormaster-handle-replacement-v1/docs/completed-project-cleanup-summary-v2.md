# 대산 Shorts 완료 프로젝트 정리 재점검 요약

본요약은손잡이편프로젝트내문서이며공통가이드수정아님. 작업기록별 완료/정리표기를기준으로4개프로젝트만조사. 도어클로저는목록과26.10.19기록에서정확경로확인. 추가표본은합판품질편/히든도어목공편의정리완료기록으로선정. 기타완료기록이검색된프로젝트는이번파일조사미실시이며전저장소정리완료를보장하지않음.

| 프로젝트 | 전체bytes | C파일 | C bytes | C 후예상bytes | C tracked |
|---|---:|---:|---:|---:|---:|
| doormaster-handle-replacement-v1 | 538930299 | 61 | 64868042 | 474062257 | 0 |
| door-closer-shorts-v1 | 743171094 | 372 | 112855960 | 630315134 | 0 |
| plywood-quality-change-shorts-v1 | 153685683 | 3 | 3188775 | 150496908 | 3 |
| hidden-door-carpentry-shorts-v2 | 73533778 | 0 | 0 | 73533778 | 0 |

C 합계 436파일/180,912,777bytes (172.53MiB). node_modules와D는포함하지않음. 휴지통이동만으로사용디스크공간이회수되지는않으며이는후속정리가능논리용량이다.

## doormaster-handle-replacement-v1

- 최종 assemble-caption-preview-v1.py는 Preview v3 오디오와 구 Scene 입력 사용. Preview v3→v1 의존 연쇄를 승인원음/최종Scene으로 단순화하기 전 D 6개는 이동 금지. 이번엔 소스 수정 안 함.
- 기존 cleanup-final-review-v1의 과거 QA 언급/실패 이력만으로 보존한 판단은 철회. 비결정적 생성도 최종 사용/유일 원본이 아니면 후보 가능.

- /video/: 7파일/17,101,584bytes
- /audio/: 25파일/5,455,484bytes
- /images/: 19파일/35,052,753bytes
- /covers/: 10파일/7,258,221bytes
- 상세: [프로젝트별 목록](../../doormaster-handle-replacement-v1/docs/cleanup-reassessment-v2.md)

## door-closer-shorts-v1

- AI 테스트는 본편 정리 완료 이후 추가됨. 최근 일부 테스트 평가대기 상태는 후보 목록에 명시; 자동이동 금지.
- render-cover-v3.py는 비교검사용 door-closer-cover-v2.png를 읽지만 현재 그 파일이 없음. 기존 정리 후 재현검사 의존 결손이며 이번C후보 정리로 발생한 문제 아님. 승인v3/원본Hero/소스 보존, 향후비교의존 제거 또는 구본복구 승인 필요.
- 원본 실촬영/최종 Overlay 시퀀스는 재현 필수라 보존. 이전 Overlay1/4-v1만 후보.

- /video/: 1파일/789,337bytes
- /audio/: 2파일/556,748bytes
- /images/: 369파일/111,509,875bytes
- /covers/: 0파일/0bytes
- 상세: [프로젝트별 목록](../../door-closer-shorts-v1/docs/cleanup-reassessment-v2.md)

## plywood-quality-change-shorts-v1

- 이전영상/TTS48개 정리는 기록과 현재파일상태가 대체로 일치. 남은Cover v1/구크롭3개는 C. Coverv2/raw는 최종v3 의존으로 B.
- 루트 qa/에는 과거자료가 있을 수 있으나 이번명시5경로밖이므로 후보량에 포함하지 않음. 전체용량에는 포함.

- /video/: 0파일/0bytes
- /audio/: 0파일/0bytes
- /images/: 0파일/0bytes
- /covers/: 3파일/3,188,775bytes
- 상세: [프로젝트별 목록](../../plywood-quality-change-shorts-v1/docs/cleanup-reassessment-v2.md)

## hidden-door-carpentry-shorts-v2

- 정리완료기록 이후 조사범위에서 명백한 테스트 잔존 C는 없음. 미사용 대산이 모션/PNG는 이전 USER_KEEP 재사용보존 기록이 있어 D로 제시.

- /video/: 0파일/0bytes
- /audio/: 0파일/0bytes
- /images/: 0파일/0bytes
- /covers/: 0파일/0bytes
- 상세: [프로젝트별 목록](../../hidden-door-carpentry-shorts-v2/docs/cleanup-reassessment-v2.md)

## 실행 제한
보고서와각프로젝트날짜형기록만작성. 기존승인결과물/소스/공통가이드변경,삭제/이동/휴지통/Git add/commit/push 없음. 전체재현실행은수행하지않아동적참조의완전성/현재환경렌더성공까지PASS로확정하지않음. D는필요근거확보·의존성정리승인전보존.

## 최종 검증 및 Git 상태

조사 파일 1496개의 현재 SHA256을 보고서와 다시 대조했고 모두 일치했습니다. 최종 영상·Cover·SNS도 각 보고서의 SHA256과 일치합니다. Git branch는 `main`, staged 파일은 0개입니다. 저장소 전체 status에는 기존 변경을 포함하여 modified 1개, untracked 443개가 표시됩니다. 이번 작업은 프로젝트별 보고서와 작업기록만 작성했습니다. 손잡이편은 미추적 상태이며, 정리 후보 중 Git 추적 파일은 합판편 Cover 3개입니다. node_modules는 ignore 대상으로 유지됩니다.

정리 후보는 영상 8개 / 17,890,921 bytes, 오디오 27개 / 6,012,232 bytes, 이미지 388개 / 146,562,628 bytes, Cover·크롭 QA 13개 / 10,446,996 bytes입니다. 총 436개 / 180,912,777 bytes이며 D 19개는 제외했습니다.
