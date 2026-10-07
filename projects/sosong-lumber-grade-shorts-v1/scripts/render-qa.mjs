import {bundle} from '@remotion/bundler';
import {openBrowser, selectComposition, renderStill} from '@remotion/renderer';
import {existsSync, readFileSync} from 'node:fs';
import path from 'node:path';

const timing=JSON.parse(readFileSync('src/timing.json','utf8'));
const revision=process.argv[2] || 'v1';
const browserExecutable=process.env.REMOTION_BROWSER_EXECUTABLE || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const serveUrl=await bundle({entryPoint:path.resolve('src/index.ts'),outDir:path.resolve(`out/qa-bundle-${revision}`)});
const browser=await openBrowser('chrome',{browserExecutable});
try {
  const composition=await selectComposition({serveUrl,id:'SosongGrade',puppeteerInstance:browser});
  for (const scene of [...timing.scenes,{id:'ending',from:timing.ending.from,durationInFrames:170}]) {
    const output=`out/qa/scene-${scene.id}-layout-${revision}.png`;
    if(existsSync(output)) throw new Error(`Refusing to overwrite ${output}`);
    await renderStill({serveUrl,composition,puppeteerInstance:browser,frame:scene.from+Math.floor(scene.durationInFrames*0.58),output,imageFormat:'png'});
    console.log(`RENDERED ${output}`);
  }
} finally {await browser.close({silent:true});}
