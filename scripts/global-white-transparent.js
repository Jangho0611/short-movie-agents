const sharp = require('/Users/janghokim/Documents/Cafe24detailPage/node_modules/sharp');

async function run(inputPath, outputPath, threshold = 18) {
  const {data, info} = await sharp(inputPath).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  const {width, height, channels} = info;
  for (let i = 0; i < width*height; i++) {
    const r = data[i*channels], g = data[i*channels+1], b = data[i*channels+2];
    if (Math.abs(r-255) <= threshold && Math.abs(g-255) <= threshold && Math.abs(b-255) <= threshold) {
      data[i*channels+3] = 0;
    }
  }
  await sharp(data, {raw:{width,height,channels}}).png().toFile(outputPath);
  console.log('done', outputPath);
}

run(process.argv[2], process.argv[3], Number(process.argv[4]||18)).catch(e=>{console.error(e);process.exitCode=1;});
