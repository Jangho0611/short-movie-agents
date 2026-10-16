from pathlib import Path
import subprocess,json,hashlib
P=Path(__file__).resolve().parents[1];V=P/'public/assets/video';I=P/'public/assets/images'

# Final archive input lock; --dry-run verifies without producing media.
import sys
FINAL_INPUTS = {'public/assets/video/scene01-caption-visual-v2.mp4': '9716597a9f93f551927484f283f114af97e09432cc4870efcfdd06580ba9cec7', 'public/assets/video/scene01-doormaster-caption-test-v1.mp4': '0c07e31be2ce0a17fbd34fdf696cd613dfe53fab4075478641b295c38b5de08e', 'public/assets/video/scene02-caption-visual-v2.mp4': '1e6da37296fd9d10b17c49f8585648e0bd92e32a1236f6761102f29c30762827', 'public/assets/video/scene02-doormaster-caption-test-v1.mp4': '97534526bc1e8aa0d6317e37495649cf8c732b91755e5edd1addfe90c22d2238'}
for rel, expected in FINAL_INPUTS.items():
    assert hashlib.sha256((P/rel).read_bytes()).hexdigest() == expected, rel
if "--dry-run" in sys.argv:
    print("PASS: final inputs", len(FINAL_INPUTS))
    raise SystemExit(0)

def run(a):return subprocess.run(a,check=True,capture_output=True)
for i in [1,2]:
 if (V/f"scene{i:02}-doormaster-caption-test-v2.mp4").exists():continue
 run(['ffmpeg','-v','error','-n','-i',str(V/f'scene{i:02}-caption-visual-v2.mp4'),'-i',str(V/f'scene{i:02}-doormaster-caption-test-v1.mp4'),'-map','0:v','-map','1:a','-c','copy','-movflags','+faststart',str(V/f'scene{i:02}-doormaster-caption-test-v2.mp4')])
