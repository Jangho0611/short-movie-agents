import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const gold='#D5AC40', ink='#272925';
const Crop=({name,y,sx,sy,sw,sh,w,h}:{name:string,y:number,sx:number,sy:number,sw:number,sh:number,w:number,h:number})=>{
 const scale=920/sw;
 return <div style={{position:'absolute',left:80,top:y,width:920,height:sh*scale,overflow:'hidden'}}><Img src={staticFile('assets/images/'+name+'.png')} style={{position:'absolute',width:w*scale,height:h*scale,left:-sx*scale,top:-sy*scale}}/></div>
};
const Label=({y,n,children}:{y:number,n:string,children:React.ReactNode})=><div style={{position:'absolute',left:104,top:y,display:'flex',alignItems:'center',gap:19,fontSize:39,fontWeight:600}}><b style={{borderBottom:'5px solid '+gold,fontSize:32}}>{n}</b>{children}</div>;
const Comparison=()=> <AbsoluteFill style={{background:'#F6F3EC',color:ink,fontFamily:PRETENDARD}}>
<div style={{position:'absolute',left:102,top:255,fontWeight:800,fontSize:68,lineHeight:1.12,letterSpacing:-2}}>설치할 자리와<br/>손볼 경로는 다릅니다</div>
<Label y={452} n="01">철물이 들어갈 자리</Label>
<Crop y={520} name="scene01-before-ai-v3-candidate" sx={0} sy={535} sw={941} sh={435} w={941} h={1672}/>
<Label y={972} n="02">마감 후에도 손볼 수 있을까?</Label>
<Crop y={1040} name="new-scene02-finished-v3-candidate" sx={38} sy={450} sw={940} sh={355} w={1080} h={1920}/>
<div style={{position:'absolute',left:103,top:1410,fontSize:47,fontWeight:800,lineHeight:1.18,letterSpacing:-1}}>손과 공구가 닿을까?<br/>부품을 꺼낼 수 있을까?</div>
<div style={{position:'absolute',left:105,top:1545,fontSize:30,color:'#53544C'}}>서로 다른 구조 예시 · 제품별 방법 확인</div>
</AbsoluteFill>;
registerRoot(()=> <Still id="RealComparison" width={1080} height={1920} component={Comparison}/>);
