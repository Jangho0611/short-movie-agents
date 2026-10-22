import React from 'react';
import {AbsoluteFill,Composition,registerRoot,Img,staticFile,delayRender,continueRender} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const ready=delayRender('Cover Black font');const face=new FontFace('DoorMasterBlack',`url(${staticFile('references/series-sign-v2/fonts/Pretendard-Black.ttf')})`,{weight:'900'});face.load().then(f=>{document.fonts.add(f);continueRender(ready)});
const Cover=()=> <AbsoluteFill style={{background:'#F5F2EB',color:'#161817',fontFamily:PRETENDARD}}>
<Img src={staticFile('assets/images/scene02-after-candidate-v1.png')} style={{position:'absolute',left:-250,top:135,width:1620,height:2880}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,#F5F2EB 0%,#F5F2EB 47%,rgba(245,242,235,.93) 51%,rgba(245,242,235,0) 61%)'}}/>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:112,top:286,width:856,height:400.387}}/>
<div style={{position:'absolute',left:80,top:692,fontFamily:'DoorMasterBlack',fontWeight:900,fontSize:128,letterSpacing:-5,lineHeight:1.1}}>문은 그대로,</div>
<svg width={1080} height={1920} style={{position:'absolute',inset:0}}><path d="M54 840 L415 828 L409 839 L425 842 L419 854 L427 861 L419 875 L426 881 L420 900 L426 909 L416 925 L425 930 L414 949 L64 964 L69 951 L52 949 L60 934 L51 928 L59 912 L51 902 L58 889 L50 878 L59 863Z" fill="#FFD43D"/><path d="M68 837L407 826M60 967L406 953" stroke="#FFD43D" strokeWidth={5} opacity={.65}/></svg>
<div style={{position:'absolute',left:72,top:835,fontFamily:'DoorMasterBlack',fontWeight:900,fontSize:104,letterSpacing:-4,lineHeight:1.16,whiteSpace:'nowrap'}}>손잡이만 바꿔볼까?</div>
<div style={{position:'absolute',left:80,top:990,fontSize:42,fontWeight:600,letterSpacing:-1}}>기존 방문 손잡이 교체 전 확인사항</div>
<div style={{position:'absolute',left:64,top:1530,display:'flex',alignItems:'center',gap:12,color:'#123628'}}><Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:86,height:86}}/><div><div style={{fontWeight:800,fontSize:45,letterSpacing:1}}>DAESAN</div><div style={{fontWeight:500,fontSize:25,marginTop:3}}>대산종합건축자재</div></div></div>
</AbsoluteFill>;
registerRoot(()=> <Composition id="DoorMasterCoverV3" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
