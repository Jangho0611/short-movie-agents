from pathlib import Path
from PIL import Image
import hashlib,json
p=Path(__file__).resolve().parents[1]; im=p/'public/assets/images'
a=Image.open(im/'official-four-types.png')
for i,x in enumerate([127,702,1277,1852]): a.crop((x,325,x+507,990)).save(im/f'type-{i+1}.png')
Image.open(im/'official-double-section.png').crop((45,459,920,970)).save(im/'double-section-detail.png')
source=p.parents[1]/'assets/daesan-ending'
checks=[]
for f in (p/'public/daesan-ending').rglob('*'):
 if f.is_file():
  r=f.relative_to(p/'public/daesan-ending');s=source/r
  checks.append({'file':str(r),'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'match':s.exists() and s.read_bytes()==f.read_bytes()})
(p/'docs/ending-copy-qa.json').write_text(json.dumps(checks,indent=2))
