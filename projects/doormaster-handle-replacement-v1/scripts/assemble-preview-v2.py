from pathlib import Path
import subprocess
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';T=Path('/tmp/doormaster-preview-v2-assembly');T.mkdir(exist_ok=True)
def run(a):subprocess.run(['ffmpeg','-v','error','-n']+a,check=True)
s=V/'scene04-info-preview-v3.mp4'
run(['-i',str(V/'scene04-simple-visual-v3.mp4'),'-i',str(P/'public/assets/audio/scene04-tts-v9.mp3'),'-map','0:v','-map','1:a','-vf','scale=in_range=tv:out_range=pc,format=yuvj420p','-af','apad=whole_dur=7.5','-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuvj420p','-color_range','pc','-video_track_timescale','90000','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t','7.5',str(s)])
cat=T/'concat.txt'
with cat.open('x') as f:
 for p in [V/'scene01-preview-v1.mp4',V/'scene02-preview-v1.mp4',V/'scene03-preview-v1.mp4',s,V/'scene05-preview-v1.mp4',V/'daesan-headquarters-ending-approved-v1.mp4']:f.write(f"file '{p}'\n")
v=T/'video.mp4'
run(['-f','concat','-safe','0','-i',str(cat),'-map','0:v','-an','-c:v','copy','-video_track_timescale','90000',str(v)])
run(['-i',str(v),'-i',str(V/'doormaster-handle-replacement-preview-v1.mp4'),'-map','0:v','-map','1:a','-c','copy','-movflags','+faststart',str(V/'doormaster-handle-replacement-preview-v2.mp4')])
