from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
from collections import deque
import shutil

P=Path(__file__).resolve().parent.parent
R=P/'public/assets/references'
F=P/'public/assets/fonts'
O=P/'public/covers'
source=Path('/Users/janghokim/Documents/xi-natural-gypsum-food-fact-shorts')
for weight in ['Black','Medium','SemiBold']:
    dest=F/f'Pretendard-{weight}.ttf'
    if not dest.exists(): shutil.copy2(source/f'node_modules/pretendard/dist/public/static/alternative/Pretendard-{weight}.ttf',dest)
canonical=R/'small-daesan-canonical-v1.png'
if not canonical.exists(): shutil.copy2(source/'public/references/characters/small-daesan-canonical-v1.png',canonical)
out=O/'water-resistant-gypsum-cover-v1.png'
qa=O/'water-resistant-gypsum-cover-v1-square-qa.png'
assert not out.exists() and not qa.exists(), 'Do not overwrite'
im=Image.new('RGB',(1080,1920),'#FEFEFE')
product=Image.open(R/'gs-xi-water-resistant-gypsum-daesan-original.png').convert('RGB')
# Native product unchanged; proportional conventional resampling only. Right edge
# meets canvas edge because the source stack itself is cropped at that edge.
im.paste(product.resize((600,600),Image.Resampling.LANCZOS),(480,730))
panel=Image.new('RGBA',im.size)
d=ImageDraw.Draw(panel)
d.rounded_rectangle((53,341,770,694),36,fill=(246,245,244,235))
im=Image.alpha_composite(im.convert('RGBA'),panel)
d=ImageDraw.Draw(im)
font=lambda size,weight='Black': ImageFont.truetype(str(F/f'Pretendard-{weight}.ttf'),size)
primary='#31302E'; accent='#005BAB'
d.rectangle((90,279,97,308),fill=accent)
d.text((114,279),'건축자재 상식 · 방수석고',font=font(30,'SemiBold'),fill=primary,anchor='lt')
d.ellipse((710,370,722,382),fill=accent)
d.ellipse((728,370,740,382),fill='#E6E6E6')
d.text((92,450),'습기 많은 곳',font=font(60),fill=primary,anchor='lt')
# Same standard 60px / 92px line spacing; two colors only.
first='일반 석고 '
d.text((92,542),first,font=font(60),fill=primary,anchor='lt')
x=92+d.textlength(first,font=font(60))
d.text((x,542),'써도 될까?',font=font(60),fill=accent,anchor='lt')
assert x+d.textlength('써도 될까?',font=font(60))<755
d.rectangle((92,613,204,616),fill=accent)
# Same approved exterior-background mask as recent covers; original retained.
c=Image.open(canonical).convert('RGBA'); px=c.load(); w,h=c.size
seen=set(); q=deque()
def add(x,y):
    if not(0<=x<w and 0<=y<h) or (x,y) in seen:return
    seen.add((x,y)); r,g,b,a=px[x,y]
    if min(r,g,b)>170 and max(r,g,b)-min(r,g,b)<35:q.append((x,y))
for x in range(w):add(x,0);add(x,h-1)
for y in range(h):add(0,y);add(w-1,y)
while q:
    x,y=q.popleft();r,g,b,a=px[x,y];px[x,y]=(r,g,b,0)
    for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:add(x+dx,y+dy)
c=c.resize((320,529),Image.Resampling.LANCZOS)
im.alpha_composite(c,(0,1080))
logo=Image.open(P/'public/assets/logos/daesanlogo2.png').convert('RGBA')
logo.thumbnail((78,78),Image.Resampling.LANCZOS)
im.alpha_composite(logo,(660,1370))
d=ImageDraw.Draw(im)
d.text((750,1377),'DAESAN',font=font(46),fill='#123628',anchor='lt')
d.text((750,1431),'대산종합건축자재',font=font(26,'Medium'),fill='#123628',anchor='lt')
im.convert('RGB').save(out)
im.crop((0,420,1080,1500)).convert('RGB').save(qa)
print({'cover':str(out),'size':im.size,'background':'#FEFEFE','product_sample':'#7AB6E0','title_right':x+d.textlength('써도 될까?',font=font(60))})
