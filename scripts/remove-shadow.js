const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

async function run(inputPath, outputPath) {
  const {data, info} = await sharp(inputPath).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  const {width, height, channels} = info;
  const yStart = Math.floor(height * 0.88);
  for (let y = yStart; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y*width+x)*4;
      if (data[i+3] === 0) continue;
      const r = data[i], g = data[i+1], b = data[i+2];
      const brightness = (r+g+b)/3;
      const maxDiff = Math.max(Math.abs(r-g), Math.abs(g-b), Math.abs(r-b));
      if (brightness > 150 && maxDiff < 15) {
        data[i+3] = 0;
      }
    }
  }
  await sharp(data, {raw:{width,height,channels}}).png().toFile(outputPath);
  console.log('done', outputPath);
}

run(process.argv[2], process.argv[3]).catch(e=>{console.error(e);process.exitCode=1;});
