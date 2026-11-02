from pathlib import Path
import subprocess,json,hashlib
from PIL import Image
p=Path(__file__).resolve().parents[1];imgs=p/'public/assets/images/blender-concept-v1';vid=p/'public/assets/video/scene01-blender-concept-test-v1.mp4'
frames=[1,16,28,34,46,58,76];sheet=Image.new('RGB',(7*288,400),'#F7F4EE')
for i,f in enumerate(frames):
 im=Image.open(imgs/f'frame-{f:04}.png').convert('RGBA');im.thumbnail((288,400));sheet.paste(im,(i*288,0),im)
with (p/'public/assets/images/blender-concept-motion-contact-v1.jpg').open('xb') as o:sheet.save(o,format='JPEG',quality=95)
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-count_frames','-show_entries','stream=codec_name,width,height,r_frame_rate,nb_read_frames,duration:format=duration','-of','json',str(vid)]))
subprocess.run(['ffmpeg','-v','error','-i',str(vid),'-f','null','-'],check=True)
audio=p/'public/assets/audio/scene01-tts-script-v3-take-v1.mp3'
qa={'probe':probe,'decode':'PASS','tts_sha256':hashlib.sha256(audio.read_bytes()).hexdigest(),'blender':'5.2.3 LTS','render_frames':len(list(imgs.glob('frame-*.png'))),'model':'Concept only; not verified Younglim mechanism or handedness','keyframes_zero_based':{'0':[0,0],'6':[0,0],'27':[-90,90],'33':[-90,90],'57':[-180,180],'75':[-180,180]},'holes_per_leaf':5,'thickness_model_units':.3,'axis_fixed':True,'camera':'fixed orthographic; shallow oblique','approval':'PENDING'}
with (p/'docs/scene01-blender-concept-v1-qa.json').open('x') as f:json.dump(qa,f,ensure_ascii=False,indent=2)
print(json.dumps(qa,ensure_ascii=False))
