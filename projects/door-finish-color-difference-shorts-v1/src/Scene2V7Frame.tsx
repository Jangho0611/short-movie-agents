import {DoorMasterCaption} from './Scene2V7Caption';
import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
// Approved audio: scene02-tts-v5. MP3-derived DTW anchors + silence boundaries.
export const scene2v6FrameFrames=286;
export const Scene2V7Frame=()=>{const f=useCurrentFrame();
const phase=f<110?'frame':f<197?'leaf':'emboss';
const close=phase==='frame'?f>=45:phase==='leaf'?f>=140:false;
const film=f>=170;
const label=phase==='frame'?'문틀':phase==='leaf'?'문짝':'엠보스 도어';
const img=close?(phase==='frame'?'customer-frame-panel.jpeg':'customer-door-sample.jpeg'):'younglim-official-abs-overview.jpg';
const ease=interpolate(f,phase==='frame'?[45,58]:[140,153],[1,1.08],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
return <AbsoluteFill style={{background:'#F5F2EB',color:'#191916',fontFamily:PRETENDARD}}>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:72,top:126,width:360}}/>
<div style={{position:'absolute',right:132,top:172,fontSize:22,color:'#777166'}}>내부 검토용</div>
{phase!=='emboss'?<div style={{position:'absolute',left:72,top:460,width:876,height:880,overflow:'hidden'}}>
{!close?<><Img src={staticFile(`assets/images/${img}`)} style={{position:'absolute',height:880,width:1559,top:0,left:-253}}/><svg width="876" height="880" style={{position:'absolute',inset:0}}>{phase==='frame'?<path d="M260 820 L260 47 L613 47 L613 820" stroke="#F2D24A" strokeWidth="7" fill="none"/>:<rect x="282" y="73" width="304" height="739" fill="none" stroke="#F2D24A" strokeWidth="7"/>}</svg></>:<><Img src={staticFile(`assets/images/${img}`)} style={{position:'absolute',width:phase==='frame'?1752:1226,height:'auto',left:phase==='frame'?-360:-50,top:phase==='frame'?-120:0,transform:`scale(${ease})`,transformOrigin:phase==='frame'?'50% 35%':'30% 15%'}}/><svg width="876" height="880" style={{position:'absolute',inset:0}}>{phase==='frame'?<path d="M355 30 L355 650 M530 30 L530 650" stroke="#F2D24A" strokeWidth="6" fill="none"/>:<path d="M90 50 L710 50 L710 370 L90 370 Z" stroke="#F2D24A" strokeWidth="6" fill="none"/>}</svg><div style={{position:'absolute',bottom:20,left:24,fontSize:29,padding:'10px 16px',color:'white',background:'#191916'}}>{phase==='frame'?'설치된 문틀의 세로 부재':'샘플 위쪽의 설치 문짝 표면'}</div></>}
</div>:<div style={{position:'absolute',left:72,top:460,width:876,height:880,overflow:'hidden'}}>
<Img src={staticFile('assets/images/younglim-ya07e-px454-display.png')} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
</div>}
<DoorMasterCaption kind="frame"/>

<Audio src={staticFile('assets/audio/scene02-tts-v5.mp3')}/>
</AbsoluteFill>};
