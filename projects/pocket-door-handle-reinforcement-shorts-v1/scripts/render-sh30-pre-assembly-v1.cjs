const fs=require('fs'),path=require('path'),crypto=require('crypto'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');process.chdir(root);
const {bundle}=require('@remotion/bundler'),{getCompositions,renderStill}=require('@remotion/renderer');
const output='public/assets/images/pocket-door-sh30-pre-assembly-v1.png',report='scripts/pocket-door-sh30-pre-assembly-v1-layout.json';
const inputs=['pocket-door-sh30-exterior-v1.png','pocket-door-sh30-recess-v1.png','pocket-door-clean-background-v1.png','pocket-door-sh30-mask-v1.png','pocket-door-sh30-exploded-photoreal-v1.png'];
const hashes=()=>Object.fromEntries(inputs.map(n=>[n,crypto.createHash('sha256').update(fs.readFileSync('public/assets/images/'+n)).digest('hex')]));
(async()=>{for(const p of [output,report])if(fs.existsSync(p))throw Error('Refuse overwrite '+p);const before=hashes();
const inputProps=JSON.parse(execFileSync('python3',['-c',`from PIL import Image,ImageOps
import io,base64,json
p='public/assets/images/'
bg=ImageOps.fit(Image.open(p+'pocket-door-clean-background-v1.png').convert('RGB'),(540,960),method=Image.Resampling.LANCZOS,centering=(.5,.5))
m=Image.open(p+'pocket-door-sh30-mask-v1.png').convert('RGBA'); scale=440/m.height
product=m.transform((135,440),Image.Transform.AFFINE,(1/scale,0,0,0,1/scale,0),Image.Resampling.BICUBIC)
def data(im):
 b=io.BytesIO(); im.save(b,format='PNG'); return 'data:image/png;base64,'+base64.b64encode(b.getvalue()).decode()
print(json.dumps({'background':data(bg),'product':data(product)}))`],{maxBuffer:8e6}).toString());
const serveUrl=await bundle({entryPoint:path.join(root,'src/sh30-pre-assembly-v1.tsx')});const [composition]=await getCompositions(serveUrl,{inputProps});await renderStill({serveUrl,composition,inputProps,output,imageFormat:'png'});
if(JSON.stringify(before)!==JSON.stringify(hashes()))throw Error('Input changed');
fs.writeFileSync(report,JSON.stringify({canvas:[540,960],product:{position:[202,260],size:[135,440],center:[269.5,480],scaleRelativeToA:1,source:inputs[3]},recess:{position:[224.5,288],size:[90,384],center:[269.5,480],source:inputs[1],method:'Exact image crop, no redrawing'},shadow:{blur:3,offset:[1,2],opacity:.18},finalA:{image:inputs[0],method:'Reuse exact approved A for terminal frame; no rendered A in this task'},limitation:'Centered opaque product fully occludes smaller recess; no artificial displacement or invented backside',layers:['common background','unchanged B1 cavity','pre-contact shadow','official product','captions'],sourceHashes:before},null,2),{flag:'wx'});console.log(output)})().catch(e=>{console.error(e);process.exit(1)});
