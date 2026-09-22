const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const ROOT = '/Users/janghokim/Documents/short-movie-agents';
const OUT = path.join(ROOT, 'public/covers');
const TMP = path.join(ROOT, 'tmp');
const LOGO = '/Users/janghokim/Documents/remotion_video/mdf-density/public/daesanlogo2.png';
const MDF = '/Users/janghokim/Documents/remotion_video/mdf-density/reference/scene1-v5-reference-001-9x16.png';
const WINDOW = '/Users/janghokim/Documents/remotion_video/projects/window-condensation-shorts-v1/public/assets/images/scene01.png';
const W = 1080;
const H = 1920;
const GREEN = '#0B5A3C';
const DEEP = '#073E2D';
const INK = '#171A18';
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

function board(x, y, width, depth, thickness, kind) {
  const dx = depth;
  const dy = -Math.round(depth * 0.52);
  const front = `${x},${y} ${x + width},${y} ${x + width},${y + thickness} ${x},${y + thickness}`;
  const top = `${x},${y} ${x + dx},${y + dy} ${x + width + dx},${y + dy} ${x + width},${y}`;
  const side = `${x + width},${y} ${x + width + dx},${y + dy} ${x + width + dx},${y + thickness + dy} ${x + width},${y + thickness}`;
  if (kind === 'xps') {
    return `<ellipse cx="${x + width / 2}" cy="${y + thickness + 38}" rx="${width * .46}" ry="28" fill="#6A514C" fill-opacity=".16"/><polygon points="${front}" fill="#D99AAC"/><polygon points="${side}" fill="#C78397"/><polygon points="${top}" fill="#EDB9C8"/><path d="M${x + 20} ${y - 5} L${x + width + dx - 25} ${y + dy + 5}" stroke="#F8DAE2" stroke-width="5" opacity=".45"/>`;
  }
  const alu = Math.max(7, Math.round(thickness * .16));
  const core = thickness - alu * 2;
  return `<ellipse cx="${x + width / 2}" cy="${y + thickness + 38}" rx="${width * .46}" ry="28" fill="#31413D" fill-opacity=".16"/><polygon points="${front}" fill="#D8DADC"/><rect x="${x}" y="${y + alu}" width="${width}" height="${core}" fill="#E2BCC5"/><rect x="${x}" y="${y + alu + core}" width="${width}" height="${alu}" fill="#ECE7D9"/><polygon points="${side}" fill="#C8C9CC"/><polygon points="${top}" fill="#D2D3D5"/><path d="M${x + 18} ${y - 4} L${x + width + dx - 22} ${y + dy + 4}" stroke="#FFFFFF" stroke-width="4" opacity=".25"/>`;
}

async function renderPfXps() {
  const mark = await logo();
  const base = svg(`
    <rect width="1080" height="1920" fill="#FBF8EF"/>
    <path d="M0 780 C280 680 440 780 540 920 C720 700 890 650 1080 730 V1510 H0 Z" fill="#E0F1E7"/>
    <circle cx="940" cy="290" r="110" fill="#C8EED8"/>
    ${category('건축자재 비교 · 단열재', 318)}
    ${text(76, 460, '같은 단열 성능,', 88)}
    ${text(76, 580, '두께는 왜 다를까?', 94, GREEN)}
    <path d="M76 650 H1004" stroke="#C8D8CE" stroke-width="2"/>
    <rect x="96" y="770" width="230" height="62" rx="31" fill="#FFFFFF"/>
    ${text(146, 812, 'PF보드', 29, DEEP, 'c')}
    <rect x="754" y="770" width="230" height="62" rx="31" fill="#FFFFFF"/>
    ${text(824, 812, 'XPS', 29, DEEP, 'c')}
    ${board(78, 1040, 390, 105, 118, 'pf')}
    ${board(610, 990, 350, 105, 164, 'xps')}
    ${text(170, 1368, '115mm', 44, DEEP, 'b')}
    ${text(742, 1368, '160mm', 44, DEEP, 'b')}
    <path d="M488 930 V1410" stroke="#ABCDB9" stroke-width="2" stroke-dasharray="10 12"/>
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'pf-vs-xps-cover-v1.png');
  await sharp(base).composite([{input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderMdf() {
  const photo = await sharp(MDF).resize(W, H, {fit: 'cover', position: 'centre'}).modulate({brightness: .84, saturation: .86}).png().toBuffer();
  const mark = await logo(82, '#FFFFFF');
  const overlay = svg(`
    <defs><linearGradient id="top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#07110D" stop-opacity=".94"/><stop offset=".72" stop-color="#07110D" stop-opacity=".64"/><stop offset="1" stop-color="#07110D" stop-opacity="0"/></linearGradient><linearGradient id="bottom" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#07110D" stop-opacity=".72"/><stop offset="1" stop-color="#07110D" stop-opacity="0"/></linearGradient></defs>
    <rect width="1080" height="760" fill="url(#top)"/>
    <rect y="1410" width="1080" height="510" fill="url(#bottom)"/>
    <rect x="0" width="14" height="1920" fill="${GREEN}"/>
    ${category('건축자재 상식 · MDF', 318, '#D7E9DF', '#60CD90')}
    ${text(76, 465, '같은 MDF인데,', 92, '#FFFFFF')}
    ${text(76, 590, '왜 처질까?', 106, '#69D99A')}
    <rect x="76" y="682" width="150" height="58" rx="29" fill="#69D99A"/>
    ${text(118, 721, '밀도', 29, '#082F26', 'c')}
    ${brand(1570, true)}
  `);
  const target = path.join(OUT, 'mdf-density-cover-v1.png');
  await sharp(photo).composite([{input: overlay, top: 0, left: 0}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function renderWindow() {
  const photo = await sharp(WINDOW).resize(W, H, {fit: 'cover', position: 'centre'}).modulate({brightness: .92, saturation: .86}).png().toBuffer();
  const mark = await logo();
  const overlay = svg(`
    <defs><linearGradient id="top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4F4F0" stop-opacity=".98"/><stop offset=".72" stop-color="#F4F4F0" stop-opacity=".82"/><stop offset="1" stop-color="#F4F4F0" stop-opacity="0"/></linearGradient><linearGradient id="bottom" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F4F4F0" stop-opacity=".76"/><stop offset="1" stop-color="#F4F4F0" stop-opacity="0"/></linearGradient></defs>
    <rect width="1080" height="690" fill="url(#top)"/>
    <rect y="1480" width="1080" height="440" fill="url(#bottom)"/>
    ${category('시공 상식 · 창호와 단열', 318)}
    ${text(76, 458, '새 창호인데,', 94)}
    ${text(76, 585, '왜 결로가 생길까?', 92, GREEN)}
    <path d="M76 650 H460" stroke="#B7CCC0" stroke-width="3"/>
    <circle cx="112" cy="950" r="12" fill="#E6903B"/>
    <path d="M112 974 V1080" stroke="#E6903B" stroke-width="4" stroke-dasharray="8 12"/>
    ${brand(1570)}
  `);
  const target = path.join(OUT, 'window-condensation-cover-v1.png');
  await sharp(photo).composite([{input: overlay, top: 0, left: 0}, {input: mark, top: 1538, left: 76}]).png({compressionLevel: 9}).toFile(target);
  return target;
}

async function resized(input, width, height) { return sharp(input).resize(width, height, {fit: 'cover'}).png().toBuffer(); }
async function contact(covers, targetName, title, labels, columns = 3) {
  const thumbW = columns === 3 ? 405 : 270;
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
  const batch03 = [await renderPfXps(), await renderMdf(), await renderWindow()];
  const batch = await contact(batch03, 'batch03-cover-contact-sheet.png', 'DAESAN COVER SYSTEM · BATCH 03', ['01  PF보드 vs XPS', '02  MDF 밀도', '03  창호 결로']);
  const previous = ['gypsum-wall-cover-final.png', 'daruki-vs-twoby-cover-final.png', 'mdf-pb-plywood-cover-final.png', 'sosong-lumber-quality-cover-v3.png', 'sosong-vs-lvl-cover-v2.png', 'natural-vs-fgd-gypsum-cover-v2.png'].map((f) => path.join(OUT, f));
  const combined = await contact([...previous, ...batch03], 'batch01-03-cover-contact-sheet.png', 'DAESAN COVER SYSTEM · BATCH 01—03', ['01  석고보드 시공', '02  다루끼 vs 투바이', '03  MDF·PB·합판', '04  소송각재 품질', '05  소송각재 vs LVL', '06  석고 원료', '07  PF보드 vs XPS', '08  MDF 밀도', '09  창호 결로']);
  process.stdout.write(JSON.stringify({batch03, batch, combined}, null, 2));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
