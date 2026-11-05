import React from 'react';
import {AbsoluteFill,Img,Composition,Sequence,registerRoot,staticFile,useCurrentFrame} from 'remotion';
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

const asset=(n:string)=>staticFile('assets/images/'+n);
function Caption({fixed}:{fixed:boolean}){const f=useCurrentFrame();const s=fixed?'고정될 구조':'들어갈 공간';return <div style={{position:'absolute',top:0,width:1080,height:298,background:'#F4F1E9'}}><svg width={1080} height={298}><g fontFamily="Apple SD Gothic Neo,Noto Sans KR,sans-serif" fontWeight={900} textAnchor="middle"><text x={540} y={124} fontSize={100} fill="#303431">{fixed?'제대로':'손잡이가'}</text><text x={540} y={244} fontSize={107} fill="#FFE600" stroke="#343735" strokeWidth={3.66} paintOrder="stroke fill">{s}{fixed?'도 중요':''}</text></g></svg></div>}
function Scene({which,background}:{which:number,background:string}){const f=useCurrentFrame();const fixed=which===2&&f>=84;return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:'Apple SD Gothic Neo,Noto Sans KR,sans-serif'}}>
<AbsoluteFill><Img src={which===1?asset('pocket-door-sh30-exterior-v1.png'):background} style={{width:1080,height:1920}}/>{which===2&&<div style={{position:'absolute',transform:'scale(2)',transformOrigin:'top left'}}><Recess review={false}/></div>}</AbsoluteFill>
{which===1?<div style={{position:'absolute',top:0,width:1080,height:298,background:'#F4F1E9'}}><svg width={1080} height={298}><g fontFamily="Apple SD Gothic Neo,Noto Sans KR,sans-serif" fontWeight={900} textAnchor="middle"><text x={540} y={124} fontSize={100} fill="#303431">구멍만 맞추면</text><text x={540} y={244} fontSize={107} fill="#303431">끝일까요?</text>{f>=80&&<text x={540} y={124} fontSize={100} fill="#303431"><tspan fill="#FFE600" stroke="#343735" strokeWidth={3.66} paintOrder="stroke fill">구멍만</tspan><tspan> 맞추면</tspan></text>}</g></svg></div>:<Caption fixed={fixed}/>}
{fixed&&<><svg width={1080} height={1920} style={{position:'absolute'}}><path d="M411 880h-22v160h22 M667 880h22v160h-22" fill="none" stroke="#343735" strokeWidth={5}/><path d="M692 960h85" stroke="#343735" strokeWidth={4}/></svg><div style={{position:'absolute',left:770,top:1000,fontSize:34,color:'#303431',lineHeight:1.4}}>고정 조건<br/>확인 위치</div></>}
{which===1&&f>=133&&<svg width={1080} height={1920} style={{position:'absolute'}}><path d="M360 960h30 M688 960h30" stroke="#343735" strokeWidth={4}/></svg>}
{which===2&&<div style={{position:'absolute',bottom:95,width:'100%',textAlign:'center',fontSize:32,color:'#303431'}}>설치 조건 설명용 개념도 · 제품별 상이</div>}
</AbsoluteFill>}
function Preview(p:{background:string}){return <AbsoluteFill><Sequence durationInFrames={147}><Scene {...p} which={1}/></Sequence><Sequence from={147} durationInFrames={165}><Scene {...p} which={2}/></Sequence></AbsoluteFill>}
registerRoot(()=> <><Composition id="Scene01" component={Scene} width={1080} height={1920} fps={30} durationInFrames={147} defaultProps={{which:1,background:''}}/><Composition id="Scene02" component={Scene} width={1080} height={1920} fps={30} durationInFrames={165} defaultProps={{which:2,background:''}}/><Composition id="Preview12" component={Preview} width={1080} height={1920} fps={30} durationInFrames={312} defaultProps={{background:''}}/></>);
