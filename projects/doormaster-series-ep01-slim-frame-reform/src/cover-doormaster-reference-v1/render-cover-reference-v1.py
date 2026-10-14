from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json
s=Path(__file__).parent
(s/"qa").mkdir(exist_ok=True)
bg='#F7F5F0';ink='#151715';yellow='#FFE600';green='#123628'
im=Image.new('RGB',(1080,1920),bg);d=ImageDraw.Draw(im)
def font(size,weight='Black'):return ImageFont.truetype(str(s/'assets'/('Pretendard-'+weight+('.ttf' if weight=='Black' else '.woff2'))),size)
def text(v,x,y,size,weight='Black',fill=ink):
 f=font(size,weight);d.text((x,y),v,font=f,fill=fill,anchor='lt');return d.textbbox((x,y),v,font=f,anchor='lt')
# Series plaque and simple door icon follow reference layout; exact copy is set as text.
d.polygon([(150,390),(150,244),(670,244),(726,199),(793,244),(930,244),(930,390)],fill=ink)
text('문도사의',185,264,44,'Black',yellow)
text('그것이 알고싶도어',185,323,59,'Black','#FFFFFF')
d.line([(724,273),(724,221),(771,239),(771,279)],fill='#FFFFFF',width=5)
d.line([(734,233),(759,243),(759,278)],fill='#C3A583',width=4)
d.ellipse((748,258,753,263),fill=yellow)
text('기존 문틀,',72,468,130)
f=font(74);key='슬림하게';kw=d.textlength(key,font=f)
d.rounded_rectangle((66,637,79+kw,730),radius=3,fill=yellow)
text(key,72,643,74)
text('바꿀 수 있을까?',int(kw+92),643,74)
text('일반 발포문틀 → 9mm 슬림 문선 리폼',74,812,35,'Medium')
text('기존 넓은 문선',72,934,34,'SemiBold')
text('슬림 문선 리폼 후',562,934,34,'SemiBold')
photo=Image.open(s/'assets/comparison.png')
# Equal source rectangles and isotropic scale; only external corner detail is shown.
for crop,x in [((0,1225,536,1737),72),((544,1225,1080,1737),562)]:
 cut=photo.crop(crop);cut.thumbnail((446,426),Image.Resampling.LANCZOS);im.paste(cut,(x,992))
# Brand lockup, entirely within central crop.
logo=Image.open(s/'assets/logo.png').convert('RGBA');logo.thumbnail((64,64),Image.Resampling.LANCZOS)
im.paste(logo,(72,1430),logo)
text('DAESAN',148,1426,36,fill=green)
text('대산종합건축자재',148,1465,23,'Medium',green)
# No new claims, measurements, construction diagrams, slogan or mascot.
im.save(s/'doormaster-slim-frame-cover-reference-v1.png')
im.crop((0,420,1080,1500)).save(s/'qa/central-square-reference-v1.png')
im.resize((360,640),Image.Resampling.LANCZOS).save(s/'qa/mobile-reference-v1.png')
json.dump({'canvas':[1080,1920],'background':bg,'title':ink,'accent':yellow,'brand':green,'status':'v1 review choices, not official series tokens','source':'scene01-comparison-v4.png','crop_boxes':[[0,1225,536,1737],[544,1225,1080,1737]],'copy':['문도사의 그것이 알고싶도어','기존 문틀,','슬림하게 바꿀 수 있을까?','일반 발포문틀 → 9mm 슬림 문선 리폼']},open(s/'design-values-v1.json','w'),ensure_ascii=False,indent=2)
