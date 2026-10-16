from pathlib import Path
import subprocess, json, hashlib, sys, math

ROOT = Path(__file__).resolve().parents[1]
VIDEO = ROOT / 'public/assets/video'
FILES = ['scene01-tts-v9.mp3','scene02-tts-v8.mp3','scene03-tts-v6.mp3','scene04-tts-v9.mp3','scene05-tts-v8.mp3']
FRAMES = [164, 200, 224, 255, 253]

# Final local inputs, independent of historical preservation manifests.
INPUT_SHA256 = {'public/assets/images/younglim-adjustable-catch.jpg': 'f3bb57f74fef5068415d42033e6b18e02b89a7e4c22bceebb731a628d1509e32', 'public/assets/images/younglim-slim-hidden-hinge.jpg': '833677bcb8fbad616db1c1299c6782cf6e3f9c5538e6261ded35b1a540ceb805', 'public/assets/images/younglim-hidden-hinge.jpg': 'd433e1105e2cf6134c15ee514d4d38c2f214a2d871a27468721bbe5c3ca1a164', 'public/assets/images/hidden-door-finished-hero-v1.png': '4d7833c8887caec0d589bc8cda5347ca39500630b10c3673371355df3797bcbe', 'public/assets/images/younglim-normal-hinge.jpg': '2dabf903ce62cf71514cf6bef66e6deb34c6504644f02c9ea6c9d43dee37b452', 'public/assets/fonts/Pretendard-Black.woff2': 'c5fd0c3568fc1368a3edc0d0fbb36df029935954276e3573451b3bae09e27296', 'public/assets/fonts/Pretendard-SemiBold.woff2': 'c863f76a7de5c1ddc1ed8b2fa794964530774592c4f31407a84e2a2ae93f17f0', 'public/assets/fonts/Pretendard-ExtraBold.woff2': 'dd7c1e156f508eb962acc7a33a7a1896d1e0b71e11156fad96e731689ceb6dc3', 'public/assets/fonts/Pretendard-Medium.woff2': 'd03481330eeba0659ab5b87f25ceb504a35de377dd90a0d0aba2982eb2d05e2c', 'public/assets/audio/scene01-tts-v9.mp3': '37f7e2838c3cee5a85b38b16f18ae1270bf884b6aae00320f722da5cd5b48288', 'public/assets/audio/scene02-tts-v8.mp3': 'd795f813467e0ef993168232b2e10c3d0e27ea8ca88b71d8bae7cc9e36bebb54', 'public/assets/audio/scene03-tts-v6.mp3': 'a095c355bd074171dd2758c388173cb7205107d20d06bc6786ec27f5c7483e62', 'public/assets/audio/scene04-tts-v9.mp3': 'bcb98a5103968840b7b41d1703bb62b8abb210a02375958a3c1db849facbcb4e', 'public/assets/audio/scene05-tts-v8.mp3': '8851f28eb0d8e3a5379d812f903d8cb8c473c691cd686172ad2b8f02f2677d72', 'public/assets/video/scene03-preview-v1.mp4': 'ce3522e3ef9d353f1d388a04b78043eba79ffbc9ef48e6070951cdd819e39a29', 'public/assets/video/scene04-preview-v1.mp4': 'c0de01343d1e48f55dcb2e3b8415616f4331722fc8ea773e59ad0956df1bc0c8', 'public/assets/video/scene05-preview-v1.mp4': '61fac8533d4779d85163bd42b3f1aa61a095865ef5d8c3df0fb5dce42f962be0', 'public/references/daesan-headquarters-ending-approved-v1.mp4': '2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5', 'src/AdjustmentScenesV1.tsx': '777e1cf1b010b17b17d926cf6d11427a1885ecf95c29be225ea4bc80a1d09914', 'src/preview-v1.tsx': '405f51c26267bf88ccb328a87eee1e08d1db25d0983a2022b48ad3b510e93eaf'}
def verify_inputs():
    for name, expected in INPUT_SHA256.items():
        path = ROOT/name
        if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != expected:
            raise RuntimeError(f'Final input missing or changed: {name}')
verify_inputs()
if '--check-inputs' in sys.argv:
    print('Final input SHA256 QA: PASS')
    raise SystemExit(0)

def run(args):
    return subprocess.check_output(args, cwd=ROOT, text=True)
def probe(path):
    return json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(path)]))

scenes=[]
for i,(audio,frames) in enumerate(zip(FILES,FRAMES),1):
    src=ROOT/'public/assets/audio'/audio
    duration=float(probe(src)['format']['duration'])
    assert frames==math.ceil(duration*30)+9
    out=VIDEO/f'scene{i:02}-preview-v1.mp4'
    if not out.exists():
        subprocess.run([str(ROOT/'node_modules/.bin/remotion'),'render','src/preview-v1.tsx',f'AdjustmentScene{i}',str(out),'--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2','--browser-executable=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],cwd=ROOT,check=True)
    data=probe(out)
    v=next(s for s in data['streams'] if s['codec_type']=='video')
    assert int(v['nb_frames'])==frames
    assert (v['width'],v['height'],v['r_frame_rate'])==(1080,1920,'30/1')
    run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
    scenes.append({'scene':i,'tts':audio,'tts_seconds':duration,'frames':frames,'seconds':frames/30,'tail_seconds':frames/30-duration,'decode':'PASS'})

ending=ROOT/'public/references/daesan-headquarters-ending-approved-v1.mp4'
assert hashlib.sha256(ending.read_bytes()).hexdigest()=='2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5'
segments=[VIDEO/f'scene{i:02}-preview-v1.mp4' for i in range(1,6)]+[ending]
durations=FRAMES+[170]
out=VIDEO/'hidden-door-adjustment-preview-v1.mp4'
cmd=['ffmpeg','-n','-v','error']
for f in segments:cmd+=['-i',str(f)]
filters=[]
for i,n in enumerate(durations):
    filters += [f'[{i}:v]setpts=PTS-STARTPTS,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={n/30:.9f},asetpts=PTS-STARTPTS[a{i}]']
filters.append(''.join(f'[v{i}][a{i}]' for i in range(6))+'concat=n=6:v=1:a=1[v][a]')
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)]
run(cmd)
run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
data=probe(out);v=next(s for s in data['streams'] if s['codec_type']=='video');a=next(s for s in data['streams'] if s['codec_type']=='audio')
assert (v['width'],v['height'],v['r_frame_rate'],v['codec_name'],a['codec_name'])==(1080,1920,'30/1','h264','aac')
assert int(v['nb_frames'])==sum(durations)
verify_inputs()
report={'scenes':scenes,'body_frames':sum(FRAMES),'body_seconds':sum(FRAMES)/30,'ending_frames':170,'total_frames':sum(durations),'total_seconds':sum(durations)/30,'probe':data,'full_decode':'PASS','preservation_410_files':'PASS','tts_speed':1,'ending':'approved MP4 reused without rerender; final concat encoded H264/AAC','visual_qa':'pending'}
(ROOT/'docs/preview-qa-v1.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'preview':str(out),'seconds':sum(durations)/30,'decode':'PASS','preservation':'PASS'}))
