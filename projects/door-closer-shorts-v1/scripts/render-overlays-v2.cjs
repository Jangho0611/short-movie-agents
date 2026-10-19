const path=require('path');
const {bundle}=require('@remotion/bundler');
const {getCompositions,renderFrames,openBrowser}=require('@remotion/renderer');
const fs=require('fs');
const project=path.resolve(__dirname,'..');
(async()=>{
 const serveUrl=await bundle({entryPoint:path.join(project,'src/preview-v2.tsx'),publicDir:path.join(project,'public')});
 const browser=await openBrowser('chrome',{browserExecutable:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 try{
 const comps=await getCompositions(serveUrl,{puppeteerInstance:browser});
 for(const c of comps){
  const outputDir=path.join(project,'public/assets/images',c.id+'-v2');
  if(fs.existsSync(path.join(outputDir,'complete.json'))){console.log('Already rendered',c.id);continue;}
  await renderFrames({composition:c,serveUrl,outputDir,imageFormat:'png',puppeteerInstance:browser,concurrency:2,onStart:()=>console.log('Rendering',c.id),onFrameUpdate:()=>{}});
  fs.writeFileSync(path.join(outputDir,'complete.json'),JSON.stringify({id:c.id,frames:c.durationInFrames}));
  console.log('Complete',c.id,c.durationInFrames);
 }
 }finally{await browser.close({silent:true});}
})().catch(e=>{console.error(e);process.exit(1)});
