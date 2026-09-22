const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const PROJ = '/Users/janghokim/Documents/door-order-tips-v1';
const OUT = path.join(PROJ, 'public/covers');
const HERO = path.join(PROJ, 'public/assets/images/cover-hero-v1.png');
const CHAR = path.join(PROJ, 'public/references/characters/small-daesan-canonical-v1.png');
const LOGO = path.join(PROJ, 'public/assets/logos/daesanlogo2.png');

const W = 1080, H = 1920;
const GREEN = '#0B5A3C';
const DEEP_GREEN = '#0D3B2D';
const INK = '#171A18';
const LOGO_TINT = '#123628';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const esc = (v) => String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const svg = (body) => Buffer.from(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .headline{font-family:${FONT};font-weight:800;letter-spacing:-3px;}
    .category{font-family:${FONT};font-weight:700;letter-spacing:-0.6px;}
    .brand{font-family:Arial,sans-serif;font-weight:700;letter-spacing:2px;}
  </style>${body}</svg>`);
const textLine = (x,y,text,size,fill=INK,cls='headline') => `<text x="${x}" y="${y}" class="${cls}" font-size="${size}" fill="${fill}">${esc(text)}</text>`;
const category = (text,y=330,fill=DEEP_GREEN) => `
  <rect x="76" y="${y-29}" width="9" height="42" rx="4.5" fill="${GREEN}"/>
  ${textLine(105,y,text,31,fill,'category')}`;
const brandText = (x,y) => `
  ${textLine(x,y,'DAESAN',43,DEEP_GREEN,'brand')}
  ${textLine(x,y+39,'대산종합건축자재',25,'#303733','category')}`;

async function logoTinted(width=82, tint=LOGO_TINT) {
  const alpha = await sharp(LOGO).resize(width,width,{fit:'contain'}).ensureAlpha().extractChannel('alpha').raw().toBuffer();
  return sharp({create:{width,height:width,channels:3,background:tint}})
    .joinChannel(alpha,{raw:{width,height:width,channels:1}}).png().toBuffer();
}

async function main() {
  fs.mkdirSync(OUT, {recursive:true});

  const charMeta = await sharp(CHAR).metadata();
  console.error('char hasAlpha:', charMeta.hasAlpha, charMeta.channels);

  const base = await sharp(HERO).resize(W,H,{fit:'cover',position:'centre'}).png().toBuffer();

  const charHeight = 380;
  const charWidth = Math.round((charMeta.width / charMeta.height) * charHeight);
  const charBuf = await sharp(CHAR).resize({height: charHeight}).png().toBuffer();
  const charLeft = W - 60 - charWidth;
  const charTop = 1490 - charHeight;

  const mark = await logoTinted(82);

  const typography = svg(`
    <rect x="44" y="220" width="992" height="500" rx="38" fill="#DDEFE4" fill-opacity="0.96"/>
    ${category('건축자재 상식 · 도어 발주', 330)}
    ${textLine(76, 470, '도어 발주,', 84, INK)}
    ${textLine(76, 580, '이것만 알면 안 틀려요', 68, GREEN)}
    ${brandText(174, 1542)}
  `);

  const target = path.join(OUT, 'door-order-cover-v2.png');
  await sharp(base).composite([
    {input: typography, top: 0, left: 0},
    {input: charBuf, top: charTop, left: charLeft},
    {input: mark, top: 1510, left: 76},
  ]).png({compressionLevel:9}).toFile(target);

  process.stdout.write(JSON.stringify({target, charWidth, charHeight, charLeft, charTop, hasAlpha: charMeta.hasAlpha}, null, 2));
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
