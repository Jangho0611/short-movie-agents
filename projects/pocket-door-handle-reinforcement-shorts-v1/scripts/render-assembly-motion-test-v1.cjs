const path=require('path'),fs=require('fs');process.chdir(path.resolve(__dirname,'..'));
const {bundle}=require('@remotion/bundler');const {getCompositions,renderMedia,renderStill}=require('@remotion/renderer');
(async()=>{
const output='public/assets/video/scene03-assembly-motion-test-v1.mp4';
const frames=[0,24,46,68,88,108,125,165];
const still=f=>`public/assets/images/scene03-assembly-motion-test-v1-f${String(f).padStart(3,'0')}.png`;
for(const p of [output,...frames.map(still)])if(fs.existsSync(p))throw Error(`Refuse overwrite ${p}`);
const serveUrl=await bundle({entryPoint:path.resolve('src/scene03-assembly-motion-test-v1.tsx')});const [composition]=await getCompositions(serveUrl);
for(const f of frames)await renderStill({serveUrl,composition,frame:f,output:still(f),imageFormat:'png'});
await renderMedia({serveUrl,composition,outputLocation:output,codec:'h264',crf:18,pixelFormat:'yuv420p',muted:true,concurrency:2});console.log(output);
})();
