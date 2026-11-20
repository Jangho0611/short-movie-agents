import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
export const HeadQuestions:React.FC<{mix:number;intro:number}>=({mix,intro})=><svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
 <g opacity={intro*(1-mix)} fill="none" stroke="#D5AC40" strokeWidth="4" strokeLinecap="round"><path d="M475 477L550 485"/><circle cx="558" cy="486" r="5"/></g>
 <g opacity={mix} fill="none" stroke="#D5AC40" strokeWidth="4" strokeLinecap="round"><path d="M420 479L826 523"/></g>
 <text x="855" y="511" fontSize="39" fontWeight="700" fill="#D5AC40" opacity={mix}>?</text>
</svg>;
export const Scene03PreviewV2=()=>{
 const f=useCurrentFrame();
 const intro=interpolate(f,[8,20],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 // 2.251~2.611s quiet interval measured in approved audio; semantic sync requires listening approval.
 const b=interpolate(f,[68,78],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
 return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#272925'}}>
 <Img src={staticFile('assets/images/scene03-finished-door-ai-v2-candidate.png')} style={{width:1080,height:1920}}/>
 <HeadQuestions mix={b} intro={intro}/>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8,opacity:1-b}}>나중에 점검하려면?</div>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8,opacity:b}}>부품 교체도<br/>가능할까?</div>
 <div style={{position:'absolute',left:110,top:470,fontSize:28,color:'#605b52'}}>구조 예시</div>
 <Audio src={staticFile('assets/audio/scene03-tts-v1.mp3')}/>
 </AbsoluteFill>;
};
