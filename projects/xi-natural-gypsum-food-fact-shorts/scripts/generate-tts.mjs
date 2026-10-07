#!/usr/bin/env node

/**
 * TTS Generation Script
 * Generates Google Cloud Text-to-Speech audio for Scene 1~6
 * Voice: ko-KR-Chirp3-HD-Alnilam
 * Speaking Rate: 0.89
 */

import textToSpeechModule from '@google-cloud/text-to-speech';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const textToSpeech = textToSpeechModule;

const client = new textToSpeech.TextToSpeechClient();

const VOICE_CONFIG = {
  languageCode: 'ko-KR',
  name: 'ko-KR-Chirp3-HD-Alnilam',
  ssmlGender: 'FEMALE',
};

const AUDIO_CONFIG = {
  audioEncoding: 'MP3',
  pitch: 0,
  speakingRate: 0.89,
};

const SCENES = [
  {
    id: 1,
    text: '천연석고, 먹어도 되는 걸까요?',
    filename: 'scene01-tts.mp3',
  },
  {
    id: 2,
    text: '석고의 주성분인 황산칼슘은 식품첨가물로도 사용됩니다. 두부를 굳히는 응고제로도 쓰이죠.',
    filename: 'scene02-tts.mp3',
  },
  {
    id: 3,
    text: '석고를 가공한 재료는 의료용 깁스 같은 분야에도 활용됩니다.',
    filename: 'scene03-tts.mp3',
  },
  {
    id: 4,
    text: '그렇다고 건축용 석고보드를 먹을 수 있다는 뜻은 아닙니다.',
    filename: 'scene04-tts.mp3',
  },
  {
    id: 5,
    text: '자이 천연석고보드의 포인트는 먹을 수 있다는 게 아니라, 천연석고를 원료로 사용한다는 점입니다.',
    filename: 'scene05-tts.mp3',
  },
  {
    id: 6,
    text: '자재 선택이 고민된다면, 대산이 도와드립니다.',
    filename: 'scene06-tts.mp3',
  },
];

async function generateTTS() {
  const audioDir = path.join(__dirname, '..', 'public', 'assets', 'audio');
  
  // Ensure audio directory exists
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  console.log('🎙️  Starting TTS generation...\n');

  const results = [];

  for (const scene of SCENES) {
    try {
      console.log(`Generating Scene ${scene.id}: "${scene.text.substring(0, 40)}..."`);

      const request = {
        input: { text: scene.text },
        voice: VOICE_CONFIG,
        audioConfig: AUDIO_CONFIG,
      };

      const [response] = await client.synthesizeSpeech(request);
      const audioContent = response.audioContent;

      const outputPath = path.join(audioDir, scene.filename);
      fs.writeFileSync(outputPath, audioContent, 'binary');

      console.log(`✅ Saved: ${scene.filename}\n`);
      
      results.push({
        scene: scene.id,
        filename: scene.filename,
        path: outputPath,
        status: 'success',
      });
    } catch (error) {
      console.error(`❌ Scene ${scene.id} failed:`, error.message);
      results.push({
        scene: scene.id,
        status: 'failed',
        error: error.message,
      });
    }
  }

  console.log('\n📊 TTS Generation Summary:');
  console.log('━'.repeat(50));
  results.forEach((r) => {
    if (r.status === 'success') {
      console.log(`Scene ${r.scene}: ✅ ${r.filename}`);
    } else {
      console.log(`Scene ${r.scene}: ❌ ${r.error}`);
    }
  });

  const successCount = results.filter((r) => r.status === 'success').length;
  console.log(`\nTotal: ${successCount}/${SCENES.length} successful`);

  if (successCount === SCENES.length) {
    console.log('\n✅ All TTS files generated successfully!');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some TTS generation failed.');
    process.exit(1);
  }
}

generateTTS().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
