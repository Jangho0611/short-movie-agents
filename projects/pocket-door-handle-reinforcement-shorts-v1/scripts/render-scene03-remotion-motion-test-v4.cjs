const fs=require('fs'),path=require('path'),crypto=require('crypto'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');process.chdir(root);
const {bundle}=require('@remotion/bundler'),{getCompositions,renderMedia}=require('@remotion/renderer');
const output='public/assets/video/scene03-remotion-motion-test-v4.mp4';
const files=['pocket-door-sh30-exterior-v1.png','pocket-door-sh30-recess-v1.png','pocket-door-sh30-exploded-photoreal-v1.png','pocket-door-sh30-pre-assembly-v1.png','pocket-door-clean-background-v1.png','pocket-door-sh30-mask-v1.png'];
const hashes=()=>Object.fromEntries(files.map(n=>[n,crypto.createHash('sha256').update(fs.readFileSync('public/assets/images/'+n)).digest('hex')]));
(async()=>{if(fs.existsSync(output))throw Error('Output exists'); const before=hashes();
const inputProps=JSON.parse(execFileSync('python3',['-c',`from PIL import Image,ImageOps
import io,base64,json
p='public/assets/images/'
bg=ImageOps.fit(Image.open(p+'pocket-door-clean-background-v1.png').convert('RGB'),(540,960),method=Image.Resampling.LANCZOS,centering=(.5,.5))
m=Image.open(p+'pocket-door-sh30-mask-v1.png').convert('RGBA'); scale=440/m.height
product=m.transform((135,440),Image.Transform.AFFINE,(1/scale,0,0,0,1/scale,0),Image.Resampling.BICUBIC)
def data(im):
 b=io.BytesIO(); im.save(b,format='PNG'); return 'data:image/png;base64,'+base64.b64encode(b.getvalue()).decode()
print(json.dumps({'background':data(bg),'product':data(product)}))`],{maxBuffer:8e6}).toString());

const serveUrl=await bundle({entryPoint:path.join(root,'src/scene03-remotion-motion-test-v4.tsx')});
const [composition]=await getCompositions(serveUrl,{inputProps});
await renderMedia({serveUrl,composition,inputProps,outputLocation:output,codec:'h264',pixelFormat:'yuv420p',crf:18,concurrency:2});
if(JSON.stringify(before)!==JSON.stringify(hashes()))throw Error('Source changed');
fs.writeFileSync('scripts/scene03-remotion-motion-test-v4-layout.json',JSON.stringify({duration:10,fps:30,frames:300,tts:'No approved audio in project; temporary visual timing; speech duration unverified',product:{center:[269.5,480],size:[135,440]},recess:{center:[269.5,480],size:[90,384]},timeline:{A:[0,.8],reveal:[.8,1.4],B1:[1.4,2.5],B2:[2.5,6],B1return:[6,7.4],comparisonBefore:[7.4,8],comparisonAfter:[8,8.6],Afinal:[8.6,10]},sourceHashes:before},null,2),{flag:'wx'});
})().catch(e=>{console.error(e);process.exit(1)});
