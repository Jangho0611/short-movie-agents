# Preview v6 — 내부 검토용 표시 제거
2026-10-27. 전체영상 사용자최종승인대기.

출력 public/assets/video/door-finish-color-difference-preview-v6.mp4
43.7초/1311프레임/1080×1920/30fps/H.264 AAC.

## 변경 범위
승인소스의 복사본에서 ‘내부 검토용’ div만 제거. 영상위마스킹/패치합성아님. 원본소스 및영상 모두보존.
PreviewV2Scenes→PreviewV6Scenes, Scene2V7Frame→Scene2V8Frame, Scene2V7→Scene2V8, Scene3V6→Scene3V7. Scene2 import경로변경외 표시요소를뺀문자열과완전히같음을확인.
본편5개모두표시가있어새버전렌더: Scene1v3(4.2초),Scene2v8(9.533333초),Scene3v7(8.5초),Scene4v3(9초),Scene5v3(6.8초). 각각승인1v2/2v7/3v6/4v2/5v2의디자인유지. 승인엔딩170f/5.666667초는기존영상재사용.

## 전후 QA
원본Scene대새Scene 전체프레임비교. QA에서만텍스트영역x810–970,y150–215를비교제외하고SSIM측정: Scene1 .996365,Scene2 .999457,Scene3 .998830,Scene4 .999874,Scene5 .999768. 최종영상에는마스크미적용. H264재렌더압축으로영역밖픽셀까지완전동일은아님. 소스동일성검사와대표프레임시각검사로다른레이아웃/이미지/자막/모션변경없음을확인.
전체파일추출360×640 대표7프레임(Scene2두구간포함)직접확인: 본편표시제거,자막잘림/겹침없음. 표시문구제거소스가전체본편기간에적용됨. 엔딩표시없음/원본동일.
전체디코딩오류0, -19.9LUFS/TruePeak -0.5dBTP,클리핑없음. 전체디코딩PCM은v5와바이트동일. 승인MP3원본에서동일길이로AAC조립,속도/피치/호흡변경없음. 엔딩170개디코딩프레임완전동일.
모든기존src/public파일SHA256변경0: 기존Previewv5/모든이미지/음원/간판/엔딩보존. 상세preview-v6-qa.json,preview-v6-preservation.json.
직접전체실시간청취미수행: 자연스러움은PASS로판정하지않음. 기존무음과읽기시간유지. 표시제거가재사용권한확인을의미하지않음.
Cover/SNS/공통가이드/Git/삭제이동작업없음. 사용자최종승인대기.
