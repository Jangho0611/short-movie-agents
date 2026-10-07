import React from 'react';
import {AbsoluteFill, Img, staticFile, delayRender, continueRender} from 'remotion';
// COVER.md v1.4; standard coordinates also used by water-resistant-gypsum Cover v2.
// Main: Figma; Secondary: Linear. Cover is isolated from all video entry points.
for(const [weight,file] of [['900','Pretendard-Black.ttf'],['600','Pretendard-SemiBold.woff2'],['500','Pretendard-Medium.woff2']]){
 const handle=delayRender(`Cover font ${weight}`);
 new FontFace('CoverPretendard',`url(${staticFile(`assets/fonts/${file}`)})`,{weight}).load().then(font=>{document.fonts.add(font);continueRender(handle);});
}
const INK='#202924', ACCENT='#235C45', BRAND='#123628';
export const CoverV2: React.FC=()=> <AbsoluteFill style={{background:'#FFFFFF',fontFamily:'CoverPretendard',color:INK}}>
 <div style={{position:'absolute',left:53,top:341,width:717,height:353,borderRadius:36,background:'rgba(236,229,215,0.92)'}}/>
 <div style={{position:'absolute',left:90,top:279,width:8,height:30,background:ACCENT}}/>
 <div style={{position:'absolute',left:114,top:279,fontWeight:600,fontSize:30,lineHeight:1}}>소송각재</div>
 <div style={{position:'absolute',left:710,top:370,width:12,height:12,borderRadius:'50%',background:ACCENT}}/>
 <div style={{position:'absolute',left:728,top:370,width:12,height:12,borderRadius:'50%',background:'#C9C7BF'}}/>
 <div style={{position:'absolute',left:92,top:450,fontSize:60,fontWeight:900,lineHeight:'92px',letterSpacing:'-1px',whiteSpace:'nowrap'}}>
  <div>같은 소송각재인데</div><div style={{color:ACCENT}}>왜 품질이 다를까?</div>
 </div>
 <Img src={staticFile('assets/images/daesani-pointing-cover-v1.png')} style={{position:'absolute',left:625,top:840,width:468,height:832}}/>
 <svg viewBox="153 407 312 200" width="920" height={920*200/312} style={{position:'absolute',left:80,top:730,overflow:'hidden'}}>
  <defs><clipPath id="cover-bundle"><polygon points="153,501 376,407 465,418 465,491 278,607 153,592"/></clipPath></defs>
  <image href={staticFile('assets/images/scene01-vertex-reference-v4.png')} width="768" height="1376" clipPath="url(#cover-bundle)"/>
 </svg>
 <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{position:'absolute',left:90,top:1400,width:78,height:78,objectFit:'contain'}}/>
 <div style={{position:'absolute',left:180,top:1407,fontWeight:900,fontSize:46,lineHeight:1,color:BRAND}}>DAESAN</div>
 <div style={{position:'absolute',left:180,top:1461,fontWeight:500,fontSize:26,lineHeight:1,color:BRAND}}>대산종합건축자재</div>
</AbsoluteFill>;
