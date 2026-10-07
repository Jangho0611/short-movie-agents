#!/usr/bin/env python3
"""Standalone QA: only local assets and recorded baseline hashes are read."""
from pathlib import Path
import argparse, array, hashlib, json, math, re, subprocess

ROOT=Path(__file__).resolve().parent.parent
parser=argparse.ArgumentParser()
parser.add_argument('--video',default='out/sosong-lumber-grade-preview-v1-independent-check.mp4')
parser.add_argument('--baseline',default='out/sosong-lumber-grade-preview-v1.mp4')
parser.add_argument('--version',default='v2')
args=parser.parse_args()
assert re.fullmatch(r'v[2-9][0-9]*',args.version), 'Use a new QA version, v2 or later.'
def inside(rel):
    path=(ROOT/rel).resolve()
    assert path.is_relative_to(ROOT), 'QA inputs must be project-local'
    return path
video=inside(args.video); baseline=inside(args.baseline)
qa=ROOT/'out/qa'; qa.mkdir(parents=True,exist_ok=True)
report_path=qa/f'preview-mechanical-{args.version}.json'
compare_path=qa/f'encoded-frame-comparison-{args.version}.json'
assert not report_path.exists() and not compare_path.exists(), 'Existing QA is preserved; choose a new version.'
def sha(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def run(cmd):return subprocess.run(cmd,check=True,capture_output=True).stdout
def probe(path):return json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(path)]))
def streams(meta):return next(s for s in meta['streams'] if s['codec_type']=='video'), next(s for s in meta['streams'] if s['codec_type']=='audio')
def decode(path):
    r=subprocess.run(['ffmpeg','-v','error','-xerror','-i',str(path),'-map','0:v:0','-map','0:a:0','-f','null','-'],capture_output=True,text=True)
    assert r.returncode==0 and not r.stderr.strip(), r.stderr
meta=probe(video); old=probe(baseline); v,a=streams(meta); ov,oa=streams(old)
timing=json.loads((ROOT/'src/timing.json').read_text())
assert (v['width'],v['height'],v['r_frame_rate'],int(v['nb_frames']))==(1080,1920,'30/1',885)
assert v['codec_name']=='h264' and a['codec_name']=='aac'
for key in ['width','height','r_frame_rate','nb_frames']:assert v[key]==ov[key]
assert abs(float(v['duration'])-float(ov['duration']))<1/30
assert abs(float(a['duration'])-float(oa['duration']))<0.05
for path in [baseline,video]:decode(path)
# This baseline was recorded only after all 42 files matched source size and SHA256.
copy=json.loads((qa/'slim-copy-integrity-v2.json').read_text())
modified={'README.md','docs/asset-sources.json','scripts/qa-preview.py','docs/26.09.23수정.md'}
verified=[]
for row in copy['files']:
    if row['relativePath'] in modified:continue
    local=inside(row['relativePath'])
    assert sha(local)==row['sha256'],row['relativePath']
    verified.append(row['relativePath'])
assert len(verified)==38
scene_audio=[]
for scene in [*timing['scenes'],timing['ending']]:
    audiofile=ROOT/'public/assets/audio'/scene['audio']
    duration=float(probe(audiofile)['format']['duration'])
    assert scene['durationInFrames']/30-duration>=0.39
    scene_audio.append({'file':scene['audio'],'seconds':duration,'startFrame':scene['from'],'durationInFrames':scene['durationInFrames']})

def raw_frame(path,frame):
    return run(['ffmpeg','-v','error','-i',str(path),'-vf',f'select=eq(n\\,{frame})','-frames:v','1','-pix_fmt','rgb24','-f','rawvideo','-'])
comparison=[]
for scene in [*timing['scenes'],{'id':'ending',**timing['ending']}]:
    frame=scene['from']+int(scene['durationInFrames']*.58)
    one=raw_frame(baseline,frame);two=raw_frame(video,frame)
    assert len(one)==len(two)==1080*1920*3
    same=one==two
    mae=0 if same else sum(abs(x-y) for x,y in zip(one,two))/len(one)
    assert mae<3, f'Visual mismatch in Scene {scene["id"]}: {mae}'
    output=qa/f'independent-scene-{scene["id"]}-{args.version}.png'
    subprocess.run(['ffmpeg','-v','error','-n','-i',str(video),'-vf',f'select=eq(n\\,{frame})','-frames:v','1',str(output)],check=True)
    comparison.append({'scene':scene['id'],'frame':frame,'meanAbsoluteRgbError':mae,'decodedPixelsIdentical':same,'pass':True})

def pcm(path):return run(['ffmpeg','-v','error','-i',str(path),'-vn','-ar','48000','-ac','1','-f','s16le','-'])
one=pcm(baseline);two=pcm(video)
assert len(one)==len(two),'Decoded audio sample count differs'
audio_same=one==two
if audio_same:
    mae=0;corr=1
else:
    x=array.array('h',one);y=array.array('h',two);n=len(x)
    mae=sum(abs(a-b) for a,b in zip(x,y))/n/32768
    sx=sum(x);sy=sum(y);sxx=sum(a*a for a in x);syy=sum(b*b for b in y);sxy=sum(a*b for a,b in zip(x,y))
    corr=(n*sxy-sx*sy)/math.sqrt((n*sxx-sx*sx)*(n*syy-sy*sy))
assert mae<0.002 and corr>0.999,'Decoded audio differs materially'
contact=qa/f'independent-motion-contact-{args.version}.png'
subprocess.run(['ffmpeg','-v','error','-n','-i',str(video),'-vf',"select='eq(n,0)+eq(n,30)+eq(n,60)+eq(n,108)+eq(n,602)+eq(n,632)+eq(n,662)+eq(n,714)',scale=270:480,tile=4x2",'-frames:v','1',str(contact)],check=True)
frame_report={'baseline':args.baseline,'independent':args.video,'frames':comparison,'pass':True}
compare_path.write_text(json.dumps(frame_report,indent=2,ensure_ascii=False)+'\n')
report={'status':'PASS','externalSourceFilesRead':False,'baseline':args.baseline,'independent':args.video,
        'width':v['width'],'height':v['height'],'fps':30,'frames':int(v['nb_frames']),
        'videoSeconds':float(v['duration']),'containerSeconds':float(meta['format']['duration']),
        'audioSeconds':float(a['duration']),'videoCodec':v['codec_name'],'audioCodec':a['codec_name'],
        'sceneTiming':scene_audio,'sceneTimingBasis':'src/timing.json and all src files match copied v1 SHA256',
        'verifiedUnmodifiedFiles':verified,'fullDecodeBoth':'PASS','frameComparison':comparison,
        'audioComparison':{'decodedPcmIdentical':audio_same,'samples':len(one)//2,'sampleRate':48000,'normalizedMAE':mae,'correlation':corr},
        'newTtsCalls':0,'newAiImageVideoCalls':0,'originalQaV1':'preserved'}
report_path.write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(report,ensure_ascii=False,indent=2))
