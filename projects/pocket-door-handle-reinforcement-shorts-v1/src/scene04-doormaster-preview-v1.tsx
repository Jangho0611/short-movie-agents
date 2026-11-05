import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,Img,staticFile} from 'remotion';
const font='Apple SD Gothic Neo,Noto Sans KR,sans-serif';
function Frame(){const f=useCurrentFrame();const phase=f<135?0:f<154?1:f<243?2:3;const labels=['모델별 가공 위치','고정 방식','내부 보강 조건'];const start=[0,135,154][Math.min(phase,2)];const opacity=Math.min(1,(f-start+1)/5);return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:font}}>
<Img src={staticFile('assets/images/pocket-door-sh30-mask-v1.png')} style={{position:'absolute',left:540-122*1.8/2,top:555,width:122*1.8,height:398*1.8}}/>
<svg width={1080} height={1920} fontFamily={font}>
<g textAnchor="middle" fontWeight={900} opacity={phase===3?1:opacity}>
<text x={540} y={342} fontSize={64} fill="#303431">{phase===0?'손잡이 모델에 맞는':phase===3?'모델별로':'함께 확인할 조건'}</text>
<text x={540} y={446} fontSize={70} fill={phase===3?'#303431':'#FFE600'} stroke={phase===3?'none':'#343735'} strokeWidth={3.07} paintOrder="stroke fill">{phase===0?'가공 위치':phase===3?'세 가지를 확인':labels[phase]}</text>
</g>
{phase===0&&<g opacity={opacity} fill="none" stroke="#303431" strokeWidth={3}><path d="M407 830H390V1000H407M673 830H690V1000H673"/></g>}
<g textAnchor="middle" fontSize={36} fontWeight={700} fill="#303431">
{labels.map((label,i)=>(f>=[0,135,154][i])&&<text key={label} x={[240,540,840][i]} y={1380} opacity={phase===3||phase===i?1:0.55}>{label}</text>)}
<text x={540} y={1480} fontSize={36} fontWeight={600}>모델별 확인 항목 · 실제 설치 방식은 제품별 상이</text>
</g></svg></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene04Preview" component={Frame} width={1080} height={1920} fps={30} durationInFrames={255}/>);
