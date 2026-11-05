import json,re,subprocess,wave,hashlib
from pathlib import Path
r=Path(__file__).resolve().parents[1]; d=r/'public/assets/audio'
def run(args):return subprocess.run(args,capture_output=True,text=True,check=True)
rows=[]; pcm=[]
for i in range(1,6):
 src=d/f'scene{i:02d}-tts-v3.wav'; out=d/f'scene{i:02d}-tts-review-v3.wav'
 assert not out.exists()
 with wave.open(str(src)) as w:dur=w.getnframes()/w.getframerate()
 log=run(['ffmpeg','-hide_banner','-i',str(src),'-af','silencedetect=noise=-40dB:d=0.08','-f','null','-']).stderr
 starts=[float(x) for x in re.findall(r'silence_start: ([0-9.]+)',log)]
 ends=[float(x) for x in re.findall(r'silence_end: ([0-9.]+)',log)]
 pauses=list(zip(starts,ends)); onset=ends[0] if starts and starts[0]==0 else 0; end=starts[-1] if ends and abs(ends[-1]-dur)<.01 else dur
 trimstart=max(0,onset-.12); trimend=min(dur,end+.18)
 filt=f'atrim=start={trimstart}:end={trimend},asetpts=PTS-STARTPTS'
 log=run(['ffmpeg','-hide_banner','-i',str(src),'-af',filt+',loudnorm=I=-18:TP=-2:LRA=11:print_format=json','-f','null','-']).stderr
 m=json.loads(log[log.rfind('{'):log.rfind('}')+1])
 norm=f"loudnorm=I=-18:TP=-2:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true"
 run(['ffmpeg','-v','error','-n','-i',str(src),'-af',filt+','+norm,'-ar','24000','-ac','1','-c:a','pcm_s16le',str(out)])
 mp3=out.with_suffix('.mp3')
 run(['ffmpeg','-v','error','-n','-i',str(out),'-c:a','libmp3lame','-b:a','192k',str(mp3)])
 with wave.open(str(out)) as w:pcm.append(w.readframes(w.getnframes()))
 rows.append(dict(scene=i,duration=dur,onset=onset,end=end,span=end-onset,leading=onset,trailing=dur-end,pauses=pauses,trim_start=trimstart,trim_end=trimend,loudness_input=m,sha256=hashlib.sha256(src.read_bytes()).hexdigest()))
full=d/'full-tts-qa-v3.wav';assert not full.exists()
# retained .18s tail + .12s head + .15s inserted = .45s speech-to-speech gap
with wave.open(str(full),'wb') as w:
 w.setnchannels(1);w.setsampwidth(2);w.setframerate(24000)
 for i,b in enumerate(pcm):
  if i:w.writeframes(b'\0'*(int(.15*24000)*2))
  w.writeframes(b)
run(['ffmpeg','-v','error','-n','-i',str(full),'-c:a','libmp3lame','-b:a','192k',str(full.with_suffix('.mp3'))])
with (r/'scripts/tts-candidates-v3-measurements.json').open('x') as f:json.dump(rows,f,ensure_ascii=False,indent=2)
print(json.dumps(rows,ensure_ascii=False,indent=2))
with wave.open(str(full)) as w:print('FULL_DURATION',w.getnframes()/w.getframerate())
