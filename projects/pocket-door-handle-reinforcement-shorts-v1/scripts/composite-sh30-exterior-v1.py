"""Non-generative official-photo cutout and fixed-coordinate A composition.
Usage: python3 scripts/composite-sh30-exterior-v1.py GENERATED_BACKGROUND
Never overwrites existing outputs. No API calls.
"""
import sys, json, hashlib
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'public/assets/images'
names = ['pocket-door-clean-background-v1.png', 'pocket-door-sh30-mask-v1.png', 'pocket-door-sh30-exterior-v1.png']
metadata = ROOT / 'scripts/pocket-door-sh30-exterior-v1-layout.json'
for path in [*(ASSETS/n for n in names), metadata]:
    if path.exists():
        raise FileExistsError(path)
source = ASSETS / 'domus-CIS_3455-v3.jpg'
photo = Image.open(source).convert('RGB')
# Manually traced outer silhouette in original 1200x696 photograph.
# Preserve original RGB; remove studio background and its cast shadow only.
outline = [(556,162),(655,162),(658,165),(666,551),(664,556),(550,557),(547,553),(552,166)]
sup = 4
alpha = Image.new('L',(photo.width*sup,photo.height*sup))
ImageDraw.Draw(alpha).polygon([(x*sup,y*sup) for x,y in outline],fill=255)
alpha = alpha.resize(photo.size,Image.Resampling.LANCZOS)
cut = photo.convert('RGBA'); cut.putalpha(alpha)
crop = (546,161,668,559)
cut = cut.crop(crop)
cut.save(ASSETS/names[1])
background = Image.open(sys.argv[1]).convert('RGB')
background.save(ASSETS/names[0])
canvas_size = (540,960)
canvas = ImageOps.fit(background,canvas_size,method=Image.Resampling.LANCZOS,centering=(.5,.5)).convert('RGBA')
# Single uniform affine scale; fractional width preserved by affine resampling.
scale = 440/cut.height
w = round(cut.width*scale)
product = cut.transform((w,440),Image.Transform.AFFINE,(1/scale,0,0,0,1/scale,0),Image.Resampling.BICUBIC)
xy = (round(270-w/2),260)
silhouette = Image.new('L',canvas_size)
silhouette.paste(product.getchannel('A'),xy)
for blur,offset,opacity in [(2.0,(1,1),.18),(.6,(0,0),.16)]:
    shifted = Image.new('L',canvas_size)
    shifted.paste(silhouette,offset)
    a=shifted.filter(ImageFilter.GaussianBlur(blur)).point(lambda p:round(p*opacity))
    shadow=Image.new('RGBA',canvas_size,(45,42,38,0));shadow.putalpha(a)
    canvas=Image.alpha_composite(canvas,shadow)
canvas.alpha_composite(product,xy)
canvas.convert('RGB').save(ASSETS/names[2])
fit_scale=max(540/background.width,960/background.height)
record={'source':str(source),'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'background':str(ASSETS/names[0]),'background_native_size':background.size,'background_fit':'center cover','background_scale':fit_scale,'background_crop_center':[.5,.5],'mask':str(ASSETS/names[1]),'mask_source_crop':crop,'mask_outline':outline,'center':[270,480],'display_size':[w,440],'uniform_product_scale':scale,'product_top_left':xy,'layers':['background','contact shadows','official product'],'shadows':[{'blur':2,'offset':[1,1],'opacity':.18},{'blur':.6,'offset':[0,0],'opacity':.16}],'technical_note':'Educational composite, not verified installation. No hole or rear hardware depicted.'}
metadata.write_text(json.dumps(record,ensure_ascii=False,indent=2))
print(json.dumps(record,ensure_ascii=False,indent=2))
