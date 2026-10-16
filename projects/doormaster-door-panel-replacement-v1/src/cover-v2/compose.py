from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import random,hashlib,json
P=Path(__file__).resolve().parents[2]; R=P.parents[1]; O=P/'public/assets/images'; S=Path(__file__).parent
paths=[O/'scene01-before-domus511-v2.png',O/'scene01-after-ya990-domus511-v3.png',R/'docs/design-styles/door-master/assets/series-sign-v2/doormaster-series-sign-v2.png']
paths.append(O/'doormaster-door-panel-cover-v1.png')
hashes={str(p):hashlib.sha256(p.read_bytes()).hexdigest() for p in paths}
fontpath=R/'docs/design-styles/door-master/assets/series-sign-v2/fonts/Pretendard-Black.ttf'
def f(n):return ImageFont.truetype(str(fontpath),n)
im=Image.new('RGB',(1080,1920),'#F3F0E9');d=ImageDraw.Draw(im)
# Approved photo pixels: uniform scaling and crop only; no geometric retouching.
for x,p in zip((-31,540),paths[:2]):
 photo=Image.open(p).convert('RGB').crop((110,65,450,800)).resize((571,1235),Image.Resampling.LANCZOS)
 im.paste(photo,(x,870))
# Shared approved sign, unchanged artwork and proportions.
sign=Image.open(paths[2]).convert('RGBA');sign.thumbnail((650,325),Image.Resampling.LANCZOS);im.paste(sign,(250,240),sign)
d=ImageDraw.Draw(im)
d.text((100,535),'문틀 그대로',font=f(132),fill='#111211',anchor='lt')
r=random.Random(51);pts=[]
for x in range(35,1040,5):pts.append((x,693-(x-35)*.014+r.uniform(-3,3)))
for y in range(680,835,4):pts.append((1036+r.uniform(-6,5),y))
for x in range(1035,34,-5):pts.append((x,848-(x-35)*.014+r.uniform(-3,3)))
for y in range(846,693,-4):pts.append((36+r.uniform(-6,5),y))
d.polygon(pts,fill='#FFD347')
d.text((55,704),'문짝만 교체?',font=f(151),fill='#111211',anchor='lt')
logo_path=P/'public/assets/logos/daesanlogo2.png'
hashes[str(logo_path)]=hashlib.sha256(logo_path.read_bytes()).hexdigest()
logo=Image.open(logo_path).convert('RGBA');logo.thumbnail((52,52),Image.Resampling.LANCZOS);im.paste(logo,(510,1834),logo)
base='doormaster-door-panel-cover-v2'
outputs={base:im,base+'-crop-3x4':im.crop((0,240,1080,1680)),base+'-crop-4x5':im.crop((0,285,1080,1635)),base+'-crop-1x1':im.crop((0,420,1080,1500))}
qa=Image.new('RGB',(1100,740),'#E6E3DC');qd=ImageDraw.Draw(qa)
for x,key,title,w in [(10,base,'9:16 원본',360),(390,base+'-crop-3x4','중앙 3:4',330),(740,base+'-crop-1x1','중앙 1:1',350)]:
 qd.text((x,12),title,font=f(24),fill='#111211');pic=outputs[key];qa.paste(pic.resize((w,round(pic.height*w/pic.width)),Image.Resampling.LANCZOS),(x,60))
outputs[base+'-qa']=qa
for name,pic in outputs.items():
 path=P/'public/covers'/('' if name==base else 'qa')/(name+'.png')
 path.parent.mkdir(parents=True,exist_ok=True)

 if path.exists():raise FileExistsError(path)
 pic.save(path)
assert all(hashlib.sha256(Path(p).read_bytes()).hexdigest()==h for p,h in hashes.items())
(S/'qa.json').write_text(json.dumps({'source_sha256':hashes,'source_unchanged':True,'photo_transform':'uniform scale (571/340), rounded height and crop only','font':'Pretendard Black','ai_generation_count':0,'crops':{'3x4':[0,240,1080,1680],'1x1':[0,420,1080,1500]}},ensure_ascii=False,indent=2))
