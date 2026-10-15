import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,interpolate,OffthreadVideo,staticFile} from 'remotion';
const specs=[
{n:3,frames:126,change:59,src:'scene03-photoreal-test-v3.mp4',first:['문틀 내경부터!'],second:['문짝 치수·두께 확인!']},
{n:4,frames:114,change:68,src:'scene04-preview-v3.mp4',first:['경첩 종류!'],second:['가공 위치도','중요!']},
{n:5,frames:113,change:44,src:'scene05-preview-v3.mp4',first:['손잡이','가공 위치!'],second:['문틀 키홈도','맞아야!']},
{n:6,frames:118,change:55,src:'scene06-preview-v3.mp4',first:['하나라도','안 맞으면?'],second:['문짝 교체가','어려울 수도!']}
];
function Scene({index=0}:{index:number}){const s=specs[index],f=useCurrentFrame(),second=f>=s.change,local=second?f-s.change:f,p=interpolate(local,[0,5],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),ease=1-Math.pow(1-p,3),lines=second?s.second:s.first,compact=s.n===3,height=compact?206:298;return <AbsoluteFill><OffthreadVideo muted src={staticFile('assets/video/'+s.src)}/><div style={{position:'absolute',top:0,width:1080,height,background:compact?'#f0ede7':'#F4F1E9'}}><svg width={1080} height={height}><g opacity={p} transform={`translate(0 ${12*(1-ease)})`}>{lines.map((line,i)=>{const accent=lines.length===1||i===1;return <text key={i} x={540} y={compact?137:lines.length===1?184:i===0?124:244} fontFamily="Apple SD Gothic Neo,Noto Sans KR,sans-serif" fontWeight={900} fontSize={compact?(second?90:100):accent?107:100} textAnchor="middle" fill={accent?'#FFE600':'#303431'} stroke={accent?'#343735':'none'} strokeWidth={accent?3.66:0} paintOrder="stroke fill">{line}</text>})}</g></svg></div></AbsoluteFill>}
registerRoot(()=><>{specs.map((s,index)=><Composition key={s.n} id={`CaptionV4Scene${s.n}`} component={Scene} defaultProps={{index}} durationInFrames={s.frames} width={1080} height={1920} fps={30}/>)}</>);
