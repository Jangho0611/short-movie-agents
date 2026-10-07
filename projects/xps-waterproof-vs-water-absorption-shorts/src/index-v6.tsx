import React from 'react';
import {AbsoluteFill, Audio, Composition, Img, Sequence, interpolate, registerRoot, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './scene5/fonts';
import {DaesanEnding as Ending} from './daesan-ending/DaesanEnding';
import {FPS,DURATIONS,BODY_FRAMES,ENDING_FRAMES} from './timing';

const C={ink:'#202632',sub:'#5C6473',blue:'#5067D8',pink:'#AC3D71',pinkPale:'#FBE6EF',line:'#D9DFE9',paper:'#F7F8FA'};
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const visual='assets/images/xps-moisture-hybrid-candidate-v1.png';
const captions=[['습기에 강한 XPS','그럼 방수도 될까?'],['XPS = 낮은 수분 흡수','습기에 강한 단열재'],['물을 적게 흡수하는 성질','누수를 막는 방수와는 다름'],['단열층과 방수층','목적과 역할이 서로 다름'],['습기에 강한 XPS','방수층을 대신하진 않습니다']];
const Header=({n,title}:{n:number;title:React.ReactNode})=><div style={{position:'absolute',top:135,left:66,right:66}}>
  <div style={{display:'flex',justifyContent:'space-between',fontSize:29,color:C.sub,fontWeight:600}}><span>단열재 바로 알기</span><span>0{n+1} / 05</span></div>
  <div style={{height:3,background:C.line,marginTop:28}}><div style={{height:3,width:`${(n+1)*20}%`,background:C.pink}}/></div>
  <div style={{fontSize:79,fontWeight:800,lineHeight:1.23,letterSpacing:-3,marginTop:58}}>{title}</div>
</div>;
const Caption=({n}:{n:number})=>{
 const frame=useCurrentFrame();
 // Measured Part B onset for revised Scene 1 and 5; no guessed word alignment.
 const onset=n===0?65:n===4?118:null;
 const second=onset!==null&&frame>=onset;
 return <div style={{position:'absolute',left:66,right:66,bottom:224,padding:'26px 12px',borderTop:`2px solid ${C.line}`,background:'rgba(247,248,250,.93)',textAlign:'center',fontSize:48,fontWeight:700,lineHeight:1.4,borderRadius:8}}><span style={{color:onset!==null&&!second?C.pink:C.ink}}>{captions[n][0]}</span><br/><span style={{color:second?C.pink:C.ink}}>{captions[n][1]}</span></div>;
};
const Note=({children,top=1380}:{children:React.ReactNode;top?:number})=><div style={{position:'absolute',top,left:66,right:66,textAlign:'center',fontSize:27,color:C.sub,fontWeight:500}}>{children}</div>;
const Photo=({n}:{n:number})=>{
 const f=useCurrentFrame();const z=interpolate(f,[0,DURATIONS[n]-1],[n===1?1.08:1,n===1?1.10:1.02],clamp);
 return <AbsoluteFill style={{overflow:'hidden'}}><Img src={staticFile(visual)} style={{width:1080,height:1920,objectFit:'cover',transform:`scale(${z})`,transformOrigin:n===1?'64% 60%':'50% 57%'}}/>
 <Header n={n} title={n===0?<>습기에 강한 XPS,<br/><span style={{color:C.pink}}>방수도 될까요?</span></>:n===1?<>XPS의 특성,<br/><span style={{color:C.pink}}>낮은 수분 흡수</span></>:<>습기에 강한 단열재<br/><span style={{color:C.pink}}>≠ 방수층</span></>}/>
 <div style={{position:'absolute',top:530,left:70,color:C.pink,fontWeight:800,fontSize:46}}>XPS</div>
 <Note>연출 Visual · 흡수율 시험 장면 아님</Note><Caption n={n}/></AbsoluteFill>;
};
const Barrier=()=> <svg width="360" height="290" viewBox="0 0 360 290" aria-label="물의 유입과 방수 역할 개념">
 <rect x="218" y="66" width="116" height="192" rx="6" fill="#D9DFE9"/>
 <path d="M260 102v120M288 102v120" stroke="#BAC2D0" strokeWidth="3"/>
 <rect x="185" y="42" width="16" height="216" rx="5" fill={C.blue}/>
 {[88,150,212].map((y,i)=><g key={i}><path d={`M31 ${y}H156`} stroke={C.blue} strokeWidth="5"/><path d={`M143 ${y-10}L156 ${y}L143 ${y+10}`} fill="none" stroke={C.blue} strokeWidth="5"/></g>)}
 <text x="242" y="285" fontFamily={PRETENDARD} fontSize="23" fill={C.sub}>건축 구조</text>
 </svg>;
const Comparison=()=>{
 const f=useCurrentFrame();const right=interpolate(f,[55,69],[.48,1],clamp);
 return <><Header n={2} title={<>비슷한 말,<br/><span style={{color:C.pink}}>다른 역할</span></>}/>
 <div style={{position:'absolute',top:570,left:66,right:66,display:'grid',gridTemplateColumns:'1fr 1fr',gap:44}}>
  <div style={{height:710,background:C.pinkPale,border:'2px solid #E5A4BF',borderRadius:26,padding:24,textAlign:'center'}}>
   <div style={{fontSize:57,fontWeight:800,color:C.pink}}>XPS</div>
   <div style={{height:320,overflow:'hidden',position:'relative',borderRadius:15,marginTop:30}}><Img src={staticFile(visual)} style={{position:'absolute',width:450,height:800,left:-22,top:-270}}/></div>
   <div style={{fontSize:40,fontWeight:700,lineHeight:1.45,marginTop:34}}>단열재 자체의<br/>수분 흡수 특성</div>
  </div>
  <div style={{height:710,background:'#EEF0FC',border:`2px solid ${C.line}`,borderRadius:26,padding:24,textAlign:'center',opacity:right}}>
   <div style={{fontSize:57,fontWeight:800,color:C.blue}}>방수층</div><div style={{marginTop:40}}><Barrier/></div>
   <div style={{fontSize:40,fontWeight:700,lineHeight:1.45,marginTop:54}}>건물로 들어오는<br/>물을 막는 역할</div>
  </div>
 </div>
 <div style={{position:'absolute',top:882,left:510,width:60,textAlign:'center',fontSize:67,fontWeight:800,background:C.paper,borderRadius:40}}>≠</div>
 <Note>역할 비교 개념도 · 실제 시공 상세 아님</Note><Caption n={2}/></>;
};
const Roles=()=>{
 const f=useCurrentFrame();const offset=interpolate(f,[0,15],[10,0],clamp);
 return <><Header n={3} title={<>단열과 방수,<br/><span style={{color:C.pink}}>각각 확인</span></>}/>
 <div style={{position:'absolute',left:96,right:96,top:570,transform:`translateY(${offset}px)`}}>
  <div style={{display:'flex',justifyContent:'space-between',gap:45}}>
   <div style={{width:400,textAlign:'center'}}><div style={{fontSize:46,fontWeight:800,color:C.pink,marginBottom:22}}>단열층</div><div style={{height:144,background:'#E9A0BD',border:'3px solid #C86A92',borderRadius:8}}/><div style={{fontSize:37,fontWeight:700,marginTop:22}}>열의 이동을 줄임</div></div>
   <div style={{width:400,textAlign:'center'}}><div style={{fontSize:46,fontWeight:800,color:C.blue,marginBottom:22}}>방수층</div><div style={{height:144,display:'flex',alignItems:'center'}}><div style={{width:'100%',height:26,background:C.blue,borderRadius:5}}/></div><div style={{fontSize:37,fontWeight:700,marginTop:22}}>물의 유입을 막음</div></div>
  </div>
  <svg width="888" height="145" viewBox="0 0 888 145"><path d="M210 15V90H678V15M444 90V140" stroke="#A5ADBA" strokeWidth="4" strokeDasharray="10 12" fill="none"/></svg>
  <div style={{height:150,background:'#D9DFE9',border:'2px solid #BAC2D0',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:43,fontWeight:700}}>건축 구조</div>
  <div style={{marginTop:26,fontSize:28,textAlign:'center',color:C.sub}}>배치 순서·두께·시공법을 나타내지 않습니다</div>
 </div><Note top={1370}>개념도 · 실제 구성은 공법별 상이</Note><Caption n={3}/></>;
};
const Scene=({n}:{n:number})=><AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD}}>
 {[0,1,4].includes(n)?<Photo n={n}/>:n===2?<Comparison/>:<Roles/>}
 <Audio src={staticFile(`assets/audio/scene0${n+1}-${n===4?'v6':n===0?'v3':'v1'}.mp3`)}/>
</AbsoluteFill>;
const Film=()=> <AbsoluteFill>{DURATIONS.map((d,n)=><Sequence key={n} from={DURATIONS.slice(0,n).reduce((a,b)=>a+b,0)} durationInFrames={d}><Scene n={n}/></Sequence>)}<Sequence from={BODY_FRAMES} durationInFrames={ENDING_FRAMES}><Ending/></Sequence></AbsoluteFill>;
const Root=()=> <Composition id="XpsWaterproofV6" component={Film} durationInFrames={BODY_FRAMES+ENDING_FRAMES} fps={FPS} width={1080} height={1920}/>;
registerRoot(Root);
