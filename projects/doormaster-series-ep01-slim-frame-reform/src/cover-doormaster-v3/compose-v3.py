from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json,hashlib,sys
ROOT=Path(__file__).resolve().parents[2]
SRC=Path(__file__).parent
OUT=Path(sys.argv[1]) if len(sys.argv)>1 else ROOT/'public/covers'
QA=OUT/'qa';OUT.mkdir(parents=True,exist_ok=True);QA.mkdir(parents=True,exist_ok=True)
c=json.loads((SRC/'layout-v3.json').read_text())
assets={'background':ROOT/'public/assets/images/doormaster-clean-background-v1.png','sign':ROOT/'public/assets/images/doormaster-series-sign-v2.png','logo':ROOT/'src/cover-doormaster-v2/assets/logo.png'}
hashes={k:hashlib.sha256(p.read_bytes()).hexdigest() for k,p in assets.items()}
im=Image.open(assets['background']).convert('RGBA');layers={}
fontroot=ROOT/'src/cover-doormaster-v2/assets'
def font(size,weight='Black'):return ImageFont.truetype(str(fontroot/('Pretendard-'+weight+('.woff2' if weight=='Medium' else '.ttf'))),size)
def layer(name):
 a=Image.new('RGBA',im.size);layers[name]=a;return a,ImageDraw.Draw(a)
a,d=layer('B-approved-sign');x,y,w=c['sign'];sign=Image.open(assets['sign']).convert('RGBA');sign=sign.resize((w,round(w*sign.height/sign.width)),Image.Resampling.LANCZOS);a.alpha_composite(sign,(x,y))
a,d=layer('D-yellow-brush');d.polygon(c['brush'],fill='#FFD347')
# Short uneven bristle marks remain part of the independent brush layer.
for j in range(12):
 y=713+j*9;d.line((43-j%3*3,y,58,y-2),fill='#FFD347',width=3)
a,d=layer('C-main-title')
for t in c['title']:d.text(tuple(t['xy']),t['text'],font=font(t['size']),fill='#101112',anchor='lt')
a,d=layer('E-subtitle');d.text(tuple(c['subtitle']['xy']),c['subtitle']['text'],font=font(c['subtitle']['size'],'Medium'),fill='#252625',anchor='mt')
a,d=layer('G-connectors')
for t in c['labels']:
 d.line([tuple(t['from']),tuple(t['point'])],fill=t['line'],width=4);x,y=t['point'];d.ellipse((x-8,y-8,x+8,y+8),fill=t['line'])
a,d=layer('F-comparison-labels')
for t in c['labels']:
 d.rounded_rectangle(t['box'],radius=28,fill=t['fill']);x0,y0,x1,y1=t['box'];d.text(((x0+x1)//2,y0+12),t['text'],font=font(31),fill=t['color'],anchor='mt')
a,d=layer('H-approved-brand');logo=Image.open(assets['logo']).convert('RGBA');logo.thumbnail((48,48),Image.Resampling.LANCZOS);a.alpha_composite(logo,(486,1784));d.text((548,1780),'DAESAN',font=font(25),fill='#123628',anchor='lt');d.text((548,1811),'대산종합건축자재',font=font(14,'Medium'),fill='#123628',anchor='lt')
for a in layers.values():im=Image.alpha_composite(im,a)
def save(a,p):
 if p.exists():raise FileExistsError(p)
 a.convert('RGB').save(p)
save(im,OUT/'doormaster-slim-frame-cover-v3.png')
for name,top,bottom in [('3x4',240,1680),('4x5',285,1635),('1x1',420,1500)]:save(im.crop((0,top,1080,bottom)),QA/f'cover-v3-{name}.png')
a=Image.new('RGB',(1080,1000),'#F7F5EF');d=ImageDraw.Draw(a);d.text((15,12),'V2',fill='black');d.text((555,12),'V3 CANDIDATE',fill='black');a.paste(Image.open(ROOT/'public/covers/doormaster-slim-frame-cover-v2.png').resize((540,960)),(0,40));a.paste(im.resize((540,960)),(540,40));save(a,QA/'cover-v2-vs-v3.png');save(im.resize((360,640),Image.Resampling.LANCZOS),QA/'cover-v3-mobile.png')
# Only pixels under independent overlays may differ from the approved background.
import numpy as np
mask=np.zeros((1920,1080),bool)
for a in layers.values():mask|=np.array(a)[:,:,3]>0
base=np.array(Image.open(assets['background']).convert('RGB'));final=np.array(im.convert('RGB'))
report={'assets_sha256':hashes,'asset_hashes_unchanged':all(hashlib.sha256(p.read_bytes()).hexdigest()==hashes[k] for k,p in assets.items()),'uncovered_pixel_differences':int(np.any(base!=final,axis=2)[~mask].sum()),'layers':list(layers),'output_size':im.size,'font':'Pretendard Black / Medium; not identified as original reference font'}
(SRC/'technical-qa-v3.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False))
