import React from 'react';
import {AbsoluteFill, Audio, staticFile, useCurrentFrame, interpolate} from 'remotion';
import {PRETENDARD} from './design/fonts';
import {doorPoint, combinations, Hand, Swing} from './geometry';
import timing from './timing.json';
const C={paper:'#FAF9F6',ink:'#192B25',green:'#146335',mint:'#C8E6CD',line:'#DCDDD5',muted:'#627068',knob:'#B54D20',cream:'#F4ECD6'};
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const Label:React.FC<{children:React.ReactNode}>=({children})=><div style={{fontSize:30,fontWeight:600,color:C.muted,letterSpacing:1}}>{children}</div>;
function Eye({x=200,y=364}:{x?:number;y?:number}) {return <g transform={`translate(${x},${y})`}><path d="M-16 0 Q0 -17 16 0 Q0 17 -16 0Z" fill="none" stroke={C.green} strokeWidth="3"/><circle r="5" fill={C.green}/></g>}
export function FrontDoor({hand='right',width=220,height=340}:{hand?:Hand;width?:number;height?:number}){
 const hx=hand==='left'?116:284;
 return <svg width={width} height={height} viewBox="0 0 400 520"><path d="M74 470V35H326V470" fill="#EFEEE7" stroke="#B0B8AE" strokeWidth="14"/><rect x="91" y="52" width="218" height="418" rx="2" fill={C.cream} stroke={C.ink} strokeWidth="5"/><rect x="115" y="78" width="170" height="354" fill="none" stroke="#D9CEAF" strokeWidth="3"/><circle cx={hx} cy="277" r="20" fill={C.knob}/><path d={`M${hx} 277h${hand==='left'?38:-38}`} stroke={C.ink} strokeWidth="9" strokeLinecap="round"/><path d="M60 475H340" stroke={C.ink} strokeWidth="5"/></svg>;
}
export function Plan({hand='right',swing='push',progress=1,id,compact=false}:{hand?:Hand;swing?:Swing;progress?:number;id:string;compact?:boolean}){
 const a=progress*Math.PI*0.37; const end=doorPoint(hand,swing,a); const knob=doorPoint(hand,swing,a,133);
 const closed=doorPoint(hand,swing,0); const pts=Array.from({length:25},(_,i)=>doorPoint(hand,swing,Math.PI*0.37*i/24,112));
 const arc=pts.map((p,i)=>`${i?'L':'M'}${p.x},${p.y}`).join(' ');
 return <svg viewBox="0 0 400 420" width="100%" style={{overflow:'visible'}}>
 <defs><marker id={`arrow-${id}`} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill={C.green}/></marker></defs>
 <rect x="12" y="22" width="376" height="178" rx="18" fill="#F2F1EB"/>
 <rect x="12" y="202" width="376" height="204" rx="18" fill="#E7F0E5"/>
 <text x="200" y="47" textAnchor="middle" fontSize={compact?40:29} fontWeight="600" fill={C.muted}>방</text>
 <path d="M12 200H125 M275 200H388" stroke="#667269" strokeWidth="15"/>
 <path d="M125 200H275" stroke="#A9B0A6" strokeWidth="6" strokeDasharray="8 7"/>
 <circle cx={closed.x+(hand==='left'?17:-17)} cy="200" r="9" fill={C.knob} opacity=".4"/>
 <path d={arc} fill="none" stroke={C.green} strokeWidth="5" markerEnd={`url(#arrow-${id})`}/>
 <path d={`M${end.pivotX} 200L${end.x} ${end.y}`} stroke={C.ink} strokeWidth="10" strokeLinecap="round"/>
 <circle cx={knob.x} cy={knob.y} r="11" fill={C.knob} stroke="#fff" strokeWidth="3"/>
 <Eye y={366}/><text x="200" y="402" textAnchor="middle" fontSize={compact?40:29} fontWeight="700" fill={C.green}>거실</text>
 </svg>;
}
const Badge:React.FC<{children:React.ReactNode}>=({children})=><div style={{background:C.mint,padding:'15px 26px',borderRadius:40,fontSize:30,fontWeight:700,color:C.green}}>{children}</div>;
function Shell({n,title,children}:{n:number;title:string[];children:React.ReactNode}){
 return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD}}>
 <div style={{position:'absolute',left:88,right:120,top:166,display:'flex',justifyContent:'space-between',alignItems:'center'}}><Label>대산 · 도어 발주 가이드</Label><Label>{String(n).padStart(2,'0')} / 06</Label></div>
 <div style={{position:'absolute',left:88,right:120,top:245,fontSize:64,fontWeight:800,lineHeight:1.22,letterSpacing:'-0.035em'}}>{title.map((t,i)=><div key={t} style={{color:i===1?C.green:C.ink,whiteSpace:'nowrap'}}>{t}</div>)}</div>
 {children}
 <div style={{position:'absolute',left:88,right:120,bottom:280,height:5,background:'#E3E6DC'}}><div style={{width:`${n/6*100}%`,height:'100%',background:C.green}}/></div>
 <Audio src={staticFile(`assets/audio/${timing[n-1].file}`)}/>
 </AbsoluteFill>
}
const twoCards={position:'absolute',left:88,right:120,top:595,display:'grid',gridTemplateColumns:'1fr 1fr',gap:24} as const;
function FrameCard({children,active=true}:{children:React.ReactNode;active?:boolean}){return <div style={{background:'#FFFFFF',border:`3px solid ${active?C.green:C.line}`,borderRadius:28,padding:20,textAlign:'center'}}>{children}</div>}
export const Scene:React.FC<{n:number}>=({n})=>{
 const f=useCurrentFrame();
 if(n===1)return <Shell n={n} title={['밀우손? 당좌손?','도어 방향, 헷갈린다면']}>
 <div style={{position:'absolute',top:545,left:260}}><FrontDoor width={480} height={710}/></div>
 <div style={{position:'absolute',top:668,left:100,background:C.mint,padding:'22px 30px',borderRadius:20,fontSize:48,fontWeight:800}}>밀우손?</div>
 <div style={{position:'absolute',top:1040,right:120,background:C.cream,padding:'22px 30px',borderRadius:20,fontSize:48,fontWeight:800}}>당좌손?</div>
 <div style={{position:'absolute',top:1400,left:88,right:120,display:'flex',justifyContent:'center'}}><Badge>거실에서 보면 구분할 수 있어요</Badge></div>
 </Shell>;
 if(n===2)return <Shell n={n} title={['기준은','거실에서 바라보기']}>
 <div style={{position:'absolute',top:515,left:300}}><FrontDoor width={400} height={630}/></div>
 <div style={{position:'absolute',top:1140,left:498,width:6,height:185,background:C.green}}/><div style={{position:'absolute',top:1128,left:480,width:42,height:42,borderLeft:`7px solid ${C.green}`,borderTop:`7px solid ${C.green}`,transform:'rotate(45deg)'}}/>
 <div style={{position:'absolute',top:1335,left:88,right:120,background:C.mint,borderRadius:28,height:194,display:'flex',alignItems:'center',justifyContent:'center',gap:25}}><svg width="78" height="65" viewBox="0 0 80 65"><path d="M3 32Q40 -10 77 32Q40 74 3 32Z" stroke={C.green} strokeWidth="5" fill="none"/><circle cx="40" cy="32" r="13" fill={C.green}/></svg><div style={{fontSize:52,fontWeight:800}}>거실 · 보는 위치</div></div>
 </Shell>;
 if(n===3){const p1=interpolate(f,[17,37],[0,1],clamp),p2=interpolate(f,[48,68],[0,1],clamp);return <Shell n={n} title={['밀어서 열면 → 밀','당겨서 열면 → 당']}>
 <div style={{position:'absolute',top:482,left:88}}><Badge>거실 기준 · 위에서 본 열림</Badge></div>
 <div style={twoCards}>{(['push','pull'] as const).map((s,i)=><FrameCard key={s}><div style={{fontSize:58,fontWeight:800,color:C.green,margin:'12px 0 30px'}}>{i?'당':'밀'}</div><Plan id={s} swing={s} progress={i?p2:p1}/><div style={{fontSize:32,fontWeight:700,margin:'26px 0 14px'}}>{i?'거실 쪽으로 열림':'거실 반대쪽으로 열림'}</div></FrameCard>)}</div>
 <div style={{position:'absolute',top:1440,left:88,right:120,textAlign:'center',fontSize:30,color:C.muted}}>점선: 닫힌 문　　실선: 열리는 문</div>
 </Shell>}
 if(n===4)return <Shell n={n} title={['왼쪽 손잡이 → 좌손','오른쪽 손잡이 → 우손']}>
 <div style={{position:'absolute',top:482,left:88}}><Badge>거실에서 본 정면</Badge></div>
 <div style={twoCards}>{(['left','right'] as const).map((h,i)=><FrameCard key={h}><div style={{fontSize:54,fontWeight:800,color:C.green,margin:'12px 0 20px'}}>{i?'우손':'좌손'}</div><FrontDoor hand={h} width={310} height={490}/><div style={{fontSize:34,fontWeight:700,margin:'30px 0 12px',color:C.knob}}>{i?'손잡이 오른쪽':'손잡이 왼쪽'}</div></FrameCard>)}</div>
 <div style={{position:'absolute',top:1480,left:88,right:120,textAlign:'center',fontSize:32,color:C.muted}}>손잡이 위치로 좌우를 확인하세요</div>
 </Shell>;
 if(n===5)return <Shell n={n} title={['밀 / 당 + 좌 / 우','4가지 방향으로 구분']}>
 <div style={{position:'absolute',top:470,left:88,display:'flex',gap:20,alignItems:'center'}}><Badge>모두 거실 기준</Badge><span style={{fontSize:27,color:C.knob}}>● 손잡이</span></div>
 <div style={{position:'absolute',left:88,right:120,top:562,display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>{combinations.map((c,i)=><div key={c.name} style={{height:475,border:`3px solid ${C.line}`,borderRadius:24,background:'#FFF',padding:'20px 16px',position:'relative'}}>
 <div style={{fontSize:48,fontWeight:800,color:C.green,textAlign:'center'}}>{c.name}</div>
 <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:133,marginTop:8,gap:22}}><FrontDoor hand={c.hand} width={80} height={122}/><div style={{fontSize:28,fontWeight:700,lineHeight:1.4}}>정면 손잡이<br/>{c.hand==='left'?'왼쪽':'오른쪽'}</div></div>
 <div style={{position:'absolute',width:235,left:87,top:202}}><Plan id={`combo-${i}`} hand={c.hand} swing={c.swing} progress={interpolate(f,[12+i*19,28+i*19],[0,1],clamp)} compact/></div>
 </div>)}</div>
 </Shell>;
 return <Shell n={n} title={['방향 ≠ 키홈 가공 여부']}>
 <div style={{position:'absolute',top:535,left:88,right:120,border:`3px solid ${C.line}`,borderRadius:30,background:'#FFF',padding:44}}>
 <Label>도어 발주 항목</Label>
 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:52,paddingBottom:44,borderBottom:`2px solid ${C.line}`,fontSize:52,fontWeight:700}}><span>방향</span><span style={{background:C.mint,padding:'18px 25px',borderRadius:16,color:C.green}}>밀우손</span></div>
 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:44,fontSize:52,fontWeight:700}}><span>키홈</span><span style={{background:C.cream,padding:'18px 25px',borderRadius:16}}>O / X</span></div>
 </div>
 <div style={{position:'absolute',top:1180,left:88,right:120,padding:'38px 30px',borderRadius:24,background:C.mint,textAlign:'center',fontSize:45,fontWeight:700,lineHeight:1.4}}>현장에서 직접 가공한다면<br/>키홈 없이 주문 가능</div>
 </Shell>;
};
