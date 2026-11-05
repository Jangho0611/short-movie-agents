import wave,array,math,json,hashlib,subprocess,argparse
from pathlib import Path
r=Path(__file__).resolve().parents[1];d=r/'public/assets/audio';sr=24000
parser=argparse.ArgumentParser();parser.add_argument('--verify-only',action='store_true');args=parser.parse_args()
out=d/'scene01-tts-v10.wav'
if not args.verify_only: assert not out.exists()
required=json.loads((r/'scripts/final-tts-required-hashes-v1.json').read_text())
for n,h in required.items():
 if n=='scene01-tts-v10.wav' and not out.exists(): continue
 assert hashlib.sha256((d/n).read_bytes()).hexdigest()==h,n
def read(k):
 with wave.open(str(d/('scene01-tts-v9-part-a.wav' if k=='a' else 'scene01-tts-v10-part-b.wav'))) as w:
  assert w.getframerate()==sr and w.getsampwidth()==2 and w.getnchannels()==1
  return array.array('h',w.readframes(w.getnframes()))
a=read('a');b=read('b')
# -50dB boundaries with 100ms protective tails. Preserve A leading low-energy content.
a_end=round((2.636958+.1)*sr);b_start=round((.328917-.1)*sr)
a_start=round((.32925-.1)*sr)
pa=array.array('h',a[a_start:a_end]);pb=array.array('h',b[b_start:])
# No gain change; 3ms fades only at cut edges within low-level guards.
gain=1.0;fade=round(.003*sr)
pa=array.array('h',(round(v*gain) for v in pa));pb=array.array('h',(round(v*gain) for v in pb))
for i in range(fade):
 pa[len(pa)-fade+i]=round(pa[len(pa)-fade+i]*(1-i/(fade-1)))
 pb[i]=round(pb[i]*i/(fade-1))
joined=pa+array.array('h',[0]*round(.05*sr))+pb
if args.verify_only:
 with wave.open(str(out)) as approved:
  assert approved.getframerate()==sr and approved.getsampwidth()==2 and approved.getnchannels()==1
  assert approved.readframes(approved.getnframes())==joined.tobytes(), 'Approved PCM mismatch'
 print('PASS: reconstructed PCM identical; final 5 WAVs and 2 inputs verified; no file written')
 raise SystemExit(0)
with out.open('xb') as f:
 with wave.open(f,'wb') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(sr);w.writeframes(joined.tobytes())
info={'duration':len(joined)/sr,'a_trim_end':a_end/sr,'b_trim_start':b_start/sr,'inserted_digital_silence':.05,'guard_a':.1,'guard_b':.1,'gap_at_minus50db':.25,'gain_db_both':0.0,'a_trim_start':a_start/sr,'edge_fades_seconds':.003,'raw_a_fullscale':sum(abs(x)>=32767 for x in a),'raw_b_fullscale':sum(abs(x)>=32767 for x in b),'output_peak':max(abs(x) for x in joined),'sha256':hashlib.sha256(out.read_bytes()).hexdigest()}
with (r/'scripts/scene01-tts-v10-edit.json').open('x') as f:json.dump(info,f,indent=2)
for k in ['scene01-tts-v9-part-a.wav','scene01-tts-v10-part-b.wav','scene01-tts-v10.wav']:subprocess.run(['ffmpeg','-v','error','-i',str(d/k),'-f','null','-'],check=True,capture_output=True)
# Historical all-version hashes remain in scene01-tts-v10-preservation.json; not a runtime input.
assert hashlib.sha256(out.read_bytes()).hexdigest()==required['scene01-tts-v10.wav']
print(json.dumps(info,indent=2));print('required final assets',len(required))
