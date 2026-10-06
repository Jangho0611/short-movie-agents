import {IntegratedWoodProfile} from './IntegratedWoodProfile';
import React from 'react';
import {AbsoluteFill,Audio,Composition,Sequence,interpolate,staticFile,useCurrentFrame} from 'remotion';
import {Scene,FRAMES} from './Scenes';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {PRETENDARD} from './daesan-ending/approved/fonts';
export const INTEGRATED_FRAMES=236;
export const V3_FRAMES=[FRAMES[0],FRAMES[1],INTEGRATED_FRAMES,...FRAMES.slice(2)];
const green='#146335',ink='#18251f',muted='#647069',line='#ccd5cf';
const ramp=(f:number,s:number)=>interpolate(f,[s,s+9],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
// Number-only layer leaves every approved v1 Scene implementation unchanged.
const NumberV3=({n}:{n:number})=><div style={{position:'absolute',right:84,top:150,width:156,height:38,background:'#FFFFFF',fontFamily:PRETENDARD,fontSize:27,letterSpacing:2,color:muted,fontWeight:600,textAlign:'right'}}>0{n} / 06</div>;
export const IntegratedDesignV3=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{background:'#FFFFFF',color:ink,fontFamily:PRETENDARD}}>
<Audio src={staticFile('assets/audio/scene03-integrated-v5.mp3')}/>
<div style={{position:'absolute',left:84,right:84,top:150,fontSize:27,letterSpacing:2,color:green,fontWeight:600}}>대산 · 문틀 발주 가이드</div><NumberV3 n={3}/>
<div style={{position:'absolute',left:84,right:84,top:211,height:2,background:line}}/>
<div style={{position:'absolute',left:84,right:84,top:270,fontSize:66,fontWeight:800,lineHeight:1.32,letterSpacing:-2}}>일체형 목문틀<br/><span style={{color:green}}>디자인도 선택 가능</span></div>
<div style={{position:'absolute',left:84,top:570,fontSize:32,color:muted}}>일체형의 두 가지 디자인</div>
{/* Reference-based outlines; no invented dimensions or hidden joints. */}
<div style={{position:'absolute',left:84,right:84,top:670,display:'flex',gap:24}}>{['외도어 타입','고바이 타입'].map((name,i)=>{const active=ramp(f,[89,125][i]);return <div key={name} style={{width:444,height:460,boxSizing:'border-box',background:'#FFFFFF',border:`2px solid ${line}`,borderRadius:22,padding:'38px 28px',position:'relative'}}><div style={{fontSize:27,color:muted}}>DESIGN 0{i+1}</div><div style={{position:'absolute',left:18,top:88,opacity:ramp(f,i===0?12:24)}}><IntegratedWoodProfile type={i===0?'single':'sloped'} id={`integrated-v3-${i}`}/></div><div style={{position:'absolute',left:20,right:20,top:330,textAlign:'center',fontSize:48,fontWeight:800,color:green,letterSpacing:-1.5,whiteSpace:'nowrap'}}>{name}</div><div style={{position:'absolute',left:36,right:36,bottom:30,height:5,background:green,opacity:active}}/></div>})}</div>
<div style={{position:'absolute',left:84,right:84,top:1265,borderLeft:`5px solid ${green}`,paddingLeft:28,fontSize:48,fontWeight:800,lineHeight:1.45,opacity:ramp(f,165)}}>원하는 형태로<br/><span style={{color:green}}>선택 발주</span></div>
<div style={{position:'absolute',left:84,bottom:165,fontSize:24,color:muted}}>DAESAN <span style={{marginLeft:18}}>건축자재 발주 정보</span></div>
</AbsoluteFill>};
const ApprovedSceneV3=({originalId,n}:{originalId:number;n:number})=><AbsoluteFill><Scene id={originalId}/><NumberV3 n={n}/></AbsoluteFill>;
export const FullV3=()=>{const count=V3_FRAMES.reduce((a,b)=>a+b,0);return <>{V3_FRAMES.map((duration,i)=><Sequence key={i} from={V3_FRAMES.slice(0,i).reduce((a,b)=>a+b,0)} durationInFrames={duration}>{i===2?<IntegratedDesignV3/>:<ApprovedSceneV3 originalId={i<2?i+1:i} n={i+1}/>}</Sequence>)}<Sequence from={count} durationInFrames={170}><DaesanEnding/></Sequence></>};
export const V3Compositions=()=> <><Composition id="Scene03IntegratedV2" component={IntegratedDesignV3} width={1080} height={1920} fps={30} durationInFrames={INTEGRATED_FRAMES}/><Composition id="DoorFrameIntegratedVsSeparateV3" component={FullV3} width={1080} height={1920} fps={30} durationInFrames={V3_FRAMES.reduce((a,b)=>a+b,0)+170}/></>;
