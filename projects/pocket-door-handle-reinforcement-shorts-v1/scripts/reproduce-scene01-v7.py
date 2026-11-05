from pathlib import Path
import subprocess as s,numpy as np,json,hashlib
from PIL import Image,ImageDraw
p=Path(__file__).resolve().parents[1];d=p/'public/assets/video';v=d/'scene01-doormaster-v6.mp4';out=d/'scene01-doormaster-v7-reproduction-v1.mp4';assert not out.exists()
w,h=1080,1920;n=w*h*3//2
def dec(f,fmt='yuv420p'):return s.check_output(['ffmpeg','-v','error','-i',str(f),'-pix_fmt',fmt,'-f','rawvideo','-'])
a=dec(v);repls={i:dec(str(p/'public/assets/images'/('scene01-v7-'+str(i)+'.png'))) for i in [0,18,60]}
oldrepls={i:dec(str(p/'public/assets/images'/('scene01-v7-old-'+str(i)+'.png'))) for i in [0,18,60]}
mask=np.zeros(n,bool)
for st,ww,hh in [(0,w,h),(w*h,w//2,h//2),(w*h+w*h//4,w//2,h//2)]:
 m=mask[st:st+ww*hh].reshape(hh,ww);m[:,1008 if ww==1080 else 504:]=True;m[250 if ww==1080 else 125:500 if ww==1080 else 250]=False
enc=s.Popen(['ffmpeg','-v','error','-n','-f','rawvideo','-pix_fmt','yuv420p','-s','1080x1920','-r','30','-i','-','-i',str(v),'-map','0:v','-map','1:a','-c:v','libx264','-crf','18','-profile:v','high','-level:v','4.1','-preset','medium','-video_track_timescale','90000','-c:a','copy','-movflags','+faststart',str(out)],stdin=s.PIPE)
for f in range(147):
 b=np.frombuffer(a[f*n:(f+1)*n],np.uint8).copy()
 if not 36<=f<60:
  idx=0 if f<18 or f>=80 else 18 if f<36 else 60
  patch=np.frombuffer(repls[idx],np.uint8).copy()
  for st,ww,hh in [(0,w,h),(w*h,w//2,h//2),(w*h+w*h//4,w//2,h//2)]:
   baseplane=b[st:st+ww*hh].reshape(hh,ww);plane=patch[st:st+ww*hh].reshape(hh,ww)
   x=1008 if ww==1080 else 504
   correction=baseplane[:,x-8:x].mean(1)-plane[:,x-8:x].mean(1)
   plane[:,x:]=np.clip(plane[:,x:].astype(float)+correction[:,None],0,255).round().astype(np.uint8)
  b[mask]=patch[mask]
 enc.stdin.write(b.tobytes())
enc.stdin.close();assert enc.wait()==0
