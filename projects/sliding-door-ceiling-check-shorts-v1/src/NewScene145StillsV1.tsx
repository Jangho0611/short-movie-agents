import React from 'react';
import {AbsoluteFill,Still,Img,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ink='#262823', bg='#F6F3EC', gold='#D5AC40', muted='#605e55';
const Base=({dark=false,children}:{dark?:boolean,children:React.ReactNode})=><AbsoluteFill style={{fontFamily:PRETENDARD,background:dark?ink:bg,color:dark?bg:ink,letterSpacing:-1.5}}>{children}</AbsoluteFill>;
const Text=({y,size,children,color,weight=600,x=104}:{y:number,size:number,children:React.ReactNode,color?:string,weight?:number,x?:number})=><div style={{position:'absolute',left:x,top:y,fontSize:size,lineHeight:1.18,fontWeight:weight,color}}>{children}</div>;
const Tag=({children}:{children:React.ReactNode})=><Text y={266} size={34}><span style={{borderLeft:'8px solid '+gold,paddingLeft:18}}>{children}</span></Text>;
export const Hook=()=> <Base dark><Tag>문도사의 그것이 알고싶도어</Tag>
<Text y={694} size={75}>댐퍼 교체하려다</Text><Text y={802} size={88} weight={800}>천장 마감재 <span style={{color:gold}}>재철거?</span></Text>
<div style={{position:'absolute',left:108,top:1039,width:74,height:5,background:gold}}/><Text y={1079} size={35}>슬라이딩 도어 현장 사례</Text></Base>;
const HardwarePhoto=()=> <div style={{position:'absolute',left:70,top:530,width:940,height:510,overflow:'hidden'}}><Img src={staticFile('assets/images/scene01-before-ai-v3-candidate.png')} style={{position:'absolute',left:0,top:-545,width:941,height:1672}}/>
<svg width="940" height="510" style={{position:'absolute',inset:0}}>{[{name:'레일',x:549,y:85,points:'600,137 600,167 590,212',cx:590,cy:212},{name:'호차',x:114,y:370,points:'165,370 165,309 183,233',cx:183,cy:233}].map(a=><g key={a.name}><polyline points={a.points} fill="none" stroke={gold} strokeWidth="4"/><circle cx={a.cx} cy={a.cy} r="6" fill={gold} stroke={ink} strokeWidth="2"/><rect x={a.x} y={a.y} width="102" height="52" rx="6" fill={ink}/><text x={a.x+51} y={a.y+37} textAnchor="middle" fill={bg} fontSize="32" fontWeight="600">{a.name}</text></g>)}</svg></div>;
export const Hardware=()=> <Base><Tag>슬라이딩 도어 상부 철물</Tag><Text y={365} size={65} weight={800}>댐퍼만의 문제가 아닙니다</Text><HardwarePhoto/>
<Text y={1072} size={38}>호차는 문짝을 지지하고 레일을 따라 움직입니다.</Text>
<Text y={1191} size={43} weight={800}>댐퍼는 닫히는 속도를 줄여줍니다</Text><Text y={1265} size={35} color={muted}>제품에 따라 호차와 일체형일 수 있습니다.</Text>
<Text y={1413} size={48} weight={800}>상태에 따라 점검·조정·교체</Text><Text y={1514} size={29} color={muted}>구조 예시 · 제품별 철물 구성 상이</Text></Base>;
const Step=({n,y,title,detail}:{n:string,y:number,title:string,detail:string})=><><div style={{position:'absolute',left:104,top:y-24,width:827,borderTop:'2px solid #d5d0c5'}}/><Text y={y+5} size={31} color={muted}>{n}</Text><Text x={185} y={y} size={50} weight={800}>{title}</Text><Text x={185} y={y+68} size={36} color={muted}>{detail}</Text></>;
export const Prevention=()=> <Base><Tag>슬라이딩 도어 시공 전</Tag><Text y={377} size={70} weight={800}>천장 마감 전,<br/>이것부터 확인</Text>
<Step n="01" y={649} title="철물 설치도 확인" detail="사용할 제품의 도면을 보세요."/>
<Step n="02" y={843} title="유지보수 방법 확인" detail="제조사의 점검·교체 방법을 확인하세요."/>
<Step n="03" y={1037} title="도어업체·목공팀 사전 협의" detail="접근 경로와 천장 마감 방식을 정하세요."/>
<div style={{position:'absolute',left:105,top:1290,width:74,height:7,background:gold}}/><Text y={1330} size={56} weight={800}>설치할 수 있는지뿐 아니라<br/>나중에 손볼 수 있는지까지</Text></Base>;
registerRoot(()=> <>{[['Hook',Hook],['Hardware',Hardware],['Prevention',Prevention]].map(([id,C])=><Still key={String(id)} id={String(id)} width={1080} height={1920} component={C as React.FC}/>)}</>);
