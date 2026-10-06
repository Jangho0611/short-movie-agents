import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile,delayRender,continueRender} from 'remotion';
import {PRETENDARD} from '../src/scene5/fonts';
const h=delayRender('Cover Black'); new FontFace(PRETENDARD,`url(${staticFile('assets/fonts/Pretendard-Black.ttf')})`,{weight:'900'}).load().then(f=>{document.fonts.add(f);continueRender(h);});
const Cover=()=> <AbsoluteFill style={{background:'#F6F3EC',color:'#242D28',fontFamily:PRETENDARD}}>
 <div style={{position:'absolute',left:53,top:341,width:717,height:353,borderRadius:36,background:'rgba(236,229,215,.92)'}}/>
 <div style={{position:'absolute',left:90,top:279,width:8,height:30,background:'#235C45'}}/>
 <div style={{position:'absolute',left:114,top:279,fontSize:30,fontWeight:600}}>건축자재 상식 · 하지재</div>
 <div style={{position:'absolute',left:92,top:430,fontSize:60,fontWeight:900,lineHeight:'92px',letterSpacing:-1}}><div>경량철골 <span style={{color:'#235C45'}}>VS</span></div><div>소송각재</div></div>
 <div style={{position:'absolute',left:92,top:628,fontSize:40,fontWeight:600}}>뭘 써야 할까?</div>
 <div style={{position:'absolute',left:60,top:776,width:960,height:460,overflow:'hidden'}}>
 <div style={{position:'absolute',inset:0,clipPath:'polygon(0 0, 54% 0, 46% 100%, 0 100%)'}}><Img src={staticFile('assets/images/s02-light-steel-wall-v3.png')} style={{position:'absolute',left:0,top:0,width:520,height:460,objectFit:'cover',objectPosition:'50% 47%'}}/></div>
 <div style={{position:'absolute',inset:0,clipPath:'polygon(54% 0, 100% 0, 100% 100%, 46% 100%)'}}><Img src={staticFile('assets/images/s01-sosong-wall-v2.png')} style={{position:'absolute',right:0,top:0,width:520,height:460,objectFit:'cover',objectPosition:'50% 47%'}}/></div>
 <svg width="960" height="460" style={{position:'absolute',inset:0}}><path d="M518.4 0 L441.6 460" stroke="#F6F3EC" strokeWidth="8"/></svg>
 </div>
 <div style={{position:'absolute',left:78,top:1280,width:560,height:1,background:'#CED7CF'}}/>
 <Img src={staticFile('references/characters/daesani-cover-open-arms.png')} style={{position:'absolute',left:590,top:866,width:480,height:853.3333333,objectFit:'contain'}}/>
 <div style={{position:'absolute',left:78,top:1380,display:'flex',alignItems:'center',gap:22}}>
 <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:78,height:78,objectFit:'contain'}}/>
 <div><div style={{fontSize:43,fontWeight:800,letterSpacing:1,color:'#123628',lineHeight:1}}>DAESAN</div><div style={{fontSize:25,fontWeight:500,marginTop:10}}>대산종합건축자재</div></div>
 </div>
</AbsoluteFill>;
registerRoot(()=> <Composition id="CoverV4" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
