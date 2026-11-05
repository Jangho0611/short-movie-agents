import React from 'react';
import {AbsoluteFill,Img,Still,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
const blue='#315E72',ink='#343A38';
const P=({x,y,children,size=39,color=ink}:{x:number,y:number,children:React.ReactNode,size?:number,color?:string})=><text x={x} y={y} fill={color} fontSize={size} fontWeight={600}>{children}</text>;
function Frame(){return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#191917'}}>
<Img src={staticFile('assets/images/pocket-handle-cutaway-v4.png')} style={{width:'100%',height:'100%'}}/>
<div style={{position:'absolute',left:0,top:0,width:'100%',height:350,background:'linear-gradient(#F7F4EE 55%, #F7F4EE00)'}}/>
<div style={{position:'absolute',left:86,top:88,fontSize:72,fontWeight:800,lineHeight:1.2,letterSpacing:-2}}>보강이 있어도<br/>위치 확인</div>
<div style={{position:'absolute',left:88,top:277,width:72,height:6,background:'#F6D542'}}/>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
<defs><pattern id="check" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="24" stroke="#797C72" strokeWidth="2" opacity=".32"/></pattern></defs>
<rect x="106" y="389" width="304" height="1215" rx="24" fill="none" stroke={blue} strokeWidth="4" strokeDasharray="18 12"/>
<path d="M410 510H535" stroke={blue} strokeWidth="3" fill="none"/>
<P x={548} y={472} color={blue}>손잡이</P><P x={548} y={524} color={blue}>가공·고정 조건</P><P x={548} y={573} color={blue} size={32}>확인 영역</P>
<rect x="548" y="805" width="398" height="370" rx="24" fill="#F7F4EE" fillOpacity=".82"/>
<rect x="548" y="805" width="398" height="370" rx="24" fill="url(#check)" stroke="#697064" strokeWidth="3" strokeDasharray="3 10"/>
<rect x="570" y="881" width="350" height="172" rx="8" fill="#F7F4EE" fillOpacity=".95"/>
<P x={590} y={940}>문짝 보강 조건</P><P x={590} y={996} size={34}>확인 영역</P>
<path d="M410 1025H480V990H548 M422 1015l-12 10 12 10 M536 980l12 10-12 10" fill="none" stroke={blue} strokeWidth="3"/>
<P x={548} y={1265} size={36}>같은 기준 위치로</P><P x={548} y={1317} size={36}>함께 대조</P>
<P x={548} y={1415} size={30}>표시는 확인 범위입니다</P><P x={548} y={1460} size={30}>실제 보강 위치가 아닙니다</P>
</svg>
<div style={{position:'absolute',left:0,bottom:0,width:'100%',height:260,background:'linear-gradient(#F7F4EE00, #F7F4EE 40%)'}}/>
<div style={{position:'absolute',left:86,top:1750,fontSize:31,color:'#50534E',lineHeight:1.5}}>내부 구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Scene03ConceptOverlayV4" component={Frame} width={1080} height={1920}/>);
