const path=require('path'),fs=require('fs');process.chdir(path.resolve(__dirname,'..'));
const {bundle}=require('@remotion/bundler');const {getCompositions,renderMedia,renderStill}=require('@remotion/renderer');
(async()=>{
const output='public/assets/video/scene03-photo-section-motion-test-v1.mp4';
const frames=[0,44,64,88,120];
const still=f=>`public/assets/images/scene03-motion-test-v1-f${String(f).padStart(3,'0')}.png`;
for(const p of [output,...frames.map(still)])if(fs.existsSync(p) && !(process.env.REPAIR_CURRENT_RUN==='1' && !JSON.parse(fs.readFileSync('docs/motion-test-v1-preservation.json'))[p]))throw Error(`Refuse overwrite ${p}`);
const serveUrl=await bundle({entryPoint:path.resolve('src/scene03-motion-test-v1.tsx')});const [composition]=await getCompositions(serveUrl);
for(const f of frames)await renderStill({serveUrl,composition,frame:f,output:still(f),imageFormat:'png'});
await renderMedia({serveUrl,composition,outputLocation:output,codec:'h264',crf:18,pixelFormat:'yuv420p',muted:true,concurrency:2});console.log(output);
})();
