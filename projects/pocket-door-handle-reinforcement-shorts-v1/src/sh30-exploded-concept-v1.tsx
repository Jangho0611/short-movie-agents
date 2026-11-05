import React from 'react';
import {AbsoluteFill,Img,Still,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
export const layout={canvas:[540,960],installationY:480,internalCenterX:337,opening:{x:307,y:310,width:60,height:340},front:{x:65,width:132,offsetX:-150},meaning:'Educational broad layer separation; no physical construction dimensions'};
const source=staticFile('assets/images/pocket-door-clean-background-v1.png');
export function Interior(){return <svg width="540" height="960" style={{position:'absolute',inset:0}}>
<defs>
<linearGradient id="inside" x1="0" x2="1"><stop stopColor="#b1b0a8"/><stop offset=".5" stopColor="#d7d4cb"/><stop offset="1" stopColor="#babbb3"/></linearGradient>
<linearGradient id="well"><stop stopColor="#444b46"/><stop offset="1" stopColor="#757c73"/></linearGradient>
<linearGradient id="material"><stop stopColor="#c6b38c"/><stop offset=".5" stopColor="#dfcfaf"/><stop offset="1" stopColor="#b9a37d"/></linearGradient>
<pattern id="concept-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(25)"><path d="M0 0V9" stroke="#f5efe1" strokeWidth="1.2" opacity=".65"/></pattern>
<linearGradient id="endfade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="white" stopOpacity="0"/><stop offset=".1" stopColor="white"/><stop offset=".9" stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient>
<mask id="long-section"><rect x="218" y="220" width="270" height="570" fill="url(#endfade)"/></mask>
</defs>
<g id="internal-backing" mask="url(#long-section)">
<path d="M237 220H476V790H237Z" fill="#817f75" opacity=".18"/>
<path d="M227 220H463V790H227Z" fill="url(#inside)"/>
<path d="M451 220H463V790H451Z" fill="#eeebe3"/>
<path d="M227 220H241V790H227Z" fill="#888d83"/>
</g>
<g id="fixed-cavity">
<rect x="306" y="309" width="62" height="342" rx="2" fill="#f4f0e7"/>
<rect x="308" y="311" width="58" height="338" fill="url(#well)"/>
<path d="M308 311L318 322V638L308 649Z" fill="#94998e"/>
<path d="M366 311L357 322V638L366 649Z" fill="#525a50"/>
<path d="M308 311H366L357 322H318Z" fill="#4a5147"/>
<path d="M308 649H366L357 638H318Z" fill="#b6b8ad"/>
</g>
{/* Irregular, hatched inspection volumes: not timber member geometry. */}
<g id="support-review-regions">
<path d="M255 427L277 409H299V552L277 569L255 552Z" fill="#716956" opacity=".20" transform="translate(3 5)"/>
<path d="M255 427L277 409H299V552L277 569L255 552Z" fill="url(#material)"/>
<path d="M255 427L277 409H299V552L277 569L255 552Z" fill="url(#concept-hatch)"/>
<path d="M289 418L299 409V552L289 560Z" fill="#a48f6c"/>
<path d="M376 409H397L419 427V552L397 569H376Z" fill="#716956" opacity=".20" transform="translate(3 5)"/>
<path d="M376 409H397L419 427V552L397 569H376Z" fill="url(#material)"/>
<path d="M376 409H397L419 427V552L397 569H376Z" fill="url(#concept-hatch)"/>
<path d="M376 409L386 418V560L376 569Z" fill="#9d8865"/>
</g>
</svg>}
export function FrontSkin(){return <div style={{position:'absolute',left:65,top:220,width:132,height:570,maskImage:'linear-gradient(transparent,black 9%,black 91%,transparent)'}}>
<div style={{position:'absolute',inset:'0 0 0 12px',background:'#6f7168',opacity:.19,filter:'blur(9px)',transform:'translateX(8px)'}}/>
<div style={{position:'absolute',inset:'0 6px 0 0',overflow:'hidden'}}><Img src={source} style={{position:'absolute',width:540,height:960,maxWidth:'none',left:-65,top:-220}}/></div>
<div style={{position:'absolute',right:0,top:0,bottom:0,width:6,background:'linear-gradient(90deg,#d6d0c3,#aaa99e)'}}/>
{/* Position reference only, deliberately not a duplicate aperture. */}
<div style={{position:'absolute',top:258,left:34,width:55,height:3,background:'#d3b54c'}}/>
</div>}
function Frame(){return <AbsoluteFill style={{background:'#f5f2eb',fontFamily:PRETENDARD,color:'#29332F'}}>
<Img src={source} style={{width:540,height:960,objectFit:'cover',opacity:.32}}/>
<Interior/><FrontSkin/>
<svg width="540" height="960" style={{position:'absolute',inset:0}}>
<path d="M155 480H301" stroke="#827a60" strokeWidth="1.2" strokeDasharray="4 5"/>
<circle cx="301" cy="480" r="3" fill="#d3b54c"/>
<path d="M337 280V304M421 602H398L392 556" stroke="#626c66" strokeWidth="1.3" fill="none"/>
</svg>
<div style={{position:'absolute',top:68,left:30,width:480,fontSize:30,fontWeight:800,lineHeight:1.3}}>손잡이 위치,<br/>내부 보강도 확인!</div>
<div style={{position:'absolute',top:174,left:30,fontSize:17,color:'#626c66'}}>설명용 외피 분리</div>
<div style={{position:'absolute',top:260,left:75,fontSize:20,fontWeight:600}}>문짝 앞면</div>
<div style={{position:'absolute',top:250,left:292,fontSize:20,fontWeight:600}}>매립 공간</div>
<div style={{position:'absolute',top:594,left:267,fontSize:20,fontWeight:600}}>보강 확인 영역</div>
<div style={{position:'absolute',top:698,left:259,fontSize:16,color:'#626c66'}}>문짝 내부 · 개념 표현</div>
<div style={{position:'absolute',bottom:55,left:10,width:520,textAlign:'center',fontSize:17,color:'#626c66'}}>내부 보강 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Sh30ExplodedConceptV1" component={Frame} width={540} height={960}/>);
