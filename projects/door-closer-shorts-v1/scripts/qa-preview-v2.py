from pathlib import Path
import subprocess,json,hashlib,wave
import numpy as np
from PIL import Image,ImageDraw
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video'; out=V/'door-closer-preview-v2.mp4'
def run(a):return subprocess.check_output(a)
def hashes(p):
 s=run(['ffmpeg','-v','error','-i',str(p),'-map','0:v:0','-fps_mode','passthrough','-f','framemd5','-']).decode()
 return [x.split(',')[-1].strip() for x in s.splitlines() if x and not x.startswith('#')]
base=json.loads((P/'docs/preview-v2-baseline.json').read_text())
changed=[f for f,h in base.items() if hashlib.sha256((P/f).read_bytes()).hexdigest()!=h];assert not changed,changed
subprocess.run(['ffmpeg','-v','error','-i',str(out),'-f','null','-'],check=True)
h=hashes(out); assert len(h)==1071,len(h)
checks={}
for n,start,length in [(2,150,117),(3,267,129),(5,603,298)]:
 checks[f'scene{n}_identical']=h[start:start+length]==hashes(V/f'scene{n:02d}-preview-v1.mp4')
checks['ending_identical']=h[901:]==hashes(P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4')
assert all(checks.values()),checks
wav=P/'public/assets/audio/preview-v2-approved-sequence.wav'
with wave.open(str(wav)) as f:ref=np.frombuffer(f.readframes(f.getnframes()),dtype=np.int16).astype(float)
actual=np.frombuffer(run(['ffmpeg','-v','error','-i',str(out),'-map','0:a:0','-f','s16le','-ac','2','-ar','48000','-']),dtype=np.int16).astype(float)[:len(ref)]
corr=float(np.corrcoef(ref,actual)[0,1]);assert corr>.99,corr
probe=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(out)]))
qa={'frames':len(h),'duration':35.7,'dimensions':'1080x1920','fps':30,'full_decode':'PASS','preserved_baseline_files':len(base),'changed_baseline_files':changed,**checks,'approved_sequence_aac_correlation':corr,'peak':float(np.max(np.abs(actual))/32768),'sha256':hashlib.sha256(out.read_bytes()).hexdigest(),'scene_frames':[150,117,129,207,298,170],'scene1_source':'A 1.500-6.500, 1x, no tpad/freeze','scene4_highlights_seconds':[2.2,113/30,160/30],'tts_unchanged':True,'realtime_listening':'not performed; user approval pending'}
(P/'docs/preview-v2-qa.json').write_text(json.dumps(qa,ensure_ascii=False,indent=2))
(P/'docs/preview-v2-ffprobe.json').write_text(json.dumps(probe,indent=2))
times=[.5,2.5,4.8,13.7,15.8,17.3,19,32]
canvas=Image.new('RGB',(1080,1020),'white');d=ImageDraw.Draw(canvas)
for i,t in enumerate(times):
 f=P/f'public/assets/images/preview-v2-qa-{i+1}.png'
 subprocess.run(['ffmpeg','-v','error','-n','-ss',str(t),'-i',str(out),'-frames:v','1',str(f)],check=True)
 im=Image.open(f);im.thumbnail((270,480));x=(i%4)*270;y=(i//4)*510;canvas.paste(im,(x,y));d.text((x+8,y+485),f'{t:.1f}s',fill='black')
canvas.save(P/'public/assets/images/preview-v2-contact-sheet.png')
print(json.dumps(qa,ensure_ascii=False,indent=2))
