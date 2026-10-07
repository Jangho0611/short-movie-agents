import React from 'react';
import {AbsoluteFill,Audio,Composition,Img,interpolate,registerRoot,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
import {PRETENDARD} from './approved/fonts';
const INK='#20372e',PAPER='#f5f3ed';
const specs=[
{id:1,frames:125,audio:'scene01-tts-v5.mp3',lines:['히든도어도 일반 도어처럼','문만 설치하면 끝일까요?'],tag:'시공 전, 먼저 확인할 것',image:'hidden-door-scene01-hero-v1.png'},
{id:2,frames:178,audio:'scene02-tts-v4.mp3',lines:['문선 없이 벽과 문이 한 면처럼','이어지는 히든도어'],tag:'차이는 문 주변의 마감',image:''},
{id:3,frames:210,audio:'scene03-tts-v4.mp3',lines:['영림 히든도어 시공 조건','9mm 마감 벽체 필요'],tag:'목공 단계부터 준비',image:'hidden-door-scene03-carpentry-v1.png'},
{id:4,frames:220,audio:'scene04-tts-v8.mp3',lines:['9mm 합판·MDF로 벽체 마감','도어 설치 전 목공부터 준비'],tag:'문을 달기 전, 벽체 마감부터',image:'hidden-door-scene04-finish-v4.png'},
{id:5,frames:158,audio:'scene05-tts-v6.mp3',lines:['히든도어 완성도는','목공 단계부터 시작됩니다'],tag:'처음부터 함께 계획하세요',image:'hidden-door-scene01-hero-v1.png'}];
const Compare=()=>{const f=useCurrentFrame();return <div style={{position:'absolute',top:385,left:64,width:952}}><div style={{display:'flex',gap:24}}>{['normal','hidden'].map((kind,i)=><div key={kind} style={{width:464}}><div style={{fontSize:40,fontWeight:600,textAlign:'center',marginBottom:24}}>{i===0?'일반 도어':'히든도어'}</div><div style={{height:950,position:'relative',overflow:'hidden'}}><Img src={staticFile(`images/hidden-door-scene02-${kind}-v1.png`)} style={{width:'100%',height:'100%',objectFit:'cover'}}/>{i===0&&<svg width="464" height="950" style={{position:'absolute',inset:0}}><path d="M112 775V158H360V775" fill="none" stroke="#c8a25a" strokeWidth="5" strokeDasharray="1500" strokeDashoffset={interpolate(f,[8,42],[1500,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/></svg>}{i===1&&<svg width="464" height="950" style={{position:"absolute",inset:0}}><path d="M60 530H410" stroke="#7b9484" strokeWidth="5" opacity={f>50?.8:0}/></svg>}</div><div style={{fontSize:30,textAlign:'center',fontWeight:600,marginTop:28}}>{i===0?'문틀 주변에 문선':'벽과 문이 같은 면'}</div></div>)}</div></div>};
const Scene=({id}:{id:number})=>{const f=useCurrentFrame();const {durationInFrames}=useVideoConfig();const s=specs[id-1];return <AbsoluteFill style={{background:PAPER,color:INK,fontFamily:PRETENDARD}}>
{id!==2&&<><Img src={staticFile(`images/${s.image}`)} style={{position:'absolute',width:1080,height:1920,objectFit:'cover',transform:`scale(${interpolate(f,[0,durationInFrames],[id===1?1.045:1,id===1?1.057:1.012])})`}}/><AbsoluteFill style={{background:'linear-gradient(to bottom,rgba(245,243,237,0.92) 0%,rgba(245,243,237,0.66) 13%,transparent 23%,transparent 75%,rgba(245,243,237,0.95) 88%)'}}/></>}
<div style={{position:'absolute',top:125,left:76,right:100,fontSize:28,fontWeight:600,letterSpacing:2}}>DAESAN <span style={{fontWeight:500,letterSpacing:0,color:'#6e776f',marginLeft:22}}>히든도어 시공</span></div>
<div style={{position:'absolute',top:218,left:76,right:100,fontSize:40,fontWeight:600}}>{s.tag}</div>
{id===2&&<Compare/>}
{id===3&&<><svg style={{position:'absolute',inset:0}} width="1080" height="1920"><path d="M250 1510V330H795V1510" fill="none" stroke="#dfbc72" strokeWidth="6" strokeDasharray="2850" strokeDashoffset={interpolate(f,[15,85],[2850,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/></svg><div style={{position:'absolute',top:1360,left:76,padding:'14px 24px',background:'rgba(245,243,237,.94)',fontSize:66,fontWeight:800}}>9<span style={{fontSize:38}}>mm</span><span style={{fontSize:31,fontWeight:600,marginLeft:22}}>마감 벽체</span></div></>}
{id===4&&<><svg width="1080" height="1920" style={{position:'absolute',inset:0}}>{f>=24&&f<66&&<rect x="765" y="390" width="230" height="750" fill="#7b948422" stroke="#7b9484" strokeWidth="4"/>}{f>=66&&f<110&&<rect x="130" y="455" width="215" height="750" fill="#bf9a5522" stroke="#bf9a55" strokeWidth="4"/>}</svg>{f>=110&&<div style={{position:'absolute',left:76,top:1215,width:840,height:320,background:'rgba(245,243,237,.95)',opacity:Math.min(1,(f-110)/8)}}><svg width="840" height="320" viewBox="0 0 840 320" style={{fontSize:25,fontWeight:600}}>
<g transform="translate(16 8)" stroke="#666e64" strokeWidth="1.1" strokeLinejoin="round">
<path id="existing-wall" d="M100 57L195 2H324V119L264 155Z" fill="#bfc1bc"/>
<path id="plywood-jamb" d="M58 68L88 51L264 155L234 172Z" fill="#d0ae83"/>
<path id="opening-return" d="M58 68L202 151L181 164L58 236Z" fill="#f0f0e9"/>
<path id="first-carpentry-layer" d="M264 155L324 119V130L227 186Z" fill="#eeeee4"/>
<path id="second-carpentry-edge" d="M227 186L324 130V142L224 200L214 194Z" fill="#bfa079"/>
<path id="second-carpentry-face" d="M224 200L324 142V303H224Z" fill="#d0b58e"/>
<path id="door-top-rebate" d="M2 268L181 164L219 186L206 194L214 199L46 303H2Z" fill="#b7bcb9"/>
<path id="door-front" d="M46 303L214 199L219 202V303Z" fill="#e0e3df"/>
<path id="rebate-step" d="M181 164L186 161L224 183L211 191L219 196V202L214 199L206 194L219 186Z" fill="#d6dbd5"/>
<path d="M192 177L209 187L197 194" fill="none" stroke="#69726a" strokeDasharray="3 2"/>
</g>
<g fill="none" stroke="#87907f" strokeWidth="1.4"><path d="M269 53H366"/><path d="M161 112L337 93H366"/><path d="M299 147L347 142H366"/><path d="M299 172L350 195H366"/><path d="M226 202L345 244H366"/><path d="M132 275H366"/></g>
<g fill={INK}><text x="383" y="58">벽체</text><text x="383" y="99">문틀 <tspan fontSize="21" fontWeight="500">(합판 자재)</tspan></text><text x="383" y="147">1번째 목공 벽체 <tspan fontSize="18" fontWeight="500">(석고보드 자재)</tspan></text><text x="383" y="200">2번째 목공 벽체 <tspan fontSize="18" fontWeight="500">(합판·MDF 자재)</tspan></text><text x="383" y="249">어깨가공</text><text x="383" y="287">히든도어</text></g>
</svg></div>}</>}
{id===5&&<div style={{position:'absolute',top:300,left:76,right:100,display:'flex',justifyContent:'space-between',fontSize:29,fontWeight:600}}>{['목공 준비','9mm 벽체 마감','완성'].map((t,i)=><React.Fragment key={t}>{i>0&&<span style={{color:'#859286'}}>→</span>}<span style={{opacity:interpolate(f,[i*13,i*13+10],[0.4,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>{t}</span></React.Fragment>)}</div>}
<div style={{position:'absolute',left:76,right:100,top:1600,fontSize:id===2?48:52,fontWeight:800,lineHeight:1.38,letterSpacing:-1.8}}>{s.lines.map(t=><div key={t} style={{whiteSpace:'nowrap'}}>{t}</div>)}</div><div style={{position:'absolute',bottom:130,left:76,right:100,height:3,background:'#dddeda'}}><div style={{height:3,width:`${100*(f+1)/s.frames}%`,background:'#7b9484'}}/></div><Audio src={staticFile(`audio/${s.audio}`)} playbackRate={1}/>
</AbsoluteFill>};
registerRoot(()=> <>{specs.map(s=><Composition key={s.id} id={`HiddenDoorScene${s.id}`} component={Scene} defaultProps={{id:s.id}} width={1080} height={1920} fps={30} durationInFrames={s.frames}/>)}</>);
