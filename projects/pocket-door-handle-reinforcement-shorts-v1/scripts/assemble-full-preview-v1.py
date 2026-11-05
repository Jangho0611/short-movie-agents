from pathlib import Path
import subprocess as sp,json,hashlib,tempfile
p=Path(__file__).resolve().parents[1];root=p.parents[1];ending=root/'assets/daesan-ending'
out=p/'public/assets/video/pocket-door-doormaster-full-preview-v1.mp4';sheet=p/'public/assets/images/pocket-door-doormaster-full-qa-v1.png'
for x in [out,sheet]:assert not x.exists(),x
names=['scene01-doormaster-v2.mp4','scene02-doormaster-v3.mp4','scene03-doormaster-preview-v2.mp4','scene04-doormaster-preview-v5.mp4','scene05-doormaster-preview-v1.mp4']
files=[p/'public/assets/video'/n for n in names]+[ending/'video/daesan-headquarters-ending-approved-v1.mp4']
frames=[147,165,213,255,165,170];dur=[n/30 for n in frames]
manifest=json.loads((ending/'docs/asset-sha256.json').read_text())
for n,h in manifest.items():assert hashlib.sha256((ending/n).read_bytes()).hexdigest()==h,n
wavs=[p/'public/assets/audio'/n for n in ['scene01-tts-v10.wav','scene02-tts-v4.wav','scene03-tts-v5.wav','scene04-tts-v4.wav','scene05-tts-v4.wav']]
hashes={str(f):hashlib.sha256(f.read_bytes()).hexdigest() for f in files+wavs}
tmp=Path(tempfile.mkdtemp(prefix='pocket-full-v1-'))
playlist=tmp/'video.ffconcat';playlist.write_text('ffconcat version 1.0\n'+''.join("file '"+str(f)+"'\nduration "+str(d)+"\n" for f,d in zip(files,dur)))
sp.run(['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(playlist),'-map','0:v:0','-an','-c:v','copy',str(tmp/'video.mp4')],check=True)
args=['ffmpeg','-v','error','-n','-i',str(tmp/'video.mp4')]
for f in files:args+=['-i',str(f)]
filters=[]
for i,d in enumerate(dur):filters.append(f'[{i+1}:a:0]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,apad,atrim=duration={d},asetpts=PTS-STARTPTS[a{i}]')
filters.append(''.join(f'[a{i}]' for i in range(6))+'concat=n=6:v=0:a=1[a]')
sp.run(args+['-filter_complex',';'.join(filters),'-map','0:v:0','-map','[a]','-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)],check=True)
sp.run(['ffmpeg','-v','error','-n','-i',str(out),'-vf',"select='eq(n,90)+eq(n,270)+eq(n,470)+eq(n,720)+eq(n,900)+eq(n,1065)',scale=360:640,tile=3x2",'-frames:v','1',str(sheet)],check=True)
for f,h in hashes.items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h
with (p/'scripts/full-preview-v1-preservation.json').open('x') as f:json.dump(hashes,f,indent=2)
print('DONE',tmp)
