const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const PROJ = '/Users/janghokim/Documents/door-order-tips-v1';
const OUT = path.join(PROJ, 'public/covers');
const HERO = path.join(PROJ, 'public/assets/images/cover-hero-v1.png');
const CHAR = path.join(PROJ, 'public/references/characters/small-daesan-canonical-noshadow-v1.png');
const LOGO = path.join(PROJ, 'public/assets/logos/daesanlogo2.png');

const W = 1080, H = 1920;
const GREEN = '#146335';
const LOGO_GREEN = '#123628';
const INK = '#171717';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const esc = (v) => String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');

async function main() {
  fs.mkdirSync(OUT, {recursive:true});
  const base = await sharp(HERO).resize(W,H,{fit:'cover',position:'centre'}).png().toBuffer();

  const charHeight = 480;
  const charMeta = await sharp(CHAR).metadata();
  const charWidth = Math.round((charMeta.width / charMeta.height) * charHeight);
  const charBuf = await sharp(CHAR).resize({height: charHeight}).png().toBuffer();
  const charLeft = 76;
  const charTop = 1500 - charHeight;

  const logoBuf = await sharp(LOGO).resize(78, 78, {fit: 'contain'}).png().toBuffer();

  const overlay = Buffer.from(`
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F7F7F5" stop-opacity="0.92"/>
          <stop offset="0.31" stop-color="#F7F7F5" stop-opacity="0.65"/>
          <stop offset="0.5" stop-color="#F7F7F5" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#scrim)"/>
      <rect x="92" y="258" width="8" height="30" rx="4" fill="${GREEN}"/>
      <text x="114" y="280" font-family="${FONT}" font-size="30" font-weight="600" letter-spacing="-0.5" fill="${GREEN}">${esc('건축자재 상식 · 도어 발주')}</text>
      <text x="92" y="450" font-family="${FONT}" font-size="60" font-weight="800" letter-spacing="-1.5" fill="${INK}">${esc('도어 발주,')}</text>
      <text x="92" y="542" font-family="${FONT}" font-size="60" font-weight="800" letter-spacing="-1.5" fill="${INK}">${esc('이것만 알면')}</text>
      <text x="92" y="634" font-family="${FONT}" font-size="60" font-weight="800" letter-spacing="-1.5" fill="${GREEN}">${esc('안 틀려요')}</text>
      <text x="788" y="1568" font-family="Arial, sans-serif" font-size="43" font-weight="700" letter-spacing="2" fill="${LOGO_GREEN}">DAESAN</text>
      <text x="788" y="1607" font-family="${FONT}" font-size="25" font-weight="700" letter-spacing="-0.5" fill="${LOGO_GREEN}">${esc('대산종합건축자재')}</text>
    </svg>`);

  const target = path.join(OUT, 'door-order-cover-v8.png');
  await sharp(base).composite([
    {input: overlay, top: 0, left: 0},
    {input: charBuf, top: charTop, left: charLeft},
    {input: logoBuf, top: 1538, left: 690},
  ]).png({compressionLevel:9}).toFile(target);

  console.log(JSON.stringify({target, charWidth, charHeight}, null, 2));
}

main().catch(e => { console.error(e); process.exitCode = 1; });
