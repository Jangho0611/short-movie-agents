import React from 'react';
import {AbsoluteFill,Img,Composition,staticFile,registerRoot,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './fonts';
const ink='#29332F',muted='#626C66';
function Frame(){const f=useCurrentFrame();
const ease=(a:number,b:number)=>{const t=Math.min(1,Math.max(0,(f-a)/(b-a)));return t*t*(3-2*t)};
const approach=ease(18,44),reveal=ease(45,76),mark=ease(24,38),connect=ease(76,88),word=ease(88,98);
const photoX=305+235*(1-reveal),scale=2.25+.20*approach,photoWidth=560-90*reveal;
return <AbsoluteFill style={{background:'#F7F4EE',fontFamily:PRETENDARD,color:ink}}>
<div style={{position:'absolute',left:80,top:105,fontSize:72,fontWeight:800,lineHeight:1.25,letterSpacing:-2}}>손잡이 위치,<br/>내부 보강도 확인!</div>
<div style={{position:'absolute',left:84,top:330,fontSize:39,fontWeight:600}}>문짝 제작 전 확인</div>
<div style={{position:'absolute',left:84,top:405,width:76,height:6,background:'#F6D542'}}/>
<div style={{position:'absolute',left:photoX-photoWidth/2,top:570,width:photoWidth,height:1110,overflow:'hidden',borderRadius:4}}>
{/* Uniform scale and background-only crop. No filter, retouch, recolor or geometric warp. */}
<Img src={staticFile('assets/images/domus-CIS_3455-v3.jpg')} style={{position:'absolute',width:1200*scale,height:696*scale,maxWidth:'none',left:photoWidth/2-605*scale,top:530-366*scale}}/>
</div>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
<text x={photoX-photoWidth/2} y="525" fill={muted} fontSize="32" fontWeight="600">실제 제품 사진</text>
<defs><clipPath id="sectionReveal" clipPathUnits="userSpaceOnUse"><rect x="0" y="0" width={650+430*reveal} height="1920"/></clipPath></defs><g opacity={reveal} clipPath="url(#sectionReveal)">
<text x="650" y="525" fill={muted} fontSize="32" fontWeight="600">교육용 단면</text>
<rect x="670" y="700" width="260" height="820" fill="#E8E7E0"/>
<rect x="650" y="700" width="20" height="820" fill="#8A938A"/>
<rect x="930" y="700" width="20" height="820" fill="#8A938A"/>
<text x="660" y="657" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">앞면</text>
<text x="940" y="657" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">뒷면</text>
<text x="800" y="820" textAnchor="middle" fill={muted} fontSize="34" fontWeight="600">문짝 내부</text>
{/* Relation line is not a tool path, physical member, mounting dimension or installation step. */}
<path d="M660 1030V1170" stroke="#F6D542" strokeWidth="20"/>
<path d={`M${photoX+152} 1100H${photoX+152+(725-photoX-152)*connect}`} opacity={connect} stroke={ink} strokeWidth="3" fill="none"/>

<circle cx="660" cy="1100" r="7" fill={ink}/>
<text opacity={connect} x="552" y="1060" textAnchor="middle" fill={muted} fontSize="28" fontWeight="600">설치 위치</text>
<text opacity={word} x="800" y="1240" textAnchor="middle" fill={ink} fontSize="37" fontWeight="600">보강 필요</text>
<text opacity={word} x="800" y="1295" textAnchor="middle" fill={ink} fontSize="37" fontWeight="800">여부 확인</text>
<text x="800" y="1580" textAnchor="middle" fill={muted} fontSize="27">실제 시공도 아님</text>
</g>
<circle cx={photoX+152} cy="1100" r="7" fill="#F6D542" opacity={mark}/>
<text x={photoX-photoWidth/2} y="1730" fill={muted} fontSize="30" fontWeight="600">DOMUS SH30NI</text>
</svg>
<div style={{position:'absolute',left:80,bottom:92,fontSize:32,fontWeight:500,color:muted}}>구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Composition durationInFrames={150} fps={30} id="Scene03MotionTestV1" component={Frame} width={1080} height={1920}/>);
