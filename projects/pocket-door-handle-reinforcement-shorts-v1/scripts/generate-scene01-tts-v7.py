import base64,json,subprocess,urllib.request,hashlib
from pathlib import Path
r=Path(__file__).resolve().parents[1];d=r/'public/assets/audio'
jobs={'a':'오목이손잡이 설치할 때','b':'구멍만 맞추면 끝일까요?'}
for n in ['scene01-tts-v7-part-a.wav','scene01-tts-v7-part-b.wav','scene01-tts-v7.wav']:assert not (d/n).exists(),n
for k in jobs:assert not (r/f'scripts/scene01-tts-v7-part-{k}-request.json').exists()
assert not (r/'docs/scene01-tts-v7-qa.md').exists()
with (r/'scripts/scene01-tts-v7-preservation.json').open('x') as f:json.dump({p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in d.iterdir() if p.is_file()},f,indent=2)
t=subprocess.run(['/opt/homebrew/bin/gcloud','auth','application-default','print-access-token'],capture_output=True,text=True)
if t.returncode:raise SystemExit('ADC failure before synthesis: '+t.stderr)
h={'Authorization':'Bearer '+t.stdout.strip(),'Content-Type':'application/json'}
a=json.loads((Path.home()/'.config/gcloud/application_default_credentials.json').read_text())
if a.get('quota_project_id'):h['x-goog-user-project']=a['quota_project_id']
for k,text in jobs.items():
 payload={'input':{'text':text},'voice':{'languageCode':'ko-KR','name':'ko-KR-Chirp3-HD-Alnilam'},'audioConfig':{'audioEncoding':'LINEAR16','speakingRate':1.0}}
 with (r/f'scripts/scene01-tts-v7-part-{k}-request.json').open('x') as f:json.dump(payload,f,ensure_ascii=False,indent=2)
 req=urllib.request.Request('https://texttospeech.googleapis.com/v1/text:synthesize',data=json.dumps(payload).encode(),headers=h)
 with urllib.request.urlopen(req,timeout=120) as res:result=json.load(res)
 data=base64.b64decode(result['audioContent'],validate=True)
 assert data[:4]==b'RIFF' and data[8:12]==b'WAVE'
 with (d/f'scene01-tts-v7-part-{k}.wav').open('xb') as f:f.write(data)
 print('SAVED Part',k,len(data),'bytes',flush=True)
