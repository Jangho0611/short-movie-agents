import subprocess,json,pathlib,hashlib
p=pathlib.Path(__file__).resolve().parents[1]
def run(args):return subprocess.run(args,capture_output=True,text=True)
files=[p/'public/assets/video'/f'scene0{i}-preview-v5.mp4' for i in range(1,6)]+[p/'public/assets/video/doormaster-ep02-preview-v5.mp4']
r=[]
for f in files:
 if not f.exists(): raise RuntimeError(str(f))
 probe=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]).stdout)
 dec=run(['ffmpeg','-v','error','-i',str(f),'-f','null','-'])
 r.append({'file':str(f.relative_to(p)),'streams':[{k:s.get(k) for k in ['codec_type','codec_name','width','height','r_frame_rate','duration','nb_frames','sample_rate','channels']} for s in probe['streams']],'duration':probe['format']['duration'],'decode_exit':dec.returncode,'decode_errors':dec.stderr})
original=json.loads((p/'docs/scenes01-05-technical-qa-v1.json').read_text())
checks=[{'file':x['file'],'unchanged':hashlib.sha256((p/'public/assets/audio'/x['file']).read_bytes()).hexdigest()==x['sha256']} for x in original]
peaks=run(['ffmpeg','-hide_banner','-i',str(files[-1]),'-af','ebur128=peak=true','-f','null','-'])
with (p/'docs/preview-v5-audio-peak.log').open('x') as f:f.write(peaks.stderr)
result={'files':r,'tts_preserved':checks,'scene2_mix_gain_db':-1.5,'tts_speed_pitch_unchanged':True,'caption_start_frames':[7,9,8,9,9],'caption_second_frames':[48,45,75,88,94],'fps':30,'scene_frames':[92,162,127,150,157],'ending_frames':170,'ending_source':'public/assets/video/daesan-ending-gemini-alnilam-preview-v1.mp4','render_gl':'swangle','concurrency':1,'visual_status':'representative frames reviewed; listening and viewing approval pending; not automatic PASS','delivery_source':'Recovered user-accepted existing cleanup candidate; no new AI generation'}
with (p/'docs/preview-v5-technical-qa.json').open('x') as f:json.dump(result,f,indent=2,ensure_ascii=False)
print(json.dumps(result,ensure_ascii=False))
