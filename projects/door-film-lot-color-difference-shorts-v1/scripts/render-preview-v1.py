from pathlib import Path
import subprocess
p=Path('/Users/janghokim/Documents/short-movie-agents/projects/door-film-lot-color-difference-shorts-v1')
base=['node_modules/.bin/remotion'];browser='--browser-executable=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
for i in range(1,7):
 with (p/f'docs/render-scene0{i}-v1.log').open('x') as log:
  subprocess.run(base+['render','src/index.tsx',f'Scene0{i}',f'public/assets/video/scene0{i}-preview-v1.mp4','--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2',browser],cwd=p,stdout=log,stderr=subprocess.STDOUT,check=True)
 print('Rendered scene',i,flush=True)
 if i>1:
  subprocess.run(base+['still','src/index.tsx',f'Scene0{i}',f'public/assets/images/scene0{i}-preview-v1-qa.png','--frame=45',browser],cwd=p,stdout=subprocess.DEVNULL,check=True)
with (p/'docs/render-ending-v1.log').open('x') as log:
 subprocess.run(base+['render','src/index.tsx','DaesanEndingApprovedV1','public/assets/video/ending-preview-v1.mp4','--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2',browser],cwd=p,stdout=log,stderr=subprocess.STDOUT,check=True)
print('Rendered ending',flush=True)
