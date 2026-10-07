from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import re,json,hashlib
R=Path(__file__).resolve().parents[1];A=R/'public/assets';O=R/'public/covers';O.mkdir(exist_ok=True)
cover=O/'hidden-door-carpentry-cover-v1.png';crop=O/'qa/hidden-door-carpentry-cover-v1-instagram-square.png';crop.parent.mkdir(exist_ok=True)
assert not cover.exists() and not crop.exists()
im=Image.new('RGBA',(1080,1920),'#eee9e0')
# The exact approved paths; uniform scale, no flipping or profile edits.
src=(R/'src/CarpentryScenesV8.tsx').read_text();block=src[src.index('const geometry='):src.index('function Diagram')]
colors={'C.wall':'#CDD0C8','C.wood':'#CCAD83','C.finish':'#B28D58','C.door':'#DFE6DF'}
paths=re.findall(r"\['([^']+)','([^']+)',([^\]]+)\]",block)
assert len(paths)==9
hero=Image.new('RGBA',(1080*3,1920*3));hd=ImageDraw.Draw(hero)
def points(path):
 tokens=re.findall(r'[MLHVZ]|-?\d+(?:\.\d+)?',path);i=0;x=y=0;out=[]
 while i<len(tokens):
  cmd=tokens[i];i+=1
  if cmd in ['M','L']:x=float(tokens[i]);y=float(tokens[i+1]);i+=2
  elif cmd=='H':x=float(tokens[i]);i+=1
  elif cmd=='V':y=float(tokens[i]);i+=1
  elif cmd=='Z':break
  out.append(((90+x*1.8)*3,(780+y*1.8)*3))
 return out
for key,path,col in paths:
 fill=colors.get(col,col.strip("'"));pts=points(path)
 hd.polygon(pts,fill=fill);hd.line(pts+[pts[0]],fill='#657267',width=4,joint='curve')
im.alpha_composite(hero.resize(im.size,Image.Resampling.LANCZOS))
def font(size,weight='Black'):return ImageFont.truetype(str(A/f'fonts/Pretendard-{weight}.woff2'),size)
layer=Image.new('RGBA',im.size);d=ImageDraw.Draw(layer);d.rounded_rectangle((53,341,770,694),radius=36,fill=(219,231,221,235));im.alpha_composite(layer)
d=ImageDraw.Draw(im);d.rounded_rectangle((90,279,98,309),radius=4,fill='#18543f');d.text((114,279),'히든도어 시공',font=font(30,'SemiBold'),fill='#18543f',anchor='lt')
d.ellipse((710,370,722,382),fill='#18543f');d.ellipse((728,370,740,382),fill='#aeb8af')
d.text((92,445),'히든도어 목공',font=font(60),fill='#202b27',anchor='lt');d.text((92,537),'어떻게 준비할까?',font=font(60),fill='#18543f',anchor='lt')
charpath=A/'images/daesani-cover-point-right.png';char=Image.open(charpath).convert('RGBA');bbox=char.getchannel('A').point(lambda a:255 if a>=64 else 0).getbbox();scale=360/(bbox[3]-bbox[1]);char=char.resize((round(char.width*scale),round(char.height*scale)),Image.Resampling.LANCZOS);im.alpha_composite(char,(round(710-bbox[0]*scale),round(850-bbox[1]*scale)))
logo=Image.open(A/'logos/daesanlogo2.png').convert('RGBA');assert logo.width==logo.height
logo=logo.resize((78,78),Image.Resampling.LANCZOS);im.alpha_composite(logo,(675,1390));d=ImageDraw.Draw(im);d.text((765,1397),'DAESAN',font=font(46),fill='#123628',anchor='lt');d.text((765,1451),'대산종합건축자재',font=font(26,'Medium'),fill='#123628',anchor='lt')
im.convert('RGB').save(cover);im.crop((0,420,1080,1500)).convert('RGB').save(crop)
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
mono=R.parents[1]
assert sha(charpath)==sha(mono/'assets/daesani-motion-library/cover/daesani-cover-point-right.png')
assert sha(A/'logos/daesanlogo2.png')==sha(mono/'assets/daesan-ending/logos/daesanlogo2.png')
base=json.loads((R/'docs/cover-v1-preservation-before.json').read_text());assert all(sha(Path(p))==h for p,h in base.items())
report={'cover':str(cover),'crop':str(crop),'dimensions':[1080,1920],'crop_dimensions':[1080,1080],'hero':'exact 9 geometry paths from CarpentryScenesV8, uniform scale 1.8, offset 90/780','character':{'pose':charpath.name,'visible_xy':[710,850],'visible_height':360,'visible_width':round((bbox[2]-bbox[0])*scale),'flipped':False,'canonical_sha256':sha(charpath)},'logo_sha256':sha(A/'logos/daesanlogo2.png'),'brand_xy':[675,1390],'video_audio_source_unchanged':True,'visual_QA':'pending'}
(R/'docs/cover-v1-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(cover);print(crop)
