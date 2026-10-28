import React from 'react';
import {AbsoluteFill,Img,staticFile,Composition,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {Brush} from './PreviewV2Brush';
const Cover=()=> <AbsoluteFill style={{background:'#F5F2EB',color:'#191916',fontFamily:PRETENDARD}}>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:100,top:295,width:650}}/>
<div style={{position:'absolute',left:88,top:620,fontWeight:800,letterSpacing:-7,lineHeight:1.08,fontSize:136,transform:'rotate(-1deg)'}}>같은 색인데</div>
<div style={{position:'absolute',left:180,top:770,fontWeight:800,letterSpacing:-7,lineHeight:1.08,fontSize:146,transform:'rotate(-1deg)'}}>왜 <Brush>다르죠?</Brush></div>
<div style={{position:'absolute',left:0,top:960,width:1080,height:540,overflow:'hidden'}}><Img src={staticFile('assets/images/customer-door-sample.jpeg')} style={{position:'absolute',width:1080,height:'auto',left:0,top:-270}}/></div>
<div style={{position:'absolute',left:90,top:1525,fontWeight:600,fontSize:43,letterSpacing:-1}}>문틀과 문짝의 색감 차이</div>
<div style={{position:'absolute',right:82,top:1575,display:'flex',alignItems:'center',gap:14,color:'#123628'}}><Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:52,height:52}}/><div><div style={{fontSize:30,fontWeight:800,letterSpacing:2}}>DAESAN</div><div style={{fontSize:20,fontWeight:600}}>대산종합건축자재</div></div></div>
</AbsoluteFill>;
registerRoot(()=><Composition id="DoorMasterCoverV1" component={Cover} durationInFrames={1} fps={30} width={1080} height={1920}/>);
