from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageFilter
import numpy as np,json
P=Path(__file__).resolve().parents[1]; out=P/'public/covers';qa=out/'qa'
font=P/'public/references/doormaster-series-sign-v2/fonts/Pretendard-Black.ttf'
# Editable typography and layout; no generated product imagery.
W,H=1080,1920
rng=np.random.default_rng(30);y,x=np.mgrid[:H,:W];shade=5*np.exp(-((x-y*.42-100)/150)**2)+3*(x/W);noise=rng.normal(0,.45,(H,W))
a=np.stack([247-shade+noise,244-shade+noise,237-shade+noise],axis=2).clip(0,255).astype('uint8');im=Image.fromarray(a).convert('RGBA')
def place(asset,xy,width=None,height=None):
 a=Image.open(asset).convert('RGBA')
 if width:a=a.resize((width,round(a.height*width/a.width)),Image.Resampling.LANCZOS)
 if height:a=a.resize((round(a.width*height/a.height),height),Image.Resampling.LANCZOS)
 im.alpha_composite(a,xy)
place(P/'public/references/doormaster-series-sign-v2/doormaster-series-sign-v2.png',(145,280),width=735)
d=ImageDraw.Draw(im)
def txt(text,xy,size,fill='#191919'):
 d.text(xy,text,font=ImageFont.truetype(str(font),size),fill=fill,anchor='lt',stroke_width=0)
txt('경첩도',(105,610),138)
# Irregular brush edge, not a rectangular highlight.
pts=[(84,768),(117,761),(165,765),(211,758),(263,762),(321,755),(357,760),(366,777),(359,793),(366,810),(360,830),(367,852),(358,871),(364,890),(329,896),(270,894),(212,900),(159,895),(105,902),(82,894),(89,875),(80,855),(87,835),(81,814),(90,795)]
d.polygon(pts,fill='#F7CF43')
txt('좌우',(94,754),136);txt('가 따로?',(365,774),115)
txt('영림 댐핑 스프링경첩 플래그 타입',(107,927),43,'#494741')
# Preserve every product pixel; only trim transparent margin and uniform resize.
hero=Image.open(P/'public/assets/images/blender-concept-v2/frame-0001.png').convert('RGBA');hero=hero.crop(hero.getbbox());hero=hero.resize((round(hero.width*620/hero.height),620),Image.Resampling.LANCZOS)
shadow=Image.new('RGBA',(W,H));shadow.paste((45,39,29,35),(520,1025,520+hero.width,1025+hero.height),hero.getchannel('A'));shadow=shadow.filter(ImageFilter.GaussianBlur(22));im=Image.alpha_composite(im,shadow);im.alpha_composite(hero,(480,1000));d=ImageDraw.Draw(im)
txt('개념형 3D',(105,1250),31,'#777169')
d.line([(107,1300),(280,1300),(410,1370)],fill='#B5AB99',width=2)
logo=Image.open(P/'public/daesan-ending/logos/daesanlogo2.png').convert('RGBA');logo=logo.crop(logo.getbbox());logo.resize((140,round(logo.height*140/logo.width)),Image.Resampling.LANCZOS).save(qa/'logo-check-v1-layout2.png')
place(qa/'logo-check-v1-layout2.png',(105,1460))
def save(a,p):
 with p.open('xb') as f:a.convert('RGB').save(f,format='PNG')
save(im,out/'younglim-flag-hinge-cover-v1-layout2.png')
for name,t,b in [('3x4',240,1680),('4x5',285,1635),('1x1',420,1500)]:save(im.crop((0,t,1080,b)),qa/f'cover-v1-layout2-crop-{name}.png')
save(im.resize((360,640),Image.Resampling.LANCZOS),qa/'cover-v1-layout2-mobile-360.png')
ref=Image.open(P/'public/references/cover-reproduction/door-master-cover-reference-v1.png').convert('RGB');ref.thumbnail((540,960));sheet=Image.new('RGB',(1080,960),'#eee');sheet.paste(ref,(0,0));sheet.paste(im.convert('RGB').resize((540,960)),(540,0));save(sheet,qa/'cover-v1-layout2-reference-comparison.png')
with (qa/'cover-v1-layout2-settings.json').open('x') as f:json.dump({'font':'Pretendard Black; selected for this cover, not claimed original-reference font','hero':'blender-concept-v2/frame-0001.png','sign':'approved v2 PNG unchanged aspect ratio','logo':'approved daesanlogo2.png','original':[1080,1920],'status':'USER_REVIEW_PENDING'},f,ensure_ascii=False,indent=2)
