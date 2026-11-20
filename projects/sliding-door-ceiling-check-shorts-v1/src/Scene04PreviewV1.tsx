import React from 'react';
import {AbsoluteFill,Audio,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const gold='#D5AC40';
const fade=(f:number,a:number,b:number)=>interpolate(f,[a,b],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
// Symbolic document, not a manufacturer drawing.
export const DocumentSymbol=()=> <svg width="132" height="156" viewBox="0 0 132 156" fill="none"><path d="M20 8H87L114 35V144H20Z" stroke="#272925" strokeWidth="5" strokeLinejoin="round"/><path d="M87 8V35H114M40 63H90M40 82H90M40 101H75" stroke="#272925" strokeWidth="5"/><path d="M40 121H85" stroke={gold} strokeWidth="7"/></svg>;
// Abstract relationship only: no dimensions, routes, or detailed hardware.
export const WorkspaceSymbol=()=> <svg width="650" height="240" viewBox="0 0 650 240" fill="none"><path d="M55 55H595" stroke="#272925" strokeWidth="10"/><path d="M190 59V112M460 59V112" stroke="#77746d" strokeWidth="7"/><path d="M160 224V112H490V224" fill="#E9E5DC" stroke="#77746d" strokeWidth="5"/><rect x="80" y="24" width="490" height="112" rx="8" stroke={gold} strokeWidth="6" strokeDasharray="17 12"/></svg>;
export const Scene04PreviewV1=()=>{
 const f=useCurrentFrame();const one=fade(f,54,62);const two=fade(f,94,102);const end=fade(f,139,149);
 return <AbsoluteFill style={{background:'#F5F2EC',fontFamily:PRETENDARD,color:'#272925'}}>
 <div style={{position:'absolute',left:105,top:275,fontSize:64,fontWeight:800,lineHeight:1.28,letterSpacing:-1.8}}>천장 마감 전<br/>필수 확인</div>
 <div style={{position:'absolute',left:108,top:480,width:76,height:7,background:gold}}/>
 <div style={{position:'absolute',left:105,top:565,width:870,height:325,borderRadius:24,background:'#FFFEFA',boxShadow:'0 10px 30px #30251408',display:'flex',alignItems:'center',padding:'0 52px',boxSizing:'border-box'}}>
 <div style={{opacity:0.18+one*.82}}><DocumentSymbol/></div>
 <div style={{marginLeft:42,opacity:one}}><div style={{fontSize:28,color:'#807662',marginBottom:18}}>01 · 사용하는 철물</div><div style={{fontSize:57,fontWeight:800,letterSpacing:-1.5}}>설치도 확인</div></div>
 </div>
 <div style={{position:'absolute',left:105,top:930,width:870,height:470,borderRadius:24,background:'#FFFEFA',boxShadow:'0 10px 30px #30251408',boxSizing:'border-box',padding:'38px 50px'}}>
 <div style={{opacity:two}}><div style={{fontSize:28,color:'#807662'}}>02 · 문짝 설치·조정</div><div style={{fontSize:57,fontWeight:800,letterSpacing:-1.5,marginTop:14}}>작업 공간 확인</div><div style={{marginTop:12,marginLeft:45}}><WorkspaceSymbol/></div><div style={{position:'absolute',bottom:22,right:42,fontSize:25,color:'#77746d'}}>구조 예시 · 치수 아님</div></div>
 </div>
 <div style={{position:'absolute',left:105,top:1490,fontSize:44,fontWeight:800,opacity:end}}>마감 전에 꼭 확인하세요</div>
 <Audio src={staticFile('assets/audio/scene04-tts-v1.mp3')}/>
 </AbsoluteFill>;
};
