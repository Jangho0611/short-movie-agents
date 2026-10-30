import React from 'react';
import {AbsoluteFill,Audio,Sequence,staticFile,useCurrentFrame,interpolate} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import scenes from './timeline-v1.json';
const ink='#292925',muted='#74736b',green='#356653',line='#dadbd4';
const shades=['#d7d0c3','#d2cbbf'];
const Door=({tone=0,small=false}:{tone?:number;small?:boolean})=><svg width={small?138:300} height={small?284:620} viewBox="0 0 300 620"><rect x="10" y="8" width="280" height="604" rx="3" fill="#e9e5dc" stroke="#aaa79f" strokeWidth="3"/><rect x="27" y="22" width="246" height="576" fill={shades[tone]} stroke="#aaa79f" strokeWidth="2"/><path d="M240 302v42m0-24h-30" stroke="#646761" strokeWidth="8" strokeLinecap="round"/><path d="M32 30v560" stroke="#ffffff" opacity=".4"/></svg>;
const Chip=({children}:{children:React.ReactNode})=><div style={{border:`1px solid ${line}`,borderRadius:8,padding:'18px 24px',fontSize:30,fontWeight:600,background:'#fff',textAlign:'center'}}>{children}</div>;
const Film=({tone=0}:{tone?:number})=><svg width="310" height="340" viewBox="0 0 310 340"><path d="M55 50H255V285H55Z" fill={shades[tone]} stroke="#a7a398" strokeWidth="2"/><ellipse cx="155" cy="50" rx="100" ry="24" fill="#e6e0d6" stroke="#a7a398" strokeWidth="2"/><ellipse cx="155" cy="50" rx="75" ry="10" fill="#c1bbae"/><path d="M55 285Q155 310 255 285" fill="none" stroke="#aaa79f" strokeWidth="2"/></svg>;
const Pair=({labels,film=false}:{labels:string[];film?:boolean})=><div style={{display:'flex',gap:50,justifyContent:'center'}}>{labels.map((label,i)=><div key={label} style={{width:340,textAlign:'center'}}><Chip>{label}</Chip><div style={{marginTop:32}}>{film?<Film tone={i}/>:<Door tone={i}/>}</div></div>)}</div>;
const titles=[['같은 색상인데','왜 다를까?'],['같은 색상 번호','다른 생산 LOT'],['대량 발주에서도 가능','하지만 흔한 사례는 아님'],['추가 발주 시','기존 제품과 색차 가능'],['필름 LOT 확인','다른 로트 혼용 주의'],['같은 색상 번호라도','생산 LOT 확인']];
const eyebrow=['01 / 같은 색의 두 문짝','02 / 필름 생산 단위','03 / 발생 가능성과 빈도','04 / 추가 주문 전 확인','05 / 현장 랩핑 전 확인','06 / 기억할 한 가지'];
export const LotScene=({index}:{index:number})=>{const f=useCurrentFrame();const cue=interpolate(f,[8,20],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <AbsoluteFill style={{background:'#f6f5f1',fontFamily:PRETENDARD,color:ink,padding:'132px 80px'}}>
<Audio src={staticFile('assets/audio/'+scenes[index].file)}/>
<div style={{display:'flex',justifyContent:'space-between',fontSize:27,color:muted,fontWeight:600,borderBottom:`2px solid ${line}`,paddingBottom:28}}><span>문도사의 그것이 알고싶도어</span><span>EP.02</span></div>
<div style={{fontSize:27,color:green,marginTop:44,letterSpacing:1}}>{eyebrow[index]}</div>
<div style={{position:'absolute',top:345,left:80,right:80,height:880,display:'flex',flexDirection:'column',justifyContent:'center',gap:34}}>
{index===0&&<><Pair labels={['같은 색상 번호','같은 색상 번호']}/><div style={{textAlign:'center',fontSize:32,color:muted}}>색감은 미세하게 달라질 수 있습니다</div></>}
{index===1&&<><Chip>동일한 필름 품번</Chip><Pair film labels={['생산 LOT A · 예시','생산 LOT B · 예시']}/><div style={{textAlign:'center',fontSize:36,color:green,opacity:cue}}>생산 단위가 다르면, 색차 가능</div></>}
{index===2&&<><div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap'}}>{Array.from({length:10},(_,i)=><Door key={i} small/>)}</div><div style={{padding:28,borderLeft:`5px solid ${green}`,fontSize:34,lineHeight:1.5,background:'#fff'}}>로트가 바뀌는 일부 상황에서 가능<br/><span style={{color:muted}}>일반적인 발주에서 흔한 경우는 아님</span></div></>}
{index===3&&<><Pair labels={['기존 설치 제품','나중에 추가 주문']}/><div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24,fontSize:32,color:green}}><span>생산 시점</span><span>→</span><span>필름 LOT 차이 가능</span></div></>}
{index===4&&<><Pair film labels={['현장에 남은 필름','새로 구매한 필름']}/><div style={{display:'flex',justifyContent:'center',gap:50}}><Chip>LOT A · 예시</Chip><Chip>LOT B · 예시</Chip></div><div style={{borderTop:`2px solid ${line}`,paddingTop:35,textAlign:'center',fontSize:38,fontWeight:600,color:green,opacity:cue}}>서로 다른 LOT → 같은 면에 혼용 주의</div></>}
{index===5&&<><div style={{display:'flex',justifyContent:'center',gap:32}}><Door/><Door tone={1}/></div><div style={{background:green,color:'#fff',padding:30,textAlign:'center',fontSize:38,fontWeight:600}}>색상 번호 + 생산 LOT</div></>}
</div>
<div style={{position:'absolute',top:1290,left:80,right:80,borderTop:`2px solid ${line}`,paddingTop:40,fontSize:57,fontWeight:800,lineHeight:1.3,letterSpacing:-1.8}}>{titles[index][0]}<br/><span style={{color:green}}>{titles[index][1]}</span></div>
<div style={{position:'absolute',bottom:240,left:80,right:80,fontSize:24,color:muted,lineHeight:1.5}}>설명용 그래픽 · 실제 납품 사례 및 색차 측정값 아님<br/>{[1,4].includes(index)?'LOT A/B는 설명용 예시이며 제조사 생산번호가 아닙니다.':'비교 대상의 크기·각도·표현 조건을 동일하게 구성했습니다.'}</div>
</AbsoluteFill>};
export const LotPreview=()=>{let start=0;return <AbsoluteFill>{scenes.map((s,i)=>{const from=start;start+=s.frames;return <Sequence key={s.scene} from={from} durationInFrames={s.frames}><LotScene index={i}/></Sequence>})}<Sequence from={start} durationInFrames={170}><DaesanEnding/></Sequence></AbsoluteFill>};
