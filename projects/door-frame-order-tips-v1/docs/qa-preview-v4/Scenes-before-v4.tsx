import React from 'react';
import {AbsoluteFill, Audio, Freeze, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {TIMELINE} from './timeline';
import {PVCProfile,WoodProfile,HybridProfile} from './FrameProfiles';

const C={ink:'#20252B',muted:'#626B76',line:'#DCE1E5',accent:'#6250B8',wash:'#F1EDF9',green:'#123628'};
const ease=(f:number,start:number,d=12)=>interpolate(f,[start,start+d],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
const Head:React.FC<{n:number;lines:string[]}> = ({n,lines})=><>
 <div style={{position:'absolute',top:116,left:80,right:80,display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:27,fontWeight:600,color:C.muted,letterSpacing:1}}><span>DOOR SERIES / 문틀 발주</span><Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:55,height:55,objectFit:'contain'}}/></div>
 <div style={{position:'absolute',top:209,left:80,color:C.accent,fontSize:25,fontWeight:600,letterSpacing:3}}>BRIEF {String(n).padStart(2,'0')} / 05</div>
 <div style={{position:'absolute',top:272,left:80,right:68,fontSize:n===4?64:n===3||n===5?68:78,fontWeight:800,lineHeight:1.23,letterSpacing:-2.3}}>{lines.map((s,i)=><div key={s} style={{color:i===1?C.accent:C.ink,whiteSpace:'nowrap'}}>{s}</div>)}</div>
 <div style={{position:'absolute',top:503,left:80,width:920,height:2,background:C.line}}/>
 </>;
const Footer:React.FC<{n:number}>=({n})=><div style={{position:'absolute',left:80,right:80,top:1722,display:'flex',alignItems:'center',gap:20,fontSize:25,color:C.muted}}><span style={{color:C.green,fontWeight:800}}>DAESAN</span><div style={{height:1,background:C.line,flex:1}}/><span>종류 → 타입 → 폭</span></div>;
const Shell:React.FC<{n:number;lines:string[];children:React.ReactNode}>=({n,lines,children})=><AbsoluteFill style={{background:'#FFFFFF',color:C.ink,fontFamily:PRETENDARD}}><Head n={n} lines={lines}/>{children}<Footer n={n}/><Audio src={staticFile(`assets/audio/${TIMELINE[n-1].audio}`)}/></AbsoluteFill>;

// Original white-background approved motion is displayed on a matching white
// canvas, using a viewport crop only. No keying, recoloring, flipping or retiming.
const Presenter:React.FC<{motion:'point-right'|'point-left'|'open-arms-explain';start?:number;x?:number;y?:number}>=({motion,start=0,x=35,y=1180})=>{
 const f=useCurrentFrame();if(f<start)return null;
 return <div style={{position:'absolute',left:x,top:y,width:465,height:550,overflow:'hidden',opacity:ease(f,start,10)}}><Freeze frame={Math.min(f-start,118)}><OffthreadVideo muted src={staticFile(`assets/video/daesani-${motion}.mp4`)} style={{position:'absolute',width:619.2,height:1100.8,left:-103.2,top:-326.8}}/></Freeze></div>;
};
const Note:React.FC<{children:React.ReactNode;left?:number;top?:number;width?:number}>=({children,left=515,top=1340,width=480})=><div style={{position:'absolute',left,top,width,fontSize:38,fontWeight:600,lineHeight:1.45}}>{children}</div>;
const FrameGlyph:React.FC<{wide?:boolean;color?:string;width?:number;height?:number}>=({wide=false,color=C.accent,width=240,height=330})=>{
 const t=wide?32:19;
 return <svg width={width} height={height} viewBox="0 0 240 330"><path d={`M30 300V30H210V300H${210-t}V${30+t}H${30+t}V300Z`} fill={color} fillOpacity=".17" stroke={color} strokeWidth="3"/><path d="M12 315H228" stroke={C.line} strokeWidth="2"/></svg>;
};
const ConceptLabel=()=> <div style={{fontSize:23,color:C.muted,letterSpacing:.2}}>개념도 · 실제 제품 단면 아님</div>;
export const Scene1=()=>{const f=useCurrentFrame();return <Shell n={1} lines={['문틀 발주할 때','사이즈만 알면 끝?']}>
 <div style={{position:'absolute',top:559,left:80,fontSize:32,color:C.muted}}>문틀도 종류·타입에 따라 달라집니다</div>
 <div style={{position:'absolute',top:670,left:115,width:850,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><FrameGlyph width={295} height={410}/><div style={{textAlign:'center',fontSize:30,fontWeight:600}}>문틀</div></div><div style={{fontSize:72,fontWeight:500,color:C.accent,opacity:ease(f,10)}}>≠</div><div><FrameGlyph wide width={295} height={410}/><div style={{textAlign:'center',fontSize:30,fontWeight:600}}>종류·타입 확인</div></div></div>
 <div style={{position:'absolute',top:1147,left:80}}><ConceptLabel/></div>
 <Presenter motion="point-right" start={35}/><Note>사이즈 다음에<br/><span style={{color:C.accent}}>무엇을 확인할까요?</span></Note>
 </Shell>};
export const Scene2=()=>{const f=useCurrentFrame();const starts=[61,82,127];return <Shell n={2} lines={['문틀은 먼저','종류부터 확인']}>
 <div style={{position:'absolute',left:80,top:579,fontSize:27,color:C.muted}}>01 / 소재 구성부터 확인</div>
 <div style={{position:'absolute',left:65,top:665,width:950,display:'flex'}}>{['발포문틀','목문틀','혼합형문틀'].map((s,i)=>{const v=ease(f,starts[i],8);return <div key={s} style={{width:950/3,textAlign:'center',borderRight:i<2?`1px solid ${C.line}`:undefined}}>
 <div style={{fontSize:24,color:C.muted}}>0{i+1}</div>
 <div style={{height:290,display:'flex',alignItems:'center',justifyContent:'center'}}>{i===0?<PVCProfile iso width={290} height={255}/>:i===1?<WoodProfile id="s2" width={294} height={210}/>:<HybridProfile width={300} height={228}/>}</div>
 <div style={{fontSize:38,fontWeight:800,color:v>0?C.accent:C.ink}}>{s}</div>
 <div style={{fontSize:27,marginTop:20,color:C.muted,lineHeight:1.4}}>{i===0?<>PVC 성형 프로파일</>:i===1?<>목재 기반 · 결 표현</>:<>PVC + 목재</>}</div>
 <div style={{height:5,width:164,margin:'20px auto',background:C.accent,opacity:v}}/>
 </div>})}</div>
 <div style={{position:'absolute',top:1150,left:80,fontSize:23,color:C.muted}}>소재 구성 개념도 · 실제 제품 단면 아님</div>
 <Presenter motion="point-right" start={40}/><Note>먼저 사용할<br/><span style={{color:C.accent}}>문틀 종류를 확인</span></Note>
 </Shell>};
export const Scene3=()=>{const f=useCurrentFrame();const wood=f>=111;return <Shell n={3} lines={['같은 문틀이라도','세부 타입이 다릅니다']}>
 <div style={{position:'absolute',left:80,top:566,fontSize:26,color:C.muted}}>02 / 외형 차이와 스토퍼 구성</div>
 <div style={{position:'absolute',left:80,top:626,width:920,display:'flex',gap:40}}>
 <div style={{width:440,borderTop:`5px solid ${!wood?C.accent:C.line}`}}><div style={{fontSize:43,fontWeight:800,color:!wood?C.accent:C.ink,marginTop:17}}>발포문틀</div>
 <div style={{fontSize:24,color:C.muted,marginTop:7}}>마감 타입 예 · 동일 배율</div>
 {(['일반형','와이드형','슬림와이드형'] as const).map((name,i)=><div key={name} style={{height:134,display:'flex',alignItems:'center',gap:8,borderBottom:`1px solid ${C.line}`}}><div style={{width:146,fontSize:i===2?27:31,fontWeight:600,lineHeight:1.3}}>{i===2?<>슬림<br/>와이드형</>:name}<div style={{fontSize:21,fontWeight:500,color:C.accent,marginTop:7}}>{['상부 윤곽','상부 마감','프레임몰딩'][i]}</div></div><PVCProfile type={(['normal','wide','slim'] as const)[i]} width={282} height={130}/></div>)}
 </div>
 <div style={{width:440,borderTop:`5px solid ${wood?C.accent:C.line}`}}><div style={{fontSize:43,fontWeight:800,color:wood?C.accent:C.ink,marginTop:17}}>목문틀</div>
 <div style={{fontSize:24,color:C.muted,marginTop:7}}>구조 타입 예 · 본체 + 스토퍼</div>
 <div style={{height:191,position:'relative',borderBottom:`1px solid ${C.line}`}}><div style={{position:'absolute',top:22,left:0,fontSize:31,fontWeight:600}}>일체형</div><div style={{position:'absolute',left:115,top:0}}><WoodProfile id="s3-integral" width={300} height={160}/></div><div style={{position:'absolute',top:151,left:115,fontSize:24,color:C.muted}}>연결된 한 몸</div></div>
 <div style={{height:216,position:'relative'}}><div style={{position:'absolute',top:28,left:0,fontSize:31,fontWeight:600}}>분리형</div><div style={{position:'absolute',left:115,top:8}}><WoodProfile id="s3-split" split gap={39*ease(f,111,18)} width={300} height={160}/></div><div style={{position:'absolute',top:162,left:115,fontSize:26,fontWeight:600,color:C.accent}}>스토퍼 분리 ↑</div></div>
 </div>
 </div>
 <div style={{position:'absolute',left:80,top:1153,fontSize:22,color:C.muted}}>공식 단면 기반 단순화 · 발포 3종 동일 배율 · 내부 상세 생략</div>
 {!wood?<><Presenter motion="point-right" start={0} x={35}/><Note>발포문틀에도<br/><span style={{color:C.accent}}>여러 타입</span>이 있습니다</Note></>:<><Presenter motion="point-left" start={111} x={590}/><Note left={80} width={495}>목문틀도<br/><span style={{color:C.accent}}>구조 타입</span>을 확인</Note></>}
 </Shell>};
export const Scene4=()=>{const f=useCurrentFrame();return <Shell n={4} lines={['현장 벽체 두께에 맞춰','필요한 문틀 폭 확인']}>
 <div style={{position:'absolute',left:80,top:575,fontSize:27,color:C.muted}}>03 / 현장 조건 → 폭 선택 → 공급 규격</div>
 <div style={{position:'absolute',left:80,top:665,width:920}}>{['현장 벽체 두께 확인','그에 맞는 문틀 폭 선택','선택한 문틀의 공급 규격 확인'].map((label,i)=>{
 const active=i===0?f<100:i===1?f>=100&&f<143:f>=143;
 return <React.Fragment key={label}><div style={{height:130,display:'flex',alignItems:'center',gap:26,borderTop:`2px solid ${active?C.accent:C.line}`,background:active?C.wash:'#fff',padding:'0 26px'}}>
 <span style={{fontSize:30,fontWeight:600,color:C.accent,width:48}}>0{i+1}</span>
 <svg width="65" height="65" viewBox="0 0 65 65" aria-label={['벽체 측정 기호','폭 선택 기호','규격표 확인 기호'][i]} style={{flexShrink:0}}><g fill="none" stroke={C.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 {i===0?<><rect x="17" y="22" width="31" height="35"/><path d="M22 50L41 30M26 55L44 37M12 10H53M12 5V15M53 5V15"/></>:i===1?<><rect x="7" y="12" width="51" height="41" rx="4"/><path d="M15 24H48M15 32H36M37 43l6 6 12-15"/></>:<><rect x="11" y="8" width="43" height="49" rx="4"/><path d="M21 20H43M21 30H43M21 43l6 6 14-14"/></>}
 </g></svg>
 <span style={{fontSize:i===2?38:42,fontWeight:600,whiteSpace:'nowrap',color:active?C.accent:C.ink}}>{label}</span>
 </div>{i<2&&<div style={{height:30,paddingLeft:45,fontSize:27,lineHeight:'30px',color:C.muted}}>↓</div>}</React.Fragment>;
 })}<div style={{marginTop:26,textAlign:'center'}}><ConceptLabel/></div></div>
 <Presenter motion="point-right" start={0}/><Note top={1390}>현장 조건에 맞춰<br/><span style={{color:C.accent}}>폭과 공급 규격 확인</span></Note>
 </Shell>};
export const Scene5=()=>{const f=useCurrentFrame();const starts=[122,138,155];return <Shell n={5} lines={['사이즈만 확인하지 말고','종류·타입·폭까지 체크']}>
 <div style={{position:'absolute',left:80,top:584,fontSize:30,fontWeight:600,letterSpacing:1}}>문틀 발주 CHECK</div>
 <div style={{position:'absolute',left:80,top:673,width:920}}>{['문틀 종류','세부 타입','현장 벽체 두께 / 필요한 폭'].map((s,i)=>{const v=ease(f,starts[i],5);return <div key={s} style={{height:147,borderBottom:`1px solid ${C.line}`,display:'flex',alignItems:'center',gap:29,background:v>0?C.wash:'#fff',padding:'0 24px'}}><span style={{fontSize:30,color:C.muted,width:48}}>0{i+1}</span><span style={{fontSize:i===2?38:46,fontWeight:600,flex:1,color:v>0?C.accent:C.ink,whiteSpace:'nowrap'}}>{s}</span><svg width="43" height="43" viewBox="0 0 43 43"><rect x="2" y="2" width="39" height="39" rx="7" fill={v>0?C.accent:'#fff'} stroke={v>0?C.accent:C.line} strokeWidth="2"/><path d="M11 22l7 7 15-16" stroke="white" strokeWidth="4" fill="none" opacity={v}/></svg></div>})}</div>
 <Presenter motion="open-arms-explain" start={30}/><Note>종류 → 타입 → 폭<br/><span style={{color:C.accent}}>함께 확인해 주세요</span></Note>
 </Shell>};
export const SCENES=[Scene1,Scene2,Scene3,Scene4,Scene5];
export const Body=()=> <AbsoluteFill>{TIMELINE.map((s,i)=><Sequence key={s.id} from={s.from} durationInFrames={s.frames}>{React.createElement(SCENES[i])}</Sequence>)}</AbsoluteFill>;
