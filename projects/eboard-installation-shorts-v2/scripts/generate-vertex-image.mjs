// Vertex AI (Gemini Enterprise Agent Platform) single-shot image generation
// via the official @google/genai SDK. Replaces the earlier raw
// PowerShell Invoke-RestMethod REST call, which was blocked by Google's
// generic anti-automation interstitial instead of reaching the Vertex API.
//
// This script performs AT MOST ONE generateContent call per run, has no
// retry logic, and saves exactly one final candidate file. It refuses to
// run if the output file already exists or uses a duplicate raw-candidate
// name such as *-vertex-vN.png.
// Without --yes it only prints the planned call and exits (dry run).
//
// Usage:
//   node scripts/generate-vertex-image.mjs --out <path> [--prompt-file <path>] [--input-image <path>] [--reference-image <path>] --yes
//
// --input-image: optional base/source image passed alongside the text prompt
// for image-editing (inpaint-style) calls. Sent as the first inlineData part.
//
// --reference-image: optional second image (e.g. a style/character
// reference) sent as a second inlineData part, after --input-image and
// before the text. Still exactly one generateContent call.
//
// Required env (or defaults below):
//   GOOGLE_CLOUD_PROJECT   (default: gen-lang-client-0646355490)
//   GOOGLE_CLOUD_LOCATION  (default: global)
//   VERTEX_IMAGE_MODEL     (default: gemini-3.1-flash-image)
//
// Auth: uses the existing local user ADC (gcloud auth application-default
// login) automatically via the SDK. No API key, no service account file.

import { GoogleGenAI, Modality, ApiError } from '@google/genai';
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';

const DEFAULT_PROJECT = 'gen-lang-client-0646355490';
const DEFAULT_LOCATION = 'global';
const DEFAULT_MODEL = 'gemini-3.1-flash-image';

const DEFAULT_PROMPT = `Create one vertical 9:16 reference illustration for Scene 1 of a professional construction-material explainer short, in Korean webtoon / newspaper-editorial illustration style, about sorting sosong lumber battens (Korean construction furring strips, "darukki") at a jobsite.

CRITICAL SHAPE RULE — applies to every single timber piece in the image, including the one being rolled, with no exceptions:
- Every timber piece MUST be a rectangular prism / square-section construction batten, approximately 27x27 mm or 30x30 mm in cross-section.
- Absolutely forbidden for any timber piece: cylindrical rod, dowel, roller, round timber, log, pipe-like shape, tube. The rolling motion must NOT visually round off, taper, or smooth the piece into a cylinder — it stays a straight-edged square stick even while being rolled.
- Every piece must show a clearly square or rectangular end-grain face with four distinct sharp corners, and this same square cross-section must be maintained uniformly along its entire visible length.
- Each piece's visible length must be at least ten times its width. Never depict plywood, sheet material, wide flat boards, panels, planks, or oversized beams.

TIMBER COLOR (applies on top of the shape rules above — the shape, count, and composition rules elsewhere in this prompt are unchanged): every batten in the scene shares the same base natural pale softwood tone family — a clean pale beige to light tan, light spruce-pine lumber color. Not too yellow, not a dark or saturated brown, and not plain white or gray timber.
- Left (normal, usable battens): rendered in this pale natural wood tone, clearly reading as straight, sound, new lumber.
- Center (the batten being rolled/inspected): the same base pale natural wood tone as the left battens; its end-grain face may show a very simple, minimal wood-grain mark, but avoid heavy realistic wood texture.
- Right (defective, bowed battens): the base wood color must also be the same pale natural tone as the normal battens — do not make the defective battens entirely pink or red. The normal/defective distinction reads from the actual curved shape plus a restrained secondary red accent (a thin red outline, tint, or emphasis line along the bow), never from coloring the whole piece red or pink.
- Background bundle: the same pale natural wood tone family, but with lower saturation and lower contrast than the foreground battens, keeping it visually secondary.
Black hand-drawn outlines remain on all timber regardless of this wood color.

COMPOSITION (left-to-right flow: normal -> inspection -> defective): pure white background. Scale the main scene (character plus all three timber groups) up so it fills noticeably more of the frame than a loosely-composed version — reduce the empty white margin above the scene by about 20-25 percent compared to a version with a large empty top area, and shift the whole scene upward slightly so it sits higher in the frame. The top area must not look empty or sparse. Keep a modest, genuinely usable caption-safe margin at the very top and bottom for later video captions, but bias any extra space toward making the scene itself bigger rather than leaving blank white space.
- Left: 2-3 straight, undistorted, usable sosong battens lying on the floor, clearly parallel, true long-and-thin darukki proportions.
- Center: one small non-human worker character (see CHARACTER section below for its exact appearance) stands beside one square-section batten lying on the floor. The character's short thin arm must be in visible physical contact with the side of the batten, actively pushing/rolling it along the floor to inspect whether it is bent. Small orange curved motion marks beside the batten show the rolling motion. The batten keeps its square cross-section throughout — it rolls like a square stick, never spins like a cylinder. The character must not lift, hug, or carry the batten.
- Right: place exactly 3 defective sosong battens, each one still built as the same rectangular prism / square-section construction batten as the left and center pieces — same 27x27 mm or 30x30 mm cross-section feel, same four distinct corners, same visible thickness maintained along the whole curved length. Each bowed piece must show some of its side face and at least one end-grain face so it reads as a solid 3D square beam, not a flat shape. Absolutely forbidden for these pieces: flat ribbon, strip of paper, belt, tape, or flat curved board — they must look like a bent rectangular wooden beam, never a flat 2D band. The wood's own silhouette must visibly bow with a gentle, realistic, structurally plausible curve along its length — the defect must be readable from shape alone, without any color. Do not use a red overlay as the only indicator of bending; the timber outline itself must curve. Give the three battens slightly different degrees of bow from each other (not identical curves), and avoid exaggerated S-curves or cartoonishly broken lumber. A restrained red tint may be added along the already-curved length only as a secondary emphasis, never as a substitute for actual curved geometry and never covering the visible side/end faces.

BACKGROUND (subtle secondary layer, behind the main scene): in the middle-to-left background, add one small bundle of just-delivered sosong battens — several long thin battens stacked neatly and horizontally, banded together, as if just unloaded on the jobsite floor. Every batten in this bundle is the same long thin square-section batten (27x27 mm or 30x30 mm cross-section feel) as the foreground pieces — never a wide board, plywood, or panel. Stack the bundle about 2-3 layers high, and optionally show a simple thin banding strap around it. Do not add a truck, forklift, warehouse, or any other complex background elements. Render this background bundle with thin black outlines only, with minimal or no color accent, and keep it visually quieter and lower-contrast than the foreground normal/inspection/defective scene so it clearly reads as background. It must not overlap or obscure the character or the batten being inspected. The intent: at a glance, the whole image should read as sorting through a just-delivered batch of battens on site to pick out the warped ones.

CHARACTER: a small, simple non-human jobsite-worker character — not a solid black blob. The body mass is a dark charcoal-gray or ink-black tone (not flat pure black), with a clean black outline. The face area is a separate white or very pale patch on the head so the eyes read clearly against it; the eyes are small simple black dots or simple small eye shapes. The arms and legs are rendered as thin black-outlined limbs clearly separated from the torso (not a single fused blob shape), with the hands and feet at least minimally distinguished as small distinct shapes at the limb ends. The character must read as wearing simple work clothing, like a plain minimal jobsite worker, not as a shadow, silhouette, or ghost-like mass. Keep it non-human in proportion and anatomy, with a neutral/blank expression and a diligent-worker feeling — avoid cute mascot styling or exaggerated cuteness. The character's short arm stays in visible contact with the batten it is rolling, and the rolling-inspection action must remain clearly readable.

STYLE: vertical 9:16 canvas. Minimal black hand-drawn ink outlines with a slightly wobbly, imperfect pen line quality. Korean webtoon / newspaper editorial illustration style for professional construction-material education. No busy jobsite background, no environmental scenery, no clutter — pure white background only. Not photorealistic, no 3D rendering, no glossy commercial vector-infographic look. Color palette: black for line art and character; natural pale softwood tone for all timber per the TIMBER COLOR section above; red only to emphasize the bowed/defective battens as a secondary tint on top of actual curved geometry; orange only for the small rolling-motion marks; keep all other colors minimal on white.

IN-SCENE KOREAN HAND-LETTERED LABELS: the entire image must contain EXACTLY three text instances in total, no more and no fewer — each of the three phrases below appears exactly once, one single time each, anywhere in the whole illustration. Do not duplicate any phrase, do not repeat the same phrase in two places, and do not add any second phrase with similar or equivalent meaning. Render each as a casual hand-written annotation matching the sketchy ink linework, small enough not to cover or obscure any timber or the character:
1. "사용 가능한 각재" — exactly one instance, placed near the left group of straight battens, in black or a restrained dark ink color.
2. "휘어진 불량 각재" — exactly one instance, placed above or beside the right-side group of bowed battens, may be in red.
3. "현장 폐기 물량" — exactly one instance, placed as a small secondary label below the right-side defective group, may be in red. This label must sit in a clearly different position from the item 2 label above it — the two right-side labels must not overlap, touch, or appear stacked as duplicates of each other.
Do not generate any other text, numbers, English words, logos, watermarks, or signatures anywhere in the image. Only these exact three Korean phrases, exactly once each, with the exact spelling and spacing given above, may appear — five or more text instances, or any repeated phrase, is a failure.`;

function parseArgs(argv) {
  const args = { yes: false, out: null, promptFile: null, inputImage: null, referenceImage: null };
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
    } else if (arg === '--input-image') {
      args.inputImage = argv[i + 1];
      i += 1;
    } else if (arg === '--reference-image') {
      args.referenceImage = argv[i + 1];
      i += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

function mimeTypeForImage(path) {
  const lower = path.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  throw new Error(`Unsupported input image extension for: ${path}`);
}

function loadImagePart(rawPath) {
  const imagePath = resolve(rawPath);
  if (!existsSync(imagePath)) {
    throw new Error(`image not found: ${imagePath}`);
  }
  return {
    path: imagePath,
    mimeType: mimeTypeForImage(imagePath),
    base64: readFileSync(imagePath).toString('base64'),
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.out) {
    console.error('[vertex-image] ERROR missing required --out <path>');
    process.exitCode = 1;
    return;
  }

  const outputPath = resolve(args.out);
  const outputName = basename(outputPath);
  const project = process.env.GOOGLE_CLOUD_PROJECT || DEFAULT_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || DEFAULT_LOCATION;
  const model = process.env.VERTEX_IMAGE_MODEL || DEFAULT_MODEL;
  const prompt = args.promptFile
    ? readFileSync(resolve(args.promptFile), 'utf8')
    : DEFAULT_PROMPT;

  if (existsSync(outputPath)) {
    console.error(`[vertex-image] ERROR output already exists, refusing to overwrite: ${outputPath}`);
    process.exitCode = 1;
    return;
  }
  if (/-vertex-v\d+\.(?:png|jpe?g)$/i.test(outputName)) {
    console.error(
      `[vertex-image] ERROR duplicate raw-candidate filename is forbidden; save the single final candidate directly: ${outputPath}`
    );
    process.exitCode = 1;
    return;
  }

  let inputImagePart = null;
  let referenceImagePart = null;
  try {
    if (args.inputImage) inputImagePart = loadImagePart(args.inputImage);
    if (args.referenceImage) referenceImagePart = loadImagePart(args.referenceImage);
  } catch (error) {
    console.error(`[vertex-image] ERROR ${error.message}`);
    process.exitCode = 1;
    return;
  }

  // Single non-secret status line logged before any network call.
  console.log(
    `[vertex-image] call_count=1 model=${model} project=${project} location=${location} output=${outputPath} prompt_chars=${prompt.length} input_image=${inputImagePart ? inputImagePart.path : 'none'} reference_image=${referenceImagePart ? referenceImagePart.path : 'none'}`
  );

  if (!args.yes) {
    console.log('[vertex-image] DRY RUN (no --yes passed) — no network request sent.');
    return;
  }

  runOnce({ project, location, model, prompt, outputPath, inputImagePart, referenceImagePart }).catch((error) => {
    if (error instanceof ApiError) {
      console.error(`[vertex-image] FAILED status=${error.status} message=${error.message}`);
    } else {
      console.error(`[vertex-image] FAILED (non-API error) message=${error.message}`);
    }
    process.exitCode = 1;
  });
}

async function runOnce({ project, location, model, prompt, outputPath, inputImagePart, referenceImagePart }) {
  // vertexai: true routes through the Vertex AI (Gemini Enterprise Agent
  // Platform) API using ADC — no apiKey, no service account file.
  const ai = new GoogleGenAI({ vertexai: true, project, location });

  const imageParts = [inputImagePart, referenceImagePart]
    .filter(Boolean)
    .map((part) => ({ inlineData: { mimeType: part.mimeType, data: part.base64 } }));
  const requestParts = [...imageParts, { text: prompt }];

  // Exactly one call. No retry on failure.
  const response = await ai.models.generateContent({
    model,
    contents: [{ role: 'user', parts: requestParts }],
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
      candidateCount: 1,
      imageConfig: { aspectRatio: '9:16', imageSize: '1K' },
    },
  });

  const blockReason = response.promptFeedback?.blockReason;
  if (blockReason) {
    console.error(`[vertex-image] FAILED blocked by prompt safety filter: ${blockReason}`);
    process.exitCode = 1;
    return;
  }

  const parts = response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find(
    (part) => part.inlineData?.data && part.inlineData.mimeType?.startsWith('image/')
  );

  if (!imagePart) {
    console.error('[vertex-image] FAILED no image data in response candidates');
    if (response.text) {
      console.error(`[vertex-image] model returned text instead: ${response.text}`);
    }
    process.exitCode = 1;
    return;
  }

  const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
  writeFileSync(outputPath, buffer);
  console.log(
    `[vertex-image] SAVED path=${outputPath} mime=${imagePart.inlineData.mimeType} bytes=${buffer.length}`
  );
}

main();
