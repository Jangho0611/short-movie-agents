# Scene 2 v3 — YA-07E 공식 이미지 교체 (2026-10-27)

내부 검토용. Scene2 엠보스 구간만 변경. 기존 v1/v2, 다른 Scene, TTS, 간판, 엔딩 보존. 전체 Preview 미렌더.

## 출처·식별
- 공식 카탈로그: https://s3.ap-northeast-2.amazonaws.com/younglim-bucket/4f49f537-04e9-416b-8d38-62572244a1d0.pdf
- 인쇄140~141쪽 / PDF73번째 페이지. 캡션 'YA-07E 엠보스 도어 | PX454 선셋스톤', 핸들 YDHS-034S 확인.
- 사진은 손잡이 주변의 YA-07E 표면 클로즈업. 문짝 전체 이미지는 해당 페이지에 없음. 인접138~139쪽 전체 사진은 YA-07S여서 제외.
- PDF 원본 보존: docs/younglim-2026-27-catalog-source.pdf
- 직접 추출 원본: public/assets/images/younglim-ya07e-px454-catalog-native.jpg (1304×1464, DeviceCMYK, DCTDecode 원시 스트림).
- 영상용: public/assets/images/younglim-ya07e-px454-display.png (1304×1464). raw CMYK를 브라우저에서 직접 표시하면 반전되어, pypdf의 PDF 이미지 해석 후 RGB 표시용 PNG로 변환. 임의 색보정·채도·선명도·텍스처 필터 없음. PDF 색상관리/브라우저/실물의 완벽한 일치는 보장하지 않음.
- 사진에 카탈로그 문자·라벨 포함 없음. 출처/제품명은 Remotion 자막으로 별도 표시.
- 외부 홍보 영상 재사용 허락 미확인. 내부 검토용만 사용.

## 변경
197f (6.566667초)부터 기존 추상 도식을 YA-07E 원본 사진 전체 구도로 교체. objectFit contain으로 비율 유지. 손잡이와 표면 결감이 이미 보이므로 추가 확대·깊이 강조 없음. 요청한 '문짝 전체→확대'는 확인된 전체 제품 사진이 없어 구현하지 않고 한계 보고.
나머지 화면/타이밍/자막 디자인 동일. 엠보스 제목 및 '입체적인 표면 질감을 / 살린 마감' 유지. 하단은 YA-07E·PX454 출처 표시로 수정.

## QA
- 영상286f/30fps=9.533333초; MP4컨테이너9.578667초(AAC 패딩).
- 1080×1920 H264/AAC. 전체 디코딩 오류0.
- -20.2LUFS, True Peak -4.6dBTP, 클리핑 없음.
- v2/v3 디코딩 오디오 PCM 완전 일치. 승인 MP3 해시 및 기존 기록 대상 파일 보존 확인.
- 렌더 still에서 YA-07E 사진 비율·색상 표시·표면 가독성·자막 겹침/잘림 확인. 임의 엠보 깊이·구조 묘사 없음.
- TTS 싱크는 기존197f 유지. 직접 전체 청취 미수행이며 기존 자동정렬의 오차 가능성 유지. 정확한 음절별 싱크 PASS로 표기하지 않음.

결과: public/assets/video/scene02-preview-v3.mp4
세부 QA: scene02-v3-qa.json. 이미지 출처/해시: ya07e-image-source-v3.json.
사용자 검토 대기. 다른 Scene 확대 적용 금지 유지.
