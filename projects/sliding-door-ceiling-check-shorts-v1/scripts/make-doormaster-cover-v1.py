"""DoorMaster cover v1. Rebuild the independent raster layers with Pillow."""
from pathlib import Path
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

project = Path(__file__).resolve().parents[1]
images = project / 'public/assets/images'
guide = project.parents[1] / 'docs/design-styles/door-master'
sign_assets = guide / 'assets/series-sign-v2'
prefix = 'doormaster-sliding-ceiling-cover-v1'
cream = (246,243,236)
ink = '#20211F'
resample = Image.Resampling.LANCZOS

def font(size):
    return ImageFont.truetype(str(sign_assets / 'fonts/Pretendard-Black.ttf'), size)

def product_layer():
    base = Image.new('RGB',(1080,1920),cream)
    photo = Image.open(images/'scene01-before-ai-v3-candidate.png').convert('RGB')
    width = 1130
    photo = photo.resize((width,round(photo.height*width/photo.width)),resample)
    mask = Image.new('L',photo.size,255)
    draw = ImageDraw.Draw(mask)
    for y in range(530):
        t = y/530
        draw.line((0,y,width,y),fill=round(255*t*t*(3-2*t)))
    base.paste(photo,(-25,390),mask)
    return base

def sign_layer(base):
    sign = Image.open(sign_assets/'doormaster-series-sign-v2.png').convert('RGBA')
    sign = sign.crop(sign.getbbox())
    sign.thumbnail((628,285),resample)
    pos = (154,298)
    shadow = Image.new('L',base.size)
    shadow.paste(sign.getchannel('A'),(pos[0]+5,pos[1]+10))
    base.paste('#51493F',(0,0,*base.size),shadow.filter(ImageFilter.GaussianBlur(10)).point(lambda a: a//4))
    base.paste(sign,pos,sign)

def headline_layer(base):
    draw = ImageDraw.Draw(base)
    draw.text((131,586),'댐퍼 교체하려다',font=font(108),fill=ink,anchor='lt')
    rng = random.Random(14)
    for y in range(100):
        left = 49 + rng.randrange(0,18) + int((100-y)*.10)
        right = 499 + rng.randrange(0,21)
        draw.line((left,731+y,right,720+y),fill='#FFCF51',width=2)
    draw.text((70,719),'천장까지',font=font(125),fill=ink,anchor='lt')
    draw.text((535,739),'뜯었다고?',font=font(103),fill=ink,anchor='lt')

def subtitle_layer(base):
    ImageDraw.Draw(base).text((550,916),'슬라이딩 도어, 마감 전 꼭 확인할 것',font=font(43),fill=ink,anchor='mt')

def brand_layer(base):
    logo = Image.open(project/'public/assets/logos/daesanlogo2.png').convert('RGBA')
    logo = logo.crop(logo.getbbox())
    logo.thumbnail((65,62),resample)
    base.paste(logo,(77,1736),logo)
    draw = ImageDraw.Draw(base)
    draw.text((156,1735),'DAESAN',font=font(35),anchor='lt',fill='#123628')
    draw.text((157,1773),'대산종합건축자재',font=font(22),anchor='lt',fill='#123628')
    draw.text((1010,1575),'구조 예시',font=font(28),anchor='rt',fill=ink)

def save(image,suffix):
    with (images/(prefix+suffix+'.png')).open('xb') as file:
        image.save(file,format='PNG')

if __name__ == '__main__':
    cover = product_layer()
    for layer in (sign_layer,headline_layer,subtitle_layer,brand_layer):
        layer(cover)
    save(cover,'')
    save(cover.crop((0,240,1080,1680)),'-3x4-qa')
    save(cover.crop((0,285,1080,1635)),'-4x5-qa')
    sheet = Image.new('RGB',(1160,1080),cream)
    reference = Image.open(guide/'references/door-master-cover-reference-v1.png')
    for x,pic,label in [(28,reference,'최초 DoorMaster 레퍼런스'),(592,cover,'슬라이딩 도어 천장 마감 편 · v1')]:
        pic = pic.copy()
        pic.thumbnail((540,960),resample)
        sheet.paste(pic,(x,85))
        ImageDraw.Draw(sheet).text((x,30),label,font=font(26),fill=ink,anchor='lt')
    save(sheet,'-reference-qa')
