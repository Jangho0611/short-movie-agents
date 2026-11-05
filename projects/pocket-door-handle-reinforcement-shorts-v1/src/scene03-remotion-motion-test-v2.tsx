import React from 'react';
import {AbsoluteFill,Img,Composition,registerRoot,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {PRETENDARD} from './fonts';
const asset=(n:string)=>staticFile('assets/images/'+n);
const ease=(f:number,a:number,b:number)=>{const t=Math.max(0,Math.min(1,(f-a)/(b-a)));return t*t*(3-2*t)};
function Scene({background,product}:{background:string,product:string}){const f=useCurrentFrame();const b2=f>=75&&f<180;const final=f>=258;const intro=f<24;const hide=1-ease(f,24,36);const settle=ease(f,232,254);const zoom=f>=60&&f<75?1+.018*ease(f,60,74):1;const productOpacity=f<42?hide:f>=222?1:0;const cavityOpacity=f<42?ease(f,36,42):1;const label=f<42?'':f<75||f>=180&&f<222?'손잡이 가공 위치':f<258?'손잡이 결합 위치':'';
return <AbsoluteFill style={{backgroundColor:'#eeece6'}}><div style={{width:540,height:960,position:'absolute',transform:'scale(2)',transformOrigin:'top left',fontFamily:PRETENDARD,color:'#29332f'}}>
<div style={{position:"absolute",inset:0,transform:`scale(${zoom})`,transformOrigin:"269.5px 480px"}}><Img src={background} style={{width:540,height:960}}/>
<div style={{position:'absolute',left:218,top:280,width:104,height:400,overflow:'hidden',opacity:cavityOpacity}}><Img src={asset('pocket-door-sh30-recess-v1.png')} style={{position:'absolute',left:-218,top:-280,width:540,height:960,maxWidth:'none'}}/></div>
<div style={{position:'absolute',inset:0,opacity:productOpacity,clipPath:f>=222?`inset(0 0 ${100*(1-ease(f,222,238))}% 0)`:'none',transform:f>=222?`scale(${1+.012*(1-settle)})`:'none',transformOrigin:'269.5px 480px'}}>
<Img src={product} style={{position:'absolute',left:202+(1-settle),top:260+2*(1-settle),width:135,height:440,filter:`brightness(0) blur(${f>=222?3-1*settle:2}px)`,opacity:.18}}/>
<Img src={product} style={{position:'absolute',left:202,top:260,width:135,height:440}}/>
</div></div>
{f>=60&&f<75&&<svg style={{position:'absolute',inset:0,width:540,height:960,opacity:Math.sin((f-60)/15*Math.PI)}}><path d="M195 480 H216 M323 480 H344" stroke="#717c72" strokeWidth="2"/></svg>}
{(intro||final)&&<Img src={asset('pocket-door-sh30-exterior-v1.png')} style={{position:'absolute',inset:0,width:540,height:960}}/>}
{!intro&&!final&&!b2&&<><div style={{position:'absolute',top:145,width:540,textAlign:'center',fontSize:27,fontWeight:600}}>{label}</div><div style={{position:'absolute',bottom:54,width:540,textAlign:'center',fontSize:17}}>설치 과정 설명용 개념도 · 제품별 상이</div></>}
{b2&&<AbsoluteFill style={{backgroundColor:'#eeece6'}}><div style={{position:'absolute',top:38,width:540,textAlign:'center',fontSize:28,fontWeight:800,lineHeight:1.4}}>손잡이 위치,<br/>내부 보강 조건 확인</div><div style={{position:'absolute',left:45,top:140,width:450,height:800,overflow:'hidden'}}><Img src={asset('pocket-door-sh30-exploded-photoreal-v1.png')} style={{width:450,height:800}}/></div><svg viewBox="0 0 540 960" style={{position:'absolute',inset:0,width:540,height:960,pointerEvents:'none'}}>
{/* Short pointers identify existing image regions without tracing supposed machining dimensions. */}
{f>=93&&f<115&&<g opacity={Math.min(ease(f,93,97),1-ease(f,110,115))}><path d="M465 440 H395 L343 465" fill="none" stroke="#637164" strokeWidth="2"/><circle cx="343" cy="465" r="4" fill="#637164"/></g>}
{f>=116&&f<140&&<g opacity={Math.min(ease(f,116,120),1-ease(f,135,140))}><path d="M460 295 H412 L378 325" fill="none" stroke="#8d795b" strokeWidth="2"/><circle cx="378" cy="325" r="5" fill="#8d795b"/></g>}
{f>=141&&f<170&&<g opacity={Math.min(ease(f,141,145),1-ease(f,164,170))}><path d="M462 690 H414 L372 665" fill="none" stroke="#8d795b" strokeWidth="2"/><circle cx="372" cy="665" r="5" fill="#8d795b"/></g>}
</svg><div style={{position:'absolute',left:0,bottom:20,width:540,textAlign:'center',fontSize:20,background:'#eeece6',padding:'10px 0'}}>내부 보강 설명용 개념도 · 제품별 상이</div></AbsoluteFill>}
</div></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene03RemotionMotionV2" component={Scene} width={1080} height={1920} fps={30} durationInFrames={300} defaultProps={{background:'',product:''}}/>);
