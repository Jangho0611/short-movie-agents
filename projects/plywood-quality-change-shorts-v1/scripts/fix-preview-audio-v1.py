from pathlib import Path
import subprocess,json,shutil
P=Path(__file__).resolve().parents[1];Q=P/'qa/preview-v1';V=P/'public/assets/video';scenes=json.loads((P/'src/preview-data.json').read_text());final=V/'plywood-quality-change-preview-v1.mp4'
# Preserve the first assembly for diagnosis, without moving or deleting anything.
backup=Q/'preview-v1-before-audio-timeline-fix.mp4'
if not backup.exists():shutil.copyfile(final,backup)
run=lambda args:subprocess.run(args,check=True)
video=V/'plywood-quality-change-visual-preview-v1.mp4'
run(['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(Q/'concat.ffconcat'),'-map','0:v:0','-c:v','copy','-an','-video_track_timescale','90000',str(video)])
inputs=[P/'public/assets/audio'/s['audio'] for s in scenes]+[P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'];frames=[s['frames'] for s in scenes]+[170]
cmd=['ffmpeg','-v','error','-n']
for f in inputs:cmd+=['-i',str(f)]
filters=[]
for i,n in enumerate(frames):filters.append(f'[{i}:a:0]aresample=48000,aformat=channel_layouts=stereo,apad,atrim=end_sample={n*1600},asetpts=PTS-STARTPTS[a{i}]')
filters.append(''.join(f'[a{i}]' for i in range(6))+'concat=n=6:v=0:a=1[out]')
wav=Q/'approved-audio-timeline-v1.wav';cmd+=['-filter_complex',';'.join(filters),'-map','[out]','-c:a','pcm_s24le',str(wav)];run(cmd)
run(['ffmpeg','-v','error','-y','-i',str(video),'-i',str(wav),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-t',f'{sum(frames)/30:.9f}','-video_track_timescale','90000','-movflags','+faststart',str(final)])
print('Continuous audio timeline assembled; video untouched.')
