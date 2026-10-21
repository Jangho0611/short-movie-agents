from pathlib import Path
import shutil,hashlib,json,random
from PIL import Image,ImageDraw,ImageFont
P=Path('/Users/janghokim/Documents/short-movie-agents/projects/younglim-stepdoor-types-shorts-v1');R=P.parents[1];C=P/'public/covers';Q=C/'qa';Q.mkdir(parents=True,exist_ok=True)
S=R/'docs/design-styles/door-master/assets/series-sign-v2';D=P/'public/assets/door-master-series-sign-v2'
if not D.exists():shutil.copytree(S,D)
assert all(hashlib.sha256(f.read_bytes()).digest()==hashlib.sha256((D/f.relative_to(S)).read_bytes()).digest() for f in S.rglob('*') if f.is_file())
font=D/'fonts/Pretendard-Black.ttf';im=Image.new('RGBA',(1080,1920),'#F6F3EC');draw=ImageDraw.Draw(im)
sign=Image.open(D/'doormaster-series-sign-v2.png').convert('RGBA');sign=sign.resize((870,round(sign.height*870/sign.width)),Image.Resampling.LANCZOS);im.alpha_composite(sign,(105,245))
def txt(t,x,y,size,color='#17191B'):ImageDraw.Draw(im).text((x,y),t,font=ImageFont.truetype(str(font),size),fill=color,anchor='lt')
txt('영림 스텝도어',64,675,112)
rng=random.Random(5);pts=[(51+i*16,809+rng.randint(-5,5)) for i in range(21)]+[(385,907)]+[(385-i*16,918+rng.randint(-5,5)) for i in range(22)]
ImageDraw.Draw(im).polygon(pts,fill='#FFDA35');txt('5가지,',64,809,110);txt('뭐가 다를까?',398,835,78)
for i,n in enumerate(['younglim-step-basic-unified-v1.png','younglim-step-expanded-space-v3.png']):
 photo=Image.open(P/'public/assets/images'/n).convert('RGBA');photo=photo.crop((170,0,850,1480));photo=photo.resize((530,1154),Image.Resampling.LANCZOS);im.alpha_composite(photo,(i*550,1000))
logo=P/'public/daesan-ending/logos/daesanlogo2.png';l=Image.open(logo).convert('RGBA');l=l.crop(l.getchannel('A').getbbox());l.thumbnail((65,65));im.alpha_composite(l,(60,1810));txt('DAESAN',140,1811,30,'#123628');txt('대산종합건축자재',140,1850,23,'#123628')
f=C/'younglim-stepdoor-cover-v3.png';assert not f.exists();im.convert('RGB').save(f)
for name,y,h in [('3x4',240,1440),('4x5',285,1350),('1x1',420,1080)]:im.crop((0,y,1080,y+h)).convert('RGB').save(Q/f'younglim-stepdoor-cover-v3-{name}.png')
can=Image.new('RGB',(1440,680),'#dedbd4');dd=ImageDraw.Draw(can)
for i,(label,path) in enumerate([('9:16',f)]+[(n,Q/f'younglim-stepdoor-cover-v3-{n}.png') for n in ['3x4','4x5','1x1']]):
 pic=Image.open(path);pic.thumbnail((350,630));can.paste(pic,(i*360,30));dd.text((i*360+8,6),label,fill='black')
can.save(Q/'younglim-stepdoor-cover-v3-mobile-qa.png')
print(f)
