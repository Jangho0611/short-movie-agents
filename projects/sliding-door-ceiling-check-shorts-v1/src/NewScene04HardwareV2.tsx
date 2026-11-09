import React from 'react';
import {AbsoluteFill,Still,Img,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ink='#262823', bg='#F6F3EC', gold='#D5AC40', muted='#605e55';
const Base=({dark=false,children}:{dark?:boolean,children:React.ReactNode})=><AbsoluteFill style={{fontFamily:PRETENDARD,background:dark?ink:bg,color:dark?bg:ink,letterSpacing:-1.5}}>{children}</AbsoluteFill>;
const Text=({y,size,children,color,weight=600,x=104}:{y:number,size:number,children:React.ReactNode,color?:string,weight?:number,x?:number})=><div style={{position:'absolute',left:x,top:y,fontSize:size,lineHeight:1.18,fontWeight:weight,color}}>{children}</div>;
const Tag=({children}:{children:React.ReactNode})=><Text y={266} size={34}><span style={{borderLeft:'8px solid '+gold,paddingLeft:18}}>{children}</span></Text>;
const HardwarePhoto=()=> <div style={{position:'absolute',left:70,top:530,width:940,height:510,overflow:'hidden'}}><Img src={staticFile('assets/images/scene01-before-ai-v3-candidate.png')} style={{position:'absolute',left:-30*5/3,top:-627*5/3,width:941*5/3,height:1672*5/3}}/>
<svg width="940" height="510" style={{position:'absolute',inset:0}}>{[{name:'레일',x:676,y:32,points:'733,90 733,187',cx:733,cy:187},{name:'호차',x:52,y:322,points:'164,332 187,313 255,252',cx:255,cy:252}].map(a=><g key={a.name}><polyline points={a.points} fill="none" stroke={gold} strokeWidth="4"/><circle cx={a.cx} cy={a.cy} r="6" fill={gold} stroke={ink} strokeWidth="2"/><rect x={a.x} y={a.y} width="114" height="58" rx="6" fill={ink}/><text x={a.x+57} y={a.y+42} textAnchor="middle" fill={bg} fontSize="36" fontWeight="600">{a.name}</text></g>)}</svg></div>;
export const Hardware=()=> <Base><Tag>슬라이딩 도어 상부 철물</Tag><Text y={365} size={65} weight={800}>댐퍼만의 문제가 아닙니다</Text><HardwarePhoto/>
<Text y={1072} size={38}>호차는 문짝을 지지하고 레일을 따라 움직입니다.</Text>
<Text y={1191} size={43} weight={800}>댐퍼는 닫히는 속도를 줄여줍니다</Text><Text y={1265} size={35} color={muted}>제품에 따라 호차와 일체형일 수 있습니다.</Text>
<Text y={1413} size={48} weight={800}>상태에 따라 점검·조정·교체</Text><Text y={1514} size={29} color={muted}>구조 예시 · 제품별 철물 구성 상이</Text></Base>;

registerRoot(()=> <Still id="HardwareV2" width={1080} height={1920} component={Hardware}/>);
