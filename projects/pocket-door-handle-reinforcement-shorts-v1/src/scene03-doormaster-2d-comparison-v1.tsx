import React from 'react';
import {AbsoluteFill,Still,registerRoot} from 'remotion';
const font='Apple SD Gothic Neo,Noto Sans KR,sans-serif';
function Diagram({y,offset,title}:{y:number,offset:number,title:string}){return <g transform={`translate(0 ${y})`}>
<text x={150} y={0} fontSize={46} fontWeight={800} fill="#303431">{title}</text>
<rect x={150} y={28} width={780} height={340} rx={10} fill="#e5e3dc"/>
<rect x={290} y={53+offset} width={250} height={270} rx={8} fill="#aab4ae"/>
<rect x={384} y={68} width={63} height={240} rx={3} fill="none" stroke="#303431" strokeWidth={5}/>
<path d={`M540 ${100+offset}H600`} stroke="#626b65" strokeWidth={3}/>
<text x={620} y={105+offset} fontSize={36} fontWeight={700} fill="#303431">내부 보강</text>
<text x={620} y={150+offset} fontSize={36} fontWeight={700} fill="#303431">예시 영역</text>
<path d="M447 280H600" stroke="#303431" strokeWidth={3}/>
<text x={620} y={277} fontSize={36} fontWeight={700} fill="#303431">손잡이 설치 범위</text>
</g>}
function Frame(){return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:font}}><svg width={1080} height={1920} fontFamily={font}>
<g textAnchor="middle" fontWeight={900}><text x={540} y={342} fontSize={76} fill="#303431">보강이 있어도</text><text x={540} y={446} fontSize={64} fill="#303431"><tspan fill="#FFE600" stroke="#343735" strokeWidth={3.07} paintOrder="stroke fill">설치 위치</tspan><tspan>가 다를 수 있습니다</tspan></text></g>
<Diagram y={565} offset={0} title="A · 위치가 대응하는 경우"/>
<Diagram y={1035} offset={45} title="B · 위치가 다른 경우"/>
<text x={540} y={1490} textAnchor="middle" fontSize={38} fontWeight={600} fill="#303431">내부 보강 설명용 개념도 · 제품별 상이</text>
</svg></AbsoluteFill>}
registerRoot(()=> <Still id="Scene03TwoD" component={Frame} width={1080} height={1920}/>);
