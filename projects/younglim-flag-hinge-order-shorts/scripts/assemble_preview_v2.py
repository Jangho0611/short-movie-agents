from pathlib import Path
import subprocess,json
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video'
def ff(args):subprocess.run(['ffmpeg','-v','error','-n']+args,check=True)
for i,n,a in [(2,173,'scene02-tts-revision-v2.mp3'),(5,151,'scene05-tts-revision-v3-pause200ms.mp3')]:
 ff(['-i',str(v/f'scene{i:02}-render-v2.mp4'),'-i',str(p/'public/assets/audio'/a),'-map','0:v:0','-map','1:a:0','-c:v','copy','-af',f'apad=whole_dur={n/30}','-t',str(n/30),'-c:a','aac','-b:a','192k','-ar','48000',str(v/f'scene{i:02}-preview-v2.mp4')])
files=[v/'scene01-blender-concept-test-v2.mp4',v/'scene02-preview-v2.mp4',v/'scene03-preview-v1.mp4',v/'scene04-preview-v1.mp4',v/'scene05-preview-v2.mp4',p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'];frames=[76,173,154,208,151,170]
lines=[]
for i,(f,n) in enumerate(zip(files,frames)):
 out=v/f'assembly-v2-video-{i+1:02}.mp4';ff(['-i',str(f),'-map','0:v:0','-c:v','copy','-video_track_timescale','90000',str(out)]);lines.extend([f"file '{out}'",f'duration {n/30:.12f}'])
manifest=p/'docs/preview-v2-concat.txt'
with manifest.open('x') as f:f.write('\n'.join(lines)+'\n')
a=['-f','concat','-safe','0','-i',str(manifest)]
for f in files:a+=['-i',str(f)]
filters=[f'[{i+1}:a]aresample=48000,aformat=channel_layouts=stereo,atrim=duration={n/30},asetpts=PTS-STARTPTS,apad=whole_dur={n/30}[a{i}]' for i,n in enumerate(frames)]
filters.append(''.join(f'[a{i}]' for i in range(6))+'concat=n=6:v=0:a=1[out]')
ff(a+['-filter_complex',';'.join(filters),'-map','0:v:0','-map','[out]','-c:v','copy','-c:a','aac','-b:a','192k','-ar','48000','-video_track_timescale','90000','-movflags','+faststart',str(v/'younglim-flag-hinge-preview-v2.mp4')])
with (p/'docs/preview-v2-inputs.json').open('x') as f:json.dump({'files':[str(f) for f in files],'frames':frames},f,indent=2)
