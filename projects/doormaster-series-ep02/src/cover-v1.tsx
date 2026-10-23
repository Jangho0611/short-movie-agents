import React from 'react';
import {AbsoluteFill,Composition,registerRoot,Img,staticFile,delayRender,continueRender} from 'remotion';
const ready=delayRender('Cover fonts');
Promise.all([['DoorMasterBlack','references/series-sign-v2/fonts/Pretendard-Black.ttf','900'],['CoverBody','assets/fonts/Pretendard-SemiBold.woff2','600']].map(async([name,path,weight])=>{const f=new FontFace(name,`url(${staticFile(path)})`,{weight});document.fonts.add(await f.load());})).then(()=>continueRender(ready));
const Cover=()=> <AbsoluteFill style={{background:'#F5F2EB',color:'#161817',fontFamily:'CoverBody',overflow:'hidden'}}>
<Img src={staticFile('assets/images/scene01-white-door-hook-v4.png')} style={{position:'absolute',left:-95,top:735,width:864,height:1536}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,#F5F2EB 0%,#F5F2EB 50%,rgba(245,242,235,.85) 55%,rgba(245,242,235,0) 64%)'}}/>
<div style={{position:'absolute',left:520,top:1030,width:630,height:840,maskImage:'linear-gradient(to bottom,transparent 0%,black 25%,black 84%,transparent 100%)'}}>
<Img src={staticFile('assets/images/scene03-domus-712ni-product-render-v2.jpg')} style={{width:630,height:840,maskImage:'linear-gradient(to right,transparent 0%,black 18%,black 100%)'}}/>
</div>
<Img src={staticFile('references/series-sign-v2/doormaster-series-sign-v2.png')} style={{position:'absolute',left:112,top:286,width:856,height:'auto'}}/>
<div style={{position:'absolute',left:80,top:691,fontFamily:'DoorMasterBlack',fontWeight:900,fontSize:124,letterSpacing:-5,lineHeight:1.1,whiteSpace:'nowrap'}}>도어는 왔는데</div>
<svg width={1080} height={1920} style={{position:'absolute',inset:0}}><path d="M65 844 L749 827 L740 841 L758 847 L746 861 L759 870 L746 885 L756 899 L746 917 L758 929 L744 945 L753 958 L65 980 L71 963 L54 956 L65 939 L55 927 L66 909 L54 895 L65 877 L54 866Z" fill="#FFD43D"/><path d="M75 838L738 821 M69 986L737 964" stroke="#FFD43D" strokeWidth={5} opacity={.65}/></svg>
<div style={{position:'absolute',left:81,top:833,fontFamily:'DoorMasterBlack',fontWeight:900,fontSize:151,letterSpacing:-6,lineHeight:1.1}}>손잡이는?</div>
<div style={{position:'absolute',left:84,top:1010,fontSize:41,fontWeight:600,letterSpacing:-1,lineHeight:1.45}}>도무스 손잡이도 재고 운영!<br/>도어와 함께 배송</div>
<div style={{position:'absolute',left:624,top:1670,fontSize:26,letterSpacing:0}}>도무스 712 NI · 실제 제품</div>
<div style={{position:'absolute',left:0,bottom:0,width:1080,height:170,background:'linear-gradient(to bottom,rgba(245,242,235,0),#F5F2EB 62%)'}}/>
<div style={{position:'absolute',left:64,top:1800,display:'flex',alignItems:'center',gap:12,color:'#123628'}}><Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:72,height:72}}/><div><div style={{fontFamily:'DoorMasterBlack',fontWeight:900,fontSize:38,letterSpacing:1}}>DAESAN</div><div style={{fontSize:24,marginTop:2}}>대산종합건축자재</div></div></div>
</AbsoluteFill>;
registerRoot(()=> <Composition id="DoorMasterEp02CoverV1" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
