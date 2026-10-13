from pathlib import Path
import subprocess,json,hashlib
import numpy as np
P=Path(__file__).resolve().parents[1];Q=P/'qa/preview-v3';V=P/'public/assets/video'
scenes=json.loads((P/'src/preview-data-v3.json').read_text())
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def run(cmd):return subprocess.check_output(cmd)
r={'preservation':{},'outputs':{},'audio':{}}
for f,h in json.loads((Q/'before-sha256.json').read_text()).items():r['preservation'][f]=sha(P/f)==h
full=V/'plywood-quality-change-preview-v3.mp4'
for f,frames in [(V/f"scene{s['scene']:02d}-preview-v3.mp4",s['frames']) for s in scenes]+[(full,1348)]:
 d=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]));v=next(s for s in d['streams'] if s['codec_type']=='video');a=next(s for s in d['streams'] if s['codec_type']=='audio')
 dec=subprocess.run(['ffmpeg','-v','error','-i',str(f),'-map','0:v','-map','0:a','-f','null','-'],capture_output=True,text=True)
 r['outputs'][f.name]={'width':v['width'],'height':v['height'],'fps':v['avg_frame_rate'],'frames':int(v['nb_frames']),'expected_frames':frames,'duration':float(v['duration']),'container_duration':float(d['format']['duration']),'audio_start':a['start_time'],'video_start':v['start_time'],'decode_pass':dec.returncode==0 and not dec.stderr,'decode_log':dec.stderr,'sha256':sha(f)}
 print(f.name, r['outputs'][f.name]['duration'],'decode',r['outputs'][f.name]['decode_pass'],flush=True)
def hashes(f,skip=0):
 t=run(['ffmpeg','-v','error','-i',str(f),'-an','-vf',f'select=gte(n\\,{skip}),format=rgb24','-fps_mode','passthrough','-c:v','rawvideo','-f','framemd5','-']).decode()
 return [l.rsplit(',',1)[-1].strip() for l in t.splitlines() if l and not l.startswith('#')]
ending=P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
a=hashes(ending);b=hashes(full,1178)
r['ending_170_frames_pixel_identical']=len(a)==len(b)==170 and a==b
def pcm(f):return np.frombuffer(run(['ffmpeg','-v','error','-i',str(f),'-vn','-ac','1','-ar','24000','-f','f32le','-']),dtype='<f4')
y=pcm(full);offset=0
for s in scenes+[{'scene':'ending','audio':None,'frames':170}]:
 x=pcm(P/'public/assets/audio'/s['audio'] if s['audio'] else ending)
 z=y[offset*800:offset*800+len(x)];n=min(len(x),len(z));corr=float(np.corrcoef(x[:n],z[:n])[0,1])
 r['audio'][str(s['scene'])]={'source_audio':s['audio'] or str(ending.relative_to(P)),'correlation_at_exact_frame_offset':corr,'start_frame':offset,'compared_samples':n}
 offset+=s['frames']
r['pass']=all(r['preservation'].values()) and r['ending_170_frames_pixel_identical'] and all(v['decode_pass'] and v['frames']==v['expected_frames'] and (v['width'],v['height'],v['fps'])==(1080,1920,'30/1') for v in r['outputs'].values()) and all(v['correlation_at_exact_frame_offset']>.98 for v in r['audio'].values())
(Q/'qa-results.json').write_text(json.dumps(r,ensure_ascii=False,indent=2))
print(json.dumps({'preserved_files':len(r['preservation']),'all_preserved':all(r['preservation'].values()),'ending_pixel_identical':r['ending_170_frames_pixel_identical'],'audio':r['audio'],'pass':r['pass']},indent=2))
assert r['pass']
