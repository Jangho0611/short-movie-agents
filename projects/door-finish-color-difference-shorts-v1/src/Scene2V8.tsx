import {DoorMasterCaption} from './Scene2V7Caption';
import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {Scene2V7Frame} from './Scene2V8Frame';
export const scene2v7Frames=286;
const assets=[
 {title:'데코',file:'younglim-ya07s-psm195-deco-product-catalog.png',name:'YA-07S',kind:'적용 제품 예시'},
 {title:'인필',file:'younglim-pw968-film-scan-official.jpg',name:'PW968',kind:'필름 스캔'},
 {title:'엠보스',file:'younglim-ya07e-px454-display.png',name:'YA-07E',kind:'제품 사진'},
];
export const Scene2V7=()=>{const f=useCurrentFrame();
if(f<110)return <Scene2V7Frame/>;
const step=f<170?0:f<197?1:2;const summary=f>=234;const a=assets[step];
return <AbsoluteFill style={{background:'#F5F2EB',color:'#191916',fontFamily:PRETENDARD}}>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:72,top:126,width:360}}/>


{summary?<div style={{position:'absolute',left:72,top:515,width:876,display:'flex',gap:18}}>{assets.map(x=><div key={x.title} style={{width:280}}><div style={{fontSize:47,fontWeight:800,marginBottom:22}}>{x.title}</div><Img src={staticFile(`assets/images/${x.file}`)} style={{width:280,height:600,objectFit:'cover',objectPosition:x.title==='데코'?'47% center':'center'}}/><div style={{fontSize:29,fontWeight:600,marginTop:20}}>{x.name}</div><div style={{fontSize:26,color:'#655e52',marginTop:10}}>{x.kind}</div></div>)}</div>:<div style={{position:'absolute',left:72,top:460,width:876,height:880}}><Img src={staticFile(`assets/images/${a.file}`)} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>}
<DoorMasterCaption kind={summary?'summary':step===0?'deco':step===1?'film':'emboss'}/>
{!summary&&step===2&&<div style={{position:'absolute',left:72,top:1560,width:876,fontSize:27,lineHeight:1.5,color:'#655e52'}}>영림 공식 카탈로그 · YA-07E / PX454 선셋스톤</div>}

<Audio src={staticFile('assets/audio/scene02-tts-v5.mp3')}/>
</AbsoluteFill>};
