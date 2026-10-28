import subprocess
from pathlib import Path
for n,v in [(1,3),(2,8),(3,7),(4,3),(5,3)]:
 with open(f'docs/render-scene{n:02}-clean.log','x') as log:
  subprocess.run(['node_modules/.bin/remotion','render','src/preview-v6-entry.tsx',f'Scene{n}Clean',f'public/assets/video/scene{n:02}-preview-v{v}.mp4','--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2'],stdout=log,stderr=log,check=True)
 print(f'Scene {n} complete',flush=True)
