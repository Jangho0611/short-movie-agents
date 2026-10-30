import React,{useId} from 'react';
import {AbsoluteFill,Img,Composition,registerRoot,staticFile,delayRender,continueRender} from 'remotion';
const wait=delayRender('Cover Black font');const font=new FontFace('CoverBlack',`url(${staticFile('assets/fonts/Pretendard-Black.ttf')})`,{weight:'900'});font.load().then(f=>{document.fonts.add(f);continueRender(wait)});
const G='#123628',ink='#292925',muted='#72736c',rule='#d5d7cf',A='#d8d1c4',B='#d3cbbf';
// Same photograph, orientation and scale per SVG coordinate system; no source edits.
const Texture=({id,tone=A}:{id:string;tone?:string})=><defs><pattern id={id} patternUnits="userSpaceOnUse" width="640" height="547.5556"><image href={staticFile('assets/images/yl40-film-texture-2d-v2.png')} width="640" height="547.5556" preserveAspectRatio="xMidYMid meet" filter={tone===B?`url(#${id}-tint)`:undefined}/></pattern><filter id={`${id}-tint`} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0.012 0 1 0 0 -0.00236 0 0 1 0 -0.012 0 0 0 1 0"/></filter></defs>;
const Door=({tone=A,w=280}:{tone?:string;w?:number})=>{const id=useId().replace(/:/g,'');return <svg width={w} height={w*1.95} viewBox="0 0 280 546"><Texture id={id} tone={tone}/><rect x="10" y="6" width="260" height="532" rx="2" fill={`url(#${id})`} stroke="#96978d" strokeWidth="3"/><path d="M230 285h-28" stroke="#62675e" strokeWidth="8" strokeLinecap="round"/></svg>};

const Cover=()=> <AbsoluteFill style={{background:'#f7f6f2',color:'#171819',fontFamily:'CoverBlack',fontWeight:900}}>
<Img src={staticFile('references/doormaster-series-sign-v2.png')} style={{position:'absolute',left:110,top:280,width:860}}/>
<div style={{position:'absolute',left:66,top:705,fontSize:126,letterSpacing:-6,lineHeight:1}}>같은 색상인데</div>
<svg style={{position:'absolute',left:103,top:845,width:870,height:158}} viewBox="0 0 870 158"><path d="M8 18L115 12 201 16 317 7 440 11 582 3 703 7 858 0 852 12 866 20 857 33 865 42 859 60 867 69 860 85 868 96 858 110 863 125 851 137 730 140 590 147 480 143 354 152 220 148 104 157 4 151 13 139 0 130 10 114 3 101 11 86 4 70 12 56 6 43 14 30Z" fill="#f6cf42"/></svg>
<div style={{position:'absolute',left:127,top:843,fontSize:156,letterSpacing:-6,lineHeight:1}}>왜 다를까?</div>
<div style={{position:'absolute',left:74,top:1040,fontSize:39,letterSpacing:-1}}>도어 필름 생산 LOT에 따른 이색</div>
<div style={{position:'absolute',left:28,top:1150}}><Door w={440}/></div><div style={{position:'absolute',right:28,top:1150}}><Door w={440} tone={B}/></div>
<div style={{position:'absolute',left:455,top:1755,width:170,textAlign:'center',color:'#123628'}}><Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width:74,height:74,objectFit:'contain'}}/><div style={{fontSize:27,letterSpacing:1}}>DAESAN</div><div style={{fontSize:16,marginTop:4}}>대산종합건축자재</div></div>
</AbsoluteFill>;
registerRoot(()=> <Composition id="DoorMasterCover" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
