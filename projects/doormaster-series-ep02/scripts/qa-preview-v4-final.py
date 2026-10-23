import subprocess,pathlib,json,hashlib
p=pathlib.Path(__file__).resolve().parents[1];f=p/'public/assets/video/doormaster-ep02-preview-v4.mp4';r={}
for name,start,end in [('scene5',17.7,688/30),('ending',688/30,28.6),('transition',21.5,24.5)]:
 x=subprocess.run(['ffmpeg','-hide_banner','-i',str(f),'-vn','-af',f'atrim=start={start}:end={end},asetpts=PTS-STARTPTS,ebur128=peak=true,silencedetect=noise=-40dB:d=0.1','-f','null','-'],capture_output=True,text=True,check=True).stderr
 r[name]={'loudness':x[x.rfind('Summary:'):],'silence':[l for l in x.splitlines() if 'silence_' in l]}
base=json.loads((p/'docs/preview-v4-preservation-baseline.json').read_text())
r['asset_hashes']={name:hashlib.sha256((p/name).read_bytes()).hexdigest()==sha for name,sha in base.items()}
r['caption_layout']={'left':40,'top':1490,'width':900,'height':240,'single_line_center_y':1610,'two_line_centers_y':[1550,1670],'font_size_max':96,'line_box':120,'entrance_frames':5,'accent_frames':7,'motion_reading_hold':True,'platform_UI_certification':False}
with (p/'docs/preview-v4-final-qa.json').open('x') as o:json.dump(r,o,ensure_ascii=False,indent=2)
print(json.dumps({k:v for k,v in r.items() if k!='asset_hashes'},ensure_ascii=False))
print('Assets preserved:',all(r['asset_hashes'].values()),len(base))
