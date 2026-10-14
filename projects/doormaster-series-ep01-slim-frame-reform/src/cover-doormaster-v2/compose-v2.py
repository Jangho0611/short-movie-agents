from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
s=Path(__file__).parent
(s/"qa").mkdir(exist_ok=True)
im=Image.open(s/'assets/generated-base.png').convert('RGB').resize((1080,1920),Image.Resampling.LANCZOS)
d=ImageDraw.Draw(im);green='#123628'
logo=Image.open(s/'assets/logo.png').convert('RGBA');logo.thumbnail((48,48),Image.Resampling.LANCZOS);im.paste(logo,(486,1784),logo)
d.text((548,1780),'DAESAN',font=ImageFont.truetype(str(s/'assets/Pretendard-Black.ttf'),25),fill=green,anchor='lt')
d.text((548,1811),'대산종합건축자재',font=ImageFont.truetype(str(s/'assets/Pretendard-Medium.woff2'),14),fill=green,anchor='lt')
im.save(s/'doormaster-slim-frame-cover-v2.png')
im.crop((0,420,1080,1500)).save(s/'qa/cover-v2-central-square.png')
im.resize((360,640),Image.Resampling.LANCZOS).save(s/'qa/cover-v2-mobile.png')
a=Image.open(s/'assets/reference.png').convert('RGB').resize((540,960),Image.Resampling.LANCZOS)
comparison=Image.new('RGB',(1080,1000),'#F7F5F0');comparison.paste(a,(0,40));comparison.paste(im.resize((540,960)),(540,40));dd=ImageDraw.Draw(comparison);dd.text((20,10),'REFERENCE',fill='black');dd.text((560,10),'COVER V2',fill='black');comparison.save(s/'qa/reference-vs-cover-v2.png')
