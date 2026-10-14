from pathlib import Path
import subprocess,json,re,array,math
p=Path(__file__).resolve().parents[2];report=[]
for i in range(1,7):
 src=p/'public/audio/raw-preview-v2'/f'scene{i:02}-tts-v2-raw.mp3';dst=p/'public/audio'/f'scene{i:02}-tts-v2.mp3'
 pcm=subprocess.check_output(['ffmpeg','-v','error','-i',str(src),'-f','s16le','-ar','48000','-ac','1','pipe:1']);duration=len(pcm)/96000
 log=subprocess.run(['ffmpeg','-hide_banner','-i',str(src),'-af','silencedetect=noise=-43dB:d=0.15','-f','null','-'],capture_output=True,text=True).stderr
 sil=[];start=None
 for line in log.splitlines():
  m=re.search(r'silence_start: ([\d.]+)',line)
  if m:start=float(m[1])
  m=re.search(r'silence_end: ([\d.]+)',line)
  if m and start is not None:sil.append((start,min(duration,float(m[1]))));start=None
 cuts=[]
 for a,b in sil:
  if a<.03 and b-a>.10:cuts.append((0,max(0,b-.08),'leading'))
  elif duration-b<.04 and b-a>.14:cuts.append((a+.12,duration,'trailing'))
  elif b-a>.30:cuts.append((a+.09,b-.09,'internal'))
 chunks=[];pos=0
 for a,b,kind in sorted(cuts):
  ia=int(a*48000)*2;ib=int(b*48000)*2;chunks.append(pcm[pos:ia]);pos=ib
 chunks.append(pcm[pos:]);edited=b''.join(chunks)
 subprocess.run(['ffmpeg','-v','error','-n','-f','s16le','-ar','48000','-ac','1','-i','pipe:0','-c:a','libmp3lame','-b:a','192k',str(dst)],input=edited,check=True)
 outdur=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(dst)]))
 post=subprocess.run(['ffmpeg','-hide_banner','-i',str(dst),'-af','silencedetect=noise=-43dB:d=0.15,volumedetect','-f','null','-'],capture_output=True,text=True).stderr
 row={'scene':i,'raw_duration':duration,'duration':outdur,'detected_silences':sil,'removed_intervals':cuts,'post_silence_and_volume':[l for l in post.splitlines() if any(x in l for x in ['silence_start:','silence_end:','mean_volume:','max_volume:'])],'pronunciation':'UNVERIFIED: not listened','within_word_silence':'UNVERIFIED: no word-aligned transcription'};report.append(row)
 print(i,round(duration,3),'->',outdur,'cuts',cuts,flush=True)
(p/'docs/audio-qa-v2.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
