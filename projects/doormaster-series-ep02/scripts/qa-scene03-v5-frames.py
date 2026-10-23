import subprocess,numpy as np,json
from pathlib import Path
from PIL import Image,ImageDraw
p=Path(__file__).resolve().parents[1]
def frames(file,start):
 b=subprocess.check_output(['ffmpeg','-v','error','-i',str(file),'-vf',f'trim=start_frame={start}:end_frame={start+127},setpts=PTS-STARTPTS,scale=180:320','-fps_mode','passthrough','-f','rawvideo','-pix_fmt','rgb24','-']);return np.frombuffer(b,np.uint8).reshape(-1,320,180,3)
r={};arrays=[]
for label,file,start in [('individual','scene03-preview-v5.mp4',0),('full','doormaster-ep02-preview-v5.mp4',254)]:
 a=frames(p/'public/assets/video'/file,start);arrays.append(a)
 roi=a[:,3:235,3:177];delta=np.abs(roi[1:].astype(float)-roi[:-1]).mean(axis=(1,2,3))
 jumps=[i for i,x in enumerate(delta,1) if x>4]
 data=json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','v','-show_frames','-show_entries','frame=best_effort_timestamp_time','-of','json',str(p/'public/assets/video'/file)]))
 ts=[float(x['best_effort_timestamp_time']) for x in data['frames']]
 r[label]={'scene3_frame_count':len(a),'image_jump_frames':jumps,'expected_cuts':[26,44,64],'unexpected_jumps':[i for i in jumps if i not in [26,44,64]],'timestamp_steps':sorted(set(round(b-a,6) for a,b in zip(ts,ts[1:]))),'max_within_shot_MAD':float(max(x for i,x in enumerate(delta,1) if i not in [26,44,64]))}
 # All 127 frames inspected through comparison to stable image of the corresponding shot.
 refs=[12,35,55,100];err=[]
 for i,img in enumerate(roi):
  j=0 if i<26 else 1 if i<44 else 2 if i<64 else 3
  err.append(float(np.abs(img.astype(float)-roi[refs[j]].astype(float)).mean()))
 r[label]['max_deviation_from_shot_reference']=max(err)
ids=[19,20,21,25,26,29,30,31,43,44,63,64]
im=Image.new('RGB',(720,990),'white');d=ImageDraw.Draw(im)
for j,i in enumerate(ids):
 im.paste(Image.fromarray(arrays[0][i]),((j%4)*180,(j//4)*330));d.text(((j%4)*180,(j//4)*330+320),str(i),fill='black')
im.save(p/'public/assets/images/preview-v5-scene03-transition-qa.png')
r['individual_vs_full_mean_MAD']=float(np.abs(arrays[0].astype(float)-arrays[1].astype(float)).mean())
with (p/'docs/preview-v5-scene03-frame-qa.json').open('x') as f:json.dump(r,f,indent=2)
print(json.dumps(r))
