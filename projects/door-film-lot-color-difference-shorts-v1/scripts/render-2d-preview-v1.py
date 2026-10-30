from pathlib import Path
import subprocess
p=Path('/Users/janghokim/Documents/short-movie-agents/projects/door-film-lot-color-difference-shorts-v1')
for i in range(1,7):
 with (p/f'docs/render-2d-scene0{i}-v1.log').open('x') as log:
  for mode in ['still','render']:
   args=['node_modules/.bin/remotion',mode,'src/Info2DV1.tsx',f'InfoScene0{i}',f'public/assets/{"images" if mode=="still" else "video"}/scene0{i}-2d-preview-v1.{"png" if mode=="still" else "mp4"}','--browser-executable=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome']
   args+=['--frame=120'] if mode=='still' else ['--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2']
   subprocess.run(args,cwd=p,stdout=log,stderr=subprocess.STDOUT,check=True)
 print('DONE',i,flush=True)
