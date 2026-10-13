import React from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import timing from './scene03-timing-v2.json';

/** Approved AI illustrations; only Scene 3 uses this content. */
export const Scene3Visual:React.FC=()=>{
 const frame=useCurrentFrame();
 const plantation=frame>=timing.cutFrame;
 const filename=plantation?'scene03-plantation-logs-realistic-v1.png':'scene03-small-logs-realistic-v1.png';
 return <>
  <div data-qa="headline" style={{position:'absolute',top:232,left:78,right:90,fontSize:72,fontWeight:800,lineHeight:1.22,letterSpacing:'-0.045em',wordBreak:'keep-all'}}>
   {plantation?'조림지에서 생산된':'작은 직경의'}<br/>
   <span style={{color:'#123628'}}>원목도 활용</span>
  </div>
  <Img key={filename} src={staticFile(`assets/images/${filename}`)} style={{position:'absolute',left:78,top:492,width:900,height:1100,objectFit:'cover',objectPosition:'50% 50%'}}/>
  <div style={{position:'absolute',top:1624,left:78,fontSize:27,fontWeight:500,color:'#716D65'}}>AI 재현 이미지</div>
 </>;
};
