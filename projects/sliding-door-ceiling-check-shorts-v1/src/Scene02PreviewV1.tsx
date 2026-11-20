import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
export const Scene02RailFocus:React.FC<{opacity:number}>=({opacity})=><svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
 <g opacity={opacity} stroke="#D5AC40" fill="none" strokeWidth="5" strokeLinecap="round"><path d="M375 643L460 654L460 714"/><circle cx="460" cy="722" r="7"/></g>
</svg>;
export const Scene02WorkSpace:React.FC<{opacity:number}>=({opacity})=><svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
 <g opacity={opacity}><ellipse cx="500" cy="803" rx="415" ry="93" transform="rotate(5 500 803)" fill="#D5AC40" fillOpacity=".075" stroke="#D5AC40" strokeOpacity=".9" strokeWidth="4"/></g>
</svg>;
export const Scene02PreviewV1=()=>{
 const f=useCurrentFrame();
 const a=interpolate(f,[0,10,111,123],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const b=interpolate(f,[111,123],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
 return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#272925'}}>
 <Img src={staticFile('assets/images/scene01-before-ai-v3-candidate.png')} style={{width:1080,height:1920}}/>
 <Scene02RailFocus opacity={a}/><Scene02WorkSpace opacity={b}/>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8,opacity:1-b}}>레일 설치만으로 끝?</div>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8,opacity:b}}>문짝 설치·조정<br/>공간도 필요!</div>
 <div style={{position:'absolute',left:110,top:470,fontSize:28,color:'#605b52'}}>구조 예시</div>
 <div style={{position:'absolute',left:110,top:516,fontSize:25,color:'#605b52',opacity:b}}>강조 영역은 작업 치수를 뜻하지 않습니다</div>
 <Audio src={staticFile('assets/audio/scene02-tts-v2.mp3')}/>
 </AbsoluteFill>;
};
