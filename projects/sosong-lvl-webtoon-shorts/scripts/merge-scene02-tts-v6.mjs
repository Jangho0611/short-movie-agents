// Local-only merge for Scene 2 v6: A + 0.30s silence + B.
// Run only after scene02-tts-v6-a.mp3 and scene02-tts-v6-b.mp3 exist.

import {existsSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {dirname, resolve} from 'node:path';

const partA = resolve('public/assets/audio/scene02-tts-v6-a.mp3');
const partB = resolve('public/assets/audio/scene02-tts-v6-b.mp3');
const output = resolve('public/assets/audio/scene02-tts-v6.mp3');
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
    '0.30',
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

console.log(`[scene02-tts-v6] SAVED ${output}`);
