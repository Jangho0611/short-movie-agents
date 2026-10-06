// Google Cloud Text-to-Speech single-shot narration generation via the
// official @google-cloud/text-to-speech SDK. Ported from the sosong
// 1탄/2탄 legacy script of the same name (same call structure, voice,
// safety conventions): at most one synthesizeSpeech call per run, no
// retry logic, refuses to run if the output file already exists.
// Without --yes it only prints the planned call and exits (dry run).
//
// Usage:
//   node scripts/generate-google-tts.mjs --scene <1-6> --out <path> [--rate <0.25-4.0>] [--text-file <path>] --yes
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const LANGUAGE_CODE = 'ko-KR';
const VOICE_NAME = 'ko-KR-Chirp3-HD-Alnilam';
const DEFAULT_RATE = 0.89;

// Final confirmed per-scene narration text (다루끼 vs 투바이, 2026-08-14 확정 스토리).
const SCENES = {
  1: '다루끼랑 투바이. 크기만 다른 각재일까요?',
  2: '둘 다 소송각재 계열이지만, 필요한 폭과 쓰이는 역할이 다릅니다.',
  3: '단면이 작은 다루끼는 주로 벽체와 천장 하지에 사용됩니다.',
  4: '폭이 더 넓은 투바이는 가벽이나 보강틀처럼 폭이 필요한 곳에 활용됩니다.',
  5: '그리고 현장 조건에 따라 두 자재를 보조적으로 함께 쓰기도 합니다.',
  6: '결국 필요한 폭과 역할에 따라 다루끼와 투바이를 골라 쓰면 됩니다.',
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

  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: { languageCode: LANGUAGE_CODE, name: VOICE_NAME },
    audioConfig: { audioEncoding: 'MP3', speakingRate: rate },
  });

  writeFileSync(outputPath, response.audioContent, 'binary');
  console.log(`[google-tts] SAVED path=${outputPath} bytes=${response.audioContent.length}`);
}

main();
