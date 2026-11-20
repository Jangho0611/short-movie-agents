import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const src=staticFile('assets/images/scene01-before-ai-v3-candidate.png');
// One open spatial outline follows the recess, not individual components or a finish line.
export const UpperSpaceFocusV5:React.FC<{opacity:number}>=({opacity})=><svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
 <g opacity={opacity} fill="none" stroke="#d5ac40" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
  <path d="M28 590L28 546L913 722L913 756"/>
  <path d="M28 840L28 868L161 873 M326 879L749 895 M855 899L913 901L913 880"/>
 </g>
</svg>;
export const Scene01PreviewV5=()=>{
 const f=useCurrentFrame();
 const h=interpolate(f,[45,68],[0,.9],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
 return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#272925'}}>
 <Img src={src} style={{width:1080,height:1920}}/>
 <UpperSpaceFocusV5 opacity={h}/>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8}}>슬라이딩 도어<br/>천장부터 마감하면?</div>
 <div style={{position:'absolute',left:110,top:470,fontSize:28,color:'#605b52'}}>구조 예시</div>
 <Audio src={staticFile('assets/audio/scene01-tts-v4.mp3')}/>
 </AbsoluteFill>;
};
