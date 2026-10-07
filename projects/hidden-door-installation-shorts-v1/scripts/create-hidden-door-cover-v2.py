from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import sys,math
ROOT=Path(__file__).resolve().parents[1] if 'scripts' in str(Path(__file__).resolve().parent) else Path('/Users/janghokim/Documents/hidden-door-installation-shorts-v1')
A=ROOT/'public/assets';OUT=Path(sys.argv[1]) if len(sys.argv)>1 else ROOT/'public/covers'
OUT.mkdir(parents=True,exist_ok=True)
cover=OUT/'hidden-door-installation-cover-v2.png';crop=OUT/'qa/hidden-door-installation-cover-v2-instagram-center-crop.png';crop.parent.mkdir(parents=True,exist_ok=True)
assert not cover.exists() and not crop.exists(),'Never overwrite a cover'
W,H=1080,1920
im=Image.new('RGB',(W,H),'#eee9e0').convert('RGBA')
hero=Image.open(A/'images/hidden-door-scene01-hero-v1.png').convert('RGBA');hero=hero.resize((650,1155),Image.Resampling.LANCZOS)
# Feather only photograph perimeter, outside the door silhouette. No structural editing.
mask=Image.new('L',hero.size);px=mask.load()
for y in range(hero.height):
 for x in range(hero.width):
  q=min(1,x/100,(hero.width-1-x)/85,y/120,(hero.height-1-y)/150);q=max(0,q);px[x,y]=int(255*q*q*(3-2*q))
hero.putalpha(mask);im.alpha_composite(hero,(365,495))
def font(size,weight='ExtraBold'):return ImageFont.truetype(str(A/f'fonts/Pretendard-{weight}.woff2'),size)
layer=Image.new('RGBA',im.size);d=ImageDraw.Draw(layer)
d.rounded_rectangle((53,341,770,694),radius=36,fill=(219,231,221,235));im.alpha_composite(layer)
d=ImageDraw.Draw(im)
d.rounded_rectangle((90,279,98,309),radius=4,fill='#18543f')
d.text((114,279),'건축자재 상식 · 히든도어',font=font(30,'SemiBold'),fill='#18543f',anchor='lt')
d.ellipse((710,370,722,382),fill='#18543f');d.ellipse((728,370,740,382),fill='#aeb8af')
blackpath=A/'fonts/Pretendard-Black.woff2'
black=lambda size:ImageFont.truetype(str(blackpath),size)
d.text((92,445),'히든도어,',font=black(60),fill='#202b27',anchor='lt')
d.text((92,537),'목공부터 다릅니다',font=black(60),fill='#18543f',anchor='lt')
# Match approved covers' visible character height (~380-425px), not PNG canvas height.
char=Image.open(A/'images/daesani-cover-point-left.png').convert('RGBA')
bbox=char.getchannel('A').point(lambda a:255 if a>=64 else 0).getbbox()
scale=400/(bbox[3]-bbox[1]);char=char.resize((round(char.width*scale),round(char.height*scale)),Image.Resampling.LANCZOS)
im.alpha_composite(char,(round(130-bbox[0]*scale),round(950-bbox[1]*scale)))
logo=Image.open(A/'logos/daesanlogo2.png').convert('RGBA').resize((78,78),Image.Resampling.LANCZOS);im.alpha_composite(logo,(92,1390))
d=ImageDraw.Draw(im);d.text((182,1397),'DAESAN',font=black(46),fill='#123628',anchor='lt');d.text((182,1451),'대산종합건축자재',font=font(26,'Medium'),fill='#123628',anchor='lt')
im.convert('RGB').save(cover);im.crop((0,420,1080,1500)).convert('RGB').save(crop)
print(cover);print(crop)
