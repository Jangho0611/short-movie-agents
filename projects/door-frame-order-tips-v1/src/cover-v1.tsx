import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile,delayRender,continueRender} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {PVCProfile,WoodProfile} from './FrameProfiles';
const ready=delayRender('Cover Black font');
new FontFace(PRETENDARD,`url(${staticFile('assets/fonts/Pretendard-Black.woff2')})`,{weight:'900'}).load().then(face=>{document.fonts.add(face);continueRender(ready);});
const Cover=()=> <AbsoluteFill style={{background:'#F6F7F9',fontFamily:PRETENDARD,color:'#20252B'}}>
 <div style={{position:'absolute',left:90,top:279,width:8,height:30,background:'#6250B8'}}/>
 <div style={{position:'absolute',left:114,top:279,fontSize:30,fontWeight:600,color:'#6250B8'}}>건축자재 상식 · 문틀 발주</div>
 <div style={{position:'absolute',left:53,top:341,width:717,height:353,borderRadius:36,background:'rgba(34,32,45,0.92)'}}/>
 <div style={{position:'absolute',left:710,top:370,width:12,height:12,borderRadius:6,background:'#C0B3FF'}}/>
 <div style={{position:'absolute',left:728,top:370,width:12,height:12,borderRadius:6,background:'#797583'}}/>
 <div style={{position:'absolute',left:92,top:440,fontSize:60,fontWeight:900,lineHeight:'92px',letterSpacing:-1.2,color:'#FFFFFF'}}>
 <div>문틀 발주할 때</div><div style={{color:'#C0B3FF'}}>사이즈만 알면 끝?</div></div>
 <div style={{position:'absolute',left:75,top:723}}><PVCProfile iso width={530} height={398}/></div>
 <div style={{position:'absolute',left:75,top:991}}><WoodProfile id="cover-v1" width={550} height={317}/></div>
 <Img src={staticFile('assets/images/daesani-cover-point-right.png')} style={{position:'absolute',left:540,top:600,width:550,height:550*1280/720}}/>
 <Img src={staticFile('daesan-ending/logos/daesanlogo2.png')} style={{position:'absolute',left:92,top:1370,width:78,height:78,objectFit:'contain'}}/>
 <div style={{position:'absolute',left:182,top:1377,fontSize:46,fontWeight:900,color:'#123628',lineHeight:1}}>DAESAN</div>
 <div style={{position:'absolute',left:182,top:1431,fontSize:26,fontWeight:500,color:'#123628'}}>대산종합건축자재</div>
 </AbsoluteFill>;
registerRoot(()=> <Composition id="DoorFrameCoverV1" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
