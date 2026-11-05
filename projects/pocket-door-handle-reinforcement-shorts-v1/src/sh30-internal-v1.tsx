import React from 'react';
import {AbsoluteFill,Img,Still,staticFile,registerRoot} from 'remotion';
import {PRETENDARD} from './fonts';

// A is the lossless common plate: background, official mask and contact shadows.
// Its source layers and exact affine transform remain in composite-sh30-exterior-v1.py.
// Never redraw/re-resample the product in B. Future A/B animate only ReviewLayer.
export const layout = {width:540,height:960,product:{left:202,top:260,width:135,height:440},review:{x:177,y:235,width:186,height:490}};
export function CommonExterior(){return <Img src={staticFile('assets/images/pocket-door-sh30-exterior-v1.png')} style={{width:540,height:960}}/>}
export function ReviewLayer(){return <AbsoluteFill style={{fontFamily:PRETENDARD}}>
<svg width="540" height="960" style={{position:'absolute',inset:0}}>
  <defs>
    <mask id="outside-product"><rect width="540" height="960" fill="white"/><rect x="196" y="254" width="147" height="452" fill="black"/></mask>
    <linearGradient id="review-shade"><stop stopColor="#29332F" stopOpacity=".07"/><stop offset=".18" stopColor="#29332F" stopOpacity=".015"/><stop offset=".82" stopColor="#29332F" stopOpacity=".015"/><stop offset="1" stopColor="#29332F" stopOpacity=".07"/></linearGradient>
  </defs>
  {/* An annotation boundary, never an opening, timber member or machining outline. */}
  <rect x="177" y="235" width="186" height="490" rx="22" fill="url(#review-shade)" mask="url(#outside-product)"/>
  <rect x="177" y="235" width="186" height="490" rx="22" fill="none" stroke="#F6D542" strokeWidth="3"/>
  <path d="M270 207V235" fill="none" stroke="#626C66" strokeWidth="1.5"/>
  <circle cx="270" cy="235" r="3" fill="#626C66"/>
</svg>
<div style={{position:'absolute',top:144,left:100,width:340,textAlign:'center',fontSize:24,lineHeight:1.3,fontWeight:600,color:'#29332F'}}>내부 보강<br/>필요 여부 확인</div>
<div style={{position:'absolute',bottom:55,left:20,width:500,textAlign:'center',fontSize:16,fontWeight:500,color:'#626C66'}}>내부 보강 설명용 개념도 · 제품별 상이</div>
</AbsoluteFill>}
export function Internal(){return <AbsoluteFill><CommonExterior/><ReviewLayer/></AbsoluteFill>}
registerRoot(()=> <Still id="Sh30InternalV1" component={Internal} width={540} height={960}/>);
