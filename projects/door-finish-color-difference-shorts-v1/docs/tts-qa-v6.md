# Scene4 v6 및 통합 청취 QA

2026-10-27 Asia/Seoul. 사용자 최종문구로 Scene4만1회 합성. 기존 첫문장 텍스트유지/전체Scene4재합성이므로 첫문장 파형/억양 동일성은보장하지않음. Alnilam/rate1.0/pitch미지정. Scene1v4/Scene2v5/Scene3v3/Scene5v3는v5실제선택그대로사용.

Google 공식 https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd 에서 동기SSML break지원확인. 다만, 바로뒤 <break time="200ms"/> 한개만지정. API성공. 입력 tts-input-v6.json. 추가문장break없음.

## 결과와 제한

Scene4 9.384초, 본편통합36.888초, 엔딩포함41.742초. 목표쉼200ms는요청값이며실측보장아님. Scene4 5.612458~6.470250초에0.857792초저레벨구간이검출됨. ‘다만’뒤일가능성이있는후반쉼후보지만단어경계확정전이므로해당쉼이라고단정하지않음. 4.541292~5.223542초에도0.682250초검출.

단어위치확인을위해생성된Scene4만Google Speech-to-Text v1에1회전송했으나403 API비활성화로실패. 서비스활성화/설정변경하지않음. 음성인식결과없음. 따라서정확한단어위치를추정해파형을자르지않았으며후처리무음삽입/트림없음. 삽입위치없음, 추가무음0초. 현재결과는요청한‘약0.2초자연스러운쉼’달성확인본이아닌청취후보. 같은설정반복재생성없음.

직접청취미수행: 다만/엠보스연결, 첫문장억양보존, 전체자연스러움미확인. 사용자청취로긴쉼위치확인후정확한경계기반편집검토필요.

## 기계적 QA

ffprobe/ffmpeg -xerror/silencedetect -30dB,0.1초/PCM클리핑검사/loudnorm입력LUFS및TruePeak분석. 전체디코딩오류없음/클리핑샘플0. Scene음량편차1.95LU. Scene4 -18.95LUFS/-0.16dBTP로피크여유작음; 임의보정없음. 통합-20.07LUFS/-0.43dBTP. 엔딩포함-20.31LUFS/-0.43dBTP. 모든이전31개MP3전후해시동일. 승인엔딩 bd8d2a5616b0de179a78084cc3a94b73ce77210e7a34c5c59428fa69d13c4181 불변.

## 실제 선택

|Scene|파일|초|SHA256|
|---|---|---:|---|
|1|scene01-tts-v4.mp3|3.936|`bb186452df2eb49332d932215b215176d1c33925d0e26a0ee502c19969e71685`|
|2|scene02-tts-v5.mp3|9.336|`8b8b8c4efc2ced5dfe9c3b43fa6f2cbac747de418d51693f2174584ab8ef13e9`|
|3|scene03-tts-v3.mp3|8.256|`159ec47de426e82033b6d9e41d0bab6afefb67a682960a7ee757bfde5d05645b`|
|4|scene04-tts-v6.mp3|9.384|`2790f9d7d530abb557d423554fe6771d38dbf31fc005e7b6be424525cbca04d6`|
|5|scene05-tts-v3.mp3|5.976|`0a71d4356dd2509394becf86d4a41e016ed161f3010c3a255ebd9cd9b02b83e0`|

통합 full-tts-qa-v6.mp3 / full-tts-qa-with-ending-v6.mp3. 48kHz mono/192kbps파생본으로연결, 원본엔딩불변. 기존음원/기록덮어쓰기없음. 이미지/영상/Cover/Remotion/Git작업없음. 청취승인전영상제작금지.

청취구간: 통합Scene4 21.528~30.912초, 긴쉼후보27.140~27.998초. 0.2초달성/발음자연스러움PASS아님.
