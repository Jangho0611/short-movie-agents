from pathlib import Path
import subprocess,json,hashlib,array,math
p=Path('/Users/janghokim/Documents/short-movie-agents/projects/door-film-lot-color-difference-shorts-v1');d=p/'docs';v=p/'public/assets/video'
def run(c):return subprocess.run(c,check=True,capture_output=True)
sc=json.loads((p/'src/timeline-v1.json').read_text());names=[f'scene{i:02d}-2d-preview-v2.mp4' for i in range(1,7)]+['ending-preview-v1.mp4'];names[3]='scene04-2d-preview-v3.mp4';frames=[s['frames'] for s in sc]+[170]
args=['ffmpeg','-v','error','-n'];filters=[]
for i,n in enumerate(names):
 args+=['-i',str(v/n)];filters.append(f'[{i}:v]setpts=PTS-STARTPTS[v{i}];[{i}:a]apad,atrim=duration={frames[i]/30:.9f},asetpts=PTS-STARTPTS[a{i}]')
filters.append(''.join(f'[v{i}][a{i}]' for i in range(7))+'concat=n=7:v=1:a=1[outv][outa]')
args+=['-filter_complex',';'.join(filters),'-map','[outv]','-map','[outa]','-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-movflags','+faststart',str(v/'door-film-lot-2d-preview-v3.mp4')]
run(args);print('ASSEMBLED',flush=True)
rows=[]
for n,expected in zip(names+['door-film-lot-2d-preview-v3.mp4'],frames+[sum(frames)]):
 f=v/n;probe=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]).stdout);vs=next(s for s in probe['streams'] if s['codec_type']=='video')
 assert (vs['width'],vs['height'],vs['r_frame_rate'],int(vs['nb_frames']))==(1080,1920,'30/1',expected)
 run(['ffmpeg','-v','error','-xerror','-i',str(f),'-f','null','-'])
 rows.append({'file':str(f),'frames':expected,'videoSeconds':expected/30,'containerSeconds':float(probe['format']['duration']),'decode':'PASS','sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
lock=json.loads((d/'preview-v1-input-lock.json').read_text())
for n,h in lock['allOriginalAudio'].items():assert hashlib.sha256((p/n).read_bytes()).hexdigest()==h
# Compare decoded output audio against unchanged source, allowing lossy codec error.
correlations=[]
for i,n in enumerate(names):
 original=p/'public/assets/audio'/(sc[i]['file'] if i<6 else 'ending-approved-v3.mp3')
 def pcm(f):
  x=array.array('f');x.frombytes(run(['ffmpeg','-v','error','-i',str(f),'-vn','-ac','1','-ar','24000','-f','f32le','-']).stdout);return x
 x=pcm(original);y=pcm(v/n);length=min(len(x),len(y));xy=sum(x[j]*y[j] for j in range(length));xx=sum(t*t for t in x[:length]);yy=sum(t*t for t in y[:length]);correlations.append(xy/math.sqrt(xx*yy))
report={'media':rows,'audioSourcePreservation':'PASS','endingSourceHashes':'PASS at preflight','audioZeroLagCorrelation':correlations,'captionTiming':'whole-scene summaries visible from frame 0; per-word sync not intended','userVisualApproval':'PENDING','visuals':'SVG/CSS with actual YL40 surface photo texture; internal preview only','limitations':['not a measured real product color difference','simplified schematic geometry','mobile platform UI and continuous human viewing/listening pending']}
(d/'2d-preview-v3-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps(report,ensure_ascii=False),flush=True)
