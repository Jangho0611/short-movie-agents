import React from 'react';
import {AbsoluteFill,Img,staticFile,Composition,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {Brush} from './PreviewV2Brush';
const Cover=({variant}:{variant:"A"|"C"})=> <AbsoluteFill style={{background:'#F5F2EB',color:'#191916',fontFamily:PRETENDARD}}>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:100,top:295,width:650}}/>
<div style={{position:'absolute',left:88,top:620,fontWeight:800,letterSpacing:-7,lineHeight:1.08,fontSize:136,transform:'rotate(-1deg)'}}>같은 색인데</div>
<div style={{position:'absolute',left:180,top:770,fontWeight:800,letterSpacing:-7,lineHeight:1.08,fontSize:146,transform:'rotate(-1deg)'}}>왜 <Brush>다르죠?</Brush></div>
<div style={{position:'absolute',left:0,top:960,width:1080,height:540,display:'flex',gap:4,background:'#F5F2EB'}}>{(variant==='A'?[{f:'frame',l:'문틀'},{f:'door',l:'문짝'}]:[{f:'door',l:'문짝 표면'},{f:'film',l:'영림190 필름 샘플'}]).map(x=><div key={x.f} style={{position:'relative',width:538,height:540,overflow:'hidden'}}><Img src={staticFile('assets/images/cover-v2-'+x.f+'-crop.png')} style={{width:'100%',height:'100%',objectFit:'cover'}}/><div style={{position:'absolute',left:20,top:18,fontSize:31,fontWeight:600,background:'#F5F2EB',padding:'9px 15px',borderRadius:4}}>{x.l}</div></div>)}</div>
<div style={{position:'absolute',left:90,top:1525,fontWeight:600,fontSize:43,letterSpacing:-1}}>문틀과 문짝의 색감 차이</div>
<div style={{position:'absolute',right:82,top:1575,display:'flex',alignItems:'center',gap:14,color:'#123628'}}><Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:52,height:52}}/><div><div style={{fontSize:30,fontWeight:800,letterSpacing:2}}>DAESAN</div><div style={{fontSize:20,fontWeight:600}}>대산종합건축자재</div></div></div>
</AbsoluteFill>;
registerRoot(()=><>{(['A','C'] as const).map(variant=><Composition key={variant} id={'DoorMasterCoverV2'+variant} component={Cover} defaultProps={{variant}} durationInFrames={1} fps={30} width={1080} height={1920}/>)}</>);
