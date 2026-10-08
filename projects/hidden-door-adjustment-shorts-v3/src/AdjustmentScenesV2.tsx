import React from 'react';
import {AbsoluteFill, Audio, Composition, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './approved/fonts';

const C={paper:'#F5F3ED',ink:'#20372E',muted:'#6F776F',line:'#D6D9D0',accent:'#D56844',green:'#477660'};
export const SCENES=[
 {id:1,frames:164,audio:'scene01-tts-v9.mp3',title:['히든도어 설치 후','단차가 생겼다면?'],eyebrow:'01 / 설치 후 확인'},
 {id:2,frames:200,audio:'scene02-tts-v8.mp3',title:['먼저 확인할 것','적용된 경첩 종류'],eyebrow:'02 / 경첩 확인'},
 {id:3,frames:224,audio:'scene03-tts-v6.mp3',title:['슬림 히든경첩','3D 미세 조절'],eyebrow:'03 / 문짝 위치 조정'},
 {id:4,frames:255,audio:'scene04-tts-v9.mp3',title:['조절형 캐치','닫힌 문짝의 단차 조정'],eyebrow:'04 / 문을 닫고 확인'},
 {id:5,frames:253,audio:'scene05-tts-v8.mp3',title:['단차 없이','깔끔한 한 면'],eyebrow:'05 / 최종 면 맞춤'},
];
const fade=(f:number,start:number)=>interpolate(f,[start,start+10],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
const Photo=({name,style}:{name:string;style:React.CSSProperties})=><Img src={staticFile('images/'+name)} style={{objectFit:'contain',...style}}/>;
function Surface(){
 // Exact profile paths from episode 2 approved v8 Rebate(). Door translated
 // 5 SVG units outward only: 7-unit shoulder clearance becomes 2 (no overlap).
 // This is an unscaled structural schematic; 5 units are NOT millimeters.
 return <svg width="865" height="575" viewBox="0 0 865 575">
  <g transform="translate(0,5)">
   <path d="M70 230H560V405H440V440H70Z" fill="#DFE6DF" stroke={C.green} strokeWidth="3"/>
   <path d="M560 405H440V440" fill="none" stroke={C.accent} strokeWidth="3" strokeLinejoin="round"/>
   <text x="155" y="310" fill={C.ink} fontSize="38" fontWeight="600">문짝</text>
  </g>
  <path d="M575 190H790V412H575Z" fill="#CDD0C8" fillOpacity="0.45" stroke="#A9AFA6" strokeWidth="1.5"/>
  <text x="608" y="270" fill={C.muted} fontSize="30">벽체</text>
  <path d="M447 412H790V440H447Z" fill="#D6BB95" stroke="#85765E" strokeWidth="2"/>
  <path d="M735 427L795 477H680" fill="none" stroke="#B28D58" strokeWidth="2"/>
  <text x="610" y="515" fill="#85765E" fontSize="29" fontWeight="600">벽 마감면</text>
  <path d="M70 440H810" fill="none" stroke={C.green} strokeWidth="2" strokeDasharray="8 7"/>
  <path d="M70 445H440" fill="none" stroke={C.accent} strokeWidth="3"/>
  <path d="M290 158H485L505 410" fill="none" stroke={C.accent} strokeWidth="2"/>
  <text x="72" y="170" fill={C.accent} fontSize="32" fontWeight="600">어깨가공</text>
  <circle cx="443.5" cy="443" r="35" fill="none" stroke={C.accent} strokeWidth="3"/>
  <path d="M443.5 478V512" fill="none" stroke={C.accent} strokeWidth="2"/>
  <text x="443.5" y="562" textAnchor="middle" fill={C.accent} fontSize="39" fontWeight="600">단차 발생</text>
 </svg>;
}
export function AdjustmentScene({id}:{id:number}){
 const f=useCurrentFrame(),s=SCENES[id-1];
 return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD}}>
  <div style={{position:'absolute',left:90,top:155,fontSize:27,fontWeight:600,letterSpacing:2,color:C.muted}}>대산 건축자재 · 히든도어 03</div>
  <div style={{position:'absolute',left:90,top:240,fontSize:28,color:C.accent,fontWeight:600}}>{s.eyebrow}</div>
  <div style={{position:'absolute',left:86,top:310,fontSize:69,fontWeight:800,lineHeight:1.27,letterSpacing:-2}}>{s.title.map(t=><div key={t}>{t}</div>)}</div>
  {id===1&&<>
   <div style={{position:'absolute',left:90,top:590,fontSize:30,color:C.muted}}>문을 닫았을 때, 벽과 같은 면인가요?</div>
   <div style={{position:'absolute',left:90,top:680}}><Surface/></div>
   <div style={{position:'absolute',left:90,top:1260,fontSize:25,color:C.muted}}>어깨가공 단면 개념도 · 비례 생략</div>
   <div style={{position:'absolute',left:90,top:1410,borderLeft:`5px solid ${C.accent}`,paddingLeft:28,fontSize:48,fontWeight:600,opacity:fade(f,105)}}>새로 공사해야 할까요?</div>
  </>}
  {id===2&&<>
   <div style={{position:'absolute',left:90,top:565,fontSize:30,fontWeight:600}}>목문틀 · 일반형 적용 경첩</div>
   <div style={{position:'absolute',left:90,top:635,display:'flex',gap:20}}>
    {['일반 경첩','히든경첩','슬림 히든경첩'].map((name,i)=><div key={name} style={{width:280,background:'#fff',border:`1px solid ${C.line}`,padding:'22px 12px',boxSizing:'border-box'}}>
     <Photo name={['younglim-normal-hinge.jpg','younglim-hidden-hinge.jpg','younglim-slim-hidden-hinge.jpg'][i]} style={{width:254,height:345}}/>
     <div style={{textAlign:'center',fontSize:30,fontWeight:600,marginTop:27,whiteSpace:'nowrap'}}>{name}</div>
    </div>)}
   </div>
   <div style={{position:'absolute',left:90,top:1180,width:880,borderTop:`1px solid ${C.line}`,paddingTop:30,fontSize:34,lineHeight:1.6,opacity:fade(f,72)}}>알루미늄 문틀 <span style={{color:C.muted}}>→</span> <strong>슬림 히든경첩</strong><div style={{fontSize:27,color:C.muted}}>문틀·도어 사양에 맞는 적용 제품 확인</div></div>
   <div style={{position:'absolute',left:90,top:1410,width:500,fontSize:37,lineHeight:1.5,fontWeight:600,opacity:fade(f,136)}}>경첩에 따라<br/>조절 방식이 다릅니다</div>
  </>}
  {id===3&&<>
   <div style={{position:'absolute',left:90,top:580,width:890,height:800,background:'#fff',border:`1px solid ${C.line}`}}>
    <Photo name="younglim-slim-hidden-hinge.jpg" style={{position:'absolute',left:42,top:70,width:420,height:600}}/>
    <div style={{position:'absolute',left:498,top:180,fontSize:112,fontWeight:800,color:C.green}}>3D</div>
    <div style={{position:'absolute',left:506,top:320,fontSize:41,fontWeight:600}}>조절 가능</div>
    <div style={{position:'absolute',left:506,top:435,width:330,fontSize:30,lineHeight:1.6,color:C.muted,opacity:fade(f,112)}}>문짝 위치를<br/>미세하게 맞춤</div>
    <div style={{position:'absolute',left:42,bottom:40,fontSize:28,color:C.muted}}>영림 슬림히든경첩 · 공식 제품 이미지</div>
   </div>
   <div style={{position:'absolute',left:90,top:1450,fontSize:39,fontWeight:600}}>적용된 경첩의 조절 사양 확인</div>
  </>}
  {id===4&&<>
   <div style={{position:'absolute',left:90,top:580,width:890,height:800,background:'#fff',border:`1px solid ${C.line}`}}>
    <Photo name="younglim-adjustable-catch.jpg" style={{position:'absolute',left:42,top:85,width:390,height:580}}/>
    <div style={{position:'absolute',left:465,top:160,fontSize:36,fontWeight:600}}>조절형 캐치</div>
    <div style={{position:'absolute',left:458,top:235,fontSize:97,fontWeight:800,color:C.accent,opacity:fade(f,118)}}>±3mm</div>
    <div style={{position:'absolute',left:470,top:395,width:360,fontSize:32,lineHeight:1.6}}>벽과 문짝 사이<br/>단차 조정</div>
    <div style={{position:'absolute',left:42,bottom:38,fontSize:26,color:C.muted}}>영림 알루미늄 문틀 · 일반형 옵션 기준</div>
   </div>
   <div style={{position:'absolute',left:90,top:1450,fontSize:38,fontWeight:600}}>문을 닫은 상태에서 면을 확인</div>
  </>}
  {id===5&&<>
   <div style={{position:'absolute',left:90,top:550,width:880,height:925,overflow:'hidden'}}><Photo name="hidden-door-finished-hero-v1.png" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'50% 48%'}}/></div>
   <div style={{position:'absolute',left:115,top:1370,background:C.paper,padding:'16px 25px',fontSize:32,fontWeight:600}}>경첩 + 캐치 <span style={{color:C.green}}>→ 최종 면 맞춤</span></div>
   <div style={{position:'absolute',left:90,top:1530,fontSize:40,fontWeight:600,opacity:fade(f,128)}}><span style={{color:C.green}}>✓</span> 벽과 문짝의 면까지 확인</div>
  </>}
  <div style={{position:'absolute',left:90,top:1700,width:880,borderTop:`1px solid ${C.line}`,paddingTop:20,fontSize:23,color:C.muted}}>{id===2?'자료: 영림 공식 카탈로그 · 목문틀 일반형 / 알루미늄 문틀':id===3?'자료: 영림 공식 카탈로그 · 슬림히든경첩':id===4?'자료: 영림 공식 카탈로그 · 조절형 캐치 ±3mm':id===5?'히든도어 · 설치 후 최종 조정':'히든도어 · 설치 후 점검'}</div>
  <Audio src={staticFile('audio/'+s.audio)}/>
 </AbsoluteFill>;
}
export const AdjustmentCompositions=()=> <>{SCENES.slice(0,2).map(s=><Composition key={s.id} id={`AdjustmentScene${s.id}`} component={AdjustmentScene} defaultProps={{id:s.id}} width={1080} height={1920} fps={30} durationInFrames={s.frames}/>)}</>;
