import subprocess,json,urllib.request,urllib.error,base64
from pathlib import Path
root=Path(__file__).resolve().parents[2]
texts=['기존 발포문틀 철거하지 않고 슬림 문선으로 바꿀 수 있을까요?','기존 문틀은 살리고 넓은 문선부터 제거합니다.','곡면 때문에 생기는 빈 공간은 받침으로 보강하고','구 미리 엠디에프를 덧대 슬림 문선 형태로 마감합니다.','하지만 기존 문틀 상태에 따라 보강과 마감 작업이 까다로울 수 있습니다.','리폼에 필요한 작업과 비용을 따져보고 새 문틀 시공과 비교해 결정하는 게 좋습니다.']
(root/'docs/tts-synthesis-input-v2.json').write_text(json.dumps({'voice':'ko-KR-Chirp3-HD-Alnilam','speakingRate':1.0,'texts':texts},ensure_ascii=False,indent=2))
adc=json.loads((Path.home()/'.config/gcloud/application_default_credentials.json').read_text())
quota=adc.get('quota_project_id','')
token=subprocess.check_output(['/opt/homebrew/bin/gcloud','auth','application-default','print-access-token'],text=True,stderr=subprocess.DEVNULL).strip()
for i,t in enumerate(texts,1):
 p=root/'public/audio/raw-preview-v2'/f'scene{i:02}-tts-v2-raw.mp3'
 if p.exists():raise RuntimeError('Output exists')
 body={'input':{'text':t},'voice':{'languageCode':'ko-KR','name':'ko-KR-Chirp3-HD-Alnilam'},'audioConfig':{'audioEncoding':'MP3','speakingRate':1.0}}
 req=urllib.request.Request('https://texttospeech.googleapis.com/v1/text:synthesize',data=json.dumps(body).encode(),headers={'Authorization':'Bearer '+token,'Content-Type':'application/json','x-goog-user-project':quota})
 try:
  with urllib.request.urlopen(req,timeout=120) as res: data=json.load(res)
 except urllib.error.HTTPError as e:
  print(e.read().decode(),flush=True);raise SystemExit(1)
 with p.open('xb') as f:f.write(base64.b64decode(data['audioContent']))
 print('Saved',p.name,flush=True)
