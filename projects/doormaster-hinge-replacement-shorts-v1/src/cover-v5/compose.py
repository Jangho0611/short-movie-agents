"""Reframe only the photographic plate; keep the original door and jamb pixels."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

ROOT = Path(__file__).resolve().parents[2]
ART = ROOT/'public/assets/images'
OUT = ROOT/'public/covers'
QA = OUT/'qa'
BASE = 'doormaster-hinge-replacement-cover-v4'
NAME = 'doormaster-hinge-replacement-cover-v5'
HERO = 'doormaster-hinge-cover-visual-v5'

def save(image, path):
    with path.open('xb') as stream:
        image.save(stream, format='PNG')

def build_hero():
    base = Image.open(ART/'doormaster-hinge-cover-visual-v4.png').convert('RGBA')
    source = Image.open(ART/'doormaster-hinge-cover-visual-v2.png').convert('RGB')
    # Sample a clean parallelogram of boards below the door, following the grain.
    source_pixels = np.asarray(source, dtype=float)
    source_light = np.asarray(source.filter(ImageFilter.GaussianBlur(9)), dtype=float)
    grain = source_pixels-source_light
    y,x = np.mgrid[:150,:360]
    u = (x*1.68-y*.29) % 696
    u = np.where(u<348,u,696-u)
    phase = (y*1.66-.27*x) % 104
    depth = np.where(phase<52,phase,104-phase)
    sx = (1173+u).astype(int)
    sy = (780+.15*u+depth).astype(int)
    # Let the contact shadow dissipate towards the camera. Match the seam exactly.
    edge = np.asarray(base.convert('RGB'),dtype=float)[539,720:]
    ambient = np.median(source_pixels[869:886,1180:1440],axis=(0,1))
    fade = np.exp(-y[:,:,None]/76)
    smooth_edge = np.asarray(base.convert("RGB").crop((720,539,1080,540)).filter(ImageFilter.GaussianBlur(10)),dtype=float)[0]
    floor = smooth_edge[None,:,:]*fade + ambient*(1-fade)
    floor += (edge-smooth_edge)[None,:,:]*np.exp(-y[:,:,None]/3)
    floor += grain[sy,sx]*(1-np.exp(-y[:,:,None]/7))
    base.paste(Image.fromarray(np.uint8(np.clip(floor,0,255))),(720,540))
    return base.convert('RGB')

def build_cover():
    original = Image.open(OUT/(BASE+'.png')).convert('RGB')
    cover=original.copy()
    hero=Image.open(ART/(HERO+'.png')).convert('RGB')
    cover.paste(hero,(0,994))
    logo=Image.open(ROOT/'public/assets/logos/daesanlogo2.png').convert('RGBA')
    logo=logo.crop(logo.getbbox())
    logo=logo.resize((65,round(65*logo.height/logo.width)),Image.Resampling.LANCZOS)
    cover.paste(logo,(754,1561),logo)
    draw=ImageDraw.Draw(cover)
    face=str(ROOT/'public/fonts/Pretendard-Black.ttf')
    draw.text((835,1554),'DAESAN',font=ImageFont.truetype(face,38),fill='#123628',anchor='lt')
    draw.text((836,1598),'대산종합건축자재',font=ImageFont.truetype(face,23),fill='#123628',anchor='lt')
    save(cover,OUT/(NAME+'.png'))
    grid=cover.crop((0,240,1080,1680))
    feed=cover.crop((0,285,1080,1635))
    save(grid,QA/(NAME+'-3x4.png'))
    save(feed,QA/(NAME+'-4x5.png'))
    for suffix,items in [('comparison',[(cover,'9:16 원본'),(grid,'3:4 프로필'),(feed,'4:5 피드')]),
                         ('v4-v5',[(original,'Cover v4'),(cover,'Cover v5')])]:
        board=Image.new('RGB',(380*len(items)+20,720),'#e5e2db')
        d=ImageDraw.Draw(board)
        font=ImageFont.truetype(str(ROOT/'public/fonts/Pretendard-Black.ttf'),24)
        for i,(item,label) in enumerate(items):
            x=20+380*i
            d.text((x,12),label,font=font,fill='#242522')
            h=round(item.height/3)
            board.paste(item.resize((360,h),Image.Resampling.LANCZOS),(x,55+(640-h)//2))
        save(board,QA/(NAME+'-'+suffix+'.png'))

if __name__=='__main__':
    save(build_hero(),ART/(HERO+'.png'))
    build_cover()
