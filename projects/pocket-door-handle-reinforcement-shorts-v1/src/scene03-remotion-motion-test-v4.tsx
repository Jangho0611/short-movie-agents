import React from 'react';
import {AbsoluteFill,Img,Composition,registerRoot,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {PRETENDARD} from './fonts';
const asset=(n:string)=>staticFile('assets/images/'+n);
const ease=(f:number,a:number,b:number)=>{const t=Math.max(0,Math.min(1,(f-a)/(b-a)));return t*t*(3-2*t)};
function Scene({background,product}:{background:string,product:string}){const f=useCurrentFrame();const b2=f>=75&&f<180;const final=f>=240;const intro=f<24;const hide=1-ease(f,24,36);const zoom=f>=60&&f<75?1+.018*ease(f,60,74):1;const productOpacity=f<42?hide:0;const cavityOpacity=f<42?ease(f,36,42):1;const label=f<42?'':f<222?'손잡이 가공 위치':'가공 위치';
return <AbsoluteFill style={{backgroundColor:'#eeece6'}}><div style={{width:540,height:960,position:'absolute',transform:'scale(2)',transformOrigin:'top left',fontFamily:PRETENDARD,color:'#29332f'}}>
<div style={{position:"absolute",inset:0,transform:`scale(${zoom})`,transformOrigin:"269.5px 480px"}}><Img src={background} style={{width:540,height:960}}/>
<div style={{position:'absolute',left:218,top:280,width:104,height:400,overflow:'hidden',opacity:cavityOpacity}}><Img src={asset('pocket-door-sh30-recess-v1.png')} style={{position:'absolute',left:-218,top:-280,width:540,height:960,maxWidth:'none'}}/></div>
<div style={{position:'absolute',inset:0,opacity:productOpacity}}>
<Img src={product} style={{position:'absolute',left:203,top:262,width:135,height:440,filter:'brightness(0) blur(2px)',opacity:.18}}/>
<Img src={product} style={{position:'absolute',left:202,top:260,width:135,height:440}}/>
</div></div>
{f>=60&&f<75&&<svg style={{position:'absolute',inset:0,width:540,height:960,opacity:Math.sin((f-60)/15*Math.PI)}}><path d="M195 480 H216 M323 480 H344" stroke="#717c72" strokeWidth="2"/></svg>}
{(intro||final)&&<Img src={asset('pocket-door-sh30-exterior-v1.png')} style={{position:'absolute',inset:0,width:540,height:960}}/>}
{final&&f<258&&<div style={{position:"absolute",top:145,width:540,textAlign:"center",fontSize:27,fontWeight:600}}>손잡이 설치 후</div>}
{!intro&&!final&&!b2&&<><div style={{position:'absolute',top:145,width:540,textAlign:'center',fontSize:27,fontWeight:600}}>{label}</div><div style={{position:'absolute',bottom:54,width:540,textAlign:'center',fontSize:17}}>설치 과정 설명용 개념도 · 제품별 상이</div></>}
{b2&&<AbsoluteFill style={{backgroundColor:'#eeece6'}}><div style={{position:'absolute',top:38,width:540,textAlign:'center',fontSize:28,fontWeight:800,lineHeight:1.4}}>손잡이 위치,<br/>내부 보강 조건 확인</div><div style={{position:'absolute',left:45,top:140,width:450,height:800,overflow:'hidden'}}><Img src={asset('pocket-door-sh30-exploded-photoreal-v1.png')} style={{width:450,height:800}}/></div><svg viewBox="0 0 540 960" style={{position:'absolute',inset:0,width:540,height:960,pointerEvents:'none'}}>
{/* Short pointers identify existing image regions without tracing supposed machining dimensions. */}
{f>=90&&f<117&&<g opacity={Math.min(ease(f,90,92),1-ease(f,115,117))}><path d="M405 490 H355 L307.5 515" fill="none" stroke="#344c40" strokeWidth="3"/><circle cx="307.5" cy="515" r="6" fill="#344c40"/></g>}
{f>=118&&f<146&&<g opacity={Math.min(ease(f,118,120),1-ease(f,144,146))}><path d="M405 300 H350 L295 323.333" fill="none" stroke="#665034" strokeWidth="3"/><circle cx="295" cy="323.333" r="6" fill="#665034"/></g>}
{f>=147&&f<177&&<g opacity={Math.min(ease(f,147,149),1-ease(f,175,177))}><path d="M405 755 H350 L295 731.667" fill="none" stroke="#665034" strokeWidth="3"/><circle cx="295" cy="731.667" r="6" fill="#665034"/></g>}
</svg><div style={{position:'absolute',left:0,bottom:20,width:540,textAlign:'center',fontSize:23,fontWeight:600,background:'#eeece6',padding:'10px 0'}}>내부 보강 설명용 개념도 · 제품별 상이</div></AbsoluteFill>}
</div></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene03RemotionMotionV4" component={Scene} width={1080} height={1920} fps={30} durationInFrames={300} defaultProps={{background:'',product:''}}/>);
