import base64,json,subprocess,urllib.request
from pathlib import Path
r=Path(__file__).resolve().parents[1];d=r/'public/assets/audio'
jobs=json.loads((r/'scripts/tts-batch-20261104-input.json').read_text())
for j in jobs:
 assert not (d/j['file']).exists()
 assert not (r/f"scripts/{Path(j['file']).stem}-request.json").exists()
t=subprocess.run(['/opt/homebrew/bin/gcloud','auth','application-default','print-access-token'],capture_output=True,text=True)
if t.returncode:raise SystemExit('ADC failed before synthesis: '+t.stderr)
h={'Authorization':'Bearer '+t.stdout.strip(),'Content-Type':'application/json'}
a=json.loads((Path.home()/'.config/gcloud/application_default_credentials.json').read_text())
if a.get('quota_project_id'):h['x-goog-user-project']=a['quota_project_id']
for j in jobs:
 payload={'input':{'text':j['input']},'voice':{'languageCode':'ko-KR','name':'ko-KR-Chirp3-HD-Alnilam'},'audioConfig':{'audioEncoding':'LINEAR16','speakingRate':1.0}}
 with (r/f"scripts/{Path(j['file']).stem}-request.json").open('x') as f:json.dump(payload,f,ensure_ascii=False,indent=2)
 req=urllib.request.Request('https://texttospeech.googleapis.com/v1/text:synthesize',data=json.dumps(payload).encode(),headers=h)
 with urllib.request.urlopen(req,timeout=120) as res:result=json.load(res)
 audio=base64.b64decode(result['audioContent'],validate=True);assert audio[:4]==b'RIFF' and audio[8:12]==b'WAVE'
 with (d/j['file']).open('xb') as f:f.write(audio)
 print('SAVED',j['file'],len(audio),flush=True)
