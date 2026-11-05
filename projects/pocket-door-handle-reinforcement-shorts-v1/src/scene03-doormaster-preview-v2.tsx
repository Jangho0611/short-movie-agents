import React from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame} from 'remotion';
const font='Apple SD Gothic Neo,Noto Sans KR,sans-serif';
function Diagram({y,offset,title,focus,active}:{y:number,offset:number,title:string,focus:number,active:number}){return <g transform={`translate(0 ${y})`}>
<text x={150} y={0} fontSize={46} fontWeight={800} fill="#303431">{title}</text>
<rect x={150} y={28} width={780} height={400} rx={10} fill="#e5e3dc"/>
<rect x={290} y={53+offset} width={250} height={270} rx={8} fill="#aab4ae"/>
<rect x={384} y={68} width={63} height={240} rx={3} fill="none" stroke="#303431" strokeWidth={5}/>
{offset===0&&<rect x={384} y={68} width={63} height={240} rx={3} fill="none" stroke="#FFE600" strokeWidth={4} opacity={active}/>}
{offset>0&&<path d="M384 143V71Q384 68 387 68H444Q447 68 447 71V143" fill="none" stroke="#FFE600" strokeWidth={5} opacity={focus}/>}
{offset===0?<>
<path d="M540 200H595V148H610" fill="none" stroke="#626b65" strokeWidth={3}/>
<text x={620} y={145} fontSize={40} fontWeight={700} fill="#303431">내부 보강</text>
<text x={620} y={194} fontSize={40} fontWeight={700} fill="#303431">예시 영역</text>
<path d="M447 280H600" stroke="#303431" strokeWidth={3}/>
<text x={620} y={285} fontSize={40} fontWeight={700} fill="#303431">손잡이</text>
<text x={620} y={334} fontSize={40} fontWeight={700} fill="#303431">설치 범위</text>
</>:<>
<path d="M447 105H580" fill="none" stroke="#303431" strokeWidth={3}/>
<text x={600} y={88} fontSize={40} fontWeight={700} fill="#303431">보강 영역 밖의</text>
<text x={600} y={137} fontSize={40} fontWeight={700} fill="#303431">손잡이 설치 범위</text>
<path d="M540 280H600" fill="none" stroke="#626b65" strokeWidth={3}/>
<text x={620} y={285} fontSize={40} fontWeight={700} fill="#303431">내부 보강</text>
<text x={620} y={334} fontSize={40} fontWeight={700} fill="#303431">예시 영역</text>
</>}
</g>}
function Frame(){const f=useCurrentFrame();const second=f>=94;const a=f<30?0:f<36?(f-30)/6:f<78?1:f<84?(84-f)/6:0;const b=f<136?0:f<139?(f-135)/4:f<200?1:f<206?(206-f)/6:0;return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:font}}><svg width={1080} height={1920} fontFamily={font}>
<g textAnchor="middle" fontWeight={900}><text x={540} y={342} fontSize={76} fill="#303431">{second?'보강이 있어도':'문짝마다'}</text><text x={540} y={446} fontSize={64} fill="#303431">{second?<><tspan fill="#FFE600" stroke="#343735" strokeWidth={3.07} paintOrder="stroke fill">설치 위치</tspan><tspan>가 다를 수 있죠</tspan></>:'내부 구조가 다릅니다'}</text></g>
<Diagram y={550} offset={0} title="A · 위치가 대응하는 경우" focus={0} active={a}/>
<Diagram y={1010} offset={90} title="B · 위치가 다른 경우" focus={b} active={0}/>
<text x={540} y={1490} textAnchor="middle" fontSize={38} fontWeight={600} fill="#303431">내부 보강 설명용 개념도 · 제품별 상이</text>
</svg></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene03Preview" component={Frame} width={1080} height={1920} fps={30} durationInFrames={213}/>);
