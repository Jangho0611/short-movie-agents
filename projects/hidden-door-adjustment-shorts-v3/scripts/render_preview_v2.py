from pathlib import Path
import subprocess, json, hashlib, sys

P=Path(__file__).resolve().parents[1]; V=P/'public/assets/video'; I=P/'public/assets/images'; D=P/'docs'

# Final local inputs, independent of historical preservation manifests.
INPUT_SHA256 = {'public/assets/images/younglim-adjustable-catch.jpg': 'f3bb57f74fef5068415d42033e6b18e02b89a7e4c22bceebb731a628d1509e32', 'public/assets/images/younglim-slim-hidden-hinge.jpg': '833677bcb8fbad616db1c1299c6782cf6e3f9c5538e6261ded35b1a540ceb805', 'public/assets/images/younglim-hidden-hinge.jpg': 'd433e1105e2cf6134c15ee514d4d38c2f214a2d871a27468721bbe5c3ca1a164', 'public/assets/images/hidden-door-finished-hero-v1.png': '4d7833c8887caec0d589bc8cda5347ca39500630b10c3673371355df3797bcbe', 'public/assets/images/younglim-normal-hinge.jpg': '2dabf903ce62cf71514cf6bef66e6deb34c6504644f02c9ea6c9d43dee37b452', 'public/assets/fonts/Pretendard-Black.woff2': 'c5fd0c3568fc1368a3edc0d0fbb36df029935954276e3573451b3bae09e27296', 'public/assets/fonts/Pretendard-SemiBold.woff2': 'c863f76a7de5c1ddc1ed8b2fa794964530774592c4f31407a84e2a2ae93f17f0', 'public/assets/fonts/Pretendard-ExtraBold.woff2': 'dd7c1e156f508eb962acc7a33a7a1896d1e0b71e11156fad96e731689ceb6dc3', 'public/assets/fonts/Pretendard-Medium.woff2': 'd03481330eeba0659ab5b87f25ceb504a35de377dd90a0d0aba2982eb2d05e2c', 'public/assets/audio/scene01-tts-v9.mp3': '37f7e2838c3cee5a85b38b16f18ae1270bf884b6aae00320f722da5cd5b48288', 'public/assets/audio/scene02-tts-v8.mp3': 'd795f813467e0ef993168232b2e10c3d0e27ea8ca88b71d8bae7cc9e36bebb54', 'public/assets/audio/scene03-tts-v6.mp3': 'a095c355bd074171dd2758c388173cb7205107d20d06bc6786ec27f5c7483e62', 'public/assets/audio/scene04-tts-v9.mp3': 'bcb98a5103968840b7b41d1703bb62b8abb210a02375958a3c1db849facbcb4e', 'public/assets/audio/scene05-tts-v8.mp3': '8851f28eb0d8e3a5379d812f903d8cb8c473c691cd686172ad2b8f02f2677d72', 'public/assets/video/scene01-preview-v2.mp4': '33f75178582077f84890720f785833520058c95d48e5e251b6ef2841c4d457d7', 'public/assets/video/scene02-preview-v2.mp4': 'd1c4e33b0f334da0c935478893f0a6d789d6589ee2f8e5be141dd7ec8176c88d', 'public/assets/video/scene03-preview-v1.mp4': 'ce3522e3ef9d353f1d388a04b78043eba79ffbc9ef48e6070951cdd819e39a29', 'public/assets/video/scene04-preview-v1.mp4': 'c0de01343d1e48f55dcb2e3b8415616f4331722fc8ea773e59ad0956df1bc0c8', 'public/assets/video/scene05-preview-v1.mp4': '61fac8533d4779d85163bd42b3f1aa61a095865ef5d8c3df0fb5dce42f962be0', 'public/references/daesan-headquarters-ending-approved-v1.mp4': '2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5', 'src/AdjustmentScenesV2.tsx': 'a6fe43fef516360de444a7c72e5e75d6f3a17972f7f0e99fc8cefeca77229f8b', 'src/preview-v2.tsx': '615925368defe9b88dd564d0459ba958ce7c9585b774f7d638709400b4a9ee81', 'public/assets/video/scene01-base-v2.mp4': '9e5205b63f8b863a84d345eb195db5b5608c6bd0eb3226f00c14c15fa02bcab2', 'public/assets/video/scene02-base-v2.mp4': 'daefe6eeeeceb50b2f64556a38dfed6ad3ee935b3a9fd2e8ac2305fb9341101e', 'public/assets/video/daesani-point-left-alpha-v2.mov': '877ab4a00ac07e9b2cfe10e97085d2d88ab4dbb12c0c8b42186efd012a5aedab', 'public/assets/video/daesani-open-arms-explain-alpha-v2.mov': 'ae7cbc4d385ea624d6067e65de899d95a2fde014ee73a24d4f828210c07e61c0'}
def verify_inputs():
    for name, expected in INPUT_SHA256.items():
        path = P/name
        if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != expected:
            raise RuntimeError(f'Final input missing or changed: {name}')
verify_inputs()
if '--check-inputs' in sys.argv:
    print('Final input SHA256 QA: PASS')
    raise SystemExit(0)

import numpy as np
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
    final_scene=V/f'scene{scene:02}-preview-v2.mp4'
    if final_scene.exists():
        # Hash-verified approved Scene: never overwrite it.
        continue
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
    if not base.exists():
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
verify_inputs()
report={'preview':str(out),'frames':1266,'seconds':42.2,'probe':data,'full_decode':'PASS','baseline_unchanged':len(INPUT_SHA256),'motions':motion_qa,'segments':[{'path':str(f),'sha256':sha(f)} for f in segments],'locked_scenes':'Scene 3–5 v1 MP4 reused without source/layout/timing/subtitle edits','tts':'same approved MP3s; speed/pitch unchanged; motion audio excluded','ending':'original Canonical MP4 reused','visual_review':'pending'}
(D/'preview-qa-v2.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'preview':str(out),'seconds':42.2,'decode':'PASS','preservation':'PASS','overlap':'0 pixels in protected regions'}))
