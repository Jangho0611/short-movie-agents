import React from 'react';
import {AbsoluteFill, Composition, Img, interpolate, registerRoot, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';

export const frames = [84, 117, 129, 207, 298];
const cream = '#F4F1E9', ink = '#303431', yellow = '#FFE600';
const ease = (f: number) => 1 - Math.pow(1 - interpolate(f, [0, 5], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), 3);

function Header({lines, local=0}: {lines: string[]; local?: number}) {
  const p=ease(local);
  return <div style={{position:'absolute',top:0,width:1080,height:298,background:cream}}>
    <svg width={1080} height={298}><g opacity={p} transform={`translate(0 ${12*(1-p)})`}>
      {lines.map((line,i)=><text key={i} x={540} y={i===0?124:244} textAnchor="middle" fontFamily={PRETENDARD} fontWeight={800} fontSize={line.length>16?62:line.length>12?72:line.length>9?84:100} fill={i===0?ink:yellow} stroke={i===1?ink:'none'} strokeWidth={i===1?3.66:0} paintOrder="stroke fill">{line}</text>)}
    </g></svg>
  </div>;
}
function Note({children, top=1700}: {children: React.ReactNode;top?: number}) {
 return <div style={{position:'absolute',top,left:54,right:54,textAlign:'center',fontSize:30,fontWeight:600,color:'#fff',textShadow:'0 2px 5px #000',background:'rgba(20,28,26,.72)',padding:'12px 18px',borderRadius:10}}>{children}</div>;
}
function Pressure({f}: {f:number}) {
 const p=ease(f-40), shift=(f%35)/35*20;
 return <div style={{position:'absolute',top:1110,left:54,width:972,height:470,opacity:p,background:'rgba(20,32,30,.88)',borderRadius:24,color:'white'}}>
  <div style={{padding:'28px 34px',fontSize:30,color:'#e4e7df'}}>개념 설명 · 실제 현장 측정값 아님</div>
  <svg width={972} height={340} viewBox="0 0 972 340">
   <defs><marker id="a" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6" fill="none" stroke="#FFE600" strokeWidth="2"/></marker><marker id="b" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0 L7 3 L0 6" fill="none" stroke="#83D7F4" strokeWidth="2"/></marker></defs>
   <text x="48" y="60" fill="#FFE600" fontSize="36">문 닫힘 방향</text>
   <path d="M60 110 H390" fill="none" stroke="#FFE600" strokeWidth="8" markerEnd="url(#a)"/>
   <path d={`M${900-shift} 180 H${580-shift}`} fill="none" stroke="#83D7F4" strokeWidth="8" markerEnd="url(#b)"/>
   <text x="535" y="260" fill="#83D7F4" fontSize="36">반대 방향 외풍</text>
   <path d="M486 35 V270" stroke="white" strokeWidth="4" strokeDasharray="12 12" opacity=".6"/>
   <text x="486" y="325" textAnchor="middle" fill="white" fontSize="34">공간 사이 압력 차이도 영향 가능</text>
  </svg>
 </div>;
}
function Product({f}:{f:number}) {
 const stage=f<66?-1:f<113?0:f<160?1:2;
 const labels=['도어 상부','암대','문틀 레일'];
 return <AbsoluteFill style={{background:cream,color:ink}}>
  <div style={{position:'absolute',top:354,width:1080,textAlign:'center',fontSize:46,fontWeight:800}}>영림 매립형 도어클로저</div>
  <div style={{position:'absolute',top:424,width:1080,textAlign:'center',fontSize:34,fontWeight:700,color:'#146335'}}>매립형 설치 예시</div>
  <Img src={staticFile('assets/images/younglim-concealed-closer-official-reference.png')} style={{position:'absolute',left:120,top:510,width:280,height:250,objectFit:'contain'}}/>
  <div style={{position:'absolute',left:440,top:555,fontSize:38,fontWeight:700,lineHeight:1.6}}>문·문틀 상부에 매립<br/>문 닫힘을 제어하는 장치</div>
  <div style={{position:'absolute',left:90,top:850,width:900,height:629,overflow:'hidden'}}>
   <Img src={staticFile('assets/images/younglim-install-connection-reference.png')} style={{position:'absolute',width:790*900/738,left:-21*900/738,top:-110*900/738}}/>
   <svg width={900} height={629} viewBox="21 110 738 516" style={{position:'absolute',top:0,left:0}}>
    {stage===0&&<path d="M184 523 L245 608" stroke="#FFE600" strokeWidth="16" opacity=".75"/>}
    {stage===1&&<path d="M179 499 L516 435" stroke="#FFE600" strokeWidth="13" opacity=".75"/>}
    {stage===2&&<path d="M520 420 L625 356" stroke="#FFE600" strokeWidth="14" opacity=".75"/>}
   </svg>
  </div>
  <div style={{position:'absolute',top:1535,left:70,right:70,display:'flex',justifyContent:'space-between',gap:18}}>
   {labels.map((label,i)=><div key={label} style={{flex:1,textAlign:'center',padding:'18px 0',borderRadius:12,fontSize:38,fontWeight:800,background:stage===i?yellow:'#e3e5de',opacity:stage===-1?0.7:1}}>{label}</div>)}
  </div>
  <div style={{position:'absolute',top:1685,width:1080,textAlign:'center',fontSize:27,lineHeight:1.7,color:'#5b625e'}}>설치 구조 설명용 · 실제 A/S 현장 설치 제품 아님<br/>출처: 영림 26/27 공식 카탈로그 2판<br/>영림 히든도어·알루미늄 문틀 시공설명서</div>
 </AbsoluteFill>;
}
function Overlay({scene=1}:{scene:number}) {
 const f=useCurrentFrame();
 let lines:string[]=[],local=f;
 if(scene===1) lines=['문이 안 닫힌다고요?','실제 A/S 접수 사례'];
 if(scene===2) lines=['도어클로저 미설치','문 닫힘 불량으로 A/S 접수'];
 if(scene===3) lines=f<65?['외풍 · 공간 압력 차이','문 닫힘에 영향 가능']:['문 닫힘을','방해할 수 있습니다'];
 if(scene===3&&f>=65)local=f-65;
 if(scene===4){lines=f<66?['크고 무거운 문','도어클로저 선택이 중요']:['사용 환경에 맞게','설치해 닫힘 제어'];if(f>=66)local=f-66;}
 if(scene===5) lines=['설치 환경까지 고려한','도어클로저 선택'];
 return <AbsoluteFill style={{fontFamily:PRETENDARD}}>
  {scene===4&&<Product f={f}/>}
  <Header lines={lines} local={local}/>

  {scene===3&&<><Pressure f={f}/><Note>해당 A/S 현장의 실제 원인은 미확인</Note></>}
  {scene===5&&<Note>실제 A/S 원본 · 설치 후 개선 영상 아님</Note>}
 </AbsoluteFill>;
}
registerRoot(()=><>{[{scene:1,n:150},{scene:4,n:207}].map(({scene,n})=><Composition key={scene} id={`DoorCloserOverlay${scene}`} component={Overlay} defaultProps={{scene}} width={1080} height={1920} fps={30} durationInFrames={n}/>)}</>);
