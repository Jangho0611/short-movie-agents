from pathlib import Path
import subprocess as sp,hashlib,json
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video'
def frames(n):
 s=sp.check_output(['ffmpeg','-v','error','-i',str(v/n),'-an','-f','framemd5','-']).decode()
 return [x.split(',')[-1].strip() for x in s.splitlines() if x and not x.startswith('#')]
def audio(n):return hashlib.sha256(sp.check_output(['ffmpeg','-v','error','-i',str(v/n),'-vn','-f','s24le','-'])).hexdigest()
a=frames('younglim-stepdoor-preview-v7.mp4');b=frames('younglim-stepdoor-preview-v8.mp4')
r={'frames_v7':len(a),'frames_v8':len(b),'scene1_to_5_identical':a[:1031]==b[:1031],'scene7_and_ending_identical':a[1279:]==b[1279:],'audio_decoded_identical':audio('younglim-stepdoor-preview-v7.mp4')==audio('younglim-stepdoor-preview-v8.mp4')}
assert r['scene1_to_5_identical'] and r['scene7_and_ending_identical'] and r['audio_decoded_identical'] and len(b)==1629
(p/'docs/preview-v8-preservation-qa.json').write_text(json.dumps(r,indent=2));print(r)
