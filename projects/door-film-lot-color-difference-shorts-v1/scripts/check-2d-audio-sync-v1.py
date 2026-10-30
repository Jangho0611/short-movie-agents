import numpy as np,json,subprocess
from pathlib import Path
p=Path('/Users/janghokim/Documents/short-movie-agents/projects/door-film-lot-color-difference-shorts-v1');r=json.loads((p/'docs/2d-preview-v1-qa.json').read_text());s=json.loads((p/'src/timeline-v1.json').read_text())
def pcm(f):return np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-i',str(f),'-vn','-ar','24000','-ac','1','-f','f32le','-']),dtype=np.float32).astype(float)
results=[]
full=pcm(p/'public/assets/video/door-film-lot-2d-preview-v1.mp4');offset=0
for i,item in enumerate(r['media'][:7]):
 x=pcm(p/'public/assets/audio'/(s[i]['file'] if i<6 else 'ending-approved-v3.mp3'));y=full[round(offset*24000):round(offset*24000)+len(x)+2400]
 n=1<<(len(x)+len(y)-1).bit_length();cross=np.fft.irfft(np.fft.rfft(y,n)*np.conj(np.fft.rfft(x,n)),n);lags=np.arange(-2400,2401);lag=int(lags[np.argmax(cross[lags%n])]);start=max(0,lag);xs=max(0,-lag);length=min(len(x)-xs,len(y)-start);corr=float(np.corrcoef(x[xs:xs+length],y[start:start+length])[0,1]);results.append({'scene':i+1,'delaySeconds':lag/24000,'alignedCorrelation':corr});offset+=item['videoSeconds']
print(results);r['audioAlignmentMeasured']=results;r['audioAlignmentNote']='AAC/Remotion offset measured; whole-scene captions are continuously visible. Not human lip-sync verification.';(p/'docs/2d-preview-v1-qa.json').write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
