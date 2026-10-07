// Step 1 of the local Scene 2 character-resize composite: extract the
// character as a standalone RGBA sprite via a bounded flood fill (non-white
// connected region from a seed inside the body), so disconnected elements
// like label text are excluded. Pure local pixel processing, no network.
import { PNG } from 'pngjs';
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = 'public/assets/images/scene02-vertex-reference-v4-face-fixed.png';
const SEED = [560, 900];
const WHITE_THRESHOLD = 240; // lum >= this counts as background

const png = PNG.sync.read(readFileSync(SRC));
const { width, height, data } = png;
const idx = (x, y) => (width * y + x) << 2;

// Tight asymmetric fence: left bound just clears the wall panel/crack (which
// the character's hand touches, so pure color-connectivity would otherwise
// leak the fill into the panel); right/top/bottom give generous margin.
const minXBound = 445;
const maxXBound = Math.min(width - 1, SEED[0] + 250);
const minYBound = 600;
const maxYBound = Math.min(height - 1, SEED[1] + 300);

const visited = new Uint8Array(width * height);
const mask = new Uint8Array(width * height);
const queue = [SEED];
visited[width * SEED[1] + SEED[0]] = 1;

let bx0 = SEED[0], bx1 = SEED[0], by0 = SEED[1], by1 = SEED[1];

while (queue.length) {
  const [x, y] = queue.pop();
  const i = idx(x, y);
  const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
  if (lum >= WHITE_THRESHOLD) continue; // background, do not mark or expand
  mask[width * y + x] = 1;
  if (x < bx0) bx0 = x;
  if (x > bx1) bx1 = x;
  if (y < by0) by0 = y;
  if (y > by1) by1 = y;
  const neighbors = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
  for (const [nx, ny] of neighbors) {
    if (nx < minXBound || nx > maxXBound || ny < minYBound || ny > maxYBound) continue;
    const v = width * ny + nx;
    if (visited[v]) continue;
    visited[v] = 1;
    queue.push([nx, ny]);
  }
}

console.log(`[sprite-extract] mask bbox x:${bx0}-${bx1} y:${by0}-${by1} (${bx1 - bx0 + 1}x${by1 - by0 + 1})`);

const margin = 3;
const ox = Math.max(0, bx0 - margin);
const oy = Math.max(0, by0 - margin);
const ow = Math.min(width - ox, bx1 - bx0 + 1 + margin * 2);
const oh = Math.min(height - oy, by1 - by0 + 1 + margin * 2);

const sprite = new PNG({ width: ow, height: oh });
for (let y = 0; y < oh; y += 1) {
  for (let x = 0; x < ow; x += 1) {
    const sx = ox + x;
    const sy = oy + y;
    const si = idx(sx, sy);
    const di = (ow * y + x) << 2;
    const isChar = mask[width * sy + sx] === 1;
    sprite.data[di] = data[si];
    sprite.data[di + 1] = data[si + 1];
    sprite.data[di + 2] = data[si + 2];
    sprite.data[di + 3] = isChar ? 255 : 0;
  }
}

writeFileSync(process.argv[2] || 'sprite.png', PNG.sync.write(sprite));
console.log(`[sprite-extract] META ${JSON.stringify({ ox, oy, ow, oh, bx0, bx1, by0, by1 })}`);
console.log(`[sprite-extract] SAVED sprite origin=(${ox},${oy}) size=${ow}x${oh}`);
