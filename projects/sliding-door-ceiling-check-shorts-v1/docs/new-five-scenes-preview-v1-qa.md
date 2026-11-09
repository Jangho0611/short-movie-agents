# 신규 5 Scene 전체 Preview v1 QA
최종본 아님. 기존 4 Scene Preview 파일명 충돌로 신규 전체본을 public/assets/video/sliding-door-ceiling-check-new-five-scenes-preview-v1.mp4로 저장. 기존 파일 보존. 독립 Remotion entry: src/NewFiveScenesPreviewV1.tsx.
|Scene|승인 이미지(PNG)|승인 TTS(MP3)|영상 프레임/초|전체 시작~종료(초)|로컬 발화 검출(초)|
|---|---|---|---|---|---|
|1|new-scene01-hook-v2|new-scene01-tts-v4-b|126 / 4.200|0.000~4.200|0.361–3.938|
|2|new-scene02-real-v3-a / new-scene02-finished-v3-candidate / new-scene02-result-v1|new-scene02-tts-v3|270 / 9.000|4.200~13.200|0–8.976*|
|3|new-scene03-real-comparison-v2|new-scene03-tts-v3|291 / 9.700|13.200~22.900|0.710–9.486|
|4|new-scene04-hardware-v2|new-scene04-tts-v3|189 / 6.300|22.900~29.200|0.240–6.102|
|5|new-scene05-checklist-v1|new-scene05-tts-v2|312 / 10.400|29.200~39.600|0.236–10.177|
|엔딩|daesan-headquarters-ending-approved-v1.mp4|승인 MP4 내장 AAC|170 / 5.667|39.600~45.267|재사용|
음원은 각 Scene 로컬 0초에 배치. 발화 경계는 승인 MP3의 −40 dB/80 ms 검출 근사. *Scene 2는 기준 이상의 앞뒤 무음이 없어 파일 전체로 표기; 정확한 음성학적 단어 위치가 아님. 음원 합 39.504초. 본편 1188f/39.600초, 말미 프레임 정렬 여백 합 0.096초.
## 연출 및 싱크
1: 첫 프레임부터 완성형 정지 Hook 유지. 2: 내부 저레벨 2.492~3.330초 및 5.259~5.980초에 맞춰 로컬 92f/3.067초와 174f/5.800초에 하드 컷. 전체 시각은 7.267초와 10.000초. 2-C 결과 첫 줄 유지 후 로컬 183~190f에 철거·재공사와 밑줄 노출. 3: 두 상태를 동시에 유지. 손·공구 및 반출 질문은 TTS의 작업 공간을 구체화하며 정비 가능 단정 없음. 4: 접점 확대와 라벨 정지 유지, 댐퍼는 사진 밖 역할 설명. 상태에 따라 조정 가능 문구와 필요시 점검·교체 TTS는 모순 없음. 5: 승인 이미지 위 웜화이트 마스크로 30~37f,75~83f,151~159f에 1·2·3항목 공개. 결론 249~259f에 공개 후 홀드. 새 자막·기계 동작 없음.
## 엔딩
docs/DAESAN_ENDING.md 및 공용 asset-sha256.json 기준 본사 원본 MOV·normal-speed-hold·로고·Pretendard 3종·ending-approved-v3.mp3·승인 MP4 확인. DaesanEnding.tsx 및 approved의 Overlay/brief/tokens/fonts는 프로젝트 경로 접두사를 제외하면 공용 소스와 동일. canonical MP4 SHA256 2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5. 170f/30fps 그대로 연결, 별도 TTS 중복 없음.
## 검증
초기 Remotion mux의 음성 정렬 불일치를 파형 대조로 발견. 이번에 생성한 Scene MP4에만 승인 MP3를 0초부터 다시 mux, 영상 스트림은 copy. 승인 음원 편집 없음. 전체본은 같은 승인 음원을 직접 직렬 연결했고 프레임 길이 차이만 말미 무음 처리. 최종 AAC 재인코딩으로 바이트 동일성은 아님.
모든 개별 영상/오디오 디코딩, 각 장면과 전체본의 프레임 수 대조. 전체 영상·오디오 끝까지 디코딩 정상. 전체 1080×1920 CFR 30 H.264 High/yuv420p/BT.709, AAC 48kHz stereo. 전체 1358프레임 / 45.266667초, 트루피크 -3.7 dBTP. 전체본 각 구간의 승인 음원 대비 모노 파형 상관계수 [0.99998, 0.999982, 0.999983, 0.999962, 0.99999, 0.99999]. 오디오 클리핑 징후 없음. 전체 프레임 축소 RGB 비교 및 주요 전환 전후 프레임 직접 검토. Scene 2/5 마스킹 중 의도적 노출 외 잘림/중복 자막 없음. 각 장면 종료 화면·엔딩 전화번호 확인.
입력 자산 144개 작업 전후 해시 동일. Scene 3→4 같은 원본 재사용이나 비교 구도에서 연결부 클로즈업으로 전환됨. 실제 실기기 1배속 재생·플랫폼 UI·청취 및 의미 단위 싱크는 자동 PASS 처리하지 않음. 사용자 승인 전 Final/Cover/SNS/정리/Git 진행 없음.
