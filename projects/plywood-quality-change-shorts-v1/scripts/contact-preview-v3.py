from pathlib import Path
import subprocess
from PIL import Image,ImageDraw
P=Path(__file__).resolve().parents[1];Q=P/'qa/preview-v3';V=P/'public/assets/video'
items=[(1,30),(2,75),(3,124),(3,125),(4,190),(5,190),(6,190)]
canvas=Image.new('RGB',(7*270,510),'#ffffff');draw=ImageDraw.Draw(canvas)
for i,(s,f) in enumerate(items):
 out=Q/f'rendered-scene{s:02d}-frame{f}.png'
 subprocess.run(['ffmpeg','-v','error','-n','-i',str(V/f'scene{s:02d}-preview-v3.mp4'),'-vf',f'select=eq(n\\,{f})','-frames:v','1',str(out)],check=True)
 im=Image.open(out);im.thumbnail((270,480));canvas.paste(im,(i*270,30));draw.text((i*270+5,8),f'Scene {s} / frame {f}',fill='black')
canvas.save(Q/'rendered-contact.png')
