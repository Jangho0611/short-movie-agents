from pathlib import Path
import wave, subprocess, hashlib, sys
P=Path(__file__).resolve().parents[1]
A=P/"public/assets/audio"

# Final archive input lock; --dry-run verifies without producing media.
import sys
FINAL_INPUTS = {'public/assets/audio/context-scene01-02-v10-source.wav': '472dbf3739717b3c0f4cdb851e8b58e2938835a02ee2247965c59b412af77fad'}
for rel, expected in FINAL_INPUTS.items():
    assert hashlib.sha256((P/rel).read_bytes()).hexdigest() == expected, rel
if "--dry-run" in sys.argv:
    print("PASS: final inputs", len(FINAL_INPUTS))
    raise SystemExit(0)

with wave.open(str(A/'context-scene01-02-v10-source.wav'), "rb") as w:
    assert (w.getframerate(),w.getnchannels(),w.getsampwidth()) == (24000,1,2)
    pcm=w.readframes(w.getnframes())

# Half-open PCM sample ranges. Existing approved MP3s are verified, never overwritten.
out=A/'scene02-tts-v10-response.mp3'
if out.exists():
    assert hashlib.sha256(out.read_bytes()).hexdigest()=='42419443712b729f3e3adf98ec2b996cb44f2b1a3bf54f4e8f37f5009b26eea9'
else:
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(out)],input=pcm[179004:],check=True)
