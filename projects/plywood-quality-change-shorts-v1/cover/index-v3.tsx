import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile,delayRender,continueRender} from 'remotion';
const PRETENDARD='Pretendard';
for(const [weight,file] of [['500','Pretendard-Medium.woff2'],['600','Pretendard-SemiBold.woff2'],['800','Pretendard-ExtraBold.woff2'],['900','Pretendard-Black.ttf']]){
 const h=delayRender(`Cover font ${weight}`);new FontFace(PRETENDARD,`url(${staticFile(`assets/fonts/${file}`)})`,{weight}).load().then(f=>{document.fonts.add(f);continueRender(h);});
}
// Coordinate baseline: light-steel-vs-sosong-shorts-v1/cover/index-v6.tsx (approved v6).
const Cover=()=> <AbsoluteFill style={{background:'#FFFFFF',color:'#242D28',fontFamily:PRETENDARD}}>
 <Img src={staticFile('assets/images/daesan-plywood-warehouse-clean-v2.jpg')} style={{position:'absolute',inset:0,width:1080,height:1920,objectFit:'cover'}}/>
 <AbsoluteFill style={{background:'rgba(255,255,255,0.78)'}}/>
 <div style={{position:'absolute',left:53,top:341,width:717,height:353,borderRadius:36,background:'#EDE6D9'}}/>
 <div style={{position:'absolute',left:90,top:279,width:8,height:30,background:'#235C45'}}/>
 <div style={{position:'absolute',left:114,top:279,fontSize:30,fontWeight:600}}>건축자재 상식 · 합판</div>
 {['옛날 합판은','참 좋았는데…','왜 달라졌을까?'].map((line,i)=><div key={line} style={{position:'absolute',left:92,top:424+i*66,fontSize:52,fontWeight:900,lineHeight:1.2,whiteSpace:'nowrap',color:i===2?'#235C45':'#242D28'}}>{line}</div>)}
 <div style={{position:'absolute',left:60,top:776,width:960,height:460}}>
  <Img src={staticFile('assets/images/plywood-edge-real-01.png')} style={{position:'absolute',left:0,top:0,width:960,height:460,objectFit:'cover',objectPosition:'50% 50%'}}/>
 </div>
 <div style={{position:'absolute',left:78,top:1280,width:560,height:1,background:'#CED7CF'}}/>
 <Img src={staticFile('covers/daesani-cover-point-right.png')} style={{position:'absolute',left:590,top:866,width:480,height:853.3333333,objectFit:'contain'}}/>
 <div style={{position:'absolute',left:78,top:1380,display:'flex',alignItems:'center',gap:22}}>
  <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:78,height:78,objectFit:'contain'}}/>
  <div><div style={{fontSize:43,fontWeight:800,letterSpacing:1,color:'#123628',lineHeight:1}}>DAESAN</div><div style={{fontSize:25,fontWeight:500,marginTop:10,color:'#123628'}}>대산종합건축자재</div></div>
 </div>
</AbsoluteFill>;
registerRoot(()=> <Composition id="PlywoodCoverV2" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
