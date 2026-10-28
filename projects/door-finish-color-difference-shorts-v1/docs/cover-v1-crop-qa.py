from PIL import Image,ImageDraw
from pathlib import Path
p=Path('public/covers');im=Image.open(p/'door-finish-color-difference-cover-v1.png');q=p/'qa';q.mkdir(exist_ok=True)
variants=[('original',im),('grid-3x4',im.crop((0,240,1080,1680))),('feed-4x5',im.crop((0,285,1080,1635))),('square-1x1',im.crop((0,420,1080,1500)))]
sheet=Image.new('RGB',(1440,680),'#e5e3df');draw=ImageDraw.Draw(sheet)
for i,(name,img) in enumerate(variants):
 if name!='original':img.save(q/f'cover-v1-{name}.png')
 small=img.resize((360,round(img.height/3)),Image.Resampling.LANCZOS);small.save(q/f'cover-v1-{name}-mobile.png');sheet.paste(small,(i*360,30));draw.text((i*360+8,8),name,fill='black')
sheet.save(q/'cover-v1-comparison.png')
