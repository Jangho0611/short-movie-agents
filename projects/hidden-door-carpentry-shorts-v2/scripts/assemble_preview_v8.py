from pathlib import Path
import subprocess,json,hashlib
root=Path(__file__).resolve().parents[1]; video=root/'public/assets/video'; docs=root/'docs'
files=[video/(f'scene{i:02}-preview-v8.mp4' if i!=5 else 'scene05-preview-v8-label-fix.mp4') for i in range(1,6)]+[video/'daesan-headquarters-ending-approved-v1.mp4']
frames=[112,185,134,183,180,170]
def run(cmd):return subprocess.run(cmd,check=True,capture_output=True,text=True).stdout
results=[]
for f,n in zip(files,frames):
 data=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)])); v=next(s for s in data['streams'] if s['codec_type']=='video'); a=next(s for s in data['streams'] if s['codec_type']=='audio')
 assert (v['width'],v['height'],v['r_frame_rate'],v['codec_name'],a['codec_name'])==(1080,1920,'30/1','h264','aac')
 assert int(v['nb_frames'])==n,(f,v['nb_frames'],n)
 run(['ffmpeg','-v','error','-xerror','-i',str(f),'-f','null','-'])
 results.append({'file':str(f.relative_to(root)),'frames':n,'video_seconds':n/30,'container_seconds':float(data['format']['duration']),'decode':'PASS'})
# Normalize segment timestamps and audio padding to exact scene frames; no added transition holds.
cmd=['ffmpeg','-n','-hide_banner','-loglevel','error']
for f in files:cmd+=['-i',str(f)]
parts=[]
for i,n in enumerate(frames):
 parts += [f'[{i}:v]setpts=PTS-STARTPTS,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={n/30:.9f},asetpts=PTS-STARTPTS[a{i}]']
parts.append(''.join(f'[v{i}][a{i}]' for i in range(6))+'concat=n=6:v=1:a=1[v][a]')
out=video/'hidden-door-carpentry-preview-v8.mp4'
cmd+=['-filter_complex',';'.join(parts),'-map','[v]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)]
run(cmd)
run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
data=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(out)]))
v=next(s for s in data['streams'] if s['codec_type']=='video');assert int(v['nb_frames'])==sum(frames)
baseline=json.loads((docs/'preview-v8-preservation-before.json').read_text())
assert all(hashlib.sha256(Path(n).read_bytes()).hexdigest()==h for n,h in baseline.items())
for i,t in [(1,2),(2,3),(3,3),(4,4),(5,4)]:
 run(['ffmpeg','-n','-v','error','-ss',str(t),'-i',str(files[i-1]),'-frames:v','1',str(root/f'public/assets/images/scene{i:02}-rendered-qa-v8.png')])
report={'scenes':results,'preview':str(out),'frames':sum(frames),'seconds':sum(frames)/30,'probe':data,'decode':'PASS','all_baseline_hashes_unchanged':True,'tts_files':['scene01-tts-v4.mp3','scene02-tts-v8.mp3','scene03-tts-v11.mp3','scene04-tts-v4.mp3','scene05-tts-v6.mp3'],'tts_playback_rate':1,'ending':'approved Canonical MP4 reused; source hash unchanged; concat output encoded H264/AAC','visual_review':'pending'}
(docs/'preview-qa-v8.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'preview':str(out),'frames':sum(frames),'seconds':sum(frames)/30,'decode':'PASS','preservation':'PASS'},ensure_ascii=False))
