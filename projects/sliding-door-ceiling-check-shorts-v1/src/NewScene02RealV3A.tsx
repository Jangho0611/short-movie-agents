import React from 'react';
import {AbsoluteFill,Img,Still,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const Header=()=> <div style={{position:'absolute',left:108,top:282,color:'#272925',fontFamily:PRETENDARD}}>
  <div style={{display:'flex',alignItems:'center',gap:16,fontSize:32,fontWeight:600}}><span style={{display:'inline-block',width:9,height:31,background:'#D5AC40'}}/>구조 예시</div>
  <div style={{marginTop:24,fontSize:73,lineHeight:1.12,letterSpacing:-2,fontWeight:800}}>슬라이딩 도어의 문짝 위</div>
</div>;
export const StructureStill=()=> <AbsoluteFill style={{background:'#F6F3EC'}}><Img src={staticFile('assets/images/scene01-before-ai-v3-candidate.png')} style={{width:'100%',height:'100%',objectFit:'contain'}}/><Header/></AbsoluteFill>;
registerRoot(()=> <Still id="NewScene02RealV3A" width={1080} height={1920} component={StructureStill}/>);
