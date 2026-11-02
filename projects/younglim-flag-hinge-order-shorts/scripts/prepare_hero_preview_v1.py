from PIL import Image,ImageDraw,ImageFilter
from pathlib import Path
p=Path(__file__).resolve().parents[1]/'public/assets/images'
im=Image.open(p/'younglim-official-flag-search-original-20261030.jpg').convert('RGBA').crop((880,280,1405,1190))
s=4
mask=Image.new('L',(525*s,910*s)); d=ImageDraw.Draw(mask)
def rr(box,r):d.rounded_rectangle(tuple(int(x*s) for x in box),radius=r*s,fill=255)
rr((206,20,325,886),7)
rr((316,63,503,445),14)
rr((25,460,215,841),14)
# Retain the original narrow central joint, without retaining its cast shadow.
rr((203,444,326,460),3)
mask=mask.resize(im.size,Image.Resampling.LANCZOS)
im.putalpha(mask)
with (p/'younglim-flag-hero-cutout-preview-v1.png').open('xb') as f: im.save(f,format='PNG')
qa=Image.new('RGB',(1050,910),'#f7f4ee')
qa.paste(im,(0,0),im)
bg=Image.new('RGB',(525,910),'#252525');bg.paste(im,(0,0),im);qa.paste(bg,(525,0))
with (p/'younglim-flag-cutout-edge-qa-v1.png').open('xb') as f:qa.save(f,format='PNG')
