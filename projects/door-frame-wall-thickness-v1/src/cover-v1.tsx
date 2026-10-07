import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile,delayRender,continueRender} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {PVCProfile} from './CoverFrameProfiles';
const ready=delayRender('Cover Black font');
new FontFace(PRETENDARD,`url(${staticFile('assets/fonts/Pretendard-Black.woff2')})`,{weight:'900'}).load().then(face=>{document.fonts.add(face);continueRender(ready);});
const Cover=()=> <AbsoluteFill style={{background:'#F6F7F9',fontFamily:PRETENDARD,color:'#20252B'}}>
 <div style={{position:'absolute',left:90,top:279,width:8,height:30,background:'#6250B8'}}/>
 <div style={{position:'absolute',left:114,top:279,fontSize:30,fontWeight:600,color:'#6250B8'}}>건축자재 상식 · 문틀 발주</div>
 <div style={{position:'absolute',left:53,top:341,width:717,height:353,borderRadius:36,background:'rgba(34,32,45,0.92)'}}/>
 <div style={{position:'absolute',left:710,top:370,width:12,height:12,borderRadius:6,background:'#C0B3FF'}}/>
 <div style={{position:'absolute',left:728,top:370,width:12,height:12,borderRadius:6,background:'#797583'}}/>
 <div style={{position:'absolute',left:92,top:440,fontSize:60,fontWeight:900,lineHeight:'92px',letterSpacing:-1.2,color:'#FFFFFF'}}>
 <div>문틀 바 수,</div><div style={{color:'#C0B3FF'}}>어떻게 정할까?</div></div>
 <div style={{position:'absolute',left:92,top:745,fontSize:32,fontWeight:800,color:'#20252B'}}>벽체 115mm <span style={{color:'#6250B8'}}>+ 타일 마감</span></div>
 <svg style={{position:'absolute',left:90,top:805}} width="550" height="300" viewBox="0 0 550 300">
 <defs><pattern id="cover-wall-hatch" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M0 15L15 0" stroke="#c6cdd3" strokeWidth="2"/></pattern></defs>
 <path d="M68 67V25M323 67V25M68 43H323" fill="none" stroke="#555E68" strokeWidth="2"/><path d="M68 43l12 -7v14zM323 43l-12 -7v14z" fill="#555E68"/>
 <text x="195" y="24" textAnchor="middle" fontSize="31" fontWeight="800" fill="#20252B">115mm</text>
 <rect x="68" y="82" width="255" height="170" fill="#e5eae5" stroke="#555E68" strokeWidth="3"/><rect x="68" y="82" width="255" height="170" fill="url(#cover-wall-hatch)"/>
 <text x="195" y="181" textAnchor="middle" fontSize="34" fontWeight="600" fill="#20252B">벽체</text>
 <rect x="323" y="82" width="44" height="170" fill="#b8a8ed" stroke="#6250B8" strokeWidth="3"/>
 <path d="M323 139H367M323 195H367" stroke="#F6F7F9" strokeWidth="3"/>
 <path d="M373 166H402" stroke="#6250B8" strokeWidth="2"/><text x="412" y="178" fontSize="30" fontWeight="600" fill="#6250B8">타일</text>
 <path d="M216 268v24m-10 -10l10 10 10-10" stroke="#6250B8" strokeWidth="4" fill="none"/>
 </svg>
 <div style={{position:'absolute',left:92,top:1090}}><PVCProfile iso width={280} height={210}/></div>
 <div style={{position:'absolute',left:385,top:1124,fontSize:34,fontWeight:600,color:'#20252B'}}>발포문틀</div>
 <div style={{position:'absolute',left:385,top:1170,fontSize:68,fontWeight:900,color:'#6250B8'}}>130바</div>
 <div style={{position:'absolute',left:92,top:1308,fontSize:24,fontWeight:500,color:'#667079'}}>타일 마감 조건의 실제 발주 사례</div>
 <Img src={staticFile('assets/images/daesani-cover-point-right.png')} style={{position:'absolute',left:540,top:600,width:550,height:550*1280/720}}/>
 <Img src={staticFile('daesan-ending/logos/daesanlogo2.png')} style={{position:'absolute',left:92,top:1370,width:78,height:78,objectFit:'contain'}}/>
 <div style={{position:'absolute',left:182,top:1377,fontSize:46,fontWeight:900,color:'#123628',lineHeight:1}}>DAESAN</div>
 <div style={{position:'absolute',left:182,top:1431,fontSize:26,fontWeight:500,color:'#123628'}}>대산종합건축자재</div>
 </AbsoluteFill>;
registerRoot(()=> <Composition id="DoorFrameWidthCoverV1" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
