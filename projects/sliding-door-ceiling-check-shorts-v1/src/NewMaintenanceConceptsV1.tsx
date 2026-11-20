import React from 'react';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ink='#262923',gold='#D5AC40',paper='#F6F3EC',muted='#625F54',line='#D8D4C8';
function T({x,y,size=42,weight=600,color=ink,children}:{x:number,y:number,size?:number,weight?:number,color?:string,children:React.ReactNode}){return <text x={x} y={y} fontSize={size} fontWeight={weight} fill={color} letterSpacing={-size*.035}>{children}</text>}
function Base({children}:{children:React.ReactNode}){return <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{fontFamily:PRETENDARD,display:'block'}}><rect width="1080" height="1920" fill={paper}/>{children}</svg>}
function Kicker({n,title}:{n:string,title:string}){return <g><rect x="105" y="280" width="56" height="38" rx="6" fill={gold}/><T x={115} y={309} size={28} weight={800}>{n}</T><T x={182} y={310} size={31}>{title}</T></g>}
function Part({x,y}:{x:number,y:number}){return <g transform={`translate(${x} ${y})`}><rect width="84" height="52" rx="12" fill={ink}/><circle cx="42" cy="26" r="9" fill={gold}/></g>}
function HandTool({x,y}:{x:number,y:number}){return <g transform={`translate(${x} ${y})`} fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M26 74L9 48Q5 40 12 38Q17 37 24 48L24 19Q25 11 31 15L33 40V9Q35 2 41 8V39L43 13Q47 7 51 14V41L54 23Q59 17 63 24V55Q63 72 52 80H32Z"/><path d="M90 67L112 42Q105 32 111 23Q115 17 122 16L119 28L128 34L139 26Q142 44 126 49L103 76Q95 84 90 77Q86 73 90 67Z"/></g>}
export function CaseStill(){return <Base><Kicker n="02" title="현장 사례"/><T x={105} y={439} size={82} weight={800}>교체 작업을 막은</T><T x={105} y={536} size={82} weight={800}>천장 마감재</T>
<rect x="105" y="625" width="850" height="610" rx="24" fill="#FFFEFA" stroke={line} strokeWidth="2"/>
<T x={150} y={698} size={30} color={muted}>상부 철물 영역</T>
<Part x={155} y={752}/><T x={263} y={797} size={51} weight={800}>① 댐퍼 교체 필요</T>
<path d="M195 819V887 M195 987V1077" fill="none" stroke={muted} strokeWidth="4" strokeDasharray="6 11"/>
<rect x="137" y="898" width="786" height="85" rx="8" fill="#EAE5D7"/><path d="M137 898H923" stroke={gold} strokeWidth="7"/><T x={264} y={954} size={42} weight={800}>② 마감재가 작업을 방해</T>
<HandTool x={151} y={1090}/><T x={334} y={1153} size={38}>작업 접근이 필요한 쪽</T>
<rect x="105" y="1287" width="850" height="165" rx="20" fill={ink}/><T x={150} y={1343} size={30} color={gold}>③ 이 현장의 결과</T><T x={150} y={1411} size={54} weight={800} color="#FFFFFF">결국 마감재 철거·재공사</T>
<T x={108} y={1512} size={31} color={muted}>현장 사례 개념도</T></Base>}
export function CompareStill(){return <Base><Kicker n="03" title="마감 전 확인 원칙"/><T x={105} y={439} size={79} weight={800}>들어갈 자리와</T><T x={105} y={536} size={79} weight={800}>손볼 공간은 다릅니다</T>
<rect x="105" y="626" width="850" height="305" rx="24" fill="#FFFEFA" stroke={line} strokeWidth="2"/><T x={151} y={707} size={49} weight={800}>① 부품이 들어갈 자리</T>
<rect x="212" y="766" width="122" height="82" rx="14" stroke={ink} strokeWidth="4" fill="none"/><Part x={231} y={781}/><T x={392} y={827} size={39} color={muted}>부품이 차지하는 공간</T>
<rect x="105" y="968" width="850" height="483" rx="24" fill="#FFFEFA" stroke={line} strokeWidth="2"/><T x={151} y={1051} size={49} weight={800}>② 나중에 손볼 수 있는가?</T>
<path d="M195 1223Q165 1200 171 1146Q176 1102 250 1096H650Q727 1099 752 1142" fill="none" stroke={gold} strokeWidth="6" strokeDasharray="14 11" strokeLinecap="round"/>
<Part x={231} y={1156}/><HandTool x={405} y={1139}/><T x={578} y={1201} size={36}>손·공구 접근</T>
<path d="M151 1268H904" stroke={line} strokeWidth="2"/><circle cx="190" cy="1350" r="31" fill="#F5EAC8"/><T x={179} y={1365} size={42} weight={800}>?</T><T x={252} y={1371} size={51} weight={800}>꺼낼 경로?</T>
<T x={108} y={1512} size={31} color={muted}>구조 예시 · 제품별 접근 방식 상이</T></Base>}
