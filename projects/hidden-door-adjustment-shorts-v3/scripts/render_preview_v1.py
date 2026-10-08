from pathlib import Path
import subprocess, json, hashlib, math

ROOT = Path(__file__).resolve().parents[1]
VIDEO = ROOT / 'public/assets/video'
FILES = ['scene01-tts-v9.mp3','scene02-tts-v8.mp3','scene03-tts-v6.mp3','scene04-tts-v9.mp3','scene05-tts-v8.mp3']
FRAMES = [164, 200, 224, 255, 253]
def run(args):
    return subprocess.check_output(args, cwd=ROOT, text=True)
def probe(path):
    return json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(path)]))

scenes=[]
for i,(audio,frames) in enumerate(zip(FILES,FRAMES),1):
    src=ROOT/'public/assets/audio'/audio
    duration=float(probe(src)['format']['duration'])
    assert frames==math.ceil(duration*30)+9
    out=VIDEO/f'scene{i:02}-preview-v1.mp4'
    if not out.exists():
        subprocess.run([str(ROOT/'node_modules/.bin/remotion'),'render','src/preview-v1.tsx',f'AdjustmentScene{i}',str(out),'--codec=h264','--crf=18','--audio-bitrate=192k','--concurrency=2','--browser-executable=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],cwd=ROOT,check=True)
    data=probe(out)
    v=next(s for s in data['streams'] if s['codec_type']=='video')
    assert int(v['nb_frames'])==frames
    assert (v['width'],v['height'],v['r_frame_rate'])==(1080,1920,'30/1')
    run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
    scenes.append({'scene':i,'tts':audio,'tts_seconds':duration,'frames':frames,'seconds':frames/30,'tail_seconds':frames/30-duration,'decode':'PASS'})

ending=ROOT/'public/references/daesan-headquarters-ending-approved-v1.mp4'
assert hashlib.sha256(ending.read_bytes()).hexdigest()=='2796948bc412c7abadb41d5b85c4d089cd6d89500b4054acff538bd5d6cbf4b5'
segments=[VIDEO/f'scene{i:02}-preview-v1.mp4' for i in range(1,6)]+[ending]
durations=FRAMES+[170]
out=VIDEO/'hidden-door-adjustment-preview-v1.mp4'
cmd=['ffmpeg','-n','-v','error']
for f in segments:cmd+=['-i',str(f)]
filters=[]
for i,n in enumerate(durations):
    filters += [f'[{i}:v]setpts=PTS-STARTPTS,setsar=1[v{i}]',f'[{i}:a]aresample=48000,apad,atrim=duration={n/30:.9f},asetpts=PTS-STARTPTS[a{i}]']
filters.append(''.join(f'[v{i}][a{i}]' for i in range(6))+'concat=n=6:v=1:a=1[v][a]')
cmd+=['-filter_complex',';'.join(filters),'-map','[v]','-map','[a]','-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-movflags','+faststart',str(out)]
run(cmd)
run(['ffmpeg','-v','error','-xerror','-i',str(out),'-f','null','-'])
data=probe(out);v=next(s for s in data['streams'] if s['codec_type']=='video');a=next(s for s in data['streams'] if s['codec_type']=='audio')
assert (v['width'],v['height'],v['r_frame_rate'],v['codec_name'],a['codec_name'])==(1080,1920,'30/1','h264','aac')
assert int(v['nb_frames'])==sum(durations)
baseline=json.loads((ROOT/'docs/preview-v1-preservation-before.json').read_text())
assert all(hashlib.sha256(Path(f).read_bytes()).hexdigest()==h for f,h in baseline.items())
report={'scenes':scenes,'body_frames':sum(FRAMES),'body_seconds':sum(FRAMES)/30,'ending_frames':170,'total_frames':sum(durations),'total_seconds':sum(durations)/30,'probe':data,'full_decode':'PASS','preservation_410_files':'PASS','tts_speed':1,'ending':'approved MP4 reused without rerender; final concat encoded H264/AAC','visual_qa':'pending'}
(ROOT/'docs/preview-qa-v1.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'preview':str(out),'seconds':sum(durations)/30,'decode':'PASS','preservation':'PASS'}))
