from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import subprocess,json,hashlib,random
P=Path(__file__).resolve().parents[1]; C=P/'public/covers';Q=C/'qa'
font=P/'public/references/door-master-series-sign-v2/fonts/Pretendard-Black.ttf';sign=P/'public/references/door-master-series-sign-v2/doormaster-series-sign-v2.png';logo=P/'public/assets/logos/daesanlogo2.png'
files=[f for folder in ['public/assets/video','public/assets/audio','public/covers'] for f in (P/folder).rglob('*') if f.is_file()]
base={str(f.relative_to(P)):hashlib.sha256(f.read_bytes()).hexdigest() for f in files};(P/'docs/cover-v2-preservation-baseline.json').write_text(json.dumps(base,indent=2))
frame=P/'public/assets/images/door-closer-cover-source-A-2p5s.png'
subprocess.run(['ffmpeg','-v','error','-n','-ss','2.500','-i',str(P/'public/assets/video/KakaoTalk_Video_2026-10-19-10-00-03.mp4'),'-frames:v','1',str(frame)],check=True)
im=Image.open(frame).convert('RGBA').resize((1080,1920),Image.Resampling.LANCZOS)
# A subtle continuous warm veil behind the typography, never a rectangular panel.
veil=Image.new('RGBA',im.size,(0,0,0,0));d=ImageDraw.Draw(veil)
for y in range(1060):d.line((0,y,1080,y),fill=(246,243,236,round(48*max(0,1-y/1060))))
im=Image.alpha_composite(im,veil)
s=Image.open(sign).convert('RGBA');s=s.resize((840,round(s.height*840/s.width)),Image.Resampling.LANCZOS);im.alpha_composite(s,(120,238))
d=ImageDraw.Draw(im);rng=random.Random(42)
pts=[(45+i*24,794-i*.55+rng.randint(-5,5)) for i in range(34)]
pts += [(840+rng.randint(-6,6),777+i*9) for i in range(18)]
pts += [(840-i*24,953-i*.1+rng.randint(-5,5)) for i in range(34)]
pts += [(43+rng.randint(-6,6),950-i*9) for i in range(18)]
d.polygon(pts,fill='#FFDA35')
texts=[('문이 왜',75,627,145),('안 닫힐까?',64,790,168),('실제 A/S 사례로 알아보는 도어클로저',70,985,39)]
for text,x,y,size in texts:d.text((x,y),text,font=ImageFont.truetype(str(font),size),fill='#17191B',anchor='lt')
l=Image.open(logo).convert('RGBA');l=l.crop(l.getchannel('A').getbbox());l.thumbnail((74,74),Image.Resampling.LANCZOS);im.alpha_composite(l,(65,1530));d=ImageDraw.Draw(im)
d.text((154,1534),'DAESAN',font=ImageFont.truetype(str(font),29),fill='#123628',anchor='lt');d.text((154,1571),'대산종합건축자재',font=ImageFont.truetype(str(font),21),fill='#123628',anchor='lt')
out=C/'door-closer-cover-v2.png';assert not out.exists();im.convert('RGB').save(out)
for label,top,h in [('3x4',240,1440),('4x5',285,1350)]:im.crop((0,top,1080,top+h)).convert('RGB').save(Q/f'door-closer-cover-v2-{label}.png')
canvas=Image.new('RGB',(1080,650),'#dedbd4')
for i,(label,path) in enumerate([('9:16',out),('3:4',Q/'door-closer-cover-v2-3x4.png'),('4:5',Q/'door-closer-cover-v2-4x5.png')]):
 pic=Image.open(path);pic.thumbnail((350,610));canvas.paste(pic,(i*360,30));ImageDraw.Draw(canvas).text((i*360+10,8),label,fill='black')
canvas.save(Q/'door-closer-cover-v2-mobile-qa.png')
(C/'door-closer-cover-v2-layout.json').write_text(json.dumps({'photo':{'source':'A 2.500s, closing movement; not asserted physical stop','placement':[0,0,1080,1920],'crop':'none','scale':1.5},'title_layers':texts,'sign':[120,238,840],'brand':[65,1530],'warm_veil':'alpha48 at top, continuously fades to0 byy1060','font':str(font.relative_to(P))},ensure_ascii=False,indent=2))
assert all(hashlib.sha256((P/f).read_bytes()).hexdigest()==h for f,h in base.items())
print(out)
