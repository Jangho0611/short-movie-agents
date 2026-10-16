"""Repair only the corrupted second frame of Scene 4 in Preview v2.

The defect is already present in scene04-preview-v1.mp4 at local frame 1.
Scene 4 starts at global frame 588. Its frames 0 and 2 are normal and the
composition is static here (the existing number fade starts at local 118).
Replace global 589 with 588 without deleting frames or altering timestamps.
Lossless H.264 preserves every other decoded video frame; AAC is stream-copied.
"""
from pathlib import Path
import subprocess, json, hashlib, sys, tempfile

P=Path(__file__).resolve().parents[1]
V=P/'public/assets/video'; D=P/'docs'; I=P/'public/assets/images'

# Final local inputs, independent of historical preservation manifests.
INPUT_SHA256 = {'public/assets/video/scene01-preview-v2.mp4': '33f75178582077f84890720f785833520058c95d48e5e251b6ef2841c4d457d7', 'public/assets/video/scene02-preview-v2.mp4': 'd1c4e33b0f334da0c935478893f0a6d789d6589ee2f8e5be141dd7ec8176c88d', 'public/assets/video/scene03-preview-v1.mp4': 'ce3522e3ef9d353f1d388a04b78043eba79ffbc9ef48e6070951cdd819e39a29', 'public/assets/video/scene04-preview-v1.mp4': 'c0de01343d1e48f55dcb2e3b8415616f4331722fc8ea773e59ad0956df1bc0c8', 'public/assets/video/scene05-preview-v1.mp4': '61fac8533d4779d85163bd42b3f1aa61a095865ef5d8c3df0fb5dce42f962be0', 'public/references/daesan-headquarters-ending-approved-v1.mp4': '2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5'}
def verify_inputs():
    for name, expected in INPUT_SHA256.items():
        path = P/name
        if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != expected:
            raise RuntimeError(f'Final input missing or changed: {name}')
verify_inputs()
if '--check-inputs' in sys.argv:
    print('Final input SHA256 QA: PASS')
    raise SystemExit(0)

out=V/'hidden-door-adjustment-preview-v3.mp4'
assert not out.exists()
def run(cmd): return subprocess.check_output(cmd,text=True)
def hashes(path):
    text=run(['ffmpeg','-v','error','-i',str(path),'-map','0:v:0','-an','-f','framemd5','-'])
    return [line.rsplit(',',1)[1].strip() for line in text.splitlines() if line and not line.startswith('#')]
def audio_hash(path):
    return run(['ffmpeg','-v','error','-i',str(path),'-map','0:a:0','-c:a','copy','-f','hash','-hash','sha256','-']).strip()
def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()

# Build the former v2 intermediate from the locked final Scene inputs.
# Same concat filters and encoding as render_preview_v2.py; no Remotion rerender.
_work = tempfile.TemporaryDirectory(prefix='hidden-door-adjustment-repro-')
src = Path(_work.name)/'assembled-v2.mp4'
segments = [P/name for name in INPUT_SHA256]
durations = [164,200,224,255,253,170]
cmd = ['ffmpeg','-n','-v','error']
for f in segments: cmd += ['-i',str(f)]
filters=[]
for i,n in enumerate(durations):
    filters += [f'[{i}:v]setpts=PTS-STARTPTS,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={n/30:.9f},asetpts=PTS-STARTPTS[a{i}]']
filters.append(''.join(f'[v{i}][a{i}]' for i in range(6))+'concat=n=6:v=1:a=1[v][a]')
cmd += ['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-movflags','+faststart',str(src)]
run(cmd)

run(['ffmpeg','-n','-v','error','-i',str(src),'-filter_complex',
     '[0:v]split[main][reference];[main][reference]freezeframes=first=589:last=589:replace=588[v]',
     '-map','[v]','-map','0:a:0','-c:v','libx264','-qp','0','-preset','medium',
     '-pix_fmt','yuvj420p','-color_range','pc','-colorspace','bt470bg',
     '-fps_mode','passthrough','-c:a','copy','-movflags','+faststart',str(out)])
before=hashes(src);after=hashes(out)
assert len(before)==len(after)==1266
changed=[i for i,(a,b) in enumerate(zip(before,after)) if a!=b]
assert changed==[589],changed
assert after[589]==before[588]==after[588]
assert audio_hash(src)==audio_hash(out)
run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
data=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(out)]))
v=next(s for s in data['streams'] if s['codec_type']=='video')
a=next(s for s in data['streams'] if s['codec_type']=='audio')
assert (v['width'],v['height'],v['r_frame_rate'],v['nb_frames'],v['codec_name'],a['codec_name'])==(1080,1920,'30/1','1266','h264','aac')
assert abs(float(data['format']['duration'])-42.2)<.00001
verify_inputs()
for n in [586,587,588,589,590,591]:
    run(['ffmpeg','-n','-v','error','-i',str(out),'-vf',f'select=eq(n\\,{n})','-fps_mode','passthrough','-frames:v','1',str(I/f'boundary-v3-frame{n}.png')])
report={
 'source':str(src),'output':str(out),'boundary_frame_zero_based':588,'boundary_seconds':19.6,
 'defect_frame_zero_based':589,'defect_seconds':589/30,
 'cause':'Scene 4 source MP4 local frame 1 contains a tiled/repeated raster, inherited by Preview v2. Adjacent source frames 0 and 2 are normal. No empty Sequence, transition, global opacity fade, or background change.',
 'upstream_limit':'The source raster defect is confirmed; its lower-level browser/capture origin is not proven.',
 'repair':'Only frame 589 replaced with the preceding normal Scene 4 frame 588. No duration, timestamp, design, asset, subtitle, motion or audio edits.',
 'encoding':'Lossless H.264; original full-range bt470bg retained. AAC stream copy.',
 'decoded_frame_hash_check':{'total':1266,'changed_frames':changed,'all_other_1265_frames_identical':True,'replacement_equals_source_frame588':True},
 'aac_bitstream_identical':True,'full_decode':'PASS','preserved_existing_files':len(INPUT_SHA256),
 'frames':1266,'seconds':42.2,'probe':data,'visual_boundary_review':'pending'
}
(D/'preview-qa-v3.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'output':str(out),'changed_frames':changed,'all_other_frames':'pixel-identical','audio':'bitstream-identical','seconds':42.2,'decode':'PASS'}))
