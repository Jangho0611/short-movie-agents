import React from 'react';
import {AbsoluteFill,Img,staticFile,useCurrentFrame,interpolate,Composition,registerRoot} from 'remotion';
import {DoorMasterBodyCaptionV4} from './DoorMasterBodyCaptionV4';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const bg='#F4F1E9',ink='#303431',yellow='#FFE600';
export function Scene04SimpleV3(){const f=useCurrentFrame(),step=f<60?0:f<120?1:2,local=f-[0,60,120][step],p=interpolate(local,step===0?[12,17]:[0,5],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <AbsoluteFill style={{background:bg,color:ink,fontFamily:PRETENDARD}}>
{step!==1&&<Img src={staticFile('assets/images/scene03-handle-removed-candidate-v2.png')} style={{position:'absolute',inset:0,width:1080,height:1920}}/>}
<div style={{position:'absolute',left:0,top:0,width:1080,height:340,background:bg,opacity:p}}/>
{f>=12&&<DoorMasterBodyCaptionV4 lines={[["기존 타공·문두께","확인"],["래치 규격도","확인!"],["기존 손잡이","자국 주의!"]][step]} local={step===0?local-12:local}/>}
<div style={{position:'absolute',inset:0,opacity:p}}>
{step===0&&<><svg width={1080} height={1400}><ellipse cx={484} cy={750} rx={86} ry={115} fill="none" stroke={yellow} strokeWidth={7}/></svg><div style={{position:'absolute',top:1400,width:1080,height:520,background:bg,padding:'48px 80px',boxSizing:'border-box'}}><div style={{fontSize:40,fontWeight:600}}>511 NI 적용 문두께</div><div style={{fontSize:88,fontWeight:800,marginTop:15}}>35~45<span style={{fontSize:50}}>mm</span></div><div style={{fontSize:42,marginTop:20,fontWeight:600}}>기존 문은 실측 확인</div></div></>}
{step===1&&<><div style={{position:'absolute',top:390,width:1080,textAlign:'center',fontSize:88,fontWeight:800}}>백셋 <span style={{background:yellow}}>60mm</span></div><svg viewBox="100 435 690 585" width={920} height={780} style={{position:'absolute',left:80,top:550,background:'white'}}><image href={staticFile('assets/images/domus511ni-official-manual.jpg')} width={2150} height={3037}/></svg><div style={{position:'absolute',top:1420,width:1080,textAlign:'center',fontSize:44,fontWeight:600}}>문짝 끝단 ↔ 손잡이 중심</div></>}
{step===2&&<><svg width={1080} height={1400}><ellipse cx={486} cy={753} rx={74} ry={101} fill="none" stroke={yellow} strokeWidth={6} strokeDasharray="16 10"/></svg><div style={{position:'absolute',top:1460,width:1080,height:460,background:bg,padding:'60px 70px',boxSizing:'border-box',fontSize:46,fontWeight:600,lineHeight:1.5,textAlign:'center'}}>교체 후 자국이 보일 수 있어요</div></>}
</div></AbsoluteFill>}
registerRoot(()=> <Composition id="Scene04SimpleV3" component={Scene04SimpleV3} width={1080} height={1920} fps={30} durationInFrames={225}/>);
