import React from 'react';
import {AbsoluteFill,Composition,Img,registerRoot,staticFile} from 'remotion';
import {PRETENDARD} from '../src/scene5/fonts';
const Cover=()=> <AbsoluteFill style={{background:'#FFFFFF',color:'#202924',fontFamily:PRETENDARD}}>
 <div style={{position:'absolute',left:92,top:226,width:7,height:35,background:'#235C45'}}/>
 <div style={{position:'absolute',left:120,top:224,fontSize:34,fontWeight:600,color:'#235C45'}}>건축자재 상식 · 하지재</div>
 <div style={{position:'absolute',left:90,top:318,fontSize:122,fontWeight:800,lineHeight:1.12,letterSpacing:-5}}>경량철골</div>
 <div style={{position:'absolute',left:92,top:459,display:'flex',alignItems:'center',gap:30}}><span style={{fontSize:51,fontWeight:600,color:'#235C45'}}>VS</span><span style={{fontSize:122,fontWeight:800,letterSpacing:-5,lineHeight:1.12}}>소송각재</span></div>
 <div style={{position:'absolute',left:92,top:637,fontSize:55,fontWeight:600,letterSpacing:-1.5}}>어디에 뭘 써야 할까?</div>
 <div style={{position:'absolute',left:92,top:716,width:896,height:2,background:'#DCE4DE'}}/>
 {['s02-light-steel-wall-v3.png','s01-sosong-wall-v2.png'].map((name,i)=><React.Fragment key={name}>
  <div style={{position:'absolute',left:92+i*462,top:753,width:434,textAlign:'center',fontSize:44,fontWeight:700}}>{i?'소송각재':'경량철골'}</div>
  <div style={{position:'absolute',left:92+i*462,top:823,width:434,height:771,overflow:'hidden',borderRadius:16,border:'1px solid #DCE4DE',boxSizing:'border-box'}}><Img src={staticFile('assets/images/'+name)} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
 </React.Fragment>)}
 <Img src={staticFile('references/characters/small-daesan-pose-explain-v1.png')} style={{position:'absolute',left:431,top:1575,width:218,height:361,objectFit:'contain'}}/>
</AbsoluteFill>;
registerRoot(()=> <Composition id="Cover" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
