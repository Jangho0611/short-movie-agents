"""Preserve source audio; shorten only detected edge silence, never internal pauses."""
from pathlib import Path
import subprocess, json, re, hashlib
P=Path(__file__).resolve().parents[1]; A=P/'public/assets/audio'
def duration(f):
    return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(f)]))
def silence(f,threshold=-45,minimum=.08):
    r=subprocess.run(['ffmpeg','-v','info','-i',str(f),'-af',f'silencedetect=noise={threshold}dB:d={minimum}','-f','null','-'],capture_output=True,text=True,check=True)
    return [(float(s),float(e)) for s,e in re.findall(r'silence_start: ([0-9.]+).*?silence_end: ([0-9.]+)',r.stderr,re.S)]
def sha(f):return hashlib.sha256(f.read_bytes()).hexdigest()
records=[]; files=[]
for n in range(1,6):
    src=A/f'scene{n:02}-tts-v2-source.mp3'; out=A/f'scene{n:02}-tts-v2.mp3'
    d=duration(src); spans=silence(src)
    lead=spans[0][1] if spans and spans[0][0]==0 else 0
    tail=d-spans[-1][0] if spans and abs(spans[-1][1]-d)<.03 else 0
    start=max(0,min(lead/2,lead-.15)); cuttail=max(0,min(tail/2,tail-.12)); end=d-cuttail
    subprocess.run(['ffmpeg','-v','error','-n','-i',str(src),'-af',f'atrim=start={start:.9f}:end={end:.9f},asetpts=PTS-STARTPTS','-c:a','libmp3lame','-b:a','192k',str(out)],check=True)
    records.append({'scene':n,'source':src.name,'sourceSha256':sha(src),'sourceDuration':d,'detectedSilence45dB':spans,'trimStart':start,'trimEnd':cuttail,'file':out.name,'sha256':sha(out),'duration':duration(out),'silence40dB':silence(out,-40,.15),'decode':'PASS'})
    files.append(out)
cmd=['ffmpeg','-v','error','-n']
for f in files:cmd+=['-i',str(f)]
cmd+=['-filter_complex',''.join(f'[{i}:a]' for i in range(5))+'concat=n=5:v=0:a=1[out]','-map','[out]','-c:a','libmp3lame','-b:a','192k',str(A/'full-tts-qa-v2.mp3')]
subprocess.run(cmd,check=True)
full=A/'full-tts-qa-v2.mp3'
qa={'voice':'ko-KR-Chirp3-HD-Alnilam','rate':1.0,'pitch':'not set','records':records,'fullDuration':duration(full),'fullSilence40dB':silence(full,-40,.15),'fullSha256':sha(full),'internalEdits':False,'insertedSilence':False,'listeningQA':'NOT PERFORMED: user approval pending'}
baseline=json.loads((P/'docs/tts-v2-v1-baseline.json').read_text())
assert all(sha(A/n)==h for n,h in baseline.items())
qa['v1Preserved']=True
(P/'docs/tts-v2-qa.json').write_text(json.dumps(qa,ensure_ascii=False,indent=2))
print(json.dumps(qa,ensure_ascii=False,indent=2))
