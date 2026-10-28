import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,useCurrentFrame} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
import {Scene2V3} from './Scene2V3';
export const scene2v5Frames=286;
const assets=[
 {title:'데코',file:'younglim-ya07s-psm195-deco-product-catalog.png',name:'YA-07S',kind:'적용 제품 예시'},
 {title:'인필',file:'younglim-pw968-film-scan-official.jpg',name:'PW968',kind:'필름 스캔'},
 {title:'엠보스',file:'younglim-ya07e-px454-display.png',name:'YA-07E',kind:'제품 사진'},
];
export const Scene2V5=()=>{const f=useCurrentFrame();
if(f<110)return <Scene2V3/>;
const step=f<170?0:f<197?1:2;const summary=f>=234;const a=assets[step];
return <AbsoluteFill style={{background:'#F5F2EB',color:'#191916',fontFamily:PRETENDARD}}>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:72,top:126,width:360}}/>
<div style={{position:'absolute',right:132,top:172,fontSize:22,color:'#777166'}}>내부 검토용</div>
<div style={{position:'absolute',left:72,top:350,fontSize:!summary&&step===1?54:64,fontWeight:800}}>{summary?'문짝의 마감 방식':step===0?(f<140?'문짝':'데코시트 적용 도어'):step===1?'인필 = 인테리어 필름 마감':'엠보스 도어'}</div>
{summary?<div style={{position:'absolute',left:72,top:515,width:876,display:'flex',gap:18}}>{assets.map(x=><div key={x.title} style={{width:280}}><div style={{fontSize:47,fontWeight:800,marginBottom:22}}>{x.title}</div><Img src={staticFile(`assets/images/${x.file}`)} style={{width:280,height:600,objectFit:'cover',objectPosition:x.title==='데코'?'47% center':'center'}}/><div style={{fontSize:29,fontWeight:600,marginTop:20}}>{x.name}</div><div style={{fontSize:26,color:'#655e52',marginTop:10}}>{x.kind}</div></div>)}</div>:<div style={{position:'absolute',left:72,top:460,width:876,height:880}}><Img src={staticFile(`assets/images/${a.file}`)} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>}
<div style={{position:'absolute',left:72,top:1380,width:876,fontWeight:800,fontSize:48,lineHeight:1.4}}>{summary?<>같은 색 번호라도<br/>마감 방식은 다를 수 있습니다</>:step===0?<>YA-07S 제품 예시</>:step===1?<><span style={{fontSize:36,fontWeight:600}}>PW968 필름 샘플</span></>:<>입체적인 표면 질감</>}</div>
<div style={{position:'absolute',left:72,top:1560,width:876,fontSize:27,lineHeight:1.5,color:'#655e52'}}>{summary?'서로 다른 색상·제품 예시입니다. 색차 비교가 아닙니다.':step===0?'':step===1?'':'영림 공식 카탈로그 · YA-07E / PX454 선셋스톤'}</div>
<Audio src={staticFile('assets/audio/scene02-tts-v5.mp3')}/>
</AbsoluteFill>};
