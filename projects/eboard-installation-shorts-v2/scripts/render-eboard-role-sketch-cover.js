const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/eboard-installation-shorts-v2';
const FRAME = path.join(ROOT, 'public/covers/source/eboard-role-frame-05.0s.png');
const LOGO = path.join(ROOT, 'public/assets/logos/daesanlogo2.png');
const OUT = path.join(ROOT, 'public/covers/eboard-role-sketch-cover-v1.png');
const CROP = path.join(ROOT, 'public/covers/qa/eboard-role-sketch-cover-v1-instagram-center-crop.png');

const W = 1080;
const H = 1920;
const GREEN = '#0B5A3C';
const DEEP = '#0D3B2D';
const INK = '#171A18';
const PAPER = '#F2F2F0';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const typography = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .category { font-family:${FONT}; font-weight:700; letter-spacing:-0.6px; }
    .headline { font-family:${FONT}; font-weight:800; letter-spacing:-3px; }
    .brand { font-family:Arial, sans-serif; font-weight:700; letter-spacing:2px; }
  </style>
  <rect x="76" y="278" width="10" height="44" rx="5" fill="${GREEN}"/>
  <text x="106" y="313" class="category" font-size="31" fill="${DEEP}">건축자재 상식 · 이보드</text>
  <text x="76" y="432" class="headline" font-size="90" fill="${INK}">이보드,</text>
  <text x="76" y="542" class="headline" font-size="92"><tspan fill="${GREEN}">단열만</tspan><tspan dx="22" fill="${INK}">할까?</tspan></text>
  <text x="174" y="1668" class="brand" font-size="43" fill="${DEEP}">DAESAN</text>
  <text x="174" y="1707" class="category" font-size="25" fill="#303733">대산종합건축자재</text>
</svg>`);

async function main() {
  const base = await sharp({
    create: {width: W, height: H, channels: 3, background: PAPER},
  }).png().toBuffer();

  // Preserve the complete source frame and its paper/sketch character; only scale and position it.
  const sketch = await sharp(FRAME)
    .resize(900, 1596, {fit: 'fill'})
    .png()
    .toBuffer();
  const mark = await sharp(LOGO).resize(82, 82, {fit: 'contain'}).png().toBuffer();

  await sharp(base).composite([
    {input: sketch, top: 280, left: 90},
    {input: typography, top: 0, left: 0},
    {input: mark, top: 1634, left: 76},
  ]).png({compressionLevel: 9}).toFile(OUT);

  await sharp(OUT)
    .extract({left: 0, top: 240, width: 1080, height: 1440})
    .png({compressionLevel: 9})
    .toFile(CROP);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
