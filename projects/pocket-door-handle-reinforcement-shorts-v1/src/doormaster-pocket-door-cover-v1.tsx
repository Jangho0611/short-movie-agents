import React from 'react';
import {AbsoluteFill,Img,staticFile,Composition,registerRoot,delayRender,continueRender} from 'remotion';
const h=delayRender();const face=new FontFace('DoorCover',`url(${staticFile('covers/assets-v1/series-sign-v2/fonts/Pretendard-Black.ttf')})`,{weight:'900'});face.load().then(f=>{document.fonts.add(f);continueRender(h)});
function Cover(){return <AbsoluteFill style={{background:'#F4F1E9'}}>
<Img src={staticFile('assets/images/pocket-door-sh30-exterior-v1.png')} style={{position:'absolute',left:0,top:220,width:1620,height:2880}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,#F4F1E9 0px,#F4F1E9 640px,rgba(244,241,233,.96) 800px,rgba(244,241,233,0) 990px)'}}/>
<Img src={staticFile('covers/assets-v1/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:110,top:285,width:800,height:800*1160/2480}}/>
<svg width={1080} height={1920} style={{position:'absolute'}}><g fontFamily="DoorCover" fontWeight={900} fill="#171918">
<text x={80} y={770} fontSize={132} letterSpacing={-5}>오목이손잡이</text>
<g transform="rotate(-1 540 845)">
<path d="M62 793L382 784L375 798L392 804L384 819L394 833L384 849L390 863L378 879L385 895L60 906L67 890L55 881L63 866L53 851L62 835L55 818Z" fill="#FFE052"/>
<path d="M70 790L380 781M64 910L376 899" stroke="#FFE052" strokeWidth={4} opacity={.65}/>
<text x={72} y={885} fontSize={105} letterSpacing={-4}>구멍만 맞추면 끝?</text></g>
<text x={85} y={965} fontSize={43} letterSpacing={-1}>포켓도어 설치 전 확인할 것</text>
</g></svg>
<Img src={staticFile('covers/assets-v1/brand.png')} style={{position:'absolute',left:75,top:1540,width:330,height:'auto'}}/>
</AbsoluteFill>}
registerRoot(()=> <Composition id="Cover" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
