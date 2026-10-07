// Recovers the result of an ALREADY-SUBMITTED Vertex AI Veo generateVideos
// operation. Does not call generateVideos. Calls
// ai.operations.getVideosOperation() exactly once to read back the status/
// result of the given existing operation name, and if the operation is done
// with inline video bytes, saves them locally. No retry on failure.
//
// Usage:
//   node scripts/recover-vertex-video-operation.mjs --operation-name <name> --out <path> --yes

import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const DEFAULT_PROJECT = 'gen-lang-client-0646355490';
const DEFAULT_LOCATION = 'global';

function parseArgs(argv) {
  const args = { yes: false, out: null, operationName: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--yes') {
      args.yes = true;
    } else if (arg === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else if (arg === '--operation-name') {
      args.operationName = argv[i + 1];
      i += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.out) {
    console.error('[recover-video] ERROR missing required --out <path>');
    process.exitCode = 1;
    return;
  }
  if (!args.operationName) {
    console.error('[recover-video] ERROR missing required --operation-name <name>');
    process.exitCode = 1;
    return;
  }

  const outputPath = resolve(args.out);
  const project = process.env.GOOGLE_CLOUD_PROJECT || DEFAULT_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || DEFAULT_LOCATION;

  if (existsSync(outputPath)) {
    console.error(`[recover-video] ERROR output already exists, refusing to overwrite: ${outputPath}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `[recover-video] getVideosOperation_call_count=1 operation_name=${args.operationName} project=${project} location=${location} output=${outputPath}`
  );

  if (!args.yes) {
    console.log('[recover-video] DRY RUN (no --yes passed) — no network request sent.');
    return;
  }

  const ai = new GoogleGenAI({ vertexai: true, project, location });

  // Reconstruct a minimal operation handle from the saved name only.
  // GenerateVideosOperation._fromAPIResponse() builds a fresh instance from
  // the API response regardless of prior instance state, so a bare instance
  // with just `.name` set is sufficient here.
  const operation = Object.assign(new GenerateVideosOperation(), {
    name: args.operationName,
    done: false,
  });

  try {
    // Exactly ONE status read of the existing operation. No generateVideos
    // call anywhere in this script. No retry on failure.
    const result = await ai.operations.getVideosOperation({ operation });

    if (!result.done) {
      console.error('[recover-video] FAILED operation is not done yet; not retrying.');
      process.exitCode = 1;
      return;
    }

    if (result.error) {
      console.error(`[recover-video] FAILED operation error: ${JSON.stringify(result.error)}`);
      process.exitCode = 1;
      return;
    }

    const generated = result.response?.generatedVideos?.[0]?.video;
    if (!generated || !generated.videoBytes) {
      console.error('[recover-video] FAILED no inline videoBytes in operation response.');
      console.error(`[recover-video] raw_response=${JSON.stringify(result.response ?? null)}`);
      process.exitCode = 1;
      return;
    }

    const buffer = Buffer.from(generated.videoBytes, 'base64');
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, buffer);
    console.log(
      `[recover-video] SAVED path=${outputPath} mime=${generated.mimeType ?? 'video/mp4'} bytes=${buffer.length}`
    );
  } catch (error) {
    console.error(`[recover-video] FAILED message=${error.message}`);
    process.exitCode = 1;
  }
}

main();
