from pathlib import Path
from PIL import Image,ImageDraw
import subprocess,json,hashlib
p=Path(__file__).resolve().parents[1];img=p/'public/assets/images';vid=p/'public/assets/video/scene01-blender-concept-test-v2.mp4'
frames=[1,28,46,76];sheet=Image.new('RGB',(4*360,1040),'#F7F4EE');d=ImageDraw.Draw(sheet)
for row,v in enumerate([1,2]):
 for col,f in enumerate(frames):
  im=Image.open(img/f'blender-concept-v{v}/frame-{f:04}.png').convert('RGBA');im.thumbnail((360,500));sheet.paste(im,(col*360,row*520+20),im);d.text((col*360+12,row*520+5),f'v{v} / frame {f}',fill='#191917')
with (img/'blender-material-v1-v2-comparison.jpg').open('xb') as f:sheet.save(f,format='JPEG',quality=95)
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-count_frames','-show_entries','stream=codec_name,width,height,r_frame_rate,nb_read_frames,duration:format=duration','-of','json',str(vid)]))
subprocess.run(['ffmpeg','-v','error','-i',str(vid),'-f','null','-'],check=True)
def audiohash(v):return subprocess.check_output(['ffmpeg','-v','error','-i',str(v),'-map','0:a:0','-f','hash','-hash','sha256','-']).decode().strip()
old=p/'public/assets/video/scene01-blender-concept-test-v1.mp4'
qa={'probe':probe,'full_decode':'PASS','decoded_audio_identical_to_v1':audiohash(old)==audiohash(vid),'tts_sha256':hashlib.sha256((p/'public/assets/audio/scene01-tts-script-v3-take-v1.mp3').read_bytes()).hexdigest(),'scene_source_only_image_path_changed':(p/'src/Scene1BlenderConceptV2.tsx').read_text().replace('blender-concept-v2/','blender-concept-v1/')==(p/'src/Scene1BlenderConceptV1.tsx').read_text(),'invariance':json.loads((p/'blender/concept-v2/invariance-qa.json').read_text()),'visual_approval':'PENDING'}
with (p/'docs/scene01-blender-material-v2-qa.json').open('x') as f:json.dump(qa,f,ensure_ascii=False,indent=2)
print(json.dumps(qa,ensure_ascii=False))
