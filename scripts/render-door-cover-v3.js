const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const PROJ = '/Users/janghokim/Documents/door-order-tips-v1';
const OUT = path.join(PROJ, 'public/covers');
const HERO = path.join(PROJ, 'public/assets/images/cover-hero-v1.png');
const CHAR = path.join(PROJ, 'public/references/characters/small-daesan-canonical-transparent-v1.png');
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

  const charHeight = 380;
  const charMeta = await sharp(CHAR).metadata();
  const charWidth = Math.round((charMeta.width / charMeta.height) * charHeight);
  const charBuf = await sharp(CHAR).resize({height: charHeight}).png().toBuffer();
  const charLeft = 76;
  const charTop = 1480 - charHeight;

  const overlay = Buffer.from(`
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F7F7F5" stop-opacity="0.96"/>
          <stop offset="0.31" stop-color="#F7F7F5" stop-opacity="0.72"/>
          <stop offset="0.55" stop-color="#F7F7F5" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#scrim)"/>
      <rect x="76" y="290" width="9" height="40" rx="4.5" fill="${GREEN}"/>
      <text x="105" y="318" font-family="${FONT}" font-size="30" font-weight="700" letter-spacing="-0.5" fill="#30302E">${esc('건축자재 상식 · 도어 발주')}</text>
      <text x="76" y="465" font-family="${FONT}" font-size="92" font-weight="800" letter-spacing="-3" fill="${INK}">${esc('도어 발주,')}</text>
      <text x="76" y="590" font-family="${FONT}" font-size="92" font-weight="800" letter-spacing="-3" fill="${GREEN}">${esc('이것만 알면')}</text>
      <text x="76" y="715" font-family="${FONT}" font-size="92" font-weight="800" letter-spacing="-3" fill="${GREEN}">${esc('안 틀려요')}</text>
      <text x="788" y="1570" font-family="Arial, sans-serif" font-size="43" font-weight="700" letter-spacing="2" fill="${LOGO_GREEN}">DAESAN</text>
      <text x="788" y="1609" font-family="${FONT}" font-size="25" font-weight="700" letter-spacing="-0.5" fill="${LOGO_GREEN}">${esc('대산종합건축자재')}</text>
    </svg>`);

  const target = path.join(OUT, 'door-order-cover-v3.png');
  await sharp(base).composite([
    {input: overlay, top: 0, left: 0},
    {input: charBuf, top: charTop, left: charLeft},
    {input: LOGO, top: 1538, left: 690, width: 82, height: 82},
  ]).resize(W,H).png({compressionLevel:9}).toFile(target);

  console.log(JSON.stringify({target, charWidth, charHeight, charLeft, charTop}, null, 2));
}

main().catch(e => { console.error(e); process.exitCode = 1; });
