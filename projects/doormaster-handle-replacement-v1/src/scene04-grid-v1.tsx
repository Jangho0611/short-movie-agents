import React from 'react';
import {AbsoluteFill,Composition,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {DoorMasterBodyCaptionV4} from './DoorMasterBodyCaptionV4';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ink='#303431',paper='#F4F1E9',yellow='#FFE600';
// Fixed geometry throughout. Only title underlines change with measured audio cues.
function Photo({mark=false}:{mark?:boolean}){return <svg width={438} height={370} viewBox="310 535 350 296"><image href={staticFile('assets/images/scene03-handle-removed-candidate-v2.png')} width={1080} height={1920}/>{mark&&<ellipse cx={486} cy={753} rx={74} ry={101} fill="none" stroke={yellow} strokeWidth={4} strokeDasharray="12 8"/>}</svg>}
function Cell({x,y,title,active,children}:{x:number,y:number,title:string,active:boolean,children:React.ReactNode}){return <div style={{position:'absolute',left:x,top:y,width:438,height:630}}><div style={{fontSize:53,fontWeight:800,lineHeight:1.25,height:85,whiteSpace:'nowrap'}}>{title}<div style={{height:9,marginTop:12,width:'100%',background:active?yellow:'transparent'}}/></div>{children}</div>}
export function Scene04GridV1(){const f=useCurrentFrame(),active=f<13||f>=219?-1:f<44?0:f<121?1:2;return <AbsoluteFill style={{background:paper,color:ink,fontFamily:PRETENDARD}}>
<DoorMasterBodyCaptionV4 lines={['손잡이 교체 전','규격 확인!']} local={f}/>
<svg width={1080} height={1920} style={{position:'absolute'}}><path d="M540 370V1715 M72 1030H1008" stroke="#D8D4C9" strokeWidth={2}/></svg>
<Cell x={72} y={380} title="① 기존 타공" active={active===0}><Photo/><div style={{fontSize:40,fontWeight:600,marginTop:24}}>크기·위치 확인</div></Cell>
<Cell x={570} y={380} title="② 문두께" active={active===0}><svg width={438} height={320} viewBox="0 0 438 320"><rect x={143} y={36} width={150} height={190} fill="#E4DFD4" stroke={ink} strokeWidth={4}/><path d="M143 238V293 M293 238V293 M143 267H293 M143 267l16 -9 M143 267l16 9 M293 267l-16 -9 M293 267l-16 9" fill="none" stroke={ink} strokeWidth={4}/></svg><div style={{fontSize:68,fontWeight:800}}>35~45<span style={{fontSize:43}}>mm</span></div><div style={{fontSize:36,fontWeight:600,marginTop:16}}>511 NI 적용 범위</div></Cell>
<Cell x={72} y={1100} title="③ 래치 규격" active={active===1}><div style={{fontSize:59,fontWeight:800,marginBottom:18}}>백셋 60<span style={{fontSize:40}}>mm</span></div><svg width={438} height={372} viewBox="100 435 690 585" style={{background:'white'}}><image href={staticFile('assets/images/domus511ni-official-manual.jpg')} width={2150} height={3037}/></svg><div style={{fontSize:37,fontWeight:600,marginTop:22}}>기존 부품과 비교</div></Cell>
<Cell x={570} y={1100} title="④ 기존 설치 자국" active={active===2}><Photo mark/><div style={{fontSize:39,fontWeight:600,lineHeight:1.5,marginTop:24}}>교체 후 자국이<br/>보일 수 있어요</div></Cell>
</AbsoluteFill>}
registerRoot(()=> <Composition id="Scene04GridV1" component={Scene04GridV1} width={1080} height={1920} fps={30} durationInFrames={225}/>);
