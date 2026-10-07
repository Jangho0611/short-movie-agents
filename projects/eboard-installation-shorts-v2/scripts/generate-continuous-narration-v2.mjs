#!/usr/bin/env node

import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const output = resolve(
  'public/assets/audio/eboard-installation-narration-v2.mp3',
);
const text = [
  '이보드, 벽에 그냥 붙이면 끝일까요?',
  '먼저 벽지와 곰팡이를 제거하고, 벽을 완전히 말립니다.',
  '치수를 잰 뒤 안전자와 커터칼로 여러 번 재단합니다.',
  '전용 접착제를 고르게 바르고 벽에 밀착합니다.',
  '판 사이 틈은 채우고, 건조 후 퍼티로 이음부를 정리합니다.',
  '도배용은 네바리, 페인트용은 메쉬테이프와 퍼티로 처리합니다.',
  '빈틈 없는 시공과 이음부 처리가 핵심입니다.',
].join(' ');

if (existsSync(output)) {
  throw new Error(`Refusing to overwrite existing narration: ${output}`);
}

const client = new TextToSpeechClient();
console.log(
  `[google-tts] call_count=1 voice=ko-KR-Chirp3-HD-Alnilam rate=0.87 chars=${text.length}`,
);
const [response] = await client.synthesizeSpeech({
  input: {text},
  voice: {
    languageCode: 'ko-KR',
    name: 'ko-KR-Chirp3-HD-Alnilam',
  },
  audioConfig: {audioEncoding: 'MP3', speakingRate: 0.87},
});
writeFileSync(output, response.audioContent, 'binary');
console.log(`[google-tts] saved path=${output} bytes=${response.audioContent.length}`);
