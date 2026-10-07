import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {mkdirSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const scenes = [
  ['UV코팅 하면,', '반짝이는 유광부터 떠올리셨나요?'],
  ['UV코팅은 광택이 아니라,', '굳히는 방식이에요'],
  ['자외선을 쏘여서,', '도료를 순간적으로 굳히는 거죠'],
  ['이렇게 굳히면,', '표면이 단단해지고 스크래치에도 강해집니다'],
  ['광택과는 별개라서,', '유광뿐 아니라 무광도 가능해요'],
  ['UV코팅은 굳혀서 보호하는 방식,', '광택은 그 안에서 고르는 겁니다'],
];

const client = new TextToSpeechClient();
const tempDir = resolve('/tmp/episode3-tts-v2-parts');
mkdirSync(tempDir, {recursive: true});

for (let scene = 0; scene < scenes.length; scene += 1) {
  for (let part = 0; part < 2; part += 1) {
    const output = resolve(tempDir, `scene${String(scene + 1).padStart(2, '0')}-${part + 1}.wav`);
    console.log(`[google-tts] scene=${scene + 1} part=${part + 1} voice=ko-KR-Chirp3-HD-Alnilam rate=1.00`);
    const [response] = await client.synthesizeSpeech({
      input: {text: scenes[scene][part]},
      voice: {languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Alnilam'},
      audioConfig: {audioEncoding: 'LINEAR16', speakingRate: 1.0},
    });
    writeFileSync(output, response.audioContent, 'binary');
  }
}
