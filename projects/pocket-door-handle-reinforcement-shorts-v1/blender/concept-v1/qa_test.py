from pathlib import Path
from PIL import Image,ImageChops
import json,hashlib,subprocess
p=Path(__file__).resolve().parents[2];folder=p/'public/assets/images/concept-motion-v1';video=p/'public/assets/video/scene02-03-concept-motion-test-v1.mp4'
frames=sorted(folder.glob('frame-*.png'));assert len(frames)==120
assert all(Image.open(f).size==(540,960) for f in frames)
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-count_frames','-show_streams','-show_format','-of','json',str(video)]));streams=probe['streams'];assert len(streams)==1 and streams[0]['codec_type']=='video';assert streams[0]['nb_read_frames']=='120';assert abs(float(probe['format']['duration'])-5)<.001
subprocess.run(['ffmpeg','-v','error','-i',str(video),'-f','null','-'],check=True)
a=Image.open(frames[98]);hold=all(ImageChops.difference(a,Image.open(f)).getbbox() is None for f in frames[99:])
old=json.loads((p/'docs/still-qa-v3.json').read_text());unchanged=all(hashlib.sha256((p/f['file']).read_bytes()).hexdigest()==f['sha256'] for f in old['frames'])
qa={'resolution':[540,960],'fps':24,'frames':120,'duration_seconds':5,'audio_streams':0,'decode':'PASS','end_hold_identical_pixels_frames_99_120':hold,'v3_frames_unchanged':unchanged,'camera_count':1,'mesh_transform_animation':False,'clip_directly_viewed':False,'visual_limits':['conceptual product approximation, not CAD','low contrast interior volumes','no labels baked; abstract support relationship needs later labels','installation geometry and fixing remain unverified'],'video_sha256':hashlib.sha256(video.read_bytes()).hexdigest()}
(p/'blender/concept-v1/qa-v1.json').write_text(json.dumps(qa,ensure_ascii=False,indent=2));print(json.dumps(qa,ensure_ascii=False,indent=2))
