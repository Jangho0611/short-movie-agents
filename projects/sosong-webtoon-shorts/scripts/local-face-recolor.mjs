// Local-only pixel post-processing: recolor a character's face-fill region to
// a target color via a bounded, color-distance flood fill seeded at a known
// point inside the face. No network calls, no generation API of any kind —
// pure local PNG pixel editing with pngjs.
//
// The flood fill is naturally stopped by the character's existing black ink
// outline (which is far outside the color-distance threshold), so it cannot
// spread into the body, background, or other objects as long as the outline
// has no gaps. As a safety fence against any such gap, each seed is also
// capped to a small bounding box around itself.
//
// Usage:
//   node scripts/local-face-recolor.mjs --in <path> --out <path> \
//     --seed x,y [--seed x,y ...] --target RRGGBB \
//     [--core 24] [--edge 60] [--box 90]

import { PNG } from 'pngjs';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function parseArgs(argv) {
  const args = { in: null, out: null, seeds: [], target: 'E4DFD9', core: 24, edge: 60, box: 90 };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--in') args.in = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--seed') args.seeds.push(argv[++i]);
    else if (a === '--target') args.target = argv[++i];
    else if (a === '--core') args.core = Number(argv[++i]);
    else if (a === '--edge') args.edge = Number(argv[++i]);
    else if (a === '--box') args.box = Number(argv[++i]);
    else throw new Error(`Unknown argument: ${a}`);
  }
  return args;
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function colorDistance(r1, g1, b1, r2, g2, b2) {
  const dr = r1 - r2;
  const dg = g1 - g2;
  const db = b1 - b2;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function floodRecolor(png, seedX, seedY, target, core, edge, box) {
  const { width, height, data } = png;
  const idx = (x, y) => (width * y + x) << 2;

  const seedI = idx(seedX, seedY);
  const seed = { r: data[seedI], g: data[seedI + 1], b: data[seedI + 2] };

  const minX = Math.max(0, seedX - box);
  const maxX = Math.min(width - 1, seedX + box);
  const minY = Math.max(0, seedY - box);
  const maxY = Math.min(height - 1, seedY + box);

  const visited = new Uint8Array(width * height);
  const queue = [[seedX, seedY]];
  visited[width * seedY + seedX] = 1;
  let corePixels = 0;
  let edgePixels = 0;

  while (queue.length) {
    const [x, y] = queue.pop();
    const i = idx(x, y);
    const d = colorDistance(data[i], data[i + 1], data[i + 2], seed.r, seed.g, seed.b);

    if (d <= core) {
      corePixels += 1;
      data[i] = target.r;
      data[i + 1] = target.g;
      data[i + 2] = target.b;
      // Expand only from core pixels, and only within the safety box.
      const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
      for (const [nx, ny] of neighbors) {
        if (nx < minX || nx > maxX || ny < minY || ny > maxY) continue;
        const vIdx = width * ny + nx;
        if (visited[vIdx]) continue;
        visited[vIdx] = 1;
        queue.push([nx, ny]);
      }
    } else if (d <= edge) {
      edgePixels += 1;
      // Soft blend for anti-aliased boundary pixels; do not expand further.
      const t = 1 - (d - core) / (edge - core); // 1 near core, ->0 near edge threshold
      data[i] = Math.round(data[i] * (1 - t) + target.r * t);
      data[i + 1] = Math.round(data[i + 1] * (1 - t) + target.g * t);
      data[i + 2] = Math.round(data[i + 2] * (1 - t) + target.b * t);
    }
    // else: outside edge threshold (e.g. black outline, eyes) — untouched, not expanded.
  }

  return { corePixels, edgePixels, seedColor: seed };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.in || !args.out || args.seeds.length === 0) {
    console.error('[face-recolor] ERROR requires --in, --out, and at least one --seed x,y');
    process.exitCode = 1;
    return;
  }

  const inPath = resolve(args.in);
  const outPath = resolve(args.out);
  if (!existsSync(inPath)) {
    console.error(`[face-recolor] ERROR input not found: ${inPath}`);
    process.exitCode = 1;
    return;
  }
  if (existsSync(outPath)) {
    console.error(`[face-recolor] ERROR output already exists, refusing to overwrite: ${outPath}`);
    process.exitCode = 1;
    return;
  }

  const png = PNG.sync.read(readFileSync(inPath));
  const target = hexToRgb(args.target);

  console.log(
    `[face-recolor] LOCAL ONLY (no network) in=${inPath} out=${outPath} target=#${args.target} core=${args.core} edge=${args.edge} box=${args.box} seeds=${args.seeds.length}`
  );

  for (const seedArg of args.seeds) {
    const [sx, sy] = seedArg.split(',').map(Number);
    const { corePixels, edgePixels, seedColor } = floodRecolor(
      png, sx, sy, target, args.core, args.edge, args.box
    );
    console.log(
      `[face-recolor] seed=(${sx},${sy}) seed_color=#${seedColor.r.toString(16).padStart(2, '0')}${seedColor.g.toString(16).padStart(2, '0')}${seedColor.b.toString(16).padStart(2, '0')} core_pixels=${corePixels} edge_pixels=${edgePixels}`
    );
  }

  writeFileSync(outPath, PNG.sync.write(png));
  console.log(`[face-recolor] SAVED ${outPath}`);
}

main();
