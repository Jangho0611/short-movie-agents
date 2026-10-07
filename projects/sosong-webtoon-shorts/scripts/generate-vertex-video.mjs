// Vertex AI Veo image-to-video single-shot generation via the official
// @google/genai SDK. Mirrors the safety conventions of
// scripts/generate-vertex-image.mjs: at most one generateVideos submission
// per run, no retry logic, refuses to run if the output file already
// exists. Without --yes it only prints the planned call and exits (dry run).
//
// Video generation is an async long-running operation on Vertex AI. After
// the single generateVideos submission, this script polls
// ai.operations.getVideosOperation() to read back the status of that SAME
// operation — this is a status check, not an additional generation call.
//
// Usage:
//   node scripts/generate-vertex-video.mjs --image <path> --out <path> [--prompt-file <path>] --yes
//
// Required env (or defaults below):
//   GOOGLE_CLOUD_PROJECT   (default: gen-lang-client-0646355490)
//   GOOGLE_CLOUD_LOCATION  (default: global)
//   VERTEX_VIDEO_MODEL     (default: veo-3.1-fast-generate-001)
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { GoogleGenAI, ApiError } from '@google/genai';
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DEFAULT_PROJECT = 'gen-lang-client-0646355490';
const DEFAULT_LOCATION = 'global';
const DEFAULT_MODEL = 'veo-3.1-fast-generate-001';
const POLL_INTERVAL_MS = 10000;
const POLL_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes ceiling on polling the ONE submitted operation

const DEFAULT_PROMPT = `Preserve the supplied reference illustration and keep the exact same Korean webtoon/editorial construction-material style.

Animate one clear action only:

The worker character rolls the center square-section wooden batten sideways along the floor using one hand, to check straightness and warping.
The motion must read clearly as sideways rolling on the floor, not lifting, not dragging, not pulling, not hugging, and not merely pressing down.
The batten should rotate visibly by a small amount as it rolls a short distance left and right on the floor.
The worker's hand remains in contact with the side/top edge of the batten during the rolling check.
The worker makes a small natural side-to-side inspection movement with the body while following the rolling motion.
The orange motion marks should subtly reinforce a rolling action.

CRITICAL TIMBER PRESERVATION:
- The center timber must remain a rectangular prism / square-section construction batten at all times.
- Never turn it into a cylinder, dowel, rod, pipe, or rounded object.
- Preserve straight edges, flat faces, and the square end-grain face.
- Keep the timber lying on the floor the whole time.
- Do not bend or deform the center usable batten.

NEGATIVE MOTION RULES:
- Do not animate the action as lifting.
- Do not animate the action as dragging.
- Do not animate the action as pulling toward the body.
- Do not animate the action as simply pressing down in place.
- Do not animate the timber sliding without visible rolling rotation.
- Do not animate a camera move.

STATIC ELEMENTS:
- Keep the left usable battens essentially stationary.
- Keep the three right-side warped defective battens stationary.
- Keep the delivered timber bundle in the background stationary.
- Do not add or remove lumber.
- Do not change the number of defective battens.

TEXT PRESERVATION:
Preserve all three Korean handwritten labels exactly as they appear:
- 사용 가능한 각재
- 휘어진 불량 각재
- 현장 폐기 물량

Do not animate, rewrite, distort, duplicate, translate, or replace any text.
No new text, logos, numbers, or watermarks.

VISUAL PRESERVATION:
- pure white background
- same framing
- same composition
- same pale natural wood colors
- same hand-drawn black linework
- no pan
- no zoom
- no rotation
- no transition
- no new objects
- no photorealistic transformation
- no 3D look`;

function parseArgs(argv) {
  const args = { yes: false, out: null, image: null, promptFile: null };
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

  const outputPath = resolve(args.out);
  const imagePath = resolve(args.image);
  const project = process.env.GOOGLE_CLOUD_PROJECT || DEFAULT_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || DEFAULT_LOCATION;
  const model = process.env.VERTEX_VIDEO_MODEL || DEFAULT_MODEL;
  const prompt = args.promptFile ? readFileSync(resolve(args.promptFile), 'utf8') : DEFAULT_PROMPT;

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

  const imageBytes = readFileSync(imagePath).toString('base64');
  const mimeType = mimeTypeFor(imagePath);

  // Single non-secret status line logged before any network call.
  console.log(
    `[vertex-video] call_count=1 model=${model} project=${project} location=${location} input_image=${imagePath} duration_s=4 aspect_ratio=9:16 resolution=720p generate_audio=false output=${outputPath}`
  );

  if (!args.yes) {
    console.log('[vertex-video] DRY RUN (no --yes passed) — no network request sent.');
    return;
  }

  const startedAt = Date.now();
  try {
    await runOnce({ project, location, model, prompt, imageBytes, mimeType, outputPath, startedAt });
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`[vertex-video] FAILED status=${error.status} message=${error.message}`);
    } else {
      console.error(`[vertex-video] FAILED (non-API error) message=${error.message}`);
    }
    process.exitCode = 1;
  }
}

async function runOnce({ project, location, model, prompt, imageBytes, mimeType, outputPath, startedAt }) {
  const ai = new GoogleGenAI({ vertexai: true, project, location });

  // Exactly one generateVideos submission. No retry on failure.
  let operation = await ai.models.generateVideos({
    model,
    prompt,
    image: { imageBytes, mimeType },
    config: {
      numberOfVideos: 1,
      durationSeconds: 4,
      aspectRatio: '9:16',
      resolution: '720p',
      generateAudio: false,
    },
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
  writeFileSync(outputPath, buffer);
  console.log(
    `[vertex-video] SAVED path=${outputPath} mime=${generated.mimeType ?? 'video/mp4'} bytes=${buffer.length} elapsed_ms=${elapsedMs}`
  );
}

main();
