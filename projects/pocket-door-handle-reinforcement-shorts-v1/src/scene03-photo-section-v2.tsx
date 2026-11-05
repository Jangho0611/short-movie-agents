import React from 'react';
import {AbsoluteFill,Img,Still,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
const ink='#29332F',muted='#626C66';
function Frame(){return <AbsoluteFill style={{background:'#F7F4EE',fontFamily:PRETENDARD,color:ink}}>
<div style={{position:'absolute',left:80,top:105,fontSize:72,fontWeight:800,lineHeight:1.25,letterSpacing:-2}}>손잡이 위치,<br/>내부 보강도 확인!</div>
<div style={{position:'absolute',left:84,top:330,fontSize:39,fontWeight:600}}>문짝 제작 전 확인</div>
<div style={{position:'absolute',left:84,top:405,width:76,height:6,background:'#F6D542'}}/>
<div style={{position:'absolute',left:70,top:570,width:470,height:1110,overflow:'hidden',borderRadius:4}}>
{/* Uniform scale and background-only crop. No filter, retouch, recolor or geometric warp. */}
<Img src={staticFile('assets/images/domus-CIS_3455-v3.jpg')} style={{position:'absolute',width:2940,height:1705.2,maxWidth:'none',left:-1247.25,top:-327}}/>
</div>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
<text x="70" y="525" fill={muted} fontSize="32" fontWeight="600">실제 제품 사진</text>
<text x="650" y="525" fill={muted} fontSize="32" fontWeight="600">교육용 단면</text>
<rect x="670" y="700" width="260" height="820" fill="#E8E7E0"/>
<rect x="650" y="700" width="20" height="820" fill="#8A938A"/>
<rect x="930" y="700" width="20" height="820" fill="#8A938A"/>
<text x="660" y="657" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">앞면</text>
<text x="940" y="657" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">뒷면</text>
<text x="800" y="820" textAnchor="middle" fill={muted} fontSize="34" fontWeight="600">문짝 내부</text>
{/* Relation line is not a tool path, physical member, mounting dimension or installation step. */}
<path d="M660 1030V1170" stroke="#F6D542" strokeWidth="20"/>
<path d="M457 1100H725" stroke={ink} strokeWidth="3" fill="none"/>
<circle cx="457" cy="1100" r="5" fill={ink}/>
<circle cx="660" cy="1100" r="7" fill={ink}/>
<text x="552" y="1060" textAnchor="middle" fill={muted} fontSize="28" fontWeight="600">설치 위치</text>
<text x="800" y="1240" textAnchor="middle" fill={ink} fontSize="37" fontWeight="600">보강 필요</text>
<text x="800" y="1295" textAnchor="middle" fill={ink} fontSize="37" fontWeight="800">여부 확인</text>
<text x="800" y="1580" textAnchor="middle" fill={muted} fontSize="27">실제 시공도 아님</text>
<text x="70" y="1730" fill={muted} fontSize="30" fontWeight="600">DOMUS SH30NI</text>
</svg>
<div style={{position:'absolute',left:80,bottom:92,fontSize:32,fontWeight:500,color:muted}}>구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Scene03PhotoSectionV2" component={Frame} width={1080} height={1920}/>);
