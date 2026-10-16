from pathlib import Path
from PIL import Image,ImageDraw,ImageFilter,ImageEnhance,ImageChops
import numpy as np,json,hashlib
P=Path(__file__).resolve().parents[1];A=P/'public/assets/images'
src=A/'scene02-photoreal-candidate-v1.png';im=Image.open(src).convert('RGB');beforehash=hashlib.sha256(src.read_bytes()).hexdigest();w,h=im.size
# One uniform similarity transform. Anchor lies on original bottom contact edge.
s=1.13;ax,ay=810,1258.8
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
path=A/'scene02-photoreal-candidate-v2.png'
with path.open('xb') as f:out.save(f,format='PNG')
def comparison(items,dest):
 canvas=Image.new('RGB',(1260,1000),'#efefeb');draw=ImageDraw.Draw(canvas)
 for i,(photo,label) in enumerate(items):
  copy=photo.copy();copy.thumbnail((610,950));canvas.paste(copy,(i*630+(630-copy.width)//2,40));draw.text((i*630+20,14),label,fill='#222')
 with (A/dest).open('xb') as f:canvas.save(f,format='PNG')
comparison([(im,'Scene 2 v1'),(out,'Scene 2 v2 - uniform scale 113%')],'scene02-before-after-qa-v2.png')
comparison([(out,'Scene 2 v2'),(Image.open(A/'scene03-photoreal-candidate-v1.png').convert('RGB'),'Scene 3 reference')],'scene02-scene03-comparison-v2.png')
diff=np.any(np.asarray(out)!=np.asarray(im),axis=2); allowed=(np.asarray(newmask)>0)|(shadow>0)
assert not np.any(diff&~allowed);assert not np.any(diff[:,:575]);assert hashlib.sha256(src.read_bytes()).hexdigest()==beforehash
report={'method':'Non-generative uniform pixel transform + small leaf-only tone adjustment and local shadow composite','scale_xy':[s,s],'anchor_original_pixels':[ax,ay],'source_polygon':poly,'transformed_polygon':[[ax+s*(x-ax),ay+s*(y-ay)] for x,y in poly],'changed_pixels':int(diff.sum()),'outside_mask_changes':int((diff&~allowed).sum()),'left_frame_region_changes':int(diff[:,:575].sum()),'original_hash':beforehash,'limits':['No physical dimensions or fit asserted.','Original generated pattern retained; not verified exact YA990 reproduction.','Local wall/floor pixels in new silhouette and immediate shadow zone necessarily replaced; rest preserved.','No separate perspective warp: original lean and perspective retained to avoid pattern distortion.']}
with (P/'docs/scene02-composite-v2-qa.json').open('x') as f:json.dump(report,f,ensure_ascii=False,indent=2)
print(report)
