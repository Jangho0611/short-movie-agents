import base64,json,subprocess,urllib.request
from pathlib import Path
r=Path(__file__).resolve().parents[1]
jobs=json.loads((r/'scripts/tts-candidates-v3-input.json').read_text())
assert sum(len(j['input']) for j in jobs)==211
for j in jobs:
 assert not (r/f"public/assets/audio/scene{j['scene']:02d}-tts-v3.wav").exists()
 assert not (r/f"scripts/scene{j['scene']:02d}-tts-v3-request.json").exists()
t=subprocess.run(['/opt/homebrew/bin/gcloud','auth','application-default','print-access-token'],capture_output=True,text=True)
if t.returncode:raise SystemExit('ADC failed before synthesis: '+t.stderr)
h={'Authorization':'Bearer '+t.stdout.strip(),'Content-Type':'application/json'}
a=json.loads((Path.home()/'.config/gcloud/application_default_credentials.json').read_text())
if a.get('quota_project_id'):h['x-goog-user-project']=a['quota_project_id']
for j in jobs:
 payload={'input':{'text':j['input']},'voice':{'languageCode':'ko-KR','name':'ko-KR-Chirp3-HD-Alnilam'},'audioConfig':{'audioEncoding':'LINEAR16','speakingRate':1.0}}
 with (r/f"scripts/scene{j['scene']:02d}-tts-v3-request.json").open('x') as f:json.dump(payload,f,ensure_ascii=False,indent=2)
 req=urllib.request.Request('https://texttospeech.googleapis.com/v1/text:synthesize',data=json.dumps(payload).encode(),headers=h)
 with urllib.request.urlopen(req,timeout=120) as res:result=json.load(res)
 audio=base64.b64decode(result['audioContent'],validate=True)
 assert audio[:4]==b'RIFF' and audio[8:12]==b'WAVE'
 with (r/f"public/assets/audio/scene{j['scene']:02d}-tts-v3.wav").open('xb') as f:f.write(audio)
 print('SAVED scene',j['scene'],len(audio),'bytes',flush=True)
