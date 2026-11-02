from pathlib import Path
import subprocess,json,hashlib
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';final=v/'younglim-flag-hinge-preview-v1.mp4';ending=p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
def run(a):return subprocess.check_output(a,stderr=subprocess.PIPE)
def md5frames(f,flt=None):
 a=['ffmpeg','-v','error','-i',str(f),'-an']
 if flt:a+=['-vf',flt]
 a+=['-pix_fmt','rgb24','-f','framemd5','-']
 return [x.split(',')[-1].strip() for x in run(a).decode().splitlines() if x and not x.startswith('#')]
qa={'files':[]}
for f in [final]+[v/f'scene{i:02}-preview-v1.mp4' for i in range(1,6)]:
 info=json.loads(run(['ffprobe','-v','error','-count_frames','-show_entries','stream=codec_name,width,height,r_frame_rate,nb_read_frames,sample_rate,channels,duration:format=duration','-of','json',str(f)]))
 run(['ffmpeg','-v','error','-i',str(f),'-f','null','-']);qa['files'].append({'file':f.name,'probe':info,'full_decode':'PASS'})
a=md5frames(final,'trim=start_frame=762,setpts=PTS-STARTPTS');b=md5frames(ending)
qa['ending']={'frame_count':len(a),'reference_frame_count':len(b),'all_rgb_frame_hashes_equal':a==b,'canonical_sha256':hashlib.sha256(ending.read_bytes()).hexdigest()}
m=json.loads((p/'docs/slim-copy-manifest.json').read_text())
qa['ending_dependencies']={x['destination']:hashlib.sha256((p/x['destination']).read_bytes()).hexdigest()==x.get('destination_sha256',x['sha256']) for x in m if x['destination'].startswith(('src/daesan-ending/','public/daesan-ending/'))}
qa['tts_order']=json.loads((p/'docs/tts-revision-v2-final-qa.json').read_text())['concat_order']
qa['source_sha256']={a:hashlib.sha256((p/'public/assets/audio'/a).read_bytes()).hexdigest() for a in qa['tts_order']}
qa['scene_frames']=[76,173,154,208,151];qa['scene5_pause_original_s']=[1.515875,1.715917];qa['scene5_conclusion_reveal_s']=[52/30,58/30]
qa['listening_naturalness']='USER_REVIEW_REQUIRED';qa['image_rights']='User confirmed manufacturer image use allowed';qa['hero_effective_height_px']=800
with (p/'docs/preview-v1-qa.json').open('x') as f:json.dump(qa,f,ensure_ascii=False,indent=2)
print(json.dumps(qa,ensure_ascii=False,indent=2))
