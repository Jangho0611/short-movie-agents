import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot} from 'remotion';
function Recess({review}:{review:boolean}){return <svg width="540" height="960" style={{position:'absolute',inset:0}}>
<defs>
 <clipPath id="opening"><rect x="224.5" y="288" width="90" height="384" rx="3"/></clipPath>
 <linearGradient id="well" x1="0" y1="0" x2="1" y2=".2"><stop stopColor="#484845"/><stop offset="1" stopColor="#797974"/></linearGradient>
 <linearGradient id="left-wall"><stop stopColor="#c4c0b8"/><stop offset="1" stopColor="#787970"/></linearGradient>
 <linearGradient id="right-wall"><stop stopColor="#4e514b"/><stop offset="1" stopColor="#96978f"/></linearGradient>
 <linearGradient id="top-shadow" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#242723" stopOpacity=".55"/><stop offset="1" stopColor="#242723" stopOpacity="0"/></linearGradient>
</defs>
<g clipPath="url(#opening)">
 <rect x="224.5" y="288" width="90" height="384" fill="url(#well)"/>
 <path d="M224.5 288L242.5 306V654L224.5 672Z" fill="url(#left-wall)"/>
 <path d="M314.5 288L296.5 306V654L314.5 672Z" fill="url(#right-wall)"/>
 <path d="M224.5 288H314.5L296.5 306H242.5Z" fill="#62655e"/>
 <path d="M224.5 672H314.5L296.5 654H242.5Z" fill="#b9b6ae"/>
 {/* B2 marks only existing inward side planes. No physical reinforcement objects. */}
 {review&&<g>
 <path d="M222 428L242.5 448V518L222 538Z" fill="#b3a87c" fillOpacity=".32"/>
 <path d="M317 428L296.5 448V518L317 538Z" fill="#b3a87c" fillOpacity=".35"/>
 <path d="M221 429L241 449V517L221 537M318 429L298 449V517L318 537" stroke="#e0cc7d" strokeWidth="1.7" fill="none"/>
 <path d="M225 460L241 475M225 483L241 498M314 460L298 475M314 483L298 498" stroke="#ddd7bd" strokeWidth="1" opacity=".65"/>
 </g>}
 <rect x="224.5" y="288" width="90" height="34" fill="url(#top-shadow)"/>
 {/* Opaque lip overlays the review marks: illustration is behind the surface. */}
 <path d="M225.5 289V671M225.5 289H313.5" fill="none" stroke="#5e6059" strokeWidth="2"/>
</g>
<rect x="223.5" y="287" width="92" height="386" rx="4" fill="none" stroke="#f3f0e9" strokeWidth="1.4"/>
{review&&<g fill="none" stroke="#65716a" strokeWidth="1.3"><path d="M351 390V411L306 467"/><circle cx="306" cy="467" r="3" fill="#e0cc7d" stroke="none"/></g>}
</svg>}



function Concept({background}:{background:string}){return <AbsoluteFill style={{fontFamily:'Apple SD Gothic Neo,Noto Sans KR,sans-serif',background:'#F4F1E9',color:'#303431'}}>
<Img src={background} style={{width:1080,height:1920}}/>
{/* Flat translucent annotation only: not a physical reinforcement part. */}
<svg width={1080} height={1920} style={{position:'absolute'}}><rect x={260} y={640} width={540} height={380} rx={18} fill="#7E8C88" fillOpacity={0.28}/></svg>
<div style={{position:'absolute',transform:'scale(2)',transformOrigin:'top left'}}><Recess review={false}/></div>
<div style={{position:'absolute',top:250,width:1080,height:250,background:'#F4F1E9'}}><svg width={1080} height={250}><g textAnchor="middle" fontWeight={900}><text x={540} y={92} fontSize={76} fill="#303431">보강이 있어도</text><text x={540} y={196} fontSize={64} fill="#303431"><tspan fill="#FFE600" stroke="#343735" strokeWidth={3.07} paintOrder="stroke fill">설치 위치</tspan><tspan>가 다를 수 있습니다</tspan></text></g></svg></div>
<svg width={1080} height={1920} style={{position:'absolute'}}>
<rect x={435} y={562} width={208} height={796} rx={10} fill="none" stroke="#343735" strokeWidth={4}/>
<path d="M300 612V640" fill="none" stroke="#343735" strokeWidth={3}/>
<path d="M643 1210H695" fill="none" stroke="#343735" strokeWidth={3}/>
</svg>
<div style={{position:'absolute',left:110,top:520,fontSize:36,fontWeight:800,lineHeight:1.35}}>내부 보강<br/>예시 영역</div>
<div style={{position:'absolute',left:705,top:1145,fontSize:40,fontWeight:800,lineHeight:1.4}}>손잡이<br/>설치 범위</div>
<div style={{position:'absolute',top:1450,width:1080,textAlign:'center',fontSize:40,lineHeight:1.45,fontWeight:600}}>내부 보강 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Scene03Concept" component={Concept} width={1080} height={1920} defaultProps={{background:''}}/>);
