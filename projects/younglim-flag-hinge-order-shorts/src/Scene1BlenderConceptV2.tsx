import React from 'react';
import {AbsoluteFill,Audio,Composition,Img,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const Test=()=>{const f=useCurrentFrame();const phase=f<6?0:f<28?(f-6)/22:f<54?1-(f-28)/26:0;const a=(1-Math.cos(Math.PI*phase))/2;const scale=840/910;
return <AbsoluteFill style={{background:'#F7F4EE',color:'#191917',fontFamily:PRETENDARD}}>
<div style={{position:'absolute',left:94,top:180,fontSize:25,fontWeight:500,color:'#65645E'}}>문도사의 그것이 알고싶도어</div>
<div style={{position:'absolute',left:94,top:218,fontSize:30,fontWeight:600}}>도어 경첩도 좌우가 따로?</div>
<div style={{position:'absolute',left:94,top:266,width:72,height:5,background:'#F6D542'}}/>
<div style={{position:'absolute',left:94,top:300,fontSize:78,fontWeight:800,lineHeight:1.2,letterSpacing:-2.5}}>경첩도<br/><span style={{background:'#F6D542',padding:'0 8px'}}>좌우가 따로?</span></div>
<Img src={staticFile(`assets/images/blender-concept-v2/frame-${String(f+1).padStart(4,'0')}.png`)} style={{position:'absolute',top:480,left:140,width:720,height:1000}}/>
<div style={{position:'absolute',top:1440,left:94,fontSize:51,fontWeight:600,letterSpacing:-1.1}}>주문 전에 확인할 한 가지</div>
<div style={{position:'absolute',top:1608,left:94,fontSize:27,color:'#65645E'}}>개념형 3D · 실제 제품의 작동 검증 자료 아님</div>
<div style={{position:'absolute',top:1683,left:94,width:812,height:2,background:'#DDD8CF'}}/>
<div style={{position:'absolute',top:1715,left:94,fontSize:22,color:'#65645E'}}>공식 외형 참고 · 후면 및 연결부는 단순화한 개념 모델</div>
<Audio src={staticFile('assets/audio/scene01-tts-script-v3-take-v1.mp3')}/>
</AbsoluteFill>};
registerRoot(()=><Composition id="Scene1BlenderConcept" component={Test} width={1080} height={1920} fps={30} durationInFrames={76}/>);
