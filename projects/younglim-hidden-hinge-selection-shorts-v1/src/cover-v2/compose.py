from pathlib import Path
from random import Random
from PIL import Image, ImageDraw, ImageFont

project = Path(__file__).resolve().parents[2]
assets = project/'public/assets'
cover_dir = project/'public/covers'
prefix = 'hidden-hinge-doormaster-cover-v2'
series = project/'src/cover-v1/series-sign-v2'
sample = Image.Resampling.LANCZOS

def face(size):
    return ImageFont.truetype(str(series/'fonts/Pretendard-Black.ttf'),size)

def save(pic,path):
    with path.open('xb') as stream:
        pic.save(stream,'PNG')

def place(pic,path,width,xy):
    item=Image.open(path).convert('RGBA')
    item=item.crop(item.getbbox())
    item=item.resize((width,round(width*item.height/item.width)),sample)
    pic.paste(item,xy,item)

def compose():
    paper=Image.open(assets/'images/doormaster-clean-background-v1.png').convert('RGB')
    pic=paper.crop((0,0,1080,590)).resize((1080,1920),sample)
    photo=Image.open(assets/'images/hidden-hinge-hero-v2.png').convert('RGB').resize((1160,1160),sample)
    tint=Image.new('L',photo.size,255)
    gradient=ImageDraw.Draw(tint)
    for y in range(238):
        t=y/238
        gradient.line((0,y,1159,y),fill=round(255*t*t*(3-2*t)))
    pic.paste(photo,(-40,731),tint)
    # Carry the unobstructed door surfaces to the bottom bleed below the hardware.
    lower=photo.crop((40,1000,1120,1160)).resize((1080,189),sample)
    pic.paste(lower,(0,1731))
    place(pic,series/'doormaster-series-sign-v2.png',547,(247,309))
    d=ImageDraw.Draw(pic)
    d.text((155,548),'히든경첩 4종',font=face(144),anchor='lt',fill='#1a1918',stroke_width=1)
    rng=Random(742)
    for y in range(130):
        left=70+rng.randrange(16)+int((130-y)*.05)
        right=388+rng.randrange(20)
        d.line((left,719+y,right,704+y),fill='#ffcf4c',width=2)
    d.text((82,703),'뭐가',font=face(167),fill='#181716',anchor='lt')
    d.text((428,719),'다를까?',font=face(143),fill='#181716',anchor='lt')
    d.text((540,889),'하중 · 개방각 · 문틀 가공',font=face(46),fill='#37342f',anchor='mt')
    place(pic,assets/'logos/daesanlogo2.png',61,(779,1532))
    d.text((855,1530),'DAESAN',font=face(33),anchor='lt',fill='#123628')
    d.text((855,1570),'대산종합건축자재',font=face(20),anchor='lt',fill='#123628')
    return pic

def board(items):
    out=Image.new('RGB',(380*len(items)+20,720),'#eae7df')
    for i,(im,label) in enumerate(items):
        x=20+380*i
        thumb=im.copy()
        thumb.thumbnail((360,640),sample)
        ImageDraw.Draw(out).text((x,14),label,font=face(23),fill='#262320')
        out.paste(thumb,(x,56+(640-thumb.height)//2))
    return out

if __name__=='__main__':
    cover=compose()
    grid=cover.crop((0,240,1080,1680))
    feed=cover.crop((0,285,1080,1635))
    ref=Image.open(project/'public/references/door-master-cover-reference-v1.png')
    save(cover,cover_dir/(prefix+'.png'))
    for suffix,pic in [('3x4',grid),('4x5',feed),('instagram',board([(cover,'9:16 원본'),(grid,'3:4 프로필'),(feed,'4:5 피드')])),('reference',board([(ref,'최초 문도사 레퍼런스'),(cover,'히든경첩 4종 · v2')]))]:
        save(pic,cover_dir/'qa'/(prefix+'-'+suffix+'.png'))
