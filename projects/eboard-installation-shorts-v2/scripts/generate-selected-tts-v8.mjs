#!/usr/bin/env node

import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const scenes = [
  ['scene01-tts-v8.mp3', '이보드, 그냥 붙이면 끝일까요?'],
  ['scene05-tts-v8.mp3', '이음부는 퍼티로 꼼꼼히 마감합니다.'],
  ['scene06-tts-v8.mp3', '도배용은 네바리로, 페인트용은 메쉬테이프와 퍼티로 마감합니다.'],
];
const outputs = scenes.map(([filename]) => resolve('public/assets/audio', filename));
const existing = outputs.filter(existsSync);
if (existing.length > 0) {
  throw new Error(`Refusing to overwrite existing TTS: ${existing.join(', ')}`);
}

const client = new TextToSpeechClient();
for (let index = 0; index < scenes.length; index += 1) {
  const [filename, text] = scenes[index];
  const output = outputs[index];
  console.log(`[google-tts] call=${index + 1}/3 voice=ko-KR-Chirp3-HD-Alnilam rate=0.95 output=${output}`);
  const [response] = await client.synthesizeSpeech({
    input: {text},
    voice: {languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Alnilam'},
    audioConfig: {audioEncoding: 'MP3', speakingRate: 0.95},
  });
  writeFileSync(output, response.audioContent, 'binary');
  console.log(`[google-tts] saved bytes=${response.audioContent.length}`);
}
