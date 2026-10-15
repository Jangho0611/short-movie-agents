# DoorMaster Ep01 최종 정리 계획 v1

계획 작성만 수행. 휴지통 이동·삭제·Git 변경은 미승인/미실행.

## 합계

{
  "candidate_scope": 111,
  "A_recommend_count": 105,
  "A_bytes": 91464925,
  "B_keep_count": 6,
  "C_within111": 0,
  "C_output_outside111_count": 15,
  "C_output_outside111_bytes": 709572,
  "tracked_A_count": 58,
  "groups": {
    "output": {
      "count": 58,
      "bytes": 37235148
    },
    "covers_qa": {
      "count": 40,
      "bytes": 42019785
    },
    "images_tests": {
      "count": 7,
      "bytes": 12209992
    }
  },
  "project_bytes_before_plan_files": 181727957,
  "project_after_A_before_plan_files": 90263032,
  "original_files": 292,
  "original_bytes": 159692041,
  "original_missing_relative_paths": [
    {
      "path": "public/covers/.DS_Store",
      "bytes": 8196
    }
  ]
}

111개 내 A105/B6/C0. 별도 output QA15개는 후보 확대 없이 C 보류. QA 판정 MD·JSON5개 및 모든 지정 승인 자산은 후보 밖에서 계속 보존.

## 보존·원본·Git 한계

기존 SHA256 PASS 기록과 현재 존재/크기를 대조했고 전체 해시를 반복 계산하지 않았다. 이번 신규 전체 무결성 PASS라는 의미가 아니다.
기존 원본의 Monorepo 미존재 상대경로는 아래 summary 참조(OS 파일). 내용 고유성 전체 재검사는 하지 않았다. 과거 커버 v3/v4의 원본 절대경로가 남아 있어 기존 원본 폴더 정리 불가. 표준 경로 통합은 아직 Git 반영 전이다. 다른 프로젝트 변경은 유지한다.

## 후보111개 파일별 판단

|분류|상대경로|bytes|Git 추적|표준 보존본|판단 근거|
|---|---|---:|---|---|---|
|A|output/slim-frame-reform-preview-v5.mp4|6941149|True|public/assets/video/slim-frame-reform-final-approved-v5.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/slim-frame-reform-preview-v4.mp4|6950806|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/slim-frame-reform-preview-v1.mp4|6142460|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene2-qa.svg|3592|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene6-qa.png|91484|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene02-v1.mp4|121389|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene4-qa.png|98935|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene06-v1.mp4|171717|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene4-qa.svg|4161|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene6-qa.svg|3201|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene2-qa.png|82332|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene04-v1.mp4|147125|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene01-v1.mp4|162210|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene3-qa.svg|3764|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene1-qa.svg|5938|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene5-qa.png|99314|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene03-v1.mp4|137706|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene5-qa.svg|4130|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene1-qa.png|88071|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene05-v1.mp4|186894|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene3-qa.png|92713|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v4/scene04-v4.mp4|132027|True|public/assets/video/scene04-final-approved-v4.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v5/scene05-v5.mp4|160861|True|public/assets/video/scene05-final-approved-v5.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene2-qa.svg|3949|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene6-qa.png|91484|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene4-qa.png|99369|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene4-qa.svg|4649|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene6-qa.svg|3525|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene2-qa.png|82904|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene3-qa.svg|4088|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene1-qa.svg|6262|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene5-qa.png|101304|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene5-qa.svg|4617|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene1-qa.png|88071|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v2/scene3-qa.png|92713|False|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/cover-v2-grid-adjusted.png|2955472|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/doormaster-slim-frame-cover-reference-v1.png|447822|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/doormaster-slim-frame-cover-v1.png|447703|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-background-v1-product-qa.png|802326|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-sign-v1-vs-v2.png|138257|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v4-4x5.png|1591716|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/mobile-reference-v1.png|83820|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-sign-v1-reference-comparison.png|284216|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|B|public/covers/qa/cover-v5-mobile.png|274550|True|—|사용자 지정 최종 승인 QA 증거|
|B|public/covers/qa/cover-v5-4x5.png|1493287|True|—|사용자 지정 최종 승인 QA 증거|
|A|public/covers/qa/cover-v4-vs-v5.png|1046185|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-adjusted-3x4-mobile.png|293804|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-vs-v3.png|1162413|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-background-v1-comparison.png|804619|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v4-1x1.png|1291369|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-mobile.png|278387|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|B|public/covers/qa/cover-v5-3x4.png|1606851|True|—|사용자 지정 최종 승인 QA 증거|
|A|public/covers/qa/cover-v3-vs-v4.png|672861|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v4-3x4.png|1706782|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-profile-3x4-mobile.png|197608|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v5-1x1.png|1190764|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/central-square-reference-v1.png|432818|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v3-4x5.png|1531323|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v4-mobile.png|274774|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-restoration-detail-v1.png|217393|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-extraction-checker-v1.png|341553|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-central-square.png|1245053|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-adjusted-3x4.png|2448154|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|B|public/covers/qa/doormaster-sign-v2-reference-comparison.png|291080|True|—|사용자 지정 최종 승인 QA 증거|
|A|public/covers/qa/cover-v2-adjusted-4x5-mobile.png|278405|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-sign-v1-transparency-qa.png|136556|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|B|public/covers/qa/cover-v5-reference-comparison.png|1177181|True|—|사용자 지정 최종 승인 QA 증거|
|A|public/covers/qa/cover-v2-profile-3x4.png|1637470|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/doormaster-sign-recompose-test-v1.png|2187471|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|B|public/covers/qa/doormaster-sign-v2-transparency-qa.png|134227|True|—|사용자 지정 최종 승인 QA 증거|
|A|public/covers/qa/mobile-v1.png|83886|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v4-reference-comparison.png|1177092|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/central-square-v1.png|435258|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v3-1x1.png|1231496|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/reference-vs-cover-v2.png|1192554|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-adjusted-4x5.png|2306984|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-feed-4x5-mobile.png|184348|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-feed-4x5.png|1533079|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v2-grid-adjusted.svg|5833618|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v3-mobile.png|267737|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/covers/qa/cover-v3-3x4.png|1646639|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/assets/images/doormaster-series-sign-v1.png|259586|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/assets/images/doormaster-sign-extraction-test-v1.png|1941497|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/assets/images/doormaster-background-restoration-test-v1.png|1696701|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/images/scene04-A-before-v1.png|2306113|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/images/scene04-A-before-v2.png|1904217|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/images/scene04-B-after-v2.png|2026379|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|public/images/scene04-B-after-v1.png|2075499|True|—|후속 승인본으로 대체된 초기 후보 또는 과거 QA/시험 출력; 승인 최종 자산 아님|
|A|output/preview-v1/scene01-timed-v1.mp4|160762|False|public/assets/video/scene01-timed-v1.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v1/scene02-timed-v1.mp4|121535|False|public/assets/video/scene02-timed-v1.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v1/scene03-timed-v1.mp4|138746|False|public/assets/video/scene03-timed-v1.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v1/scene04-timed-v1.mp4|146486|False|public/assets/video/scene04-timed-v1.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v1/scene05-timed-v1.mp4|188014|False|public/assets/video/scene05-timed-v1.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v1/scene06-timed-v1.mp4|204047|False|public/assets/video/scene06-timed-v1.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene01-v2.mp4|141782|True|public/assets/video/scene01-v2.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene02-v2.mp4|112208|True|public/assets/video/scene02-v2.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene03-v2.mp4|119005|False|public/assets/video/scene03-v2.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene04-v2.mp4|138930|False|public/assets/video/scene04-v2.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene05-v2.mp4|170260|True|public/assets/video/scene05-v2.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene04-v3.mp4|131182|False|public/assets/video/scene04-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene05-v3.mp4|170260|False|public/assets/video/scene05-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/slim-frame-reform-preview-v2.mp4|6011942|False|public/assets/video/slim-frame-reform-preview-v2.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/slim-frame-reform-preview-v3.mp4|5979517|False|public/assets/video/slim-frame-reform-preview-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene3-qa.png|92805|False|public/assets/images/scene03-preview-v3-qa.png|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v4/scene04-motion-review.png|28607|False|public/assets/images/scene04-preview-v4-motion-review.png|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v5/scene04-scene05-comparison-v5.png|68946|False|public/assets/images/scene04-scene05-preview-v5-comparison.png|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene02-v3.mp4|111181|True|public/assets/video/scene02-final-approved-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene06-v3.mp4|163395|True|public/assets/video/scene06-final-approved-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene01-v3.mp4|133380|True|public/assets/video/scene01-final-approved-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v3/scene03-v3.mp4|123849|True|public/assets/video/scene03-final-approved-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|
|A|output/preview-v2/scene06-v2.mp4|163395|True|public/assets/video/scene06-final-approved-v3.mp4|표준 보존본으로 참조 이전 완료; 기존 output 복사본|

모든 후보의 실행 입력 직접 참조는 없음. 해시·직접 참조 검사 결과는 JSON 각 행에 유지. A항목도 사용자 명시 승인 전 이동 금지.

## 범위 밖 output 판단 보류

|상대경로|bytes|
|---|---:|
|output/preview-v3/scene4-qa.png|99397|
|output/preview-v3/scene4-qa.svg|4921|
|output/preview-v3/scene3-qa.svg|4360|
|output/preview-v4/scene04-frame-0.png|98197|
|output/preview-v4/scene04-frame-0.svg|5104|
|output/preview-v4/scene04-frame-51.png|99397|
|output/preview-v4/scene04-frame-90.png|98396|
|output/preview-v4/scene04-frame-68.png|99510|
|output/preview-v4/scene04-frame-68.svg|5149|
|output/preview-v4/scene04-frame-90.svg|5104|
|output/preview-v4/scene04-frame-51.svg|5102|
|output/preview-v5/scene05-first.svg|4663|
|output/preview-v5/scene04-last.svg|5104|
|output/preview-v5/scene04-last.png|98396|
|output/preview-v5/scene05-first.png|76772|

## 실행 전 승인 범위

A105개 정확한 경로만 작업별 휴지통 이동 검토. B6개와 QA판정5개, 범위밖 C15개는 제외. 추적 후보58개 삭제 커밋은 별도 승인. 공통·타 프로젝트 변경 포함 금지. 휴지통 이동은 디스크 여유 확보가 아니며 아래 예상치는 프로젝트 파일 논리 크기이다.
