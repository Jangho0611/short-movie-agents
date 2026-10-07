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
//   node scripts/generate-google-tts.mjs --scene <1-5> --out <path> [--rate <0.25-4.0>] [--text-file <path>] --yes
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
const DEFAULT_RATE = 1.00;

// Final approved per-scene caption and narration text.
const SCENES = {
  1: {
    captionText: '겉으로는 비슷해 보여도\n원료가 시작된 곳은 다릅니다',
    spokenText: '겉으로는 똑같아 보여도, 두 원료가 시작된 곳은 다릅니다.',
  },
  2: {
    captionText: '천연광물과 배연탈황석고\n원료의 출발점이 다릅니다',
    spokenText: '천연석고는 자연에서 얻는 광물이고, 배연탈황석고는 발전소 등의 탈황 과정에서 만들어지는 합성석고입니다.',
  },
  3: {
    captionText: '벽 속에 들어가면\n원료 차이는 보이지 않습니다',
    spokenText: '석고보드가 시공되고 나면, 원료 차이는 외관만으로 확인하기 어렵습니다.',
  },
  4: {
    captionText: '자이 천연석고보드\n천연석고 100% 사용',
    spokenText: '자이 천연석고보드는 천연석고를 백 퍼센트 사용합니다.',
  },
  5: {
    captionText: '우리 아이가 지낼 공간,\n석고보드 원료도 확인해보세요',
    spokenText: '우리 아이가 지낼 공간이라면, 선택 전에 석고보드 원료도 확인해보세요.',
  },
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

  const text = args.textFile ? readFileSync(resolve(args.textFile), 'utf8').trim() : SCENES[args.scene].spokenText;
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
