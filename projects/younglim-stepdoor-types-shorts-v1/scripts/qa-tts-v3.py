from pathlib import Path
import subprocess as sp,json,array,math
p=Path(__file__).resolve().parents[1];a=p/'public/assets/audio';rows=[]
for i in range(1,8):
 f=a/f'scene{i:02}-tts-v3.mp3'
 duration=float(sp.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(f)]))
 r=sp.run(['ffmpeg','-hide_banner','-i',str(f),'-af','loudnorm=I=-18:TP=-1.5:LRA=7:print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
 j,_=json.JSONDecoder().raw_decode(r.stderr[r.stderr.rfind('{'):])
 samples=array.array('f',sp.check_output(['ffmpeg','-v','error','-i',str(f),'-ac','1','-ar','24000','-f','f32le','-']))
 peak=max(abs(x) for x in samples)
 rows.append({'scene':i,'file':f.name,'duration':duration,'LUFS':float(j['input_i']),'sample_peak_dBFS':20*math.log10(peak),'true_peak_dBTP':float(j['input_tp']),'samples_over_0dBFS':sum(abs(x)>1 for x in samples),'loudnorm':j})
print(json.dumps(rows,indent=2))
with (p/'docs/tts-v3-signal-qa.json').open('x') as f:json.dump(rows,f,indent=2)
if any(r['samples_over_0dBFS'] or r['true_peak_dBTP']>0 for r in rows):
 print('STOP MIX: source overlevel needs investigation');raise SystemExit(2)
# Original MP3s remain untouched. Separate per-scene mix WAVs; measured two-pass normalization.
for r in rows:
 j=r['loudnorm']; filt=f"loudnorm=I=-18:TP=-1.5:LRA=7:measured_I={j['input_i']}:measured_TP={j['input_tp']}:measured_LRA={j['input_lra']}:measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true"
 sp.run(['ffmpeg','-v','error','-n','-i',str(a/r['file']),'-af',filt,'-ar','48000','-ac','2','-c:a','pcm_s24le',str(a/f"scene{r['scene']:02}-tts-v3-mix.wav")],check=True)
cmd=['ffmpeg','-v','error','-n']
for r in rows:cmd+=['-i',str(a/f"scene{r['scene']:02}-tts-v3-mix.wav")]
filters=[f'[{i}:a]apad=pad_dur=0.22,asetpts=PTS-STARTPTS[a{i}]' for i in range(7)]
filters+=[''.join(f'[a{i}]' for i in range(7))+'concat=n=7:v=0:a=1[out]']
sp.run(cmd+['-filter_complex',';'.join(filters),'-map','[out]','-c:a','libmp3lame','-b:a','192k',str(a/'full-tts-qa-v3.mp3')],check=True)
r=sp.run(['ffmpeg','-hide_banner','-i',str(a/'full-tts-qa-v3.mp3'),'-af','loudnorm=I=-18:TP=-1.5:LRA=7:print_format=json','-f','null','-'],capture_output=True,text=True,check=True)
j,_=json.JSONDecoder().raw_decode(r.stderr[r.stderr.rfind('{'):]);print('FULL MIX',j)
with (p/'docs/tts-v3-full-mix-qa.json').open('x') as f:json.dump(j,f,indent=2)
