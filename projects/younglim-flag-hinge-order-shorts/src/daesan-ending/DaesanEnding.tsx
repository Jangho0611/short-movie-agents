import React from 'react';
import {AbsoluteFill,Audio,OffthreadVideo,Freeze,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {HeadquartersOverlay} from './approved/HeadquartersOverlay';
import {PRETENDARD} from './approved/fonts';
export const DaesanEnding=()=>{const f=useCurrentFrame();const opacity=interpolate(f,[65,75],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <AbsoluteFill>
<OffthreadVideo muted src={staticFile('daesan-ending/video/headquarters-normal-speed-hold.mp4')} style={{width:1080,height:1920}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(255,255,255,0.58) 0px,rgba(255,255,255,0.45) 620px,transparent 720px,transparent 1400px,rgba(0,0,0,0.45) 1690px)'}}/>
<div style={{position:'absolute',inset:0,transform:'translateY(-450px)',textShadow:'0 1px 5px rgba(255,255,255,0.65)'}}>
<Freeze frame={Math.min(135,Math.floor(f*24/30))}><HeadquartersOverlay/></Freeze>
</div>
<div style={{position:'absolute',top:1515,left:100,width:880,textAlign:'center',fontFamily:PRETENDARD,color:'white',opacity,transform:`translateY(${(1-opacity)*8}px)`,textShadow:'0 2px 6px rgba(0,0,0,0.35)'}}>
<div style={{fontSize:30,fontWeight:500,marginBottom:18}}>대표번호</div>
<div style={{fontSize:58,fontWeight:600,lineHeight:1.35}}>031-388-3833<br/>1661-6612</div>
</div>
<Audio src={staticFile('daesan-ending/audio/ending-approved-v3.mp3')}/>
</AbsoluteFill>};
