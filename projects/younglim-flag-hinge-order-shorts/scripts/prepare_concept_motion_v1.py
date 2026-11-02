from PIL import Image,ImageDraw,ImageChops
from pathlib import Path
p=Path(__file__).resolve().parents[1]/'public/assets/images'
im=Image.open(p/'younglim-flag-hero-cutout-preview-v1.png').convert('RGBA')
for name,box in [('upper',(265,0,525,445)),('lower',(0,460,265,910)),('axis',(203,0,327,910))]:
 mask=Image.new('L',im.size);ImageDraw.Draw(mask).rectangle(box,fill=255)
 layer=im.copy();layer.putalpha(ImageChops.multiply(im.getchannel('A'),mask))
 with (p/f'hinge-concept-{name}-v1.png').open('xb') as f:layer.save(f,format='PNG')
