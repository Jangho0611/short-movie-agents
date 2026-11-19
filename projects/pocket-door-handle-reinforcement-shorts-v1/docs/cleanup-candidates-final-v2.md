# 실행 의존성 기준 정리 재분류 v2

2026-11-05. 기존 1,178개 목록 재사용. 새 전수 탐색/삭제/이동/렌더/Git 변경 없음. v1 보고서 보존.
분류: {'삭제 추천': 847, '반드시 보존': 127, '복구용 보존': 204}. 삭제 추천 847개 / 286,362,358 bytes (273.10 MiB).

## 실행·복구·기록 구분

A: 최종 조립, 최종 Scene 렌더, Cover 렌더, Scene1v7 재현, 최종 TTS 조합에서 실제 필요한 파일. B: 승인 복귀본·합성 원본·기록 문서 자체. C: 과거 QA/해시 목록에 등장만 함. D: 그런 기록도 없음. 역사 실험 소스의 입력은 최종 실행 입력과 구분하여 JSON historical_code_refs에 남김.
기록 파일을 보존해도 기록에 나오는 모든 결과물은 보존하지 않음. 삭제 후 과거 QA의 링크/해시 비교 대상은 로컬에서 없어지며, 그 실험을 다시 검토하려면 Git에서 해당 묶음을 복원해야 함. 최종 재현 경로에는 영향 없도록 분리.

## 활성 진입점

- `src/scene01-images-v7.tsx`
- `src/scene01-02-safe-area-v3.tsx`
- `src/scene03-doormaster-preview-v2.tsx`
- `src/scene04-doormaster-preview-v5.tsx`
- `src/scene05-doormaster-preview-v1.tsx`
- `src/doormaster-pocket-door-cover-v2.tsx`
- `scripts/reproduce-scene01-v7.py`
- `scripts/render-scene01-images-v7.cjs`
- `scripts/render-scene01-02-safe-area-v3.cjs`
- `scripts/render-scene03-doormaster-preview-v2.cjs`
- `scripts/render-scene04-doormaster-preview-v5.cjs`
- `scripts/render-scene05-doormaster-preview-v1.cjs`
- `scripts/render-pocket-cover-v2.cjs`
- `scripts/assemble-full-preview-v3.py`
- `scripts/assemble-scene01-tts-v10.py`

## TTS 예외: 단순 기록이 아닌 실제 검사

최종 scene01-tts-v10.wav와 v9-part-a/v10-part-b를 보존. assemble-scene01-tts-v10.py 마지막의 `old=...preservation.json; assert all(...read_bytes...)`는 실제 실파일 검사다. 해당 목록 음원은 C가 아니라 A(검증 의존). 이번에는 스크립트 변경이 금지되어 이 결합을 해제하지 않음. 나머지 통합 청취 파생본은 삭제 추천 가능. 단어별 실패를 새로 청취 판정한 것은 아님.

## 반드시 보존·복구

최종 통합v3, Scene1v7/2v3/3v2/4v5/5v1, Scene1v6, 재현 스크립트/6PNG/검증결과, 손잡이4종, 승인TTS5종+실제 조합입력, Coverv2/Hero/간판/브랜드/폰트, SNS/최종QA/작업기록, 설정/의존성 보존.
모노레포 assets/daesan-ending 승인17파일은 프로젝트 밖 공용 필수 의존으로 보존(이번 조사·변경 범위에서 제외; 직전 검증 PASS 재사용). 시스템 폰트/ffmpeg/Python 환경은 기존 재현 기록 유지.
이전 승인 Scene/전체Preview는 복구용 유지. 실패 privacy-v1/v4·round-v1은 최종 합성 입력과 다르므로 삭제 추천. privacy-v2/v3/v5와 round-v2/v3는 합성/복구 원본으로 유지.


추가 동적 경로 확인: concept-motion-v1 136프레임 및 v19-frames 291프레임은 구형 Blender 실험에서만 소비. 각 파일별로 삭제 추천 목록에 반영, 폴더 전체 삭제 지시 아님.

## 삭제 추천 파일별 목록

Git 복구는 d4d2bba 트리 존재 확인 기준. 추적파일 삭제는 별도 커밋·푸시 필요. 과거 QA 링크·실험 재실행은 해당 Git 묶음 복원 필요.

### 영상: 12개 / 5,726,850 bytes

| 상대경로 | bytes | 최종 승인 | 실행·복구 필요 | 기록 참조 | Git 추적/복구 | 근거·삭제 영향 |
|---|---:|---|---|---|---|---|
| `public/assets/video/scene01-02-doormaster-preview-v1.mp4` | 727423 | 실험 승인만 또는 미채택 | 없음/없음 | C, 2건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene01-02-doormaster-preview-v2.mp4` | 377033 | 실험 승인만 또는 미채택 | 없음/없음 | C, 1건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene01-02-doormaster-preview-v3.mp4` | 371554 | 실험 승인만 또는 미채택 | 없음/없음 | C, 1건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene02-03-concept-motion-test-v1.mp4` | 225027 | 실험 승인만 또는 미채택 | 없음/없음 | C, 26건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-assembly-motion-test-v1.mp4` | 199119 | 실험 승인만 또는 미채택 | 없음/없음 | C, 16건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-blender-assembly-motion-test-v19.mp4` | 409844 | 실험 승인만 또는 미채택 | 없음/없음 | C, 3건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-photo-section-motion-test-v1.mp4` | 470367 | 실험 승인만 또는 미채택 | 없음/없음 | C, 20건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-photo-section-motion-test-v2.mp4` | 520106 | 실험 승인만 또는 미채택 | 없음/없음 | C, 17건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-remotion-motion-test-v1.mp4` | 412970 | 실험 승인만 또는 미채택 | 없음/없음 | C, 1건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-remotion-motion-test-v2.mp4` | 685938 | 실험 승인만 또는 미채택 | 없음/없음 | C, 1건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-remotion-motion-test-v3.mp4` | 687718 | 실험 승인만 또는 미채택 | 없음/없음 | C, 1건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/video/scene03-remotion-motion-test-v4.mp4` | 639751 | 실험 승인만 또는 미채택 | 없음/없음 | C, 1건 | True/True | 최종 타임라인 미사용 실험/무음 비교 렌더; 원본·최종 제작 경로와 분리; 과거 실험 재검토는 Git 복원 |

### 이미지: 581개 / 274,114,618 bytes

| 상대경로 | bytes | 최종 승인 | 실행·복구 필요 | 기록 참조 | Git 추적/복구 | 근거·삭제 영향 |
|---|---:|---|---|---|---|---|
| `public/assets/images/concept-motion-v1/frame-0001.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0002.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0003.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0004.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0005.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0006.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0007.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0008.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0009.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0010.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0011.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0012.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0013.png` | 417881 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0014.png` | 417404 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0015.png` | 417928 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0016.png` | 417979 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0017.png` | 417380 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0018.png` | 417703 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0019.png` | 417504 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0020.png` | 417152 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0021.png` | 417641 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0022.png` | 417144 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0023.png` | 417910 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0024.png` | 417143 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0025.png` | 416756 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0026.png` | 416479 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0027.png` | 417043 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0028.png` | 417515 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0029.png` | 417101 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0030.png` | 418675 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0031.png` | 418961 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0032.png` | 418672 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0033.png` | 419809 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0034.png` | 419237 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0035.png` | 420673 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0036.png` | 421111 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0037.png` | 421736 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0038.png` | 420842 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0039.png` | 423400 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0040.png` | 423901 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0041.png` | 422217 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0042.png` | 422651 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0043.png` | 423093 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0044.png` | 423312 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0045.png` | 423031 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0046.png` | 422837 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0047.png` | 422142 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0048.png` | 421771 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0049.png` | 422277 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0050.png` | 421534 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0051.png` | 421071 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0052.png` | 419499 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0053.png` | 419254 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0054.png` | 420223 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0055.png` | 419862 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0056.png` | 417838 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0057.png` | 423490 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0058.png` | 422823 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0059.png` | 418319 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0060.png` | 419986 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0061.png` | 423069 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0062.png` | 426074 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0063.png` | 421608 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0064.png` | 419421 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0065.png` | 420863 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0066.png` | 420513 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0067.png` | 421021 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0068.png` | 420785 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0069.png` | 419013 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0070.png` | 420632 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0071.png` | 420711 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0072.png` | 420463 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0073.png` | 420477 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0074.png` | 420015 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0075.png` | 419430 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0076.png` | 419860 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0077.png` | 420700 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0078.png` | 420729 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0079.png` | 420215 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0080.png` | 419585 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0081.png` | 420367 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0082.png` | 419279 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0083.png` | 420135 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0084.png` | 417150 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0085.png` | 419613 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0086.png` | 420417 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0087.png` | 420078 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0088.png` | 420553 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0089.png` | 421132 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0090.png` | 420298 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0091.png` | 420165 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0092.png` | 421181 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0093.png` | 421248 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0094.png` | 421139 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0095.png` | 421062 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0096.png` | 421299 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0097.png` | 421010 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0098.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0099.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0100.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0101.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0102.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0103.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0104.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0105.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0106.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0107.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0108.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0109.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0110.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0111.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0112.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0113.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0114.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0115.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0116.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0117.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0118.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0119.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/frame-0120.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/key-001.png` | 418321 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/key-043.png` | 423093 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/key-064.png` | 419421 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/key-077.png` | 420700 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/key-120.png` | 421259 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/key-states-contact-v1.png` | 319820 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/review-001.png` | 418127 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/review-043.png` | 423095 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/review-064.png` | 419084 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/review-077.png` | 420777 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/review-120.png` | 422521 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/state-001.png` | 416675 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/state-043.png` | 416219 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/state-064.png` | 416204 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/state-077.png` | 421692 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/concept-motion-v1/state-120.png` | 422770 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/contact-sheet-scene02-04-v2.jpg` | 312517 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 27건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/contact-sheet-v3.png` | 243638 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/mobile-s03-mismatch-v2.png` | 79384 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 25건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/mobile-s04-review-v2.png` | 82323 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-cover-sh30-composite-v1.png` | 1548534 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 미채택 공식제품 합성 실험. 최종 Cover는 photoreal-v1 원본 사용; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-cutaway-edit-source-v2.png` | 1603949 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-cutaway-source-v1.png` | 1791455 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-cutaway-v1.png` | 481091 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-cutaway-v2.png` | 475745 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-exploded-concept-v1.png` | 513687 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-exploded-concept-v2.png` | 496752 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-exploded-photoreal-v1.png` | 510789 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 5건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-exploded-source-v1.png` | 1865697 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-internal-open-source-v1.png` | 1845446 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-internal-section-source-v1.png` | 1816621 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-internal-section-v1.png` | 508112 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-internal-v1.png` | 656900 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-pre-assembly-v1.png` | 653941 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 4건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-recess-v1.png` | 626091 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 7건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-door-sh30-reinforcement-check-v1.png` | 633499 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-alignment-front-v12.png` | 440811 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 8건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-alignment-oblique-v12.png` | 438259 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 8건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-cutaway-v4.png` | 1708503 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 24건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-cutaway-v6.png` | 1698543 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 21건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-horizontal-section-v16.png` | 446033 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 3건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-horizontal-section-v17.png` | 447370 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-horizontal-section-v18.png` | 429519 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-layout-check-v8.png` | 450546 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 12건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-macro-cutaway-v2.png` | 1703891 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 25건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-macro-cutaway-v3.png` | 1730493 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 24건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-post-assembly-v10.png` | 442473 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 10건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-post-assembly-v9.png` | 448886 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 11건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-pre-assembly-v10.png` | 449558 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 10건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-pre-assembly-v11.png` | 446068 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 9건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-pre-assembly-v9.png` | 444599 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 11건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-reinforced-assembly-v7.png` | 1724805 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-reinforcement-cutaway-v13.png` | 440954 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 7건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-single-cutout-post-v14.png` | 435561 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 6건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-single-cutout-pre-v14.png` | 436008 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 6건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/pocket-handle-xray-reinforcement-v15.png` | 437438 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 4건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-01-exterior-v1.png` | 557863 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-01-exterior-v2.png` | 511343 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-01-exterior-v3.png` | 270946 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-02-position-v3.png` | 268113 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-02-recess-v2.png` | 211388 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-03-conditions-v3.png` | 276835 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s02-03-fixing-v2.png` | 216884 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s03-01-internal-check-v3.png` | 286820 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s03-01-support-v2.png` | 238977 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s03-02-location-check-v3.png` | 298656 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s03-02-mismatch-v1.png` | 244654 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s03-02-mismatch-v2.png` | 244654 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s04-01-basic-check-v3.png` | 293132 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s04-01-template-v2.png` | 242085 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s04-02-lock-example-v3.png` | 302576 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s04-02-review-v2.png` | 242434 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/s04-03-final-check-v3.png` | 254670 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 26건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-02-doormaster-qa-v1.png` | 260997 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-02-doormaster-qa-v2.png` | 159283 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-02-safe-area-qa-v3.png` | 337798 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-clean-background-before-after-v1.png` | 1143219 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-clean-background-comparison-v1.png` | 1070674 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-clean-background-mobile-v1.png` | 605317 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-right-edge-detail-v1.png` | 1341843 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-structure-comparison-v1.png` | 1068000 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-structure-mobile-qa-v1.png` | 603303 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-door-structure-removal-mask-v1.png` | 1025454 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-doormaster-v3-mobile-qa.png` | 298731 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-doormaster-v5-mobile-qa.png` | 411781 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-doormaster-v6-mobile-qa.png` | 270013 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-edgepull-door-boundary-v5.png` | 1880967 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-edgepull-position-compare-v4.png` | 259663 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-edgepull-position-compare-v5.png` | 297390 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-edgepull-compare-v1.png` | 598039 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-edgepull-compare-v2.png` | 355321 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-edgepull-mobile-v1.png` | 187842 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-edgepull-mobile-v2.png` | 185764 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-compare-v2.png` | 371743 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-compare-v3.png` | 373490 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-compare-v4.png` | 373311 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-compare-v5.png` | 407093 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-mobile-v2.png` | 186091 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-mobile-v3.png` | 187833 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-mobile-v4.png` | 187700 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-mobile-v5.png` | 188389 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-v1.png` | 1600121 | 미채택 | 없음/없음 | C, 2건 | True/True | 사용자 미채택 형상; 최종 합성 원본 아님; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-privacy-v4.png` | 1584527 | 미채택 | 없음/없음 | C, 1건 | True/True | 사용자 미채택 형상; 최종 합성 원본 아님; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-round-compare-v2.png` | 374554 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-round-compare-v3.png` | 222783 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-round-mobile-v2.png` | 188417 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-round-mobile-v3.png` | 188146 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-round-v1.png` | 1649988 | 미채택 | 없음/없음 | C, 2건 | True/True | 사용자 미채택 형상; 최종 합성 원본 아님; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-square-v1.png` | 1654406 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-types-base-compare-v2.png` | 410249 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-types-base-mobile-v1.png` | 221010 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-types-base-mobile-v2.png` | 187708 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-types-comparison-v1.png` | 1802306 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-handle-types-mobile-v1.png` | 738766 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene01-subtitle-compare-v6.png` | 162435 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-contact-sheet.png` | 253456 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f000.png` | 534592 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f024.png` | 534592 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f046.png` | 519674 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f068.png` | 464593 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f088.png` | 464593 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f108.png` | 517484 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f125.png` | 518887 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-assembly-motion-test-v1-f165.png` | 518887 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 13건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-blender-assembly-contact-sheet-v19.png` | 595758 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-blender-assembly-key-001-v19.png` | 435395 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-blender-assembly-key-085-v19.png` | 428339 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-blender-assembly-key-141-v19.png` | 435443 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-concept-overlay-v4.png` | 1653322 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 24건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-2d-comparison-mobile-v1.png` | 47449 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-2d-comparison-mobile-v2.png` | 48438 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-2d-comparison-v1.png` | 114157 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-2d-comparison-v2.png` | 115478 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-ab-comparison-v1.png` | 249451 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-mobile-v1.png` | 192487 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-mobile-v2.png` | 184453 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-mobile-v3.png` | 181545 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-mobile-v4.png` | 145327 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-v1.png` | 1411697 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-v2.png` | 880968 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-v3.png` | 1364936 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 2건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-concept-v4.png` | 1531752 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-mismatch-mobile-v1.png` | 182459 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-doormaster-mismatch-v1.png` | 1366478 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 1건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-layered-section-test-v1.png` | 607103 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 17건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v1-contact-sheet.png` | 213947 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 18건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v1-f000.png` | 370132 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 18건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v1-f044.png` | 395858 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 17건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v1-f064.png` | 401478 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 17건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v1-f088.png` | 401716 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 17건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v1-f120.png` | 409193 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 17건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-contact-sheet.png` | 343052 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 15건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f000.png` | 370132 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f044.png` | 395858 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f055.png` | 496616 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f064.png` | 573677 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f076.png` | 598156 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f088.png` | 595849 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f098.png` | 605003 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-motion-test-v2-f120.png` | 605003 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 14건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-photo-section-v2.png` | 404106 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 20건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-realistic-section-test-v1.png` | 621741 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 17건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-reinforcement-concept-v6.png` | 1802518 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 21건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-remotion-motion-test-v1-contact-sheet.png` | 389765 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-remotion-motion-test-v2-contact-sheet.png` | 522401 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-remotion-motion-test-v3-contact-sheet.png` | 523019 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-remotion-motion-test-v4-contact-sheet.png` | 502425 | 최종 미사용, 과거 시험/검토 | 없음/없음 | D, 0건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-section-concept-v1.png` | 124313 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 20건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-support-mismatch-v5.png` | 1903042 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 22건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/scene03-support-review-v5.png` | 1905834 | 최종 미사용, 과거 시험/검토 | 없음/없음 | C, 22건 | True/True | 최종 입력에서 제외된 과거 실험 출력/콘티/파생 비교 이미지; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0001.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0026.png` | 436139 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0027.png` | 437048 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0028.png` | 436465 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0029.png` | 433647 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0030.png` | 431968 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0031.png` | 431895 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0032.png` | 431187 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0033.png` | 430585 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0034.png` | 430994 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0035.png` | 430654 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0036.png` | 430529 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0037.png` | 432592 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0038.png` | 430089 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0039.png` | 428008 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0040.png` | 427704 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0041.png` | 427037 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0042.png` | 427702 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0043.png` | 427312 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0106.png` | 426445 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0108.png` | 428008 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0109.png` | 429273 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0110.png` | 431950 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0112.png` | 430789 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0113.png` | 430297 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0114.png` | 430277 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0116.png` | 432459 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0117.png` | 434317 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0118.png` | 436687 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0120.png` | 435983 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0121.png` | 435296 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0122.png` | 436601 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0123.png` | 436445 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0124.png` | 436155 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0125.png` | 435503 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0126.png` | 435209 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0127.png` | 435228 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0128.png` | 435375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0129.png` | 436514 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0130.png` | 437170 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0131.png` | 437018 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0132.png` | 437120 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0133.png` | 437229 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0134.png` | 438620 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0135.png` | 437695 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0136.png` | 436057 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0137.png` | 437320 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0138.png` | 436898 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0139.png` | 437953 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0140.png` | 435428 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-ext-0141.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0044.png` | 421210 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0062.png` | 421457 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0063.png` | 421550 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0064.png` | 422328 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0065.png` | 422082 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0066.png` | 422781 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0067.png` | 423360 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0068.png` | 423609 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0069.png` | 423710 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0070.png` | 424227 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0071.png` | 424530 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0072.png` | 424868 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0073.png` | 425061 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0074.png` | 425380 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0075.png` | 426186 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0076.png` | 425871 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0077.png` | 426422 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0078.png` | 426791 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0079.png` | 427169 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0080.png` | 427373 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0081.png` | 427713 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0082.png` | 427835 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0083.png` | 428170 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0084.png` | 428213 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/checked-sec-0085.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0001.png` | 383865 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0026.png` | 379479 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0027.png` | 368511 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0028.png` | 370682 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0029.png` | 369705 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0030.png` | 376677 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0031.png` | 394270 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0032.png` | 420149 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0033.png` | 428017 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0035.png` | 417705 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0036.png` | 420971 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0037.png` | 423712 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0038.png` | 424959 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0039.png` | 425942 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0040.png` | 428165 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0041.png` | 428056 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0042.png` | 429241 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0043.png` | 429063 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0106.png` | 428841 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0108.png` | 427961 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0109.png` | 425419 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/ext-0110.png` | 424012 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0001.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0002.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0003.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0004.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0005.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0006.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0007.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0008.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0009.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0010.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0011.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0012.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0013.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0014.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0015.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0016.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0017.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0018.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0019.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0020.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0021.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0022.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0023.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0024.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0025.png` | 435395 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0026.png` | 436139 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0027.png` | 437048 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0028.png` | 436465 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0029.png` | 433647 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0030.png` | 431968 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0031.png` | 431895 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0032.png` | 431187 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0033.png` | 430585 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0034.png` | 430994 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0035.png` | 430654 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0036.png` | 430529 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0037.png` | 432592 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0038.png` | 430089 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0039.png` | 428008 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0040.png` | 427704 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0041.png` | 427037 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0042.png` | 427702 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0043.png` | 427312 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0044.png` | 331961 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0045.png` | 333238 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0046.png` | 334306 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0047.png` | 335097 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0048.png` | 336787 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0049.png` | 335231 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0050.png` | 336539 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0051.png` | 336432 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0052.png` | 332514 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0053.png` | 336173 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0054.png` | 334306 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0055.png` | 336329 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0056.png` | 334772 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0057.png` | 332281 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0058.png` | 329414 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0059.png` | 328454 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0060.png` | 325910 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0061.png` | 421210 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0062.png` | 421457 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0063.png` | 421550 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0064.png` | 422328 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0065.png` | 422082 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0066.png` | 422781 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0067.png` | 423360 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0068.png` | 423609 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0069.png` | 423710 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0070.png` | 424227 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0071.png` | 424530 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0072.png` | 424868 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0073.png` | 425061 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0074.png` | 425380 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0075.png` | 426186 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0076.png` | 425871 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0077.png` | 426422 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0078.png` | 426791 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0079.png` | 427169 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0080.png` | 427373 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0081.png` | 427713 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0082.png` | 427835 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0083.png` | 428170 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0084.png` | 428213 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0085.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0086.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0087.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0088.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0089.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0090.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0091.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0092.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0093.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0094.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0095.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0096.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0097.png` | 428339 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0098.png` | 335410 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0099.png` | 340319 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0100.png` | 344020 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0101.png` | 340157 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0102.png` | 338802 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0103.png` | 338767 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0104.png` | 335078 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0105.png` | 332063 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0106.png` | 426445 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0107.png` | 427037 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0108.png` | 428008 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0109.png` | 429273 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0110.png` | 431950 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0111.png` | 430529 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0112.png` | 430789 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0113.png` | 430297 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0114.png` | 430277 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0115.png` | 431895 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0116.png` | 432459 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0117.png` | 434317 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0118.png` | 436687 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0119.png` | 436139 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0120.png` | 435983 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0121.png` | 435296 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0122.png` | 436601 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0123.png` | 436445 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0124.png` | 436155 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0125.png` | 435503 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0126.png` | 435209 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0127.png` | 435228 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0128.png` | 435375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0129.png` | 436514 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0130.png` | 437170 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0131.png` | 437018 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0132.png` | 437120 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0133.png` | 437229 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0134.png` | 438620 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0135.png` | 437695 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0136.png` | 436057 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0137.png` | 437320 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0138.png` | 436898 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0139.png` | 437953 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0140.png` | 435428 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0141.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0142.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0143.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0144.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0145.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0146.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0147.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0148.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0149.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0150.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0151.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0152.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0153.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0154.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0155.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0156.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0157.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0158.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0159.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0160.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0161.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0162.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0163.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0164.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0165.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0166.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0167.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/frame-0168.png` | 435443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0044.png` | 421202 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0062.png` | 421449 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0063.png` | 421542 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0064.png` | 422320 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0065.png` | 422074 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0066.png` | 422773 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0067.png` | 423352 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0068.png` | 423601 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0069.png` | 423702 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0070.png` | 424219 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0071.png` | 424522 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0072.png` | 424860 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0073.png` | 425053 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0074.png` | 425372 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0075.png` | 426178 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0076.png` | 425863 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0077.png` | 426414 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0078.png` | 426783 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0079.png` | 427161 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0080.png` | 427365 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0081.png` | 427705 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0082.png` | 427827 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0083.png` | 428162 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0084.png` | 428205 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |
| `public/assets/images/v19-frames/sec-0085.png` | 428331 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 구형 Blender 실험의 프레임 시퀀스. concept-v1 encode/qa 및 concept-v19 finish에서만 동적 소비; 최종 Remotion/조립 경로와 분리; 과거 실험 재검토는 Git 복원 |

### TTS·오디오: 2개 / 1,987,388 bytes

| 상대경로 | bytes | 최종 승인 | 실행·복구 필요 | 기록 참조 | Git 추적/복구 | 근거·삭제 영향 |
|---|---:|---|---|---|---|---|
| `public/assets/audio/full-tts-qa-v5.mp3` | 585644 | 비교용, 최종 음원 아님 | 없음/없음 | D, 0건 | True/True | 최종 음원·조합 입력·활성 manifest 검사 대상 아님; 통합 비교용 파생 음원; 과거 실험 재검토는 Git 복원 |
| `public/assets/audio/full-tts-qa-v5.wav` | 1401744 | 비교용, 최종 음원 아님 | 없음/없음 | D, 0건 | True/True | 최종 음원·조합 입력·활성 manifest 검사 대상 아님; 통합 비교용 파생 음원; 과거 실험 재검토는 Git 복원 |

### 기타: 252개 / 4,533,502 bytes

| 상대경로 | bytes | 최종 승인 | 실행·복구 필요 | 기록 참조 | Git 추적/복구 | 근거·삭제 영향 |
|---|---:|---|---|---|---|---|
| `.DS_Store` | 10244 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 20건 | False/False | OS 메타데이터 또는 이전 실험 실행 기록/런처; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/build-authorized.log` | 2269 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/build.log` | 375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/build_motion.py` | 5533 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/build_motion_final.py` | 7086 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/build_motion_refined.py` | 7018 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/encode-test-v1.sh` | 286 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/pocket-core-motion-reviewed-v1.blend` | 155139 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/pocket-core-motion-test-v1.blend` | 155083 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/pocket-core-motion-v1.blend` | 153647 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/qa-v1.json` | 640 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/qa_test.py` | 1730 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/refine.log` | 2299 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v1/render-final.log` | 25196 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v10/build_v10.py` | 4570 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 10건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v10/geometry-qa.json` | 699 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v10/pocket-handle-post-assembly-v10.blend` | 113621 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 9건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v10/pocket-handle-pre-assembly-v10.blend` | 113189 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 9건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v10/preservation-before.json` | 36180 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v10/preservation-qa.json` | 143 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v11/build_v11.py` | 3799 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 9건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v11/geometry-qa.json` | 586 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v11/pocket-handle-pre-assembly-v11.blend` | 112633 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 9건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v11/preservation-before.json` | 37233 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v11/preservation-qa.json` | 43 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v12/build_v12.py` | 6798 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 8건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v12/geometry-qa.json` | 2283 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v12/pocket-handle-alignment-front-v12.blend` | 115563 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 7건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v12/pocket-handle-alignment-oblique-v12.blend` | 115537 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 7건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v12/preservation-before.json` | 38029 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v12/preservation-qa.json` | 37 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v13/build_v13.py` | 4515 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 7건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v13/geometry-qa.json` | 953 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v13/pocket-handle-reinforcement-cutaway-v13.blend` | 118857 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 6건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v13/preservation-before.json` | 39096 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v13/preservation-qa.json` | 37 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v14/build_v14.py` | 5524 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 6건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v14/geometry-qa.json` | 4080 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v14/pocket-handle-single-cutout-post-v14.blend` | 121319 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 5건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v14/pocket-handle-single-cutout-pre-v14.blend` | 121309 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 5건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v14/preservation-before.json` | 39910 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v14/preservation-qa.json` | 37 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v15/build_v15.py` | 5738 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 4건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v15/geometry-qa.json` | 5315 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v15/pocket-handle-xray-reinforcement-v15.blend` | 128119 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 4건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v15/preservation-before.json` | 40983 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v15/preservation-qa.json` | 63 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v16/build_v16.py` | 4993 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 3건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v16/geometry-qa.json` | 4878 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v16/pocket-handle-horizontal-section-v16.blend` | 133878 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 3건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v16/preservation-before.json` | 41791 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v16/preservation-qa.json` | 43 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v17/build_v17.py` | 6094 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v17/geometry-qa.json` | 646 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v17/pocket-handle-horizontal-section-v17.blend` | 139040 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v17/preservation-before.json` | 42599 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v17/preservation-qa.json` | 43 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v18/build_v18.py` | 4674 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v18/geometry-qa.json` | 8845 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v18/pocket-handle-horizontal-section-v18.blend` | 138829 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v18/preservation-before.json` | 43407 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v18/preservation-qa.json` | 43 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/build_v19.py` | 5745 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/build_v19_checked.py` | 5876 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/final-image-comparison.json` | 148 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/finish_v19.py` | 2115 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/independent-geometry-qa.json` | 242 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/motion-qa-checked.json` | 24518 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/motion-qa.json` | 24518 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/preservation-before.json` | 44215 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/preservation-qa.json` | 52 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/render-manifest-checked.json` | 56584 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/render-manifest.json` | 55040 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/scene03-assembly-motion-v19-checked.blend` | 167866 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/scene03-assembly-motion-v19.blend` | 167823 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/verify_v19.py` | 1530 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/verify_v19_tolerance.py` | 1624 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v19/video-probe.json` | 2968 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v2/build_cutaway.py` | 6412 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 25건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v2/pocket-handle-macro-cutaway-v2.blend` | 118282 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 26건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v2/preservation-before.json` | 23813 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v2/qa-v2.json` | 515 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 27건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v2/render-authorized.log` | 1200 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v2/render.log` | 375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/build_cutaway_v3.py` | 4507 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/geometry-qa.json` | 1005 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/pocket-handle-macro-cutaway-v3.blend` | 123332 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/preservation-before.json` | 24703 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/qa-v3.json` | 1406 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 27건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/render-authorized.log` | 936 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v3/render.log` | 375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/build_cutaway_v4.py` | 3125 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/geometry-qa.json` | 873 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/pocket-handle-cutaway-v4.blend` | 114277 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/preservation-before.json` | 25703 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/preservation-qa.json` | 196 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/render-authorized.log` | 960 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v4/render.log` | 375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v5/build_v5.py` | 4045 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 22건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v5/comparison-v5.blend` | 190991 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 22건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v5/geometry-qa.json` | 220 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v5/preservation-qa.json` | 93 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v5/render-authorized.log` | 831 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v5/render.log` | 375 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 24건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v6/build_v6.py` | 3172 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 21건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v6/geometry-qa.json` | 1037 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v6/pocket-handle-cutaway-v6.blend` | 107581 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 21건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v6/preservation-before.json` | 27418 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v6/preservation-qa.json` | 94 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v6/render-overlay-v6.cjs` | 657 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 21건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v7/build_v7.py` | 5292 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 13건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v7/geometry-qa.json` | 1108 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v7/pocket-handle-reinforced-assembly-v7.blend` | 112967 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 13건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v7/preservation-before.json` | 33443 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v7/preservation-qa.json` | 79 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v8/build_v8.py` | 4105 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 12건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v8/geometry-qa.json` | 535 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v8/pocket-handle-layout-check-v8.blend` | 112773 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 12건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v8/preservation-before.json` | 34244 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v8/preservation-qa.json` | 77 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/build_v9.py` | 4634 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 11건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/finish_post_v9.py` | 1028 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 11건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/geometry-qa.json` | 810 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 33건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/pocket-handle-post-assembly-v9.blend` | 112662 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 10건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/pocket-handle-pre-assembly-v9.blend` | 112750 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 10건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/preservation-before.json` | 35031 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 23건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `blender/concept-v9/preservation-qa.json` | 143 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 32건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `public/.DS_Store` | 8196 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 20건 | False/False | OS 메타데이터 또는 이전 실험 실행 기록/런처; 과거 실험 재검토는 Git 복원 |
| `public/assets/.DS_Store` | 12292 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 20건 | False/False | OS 메타데이터 또는 이전 실험 실행 기록/런처; 과거 실험 재검토는 Git 복원 |
| `render-compare-v5.cjs` | 746 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | OS 메타데이터 또는 이전 실험 실행 기록/런처; 과거 실험 재검토는 Git 복원 |
| `render-overlay-v4.cjs` | 509 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | OS 메타데이터 또는 이전 실험 실행 기록/런처; 과거 실험 재검토는 Git 복원 |
| `render-stills-v3.cjs` | 531 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | OS 메타데이터 또는 이전 실험 실행 기록/런처; 과거 실험 재검토는 Git 복원 |
| `scripts/analyze-assemble-tts-v4.py` | 2698 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/analyze-tts-candidates-v3.py` | 2542 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/assemble-full-preview-v1.py` | 2340 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/assemble-full-preview-v2-scene01-v6.py` | 2606 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/assemble-full-preview-v2.py` | 2595 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/assemble-full-tts-qa-v5.py` | 2412 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/assemble-scene01-tts-v7.py` | 2072 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/assemble-scene01-tts-v9.py` | 2136 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/composite-cover-sh30-v1.py` | 1605 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/composite-sh30-exterior-v1.py` | 3192 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/contact_sheet.py` | 2011 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/cover-v1-preservation.json` | 2268 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v1-audio-verification.json` | 1054 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v1-frame-verification.json` | 67 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v1-preservation.json` | 2351 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v2-frame-verification.json` | 76 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v2-preservation.json` | 2351 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v2-scene01-v6-preservation.json` | 2351 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-preview-v2-scene01-v6-verification.json` | 472 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/full-tts-qa-v5-analysis.json` | 3344 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v10-part-b.py` | 1670 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v4.py` | 1665 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v5.py` | 1664 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v6.py` | 1688 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v7.py` | 1863 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v8.py` | 1703 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene01-tts-v9-part-a.py` | 1683 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene03-tts-v2.py` | 1760 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 3건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-scene03-tts-v4.py` | 1743 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-tts-batch-20261104.py` | 1502 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/generate-tts-candidates-v3.py` | 1642 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/pocket-door-sh30-exploded-concept-v1-layout.json` | 1336 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/pocket-door-sh30-exploded-concept-v2-layout.json` | 1534 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/pocket-door-sh30-exterior-v1-layout.json` | 1706 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/pocket-door-sh30-internal-v1-layout.json` | 1341 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/pocket-door-sh30-pre-assembly-v1-layout.json` | 1590 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/pocket-door-sh30-recess-pair-v1-layout.json` | 1006 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-assembly-motion-test-v1.cjs` | 962 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-layered-section-test-v1.cjs` | 601 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-motion-test-v1.cjs` | 1057 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-motion-test-v2.cjs` | 947 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-photo-section-v2.cjs` | 587 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-pocket-cover-v1.cjs` | 604 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-realistic-section-test-v1.cjs` | 605 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene01-02-doormaster-v1.cjs` | 1881 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene01-handle-types-v3.cjs` | 1006 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene01-handle-types-v4.cjs` | 451 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene01-handle-types-v5.cjs` | 451 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene01-subtitle-v6.cjs` | 450 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene02-doormaster-v2.cjs` | 1926 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-concept-v2-layout-fix.cjs` | 1069 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-2d-comparison-v1.cjs` | 625 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-concept-v1.cjs` | 1090 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-concept-v2.cjs` | 1090 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-concept-v3.cjs` | 1090 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-concept-v4.cjs` | 1090 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-mismatch-v1.cjs` | 1092 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-doormaster-preview-v1.cjs` | 1164 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-remotion-motion-test-v1.cjs` | 2393 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-remotion-motion-test-v2.cjs` | 2393 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-remotion-motion-test-v3.cjs` | 2393 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene03-remotion-motion-test-v4.cjs` | 2429 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene04-doormaster-preview-v1.cjs` | 1528 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene04-doormaster-preview-v2.cjs` | 1528 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene04-doormaster-preview-v3.cjs` | 1528 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-scene04-doormaster-preview-v4.cjs` | 1528 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-section-concept-v1.cjs` | 591 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-sh30-exploded-concept-v1.cjs` | 1875 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-sh30-exploded-concept-v2.cjs` | 2000 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-sh30-internal-v1.cjs` | 1768 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-sh30-pre-assembly-v1.cjs` | 2643 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/render-sh30-recess-pair-v1.cjs` | 2423 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v10-part-b-request.json` | 358 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v3-request.json` | 267 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v4-request.json` | 369 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v5-request.json` | 368 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v6-request.json` | 392 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v7-edit.json` | 416 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v7-part-a-request.json` | 233 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v7-part-b-request.json` | 234 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v7-preservation.json` | 2478 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v8-request.json` | 407 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v9-edit.json` | 442 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v9-part-a-request.json` | 373 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene01-tts-v9-preservation.json` | 2860 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene02-tts-v3-request.json` | 315 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene02-tts-v4-request.json` | 304 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene02-v2-preservation.json` | 711 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-ab-v1-preservation.json` | 364 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-concept-v2-source-hashes.json` | 473 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-concept-v3-source-hashes.json` | 865 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-concept-v4-source-hashes.json` | 600 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-preview-v1-preservation.json` | 476 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-preview-v2-preservation.json` | 712 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-preview-v2-text-bounds.json` | 442 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-remotion-motion-test-v1-layout.json` | 1345 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-remotion-motion-test-v2-layout.json` | 1345 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-remotion-motion-test-v3-layout.json` | 1345 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-remotion-motion-test-v4-layout.json` | 1408 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-tts-v2-request.json` | 464 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-tts-v3-request.json` | 320 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-tts-v4-measurements.json` | 813 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-tts-v4-request.json` | 446 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene03-tts-v5-request.json` | 324 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-preview-v1-preservation.json` | 704 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-preview-v1-text-bounds.json` | 850 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-preview-v2-preservation.json` | 824 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-preview-v3-preservation.json` | 949 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-preview-v4-preservation.json` | 1074 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-preview-v5-preservation.json` | 1308 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-tts-v3-request.json` | 324 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene04-tts-v4-request.json` | 347 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene05-preview-v1-preservation.json` | 719 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene05-tts-v3-request.json` | 296 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/scene05-tts-v4-request.json` | 296 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/tts-batch-20261104-input.json` | 1316 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 1건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/tts-batch-20261104-preservation.json` | 3244 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/tts-candidates-v3-input.json` | 1341 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | C, 2건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/tts-candidates-v3-measurements.json` | 4207 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |
| `scripts/tts-v4-preservation-before.json` | 2088 | 최종 승인 아님 또는 기록 확인 필요 | 없음/없음 | D, 0건 | True/True | 최종 진입점과 분리된 구형 실험 소스/설정/해시자료; 활성 최종 재현 소스는 별도 보존; 과거 실험 재검토는 Git 복원 |

## 보존 파일별 목록

| 상대경로 | 종류 | bytes | 분류 | 참조 | 근거 |
|---|---|---:|---|---|---|
| `README.md` | 기타 | 511 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `blender/concept-v1/README.md` | 기타 | 3907 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v10/README.md` | 기타 | 3445 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v11/README.md` | 기타 | 2201 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v12/README.md` | 기타 | 3217 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v13/README.md` | 기타 | 2767 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v14/README.md` | 기타 | 2706 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v15/README.md` | 기타 | 2479 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v16/README.md` | 기타 | 2357 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v17/README.md` | 기타 | 2552 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v18/README.md` | 기타 | 2493 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v19/README.md` | 기타 | 3569 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v2/README.md` | 기타 | 2653 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v3/README.md` | 기타 | 2660 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v4/README.md` | 기타 | 2933 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v5/README.md` | 기타 | 2375 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v5/before.json` | 기타 | 26922 | 반드시 보존 | A | 활성 실행 소스의 직접 경로 참조(입출력/검증 보수적 보존) |
| `blender/concept-v6/README.md` | 기타 | 2789 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v7/README.md` | 기타 | 3370 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v8/README.md` | 기타 | 3343 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `blender/concept-v9/README.md` | 기타 | 3462 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/26.11.02수정.md` | 기타 | 4603 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/26.11.05수정.md` | 기타 | 3270 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/Shorts_제작_운영가이드.md.before-safe-area-20261104.bak` | 기타 | 56119 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/approved-tts-v1.json` | 기타 | 608 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/assembly-motion-test-v1-preservation.json` | 기타 | 31999 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/assembly-motion-test-v1-qa.json` | 기타 | 2710 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/audio-path-migration-v1.json` | 기타 | 5932 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/audio-path-migration-v1.md` | 기타 | 1359 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/daesan_shorts_instructions.md.before-safe-area-20261104.bak` | 기타 | 44960 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/doormaster-body-design-reference-tts-v3.md` | 기타 | 2100 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/doormaster-pocket-door-handle-cover-v1-qa.md` | 기타 | 4721 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/doormaster-pocket-door-handle-cover-v2-composite-qa.md` | 기타 | 4197 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/doormaster-pocket-door-handle-cover-v2-final-qa.md` | 기타 | 4195 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/doormaster-pocket-door-handle-cover-v2-qa.md` | 기타 | 4913 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/final-cleanup-file-inventory-v1.json` | 기타 | 593573 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/final-cleanup-file-inventory-v2.json` | 기타 | 593970 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/final-cleanup-preflight-v1.md` | 기타 | 325250 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/final-cleanup-preflight-v2.md` | 기타 | 311390 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/full-tts-qa-v5-qa.md` | 기타 | 3162 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/git-backup-result-v1.md` | 기타 | 971 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/layered-section-test-v1-preservation.json` | 기타 | 30401 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/layered-section-test-v1-qa.json` | 기타 | 218 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/mobile-safe-area-guide-20261104.diff` | 기타 | 5450 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/motion-test-v1-preservation.json` | 기타 | 29083 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/motion-test-v1-qa.json` | 기타 | 2671 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/motion-test-v2-preservation.json` | 기타 | 30640 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/motion-test-v2-qa.json` | 기타 | 2793 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/photo-section-v2-preservation.json` | 기타 | 28858 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/photo-section-v2-qa.json` | 기타 | 85 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/pocket-door-doormaster-full-preview-v1-qa.md` | 기타 | 4356 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/pocket-door-doormaster-full-preview-v2-qa-scene01-v5-preserved.md` | 기타 | 3404 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/pocket-door-doormaster-full-preview-v2-qa.md` | 기타 | 3919 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/pocket-door-doormaster-full-preview-v3-qa.md` | 기타 | 3486 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/pocket-door-doormaster-sns-final.md` | 기타 | 3551 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/pocket-door-doormaster-sns-qa.md` | 기타 | 3584 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/realistic-section-test-v1-preservation.json` | 기타 | 30158 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/realistic-section-test-v1-qa.json` | 기타 | 209 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-02-doormaster-v1-qa.md` | 기타 | 3037 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-02-doormaster-v2-qa.md` | 기타 | 1953 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-02-safe-area-v3-qa.md` | 기타 | 3807 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-door-clean-background-v1-qa.md` | 기타 | 3046 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-door-structure-review-v1.md` | 기타 | 5220 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-doormaster-v3-qa.md` | 기타 | 4947 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-doormaster-v4-qa.md` | 기타 | 3994 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-doormaster-v5-qa.md` | 기타 | 3435 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-doormaster-v5-test-qa.md` | 기타 | 3622 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-doormaster-v6-qa.md` | 기타 | 3243 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-doormaster-v7-qa.md` | 기타 | 3040 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/scene01-handle-edgepull-v1-qa.md` | 기타 | 6021 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-edgepull-v2-qa.md` | 기타 | 3398 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-privacy-v2-qa.md` | 기타 | 5333 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-privacy-v3-qa.md` | 기타 | 6229 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-privacy-v4-qa.md` | 기타 | 5869 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-privacy-v5-qa.md` | 기타 | 3784 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-round-v2-qa.md` | 기타 | 4664 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-round-v3-qa.md` | 기타 | 3234 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-types-base-v1-qa.md` | 기타 | 5190 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-types-base-v2-qa.md` | 기타 | 4499 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-handle-types-generation-v1-qa.md` | 기타 | 3955 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v10-qa.md` | 기타 | 3630 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v4-qa.md` | 기타 | 2991 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v5-qa.md` | 기타 | 2255 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v6-qa.md` | 기타 | 2174 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v7-qa.md` | 기타 | 3692 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v8-qa.md` | 기타 | 2286 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene01-tts-v9-qa.md` | 기타 | 3356 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-assembly-motion-test-v1.md` | 기타 | 3020 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-2d-comparison-v1-qa.md` | 기타 | 2639 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-ab-comparison-v1-qa.md` | 기타 | 1522 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-concept-v1-qa.md` | 기타 | 2577 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-concept-v2-qa.md` | 기타 | 1796 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-concept-v3-qa.md` | 기타 | 2715 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-concept-v4-qa.md` | 기타 | 2433 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-preview-v1-qa.md` | 기타 | 4292 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-doormaster-preview-v2-qa.md` | 기타 | 5049 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/scene03-layered-section-test-v1.md` | 기타 | 2179 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-motion-test-v1.md` | 기타 | 3874 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-motion-test-v2.md` | 기타 | 2932 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-photo-section-v2.md` | 기타 | 2271 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-realistic-section-test-v1.md` | 기타 | 2214 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-remotion-motion-test-v1-qa.md` | 기타 | 2262 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-remotion-motion-test-v2-qa.md` | 기타 | 2511 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-remotion-motion-test-v3-qa.md` | 기타 | 2565 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-remotion-motion-test-v4-qa.md` | 기타 | 2790 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-section-concept-v1.md` | 기타 | 2158 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene03-tts-v2-qa.md` | 기타 | 5072 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene04-doormaster-preview-v1-qa.md` | 기타 | 4142 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene04-doormaster-preview-v2-qa.md` | 기타 | 3885 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene04-doormaster-preview-v3-qa.md` | 기타 | 3917 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene04-doormaster-preview-v4-qa.md` | 기타 | 3802 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/scene04-doormaster-preview-v5-qa.md` | 기타 | 2469 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/scene05-doormaster-preview-v1-qa.md` | 기타 | 3188 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `docs/section-concept-v1-preservation.json` | 기타 | 28629 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/section-concept-v1-qa.json` | 기타 | 79 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/slim-copy-manifest.json` | 기타 | 379 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/still-qa-v2.json` | 기타 | 2661 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/still-qa-v3.json` | 기타 | 2115 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/sugatsune-zl2501-official-p71.pdf` | 기타 | 484130 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/tts-candidates-v3-qa.md` | 기타 | 5174 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/tts-v4-natural-speech-qa.md` | 기타 | 6285 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `docs/visual-production-v3.md` | 기타 | 2642 | 복구용 보존 | B | 작업 이력/공식 근거/승인 판단 기록 자체 보존(기록에 등장한 결과물까지 보존한다는 뜻 아님) |
| `package-lock.json` | 기타 | 139439 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `package.json` | 기타 | 299 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/audio/full-tts-qa-v3.mp3` | TTS·오디오 | 513644 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/full-tts-qa-v3.wav` | TTS·오디오 | 1228480 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/full-tts-qa-v4.mp3` | TTS·오디오 | 495404 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/full-tts-qa-v4.wav` | TTS·오디오 | 1185268 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-review-v3.mp3` | TTS·오디오 | 59084 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-review-v3.wav` | TTS·오디오 | 137792 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v10-part-b.wav` | TTS·오디오 | 115244 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/audio/scene01-tts-v10.wav` | TTS·오디오 | 227026 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/audio/scene01-tts-v3.wav` | TTS·오디오 | 147884 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v4.wav` | TTS·오디오 | 132204 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v5.wav` | TTS·오디오 | 140204 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v6.wav` | TTS·오디오 | 159404 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v7-part-a.wav` | TTS·오디오 | 105644 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v7-part-b.wav` | TTS·오디오 | 101804 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v7.wav` | TTS·오디오 | 178762 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v8.wav` | TTS·오디오 | 203564 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v9-part-a.wav` | TTS·오디오 | 134444 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene01-tts-v9.wav` | TTS·오디오 | 198166 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene02-tts-review-v3.mp3` | TTS·오디오 | 116684 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene02-tts-review-v3.wav` | TTS·오디오 | 276144 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene02-tts-v3.wav` | TTS·오디오 | 288044 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene02-tts-v4.wav` | TTS·오디오 | 253484 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/audio/scene03-tts-review-v3.mp3` | TTS·오디오 | 121964 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-review-v3.wav` | TTS·오디오 | 288368 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-review-v4.mp3` | TTS·오디오 | 103724 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-review-v4.wav` | TTS·오디오 | 245156 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-v2.wav` | TTS·오디오 | 384044 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-v3.wav` | TTS·오디오 | 324524 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-v4.wav` | TTS·오디오 | 251564 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene03-tts-v5.wav` | TTS·오디오 | 330284 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/audio/scene04-tts-review-v3.mp3` | TTS·오디오 | 121964 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene04-tts-review-v3.wav` | TTS·오디오 | 289026 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene04-tts-v3.wav` | TTS·오디오 | 293804 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene04-tts-v4.wav` | TTS·오디오 | 399404 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/audio/scene05-tts-review-v3.mp3` | TTS·오디오 | 88844 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene05-tts-review-v3.wav` | TTS·오디오 | 208696 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene05-tts-v3.wav` | TTS·오디오 | 220844 | 반드시 보존 | A | assemble-scene01-tts-v10.py가 manifest의 실파일 SHA256을 실제 검사: 실행 검증 의존 |
| `public/assets/audio/scene05-tts-v4.wav` | TTS·오디오 | 249644 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/domus-CIS_3455-v3.jpg` | 이미지 | 47113 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/domus-CIS_7622-v3.jpg` | 이미지 | 64120 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/domus-DSL140-1-4-v3.jpg` | 이미지 | 86844 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/domus-DSL140-6-v3.jpg` | 이미지 | 21923 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/domus-SH30NI-1-1-v3.jpg` | 이미지 | 9536 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-p71-6000.png` | 이미지 | 1655645 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-section-verified-detail.png` | 이미지 | 305749 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-zl-front-lines.png` | 이미지 | 33314 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-zl-front.png` | 이미지 | 51823 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-zl-install.png` | 이미지 | 62008 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-zl-photo.png` | 이미지 | 357893 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/official-zl-section.png` | 이미지 | 70912 | 복구용 보존 | B | 실제 제품 확인·자료 출처 근거 |
| `public/assets/images/pocket-door-clean-background-v1.png` | 이미지 | 1645284 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/pocket-door-cover-photoreal-v1.png` | 이미지 | 1791874 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2-scene01-v5-preserved.png` | 이미지 | 1599230 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v2.png` | 이미지 | 1597865 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-full-mobile-qa-v3.png` | 이미지 | 1604740 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/pocket-door-doormaster-full-qa-v1.png` | 이미지 | 679168 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-full-qa-v2-scene01-v5-preserved.png` | 이미지 | 702147 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-full-qa-v2.png` | 이미지 | 726030 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-full-qa-v3.png` | 이미지 | 726972 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2-scene01-v5-preserved.png` | 이미지 | 261936 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v2.png` | 이미지 | 425930 | 복구용 보존 | B | 이전 승인 통합본 비교/모바일 검증 기록 |
| `public/assets/images/pocket-door-doormaster-scene01-compare-v3.png` | 이미지 | 329047 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/pocket-door-sh30-exterior-v1.png` | 이미지 | 506671 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/pocket-door-sh30-mask-v1.png` | 이미지 | 53539 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-doormaster-v3-qa.png` | 이미지 | 433317 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-doormaster-v4-qa.png` | 이미지 | 557191 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-doormaster-v6-qa.png` | 이미지 | 551546 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-doormaster-v7-compare.png` | 이미지 | 806827 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-doormaster-v7-mobile-qa.png` | 이미지 | 407144 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-doormaster-v7-qa.png` | 이미지 | 560765 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-handle-edgepull-v1.png` | 이미지 | 1646979 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-edgepull-v2.png` | 이미지 | 1617100 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-handle-privacy-v2.png` | 이미지 | 1624369 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-privacy-v3.png` | 이미지 | 1639727 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-privacy-v5.png` | 이미지 | 1379972 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-privacy-v6.png` | 이미지 | 1364227 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-handle-round-v2.png` | 이미지 | 1662250 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-round-v3.png` | 이미지 | 1382750 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-round-v4.png` | 이미지 | 1365476 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-handle-types-base-v1.png` | 이미지 | 1959969 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-types-base-v2.png` | 이미지 | 1667642 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene01-handle-types-base-v3.png` | 이미지 | 1393278 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-v7-0.png` | 이미지 | 1712566 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-v7-18.png` | 이미지 | 1717381 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-v7-60.png` | 이미지 | 1685735 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-v7-old-0.png` | 이미지 | 1722120 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-v7-old-18.png` | 이미지 | 1726393 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene01-v7-old-60.png` | 이미지 | 1691466 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene03-doormaster-preview-v2-qa.png` | 이미지 | 59693 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene04-doormaster-preview-v1-qa.png` | 이미지 | 79998 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene04-doormaster-preview-v2-qa.png` | 이미지 | 84992 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene04-doormaster-preview-v3-qa.png` | 이미지 | 61182 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene04-doormaster-preview-v4-qa.png` | 이미지 | 64582 | 복구용 보존 | B | 승인 원형/비생성 합성 원본·복구 기준 |
| `public/assets/images/scene04-doormaster-preview-v5-qa.png` | 이미지 | 64297 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/images/scene05-doormaster-preview-v1-qa.png` | 이미지 | 212048 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/pocket-door-doormaster-full-preview-v1.mp4` | 영상 | 10734724 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/pocket-door-doormaster-full-preview-v2-scene01-v5-preserved.mp4` | 영상 | 10998203 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/pocket-door-doormaster-full-preview-v2.mp4` | 영상 | 11014455 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/pocket-door-doormaster-full-preview-v3.mp4` | 영상 | 11036422 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene01-doormaster-v1.mp4` | 영상 | 340263 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene01-doormaster-v2.mp4` | 영상 | 172480 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene01-doormaster-v3.mp4` | 영상 | 365133 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene01-doormaster-v4.mp4` | 영상 | 893677 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene01-doormaster-v5.mp4` | 영상 | 435173 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene01-doormaster-v6.mp4` | 영상 | 451385 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene01-doormaster-v7-reproduction-v1.mp4` | 영상 | 473352 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene01-doormaster-v7.mp4` | 영상 | 473352 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene01-handle-round-hardcut-test-v1.mp4` | 영상 | 431541 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene02-doormaster-v1.mp4` | 영상 | 387706 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene02-doormaster-v2.mp4` | 영상 | 205074 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene02-doormaster-v3.mp4` | 영상 | 200982 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene03-doormaster-preview-v1.mp4` | 영상 | 183695 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene03-doormaster-preview-v2.mp4` | 영상 | 188446 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene04-doormaster-preview-v1.mp4` | 영상 | 277492 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene04-doormaster-preview-v2.mp4` | 영상 | 268015 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene04-doormaster-preview-v3.mp4` | 영상 | 239960 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene04-doormaster-preview-v4.mp4` | 영상 | 242455 | 복구용 보존 | B | 이전 승인/복귀 비교본: 사용자 승인 이력 우선 |
| `public/assets/video/scene04-doormaster-preview-v5.mp4` | 영상 | 241565 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/assets/video/scene05-doormaster-preview-v1.mp4` | 영상 | 233864 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/brand.png` | 이미지 | 5413 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2-outlined.svg` | 이미지 | 9087 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.png` | 이미지 | 249737 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.svg` | 이미지 | 3556101 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/export-text.py` | 기타 | 1146 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/font-settings-v2.json` | 기타 | 481 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/fonts/Pretendard-Black.ttf` | 기타 | 2665004 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/outline.swift` | 기타 | 1726 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/assets-v1/series-sign-v2/render.cjs` | 기타 | 325 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/doormaster-pocket-door-handle-cover-v1.png` | 이미지 | 1118288 | 복구용 보존 | B | Cover 이전 승인·레퍼런스 및 편집 자산 복구 |
| `public/covers/doormaster-pocket-door-handle-cover-v2.png` | 이미지 | 1528900 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v1.png` | 이미지 | 450380 | 복구용 보존 | B | Cover 이전 승인·레퍼런스 및 편집 자산 복구 |
| `public/covers/qa/doormaster-pocket-door-handle-1x1-v2.png` | 이미지 | 663695 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v1.png` | 이미지 | 588995 | 복구용 보존 | B | Cover 이전 승인·레퍼런스 및 편집 자산 복구 |
| `public/covers/qa/doormaster-pocket-door-handle-3x4-v2.png` | 이미지 | 874148 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v1.png` | 이미지 | 564560 | 복구용 보존 | B | Cover 이전 승인·레퍼런스 및 편집 자산 복구 |
| `public/covers/qa/doormaster-pocket-door-handle-4x5-v2.png` | 이미지 | 830339 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v1.png` | 이미지 | 646467 | 복구용 보존 | B | Cover 이전 승인·레퍼런스 및 편집 자산 복구 |
| `public/covers/qa/doormaster-pocket-door-handle-reference-compare-v2.png` | 이미지 | 655577 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/daesan-ending/fonts/Pretendard-ExtraBold.woff2` | 기타 | 793540 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/daesan-ending/fonts/Pretendard-Medium.woff2` | 기타 | 778432 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `public/daesan-ending/fonts/Pretendard-SemiBold.woff2` | 기타 | 785856 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `remotion.config.ts` | 기타 | 110 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/assemble-full-preview-v3.py` | 기타 | 2606 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/assemble-scene01-tts-v10.py` | 기타 | 2142 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/full-preview-v3-scene01-v7-preservation.json` | 기타 | 2351 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/full-preview-v3-scene01-v7-verification.json` | 기타 | 472 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/render-pocket-cover-v2.cjs` | 기타 | 604 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/render-scene01-02-safe-area-v3.cjs` | 기타 | 1979 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/render-scene01-images-v7.cjs` | 기타 | 457 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/render-scene03-doormaster-preview-v2.cjs` | 기타 | 1517 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/render-scene04-doormaster-preview-v5.cjs` | 기타 | 1528 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/render-scene05-doormaster-preview-v1.cjs` | 기타 | 1526 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/reproduce-scene01-v7.py` | 기타 | 1799 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/reproduction-build-v7.py` | 기타 | 3357 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/reproduction-environment-v1.txt` | 기타 | 107 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/reproduction-source-hashes-v1.json` | 기타 | 899 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/reproduction-v7-before.json` | 기타 | 16128 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/reproduction-verification-v1.json` | 기타 | 3410 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/scene01-tts-v10-edit.json` | 기타 | 444 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `scripts/scene01-tts-v10-preservation.json` | 기타 | 3051 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/doormaster-pocket-door-cover-v1.tsx` | 기타 | 1846 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/doormaster-pocket-door-cover-v2.tsx` | 기타 | 1846 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/fonts.ts` | 기타 | 846 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/index.tsx` | 기타 | 7462 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene01-02-doormaster-v1.tsx` | 기타 | 5458 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene01-02-safe-area-v3.tsx` | 기타 | 5393 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/scene01-handle-types-v3.tsx` | 기타 | 1361 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene01-handle-types-v4.tsx` | 기타 | 1454 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene01-handle-types-v5.tsx` | 기타 | 1454 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene01-images-v7.tsx` | 기타 | 1509 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/scene01-subtitle-v6.tsx` | 기타 | 1509 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene02-doormaster-v2.tsx` | 기타 | 5191 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-assembly-motion-test-v1.tsx` | 기타 | 4657 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-compare-v5.tsx` | 기타 | 1919 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-concept-v6.tsx` | 기타 | 1520 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-2d-comparison-v1.tsx` | 기타 | 1880 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-concept-v1.tsx` | 기타 | 4478 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-concept-v2.tsx` | 기타 | 4195 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-concept-v3.tsx` | 기타 | 4182 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-concept-v4.tsx` | 기타 | 5470 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-mismatch-v1.tsx` | 기타 | 4189 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-preview-v1.tsx` | 기타 | 2559 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-doormaster-preview-v2.tsx` | 기타 | 3117 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/scene03-layered-section-test-v1.tsx` | 기타 | 6211 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-motion-test-v1.tsx` | 기타 | 3643 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-motion-test-v2.tsx` | 기타 | 6452 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-overlay-v4.tsx` | 기타 | 2746 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-photo-section-v2.tsx` | 기타 | 2850 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-realistic-section-test-v1.tsx` | 기타 | 5547 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-remotion-motion-test-v1.tsx` | 기타 | 2757 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-remotion-motion-test-v2.tsx` | 기타 | 4161 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-remotion-motion-test-v3.tsx` | 기타 | 4297 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-remotion-motion-test-v4.tsx` | 기타 | 4070 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene03-section-concept-v1.tsx` | 기타 | 3084 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene04-doormaster-preview-v1.tsx` | 기타 | 1804 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene04-doormaster-preview-v2.tsx` | 기타 | 1812 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene04-doormaster-preview-v3.tsx` | 기타 | 1514 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene04-doormaster-preview-v4.tsx` | 기타 | 1790 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/scene04-doormaster-preview-v5.tsx` | 기타 | 1734 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/scene05-doormaster-preview-v1.tsx` | 기타 | 1255 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |
| `src/sh30-exploded-concept-v1.tsx` | 기타 | 5208 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/sh30-exploded-concept-v2.tsx` | 기타 | 5956 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/sh30-internal-v1.tsx` | 기타 | 2280 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/sh30-pre-assembly-v1.tsx` | 기타 | 1420 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/sh30-recess-pair-v1.tsx` | 기타 | 3381 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `src/stills-v3.tsx` | 기타 | 5900 | 복구용 보존 | B | 이전 소스 복구용. 최종 실행 입력과 구분; 과거 자산 제거 후 역사 소스 실행은 Git 복원 필요 |
| `tsconfig.json` | 기타 | 356 | 반드시 보존 | A | 최종 출력·활성 제작 입력/검증·필수 QA/설정 |

## 승인 요청 및 검증 범위

위 정확한 파일별 삭제 추천 목록에 대한 사용자 승인 대기. 실제 삭제/이동/Git변경0건. 삭제 전 현재 크기·해시 재확인 필요. 최종 실행은 기존 재현 PASS와 현재 진입점 추적 기준이며 이번 재렌더하지 않음. 과거 실험 소스는 최종 소스와 분리했으므로 과거 소스의 로컬 재실행까지 보장하는 정리는 아님. 최종 재현 필수 입력은 보존한다. 파일 분류에 대한 새 보고서 v2만 작성, 기존 v1 보존.
