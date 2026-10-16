from pathlib import Path
import wave, subprocess, hashlib, sys
P=Path(__file__).resolve().parents[1]
A=P/"public/assets/audio"

# Final archive input lock; --dry-run verifies without producing media.
import sys
FINAL_INPUTS = {'public/assets/audio/context-scene04-05-06-v11-source.wav': 'b0549ff935a79e6c4e8c721e8a27d516a288a57243df6830c290325278bed094'}
for rel, expected in FINAL_INPUTS.items():
    assert hashlib.sha256((P/rel).read_bytes()).hexdigest() == expected, rel
if "--dry-run" in sys.argv:
    print("PASS: final inputs", len(FINAL_INPUTS))
    raise SystemExit(0)

with wave.open(str(A/'context-scene04-05-06-v11-source.wav'), "rb") as w:
    assert (w.getframerate(),w.getnchannels(),w.getsampwidth()) == (24000,1,2)
    pcm=w.readframes(w.getnframes())

# Half-open PCM sample ranges. Existing approved MP3s are verified, never overwritten.
out=A/'scene05-tts-v11.mp3'
if out.exists():
    assert hashlib.sha256(out.read_bytes()).hexdigest()=='7e9fed7a921a77f984d9b4fa53565975e19671c5a67fad9f247f0361b97c6aed'
else:
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(out)],input=pcm[158204:338014],check=True)

qa=A/"full-tts-qa-v11.mp3"
if qa.exists():
    assert hashlib.sha256(qa.read_bytes()).hexdigest()=='f815bcb1b9930982a807a7e2ceff324081fac06564b685b5f15c9ac11f839525'
else:
    chunks=[subprocess.check_output(["ffmpeg","-v","error","-i",str(A/n),"-f","s16le","-ar","24000","-ac","1","-"]) for n in ['scene01-tts-v8.mp3', 'scene02-tts-v10-response.mp3', 'scene03-tts-v8.mp3', 'scene04-tts-v8.mp3', 'scene05-tts-v11.mp3', 'scene06-tts-v8.mp3']]
    subprocess.run(["ffmpeg","-v","error","-n","-f","s16le","-ar","24000","-ac","1","-i","pipe:0","-c:a","libmp3lame","-b:a","192k",str(qa)],input=b"".join(chunks),check=True)
