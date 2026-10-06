// Generic local-only merge: A + <silence>s silence + B, using the bundled
// Remotion ffmpeg. No network calls. Refuses to overwrite an existing output.
//
// Usage:
//   node scripts/merge-tts-parts.mjs --a <path> --b <path> --out <path> --silence <seconds>

import {existsSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {dirname, resolve} from 'node:path';

function parseArgs(argv) {
  const args = {a: null, b: null, out: null, silence: null};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--a') {
      args.a = argv[i + 1];
      i += 1;
    } else if (arg === '--b') {
      args.b = argv[i + 1];
      i += 1;
    } else if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (arg === '--silence') {
      args.silence = argv[i + 1];
      i += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
if (!args.a || !args.b || !args.out || !args.silence) {
  console.error('[merge-tts-parts] ERROR requires --a <path> --b <path> --out <path> --silence <seconds>');
  process.exit(1);
}

const partA = resolve(args.a);
const partB = resolve(args.b);
const output = resolve(args.out);
const ffmpeg = resolve('node_modules/@remotion/compositor-darwin-arm64/ffmpeg');

for (const input of [partA, partB]) {
  if (!existsSync(input)) {
    throw new Error(`Missing input: ${input}`);
  }
}
if (existsSync(output)) {
  throw new Error(`Output already exists, refusing to overwrite: ${output}`);
}
if (!existsSync(ffmpeg)) {
  throw new Error(`Bundled ffmpeg not found: ${ffmpeg}`);
}

const filter = [
  '[0:a]aresample=24000,aformat=sample_fmts=fltp:channel_layouts=mono[a]',
  '[1:a]aresample=24000,aformat=sample_fmts=fltp:channel_layouts=mono[s]',
  '[2:a]aresample=24000,aformat=sample_fmts=fltp:channel_layouts=mono[b]',
  '[a][s][b]concat=n=3:v=0:a=1[out]',
].join(';');

const result = spawnSync(
  ffmpeg,
  [
    '-v',
    'error',
    '-i',
    partA,
    '-f',
    'lavfi',
    '-t',
    args.silence,
    '-i',
    'anullsrc=r=24000:cl=mono',
    '-i',
    partB,
    '-filter_complex',
    filter,
    '-map',
    '[out]',
    '-c:a',
    'libmp3lame',
    '-b:a',
    '32k',
    output,
  ],
  {
    stdio: 'inherit',
    env: {...process.env, DYLD_LIBRARY_PATH: dirname(ffmpeg)},
  }
);

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

console.log(`[merge-tts-parts] SAVED ${output}`);
