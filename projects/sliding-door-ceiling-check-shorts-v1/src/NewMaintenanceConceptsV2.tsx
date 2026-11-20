import React from 'react';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ink='#262923',gold='#D5AC40',paper='#F6F3EC',muted='#625F54',line='#D8D4C8';
function T({x,y,size=42,weight=600,color=ink,children}:{x:number,y:number,size?:number,weight?:number,color?:string,children:React.ReactNode}){return <text x={x} y={y} fontSize={size} fontWeight={weight} fill={color} letterSpacing={-size*.035}>{children}</text>}
function Base({children}:{children:React.ReactNode}){return <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{fontFamily:PRETENDARD,display:'block'}}><rect width="1080" height="1920" fill={paper}/>{children}</svg>}
function Kicker({n,title}:{n:string,title:string}){return <g><rect x="105" y="280" width="56" height="38" rx="6" fill={gold}/><T x={115} y={309} size={28} weight={800}>{n}</T><T x={182} y={310} size={31}>{title}</T></g>}
function Part({x,y}:{x:number,y:number}){return <g transform={`translate(${x} ${y})`}><rect width="84" height="52" rx="12" fill={ink}/><circle cx="42" cy="26" r="9" fill={gold}/></g>}
function HandTool({x,y}:{x:number,y:number}){return <g transform={`translate(${x} ${y})`} fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M26 74L9 48Q5 40 12 38Q17 37 24 48L24 19Q25 11 31 15L33 40V9Q35 2 41 8V39L43 13Q47 7 51 14V41L54 23Q59 17 63 24V55Q63 72 52 80H32Z"/><path d="M90 67L112 42Q105 32 111 23Q115 17 122 16L119 28L128 34L139 26Q142 44 126 49L103 76Q95 84 90 77Q86 73 90 67Z"/></g>}
export function CaseStill(){return <Base><Kicker n="02" title="현장 사례"/><T x={105} y={439} size={86} weight={800}>교체 작업을 막은</T><T x={105} y={536} size={86} weight={800}>천장 마감재</T>
<rect x="95" y="595" width="880" height="635" rx="24" fill="#FFFEFA" stroke={line} strokeWidth="2"/>
<T x={150} y={681} size={37} color={muted}>슬라이딩 도어 상부 철물</T>
<Part x={155} y={738}/><T x={266} y={784} size={55} weight={800}>① 댐퍼 교체 필요</T>
<rect x="128" y="865" width="815" height="304" rx="16" fill="#F2EFE8"/>
<rect x="128" y="865" width="815" height="105" rx="12" fill="#DFD9CC"/>
<rect x="151" y="896" width="7" height="45" rx="3" fill={gold}/>
<T x={177} y={935} size={47} weight={800}>② 천장 마감재</T>
<HandTool x={162} y={1018}/><T x={346} y={1081} size={47} weight={800}>교체 작업을 방해</T>
<rect x="95" y="1287" width="880" height="165" rx="20" fill={ink}/><T x={150} y={1343} size={30} color={gold}>③ 이 현장의 결과</T><T x={150} y={1411} size={61} weight={800} color="#FFFFFF">결국 마감재 철거·재공사</T>
<T x={108} y={1512} size={31} color={muted}>현장 사례 개념도</T></Base>}
export function CompareStill(){return <Base><Kicker n="03" title="마감 전 확인 원칙"/><T x={105} y={439} size={83} weight={800}>들어갈 자리와</T><T x={105} y={536} size={83} weight={800}>손볼 공간은 다릅니다</T>
<rect x="95" y="595" width="880" height="345" rx="24" fill="#FFFEFA" stroke={line} strokeWidth="2"/><T x={151} y={707} size={49} weight={800}>① 부품이 들어갈 자리</T>
<rect x="168" y="750" width="218" height="146" rx="22" stroke={ink} strokeWidth="5" fill="none"/>
<g transform="translate(202 777) scale(1.8)"><Part x={0} y={0}/></g><T x={435} y={840} size={40} color={muted}>부품이 차지하는 공간</T>
<rect x="95" y="966" width="880" height="485" rx="24" fill="#FFFEFA" stroke={line} strokeWidth="2"/><T x={151} y={1051} size={49} weight={800}>② 나중에 손볼 수 있는가?</T>
<path d="M165 1250V1135Q165 1093 211 1093H851" fill="none" stroke={gold} strokeWidth="6" strokeDasharray="15 12" strokeLinecap="round"/>
<g transform="translate(202 1132) scale(1.8)"><Part x={0} y={0}/></g>
<g transform="translate(392 1110) scale(1.75)"><HandTool x={0} y={0}/></g><T x={671} y={1202} size={38}>손·공구 접근</T>
<path d="M151 1268H904" stroke={line} strokeWidth="2"/><circle cx="190" cy="1350" r="31" fill="#F5EAC8"/><T x={179} y={1365} size={42} weight={800}>?</T><T x={252} y={1371} size={51} weight={800}>교체 경로는?</T>
<T x={108} y={1512} size={31} color={muted}>구조 예시 · 제품별 접근 방식 상이</T></Base>}
