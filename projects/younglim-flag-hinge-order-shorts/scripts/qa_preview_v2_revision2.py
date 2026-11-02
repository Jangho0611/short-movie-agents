from pathlib import Path
import json,subprocess,hashlib
p=Path(__file__).resolve().parents[1];q=json.loads((p/'docs/preview-v2-revision2-inputs.json').read_text());out=p/'public/assets/video/younglim-flag-hinge-preview-v2-revision2.mp4'
def run(a):return subprocess.check_output(a,stderr=subprocess.PIPE)
def hashes(f,flt=None):
 a=['ffmpeg','-v','error','-i',str(f),'-an']
 if flt:a+=['-vf',flt]
 return [x.split(',')[-1].strip() for x in run(a+['-pix_fmt','rgb24','-f','framemd5','-']).decode().splitlines() if x and not x.startswith('#')]
allh=hashes(out);offset=0;checks=[]
for f,n in zip(q['files'],q['frames']):
 h=hashes(f);checks.append({'file':f,'frames':n,'decoded_pixel_identical':allh[offset:offset+n]==h});offset+=n
for f in [out,p/'public/assets/video/scene02-preview-v2.mp4',p/'public/assets/video/scene05-preview-v2.mp4']:run(['ffmpeg','-v','error','-i',str(f),'-f','null','-'])
probe=json.loads(run(['ffprobe','-v','error','-count_frames','-show_entries','stream=codec_name,width,height,r_frame_rate,nb_read_frames,duration:format=duration','-of','json',str(out)]))
a=json.loads((p/'docs/preview-v1-qa.json').read_text())['source_sha256'];audio={n:hashlib.sha256((p/'public/assets/audio'/n).read_bytes()).hexdigest()==h for n,h in a.items()}
r={'probe':probe,'all_scene_pixel_checks':checks,'tts_source_hashes_unchanged':audio,'full_decode':'PASS','review':'PENDING'}
with (p/'docs/preview-v2-revision2-qa.json').open('x') as f:json.dump(r,f,ensure_ascii=False,indent=2)
print(json.dumps(r,ensure_ascii=False))
