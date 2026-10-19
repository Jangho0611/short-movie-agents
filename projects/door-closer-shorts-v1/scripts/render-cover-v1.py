from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import subprocess,json,hashlib,shutil,random
P=Path(__file__).resolve().parents[1];R=P.parents[1];C=P/'public/covers';Q=C/'qa';Q.mkdir(parents=True,exist_ok=True)
font=P/'public/references/door-master-series-sign-v2/fonts/Pretendard-Black.ttf'
sign=P/'public/references/door-master-series-sign-v2/doormaster-series-sign-v2.png'; logo=P/'public/assets/logos/daesanlogo2.png'
assert hashlib.sha256(sign.read_bytes()).digest()==hashlib.sha256((R/'docs/design-styles/door-master/assets/series-sign-v2/doormaster-series-sign-v2.png').read_bytes()).digest()
ref=P/'public/references/door-master-cover-reference-v1.png'
if not ref.exists():shutil.copyfile(R/'docs/design-styles/door-master/references/door-master-cover-reference-v1.png',ref)
baseline={str(f.relative_to(P)):hashlib.sha256(f.read_bytes()).hexdigest() for folder in ['public/assets/video','public/assets/audio'] for f in (P/folder).glob('*') if f.is_file()}
(P/'docs/cover-v1-preservation-baseline.json').write_text(json.dumps(baseline,indent=2))
frame=P/'public/assets/images/door-closer-cover-source-A-4s.png'
subprocess.run(['ffmpeg','-v','error','-n','-ss','4.000','-i',str(P/'public/assets/video/KakaoTalk_Video_2026-10-19-10-00-03.mp4'),'-frames:v','1',str(frame)],check=True)
config={'size':[1080,1920],'background':'#F6F3EC','font':'Pretendard-Black.ttf','title':[{'text':'문이 왜','x':105,'y':650,'size':145},{'text':'안 닫힐까?','x':74,'y':804,'size':168}],'subtitle':{'text':'실제 A/S 사례로 알아보는 도어클로저','x':80,'y':1003,'size':39},'series_sign':{'x':110,'y':282,'width':860},'photo':{'source':'A 4.000s','x':0,'y':1060,'width':1080,'top_fade_px':65},'brand':{'x':65,'y':1550},'auxiliary_image':None}
(C/'door-closer-cover-v1-layout.json').write_text(json.dumps(config,ensure_ascii=False,indent=2))
im=Image.new('RGBA',(1080,1920),config['background']);draw=ImageDraw.Draw(im)
photo=Image.open(frame).convert('RGBA');photo=photo.resize((1080,1920),Image.Resampling.LANCZOS)
mask=Image.new('L',photo.size,255);md=ImageDraw.Draw(mask)
for y in range(65):md.line((0,y,1080,y),fill=round(255*y/64))
photo.putalpha(mask);im.alpha_composite(photo,(0,1060))
s=Image.open(sign).convert('RGBA');s=s.resize((860,round(s.height*860/s.width)),Image.Resampling.LANCZOS);im.alpha_composite(s,(110,282))
draw=ImageDraw.Draw(im)
rng=random.Random(42)
pts=[(45+i*25,815-0.025*i*25+rng.randint(-5,5)) for i in range(39)]
pts += [(995+rng.randint(-6,6),815+i*9) for i in range(18)]
pts += [(995-i*25,974-0.025*(995-i*25)+rng.randint(-5,5)) for i in range(39)]
pts += [(43+rng.randint(-6,6),967-i*9) for i in range(18)]
draw.polygon(pts,fill='#FFDA35')
for item in config['title']+[config['subtitle']]:draw.text((item['x'],item['y']),item['text'],font=ImageFont.truetype(str(font),item['size']),fill='#17191B',anchor='lt')
l=Image.open(logo).convert('RGBA');l=l.crop(l.getchannel('A').getbbox());l.thumbnail((74,74),Image.Resampling.LANCZOS);im.alpha_composite(l,(65,1550))
draw=ImageDraw.Draw(im);draw.text((154,1554),'DAESAN',font=ImageFont.truetype(str(font),29),fill='#123628',anchor='lt');draw.text((154,1591),'대산종합건축자재',font=ImageFont.truetype(str(font),21),fill='#123628',anchor='lt')
out=C/'door-closer-cover-v1.png';assert not out.exists();im.convert('RGB').save(out)
for label,top,h in [('3x4',240,1440),('4x5',285,1350),('1x1',420,1080)]:im.crop((0,top,1080,top+h)).convert('RGB').save(Q/f'door-closer-cover-v1-{label}.png')
canvas=Image.new('RGB',(1080,640),'#dedbd4')
for i,(name,path) in enumerate([('9:16',out),('3:4',Q/'door-closer-cover-v1-3x4.png'),('4:5',Q/'door-closer-cover-v1-4x5.png')]):
 thumb=Image.open(path);thumb.thumbnail((350,600),Image.Resampling.LANCZOS);canvas.paste(thumb,(i*360,30));ImageDraw.Draw(canvas).text((i*360+10,8),name,fill='black')
canvas.save(Q/'door-closer-cover-v1-mobile-qa.png')
assets=[sign,logo,font,ref,frame]
(P/'docs/cover-v1-assets.json').write_text(json.dumps({str(f.relative_to(P)):hashlib.sha256(f.read_bytes()).hexdigest() for f in assets},ensure_ascii=False,indent=2))
assert all(hashlib.sha256((P/f).read_bytes()).hexdigest()==h for f,h in baseline.items())
print(out)
