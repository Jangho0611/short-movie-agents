from pathlib import Path
from PIL import Image,ImageDraw,ImageChops
import json,hashlib
p=Path('.');c=p/'public/covers';q=c/'qa';orig=Image.open(c/'door-finish-color-difference-cover-v1.png').convert('RGB');sheet=Image.new('RGB',(1440,1360),'#e5e3df');draw=ImageDraw.Draw(sheet);qa={}
for row,v in enumerate(['A','C']):
 im=Image.open(c/f'door-finish-color-difference-cover-v2-{v}.png').convert('RGB');assert im.size==(1080,1920)
 qa[v]={'outside_image_identical_v1':all(ImageChops.difference(im.crop(box),orig.crop(box)).getbbox() is None for box in [(0,0,1080,960),(0,1500,1080,1920)])}
 for col,(n,box) in enumerate([('original',(0,0,1080,1920)),('3x4',(0,240,1080,1680)),('4x5',(0,285,1080,1635)),('square',(0,420,1080,1500))]):
  crop=im.crop(box)
  if n!='original':crop.save(q/f'cover-v2-{v}-{n}.png')
  mobile=crop.resize((360,crop.height//3),Image.Resampling.LANCZOS);sheet.paste(mobile,(col*360,row*680+30));draw.text((col*360+8,row*680+8),v+' / '+n,fill='black')
sheet.save(q/'cover-v2-AB-crop-comparison.png')
side=Image.new('RGB',(720,640));side.paste(Image.open(c/'door-finish-color-difference-cover-v2-A.png').resize((360,640)),(0,0));side.paste(Image.open(c/'door-finish-color-difference-cover-v2-C.png').resize((360,640)),(360,0));side.save(q/'cover-v2-A-C-mobile.png')
h=lambda f:hashlib.sha256(f.read_bytes()).hexdigest();before=json.loads((p/'docs/cover-v2-preservation.json').read_text());qa['changed_old_files']=[n for n,v in before.items() if h(p/n)!=v];qa['preserved_count']=len(before)
assert not qa['changed_old_files']
with (p/'docs/cover-v2-qa.json').open('x') as f:json.dump(qa,f,indent=2)
print(qa)
