import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './design/fonts';
import timing from './timing.json';
import {Diagram, DirectionDiagram, diagramKinds, diagramLabels, palette as C, DiagramKind} from './OrderDiagrams';

const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const progress=(f:number,start:number,length=8)=>interpolate(f,[start,start+length],[0,1],clamp);
type Row=typeof timing.scenes[number];
type Beat={startFrame:number;correctAfterFrames:number;wrongAfterFrames:number;errorAfterFrames:number;resultAfterFrames?:number};
export function Mark({check=false,size=48}:{check?:boolean;size?:number}) {
  return <svg width={size} height={size} viewBox="0 0 48 48"><path d={check?'M10 25L20 35L39 13':'M13 13L35 35M35 13L13 35'} fill="none" stroke={check?C.green:C.error} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function Voice({file,from}:{file:string|null;from:number}) {
  return file?<Sequence from={from} layout="none"><Audio src={staticFile(`assets/audio/${file}`)}/></Sequence>:null;
}
function Shell({row,children}:{row:Row;children:React.ReactNode}) {
  return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD,fontWeight:600}}>
    <div style={{position:'absolute',left:88,right:136,top:174,display:'flex',justifyContent:'space-between',fontSize:28,color:C.muted}}><span>도어 주문 · 아차 사례</span><span>0{row.scene} / 05</span></div>
    {children}
    <div style={{position:'absolute',left:88,right:136,top:1490,fontSize:28,lineHeight:1.6,color:C.muted}}>고객사가 전달한 주문 사양의 착오 사례<br/>대산은 전달받은 사양대로 발주합니다</div>
    <div style={{position:'absolute',left:88,right:136,top:1620,height:4,background:C.line}}><div style={{height:'100%',width:`${row.scene/5*100}%`,background:C.green}}/></div>
    <Voice file={row.audioFile} from={row.audioStartFrame}/>
  </AbsoluteFill>;
}
const heading:React.CSSProperties={position:'absolute',left:88,right:136,top:300,fontSize:76,fontWeight:800,lineHeight:1.2,letterSpacing:'-0.04em'};
const stage:React.CSSProperties={position:'absolute',left:88,right:136,top:530,height:760,borderRadius:30,background:'#F0F0EB',overflow:'hidden'};
function ErrorPulse({f,at}:{f:number;at:number}) {
  const opacity=progress(f,at,4)*(1-progress(f,at+18,6));
  return <div style={{position:'absolute',right:30,top:28,width:76,height:76,borderRadius:38,background:C.paper,display:'grid',placeItems:'center',opacity}}><Mark size={54}/></div>;
}
function Cue({correct,wrong,beat,f}:{correct:string;wrong:string;beat:Beat;f:number}) {
  const wrongAt=beat.startFrame+beat.wrongAfterFrames;
  return <div style={{position:'absolute',left:88,right:136,top:422,display:'flex',gap:20,alignItems:'center',fontSize:44,letterSpacing:'-0.035em'}}>
    <span style={{opacity:progress(f,beat.startFrame+beat.correctAfterFrames),color:C.green}}>{correct}</span>
    <span style={{opacity:progress(f,wrongAt),color:C.muted}}>→</span>
    <span style={{opacity:progress(f,wrongAt)}}>{wrong}</span>
  </div>;
}
// Motion ends before the locked X cue. No wrong state is exposed before wrongAt.
const morph=(f:number,b:Beat)=>progress(f,b.startFrame+b.wrongAfterFrames,Math.min(16,b.errorAfterFrames-b.wrongAfterFrames-2));
export function Scene1({row}:{row:Row}) {
  const f=useCurrentFrame();
  const hook=progress(f,row.hookRevealFrame??12);
  const mistake=progress(f,30,12);
  const icons:[DiagramKind,string][]=[['hinge','경첩'],['swing','여는 방향'],['frame','문틀'],['hole','타공']];
  return <Shell row={row}>
    <div style={{...heading,fontSize:68}}>사소한 착오 하나가</div>
    <div style={{position:'absolute',left:88,right:136,top:421,fontSize:86,fontWeight:800,letterSpacing:'-0.055em',opacity:hook}}>도어 재주문으로?!</div>
    <div style={{...stage,top:580,height:750,background:C.lilac}}>
      <div style={{position:'absolute',left:175,top:16,width:500,height:635}}><Diagram kind="hinge" wrong={mistake}/></div>
      {icons.map(([kind,label],i)=><div key={kind} style={{position:'absolute',left:i%2?660:22,top:i<2?75:378,width:170,opacity:progress(f,4+i*6)}}>
        <div style={{height:135,background:C.paper,borderRadius:16}}><Diagram kind={kind} wrong={kind==='hinge'?mistake:0}/></div>
        <div style={{textAlign:'center',fontSize:26,marginTop:10}}>{label}</div>
      </div>)}
      <ErrorPulse f={f} at={44}/>
      <div style={{position:'absolute',bottom:24,left:0,right:0,textAlign:'center',fontSize:38,fontWeight:800,opacity:progress(f,48)}}>작은 착오 → 재주문</div>
    </div>
  </Shell>;
}
export function Scene2({row}:{row:Row}) {
  const f=useCurrentFrame(),beats=row.beats!;
  const second=f>=beats[1].startFrame,b=beats[second?1:0];
  return <Shell row={row}>
    <div style={heading}>{second?'열리는 방향':'경첩 방향'}</div>
    <Cue correct={second?'밀기':'왼쪽 경첩'} wrong={second?'당기기':'오른쪽 경첩'} beat={b} f={f}/>
    <div style={stage}>
      <DirectionDiagram hingeWrong={morph(f,beats[0])} swingWrong={morph(f,beats[1])} planMix={progress(f,beats[1].startFrame,10)} opening={progress(f,beats[1].startFrame,14)}/>
      <ErrorPulse f={f} at={b.startFrame+b.errorAfterFrames}/>
    </div>
    <div style={{position:'absolute',left:88,right:136,top:1340,fontSize:30,color:C.muted,textAlign:'center'}}>{second?'같은 경첩 · 같은 보는 위치에서 방향 비교':'경첩 위치가 바뀌면 손잡이는 반대편으로'}</div>
  </Shell>;
}
function TechnicalScene({row,n}:{row:Row;n:3|4}) {
  const f=useCurrentFrame(),beats=row.beats!;
  const second=f>=beats[1].startFrame,b:Beat=beats[second?1:0];
  const kind:DiagramKind=n===3?(second?'frame':'floor'):(second?'material':'hole');
  const title=n===3?(second?'문틀 구성':'바닥 마감 두께'):(second?'문틀 종류':'실린더 타공');
  const correct=n===3?(second?'4방틀':'두께 반영'):(second?'발포문틀':'48Ø');
  const wrong=n===3?(second?'3방틀':'반영 누락'):(second?'목문틀':'55Ø');
  return <Shell row={row}>
    <div style={heading}>{title}</div><Cue correct={correct} wrong={wrong} beat={b} f={f}/>
    <div style={{...stage,background:n===3?C.cream:'#EEEAF5'}}>
      <Diagram kind={kind} wrong={morph(f,b)}/><ErrorPulse f={f} at={b.startFrame+b.errorAfterFrames}/>
    </div>
    <div style={{position:'absolute',left:88,right:136,top:1340,fontSize:34,textAlign:'center',color:C.muted}}>
      {n===3&&!second?<span style={{opacity:progress(f,b.startFrame+b.resultAfterFrames!)}}>문틀 높이 오류</span>:n===3?'하부 프레임 유무 확인':second?'욕실용 주문 사양 확인':'타공 지름의 차이'}
    </div>
  </Shell>;
}
export const Scene3=({row}:{row:Row})=><TechnicalScene row={row} n={3}/>;
export const Scene4=({row}:{row:Row})=><TechnicalScene row={row} n={4}/>;
export function Scene5({row}:{row:Row}) {
  const f=useCurrentFrame(),cta=row.ctaFrame!,confirm=row.ctaConfirmFrame!;
  const gather=progress(f,row.reorderFrame!,18);
  const clear=progress(f,row.reorderEmphasisFrame!+26,12);
  const check=progress(f,confirm,8);
  return <Shell row={row}>{f<cta?<>
    <div style={heading}>제작 완료 후에야…</div>
    {diagramKinds.map((kind,i)=>{
      const x=88+(i%3)*292,y=525+Math.floor(i/3)*305;
      const dx=(380-x)*gather,dy=(670-y)*gather;
      return <div key={kind} style={{position:'absolute',left:x,top:y,width:272,height:284,border:`2px solid ${C.line}`,borderRadius:20,background:C.paper,opacity:progress(f,row.accumulateFrames![i])*(1-clear),transform:`translate(${dx}px,${dy}px) scale(${1-gather*.62})`}}>
        <div style={{height:224}}><Diagram kind={kind} wrong={1}/></div>
        <div style={{fontSize:25,textAlign:'center'}}>{diagramLabels[i]}</div>
        <div style={{position:'absolute',right:9,top:8}}><Mark size={26}/></div>
      </div>;
    })}
    <div style={{position:'absolute',left:88,right:136,top:1115,textAlign:'center',opacity:progress(f,row.reorderEmphasisFrame!)}}>
      <div style={{fontSize:136,fontWeight:800,letterSpacing:'-0.04em'}}>재주문</div>
      <div style={{fontSize:32,color:C.muted,marginTop:12}}>아… 다시 주문해야겠네.</div>
    </div>
  </>:<>
    <div style={{...heading,opacity:progress(f,cta)}}>도어 주문 전</div>
    <div style={{...stage,top:490,height:750,background:C.mint,opacity:progress(f,cta)}}>
      <div style={{position:'absolute',left:4,top:55,width:490,height:600}}><Diagram kind="hinge"/></div>
      <div style={{position:'absolute',left:475,top:170,width:325,padding:'34px 24px',background:C.paper,borderRadius:18}}>
        <div style={{fontSize:34,fontWeight:800,marginBottom:28}}>주문 사양</div>
        {['방향','문틀','타공'].map(label=><div key={label} style={{display:'flex',gap:16,alignItems:'center',fontSize:32,marginTop:25}}><span style={{width:38,height:38,border:`2px solid ${C.line}`,borderRadius:7}}>{check>0&&<span style={{opacity:check}}><Mark check size={34}/></span>}</span>{label}</div>)}
      </div>
    </div>
    <div style={{position:'absolute',left:88,right:136,top:1320,display:'flex',justifyContent:'center',alignItems:'center',gap:20,fontSize:72,fontWeight:800,letterSpacing:'-0.035em',opacity:check}}>한 번 더 확인 <Mark check size={64}/></div>
  </>}</Shell>;
}
const scenes=[Scene1,Scene2,Scene3,Scene4,Scene5];
export const Scene:React.FC<{n:number}>=({n})=>{
  const row=timing.scenes.find(item=>item.scene===n),Component=scenes[n-1];
  if(!row||!Component)throw new Error(`Unknown scene: ${n}`);
  return <Component row={row}/>;
};
