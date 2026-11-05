const fs=require('fs'),path=require('path'),crypto=require('crypto'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'..');process.chdir(root);
const {bundle}=require('@remotion/bundler'),{getCompositions,renderStill}=require('@remotion/renderer');
const names=['pocket-door-sh30-recess-v1.png','pocket-door-sh30-reinforcement-check-v1.png'];
const report='scripts/pocket-door-sh30-recess-pair-v1-layout.json';
const sources=['public/assets/images/pocket-door-sh30-exterior-v1.png','public/assets/images/pocket-door-clean-background-v1.png','public/assets/images/pocket-door-sh30-mask-v1.png','scripts/pocket-door-sh30-exterior-v1-layout.json'];
const hash=()=>Object.fromEntries(sources.map(p=>[p,crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]));
(async()=>{
for(const p of [...names.map(n=>'public/assets/images/'+n),report])if(fs.existsSync(p))throw Error('Refuse overwrite '+p);
const before=hash();
// Same Pillow center-cover resampling as approved A, held only in memory.
const b64=execFileSync('python3',['-c',"from PIL import Image,ImageOps; import io,base64; im=ImageOps.fit(Image.open('public/assets/images/pocket-door-clean-background-v1.png').convert('RGB'),(540,960),method=Image.Resampling.LANCZOS,centering=(.5,.5)); b=io.BytesIO(); im.save(b,format='PNG'); print(base64.b64encode(b.getvalue()).decode())"],{maxBuffer:8e6}).toString().trim();
const background='data:image/png;base64,'+b64;
const serveUrl=await bundle({entryPoint:path.join(root,'src/sh30-recess-pair-v1.tsx')});
const compositions=await getCompositions(serveUrl,{inputProps:{background}});
for(let i=0;i<2;i++)await renderStill({serveUrl,composition:compositions.find(c=>c.id===['Sh30B1','Sh30B2'][i]),inputProps:{background,review:i===1},output:'public/assets/images/'+names[i],imageFormat:'png'});
if(JSON.stringify(before)!==JSON.stringify(hash()))throw Error('Source changed');
fs.writeFileSync(report,JSON.stringify({size:[540,960],center:[269.5,480],opening:{x:224.5,y:288,width:90,height:384},illustratedSideDepthPx:18,depthNote:'Screen-space illustrative shading, not physical depth or SH30NI machining specification',commonComponent:'Recess',background:'Same Pillow fit as A',productVisible:false,review:'Existing side planes only; no physical reinforcement geometry',sourceHashes:before},null,2),{flag:'wx'});console.log(names);
})().catch(e=>{console.error(e);process.exit(1)});
