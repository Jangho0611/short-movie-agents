import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './fonts';
const ink='#29332F',muted='#626C66';
function Frame(){const f=useCurrentFrame();
const e=(a:number,b:number)=>{const t=Math.max(0,Math.min(1,(f-a)/(b-a)));return t*t*(3-2*t)};
const close=e(24,68),open=e(88,118),focus=e(105,125);
// Editorial planes only: coordinated translation, projected edge depth, scale and shadow.
const frontX=650+32*close-18*open,backX=930-74*close+28*open;
const edge=36-19*close+9*open,frontScale=1.015-.015*close,backScale=.96+.04*close;
const frontAlpha=1-.48*open,blur=12-7*close+4*open;
const plane=(x:number,scale:number,front:boolean)=> <g transform={`translate(${x},1100) scale(${scale}) translate(0,-1100)`} opacity={front?frontAlpha:1}>
<g style={{filter:`drop-shadow(${6+8*(1-close)}px ${7+5*(1-close)}px ${blur}px #55594F30)`}}>
<path d={`M0 700L${edge} ${700-edge*.75}H${edge+20}L20 700Z`} fill="url(#edge)"/>
<path d={`M20 700L${edge+20} ${700-edge*.75}V${1520-edge*.75}L20 1520Z`} fill="url(#side)"/>
<rect x="0" y="700" width="20" height="820" fill="url(#skin)"/>
<path d="M1 702V1518" stroke="#FAF7EE" strokeWidth="2"/>
<rect x="0" y="700" width="20" height="820" filter="url(#grain)" fill="#888"/>
</g></g>;
return <AbsoluteFill style={{background:'#F7F4EE',fontFamily:PRETENDARD,color:ink}}>
<div style={{position:'absolute',left:80,top:105,fontSize:66,fontWeight:800,lineHeight:1.27,letterSpacing:-2}}>손잡이 위치,<br/>보강 필요 여부 확인</div>
<div style={{position:'absolute',left:84,top:318,height:6,width:76+650*focus,background:'#F6D542'}}/>
<div style={{position:'absolute',left:80,top:375,fontSize:29,color:muted}}>설명용 레이어 · 실제 조립 공정 아님</div>
<div style={{position:'absolute',left:70,top:570,width:470,height:1110,overflow:'hidden',borderRadius:4}}>
<Img src={staticFile('assets/images/domus-CIS_3455-v3.jpg')} style={{position:'absolute',width:2940,height:1705.2,maxWidth:'none',left:-1247.25,top:530-366*2.45}}/>
</div>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
<defs>
<linearGradient id="skin"><stop stopColor="#EBE9E1"/><stop offset=".45" stopColor="#DAD8CF"/><stop offset="1" stopColor="#A6A79D"/></linearGradient>
<linearGradient id="edge" x2="1" y2="1"><stop stopColor="#F5F2EA"/><stop offset="1" stopColor="#BABCB1"/></linearGradient>
<linearGradient id="side"><stop stopColor="#ABB0A5"/><stop offset="1" stopColor="#D8DBCF"/></linearGradient>
<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".6" numOctaves="2" seed="12"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".075"/></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"/></filter>
</defs>
<text x="70" y="525" fill={muted} fontSize="32" fontWeight="600">실제 제품 사진</text>
<text x="650" y="525" fill={muted} fontSize="32" fontWeight="600">교육용 단면</text>
{plane(backX,backScale,false)}{plane(frontX,frontScale,true)}
<text x={frontX+10} y="638" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">앞면</text>
<text x={backX+10} y="638" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">뒷면</text>
<text x="800" y="825" textAnchor="middle" fill={muted} fontSize="30" fontWeight="600">내부 구성은</text>
<text x="800" y="870" textAnchor="middle" fill={muted} fontSize="30" fontWeight="600">제품별로 다름</text>
<text x="800" y="1580" textAnchor="middle" fill={muted} fontSize="27">심재·보강 형상 생략</text>
{/* Fixed editorial height datum, not a physical fixing point. */}
<path d="M660 1030V1170" stroke="#F6D542" strokeWidth="20"/>
<path d="M457 1100H800" stroke={ink} strokeWidth="3"/>
<circle cx="457" cy="1100" r="7" fill="#F6D542"/>
<circle cx="660" cy="1100" r="7" fill={ink}/>
<text x="552" y="1060" textAnchor="middle" fill={muted} fontSize="28" fontWeight="600">설치 위치</text>
<g opacity={focus}>
<text x="800" y="1225" textAnchor="middle" fill={ink} fontSize="36" fontWeight="600">이 위치의</text>
<text x="800" y="1277" textAnchor="middle" fill={ink} fontSize="34" fontWeight="800">내부 조건 확인</text>
</g>
<text x="70" y="1730" fill={muted} fontSize="30" fontWeight="600">DOMUS SH30NI</text>
</svg>
<div style={{position:'absolute',left:80,bottom:92,fontSize:32,color:muted}}>구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Composition id="Scene03AssemblyMotionTestV1" component={Frame} durationInFrames={180} fps={30} width={1080} height={1920}/>);
