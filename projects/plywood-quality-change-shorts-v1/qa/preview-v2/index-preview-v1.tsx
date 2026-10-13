import React from 'react';
import {AbsoluteFill, Composition, Img, interpolate, registerRoot, staticFile, useCurrentFrame, delayRender, continueRender} from 'remotion';
import scenes from './preview-data.json';

const C={paper:'#F7F5F0',ink:'#2D2D2A',muted:'#716D65',line:'#DCD7CC',green:'#123628',beige:'#ECE6DA'};
for (const [weight,file] of [['500','Medium'],['600','SemiBold'],['800','ExtraBold']]) {
 const handle=delayRender(`font-${weight}`);
 new FontFace('Pretendard',`url(${staticFile(`assets/fonts/Pretendard-${file}.woff2`)})`,{weight}).load().then(font=>{document.fonts.add(font);continueRender(handle);}).catch(err=>{throw err;});
}
const fade=(f:number,start:number)=>interpolate(f,[start,start+8],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
const Header:React.FC<{section:string;scene:number}>=({section,scene})=><div style={{position:'absolute',left:78,right:90,top:130,display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:28,fontWeight:600,color:C.muted}}><span style={{display:'flex',alignItems:'center',gap:14}}><span style={{width:7,height:25,background:C.green}}/>대산 자재 노트 <span style={{marginLeft:16,fontWeight:500}}>{section}</span></span><span>{String(scene).padStart(2,'0')} / 05</span></div>;
const Title:React.FC<{children:React.ReactNode;size?:number}>=({children,size=76})=><div data-qa="headline" style={{position:'absolute',top:232,left:78,right:90,fontSize:size,fontWeight:800,lineHeight:1.22,letterSpacing:'-0.045em',wordBreak:'keep-all'}}>{children}</div>;
const Footer=()=> <div style={{position:'absolute',left:78,right:90,bottom:154,borderTop:`2px solid ${C.line}`,paddingTop:22,fontSize:25,color:C.muted,display:'flex',justifyContent:'space-between'}}><span>합판, 무엇을 확인할까요?</span><span style={{fontWeight:800,color:C.green,letterSpacing:2}}>DAESAN</span></div>;
const Photo:React.FC<{name:string;top:number;height:number;width?:number;left?:number}>=({name,top,height,width=900,left=78})=><Img src={staticFile(`assets/images/${name}`)} style={{position:'absolute',left,top,width,height,objectFit:'contain'}}/>;
const Label:React.FC<{children:React.ReactNode;top:number}>=({children,top})=><div style={{position:'absolute',top,left:78,fontSize:27,color:C.muted}}>{children}</div>;
const Ring:React.FC<{cx:number;cy:number;r:number}>=({cx,cy,r})=><g stroke={C.green} fill="none" strokeWidth="3"><circle cx={cx} cy={cy} r={r}/><circle cx={cx} cy={cy} r={r*.72}/><ellipse cx={cx} cy={cy} rx={r*.44} ry={r*.48}/><circle cx={cx} cy={cy} r={r*.15}/></g>;
export const PlywoodScene:React.FC<{scene:number}>=({scene})=>{
 const f=useCurrentFrame();const start=scenes[scene-1].speechStart;
 const active=f>=start;
 return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:'Pretendard',fontWeight:500}}>
 <Header scene={scene} section={['현장에서 듣는 이야기','익숙한 질문','원목 공급환경','제조 조건','구매 전 확인'][scene-1]}/>
 {scene===1&&<>
  <Title size={84}>옛날 합판은<br/><span style={{color:active?C.green:C.ink}}>참 좋았는데…</span></Title>
  <Photo name="daesan-plywood-warehouse-clean-v2.jpg" top={480} width={888} left={78} height={1184}/>
 </>}
 {scene===2&&<>
  <Title size={76}>기술은 발전했는데<br/><span style={{color:f>=58?C.green:C.ink}}>왜 예전 같지 않을까?</span></Title>
  <Photo name="plywood-stack-real-01.png" top={492} height={675}/>
  <div style={{position:'absolute',left:78,top:1200,width:444,height:333}}><Img src={staticFile('assets/images/plywood-edge-real-01.png')} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
  <div style={{position:'absolute',left:574,top:1285,fontSize:43,lineHeight:1.55,fontWeight:600}}>실제 합판의<br/>표면과 단면</div>
  <Label top={1583}>대산 취급 제품 실사</Label>
 </>}
 {scene===3&&<>
  <Title size={72}>합판 원료로 활용되는<br/><span style={{color:active?C.green:C.ink}}>원목의 다양화</span></Title>
  <div style={{position:'absolute',left:78,top:545,width:900,height:900,borderTop:`2px solid ${C.line}`,borderBottom:`2px solid ${C.line}`}}>
   <div style={{position:'absolute',top:42,fontSize:29,color:C.muted}}>합판 원료 활용 사례</div>
   <div style={{position:'absolute',top:160,left:0,width:424,height:520,background:C.beige,borderRadius:12}}>
    <svg viewBox="0 0 424 320" width="424" height="320"><Ring cx={166} cy={125} r={58}/><Ring cx={262} cy={153} r={47}/><Ring cx={210} cy={229} r={52}/></svg>
    <div style={{textAlign:'center',fontSize:54,fontWeight:600,color:C.green}}>소경목</div>
   </div>
   <div style={{position:'absolute',top:160,right:0,width:424,height:520,background:C.beige,borderRadius:12}}>
    <svg viewBox="0 0 424 320" width="424" height="320" stroke={C.green} fill="none" strokeWidth="4" strokeLinejoin="round">
    {[107,212,317].map((x,i)=><g key={x} transform={`translate(0 ${i%2*25})`}><path d={`M ${x} 63 L ${x-44} 133 L ${x-24} 133 L ${x-57} 194 L ${x+57} 194 L ${x+24} 133 L ${x+44} 133 Z`}/><path d={`M ${x} 194 V 248`}/></g>)}
    </svg><div style={{textAlign:'center',fontSize:54,fontWeight:600,color:C.green}}>조림지 원목</div>
   </div>
   <div style={{position:'absolute',left:0,right:0,top:760,textAlign:'center',fontSize:34,color:C.muted}}>원료의 크기와 생육 환경은 다양합니다</div>
  </div>
  <div style={{position:'absolute',top:1510,left:78,right:90,fontSize:43,fontWeight:600}}>소경목·조림지 원목 활용 사례</div>
  <div style={{position:'absolute',top:1590,left:78,fontSize:27,color:C.muted}}>개념도 · 특정 원목이나 제품을 재현한 이미지가 아닙니다</div>
 </>}
 {scene===4&&<>
  <Title size={78}>원목 특성에 맞는<br/><span style={{color:active?C.green:C.ink}}>제조 조건</span></Title>
  <div style={{position:'absolute',top:598,left:282,width:492,height:168,border:`3px solid ${C.green}`,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:61,fontWeight:600,background:'white'}}>원목 특성</div>
  <svg style={{position:'absolute',top:795,left:491}} width="74" height="125" viewBox="0 0 74 125"><path d="M37 0 V109 M15 87 L37 109 L59 87" stroke={C.green} strokeWidth="4" fill="none"/></svg>
  <div style={{position:'absolute',left:78,top:965,width:900,display:'flex',alignItems:'center',justifyContent:'space-between',opacity:.55+.45*fade(f,77)}}>
   {['단판 절삭','건조','접착'].map((text,i)=><React.Fragment key={text}>{i>0&&<span style={{fontSize:44,color:C.muted}}>→</span>}<div style={{width:246,height:205,background:f>=77?C.green:C.beige,color:f>=77?'white':C.ink,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48,fontWeight:600}}>{text}</div></React.Fragment>)}
  </div>
  <div style={{position:'absolute',top:1290,left:78,right:90,textAlign:'center',fontSize:40,color:C.ink}}>특성에 따라 고려할 조건이 달라집니다</div>
  <div style={{position:'absolute',top:1485,left:78,right:90,borderTop:`2px solid ${C.line}`,paddingTop:32,fontSize:30,lineHeight:1.6,color:C.muted}}>일반적인 제조 흐름을 설명한 개념도입니다.<br/>대산 취급 합판 전체의 제조 방식을 뜻하지 않습니다.</div>
 </>}
 {scene===5&&<>
  <Title size={73}>원목만으로 품질이<br/><span style={{color:active?C.green:C.ink}}>결정되진 않습니다</span></Title>
  <Photo name="plywood-edge-real-01.png" top={490} height={675}/>
  <div style={{position:'absolute',left:78,top:1192,width:292,height:219}}><Img src={staticFile('assets/images/plywood-stack-real-01.png')} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div>
  <div style={{position:'absolute',left:416,top:1225,fontSize:30,color:C.muted,lineHeight:1.6}}>사진은 표면·단면 확인용입니다.<br/>접착 성능은 사진만으로 판단할 수 없습니다.</div>
  <div style={{position:'absolute',top:1474,left:78,fontSize:28,color:C.muted}}>구매할 때 함께 확인하세요</div>
  <div style={{position:'absolute',top:1532,left:78,right:90,fontSize:52,fontWeight:600,letterSpacing:'-0.025em'}}>용도 <span style={{color:C.line}}>·</span> <span style={{color:f>=184?C.green:C.ink}}>등급</span> <span style={{color:C.line}}>·</span> 실제 제품 상태</div>
 </>}
 <Footer/>
 </AbsoluteFill>;
};
const Root=()=> <>{scenes.map(s=><Composition key={s.scene} id={`Scene${String(s.scene).padStart(2,'0')}`} component={PlywoodScene} defaultProps={{scene:s.scene}} durationInFrames={s.frames} fps={30} width={1080} height={1920}/>)}</>;
registerRoot(Root);
