const fs=require('fs'),path=require('path'),{execFileSync:exec}=require('child_process');const {bundle}=require('@remotion/bundler'),{getCompositions,renderMedia}=require('@remotion/renderer');
(async()=>{process.chdir(path.resolve(__dirname,'..'));const temp=fs.mkdtempSync('/tmp/pocket-v2-');for(const n of ['scene02-doormaster-v2','scene01-02-doormaster-preview-v2'])if(fs.existsSync('public/assets/video/'+n+'.mp4'))throw Error('collision');
const background=exec('python3',['-c',"from PIL import Image,ImageOps;import io,base64;b=io.BytesIO();ImageOps.fit(Image.open('public/assets/images/pocket-door-clean-background-v1.png').convert('RGB'),(540,960),method=Image.Resampling.LANCZOS).save(b,format='PNG');print('data:image/png;base64,'+base64.b64encode(b.getvalue()).decode())"],{maxBuffer:8e6}).toString().trim();

const serveUrl=await bundle({entryPoint:path.resolve('src/scene02-doormaster-v2.tsx')});const inputProps={background};const [composition]=await getCompositions(serveUrl,{inputProps});const silent=path.join(temp,'silent.mp4');await renderMedia({serveUrl,composition,inputProps,outputLocation:silent,codec:'h264',pixelFormat:'yuv420p',crf:18,concurrency:2});
const pcm=path.join(temp,'s2.mp4');exec('ffmpeg',['-v','error','-n','-i',silent,'-i','public/assets/audio/scene02-tts-v4.wav','-map','0:v','-map','1:a','-c','copy',pcm]);
exec('ffmpeg',['-v','error','-n','-i',pcm,'-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart','public/assets/video/scene02-doormaster-v2.mp4']);
const list=path.join(temp,'list.txt');fs.writeFileSync(list,`file '${path.resolve('public/assets/video/scene01-doormaster-v1.mp4')}'
file '${pcm}'
`);exec('ffmpeg',['-v','error','-n','-f','concat','-safe','0','-i',list,'-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart','public/assets/video/scene01-02-doormaster-preview-v2.mp4']);console.log('DONE');})().catch(e=>{console.error(e);process.exit(1)});
