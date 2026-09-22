const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/short-movie-agents';
const OUT = path.join(ROOT, 'public/covers');
const FRAME = path.join(ROOT, 'tmp/external-gypsum-analysis/chinese/frame-13.png');
const LOGO = '/Users/janghokim/Documents/remotion_video/mdf-density/public/daesanlogo2.png';
const W = 1080;
const H = 1920;
const GREEN = '#0B5A3C';
const DEEP = '#073E2D';
const CREAM = '#F3EFE0';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const svg = (body) => Buffer.from(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><style>.h{font-family:${FONT};font-weight:800;letter-spacing:-3px}.c{font-family:${FONT};font-weight:700;letter-spacing:-.5px}.b{font-family:Arial,sans-serif;font-weight:700;letter-spacing:2px}</style>${body}</svg>`);
const text = (x, y, value, size, fill, cls = 'h') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" class="${cls}">${esc(value)}</text>`;
const category = (value, y) => `<rect x="76" y="${y - 28}" width="9" height="40" rx="4.5" fill="#68D498"/>${text(105, y, value, 30, '#DDEBE5', 'c')}`;
const brand = (y) => `${text(174, y, 'DAESAN', 43, '#FFFFFF', 'b')}${text(174, y + 39, '대산종합건축자재', 25, '#E0E8E3', 'c')}`;

async function logo() {
  const alpha = await sharp(LOGO).resize(82, 82, {fit: 'contain'}).ensureAlpha().extractChannel('alpha').raw().toBuffer();
  return sharp({create: {width: 82, height: 82, channels: 3, background: '#FFFFFF'}}).joinChannel(alpha, {raw: {width: 82, height: 82, channels: 1}}).png().toBuffer();
}

async function main() {
  const hero = await sharp(FRAME)
    .extract({left: 0, top: 0, width: 540, height: 360})
    .resize({width: 960})
    .png()
    .toBuffer();
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#073D2F"/>
    <circle cx="920" cy="250" r="120" fill="#0D5A43"/>
    <path d="M0 765 C240 690 430 760 540 850 C700 730 880 710 1080 790 V1510 H0 Z" fill="${CREAM}"/>
    ${category('건축자재 비교 · 석고보드', 316)}
    ${text(76, 458, '10% 저렴한데,', 91, '#FFFFFF')}
    ${text(76, 578, '왜 선택받지 못했을까?', 79, '#6DDA9C')}
    <path d="M76 650 H1004" stroke="#2F6F5B" stroke-width="2"/>
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'chinese-gypsum-external-cover-v2.png');
  await sharp(base).composite([
    {input: hero, left: 60, top: 850},
    {input: mark, left: 76, top: 1538},
  ]).png({compressionLevel: 9}).toFile(target);
  process.stdout.write(target);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
