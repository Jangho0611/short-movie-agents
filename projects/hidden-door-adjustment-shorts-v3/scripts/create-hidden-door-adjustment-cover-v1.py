from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import hashlib, json, re

R = Path(__file__).resolve().parents[1]
A = R / 'public/assets'
O = R / 'public/covers'
O.mkdir(exist_ok=True)
(O / 'qa').mkdir(exist_ok=True)
cover = O / 'hidden-door-adjustment-cover-v1.png'
square = O / 'qa/hidden-door-adjustment-cover-v1-square.png'
assert not cover.exists() and not square.exists()
im = Image.new('RGBA', (1080, 1920), '#eee9e0')
accent = '#D56844'
def font(size, weight='Black'):
    return ImageFont.truetype(str(A / f'fonts/Pretendard-{weight}.woff2'), size)

# Approved episode 2 card, type hierarchy and brand coordinates.
layer = Image.new('RGBA', im.size)
d = ImageDraw.Draw(layer)
d.rounded_rectangle((53,341,770,694),36,fill=(219,231,221,235))
im.alpha_composite(layer)
d = ImageDraw.Draw(im)
d.rounded_rectangle((90,279,98,309),4,fill=accent)
d.text((114,279),'건축자재 상식 · 히든도어',font=font(30,'SemiBold'),fill=accent,anchor='lt')
d.ellipse((710,370,722,382),fill=accent)
d.ellipse((728,370,740,382),fill='#aeb8af')
d.text((92,445),'히든도어 설치 후',font=font(60),fill='#20372E',anchor='lt')
d.text((92,537),'단차가 생겼다면?',font=font(60),fill=accent,anchor='lt')

# Exact approved Surface profile. Same uniform transform for every path;
# outward offset remains 5 SVG units, never a claimed millimeter range.
src = (R/'src/AdjustmentScenesV2.tsx').read_text()
paths = ['M70 230H560V405H440V440H70Z','M560 405H440V440',
         'M575 190H790V412H575Z','M447 412H790V440H447Z']
assert all(f'd="{p}"' in src for p in paths)
hero = Image.new('RGBA',(3240,5760))
h = ImageDraw.Draw(hero)
scale, ox, oy = 1.08, 14, 620
def xy(x,y): return ((ox+x*scale)*3,(oy+y*scale)*3)
def path(p,fill=None,stroke='#477660',width=2,dy=0):
    tokens=re.findall(r'[MLHVZ]|-?\d+(?:\.\d+)?',p)
    i=0; x=y=0; pts=[]
    while i<len(tokens):
        cmd=tokens[i];i+=1
        if cmd in ('M','L'): x=float(tokens[i]);y=float(tokens[i+1]);i+=2
        elif cmd=='H': x=float(tokens[i]);i+=1
        elif cmd=='V': y=float(tokens[i]);i+=1
        elif cmd=='Z': break
        pts.append(xy(x,y+dy))
    if fill: h.polygon(pts,fill=fill)
    h.line(pts+([pts[0]] if p.endswith('Z') else []),fill=stroke,width=round(width*scale*3),joint='curve')
path(paths[0], '#DFE6DF',width=3,dy=5)
path(paths[1],stroke=accent,width=3,dy=5)
path(paths[2], '#DFDED5', '#A9AFA6',1.5)
path(paths[3], '#D6BB95', '#85765E',2)
for x in range(70,810,15): path(f'M{x} 440H{min(x+8,810)}',width=2)
path('M70 445H440',stroke=accent,width=3)
path('M290 158H485L505 410',stroke=accent)
h.ellipse((*xy(408.5,408),*xy(478.5,478)),outline=accent,width=10)
path('M443.5 478V512',stroke=accent)
path('M735 427L795 477H680',stroke='#B28D58')
im.alpha_composite(hero.resize(im.size,Image.Resampling.LANCZOS))
d=ImageDraw.Draw(im)
def label(x,y,text,size,color,anchor='ls'):
    d.text((ox+x*scale,oy+y*scale),text,font=font(size,'SemiBold'),fill=color,anchor=anchor)
label(155,315,'문짝',39,'#20372E')
label(608,270,'벽체',30,'#6F776F')
label(72,170,'어깨가공',32,accent)
label(610,515,'벽 마감면',29,'#85765E')
label(443.5,562,'단차 발생',42,accent,'ms')
d.text((90,1308),'어깨가공 단면 개념도 · 비례 생략',font=font(23,'Medium'),fill='#6F776F',anchor='lt')

# Original complete transparent PNG, uniform scale and translation only.
charpath=A/'images/daesani-cover-point-right.png'
char=Image.open(charpath).convert('RGBA')
bbox=char.getchannel('A').point(lambda a:255 if a>=64 else 0).getbbox()
s=270/(bbox[3]-bbox[1])
char=char.resize((round(char.width*s),round(char.height*s)),Image.Resampling.LANCZOS)
im.alpha_composite(char,(round(730-bbox[0]*s),round(1190-bbox[1]*s)))
brand=Image.new('RGBA',(300,88))
brand.alpha_composite(Image.open(A/'logos/daesanlogo2.png').convert('RGBA').resize((78,78),Image.Resampling.LANCZOS),(0,0))
b=ImageDraw.Draw(brand)
b.text((90,7),'DAESAN',font=font(46),fill='#123628',anchor='lt')
b.text((90,61),'대산종합건축자재',font=font(26,'Medium'),fill='#123628',anchor='lt')
im.alpha_composite(brand.resize((240,70),Image.Resampling.LANCZOS),(90,1390))
im.convert('RGB').save(cover)
im.crop((0,420,1080,1500)).convert('RGB').save(square)
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
mono=R.parents[1]
assert sha(charpath)==sha(mono/'assets/daesani-motion-library/cover/daesani-cover-point-right.png')
assert sha(A/'logos/daesanlogo2.png')==sha(mono/'assets/daesan-ending/logos/daesanlogo2.png')
assert sha(A/'fonts/Pretendard-Black.woff2')==sha(mono/'projects/hidden-door-carpentry-shorts-v2/public/assets/fonts/Pretendard-Black.woff2')
baseline=json.loads((R/'docs/cover-v1-preservation-before.json').read_text())
assert all(sha(Path(p))==v for p,v in baseline.items())
report={'dimensions':[1080,1920],'square_crop':[0,420,1080,1500],
        'hero_source':'src/AdjustmentScenesV2.tsx: Surface()',
        'hero_scale':scale,'hero_offset':[ox,oy],'door_offset_svg_units':5,
        'character':{'file':str(charpath),'visible_xy':[730,1190],'height':270,'flipped':False,'canonical_sha256':sha(charpath)},
        'brand':{'xy':[90,1390],'size':[240,70],'color':'#123628','logo_sha256':sha(A/'logos/daesanlogo2.png')},
        'preserved_existing_files':len(baseline),'preservation_sha256':'PASS','visual_qa':'pending'}
(R/'docs/cover-v1-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(cover)
print(square)
