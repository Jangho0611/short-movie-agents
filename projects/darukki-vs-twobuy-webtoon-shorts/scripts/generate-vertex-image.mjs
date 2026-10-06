// Vertex AI Gemini image generation/editing via the official @google/genai
// SDK. Mirrors the safety conventions of scripts/generate-vertex-video.mjs:
// at most one generateContent submission per run, no retry logic, refuses
// to run if the output file already exists. Without --yes it only prints
// the planned call and exits (dry run).
//
// Supports optional reference images (image-to-image) so an edit can stay
// visually consistent with an already-approved image (character design,
// palette, line style, composition).
//
// Usage:
//   node scripts/generate-vertex-image.mjs --out <path> --prompt-file <path> \
//     [--reference <path> ...] [--aspect-ratio 9:16] [--image-size 2K] --yes
//
// Required env (or defaults below):
//   GOOGLE_CLOUD_PROJECT   (default: gen-lang-client-0646355490)
//   GOOGLE_CLOUD_LOCATION  (default: global)
//   VERTEX_IMAGE_MODEL     (default: gemini-3-pro-image)
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { GoogleGenAI, ApiError } from '@google/genai';
import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const DEFAULT_PROJECT = 'gen-lang-client-0646355490';
const DEFAULT_LOCATION = 'global';
const DEFAULT_MODEL = 'gemini-3-pro-image';
const DEFAULT_ASPECT_RATIO = '9:16';
const DEFAULT_IMAGE_SIZE = '2K';

function parseArgs(argv) {
  const args = {
    yes: false,
    out: null,
    promptFile: null,
    references: [],
    aspectRatio: DEFAULT_ASPECT_RATIO,
    imageSize: DEFAULT_IMAGE_SIZE,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--yes') {
      args.yes = true;
    } else if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (arg === '--prompt-file') {
      args.promptFile = argv[i + 1];
      i += 1;
    } else if (arg === '--reference') {
      args.references.push(argv[i + 1]);
      i += 1;
    } else if (arg === '--aspect-ratio') {
      args.aspectRatio = argv[i + 1];
      i += 1;
    } else if (arg === '--image-size') {
      args.imageSize = argv[i + 1];
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
    console.error('[vertex-image] ERROR missing required --out <path>');
    process.exitCode = 1;
    return;
  }
  if (!args.promptFile) {
    console.error('[vertex-image] ERROR missing required --prompt-file <path>');
    process.exitCode = 1;
    return;
  }

  const outputPath = resolve(args.out);
  const project = process.env.GOOGLE_CLOUD_PROJECT || DEFAULT_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || DEFAULT_LOCATION;
  const model = process.env.VERTEX_IMAGE_MODEL || DEFAULT_MODEL;
  const prompt = readFileSync(resolve(args.promptFile), 'utf8');

  if (existsSync(outputPath)) {
    console.error(`[vertex-image] ERROR output already exists, refusing to overwrite: ${outputPath}`);
    process.exitCode = 1;
    return;
  }

  const referencePaths = args.references.map((p) => resolve(p));
  for (const refPath of referencePaths) {
    if (!existsSync(refPath)) {
      console.error(`[vertex-image] ERROR reference image not found: ${refPath}`);
      process.exitCode = 1;
      return;
    }
  }

  const referenceParts = referencePaths.map((refPath) => ({
    inlineData: {
      mimeType: mimeTypeFor(refPath),
      data: readFileSync(refPath).toString('base64'),
    },
  }));

  console.log(
    `[vertex-image] call_count=1 model=${model} project=${project} location=${location} references=${referencePaths.length} aspect_ratio=${args.aspectRatio} image_size=${args.imageSize} output=${outputPath}`
  );

  if (!args.yes) {
    console.log('[vertex-image] DRY RUN (no --yes passed) — no network request sent.');
    return;
  }

  try {
    await runOnce({ project, location, model, prompt, referenceParts, aspectRatio: args.aspectRatio, imageSize: args.imageSize, outputPath });
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`[vertex-image] FAILED status=${error.status} message=${error.message}`);
    } else {
      console.error(`[vertex-image] FAILED (non-API error) message=${error.message}`);
    }
    process.exitCode = 1;
  }
}

async function runOnce({ project, location, model, prompt, referenceParts, aspectRatio, imageSize, outputPath }) {
  const ai = new GoogleGenAI({ vertexai: true, project, location });

  const startedAt = Date.now();

  const response = await ai.models.generateContent({
    model,
    contents: [
      {
        role: 'user',
        parts: [...referenceParts, { text: prompt }],
      },
    ],
    config: {
      responseModalities: ['IMAGE'],
      imageConfig: {
        aspectRatio,
        imageSize,
      },
    },
  });

  const elapsedMs = Date.now() - startedAt;

  const parts = response?.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.data);

  if (!imagePart) {
    console.error('[vertex-image] FAILED no image returned in response');
    const textPart = parts.find((p) => p.text);
    if (textPart) {
      console.error(`[vertex-image] model text response: ${textPart.text}`);
    }
    const finishReason = response?.candidates?.[0]?.finishReason;
    if (finishReason) {
      console.error(`[vertex-image] finishReason=${finishReason}`);
    }
    process.exitCode = 1;
    return;
  }

  const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, buffer);
  console.log(
    `[vertex-image] SAVED path=${outputPath} mime=${imagePart.inlineData.mimeType ?? 'image/png'} bytes=${buffer.length} elapsed_ms=${elapsedMs}`
  );
}

main();
