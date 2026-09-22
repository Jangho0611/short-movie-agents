const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/short-movie-agents';
const OUT = path.join(ROOT, 'public/covers');
const TMP = path.join(ROOT, 'tmp');
const LOGO = '/Users/janghokim/Documents/sosong-lvl-webtoon-shorts/public/assets/logos/daesanlogo2.png';
const W = 1080;
const H = 1920;
const GREEN = '#0B5A3C';
const DEEP = '#073E2D';
const INK = '#171A18';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const ASSETS = {
  sosong: '/Users/janghokim/Documents/sosong-webtoon-shorts/public/assets/images/scene01-vertex-reference-v4.png',
  lvl: '/Users/janghokim/Documents/sosong-lvl-webtoon-shorts/public/assets/images/scene01-reference-v1.png',
  gypsum: '/Users/janghokim/Documents/xi-natural-gypsum-webtoon-shorts/public/assets/images/scene02-final.png',
};

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const svg = (body, width = W, height = H) => Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><style>.sans{font-family:${FONT}}.h{font-family:${FONT};font-weight:800;letter-spacing:-3px}.c{font-family:${FONT};font-weight:700;letter-spacing:-.5px}.b{font-family:Arial,sans-serif;font-weight:700;letter-spacing:2px}</style>${body}</svg>`);
const text = (x, y, value, size, fill = INK, cls = 'h') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" class="${cls}">${esc(value)}</text>`;
const category = (value, y, fill = DEEP, accent = GREEN) => `<rect x="76" y="${y - 28}" width="9" height="40" rx="4.5" fill="${accent}"/>${text(105, y, value, 30, fill, 'c')}`;
const brand = (y, dark = false) => `${text(174, y, 'DAESAN', 43, dark ? '#FFFFFF' : DEEP, 'b')}${text(174, y + 39, '대산종합건축자재', 25, dark ? '#D9E5DE' : '#303733', 'c')}`;

async function resized(input, width, height, fit = 'cover', position = 'centre') {
  return sharp(input).resize(width, height, {fit, position}).png().toBuffer();
}

async function logo(width = 82, tint = DEEP) {
  const alpha = await sharp(LOGO).resize(width, width, {fit: 'contain'}).ensureAlpha().extractChannel('alpha').raw().toBuffer();
  return sharp({create: {width, height: width, channels: 3, background: tint}}).joinChannel(alpha, {raw: {width, height: width, channels: 1}}).png().toBuffer();
}

async function cutout(input, crop, erase = []) {
  const {data, info} = await sharp(input).extract(crop).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  const {width, height} = info;
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;
  const isBackground = (index) => {
    const offset = index * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    return r >= 236 && g >= 236 && b >= 236 && Math.max(r, g, b) - Math.min(r, g, b) <= 14;
  };
  const add = (index) => {
    if (!seen[index] && isBackground(index)) {
      seen[index] = 1;
      queue[tail++] = index;
    }
  };
  for (let x = 0; x < width; x++) { add(x); add((height - 1) * width + x); }
  for (let y = 0; y < height; y++) { add(y * width); add(y * width + width - 1); }
  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    if (x > 0) add(index - 1);
    if (x + 1 < width) add(index + 1);
    if (y > 0) add(index - width);
    if (y + 1 < height) add(index + width);
  }
  for (let i = 0; i < seen.length; i++) if (seen[i]) data[i * 4 + 3] = 0;
  for (const box of erase) {
    for (let y = box.top; y < Math.min(height, box.top + box.height); y++) {
      for (let x = box.left; x < Math.min(width, box.left + box.width); x++) data[(y * width + x) * 4 + 3] = 0;
    }
  }
  return sharp(data, {raw: {width, height, channels: 4}}).png().toBuffer();
}

async function renderSosong() {
  const hero = await resized(ASSETS.sosong, 928, 720, 'cover', 'centre');
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#F5F0E6"/>
    <rect x="44" y="220" width="992" height="1460" rx="34" fill="#FBF8F1"/>
    <rect x="44" y="220" width="12" height="1460" rx="6" fill="${GREEN}"/>
    ${category('현장 자재 상식 · 소송각재', 318)}
    ${text(76, 460, '각재가 휘었다면,', 88)}
    ${text(76, 575, '원인은 뭘까?', 98, GREEN)}
    <path d="M76 645 H1004" stroke="#D7D0C4" stroke-width="2"/>
    ${text(76, 710, '납품 품질 · 건조 상태 · 실측 확인', 29, '#5B625E', 'c')}
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'sosong-lumber-quality-cover-v1.png');
  await sharp(base).composite([{input: hero, top: 750, left: 76}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderLvl() {
  const hero = await resized(ASSETS.lvl, 928, 700, 'cover', 'centre');
  const mark = await logo(82, '#FFFFFF');
  const base = svg(`
    <rect width="1080" height="1920" fill="#082F26"/>
    <path d="M0 0 H1080 V760 L0 900 Z" fill="#0B3E31"/>
    <circle cx="930" cy="270" r="120" fill="#23A36A" fill-opacity=".16"/>
    ${category('건축자재 비교 · 구조용 각재', 318, '#CDE7DB', '#53C88B')}
    ${text(76, 460, '소송각재 vs LVL,', 86, '#FFFFFF')}
    ${text(76, 575, '무엇이 다를까?', 96, '#67D598')}
    <path d="M76 650 H1004" stroke="#3D7060" stroke-width="2"/>
    <rect x="76" y="748" width="928" height="700" rx="28" fill="#FFFFFF"/>
    ${text(112, 820, '원목의 변화', 27, DEEP, 'c')}
    ${text(790, 820, '적층의 안정성', 27, DEEP, 'c')}
    ${brand(1570, true)}
  `);
  const target = path.join(OUT, 'sosong-vs-lvl-cover-v1.png');
  await sharp(base).composite([{input: hero, top: 748, left: 76}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderGypsum() {
  const hero = await resized(ASSETS.gypsum, 928, 730, 'cover', 'centre');
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#F3F5EF"/>
    <rect x="0" y="0" width="1080" height="720" fill="#E4EEE7"/>
    <path d="M760 0 H1080 V720 H925 Z" fill="#CFE2D5"/>
    ${category('건축자재 상식 · 석고보드 원료', 318)}
    ${text(76, 458, '같은 석고보드,', 90)}
    ${text(76, 578, '원료도 같을까?', 96, GREEN)}
    <rect x="76" y="720" width="928" height="730" rx="34" fill="#FFFFFF"/>
    ${text(112, 790, '천연석고', 29, DEEP, 'c')}
    ${text(806, 790, '배연탈황석고', 29, DEEP, 'c')}
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'natural-vs-fgd-gypsum-cover-v1.png');
  await sharp(base).composite([{input: hero, top: 720, left: 76}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderSosongV2(outputName = 'sosong-lumber-quality-cover-v2.png') {
  const hero = await cutout(ASSETS.sosong, {left: 16, top: 350, width: 736, height: 790}, [
    {left: 20, top: 285, width: 142, height: 84},
    {left: 510, top: 205, width: 226, height: 66},
    {left: 500, top: 755, width: 236, height: 35},
    {left: 156, top: 299, width: 12, height: 12},
    {left: 86, top: 416, width: 14, height: 14},
  ]);
  const placed = await sharp(hero).resize(920, 988, {fit: 'contain'}).png().toBuffer();
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#F5F0E6"/>
    <circle cx="950" cy="920" r="360" fill="#E7EFE8"/>
    <path d="M44 220 H52 V1680 H44 Z" fill="${GREEN}"/>
    ${category('현장 자재 상식 · 소송각재', 318)}
    ${text(76, 460, '각재가 휘었다면,', 88)}
    ${text(76, 575, '원인은 뭘까?', 98, GREEN)}
    ${text(76, 660, '납품 품질 · 건조 상태 · 실측 확인', 29, '#5B625E', 'c')}
    ${brand(1570)}
  `);
  const target = path.join(OUT, outputName);
  await sharp(base).composite([{input: placed, top: 690, left: 80}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderLvlV2() {
  const hero = await cutout(ASSETS.lvl, {left: 0, top: 850, width: 941, height: 430});
  const placed = await sharp(hero).resize(1020, 466, {fit: 'contain'}).png().toBuffer();
  const mark = await logo(82, '#FFFFFF');
  const base = svg(`
    <rect width="1080" height="1920" fill="#082F26"/>
    <path d="M0 0 H1080 V760 L0 900 Z" fill="#0B3E31"/>
    <circle cx="930" cy="270" r="120" fill="#23A36A" fill-opacity=".16"/>
    ${category('건축자재 비교 · 구조용 각재', 318, '#CDE7DB', '#53C88B')}
    ${text(76, 460, '소송각재 vs LVL,', 86, '#FFFFFF')}
    ${text(76, 575, '무엇이 다를까?', 96, '#67D598')}
    <path d="M76 650 H1004" stroke="#3D7060" stroke-width="2"/>
    <ellipse cx="540" cy="1328" rx="430" ry="54" fill="#021B15" fill-opacity=".38"/>
    <rect x="92" y="760" width="176" height="54" rx="27" fill="#F5F0E6"/>
    ${text(126, 797, '소송각재', 25, DEEP, 'c')}
    <rect x="824" y="760" width="164" height="54" rx="27" fill="#F5F0E6"/>
    ${text(876, 797, 'LVL', 25, DEEP, 'c')}
    ${brand(1570, true)}
  `);
  const target = path.join(OUT, 'sosong-vs-lvl-cover-v2.png');
  await sharp(base).composite([{input: placed, top: 900, left: 30}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderGypsumV2() {
  const hero = await cutout(ASSETS.gypsum, {left: 40, top: 250, width: 868, height: 930});
  const placed = await sharp(hero).resize(900, 964, {fit: 'contain'}).png().toBuffer();
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#F3F5EF"/>
    <path d="M0 0 H1080 V1260 C840 1160 660 1220 540 1320 C380 1190 210 1160 0 1260 Z" fill="#E4EEE7"/>
    <circle cx="270" cy="980" r="280" fill="#F3EBDD" fill-opacity=".72"/>
    <circle cx="810" cy="980" r="280" fill="#D4E8DC" fill-opacity=".72"/>
    ${category('건축자재 상식 · 석고보드 원료', 318)}
    ${text(76, 458, '같은 석고보드,', 90)}
    ${text(76, 578, '원료도 같을까?', 96, GREEN)}
    <rect x="112" y="740" width="180" height="54" rx="27" fill="#FFFFFF" fill-opacity=".9"/>
    ${text(149, 777, '천연석고', 25, DEEP, 'c')}
    <rect x="760" y="740" width="244" height="54" rx="27" fill="#FFFFFF" fill-opacity=".9"/>
    ${text(793, 777, '배연탈황석고', 25, DEEP, 'c')}
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'natural-vs-fgd-gypsum-cover-v2.png');
  await sharp(base).composite([{input: placed, top: 730, left: 90}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function contact(covers, targetName, title, labels, columns = 3) {
  const thumbW = columns === 3 ? 405 : 270;
  const thumbH = Math.round(thumbW * 16 / 9);
  const gap = 28;
  const margin = 56;
  const rows = Math.ceil(covers.length / columns);
  const sheetW = margin * 2 + thumbW * columns + gap * (columns - 1);
  const sheetH = 126 + rows * (thumbH + 70) + 30;
  const thumbs = await Promise.all(covers.map((p) => resized(p, thumbW, thumbH)));
  let labelSvg = `<rect width="${sheetW}" height="${sheetH}" fill="#ECE9E2"/>${text(56, 62, title, 28, DEEP, 'b')}${text(56, 98, 'Feed consistency contact sheet · QA only', 20, '#58605B', 'b')}`;
  labels.forEach((label, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;
    labelSvg += text(margin + col * (thumbW + gap), 126 + row * (thumbH + 70) + thumbH + 38, label, 20, INK, 'c');
  });
  const target = path.join(TMP, targetName);
  await sharp(svg(labelSvg, sheetW, sheetH)).composite(thumbs.map((input, i) => ({input, top: 126 + Math.floor(i / columns) * (thumbH + 70), left: margin + (i % columns) * (thumbW + gap)}))).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function main() {
  fs.mkdirSync(OUT, {recursive: true});
  fs.mkdirSync(TMP, {recursive: true});
  const covers = [await renderSosongV2('sosong-lumber-quality-cover-v3.png'), path.join(OUT, 'sosong-vs-lvl-cover-v2.png'), path.join(OUT, 'natural-vs-fgd-gypsum-cover-v2.png')];
  const batch = await contact(covers, 'batch02-cover-contact-sheet-v2.png', 'DAESAN COVER SYSTEM · BATCH 02 · V2', ['01  소송각재 납품 품질', '02  소송각재 vs LVL', '03  석고 원료 비교']);
  const batch01 = ['gypsum-wall-cover-final.png', 'daruki-vs-twoby-cover-final.png', 'mdf-pb-plywood-cover-final.png'].map((f) => path.join(OUT, f));
  const combined = await contact([...batch01, ...covers], 'batch01-02-cover-contact-sheet-v2.png', 'DAESAN COVER SYSTEM · BATCH 01 + 02 · V2', ['01  석고보드 시공', '02  다루끼 vs 투바이', '03  MDF·PB·합판', '04  소송각재 품질', '05  소송각재 vs LVL', '06  석고 원료 비교'], 3);
  process.stdout.write(JSON.stringify({covers, batch, combined}, null, 2));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
