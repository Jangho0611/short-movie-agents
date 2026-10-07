import {AbsoluteFill, Audio, Img, staticFile} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS} from '../design/tokens';
export const GuideAccent:React.FC<React.PropsWithChildren>=({children})=><span style={{color:COLORS.daesanGreen}}>{children}</span>;
export const GuideImageScene:React.FC<{audio:string;title:string;subtitle:React.ReactNode;images:{file:string;width:number;height:number;titleBottom:number;opacity?:number}[];imageTop?:number}>=({audio,title,subtitle,images,imageTop=200})=><AbsoluteFill style={{background:COLORS.canvas,fontFamily:PRETENDARD,color:COLORS.ink}}>
 <Audio src={staticFile(`assets/audio/${audio}.mp3`)}/>
 {images.map(({file,width,height,titleBottom,opacity=1})=><div key={file} style={{position:'absolute',inset:0,opacity}}>
  <Img src={staticFile(`references/${file}`)} style={{position:'absolute',left:40,top:imageTop,width:1000,height:height*1000/width}}/>
  {/* Only the source title region is masked; every body pixel remains visible. */}
  <div style={{position:'absolute',left:40,top:180,width:1000,height:imageTop+titleBottom*1000/width-180,background:COLORS.surface}}/>
 </div>)}
 <div style={{position:'absolute',left:40,right:40,top:180,height:8,background:COLORS.daesanGreen}}/>
 <div style={{position:'absolute',top:221,left:88,right:70}}>
  <div style={{fontSize:60,fontWeight:800,lineHeight:1.22,letterSpacing:'-0.035em'}}>{title}</div>
  <div style={{marginTop:24,fontSize:32,fontWeight:700,lineHeight:1.4,letterSpacing:'-0.035em',whiteSpace:'nowrap'}}>{subtitle}</div>
 </div>
</AbsoluteFill>;
