from pathlib import Path
import subprocess
p=Path(__file__).resolve().parents[2]
files=[p/'output/preview-v1'/f'scene{i:02}-timed-v1.mp4' for i in range(1,7)]+[p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4']
cmd=['ffmpeg','-v','error','-n']
for f in files:cmd+=['-i',str(f)]
filters=[]
durations=[6,4.5,5,5,6.5,8.5,170/30]
for i in range(7):filters += [f'[{i}:v]trim=duration={durations[i]},settb=AVTB,setpts=PTS-STARTPTS,fps=30,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={durations[i]},asetpts=PTS-STARTPTS[a{i}]']
filters+=[''.join(f'[v{i}][a{i}]' for i in range(7))+'concat=n=7:v=1:a=1[v][a]']
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-preset','veryfast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t','41.166667','-movflags','+faststart',str(p/'output/slim-frame-reform-preview-v1-checked.mp4')]
subprocess.run(cmd,check=True)
subprocess.run(['ffmpeg','-v','error','-n','-i',str(p/'output/slim-frame-reform-preview-v1-checked.mp4'),'-t','35.5','-vn','-c:a','libmp3lame','-b:a','192k',str(p/'audio/full-tts-qa-v1-checked.mp3')],check=True)
