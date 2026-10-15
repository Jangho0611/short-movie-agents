from pathlib import Path
import json,subprocess
p=Path(__file__).resolve().parents[2]
# Standard-path input aliases; outputs never target approved aliases.
video_root=p/'public/assets/video'
video_aliases={'slim-frame-reform-preview-v5.mp4': 'slim-frame-reform-final-approved-v5.mp4', 'scene01-v3.mp4': 'scene01-final-approved-v3.mp4', 'scene02-v3.mp4': 'scene02-final-approved-v3.mp4', 'scene03-v3.mp4': 'scene03-final-approved-v3.mp4', 'scene04-v4.mp4': 'scene04-final-approved-v4.mp4', 'scene05-v5.mp4': 'scene05-final-approved-v5.mp4', 'scene06-v3.mp4': 'scene06-final-approved-v3.mp4', 'scene06-v2.mp4': 'scene06-final-approved-v3.mp4', 'scene01-timed-v1.mp4': 'scene01-timed-v1.mp4', 'scene02-timed-v1.mp4': 'scene02-timed-v1.mp4', 'scene03-timed-v1.mp4': 'scene03-timed-v1.mp4', 'scene04-timed-v1.mp4': 'scene04-timed-v1.mp4', 'scene05-timed-v1.mp4': 'scene05-timed-v1.mp4', 'scene06-timed-v1.mp4': 'scene06-timed-v1.mp4', 'scene01-v2.mp4': 'scene01-v2.mp4', 'scene02-v2.mp4': 'scene02-v2.mp4', 'scene03-v2.mp4': 'scene03-v2.mp4', 'scene04-v2.mp4': 'scene04-v2.mp4', 'scene05-v2.mp4': 'scene05-v2.mp4', 'scene04-v3.mp4': 'scene04-v3.mp4', 'scene05-v3.mp4': 'scene05-v3.mp4', 'slim-frame-reform-preview-v2.mp4': 'slim-frame-reform-preview-v2.mp4', 'slim-frame-reform-preview-v3.mp4': 'slim-frame-reform-preview-v3.mp4'}
def video(name):return video_root/video_aliases.get(name,name)
def video_output(name):return video_root/name
rows=json.loads((p/'docs/timeline-v2.json').read_text());dur=[r['frames']/30 for r in rows]+[170/30]
ending=p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
files=[video(f'scene{i:02}-v2.mp4') for i in range(1,7)]+[ending]
cmd=['ffmpeg','-v','error','-n']
for f in files:cmd+=['-i',str(f)]
filters=[]
for i,d in enumerate(dur):filters += [f'[{i}:v]trim=duration={d},settb=AVTB,setpts=PTS-STARTPTS,fps=30,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={d},asetpts=PTS-STARTPTS[a{i}]']
filters+=[''.join(f'[v{i}][a{i}]' for i in range(7))+'concat=n=7:v=1:a=1[v][a]']
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-preset','veryfast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t',str(sum(dur)),'-movflags','+faststart',str(p/'public/assets/video/slim-frame-reform-preview-v2.mp4')]
subprocess.run(cmd,check=True)
subprocess.run(['ffmpeg','-v','error','-n','-i',str(p/'public/assets/video/slim-frame-reform-preview-v2.mp4'),'-t',str(sum(dur[:-1])),'-vn','-c:a','libmp3lame','-b:a','192k',str(p/'public/audio/full-tts-qa-v2.mp3')],check=True)
start=0
for row,d in zip(rows,dur):row['start']=start;row['duration']=d;start+=d
(p/'docs/final-timeline-v2.json').write_text(json.dumps({'scenes':rows,'main_duration':sum(dur[:-1]),'ending_duration':dur[-1],'total_duration':sum(dur)},indent=2))
print('Main',sum(dur[:-1]),'Total',sum(dur))
