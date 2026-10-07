from pathlib import Path
import subprocess as sp
P=Path(__file__).resolve().parents[1]
OLD=P/'public/assets/video/xps-waterproof-vs-water-absorption-v5.mp4'
NEW=P/'public/assets/video/xps-waterproof-vs-water-absorption-v6.mp4'
ENDING=P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
assert not NEW.exists(), 'Existing output is protected'
sp.run(['ffmpeg','-v','error','-n','-i',str(OLD),'-i',str(ENDING),'-filter_complex','[0:v]trim=end_frame=645,setpts=PTS-STARTPTS[b];[1:v]trim=end_frame=170,setpts=PTS-STARTPTS[e];[b][e]concat=n=2:v=1:a=0[v]','-map','[v]','-map','0:a:0','-c:v','libx264','-preset','fast','-crf','0','-pix_fmt','yuv420p','-fps_mode','passthrough','-c:a','copy','-movflags','+faststart',str(NEW)],check=True)
