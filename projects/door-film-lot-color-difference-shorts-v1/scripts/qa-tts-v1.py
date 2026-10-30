from pathlib import Path
import subprocess,json,hashlib,re,array,math
P=Path(__file__).resolve().parents[1]; A=P/'public/assets/audio'; D=P/'docs'
def run(args):return subprocess.run(args,check=True,capture_output=True)
inputs=json.loads((D/'tts-v5-input-v1.json').read_text())
files=[A/n for n in inputs]
assert all(p.exists() for p in files)
full=A/'full-tts-qa-v1.mp3'
assert not full.exists()
# Preserve all decoded samples, including source head/tail silence; no artificial pause.
args=['ffmpeg','-v','error','-n']
for p in files:args+=['-i',str(p)]
args+=['-filter_complex',''.join(f'[{i}:a]' for i in range(6))+'concat=n=6:v=0:a=1[a]','-map','[a]','-c:a','libmp3lame','-b:a','192k',str(full)]
run(args)
rows=[]
for p in files+[full]:
 probe=json.loads(run(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(p)]).stdout)
 run(['ffmpeg','-v','error','-xerror','-i',str(p),'-f','null','-'])
 pcm=array.array('f');pcm.frombytes(run(['ffmpeg','-v','error','-i',str(p),'-f','f32le','-acodec','pcm_f32le','-']).stdout)
 peak=max(abs(x) for x in pcm);over=sum(abs(x)>=1 for x in pcm)
 log=run(['ffmpeg','-hide_banner','-nostats','-i',str(p),'-af','ebur128=peak=true','-f','null','-']).stderr.decode()
 summary=log[log.rfind('Summary:'):]
 lufs=float(re.search(r'I:\s*([-\d.]+) LUFS',summary)[1]);tp=float(re.search(r'Peak:\s*([-\d.]+) dBFS',summary)[1])
 silence=run(['ffmpeg','-hide_banner','-nostats','-i',str(p),'-af','silencedetect=noise=-30dB:d=0.1','-f','null','-']).stderr.decode()
 events=[x for x in silence.splitlines() if 'silence_start:' in x or 'silence_end:' in x]
 stream=probe['streams'][0]
 row={'file':str(p.relative_to(P)),'text':inputs.get(p.name),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'ffprobeDurationSeconds':float(probe['format']['duration']),'decodedDurationSeconds':len(pcm)/int(stream['sample_rate'])/stream['channels'],'integratedLUFS':lufs,'samplePeakDBFS':20*math.log10(peak),'truePeakDBTP':tp,'samplesAtOrAboveFullScale':over,'overlevel':peak>=1 or tp>=0,'decode':'PASS','silenceReferenceOnly':events}
 rows.append(row)
 print(p.name,row['ffprobeDurationSeconds'],lufs,row['samplePeakDBFS'],tp,flush=True)
report={'script':'scripts/generate_tts.py','scriptSHA256':hashlib.sha256((P.parents[1]/'scripts/generate_tts.py').read_bytes()).hexdigest(),'authentication':'Google Application Default Credentials, google.auth.default; secrets not recorded','pythonRuntime':'existing door-finish-color-difference-shorts-v1/.venv/bin/python','settings':{'voice':'ko-KR-Chirp3-HD-Alnilam','speakingRate':1.0,'audioEncoding':'MP3','input':'text','pitch':'not specified'},'synthesisCallsPerScene':1,'initialSandboxFailure':'OAuth DNS failure before synthesis; successful execution used network permission','concat':'decoded PCM sequential concat; extra silence 0; no trim/speed/pitch/volume changes; QA MP3 192kbps; ending excluded','listeningApproval':'PENDING; pronunciation, intonation and naturalness not assessed','files':rows}
(D/'tts-v5-generation-qa-v1.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
lines=['# TTS v5 최초 생성 / 청취 QA v1','', '상태: 사용자 청취 승인 대기. 발음·억양·자연스러움 미검증.','', '기존 scripts/generate_tts.py + Google ADC 사용. Alnilam / speakingRate 1.0 / pitch 미지정. 승인 원문 일치 확인, 각 Scene 1회 합성. 최초 DNS 실패는 인증 단계이며 합성 전 실패.','', '기존 승인 도어 영상의 PCM 순서 연결 관례 적용. 추가 무음·트림·음량/속도/피치 조정 없음. 통합본은 엔딩을 제외한 Scene 1~6만 192kbps MP3로 연결.','', '| 파일 | ffprobe 길이(초) | LUFS | Sample Peak dBFS | True Peak dBTP | 오버레벨 |','|---|---:|---:|---:|---:|---|']
for r in rows:lines.append(f"| {Path(r['file']).name} | {r['ffprobeDurationSeconds']:.3f} | {r['integratedLUFS']:.1f} | {r['samplePeakDBFS']:.2f} | {r['truePeakDBTP']:.1f} | {'주의' if r['overlevel'] else '검출 없음'} |")
lines+=['','모든 7개 파일 전체 디코딩 PASS. 클리핑은 디코딩된 샘플의 full-scale 도달 수와 true peak를 참고한 기계 검사이며 청감상 왜곡 판정은 아님. 음량 보정은 하지 않음.','길이는 ffprobe 파일 전체 길이이며 실제 음절 지속시간과 동일하지 않음. JSON에 디코딩 샘플 기준 길이도 기록. 무음 검출(-30dB/0.1초)은 참고용이며 자연스러운 발화 판정에 사용하지 않음.','','청취 확인: 로트/색차 발음, Scene 4 쉼표 앞뒤 호흡, Scene 5 두 문장 연결, Scene 6 결론 억양 및 모든 Scene 경계의 연결감.','','입력: docs/tts-v5-input-v1.json. 설정·파일별 SHA256·실측 길이·음량·무음 참고 결과: docs/tts-v5-generation-qa-v1.json.','','## SHA256']
for r in rows:lines.append(f"- {Path(r['file']).name}: `{r['sha256']}`")
(D/'tts-qa-v1.md').write_text('\n'.join(lines)+'\n')
with (P/'README.md').open('a') as f:f.write('\n## TTS v5 최초 생성 완료\n\nScene별 scene01~06-tts-v1.mp3 및 full-tts-qa-v1.mp3 생성. 사용자 청취 승인 대기. 위 준비 단계의 미생성 설명은 초기 기록이며, 최신 결과는 [TTS QA](docs/tts-qa-v1.md)를 참조한다. 본편 구현/렌더 없음.\n')
with (D/'26.10.28수정.md').open('a') as f:f.write('\n## TTS v5 최초 생성\n\n승인 원문 대조 PASS. 기존 생성 스크립트/ADC, 각 Scene 1회 생성. 추가 쉼 없이 통합 청취본 제작. 7개 파일 전체 디코딩 PASS. 상세 설정/음량/SHA256은 tts-v5-generation-qa-v1.json 및 tts-qa-v1.md. 사용자 청취 승인 대기. 다른 제작/Git/공통 문서 변경 없음.\n')
