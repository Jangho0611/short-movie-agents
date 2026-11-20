import React from 'react';
import {AbsoluteFill,Audio,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const image=staticFile('assets/images/scene01-before-ai-v3-candidate.png');
// Fixed crops, uniform scale only. A: 941x370; B: 600x570 source pixels.
export const RailCrop=()=> <svg width="960" height="378" viewBox="0 545 941 370" style={{position:'absolute',left:60,top:680}}>
 <image href={image} width="941" height="1672"/>
 <path d="M375 647L455 658L455 710" fill="none" stroke="#D5AC40" strokeWidth="5"/><circle cx="455" cy="720" r="7" fill="none" stroke="#D5AC40" strokeWidth="4"/>
</svg>;
export const ConnectionCrop=()=> <svg width="840" height="798" viewBox="30 620 600 570" style={{position:'absolute',left:120,top:650}}>
 <image href={image} width="941" height="1672"/>
 <path d="M120 833Q120 865 156 865 M340 837Q340 869 304 869" fill="none" stroke="#D5AC40" strokeWidth="5" strokeLinecap="round"/>
 <path d="M350 865L480 865" fill="none" stroke="#D5AC40" strokeWidth="3"/>
</svg>;
export const Scene02PreviewV3=()=>{
 const b=useCurrentFrame()>=117;
 return <AbsoluteFill style={{background:'#f4efe7',fontFamily:PRETENDARD,color:'#272925'}}>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8}}>{b?<>문짝 설치·조정<br/>공간도 필요!</>:<>레일 설치만으로 끝?</>}</div>
 <div style={{position:'absolute',left:110,top:470,fontSize:28,color:'#605b52'}}>구조 예시</div>
 {b?<ConnectionCrop/>:<RailCrop/>}
 <div style={{position:'absolute',left:b?120:60,top:b?1490:1105,fontSize:34,fontWeight:600,color:'#514c43'}}>{b?'문짝 상단 연결부 주변':'레일과 상부 설치 위치'}</div>
 {b&&<div style={{position:'absolute',left:120,top:1545,fontSize:25,color:'#605b52'}}>강조 영역은 작업 치수를 뜻하지 않습니다</div>}
 <Audio src={staticFile('assets/audio/scene02-tts-v2.mp3')}/>
 </AbsoluteFill>;
};
