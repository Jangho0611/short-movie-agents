const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/eboard-installation-shorts-v2';
const FRAME = '/tmp/mdf-cover-source.png';
const LOGO = path.join(ROOT, 'public/assets/logos/daesanlogo2.png');
const OUTPUT = path.join(ROOT, 'public/covers/mdf-price-cover-v3.png');
const W = 1080;
const H = 1920;
const GREEN = '#146335';
const INK = '#171A18';

const svg = (body) => Buffer.from(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="readability" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.98"/>
      <stop offset="0.72" stop-color="#ffffff" stop-opacity="0.76"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <style>
    .headline { font-family: Apple SD Gothic Neo, sans-serif; font-weight: 800; letter-spacing: -3px; }
    .category { font-family: Apple SD Gothic Neo, sans-serif; font-weight: 700; letter-spacing: -0.5px; }
    .brand { font-family: Arial, sans-serif; font-weight: 700; letter-spacing: 2px; }
  </style>
  ${body}
</svg>`);

async function logoMark() {
  const alpha = await sharp(LOGO)
    .resize(82, 82, {fit: 'contain'})
    .ensureAlpha()
    .extractChannel('alpha')
    .raw()
    .toBuffer();
  return sharp({create: {width: 82, height: 82, channels: 3, background: GREEN}})
    .joinChannel(alpha, {raw: {width: 82, height: 82, channels: 1}})
    .png()
    .toBuffer();
}

async function main() {
  const base = await sharp(FRAME).resize(W, H, {fit: 'cover', position: 'centre'}).png().toBuffer();
  const mark = await logoMark();
  const typography = svg(`
    <rect x="0" y="0" width="1080" height="690" fill="url(#readability)"/>
    <rect x="76" y="223" width="9" height="40" rx="4.5" fill="${GREEN}"/>
    <text x="105" y="253" font-size="34" fill="${GREEN}" class="category">건축자재 상식 · MDF</text>
    <text x="76" y="397" font-size="88" fill="${INK}" class="headline">같은 MDF인데</text>
    <text x="76" y="515" font-size="94" fill="${GREEN}" class="headline">왜 가격이 다를까?</text>
    <path d="M76 575 H1004" stroke="${GREEN}" stroke-width="2" stroke-opacity="0.28"/>
    <text x="174" y="1555" font-size="43" fill="${GREEN}" class="brand">DAESAN</text>
    <text x="174" y="1594" font-size="25" fill="#303733" class="category">대산종합건축자재</text>
  `);

  await sharp(base)
    .composite([
      {input: typography, left: 0, top: 0},
      {input: mark, left: 76, top: 1523},
    ])
    .png({compressionLevel: 9})
    .toFile(OUTPUT);
  process.stdout.write(`${OUTPUT}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
