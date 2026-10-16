from pathlib import Path
import subprocess,json,hashlib
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';I=P/'public/assets/images';D=P/'docs'

# Final archive input lock; --dry-run verifies without producing media.
import sys
FINAL_INPUTS = {'public/assets/video/scene01-doormaster-caption-test-v2.mp4': '1755cef01ede4ce4881b55bc45df581bfd7b27c72cf56b9963d545df0d092a7a', 'public/assets/video/scene02-doormaster-caption-test-v2.mp4': 'd5a0ff4e41388b6b0eb3c5d3c1180bd23d12bb09e13c871fc8186c2139d2ae71', 'public/assets/video/scene03-caption-visual-v4.mp4': '2b61680fb8ffbd95cc32dee834be22069d852e8743aaa5e514e337a551f15e73', 'public/assets/video/scene04-caption-visual-v4.mp4': '4324184e944c3ddd5064bf94652e5f7351b45b45d34ca072cdfea7cb96f48d6a', 'public/assets/video/scene05-caption-visual-v4.mp4': '85acef0b9a5b099928e34bdb47e1eeeb4def6d6cf00fed84026b91e7462fd65c', 'public/assets/video/scene06-caption-visual-v4.mp4': '73811ca42a4461a729ffdce53dc44cd2c6b9ff630dd5ecbdb0eca2e57441b65e', 'public/assets/video/door-panel-replacement-preview-v3.mp4': '09b3756481696b1242647b5fe30867298dea6aea9bb49d292febecc559bd7baa', 'public/assets/video/daesan-headquarters-ending-approved-v1.mp4': '2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5', 'public/assets/audio/scene01-tts-v8.mp3': 'c557312c5df344d379a1a920b694db5d1595876c83e66e3b43c012881e736a0a', 'public/assets/audio/scene02-tts-v10-response.mp3': '42419443712b729f3e3adf98ec2b996cb44f2b1a3bf54f4e8f37f5009b26eea9', 'public/assets/audio/scene03-tts-v8.mp3': '7ab3562f13074b4a5a8b2b149dd8e275588cf23824a2c72f4124541aba33f3d3', 'public/assets/audio/scene04-tts-v8.mp3': '07b784ded0f1b01031f80a93231971cca0516d7bf836b6b95b62be398b80e306', 'public/assets/audio/scene05-tts-v11.mp3': '7e9fed7a921a77f984d9b4fa53565975e19671c5a67fad9f247f0361b97c6aed', 'public/assets/audio/scene06-tts-v8.mp3': '70b0b8d0322765fda783822e52dbe71264c5829fa7789d3971419436a01aeead'}
for rel, expected in FINAL_INPUTS.items():
    assert hashlib.sha256((P/rel).read_bytes()).hexdigest() == expected, rel
if "--dry-run" in sys.argv:
    print("PASS: final inputs", len(FINAL_INPUTS))
    raise SystemExit(0)

def run(a):
 if '-n' in a and Path(a[-1]).is_file():return None
 return subprocess.run(a,check=True,capture_output=True)
t=json.loads((P/'src/timing-v3.json').read_text())['scenes']
inputs=[V/f'scene0{i}-doormaster-caption-test-v2.mp4' for i in [1,2]]
for n in range(3,7):
 dest=V/f'scene0{n}-doormaster-caption-v4.mp4'
 run(['ffmpeg','-v','error','-n','-i',str(V/f'scene0{n}-caption-visual-v4.mp4'),'-i',str(P/'public/assets/audio'/t[n-1]['audioFile']),'-map','0:v','-map','1:a','-c:v','copy','-c:a','aac','-b:a','192k',str(dest)])
 inputs.append(dest)
inputs.append(V/'daesan-headquarters-ending-approved-v1.mp4')
c=D/'preview-v4-concat.txt';c.write_text(''.join("file '"+str(p)+"'\nduration "+str(f/30)+'\n' for p,f in zip(inputs,[100,125,126,114,113,118,170])))
out=V/'door-panel-replacement-preview-v4.mp4'
run(['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(c),'-i',str(V/'door-panel-replacement-preview-v3.mp4'),'-map','0:v','-map','1:a','-c','copy','-movflags','+faststart',str(out)])
