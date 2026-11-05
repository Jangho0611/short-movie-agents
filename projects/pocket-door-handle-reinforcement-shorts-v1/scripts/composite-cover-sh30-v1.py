from pathlib import Path
from PIL import Image,ImageDraw,ImageFilter
import numpy as np
p=Path(__file__).resolve().parents[1]
out=p/'public/assets/images/pocket-door-cover-sh30-composite-v1.png'
assert not out.exists()
bg=Image.open(p/'public/assets/images/pocket-door-cover-photoreal-v1.png').convert('RGB')
# Clone adjacent clean door surface; feather only outside the old handle/shadow.
box=(520,825,686,1396); donor=bg.crop((340,825,506,1396))
a=np.asarray(bg,dtype=float); d=np.asarray(donor,dtype=float)
# Match the local illumination gradient using clean strips above/below the target.
for j,y in enumerate(range(825,1396)):
 t=(y-825)/571
 delta=(1-t)*(a[805:820,520:686].mean((0,1))-a[805:820,340:506].mean((0,1)))+t*(a[1400:1415,520:686].mean((0,1))-a[1400:1415,340:506].mean((0,1)))
 d[j]+=delta
patch=Image.fromarray(np.clip(d,0,255).astype('uint8'))
m=Image.new('L',bg.size);ImageDraw.Draw(m).rectangle(box,fill=255);m=m.filter(ImageFilter.GaussianBlur(5))
layer=bg.copy();layer.paste(patch,(520,825));bg=Image.composite(layer,bg,m).convert('RGBA')
cut=Image.open(p/'public/assets/images/pocket-door-sh30-mask-v1.png').convert('RGBA')
scale=530/398; w=round(122*scale)
prod=cut.transform((w,530),Image.Transform.AFFINE,(1/scale,0,0,0,1/scale,0),Image.Resampling.BICUBIC)
xy=(round(599-w/2),842)
a=Image.new('L',bg.size);a.paste(prod.getchannel('A'),(xy[0]+1,xy[1]+2));a=a.filter(ImageFilter.GaussianBlur(1.2)).point(lambda v:round(v*.22))
s=Image.new('RGBA',bg.size,(35,30,24,0));s.putalpha(a);bg=Image.alpha_composite(bg,s);bg.alpha_composite(prod,xy);bg.convert('RGB').save(out)
print(out)
