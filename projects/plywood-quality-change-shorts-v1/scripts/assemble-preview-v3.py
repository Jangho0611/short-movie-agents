from pathlib import Path
import json,subprocess,hashlib
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';Q=P/'qa/preview-v3'
scenes=json.loads((P/'src/preview-data-v3.json').read_text())
def run(args):subprocess.run(args,check=True)
for s in scenes:
 n=f"{s['scene']:02d}";d=s['frames']/30
 run(['ffmpeg','-hide_banner','-loglevel','error','-n','-i',str(V/f'scene{n}-visual-preview-v3.mp4'),'-i',str(P/'public/assets/audio'/s['audio']),'-map','0:v:0','-map','1:a:0','-c:v','copy','-af',f'apad=whole_dur={d:.9f}','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t',f'{d:.9f}','-video_track_timescale','90000','-movflags','+faststart',str(V/f'scene{n}-preview-v3.mp4')])
 print(f'Scene {n} audio mux complete ({d:.6f}s)',flush=True)
ending=P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
files=[V/f"scene{s['scene']:02d}-preview-v3.mp4" for s in scenes]+[ending]
concat=Q/'concat.ffconcat';concat.write_text('ffconcat version 1.0\n'+''.join(f"file '{f}'\nduration {d/30:.9f}\n" for f,d in zip(files,[s['frames'] for s in scenes]+[170])))
video=V/'plywood-quality-change-visual-preview-v3.mp4'
run(['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(concat),'-map','0:v:0','-c:v','copy','-an','-video_track_timescale','90000',str(video)])
inputs=[P/'public/assets/audio'/s['audio'] for s in scenes]+[ending]
frames=[s['frames'] for s in scenes]+[170]
cmd=['ffmpeg','-v','error','-n']
for f in inputs:cmd+=['-i',str(f)]
filters=[]
for i,n in enumerate(frames):filters.append(f'[{i}:a:0]aresample=48000,aformat=channel_layouts=stereo,apad,atrim=end_sample={n*1600},asetpts=PTS-STARTPTS[a{i}]')
filters.append(''.join(f'[a{i}]' for i in range(7))+'concat=n=7:v=0:a=1[out]')
wav=Q/'approved-audio-timeline-v1.wav'
cmd+=['-filter_complex',';'.join(filters),'-map','[out]','-c:a','pcm_s24le',str(wav)];run(cmd)
run(['ffmpeg','-v','error','-n','-i',str(video),'-i',str(wav),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-t',f'{sum(frames)/30:.9f}','-video_track_timescale','90000','-movflags','+faststart',str(V/'plywood-quality-change-preview-v3.mp4')])
print('Preview assembly complete',flush=True)
