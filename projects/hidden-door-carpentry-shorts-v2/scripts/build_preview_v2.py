from pathlib import Path
import cv2,numpy as np,subprocess,json,hashlib,shutil
P=Path(__file__).resolve().parents[1];R=P.parents[1];V=P/'public/assets/video';I=P/'public/assets/images';D=P/'docs'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def run(c):return subprocess.run(c,check=True,capture_output=True,text=True).stdout
baseline={str(p):sha(p) for d in [P/'src',P/'public/assets',R/'docs',R/'projects/hidden-door-installation-shorts-v1'] for p in d.rglob('*') if p.is_file()}
if (D/'preview-v2-preservation-before.json').exists(): baseline=json.loads((D/'preview-v2-preservation-before.json').read_text())
else: (D/'preview-v2-preservation-before.json').write_text(json.dumps(baseline,ensure_ascii=False,indent=2))
assets=[]
for name in ['daesani-point-right','daesani-open-arms-explain']:
 src=R/'assets/daesani-motion-library/video'/f'{name}.mp4';dst=V/f'{name}.mp4'
 if dst.exists():assert sha(src)==sha(dst)
 else:shutil.copy2(src,dst)
 assert sha(src)==sha(dst)
 alpha=V/f'{name}-alpha-v2.mov'
 cap=cv2.VideoCapture(str(dst));fps=cap.get(cv2.CAP_PROP_FPS);frames=int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
 enc=subprocess.Popen(['ffmpeg','-y','-v','error','-f','rawvideo','-pix_fmt','rgba','-s','520x580','-r',str(fps),'-i','-','-an','-c:v','qtrle','-pix_fmt','argb',str(alpha)],stdin=subprocess.PIPE)
 tiles=[];boxes=[]
 for n in range(frames):
  ok,bgr=cap.read();assert ok
  # Remove only the near-white region connected to the image border; preserve enclosed face pixels.
  near=np.uint8(np.min(bgr,axis=2)>242)
  count,labels,stats,centroids=cv2.connectedComponentsWithStats(near,8)
  edge=np.unique(np.concatenate([labels[0],labels[-1],labels[:,0],labels[:,-1]]));edge=edge[edge!=0]
  bg=np.isin(labels,edge);a=np.where(bg,0,255).astype(np.uint8)
  # Remove only the light floor shadow beneath the dark feet.
  a[910:][np.min(bgr[910:],axis=2)>145]=0
  rgba=cv2.cvtColor(bgr,cv2.COLOR_BGR2RGBA);rgba[:,:,3]=a
  crop=rgba[400:980,100:620];enc.stdin.write(crop.tobytes())
  yy,xx=np.where(crop[:,:,3]>0);boxes.append([int(xx.min()),int(yy.min()),int(xx.max()),int(yy.max())])
  if n in [0,12,24,36,48,60,72,84,95]:
   base=np.full_like(crop[:,:,:3],(245,243,237));out=np.where(crop[:,:,3:4]>0,crop[:,:,:3],base)
   tile=cv2.resize(out,(208,232));cv2.putText(tile,str(n),(8,22),cv2.FONT_HERSHEY_SIMPLEX,.55,(40,80,50),1);tiles.append(tile)
 enc.stdin.close();assert enc.wait()==0;cap.release()
 sheet=np.vstack([np.hstack(tiles[k:k+3]) for k in range(0,9,3)])
 cv2.imwrite(str(I/f'{name}-motion-qa-v2.png'),cv2.cvtColor(sheet,cv2.COLOR_RGB2BGR))
 assets.append({'source':str(src),'copy':str(dst),'sha256':sha(dst),'alpha':str(alpha),'frames':frames,'fps':fps,'crop':[100,400,520,580],'crop_bbox_union':np.array(boxes).min(axis=0).tolist()+np.array(boxes).max(axis=0).tolist()})
# Native motion speed, then hold the last approved source frame. No flips or body warps.
for scene,name,frames in [(2,'daesani-point-right',203),(5,'daesani-open-arms-explain',180)]:
 old=V/f'scene{scene:02}-preview-v1.mp4';out=V/f'scene{scene:02}-preview-v2.mp4'
 c=['ffmpeg','-y','-v','error','-i',str(old),'-i',str(V/f'{name}-alpha-v2.mov')]
 if scene==5:c+=['-i',str(P/'public/assets/audio/scene05-tts-v6.mp3')]
 filt=f'[0:v]tpad=stop_mode=clone:stop_duration=3,trim=end_frame={frames},setpts=PTS-STARTPTS[base];[1:v]scale=406:452:flags=lanczos,fps=30,tpad=stop_mode=clone:stop_duration=4[pet];[base][pet]overlay=x=-20:y=430:format=auto,format=yuv420p[v]'
 if scene==5:filt+=';[2:a]apad,atrim=duration=6,asetpts=PTS-STARTPTS[a]'
 c+=['-filter_complex',filt,'-map','[v]','-map','[a]' if scene==5 else '0:a','-frames:v',str(frames),'-c:v','libx264','-crf','18','-preset','medium','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)]
 run(c)
 for stamp,label in [(0,'start'),(2,'gesture'),(3.96,'end'),((frames-1)/30,'hold')]:
  run(['ffmpeg','-y','-v','error','-ss',str(stamp),'-i',str(out),'-frames:v','1',str(I/f'scene{scene:02}-v2-{label}-qa.png')])
 assert all(sha(Path(p))==h for p,h in baseline.items())
(D/'preview-v2-motion-assets.json').write_text(json.dumps(assets,ensure_ascii=False,indent=2))
print('Scene 2 / 5 rendered; original sources preserved')
