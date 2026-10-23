from pathlib import Path
import subprocess,json,numpy as np
from PIL import Image,ImageDraw
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';starts=[7,9,8,9,9];turns=[48,45,75,88,94]
rows=json.loads((p/'docs/preview-v5-caption-bounds.json').read_text());out={}
for i in range(1,6):
 data=[x for x in rows if x['scene']==i and x['frame']>=starts[i-1]]
 frames=[a+b for a in [starts[i-1],turns[i-1]] for b in [1,3,7,12]]
 raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(v/f'scene0{i}-preview-v5.mp4'),'-vf','crop=1080:360:0:1440,scale=540:180','-f','rawvideo','-pix_fmt','rgb24','-']);arr=np.frombuffer(raw,np.uint8).reshape(-1,180,540,3)
 im=Image.new('RGB',(2160,420),'white');d=ImageDraw.Draw(im)
 for j,f in enumerate(frames):
  x=(j%4)*540;y=(j//4)*210;im.paste(Image.fromarray(arr[f]),(x,y));d.line([(x+270,y),(x+270,y+180)],fill='red',width=1);d.text((x+10,y+185),f'Scene {i} frame {f}; center guide x=540',fill='black')
 im.save(p/f'public/assets/images/preview-v5-caption-scene0{i}-qa.png')
 out[str(i)]={'records':len(data),'max_center_error_px':max(abs(x['center']-540) for x in data),'left_min':min(x['left'] for x in data),'right_max':max(x['right'] for x in data),'sample_frames':frames,'samples':[x for x in data if x['frame'] in frames]}
a=(p/'src/preview-v4.tsx').read_text();b=(p/'src/preview-v5.tsx').read_text()
out['noncaption_scene_source_identical']=a[a.index('const Door='):a.index('const Full=')]==b[b.index('const Door='):b.index('const Full=')]
def pcm(name):return subprocess.check_output(['ffmpeg','-v','error','-i',str(v/name),'-vn','-f','s16le','-'])
out['full_audio_v4_v5_identical_decoded']=pcm('doormaster-ep02-preview-v4.mp4')==pcm('doormaster-ep02-preview-v5.mp4')
with (p/'docs/preview-v5-alignment-qa.json').open('x') as f:json.dump(out,f,ensure_ascii=False,indent=2)
print(json.dumps({k:({x:y for x,y in val.items() if x!='samples'} if isinstance(val,dict) else val) for k,val in out.items()}))
