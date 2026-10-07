import {TextToSpeechClient} from '@google-cloud/text-to-speech';
import {mkdirSync, writeFileSync} from 'node:fs';

const parts = ['UV코팅 하면,', '반짝이는 유광부터 떠올리셨나요?'];
const outputs = ['/tmp/episode3-scene01-tts-v3-part1.wav', '/tmp/episode3-scene01-tts-v3-part2.wav'];
const client = new TextToSpeechClient();
mkdirSync('/tmp', {recursive: true});

for (let index = 0; index < parts.length; index += 1) {
  console.log(`[google-tts] scene=1 part=${index + 1} voice=ko-KR-Chirp3-HD-Alnilam rate=1.08`);
  const [response] = await client.synthesizeSpeech({
    input: {text: parts[index]},
    voice: {languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Alnilam'},
    audioConfig: {audioEncoding: 'LINEAR16', speakingRate: 1.08},
  });
  writeFileSync(outputs[index], response.audioContent, 'binary');
}
