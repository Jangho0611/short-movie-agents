import React from 'react';
import {AbsoluteFill,Still,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const Result=()=> <AbsoluteFill style={{background:'#F6F3EC',color:'#252722',fontFamily:PRETENDARD}}>
<div style={{position:'absolute',top:282,left:108,display:'flex',alignItems:'center',gap:17,fontSize:35,fontWeight:600}}><span style={{width:9,height:32,background:'#D5AC40'}}/>대산 현장 사례</div>
<div style={{position:'absolute',top:758,left:105,letterSpacing:-3,lineHeight:1.18}}><div style={{fontSize:78,fontWeight:600}}>결국 마감재</div><div style={{position:'relative',display:'inline-block',marginTop:14,fontSize:136,fontWeight:800,letterSpacing:-6}}><span style={{position:'absolute',left:3,right:0,height:12,bottom:1,background:'#D5AC40'}}/>철거·재공사</div></div>
</AbsoluteFill>;
registerRoot(()=> <Still id="Scene02Result" width={1080} height={1920} component={Result}/>);
