import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

const scenes = [
  'UV코팅 하면 반짝이는 유광부터 떠올리는데, 사실 아닙니다',
  'UV코팅은 광택 이름이 아니라, 표면을 굳히는 방식의 이름입니다',
  '자외선, 즉 UV를 표면에 쏘여서 도료를 순간적으로 단단하게 굳히는 방식입니다. 그래서 이름이 UV코팅입니다',
  '이렇게 굳히고 나면 표면이 훨씬 단단해지고, 오염이나 스크래치, 마모에도 더 강해집니다',
  '이 굳히는 방식 자체는 광택과는 별개의 이야기라서, 반짝이는 유광뿐 아니라 차분한 무광으로도 얼마든지 가능합니다',
  '즉 UV코팅은 굳혀서 보호하는 방식이고, 광택은 그 안에서 고르는 것입니다',
];

const client = new TextToSpeechClient();
for (let index = 0; index < scenes.length; index += 1) {
  const output = resolve(`public/assets/audio/episode3-scene${String(index + 1).padStart(2, '0')}-tts-v1.wav`);
  if (existsSync(output)) throw new Error(`Refusing to overwrite: ${output}`);
  console.log(`[google-tts] call=${index + 1}/6 voice=ko-KR-Chirp3-HD-Alnilam rate=1.00 output=${output}`);
  const [response] = await client.synthesizeSpeech({
    input: {text: scenes[index]},
    voice: {languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Alnilam'},
    audioConfig: {audioEncoding: 'LINEAR16', speakingRate: 1.0},
  });
  mkdirSync(dirname(output), {recursive: true});
  writeFileSync(output, response.audioContent, 'binary');
}
