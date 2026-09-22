const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/short-movie-agents';
const OUT = path.join(ROOT, 'public/covers');
const TMP = path.join(ROOT, 'tmp');
const LOGO = '/Users/janghokim/Documents/gypsum-board-installation-shorts/public/assets/logos/daesanlogo2.png';

const ASSETS = {
  gypsum: '/Users/janghokim/Documents/gypsum-board-installation-shorts/public/references/scene05-start-v1.png',
  darukki: '/Users/janghokim/Documents/darukki-vs-twobuy-webtoon-shorts/public/references/scene01-hook-reference-final.png',
  boards: '/Users/janghokim/Documents/remotion_video/MDF_vs_PB_vs_Plywood/reference/generated/scene2-compare-final.png',
};

const W = 1080;
const H = 1920;
const GREEN = '#0B5A3C';
const DEEP_GREEN = '#0D3B2D';
const INK = '#171A18';
const PAPER = '#F5F1E8';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const esc = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const svg = (body, width = W, height = H) => Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .sans { font-family: ${FONT}; }
      .headline { font-family: ${FONT}; font-weight: 800; letter-spacing: -3px; }
      .category { font-family: ${FONT}; font-weight: 700; letter-spacing: -0.6px; }
      .brand { font-family: Arial, sans-serif; font-weight: 700; letter-spacing: 2px; }
    </style>
    ${body}
  </svg>`);

const textLine = (x, y, text, size, fill = INK, cls = 'headline') =>
  `<text x="${x}" y="${y}" class="${cls}" font-size="${size}" fill="${fill}">${esc(text)}</text>`;

const category = (text, y = 330, fill = DEEP_GREEN) => `
  <rect x="76" y="${y - 29}" width="9" height="42" rx="4.5" fill="${GREEN}"/>
  ${textLine(105, y, text, 31, fill, 'category')}`;

const brandText = (x, y, dark = false, colors = null) => {
  const color = colors?.primary || (dark ? '#FFFFFF' : DEEP_GREEN);
  const sub = colors?.secondary || (dark ? '#D9E5DE' : '#303733');
  return `
    ${textLine(x, y, 'DAESAN', 43, color, 'brand')}
    ${textLine(x, y + 39, '대산종합건축자재', 25, sub, 'category')}`;
};

async function resized(input, width, height, fit = 'cover', position = 'centre') {
  return sharp(input).resize(width, height, {fit, position}).png().toBuffer();
}

async function logo(width = 84, tint = null) {
  if (!tint) return sharp(LOGO).resize(width, width, {fit: 'contain'}).png().toBuffer();
  const alpha = await sharp(LOGO)
    .resize(width, width, {fit: 'contain'})
    .ensureAlpha()
    .extractChannel('alpha')
    .raw()
    .toBuffer();
  return sharp({create: {width, height: width, channels: 3, background: tint}})
    .joinChannel(alpha, {raw: {width, height: width, channels: 1}})
    .png()
    .toBuffer();
}

async function writeCover(fileName, base, overlays) {
  const target = path.join(OUT, fileName);
  await sharp(base).composite(overlays).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderGypsum() {
  const base = await resized(ASSETS.gypsum, W, H, 'cover', 'centre');
  const mark = await logo(82, '#062F24');
  const typography = svg(`
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#F7F3EA" stop-opacity="0.97"/>
        <stop offset="0.78" stop-color="#F7F3EA" stop-opacity="0.88"/>
        <stop offset="1" stop-color="#F7F3EA" stop-opacity="0.18"/>
      </linearGradient>
    </defs>
    <path d="M40 220 H930 L820 790 H40 Z" fill="url(#shade)"/>
    <rect x="40" y="220" width="10" height="570" rx="5" fill="${GREEN}"/>
    ${category('건축자재 상식 · 석고보드 시공', 330)}
    ${textLine(76, 475, '석고보드 벽,', 88)}
    ${textLine(76, 595, '안쪽은 어떻게 만들까?', 74, GREEN)}
    ${brandText(174, 1542, false, {primary: '#062F24', secondary: '#202824'})}
    <path d="M835 1360 L1010 1360" stroke="${GREEN}" stroke-width="8"/>
    <path d="M922 1272 L922 1448" stroke="${GREEN}" stroke-width="8"/>
  `);
  return writeCover('gypsum-wall-cover-final.png', base, [
    {input: typography, top: 0, left: 0},
    {input: mark, top: 1510, left: 76},
  ]);
}

async function renderDarukki() {
  const base = await resized(ASSETS.darukki, W, H, 'cover', 'centre');
  const mark = await logo(82);
  const typography = svg(`
    <rect width="1080" height="1920" fill="#FFFFFF" fill-opacity="0.02"/>
    <rect x="44" y="220" width="992" height="500" rx="38" fill="#DDEFE4" fill-opacity="0.96"/>
    <circle cx="986" cy="270" r="18" fill="${GREEN}"/>
    <circle cx="936" cy="270" r="8" fill="#171A18"/>
    ${category('건축자재 상식 · 각재', 320)}
    ${textLine(76, 450, '다루끼 vs 투바이,', 82)}
    ${textLine(76, 555, '크기만 다를까?', 92, GREEN)}
    <path d="M76 642 H440" stroke="#171A18" stroke-width="3"/>
    <path d="M640 642 H1004" stroke="#171A18" stroke-width="3"/>
    <rect x="76" y="1252" width="208" height="68" rx="34" fill="#FFFFFF" stroke="#B7D9C4" stroke-width="2"/>
    ${textLine(130, 1298, '다루끼', 36, DEEP_GREEN, 'category')}
    <rect x="796" y="1252" width="208" height="68" rx="34" fill="#FFFFFF" stroke="#B7D9C4" stroke-width="2"/>
    ${textLine(850, 1298, '투바이', 36, DEEP_GREEN, 'category')}
    ${brandText(174, 1542)}
  `);
  return writeCover('daruki-vs-twoby-cover-v2.png', base, [
    {input: typography, top: 0, left: 0},
    {input: mark, top: 1510, left: 76},
  ]);
}

async function renderBoards() {
  const baseImage = await resized(ASSETS.boards, W, H, 'cover', 'centre');
  const darkBase = await sharp(baseImage).modulate({brightness: 0.82, saturation: 0.88}).png().toBuffer();
  const mark = await logo(82, '#F3F4F2');
  const typography = svg(`
    <defs>
      <linearGradient id="topfade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#07110D" stop-opacity="0.98"/>
        <stop offset="0.76" stop-color="#07110D" stop-opacity="0.80"/>
        <stop offset="1" stop-color="#07110D" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="760" fill="url(#topfade)"/>
    <rect x="0" y="0" width="16" height="1920" fill="${GREEN}"/>
    ${category('건축자재 상식 · 판재', 320, '#CBE5D7')}
    ${textLine(76, 470, 'MDF·PB·합판,', 92, '#FFFFFF')}
    ${textLine(76, 600, '속은 어떻게 다를까?', 82, '#63C58E')}
    <path d="M76 746 H1004" stroke="#355746" stroke-width="2"/>
    ${textLine(136, 1382, 'MDF', 34, '#FFFFFF', 'brand')}
    ${textLine(500, 1382, 'PB', 34, '#FFFFFF', 'brand')}
    ${textLine(803, 1382, '합판', 34, '#FFFFFF', 'category')}
    ${brandText(174, 1542, true)}
    <rect x="1000" y="1470" width="24" height="24" fill="#63C58E"/>
  `);
  return writeCover('mdf-pb-plywood-cover-v2.png', darkBase, [
    {input: typography, top: 0, left: 0},
    {input: mark, top: 1510, left: 76},
  ]);
}

async function renderContactSheet(covers) {
  const thumbW = 405;
  const thumbH = 720;
  const gap = 32;
  const margin = 56;
  const sheetW = margin * 2 + thumbW * 3 + gap * 2;
  const sheetH = 910;
  const thumbs = await Promise.all(covers.map((cover) => resized(cover, thumbW, thumbH, 'cover')));
  const labels = svg(`
    <rect width="${sheetW}" height="${sheetH}" fill="#ECE9E2"/>
    ${textLine(56, 62, 'DAESAN COVER SYSTEM · BATCH 01', 28, DEEP_GREEN, 'brand')}
    ${textLine(56, 98, 'Feed consistency contact sheet · QA only', 20, '#58605B', 'brand')}
    ${textLine(56, 866, '01  석고보드 벽체 시공', 22, INK, 'category')}
    ${textLine(56 + thumbW + gap, 866, '02  다루끼 vs 투바이', 22, INK, 'category')}
    ${textLine(56 + (thumbW + gap) * 2, 866, '03  MDF·PB·합판', 22, INK, 'category')}
  `, sheetW, sheetH);
  const target = path.join(TMP, 'batch01-cover-contact-sheet-final.png');
  await sharp(labels).composite(thumbs.map((input, index) => ({
    input,
    top: 126,
    left: margin + index * (thumbW + gap),
  }))).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function main() {
  fs.mkdirSync(OUT, {recursive: true});
  fs.mkdirSync(TMP, {recursive: true});
  const gypsum = await renderGypsum();
  const darukki = path.join(OUT, 'daruki-vs-twoby-cover-final.png');
  const boards = path.join(OUT, 'mdf-pb-plywood-cover-final.png');
  fs.copyFileSync(path.join(OUT, 'daruki-vs-twoby-cover-v2.png'), darukki);
  fs.copyFileSync(path.join(OUT, 'mdf-pb-plywood-cover-v2.png'), boards);
  const covers = [gypsum, darukki, boards];
  const contactSheet = await renderContactSheet(covers);
  process.stdout.write(JSON.stringify({covers, contactSheet}, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
