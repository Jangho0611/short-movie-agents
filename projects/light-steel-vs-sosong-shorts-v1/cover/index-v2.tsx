import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from '../src/scene5/fonts';
const Cover=()=> <AbsoluteFill style={{background:'#F6F3EC',color:'#242D28',fontFamily:PRETENDARD}}>
 <div style={{position:'absolute',left:78,top:364,fontSize:32,fontWeight:600,color:'#235C45',letterSpacing:1}}>건축자재 상식 · 하지재</div>
 <div style={{position:'absolute',left:74,top:470,width:932,display:'flex',alignItems:'baseline',justifyContent:'space-between',fontWeight:800,fontSize:88,letterSpacing:-4,lineHeight:1.15}}><span>경량철골</span><span style={{fontSize:46,letterSpacing:-1,color:'#235C45'}}>VS</span><span>소송각재</span></div>
 <div style={{position:'absolute',left:78,top:601,fontSize:71,fontWeight:700,letterSpacing:-2}}>뭘 써야 할까?</div>
 <div style={{position:'absolute',left:78,top:708,width:112,height:6,background:'#235C45'}}/>
 <div style={{position:'absolute',left:60,top:776,width:960,height:460,overflow:'hidden'}}>
 <div style={{position:'absolute',inset:0,clipPath:'polygon(0 0, 54% 0, 46% 100%, 0 100%)'}}><Img src={staticFile('assets/images/s02-light-steel-wall-v3.png')} style={{position:'absolute',left:0,top:0,width:520,height:460,objectFit:'cover',objectPosition:'50% 47%'}}/></div>
 <div style={{position:'absolute',inset:0,clipPath:'polygon(54% 0, 100% 0, 100% 100%, 46% 100%)'}}><Img src={staticFile('assets/images/s01-sosong-wall-v2.png')} style={{position:'absolute',right:0,top:0,width:520,height:460,objectFit:'cover',objectPosition:'50% 47%'}}/></div>
 <svg width="960" height="460" style={{position:'absolute',inset:0}}><path d="M518.4 0 L441.6 460" stroke="#F6F3EC" strokeWidth="8"/></svg>
 </div>
 <div style={{position:'absolute',left:78,top:1280,width:560,height:1,background:'#CED7CF'}}/>
 <Img src={staticFile('references/characters/small-daesan-pose-explain-v1.png')} style={{position:'absolute',left:762,top:1198,width:200,height:331,objectFit:'contain'}}/>
 <div style={{position:'absolute',left:78,top:1380,display:'flex',alignItems:'center',gap:22}}>
 <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:78,height:78,objectFit:'contain'}}/>
 <div><div style={{fontSize:43,fontWeight:800,letterSpacing:1,color:'#123628',lineHeight:1}}>DAESAN</div><div style={{fontSize:25,fontWeight:500,marginTop:10}}>대산종합건축자재</div></div>
 </div>
</AbsoluteFill>;
registerRoot(()=> <Composition id="CoverV2" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
