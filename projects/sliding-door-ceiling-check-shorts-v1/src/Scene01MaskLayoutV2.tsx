import React from 'react';
import {AbsoluteFill,Img,staticFile} from 'remotion';
const source=staticFile('assets/images/scene01-before-ai-v3-candidate.png');
// Coordinates refer to the source image, never to construction measurements.
export const finishV2={left:940,right:1126,depth:20,slot:9};
export const Scene01MaskLayoutV2:React.FC<{showFinish?:boolean}>=({showFinish=true})=><AbsoluteFill>
 <Img src={source} style={{width:1080,height:1920}}/>
 {showFinish&&<svg width="1080" height="1920" viewBox="0 0 941 1672" style={{position:'absolute',inset:0}}>
 <defs>
  <linearGradient id="face" x1="0" y1="0" x2="1" y2=".3"><stop stopColor="#dfd3c2"/><stop offset=".5" stopColor="#e5dbcf"/><stop offset="1" stopColor="#ded2c2"/></linearGradient>
  <linearGradient id="under" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#c4b5a0"/><stop offset="1" stopColor="#b1a18b"/></linearGradient>
  <filter id="plaster" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" seed="12" result="grain"/><feColorMatrix in="grain" type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".075"/></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light"/></filter>
  <linearGradient id="join" x1="0" y1="0" x2="0" y2="1"><stop stopColor="white" stopOpacity="0"/><stop offset="1" stopColor="white"/></linearGradient>
  <mask id="join-mask"><path d="M0 480L941 666L941 1126L0 940Z" fill="white"/><path d="M0 480L941 666L941 716L0 530Z" fill="black"/><path d="M0 480L941 666L941 716L0 530Z" fill="url(#join)"/></mask>
 </defs>
 <g id="front" mask="url(#join-mask)"><path d="M0 480L941 666L941 1126L0 940Z" fill="url(#face)" filter="url(#plaster)"/></g>
 <g id="underside"><path d="M0 940L941 1126L941 1146L0 960Z" fill="url(#under)" filter="url(#plaster)"/><path d="M0 940L941 1126" stroke="#f0e8dc" strokeOpacity=".65" strokeWidth="1.2"/></g>
 <g id="slot"><path d="M0 960L941 1146L941 1155L0 969Z" fill="#51473b"/><path d="M0 969L941 1155" stroke="#baad99" strokeWidth="1.5"/></g>
 <g id="contact-shadow"><path d="M43 977L941 1155" stroke="#61513e" strokeOpacity=".17" strokeWidth="8"/></g>
 </svg>}
</AbsoluteFill>;
