from pathlib import Path
import subprocess,json,hashlib
P=Path(__file__).resolve().parents[1];Q=P/'qa/preview-v2';V=P/'public/assets/video'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def run(cmd):return subprocess.check_output(cmd,text=True)
r={'preservation':{},'outputs':{},'comparison':{}}
base=json.loads((Q/'before-sha256.json').read_text())
for f,h in base.items():
 if f!='src/index.tsx':r['preservation'][f]=sha(P/f)==h
before=(Q/'index-preview-v1.tsx').read_text();after=(P/'src/index.tsx').read_text()
def without_scene3(s):
 a=s.index(' {scene===3&&');b=s.index(' {scene===4&&',a)
 return (s[:a]+s[b:]).replace("import {Scene3Visual} from './Scene3Visual';\n",'')
r['comparison']['non_scene3_source_unchanged']=without_scene3(before)==without_scene3(after)
for name,frames in [('scene03-preview-v2.mp4',166),('plywood-quality-change-preview-v2.mp4',1061)]:
 f=V/name;d=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]));v=next(s for s in d['streams'] if s['codec_type']=='video');a=next(s for s in d['streams'] if s['codec_type']=='audio')
 dec=subprocess.run(['ffmpeg','-v','error','-i',str(f),'-map','0:v','-map','0:a','-f','null','-'],capture_output=True,text=True)
 r['outputs'][name]={'width':v['width'],'height':v['height'],'fps':v['avg_frame_rate'],'frames':int(v['nb_frames']),'expected_frames':frames,'duration':float(d['format']['duration']),'audio_start':a['start_time'],'video_start':v['start_time'],'decode_pass':dec.returncode==0 and not dec.stderr,'decode_log':dec.stderr,'sha256':sha(f)}
def hashes(f):
 text=run(['ffmpeg','-v','error','-i',str(f),'-an','-vf','format=rgb24','-c:v','rawvideo','-f','framemd5','-'])
 return [l.rsplit(',',1)[-1].strip() for l in text.splitlines() if l and not l.startswith('#')]
a=hashes(V/'plywood-quality-change-preview-v1.mp4');b=hashes(V/'plywood-quality-change-preview-v2.mp4')
changed=[i for i,(x,y) in enumerate(zip(a,b)) if x!=y]
r['comparison']['frame_count_equal']=len(a)==len(b)==1061
r['comparison']['changed_frame_count']=len(changed)
r['comparison']['changed_frame_first']=min(changed);r['comparison']['changed_frame_last']=max(changed)
r['comparison']['non_scene3_frames_pixel_identical']=all(a[i]==b[i] for i in range(1061) if not 293<=i<459)
r['comparison']['ending_170_frames_pixel_identical']=a[-170:]==b[-170:]
def packet_hashes(f):
 d=json.loads(run(['ffprobe','-v','error','-select_streams','a:0','-show_packets','-show_data_hash','sha256','-show_entries','packet=data_hash,pts,dts,duration','-of','json',str(f)]))
 return d['packets']
for stem in ['scene03-preview','plywood-quality-change-preview']:
 r['comparison'][stem+'_aac_packets_and_timestamps_identical']=packet_hashes(V/f'{stem}-v1.mp4')==packet_hashes(V/f'{stem}-v2.mp4')
r['timing']=json.loads((P/'src/scene03-timing-v2.json').read_text())
(Q/'qa-results.json').write_text(json.dumps(r,ensure_ascii=False,indent=2))
print(json.dumps({'preserved_files':len(r['preservation']),'all_preserved':all(r['preservation'].values()),'outputs':r['outputs'],'comparison':r['comparison']},indent=2))
assert all(r['preservation'].values())
assert all(v['decode_pass'] and v['frames']==v['expected_frames'] and (v['width'],v['height'],v['fps'])==(1080,1920,'30/1') for v in r['outputs'].values())
assert r['comparison']['non_scene3_source_unchanged'] and r['comparison']['non_scene3_frames_pixel_identical']
assert r['comparison']['scene03-preview_aac_packets_and_timestamps_identical']
assert r['comparison']['plywood-quality-change-preview_aac_packets_and_timestamps_identical']
