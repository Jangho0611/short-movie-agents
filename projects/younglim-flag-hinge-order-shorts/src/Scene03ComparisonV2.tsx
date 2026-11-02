import React from 'react';
import {AbsoluteFill,Audio,Composition,Img,interpolate,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const C={bg:'#F7F4EE',ink:'#191917',muted:'#65645E',yellow:'#F6D542'};
const Mark=({children}:{children:React.ReactNode})=><span style={{background:C.yellow,padding:'0 8px'}}>{children}</span>;
const Card=({top,dark=false}:{top:number,dark?:boolean})=><div style={{position:'absolute',left:94,top,width:812,height:324,borderRadius:24,background:dark?C.ink:'#EAE6DF',color:dark?C.bg:C.ink}}>
<div style={{position:'absolute',left:38,top:28,width:435}}>
<div style={{fontSize:28,fontWeight:600,color:dark?C.yellow:C.muted,marginBottom:13}}>모델에 따라</div>
<div style={{fontSize:62,fontWeight:800,letterSpacing:-2}}>{dark?'좌우 구분':'좌우 공용'}</div>
<div style={{fontSize:31,fontWeight:600,lineHeight:1.35,marginTop:15}}>{dark?<>영림 댐핑 스프링경첩<br/>플래그 타입</>:<>대산 취급<br/>일반 이지경첩</>}</div>
<div style={{fontSize:23,color:dark?'#E5E0D6':C.muted,marginTop:13}}>{dark?'좌용·우용을 나누어 주문해요':'공용으로 사용하는 모델도 있어요'}</div>
</div>
<div style={{position:'absolute',right:28,top:28,width:280,height:268,background:'#fff',borderRadius:16,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}>
{dark?<Img src={staticFile('assets/images/younglim-flag-hero-cutout-preview-v1.png')} style={{height:238,width:'auto'}}/>:<Img src={staticFile('assets/images/daesan-afh4350-original-scene03-v2.png')} style={{position:'absolute',width:350,height:350,left:-35,top:-53}}/>}
</div></div>;
const Scene=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{background:C.bg,color:C.ink,fontFamily:PRETENDARD}}>
<div style={{position:'absolute',left:94,top:190,fontSize:28,fontWeight:600,letterSpacing:1,color:C.muted}}>문도사의 그것이 알고싶도어</div>
<div style={{position:'absolute',left:94,top:247,height:5,width:72,background:C.yellow}}/>
<div style={{position:'absolute',right:174,top:190,fontSize:26,color:C.muted,fontWeight:500}}>03 / 05</div>
<div style={{position:'absolute',left:94,top:290,width:812,fontSize:70,fontWeight:800,lineHeight:1.2,letterSpacing:-2.5}}>모든 경첩이<br/><Mark>좌우 공용은 아닙니다</Mark></div>
<Card top={620}/><div style={{opacity:interpolate(f,[74,83],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}><Card top={970} dark/></div>
<div style={{position:'absolute',top:1440,left:94,width:812,fontSize:51,fontWeight:600,lineHeight:1.35,letterSpacing:-1.1}}>종류 이름보다<br/><Mark>실제 모델의 공용 여부</Mark></div>
<div style={{position:'absolute',bottom:235,left:94,width:812,height:2,background:'#DDD8CF'}}/>
<Audio src={staticFile('assets/audio/scene03-tts-script-v3-take-v1.mp3')}/>
</AbsoluteFill>};
registerRoot(()=> <Composition id="Scene03ComparisonV2" component={Scene} width={1080} height={1920} fps={30} durationInFrames={154}/>);
