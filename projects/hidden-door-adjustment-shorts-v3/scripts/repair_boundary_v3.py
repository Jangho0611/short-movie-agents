"""Repair only the corrupted second frame of Scene 4 in Preview v2.

The defect is already present in scene04-preview-v1.mp4 at local frame 1.
Scene 4 starts at global frame 588. Its frames 0 and 2 are normal and the
composition is static here (the existing number fade starts at local 118).
Replace global 589 with 588 without deleting frames or altering timestamps.
Lossless H.264 preserves every other decoded video frame; AAC is stream-copied.
"""
from pathlib import Path
import subprocess, json, hashlib

P=Path(__file__).resolve().parents[1]
V=P/'public/assets/video'; D=P/'docs'; I=P/'public/assets/images'
src=V/'hidden-door-adjustment-preview-v2.mp4'
out=V/'hidden-door-adjustment-preview-v3.mp4'
assert not out.exists()
def run(cmd): return subprocess.check_output(cmd,text=True)
def hashes(path):
    text=run(['ffmpeg','-v','error','-i',str(path),'-map','0:v:0','-an','-f','framemd5','-'])
    return [line.rsplit(',',1)[1].strip() for line in text.splitlines() if line and not line.startswith('#')]
def audio_hash(path):
    return run(['ffmpeg','-v','error','-i',str(path),'-map','0:a:0','-c:a','copy','-f','hash','-hash','sha256','-']).strip()
def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()

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
baseline=json.loads((D/'preview-v3-preservation-before.json').read_text())
assert all(sha(Path(f))==h for f,h in baseline.items())
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
 'aac_bitstream_identical':True,'full_decode':'PASS','preserved_existing_files':len(baseline),
 'frames':1266,'seconds':42.2,'probe':data,'visual_boundary_review':'pending'
}
(D/'preview-qa-v3.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'output':str(out),'changed_frames':changed,'all_other_frames':'pixel-identical','audio':'bitstream-identical','seconds':42.2,'decode':'PASS'}))
