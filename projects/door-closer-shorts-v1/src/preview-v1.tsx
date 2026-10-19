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
 const installed=f>=66;
 return <AbsoluteFill style={{background:cream}}>
  {!installed ? <>
   <div style={{position:'absolute',top:470,left:50,width:980,height:900,overflow:'hidden',borderRadius:20,background:'#e3e3e3'}}>
    <Img src={staticFile('assets/images/ts83-official-extracted-0-Im0.png')} style={{width:980,position:'absolute',top:110,transform:`scale(${1+f/66*.025})`}}/>
   </div>
   <div style={{position:'absolute',top:1430,width:1080,textAlign:'center',fontSize:44,fontWeight:800,color:ink}}>문 닫힘을 제어하는 장치</div>
  </> : <>
   <div style={{position:'absolute',top:412,left:80,fontSize:43,fontWeight:800,color:ink}}>문짝 상부 설치 예시</div>
   <div style={{position:'absolute',left:70,top:660,width:940,height:705,overflow:'hidden',borderRadius:14}}>
    <Img src={staticFile('assets/images/ts83-official-page4.png')} style={{position:'absolute',width:1893.38,height:2676.8,left:-794.5,top:-501.9}}/>
   </div>
   <svg width={1080} height={1920} style={{position:'absolute'}}>
    <g fill="none" stroke="#146335" strokeWidth="4">
     <path d="M830 590 H625 V730"/><circle cx="625" cy="730" r="10" fill={yellow}/>
     <path d="M205 1510 H455 V836"/><circle cx="455" cy="836" r="10" fill={yellow}/>
     <path d="M815 1430 H535 V775"/><circle cx="535" cy="775" r="10" fill={yellow}/>
    </g>
    <g fill={ink} fontFamily={PRETENDARD} fontSize="38" fontWeight="800">
     <text x="685" y="565">문틀 연결부</text><text x="95" y="1570">본체 · 문짝 상부</text><text x="780" y="1490">암</text>
    </g>
   </svg>
  </>}
  <div style={{position:'absolute',bottom:190,width:1080,textAlign:'center',fontSize:28,color:'#5b625e',lineHeight:1.6}}>일반 설치 예시 · 현장 적용 제품 아님<br/>출처: dormakaba / DORMA TS 83 공식 카탈로그</div>
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
  {scene===1&&f>=60&&<Note top={1580}>편집상 중간 정지 · 실제 멈춤 시점 아님</Note>}
  {scene===3&&<><Pressure f={f}/><Note>해당 A/S 현장의 실제 원인은 미확인</Note></>}
  {scene===5&&<Note>실제 A/S 원본 · 설치 후 개선 영상 아님</Note>}
 </AbsoluteFill>;
}
registerRoot(()=><>{frames.map((n,i)=><Composition key={i} id={`DoorCloserOverlay${i+1}`} component={Overlay} defaultProps={{scene:i+1}} width={1080} height={1920} fps={30} durationInFrames={n}/>)}</>);
