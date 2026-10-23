import subprocess,tempfile,pathlib
p=pathlib.Path(__file__).resolve().parents[1];v=p/'public/assets/video';a=p/'public/assets/audio'
ns=[92,162,127,150,157,170]
vids=[v/f'scene0{i}-preview-v5.mp4' for i in range(1,6)]+[v/'daesan-ending-gemini-alnilam-preview-v1.mp4']
out=v/'doormaster-ep02-preview-v5.mp4'
assert not out.exists()
def run(x):subprocess.run(x,check=True)
with tempfile.TemporaryDirectory(prefix='ep02-v5-') as t:
 t=pathlib.Path(t); lines=[]
 for i,(f,n) in enumerate(zip(vids,ns)):
  z=t/f'{i}.mp4';run(['ffmpeg','-v','error','-n','-i',str(f),'-map','0:v:0','-an','-c:v','copy','-video_track_timescale','90000',str(z)])
  lines += [f"file '{z}'",f'duration {n/30:.9f}']
 lst=t/'concat.txt';lst.write_text('\n'.join(lines)+'\n')
 cmd=['ffmpeg','-v','warning','-n','-f','concat','-safe','0','-i',str(lst)]
 aud=[a/'scene01-tts-v5.wav']+[a/f'scene0{i}-tts-v1.wav' for i in range(2,6)]+[vids[-1]]
 for f in aud:cmd+=['-i',str(f)]
 filters=[]
 for i,n in enumerate(ns,1):
  gain='volume=-1.5dB,' if i==2 else ''
  filters.append(f'[{i}:a]{gain}aformat=sample_rates=48000:channel_layouts=stereo,apad,atrim=duration={n/30:.9f},asetpts=PTS-STARTPTS[a{i}]')
 filters.append(''.join(f'[a{i}]' for i in range(1,7))+'concat=n=6:v=0:a=1[a]')
 cmd+=['-filter_complex',';'.join(filters),'-map','0:v','-map','[a]','-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)]
 run(cmd)
