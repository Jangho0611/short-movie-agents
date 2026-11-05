import React from 'react';
import {AbsoluteFill,Still,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
const ink='#29332F',muted='#626C66',accent='#F6D542';
function Frame(){return <AbsoluteFill style={{background:'#F7F4EE',fontFamily:PRETENDARD,color:ink}}>
<div style={{position:'absolute',left:80,top:105,fontSize:70,fontWeight:800,lineHeight:1.27,letterSpacing:-2}}>손잡이 설치 위치,<br/>안쪽부터 확인!</div>
<div style={{position:'absolute',left:84,top:310,width:76,height:6,background:accent}}/>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}>
<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 1L8 5L0 9" fill="none" stroke={ink} strokeWidth="1.6"/></marker></defs>
<text x="80" y="450" fill={muted} fontSize="32" fontWeight="500">손잡이 주변 확대 · 옆에서 본 개념 단면</text>
{/* Continuous neutral field represents unspecified interior, not an empty core or reinforcement. */}
<rect x="350" y="600" width="460" height="820" fill="#E8E7E0"/>
<path d="M350 600H810 M350 1420H810" stroke="#A1A69F" strokeWidth="2" strokeDasharray="8 9"/>
<rect x="322" y="600" width="28" height="820" fill="#8A938A"/>
<rect x="810" y="600" width="28" height="820" fill="#8A938A"/>
<text x="335" y="552" textAnchor="middle" fill={ink} fontSize="35" fontWeight="600">앞면</text>
<text x="824" y="552" textAnchor="middle" fill={ink} fontSize="35" fontWeight="600">뒷면</text>
<text x="580" y="710" textAnchor="middle" fill={muted} fontSize="36" fontWeight="600">문짝 내부</text>
<text x="580" y="761" textAnchor="middle" fill={muted} fontSize="29">심재·보강 배치는 생략</text>
{/* Location marker only. Not a handle body, pocket cut or mounting interface. */}
<path d="M336 870V1090" stroke={accent} strokeWidth="30"/>
<path d="M301 870H283V1090H301" stroke={ink} strokeWidth="4" fill="none"/>
<text x="80" y="820" fill={ink} fontSize="39" fontWeight="600">손잡이</text>
<text x="80" y="872" fill={ink} fontSize="39" fontWeight="600">설치 예정 위치</text>
<path d="M210 900L283 955" stroke={ink} strokeWidth="3" fill="none"/>
<circle cx="336" cy="980" r="10" fill={ink}/>
<path d="M360 980H625" stroke={ink} strokeWidth="5" fill="none" markerEnd="url(#arrow)"/>
<text x="580" y="1090" textAnchor="middle" fill={ink} fontSize="40" fontWeight="600">이 위치의 내부 조건</text>
<text x="580" y="1151" textAnchor="middle" fill={ink} fontSize="40" fontWeight="800">보강 필요 여부 확인</text>
<text x="580" y="1330" textAnchor="middle" fill={muted} fontSize="28">화살표 = 확인 방향 · 가공 방향 아님</text>
<text x="580" y="1490" textAnchor="middle" fill={muted} fontSize="30">실제 두께·타공·보강재를 나타내지 않습니다</text>
</svg>
<div style={{position:'absolute',left:80,bottom:123,fontSize:31,fontWeight:500,color:muted}}>내부 구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Scene03SectionConceptV1" component={Frame} width={1080} height={1920}/>);
