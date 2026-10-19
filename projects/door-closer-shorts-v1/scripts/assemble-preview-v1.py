from pathlib import Path
import subprocess, json, hashlib, math

P=Path(__file__).resolve().parents[1]
V=P/'public/assets/video'; I=P/'public/assets/images'; A=P/'public/assets/audio'
FRAMES=[84,117,129,207,298]
TTS=[A/f'scene{i:02d}-tts-v{5 if i==5 else 2}.mp3' for i in range(1,6)]
SRC=[('03',1.5,2),('08',.5,3),('03',0,4.3),None,('03',4.625,298/30)]
commands=[]
def run(args):
    commands.append(args)
    subprocess.run(args,check=True)
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
base=json.loads((P/'docs/preview-v1-baseline.json').read_text())
for f in TTS:assert sha(f)==base[str(f.relative_to(P))]
ending=P/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4'
assert sha(ending)=='2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5'
videos=[]
for i,n in enumerate(FRAMES,1):
    out=V/f'scene{i:02d}-preview-v1.mp4';videos.append(out)
    if out.exists():raise RuntimeError(f'Existing output: {out}')
    directory=I/f'DoorCloserOverlay{i}-v1'
    files=sorted(directory.glob('*.png'))
    assert len(files)==n,(directory,len(files),n)
    first=files[0].name
    import re
    match=re.search(r'(\d+)\.png$',first); assert match,first
    pattern=first[:match.start()]+f'%0{len(match[1])}d.png'
    cmd=['ffmpeg','-v','warning','-n']
    if SRC[i-1]:
        src,start,duration=SRC[i-1]
        cmd+=['-ss',str(start),'-t',str(duration),'-i',str(V/f'KakaoTalk_Video_2026-10-19-10-00-{src}.mp4')]
        cmd+=['-framerate','30','-start_number',str(int(match[1])),'-i',str(directory/pattern)]
        filt=f'[0:v]setpts=PTS-STARTPTS,scale=912:1622:flags=lanczos,setsar=1,pad=1080:1920:84:298:color=0xF4F1E9,fps=30,tpad=stop_mode=clone:stop_duration=1.1,trim=end_frame={n}[bg];[bg][1:v]overlay=0:0:format=auto,format=yuvj420p[v]'
        cmd+=['-filter_complex',filt,'-map','[v]']
    else:
        cmd+=['-framerate','30','-start_number',str(int(match[1])),'-i',str(directory/pattern),'-vf','format=yuvj420p']
    cmd+=['-frames:v',str(n),'-an','-c:v','libx264','-preset','fast','-crf','18','-pix_fmt','yuvj420p','-color_range','pc','-r','30','-video_track_timescale','90000','-movflags','+faststart',str(out)]
    run(cmd);print('Scene complete',i,flush=True)

concat=P/'scripts/preview-v1-concat.txt'
with concat.open('x') as f:
    for v in videos+[ending]:f.write(f"file '{v}'\n")
silent=V/'door-closer-preview-v1-picture.mp4'
run(['ffmpeg','-v','warning','-n','-f','concat','-safe','0','-i',str(concat),'-map','0:v:0','-c:v','copy','-an','-video_track_timescale','90000',str(silent)])
# Pad only the ends of each approved Scene. No speech trimming, speed or pitch change.
all_audio=TTS+[P/'public/daesan-ending/audio/ending-approved-v3.mp3']
ns=FRAMES+[170]
cmd=['ffmpeg','-v','warning','-n']
for audio in all_audio:cmd+=['-i',str(audio)]
filters=[f'[{i}:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,apad,atrim=end_sample={n*1600},asetpts=PTS-STARTPTS[a{i}]' for i,n in enumerate(ns)]
filters+=[''.join(f'[a{i}]' for i in range(6))+'concat=n=6:v=0:a=1[out]']
wav=A/'preview-v1-approved-sequence.wav'
run(cmd+['-filter_complex',';'.join(filters),'-map','[out]','-c:a','pcm_s16le',str(wav)])
preview=V/'door-closer-preview-v1.mp4'
run(['ffmpeg','-v','warning','-n','-i',str(silent),'-i',str(wav),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart',str(preview)])
with (P/'docs/preview-v1-render-commands.json').open('x') as f:json.dump(commands,f,ensure_ascii=False,indent=2)
print('Preview complete:',preview,flush=True)
