from pathlib import Path
import subprocess,json
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';Q=P/'qa/preview-v2'
scenes=json.loads((P/'src/preview-data.json').read_text())
def run(args):subprocess.run(args,check=True)
run(['ffmpeg','-v','error','-n','-i',str(V/'scene03-visual-preview-v2.mp4'),'-i',str(V/'scene03-preview-v1.mp4'),'-map','0:v:0','-map','1:a:0','-c','copy','-video_track_timescale','90000','-movflags','+faststart',str(V/'scene03-preview-v2.mp4')])
files=[V/f"scene{s['scene']:02d}-preview-v{2 if s['scene']==3 else 1}.mp4" for s in scenes]+[P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4']
frames=[s['frames'] for s in scenes]+[170]
concat=Q/'concat.ffconcat';concat.write_text('ffconcat version 1.0\n'+''.join(f"file '{f}'\nduration {n/30:.9f}\n" for f,n in zip(files,frames)))
video=V/'plywood-quality-change-visual-preview-v2.mp4'
run(['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(concat),'-map','0:v:0','-c:v','copy','-an','-video_track_timescale','90000',str(video)])
run(['ffmpeg','-v','error','-n','-i',str(video),'-i',str(V/'plywood-quality-change-preview-v1.mp4'),'-map','0:v:0','-map','1:a:0','-c','copy','-video_track_timescale','90000','-movflags','+faststart',str(V/'plywood-quality-change-preview-v2.mp4')])
print('Scene 3 v2 and full Preview v2 assembled. v1 audio copied without re-encoding.')
