import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from './fonts';
const C={bg:'#F7F4EE',ink:'#191917',muted:'#65645E',yellow:'#F6D542',line:'#DDD8CF',blue:'#386A82',orange:'#A95124'};
export const states=['s02-01-exterior','s02-02-recess','s02-03-fixing','s03-01-support','s03-02-mismatch','s04-01-template','s04-02-review'];
const details=[['외형 확인','공식 외형에서 안쪽 조건으로'],['매립 공간','본체가 들어갈 자리를 먼저 확인'],['브래킷 고정 부위','공간과 고정 지점은 다릅니다'],['내부 보강 영역','문짝 내부 보강은 개념 예시입니다'],['위치 관계 확인','아래 고정 지점 주변을 확인하세요'],['제조사 도면과 대조','가공 윤곽과 고정 중심을 함께 비교'],['주문 조건 확인','제작업체와 적용 조건을 확인하세요']];
function Label({x,y,text,color=C.muted}:{x:number,y:number,text:string,color?:string}){return <text x={x} y={y} fill={color} fontSize={29} fontWeight={600}>{text}</text>}
// One front orthographic coordinate system shared by every state.
// ZL-2501-56: D1 56, D2 32, D3 40, P 47. Scale 5 px/mm within enlarged detail.
// Door/support are conceptual, not a compatible assembly or manufacturing template.
function Diagram({stage}:{stage:number}){
 const inside=stage>0, support=stage>=3, mismatch=stage>=4, template=stage>=5;
 return <svg width="900" height="870" viewBox="0 0 900 870" style={{position:'absolute',left:90,top:490}}>
 <defs><mask id="supportMask"><rect width="900" height="870" fill="white"/><circle cx="425" cy="425" r="100" fill="black"/></mask><pattern id="hatch" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="16" stroke="#97948D" strokeWidth="3"/></pattern><linearGradient id="wood" x1="0" x2="1"><stop stopColor="#EEE5D6"/><stop offset=".6" stopColor="#F6EFE4"/><stop offset="1" stopColor="#E8DECF"/></linearGradient><linearGradient id="metal"><stop stopColor="#C9CED0"/><stop offset=".35" stopColor="#F1F2EF"/><stop offset=".65" stopColor="#9FA8AB"/><stop offset="1" stopColor="#DFE2DF"/></linearGradient></defs>
 <rect x="155" y="60" width="500" height="720" rx="4" fill={inside?'#F1EEE7':'url(#wood)'} stroke="#B7B0A4" strokeWidth="2"/>
 <rect x="655" y="60" width="23" height="720" fill="#D4C9B9" stroke="#B7B0A4" strokeWidth="2"/>
 {inside&&<><rect x="155" y="60" width="500" height="720" fill="#F9F7F2" opacity=".5"/><path d="M180 60V780 M630 60V780" stroke="#D8D2C8" strokeWidth="16"/><text x="200" y="735" fontSize="25" fill="#878279">그 외 내부 구조 생략</text></>}
 {support&&<g mask="url(#supportMask)"><rect x="290" y="215" width="270" height="220" fill="#E4E0D7"/><rect x="290" y="215" width="270" height="220" fill="url(#hatch)"/><rect x="290" y="215" width="270" height="220" fill="none" stroke="#79776F" strokeWidth="2"/></g>}
 <circle cx="425" cy="425" r="140" fill={inside?'#F7F4EE':'url(#metal)'} fillOpacity={inside?.55:1} stroke="#9DA2A0" strokeWidth="2"/>
 {stage===0&&<circle cx="425" cy="425" r="80" fill="#969D9C" opacity=".35"/>}
 {inside&&<image href={staticFile('assets/images/official-zl-front-lines.png')} x="285" y="285" width="280" height="280" opacity=".58"/>}
 {inside&&<><circle cx="425" cy="425" r="100" fill={C.blue} fillOpacity=".10" stroke={C.blue} strokeWidth="4" strokeDasharray="10 8"/><path d="M525 425H710V365" fill="none" stroke={C.blue} strokeWidth="2"/><Label x={690} y={345} text="매립 공간" color={C.blue}/></>}
 {stage>=2&&<>{[307.5,542.5].map(y=><g key={y}><circle cx="425" cy={y} r="15" fill={C.yellow} stroke={C.ink} strokeWidth="2"/><path d={`M417 ${y}h16 M425 ${y-8}v16`} stroke={C.ink} strokeWidth="2"/></g>)}<path d="M440 307.5H710V255" fill="none" stroke="#474942" strokeWidth="2"/><Label x={683} y={219} text="브래킷"/><Label x={683} y={253} text="고정 중심"/></>}
 {support&&<><path d="M290 260H100V220" fill="none" stroke="#79776F" strokeWidth="2"/><Label x={15} y={181} text="내부 보강"/><Label x={15} y={216} text="개념 영역"/></>}
 {mismatch&&<><rect x="385" y="506" width="80" height="73" rx="12" fill="none" stroke={C.orange} strokeWidth="4"/><path d="M465 542H715V590" fill="none" stroke={C.orange} strokeWidth="2"/><Label x={682} y={626} text="이 부분" color={C.orange}/><Label x={682} y={662} text="확인 필요" color={C.orange}/></>}
 {template&&<><path d="M425 180V640 M255 425H595" stroke={C.blue} strokeWidth="1.5" strokeDasharray="14 6 3 6"/><path d="M425 307.5H230 M425 542.5H230 M245 307.5V542.5" stroke={C.blue} strokeWidth="2" fill="none"/><path d="M239 317l6-10 6 10 M239 533l6 10 6-10" stroke={C.blue} strokeWidth="2" fill="none"/><text x="212" y="425" fill={C.blue} fontSize="25" transform="rotate(-90 212 425)" textAnchor="middle">P 47 · 모델 도면 기준</text></>}
 <text x="155" y="825" fill={C.muted} fontSize="25">정면 확대 개념도 · 문짝 치수 및 보강 범위는 비규격</text>
 </svg>
}
function Frame({stage}:{stage:number}){const scene=stage<3?2:stage<5?3:4; const title=scene===2?<>들어갈 공간 /<br/>고정할 구조</>:scene===3?<>보강이 있어도<br/>위치 확인</>:<>가공 위치 + 고정 조건<br/>+ 내부 보강</>;return <AbsoluteFill style={{background:C.bg,color:C.ink,fontFamily:PRETENDARD}}>
 <div style={{position:'absolute',left:94,top:160,fontSize:28,fontWeight:600,color:C.muted}}>문도사의 그것이 알고싶도어</div>
 <div style={{position:'absolute',right:94,top:160,fontSize:26,color:C.muted}}>0{scene} / 05</div>
 <div style={{position:'absolute',left:94,top:218,width:72,height:6,background:C.yellow}}/>
 <div style={{position:'absolute',left:94,top:270,width:892,fontSize:scene===4?64:76,lineHeight:1.2,fontWeight:800,letterSpacing:-2.5}}>{title}</div>
 <div style={{position:'absolute',left:94,top:452,fontSize:27,color:C.muted}}>ZL-2501-56 도면 참고 · 브래킷 고정형 예시</div>
 <Diagram stage={stage}/>
 <div style={{position:'absolute',left:94,top:1368,width:892,height:204,borderTop:`2px solid ${C.line}`,paddingTop:22,boxSizing:'border-box',display:'flex',gap:25}}>
 <div style={{width:195,height:160,background:'#fff',overflow:'hidden',flexShrink:0,borderRadius:10}}><Img src={staticFile('assets/images/'+(stage===0?'official-zl-photo.png':stage>=5?'official-zl-section.png':'official-zl-install.png'))} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
 <div><div style={{fontSize:25,color:C.muted,marginBottom:9}}>공식 자료 · {stage===0?'제품 사진':stage>=5?"A–A′ 단면":'브래킷 설치도'}</div><div style={{fontSize:39,fontWeight:800,lineHeight:1.25}}>{details[stage][0]}</div><div style={{fontSize:27,color:C.muted,marginTop:10,lineHeight:1.4,maxWidth:640}}>{details[stage][1]}</div></div>
 </div>
 <div style={{position:'absolute',left:94,top:1615,width:892,borderTop:`2px solid ${C.line}`,paddingTop:24,fontSize:29,lineHeight:1.5,color:'#56564F'}}>구조 설명용 예시 · 문짝 및 고정 방식은 제품별 상이</div>
 <div style={{position:'absolute',left:94,top:1710,width:892,fontSize:24,lineHeight:1.5,color:C.muted}}>출처: SUGATSUNE 공식 카탈로그 p.71<br/>내부 보강은 개념 표현 · 설치 적합성 및 강도 검증 아님</div>
 </AbsoluteFill>}
registerRoot(()=> <>{states.map((id,stage)=><Still key={id} id={id} component={Frame} width={1080} height={1920} defaultProps={{stage}}/>)}</>);
