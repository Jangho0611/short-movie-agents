from pathlib import Path
import subprocess,json,hashlib,shutil
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';im=p/'public/assets/images';full=v/'door-frame-wall-thickness-preview-v3.mp4'
frames=[114,170,159,342,186,288];tts=[3.456,5.328,4.944,10.848,5.856,9.264]
def run(args):return subprocess.run(args,check=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE).stdout
def qa(f,n):
 o=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]));vs=next(s for s in o['streams'] if s['codec_type']=='video');au=next(s for s in o['streams'] if s['codec_type']=='audio')
 assert (vs['width'],vs['height'],vs['r_frame_rate'],vs['codec_name'],int(vs['nb_frames']))==(1080,1920,'30/1','h264',n)
 assert au['codec_name']=='aac';run(['ffmpeg','-v','error','-xerror','-i',str(f),'-f','null','-'])
 return {'file':str(f),'frames':n,'duration':float(vs['duration']),'containerDuration':float(o['format']['duration']),'decode':'PASS','format':'1080x1920 30fps H.264/AAC'}
reports=[qa(full,1429)];start=0
for i,n in enumerate(frames,1):
 if i in [1,2,4,6]:
  out=v/f'scene{i:02d}-preview-v3.mp4'
  run(['ffmpeg','-v','error','-n','-i',str(full),'-ss',str(start/30),'-t',str(n/30),'-c:v','libx264','-crf','18','-preset','fast','-c:a','aac','-b:a','192k','-frames:v',str(n),str(out)])
  reports.append(qa(out,n))
  for frame in ([20,55,110] if i==1 else [55,117,200] if i==6 else [100]):
   run(['ffmpeg','-v','error','-n','-i',str(out),'-vf',f'select=eq(n\\,{frame})','-frames:v','1',str(im/f'scene{i:02d}-preview-v3-qa-{frame}.png')])
 start+=n
for rel,h in json.loads((p/'docs/preview-v3-protected-hashes.json').read_text()).items():assert hashlib.sha256((p/rel).read_bytes()).hexdigest()==h,rel
assert all(n/30>t for n,t in zip(frames,tts))
run(['ffmpeg','-v','error','-xerror','-i',str(p/'public/assets/audio/scene02-v4.mp3'),'-f','null','-'])
report={'outputs':reports,'sceneFrames':frames,'ttsVersions':[3,4,3,3,3,3],'ttsDurations':tts,'scene4HoldSeconds':342/30-10.848,'scene4HoldFrameEquivalent':(342/30-10.848)*30,'endingFrames':170,'protectedHashes':'PASS','ttsClippingByTimeline':'none','motions':{'S1':'daesani-point-right.mp4','S6':'daesani-open-arms-explain.mp4','playbackRate':1,'loop':False,'freezeAtCompositionFrame':118,'sourceTimeAtFreeze':118/30},'visual':'pending QA frame inspection','listening':'S2 들어간다면 / 마감재 두께까지 사용자 청취 필요'}
(p/'docs/preview-v3-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False),flush=True)
