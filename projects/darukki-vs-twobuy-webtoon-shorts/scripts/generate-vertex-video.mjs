// Vertex AI Veo image-to-video single-shot generation via the official
// @google/genai SDK. Ported verbatim (call structure, config shape, safety
// conventions) from the sosong-lvl-webtoon-shorts (소송각재 1탄/2탄) legacy
// script of the same name: at most one generateVideos submission per run,
// no retry logic, refuses to run if the output file already exists.
// Without --yes it only prints the planned call and exits (dry run).
//
// Video generation is an async long-running operation on Vertex AI. After
// the single generateVideos submission, this script polls
// ai.operations.getVideosOperation() to read back the status of that SAME
// operation — this is a status check, not an additional generation call.
//
// Usage:
//   node scripts/generate-vertex-video.mjs --image <path> --out <path> [--prompt-file <path>] [--last-frame <path>] --yes
//
// --last-frame is a minimal addition on top of the legacy sosong script:
// it passes config.lastFrame (Veo 3.1's native first+last frame support)
// alongside the existing first-frame `image` lock. Everything else about
// the call structure is unchanged from the legacy script.
//
// Required env (or defaults below):
//   GOOGLE_CLOUD_PROJECT   (default: gen-lang-client-0646355490)
//   GOOGLE_CLOUD_LOCATION  (default: global)
//   VERTEX_VIDEO_MODEL     (default: veo-3.1-fast-generate-001)
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { GoogleGenAI, ApiError } from '@google/genai';
import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const DEFAULT_PROJECT = 'gen-lang-client-0646355490';
const DEFAULT_LOCATION = 'global';
const DEFAULT_MODEL = 'veo-3.1-fast-generate-001';
const POLL_INTERVAL_MS = 10000;
const POLL_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes ceiling on polling the ONE submitted operation

function parseArgs(argv) {
  const args = { yes: false, out: null, image: null, promptFile: null, lastFrame: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--yes') {
      args.yes = true;
    } else if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (arg === '--image') {
      args.image = argv[i + 1];
      i += 1;
    } else if (arg === '--prompt-file') {
      args.promptFile = argv[i + 1];
      i += 1;
    } else if (arg === '--last-frame') {
      args.lastFrame = argv[i + 1];
      i += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

function mimeTypeFor(path) {
  if (path.toLowerCase().endsWith('.png')) return 'image/png';
  if (path.toLowerCase().endsWith('.jpg') || path.toLowerCase().endsWith('.jpeg')) return 'image/jpeg';
  throw new Error(`Unsupported image extension for: ${path}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.out) {
    console.error('[vertex-video] ERROR missing required --out <path>');
    process.exitCode = 1;
    return;
  }
  if (!args.image) {
    console.error('[vertex-video] ERROR missing required --image <path>');
    process.exitCode = 1;
    return;
  }
  if (!args.promptFile) {
    console.error('[vertex-video] ERROR missing required --prompt-file <path>');
    process.exitCode = 1;
    return;
  }

  const outputPath = resolve(args.out);
  const imagePath = resolve(args.image);
  const lastFramePath = args.lastFrame ? resolve(args.lastFrame) : null;
  const project = process.env.GOOGLE_CLOUD_PROJECT || DEFAULT_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || DEFAULT_LOCATION;
  const model = process.env.VERTEX_VIDEO_MODEL || DEFAULT_MODEL;
  const prompt = readFileSync(resolve(args.promptFile), 'utf8');

  if (existsSync(outputPath)) {
    console.error(`[vertex-video] ERROR output already exists, refusing to overwrite: ${outputPath}`);
    process.exitCode = 1;
    return;
  }
  if (!existsSync(imagePath)) {
    console.error(`[vertex-video] ERROR input image not found: ${imagePath}`);
    process.exitCode = 1;
    return;
  }
  if (lastFramePath && !existsSync(lastFramePath)) {
    console.error(`[vertex-video] ERROR last-frame image not found: ${lastFramePath}`);
    process.exitCode = 1;
    return;
  }

  const imageBytes = readFileSync(imagePath).toString('base64');
  const mimeType = mimeTypeFor(imagePath);
  const lastFrame = lastFramePath
    ? { imageBytes: readFileSync(lastFramePath).toString('base64'), mimeType: mimeTypeFor(lastFramePath) }
    : null;

  // Single non-secret status line logged before any network call.
  console.log(
    `[vertex-video] call_count=1 model=${model} project=${project} location=${location} input_image=${imagePath} last_frame=${lastFramePath ?? '(none)'} duration_s=4 fps=24 aspect_ratio=9:16 resolution=720p generate_audio=false output=${outputPath}`
  );

  if (!args.yes) {
    console.log('[vertex-video] DRY RUN (no --yes passed) — no network request sent.');
    return;
  }

  const startedAt = Date.now();
  try {
    await runOnce({ project, location, model, prompt, imageBytes, mimeType, lastFrame, outputPath, startedAt });
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`[vertex-video] FAILED status=${error.status} message=${error.message}`);
    } else {
      console.error(`[vertex-video] FAILED (non-API error) message=${error.message}`);
    }
    process.exitCode = 1;
  }
}

async function runOnce({ project, location, model, prompt, imageBytes, mimeType, lastFrame, outputPath, startedAt }) {
  const ai = new GoogleGenAI({ vertexai: true, project, location });

  // Exactly one generateVideos submission. No retry on failure.
  // Matches sosong legacy call shape exactly: single combined prompt string
  // (no separate negativePrompt field), image-locked first frame, no seed.
  // config.lastFrame is the only addition beyond the legacy shape, used
  // only when --last-frame is passed.
  const config = {
    numberOfVideos: 1,
    durationSeconds: 4,
    fps: 24,
    aspectRatio: '9:16',
    resolution: '720p',
    generateAudio: false,
  };
  if (lastFrame) {
    config.lastFrame = lastFrame;
  }

  let operation = await ai.models.generateVideos({
    model,
    prompt,
    image: { imageBytes, mimeType },
    config,
  });

  console.log(`[vertex-video] operation submitted name=${operation.name ?? '(unnamed)'}`);

  // Poll status of the SAME submitted operation (not a new generation call).
  while (!operation.done) {
    if (Date.now() - startedAt > POLL_TIMEOUT_MS) {
      console.error('[vertex-video] FAILED polling timed out after 10 minutes; not retrying.');
      process.exitCode = 1;
      return;
    }
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
    operation = await ai.operations.getVideosOperation({ operation });
  }

  const elapsedMs = Date.now() - startedAt;

  if (operation.error) {
    console.error(`[vertex-video] FAILED operation error: ${JSON.stringify(operation.error)}`);
    process.exitCode = 1;
    return;
  }

  const generated = operation.response?.generatedVideos?.[0]?.video;
  if (!generated || (!generated.videoBytes && !generated.uri)) {
    console.error('[vertex-video] FAILED no video returned in operation response');
    if (operation.response?.raiMediaFilteredCount) {
      console.error(
        `[vertex-video] raiMediaFilteredCount=${operation.response.raiMediaFilteredCount} reasons=${JSON.stringify(operation.response.raiMediaFilteredReasons ?? [])}`
      );
    }
    process.exitCode = 1;
    return;
  }

  if (!generated.videoBytes) {
    console.error(`[vertex-video] FAILED video was returned as a URI, not inline bytes (uri=${generated.uri}); this script only saves inline video bytes.`);
    process.exitCode = 1;
    return;
  }

  const buffer = Buffer.from(generated.videoBytes, 'base64');
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, buffer);
  console.log(
    `[vertex-video] SAVED path=${outputPath} mime=${generated.mimeType ?? 'video/mp4'} bytes=${buffer.length} elapsed_ms=${elapsedMs}`
  );
}

main();
