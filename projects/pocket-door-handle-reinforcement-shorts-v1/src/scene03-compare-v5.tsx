import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';
function Frame({state,raw}:{state:string,raw:string}){const a=state==='A';return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#191917'}}><Img src={raw} style={{width:'100%',height:'100%'}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(#F7F4EE 0%,#F7F4EE00 23%,#F7F4EE00 83%,#F7F4EE 94%)'}}/>
<div style={{position:'absolute',left:82,top:95,fontSize:64,fontWeight:800,lineHeight:1.25,letterSpacing:-2}}>{a?<>보강이 있어도<br/>위치가 다르면?</>:<>가공 위치와 보강 조건<br/>함께 확인</>}</div>
<div style={{position:'absolute',left:84,top:286,fontSize:29,color:'#62635D'}}>가상 배치 {state} · {a?'위치 차이 비교':'같은 기준 위치에서 대조'}</div>
<svg width="1080" height="1920" style={{position:'absolute',inset:0}}><path d={`M580 ${a?555:990} L620 660 H640`} fill="none" stroke="#815C36" strokeWidth="2.5"/><path d="M580 1010L620 1250H640" fill="none" stroke="#315E72" strokeWidth="2.5"/></svg>
<div style={{position:'absolute',left:650,top:604,fontSize:36,color:'#75502D',fontWeight:600,lineHeight:1.45}}>가상 지지<br/>영역</div>
<div style={{position:'absolute',left:650,top:1190,fontSize:34,color:'#315E72',fontWeight:600,lineHeight:1.45}}>가공·고정 조건<br/>확인 위치</div>
<div style={{position:'absolute',left:82,top:1635,fontSize:30,color:'#484B47',lineHeight:1.5}}>서로 다른 가상 배치 비교<br/>실제 보강재 이동·설치 완료를 뜻하지 않습니다</div>
<div style={{position:'absolute',left:82,top:1780,fontSize:28,color:'#53564F',lineHeight:1.4}}>위치 관계 설명용 개념도 · 실제 보강 구조는 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="CompareV5" component={Frame} width={1080} height={1920} defaultProps={{state:'A',raw:''}}/>);
