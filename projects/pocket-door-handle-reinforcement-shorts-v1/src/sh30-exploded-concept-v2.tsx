import React from 'react';
import {AbsoluteFill,Img,Still,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
export const layout={canvas:[540,960],installationY:480,internalCenterX:337,opening:{x:307,y:310,width:60,height:340},front:{x:65,width:132,offsetX:-150},meaning:'Educational broad layer separation; no physical construction dimensions'};
const source=staticFile('assets/images/pocket-door-clean-background-v1.png');
export function Interior(){return <svg width="540" height="960" style={{position:'absolute',inset:0}}>
<defs>
<linearGradient id="inside" x1="0" x2="1"><stop stopColor="#b1b0a8"/><stop offset=".5" stopColor="#d7d4cb"/><stop offset="1" stopColor="#babbb3"/></linearGradient>
<linearGradient id="well"><stop stopColor="#282f2a"/><stop offset=".45" stopColor="#414b40"/><stop offset="1" stopColor="#626c5d"/></linearGradient>
<linearGradient id="material"><stop stopColor="#c6b38c"/><stop offset=".5" stopColor="#dfcfaf"/><stop offset="1" stopColor="#b9a37d"/></linearGradient>
<linearGradient id="reviewfade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="white" stopOpacity="0"/><stop offset=".25" stopColor="white"/><stop offset=".75" stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient><mask id="reviewmask"><rect x="227" y="390" width="236" height="180" fill="url(#reviewfade)"/><rect x="300" y="300" width="74" height="360" fill="black"/></mask><pattern id="concept-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(25)"><path d="M0 0V9" stroke="#f5efe1" strokeWidth="1.2" opacity=".65"/></pattern>
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
{/* Concept material allocation connected to the inner surface, edges concealed by section rims. */}
<g id="support-review-regions" mask="url(#reviewmask)">
<rect x="227" y="390" width="236" height="180" fill="url(#material)"/>
<rect x="227" y="390" width="236" height="180" fill="url(#concept-hatch)" opacity=".3"/>
<path d="M283 390L301 400V560L283 570Z" fill="#a38e69"/>
<path d="M374 400L392 390V570L374 560Z" fill="#b3a07c"/>
<path d="M284 390V570M391 390V570" stroke="#f0e3c6" strokeWidth="1.2"/>
</g>
{/* Continuous edge returns overlap the inspection material: no isolated member outlines. */}
<g mask="url(#long-section)">
<path d="M227 220L251 240V770L227 790Z" fill="#a5a69c"/>
<path d="M463 220L438 240V770L463 790Z" fill="#e7e3d7"/>
<path d="M251 240L260 247V763L251 770Z" fill="#555f51" opacity=".23"/>
<path d="M438 240L429 247V763L438 770Z" fill="#656e60" opacity=".17"/>
<path d="M227 220L251 240H438L463 220Z" fill="#f2eee4"/>
<path d="M227 790L251 770H438L463 790Z" fill="#8d9185"/>
</g>
</svg>}
export function FrontSkin(){return <div style={{position:'absolute',left:65,top:220,width:142,height:570,maskImage:'linear-gradient(transparent,black 9%,black 91%,transparent)'}}>
<div style={{position:'absolute',left:116,top:4,width:25,height:570,background:'#686b5f',opacity:.28,filter:'blur(8px)'}}/>
<svg width="142" height="570" style={{position:'absolute'}}><path d="M119 0L136 12V570L119 558Z" fill="#b3b0a2"/><path d="M119 0L136 12" stroke="#eeeadf" strokeWidth="2"/></svg>
<div style={{position:'absolute',left:0,top:0,width:119,height:570,overflow:'hidden',clipPath:'polygon(0 0,100% 2%,100% 100%,0 98%)'}}><Img src={source} style={{position:'absolute',width:540,height:960,maxWidth:'none',left:-65,top:-220}}/></div>
<div style={{position:'absolute',top:258,left:34,width:55,height:3,background:'#d3b54c'}}/>
</div>}
function Frame(){return <AbsoluteFill style={{background:'#f5f2eb',fontFamily:PRETENDARD,color:'#29332F'}}>
<Img src={source} style={{width:540,height:960,objectFit:'cover',opacity:.32}}/>
<Interior/><FrontSkin/>
<svg width="540" height="960" style={{position:'absolute',inset:0}}>
<path d="M155 480H301" stroke="#827a60" strokeWidth="1.2" strokeDasharray="4 5"/>
<circle cx="301" cy="480" r="3" fill="#d3b54c"/>
<path d="M337 280V304M397 507L484 550V797H394" stroke="#626c66" strokeWidth="1.3" fill="none"/>
</svg>
<div style={{position:'absolute',top:68,left:30,width:480,fontSize:30,fontWeight:800,lineHeight:1.3}}>손잡이 위치,<br/>내부 보강도 확인!</div>
<div style={{position:'absolute',top:174,left:30,fontSize:17,color:'#626c66'}}>설명용 외피 분리</div>
<div style={{position:'absolute',top:260,left:75,fontSize:20,fontWeight:600}}>문짝 앞면</div>
<div style={{position:'absolute',top:250,left:292,fontSize:20,fontWeight:600}}>매립 공간</div>
<div style={{position:'absolute',top:805,left:275,fontSize:20,fontWeight:600}}>보강 확인 영역</div>
<div style={{position:'absolute',top:711,left:259,fontSize:16,color:'#626c66'}}>문짝 내부 · 개념 표현</div>
<div style={{position:'absolute',bottom:55,left:10,width:520,textAlign:'center',fontSize:17,color:'#626c66'}}>내부 보강 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Sh30ExplodedConceptV2" component={Frame} width={540} height={960}/>);
