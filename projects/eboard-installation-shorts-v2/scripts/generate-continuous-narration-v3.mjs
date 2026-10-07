#!/usr/bin/env node

import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const output = resolve(
  'public/assets/audio/eboard-installation-narration-v3.mp3',
);
const ssml = `<speak><s>이보드, 벽에 그냥 붙이면 끝일까요?</s><break time="420ms"/><s>먼저 벽지와 곰팡이를 제거하고요.</s><break time="300ms"/><s>벽은 충분히 말려 주세요.</s><break time="420ms"/><s>치수를 정확히 잰 다음, 안전자를 대고 커터칼로 여러 번 나눠 잘라줍니다.</s><break time="420ms"/><s>재단이 끝났다면, 전용 접착제를 고르게 바르고 벽에 밀착해 주세요.</s><break time="420ms"/><s>판 사이 틈부터 채워주고요.</s><break time="300ms"/><s>충분히 건조되면 퍼티로 이음부를 정리합니다.</s><break time="420ms"/><s>마감 방식도 조금 다른데요.</s><break time="300ms"/><s>도배용은 네바리, 페인트용은 메쉬테이프와 퍼티로 처리합니다.</s><break time="420ms"/><s>결국 중요한 건, 빈틈 없는 시공과 꼼꼼한 이음부 처리입니다.</s><break time="450ms"/></speak>`;

if (existsSync(output)) {
  throw new Error(`Refusing to overwrite existing narration: ${output}`);
}

const client = new TextToSpeechClient();
console.log(
  '[google-tts] call_count=1 voice=ko-KR-Chirp3-HD-Alnilam rate=0.90 input=ssml',
);
const [response] = await client.synthesizeSpeech({
  input: {ssml},
  voice: {
    languageCode: 'ko-KR',
    name: 'ko-KR-Chirp3-HD-Alnilam',
  },
  audioConfig: {audioEncoding: 'MP3', speakingRate: 0.9},
});
writeFileSync(output, response.audioContent, 'binary');
console.log(`[google-tts] saved path=${output} bytes=${response.audioContent.length}`);
