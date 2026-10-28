from pathlib import Path
from PIL import Image,ImageDraw,ImageChops
import json,hashlib
p=Path('.');c=p/'public/covers';q=c/'qa';old=Image.open(c/'door-finish-color-difference-cover-v2-A.png').convert('RGB');im=Image.open(c/'door-finish-color-difference-cover-v3.png').convert('RGB');diff=ImageChops.difference(old,im);bbox=diff.getbbox();d=ImageDraw.Draw(diff)
# New label text advance 88px, padding44px; conservative 136px bounding envelope.
for x in [20,562]:d.rectangle((x,978,x+136,1054),fill=0)
qa={'size':im.size,'difference_bbox':bbox,'difference_outside_label_regions':diff.getbbox(),'new_label':{'font_px':44,'weight':800,'line_height':52,'padding_x':22,'padding_y':12,'height':76,'text_advance_expected':88,'width_expected':132,'top':978,'left':[20,562]},'old_label':{'font_px':31,'weight':600,'padding_x':15,'padding_y':9,'top':978,'left':[20,562]}}
assert diff.getbbox() is None
sheet=Image.new('RGB',(1440,680),'#e5e3df');draw=ImageDraw.Draw(sheet)
for col,(name,box) in enumerate([('original',(0,0,1080,1920)),('3x4',(0,240,1080,1680)),('4x5',(0,285,1080,1635)),('square',(0,420,1080,1500))]):
 crop=im.crop(box)
 if name!='original':crop.save(q/f'cover-v3-{name}.png')
 mobile=crop.resize((360,crop.height//3),Image.Resampling.LANCZOS);sheet.paste(mobile,(col*360,30));draw.text((col*360+8,8),name,fill='black')
sheet.save(q/'cover-v3-crop-comparison.png')
side=Image.new('RGB',(720,640));side.paste(old.resize((360,640)),(0,0));side.paste(im.resize((360,640)),(360,0));side.save(q/'cover-v2-A-v3-mobile.png')
before=json.loads((p/'docs/cover-v3-preservation.json').read_text());qa['changed_old_files']=[n for n,v in before.items() if hashlib.sha256((p/n).read_bytes()).hexdigest()!=v];qa['preserved_count']=len(before)
assert not qa['changed_old_files']
with (p/'docs/cover-v3-qa.json').open('x') as f:json.dump(qa,f,indent=2)
print(qa)
