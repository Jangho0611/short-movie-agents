from pathlib import Path
import subprocess,json,re,hashlib,wave,math
p=Path(__file__).resolve().parents[1]; a=p/'public/assets/audio'
files=[a/f'scene{i:02d}-tts-v1.mp3' for i in range(1,5)]+[a/'ending-approved-v3.mp3']
report=[]; blocks=[];rate=24000
for i,f in enumerate(files,1):
 pcm=subprocess.run(['ffmpeg','-v','error','-i',str(f),'-f','s16le','-ac','1','-ar',str(rate),'pipe:1'],capture_output=True,check=True).stdout
 dur=len(pcm)/2/rate
 check=subprocess.run(['ffmpeg','-hide_banner','-i',str(f),'-af','silencedetect=noise=-40dB:d=0.08,volumedetect','-f','null','-'],capture_output=True,text=True,check=True).stderr
 starts=[float(x) for x in re.findall(r'silence_start: ([0-9.]+)',check)]; ends=[float(x) for x in re.findall(r'silence_end: ([0-9.]+)',check)]
 first=ends[0] if starts and starts[0]<0.02 and ends else 0
 last=starts[-1] if starts and ends and ends[-1]>=dur-.03 else dur
 peak=re.findall(r'max_volume: ([^\n]+)',check)
 report.append({'scene':i,'file':str(f.relative_to(p)),'decoded_duration_seconds':dur,'detected_start':first,'detected_end':last,'detected_span_seconds':last-first,'silence_starts':starts,'silence_ends':ends,'max_volume':peak,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
 if i<5: blocks.append(pcm+b'\0'*int(.15*rate)*2)
 else: blocks.append(pcm+b'\0'*max(0,(136000-len(pcm)//2))*2)
with wave.open(str(a/'full-tts-qa-v1.wav'),'wb') as w:
 w.setnchannels(1);w.setsampwidth(2);w.setframerate(rate);w.writeframes(b''.join(blocks))
subprocess.run(['ffmpeg','-v','error','-n','-i',str(a/'full-tts-qa-v1.wav'),'-c:a','libmp3lame','-b:a','192k',str(a/'full-tts-qa-v1.mp3')],check=True)
subprocess.run(['ffmpeg','-v','error','-i',str(a/'full-tts-qa-v1.mp3'),'-f','null','-'],check=True)
out={'voice':'ko-KR-Chirp3-HD-Alnilam','speakingRate':1.0,'pitch':'omitted','files':report,'concat':'original decoded audio, no trim/gain/speed/pitch edits; 0.15 s after scenes 1-4; ending pad to 170/30 s','full_duration_seconds':sum(len(x) for x in blocks)/2/rate,'listening_status':'pending user; agent cannot directly hear audio; acoustic analysis is not pronunciation verification'}
(p/'docs/audio-qa-v1.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps(out,ensure_ascii=False,indent=2))
