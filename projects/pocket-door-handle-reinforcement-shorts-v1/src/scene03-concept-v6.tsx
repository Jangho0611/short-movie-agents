import React from 'react';
import {AbsoluteFill,Img,Still,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
function Frame(){return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#292D2B'}}>
<Img src={staticFile('assets/images/pocket-handle-cutaway-v6.png')} style={{width:'100%',height:'100%'}}/>
<div style={{position:'absolute',inset:'0 0 auto',height:330,background:'linear-gradient(#F7F4EE 35%,#F7F4EE00)'}}/>
<div style={{position:'absolute',left:82,top:100,fontSize:72,fontWeight:800,lineHeight:1.24,letterSpacing:-2}}>손잡이 위치,<br/>내부 보강도 확인!</div>
<div style={{position:'absolute',left:86,top:296,width:76,height:6,background:'#F6D542'}}/>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
<path d="M643 961L738 886H935" stroke="#505B58" strokeWidth="3.5" fill="none"/>
<circle cx="643" cy="961" r="7" fill="#F6D542" stroke="#505B58" strokeWidth="2"/>
<text x="714" y="795" fill="#353C39" fontSize="40" fontWeight="600">이 위치의</text>
<text x="714" y="850" fill="#353C39" fontSize="40" fontWeight="600">보강 필요 여부</text>
</svg>
<div style={{position:'absolute',bottom:0,width:'100%',height:220,background:'linear-gradient(#F7F4EE00,#F7F4EE 65%)'}}/>
<div style={{position:'absolute',left:82,bottom:103,fontSize:32,fontWeight:500,color:'#444B47'}}>내부 구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Scene03ConceptV6" component={Frame} width={1080} height={1920}/>);
