import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile,delayRender,continueRender} from 'remotion';
import {FrontDoor} from '../src/Scenes';
const handle=delayRender('Cover Pretendard Black');
const black=new FontFace('Pretendard',`url(${staticFile('assets/fonts/Pretendard-Black.woff2')})`,{weight:'900'});
black.load().then(f=>{document.fonts.add(f);continueRender(handle)});
const Cover:React.FC=()=> <AbsoluteFill style={{background:'#FAF9F6',fontFamily:'Pretendard',color:'#000',overflow:'hidden'}}>
  <div style={{position:'absolute',left:90,top:279,width:8,height:30,background:'#146335'}}/>
  <div style={{position:'absolute',left:114,top:279,fontSize:30,fontWeight:600,lineHeight:1,letterSpacing:'-.5px',color:'#146335'}}>건축자재 상식 · 도어 발주</div>
  <div style={{position:'absolute',left:53,top:341,width:717,height:353,borderRadius:36,background:'rgba(200,230,205,0.92)'}}/>
  <div style={{position:'absolute',left:710,top:370,width:12,height:12,borderRadius:'50%',background:'#146335'}}/>
  <div style={{position:'absolute',left:728,top:370,width:12,height:12,borderRadius:'50%',background:'#9CA79C'}}/>
  <div style={{position:'absolute',left:92,top:437,fontSize:60,fontWeight:900,lineHeight:'72px',letterSpacing:'-1.5px'}}>도어 주문할 때</div>
  <div style={{position:'absolute',left:92,top:529,fontSize:60,fontWeight:900,lineHeight:'72px',letterSpacing:'-1.5px',color:'#146335'}}>밀우손? 당좌손?</div>
  <div style={{position:'absolute',left:365,top:705,width:510,height:660}}><FrontDoor hand="right" width={510} height={660}/></div>
  <svg style={{position:'absolute',left:0,top:0}} width={1080} height={1920} viewBox="0 0 1080 1920">
   <path d="M830 1170 C 958 1150, 970 1010, 865 940" fill="none" stroke="#146335" strokeWidth="14" strokeLinecap="round"/>
   <path d="M859 979 L865 940 L905 942" fill="none" stroke="#146335" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <Img src={staticFile('references/characters/small-daesan-canonical-noshadow-v2.png')} style={{position:'absolute',left:70,top:955,width:520*266/440,height:520,objectFit:'contain'}}/>
  <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{position:'absolute',left:650,top:1380,width:78,height:78,objectFit:'contain'}}/>
  <div style={{position:'absolute',left:740,top:1387,fontWeight:900,fontSize:46,lineHeight:1,color:'#123628'}}>DAESAN</div>
  <div style={{position:'absolute',left:740,top:1441,fontWeight:500,fontSize:26,lineHeight:1,color:'#123628'}}>대산종합건축자재</div>
 </AbsoluteFill>;
registerRoot(()=> <Composition id="DoorHandingCover" component={Cover} width={1080} height={1920} fps={24} durationInFrames={1}/>);
