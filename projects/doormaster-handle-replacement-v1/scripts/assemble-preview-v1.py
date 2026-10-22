from pathlib import Path
import subprocess,json,wave,hashlib
P=Path(__file__).resolve().parents[1]
V=P/'public/assets/video';A=P/'public/assets/audio'
TMP=Path('/tmp/doormaster-preview-v1-assembly');TMP.mkdir(exist_ok=True)
frames=[111,145,140,225,146];audio=['scene01-tts-v1.mp3','scene02-tts-v1.mp3','scene03-tts-v1.mp3','scene04-tts-v9.mp3','scene05-tts-v4.mp3']
def run(cmd,**kw):return subprocess.run(cmd,check=True,**kw)
def pcm(path):return subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-f','s16le','-ar','48000','-ac','2','-'])
def wav(path,data):
 with path.open('xb') as handle:
  with wave.open(handle,'wb') as w:w.setnchannels(2);w.setsampwidth(2);w.setframerate(48000);w.writeframes(data)
start=0;chunks=[];scenes=[]
for i,(n,name) in enumerate(zip(frames,audio),1):
 raw=pcm(A/name);target=n*1600*4;assert len(raw)<=target
 padded=raw+b'\0'*(target-len(raw));chunks.append(padded)
 w=TMP/f'scene{i:02}-padded.wav';wav(w,padded)
 out=V/f'scene{i:02}-preview-v1.mp4'
 run(['ffmpeg','-v','error','-n','-i',str(V/'handle-body-visual-preview-v1.mp4'),'-i',str(w),'-map','0:v:0','-map','1:a:0','-vf',f'trim=start_frame={start}:end_frame={start+n},setpts=PTS-STARTPTS,scale=in_range=tv:out_range=pc,format=yuvj420p','-frames:v',str(n),'-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuvj420p','-color_range','pc','-video_track_timescale','90000','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t',str(n/30),str(out)])
 scenes.append(out);start+=n
 print('SCENE READY',i,flush=True)
ending=V/'daesan-headquarters-ending-approved-v1.mp4'
cat=TMP/'video-concat.txt'
with cat.open('x') as f:
 for v in scenes+[ending]:f.write("file '"+str(v)+"'\n")
video=TMP/'joined-video.mp4'
# Canonical ending video packets copied, never rendered or encoded again.
run(['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(cat),'-map','0:v:0','-an','-c:v','copy','-video_track_timescale','90000',str(video)])
e=pcm(ending);target=170*1600*4
# Canonical AAC may decode padding beyond nominal duration: permit only silence trimming.
if len(e)>target:
 import numpy as np
 assert max(abs(np.frombuffer(e[target:],dtype='<i2').astype(int)),default=0)<32
 e=e[:target]
e+=b'\0'*(target-len(e));full=b''.join(chunks)+e
mix=TMP/'approved-audio-timeline.wav';wav(mix,full)
out=V/'doormaster-handle-replacement-preview-v1.mp4'
run(['ffmpeg','-v','error','-n','-i',str(video),'-i',str(mix),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-video_track_timescale','90000','-movflags','+faststart','-t',str(937/30),str(out)])
print('PREVIEW READY',out,flush=True)
