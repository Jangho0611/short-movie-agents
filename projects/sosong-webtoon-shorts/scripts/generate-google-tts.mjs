// Google Cloud Text-to-Speech single-shot narration generation via the
// official @google-cloud/text-to-speech SDK. Mirrors the safety
// conventions of scripts/generate-vertex-video.mjs: at most one
// synthesizeSpeech call per run, no retry logic, refuses to run if the
// output file already exists. Without --yes it only prints the planned
// call and exits (dry run).
//
// Per-scene mode (current): each scene is synthesized as its own file so
// speakingRate/breathing can be tuned per scene and a single scene can be
// regenerated without touching the others.
//
// Usage:
//   node scripts/generate-google-tts.mjs --scene <1-5> --out <path> [--rate <0.25-4.0>] --yes
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const LANGUAGE_CODE = 'ko-KR';
const VOICE_NAME = 'ko-KR-Chirp3-HD-Alnilam';
const DEFAULT_RATE = 0.89;

// Final approved per-scene narration text. Scene 2 uses a punctuation-only
// rewrite (approved) to fix TTS breathing; wording/meaning unchanged.
// Scene 1 gets one added comma for the same reason. Scenes 3-5 are used
// verbatim from the original confirmed script (no change needed).
const SCENES = {
  1: '각재를 납품받았는데, 휘어진 제품이 너무 많으면, 현장에서 그대로 손실로 이어집니다.',
  2: '뒤틀린 하지재를 그대로 쓰면,\n마감재가 들뜨고 이음새가 벌어집니다.\n결국, 재시공까지 이어질 수 있습니다.',
  3: '문제는 건조 상태입니다. 겉모습만 봐서는 전문가도 쉽게 구별하기 어렵습니다.',
  4: '명칭 규격과 실제 치수가 다를 수도 있습니다. 그래서 발주 전에는 실측 확인이 중요합니다.',
  5: '자재 선택이 고민된다면, 대산이 도와드립니다.',
  // Round 2 breathing/phrasing test candidates for Scene 1 and 2 only
  // (scene01/02-tts.mp3 judged FAIL: too mechanical, not just too fast).
  '1-test2': '각재를 납품받았는데 휘어진 제품이 너무 많으면, 현장에서는 그대로 손실로 이어집니다.',
  '2-test2': '뒤틀린 하지재를 그대로 사용하면 마감재가 들뜨고 이음새가 벌어집니다. 결국 재시공까지 이어질 수 있습니다.',
  '2-test3': '뒤틀린 하지재를 그대로 사용하면,\n마감재가 들뜹니다.\n그리고, 이음새가 벌어질 수 있습니다.\n결국 재시공까지 이어질 수 있습니다.',
  // Final round: Scene 1/5 reuse already-approved text verbatim; Scene 3/4
  // get one added comma each for breathing (approved), meaning unchanged.
  'final-3': '문제는 건조 상태입니다. 겉모습만 봐서는, 전문가도 쉽게 구별하기 어렵습니다.',
  'final-4': '명칭 규격과 실제 치수가 다를 수도 있습니다. 그래서 발주 전에는, 실측 확인이 중요합니다.',
  // Scene 1 v2: original ran "휘어진 제품이 너무 많으면 현장에서는" together as one
  // breath. Split into two sentences instead.
  'final-1-v2': '각재를 납품받았는데, 휘어진 제품이 너무 많습니다. 이런 제품은 현장에서 그대로 손실로 이어집니다.',
};

function parseArgs(argv) {
  const args = { yes: false, out: null, scene: null, rate: DEFAULT_RATE };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--yes') {
      args.yes = true;
    } else if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (arg === '--scene') {
      args.scene = argv[i + 1];
      i += 1;
    } else if (arg === '--rate') {
      args.rate = Number(argv[i + 1]);
      i += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.scene || !SCENES[args.scene]) {
    console.error('[google-tts] ERROR missing/invalid required --scene <1-5>');
    process.exitCode = 1;
    return;
  }
  if (!args.out) {
    console.error('[google-tts] ERROR missing required --out <path>');
    process.exitCode = 1;
    return;
  }

  const text = SCENES[args.scene];
  const outputPath = resolve(args.out);
  const charCount = text.length;

  if (existsSync(outputPath)) {
    console.error(`[google-tts] ERROR output already exists, refusing to overwrite: ${outputPath}`);
    process.exitCode = 1;
    return;
  }

  // Single non-secret status line logged before any network call.
  console.log(
    `[google-tts] call_count=1 scene=${args.scene} voice=${VOICE_NAME} language=${LANGUAGE_CODE} rate=${args.rate} chars=${charCount} audio_encoding=MP3 output=${outputPath}`
  );

  if (!args.yes) {
    console.log('[google-tts] DRY RUN (no --yes passed) — no network request sent.');
    console.log('--- text ---');
    console.log(text);
    return;
  }

  try {
    await runOnce({ text, rate: args.rate, outputPath });
  } catch (error) {
    console.error(`[google-tts] FAILED message=${error.message}`);
    process.exitCode = 1;
  }
}

async function runOnce({ text, rate, outputPath }) {
  const client = new TextToSpeechClient();

  // Exactly one synthesizeSpeech call. No retry on failure.
  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: { languageCode: LANGUAGE_CODE, name: VOICE_NAME },
    audioConfig: { audioEncoding: 'MP3', speakingRate: rate },
  });

  writeFileSync(outputPath, response.audioContent, 'binary');
  console.log(`[google-tts] SAVED path=${outputPath} bytes=${response.audioContent.length}`);
}

main();
