from pathlib import Path
import subprocess,json,shutil
p=Path(__file__).resolve().parents[2]
project=Path('/Users/janghokim/Documents/daesan-field-shorts/004-slim-frame-reform')
rows=json.loads((p/'docs/timeline-v3.json').read_text())
for i in [1,2]:
 d=rows[i-1]['frames']/30
 subprocess.run(['ffmpeg','-v','error','-n','-i',str(project/'output/preview-v2'/f'scene{i:02}-v2.mp4'),'-i',str(p/'public/audio'/f'scene{i:02}-tts-v3.mp3'),'-map','0:v','-map','1:a','-vf','tpad=stop_mode=clone:stop_duration=2','-af','apad','-t',str(d),'-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-ac','2',str(p/'output/preview-v3'/f'scene{i:02}-v3.mp4')],check=True)
for i in [5,6]:
 with (p/'output/preview-v3'/f'scene{i:02}-v3.mp4').open('xb') as f:f.write((project/'output/preview-v2'/f'scene{i:02}-v2.mp4').read_bytes())
dur=[r['frames']/30 for r in rows]+[170/30];files=[p/'output/preview-v3'/f'scene{i:02}-v3.mp4' for i in range(1,7)]+[project/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4']
cmd=['ffmpeg','-v','error','-n']
for f in files:cmd+=['-i',str(f)]
filters=[]
for i,d in enumerate(dur):filters += [f'[{i}:v]trim=duration={d},settb=AVTB,setpts=PTS-STARTPTS,fps=30,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={d},asetpts=PTS-STARTPTS[a{i}]']
filters+=[''.join(f'[v{i}][a{i}]' for i in range(7))+'concat=n=7:v=1:a=1[v][a]']
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-preset','veryfast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t',str(sum(dur)),'-movflags','+faststart',str(p/'output/slim-frame-reform-preview-v3.mp4')]
subprocess.run(cmd,check=True)
subprocess.run(['ffmpeg','-v','error','-n','-i',str(p/'output/slim-frame-reform-preview-v3.mp4'),'-t',str(sum(dur[:-1])),'-vn','-c:a','libmp3lame','-b:a','192k',str(p/'audio/full-tts-qa-v3.mp3')],check=True)
start=0
for row,d in zip(rows,dur):row['start']=start;row['duration']=d;start+=d
(p/'docs/final-timeline-v3.json').write_text(json.dumps({'scenes':rows,'main_duration':sum(dur[:-1]),'ending_duration':dur[-1],'total_duration':sum(dur)},indent=2))
print('Total seconds',sum(dur))
