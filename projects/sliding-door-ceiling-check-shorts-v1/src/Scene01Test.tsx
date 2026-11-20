import React from 'react';
import {AbsoluteFill,Audio,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {SlidingDoorDiagram} from './SlidingDoorDiagram';
// Timing is a review proposal, not word-aligned transcription.
export const Scene01Test=()=>{
 const f=useCurrentFrame();
 const finish=interpolate(f,[50,78],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.ease)});
 const emphasis=interpolate(f,[45,52,111,125],[0,1,1,.7],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const question=interpolate(f,[88,96],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{background:'#f7f4ed',fontFamily:PRETENDARD,color:'#242520'}}>
  <SlidingDoorDiagram finishOpacity={finish} emphasis={emphasis}/>
  <div style={{position:'absolute',left:110,top:300,fontSize:66,fontWeight:800,lineHeight:1.3,letterSpacing:-2}}>
   <div>슬라이딩 도어</div><div>천장부터 마감하면?</div>
  </div>
  <div style={{position:'absolute',left:145,top:587,fontSize:30,fontWeight:600}}>천장</div>
  <div style={{position:'absolute',left:150,top:905,fontSize:30,fontWeight:600,opacity:1-finish}}>레일</div>
  <div style={{position:'absolute',left:170,top:742,fontSize:34,fontWeight:600,opacity:finish}}>천장 마감면</div>
  <div style={{position:'absolute',left:823,top:737,width:82,height:82,borderRadius:41,background:'#f2ce53',display:'flex',alignItems:'center',justifyContent:'center',fontSize:57,fontWeight:800,opacity:question}}>?</div>
  <div style={{position:'absolute',left:110,top:520,fontSize:28,fontWeight:500,color:'#625f56'}}>구조 예시 · 제품별 설치 방식은 다를 수 있습니다</div>
  <Audio src={staticFile('assets/audio/scene01-tts-v4.mp3')}/>
 </AbsoluteFill>;
};
