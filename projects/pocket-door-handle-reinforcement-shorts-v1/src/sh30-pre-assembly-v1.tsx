import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from './fonts';
type Props={background:string,product:string};
export function Frame({background,product}:Props){return <AbsoluteFill style={{fontFamily:PRETENDARD,color:'#29332F'}}>
<Img src={background} style={{width:540,height:960}}/>
{/* Exact B1 pixels; its caption is excluded, its cavity is not redrawn. */}
<div style={{position:'absolute',left:218,top:280,width:104,height:400,overflow:'hidden'}}><Img src={staticFile('assets/images/pocket-door-sh30-recess-v1.png')} style={{position:'absolute',left:-218,top:-280,width:540,height:960,maxWidth:'none'}}/></div>
<Img src={product} style={{position:'absolute',left:202,top:260,width:135,height:440,filter:'brightness(0) blur(3px)',opacity:.18,transform:'translate(1px,2px)'}}/>
<Img src={product} style={{position:'absolute',left:202,top:260,width:135,height:440}}/>
<div style={{position:'absolute',left:30,top:145,width:480,textAlign:'center',fontSize:27,fontWeight:600}}>손잡이 결합 위치</div>
<div style={{position:'absolute',left:10,bottom:54,width:520,textAlign:'center',fontSize:17,fontWeight:500,color:'#626c66'}}>설치 과정 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
registerRoot(()=> <Still id="Sh30PreAssemblyV1" component={Frame} width={540} height={960} defaultProps={{background:'',product:''}}/>);
