#!/usr/bin/env node

import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

const VOICE = {
  languageCode: 'ko-KR',
  name: 'ko-KR-Chirp3-HD-Alnilam',
};
const AUDIO_CONFIG = {audioEncoding: 'MP3', speakingRate: 0.89};
const OUTPUT_DIR = resolve('public/assets/audio');

const scenes = [
  ['scene01-tts.mp3', '이보드, 벽에 그냥 붙이면 끝일까요?'],
  ['scene02-tts.mp3', '먼저 벽지와 곰팡이를 제거하고, 벽을 완전히 말립니다.'],
  ['scene03-tts.mp3', '치수를 잰 뒤 안전자와 커터칼로 여러 번 재단합니다.'],
  ['scene04-tts.mp3', '전용 접착제를 고르게 바르고 벽에 밀착합니다.'],
  ['scene05-tts.mp3', '판 사이 틈은 채우고, 건조 후 퍼티로 이음부를 정리합니다.'],
  ['scene06-tts.mp3', '도배와 페인트는 이음부 마감 방식이 다릅니다.'],
  ['scene07-tts.mp3', '빈틈 없는 시공과 이음부 처리가 핵심입니다.'],
];

const outputs = scenes.map(([filename]) => resolve(OUTPUT_DIR, filename));
const existing = outputs.filter(existsSync);
if (existing.length > 0) {
  throw new Error(`Refusing to overwrite existing TTS: ${existing.join(', ')}`);
}

mkdirSync(dirname(outputs[0]), {recursive: true});
const client = new TextToSpeechClient();

for (let index = 0; index < scenes.length; index += 1) {
  const [filename, text] = scenes[index];
  const output = resolve(OUTPUT_DIR, filename);
  console.log(
    `[google-tts] call=${index + 1}/7 voice=${VOICE.name} rate=${AUDIO_CONFIG.speakingRate} output=${output}`,
  );
  const [response] = await client.synthesizeSpeech({
    input: {text},
    voice: VOICE,
    audioConfig: AUDIO_CONFIG,
  });
  writeFileSync(output, response.audioContent, 'binary');
  console.log(`[google-tts] saved bytes=${response.audioContent.length}`);
}
