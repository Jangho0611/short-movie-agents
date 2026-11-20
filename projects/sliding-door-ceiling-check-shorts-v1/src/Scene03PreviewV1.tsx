import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
export const InspectionFocus:React.FC<{opacity:number}>=({opacity})=><svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
 <path d="M40 620Q40 570 88 580L869 733Q900 739 900 770L900 880Q900 917 867 915L82 889Q40 888 40 855Z" fill="none" stroke="#D5AC40" strokeWidth="6" opacity={opacity}/>
</svg>;
export const InspectionIcon:React.FC<{check:boolean}>=({check})=><svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#D5AC40" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">{check?<><rect x="10" y="8" width="43" height="48" rx="5"/><path d="M20 31L29 40L44 24"/></>:<><circle cx="26" cy="26" r="17"/><path d="M39 39L55 55"/></>}</svg>;
export const Scene03PreviewV1=()=>{
 const f=useCurrentFrame();
 const focus=interpolate(f,[6,20],[0,.9],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const b=interpolate(f,[68,78],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
 return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#272925'}}>
 <Img src={staticFile('assets/images/scene01-before-ai-v3-candidate.png')} style={{width:1080,height:1920}}/>
 <InspectionFocus opacity={focus}/>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8,opacity:1-b}}>나중에 점검할 수<br/>있을까?</div>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8,opacity:b}}>교체할 공간도<br/>확인!</div>
 <div style={{position:'absolute',left:850,top:294,opacity:1-b}}><InspectionIcon check={false}/></div>
 <div style={{position:'absolute',left:850,top:294,opacity:b}}><InspectionIcon check/></div>
 <div style={{position:'absolute',left:110,top:470,fontSize:28,color:'#605b52'}}>구조 예시</div>
 <Audio src={staticFile('assets/audio/scene03-tts-v1.mp3')}/>
 </AbsoluteFill>;
};
