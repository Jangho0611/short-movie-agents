from pathlib import Path
import subprocess,json,re,array,math,hashlib
P=Path(__file__).resolve().parents[1];A=P/'public/assets/audio'
files=sorted(A.glob('scene*-tts-script-v3-take-v1.mp3'))
assert len(files)==5
# No padding, trimming, speed or gain change; full QA encodes concatenated decoded audio.
inputs=[]
for f in files:inputs+=['-i',str(f)]
full=A/'full-tts-qa-script-v3-take-v1.mp3'
subprocess.run(['ffmpeg','-v','error','-n',*inputs,'-filter_complex',''.join(f'[{i}:a]' for i in range(5))+'concat=n=5:v=0:a=1[out]','-map','[out]','-c:a','libmp3lame','-b:a','192k',str(full)],check=True)
report=[]
for f in files+[full,P/'public/daesan-ending/audio/ending-approved-v3.mp3']:
 probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(f)]))
 pcm=subprocess.run(['ffmpeg','-v','error','-i',str(f),'-f','s16le','-ac','1','-ar','24000','-'],capture_output=True,check=True).stdout
 x=array.array('h',pcm);peak=max(abs(v) for v in x);duration=len(x)/24000
 q=subprocess.run(['ffmpeg','-hide_banner','-nostats','-i',str(f),'-af','silencedetect=noise=-40dB:d=0.12,loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True,check=True).stderr
 loud=json.loads(re.findall(r'\{[^{}]+"input_i"[^{}]+\}',q,re.S)[-1])
 starts=[float(v) for v in re.findall(r'silence_start: ([0-9.]+)',q)];ends=[float(v) for v in re.findall(r'silence_end: ([0-9.]+)',q)]
 if len(starts)>len(ends):ends.append(duration)
 silent=[{'start':s,'end':e,'duration':e-s,'internal':s>0.03 and e<duration-0.03} for s,e in zip(starts,ends)]
 report.append({'file':str(f.relative_to(P)),'container_duration_s':float(probe['format']['duration']),'decoded_duration_s':duration,'sample_rate':probe['streams'][0]['sample_rate'],'channels':probe['streams'][0]['channels'],'peak_dbfs':20*math.log10(peak/32768) if peak else None,'full_scale_samples':sum(v>=32767 or v<=-32768 for v in x),'integrated_lufs':float(loud['input_i']),'true_peak_dbtp':float(loud['input_tp']),'silence_threshold':'-40 dB / >=0.12 s','silences':silent,'decode':'PASS','sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'pronunciation_word_internal_pauses_naturalness':'USER_LISTENING_REQUIRED'})
(P/'docs/audio-qa-v1.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
for r in report:print(Path(r['file']).name,'duration',round(r['decoded_duration_s'],3),'LUFS',r['integrated_lufs'],'TP',r['true_peak_dbtp'],'clipped',r['full_scale_samples'],'silences',r['silences'])
