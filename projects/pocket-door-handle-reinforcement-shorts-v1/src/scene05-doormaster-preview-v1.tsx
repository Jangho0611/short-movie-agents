import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,Img,staticFile} from 'remotion';
function Frame(){const f=useCurrentFrame();const second=f>=90;const opacity=second?Math.min(1,(f-89)/5):f>=85?(90-f)/5:Math.min(1,(f+1)/5);return <AbsoluteFill style={{background:'#F4F1E9'}}>
<Img src={staticFile('assets/images/pocket-door-sh30-exterior-v1.png')} style={{width:1080,height:1920}}/>
<div style={{position:'absolute',top:250,width:1080,height:250,background:'#F4F1E9'}}>
<svg width={1080} height={250}><g fontFamily="Apple SD Gothic Neo,Noto Sans KR,sans-serif" fontWeight={900} textAnchor="middle" opacity={opacity}>
<text x={540} y={104} fontSize={76} fill="#303431">{second?<><tspan>문짝 </tspan><tspan fill="#FFE600" stroke="#343735" strokeWidth={3} paintOrder="stroke fill">제작 전에</tspan></>:'구멍만 맞춘다고'}</text>
<text x={540} y={208} fontSize={76} fill={second?'#303431':'#FFE600'} stroke={second?'none':'#343735'} strokeWidth={3} paintOrder="stroke fill">{second?'확인하는 게 중요하죠':'끝이 아닙니다'}</text>
</g></svg></div></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene05Preview" component={Frame} width={1080} height={1920} fps={30} durationInFrames={165}/>);
