from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib
p=Path('.'); h=lambda f:hashlib.sha256(f.read_bytes()).hexdigest()
with (p/'docs/cover-v2-preservation.json').open('x') as f:json.dump({str(x):h(x) for root in ['src','public'] for x in (p/root).rglob('*') if x.is_file()},f,indent=2)
a=p/'public/assets/images'
entries=[('frame','customer-frame-panel.jpeg',(1550,300,2350,1100)),('door','customer-door-sample.jpeg',(300,20,840,560)),('film','customer-190-sample.jpeg',(280,500,610,830))]
records=[]
for name,src,box in entries:
 im=ImageOps.exif_transpose(Image.open(a/src));crop=im.crop(box);out=a/f'cover-v2-{name}-crop.png';assert not out.exists();crop.save(out);records.append({'file':str(out),'source':src,'oriented_source_size':im.size,'crop':box,'sha256':h(out),'processing':'EXIF orientation and crop only; no color adjustments'})
with (p/'docs/cover-v2-crops.json').open('x') as f:json.dump(records,f,ensure_ascii=False,indent=2)
s=(p/'src/cover-v1-entry.tsx').read_text().replace('const Cover=()=>','const Cover=({variant}:{variant:"A"|"C"})=>')
old=s[s.index('<div style={{position:\'absolute\',left:0,top:960'):s.index('<div style={{position:\'absolute\',left:90,top:1525')]
new='''<div style={{position:'absolute',left:0,top:960,width:1080,height:540,display:'flex',gap:4,background:'#F5F2EB'}}>{(variant==='A'?[{f:'frame',l:'문틀'},{f:'door',l:'문짝'}]:[{f:'door',l:'문짝 표면'},{f:'film',l:'영림190 필름 샘플'}]).map(x=><div key={x.f} style={{position:'relative',width:538,height:540,overflow:'hidden'}}><Img src={staticFile('assets/images/cover-v2-'+x.f+'-crop.png')} style={{width:'100%',height:'100%',objectFit:'cover'}}/><div style={{position:'absolute',left:20,top:18,fontSize:31,fontWeight:600,background:'#F5F2EB',padding:'9px 15px',borderRadius:4}}>{x.l}</div></div>)}</div>
'''
s=s.replace(old,new);s=s[:s.index('registerRoot')]+'''registerRoot(()=><>{(['A','C'] as const).map(variant=><Composition key={variant} id={'DoorMasterCoverV2'+variant} component={Cover} defaultProps={{variant}} durationInFrames={1} fps={30} width={1080} height={1920}/>)}</>);
''' if False else s
# replace final registration only
s=s.replace('registerRoot(()=><Composition id="DoorMasterCoverV1" component={Cover} durationInFrames={1} fps={30} width={1080} height={1920}/>);',"registerRoot(()=><>{(['A','C'] as const).map(variant=><Composition key={variant} id={'DoorMasterCoverV2'+variant} component={Cover} defaultProps={{variant}} durationInFrames={1} fps={30} width={1080} height={1920}/>)}</>);")
s=s.replace(old,new)
with (p/'src/cover-v2-entry.tsx').open('x') as f:f.write(s)
