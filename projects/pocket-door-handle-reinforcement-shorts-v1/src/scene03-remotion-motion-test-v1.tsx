import React from 'react';
import {AbsoluteFill,Img,Composition,registerRoot,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {PRETENDARD} from './fonts';
const asset=(n:string)=>staticFile('assets/images/'+n);
const ease=(f:number,a:number,b:number)=>{const t=Math.max(0,Math.min(1,(f-a)/(b-a)));return t*t*(3-2*t)};
function Scene({background,product}:{background:string,product:string}){const f=useCurrentFrame();const b2=f>=75&&f<180;const final=f>=258;const intro=f<24;const hide=1-ease(f,24,36);const show=ease(f,222,237);const productOpacity=f<42?hide:f>=222?show:0;const cavityOpacity=f<42?ease(f,36,42):1;const label=f<42?'':f<75||f>=180&&f<222?'손잡이 가공 위치':f<258?'손잡이 결합 위치':'';
return <AbsoluteFill style={{backgroundColor:'#eeece6'}}><div style={{width:540,height:960,position:'absolute',transform:'scale(2)',transformOrigin:'top left',fontFamily:PRETENDARD,color:'#29332f'}}>
<Img src={background} style={{width:540,height:960}}/>
<div style={{position:'absolute',left:218,top:280,width:104,height:400,overflow:'hidden',opacity:cavityOpacity}}><Img src={asset('pocket-door-sh30-recess-v1.png')} style={{position:'absolute',left:-218,top:-280,width:540,height:960,maxWidth:'none'}}/></div>
<div style={{opacity:productOpacity}}><Img src={product} style={{position:'absolute',left:203,top:262,width:135,height:440,filter:'brightness(0) blur(3px)',opacity:.18}}/><Img src={product} style={{position:'absolute',left:202,top:260,width:135,height:440}}/></div>
{(intro||final)&&<Img src={asset('pocket-door-sh30-exterior-v1.png')} style={{position:'absolute',inset:0,width:540,height:960}}/>}
{!intro&&!final&&!b2&&<><div style={{position:'absolute',top:145,width:540,textAlign:'center',fontSize:27,fontWeight:600}}>{label}</div><div style={{position:'absolute',bottom:54,width:540,textAlign:'center',fontSize:17}}>설치 과정 설명용 개념도 · 제품별 상이</div></>}
{b2&&<AbsoluteFill style={{backgroundColor:'#eeece6'}}><div style={{position:'absolute',top:38,width:540,textAlign:'center',fontSize:28,fontWeight:800,lineHeight:1.4}}>손잡이 위치의<br/>내부 보강 조건 확인</div><div style={{position:'absolute',left:45,top:140,width:450,height:800,overflow:'hidden'}}><Img src={asset('pocket-door-sh30-exploded-photoreal-v1.png')} style={{width:450,height:800}}/></div><div style={{position:'absolute',left:0,bottom:20,width:540,textAlign:'center',fontSize:16,background:'#eeece6',padding:'10px 0'}}>내부 보강 설명용 개념도 · 제품별 상이</div></AbsoluteFill>}
</div></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene03RemotionMotionV1" component={Scene} width={1080} height={1920} fps={30} durationInFrames={300} defaultProps={{background:'',product:''}}/>);
