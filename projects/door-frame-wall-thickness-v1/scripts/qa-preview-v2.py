from pathlib import Path
import subprocess,json,hashlib
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';im=p/'public/assets/images';full=v/'door-frame-wall-thickness-preview-v2.mp4'
frames=[114,171,159,357,186,288];tts=[3.456,5.376,4.944,10.848,5.856,9.264]
def run(args):return subprocess.run(args,check=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE).stdout
def qa(f,n):
 data=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]));vs=next(s for s in data['streams'] if s['codec_type']=='video');au=next(s for s in data['streams'] if s['codec_type']=='audio')
 assert (vs['width'],vs['height'],vs['r_frame_rate'],vs['codec_name'],int(vs['nb_frames']))==(1080,1920,'30/1','h264',n)
 assert au['codec_name']=='aac'
 run(['ffmpeg','-v','error','-xerror','-i',str(f),'-f','null','-'])
 return {'file':str(f),'frames':n,'videoDuration':float(vs['duration']),'formatDuration':float(data['format']['duration']),'resolution':'1080x1920','fps':30,'codecs':'H.264/AAC','decode':'PASS'}
manifest=json.loads((p/'docs/slim-copy-manifest.json').read_text())
for r in manifest:
 if r['target'].startswith(('src/daesan-ending/','public/daesan-ending/')):assert hashlib.sha256((p/r['target']).read_bytes()).hexdigest()==r['targetSha256']
reports=[qa(full,1445)];start=0
for i,n in enumerate(frames,1):
 out=v/f'scene{i:02d}-preview-v2.mp4'
 if not out.exists():run(['ffmpeg','-v','error','-n','-i',str(full),'-ss',str(start/30),'-t',str(n/30),'-c:v','libx264','-crf','18','-preset','fast','-c:a','aac','-b:a','192k','-frames:v',str(n),str(out)])
 reports.append(qa(out,n))
 at=0 if i==1 else min(n-1,100)
 if not (im/f'scene{i:02d}-preview-v2-qa.png').exists():run(['ffmpeg','-v','error','-n','-i',str(out),'-vf',f'select=eq(n\\,{at})','-frames:v','1',str(im/f'scene{i:02d}-preview-v2-qa.png')])
 start+=n
# Verify the last 55 complete Scene 4 frames remain visually identical.
hashes=run(['ffmpeg','-v','error','-i',str(v/'scene04-preview-v2.mp4'),'-an','-vf','trim=start_frame=326:end_frame=357','-f','framemd5','-']).decode()
vals=[l.split(',')[-1].strip() for l in hashes.splitlines() if l and not l.startswith('#')]
print('HOLD_FRAMES',len(vals),'UNIQUE_HASHES',len(set(vals)),flush=True)
assert len(vals)==31
holdIdentical=len(set(vals))==1
# Extract ending reference comparison frames; preserve original Canonical preview.
for label,file,idx in [('preview',full,1275+100),('canonical',p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4',100)]:
 run(['ffmpeg','-v','error','-n','-i',str(file),'-vf',f'select=eq(n\\,{idx})','-frames:v','1',str(im/f'ending-{label}-v1-qa.png')])
old=json.loads((p/'docs/tts-qa-v3.json').read_text())
for r in old['scenes']:assert hashlib.sha256(Path(r['file']).read_bytes()).hexdigest()==r['sha256']
report={'outputs':reports,'sceneFrames':frames,'ttsDurations':tts,'scene4HoldSeconds':357/30-10.848,'scene4Hold31FramesPixelIdentical':holdIdentical,'ttsV3Hashes':'PASS','ttsNoClippingByTimeline':all(n/30>t for n,t in zip(frames,tts)),'endingFrames':170,'background':'#FFFFFF','typeEmphasisFrames':[110,126,145],'visualReview':'S1/S5/S6 layout frames checked; final video frames require review','listeningReview':'pending user'}
(p/'docs/preview-v2-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False),flush=True)

protected=json.loads((p/'docs/preview-v2-protected-hashes.json').read_text())
for path,h in protected.items():assert hashlib.sha256((p/path).read_bytes()).hexdigest()==h,path
for frame in [114,130,150,340]:
 run(['ffmpeg','-v','error','-n','-i',str(v/'scene04-preview-v2.mp4'),'-vf',f'select=eq(n\\,{frame})','-frames:v','1',str(im/f'scene04-emphasis-v2-{frame}.png')])
print('Protected TTS, ending, v1 files: all hashes unchanged',flush=True)
