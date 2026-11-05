const fs=require('fs'),path=require('path'),{execFileSync:exec}=require('child_process');const {bundle}=require('@remotion/bundler'),{getCompositions,renderStill}=require('@remotion/renderer');
(async()=>{process.chdir(path.resolve(__dirname,'..'));const out='public/assets/images/scene03-doormaster-mismatch-v1.png';if(fs.existsSync(out))throw Error('collision');
const background=exec('python3',['-c',"from PIL import Image,ImageOps;import io,base64;b=io.BytesIO();ImageOps.fit(Image.open('public/assets/images/pocket-door-clean-background-v1.png').convert('RGB'),(540,960),method=Image.Resampling.LANCZOS).save(b,format='PNG');print('data:image/png;base64,'+base64.b64encode(b.getvalue()).decode())"],{maxBuffer:8e6}).toString().trim();


const inputProps={background};const serveUrl=await bundle({entryPoint:path.resolve('src/scene03-doormaster-mismatch-v1.tsx')});const [composition]=await getCompositions(serveUrl,{inputProps});await renderStill({serveUrl,composition,inputProps,output:out,imageFormat:'png',frame:0});console.log(out);})().catch(e=>{console.error(e);process.exit(1)});
