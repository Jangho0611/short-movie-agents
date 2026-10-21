from pathlib import Path
import subprocess as sp,json,hashlib,re
p=Path(__file__).resolve().parents[1];t=json.loads((p/'src/timing-v2.json').read_text());a=p/'public/assets/audio'
def pcm(path):return sp.check_output(['ffmpeg','-v','error','-i',str(path),'-ar','48000','-ac','2','-f','s24le','-'])
seq=pcm(a/'preview-v2-approved-sequence.wav');offset=0;matches=[];hashes=[]
for row in t:
 b=pcm(a/row['audio']);matches.append(seq[offset:offset+len(b)]==b);offset+=row['frames']*1600*6
 hashes.append({'file':row['audio'],'sha256_match':hashlib.sha256((a/row['audio']).read_bytes()).hexdigest()==row['sha256'],'frames':row['frames'],'audio_seconds':row['seconds'],'tail_seconds':row['frames']/30-row['seconds']})
ending=[]
for f,h in json.loads((p/'docs/ending-asset-sha256.json').read_text()).items():
 if f.startswith('src/'):dest=p/'src/daesan-ending'/f[4:]
 elif f.split('/')[0] in ['video','audio','fonts','logos']:dest=p/'public/daesan-ending'/f
 else:continue
 raw=hashlib.sha256(dest.read_bytes()).hexdigest()
 normalized=hashlib.sha256(dest.read_text().replace('daesan-ending/','').encode()).hexdigest() if f.startswith('src/') else raw
 ending.append({'file':str(dest.relative_to(p)),'sha256':raw,'raw_match':raw==h,'match':normalized==h,'note':'existing project-relative path prefix only' if raw!=h and normalized==h else ''})
preview=p/'public/assets/video/younglim-stepdoor-preview-v8.mp4'
r=sp.run(['ffmpeg','-hide_banner','-i',str(preview),'-af','loudnorm=I=-18:TP=-1.5:LRA=11:print_format=json','-vn','-f','null','-'],capture_output=True,text=True,check=True)
levels=json.JSONDecoder().raw_decode(r.stderr[r.stderr.rfind('{'):])[0]
report={'approved_tts':hashes,'approved_scene_pcm_matches':matches,'ending_dependency_hashes':ending,'final_LUFS':levels['input_i'],'final_true_peak_dBTP':levels['input_tp'],'actual_full_listening':'not performed; user review required','ai_image_changes':False}
print('PCM',matches,'TTS',[x['sha256_match'] for x in hashes],'ENDING',ending)
assert all(matches) and all(x['sha256_match'] for x in hashes) and all(x['match'] for x in ending)
(p/'docs/preview-v8-integrity-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False,indent=2))
