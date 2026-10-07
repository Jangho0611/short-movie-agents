from pathlib import Path
import subprocess,json,hashlib
p=Path(__file__).resolve().parents[1];v=p/'public/assets/video';im=p/'public/assets/images';full=v/'door-frame-wall-thickness-preview-v1.mp4'
frames=[114,171,159,381,186,288];tts=[3.456,5.376,4.944,10.848,5.856,9.264]
def run(args):return subprocess.run(args,check=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE).stdout
def qa(f,n):
 data=json.loads(run(['ffprobe','-v','error','-show_streams','-show_format','-of','json',str(f)]));vs=next(s for s in data['streams'] if s['codec_type']=='video');au=next(s for s in data['streams'] if s['codec_type']=='audio')
 assert (vs['width'],vs['height'],vs['r_frame_rate'],vs['codec_name'],int(vs['nb_frames']))==(1080,1920,'30/1','h264',n)
 assert au['codec_name']=='aac'
 run(['ffmpeg','-v','error','-xerror','-i',str(f),'-f','null','-'])
 return {'file':str(f),'frames':n,'videoDuration':float(vs['duration']),'formatDuration':float(data['format']['duration']),'resolution':'1080x1920','fps':30,'codecs':'H.264/AAC','decode':'PASS'}
manifest=json.loads((p/'docs/slim-copy-manifest.json').read_text())
for r in manifest:
 if r['target'].startswith(('src/daesan-ending/','public/daesan-ending/')):assert hashlib.sha256((p/r['target']).read_bytes()).hexdigest()==r['targetSha256']
reports=[qa(full,1469)];start=0
for i,n in enumerate(frames,1):
 out=v/f'scene{i:02d}-preview-v1.mp4'
 if not out.exists():run(['ffmpeg','-v','error','-n','-i',str(full),'-ss',str(start/30),'-t',str(n/30),'-c:v','libx264','-crf','18','-preset','fast','-c:a','aac','-b:a','192k','-frames:v',str(n),str(out)])
 reports.append(qa(out,n))
 at=0 if i==1 else min(n-1,100)
 if not (im/f'scene{i:02d}-preview-v1-qa.png').exists():run(['ffmpeg','-v','error','-n','-i',str(out),'-vf',f'select=eq(n\\,{at})','-frames:v','1',str(im/f'scene{i:02d}-preview-v1-qa.png')])
 start+=n
# Verify the last 55 complete Scene 4 frames remain visually identical.
hashes=run(['ffmpeg','-v','error','-i',str(v/'scene04-preview-v1.mp4'),'-an','-vf','trim=start_frame=326:end_frame=381','-f','framemd5','-']).decode()
vals=[l.split(',')[-1].strip() for l in hashes.splitlines() if l and not l.startswith('#')]
print('HOLD_FRAMES',len(vals),'UNIQUE_HASHES',len(set(vals)),flush=True)
assert len(vals)==55
holdIdentical=len(set(vals))==1
# Extract ending reference comparison frames; preserve original Canonical preview.
for label,file,idx in [('preview',full,1299+100),('canonical',p/'public/daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4',100)]:
 run(['ffmpeg','-v','error','-n','-i',str(file),'-vf',f'select=eq(n\\,{idx})','-frames:v','1',str(im/f'ending-{label}-v1-qa.png')])
old=json.loads((p/'docs/tts-qa-v3.json').read_text())
for r in old['scenes']:assert hashlib.sha256(Path(r['file']).read_bytes()).hexdigest()==r['sha256']
report={'outputs':reports,'sceneFrames':frames,'ttsDurations':tts,'scene4HoldSeconds':381/30-10.848,'scene4Hold55FramesPixelIdentical':holdIdentical,'ttsV3Hashes':'PASS','ttsNoClippingByTimeline':all(n/30>t for n,t in zip(frames,tts)),'endingFrames':170,'visualReview':'QA frames generated; inspect separately','listeningReview':'pending user'}
(p/'docs/preview-v1-qa.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
with (p/'docs/26.09.29수정.md').open('a') as f:f.write('\n## Preview v1 — 승인 TTS v3 기반 최초 구현\n- Main Linear: 정렬·divider·제한적 대산 Green·Pretendard. Scene 1~6 정보 그래픽 및 승인 투명 PNG 보조 배치. AI 이미지 생성 없음.\n- 프레임: S1 114 / S2 171 / S3 159 / S4 381 / S5 186 / S6 288; 본편 1299f + Canonical 엔딩 170f = 1469f, 48.966667초 / 30fps.\n- S4 전체 표를 지속 노출, TTS 종료 후 1.852초 Hold. 후반 완전한 55f Hold 검증; 픽셀 동일 여부는 QA JSON에 기록.\n- 승인 TTS v3 해시 동일, 속도·문구·길이 변경 없음. TTS보다 각 Scene 길이가 길어 끝 잘림 없음.\n- Scene별 영상 6개는 전체 Preview에서 프레임 기준 구간 추출하여 별도 보존. 모든 파일 1080×1920, 30fps, H.264/AAC, 전체 decoding PASS. 상세 docs/preview-v1-qa.json.\n- Canonical 엔딩 소스·자산 변경 없음. 승인 Preview 기준 시각 비교 프레임 생성.\n- Cover/SNS·정리/삭제·Git 미실행. 사용자 시각/청취 승인 대기.\n')
print(json.dumps(report,ensure_ascii=False),flush=True)
