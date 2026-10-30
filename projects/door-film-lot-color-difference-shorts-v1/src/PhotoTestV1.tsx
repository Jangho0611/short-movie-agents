import React from 'react';
import {AbsoluteFill,Audio,Img,staticFile,Composition,registerRoot} from 'remotion';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const PhotoScene=({scene}:{scene:number})=><AbsoluteFill style={{background:'#f6f5f1',fontFamily:PRETENDARD,color:'#292925',padding:'128px 80px'}}>
<Audio src={staticFile(`assets/audio/scene0${scene}-tts-v${scene===2?1:2}.mp3`)}/>
<div style={{display:'flex',justifyContent:'space-between',fontSize:27,color:'#74736b',paddingBottom:25,borderBottom:'2px solid #dadbd4'}}><span>문도사의 그것이 알고싶도어</span><span>EP.02</span></div>
<div style={{fontSize:28,color:'#356653',marginTop:36}}>{scene===2?'02 / 필름 생산 단위':'06 / 기억할 한 가지'}</div>
<div style={{position:'absolute',top:320,left:80,right:80,height:900,overflow:'hidden',borderRadius:8}}>
{scene===2?<Img src={staticFile('assets/images/photo-test-yl40-film-surface-crop-v1.png')} style={{width:'100%',height:'100%',objectFit:'cover'}}/>:<div style={{display:'grid',gridTemplateColumns:'1.15fr 1fr',height:'100%',gap:16}}><Img src={staticFile('assets/images/photo-test-customer-door-sample.jpeg')} style={{width:'100%',height:'100%',objectFit:'cover'}}/><Img src={staticFile('assets/images/photo-test-yl40-film-surface-crop-v1.png')} style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>}
<div style={{position:'absolute',bottom:0,left:0,right:0,background:'rgba(255,255,255,.94)',padding:26,color:'#356653',fontWeight:600,fontSize:29}}>{scene===2?'실제 필름 표면 참고 사진':'도어·필름 표면 참고 사진 · 서로 다른 자료'}</div></div>
{scene===2?<div style={{position:'absolute',top:1260,left:80,right:80,display:'flex',gap:18,alignItems:'center',fontSize:28}}>{['같은 품번 · 예시','LOT A · 예시','LOT B · 예시'].map(t=><div key={t} style={{flex:1,border:'1px solid #dadbd4',padding:'23px 8px',textAlign:'center',background:'white',borderRadius:8}}>{t}</div>)}</div>:<div style={{position:'absolute',top:1260,left:80,right:80,padding:24,background:'#356653',color:'white',textAlign:'center',fontSize:35,fontWeight:600}}>색상 번호 + 생산 LOT</div>}
<div style={{position:'absolute',top:1390,left:80,right:80,fontSize:56,fontWeight:800,lineHeight:1.3,letterSpacing:-1.5}}>{scene===2?'같은 색상 번호':'같은 색상 번호라도'}<br/><span style={{color:'#356653'}}>{scene===2?'다른 생산 LOT':'생산 LOT 확인'}</span></div>
<div style={{position:'absolute',top:1610,left:80,right:80,fontSize:24,lineHeight:1.5,color:'#74736b'}}>{scene===2?'사진의 실제 품번·LOT를 나타낸 그래픽이 아닙니다.':'두 사진을 같은 품번 또는 LOT 비교 사례로 제시하지 않습니다.'}<br/>내부 검토용 · 실제 LOT 이색 사례 아님</div>
</AbsoluteFill>;
registerRoot(()=> <><Composition id="PhotoScene02" component={PhotoScene} defaultProps={{scene:2}} width={1080} height={1920} fps={30} durationInFrames={184}/><Composition id="PhotoScene06" component={PhotoScene} defaultProps={{scene:6}} width={1080} height={1920} fps={30} durationInFrames={225}/></>);
