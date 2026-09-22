const fs = require('fs');
const path = require('path');
const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

const PROJ = '/Users/janghokim/Documents/door-order-tips-v1';
const OUT = path.join(PROJ, 'public/covers');
const HERO = path.join(PROJ, 'public/assets/images/cover-hero-v1.png');
const CHAR = path.join(PROJ, 'public/references/characters/small-daesan-canonical-noshadow-v2.png');
const LOGO = path.join(PROJ, 'public/assets/logos/daesanlogo2.png');

const W = 1080, H = 1920;
const NAVY = '#2B4356';
const GREEN = '#146335';
const LOGO_GREEN = '#123628';
const FONT = 'Apple SD Gothic Neo, sans-serif';

const esc = (v) => String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');

async function main() {
  fs.mkdirSync(OUT, {recursive:true});
  const base = await sharp(HERO).resize(W,H,{fit:'cover',position:'centre'}).png().toBuffer();

  const charHeight = 560;
  const charMeta = await sharp(CHAR).metadata();
  const charWidth = Math.round((charMeta.width / charMeta.height) * charHeight);
  const charBuf = await sharp(CHAR).resize({height: charHeight}).png().toBuffer();
  const charLeft = 76;
  const charTop = 1500 - charHeight;

  const logoBuf = await sharp(LOGO).resize(78, 78, {fit: 'contain'}).png().toBuffer();

  const boxTop = 341, boxLeft = 53, boxRight = 770, boxBottom = 694;

  const overlay = Buffer.from(`
    <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <rect x="90" y="${boxTop-62}" width="8" height="30" rx="4" fill="${GREEN}"/>
      <text x="114" y="${boxTop-32}" font-family="${FONT}" font-size="30" font-weight="600" letter-spacing="-0.5" fill="${GREEN}">${esc('건축자재 상식 · 도어 발주')}</text>
      <rect x="${boxLeft}" y="${boxTop}" width="${boxRight-boxLeft}" height="${boxBottom-boxTop}" rx="36" fill="${NAVY}" fill-opacity="0.92"/>
      <text x="92" y="445" font-family="${FONT}" font-size="60" font-weight="800" letter-spacing="-1.5" fill="#FFFFFF">${esc('도어 발주,')}</text>
      <text x="92" y="537" font-family="${FONT}" font-size="60" font-weight="800" letter-spacing="-1.5" fill="#FFFFFF">${esc('이것만 알면')}</text>
      <text x="92" y="629" font-family="${FONT}" font-size="60" font-weight="800" letter-spacing="-1.5" fill="${GREEN}">${esc('안 틀려요')}</text>
      <text x="788" y="1568" font-family="Arial, sans-serif" font-size="43" font-weight="700" letter-spacing="2" fill="${LOGO_GREEN}">DAESAN</text>
      <text x="788" y="1607" font-family="${FONT}" font-size="25" font-weight="700" letter-spacing="-0.5" fill="${LOGO_GREEN}">${esc('대산종합건축자재')}</text>
    </svg>`);

  const target = path.join(OUT, 'door-order-cover-v10.png');
  await sharp(base).composite([
    {input: overlay, top: 0, left: 0},
    {input: charBuf, top: charTop, left: charLeft},
    {input: logoBuf, top: 1538, left: 690},
  ]).png({compressionLevel:9}).toFile(target);

  console.log(JSON.stringify({target, charWidth, charHeight}, null, 2));
}

main().catch(e => { console.error(e); process.exitCode = 1; });
