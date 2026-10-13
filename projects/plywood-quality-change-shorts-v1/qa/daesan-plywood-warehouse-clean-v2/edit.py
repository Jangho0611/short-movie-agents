from pathlib import Path
from PIL import Image, JpegImagePlugin
import numpy as np, cv2, hashlib, subprocess, json
p=Path('/Users/janghokim/Documents/short-movie-agents/projects/plywood-quality-change-shorts-v1/public/assets/images')
t=Path('/tmp/plywood-v2-qa')
src=p/'daesan-plywood-warehouse-real-01.jpg'; v1=p/'daesan-plywood-warehouse-clean-v1.jpg'
hashes={f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in [src,v1]}
im=Image.open(src); a=np.array(im); b=a.copy(); mask=np.zeros(a.shape[:2],np.uint8)
# Purple ink on package; preserve surrounding black specifications.
# Tight polygon envelopes of the lettering, excluding black product specifications.
for pts in [ [[193,420],[246,424],[247,445],[193,442]], [[211,451],[234,451],[235,463],[211,463]], [[122,746],[214,733],[215,759],[148,770],[137,764],[136,774],[122,777]], [[219,746],[238,740],[238,750],[220,755]], [[240,733],[265,728],[265,748],[250,746],[247,754],[246,760],[239,761]] ]:
 cv2.fillPoly(mask,[np.array(pts,np.int32)],255)
b=a.copy()
ys,xs=np.where(mask>0)
for y,x in zip(ys,xs):
 if y>700:
  dx=150 if x<218 else 95
  b[y,x]=a[y-round(dx*.145),x+dx]
 elif y<446:
  b[y,x]=a[y+28,x+58]
 else:
  b[y,x]=a[y-5,x+58]
# Restore the narrow existing packing strap through the removed purple lettering.
for y in range(422,463):
 for x in range(223,227):
  if mask[y,x]: b[y,x]=a[447,x]
# Blend using a padded calculation region, but apply strictly inside the text mask.
original_mask=mask.copy()
expanded=cv2.dilate(mask,np.ones((9,9),np.uint8))
donor=a.copy()
ys,xs=np.where(expanded>0)
for y,x in zip(ys,xs):
 if y>700:
  dx=150 if x<218 else 95
  donor[y,x]=a[y-round(dx*.145),x+dx]
 elif y<446: donor[y,x]=a[y+28,x+58]
 else: donor[y,x]=a[y-5,x+58]
for y in range(418,467):
 for x in range(223,227): donor[y,x]=a[447,x]
b=a.copy()
for lo,hi in [(400,480),(700,800)]:
 local=np.zeros_like(mask);local[lo:hi]=expanded[lo:hi]
 xx,yy,ww,hh=cv2.boundingRect(local)
 sel=(original_mask>0)&(local>0)
 blended=cv2.seamlessClone(donor.copy(),a.copy(),local.copy(),(xx+ww//2,yy+hh//2),cv2.NORMAL_CLONE)
 b[sel]=blended[sel]
Image.fromarray(b).save(t/'edited-lossless.png');Image.fromarray(mask).save(t/'retouch-mask.png')
# Only replace MCU-aligned rectangles containing the two text regions.
regions=[(112,720,272,784),(176,416,256,464)]
current=src
for i,(x0,y0,x1,y1) in enumerate(regions):
 patch=t/f'patch{i}.jpg'
 Image.fromarray(b[y0:y1,x0:x1]).save(patch,qtables=im.quantization,subsampling=JpegImagePlugin.get_sampling(im))
 out=t/f'drop{i}.jpg'
 subprocess.run(['jpegtran','-copy','all','-drop',f'+{x0}+{y0}',str(patch),'-outfile',str(out),str(current)],check=True)
 current=out
final=np.array(Image.open(current));diff=np.any(final!=a,axis=2)
blockmask=np.zeros_like(mask)
for x0,y0,x1,y1 in regions: blockmask[max(0,y0-2):y1+2,max(0,x0-2):x1+2]=255
Image.fromarray(blockmask).save(t/'jpeg-local-mask.png')
Image.fromarray(np.concatenate([a,final],axis=1)).save(t/'comparison.png')
for tag,box in [('front',(105,710,285,795)),('back',(175,408,260,470))]:
 x0,y0,x1,y1=box
 crop=np.concatenate([a[y0:y1,x0:x1],final[y0:y1,x0:x1]],axis=1)
 Image.fromarray(crop).resize((crop.shape[1]*4,crop.shape[0]*4)).save(t/f'{tag}-compare.png')
report={'hashes_before':hashes,'hashes_after':{f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in [src,v1]},'size':im.size,'retouch_pixels':int((mask>0).sum()),'working_pixels_changed_outside_retouch':int(np.any(b!=a,2)[mask==0].sum()),'jpeg_changed_outside_retouch':int(diff[mask==0].sum()),'jpeg_changed_outside_local_blocks':int(diff[blockmask==0].sum()),'ceiling_changed_pixels':int(diff[:400].sum()),'jpeg_local_regions':regions}
(t/'qa.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
