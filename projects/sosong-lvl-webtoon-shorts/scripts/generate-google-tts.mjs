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
//   node scripts/generate-google-tts.mjs --scene <1-6> --out <path> [--rate <0.25-4.0>] [--text-file <path>] --yes
//
// --text-file overrides the built-in SCENES text for this run only (e.g. for
// generating an alternate/shortened "v2" narration) without touching the
// approved default text below.
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const LANGUAGE_CODE = 'ko-KR';
const VOICE_NAME = 'ko-KR-Chirp3-HD-Alnilam';
const DEFAULT_RATE = 0.89;

// Final approved per-scene narration text.
const SCENES = {
  1: '소송각재와 LVL각재, 뭐가 다를까요?',
  2: '소송각재는 원목 기반이라, 휘어짐이나 뒤틀림에 편차가 생길 수 있습니다.',
  3: 'LVL은 얇은 베니어를 같은 방향으로 여러 겹 적층한 공학목재입니다.',
  4: '소송각재와 LVL각재 모두 실내 하지재로 사용할 수 있습니다.',
  5: '가격, 뒤틀림, 현장조건을 보고 상황에 맞게 선택하세요.',
  6: '자재 선택이 고민된다면, 대산이 도와드립니다.',
};

function parseArgs(argv) {
  const args = { yes: false, out: null, scene: null, rate: DEFAULT_RATE, textFile: null };
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
    } else if (arg === '--text-file') {
      args.textFile = argv[i + 1];
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
    console.error('[google-tts] ERROR missing/invalid required --scene <1-6>');
    process.exitCode = 1;
    return;
  }
  if (!args.out) {
    console.error('[google-tts] ERROR missing required --out <path>');
    process.exitCode = 1;
    return;
  }

  const text = args.textFile ? readFileSync(resolve(args.textFile), 'utf8').trim() : SCENES[args.scene];
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
