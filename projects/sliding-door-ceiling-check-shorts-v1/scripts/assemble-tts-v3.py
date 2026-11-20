from pathlib import Path
import subprocess,json,re,wave,hashlib
p=Path(__file__).resolve().parents[1];a=p/'public/assets/audio';rate=24000

def decode(f):return subprocess.run(['ffmpeg','-v','error','-i',str(f),'-f','s16le','-ac','1','-ar','24000','pipe:1'],capture_output=True,check=True).stdout

def sil(f,threshold='-50dB'):
 s=subprocess.run(['ffmpeg','-hide_banner','-i',str(f),'-af',f'silencedetect=noise={threshold}:d=0.03','-f','null','-'],capture_output=True,text=True,check=True).stderr
 return [(float(x),float(y)) for x,y in zip(re.findall(r'silence_start: ([0-9.]+)',s),re.findall(r'silence_end: ([0-9.]+)',s))]

def save(name,pcm):
 f=a/(name+'.wav');assert not f.exists()
 with wave.open(str(f),'wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(rate);w.writeframes(pcm)
 subprocess.run(['ffmpeg','-v','error','-n','-i',str(f),'-c:a','libmp3lame','-b:a','192k',str(a/(name+'.mp3'))],check=True)
 subprocess.run(['ffmpeg','-v','error','-i',str(a/(name+'.mp3')),'-f','null','-'],check=True)
 return f
A=a/'scene01-tts-v3-part-a.mp3';B=a/'scene01-tts-v3-part-b.mp3';pa=decode(A);pb=decode(B);sa=sil(A);sb=sil(B)
assert sa[-1][1]>=len(pa)/48000-.03 and sb[0][0]==0
end=sa[-1][0];start=sb[0][1];guard=.06
cutA=round((end+guard)*rate);cutB=round((start-guard)*rate)
assert cutA<=len(pa)//2 and cutB>=0
report={'method':'Part A/B; same voice rate1 pitch omitted; only boundary silence trimmed; 60ms guards retained','part_a_end_detected':end,'part_b_start_detected':start,'a_cut_sample':cutA,'b_cut_sample':cutB,'candidates':[]}
clips=[]
for gap,label in [(.25,'025'),(.35,'035')]:
 preserved=(cutA/rate-end)+(start-cutB/rate);n=round((gap-preserved)*rate);pcm=pa[:cutA*2]+b'\0'*(n*2)+pb[cutB*2:];name='scene01-tts-v3-pause-'+label
 f=save(name,pcm);seam=cutA/rate;intervals=sil(a/(name+'.mp3'));matching=[(x,y) for x,y in intervals if x<=seam<=y]
 report['candidates'].append({'file':name+'.mp3','target_gap':gap,'inserted_digital_silence':n/rate,'measured_join_silence':matching,'duration':len(pcm)/48000});clips.append(pcm)
# provisional 0.25s candidate for context, not a listening-based approval
full=clips[0]
for name in ['scene02-tts-v2.mp3','scene03-tts-v1.mp3','scene04-tts-v1.mp3']:full+=b'\0'*7200+decode(a/name)
save('full-tts-qa-v3',full);report['full_duration']=len(full)/48000;report['full_selection']='0.25 s provisional; scenes2 v2,3 v1,4 v1; ending excluded';report['listening']='not verified; user approval pending'
old=json.loads((p/'docs/tts-v3-preservation.json').read_text())
for name,h in old.items():assert hashlib.sha256((a/name).read_bytes()).hexdigest()==h,name
report['prior_audio_hashes']='all unchanged'
with (p/'docs/audio-qa-v3.json').open('x') as f:json.dump(report,f,ensure_ascii=False,indent=2)
print(json.dumps(report,ensure_ascii=False,indent=2))
