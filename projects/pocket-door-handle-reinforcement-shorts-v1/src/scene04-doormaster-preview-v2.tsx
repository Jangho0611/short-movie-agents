import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,Img,staticFile} from 'remotion';
const font='Apple SD Gothic Neo,Noto Sans KR,sans-serif';
function Frame(){const f=useCurrentFrame();const phase=f<129?0:f<154?1:f<243?2:3;const labels=['모델별 가공 위치','고정 방식','내부 보강 조건'];const start=[0,129,154][Math.min(phase,2)];const opacity=Math.min(1,(f-start+1)/5);return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:font}}>
<Img src={staticFile('assets/images/pocket-door-sh30-mask-v1.png')} style={{position:'absolute',left:540-122*1.8/2,top:555,width:122*1.8,height:398*1.8}}/>
<svg width={1080} height={1920} fontFamily={font}>
<g textAnchor="middle" fontWeight={900} fill="#303431">
<text x={540} y={342} fontSize={64}>{phase===0?'손잡이 모델에 맞게':phase===3?'모델별로':'다음 조건도'}</text>
<text x={540} y={446} fontSize={64}>{phase===0?'확인해야 합니다':phase===3?'세 가지를 확인':'함께 살펴봐야 하죠'}</text>
</g>
{phase===0&&<g opacity={opacity} fill="none" stroke="#303431" strokeWidth={3}><path d="M407 830H390V1000H407M673 830H690V1000H673"/></g>}
<g textAnchor="middle" fontWeight={700} fill="#303431">
{labels.map((label,i)=>(f>=[0,129,154][i])&&<text key={label} x={[310,750,540][i]} y={[1350,1350,1420][i]} fontSize={48} fill={phase===i?'#FFE600':'#303431'} stroke={phase===i?'#343735':'none'} strokeWidth={2.4} paintOrder="stroke fill" opacity={Math.min(1,(f-[0,129,154][i]+1)/5)}>{label}</text>)}
<text x={540} y={1490} fontSize={36} fontWeight={600}>모델별 확인 항목 · 실제 설치 방식은 제품별 상이</text>
</g></svg></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene04Preview" component={Frame} width={1080} height={1920} fps={30} durationInFrames={255}/>);
