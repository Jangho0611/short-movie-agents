import React from 'react';

export const palette = {paper:'#FAFAF7',ink:'#24262C',muted:'#666A74',line:'#DADCE1',lilac:'#DFD8F6',cream:'#F3E9CC',mint:'#D5E9DA',green:'#236044',error:'#B84A46'};
const C=palette;
export type DiagramKind='hinge'|'swing'|'floor'|'frame'|'hole'|'material';
export const diagramLabels=['경첩','여는 방향','바닥 마감','4방·3방','타공','문틀 재질'];
export const diagramKinds:DiagramKind[]=['hinge','swing','floor','frame','hole','material'];

// hingeRight names the hinge, NOT the handle (the older guide's hand means handle).
export function FrontDoor({hingeRight=0}:{hingeRight?:number}) {
  const hingeX=266+268*hingeRight, handleX=510-220*hingeRight;
  return <g>
    <path d="M244 600V76H556V600" fill="none" stroke="#A7ADA8" strokeWidth="28"/>
    <rect x="262" y="94" width="276" height="504" rx="3" fill={C.cream} stroke={C.ink} strokeWidth="6"/>
    <rect x="285" y="120" width="230" height="450" fill="none" stroke="#D9CEAF" strokeWidth="3"/>
    {[182,480].map(y=><g key={y}><rect x={hingeX-10} y={y} width="20" height="52" rx="5" fill={C.green}/><path d={`M${hingeX} ${y+8}v36`} stroke="white" strokeWidth="3"/></g>)}
    <circle cx={handleX} cy="350" r="17" fill="#A77D4F"/>
    <path d={`M${handleX} 350h${-34+68*hingeRight}`} stroke={C.ink} strokeWidth="9" strokeLinecap="round"/>
    <path d="M210 610H590" stroke={C.ink} strokeWidth="5"/>
  </g>;
}
// Same observer convention as the approved guide: viewer below the wall.
// Right hinge remains fixed while the leaf rotates through closed into pull.
export function SwingPlan({wrong=0,open=1}:{wrong?:number;open?:number}) {
  const angle=(-1+2*wrong)*1.13*open;
  const point=(a:number,r:number)=>({x:550-r*Math.cos(a),y:345+r*Math.sin(a)});
  const end=point(angle,290), handle=point(angle,245);
  const arc=Array.from({length:33},(_,i)=>point(angle*i/32,205));
  const d=arc.map((v,i)=>`${i?'L':'M'}${v.x},${v.y}`).join(' ');
  const tip=arc[32]; const theta=angle>0?Math.PI/2-angle: -Math.PI/2-angle;
  return <g>
    <rect x="80" y="55" width="640" height="285" rx="22" fill="#EFEFEB"/>
    <rect x="80" y="350" width="640" height="285" rx="22" fill={C.mint}/>
    <text x="400" y="103" textAnchor="middle" fontSize="30" fill={C.muted}>반대편</text>
    <path d="M80 345H260M550 345H720" stroke="#8E9790" strokeWidth="22"/>
    <path d="M260 345H550" stroke="#A7ADA8" strokeWidth="5" strokeDasharray="12 10"/>
    <path d={d} fill="none" stroke={C.green} strokeWidth="6"/>
    <path d="M-15 -9L0 0L-15 9" fill="none" stroke={C.green} strokeWidth="5" transform={`translate(${tip.x},${tip.y}) rotate(${theta*180/Math.PI})`}/>
    <path d={`M550 345L${end.x} ${end.y}`} stroke={C.ink} strokeWidth="13" strokeLinecap="round"/>
    <circle cx="550" cy="345" r="12" fill={C.green}/>
    <circle cx={handle.x} cy={handle.y} r="14" fill="#A77D4F" stroke="white" strokeWidth="4"/>
    <path d="M365 594Q400 562 435 594Q400 626 365 594Z" stroke={C.green} fill="none" strokeWidth="4"/><circle cx="400" cy="594" r="9" fill={C.green}/>
    <text x="400" y="678" textAnchor="middle" fontSize="30" fill={C.green}>보는 위치 고정</text>
  </g>;
}
function FloorSection({wrong}:{wrong:number}) {
  const layer=78*wrong;
  return <g>
    <path d="M155 580V110H480V580" stroke="#A7ADA8" strokeWidth="30" fill="none"/>
    <rect x="180" y="140" width="270" height="422" fill={C.cream} stroke={C.ink} strokeWidth="5"/>
    <path d="M120 580H675" stroke={C.ink} strokeWidth="5"/>
    <rect x="120" y="585" width="555" height="55" fill="#C4C6C4"/>
    <rect x="120" y={580-layer} width="555" height={layer} fill={C.lilac}/>
    <path d={`M120 ${580-layer}H675`} stroke={C.green} strokeWidth="5"/>
    <path d="M95 580H695" stroke={C.muted} strokeWidth="3" strokeDasharray="10 9"/>
    <text x="590" y="678" textAnchor="middle" fontSize="27" fill={C.muted}>기존 바닥</text>
    <g opacity={wrong}><path d={`M535 580H640M535 ${580-layer}H640M617 580V${580-layer}`} stroke={C.error} strokeWidth="4"/>
      <path d={`M608 ${587-layer}L617 ${580-layer}L626 ${587-layer}M608 573L617 580L626 573`} fill="none" stroke={C.error} strokeWidth="3"/>
      <text x="555" y={548-layer} textAnchor="middle" fontSize="27" fill={C.ink}>마감재 추가</text>
      <rect x="140" y={580-layer} width="30" height={layer} fill={C.error} opacity=".5"/>
    </g>
    <text x="318" y="80" textAnchor="middle" fontSize="28" fill={C.muted}>높이 관계 단면 모식도</text>
  </g>;
}
function FrameOutline({wrong}:{wrong:number}) {
  return <g><rect x="244" y="94" width="312" height="506" fill={C.paper}/>
    <path d="M244 600V94H556V600" fill="none" stroke="#8A9790" strokeWidth="32"/>
    <path d="M244 600H556" fill="none" stroke={C.green} strokeWidth="32" opacity={1-wrong} transform={`translate(0,${wrong*30})`}/>
    <path d="M224 620H576" stroke={C.line} strokeWidth="3" strokeDasharray="10 10"/>
    <path d="M226 76H574V618" stroke={C.ink} strokeWidth="3" fill="none"/>
  </g>;
}
function CylinderHole({wrong}:{wrong:number}) {
  const radius=96*(1+wrong*(55/48-1));
  return <g>
    <g transform="translate(-130,78) scale(.72)"><FrontDoor/>
      <circle cx="510" cy="350" r="34" fill="none" stroke={C.green} strokeWidth="5"/>
    </g>
    <path d="M267 306L408 206M267 355L408 472" fill="none" stroke={C.muted} strokeWidth="3" strokeDasharray="9 8"/>
    <rect x="386" y="146" width="332" height="418" rx="24" fill={C.cream} stroke={C.line} strokeWidth="3"/>
    <circle cx="552" cy="350" r={radius} fill={C.paper} stroke={C.ink} strokeWidth="6"/>
    <circle cx="552" cy="350" r="96" fill="none" stroke={C.green} strokeWidth="3" strokeDasharray="8 8" opacity={wrong}/>
    <path d={`M${552-radius} 350H${552+radius}M${552-radius} 337V363M${552+radius} 337V363`} stroke={C.green} strokeWidth="4"/>
    <path d="M552 204V220M552 480V496" stroke={C.muted} strokeWidth="3"/>
    <text x="552" y="620" textAnchor="middle" fontSize="30" fill={C.muted}>타공부 확대</text>
  </g>;
}
function MaterialSection({wrong}:{wrong:number}) {
  const shape='M205 150H580V260H355V575H205Z';
  return <g>
    <path d={shape} fill={C.mint} stroke={C.ink} strokeWidth="6"/>
    <g opacity={1-wrong}>{Array.from({length:8},(_,i)=><g key={i}>{[0,1,2].map(j=><circle key={j} cx={225+j*48} cy={182+i*48} r="6" fill="#84A990"/>)}</g>)}{[380,430,480,530].map(x=><circle key={x} cx={x} cy="208" r="6" fill="#84A990"/>)}</g>
    <g opacity={wrong}><path d={shape} fill="#D8B687" stroke={C.ink} strokeWidth="6"/>
      {[0,1,2,3,4].map(i=><path key={i} d={`M${220+i*27} 548Q${205+i*27} 422 ${225+i*27} 300V${170+i*15}H560`} fill="none" stroke="#9F7548" strokeWidth="3"/>)}</g>
    <path d="M355 575L385 545V290H600V180L580 150M580 260L600 240M205 575L235 605H355L385 575" fill="none" stroke={C.muted} strokeWidth="3"/>
    <text x="400" y="657" textAnchor="middle" fontSize="27" fill={C.muted}>재질 구분 모식도 · 실제 단면 아님</text>
  </g>;
}
export function Diagram({kind,wrong=0,open=1}:{kind:DiagramKind;wrong?:number;open?:number}) {
  return <svg viewBox="0 0 800 700" width="100%" height="100%" aria-label={kind}>
    {kind==='hinge'?<FrontDoor hingeRight={wrong}/>:kind==='swing'?<SwingPlan wrong={wrong} open={open}/>:kind==='floor'?<FloorSection wrong={wrong}/>:kind==='frame'?<FrameOutline wrong={wrong}/>:kind==='hole'?<CylinderHole wrong={wrong}/>:<MaterialSection wrong={wrong}/>}
  </svg>;
}
export function DirectionDiagram({hingeWrong,swingWrong,planMix,opening}:{hingeWrong:number;swingWrong:number;planMix:number;opening:number}) {
  return <svg viewBox="0 0 800 700" width="100%" height="100%">
    <g transform={`translate(${-125*planMix},${70*planMix}) scale(${1-.35*planMix})`}><FrontDoor hingeRight={hingeWrong}/></g>
    <g opacity={planMix} transform="translate(295,125) scale(.64)"><SwingPlan wrong={swingWrong} open={opening}/></g>
  </svg>;
}
