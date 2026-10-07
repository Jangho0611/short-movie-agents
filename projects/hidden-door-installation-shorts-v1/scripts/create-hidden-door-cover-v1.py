from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import sys,math
ROOT=Path(__file__).resolve().parents[1] if 'scripts' in str(Path(__file__).resolve().parent) else Path('/Users/janghokim/Documents/hidden-door-installation-shorts-v1')
A=ROOT/'public/assets';OUT=Path(sys.argv[1]) if len(sys.argv)>1 else A/'images'
OUT.mkdir(parents=True,exist_ok=True)
cover=OUT/'hidden-door-installation-cover-v1.png';crop=OUT/'hidden-door-installation-cover-v1-instagram-center-crop.png'
assert not cover.exists() and not crop.exists(),'Never overwrite a cover'
W,H=1080,1920
im=Image.new('RGB',(W,H),'#eee9e0').convert('RGBA')
hero=Image.open(A/'images/hidden-door-scene01-hero-v1.png').convert('RGBA');hero=hero.resize((650,1155),Image.Resampling.LANCZOS)
# Feather only photograph perimeter, outside the door silhouette. No structural editing.
mask=Image.new('L',hero.size);px=mask.load()
for y in range(hero.height):
 for x in range(hero.width):
  q=min(1,x/100,(hero.width-1-x)/85,y/120,(hero.height-1-y)/150);q=max(0,q);px[x,y]=int(255*q*q*(3-2*q))
hero.putalpha(mask);im.alpha_composite(hero,(365,475))
def font(size,weight='ExtraBold'):return ImageFont.truetype(str(A/f'fonts/Pretendard-{weight}.woff2'),size)
d=ImageDraw.Draw(im)
d.text((92,468),'히든도어,',font=font(96),fill='#202b27',anchor='lt')
d.text((92,580),'목공부터 다릅니다',font=font(70),fill='#18543f',anchor='lt')
# Approved pose: translation and uniform scaling only; trim transparent margins in memory.
char=Image.open(A/'images/daesani-cover-point-left.png').convert('RGBA');box=char.getchannel('A').getbbox();char=char.crop(box);char.thumbnail((210,300),Image.Resampling.LANCZOS);im.alpha_composite(char,(130,1040))
logo=Image.open(A/'logos/daesanlogo2.png').convert('RGBA').resize((78,78),Image.Resampling.LANCZOS);im.alpha_composite(logo,(92,1390))
d=ImageDraw.Draw(im);d.text((182,1397),'DAESAN',font=font(46),fill='#123628',anchor='lt');d.text((182,1451),'대산종합건축자재',font=font(26,'Medium'),fill='#123628',anchor='lt')
im.convert('RGB').save(cover);im.crop((0,420,1080,1500)).convert('RGB').save(crop)
print(cover);print(crop)
