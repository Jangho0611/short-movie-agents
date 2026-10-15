from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json,hashlib,sys
ROOT=Path(__file__).resolve().parents[2]
SRC=Path(__file__).parent
OUT=Path(sys.argv[1]) if len(sys.argv)>1 else ROOT/'public/covers'
QA=OUT/'qa';OUT.mkdir(parents=True,exist_ok=True);QA.mkdir(parents=True,exist_ok=True)
c=json.loads((SRC/'layout-v4.json').read_text())
assets={'background':ROOT/'public/assets/images/doormaster-clean-background-v1.png','sign':ROOT/'public/assets/images/doormaster-series-sign-v2.png','logo':ROOT/'src/cover-doormaster-v2/assets/logo.png'}
hashes={k:hashlib.sha256(p.read_bytes()).hexdigest() for k,p in assets.items()}
im=Image.open(assets['background']).convert('RGBA');layers={}
fontroot=ROOT/'src/cover-doormaster-v2/assets'
def font(size,weight='Black'):return ImageFont.truetype(str(fontroot/('Pretendard-'+weight+('.woff2' if weight=='Medium' else '.ttf'))),size)
def layer(name):
 a=Image.new('RGBA',im.size);layers[name]=a;return a,ImageDraw.Draw(a)
a,d=layer('B-approved-sign');x,y,w=c['sign'];sign=Image.open(assets['sign']).convert('RGBA');sign=sign.resize((w,round(w*sign.height/sign.width)),Image.Resampling.LANCZOS);a.alpha_composite(sign,(x,y))
a,d=layer('D-yellow-brush')
import random
r=random.Random(c['brush_settings']['seed'])
# Individual overlapping bristle strokes, with varied starts, lengths and alpha.
for j in range(135):
 y=716+j*.95
 x0=38+r.uniform(-7,13);x1=531+r.uniform(-15,10)
 if j<10 or j>123:x0+=r.uniform(0,30);x1-=r.uniform(0,35)
 d.line((x0,y,x1,y-18+r.uniform(-2,2)),fill=(255,211,71,r.randint(205,255)),width=r.choice([2,3,4]))
# Thin dry-brush tips, independent from title glyphs.
for j in range(42):
 y=r.uniform(720,839);x=r.choice([r.uniform(30,44),r.uniform(522,541)])
 d.line((x,y,x+r.uniform(3,14),y-.5),fill=(255,211,71,r.randint(100,210)),width=1)
a,d=layer('C-main-title')
for t in c['title']:
 f=font(t['size']);box=f.getbbox(t['text']);g=Image.new('RGBA',(box[2]-box[0]+8,box[3]-box[1]+8));gd=ImageDraw.Draw(g);gd.text((4-box[0],4-box[1]),t['text'],font=f,fill='#101112')
 g=g.resize((t['width'],t['height']),Image.Resampling.LANCZOS).rotate(t['angle'],resample=Image.Resampling.BICUBIC,expand=True)
 a.alpha_composite(g,tuple(t['xy']))
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
save(im,OUT/'doormaster-slim-frame-cover-v4.png')
for name,top,bottom in [('3x4',240,1680),('4x5',285,1635),('1x1',420,1500)]:save(im.crop((0,top,1080,bottom)),QA/f'cover-v4-{name}.png')
def comparison(left,label,name):
 a=Image.new('RGB',(1080,1000),'#F7F5EF');d=ImageDraw.Draw(a);d.text((15,12),label,fill='black');d.text((555,12),'V4 CANDIDATE',fill='black');a.paste(left.resize((540,960)),(0,40));a.paste(im.resize((540,960)),(540,40));save(a,QA/name)
comparison(Image.open(ROOT/'public/covers/doormaster-slim-frame-cover-v3.png'),'V3','cover-v3-vs-v4.png')
comparison(Image.open('/Users/janghokim/Documents/short-movie-agents/docs/design-styles/door-master/references/door-master-cover-reference-v1.png'),'REFERENCE','cover-v4-reference-comparison.png')
save(im.resize((360,640),Image.Resampling.LANCZOS),QA/'cover-v4-mobile.png')
import numpy as np
old=np.array(Image.open(ROOT/'public/covers/doormaster-slim-frame-cover-v3.png').convert('RGB'));now=np.array(im.convert('RGB'));diff=np.any(old!=now,axis=2)
allowed=np.zeros((1920,1080),bool);allowed[560:856,25:1040]=True
report={'source_hashes_unchanged':all(hashlib.sha256(p.read_bytes()).hexdigest()==hashes[k] for k,p in assets.items()),'source_hashes':hashes,'changes_outside_title_brush_region':int(diff[~allowed].sum()),'difference_bbox':Image.fromarray(diff).getbbox(),'output_size':im.size,'font':'Pretendard Black, transformed per text run; original reference font unknown'}
(SRC/'technical-qa-v4.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(report)
