from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageOps
from pathlib import Path
import json

p = Path(__file__).resolve().parents[1] / 'public/assets/images'
base = Image.open(p/'scene01-white-door-hook-v3.png').convert('RGB')
raw = Image.open(p/'scene01-white-door-hook-v4-source.png').convert('RGB')
edited = ImageOps.fit(raw, base.size, method=Image.Resampling.LANCZOS)
mask = Image.new('L', base.size, 0)
d = ImageDraw.Draw(mask)
d.polygon([(0,1725),(110,1624),(220,1640),(220,1710),(110,1699),(0,1810)], fill=255)
d.polygon([(876,1731),(1079,1762),(1079,1843),(876,1810)], fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(5))
# Protect the complete door and casing, including lower endpoints.
ImageDraw.Draw(mask).rectangle((221,0,875,1919), fill=0)
result = Image.composite(edited, base, mask)
for name, im in [('scene01-white-door-hook-v4.png',result), ('scene01-white-door-hook-v4-edit-mask.png',mask)]:
    with (p/name).open('xb') as f: im.save(f,format='PNG')
diff = ImageChops.difference(base,result)
outside = mask.point(lambda v: 255 if v == 0 else 0)
outside_diff = Image.composite(diff,Image.new('RGB',base.size),outside)
changed = sum(any(c for c in rgb) for rgb in diff.getdata())
report = {'size':list(result.size),'generation_calls':1,'tool':'image_gen.imagegen','model':'not exposed','outside_mask_identical':outside_diff.getbbox() is None,'outside_mask_max_channel_difference':max(v[1] for v in outside_diff.getextrema()),'changed_pixels':changed,'mask_nonzero_pixels':sum(v>0 for v in mask.getdata()),'door_and_casing_protected_x_range':[221,875],'method':'One AI edit; proportional resize then composite only lower-wall mask onto original v3. Outside mask copied exactly.','status':'pending visual/user approval'}
with (Path(__file__).parent/'scene01-white-door-hook-v4-qa.json').open('x') as f: json.dump(report,f,indent=2)
comparison=Image.new('RGB',(1080,960),'white')
comparison.paste(base.resize((540,960),Image.Resampling.LANCZOS),(0,0))
comparison.paste(result.resize((540,960),Image.Resampling.LANCZOS),(540,0))
with (p/'scene01-white-door-hook-v3-v4-qa.png').open('xb') as f: comparison.save(f,format='PNG')
print(json.dumps(report))
