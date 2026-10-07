#!/usr/bin/env node

import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const output = resolve('public/assets/audio/scene01-tts-v5.mp3');
if (existsSync(output)) {
  throw new Error(`Refusing to overwrite existing TTS: ${output}`);
}

const client = new TextToSpeechClient();
console.log(
  `[google-tts] call=1/1 voice=ko-KR-Chirp3-HD-Alnilam rate=0.95 output=${output}`,
);
const [response] = await client.synthesizeSpeech({
  input: {text: '이보드 시공, 그냥 벽에 붙이면 끝일까요?'},
  voice: {
    languageCode: 'ko-KR',
    name: 'ko-KR-Chirp3-HD-Alnilam',
  },
  audioConfig: {audioEncoding: 'MP3', speakingRate: 0.95},
});
writeFileSync(output, response.audioContent, 'binary');
console.log(`[google-tts] saved bytes=${response.audioContent.length}`);
