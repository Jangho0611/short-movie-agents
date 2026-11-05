import React from 'react';
import {AbsoluteFill,Img,Composition,staticFile,registerRoot,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './fonts';
const ink='#29332F',muted='#626C66';
function Frame(){const f=useCurrentFrame();
const ease=(a:number,b:number)=>{const t=Math.min(1,Math.max(0,(f-a)/(b-a)));return t*t*(3-2*t)};
const approach=ease(18,44),reveal=ease(45,76),mark=ease(24,38),connect=ease(76,88),word=ease(88,98);
const notice=ease(45,55)*(1-ease(78,88));
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
<defs><clipPath id="sectionReveal" clipPathUnits="userSpaceOnUse"><rect x="0" y="0" width={650+430*reveal} height="1920"/></clipPath></defs><g opacity={reveal}>
<text x="650" y="525" fill={muted} fontSize="32" fontWeight="600">교육용 단면</text>
<defs>
<linearGradient id="inner" x1="0" y1="0" x2="1" y2=".2"><stop stopColor="#AAA99F"/><stop offset=".13" stopColor="#D4D3C9"/><stop offset=".55" stopColor="#E1E0D7"/><stop offset="1" stopColor="#B8B8AE"/></linearGradient>
<linearGradient id="surface" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#EBE9E1"/><stop offset=".45" stopColor="#DAD8CF"/><stop offset="1" stopColor="#A6A79D"/></linearGradient>
<linearGradient id="edge" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5F2EA"/><stop offset="1" stopColor="#BABCB1"/></linearGradient>
<linearGradient id="bottomShade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#52584E" stopOpacity="0"/><stop offset="1" stopColor="#52584E" stopOpacity=".20"/></linearGradient>
<filter id="softShadow" x="-30%" y="-10%" width="180%" height="130%"><feDropShadow dx="9" dy="12" stdDeviation="10" floodColor="#55594F" floodOpacity=".18"/></filter>
<filter id="fineSurface" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".6" numOctaves="2" seed="12"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".075"/></feComponentTransfer><feComposite in2="SourceGraphic" operator="in"/></filter>
</defs>
{/* Two separate surface slices. The open display area omits all actual interior constituents. */}
<defs>
<linearGradient id="spaceLeft"><stop stopColor="#60665B" stopOpacity=".20"/><stop offset="1" stopColor="#60665B" stopOpacity="0"/></linearGradient>
<linearGradient id="spaceRight"><stop stopColor="#60665B" stopOpacity="0"/><stop offset="1" stopColor="#60665B" stopOpacity=".12"/></linearGradient>
<linearGradient id="insideEdge"><stop stopColor="#B2B5A9"/><stop offset="1" stopColor="#E1E1D7"/></linearGradient>
</defs>
{/* No continuous core fill, top bridge or rear wall. Shading is only adjacent to separated skins. */}
<path d="M700 682L790 704V1484L700 1490Z" fill="url(#spaceLeft)"/>
<path d="M875 710H930V1510H875Z" fill="url(#spaceRight)"/>
<g filter="url(#softShadow)">
<path d="M930 700L962 672H982L950 700Z" fill="url(#edge)"/>
<path d="M950 700L982 672V1492L950 1520Z" fill="#ACB0A5"/>
<path d="M930 700H950V1520H930Z" fill="url(#surface)"/>
<path d="M931 701V1519" stroke="#F7F4EB" strokeWidth="2"/>
<rect x="930" y="700" width="20" height="820" filter="url(#fineSurface)" fill="#888"/>
</g>
<g filter="url(#softShadow)">
<path d="M650 700L682 672H702L670 700Z" fill="url(#edge)"/>
<path d="M670 700L702 672V1492L670 1520Z" fill="url(#insideEdge)"/>
<path d="M650 700H670V1520H650Z" fill="url(#surface)"/>
<path d="M651 701V1519 M670 701V1519" stroke="#F7F4EB" strokeWidth="2" opacity=".85"/>
<rect x="650" y="700" width="20" height="820" filter="url(#fineSurface)" fill="#888"/>
</g>
<text x="660" y="657" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">앞면</text>
<text x="940" y="657" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">뒷면</text>
<text x="800" y="820" textAnchor="middle" fill={muted} fontSize="34" fontWeight="600">문짝 내부</text>
<g opacity={notice}><text x="800" y="887" textAnchor="middle" fill={muted} fontSize="30" fontWeight="600">내부 구성은</text><text x="800" y="932" textAnchor="middle" fill={muted} fontSize="30" fontWeight="600">제품별로 다름</text></g>
{/* Relation line is not a tool path, physical member, mounting dimension or installation step. */}
<path d="M660 1030V1170" stroke="#F6D542" strokeWidth="20"/>
<path d={`M${photoX+152} 1100H${photoX+152+(725-photoX-152)*connect}`} opacity={connect} stroke={ink} strokeWidth="3" fill="none"/>

<circle cx="660" cy="1100" r="7" fill={ink}/>
<text opacity={connect} x="552" y="1060" textAnchor="middle" fill={muted} fontSize="28" fontWeight="600">설치 위치</text>
<text opacity={word} x="800" y="1240" textAnchor="middle" fill={ink} fontSize="32" fontWeight="600">손잡이 위치,</text>
<text opacity={word} x="800" y="1295" textAnchor="middle" fill={ink} fontSize="30" fontWeight="800">보강 필요 여부 확인</text>
<text x="800" y="1580" textAnchor="middle" fill={muted} fontSize="27">실제 시공도 아님</text>
</g>
<circle cx={photoX+152} cy="1100" r="7" fill="#F6D542" opacity={mark}/>
<text x={photoX-photoWidth/2} y="1730" fill={muted} fontSize="30" fontWeight="600">DOMUS SH30NI</text>
</svg>
<div style={{position:'absolute',left:80,bottom:92,fontSize:32,fontWeight:500,color:muted}}>구조 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Composition durationInFrames={150} fps={30} id="Scene03MotionTestV2" component={Frame} width={1080} height={1920}/>);
