import React from 'react';
import {AbsoluteFill,Audio,Composition,interpolate,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './approved/fonts';
const C={paper:'#F5F3ED',ink:'#20372E',muted:'#6F776F',line:'#D6D9D0',wood:'#CCAD83',wall:'#CDD0C8',finish:'#B28D58',door:'#DFE6DF',accent:'#D56844',green:'#477660'};
export const SCENES=[
 {id:1,frames:112,title:['문틀만 세우면 끝?','히든도어 목공의 핵심'],eyebrow:'01 / 먼저 볼 것'},
 {id:2,frames:203,title:['문틀 쪽 부재 ≠ 벽체 바탕','마감될 벽 위치까지 확인'],eyebrow:'02 / 바탕과 위치'},
 {id:3,frames:148,title:['합판·MDF 등','9mm 마감 두께까지 반영'],eyebrow:'03 / 마감층의 두께'},
 {id:4,frames:183,title:['문짝 모서리의 어깨가공','폭·깊이는 적용 사양 확인'],eyebrow:'04 / 문짝 모서리'},
 {id:5,frames:180,title:['문틀 · 벽체 · 9mm 마감 · 어깨가공','설치 전 구조부터 맞춘다'],eyebrow:'05 / 설치 전 준비'},
];
// The same paths as episode 1's approved v8. The finish edge and face are ONE layer.
const geometry=[
 ['wall','M100 57L195 2H324V119L264 155Z',C.wall],
 ['jamb','M58 68L88 51L264 155L227 186L181 164L202 151Z',C.wood],
 ['return','M58 68L202 151L181 164L58 236Z','#E9E9E1'],
 ['base','M264 155L324 119V130L227 186Z','#F0EFE7'],
 ['finish','M227 186L324 130V142L224 200L214 194Z',C.finish],
 ['finish','M224 200L324 142V303H224Z','#D6BB95'],
 ['door','M2 268L181 164L219 186L206 194L214 199L46 303H2Z','#BFCAC1'],
 ['door','M46 303L214 199L219 202V303Z',C.door],
 ['rebate','M181 164L186 161L224 183L211 191L219 196V202L214 199L206 194L219 186Z','#91AB99'],
];
function Diagram({active='',finish=true,door=true,zoom=false}:{active?:string;finish?:boolean;door?:boolean;zoom?:boolean}){
 return <svg width="100%" height="100%" viewBox={zoom?'164 148 76 70':'-20 -16 368 346'} style={{overflow:'visible'}}>
 {geometry.map(([key,d,fill],i)=><path key={i} d={d} fill={fill} stroke={active===key?C.accent:'#657267'} strokeWidth={active===key?2.1:0.9} strokeLinejoin="round" opacity={key==='finish'&&!finish?0:((key==='door'||key==='rebate')&&!door?.10:1)}/>)}
 {active==='contact'&&<path d="M224 200L219 202V275" fill="none" stroke={C.accent} strokeWidth="2.2"/>}
 </svg>;
}
function Label({x,y,text,active=false}:{x:number;y:number;text:string;active?:boolean}){return <div style={{position:'absolute',left:x,top:y,fontSize:30,fontWeight:600,color:active?C.accent:C.ink,background:C.paper,padding:'6px 10px'}}>{text}</div>}
function Whole({id,f}:{id:number;f:number}){
 const active=id===1?'jamb':id===2?(f<55?'jamb':f<118?'base':'position'):id===3?'finish':id===5?(f<25?'jamb':f<50?'base':f<75?'finish':f<102?'rebate':f<125?'contact':''):'';
 const showFinish=id>=3;
 return <>
 <div style={{position:'absolute',left:120,top:610,width:790,height:745}}><Diagram active={active} finish={showFinish} door={id!==1}/></div>
 {id===1?<><Label x={580} y={635} text="문틀 쪽 부재" active/><div style={{position:'absolute',left:95,top:1390,fontSize:34,color:C.muted,opacity:interpolate(f,[35,49],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>주변 벽체도 함께 준비해야 합니다</div></>:<>
 <svg width="1080" height="1920" style={{position:'absolute',inset:0}} fill="none" stroke="#89958A" strokeWidth="2">
 <path d="M470 860L190 930H110"/><path d="M754 977L840 735H950"/>
 {showFinish&&<path d="M800 1090L895 1260H958"/>}
 {id===2&&<path d="M640 1075V1380" stroke={active==='position'?C.accent:C.green} strokeWidth="4" strokeDasharray="10 8"/>}
 </svg>
 <Label x={82} y={970} text="문틀 쪽 부재" active={active==='jamb'}/>
 <Label x={720} y={675} text="벽체 바탕" active={active==='base'}/>
 {id===2&&<Label x={660} y={1350} text="마감 위치" active={active==='position'}/>}
 {showFinish&&<Label x={637} y={1290} text="9mm 마감층" active={active==='finish'}/>}
 {id===3&&<><div style={{position:'absolute',left:90,top:1420,fontSize:37,fontWeight:600}}>벽체 바탕 <span style={{color:C.muted}}>→</span> <span style={{color:C.finish}}>합판·MDF 등 9mm 마감</span></div><div style={{position:'absolute',left:92,top:560,color:C.finish,fontSize:52,fontWeight:800}}>9<span style={{fontSize:32}}>mm</span><span style={{fontSize:27,fontWeight:500,marginLeft:22}}>마감층 한 겹</span></div></>}
 {id===5&&<><div style={{position:'absolute',left:90,top:1380,fontSize:34,fontWeight:600,color:C.accent,lineHeight:'48px'}}>{['문틀 쪽 부재','벽체 바탕','9mm 마감층','문짝 어깨가공','벽체와 문짝 접점'].map((text,index)=><div key={text} style={{visibility:f>=index*25?'visible':'hidden'}}>{text}</div>)}</div><div style={{position:'absolute',left:90,top:1644,fontSize:26,color:C.muted}}>접점 = 벽체 마감 끝과 문짝 가장자리의 경계</div></>}
 </>}
 </>;
}
function Rebate({f}:{f:number}){return <>
 <div style={{position:'absolute',left:84,top:510,width:320,height:300}}><Diagram active="rebate"/></div>
 <div style={{position:'absolute',left:438,top:580,fontSize:32,fontWeight:600}}>같은 단면의<br/>문짝 모서리 확대</div>
 <div style={{position:'absolute',left:440,top:685,fontSize:27,color:C.muted}}>어깨가공 ≠ 접점</div>
 <div style={{position:'absolute',left:90,top:850,width:865,height:575,overflow:'hidden',borderTop:`1px solid ${C.line}`,borderBottom:`1px solid ${C.line}`}}>
 <svg width="865" height="575" viewBox="0 0 865 575">
 <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8 4L0 0V8Z" fill={C.accent}/></marker></defs>
 {/* Orthogonal detail of the SAME door-edge rebate, not an additional part. */}
 <path d="M70 440V230H440V310H560V440Z" fill={C.door} stroke={C.green} strokeWidth="3"/>
 <path d="M440 230V310H560" fill="none" stroke={C.accent} strokeWidth="7"/>
 <text x="155" y="360" fill={C.ink} fontSize="38" fontWeight="600">문짝</text>
 <path d="M575 190H745V440H575" fill="#D6BB95" stroke="#85765E" strokeWidth="2"/>
 <text x="590" y="385" fill={C.ink} fontSize="26">벽체 마감</text>
 <path d="M567 315V440" fill="none" stroke={C.green} strokeWidth="2" strokeDasharray="6 6"/>
 <path d="M567 436L650 490H760" fill="none" stroke={C.green} strokeWidth="2"/>
 <text x="591" y="530" fill={C.green} fontSize="26">접점: 두 가장자리의 경계</text>
 <g opacity={interpolate(f,[40,49],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}>
 <path d="M440 150H560" stroke={C.accent} strokeWidth="3" markerStart="url(#arrow)" markerEnd="url(#arrow)"/>
 <path d="M440 168V215M560 168V295" stroke={C.accent} strokeWidth="1.5"/>
 <text x="479" y="120" fill={C.accent} fontSize="35" fontWeight="600">폭</text>
 <path d="M380 230V310" stroke={C.accent} strokeWidth="3" markerStart="url(#arrow)" markerEnd="url(#arrow)"/>
 <path d="M395 230H425M395 310H425" stroke={C.accent} strokeWidth="1.5"/>
 <text x="270" y="281" fill={C.accent} fontSize="35" fontWeight="600">깊이</text>
 </g>
 <text x="72" y="70" fill={C.ink} fontSize="32" fontWeight="600">어깨가공 · 문짝 모서리의 단차</text>
 </svg></div>
 <div style={{position:'absolute',left:90,top:1470,fontSize:28,color:C.muted}}>가공 크기는 적용할 문틀·마감 사양에 따라 확인</div>
 </>}
export function CarpentryScene({id}:{id:number}){const f=useCurrentFrame();const s=SCENES[id-1];return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD}}>
 <div style={{position:'absolute',left:86,top:128,fontSize:27,fontWeight:600,letterSpacing:1.5}}>DAESAN <span style={{fontWeight:500,color:C.muted,marginLeft:22,letterSpacing:0}}>히든도어 목공 · 2편</span></div>
 <div style={{position:'absolute',left:86,top:215,fontSize:27,color:C.muted}}>{s.eyebrow}</div>
 <div style={{position:'absolute',left:86,top:292,right:112,fontSize:id===5?42:id===2||id===4?51:59,fontWeight:800,lineHeight:1.42,letterSpacing:-1.6}}>{s.title.map((t,i)=><div key={t} style={{whiteSpace:'nowrap',color:i===1?C.green:C.ink}}>{t}</div>)}</div>
 {id===4?<Rebate f={f}/>:<Whole id={id} f={f}/>}
 <div style={{position:'absolute',left:86,right:112,top:1720,display:'flex',gap:12}}>{SCENES.map(x=><div key={x.id} style={{height:4,flex:1,background:x.id===id?C.green:C.line}}/>)}</div>
 <Audio src={staticFile(`audio/scene${String(id).padStart(2,'0')}-tts-v${id===5?6:4}.mp3`)} playbackRate={1}/>
 </AbsoluteFill>}
export const CarpentryCompositions=()=> <>{SCENES.map(s=><Composition key={s.id} id={`CarpentryScene${s.id}`} component={CarpentryScene} defaultProps={{id:s.id}} durationInFrames={s.frames} fps={30} width={1080} height={1920}/>)}</>;
