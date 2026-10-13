from pathlib import Path
import subprocess,json,hashlib,numpy as np
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';Q=P/'qa/preview-v1'
scenes=json.loads((P/'src/preview-data.json').read_text());audit=json.loads((Q/'input-audit.json').read_text())
report={'inputs_preserved':{},'outputs':{},'tts_audio':{},'ending':{}}
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
for f,h in audit['images'].items():report['inputs_preserved'][f]=sha(P/f)==h
for f,h in audit['guidelines'].items():report['inputs_preserved'][f]=sha(Path(f))==h
for r in audit['tts']:report['inputs_preserved'][r['file']]=sha(P/'public/assets/audio'/r['file'])==r['sha256']
for f,r in audit['ending'].items():report['inputs_preserved'][f]=sha(P/f)==r['sha256']
files=[V/f"scene{s['scene']:02d}-preview-v1.mp4" for s in scenes]+[V/'plywood-quality-change-preview-v1.mp4']
for f,frames in zip(files,[s['frames'] for s in scenes]+[sum(s['frames'] for s in scenes)+170]):
 probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]))
 v=next(s for s in probe['streams'] if s['codec_type']=='video');a=next(s for s in probe['streams'] if s['codec_type']=='audio')
 check=subprocess.run(['ffmpeg','-v','error','-i',str(f),'-map','0:v:0','-map','0:a:0','-f','null','-'],capture_output=True,text=True)
 report['outputs'][f.name]={'video_duration':float(v['duration']),'container_duration':float(probe['format']['duration']),'frames':int(v['nb_frames']),'expected_frames':frames,'width':v['width'],'height':v['height'],'fps':v['avg_frame_rate'],'video_codec':v['codec_name'],'audio_codec':a['codec_name'],'decode_pass':check.returncode==0 and not check.stderr,'decode_log':check.stderr,'sha256':sha(f)}
 print(f.name,report['outputs'][f.name],flush=True)
def pcm(path):
 return np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-map','0:a:0','-ac','1','-ar','24000','-f','f32le','-']),dtype=np.float32)
for s,f in zip(scenes,files):
 original=pcm(P/'public/assets/audio'/s['audio']);rendered=pcm(f);n=min(len(original),len(rendered));x=original[:n];y=rendered[:n]
 report['tts_audio'][f.name]={'zero_lag_correlation':float(np.corrcoef(x,y)[0,1]),'source_samples':len(original),'output_samples':len(rendered),'speed_change':False}
ending=P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4';final=files[-1];start=sum(s['frames'] for s in scenes)
def framehash(path,skip=0):
 cmd=['ffmpeg','-v','error','-i',str(path),'-an','-vf',f'select=gte(n\\,{skip}),format=rgb24','-fps_mode','passthrough','-c:v','rawvideo','-f','framemd5','-']
 data=subprocess.check_output(cmd,text=True)
 return [l.rsplit(',',1)[1].strip() for l in data.splitlines() if not l.startswith('#') and ',' in l]
h1=framehash(ending);h2=framehash(final,start)
report['ending']['decoded_rgb_frames_identical']=h1==h2
report['ending']['canonical_frame_count']=len(h1);report['ending']['final_ending_frame_count']=len(h2)
def packets(path):
 d=json.loads(subprocess.check_output(['ffprobe','-v','error','-select_streams','a:0','-show_packets','-show_data_hash','sha256','-show_entries','packet=data_hash,pts_time','-of','json',str(path)]))
 return d['packets']
p1=packets(ending);p2=packets(final)
report['ending']['aac_packet_payloads_identical']= [p['data_hash'] for p in p1]==[p['data_hash'] for p in p2[-len(p1):]]
report['ending']['canonical_aac_packet_count']=len(p1)
report['ending']['source_sha256']=sha(ending)
report['total_frames']=start+170;report['total_seconds']=(start+170)/30
(Q/'render-qa.json').write_text(json.dumps(report,indent=2));print(json.dumps(report['tts_audio'],indent=2));print(json.dumps(report['ending'],indent=2))
assert all(report['inputs_preserved'].values())
assert all(r['decode_pass'] and r['frames']==r['expected_frames'] and r['width']==1080 and r['height']==1920 and r['fps']=='30/1' for r in report['outputs'].values())
assert all(r['zero_lag_correlation']>.98 for r in report['tts_audio'].values())
assert report['ending']['decoded_rgb_frames_identical']
# One continuous AAC encode avoids repeated priming padding. Validate content instead.
y=pcm(final);offset=0;sync={}
for s in scenes:
 x=pcm(P/'public/assets/audio'/s['audio']);z=y[offset*800:offset*800+len(x)]
 sync[s['audio']]=float(np.corrcoef(x,z)[0,1]);offset+=s['frames']
x=pcm(ending);z=y[start*800:start*800+len(x)]
report['ending']['decoded_audio_correlation']=float(np.corrcoef(x,z)[0,1])
report['full_audio_zero_lag_correlations']=sync
(Q/'render-qa.json').write_text(json.dumps(report,indent=2))
print('Full audio:',sync,'Ending audio:',report['ending']['decoded_audio_correlation'])
assert all(c>.98 for c in sync.values())
assert report['ending']['decoded_audio_correlation']>.98
