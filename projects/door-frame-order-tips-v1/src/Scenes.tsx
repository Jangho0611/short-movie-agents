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
 <div style={{height:30,lineHeight:'30px',fontSize:23,color:C.muted,marginTop:5}}>{i===2?'가변형 예시':''}</div>
 <div style={{fontSize:27,marginTop:0,color:C.muted,lineHeight:1.4}}>{i===0?<>PVC 성형 프로파일</>:i===1?<>목재 기반 · 결 표현</>:<>PVC + 목재</>}</div>
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
export const Scene4=()=>{const f=useCurrentFrame();const selected=ease(f,106,10);return <Shell n={4} lines={['현장 벽체 두께에 맞춰','필요한 문틀 폭 확인']}>
 <div style={{position:'absolute',left:80,top:575,fontSize:27,color:C.muted}}>03 / 현장 조건에 맞는 문틀 선택</div>
 <div style={{position:'absolute',left:80,top:680,width:920,display:'flex',alignItems:'center',gap:15}}>
 <div style={{width:390,textAlign:'center'}}><div style={{fontSize:31,fontWeight:600}}>현장 벽체</div>
 <svg width="390" height="305" viewBox="0 0 390 305" aria-label="벽체 블록과 두께 방향 표시">
 <path d="M75 105L225 55L315 105L165 155Z" fill="#EDF0F3" stroke="#66717C" strokeWidth="3"/>
 <path d="M75 105L165 155V275L75 225Z" fill="#DCE1E5" stroke="#66717C" strokeWidth="3"/>
 <path d="M165 155L315 105V225L165 275Z" fill="#F6F7F8" stroke="#66717C" strokeWidth="3"/>
 <path d="M225 30L315 80M218 39L231 17M309 92L322 68" fill="none" stroke={C.accent} strokeWidth="3"/>
 <text x="305" y="35" textAnchor="middle" fontFamily={PRETENDARD} fontSize="26" fill={C.accent}>두께</text>
 </svg><div style={{fontSize:31,fontWeight:600}}>현장 벽체 두께 확인</div></div>
 <svg width="110" height="90" viewBox="0 0 110 90" aria-label="확인한 조건에 따라 선택"><path d="M8 45H96M77 25L98 45L77 65" fill="none" stroke={C.accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
 <div style={{width:390,textAlign:'center'}}><div style={{fontSize:31,fontWeight:600}}>문틀 선택</div>
 <svg width="390" height="305" viewBox="0 0 390 305" aria-label="제품 선택 개념 기호, 치수 표현 아님">
 <rect x="62" y="40" width="266" height="225" rx="10" fill="#fff" stroke={C.line} strokeWidth="3"/>
 <path d="M117 219V77H259V219H241V95H135V219Z" fill="#F1EDF9" stroke={C.accent} strokeWidth="3"/>
 <circle cx="289" cy="237" r="36" fill={C.accent} opacity={.4+.6*selected}/><path d="M272 237l12 12 23-27" stroke="white" strokeWidth="5" fill="none"/>
 </svg><div style={{fontSize:31,fontWeight:600,color:C.accent}}>그에 맞는 문틀 폭 선택</div></div>
 </div>
 <div style={{position:'absolute',top:1135,left:80,width:920,textAlign:'center'}}><ConceptLabel/></div>
 <Presenter motion="point-right" start={0}/><Note top={1350}>벽체 조건을 확인하고<br/><span style={{color:C.accent}}>맞는 문틀 폭 선택</span><div style={{fontSize:26,fontWeight:500,color:C.muted,marginTop:30}}>선택 제품의 공급 규격도 확인</div></Note>
 </Shell>};
export const Scene5=()=>{const f=useCurrentFrame();const starts=[122,138,155];return <Shell n={5} lines={['사이즈만 확인하지 말고','종류·타입·폭까지 체크']}>
 <div style={{position:'absolute',left:80,top:584,fontSize:30,fontWeight:600,letterSpacing:1}}>문틀 발주 CHECK</div>
 <div style={{position:'absolute',left:80,top:673,width:920}}>{['문틀 종류','세부 타입','현장 벽체 두께 / 필요한 폭'].map((s,i)=>{const v=ease(f,starts[i],5);return <div key={s} style={{height:147,borderBottom:`1px solid ${C.line}`,display:'flex',alignItems:'center',gap:29,background:v>0?C.wash:'#fff',padding:'0 24px'}}><span style={{fontSize:30,color:C.muted,width:48}}>0{i+1}</span><span style={{fontSize:i===2?38:46,fontWeight:600,flex:1,color:v>0?C.accent:C.ink,whiteSpace:'nowrap'}}>{s}</span><svg width="43" height="43" viewBox="0 0 43 43"><rect x="2" y="2" width="39" height="39" rx="7" fill={v>0?C.accent:'#fff'} stroke={v>0?C.accent:C.line} strokeWidth="2"/><path d="M11 22l7 7 15-16" stroke="white" strokeWidth="4" fill="none" opacity={v}/></svg></div>})}</div>
 <Presenter motion="open-arms-explain" start={30}/><Note>종류 → 타입 → 폭<br/><span style={{color:C.accent}}>함께 확인해 주세요</span></Note>
 </Shell>};
export const SCENES=[Scene1,Scene2,Scene3,Scene4,Scene5];
export const Body=()=> <AbsoluteFill>{TIMELINE.map((s,i)=><Sequence key={s.id} from={s.from} durationInFrames={s.frames}>{React.createElement(SCENES[i])}</Sequence>)}</AbsoluteFill>;
