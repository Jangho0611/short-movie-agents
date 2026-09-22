const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

async function floodfillTransparent(inputPath, outputPath, threshold = 25) {
  const img = sharp(inputPath).ensureAlpha();
  const {data, info} = await img.raw().toBuffer({resolveWithObject: true});
  const {width, height, channels} = info;
  const visited = new Uint8Array(width * height);
  const isBg = (idx) => {
    const r = data[idx*channels], g = data[idx*channels+1], b = data[idx*channels+2];
    return Math.abs(r-255) <= threshold && Math.abs(g-255) <= threshold && Math.abs(b-255) <= threshold;
  };
  const stack = [];
  for (let x = 0; x < width; x++) { stack.push(x); stack.push((height-1)*width + x); }
  for (let y = 0; y < height; y++) { stack.push(y*width); stack.push(y*width + (width-1)); }
  while (stack.length) {
    const idx = stack.pop();
    if (visited[idx]) continue;
    visited[idx] = 1;
    if (!isBg(idx)) continue;
    data[idx*channels+3] = 0;
    const x = idx % width, y = Math.floor(idx / width);
    if (x > 0) stack.push(idx-1);
    if (x < width-1) stack.push(idx+1);
    if (y > 0) stack.push(idx-width);
    if (y < height-1) stack.push(idx+width);
  }
  await sharp(data, {raw: {width, height, channels}}).png().toFile(outputPath);
  console.log('done:', outputPath);
}

floodfillTransparent(process.argv[2], process.argv[3], Number(process.argv[4] || 25)).catch(e => { console.error(e); process.exitCode = 1; });
