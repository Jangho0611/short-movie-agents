from pathlib import Path
import subprocess,json,hashlib
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';imgs=p/'public/assets/images'
main=v/'younglim-flag-hinge-main-preview-v1.mp4';ending=p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
def run(args):subprocess.run(args,check=True,stdout=subprocess.DEVNULL)
def ff(args):run(['ffmpeg','-v','error','-n']+args)
frames=[76,173,154,208,151];start=0
for i,n in enumerate(frames,1):
 f=start+min(n-1,110 if i in [2,3,4,5] else 35)
 ff(['-i',str(main),'-vf',f'select=eq(n\\,{f})','-frames:v','1',str(imgs/f'scene{i:02}-render-qa-v1.png')])
 start+=n
# Remux timebase only; no video re-encoding.
remux=v/'younglim-flag-hinge-main-timescale-preview-v1.mp4'
ff(['-i',str(main),'-map','0','-c','copy','-video_track_timescale','90000',str(remux)])
concat=p/'docs/preview-v1-concat.txt'
with concat.open('x') as f:f.write(f"file '{remux}'\nduration 25.4\nfile '{ending}'\nduration 5.6666666667\n")
final=v/'younglim-flag-hinge-preview-v1.mp4'
ff(['-f','concat','-safe','0','-i',str(concat),'-i',str(main),'-i',str(ending),'-filter_complex','[1:a]atrim=duration=25.4,asetpts=PTS-STARTPTS,apad=whole_dur=25.4[a];[2:a]atrim=duration=5.6666666667,asetpts=PTS-STARTPTS,apad=whole_dur=5.6666666667[b];[a][b]concat=n=2:v=0:a=1[out]','-map','0:v:0','-map','[out]','-c:v','copy','-c:a','aac','-b:a','192k','-ar','48000','-video_track_timescale','90000','-movflags','+faststart',str(final)])
q=json.loads((p/'docs/tts-revision-v2-final-qa.json').read_text());start=0
for i,(n,a) in enumerate(zip(frames,q['concat_order']),1):
 ff(['-i',str(main),'-i',str(p/'public/assets/audio'/a),'-vf',f'trim=start_frame={start}:end_frame={start+n},setpts=PTS-STARTPTS','-af',f'apad=whole_dur={n/30}','-map','0:v:0','-map','1:a:0','-t',str(n/30),'-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-ar','48000',str(v/f'scene{i:02}-preview-v1.mp4')]);start+=n
print(final)
