"""Mux a muted HiddenHingePreview render with the approved scene timeline.

Usage: python3 scripts/assemble-v8.py MUTED_RENDER.mp4 NEW_OUTPUT.mp4
Requires FFmpeg; both arguments are paths relative to the caller.
"""
import argparse
import hashlib
from pathlib import Path
import subprocess
from tempfile import TemporaryDirectory

PUBLIC = Path(__file__).resolve().parents[1] / "public"
TRACKS = [
    ("scene01-tts-v3-breath-c.mp3", 96, 0),
    ("scene02-tts-v5.mp3", 174, 0),
    ("scene03-tts-v4.mp3", 180, 0),
    ("scene04-tts-v4.mp3", 198, 27),
    ("scene05-tts-v4.mp3", 348, 27),
    ("scene06-tts-v3-breath-c.mp3", 258, 0),
    ("daesan-headquarters-ending-approved-v1.mp4", 170, 0),
]
AAC_SHA256 = "a342b42a9068f8c059685dad162c78455cb081b4f048b130e157bb0eee221467"

def encode_mix(picture, output):
    frames = subprocess.check_output([
        "ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
        "stream=r_frame_rate,nb_frames", "-of", "csv=p=0", picture
    ]).strip().rstrip(b",")
    if frames != b"30/1,1424":
        raise ValueError("Expected a 1424-frame, 30 fps picture")
    args = ["ffmpeg", "-v", "error", "-nostdin", "-n", "-i", picture]
    filters = []
    for index, (name, frames, delay) in enumerate(TRACKS, 1):
        folder = "daesan-ending/video" if index == 7 else "assets/audio"
        args.extend(["-i", PUBLIC / folder / name])
        samples = frames * 1600
        filters.append(
            f"[{index}:a]aresample=48000,aformat=channel_layouts=stereo,"
            f"adelay={delay * 1600}S:all=1,apad=whole_len={samples},"
            f"atrim=end_sample={samples},asetpts=PTS-STARTPTS[s{index}]"
        )
    filters.append("".join(f"[s{i}]" for i in range(1, 8)) + "concat=n=7:v=0:a=1[a]")
    subprocess.run(args + ["-filter_complex", ";".join(filters), "-map", "0:v:0",
                   "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
                   "-movflags", "+faststart", output], check=True)
    audio = subprocess.check_output(["ffmpeg", "-v", "error", "-i", output,
                  "-map", "0:a:0", "-c:a", "copy", "-f", "adts", "-"])
    if hashlib.sha256(audio).hexdigest() != AAC_SHA256:
        raise ValueError("Audio stream differs from the approved v8 AAC")

def assemble(picture, output):
    with TemporaryDirectory() as scratch:
        mix = Path(scratch) / "new-mix.mp4"
        encode_mix(picture, mix)
        subprocess.run(["ffmpeg", "-v", "error", "-nostdin", "-n", "-i", picture,
                        "-i", mix, "-map", "0:v:0", "-map", "1:a:0", "-c", "copy",
                        "-movflags", "+faststart", output], check=True)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("picture", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    assemble(args.picture, args.output)
