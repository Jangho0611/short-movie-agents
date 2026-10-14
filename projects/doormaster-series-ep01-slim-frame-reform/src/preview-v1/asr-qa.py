import subprocess,json,base64,urllib.request,urllib.error
from pathlib import Path
p=Path(__file__).resolve().parents[2]
adc=json.loads((Path.home()/'.config/gcloud/application_default_credentials.json').read_text())
token=subprocess.check_output(['/opt/homebrew/bin/gcloud','auth','application-default','print-access-token'],text=True,stderr=subprocess.DEVNULL).strip()
results=[]
for i in range(1,7):
 audio=p/'public/audio'/f'scene{i:02}-tts-v1.mp3'
 pcm=subprocess.check_output(['ffmpeg','-v','error','-i',str(audio),'-f','s16le','-ar','16000','-ac','1','pipe:1'])
 body={'config':{'encoding':'LINEAR16','sampleRateHertz':16000,'languageCode':'ko-KR','enableWordTimeOffsets':True},'audio':{'content':base64.b64encode(pcm).decode()}}
 req=urllib.request.Request('https://speech.googleapis.com/v1/speech:recognize',data=json.dumps(body).encode(),headers={'Authorization':'Bearer '+token,'Content-Type':'application/json','x-goog-user-project':adc.get('quota_project_id','')})
 try:
  with urllib.request.urlopen(req,timeout=120) as r:data=json.load(r)
 except urllib.error.HTTPError as e:
  data={'error':e.read().decode()};results.append({'scene':i,'result':data});print('ASR unavailable',e.code);break
 results.append({'scene':i,'result':data});print(i,[x['alternatives'][0]['transcript'] for x in data.get('results',[])],flush=True)
(p/'asr-qa-v1.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
