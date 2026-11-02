from pathlib import Path
import subprocess,json,re,array,hashlib,wave
P=Path(__file__).resolve().parents[1];A=P/'public/assets/audio'
def pcm(f):return subprocess.check_output(['ffmpeg','-v','error','-i',str(f),'-f','s16le','-ac','1','-ar','24000','-'])
x=pcm(A/'scene05-tts-revision-v2.mp3')
# Keep 100ms at each edge of the measured first internal silent interval.
left=round((1.515917+0.1)*24000);right=round((2.193542-0.1)*24000)
y=x[:left*2]+x[right*2:]
w=A/'scene05-tts-revision-v3-pause200ms.wav'
assert not w.exists()
with wave.open(str(w),'wb') as f:f.setnchannels(1);f.setsampwidth(2);f.setframerate(24000);f.writeframes(y)
f5=A/'scene05-tts-revision-v3-pause200ms.mp3'
subprocess.run(['ffmpeg','-v','error','-n','-i',str(w),'-c:a','libmp3lame','-b:a','192k',str(f5)],check=True)
files=[A/'scene01-tts-script-v3-take-v1.mp3',A/'scene02-tts-revision-v2.mp3',A/'scene03-tts-script-v3-take-v1.mp3',A/'scene04-tts-script-v3-take-v1.mp3',f5]
args=[]
for f in files:args+=['-i',str(f)]
full=A/'full-tts-qa-revision-v2.mp3'
subprocess.run(['ffmpeg','-v','error','-n',*args,'-filter_complex',''.join(f'[{i}:a]' for i in range(5))+'concat=n=5:v=0:a=1[out]','-map','[out]','-c:a','libmp3lame','-b:a','192k',str(full)],check=True)
r=[]
for f in [files[1],f5,full]:
 x1=array.array('h',pcm(f));duration=len(x1)/24000
 q=subprocess.run(['ffmpeg','-hide_banner','-nostats','-i',str(f),'-af','silencedetect=noise=-40dB:d=0.08,loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True,check=True).stderr
 l=json.loads(re.findall(r'\{[^{}]+"input_i"[^{}]+\}',q,re.S)[-1]);ss=[float(v) for v in re.findall(r'silence_start: ([0-9.]+)',q)];ee=[float(v) for v in re.findall(r'silence_end: ([0-9.]+)',q)]
 r.append({'file':f.name,'duration_s':duration,'silences':[{'start':s,'end':e,'duration':e-s} for s,e in zip(ss,ee)],'LUFS':float(l['input_i']),'true_peak_dBTP':float(l['input_tp']),'fullscale_samples':sum(v>=32767 or v<=-32768 for v in x1),'decode':'PASS','listening':'PENDING','sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
before=json.loads((P/'docs/tts-revision-v2-before-sha256.json').read_text())
assert all(hashlib.sha256((P/f).read_bytes()).hexdigest()==h for f,h in before.items())
out={'files':r,'concat_order':[f.name for f in files],'removed_s':(right-left)/24000,'retained_gap_target_s':0.2,'method':'SSML single utterance; trim middle of first detected internal silence only; no speech stretch, split synthesis, gain or other pause edits','old_files_hashes_unchanged':True,'voice':'ko-KR-Chirp3-HD-Alnilam','speakingRate':1.0}
with (P/'docs/tts-revision-v2-final-qa.json').open('x') as f:json.dump(out,f,ensure_ascii=False,indent=2)
print(json.dumps(out,ensure_ascii=False,indent=2))
