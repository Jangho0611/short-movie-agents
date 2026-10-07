import React from 'react';
import {AbsoluteFill, Audio, Freeze, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {TIMELINE} from './timeline';

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
 <div style={{position:'absolute',left:80,top:579,fontSize:27,color:C.muted}}>01 / 문틀 종류</div>
 <div style={{position:'absolute',left:80,top:662,width:920,display:'flex'}}>{['발포문틀','목문틀','혼합형문틀'].map((s,i)=>{const v=ease(f,starts[i],8);return <div key={s} style={{width:920/3,textAlign:'center',borderRight:i<2?`1px solid ${C.line}`:undefined}}><div style={{fontSize:24,color:C.muted,marginBottom:24}}>0{i+1}</div><FrameGlyph color={v>0?C.accent:'#929AA5'} width={230} height={316}/><div style={{fontSize:38,fontWeight:800,marginTop:36,color:v>0?C.accent:C.ink}}>{s}</div><div style={{height:5,width:164,margin:'24px auto',background:C.accent,opacity:v}}/></div>})}</div>
 <div style={{position:'absolute',top:1145,left:80}}><ConceptLabel/></div>
 <Presenter motion="point-right" start={40}/><Note>먼저 사용할<br/><span style={{color:C.accent}}>문틀 종류를 확인</span></Note>
 </Shell>};
export const Scene3=()=>{const f=useCurrentFrame();const wood=f>=111;return <Shell n={3} lines={['같은 문틀이라도','세부 타입이 다릅니다']}>
 <div style={{position:'absolute',left:80,top:582,fontSize:27,color:C.muted}}>02 / 종류 안의 세부 타입</div>
 <div style={{position:'absolute',left:80,top:679,width:920,display:'flex',gap:40}}>{[{label:'발포문틀',items:['일반형','와이드형','슬림와이드형']},{label:'목문틀',items:['일체형','분리형']}].map((g,i)=>{const active=(i===0&&!wood)||(i===1&&wood);return <div key={g.label} style={{width:440}}><div style={{fontSize:45,fontWeight:800,color:active?C.accent:C.ink,borderTop:`5px solid ${active?C.accent:C.line}`,paddingTop:24,paddingBottom:25}}>{g.label}</div><div style={{borderLeft:`2px solid ${C.line}`,marginLeft:12,paddingLeft:27}}>{g.items.map((s,k)=><div key={s} style={{position:'relative',fontSize:40,fontWeight:600,marginBottom:30,paddingTop:8}}><span style={{position:'absolute',left:-28,top:33,width:18,height:2,background:C.line}}/>{s}{i===1&&k===1&&<div style={{fontSize:28,fontWeight:500,color:C.muted,marginTop:9}}>스토퍼 분리</div>}</div>)}</div></div>})}</div>
 {!wood?<><Presenter motion="point-right" start={0} x={35}/><Note>발포문틀에도<br/><span style={{color:C.accent}}>여러 타입</span>이 있습니다</Note></>:<><Presenter motion="point-left" start={111} x={590}/><Note left={80} width={495}>목문틀도<br/><span style={{color:C.accent}}>구조 타입</span>을 확인</Note></>}
 </Shell>};
export const Scene4=()=>{const f=useCurrentFrame();const phase=ease(f,106,10);return <Shell n={4} lines={['현장 벽체 두께에 맞춰','필요한 문틀 폭 확인']}>
 <div style={{position:'absolute',left:80,top:575,fontSize:27,color:C.muted}}>03 / 현장 조건 → 필요한 폭</div>
 <div style={{position:'absolute',left:105,top:655,width:870}}>
 <svg width="870" height="480" viewBox="0 0 870 480">
 <defs><pattern id="wall-hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="14" stroke="#D9DFE2" strokeWidth="3"/></pattern><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={C.accent}/></marker></defs>
 <rect x="200" y="140" width="470" height="178" fill="#F2F4F5"/><rect x="200" y="140" width="470" height="178" fill="url(#wall-hatch)" stroke="#A9B2BB" strokeWidth="2"/>
 <text x="435" y="235" textAnchor="middle" fontSize="35" fill={C.muted} fontFamily={PRETENDARD}>벽체</text>
 <path d="M176 275V340H694V275" fill="none" stroke={C.accent} strokeOpacity={.4+.6*phase} strokeWidth="23" strokeLinejoin="miter"/>
 <line x1="200" y1="97" x2="670" y2="97" stroke={C.accent} strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)"/>
 <path d="M200 73V133M670 73V133" stroke={C.accent} strokeWidth="2"/>
 <text x="435" y="58" textAnchor="middle" fontSize="38" fill={C.ink} fontWeight="600" fontFamily={PRETENDARD}>현장 벽체 두께</text>
 <line x1="176" y1="395" x2="694" y2="395" stroke={C.accent} strokeWidth="2" markerStart="url(#arrow)" markerEnd="url(#arrow)"/>
 <text x="435" y="458" textAnchor="middle" fontSize="39" fill={C.accent} fontWeight="600" fontFamily={PRETENDARD}>필요한 문틀 폭</text>
 </svg>
 <div style={{textAlign:'center',marginTop:15}}><ConceptLabel/></div>
 </div>
 <Presenter motion="point-right" start={0}/><Note>두께 확인 → 폭 선택<div style={{marginTop:28,paddingTop:21,borderTop:`1px solid ${C.line}`,fontSize:30,color:C.muted}}>기성폭 ↔ 가변형</div></Note>
 </Shell>};
export const Scene5=()=>{const f=useCurrentFrame();const starts=[122,138,155];return <Shell n={5} lines={['사이즈만 확인하지 말고','종류·타입·폭까지 체크']}>
 <div style={{position:'absolute',left:80,top:584,fontSize:30,fontWeight:600,letterSpacing:1}}>문틀 발주 CHECK</div>
 <div style={{position:'absolute',left:80,top:673,width:920}}>{['문틀 종류','세부 타입','현장 벽체 두께 / 필요한 폭'].map((s,i)=>{const v=ease(f,starts[i],5);return <div key={s} style={{height:147,borderBottom:`1px solid ${C.line}`,display:'flex',alignItems:'center',gap:29,background:v>0?C.wash:'#fff',padding:'0 24px'}}><span style={{fontSize:30,color:C.muted,width:48}}>0{i+1}</span><span style={{fontSize:i===2?38:46,fontWeight:600,flex:1,color:v>0?C.accent:C.ink,whiteSpace:'nowrap'}}>{s}</span><svg width="43" height="43" viewBox="0 0 43 43"><rect x="2" y="2" width="39" height="39" rx="7" fill={v>0?C.accent:'#fff'} stroke={v>0?C.accent:C.line} strokeWidth="2"/><path d="M11 22l7 7 15-16" stroke="white" strokeWidth="4" fill="none" opacity={v}/></svg></div>})}</div>
 <Presenter motion="open-arms-explain" start={30}/><Note>종류 → 타입 → 폭<br/><span style={{color:C.accent}}>함께 확인해 주세요</span></Note>
 </Shell>};
export const SCENES=[Scene1,Scene2,Scene3,Scene4,Scene5];
export const Body=()=> <AbsoluteFill>{TIMELINE.map((s,i)=><Sequence key={s.id} from={s.from} durationInFrames={s.frames}>{React.createElement(SCENES[i])}</Sequence>)}</AbsoluteFill>;
