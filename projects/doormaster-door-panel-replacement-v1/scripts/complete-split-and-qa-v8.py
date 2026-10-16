from pathlib import Path
import wave, subprocess, hashlib, sys
P=Path(__file__).resolve().parents[1]
A=P/"public/assets/audio"

# Final archive input lock; --dry-run verifies without producing media.
import sys
FINAL_INPUTS = {'public/assets/audio/full-tts-continuous-v8-source.wav': '3130ac83070c7c2ba512178daebf8311d30cbc19c2b883ad6e4fcf9a3a2bae24'}
for rel, expected in FINAL_INPUTS.items():
    assert hashlib.sha256((P/rel).read_bytes()).hexdigest() == expected, rel
if "--dry-run" in sys.argv:
    print("PASS: final inputs", len(FINAL_INPUTS))
    raise SystemExit(0)

with wave.open(str(A/'full-tts-continuous-v8-source.wav'), "rb") as w:
    assert (w.getframerate(),w.getnchannels(),w.getsampwidth()) == (24000,1,2)
    pcm=w.readframes(w.getnframes())

# Half-open PCM sample ranges. Existing approved MP3s are verified, never overwritten.
out=A/'scene01-tts-v8.mp3'
if out.exists():
    assert hashlib.sha256(out.read_bytes()).hexdigest()=='c557312c5df344d379a1a920b694db5d1595876c83e66e3b43c012881e736a0a'
else:
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(out)],input=pcm[0:158810],check=True)
out=A/'scene03-tts-v8.mp3'
if out.exists():
    assert hashlib.sha256(out.read_bytes()).hexdigest()=='7ab3562f13074b4a5a8b2b149dd8e275588cf23824a2c72f4124541aba33f3d3'
else:
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(out)],input=pcm[360452:561098],check=True)
out=A/'scene04-tts-v8.mp3'
if out.exists():
    assert hashlib.sha256(out.read_bytes()).hexdigest()=='07b784ded0f1b01031f80a93231971cca0516d7bf836b6b95b62be398b80e306'
else:
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(out)],input=pcm[561098:743070],check=True)
out=A/'scene06-tts-v8.mp3'
if out.exists():
    assert hashlib.sha256(out.read_bytes()).hexdigest()=='70b0b8d0322765fda783822e52dbe71264c5829fa7789d3971419436a01aeead'
else:
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(out)],input=pcm[987308:1175040],check=True)
