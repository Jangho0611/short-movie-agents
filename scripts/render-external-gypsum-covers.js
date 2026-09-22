const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/short-movie-agents';
const OUT = path.join(ROOT, 'public/covers');
const TMP = path.join(ROOT, 'tmp');
const ANALYSIS = path.join(TMP, 'external-gypsum-analysis');
const LOGO = '/Users/janghokim/Documents/remotion_video/mdf-density/public/daesanlogo2.png';
const W = 1080;
const H = 1920;
const GREEN = '#0B5A3C';
const DEEP = '#073E2D';
const INK = '#171A18';
const CREAM = '#F3EFE0';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const svg = (body, width = W, height = H) => Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><style>.h{font-family:${FONT};font-weight:800;letter-spacing:-3px}.c{font-family:${FONT};font-weight:700;letter-spacing:-.5px}.b{font-family:Arial,sans-serif;font-weight:700;letter-spacing:2px}</style>${body}</svg>`);
const text = (x, y, value, size, fill = INK, cls = 'h') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" class="${cls}">${esc(value)}</text>`;
const category = (value, y, fill = DEEP, accent = GREEN) => `<rect x="76" y="${y - 28}" width="9" height="40" rx="4.5" fill="${accent}"/>${text(105, y, value, 30, fill, 'c')}`;
const brand = (y, dark = false) => `${text(174, y, 'DAESAN', 43, dark ? '#FFFFFF' : DEEP, 'b')}${text(174, y + 39, '대산종합건축자재', 25, dark ? '#E0E8E3' : '#303733', 'c')}`;

async function logo(width = 82, tint = DEEP) {
  const alpha = await sharp(LOGO).resize(width, width, {fit: 'contain'}).ensureAlpha().extractChannel('alpha').raw().toBuffer();
  return sharp({create: {width, height: width, channels: 3, background: tint}}).joinChannel(alpha, {raw: {width, height: width, channels: 1}}).png().toBuffer();
}

async function crop(input, region, width) {
  return sharp(input).extract(region).resize({width, withoutEnlargement: false}).png().toBuffer();
}

async function renderXi() {
  const frame = path.join(ANALYSIS, 'xi/frame-20.png');
  const natural = await crop(frame, {left: 14, top: 108, width: 378, height: 238}, 450);
  const synthetic = await crop(frame, {left: 14, top: 350, width: 378, height: 240}, 450);
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#FBF8EF"/>
    <path d="M0 730 C250 680 400 740 540 860 C700 720 870 690 1080 760 V1510 H0 Z" fill="${CREAM}"/>
    <circle cx="938" cy="248" r="105" fill="#C8EED8"/>
    ${category('건축자재 원료 · 석고보드', 316)}
    ${text(76, 458, '석고보드의 시작,', 85)}
    ${text(76, 575, '땅일까 설비일까?', 91, GREEN)}
    <path d="M76 647 H1004" stroke="#C6D8CE" stroke-width="2"/>
    <rect x="82" y="792" width="270" height="62" rx="31" fill="#FFFFFF"/>
    ${text(137, 834, '천연석고', 29, DEEP, 'c')}
    <rect x="728" y="792" width="270" height="62" rx="31" fill="#FFFFFF"/>
    ${text(782, 834, '합성석고', 29, DEEP, 'c')}
    <path d="M540 830 V1395" stroke="#AED0BD" stroke-width="2" stroke-dasharray="10 12"/>
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'xi-natural-gypsum-external-cover-v1.png');
  await sharp(base).composite([
    {input: natural, left: 48, top: 930},
    {input: synthetic, left: 582, top: 920},
    {input: mark, left: 76, top: 1538},
  ]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderChinese() {
  const frame = path.join(ANALYSIS, 'chinese/frame-13.png');
  const hero = await crop(frame, {left: 0, top: 34, width: 540, height: 335}, 1080);
  const mark = await logo(82, '#FFFFFF');
  const base = svg(`
    <rect width="1080" height="1920" fill="#073D2F"/>
    <circle cx="920" cy="250" r="120" fill="#0D5A43"/>
    <path d="M0 765 C240 690 430 760 540 850 C700 730 880 710 1080 790 V1510 H0 Z" fill="${CREAM}"/>
    ${category('건축자재 비교 · 석고보드', 316, '#DDEBE5', '#68D498')}
    ${text(76, 458, '10% 저렴한데,', 91, '#FFFFFF')}
    ${text(76, 578, '왜 선택받지 못했을까?', 79, '#6DDA9C')}
    <path d="M76 650 H1004" stroke="#2F6F5B" stroke-width="2"/>
    ${brand(1570, true)}
  `);
  const target = path.join(OUT, 'chinese-gypsum-external-cover-v1.png');
  await sharp(base).composite([
    {input: hero, left: 0, top: 815},
    {input: mark, left: 76, top: 1538},
  ]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function resized(input, width, height) { return sharp(input).resize(width, height, {fit: 'cover'}).png().toBuffer(); }
async function contact(covers, targetName, title, labels, columns) {
  const thumbW = columns === 2 ? 405 : 270;
  const thumbH = Math.round(thumbW * 16 / 9);
  const gap = 28;
  const margin = 56;
  const rows = Math.ceil(covers.length / columns);
  const sheetW = margin * 2 + thumbW * columns + gap * (columns - 1);
  const sheetH = 126 + rows * (thumbH + 70) + 30;
  const thumbs = await Promise.all(covers.map((p) => resized(p, thumbW, thumbH)));
  let body = `<rect width="${sheetW}" height="${sheetH}" fill="#ECE9E2"/>${text(56, 62, title, 28, DEEP, 'b')}${text(56, 98, 'Feed consistency contact sheet · QA only', 20, '#58605B', 'b')}`;
  labels.forEach((label, i) => body += text(margin + (i % columns) * (thumbW + gap), 126 + Math.floor(i / columns) * (thumbH + 70) + thumbH + 38, label, 20, INK, 'c'));
  const target = path.join(TMP, targetName);
  await sharp(svg(body, sheetW, sheetH)).composite(thumbs.map((input, i) => ({input, top: 126 + Math.floor(i / columns) * (thumbH + 70), left: margin + (i % columns) * (thumbW + gap)}))).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function main() {
  fs.mkdirSync(OUT, {recursive: true});
  fs.mkdirSync(TMP, {recursive: true});
  const xi = await renderXi();
  const chinese = await renderChinese();
  const pair = await contact([xi, chinese], 'external-gypsum-cover-contact-sheet-v1.png', 'DAESAN EXTERNAL SHORTS · GYPSUM', ['01  자이 천연석고', '02  중국산 석고보드'], 2);
  const existing = [
    'gypsum-wall-cover-final.png', 'daruki-vs-twoby-cover-final.png', 'mdf-pb-plywood-cover-final.png',
    'sosong-lumber-quality-cover-v3.png', 'sosong-vs-lvl-cover-v2.png', 'natural-vs-fgd-gypsum-cover-v2.png',
    'pf-vs-xps-cover-v1.png', 'mdf-density-cover-v2.png', 'window-condensation-cover-v2.png',
  ].map((f) => path.join(OUT, f));
  const feed = await contact([...existing, xi, chinese], 'daesan-feed-cover-contact-sheet-v1.png', 'DAESAN COVER SYSTEM · FEED QA', ['01 석고보드 시공','02 다루끼 vs 투바이','03 MDF·PB·합판','04 소송각재 품질','05 소송각재 vs LVL','06 석고 원료','07 PF보드 vs XPS','08 MDF 밀도','09 창호 결로','10 자이 천연석고','11 중국산 석고'], 3);
  process.stdout.write(JSON.stringify({xi, chinese, pair, feed}, null, 2));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
