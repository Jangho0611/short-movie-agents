from pathlib import Path
import subprocess as sp,json,hashlib
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';a=p/'public/assets/audio';t=json.loads((p/'src/timing-v2.json').read_text())
clips=[v/f'scene{i:02}-v{8 if i==6 else 7 if i in (1,2,4) else 5}.mp4' for i in range(1,8)]+[p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4']
assert all(x.exists() for x in clips), 'Missing input clip'
# Each source has exact video frame duration. Video is stream copied; approved ending's decoded pixels remain unchanged.
lst=p/'scripts/preview-v8-concat.txt';lst.write_text('\n'.join("file '"+str(x)+"'\nduration "+str((t[i]['frames'] if i<7 else 170)/30) for i,x in enumerate(clips))+'\n')
silent=v/'younglim-stepdoor-picture-silent-v8.mp4'
sp.run(['ffmpeg','-v','warning','-n','-f','concat','-safe','0','-i',str(lst),'-map','0:v:0','-an','-c:v','copy',str(silent)],check=True)
acmd=['ffmpeg','-v','error','-n']
for r in t: acmd+=['-i',str(a/r['audio'])]
acmd+=['-i',str(p/'public/daesan-ending/audio/ending-approved-v3.mp3')]
ns=[r['frames'] for r in t]+[170]
af=[f'[{i}:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,apad,atrim=end_sample={n*1600},asetpts=PTS-STARTPTS[b{i}]' for i,n in enumerate(ns)]
af+=[''.join(f'[b{i}]' for i in range(8))+'concat=n=8:v=0:a=1[out]']
wav=a/'preview-v2-approved-sequence.wav'
# The sample-aligned audio assembled successfully on the first attempt; reuse it.
if not wav.exists(): sp.run(acmd+['-filter_complex',';'.join(af),'-map','[out]','-c:a','pcm_s24le',str(wav)],check=True)
sp.run(['ffmpeg','-v','error','-n','-i',str(silent),'-i',str(wav),'-map','0:v:0','-map','1:a:0','-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart',str(v/'younglim-stepdoor-preview-v8.mp4')],check=True)
preview=v/'younglim-stepdoor-preview-v8.mp4'
r=sp.run(['ffmpeg','-v','error','-i',str(preview),'-f','null','-'],capture_output=True,text=True)
meta=json.loads(sp.check_output(['ffprobe','-v','error','-count_frames','-show_streams','-show_format','-of','json',str(preview)]))
def hashes(path,vf=None):
 cmd=['ffmpeg','-v','error','-i',str(path),'-map','0:v:0']
 if vf:cmd+=['-vf',vf]
 text=sp.check_output(cmd+['-fps_mode','passthrough','-f','framemd5','-']).decode()
 return [l.split(',')[-1].strip() for l in text.splitlines() if l and not l.startswith('#')]
body=sum(r['frames'] for r in t)
endmatch=hashes(preview,f'trim=start_frame={body},setpts=PTS-STARTPTS')==hashes(clips[-1])
report={'decode_exit':r.returncode,'decode_errors':r.stderr,'body_frames':body,'total_frames':body+170,'ending_decoded_frame_identical':endmatch,'ffprobe':meta}
(p/'docs/preview-v8-technical-qa.json').write_text(json.dumps(report,indent=2))
print({k:val for k,val in report.items() if k!='ffprobe'})
