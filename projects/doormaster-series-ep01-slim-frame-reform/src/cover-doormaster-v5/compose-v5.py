from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json,hashlib,sys,argparse
ROOT=Path(__file__).resolve().parents[2]
SRC=Path(__file__).parent
parser=argparse.ArgumentParser(description='Review output only; never overwrite approved assets')
parser.add_argument('output',type=Path,help='NEW output directory (must not exist)')
parser.add_argument('--reference',type=Path,help='Optional reference comparison only')
parser.add_argument('--dry-run',action='store_true',help='Validate required assets without producing output')
args=parser.parse_args()
OUT=args.output.resolve()
if args.reference is not None and not args.reference.is_file():raise FileNotFoundError(args.reference)
c=json.loads((SRC/'layout-v5.json').read_text())
assets={'background':ROOT/'public/assets/images/doormaster-clean-background-v1.png','sign':ROOT/'public/assets/images/doormaster-series-sign-v2.png','logo':ROOT/'src/cover-doormaster-v2/assets/logo.png'}
hashes={k:hashlib.sha256(p.read_bytes()).hexdigest() for k,p in assets.items()}
for name in ['Pretendard-Black.ttf','Pretendard-Medium.woff2']:
 p=ROOT/'src/cover-doormaster-v2/assets'/name
 if not p.is_file():raise FileNotFoundError(p)
if args.dry_run:
 print('PASS: Cover v5 required inputs; no output generated')
 sys.exit(0)
OUT.mkdir(parents=True,exist_ok=False)
QA=OUT/'qa';QA.mkdir()
im=Image.open(assets['background']).convert('RGBA');layers={}
import numpy as np,cv2
original=np.array(im);cfg=c['background_map'];delta=cfg['shift'];start=cfg['transition_start'];end=cfg['transition_end']
y=np.arange(1920,dtype=np.float32);u=np.clip((y-start)/(end-start),0,1);sy=y-delta*(u*u*(3-2*u))
mapy=np.repeat(sy[:,None],1080,axis=1);mapx=np.repeat(np.arange(1080,dtype=np.float32)[None,:],1920,axis=0)
remapped=cv2.remap(original,mapx,mapy,cv2.INTER_CUBIC,borderMode=cv2.BORDER_REPLICATE)
remapped[:start]=original[:start];remapped[end:]=original[end-delta:1920-delta]
product_difference=int(np.any(remapped[end:]!=original[end-delta:1920-delta],axis=2).sum())
im=Image.fromarray(remapped);repositioned=im.copy()

fontroot=ROOT/'src/cover-doormaster-v2/assets'
def font(size,weight='Black'):return ImageFont.truetype(str(fontroot/('Pretendard-'+weight+('.woff2' if weight=='Medium' else '.ttf'))),size)
def layer(name):
 a=Image.new('RGBA',im.size);layers[name]=a;return a,ImageDraw.Draw(a)
a,d=layer('B-approved-sign');x,y,w=c['sign'];sign=Image.open(assets['sign']).convert('RGBA');sign=sign.resize((w,round(w*sign.height/sign.width)),Image.Resampling.LANCZOS);a.alpha_composite(sign,(x,y))
a,d=layer('D-yellow-brush')
import random
r=random.Random(51)
# Filled broad stroke, irregular edge bristles rather than interior stripes.
pts=[]
for x in range(30,588,5):pts.append((x,764-(x-30)*.026+r.uniform(-3,3)))
for yy in range(752,920,4):pts.append((581+r.uniform(-7,5),yy))
for x in range(582,29,-5):pts.append((x,932-(x-30)*.026+r.uniform(-3,3)))
for yy in range(930,763,-4):pts.append((32+r.uniform(-7,5),yy))
d.polygon(pts,fill='#FFD347')
for j in range(70):
 yy=r.uniform(768,925);xx=r.choice([r.uniform(24,35),r.uniform(578,589)]);d.line((xx,yy,xx+r.uniform(2,7),yy-1),fill=(255,211,71,r.randint(150,245)),width=1)
a,d=layer('C-main-title')
for t in c['title']:
 f=font(t['size']);box=f.getbbox(t['text']);g=Image.new('RGBA',(box[2]-box[0]+8,box[3]-box[1]+8));gd=ImageDraw.Draw(g);gd.text((4-box[0],4-box[1]),t['text'],font=f,fill='#101112')
 g=g.rotate(t['angle'],resample=Image.Resampling.BICUBIC,expand=True)
 a.alpha_composite(g,tuple(t['xy']))
a,d=layer('E-subtitle');d.text(tuple(c['subtitle']['xy']),c['subtitle']['text'],font=font(c['subtitle']['size'],'Medium'),fill='#252625',anchor='mt')
a,d=layer('G-connectors')
for t in c['labels']:
 d.line([tuple(t['from']),tuple(t['point'])],fill=t['line'],width=4);x,y=t['point'];d.ellipse((x-8,y-8,x+8,y+8),fill=t['line'])
a,d=layer('F-comparison-labels')
for t in c['labels']:
 d.rounded_rectangle(t['box'],radius=28,fill=t['fill']);x0,y0,x1,y1=t['box'];d.text(((x0+x1)//2,y0+12),t['text'],font=font(31),fill=t['color'],anchor='mt')
a,d=layer('I-comparison-arrow')
for x in [534,591]:d.polygon([(x,1340),(x+45,1395),(x,1450),(x,1425),(x+25,1395),(x,1365)],fill=(169,139,101,135))
a,d=layer('H-approved-brand');logo=Image.open(assets['logo']).convert('RGBA');logo.thumbnail((48,48),Image.Resampling.LANCZOS);a.alpha_composite(logo,(486,1784));d.text((548,1780),'DAESAN',font=font(25),fill='#123628',anchor='lt');d.text((548,1811),'대산종합건축자재',font=font(14,'Medium'),fill='#123628',anchor='lt')
for a in layers.values():im=Image.alpha_composite(im,a)
def save(a,p):
 if p.exists():raise FileExistsError(p)
 a.convert('RGB').save(p)
save(im,OUT/'doormaster-slim-frame-cover-v5.png')
for name,top,bottom in [('3x4',240,1680),('4x5',285,1635),('1x1',420,1500)]:save(im.crop((0,top,1080,bottom)),QA/f'cover-v5-{name}.png')
def comparison(left,label,name):
 a=Image.new('RGB',(1080,1000),'#F7F5EF');d=ImageDraw.Draw(a);d.text((15,12),label,fill='black');d.text((555,12),'V5 CANDIDATE',fill='black');a.paste(left.resize((540,960)),(0,40));a.paste(im.resize((540,960)),(540,40));save(a,QA/name)
if args.reference is not None:comparison(Image.open(args.reference),'REFERENCE','cover-v5-reference-comparison.png')
save(im.resize((360,640),Image.Resampling.LANCZOS),QA/'cover-v5-mobile.png')
report={'source_hashes_unchanged':all(hashlib.sha256(p.read_bytes()).hexdigest()==hashes[k] for k,p in assets.items()),'source_hashes':hashes,'product_translation_px':delta,'product_pixel_differences_after_translation':product_difference,'top_400_rows_identical':bool(np.array_equal(remapped[:400],original[:400])),'output_size':im.size,'font':'Pretendard Black, native proportions; rotations only, no nonuniform scaling'}
(QA/'technical-qa-v5.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(report)
