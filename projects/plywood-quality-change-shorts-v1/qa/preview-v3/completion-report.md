
## 본편 6개 Scene 재구성 및 Preview v3

- 사용자 첨부 최종 화면 기획 v3와 승인 TTS v8 구성 적용. 별도 src/index-v3.tsx 및 preview-data-v3.json 사용, 기존 v1/v2 구현과 자산 보존.
- 승인 음원: Scene 1 scene01-tts-v2.mp3, Scene 2~6 scene02~06-tts-v7.mp3. 원본 속도/문구/파일 변경 없음. 개별 실측 합계 37.952초이며 MP3 통합 청취본 컨테이너 길이와 소폭 차이. 각 Scene에 6프레임과 프레임 반올림 여유 추가.
- Scene 길이: 1 173프레임/5.766667초, 2 119/3.966667초, 3 206/6.866667초, 4 215/7.166667초, 5 220/7.333333초, 6 245/8.166667초. 본편 1178프레임/39.266667초. 승인 엔딩 170프레임 포함 전체 1348프레임/44.933333초.
- Scene 1: 승인 창고 clean-v2.jpg, 기존 Hook/레이아웃 재사용 및 승인 35년 보조 문구 추가. 첫 프레임부터 Hook 표시.
- Scene 2: 기존 stack/edge 실사 레이아웃 유지, 승인 질문 사용. 왜 발화 약 1.923초에 맞춰 58프레임 강조.
- Scene 3: 승인 소경목 PNG → 승인 조림지 PNG. 125프레임/4.166667초에 Hard Cut 및 자막 동시 전환. 전체 기준 417프레임/13.900초. whisper.cpp DTW 인식과 음원 파형을 교차 확인했으며 그래서 발화 시작 약 4.143초에 정렬. 자동 정렬 특성상 약 1프레임 경계 오차 가능. 실제 연구 원목/현장 사진이 아닌 AI 재현임을 명시하고 과거 인도네시아 연구 사례 및 ITTO 출처 표시.
- Scene 4: 원목 → 단판 절삭 → 건조 → 접착 → 합판 순서. 단판 86프레임/2.8667초, 건조 134/4.4667초, 접착 151/5.0333초 순차 강조. 과거 인도네시아 연구 사례로 한정.
- Scene 5: 승인 edge 실사, 원목 특성 + 제조 과정 + 제품 등급 그래픽. 118/143/168프레임에 순차 강조. 소경목=저품질 일반화 방지, 사진은 접착 성능이나 특정 제품 품질 판정 근거가 아님을 설명.
- Scene 6: 승인 stack/edge 실사, 108/124/157프레임에 용도/제품 등급/실제 제품 상태 순차 강조. 사양서·시험자료 확인, 육안 확인 한계 표시.
- 요청서의 stack/edge .jpg는 실제 존재하는 승인 원본 .png를 사용. 이미지 파일 변환/변경 없음. 실제 제품 사진은 종횡비 유지 contain, AI 원목 사진은 비율 유지 중앙 크롭.
- Main Notion: 기존 Pretendard/베이지/차콜/대산 그린/기본 여백 유지. 핵심 자막 최대 2줄. 7개 대표 렌더 프레임 육안 QA 완료.
- 엔딩 직접 의존 파일 14개 등록 SHA256 일치. 승인 MP4 영상 스트림 복사로 연결, 마지막 170 RGB 프레임 승인본과 픽셀 동일. 로고/모션/문구/대표번호 재설계 없음.
- 오디오는 승인 원본에서 무속도변경으로 조립, Scene 사이 뒤쪽 무음만 추가. 최종 MP4용 AAC 인코딩 수행(원본 AAC 바이트 동일성 주장이 아님). 전체 정확한 프레임 위치에서 각 승인 음원과 PCM 상관계수 0.999969 이상, 엔딩 0.9999936.
- QA PASS: 7개 출력 1080×1920/30fps, 지정 프레임 수, A/V 시작 0초, 전체 오디오/비디오 디코딩 오류 없음. 기존 자산/음원/Preview v1·v2 등 83개 SHA256 보존.
- 결과: public/assets/video/scene01-preview-v3.mp4 ~ scene06-preview-v3.mp4 및 plywood-quality-change-preview-v3.mp4. 무음 조립 중간본도 동일 video 폴더에 보존.
- 신규 구현: src/index-v3.tsx, src/preview-data-v3.json, scripts/assemble-preview-v3.py, scripts/qa-preview-v3.py, scripts/contact-preview-v3.py. QA: qa/preview-v3/qa-results.json, rendered-contact.png 및 음원 정렬 증거.
- ITTO 2010 기술 보고서: https://www.itto.int/files/itto_project_db_input/2248/Technical/CFC-ITTO-80%20PD%2040-00%20Technical%20Report%20on%202.1.4%20Appropriate%20of%20Products%20Manufacture%20from%20SDL.pdf (2010년 보고서, 합판 부분 대경목 공급 및 소경목 제조 연구). 화면은 현재 국내 취급 합판 전체 상황으로 일반화하지 않음.
- TTS/이미지 생성, 공통 가이드 수정, Cover/SNS 제작, 기존 파일 삭제/이동, Git commit/push 없음. 미해결 기술 오류 없음. 최종 청취와 사용자 검토/승인 대기.
