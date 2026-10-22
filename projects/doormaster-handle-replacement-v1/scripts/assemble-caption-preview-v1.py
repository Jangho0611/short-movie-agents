from pathlib import Path
import subprocess
V=Path('public/assets/video').resolve();I=Path('public/assets/images').resolve();T=Path('/tmp/doormaster-caption-v1');T.mkdir(exist_ok=True)
def run(a):subprocess.run(['ffmpeg','-v','error','-n']+a,check=True)
scenes=[]
for n in [1,2,3,4,5]:
 if n==4:scenes.append(V/'scene04-info-preview-v4.mp4');continue
 if n==1:scenes.append(V/'scene01-preview-v1.mp4');continue
 src=V/f'scene{n:02}-preview-v1.mp4';dst=V/f'scene{n:02}-caption-preview-v1.mp4'
 patch=I/('caption-removed-patch-v1.png' if n==3 else 'caption-after-patch-v1.png')
 run(['-i',str(src),'-i',str(patch),'-filter_complex','[0:v][1:v]overlay=0:1600:format=auto,format=yuvj420p[v]','-map','[v]','-map','0:a','-c:v','libx264','-preset','fast','-crf','16','-pix_fmt','yuvj420p','-color_range','pc','-video_track_timescale','90000','-c:a','copy',str(dst)])
 scenes.append(dst)
cat=T/'concat.txt'
with cat.open('x') as f:
 for p in scenes+[V/'daesan-headquarters-ending-approved-v1.mp4']:f.write(f"file '{p}'\n")
joined=T/'video.mp4'
run(['-f','concat','-safe','0','-i',str(cat),'-map','0:v','-an','-c:v','copy','-video_track_timescale','90000',str(joined)])
v=4
while (V/f'doormaster-handle-replacement-preview-v{v}.mp4').exists():v+=1
out=V/f'doormaster-handle-replacement-preview-v{v}.mp4'
run(['-i',str(joined),'-i',str(V/'doormaster-handle-replacement-preview-v3.mp4'),'-map','0:v','-map','1:a','-c','copy','-movflags','+faststart',str(out)])
print(out)
