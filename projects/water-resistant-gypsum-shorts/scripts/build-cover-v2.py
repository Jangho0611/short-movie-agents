from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
from collections import deque
P=Path(__file__).resolve().parent.parent
R=P/'public/assets/references'; F=P/'public/assets/fonts'; O=P/'public/covers'
out=O/'water-resistant-gypsum-cover-v2.png'; qa=O/'water-resistant-gypsum-cover-v2-square-qa.png'
assert not out.exists() and not qa.exists()
im=Image.new('RGBA',(1080,1920),'#FEFEFE')
product=Image.open(R/'gs-xi-water-resistant-gypsum-daesan-original.png').convert('RGBA')
im.alpha_composite(product.resize((900,900),Image.Resampling.LANCZOS),(180,590))
panel=Image.new('RGBA',im.size); d=ImageDraw.Draw(panel)
d.rounded_rectangle((53,341,770,694),36,fill=(168,195,222,235))
im=Image.alpha_composite(im,panel); d=ImageDraw.Draw(im)
font=lambda size,weight='Black':ImageFont.truetype(str(F/f'Pretendard-{weight}.ttf'),size)
primary='#0D253D'; accent='#003770'
d.rectangle((90,279,97,308),fill=accent)
d.text((114,279),'건축자재 상식 · 방수석고',font=font(30,'SemiBold'),fill=primary,anchor='lt')
d.ellipse((710,370,722,382),fill=accent);d.ellipse((728,370,740,382),fill='#E3E8EE')
d.text((92,450),'습기 많은 곳',font=font(60),fill=primary,anchor='lt')
d.text((92,542),'일반 석고 ',font=font(60),fill=primary,anchor='lt')
tx=92+d.textlength('일반 석고 ',font=font(60))
d.text((tx,542),'써도 될까?',font=font(60),fill=accent,anchor='lt')
d.rectangle((tx,613,tx+130,616),fill=accent)
c=Image.open(R/'small-daesan-canonical-v1.png').convert('RGBA'); px=c.load();w,h=c.size
seen=set();q=deque()
def add(x,y):
    if not(0<=x<w and 0<=y<h) or (x,y) in seen:return
    seen.add((x,y));r,g,b,a=px[x,y]
    if min(r,g,b)>170 and max(r,g,b)-min(r,g,b)<35:q.append((x,y))
for x in range(w):add(x,0);add(x,h-1)
for y in range(h):add(0,y);add(w-1,y)
while q:
    x,y=q.popleft();r,g,b,a=px[x,y];px[x,y]=(r,g,b,0)
    for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:add(x+dx,y+dy)
c=c.resize((320,529),Image.Resampling.LANCZOS)
im.alpha_composite(c,(20,1020))
logo=Image.open(P/'public/assets/logos/daesanlogo2.png').convert('RGBA');logo.thumbnail((78,78),Image.Resampling.LANCZOS)
im.alpha_composite(logo,(660,1400));d=ImageDraw.Draw(im)
d.text((750,1407),'DAESAN',font=font(46),fill='#123628',anchor='lt')
d.text((750,1461),'대산종합건축자재',font=font(26,'Medium'),fill='#123628',anchor='lt')
im.convert('RGB').save(out); im.crop((0,420,1080,1500)).convert('RGB').save(qa)
print('Saved',out,im.size,'product 900px/1.8x; original unchanged')
