# TTS v5 최초 생성 / 청취 QA v1

상태: 사용자 청취 승인 대기. 발음·억양·자연스러움 미검증.

기존 scripts/generate_tts.py + Google ADC 사용. Alnilam / speakingRate 1.0 / pitch 미지정. 승인 원문 일치 확인, 각 Scene 1회 합성. 최초 DNS 실패는 인증 단계이며 합성 전 실패.

기존 승인 도어 영상의 PCM 순서 연결 관례 적용. 추가 무음·트림·음량/속도/피치 조정 없음. 통합본은 엔딩을 제외한 Scene 1~6만 192kbps MP3로 연결.

| 파일 | ffprobe 길이(초) | LUFS | Sample Peak dBFS | True Peak dBTP | 오버레벨 |
|---|---:|---:|---:|---:|---|
| scene01-tts-v1.mp3 | 4.104 | -20.7 | -4.66 | -4.7 | 검출 없음 |
| scene02-tts-v1.mp3 | 5.904 | -20.6 | -2.33 | -2.3 | 검출 없음 |
| scene03-tts-v1.mp3 | 5.376 | -18.9 | -0.46 | -0.5 | 검출 없음 |
| scene04-tts-v1.mp3 | 6.864 | -19.3 | -2.52 | -2.5 | 검출 없음 |
| scene05-tts-v1.mp3 | 7.224 | -19.4 | -1.28 | -1.3 | 검출 없음 |
| scene06-tts-v1.mp3 | 6.264 | -20.6 | -3.24 | -3.2 | 검출 없음 |
| full-tts-qa-v1.mp3 | 35.736 | -20.3 | -0.90 | -0.9 | 검출 없음 |

모든 7개 파일 전체 디코딩 PASS. 클리핑은 디코딩된 샘플의 full-scale 도달 수와 true peak를 참고한 기계 검사이며 청감상 왜곡 판정은 아님. 음량 보정은 하지 않음.
길이는 ffprobe 파일 전체 길이이며 실제 음절 지속시간과 동일하지 않음. JSON에 디코딩 샘플 기준 길이도 기록. 무음 검출(-30dB/0.1초)은 참고용이며 자연스러운 발화 판정에 사용하지 않음.

청취 확인: 로트/색차 발음, Scene 4 쉼표 앞뒤 호흡, Scene 5 두 문장 연결, Scene 6 결론 억양 및 모든 Scene 경계의 연결감.

입력: docs/tts-v5-input-v1.json. 설정·파일별 SHA256·실측 길이·음량·무음 참고 결과: docs/tts-v5-generation-qa-v1.json.

## SHA256
- scene01-tts-v1.mp3: `f3fc858c1b6e49b2384e1881d2293fd2da33b552b4e27a118a2db6153e8d4a92`
- scene02-tts-v1.mp3: `7588d69858f2b2b99c29c585adbd27c42c3799546a4aaf5d9341e6daf942004f`
- scene03-tts-v1.mp3: `0815c471ddd1adc2d7193d1987c49ea60fa2ea1bd97251facadc8a8ce5786e7c`
- scene04-tts-v1.mp3: `28a2d5f501bbab01f54728a962c9cb0e509c63cb3fbf55b7b797b8701d995680`
- scene05-tts-v1.mp3: `43800cfd10fecfb2e099edeea1c08fc25023a786e19ca782cd774ea9fb54f080`
- scene06-tts-v1.mp3: `3a66bfc5bdf2fd458f98e7920a8eedd050dde8f527f1e57ac2a951012605a596`
- full-tts-qa-v1.mp3: `b3b916d3b9c68de2dd707f32370f11f3989aac55d6681739913cf3aabc0a52c7`
