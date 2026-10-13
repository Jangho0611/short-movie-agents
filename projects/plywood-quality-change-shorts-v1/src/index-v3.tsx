import React from 'react';
import {AbsoluteFill, Composition, Img, interpolate, registerRoot, staticFile, useCurrentFrame, delayRender, continueRender} from 'remotion';
import scenes from './preview-data-v3.json';

const C={paper:'#F7F5F0',ink:'#2D2D2A',muted:'#716D65',line:'#DCD7CC',green:'#123628',beige:'#ECE6DA'};
for (const [weight,file] of [['500','Medium'],['600','SemiBold'],['800','ExtraBold']]) {
 const handle=delayRender(`font-${weight}`);
 new FontFace('Pretendard',`url(${staticFile(`assets/fonts/Pretendard-${file}.woff2`)})`,{weight}).load().then(font=>{document.fonts.add(font);continueRender(handle);}).catch(err=>{throw err;});
}
const fade=(f:number,start:number)=>interpolate(f,[start,start+8],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
const Header:React.FC<{section:string;scene:number}>=({section,scene})=><div style={{position:'absolute',left:78,right:90,top:130,display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:28,fontWeight:600,color:C.muted}}><span style={{display:'flex',alignItems:'center',gap:14}}><span style={{width:7,height:25,background:C.green}}/>대산 자재 노트 <span style={{marginLeft:16,fontWeight:500}}>{section}</span></span><span>{String(scene).padStart(2,'0')} / 06</span></div>;
const Title:React.FC<{children:React.ReactNode;size?:number}>=({children,size=76})=><div data-qa="headline" style={{position:'absolute',top:232,left:78,right:90,fontSize:size,fontWeight:800,lineHeight:1.22,letterSpacing:'-0.045em',wordBreak:'keep-all'}}>{children}</div>;
const Footer=()=> <div style={{position:'absolute',left:78,right:90,bottom:154,borderTop:`2px solid ${C.line}`,paddingTop:22,fontSize:25,color:C.muted,display:'flex',justifyContent:'space-between'}}><span>합판, 무엇을 확인할까요?</span><span style={{fontWeight:800,color:C.green,letterSpacing:2}}>DAESAN</span></div>;
const Photo:React.FC<{name:string;top:number;height:number;width?:number;left?:number}>=({name,top,height,width=900,left=78})=><Img src={staticFile(`assets/images/${name}`)} style={{position:'absolute',left,top,width,height,objectFit:'contain'}}/>;
const Label:React.FC<{children:React.ReactNode;top:number}>=({children,top})=><div style={{position:'absolute',top,left:78,fontSize:27,color:C.muted}}>{children}</div>;
const ResearchNote:React.FC<{ai?:boolean}>=({ai=false})=><div style={{position:'absolute',top:1515,left:78,right:90,fontSize:28,lineHeight:1.65,color:C.muted}}>
 <div style={{fontWeight:600,color:C.ink}}>과거 인도네시아 연구 사례</div>
 <div>출처: ITTO / 소경목 활용 연구 · 2010</div>
 {ai&&<div>AI 재현 이미지 · 실제 연구 현장·원목 사진이 아닙니다</div>}
</div>;
export const PlywoodSceneV3:React.FC<{scene:number}>=({scene})=>{
 const f=useCurrentFrame();const active=f>=scenes[scene-1].speechStart;
 return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:'Pretendard',fontWeight:500}}>
 <Header scene={scene} section={['현장에서 듣는 이야기','익숙한 질문','원목 공급환경','제조 조건 연구','품질 판단','구매 전 확인'][scene-1]}/>
 {scene===1&&<>
  <Title size={84}>옛날 합판은<br/><span style={{color:active?C.green:C.ink}}>참 좋았는데…</span></Title>
  <div style={{position:"absolute",left:78,top:444,fontSize:29,color:C.muted}}>35년 건축자재 유통 현장에서 듣는 이야기</div>
  <Photo name="daesan-plywood-warehouse-clean-v2.jpg" top={500} width={870} left={78} height={1160}/>
 </>}
 {scene===2&&<>
  <Title size={76}>기술은 발전하는데<br/><span style={{color:f>=58?C.green:C.ink}}>왜 예전 같지 않을까?</span></Title>
  <Photo name="plywood-stack-real-01.png" top={492} height={675}/>
  <div style={{position:'absolute',left:78,top:1200,width:444,height:333}}><Img src={staticFile('assets/images/plywood-edge-real-01.png')} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
  <div style={{position:'absolute',left:574,top:1285,fontSize:43,lineHeight:1.55,fontWeight:600}}>실제 합판의<br/>표면과 단면</div>
  <Label top={1583}>대산 취급 제품 실사</Label>
 </>}
 {scene===3&&<>
  <Title size={76}>{f<125?<>큰 원목 확보의<br/><span style={{color:C.green}}>어려움</span></>:<>소경목 활용<br/><span style={{color:C.green}}>연구</span></>}</Title>
  <Img src={staticFile(`assets/images/${f<125?'scene03-small-logs-realistic-v1.png':'scene03-plantation-logs-realistic-v1.png'}`)} style={{position:'absolute',left:78,top:492,width:900,height:965,objectFit:'cover',objectPosition:'50% 50%'}}/>
  <ResearchNote ai/>
 </>}
 {scene===4&&<>
  <Title size={72}>작은 원목을 활용하기 위한<br/><span style={{color:C.green}}>제조 조건 연구</span></Title>
  {['원목','단판 절삭','건조','접착','합판'].map((text,i)=>{
   const cue=[0,86,134,151,184][i];const lit=f>=cue;const focus=i>0&&i<4&&lit;
   return <React.Fragment key={text}>
    <div style={{position:'absolute',left:255,top:500+i*187,width:540,height:133,borderRadius:10,border:`2px solid ${focus?C.green:C.line}`,background:focus?C.green:(i===0||i===4?C.beige:'white'),color:focus?'white':C.ink,opacity:lit?1:.32,display:'flex',alignItems:'center',justifyContent:'center',fontSize:i===0||i===4?49:56,fontWeight:600}}>{text}</div>
    {i<4&&<div style={{position:'absolute',top:638+i*187,left:493,width:60,textAlign:'center',fontSize:35,color:C.muted}}>↓</div>}
   </React.Fragment>;
  })}
  <ResearchNote/>
 </>}
 {scene===5&&<>
  <Title size={70}>소경목 = 저품질?<br/><span style={{color:C.green}}>반드시 그렇지는 않습니다</span></Title>
  <Photo name="plywood-edge-real-01.png" top={492} height={675}/>
  <div style={{position:'absolute',top:1225,left:78,right:90,fontSize:29,color:C.muted}}>품질을 판단할 때 함께 볼 요소</div>
  <div style={{position:'absolute',top:1284,left:78,width:900,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
   {['원목 특성','제조 과정','제품 등급'].map((text,i)=><React.Fragment key={text}>{i>0&&<span style={{fontSize:38,color:C.muted}}>+</span>}<div style={{width:264,height:138,display:'flex',alignItems:'center',justifyContent:'center',background:f>=[118,143,168][i]?C.green:C.beige,color:f>=[118,143,168][i]?'white':C.muted,borderRadius:10,fontSize:43,fontWeight:600}}>{text}</div></React.Fragment>)}
  </div>
  <div style={{position:'absolute',top:1518,left:78,right:90,fontSize:29,lineHeight:1.6,color:C.muted}}>사진은 표면·단면을 보여주는 자료입니다.<br/>접착 성능이나 특정 제품의 품질을 판정하지 않습니다.</div>
 </>}
 {scene===6&&<>
  <Title size={70}>{f<108?<>두께와 가격만으로<br/><span style={{color:C.green}}>판단하지 마세요</span></>:<>용도 · 제품 등급<br/><span style={{color:C.green}}>실제 표면 · 단면 상태</span></>}</Title>
  <Photo name="plywood-stack-real-01.png" top={492} height={675}/>
  <div style={{position:'absolute',left:78,top:1197,width:340,height:255}}><Img src={staticFile('assets/images/plywood-edge-real-01.png')} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
  <div style={{position:'absolute',left:463,top:1197,width:515,fontSize:38,fontWeight:600,lineHeight:1.85}}>
   {['용도','제품 등급','실제 제품 상태'].map((text,i)=><div key={text} style={{opacity:f>=[108,124,157][i]?1:.3,color:f>=[108,124,157][i]?C.green:C.muted}}><span style={{marginRight:18}}>✓</span>{text}</div>)}
  </div>
  <div style={{position:'absolute',top:1520,left:78,fontSize:31,fontWeight:600}}>사양서·시험자료 확인</div>
  <div style={{position:'absolute',top:1580,left:78,right:90,fontSize:27,color:C.muted}}>접착 성능·내부 품질은 육안만으로 확정할 수 없습니다.</div>
 </>}
 <Footer/>
 </AbsoluteFill>;
};
registerRoot(()=> <>{scenes.map(s=><Composition key={s.scene} id={`Scene${String(s.scene).padStart(2,'0')}V3`} component={PlywoodSceneV3} defaultProps={{scene:s.scene}} durationInFrames={s.frames} fps={30} width={1080} height={1920}/>)}</>);
