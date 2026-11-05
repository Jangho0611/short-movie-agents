import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from './fonts';
const bg='#F7F4EE',blue='#386A82',muted='#65645E';
const ids=['s02-01-exterior','s02-02-position','s02-03-conditions','s03-01-internal-check','s03-02-location-check','s04-01-basic-check','s04-02-lock-example','s04-03-final-check'];
const notes=['실제 제품 사진 · 외형 확인','점선은 위치 설명용 · 타공선 아님','가공 규격과 고정 방법은 별도 확인','내부 구조는 아직 확인되지 않았습니다','표시 영역은 보강재의 실제 위치가 아닙니다','제품에 따라 가공 조건이 다릅니다','기본형과 다른 제품의 독립된 설치 사례','철물 자료와 문짝 조건을 함께 대조'];
const img=(n:string)=>staticFile('assets/images/domus-'+n+'-v3.jpg');
const box=(left:number,top:number,extra:any={})=>({position:'absolute' as const,left,top,...extra});
function Label({x,y,children}:{x:number,y:number,children:React.ReactNode}){return <text x={x} y={y} fontSize={30} fill={blue} fontWeight={600}>{children}</text>}
function Door({s}:{s:number}){return <>
<svg width="1080" height="1920" style={box(0,0)}>
<rect x="160" y="540" width="520" height="880" rx="5" fill="#EDEAE3" stroke="#A9A59B" strokeWidth="2"/><path d="M680 540h18v880h-18" fill="#D8D2C8"/>
{s>0&&<rect x="302" y="622" width="286" height="716" rx="24" stroke={blue} strokeWidth="3" strokeDasharray="13 10" fill="none"/>}
{s>=3?<><ellipse cx="445" cy="982" rx="210" ry="375" fill={blue} fillOpacity=".035" stroke={blue} strokeWidth="3" strokeDasharray="3 12"/><path d="M650 825h100v-80" fill="none" stroke={blue} strokeWidth="2"/><Label x={728} y={688}>내부 조건</Label><Label x={728} y={730}>확인 영역</Label><text x="735" y="806" fontSize="65" fill={blue}>?</text></>:<><path d="M588 690h155v-35" stroke={blue} strokeWidth="2" fill="none"/><Label x={720} y={598}>손잡이</Label><Label x={720} y={640}>{s===0?'실제 사진':'예정 위치'}</Label></>}
{s>=4&&<><circle cx="590" cy="1170" r="52" fill={bg} stroke={blue} strokeWidth="3"/><text x="590" y="1186" textAnchor="middle" fill={blue} fontSize="46">?</text><path d="M642 1170h90v-160" stroke={blue} strokeWidth="2" fill="none"/><Label x={730} y={918}>가공 후</Label><Label x={730} y={961}>지지 조건</Label><Label x={730} y={1004}>확인</Label></>}
<text x="160" y="1473" fontSize="28" fill={muted}>문짝·설치 위치는 개념 배치입니다</text>
</svg>
<div style={box(330,650,{width:230,height:660,overflow:'hidden',borderRadius:4})}><Img src={img('CIS_3455')} style={box(-795,-220,{width:1800,maxWidth:'none'})}/></div>
{s===0&&<div style={box(728,960,{fontSize:31,lineHeight:1.6})}>외형 치수<br/><b>37 × 170 mm</b><div style={{fontSize:26,color:muted}}>타공 치수 아님</div></div>}
{s===2&&<div style={box(720,900,{fontSize:31,lineHeight:1.6,color:blue})}>가공 규격 ?<br/>고정 방법 ?<div style={{fontSize:26,color:muted,marginTop:16}}>모델별 확인</div></div>}
</>}
function Lock({final}:{final:boolean}){return <>
<div style={box(94,535,{fontSize:34,fontWeight:800,color:blue})}>잠금형 슬라이딩 도어락 사례</div><div style={box(94,590,{fontSize:28,color:muted})}>DOMUS DSL140NI · 공식 설치도</div>
<div style={box(94,650,{width:892,height:540,background:'white',overflow:'hidden',border:'1px solid #ddd'})}><Img src={img('DSL140-1-4')} style={box(-40,-132,{width:980})}/></div>
<div style={box(94,1220,{width:892,display:'flex',justifyContent:'space-between',fontSize:31,color:blue,fontWeight:600})}><span>① 문 면 가공</span><span>② 측면 잠금장치</span><span>③ 고정 위치</span></div>
{!final?<div style={box(94,1290,{width:892,height:210,background:'white',overflow:'hidden'})}><Img src={img('DSL140-1-4')} style={box(40,-510,{width:600})}/><div style={box(590,48,{fontSize:29,lineHeight:1.5})}>공식 타공도<br/><span style={{color:muted,fontSize:25}}>기본형에 적용 금지</span></div></div>:<div style={box(94,1300,{width:892,fontSize:35,fontWeight:600,lineHeight:1.65,borderTop:'2px solid #D8D2C8',paddingTop:20})}>철물 가공도 ↔ 문짝 내부 조건<br/><span style={{fontSize:29,color:muted}}>모델별로 문짝 제작업체와 확인</span></div>}
</>}
function Frame({stage:s}:{stage:number}){const scene=s<3?2:s<5?3:4;return <AbsoluteFill style={{background:bg,color:'#191917',fontFamily:PRETENDARD}}>
<div style={box(94,150,{fontSize:27,color:muted})}>문도사의 그것이 알고싶도어</div><div style={{...box(0,150,{fontSize:26,color:muted}),left:'auto',right:94}}>0{scene} / 05</div><div style={box(94,210,{width:72,height:6,background:'#F6D542'})}/>
<div style={box(94,260,{fontSize:scene===4?60:76,fontWeight:800,lineHeight:1.22,letterSpacing:-2})}>{scene===2?<>들어갈 공간 /<br/>고정할 구조</>:scene===3?<>보강이 있어도<br/>위치 확인</>:<>가공 위치 + 고정 조건<br/>+ 내부 보강</>}</div>
<div style={box(94,455,{fontSize:28,color:muted})}>{s<6?'기본형 오목이손잡이 · DOMUS SH30NI':'제품에 따라 가공·고정 조건이 다릅니다'}</div>
{s<6?<Door s={s}/>:<Lock final={s===7}/>}
<div style={box(94,1535,{width:892,borderTop:'2px solid #D8D2C8',paddingTop:25,fontSize:30,fontWeight:600,lineHeight:1.45})}>{notes[s]}</div>
<div style={box(94,1650,{width:892,fontSize:28,color:muted,lineHeight:1.6})}>구조 설명용 개념도 · 제품별 시공 조건 상이</div>
<div style={box(94,1730,{width:892,fontSize:24,color:muted,lineHeight:1.5})}>출처: DOMUS 공식 {s<6?'SH30NI 제품 사진·외형도':'DSL140 설치 설명서·타공도'}<br/>미확인 구조 재현 없음 · 설치 적합성 및 강도 검증 아님</div>
</AbsoluteFill>}
registerRoot(()=> <>{ids.map((id,stage)=><Still key={id} id={id+'-v3'} component={Frame} width={1080} height={1920} defaultProps={{stage}}/>)}</>);
