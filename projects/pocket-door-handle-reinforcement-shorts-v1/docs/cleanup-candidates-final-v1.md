# 최종 정리 후보 — 승인 요청 v1

2026-11-05. HEAD d4d2bba9acd419347a6e695f052c9e9b5bfeae3b. 삭제·이동·Git 변경 없음. 기존 가이드와 최종 작업기록/재현성 기록 기준. 이전 A/B/C/D를 자동 적용하지 않음.
프로젝트 제작 파일 1178개 전수 목록(설치 node_modules 제외). 모든 영상/이미지/TTS/기타 포함. 후보 4개, 1,937,610 bytes. 파일별 SHA256은 JSON에 기록하여 후속 삭제 대상 바뀜 방지.

## 중요한 보존 의존

최종 통합v3 / Scene1v7,2v3,3v2,4v5,5v1 / Coverv2 / SNS final·QA / 최종QA / 소스·설정·폰트 / 공용 엔딩17파일 모두 보존.
Scene1v6, scripts/reproduce-scene01-v7.py, 보존 원문/검증JSON, scene01-v7-0/18/60 및 old-0/18/60 PNG6개와 승인손잡이4종 보존.
TTS 최종5개 보존. Scene1v10은 v9-part-a와 v10-part-b 입력이 필수. assemble-scene01-tts-v10.py는 scene01-tts-v10-preservation.json의 과거 음원도 실제 읽어 해시 검증하므로 삭제하면 검증 실패 가능.
이전에 승인된 Scene·전체Preview·손잡이 원본은 삭제 후보 제외. 미채택이어도 합성 원본(privacy-v2/v3, round-v2 등)은 보존/판단보류.

## 조사 방법과 한계

실행 소스 내 파일명과 JSON·MD 역참조를 구분. 과거 실험 렌더의 output 선언은 입력 사용과 구분. JSON 참조가 있으면 후보에서 제외. 문서 링크는 역사 기록이며 실제 입력으로 단정하지 않음. 정적 검사로 해결되지 않는 동적 참조는 판단보류. 삭제 후보는 Scene3에서 최종 미채택된 실사 단면 실험의 파생 출력과 OS/로그만 제한 선정.
근거: docs/scene03-motion-test-v2.md, scene03-remotion-motion-test-v1~v4-qa.md(무음 실험), scene03-doormaster-preview-v2-qa.md(최종 2D); 최신 사용자 실사 내부 미채택 지시. 테스트 제작 승인은 최종 자산 채택과 구분.

## 유형별 후보

### 영상: 0개 / 0 bytes

안전하게 삭제 확정 가능한 파일 없음. 아래 보류 목록 참조.

### 이미지: 4개 / 1,937,610 bytes

| 상대경로(파일명) | bytes | 생성 목적·승인 | 현재 참조 | 재현 필요 | 추천 이유·영향 | Git 추적 |
|---|---:|---|---|---|---|---|
| `public/assets/images/scene03-remotion-motion-test-v1-contact-sheet.png` | 389765 | 미채택 실사/단면 Scene3 무음 실험의 출력·검토용 추출 프레임 / 테스트 제작 승인만, 최종 채택 아님 | 실행 참조 없음; 문서 0건 | 최종 2D Scene3 재현에 불필요 | 최종은 별도 2D Scene3 v2; 실험 입력/소스는 유지하고 출력 파생물만 정리 / 과거 실험 재생/이미지 검토 불가; 문서·해시 이력은 남음 | 추적: 후속 삭제 커밋 필요 |
| `public/assets/images/scene03-remotion-motion-test-v2-contact-sheet.png` | 522401 | 미채택 실사/단면 Scene3 무음 실험의 출력·검토용 추출 프레임 / 테스트 제작 승인만, 최종 채택 아님 | 실행 참조 없음; 문서 0건 | 최종 2D Scene3 재현에 불필요 | 최종은 별도 2D Scene3 v2; 실험 입력/소스는 유지하고 출력 파생물만 정리 / 과거 실험 재생/이미지 검토 불가; 문서·해시 이력은 남음 | 추적: 후속 삭제 커밋 필요 |
| `public/assets/images/scene03-remotion-motion-test-v3-contact-sheet.png` | 523019 | 미채택 실사/단면 Scene3 무음 실험의 출력·검토용 추출 프레임 / 테스트 제작 승인만, 최종 채택 아님 | 실행 참조 없음; 문서 0건 | 최종 2D Scene3 재현에 불필요 | 최종은 별도 2D Scene3 v2; 실험 입력/소스는 유지하고 출력 파생물만 정리 / 과거 실험 재생/이미지 검토 불가; 문서·해시 이력은 남음 | 추적: 후속 삭제 커밋 필요 |
| `public/assets/images/scene03-remotion-motion-test-v4-contact-sheet.png` | 502425 | 미채택 실사/단면 Scene3 무음 실험의 출력·검토용 추출 프레임 / 테스트 제작 승인만, 최종 채택 아님 | 실행 참조 없음; 문서 0건 | 최종 2D Scene3 재현에 불필요 | 최종은 별도 2D Scene3 v2; 실험 입력/소스는 유지하고 출력 파생물만 정리 / 과거 실험 재생/이미지 검토 불가; 문서·해시 이력은 남음 | 추적: 후속 삭제 커밋 필요 |

### TTS·오디오: 0개 / 0 bytes

안전하게 삭제 확정 가능한 파일 없음. 아래 보류 목록 참조.

### 기타: 0개 / 0 bytes

안전하게 삭제 확정 가능한 파일 없음. 아래 보류 목록 참조.

## TTS 전체 파일별 검토

대본은 해당 생성 request/input JSON 및 QA를 근거로 보존. 직접 청취로 실패 음성 판정하지 않음. 버전 번호만으로 삭제하지 않음. 아래 모든 음원의 세부 참조 목록은 JSON에 포함.

| 파일 | bytes | 판정 | 버전/Scene | 대본 확인 근거 | 참조·복구 필요 |
|---|---:|---|---|---|---|
| `public/assets/audio/full-tts-qa-v3.mp3` | 513644 | 판단 보류 | 통합/별도 음원 | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/full-tts-qa-v3.wav` | 1228480 | 판단 보류 | 통합/별도 음원 | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 6 |
| `public/assets/audio/full-tts-qa-v4.mp3` | 495404 | 판단 보류 | 통합/별도 음원 | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 4 |
| `public/assets/audio/full-tts-qa-v4.wav` | 1185268 | 판단 보류 | 통합/별도 음원 | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 4 |
| `public/assets/audio/full-tts-qa-v5.mp3` | 585644 | 판단 보류 | 통합/별도 음원 | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 0 |
| `public/assets/audio/full-tts-qa-v5.wav` | 1401744 | 판단 보류 | 통합/별도 음원 | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 0 |
| `public/assets/audio/scene01-tts-review-v3.mp3` | 59084 | 판단 보류 | ('01', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene01-tts-review-v3.wav` | 137792 | 판단 보류 | ('01', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene01-tts-v10-part-b.wav` | 115244 | 보존 | ('01', 'v10') | scripts/scene01-tts-v10-part-b-request.json | 최종 승인 원본 또는 최종 조합 입력; 실행 2/JSON 1 |
| `public/assets/audio/scene01-tts-v10.wav` | 227026 | 보존 | ('01', 'v10') | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 최종 승인 원본 또는 최종 조합 입력; 실행 9/JSON 8 |
| `public/assets/audio/scene01-tts-v3.wav` | 147884 | 판단 보류 | ('01', 'v3') | scripts/scene01-tts-v3-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene01-tts-v4.wav` | 132204 | 판단 보류 | ('01', 'v4') | scripts/scene01-tts-v4-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 4 |
| `public/assets/audio/scene01-tts-v5.wav` | 140204 | 판단 보류 | ('01', 'v5') | scripts/scene01-tts-v5-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 4 |
| `public/assets/audio/scene01-tts-v6.wav` | 159404 | 판단 보류 | ('01', 'v6') | scripts/scene01-tts-v6-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 4 |
| `public/assets/audio/scene01-tts-v7-part-a.wav` | 105644 | 판단 보류 | ('01', 'v7') | scripts/scene01-tts-v7-part-a-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 2/JSON 3 |
| `public/assets/audio/scene01-tts-v7-part-b.wav` | 101804 | 판단 보류 | ('01', 'v7') | scripts/scene01-tts-v7-part-b-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 3/JSON 3 |
| `public/assets/audio/scene01-tts-v7.wav` | 178762 | 판단 보류 | ('01', 'v7') | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 2/JSON 3 |
| `public/assets/audio/scene01-tts-v8.wav` | 203564 | 판단 보류 | ('01', 'v8') | scripts/scene01-tts-v8-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 3 |
| `public/assets/audio/scene01-tts-v9-part-a.wav` | 134444 | 보존 | ('01', 'v9') | scripts/scene01-tts-v9-part-a-request.json | 최종 승인 원본 또는 최종 조합 입력; 실행 3/JSON 2 |
| `public/assets/audio/scene01-tts-v9.wav` | 198166 | 판단 보류 | ('01', 'v9') | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 2 |
| `public/assets/audio/scene02-tts-review-v3.mp3` | 116684 | 판단 보류 | ('02', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene02-tts-review-v3.wav` | 276144 | 판단 보류 | ('02', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene02-tts-v3.wav` | 288044 | 판단 보류 | ('02', 'v3') | scripts/scene02-tts-v3-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene02-tts-v4.wav` | 253484 | 보존 | ('02', 'v4') | scripts/scene02-tts-v4-request.json | 최종 승인 원본 또는 최종 조합 입력; 실행 8/JSON 7 |
| `public/assets/audio/scene03-tts-review-v3.mp3` | 121964 | 판단 보류 | ('03', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene03-tts-review-v3.wav` | 288368 | 판단 보류 | ('03', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene03-tts-review-v4.mp3` | 103724 | 판단 보류 | ('03', 'v4') | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 4 |
| `public/assets/audio/scene03-tts-review-v4.wav` | 245156 | 판단 보류 | ('03', 'v4') | 관련 QA/개별 request 참조, 직접 대본 대응 추가 확인 필요 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 4 |
| `public/assets/audio/scene03-tts-v2.wav` | 384044 | 판단 보류 | ('03', 'v2') | scripts/scene03-tts-v2-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 6 |
| `public/assets/audio/scene03-tts-v3.wav` | 324524 | 판단 보류 | ('03', 'v3') | scripts/scene03-tts-v3-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene03-tts-v4.wav` | 251564 | 판단 보류 | ('03', 'v4') | scripts/scene03-tts-v4-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 1/JSON 4 |
| `public/assets/audio/scene03-tts-v5.wav` | 330284 | 보존 | ('03', 'v5') | scripts/scene03-tts-v5-request.json | 최종 승인 원본 또는 최종 조합 입력; 실행 7/JSON 12 |
| `public/assets/audio/scene04-tts-review-v3.mp3` | 121964 | 판단 보류 | ('04', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene04-tts-review-v3.wav` | 289026 | 판단 보류 | ('04', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene04-tts-v3.wav` | 293804 | 판단 보류 | ('04', 'v3') | scripts/scene04-tts-v3-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene04-tts-v4.wav` | 399404 | 보존 | ('04', 'v4') | scripts/scene04-tts-v4-request.json | 최종 승인 원본 또는 최종 조합 입력; 실행 10/JSON 11 |
| `public/assets/audio/scene05-tts-review-v3.mp3` | 88844 | 판단 보류 | ('05', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene05-tts-review-v3.wav` | 208696 | 판단 보류 | ('05', 'v3') | scripts/tts-candidates-v3-input.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene05-tts-v3.wav` | 220844 | 판단 보류 | ('05', 'v3') | scripts/scene05-tts-v3-request.json | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정; 실행 0/JSON 6 |
| `public/assets/audio/scene05-tts-v4.wav` | 249644 | 보존 | ('05', 'v4') | scripts/scene05-tts-v4-request.json | 최종 승인 원본 또는 최종 조합 입력; 실행 6/JSON 7 |

## 보존·보류 파일 전체

| 상대경로 | 유형 | bytes | 판정 | 이유 |
|---|---|---:|---|---|
| `.DS_Store` | 기타 | 10244 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `README.md` | 기타 | 511 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `blender/concept-v1/README.md` | 기타 | 3907 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/build-authorized.log` | 기타 | 2269 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v1/build.log` | 기타 | 375 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v1/build_motion.py` | 기타 | 5533 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/build_motion_final.py` | 기타 | 7086 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/build_motion_refined.py` | 기타 | 7018 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/encode-test-v1.sh` | 기타 | 286 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/pocket-core-motion-reviewed-v1.blend` | 기타 | 155139 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/pocket-core-motion-test-v1.blend` | 기타 | 155083 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/pocket-core-motion-v1.blend` | 기타 | 153647 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/qa-v1.json` | 기타 | 640 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/qa_test.py` | 기타 | 1730 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v1/refine.log` | 기타 | 2299 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v1/render-final.log` | 기타 | 25196 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v10/README.md` | 기타 | 3445 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v10/build_v10.py` | 기타 | 4570 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v10/geometry-qa.json` | 기타 | 699 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v10/pocket-handle-post-assembly-v10.blend` | 기타 | 113621 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v10/pocket-handle-pre-assembly-v10.blend` | 기타 | 113189 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v10/preservation-before.json` | 기타 | 36180 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v10/preservation-qa.json` | 기타 | 143 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v11/README.md` | 기타 | 2201 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v11/build_v11.py` | 기타 | 3799 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v11/geometry-qa.json` | 기타 | 586 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v11/pocket-handle-pre-assembly-v11.blend` | 기타 | 112633 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v11/preservation-before.json` | 기타 | 37233 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v11/preservation-qa.json` | 기타 | 43 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/README.md` | 기타 | 3217 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/build_v12.py` | 기타 | 6798 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/geometry-qa.json` | 기타 | 2283 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/pocket-handle-alignment-front-v12.blend` | 기타 | 115563 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/pocket-handle-alignment-oblique-v12.blend` | 기타 | 115537 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/preservation-before.json` | 기타 | 38029 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v12/preservation-qa.json` | 기타 | 37 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v13/README.md` | 기타 | 2767 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v13/build_v13.py` | 기타 | 4515 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v13/geometry-qa.json` | 기타 | 953 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v13/pocket-handle-reinforcement-cutaway-v13.blend` | 기타 | 118857 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v13/preservation-before.json` | 기타 | 39096 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v13/preservation-qa.json` | 기타 | 37 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/README.md` | 기타 | 2706 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/build_v14.py` | 기타 | 5524 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/geometry-qa.json` | 기타 | 4080 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/pocket-handle-single-cutout-post-v14.blend` | 기타 | 121319 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/pocket-handle-single-cutout-pre-v14.blend` | 기타 | 121309 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/preservation-before.json` | 기타 | 39910 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v14/preservation-qa.json` | 기타 | 37 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v15/README.md` | 기타 | 2479 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v15/build_v15.py` | 기타 | 5738 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v15/geometry-qa.json` | 기타 | 5315 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v15/pocket-handle-xray-reinforcement-v15.blend` | 기타 | 128119 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v15/preservation-before.json` | 기타 | 40983 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v15/preservation-qa.json` | 기타 | 63 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v16/README.md` | 기타 | 2357 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v16/build_v16.py` | 기타 | 4993 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v16/geometry-qa.json` | 기타 | 4878 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v16/pocket-handle-horizontal-section-v16.blend` | 기타 | 133878 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v16/preservation-before.json` | 기타 | 41791 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v16/preservation-qa.json` | 기타 | 43 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v17/README.md` | 기타 | 2552 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v17/build_v17.py` | 기타 | 6094 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v17/geometry-qa.json` | 기타 | 646 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v17/pocket-handle-horizontal-section-v17.blend` | 기타 | 139040 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v17/preservation-before.json` | 기타 | 42599 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v17/preservation-qa.json` | 기타 | 43 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v18/README.md` | 기타 | 2493 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v18/build_v18.py` | 기타 | 4674 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v18/geometry-qa.json` | 기타 | 8845 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v18/pocket-handle-horizontal-section-v18.blend` | 기타 | 138829 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v18/preservation-before.json` | 기타 | 43407 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v18/preservation-qa.json` | 기타 | 43 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/README.md` | 기타 | 3569 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/build_v19.py` | 기타 | 5745 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/build_v19_checked.py` | 기타 | 5876 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/final-image-comparison.json` | 기타 | 148 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/finish_v19.py` | 기타 | 2115 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/independent-geometry-qa.json` | 기타 | 242 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/motion-qa-checked.json` | 기타 | 24518 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/motion-qa.json` | 기타 | 24518 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/preservation-before.json` | 기타 | 44215 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/preservation-qa.json` | 기타 | 52 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/render-manifest-checked.json` | 기타 | 56584 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/render-manifest.json` | 기타 | 55040 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/scene03-assembly-motion-v19-checked.blend` | 기타 | 167866 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/scene03-assembly-motion-v19.blend` | 기타 | 167823 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/verify_v19.py` | 기타 | 1530 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/verify_v19_tolerance.py` | 기타 | 1624 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v19/video-probe.json` | 기타 | 2968 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v2/README.md` | 기타 | 2653 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v2/build_cutaway.py` | 기타 | 6412 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v2/pocket-handle-macro-cutaway-v2.blend` | 기타 | 118282 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v2/preservation-before.json` | 기타 | 23813 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v2/qa-v2.json` | 기타 | 515 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v2/render-authorized.log` | 기타 | 1200 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v2/render.log` | 기타 | 375 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v3/README.md` | 기타 | 2660 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v3/build_cutaway_v3.py` | 기타 | 4507 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v3/geometry-qa.json` | 기타 | 1005 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v3/pocket-handle-macro-cutaway-v3.blend` | 기타 | 123332 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v3/preservation-before.json` | 기타 | 24703 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v3/qa-v3.json` | 기타 | 1406 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v3/render-authorized.log` | 기타 | 936 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v3/render.log` | 기타 | 375 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v4/README.md` | 기타 | 2933 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v4/build_cutaway_v4.py` | 기타 | 3125 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v4/geometry-qa.json` | 기타 | 873 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v4/pocket-handle-cutaway-v4.blend` | 기타 | 114277 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v4/preservation-before.json` | 기타 | 25703 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v4/preservation-qa.json` | 기타 | 196 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v4/render-authorized.log` | 기타 | 960 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v4/render.log` | 기타 | 375 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v5/README.md` | 기타 | 2375 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v5/before.json` | 기타 | 26922 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v5/build_v5.py` | 기타 | 4045 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v5/comparison-v5.blend` | 기타 | 190991 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v5/geometry-qa.json` | 기타 | 220 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v5/preservation-qa.json` | 기타 | 93 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v5/render-authorized.log` | 기타 | 831 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v5/render.log` | 기타 | 375 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `blender/concept-v6/README.md` | 기타 | 2789 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v6/build_v6.py` | 기타 | 3172 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v6/geometry-qa.json` | 기타 | 1037 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v6/pocket-handle-cutaway-v6.blend` | 기타 | 107581 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v6/preservation-before.json` | 기타 | 27418 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v6/preservation-qa.json` | 기타 | 94 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v6/render-overlay-v6.cjs` | 기타 | 657 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v7/README.md` | 기타 | 3370 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v7/build_v7.py` | 기타 | 5292 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v7/geometry-qa.json` | 기타 | 1108 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v7/pocket-handle-reinforced-assembly-v7.blend` | 기타 | 112967 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v7/preservation-before.json` | 기타 | 33443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v7/preservation-qa.json` | 기타 | 79 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v8/README.md` | 기타 | 3343 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v8/build_v8.py` | 기타 | 4105 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v8/geometry-qa.json` | 기타 | 535 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v8/pocket-handle-layout-check-v8.blend` | 기타 | 112773 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v8/preservation-before.json` | 기타 | 34244 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v8/preservation-qa.json` | 기타 | 77 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/README.md` | 기타 | 3462 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/build_v9.py` | 기타 | 4634 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/finish_post_v9.py` | 기타 | 1028 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/geometry-qa.json` | 기타 | 810 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/pocket-handle-post-assembly-v9.blend` | 기타 | 112662 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/pocket-handle-pre-assembly-v9.blend` | 기타 | 112750 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/preservation-before.json` | 기타 | 35031 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `blender/concept-v9/preservation-qa.json` | 기타 | 143 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `docs/26.11.02수정.md` | 기타 | 4603 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/26.11.05수정.md` | 기타 | 3270 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/Shorts_제작_운영가이드.md.before-safe-area-20261104.bak` | 기타 | 56119 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/approved-tts-v1.json` | 기타 | 608 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/assembly-motion-test-v1-preservation.json` | 기타 | 31999 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/assembly-motion-test-v1-qa.json` | 기타 | 2710 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/audio-path-migration-v1.json` | 기타 | 5932 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/audio-path-migration-v1.md` | 기타 | 1359 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/daesan_shorts_instructions.md.before-safe-area-20261104.bak` | 기타 | 44960 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/doormaster-body-design-reference-tts-v3.md` | 기타 | 2100 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/doormaster-pocket-door-handle-cover-v1-qa.md` | 기타 | 4721 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/doormaster-pocket-door-handle-cover-v2-composite-qa.md` | 기타 | 4197 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/doormaster-pocket-door-handle-cover-v2-final-qa.md` | 기타 | 4195 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/doormaster-pocket-door-handle-cover-v2-qa.md` | 기타 | 4913 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/final-cleanup-file-inventory-v1.json` | 기타 | 593573 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/final-cleanup-file-inventory-v2.json` | 기타 | 593970 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/final-cleanup-preflight-v1.md` | 기타 | 325250 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/final-cleanup-preflight-v2.md` | 기타 | 311390 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/full-tts-qa-v5-qa.md` | 기타 | 3162 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/git-backup-result-v1.md` | 기타 | 971 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/layered-section-test-v1-preservation.json` | 기타 | 30401 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/layered-section-test-v1-qa.json` | 기타 | 218 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/mobile-safe-area-guide-20261104.diff` | 기타 | 5450 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/motion-test-v1-preservation.json` | 기타 | 29083 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/motion-test-v1-qa.json` | 기타 | 2671 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/motion-test-v2-preservation.json` | 기타 | 30640 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/motion-test-v2-qa.json` | 기타 | 2793 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/photo-section-v2-preservation.json` | 기타 | 28858 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/photo-section-v2-qa.json` | 기타 | 85 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/pocket-door-doormaster-full-preview-v1-qa.md` | 기타 | 4356 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/pocket-door-doormaster-full-preview-v2-qa-scene01-v5-preserved.md` | 기타 | 3404 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/pocket-door-doormaster-full-preview-v2-qa.md` | 기타 | 3919 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/pocket-door-doormaster-full-preview-v3-qa.md` | 기타 | 3486 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/pocket-door-doormaster-sns-final.md` | 기타 | 3551 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/pocket-door-doormaster-sns-qa.md` | 기타 | 3584 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/realistic-section-test-v1-preservation.json` | 기타 | 30158 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/realistic-section-test-v1-qa.json` | 기타 | 209 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-02-doormaster-v1-qa.md` | 기타 | 3037 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-02-doormaster-v2-qa.md` | 기타 | 1953 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-02-safe-area-v3-qa.md` | 기타 | 3807 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-door-clean-background-v1-qa.md` | 기타 | 3046 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-door-structure-review-v1.md` | 기타 | 5220 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-doormaster-v3-qa.md` | 기타 | 4947 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-doormaster-v4-qa.md` | 기타 | 3994 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-doormaster-v5-qa.md` | 기타 | 3435 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-doormaster-v5-test-qa.md` | 기타 | 3622 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-doormaster-v6-qa.md` | 기타 | 3243 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-doormaster-v7-qa.md` | 기타 | 3040 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-edgepull-v1-qa.md` | 기타 | 6021 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-edgepull-v2-qa.md` | 기타 | 3398 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-privacy-v2-qa.md` | 기타 | 5333 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-privacy-v3-qa.md` | 기타 | 6229 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-privacy-v4-qa.md` | 기타 | 5869 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-privacy-v5-qa.md` | 기타 | 3784 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-round-v2-qa.md` | 기타 | 4664 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-round-v3-qa.md` | 기타 | 3234 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-types-base-v1-qa.md` | 기타 | 5190 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-types-base-v2-qa.md` | 기타 | 4499 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-handle-types-generation-v1-qa.md` | 기타 | 3955 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v10-qa.md` | 기타 | 3630 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v4-qa.md` | 기타 | 2991 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v5-qa.md` | 기타 | 2255 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v6-qa.md` | 기타 | 2174 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v7-qa.md` | 기타 | 3692 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v8-qa.md` | 기타 | 2286 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene01-tts-v9-qa.md` | 기타 | 3356 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-assembly-motion-test-v1.md` | 기타 | 3020 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-2d-comparison-v1-qa.md` | 기타 | 2639 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-ab-comparison-v1-qa.md` | 기타 | 1522 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-concept-v1-qa.md` | 기타 | 2577 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-concept-v2-qa.md` | 기타 | 1796 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-concept-v3-qa.md` | 기타 | 2715 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-concept-v4-qa.md` | 기타 | 2433 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-preview-v1-qa.md` | 기타 | 4292 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-doormaster-preview-v2-qa.md` | 기타 | 5049 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-layered-section-test-v1.md` | 기타 | 2179 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-motion-test-v1.md` | 기타 | 3874 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-motion-test-v2.md` | 기타 | 2932 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-photo-section-v2.md` | 기타 | 2271 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-realistic-section-test-v1.md` | 기타 | 2214 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-remotion-motion-test-v1-qa.md` | 기타 | 2262 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-remotion-motion-test-v2-qa.md` | 기타 | 2511 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-remotion-motion-test-v3-qa.md` | 기타 | 2565 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-remotion-motion-test-v4-qa.md` | 기타 | 2790 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-section-concept-v1.md` | 기타 | 2158 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene03-tts-v2-qa.md` | 기타 | 5072 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene04-doormaster-preview-v1-qa.md` | 기타 | 4142 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene04-doormaster-preview-v2-qa.md` | 기타 | 3885 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene04-doormaster-preview-v3-qa.md` | 기타 | 3917 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene04-doormaster-preview-v4-qa.md` | 기타 | 3802 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene04-doormaster-preview-v5-qa.md` | 기타 | 2469 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/scene05-doormaster-preview-v1-qa.md` | 기타 | 3188 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/section-concept-v1-preservation.json` | 기타 | 28629 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/section-concept-v1-qa.json` | 기타 | 79 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/slim-copy-manifest.json` | 기타 | 379 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/still-qa-v2.json` | 기타 | 2661 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/still-qa-v3.json` | 기타 | 2115 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/sugatsune-zl2501-official-p71.pdf` | 기타 | 484130 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/tts-candidates-v3-qa.md` | 기타 | 5174 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/tts-v4-natural-speech-qa.md` | 기타 | 6285 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `docs/visual-production-v3.md` | 기타 | 2642 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `package-lock.json` | 기타 | 139439 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `package.json` | 기타 | 299 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/.DS_Store` | 기타 | 8196 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/.DS_Store` | 기타 | 12292 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/audio/full-tts-qa-v3.mp3` | TTS·오디오 | 513644 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/full-tts-qa-v3.wav` | TTS·오디오 | 1228480 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/full-tts-qa-v4.mp3` | TTS·오디오 | 495404 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/full-tts-qa-v4.wav` | TTS·오디오 | 1185268 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/full-tts-qa-v5.mp3` | TTS·오디오 | 585644 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/full-tts-qa-v5.wav` | TTS·오디오 | 1401744 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-review-v3.mp3` | TTS·오디오 | 59084 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-review-v3.wav` | TTS·오디오 | 137792 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v10-part-b.wav` | TTS·오디오 | 115244 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/audio/scene01-tts-v10.wav` | TTS·오디오 | 227026 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/audio/scene01-tts-v3.wav` | TTS·오디오 | 147884 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v4.wav` | TTS·오디오 | 132204 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v5.wav` | TTS·오디오 | 140204 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v6.wav` | TTS·오디오 | 159404 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v7-part-a.wav` | TTS·오디오 | 105644 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v7-part-b.wav` | TTS·오디오 | 101804 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v7.wav` | TTS·오디오 | 178762 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v8.wav` | TTS·오디오 | 203564 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene01-tts-v9-part-a.wav` | TTS·오디오 | 134444 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/audio/scene01-tts-v9.wav` | TTS·오디오 | 198166 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene02-tts-review-v3.mp3` | TTS·오디오 | 116684 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene02-tts-review-v3.wav` | TTS·오디오 | 276144 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene02-tts-v3.wav` | TTS·오디오 | 288044 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene02-tts-v4.wav` | TTS·오디오 | 253484 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/audio/scene03-tts-review-v3.mp3` | TTS·오디오 | 121964 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-review-v3.wav` | TTS·오디오 | 288368 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-review-v4.mp3` | TTS·오디오 | 103724 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-review-v4.wav` | TTS·오디오 | 245156 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-v2.wav` | TTS·오디오 | 384044 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-v3.wav` | TTS·오디오 | 324524 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-v4.wav` | TTS·오디오 | 251564 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene03-tts-v5.wav` | TTS·오디오 | 330284 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/audio/scene04-tts-review-v3.mp3` | TTS·오디오 | 121964 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene04-tts-review-v3.wav` | TTS·오디오 | 289026 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene04-tts-v3.wav` | TTS·오디오 | 293804 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene04-tts-v4.wav` | TTS·오디오 | 399404 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/audio/scene05-tts-review-v3.mp3` | TTS·오디오 | 88844 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene05-tts-review-v3.wav` | TTS·오디오 | 208696 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene05-tts-v3.wav` | TTS·오디오 | 220844 | 판단 보류 | 생성/검증 스크립트의 과거 음원 보존 manifest 및 동적 경로 의존; 삭제 안전성 미확정 |
| `public/assets/audio/scene05-tts-v4.wav` | TTS·오디오 | 249644 | 보존 | 최종 승인 원본 또는 최종 조합 입력 |
| `public/assets/images/concept-motion-v1/frame-0001.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0002.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0003.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0004.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0005.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0006.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0007.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0008.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0009.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0010.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0011.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0012.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0013.png` | 이미지 | 417881 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0014.png` | 이미지 | 417404 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0015.png` | 이미지 | 417928 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0016.png` | 이미지 | 417979 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0017.png` | 이미지 | 417380 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0018.png` | 이미지 | 417703 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0019.png` | 이미지 | 417504 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0020.png` | 이미지 | 417152 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0021.png` | 이미지 | 417641 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0022.png` | 이미지 | 417144 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0023.png` | 이미지 | 417910 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0024.png` | 이미지 | 417143 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0025.png` | 이미지 | 416756 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0026.png` | 이미지 | 416479 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0027.png` | 이미지 | 417043 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0028.png` | 이미지 | 417515 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0029.png` | 이미지 | 417101 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0030.png` | 이미지 | 418675 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0031.png` | 이미지 | 418961 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0032.png` | 이미지 | 418672 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0033.png` | 이미지 | 419809 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0034.png` | 이미지 | 419237 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0035.png` | 이미지 | 420673 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0036.png` | 이미지 | 421111 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0037.png` | 이미지 | 421736 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0038.png` | 이미지 | 420842 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0039.png` | 이미지 | 423400 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0040.png` | 이미지 | 423901 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0041.png` | 이미지 | 422217 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0042.png` | 이미지 | 422651 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0043.png` | 이미지 | 423093 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0044.png` | 이미지 | 423312 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0045.png` | 이미지 | 423031 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0046.png` | 이미지 | 422837 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0047.png` | 이미지 | 422142 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0048.png` | 이미지 | 421771 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0049.png` | 이미지 | 422277 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0050.png` | 이미지 | 421534 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0051.png` | 이미지 | 421071 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0052.png` | 이미지 | 419499 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0053.png` | 이미지 | 419254 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0054.png` | 이미지 | 420223 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0055.png` | 이미지 | 419862 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0056.png` | 이미지 | 417838 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0057.png` | 이미지 | 423490 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0058.png` | 이미지 | 422823 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0059.png` | 이미지 | 418319 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0060.png` | 이미지 | 419986 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0061.png` | 이미지 | 423069 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0062.png` | 이미지 | 426074 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0063.png` | 이미지 | 421608 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0064.png` | 이미지 | 419421 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0065.png` | 이미지 | 420863 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0066.png` | 이미지 | 420513 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0067.png` | 이미지 | 421021 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0068.png` | 이미지 | 420785 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0069.png` | 이미지 | 419013 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0070.png` | 이미지 | 420632 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0071.png` | 이미지 | 420711 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0072.png` | 이미지 | 420463 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0073.png` | 이미지 | 420477 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0074.png` | 이미지 | 420015 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0075.png` | 이미지 | 419430 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0076.png` | 이미지 | 419860 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0077.png` | 이미지 | 420700 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0078.png` | 이미지 | 420729 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0079.png` | 이미지 | 420215 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0080.png` | 이미지 | 419585 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0081.png` | 이미지 | 420367 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0082.png` | 이미지 | 419279 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0083.png` | 이미지 | 420135 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0084.png` | 이미지 | 417150 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0085.png` | 이미지 | 419613 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0086.png` | 이미지 | 420417 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0087.png` | 이미지 | 420078 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0088.png` | 이미지 | 420553 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0089.png` | 이미지 | 421132 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0090.png` | 이미지 | 420298 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0091.png` | 이미지 | 420165 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0092.png` | 이미지 | 421181 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0093.png` | 이미지 | 421248 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0094.png` | 이미지 | 421139 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0095.png` | 이미지 | 421062 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0096.png` | 이미지 | 421299 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0097.png` | 이미지 | 421010 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0098.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0099.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0100.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0101.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0102.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0103.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0104.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0105.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0106.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0107.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0108.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0109.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0110.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0111.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0112.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0113.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0114.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0115.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0116.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0117.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0118.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0119.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/frame-0120.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/key-001.png` | 이미지 | 418321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/key-043.png` | 이미지 | 423093 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/key-064.png` | 이미지 | 419421 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/key-077.png` | 이미지 | 420700 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/key-120.png` | 이미지 | 421259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/key-states-contact-v1.png` | 이미지 | 319820 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/review-001.png` | 이미지 | 418127 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/review-043.png` | 이미지 | 423095 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/review-064.png` | 이미지 | 419084 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/review-077.png` | 이미지 | 420777 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/review-120.png` | 이미지 | 422521 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/state-001.png` | 이미지 | 416675 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/state-043.png` | 이미지 | 416219 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/state-064.png` | 이미지 | 416204 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/state-077.png` | 이미지 | 421692 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/concept-motion-v1/state-120.png` | 이미지 | 422770 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/contact-sheet-scene02-04-v2.jpg` | 이미지 | 312517 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/contact-sheet-v3.png` | 이미지 | 243638 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/domus-CIS_3455-v3.jpg` | 이미지 | 47113 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/domus-CIS_7622-v3.jpg` | 이미지 | 64120 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/domus-DSL140-1-4-v3.jpg` | 이미지 | 86844 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/domus-DSL140-6-v3.jpg` | 이미지 | 21923 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/domus-SH30NI-1-1-v3.jpg` | 이미지 | 9536 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/mobile-s03-mismatch-v2.png` | 이미지 | 79384 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/mobile-s04-review-v2.png` | 이미지 | 82323 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-p71-6000.png` | 이미지 | 1655645 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-section-verified-detail.png` | 이미지 | 305749 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-zl-front-lines.png` | 이미지 | 33314 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-zl-front.png` | 이미지 | 51823 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-zl-install.png` | 이미지 | 62008 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-zl-photo.png` | 이미지 | 357893 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/official-zl-section.png` | 이미지 | 70912 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-clean-background-v1.png` | 이미지 | 1645284 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-cover-photoreal-v1.png` | 이미지 | 1791874 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-cover-sh30-composite-v1.png` | 이미지 | 1548534 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2-scene01-v5-preserved.png` | 이미지 | 1599230 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2.png` | 이미지 | 1597865 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v3.png` | 이미지 | 1604740 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/pocket-door-doormaster-full-qa-v1.png` | 이미지 | 679168 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-full-qa-v2-scene01-v5-preserved.png` | 이미지 | 702147 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-full-qa-v2.png` | 이미지 | 726030 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-full-qa-v3.png` | 이미지 | 726972 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2-scene01-v5-preserved.png` | 이미지 | 261936 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2.png` | 이미지 | 425930 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v3.png` | 이미지 | 329047 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/pocket-door-sh30-cutaway-edit-source-v2.png` | 이미지 | 1603949 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-cutaway-source-v1.png` | 이미지 | 1791455 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-cutaway-v1.png` | 이미지 | 481091 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-cutaway-v2.png` | 이미지 | 475745 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-exploded-concept-v1.png` | 이미지 | 513687 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-exploded-concept-v2.png` | 이미지 | 496752 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-exploded-photoreal-v1.png` | 이미지 | 510789 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-exploded-source-v1.png` | 이미지 | 1865697 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-exterior-v1.png` | 이미지 | 506671 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-internal-open-source-v1.png` | 이미지 | 1845446 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-internal-section-source-v1.png` | 이미지 | 1816621 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-internal-section-v1.png` | 이미지 | 508112 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-internal-v1.png` | 이미지 | 656900 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-mask-v1.png` | 이미지 | 53539 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-pre-assembly-v1.png` | 이미지 | 653941 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-recess-v1.png` | 이미지 | 626091 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-door-sh30-reinforcement-check-v1.png` | 이미지 | 633499 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-alignment-front-v12.png` | 이미지 | 440811 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-alignment-oblique-v12.png` | 이미지 | 438259 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-cutaway-v4.png` | 이미지 | 1708503 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-cutaway-v6.png` | 이미지 | 1698543 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-horizontal-section-v16.png` | 이미지 | 446033 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-horizontal-section-v17.png` | 이미지 | 447370 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-horizontal-section-v18.png` | 이미지 | 429519 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-layout-check-v8.png` | 이미지 | 450546 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-macro-cutaway-v2.png` | 이미지 | 1703891 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-macro-cutaway-v3.png` | 이미지 | 1730493 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-post-assembly-v10.png` | 이미지 | 442473 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-post-assembly-v9.png` | 이미지 | 448886 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-pre-assembly-v10.png` | 이미지 | 449558 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-pre-assembly-v11.png` | 이미지 | 446068 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-pre-assembly-v9.png` | 이미지 | 444599 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-reinforced-assembly-v7.png` | 이미지 | 1724805 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-reinforcement-cutaway-v13.png` | 이미지 | 440954 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-single-cutout-post-v14.png` | 이미지 | 435561 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-single-cutout-pre-v14.png` | 이미지 | 436008 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/pocket-handle-xray-reinforcement-v15.png` | 이미지 | 437438 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-01-exterior-v1.png` | 이미지 | 557863 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-01-exterior-v2.png` | 이미지 | 511343 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-01-exterior-v3.png` | 이미지 | 270946 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-02-position-v3.png` | 이미지 | 268113 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-02-recess-v2.png` | 이미지 | 211388 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-03-conditions-v3.png` | 이미지 | 276835 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s02-03-fixing-v2.png` | 이미지 | 216884 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s03-01-internal-check-v3.png` | 이미지 | 286820 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s03-01-support-v2.png` | 이미지 | 238977 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s03-02-location-check-v3.png` | 이미지 | 298656 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s03-02-mismatch-v1.png` | 이미지 | 244654 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s03-02-mismatch-v2.png` | 이미지 | 244654 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s04-01-basic-check-v3.png` | 이미지 | 293132 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s04-01-template-v2.png` | 이미지 | 242085 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s04-02-lock-example-v3.png` | 이미지 | 302576 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s04-02-review-v2.png` | 이미지 | 242434 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/s04-03-final-check-v3.png` | 이미지 | 254670 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-02-doormaster-qa-v1.png` | 이미지 | 260997 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-02-doormaster-qa-v2.png` | 이미지 | 159283 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-02-safe-area-qa-v3.png` | 이미지 | 337798 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-clean-background-before-after-v1.png` | 이미지 | 1143219 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-clean-background-comparison-v1.png` | 이미지 | 1070674 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-clean-background-mobile-v1.png` | 이미지 | 605317 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-right-edge-detail-v1.png` | 이미지 | 1341843 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-structure-comparison-v1.png` | 이미지 | 1068000 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-structure-mobile-qa-v1.png` | 이미지 | 603303 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-door-structure-removal-mask-v1.png` | 이미지 | 1025454 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v3-mobile-qa.png` | 이미지 | 298731 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v3-qa.png` | 이미지 | 433317 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v4-qa.png` | 이미지 | 557191 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v5-mobile-qa.png` | 이미지 | 411781 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v6-mobile-qa.png` | 이미지 | 270013 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v6-qa.png` | 이미지 | 551546 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-doormaster-v7-compare.png` | 이미지 | 806827 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-doormaster-v7-mobile-qa.png` | 이미지 | 407144 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-doormaster-v7-qa.png` | 이미지 | 560765 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-edgepull-door-boundary-v5.png` | 이미지 | 1880967 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-edgepull-position-compare-v4.png` | 이미지 | 259663 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-edgepull-position-compare-v5.png` | 이미지 | 297390 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-edgepull-compare-v1.png` | 이미지 | 598039 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-edgepull-compare-v2.png` | 이미지 | 355321 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-edgepull-mobile-v1.png` | 이미지 | 187842 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-edgepull-mobile-v2.png` | 이미지 | 185764 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-edgepull-v1.png` | 이미지 | 1646979 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-edgepull-v2.png` | 이미지 | 1617100 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-handle-privacy-compare-v2.png` | 이미지 | 371743 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-compare-v3.png` | 이미지 | 373490 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-compare-v4.png` | 이미지 | 373311 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-compare-v5.png` | 이미지 | 407093 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-mobile-v2.png` | 이미지 | 186091 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-mobile-v3.png` | 이미지 | 187833 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-mobile-v4.png` | 이미지 | 187700 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-mobile-v5.png` | 이미지 | 188389 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-v1.png` | 이미지 | 1600121 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-v2.png` | 이미지 | 1624369 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-v3.png` | 이미지 | 1639727 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-v4.png` | 이미지 | 1584527 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-v5.png` | 이미지 | 1379972 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-privacy-v6.png` | 이미지 | 1364227 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-handle-round-compare-v2.png` | 이미지 | 374554 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-compare-v3.png` | 이미지 | 222783 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-mobile-v2.png` | 이미지 | 188417 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-mobile-v3.png` | 이미지 | 188146 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-v1.png` | 이미지 | 1649988 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-v2.png` | 이미지 | 1662250 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-v3.png` | 이미지 | 1382750 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-round-v4.png` | 이미지 | 1365476 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-handle-square-v1.png` | 이미지 | 1654406 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-base-compare-v2.png` | 이미지 | 410249 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-base-mobile-v1.png` | 이미지 | 221010 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-base-mobile-v2.png` | 이미지 | 187708 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-base-v1.png` | 이미지 | 1959969 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-base-v2.png` | 이미지 | 1667642 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-base-v3.png` | 이미지 | 1393278 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-handle-types-comparison-v1.png` | 이미지 | 1802306 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-handle-types-mobile-v1.png` | 이미지 | 738766 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-subtitle-compare-v6.png` | 이미지 | 162435 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene01-v7-0.png` | 이미지 | 1712566 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-v7-18.png` | 이미지 | 1717381 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-v7-60.png` | 이미지 | 1685735 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-v7-old-0.png` | 이미지 | 1722120 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-v7-old-18.png` | 이미지 | 1726393 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene01-v7-old-60.png` | 이미지 | 1691466 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene03-assembly-motion-test-v1-contact-sheet.png` | 이미지 | 253456 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f000.png` | 이미지 | 534592 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f024.png` | 이미지 | 534592 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f046.png` | 이미지 | 519674 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f068.png` | 이미지 | 464593 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f088.png` | 이미지 | 464593 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f108.png` | 이미지 | 517484 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f125.png` | 이미지 | 518887 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-assembly-motion-test-v1-f165.png` | 이미지 | 518887 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-blender-assembly-contact-sheet-v19.png` | 이미지 | 595758 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-blender-assembly-key-001-v19.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-blender-assembly-key-085-v19.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-blender-assembly-key-141-v19.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-concept-overlay-v4.png` | 이미지 | 1653322 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-2d-comparison-mobile-v1.png` | 이미지 | 47449 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-2d-comparison-mobile-v2.png` | 이미지 | 48438 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-2d-comparison-v1.png` | 이미지 | 114157 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-2d-comparison-v2.png` | 이미지 | 115478 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-ab-comparison-v1.png` | 이미지 | 249451 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-mobile-v1.png` | 이미지 | 192487 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-mobile-v2.png` | 이미지 | 184453 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-mobile-v3.png` | 이미지 | 181545 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-mobile-v4.png` | 이미지 | 145327 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-v1.png` | 이미지 | 1411697 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-v2.png` | 이미지 | 880968 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-v3.png` | 이미지 | 1364936 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-concept-v4.png` | 이미지 | 1531752 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-mismatch-mobile-v1.png` | 이미지 | 182459 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-mismatch-v1.png` | 이미지 | 1366478 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-doormaster-preview-v2-qa.png` | 이미지 | 59693 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene03-layered-section-test-v1.png` | 이미지 | 607103 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-motion-test-v1-contact-sheet.png` | 이미지 | 213947 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v1-f000.png` | 이미지 | 370132 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v1-f044.png` | 이미지 | 395858 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v1-f064.png` | 이미지 | 401478 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v1-f088.png` | 이미지 | 401716 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v1-f120.png` | 이미지 | 409193 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-contact-sheet.png` | 이미지 | 343052 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f000.png` | 이미지 | 370132 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f044.png` | 이미지 | 395858 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f055.png` | 이미지 | 496616 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f064.png` | 이미지 | 573677 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f076.png` | 이미지 | 598156 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f088.png` | 이미지 | 595849 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f098.png` | 이미지 | 605003 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-motion-test-v2-f120.png` | 이미지 | 605003 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/images/scene03-photo-section-v2.png` | 이미지 | 404106 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-realistic-section-test-v1.png` | 이미지 | 621741 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-reinforcement-concept-v6.png` | 이미지 | 1802518 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-section-concept-v1.png` | 이미지 | 124313 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-support-mismatch-v5.png` | 이미지 | 1903042 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene03-support-review-v5.png` | 이미지 | 1905834 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene04-doormaster-preview-v1-qa.png` | 이미지 | 79998 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene04-doormaster-preview-v2-qa.png` | 이미지 | 84992 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene04-doormaster-preview-v3-qa.png` | 이미지 | 61182 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene04-doormaster-preview-v4-qa.png` | 이미지 | 64582 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/scene04-doormaster-preview-v5-qa.png` | 이미지 | 64297 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/scene05-doormaster-preview-v1-qa.png` | 이미지 | 212048 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/images/v19-frames/checked-ext-0001.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0026.png` | 이미지 | 436139 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0027.png` | 이미지 | 437048 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0028.png` | 이미지 | 436465 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0029.png` | 이미지 | 433647 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0030.png` | 이미지 | 431968 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0031.png` | 이미지 | 431895 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0032.png` | 이미지 | 431187 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0033.png` | 이미지 | 430585 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0034.png` | 이미지 | 430994 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0035.png` | 이미지 | 430654 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0036.png` | 이미지 | 430529 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0037.png` | 이미지 | 432592 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0038.png` | 이미지 | 430089 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0039.png` | 이미지 | 428008 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0040.png` | 이미지 | 427704 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0041.png` | 이미지 | 427037 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0042.png` | 이미지 | 427702 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0043.png` | 이미지 | 427312 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0106.png` | 이미지 | 426445 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0108.png` | 이미지 | 428008 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0109.png` | 이미지 | 429273 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0110.png` | 이미지 | 431950 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0112.png` | 이미지 | 430789 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0113.png` | 이미지 | 430297 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0114.png` | 이미지 | 430277 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0116.png` | 이미지 | 432459 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0117.png` | 이미지 | 434317 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0118.png` | 이미지 | 436687 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0120.png` | 이미지 | 435983 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0121.png` | 이미지 | 435296 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0122.png` | 이미지 | 436601 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0123.png` | 이미지 | 436445 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0124.png` | 이미지 | 436155 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0125.png` | 이미지 | 435503 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0126.png` | 이미지 | 435209 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0127.png` | 이미지 | 435228 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0128.png` | 이미지 | 435375 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0129.png` | 이미지 | 436514 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0130.png` | 이미지 | 437170 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0131.png` | 이미지 | 437018 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0132.png` | 이미지 | 437120 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0133.png` | 이미지 | 437229 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0134.png` | 이미지 | 438620 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0135.png` | 이미지 | 437695 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0136.png` | 이미지 | 436057 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0137.png` | 이미지 | 437320 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0138.png` | 이미지 | 436898 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0139.png` | 이미지 | 437953 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0140.png` | 이미지 | 435428 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-ext-0141.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0044.png` | 이미지 | 421210 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0062.png` | 이미지 | 421457 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0063.png` | 이미지 | 421550 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0064.png` | 이미지 | 422328 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0065.png` | 이미지 | 422082 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0066.png` | 이미지 | 422781 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0067.png` | 이미지 | 423360 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0068.png` | 이미지 | 423609 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0069.png` | 이미지 | 423710 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0070.png` | 이미지 | 424227 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0071.png` | 이미지 | 424530 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0072.png` | 이미지 | 424868 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0073.png` | 이미지 | 425061 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0074.png` | 이미지 | 425380 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0075.png` | 이미지 | 426186 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0076.png` | 이미지 | 425871 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0077.png` | 이미지 | 426422 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0078.png` | 이미지 | 426791 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0079.png` | 이미지 | 427169 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0080.png` | 이미지 | 427373 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0081.png` | 이미지 | 427713 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0082.png` | 이미지 | 427835 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0083.png` | 이미지 | 428170 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0084.png` | 이미지 | 428213 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/checked-sec-0085.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0001.png` | 이미지 | 383865 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0026.png` | 이미지 | 379479 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0027.png` | 이미지 | 368511 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0028.png` | 이미지 | 370682 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0029.png` | 이미지 | 369705 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0030.png` | 이미지 | 376677 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0031.png` | 이미지 | 394270 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0032.png` | 이미지 | 420149 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0033.png` | 이미지 | 428017 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0035.png` | 이미지 | 417705 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0036.png` | 이미지 | 420971 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0037.png` | 이미지 | 423712 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0038.png` | 이미지 | 424959 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0039.png` | 이미지 | 425942 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0040.png` | 이미지 | 428165 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0041.png` | 이미지 | 428056 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0042.png` | 이미지 | 429241 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0043.png` | 이미지 | 429063 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0106.png` | 이미지 | 428841 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0108.png` | 이미지 | 427961 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0109.png` | 이미지 | 425419 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/ext-0110.png` | 이미지 | 424012 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0001.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0002.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0003.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0004.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0005.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0006.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0007.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0008.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0009.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0010.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0011.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0012.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0013.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0014.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0015.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0016.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0017.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0018.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0019.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0020.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0021.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0022.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0023.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0024.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0025.png` | 이미지 | 435395 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0026.png` | 이미지 | 436139 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0027.png` | 이미지 | 437048 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0028.png` | 이미지 | 436465 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0029.png` | 이미지 | 433647 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0030.png` | 이미지 | 431968 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0031.png` | 이미지 | 431895 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0032.png` | 이미지 | 431187 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0033.png` | 이미지 | 430585 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0034.png` | 이미지 | 430994 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0035.png` | 이미지 | 430654 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0036.png` | 이미지 | 430529 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0037.png` | 이미지 | 432592 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0038.png` | 이미지 | 430089 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0039.png` | 이미지 | 428008 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0040.png` | 이미지 | 427704 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0041.png` | 이미지 | 427037 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0042.png` | 이미지 | 427702 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0043.png` | 이미지 | 427312 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0044.png` | 이미지 | 331961 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0045.png` | 이미지 | 333238 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0046.png` | 이미지 | 334306 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0047.png` | 이미지 | 335097 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0048.png` | 이미지 | 336787 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0049.png` | 이미지 | 335231 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0050.png` | 이미지 | 336539 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0051.png` | 이미지 | 336432 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0052.png` | 이미지 | 332514 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0053.png` | 이미지 | 336173 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0054.png` | 이미지 | 334306 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0055.png` | 이미지 | 336329 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0056.png` | 이미지 | 334772 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0057.png` | 이미지 | 332281 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0058.png` | 이미지 | 329414 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0059.png` | 이미지 | 328454 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0060.png` | 이미지 | 325910 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0061.png` | 이미지 | 421210 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0062.png` | 이미지 | 421457 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0063.png` | 이미지 | 421550 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0064.png` | 이미지 | 422328 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0065.png` | 이미지 | 422082 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0066.png` | 이미지 | 422781 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0067.png` | 이미지 | 423360 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0068.png` | 이미지 | 423609 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0069.png` | 이미지 | 423710 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0070.png` | 이미지 | 424227 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0071.png` | 이미지 | 424530 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0072.png` | 이미지 | 424868 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0073.png` | 이미지 | 425061 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0074.png` | 이미지 | 425380 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0075.png` | 이미지 | 426186 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0076.png` | 이미지 | 425871 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0077.png` | 이미지 | 426422 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0078.png` | 이미지 | 426791 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0079.png` | 이미지 | 427169 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0080.png` | 이미지 | 427373 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0081.png` | 이미지 | 427713 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0082.png` | 이미지 | 427835 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0083.png` | 이미지 | 428170 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0084.png` | 이미지 | 428213 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0085.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0086.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0087.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0088.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0089.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0090.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0091.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0092.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0093.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0094.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0095.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0096.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0097.png` | 이미지 | 428339 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0098.png` | 이미지 | 335410 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0099.png` | 이미지 | 340319 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0100.png` | 이미지 | 344020 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0101.png` | 이미지 | 340157 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0102.png` | 이미지 | 338802 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0103.png` | 이미지 | 338767 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0104.png` | 이미지 | 335078 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0105.png` | 이미지 | 332063 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0106.png` | 이미지 | 426445 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0107.png` | 이미지 | 427037 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0108.png` | 이미지 | 428008 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0109.png` | 이미지 | 429273 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0110.png` | 이미지 | 431950 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0111.png` | 이미지 | 430529 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0112.png` | 이미지 | 430789 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0113.png` | 이미지 | 430297 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0114.png` | 이미지 | 430277 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0115.png` | 이미지 | 431895 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0116.png` | 이미지 | 432459 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0117.png` | 이미지 | 434317 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0118.png` | 이미지 | 436687 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0119.png` | 이미지 | 436139 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0120.png` | 이미지 | 435983 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0121.png` | 이미지 | 435296 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0122.png` | 이미지 | 436601 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0123.png` | 이미지 | 436445 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0124.png` | 이미지 | 436155 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0125.png` | 이미지 | 435503 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0126.png` | 이미지 | 435209 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0127.png` | 이미지 | 435228 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0128.png` | 이미지 | 435375 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0129.png` | 이미지 | 436514 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0130.png` | 이미지 | 437170 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0131.png` | 이미지 | 437018 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0132.png` | 이미지 | 437120 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0133.png` | 이미지 | 437229 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0134.png` | 이미지 | 438620 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0135.png` | 이미지 | 437695 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0136.png` | 이미지 | 436057 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0137.png` | 이미지 | 437320 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0138.png` | 이미지 | 436898 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0139.png` | 이미지 | 437953 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0140.png` | 이미지 | 435428 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0141.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0142.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0143.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0144.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0145.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0146.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0147.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0148.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0149.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0150.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0151.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0152.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0153.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0154.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0155.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0156.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0157.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0158.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0159.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0160.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0161.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0162.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0163.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0164.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0165.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0166.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0167.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/frame-0168.png` | 이미지 | 435443 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0044.png` | 이미지 | 421202 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0062.png` | 이미지 | 421449 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0063.png` | 이미지 | 421542 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0064.png` | 이미지 | 422320 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0065.png` | 이미지 | 422074 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0066.png` | 이미지 | 422773 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0067.png` | 이미지 | 423352 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0068.png` | 이미지 | 423601 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0069.png` | 이미지 | 423702 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0070.png` | 이미지 | 424219 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0071.png` | 이미지 | 424522 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0072.png` | 이미지 | 424860 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0073.png` | 이미지 | 425053 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0074.png` | 이미지 | 425372 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0075.png` | 이미지 | 426178 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0076.png` | 이미지 | 425863 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0077.png` | 이미지 | 426414 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0078.png` | 이미지 | 426783 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0079.png` | 이미지 | 427161 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0080.png` | 이미지 | 427365 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0081.png` | 이미지 | 427705 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0082.png` | 이미지 | 427827 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0083.png` | 이미지 | 428162 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0084.png` | 이미지 | 428205 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/images/v19-frames/sec-0085.png` | 이미지 | 428331 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/pocket-door-doormaster-full-preview-v1.mp4` | 영상 | 10734724 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/pocket-door-doormaster-full-preview-v2-scene01-v5-preserved.mp4` | 영상 | 10998203 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/pocket-door-doormaster-full-preview-v2.mp4` | 영상 | 11014455 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/pocket-door-doormaster-full-preview-v3.mp4` | 영상 | 11036422 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene01-02-doormaster-preview-v1.mp4` | 영상 | 727423 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-02-doormaster-preview-v2.mp4` | 영상 | 377033 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-02-doormaster-preview-v3.mp4` | 영상 | 371554 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-doormaster-v1.mp4` | 영상 | 340263 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-doormaster-v2.mp4` | 영상 | 172480 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-doormaster-v3.mp4` | 영상 | 365133 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-doormaster-v4.mp4` | 영상 | 893677 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-doormaster-v5.mp4` | 영상 | 435173 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene01-doormaster-v6.mp4` | 영상 | 451385 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene01-doormaster-v7-reproduction-v1.mp4` | 영상 | 473352 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene01-doormaster-v7.mp4` | 영상 | 473352 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene01-handle-round-hardcut-test-v1.mp4` | 영상 | 431541 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene02-03-concept-motion-test-v1.mp4` | 영상 | 225027 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene02-doormaster-v1.mp4` | 영상 | 387706 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene02-doormaster-v2.mp4` | 영상 | 205074 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene02-doormaster-v3.mp4` | 영상 | 200982 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene03-assembly-motion-test-v1.mp4` | 영상 | 199119 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene03-blender-assembly-motion-test-v19.mp4` | 영상 | 409844 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene03-doormaster-preview-v1.mp4` | 영상 | 183695 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene03-doormaster-preview-v2.mp4` | 영상 | 188446 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene03-photo-section-motion-test-v1.mp4` | 영상 | 470367 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene03-photo-section-motion-test-v2.mp4` | 영상 | 520106 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene03-remotion-motion-test-v1.mp4` | 영상 | 412970 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene03-remotion-motion-test-v2.mp4` | 영상 | 685938 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene03-remotion-motion-test-v3.mp4` | 영상 | 687718 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene03-remotion-motion-test-v4.mp4` | 영상 | 639751 | 판단 보류 | JSON 해시/경로 참조 존재: 실행 검증 의존 여부 미확정 |
| `public/assets/video/scene04-doormaster-preview-v1.mp4` | 영상 | 277492 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene04-doormaster-preview-v2.mp4` | 영상 | 268015 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene04-doormaster-preview-v3.mp4` | 영상 | 239960 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene04-doormaster-preview-v4.mp4` | 영상 | 242455 | 판단 보류 | 동적 참조·승인 이력·재현 필요성을 배제할 근거 부족 |
| `public/assets/video/scene04-doormaster-preview-v5.mp4` | 영상 | 241565 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/assets/video/scene05-doormaster-preview-v1.mp4` | 영상 | 233864 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/brand.png` | 이미지 | 5413 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2-outlined.svg` | 이미지 | 9087 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.png` | 이미지 | 249737 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.svg` | 이미지 | 3556101 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/export-text.py` | 기타 | 1146 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/font-settings-v2.json` | 기타 | 481 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/fonts/Pretendard-Black.ttf` | 기타 | 2665004 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/outline.swift` | 기타 | 1726 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/assets-v1/series-sign-v2/render.cjs` | 기타 | 325 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/doormaster-pocket-door-handle-cover-v1.png` | 이미지 | 1118288 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/doormaster-pocket-door-handle-cover-v2.png` | 이미지 | 1528900 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v1.png` | 이미지 | 450380 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v2.png` | 이미지 | 663695 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v1.png` | 이미지 | 588995 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v2.png` | 이미지 | 874148 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v1.png` | 이미지 | 564560 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v2.png` | 이미지 | 830339 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v1.png` | 이미지 | 646467 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v2.png` | 이미지 | 655577 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/daesan-ending/fonts/Pretendard-ExtraBold.woff2` | 기타 | 793540 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/daesan-ending/fonts/Pretendard-Medium.woff2` | 기타 | 778432 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `public/daesan-ending/fonts/Pretendard-SemiBold.woff2` | 기타 | 785856 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `remotion.config.ts` | 기타 | 110 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `render-compare-v5.cjs` | 기타 | 746 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `render-overlay-v4.cjs` | 기타 | 509 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `render-stills-v3.cjs` | 기타 | 531 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/analyze-assemble-tts-v4.py` | 기타 | 2698 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/analyze-tts-candidates-v3.py` | 기타 | 2542 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-full-preview-v1.py` | 기타 | 2340 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-full-preview-v2-scene01-v6.py` | 기타 | 2606 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-full-preview-v2.py` | 기타 | 2595 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-full-preview-v3.py` | 기타 | 2606 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-full-tts-qa-v5.py` | 기타 | 2412 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-scene01-tts-v10.py` | 기타 | 2142 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-scene01-tts-v7.py` | 기타 | 2072 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/assemble-scene01-tts-v9.py` | 기타 | 2136 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/composite-cover-sh30-v1.py` | 기타 | 1605 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/composite-sh30-exterior-v1.py` | 기타 | 3192 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/contact_sheet.py` | 기타 | 2011 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/cover-v1-preservation.json` | 기타 | 2268 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v1-audio-verification.json` | 기타 | 1054 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v1-frame-verification.json` | 기타 | 67 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v1-preservation.json` | 기타 | 2351 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v2-frame-verification.json` | 기타 | 76 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v2-preservation.json` | 기타 | 2351 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v2-scene01-v6-preservation.json` | 기타 | 2351 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v2-scene01-v6-verification.json` | 기타 | 472 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v3-scene01-v7-preservation.json` | 기타 | 2351 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-preview-v3-scene01-v7-verification.json` | 기타 | 472 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/full-tts-qa-v5-analysis.json` | 기타 | 3344 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v10-part-b.py` | 기타 | 1670 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v4.py` | 기타 | 1665 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v5.py` | 기타 | 1664 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v6.py` | 기타 | 1688 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v7.py` | 기타 | 1863 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v8.py` | 기타 | 1703 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene01-tts-v9-part-a.py` | 기타 | 1683 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene03-tts-v2.py` | 기타 | 1760 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-scene03-tts-v4.py` | 기타 | 1743 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-tts-batch-20261104.py` | 기타 | 1502 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/generate-tts-candidates-v3.py` | 기타 | 1642 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/pocket-door-sh30-exploded-concept-v1-layout.json` | 기타 | 1336 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/pocket-door-sh30-exploded-concept-v2-layout.json` | 기타 | 1534 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/pocket-door-sh30-exterior-v1-layout.json` | 기타 | 1706 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/pocket-door-sh30-internal-v1-layout.json` | 기타 | 1341 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/pocket-door-sh30-pre-assembly-v1-layout.json` | 기타 | 1590 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/pocket-door-sh30-recess-pair-v1-layout.json` | 기타 | 1006 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-assembly-motion-test-v1.cjs` | 기타 | 962 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-layered-section-test-v1.cjs` | 기타 | 601 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-motion-test-v1.cjs` | 기타 | 1057 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-motion-test-v2.cjs` | 기타 | 947 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-photo-section-v2.cjs` | 기타 | 587 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-pocket-cover-v1.cjs` | 기타 | 604 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-pocket-cover-v2.cjs` | 기타 | 604 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-realistic-section-test-v1.cjs` | 기타 | 605 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-02-doormaster-v1.cjs` | 기타 | 1881 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-02-safe-area-v3.cjs` | 기타 | 1979 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-handle-types-v3.cjs` | 기타 | 1006 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-handle-types-v4.cjs` | 기타 | 451 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-handle-types-v5.cjs` | 기타 | 451 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-images-v7.cjs` | 기타 | 457 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene01-subtitle-v6.cjs` | 기타 | 450 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene02-doormaster-v2.cjs` | 기타 | 1926 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-concept-v2-layout-fix.cjs` | 기타 | 1069 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-2d-comparison-v1.cjs` | 기타 | 625 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-concept-v1.cjs` | 기타 | 1090 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-concept-v2.cjs` | 기타 | 1090 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-concept-v3.cjs` | 기타 | 1090 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-concept-v4.cjs` | 기타 | 1090 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-mismatch-v1.cjs` | 기타 | 1092 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-preview-v1.cjs` | 기타 | 1164 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-doormaster-preview-v2.cjs` | 기타 | 1517 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-remotion-motion-test-v1.cjs` | 기타 | 2393 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-remotion-motion-test-v2.cjs` | 기타 | 2393 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-remotion-motion-test-v3.cjs` | 기타 | 2393 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene03-remotion-motion-test-v4.cjs` | 기타 | 2429 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene04-doormaster-preview-v1.cjs` | 기타 | 1528 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene04-doormaster-preview-v2.cjs` | 기타 | 1528 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene04-doormaster-preview-v3.cjs` | 기타 | 1528 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene04-doormaster-preview-v4.cjs` | 기타 | 1528 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene04-doormaster-preview-v5.cjs` | 기타 | 1528 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-scene05-doormaster-preview-v1.cjs` | 기타 | 1526 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-section-concept-v1.cjs` | 기타 | 591 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-sh30-exploded-concept-v1.cjs` | 기타 | 1875 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-sh30-exploded-concept-v2.cjs` | 기타 | 2000 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-sh30-internal-v1.cjs` | 기타 | 1768 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-sh30-pre-assembly-v1.cjs` | 기타 | 2643 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/render-sh30-recess-pair-v1.cjs` | 기타 | 2423 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/reproduce-scene01-v7.py` | 기타 | 1799 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/reproduction-build-v7.py` | 기타 | 3357 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/reproduction-environment-v1.txt` | 기타 | 107 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/reproduction-source-hashes-v1.json` | 기타 | 899 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/reproduction-v7-before.json` | 기타 | 16128 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/reproduction-verification-v1.json` | 기타 | 3410 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v10-edit.json` | 기타 | 444 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v10-part-b-request.json` | 기타 | 358 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v10-preservation.json` | 기타 | 3051 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v3-request.json` | 기타 | 267 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v4-request.json` | 기타 | 369 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v5-request.json` | 기타 | 368 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v6-request.json` | 기타 | 392 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v7-edit.json` | 기타 | 416 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v7-part-a-request.json` | 기타 | 233 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v7-part-b-request.json` | 기타 | 234 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v7-preservation.json` | 기타 | 2478 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v8-request.json` | 기타 | 407 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v9-edit.json` | 기타 | 442 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v9-part-a-request.json` | 기타 | 373 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene01-tts-v9-preservation.json` | 기타 | 2860 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene02-tts-v3-request.json` | 기타 | 315 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene02-tts-v4-request.json` | 기타 | 304 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene02-v2-preservation.json` | 기타 | 711 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-ab-v1-preservation.json` | 기타 | 364 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-concept-v2-source-hashes.json` | 기타 | 473 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-concept-v3-source-hashes.json` | 기타 | 865 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-concept-v4-source-hashes.json` | 기타 | 600 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-preview-v1-preservation.json` | 기타 | 476 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-preview-v2-preservation.json` | 기타 | 712 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-preview-v2-text-bounds.json` | 기타 | 442 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-remotion-motion-test-v1-layout.json` | 기타 | 1345 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-remotion-motion-test-v2-layout.json` | 기타 | 1345 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-remotion-motion-test-v3-layout.json` | 기타 | 1345 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-remotion-motion-test-v4-layout.json` | 기타 | 1408 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-tts-v2-request.json` | 기타 | 464 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-tts-v3-request.json` | 기타 | 320 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-tts-v4-measurements.json` | 기타 | 813 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-tts-v4-request.json` | 기타 | 446 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene03-tts-v5-request.json` | 기타 | 324 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-preview-v1-preservation.json` | 기타 | 704 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-preview-v1-text-bounds.json` | 기타 | 850 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-preview-v2-preservation.json` | 기타 | 824 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-preview-v3-preservation.json` | 기타 | 949 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-preview-v4-preservation.json` | 기타 | 1074 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-preview-v5-preservation.json` | 기타 | 1308 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-tts-v3-request.json` | 기타 | 324 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene04-tts-v4-request.json` | 기타 | 347 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene05-preview-v1-preservation.json` | 기타 | 719 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene05-tts-v3-request.json` | 기타 | 296 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/scene05-tts-v4-request.json` | 기타 | 296 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/tts-batch-20261104-input.json` | 기타 | 1316 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/tts-batch-20261104-preservation.json` | 기타 | 3244 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/tts-candidates-v3-input.json` | 기타 | 1341 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/tts-candidates-v3-measurements.json` | 기타 | 4207 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `scripts/tts-v4-preservation-before.json` | 기타 | 2088 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/doormaster-pocket-door-cover-v1.tsx` | 기타 | 1846 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/doormaster-pocket-door-cover-v2.tsx` | 기타 | 1846 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/fonts.ts` | 기타 | 846 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/index.tsx` | 기타 | 7462 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-02-doormaster-v1.tsx` | 기타 | 5458 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-02-safe-area-v3.tsx` | 기타 | 5393 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-handle-types-v3.tsx` | 기타 | 1361 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-handle-types-v4.tsx` | 기타 | 1454 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-handle-types-v5.tsx` | 기타 | 1454 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-images-v7.tsx` | 기타 | 1509 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene01-subtitle-v6.tsx` | 기타 | 1509 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene02-doormaster-v2.tsx` | 기타 | 5191 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-assembly-motion-test-v1.tsx` | 기타 | 4657 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-compare-v5.tsx` | 기타 | 1919 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-concept-v6.tsx` | 기타 | 1520 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-2d-comparison-v1.tsx` | 기타 | 1880 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-concept-v1.tsx` | 기타 | 4478 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-concept-v2.tsx` | 기타 | 4195 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-concept-v3.tsx` | 기타 | 4182 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-concept-v4.tsx` | 기타 | 5470 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-mismatch-v1.tsx` | 기타 | 4189 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-preview-v1.tsx` | 기타 | 2559 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-doormaster-preview-v2.tsx` | 기타 | 3117 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-layered-section-test-v1.tsx` | 기타 | 6211 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-motion-test-v1.tsx` | 기타 | 3643 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-motion-test-v2.tsx` | 기타 | 6452 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-overlay-v4.tsx` | 기타 | 2746 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-photo-section-v2.tsx` | 기타 | 2850 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-realistic-section-test-v1.tsx` | 기타 | 5547 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-remotion-motion-test-v1.tsx` | 기타 | 2757 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-remotion-motion-test-v2.tsx` | 기타 | 4161 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-remotion-motion-test-v3.tsx` | 기타 | 4297 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-remotion-motion-test-v4.tsx` | 기타 | 4070 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene03-section-concept-v1.tsx` | 기타 | 3084 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene04-doormaster-preview-v1.tsx` | 기타 | 1804 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene04-doormaster-preview-v2.tsx` | 기타 | 1812 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene04-doormaster-preview-v3.tsx` | 기타 | 1514 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene04-doormaster-preview-v4.tsx` | 기타 | 1790 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene04-doormaster-preview-v5.tsx` | 기타 | 1734 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/scene05-doormaster-preview-v1.tsx` | 기타 | 1255 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/sh30-exploded-concept-v1.tsx` | 기타 | 5208 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/sh30-exploded-concept-v2.tsx` | 기타 | 5956 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/sh30-internal-v1.tsx` | 기타 | 2280 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/sh30-pre-assembly-v1.tsx` | 기타 | 1420 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/sh30-recess-pair-v1.tsx` | 기타 | 3381 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `src/stills-v3.tsx` | 기타 | 5900 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |
| `tsconfig.json` | 기타 | 356 | 보존 | 최종 승인·재현·원본/이력 근거 또는 소스/설정 |

## 승인 요청

위 삭제 후보 표의 정확한 파일만 후속 정리 승인 대상으로 제안한다. 보류 파일은 승인 요청 목록에 포함하지 않는다. 추적 파일은 삭제 후 별도 커밋·푸시 필요(이번 미실행). Git 과거 이력/LFS 원격 용량은 작업폴더 삭제만으로 줄지 않는다. 실제 정리 시 공통 가이드에 따른 복구 가능한 휴지통 처리 방식과 권한을 확인하고 후보 SHA256을 재확인한다.
