import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
// Approved audio: scene02-tts-v5. MP3-derived DTW anchors + silence boundaries.
export const scene2v2Frames=286;
export const Scene2V2=()=>{const f=useCurrentFrame();
const phase=f<110?'frame':f<197?'leaf':'emboss';
const close=phase==='frame'?f>=45:phase==='leaf'?f>=140:false;
const film=f>=170;
const label=phase==='frame'?'문틀':phase==='leaf'?'문짝':'엠보스 도어';
const img=close?(phase==='frame'?'customer-frame-panel.jpeg':'customer-door-sample.jpeg'):'younglim-official-abs-overview.jpg';
const ease=interpolate(f,phase==='frame'?[45,58]:[140,153],[1,1.08],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
return <AbsoluteFill style={{background:'#F5F2EB',color:'#191916',fontFamily:PRETENDARD}}>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:72,top:126,width:360}}/>
<div style={{position:'absolute',right:132,top:172,fontSize:22,color:'#777166'}}>내부 검토용</div>
<div style={{position:'absolute',left:72,top:350,fontSize:68,fontWeight:800}}>{label}</div>
{phase!=='emboss'?<div style={{position:'absolute',left:72,top:460,width:876,height:880,overflow:'hidden'}}>
{!close?<><Img src={staticFile(`assets/images/${img}`)} style={{position:'absolute',height:880,width:1559,top:0,left:-253}}/><svg width="876" height="880" style={{position:'absolute',inset:0}}>{phase==='frame'?<path d="M260 820 L260 47 L613 47 L613 820" stroke="#F2D24A" strokeWidth="7" fill="none"/>:<rect x="282" y="73" width="304" height="739" fill="none" stroke="#F2D24A" strokeWidth="7"/>}</svg></>:<><Img src={staticFile(`assets/images/${img}`)} style={{position:'absolute',width:phase==='frame'?1752:1226,height:'auto',left:phase==='frame'?-360:-50,top:phase==='frame'?-120:0,transform:`scale(${ease})`,transformOrigin:phase==='frame'?'50% 35%':'30% 15%'}}/><svg width="876" height="880" style={{position:'absolute',inset:0}}>{phase==='frame'?<path d="M355 30 L355 650 M530 30 L530 650" stroke="#F2D24A" strokeWidth="6" fill="none"/>:<path d="M90 50 L710 50 L710 370 L90 370 Z" stroke="#F2D24A" strokeWidth="6" fill="none"/>}</svg><div style={{position:'absolute',bottom:20,left:24,fontSize:29,padding:'10px 16px',color:'white',background:'#191916'}}>{phase==='frame'?'설치된 문틀의 세로 부재':'샘플 위쪽의 설치 문짝 표면'}</div></>}
</div>:<div style={{position:'absolute',left:72,top:480,width:876,height:820}}>
<div style={{fontSize:30,color:'#655e52'}}>표면 질감 개념도 · 실제 제품 이미지 아님</div>
<svg width="876" height="640" viewBox="0 0 876 640" style={{marginTop:40}}><path d="M90 110 L760 110 L760 520 L90 520Z" fill="#ece7dd" stroke="#aa9a82" strokeWidth="3"/>{Array.from({length:12},(_,i)=><path key={i} d={`M${130+i*50} 130 Q${105+i*50} 240 ${130+i*50} 320 T${130+i*50} 500`} stroke="#a9987d" strokeWidth="5" fill="none"/>)}<path d="M180 345 Q220 290 260 345 T340 345 T420 345 T500 345 T580 345 T660 345" stroke="#9c7d16" strokeWidth="10" fill="none"/><path d="M625 220 L580 310" stroke="#9c7d16" strokeWidth="4"/><text x="510" y="195" fontSize="36" fill="#191916">입체적인 결감</text></svg>
</div>}
<div style={{position:'absolute',left:72,top:1380,width:876,fontWeight:800,fontSize:48,lineHeight:1.4}}>
{phase==='frame'?<>주로 인테리어 필름 마감</>:phase==='leaf'?<>문짝은 마감 방식이 다양합니다<br/>{f>=140&&<><span style={{background:film?'transparent':'#F2D24A'}}>데코시트</span> / <span style={{background:film?'#F2D24A':'transparent'}}>인테리어 필름(인필)</span></>}</>:<>입체적인 표면 질감을<br/>살린 마감</>}
</div>
<div style={{position:'absolute',left:72,top:1560,width:876,fontSize:27,lineHeight:1.5,color:'#655e52'}}>{phase==='emboss'?'모델별 적용 조건 확인 · YA-07E 실물 표현 아님':close?'고객 현장 사진 · 사진 속 마감 사양은 별도 확인':'영림 공식 ABS도어 대표 이미지 · 영림190 사례 아님'}</div>
<Audio src={staticFile('assets/audio/scene02-tts-v5.mp3')}/>
</AbsoluteFill>};
