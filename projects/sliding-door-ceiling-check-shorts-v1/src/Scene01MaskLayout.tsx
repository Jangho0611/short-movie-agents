import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const source=staticFile('assets/images/scene01-before-ai-v3-candidate.png');
// Image-space coordinates only; these are NOT construction dimensions.
export const maskLayout={
 front:'7,514 941,700 941,957 7,925',
 underside:'7,925 941,957 941,982 7,950',
 slot:'7,950 941,982 941,1002 7,970',
 doorReveal:'43,962 941,993 941,1672 43,1672',
};
export const Scene01MaskLayout=()=> <AbsoluteFill style={{background:'#f4efe5',fontFamily:PRETENDARD}}>
 <Img src={source} style={{width:1080,height:1920}}/>
 <svg viewBox="0 0 941 1672" width="1080" height="1920" style={{position:'absolute',inset:0}}>
  <defs><clipPath id="door-reveal"><polygon points={maskLayout.doorReveal}/></clipPath></defs>
  <g id="front-finish"><polygon points={maskLayout.front} fill="#ded8c8" stroke="#a68643" strokeWidth="2"/></g>
  <g id="underside-finish"><polygon points={maskLayout.underside} fill="#b5c8c6" stroke="#3c7779" strokeWidth="2"/></g>
  <g id="continuous-slot"><polygon points={maskLayout.slot} fill="#343c42"/><path d="M7 950L941 982 M7 970L941 1002" fill="none" stroke="#7393a2" strokeWidth="2"/></g>
  {/* Re-display exact original door pixels through the slot; no door movement or retouch. */}
  <image href={source} width="941" height="1672" clipPath="url(#door-reveal)"/>
  <path id="front-slot-edge" d="M7 950L941 982" stroke="#3c7779" strokeWidth="2" fill="none"/>
 </svg>
 <div style={{position:'absolute',left:90,top:155,color:'#303736',fontSize:36,fontWeight:800}}>마감 구조 검토 · 최종 재질 아님</div>
 <div style={{position:'absolute',left:90,top:215,fontSize:25,color:'#525b59'}}>원본 고정 / 색상은 면 구분용 / 시공 치수 아님</div>
 <div style={{position:'absolute',left:90,top:290,fontSize:28,lineHeight:1.8,color:'#3d4746'}}>
  <div>베이지 — 전면 마감</div><div>청록 — 하부 마감</div><div>짙은 띠 — 문짝 통과 슬롯</div>
 </div>
</AbsoluteFill>;
