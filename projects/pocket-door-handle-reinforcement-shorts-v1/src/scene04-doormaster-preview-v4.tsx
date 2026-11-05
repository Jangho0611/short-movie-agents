import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,Img,staticFile} from 'remotion';
const font='Apple SD Gothic Neo,Noto Sans KR,sans-serif';
function Frame(){const f=useCurrentFrame();const phase=f<129?0:f<154?1:2;const labels=['모델별 가공 위치','고정 방식','내부 보강 조건'];const start=[0,129,154][Math.min(phase,2)];const opacity=Math.min(1,(f-start+1)/5);return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:font}}>
<Img src={staticFile('assets/images/pocket-door-sh30-mask-v1.png')} style={{position:'absolute',left:540-122*1.8/2,top:555,width:122*1.8,height:398*1.8}}/>
<svg width={1080} height={1920} fontFamily={font}>
<g textAnchor="middle" fontWeight={900} fill="#303431">
{phase!==1&&<text x={540} y={342} fontSize={64}>{phase===0?'손잡이 모델에 맞게':'함께 살펴봐야 하죠'}</text>}
</g>
<g fontWeight={700} fill="#303431">
<text x={674} y={700} fontSize={34} fontWeight={600}>설치 전 확인 항목</text>
{labels.map((label,i)=>f>=[15,129,154][i]&&<g key={label} opacity={Math.min(1,(f-[15,129,154][i]+1)/5)}>
<path d={`M674 ${795+i*140}l9 10 16-23`} fill="none" stroke={phase===i?'#FFE600':'#303431'} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round"/>
<text x={710} y={806+i*140} fontSize={40} fill={phase===i?'#FFE600':'#303431'} stroke={phase===i?'#343735':'none'} strokeWidth={2} paintOrder="stroke fill">{label}</text>
</g>)}
<text x={674} y={1190} fontSize={32} fontWeight={500} fill="#626b65">실제 설치 방식은</text>
<text x={674} y={1234} fontSize={32} fontWeight={500} fill="#626b65">제품별 상이</text>
</g></svg></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene04Preview" component={Frame} width={1080} height={1920} fps={30} durationInFrames={255}/>);
