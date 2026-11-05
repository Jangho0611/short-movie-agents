from pathlib import Path
import json,subprocess,shutil
from PIL import Image,ImageDraw,ImageFont,ImageChops,ImageStat
R=Path(__file__).resolve().parents[2];D=Path(__file__).parent;F=R/'public/assets/images/v19-frames';M=json.loads((D/'render-manifest-checked.json').read_text())
for item in M:
 out=F/('frame-%04d.png'%item['frame']);assert not out.exists()
 src=item['sources']
 if len(src)==1:shutil.copyfile(src[0]['path'],out)
 else:
  a=Image.open(src[0]['path']).convert('RGB');b=Image.open(src[1]['path']).convert('RGB');Image.blend(a,b,src[1]['weight']).save(out)
video=R/'public/assets/video/scene03-blender-assembly-motion-test-v19.mp4'
subprocess.run(['ffmpeg','-v','error','-n','-framerate','24','-i',str(F/'frame-%04d.png'),'-frames:v','168','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-an','-movflags','+faststart',str(video)],check=True)
probe=subprocess.check_output(['ffprobe','-v','error','-count_frames','-show_streams','-show_format','-of','json',str(video)],text=True);(D/'video-probe.json').write_text(probe)
subprocess.run(['ffmpeg','-v','error','-i',str(video),'-f','null','-'],check=True)
indices=[1,25,43,52,61,85,97,106,120,130,141,168];sheet=Image.new('RGB',(1080,3*510),(235,233,228));draw=ImageDraw.Draw(sheet)
for k,idx in enumerate(indices):
 im=Image.open(F/('frame-%04d.png'%idx)).convert('RGB');im.thumbnail((270,480));x=k%4*270;y=k//4*510;sheet.paste(im,(x,y));draw.text((x+8,y+485),f'F{idx:03d}  {(idx-1)/24:.2f}s',fill=(30,30,30))
sheet.save(R/'public/assets/images/scene03-blender-assembly-contact-sheet-v19.png')
for idx in [1,85,141]:shutil.copyfile(F/('frame-%04d.png'%idx),R/'public/assets/images'/f'scene03-blender-assembly-key-{idx:03d}-v19.png')
a=Image.open(F/'frame-0168.png').convert('RGB');b=Image.open(R/'public/assets/images/pocket-handle-single-cutout-post-v14.png').convert('RGB');diff=ImageChops.difference(a,b);stat=ImageStat.Stat(diff);(D/'final-image-comparison.json').write_text(json.dumps({'mean_absolute_rgb_difference':stat.mean,'exact_pixel_match':diff.getbbox() is None},indent=2))
print(probe);print('FINAL_DIFF',stat.mean)
