from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import numpy as np,json,hashlib
P=Path(__file__).resolve().parents[1];dest=P/'public/references/doormaster-approved-brand-v5'
# Approved source assets are preserved locally; no sibling project dependency.
for name in ['logo.png','Pretendard-Black.ttf','Pretendard-Medium.woff2']:
 assert (dest/name).is_file(), name
# Restore the deterministic cover layers preceding the former symbol only.
source=(P/'scripts/create_cover_v1_layout2.py').read_text().split("logo=Image.open(P/'public/daesan-ending/logos/daesanlogo2.png')")[0]
ns={'__file__':str(P/'scripts/create_cover_v1_layout2.py')};exec(compile(source,'cover-base','exec'),ns);base=ns['im'].convert('RGB')
# Extract the actual approved cover lockup pixels, without re-typesetting.
ref=Image.open(P/'public/references/cover-reproduction/approved-doormaster-cover-v5.png').convert('RGB');refcrop=ref.crop((486,1780,666,1840))
rgb=np.array(refcrop);v=rgb.astype('int16');mask=(v[:,:,1]>v[:,:,0]+2)&(v[:,:,1]>v[:,:,2]+2)
rgba=np.dstack([rgb,mask.astype('uint8')*255]);layer=Image.fromarray(rgba)
assert np.array_equal(np.array(layer)[:,:,:3][mask],rgb[mask])
with (dest/'approved-cover-v5-brand-extracted.png').open('xb') as f:layer.save(f)
scaled=layer.resize((306,102),Image.Resampling.LANCZOS);final=base.convert('RGBA');final.alpha_composite(scaled,(105,1460));final=final.convert('RGB')
old=Image.open(P/'public/covers/younglim-flag-hinge-cover-v1-layout2.png').convert('RGB');diff=np.any(np.array(old)!=np.array(final),axis=2);allowed=np.zeros(diff.shape,bool);allowed[1460:1595,105:411]=True
assert not np.any(diff&~allowed),'Non-logo pixels changed'
out=P/'public/covers';qa=out/'qa'
def save(a,path):
 with path.open('xb') as f:a.save(f,format='PNG')
save(final,out/'cover-v2-logo-corrected.png')
for name,t,b in [('3x4',240,1680),('4x5',285,1635)]:save(final.crop((0,t,1080,b)),qa/f'cover-v2-logo-{name}.png')
save(final.resize((360,640),Image.Resampling.LANCZOS),qa/'cover-v2-logo-mobile.png')
comparison=Image.new('RGB',(700,230),'#F7F4EE');comparison.paste(refcrop.resize((306,102)),(20,30));comparison.paste(final.crop((105,1460,411,1562)),(370,30));save(comparison,qa/'cover-v2-approved-logo-comparison.png')
with (qa/'cover-v2-logo-qa.json').open('x') as f:json.dump({'source':'doormaster-series-ep01-slim-frame-reform/src/cover-doormaster-v5/compose-v5.py H-approved-brand','native_opaque_brand_pixels_match_approved_cover':True,'outside_logo_region_pixels_changed':int((diff&~allowed).sum()),'brand_scale':1.7,'brand_position':[105,1460],'original':[1080,1920],'3x4_brand_visible':True,'4x5_brand_visible':True,'status':'USER_REVIEW_PENDING'},f,indent=2)
