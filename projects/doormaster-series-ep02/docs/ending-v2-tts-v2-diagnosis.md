# 신규 공통 엔딩 후보 v2 진단

v1 실제 payload: docs/ending-v2-tts-request.json. input.text에 확정 대본 1회, input.prompt에 스타일 지시만 분리 전달. voice.languageCode=ko-KR, voice.name=Alnilam, voice.modelName=gemini-2.5-flash-tts, audioConfig.audioEncoding=LINEAR16. 대본 중복 전달, pitch 또는 미확인 수치 파라미터 없음. 인증정보를 기록하거나 출력하지 않음.

공식 규격 확인: https://docs.cloud.google.com/text-to-speech/docs/gemini-tts (SynthesisInput text/prompt 분리, Gemini 2.5 Flash TTS, Alnilam, 한국어, LINEAR16 지원). 요청 형식 오류는 발견되지 않음.

로컬 Whisper small 한국어 전사 결과 v1은 처음 확정 대본 발화 후 input.prompt의 '본편의 밝고 또렷한 설명…', '문장을 자연스럽게 연결하고…', '지나치게 차분한 내레이션…', '대본만 정확히…' 등을 발화한 뒤 목표 대본을 다시 발화. 전사 오자는 존재하나 스타일 지시 발화/대본 반복의 강한 증거. 모델 출력의 지시 누출로 분류하며 내부 원인은 확정하지 않음. 생성 요청 필드는 정상. 전사 파일: ending-v2-tts-v1-transcript.txt.

사용자 지정 짧은 스타일 지시로 줄여 신규 합성 1회. 재시도 없음. 실제 payload와 응답 형식은 ending-v2-tts-v2-request.json, ending-v2-tts-v2-response.json. API의 RIFF/WAVE 응답 바이트 그대로 보존. 24kHz/16bit/mono, 3.570958초. 원본 게인/속도/피치/길이 변경 없음.

v2 로컬 전사: '자제 선택이 고민된다면 대산이 도와드립니다.' 문장 1회만 인식. 요청 원문은 '자재'이며 ASR의 자제 표기를 합성 대본 변경 또는 정확한 발음 판정으로 취급하지 않음. 스타일 지시/반복은 인식되지 않았으나 비언어적 잡음, 감정/발음/자연스러움은 최종 청취 승인 대기.

무음(-40dB, 최소0.1초): 시작0.193958초, 중간1.881917~2.045292초(0.163375초), 끝3.385750~3.570958초(0.185208초). 1초 이상 없음. 마지막 유의 신호 약3.386초, 5.666667초 엔딩 끝까지 약2.281초. 파일 자체 종료 뒤 약2.096초. 기존4.854초보다1.283042초 짧음. 길이상 엔딩 배치 가능, 기존 자막 모션과의 실제 일치는 영상 단계에서 별도 검토.

신규 음성 -15.1 LUFS / sample peak -1.237740dBFS / true peak -1.1dBTP / RMS -15.001811dBFS / 무음 제외 RMS -14.286277dBFS / 풀스케일 샘플0 / 전체 디코딩 오류0. Scene5 -16.7LUFS로 차이+1.6LU. 후속 믹스에서 엔딩 -1.6dB를 검토할 수 있으나 이번에는 적용하지 않음.

통합 QA는 Scene5 PCM + 537 samples(0.022375초) 무음 + 신규 엔딩 PCM 그대로 연결. 엔딩 시작5.233333초로 기존 영상 타이밍 유지. 총8.804292초, 연결부 검출 무음0.393917초, 전체 디코딩 오류0. WAV 헤더 외 원본 PCM 보존.

이번 유료 합성1회. 출력 음성 비용 추정: 3.570958×25 tokens/s×$10/1M = $0.00089274 + 입력 token 비용($0.50/1M). 실제 청구 token/금액은 응답에서 제공되지 않음. 로컬 전사는 외부 음원 전송/유료 API 호출 없음.

기존 실패 v1, Scene5 및 공통 엔딩 원본 보존. Canonical 등록/가이드 수정/영상 렌더/Git 작업 없음. 사용자 청취 승인 대기.
