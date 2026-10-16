from pathlib import Path
from PIL import Image,ImageDraw,ImageFilter,ImageEnhance,ImageChops
import numpy as np,json,hashlib
P=Path(__file__).resolve().parents[1];A=P/'public/assets/images'
src=A/'scene02-photoreal-candidate-v1.png';im=Image.open(src).convert('RGB');beforehash=hashlib.sha256(src.read_bytes()).hexdigest();w,h=im.size
# One uniform similarity transform. Anchor lies on original bottom contact edge.
s=(1.0+1.13)/2;ax,ay=810,1258.8
poly=[(627,310),(638,304),(901,336),(955,1228),(675,1290),(664,1286)]
mask=Image.new('L',im.size);ImageDraw.Draw(mask).polygon(poly,fill=255)
coeff=(1/s,0,ax*(1-1/s),0,1/s,ay*(1-1/s))
transformed=im.transform(im.size,Image.Transform.AFFINE,coeff,Image.Resampling.BICUBIC)
newmask=mask.transform(im.size,Image.Transform.AFFINE,coeff,Image.Resampling.BICUBIC)
# Minimal tone correction only on leaf; pattern remains source pixels.
leaf=ImageEnhance.Color(transformed).enhance(.9);leaf=ImageEnhance.Brightness(leaf).enhance(1.015)
# Restrained cast shadow around enlarged silhouette, masked off original leaf and frame.
offset=ImageChops.offset(newmask,-7,2).filter(ImageFilter.GaussianBlur(7))
shadow=np.asarray(offset,dtype=float)/255*.12
shadow*=1-np.asarray(newmask,dtype=float)/255
shadow[:,:575]=0
arr=np.asarray(im,dtype=float);base=Image.fromarray(np.uint8(np.clip(arr*(1-shadow[:,:,None]),0,255)))
out=Image.composite(leaf,base,newmask)
path=A/'scene02-photoreal-candidate-v3.png'
with path.open('xb') as f:out.save(f,format='PNG')
diff=np.any(np.asarray(out)!=np.asarray(im),axis=2); allowed=(np.asarray(newmask)>0)|(shadow>0)
assert not np.any(diff&~allowed);assert not np.any(diff[:,:575]);assert hashlib.sha256(src.read_bytes()).hexdigest()==beforehash
report={'method':'Non-generative uniform pixel transform + small leaf-only tone adjustment and local shadow composite','scale_xy':[s,s],'anchor_original_pixels':[ax,ay],'source_polygon':poly,'transformed_polygon':[[ax+s*(x-ax),ay+s*(y-ay)] for x,y in poly],'changed_pixels':int(diff.sum()),'outside_mask_changes':int((diff&~allowed).sum()),'left_frame_region_changes':int(diff[:,:575].sum()),'original_hash':beforehash,'limits':['No physical dimensions or fit asserted.','Original generated pattern retained; not verified exact YA990 reproduction.','Local wall/floor pixels in new silhouette and immediate shadow zone necessarily replaced; rest preserved.','No separate perspective warp: original lean and perspective retained to avoid pattern distortion.']}
with (P/'docs/scene02-composite-v3-qa.json').open('x') as f:json.dump(report,f,ensure_ascii=False,indent=2)
print(report)
