import React from 'react';
import {AbsoluteFill,Still,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ink='#262823', bg='#F6F3EC', gold='#D5AC40', muted='#605e55';
const Base=({dark=false,children}:{dark?:boolean,children:React.ReactNode})=><AbsoluteFill style={{fontFamily:PRETENDARD,background:dark?ink:bg,color:dark?bg:ink,letterSpacing:-1.5}}>{children}</AbsoluteFill>;
const Text=({y,size,children,color,weight=600,x=104}:{y:number,size:number,children:React.ReactNode,color?:string,weight?:number,x?:number})=><div style={{position:'absolute',left:x,top:y,fontSize:size,lineHeight:1.18,fontWeight:weight,color}}>{children}</div>;
const Tag=({children}:{children:React.ReactNode})=><Text y={266} size={34}><span style={{borderLeft:'8px solid '+gold,paddingLeft:18}}>{children}</span></Text>;
export const Hook=()=> <Base><Tag>문도사의 그것이 알고싶도어</Tag>
<Text y={694} size={75}>댐퍼 교체하려다</Text><Text y={802} size={88} weight={800}>천장 마감재 <span style={{display:"inline-block",position:"relative"}}>재철거?<i aria-hidden style={{position:"absolute",left:0,right:0,bottom:-5,height:7,background:gold}}/></span></Text>
<div style={{position:'absolute',left:108,top:1039,width:74,height:5,background:gold}}/><Text y={1079} size={35}>슬라이딩 도어 현장 사례</Text></Base>;

registerRoot(()=> <Still id="HookV2" width={1080} height={1920} component={Hook}/>);
