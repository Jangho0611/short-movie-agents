import pathlib,wave,json,subprocess,re,hashlib
P=pathlib.Path('/Users/janghokim/Documents/short-movie-agents/projects/pocket-door-handle-reinforcement-shorts-v1'); D=P/'public/assets/audio'
names=['scene01-tts-v10.wav','scene02-tts-v4.wav','scene03-tts-v5.wav','scene04-tts-v4.wav','scene05-tts-v4.wav']
rows=[];pieces=[];cursor=0
for i,name in enumerate(names):
 p=D/name
 with wave.open(str(p),'rb') as w:
  params=w.getparams();sr=w.getframerate();raw=w.readframes(w.getnframes());duration=w.getnframes()/sr
 assert params.nchannels==1 and params.sampwidth==2 and sr==24000
 log=subprocess.run(['ffmpeg','-hide_banner','-i',str(p),'-af','silencedetect=noise=-50dB:d=0.08','-f','null','-'],capture_output=True,text=True,check=True).stderr
 starts=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',log)];ends=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',log)]
 onset=ends[0] if starts and starts[0]<.01 and ends else 0
 end=starts[-1] if ends and abs(ends[-1]-duration)<.01 else duration
 a=0 if i==0 else max(0,int((onset-.12)*sr));b=len(raw)//2 if i==0 else min(len(raw)//2,int((end+.18)*sr))
 segment=raw[a*2:b*2]
 loud=subprocess.run(['ffmpeg','-hide_banner','-i',str(p),'-af','loudnorm=I=-18:TP=-2:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True,check=True).stderr
 m=json.JSONDecoder().raw_decode(loud[loud.rfind('{'):])[0]
 row=dict(scene=i+1,file=name,duration=duration,detected_start=onset,detected_end=end,detected_span=end-onset,trim_start=a/sr,trim_end=b/sr,timeline_start=cursor/sr,lufs=m['input_i'],true_peak=m['input_tp'],silence_starts=starts,silence_ends=ends)
 pieces.append(segment);cursor+=len(segment)//2;row['timeline_end']=cursor/sr;rows.append(row)
 if i<4:pieces.append(b'\0\0'*3600);cursor+=3600
out=D/'full-tts-qa-v5.wav'
with out.open('xb') as f:
 with wave.open(f,'wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(24000);w.writeframes(b''.join(pieces))
assert pieces[0]==wave.open(str(D/names[0]),'rb').readframes(99999999)
result=dict(threshold_db=-50,minimum_silence=.08,inserted_gap=.15,rows=rows,duration=cursor/sr)
for i in range(4):
 r=rows[i];n=rows[i+1];r['speech_boundary_gap']=(r['trim_end']-r['detected_end'])+.15+(n['detected_start']-n['trim_start'])
with (P/'scripts/full-tts-qa-v5-analysis.json').open('x') as f:json.dump(result,f,ensure_ascii=False,indent=2)
print(json.dumps(result,ensure_ascii=False,indent=2))
