"""Dry-run by default. Explicit reviewed execution only; never writes approved files."""
from pathlib import Path
import argparse,json,subprocess,shlex
ROOT=Path(__file__).resolve().parents[2]
parser=argparse.ArgumentParser()
parser.add_argument('--output',required=True,type=Path,help='New review MP4 in an existing directory')
parser.add_argument('--execute',action='store_true')
parser.add_argument('--encoding-profile',choices=['documented-v3'],required=True,help='Historical v5 encoder settings are unknown')
a=parser.parse_args();out=a.output.resolve()
if out.exists():raise FileExistsError(out)
if out.suffix.lower()!='.mp4' or not out.parent.is_dir():raise ValueError('New .mp4 in existing directory required')
spec=json.loads(Path(__file__).with_name('assembly-spec.json').read_text())
cmd=['ffmpeg','-v','error','-n'];filters=[];duration=0
for i,row in enumerate(spec['inputs']):
 f=ROOT/row['path']
 if not f.is_file():raise FileNotFoundError(f)
 probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_streams','-of','json',str(f)]))
 v=next(s for s in probe['streams'] if s['codec_type']=='video')
 assert (v['width'],v['height'],v['r_frame_rate'],int(v['nb_frames']))==(1080,1920,'30/1',row['frames'])
 assert any(s['codec_type']=='audio' for s in probe['streams'])
 d=row['frames']/30;duration+=d;cmd+=['-i',str(f)]
 filters += [f'[{i}:v]trim=duration={d},settb=AVTB,setpts=PTS-STARTPTS,fps=30,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={d},asetpts=PTS-STARTPTS[a{i}]']
filters+=[''.join(f'[v{i}][a{i}]' for i in range(7))+'concat=n=7:v=1:a=1[v][a]']
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-preset','veryfast','-crf','19','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-ac','2','-t',str(duration),'-movflags','+faststart',str(out)]
print('Review assembly using documented v3 encoding, NOT verified historical v5 settings.')
print(shlex.join(cmd))
if a.execute:subprocess.run(cmd,check=True)
else:print('DRY RUN: no output created')
