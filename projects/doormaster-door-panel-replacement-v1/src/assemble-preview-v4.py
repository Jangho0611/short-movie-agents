from pathlib import Path
import subprocess,json,hashlib
from PIL import Image,ImageDraw
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';I=P/'public/assets/images';D=P/'docs'
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
qa=Image.new('RGB',(1440,1980),'#eeeae2');dr=ImageDraw.Draw(qa)
for j,n in enumerate(range(3,7)):
 for k,(ver,src) in enumerate([(3,V/(['scene03-photoreal-test-v3.mp4']+[f'scene0{i}-preview-v3.mp4' for i in [4,5,6]])[j]),(4,inputs[n-1])]):
  frame=I/f'preview-v4-qa-scene{n}-v{ver}.png';run(['ffmpeg','-v','error','-n','-ss','3.2','-i',str(src),'-frames:v','1',str(frame)])
  x=(j%2)*720+k*360;y=(j//2)*990
  qa.paste(Image.open(frame).resize((360,640)),(x,y+35));dr.text((x+12,y+10),f'Scene {n} / Preview v{ver}',fill='black')
 # First caption as an additional detail under the full frame pair.
 frame=I/f'preview-v4-qa-scene{n}-first.png';run(['ffmpeg','-v','error','-n','-ss','0.7','-i',str(inputs[n-1]),'-frames:v','1',str(frame)])
 qa.paste(Image.open(frame).crop((0,0,1080,298)).resize((720,199)),((j%2)*720,(j//2)*990+700))
qa.save(I/'preview-v4-caption-comparison.png')
run(['ffmpeg','-v','error','-i',str(out),'-f','null','-'])
def ah(p):return run(['ffmpeg','-v','error','-i',str(p),'-map','0:a','-c','copy','-f','hash','-']).stdout.decode().strip()
old=json.loads((D/'preview-v4-preservation.json').read_text());changed=[p for p,h in old.items() if hashlib.sha256((P/p).read_bytes()).hexdigest()!=h]
probe=json.loads(run(['ffprobe','-v','error','-show_entries','stream=codec_type,width,height,r_frame_rate,nb_frames,duration','-of','json',str(out)]).stdout)
report={'audio_bitstream_same_as_v3':ah(out)==ah(V/'door-panel-replacement-preview-v3.mp4'),'existing_files_changed':changed,'decode':'PASS','probe':probe}
(D/'preview-v4-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(report)
