from pathlib import Path
import subprocess as s,numpy as np,json,hashlib
from PIL import Image,ImageDraw
p=Path('/Users/janghokim/Documents/short-movie-agents/projects/pocket-door-handle-reinforcement-shorts-v1');d=p/'public/assets/video';v=d/'scene01-doormaster-v6.mp4';out=d/'scene01-doormaster-v7.mp4';assert out.exists()
w,h=1080,1920;n=w*h*3//2
def dec(f,fmt='yuv420p'):return s.check_output(['ffmpeg','-v','error','-i',str(f),'-pix_fmt',fmt,'-f','rawvideo','-'])
a=dec(v);repls={i:dec('/tmp/scene01-v7-'+str(i)+'.png') for i in [0,18,60]}
oldrepls={i:dec('/tmp/scene01-v7-old-'+str(i)+'.png') for i in [0,18,60]}
mask=np.zeros(n,bool)
for st,ww,hh in [(0,w,h),(w*h,w//2,h//2),(w*h+w*h//4,w//2,h//2)]:
 m=mask[st:st+ww*hh].reshape(hh,ww);m[:,1008 if ww==1080 else 504:]=True;m[250 if ww==1080 else 125:500 if ww==1080 else 250]=False
enc=s.Popen(['ffmpeg','-v','error','-y','-f','rawvideo','-pix_fmt','yuv420p','-s','1080x1920','-r','30','-i','-','-i',str(v),'-map','0:v','-map','1:a','-c:v','libx264','-crf','18','-profile:v','high','-level:v','4.1','-preset','medium','-video_track_timescale','90000','-c:a','copy','-movflags','+faststart',str(out)],stdin=s.PIPE)
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
b=dec(out);assert len(b)==147*n
errs=[];edge=[]
for f in range(147):
 diff=np.abs(np.frombuffer(a[f*n:(f+1)*n],np.uint8).astype(float)-np.frombuffer(b[f*n:(f+1)*n],np.uint8));errs.append(float(diff[~mask].mean()))
 if 36<=f<60:edge.append(float(diff.mean()))
def aud(f):return s.check_output(['ffmpeg','-v','error','-i',str(f),'-map','0:a','-c','copy','-f','adts','-'])
assert aud(v)==aud(out)
r=dec(out,'rgb24');old=dec(v,'rgb24');nr=w*h*3
def frame(buf,f):return Image.frombytes('RGB',(w,h),buf[f*nr:(f+1)*nr]).resize((360,640))
c=Image.new('RGB',(1080,1340),'white');draw=ImageDraw.Draw(c)
for i,f in enumerate([0,18,36,60,80,146]):x=i%3*360;y=i//3*670;c.paste(frame(r,f),(x,y+30));draw.text((x+8,y+8),f'Frame {f} / {f/30:.3f}s',fill='black')
c.save(p/'public/assets/images/scene01-doormaster-v7-qa.png')
c=Image.new('RGB',(1440,640))
for i,f in enumerate([0,18,36,60]):c.paste(frame(r,f),(i*360,0))
c.save(p/'public/assets/images/scene01-doormaster-v7-mobile-qa.png')
c=Image.new('RGB',(1440,1280))
for i,f in enumerate([0,18,36,60]):c.paste(frame(old,f),(i*360,0));c.paste(frame(r,f),(i*360,640))
c.save(p/'public/assets/images/scene01-doormaster-v7-compare.png')
before=json.loads(Path('/tmp/v7-before.json').read_text());assert all(hashlib.sha256(Path(k).read_bytes()).hexdigest()==z for k,z in before.items())
print('outside MAE',np.mean(errs),'edge MAE',np.mean(edge),'preserved',len(before),'audio identical')
print(s.check_output(['ffprobe','-v','error','-show_entries','stream=codec_name,profile,nb_frames,duration','-of','json',str(out)]).decode())
