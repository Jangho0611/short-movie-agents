from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageChops
import json,hashlib
p=Path(__file__).resolve().parents[1];out=p/'public/assets/images'
names=['s02-01-exterior','s02-02-recess','s02-03-fixing','s03-01-support','s03-02-mismatch','s04-01-template','s04-02-review']
font=ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc',24)
sheet=Image.new('RGB',(1140,2100),'#E8E4DD');d=ImageDraw.Draw(sheet)
qa={'frames':[],'notes':['Still renders only. Visual and mechanical QA do not establish product compatibility or strength.']}
for i,name in enumerate(names):
 f=out/(name+'-v2.png');im=Image.open(f).convert('RGB');assert im.size==(1080,1920)
 x=15+(i%3)*380;y=15+(i//3)*700;d.text((x+5,y+2),name,font=font,fill='#191917')
 mobile=im.resize((360,640),Image.Resampling.LANCZOS);sheet.paste(mobile,(x,y+40))
 qa['frames'].append({'path':str(f.relative_to(p)),'size':im.size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
 if name=='s03-02-mismatch':mobile.save(out/'mobile-s03-mismatch-v2.png')
 if name=='s04-02-review':mobile.save(out/'mobile-s04-review-v2.png')
sheet.save(out/'contact-sheet-scene02-04-v2.jpg',quality=94)
# Identical support and frame coordinates; compare patches outside the newly added template lines.
a=Image.open(out/'s03-02-mismatch-v2.png').convert('RGB');b=Image.open(out/'s04-01-template-v2.png').convert('RGB')
patches={'door_edge':(745,550,769,1270),'support_left':(380,710,450,760),'lower_fixing':(495,1015,535,1045)}
qa['scene3_to_4_unchanged_patches']={k:ImageChops.difference(a.crop(box),b.crop(box)).getbbox() is None for k,box in patches.items()}
qa['video_files']=list(str(f.relative_to(p)) for f in (p/'public/assets/video').glob('*'))
qa['canonical_font_hashes_match']=all(hashlib.sha256((p/k).read_bytes()).hexdigest()==v for k,v in json.loads((p/'docs/slim-copy-manifest.json').read_text()).items())
(p/'docs/still-qa-v2.json').write_text(json.dumps(qa,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(qa,ensure_ascii=False,indent=2))
