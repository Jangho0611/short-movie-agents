from pathlib import Path
import subprocess, json, hashlib
import numpy as np

P=Path(__file__).resolve().parents[1]; V=P/'public/assets/video'; I=P/'public/assets/images'; D=P/'docs'
def run(c):return subprocess.check_output(c,cwd=P,text=True)
def sha(f):return hashlib.sha256(f.read_bytes()).hexdigest()
def probe(f):return json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]))

# Source motion plays at 24 fps with no speed changes or horizontal flip.
# Hold the initial neutral pose for 0.4s, play the 4s source, then hold final pose.
motions=[
 (1,164,'daesani-point-left-alpha-v2.mov',645,1255,416,464),
 (2,200,'daesani-open-arms-explain-alpha-v2.mov',645,1295,380,424),
]
protected={
 1:[(80,150,990,650),(90,680,955,1255),(90,1260,570,1295),(90,1400,650,1500),(80,1700,990,1770)],
 2:[(80,150,990,1110),(90,1180,975,1260),(90,1260,615,1310),(90,1400,595,1530),(80,1700,990,1770)],
}
motion_qa=[]
for scene,n,name,x,y,w,h in motions:
    src=V/name; spec=probe(src)['streams'][0]
    assert spec['pix_fmt']=='argb' and spec['r_frame_rate']=='24/1'
    raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(src),'-vf',f'scale={w}:{h}:flags=lanczos','-f','rawvideo','-pix_fmt','rgba','-'])
    frames=np.frombuffer(raw,np.uint8).reshape(-1,h,w,4)
    bounds=[];hits=0
    for frame in frames:
        mask=frame[:,:,3]>16
        yy,xx=np.where(mask);bounds.append([x+int(xx.min()),y+int(yy.min()),x+int(xx.max()),y+int(yy.max())])
        for l,t,r,b in protected[scene]:
            left=max(0,l-x);top=max(0,t-y);right=min(w,r-x);bottom=min(h,b-y)
            if left<right and top<bottom:hits+=int(mask[top:bottom,left:right].sum())
    assert hits==0,(scene,hits)
    motion_qa.append({'scene':scene,'asset':name,'canvas':[x,y,w,h],'visible_union':[min(a[0] for a in bounds),min(a[1] for a in bounds),max(a[2] for a in bounds),max(a[3] for a in bounds)],'protected_overlap_pixels':hits,'source_frames':len(frames),'start_hold_seconds':.4,'native_speed':1,'flip':False})
    base=V/f'scene{scene:02}-base-v2.mp4'
    assert not base.exists()
    subprocess.run([str(P/'node_modules/.bin/remotion'),'render','src/preview-v2.tsx',f'AdjustmentScene{scene}',str(base),'--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2','--browser-executable=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],cwd=P,check=True)
    out=V/f'scene{scene:02}-preview-v2.mp4'
    filt=f'[1:v]scale={w}:{h}:flags=lanczos,fps=30,tpad=start_mode=clone:start_duration=0.4:stop_mode=clone:stop_duration=4[pet];[0:v][pet]overlay=x={x}:y={y}:format=auto,format=yuv420p[v]'
    run(['ffmpeg','-n','-v','error','-i',str(base),'-i',str(src),'-filter_complex',filt,'-map','[v]','-map','0:a','-frames:v',str(n),'-c:v','libx264','-crf','18','-preset','medium','-c:a','copy','-movflags','+faststart',str(out)])
    for t,label in [(0,'start'),(1.8,'point'),(3,'gesture'),(4.5,'hold')]:
        run(['ffmpeg','-n','-v','error','-ss',str(t),'-i',str(out),'-frames:v','1',str(I/f'scene{scene:02}-{label}-qa-v2.png')])
    run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
    assert int(next(s for s in probe(out)['streams'] if s['codec_type']=='video')['nb_frames'])==n

segments=[V/'scene01-preview-v2.mp4',V/'scene02-preview-v2.mp4']+[V/f'scene{i:02}-preview-v1.mp4' for i in [3,4,5]]+[P/'public/references/daesan-headquarters-ending-approved-v1.mp4']
durations=[164,200,224,255,253,170]
cmd=['ffmpeg','-n','-v','error']
for f in segments:cmd+=['-i',str(f)]
filters=[]
for i,n in enumerate(durations):
    filters += [f'[{i}:v]setpts=PTS-STARTPTS,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={n/30:.9f},asetpts=PTS-STARTPTS[a{i}]']
filters.append(''.join(f'[v{i}][a{i}]' for i in range(6))+'concat=n=6:v=1:a=1[v][a]')
out=V/'hidden-door-adjustment-preview-v2.mp4'
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)]
run(cmd);run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
data=probe(out);v=next(s for s in data['streams'] if s['codec_type']=='video');a=next(s for s in data['streams'] if s['codec_type']=='audio')
assert (v['width'],v['height'],v['r_frame_rate'],v['codec_name'],a['codec_name'])==(1080,1920,'30/1','h264','aac')
assert int(v['nb_frames'])==1266
baseline=json.loads((D/'preview-v2-preservation-before.json').read_text())
assert all(sha(Path(f))==h for f,h in baseline.items())
report={'preview':str(out),'frames':1266,'seconds':42.2,'probe':data,'full_decode':'PASS','baseline_unchanged':len(baseline),'motions':motion_qa,'segments':[{'path':str(f),'sha256':sha(f)} for f in segments],'locked_scenes':'Scene 3–5 v1 MP4 reused without source/layout/timing/subtitle edits','tts':'same approved MP3s; speed/pitch unchanged; motion audio excluded','ending':'original Canonical MP4 reused','visual_review':'pending'}
(D/'preview-qa-v2.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'preview':str(out),'seconds':42.2,'decode':'PASS','preservation':'PASS','overlap':'0 pixels in protected regions'}))
