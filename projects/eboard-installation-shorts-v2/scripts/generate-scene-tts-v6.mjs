#!/usr/bin/env node

import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const scenes = [
  ['scene01-tts-v6.mp3', '이보드 시공, 그냥 벽에 붙이면 끝일까요?'],
  ['scene02-tts-v6.mp3', '벽지와 곰팡이를 제거하고 벽을 충분히 말려주세요.'],
  ['scene03-tts-v6.mp3', '치수를 재고 안전자를 대서 커터칼로 잘라줍니다.'],
  ['scene04-tts-v6.mp3', '전용 접착제를 고르게 바른 뒤 벽에 밀착해주세요.'],
  ['scene05-tts-v6.mp3', '이음부는 퍼티로 꼼꼼히 정리합니다.'],
  ['scene06-tts-v6.mp3', '도배용은 네바리, 페인트용은 메쉬테이프와 퍼티로 마감합니다.'],
  ['scene07-tts-v6.mp3', '이보드는 빈틈과 이음부를 꼼꼼하게 처리하는 게 중요합니다.'],
];
const outputDirectory = resolve('public/assets/audio');
const outputs = scenes.map(([filename]) => resolve(outputDirectory, filename));
const existing = outputs.filter(existsSync);
if (existing.length > 0) {
  throw new Error(`Refusing to overwrite existing TTS: ${existing.join(', ')}`);
}

const client = new TextToSpeechClient();
for (let index = 0; index < scenes.length; index += 1) {
  const [filename, text] = scenes[index];
  const output = outputs[index];
  console.log(`[google-tts] call=${index + 1}/7 voice=ko-KR-Chirp3-HD-Alnilam rate=0.95 output=${output}`);
  const [response] = await client.synthesizeSpeech({
    input: {text},
    voice: {languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Alnilam'},
    audioConfig: {audioEncoding: 'MP3', speakingRate: 0.95},
  });
  writeFileSync(output, response.audioContent, 'binary');
  console.log(`[google-tts] saved bytes=${response.audioContent.length}`);
}
