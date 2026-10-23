import subprocess,json,pathlib
from PIL import Image,ImageDraw
import io
p=pathlib.Path(__file__).resolve().parents[1];v=p/'public/assets/video';full=v/'doormaster-ep02-preview-v3.mp4';end=v/'daesan-ending-gemini-alnilam-preview-v1.mp4'
def run(args):return subprocess.run(args,capture_output=True,check=True)
def hashes(f,trim=None):
 c=['ffmpeg','-v','error','-i',str(f),'-an']
 if trim:c+=['-vf',trim]
 c+=['-f','framemd5','-'];return [x.split(',')[-1].strip() for x in run(c).stdout.decode().splitlines() if not x.startswith('#')]
r={'ending_decoded_frames_identical':hashes(full,'trim=start_frame=688,setpts=PTS-STARTPTS')==hashes(end),'ending_gain_reapplied':False}
for label,start,dur in [('scene5',17.7,157/30),('ending',688/30,170/30),('transition',21.5,3)]:
 x=run(['ffmpeg','-hide_banner','-ss',str(start),'-i',str(full),'-t',str(dur),'-af','ebur128=peak=true,silencedetect=noise=-40dB:d=0.1','-f','null','-']).stderr.decode()
 with (p/f'docs/preview-v3-{label}-audio.log').open('x') as f:f.write(x)
 r[label]=x[x.rfind('Summary:'):]
 print(label,r[label])
with (p/'docs/preview-v3-ending-qa.json').open('x') as f:json.dump(r,f,indent=2)
canvas=Image.new('RGB',(1080,1280),'white')
for j,(scene,t) in enumerate([(1,.7),(1,2.2),(2,.8),(2,3),(3,.7),(3,3.4),(4,.9),(4,3.5),(5,1),(5,3.8),(6,1),(6,4.8)]):
 f=v/f'scene0{scene}-preview-v3.mp4' if scene<6 else end
 b=run(['ffmpeg','-v','error','-ss',str(t),'-i',str(f),'-frames:v','1','-vf','scale=270:480','-f','image2pipe','-vcodec','png','-']).stdout
 im=Image.open(io.BytesIO(b));im.thumbnail((240,400));canvas.paste(im,((j%4)*270,(j//4)*426))
 ImageDraw.Draw(canvas).text(((j%4)*270,(j//4)*426+400),f'Scene {scene} / {t}s',fill='black')
canvas.save(p/'public/assets/images/preview-v3-contact-qa.png')
print(r['ending_decoded_frames_identical'])
