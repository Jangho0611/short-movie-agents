import subprocess
from pathlib import Path
for scene in range(1,6):
    out=f"public/assets/video/scene{scene:02}-preview-rewrite-v1.mp4"
    assert not Path(out).exists(), out
    subprocess.run(["node_modules/.bin/remotion","render","src/rewrite-entry.tsx",f"Rewrite{scene}",out,"--codec=h264","--crf=18","--audio-bitrate=192k","--concurrency=2"],check=True)
