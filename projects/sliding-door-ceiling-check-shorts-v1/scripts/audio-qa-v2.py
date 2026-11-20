from pathlib import Path
import subprocess,json,re,hashlib,wave
p=Path(__file__).resolve().parents[1];a=p/'public/assets/audio';rate=24000
saved=json.loads((p/'docs/tts-v2-preservation.json').read_text())
for name,h in saved.items():assert hashlib.sha256((a/name).read_bytes()).hexdigest()==h,name
names=['scene01-tts-v2.mp3','scene02-tts-v2.mp3','scene03-tts-v1.mp3','scene04-tts-v1.mp3'];blocks=[];rows=[]
for i,name in enumerate(names):
 f=a/name;pcm=subprocess.run(['ffmpeg','-v','error','-i',str(f),'-f','s16le','-ac','1','-ar','24000','pipe:1'],capture_output=True,check=True).stdout;dur=len(pcm)/48000
 analyses={}
 for threshold,minimum in [('-30dB','0.1'),('-40dB','0.08')]:
  log=subprocess.run(['ffmpeg','-hide_banner','-i',str(f),'-af',f'silencedetect=noise={threshold}:d={minimum}','-f','null','-'],capture_output=True,text=True,check=True).stderr
  starts=[float(x) for x in re.findall(r'silence_start: ([0-9.]+)',log)]; ends=[float(x) for x in re.findall(r'silence_end: ([0-9.]+)',log)];pairs=list(zip(starts,ends));first=ends[0] if starts and starts[0]<.02 else 0;last=starts[-1] if ends and ends[-1]>=dur-.03 else dur
  analyses[threshold]={'intervals':pairs,'speech_start':first,'speech_end':last,'speech_span':last-first}
 rows.append({'scene':i+1,'file':name,'duration':dur,'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'silence':analyses})
 blocks.append(pcm)
 if i<3:blocks.append(b'\0'*7200) # 0.15 seconds, between scenes only
out=a/'full-tts-qa-v2.wav';assert not out.exists()
with wave.open(str(out),'wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(rate);w.writeframes(b''.join(blocks))
subprocess.run(['ffmpeg','-v','error','-n','-i',str(out),'-c:a','libmp3lame','-b:a','192k',str(a/'full-tts-qa-v2.mp3')],check=True)
subprocess.run(['ffmpeg','-v','error','-i',str(a/'full-tts-qa-v2.mp3'),'-f','null','-'],check=True)
d={'files':rows,'full_duration':sum(map(len,blocks))/48000,'composition':names,'ending_included':False,'edits':'none; 0.15s between scenes only','preservation':'all prior audio hashes unchanged','semantic_listening':'not verified; user review required; silence timestamps not aligned to words'}
with (p/'docs/audio-qa-v2.json').open('x') as f:json.dump(d,f,ensure_ascii=False,indent=2)
print(json.dumps(d,ensure_ascii=False,indent=2))
