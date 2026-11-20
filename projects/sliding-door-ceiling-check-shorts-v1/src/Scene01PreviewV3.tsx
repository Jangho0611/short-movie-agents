import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const src=staticFile('assets/images/scene01-before-ai-v3-candidate.png');
export const CeilingConcealV3:React.FC<{progress:number;highlight:number}>=({progress,highlight})=>{
 const y=480+460*progress;
 return <svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
 <defs>
 <clipPath id="hardware-region"><path d="M0 505L941 695L941 914L0 882Z"/></clipPath>
 <clipPath id="moving-finish"><path d={`M-10 460L951 650L951 ${y+190}L-10 ${y}Z`}/></clipPath>
 <filter id="edge-soft"><feGaussianBlur stdDeviation="3"/></filter>
 </defs>
 <g clipPath="url(#hardware-region)" opacity={Math.min(1,progress*8)}>
  <g clipPath="url(#moving-finish)"><image href={staticFile('assets/images/scene01-ceiling-texture-v3.png')} x="0" y="480" width="941" height="450"/></g>
  <path d={`M-10 ${y}L951 ${y+190}`} stroke="#756552" strokeOpacity=".09" strokeWidth="4" filter="url(#edge-soft)"/>
 </g>
 <path d="M160 862L805 884" fill="none" stroke="#d5ac40" strokeWidth="4" strokeLinecap="round" opacity={highlight}/>
 </svg>;
};
export const Scene01PreviewV3=()=>{
 const f=useCurrentFrame();
 const p=interpolate(f,[45,84],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
 const h=interpolate(f,[86,94,103,111],[0,.9,.9,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#272925'}}>
 <Img src={src} style={{width:1080,height:1920}}/>
 <CeilingConcealV3 progress={p} highlight={h}/>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8}}>슬라이딩 도어<br/>천장부터 마감하면?</div>
 <div style={{position:'absolute',left:110,top:470,fontSize:28,color:'#605b52'}}>구조 예시</div>
 <Audio src={staticFile('assets/audio/scene01-tts-v4.mp3')}/>
 </AbsoluteFill>;
};
