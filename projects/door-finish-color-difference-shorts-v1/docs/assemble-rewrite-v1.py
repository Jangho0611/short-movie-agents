from pathlib import Path
import subprocess as sp,json,hashlib,array,re
p=Path.cwd();v=p/'public/assets/video';a=p/'public/assets/audio';d=p/'docs'
frames=[156,216,210,198,246,170];dur=[n/30 for n in frames]
clips=[v/f'scene{i:02}-preview-rewrite-v1.mp4' for i in range(1,6)]+[v/'daesan-headquarters-ending-approved-v1.mp4']
audios=[a/f'scene{i:02}-tts-rewrite-v1.mp3' for i in range(1,5)]+[a/'scene05-tts-rewrite-v2.mp3',a/'ending-approved-v3.mp3']
def run(args):return sp.run(args,stdout=sp.PIPE,stderr=sp.PIPE,check=True)
manifest=d/'rewrite-v1-concat.txt'
with manifest.open('x') as f:
 for clip,t in zip(clips,dur): f.write(f"file '{clip}'\nduration {t:.12f}\n")
args=['ffmpeg','-v','error','-n','-f','concat','-safe','0','-i',str(manifest)]
for f in audios:args+=['-i',str(f)]
graph=';'.join(f'[{i+1}:a]aresample=48000,apad=whole_dur={t:.12f},atrim=duration={t:.12f},asetpts=PTS-STARTPTS[a{i}]' for i,t in enumerate(dur))+';'+''.join(f'[a{i}]' for i in range(6))+'concat=n=6:v=0:a=1[out]'
out=v/'door-finish-color-difference-preview-rewrite-v1.mp4'
run(args+['-filter_complex',graph,'-map','0:v:0','-map','[out]','-c:v','copy','-c:a','aac','-b:a','192k','-video_track_timescale','15360','-t',str(sum(dur)),'-movflags','+faststart',str(out)])
def hashes(f):
 s=run(['ffmpeg','-v','error','-i',str(f),'-map','0:v:0','-f','framemd5','-']).stdout.decode()
 return [l.split(',')[-1].strip() for l in s.splitlines() if not l.startswith('#')]
expected=[]
for c in clips: expected+=hashes(c)
actual=hashes(out)
qa={'video':str(out.relative_to(p)),'frames':frames,'durations':dur,'total_seconds':sum(dur),'all_decoded_frames_match_inputs':actual==expected,'ending_170_frames_match':actual[-170:]==expected[-170:],'audio_files':[str(f.relative_to(p)) for f in audios],'audio_sha256':[hashlib.sha256(f.read_bytes()).hexdigest() for f in audios]}
qa['probe']=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(out)]).stdout)
for c in clips+[out]:run(['ffmpeg','-v','error','-xerror','-i',str(c),'-f','null','-'])
qa['all_inputs_output_decode']='PASS'
log=run(['ffmpeg','-hide_banner','-nostats','-i',str(out),'-af','ebur128=peak=true,silencedetect=noise=-40dB:d=0.3','-vf','blackdetect=d=0.02:pix_th=0.1','-f','null','-']).stderr.decode()
qa['volume_summary']=log.rsplit('Summary:',1)[-1];qa['silence_candidates']=[l for l in log.splitlines() if 'silence_' in l];qa['black_candidates']=[l for l in log.splitlines() if 'black_start' in l]
raw=run(['ffmpeg','-v','error','-i',str(out),'-vn','-f','f32le','-']).stdout; vals=array.array('f');vals.frombytes(raw);qa['full_scale_samples']=sum(abs(x)>=1 for x in vals)
before=json.loads((d/'rewrite-preview-preservation.json').read_text());qa['changed_old_files']=[n for n,h in before.items() if hashlib.sha256((p/n).read_bytes()).hexdigest()!=h];qa['preserved_files']=len(before)
with (d/'preview-rewrite-v1-qa.json').open('x') as f:json.dump(qa,f,ensure_ascii=False,indent=2)
print(json.dumps({k:v for k,v in qa.items() if k not in ['probe','silence_candidates','audio_sha256']},ensure_ascii=False,indent=2))
