import base64, json, subprocess, urllib.request
from pathlib import Path
root = Path(__file__).resolve().parents[1]
out = root / "public/assets/audio/scene01-tts-v10-part-b.wav"
marker = root / "scripts/scene01-tts-v10-part-b-request.json"
text = "구멍만 맞추면 끝일까요."
assert len(text) == 13
assert not out.exists() and not marker.exists(), "Existing output/request: no retry allowed"
token = subprocess.run(["/opt/homebrew/bin/gcloud", "auth", "application-default", "print-access-token"], capture_output=True, text=True)
if token.returncode:
    raise SystemExit("ADC token acquisition failed before synthesis: " + token.stderr)
payload = {"input":{"text":text},"voice":{"languageCode":"ko-KR","name":"ko-KR-Chirp3-HD-Alnilam"},"audioConfig":{"audioEncoding":"LINEAR16","speakingRate":1.0}}
headers = {"Authorization":"Bearer " + token.stdout.strip(),"Content-Type":"application/json"}
adc = json.loads((Path.home()/".config/gcloud/application_default_credentials.json").read_text())
if adc.get("quota_project_id"): headers["x-goog-user-project"] = adc["quota_project_id"]
request = urllib.request.Request("https://texttospeech.googleapis.com/v1/text:synthesize",data=json.dumps(payload).encode(),headers=headers)
with marker.open("x") as f: json.dump({"payload":payload,"characters":13,"maximum_list_price_usd":0.00039,"automatic_retries":0},f,ensure_ascii=False,indent=2)
with urllib.request.urlopen(request,timeout=120) as response: result=json.load(response)
audio=base64.b64decode(result["audioContent"],validate=True)
assert audio[:4]==b"RIFF" and audio[8:12]==b"WAVE"
with out.open("xb") as f: f.write(audio)
print("SAVED",out,"bytes",len(audio))
