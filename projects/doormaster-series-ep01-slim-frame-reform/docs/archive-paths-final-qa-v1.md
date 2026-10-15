# DoorMaster Ep01 원본 종료 준비 QA

## 판정

로컬 보존·경로 검증 PASS. 원본 폴더 이동은 금지 상태이며 최종 사용자 승인 필요. 이번 커밋 push/fetch 성공 후 Git 원격 보존 조건을 충족한다.

원본292개 /159,692,041 bytes: 동일171, 의도적 수정12(모두 원본 migration SHA와 일치), 승인 정리105(휴지통 SHA 일치), OS 메타데이터4. 콘텐츠 고유 파일 누락0. 원본의 과거 소스 버전은 수정 이력 및 원본에 남아 있으며 원본 정리는 영구삭제가 아닌 별도 승인 휴지통 이동 대상으로만 판단한다.

기존 승인 미디어·SNS·QA 해시 불변. render 실행 없음. 과거 전체 파이프라인이나 다른 OS 재현 보증 아님. 외부 Sharp 캐시·시스템 폰트·TTS 자격증명 의존성은 원본 프로젝트 경로와 별개로 남아 있다.

## output 잔여15개

모두 Git 미추적/ignore, 실행 입력 직접 참조 없음. 모두 기존 Scene 검토 증거이며 최종 Scene 입력이 아니다. Scene4/5 연결은 기존 docs/scene05-continuity-v5-qa.md 및 표준 comparison PNG와 연결한다. 다른 과거 프레임은 이미 보존된 보강/모션 QA와 중복 역할. 최종 판정의 대표 프레임2개만 복사했다. output15개는 하나도 삭제/이동하지 않았다. 아래 전부 별도 정리 승인 대상.

|상대경로|형식|bytes|표준 보존본|
|---|---|---:|---|
|output/preview-v3/scene3-qa.svg|.svg|4360|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v3/scene4-qa.png|.png|99397|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v3/scene4-qa.svg|.svg|4921|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-0.png|.png|98197|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-0.svg|.svg|5104|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-51.png|.png|99397|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-51.svg|.svg|5102|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-68.png|.png|99510|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-68.svg|.svg|5149|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-90.png|.png|98396|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v4/scene04-frame-90.svg|.svg|5104|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v5/scene04-last.png|.png|98396|public/assets/images/scene04-last-preview-v5-qa.png|
|output/preview-v5/scene04-last.svg|.svg|5104|기존 대표 QA 보존; 추가 복사 없음|
|output/preview-v5/scene05-first.png|.png|76772|public/assets/images/scene05-first-preview-v5-qa.png|
|output/preview-v5/scene05-first.svg|.svg|4663|기존 대표 QA 보존; 추가 복사 없음|

## 경로 수정

src/cover-doormaster-v3/compose-v3.py:4 및 src/cover-doormaster-v4/compose-v4.py:4 ROOT만 Path(__file__).resolve().parents[2]로 변경. 입력 버전·출력 의도 유지. AST 및 명시 입력 파일 존재 PASS. 실행 코드의 기존 원본 절대경로0. 과거 작업기록은 변경하지 않음.

## 원격/다른 작업

시작 main HEAD=origin/main=03e1433cba02e69c770e1eea14e80f0eea32655e (fetch 확인). 이번 관련 파일만 commit/push하며 최종 SHA와 원격 확인은 Git history 및 최종 응답에 보고. 다른 프로젝트 미완료 변경은 제외.
