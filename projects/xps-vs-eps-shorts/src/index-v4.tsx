import React from 'react';
import {AbsoluteFill, Img, Audio, Composition, Sequence, interpolate, registerRoot, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from './scene5/fonts';
import {Ending} from './Ending';
import {BODY_FRAMES, DURATIONS, ENDING_FRAMES, FPS} from './timing-v2';

const C = {ink:'#202632', sub:'#5C6473', blue:'#5067D8', pink:'#AC3D71', pinkPale:'#FBE6EF', line:'#D9DFE9', paper:'#F7F8FA'};
const clamp = {extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
const subtitles = [
  ['XPS와 EPS,','차이는 색깔만이 아닙니다'],
  ['EPS는 비드 성형,','XPS는 압출 발포'],
  ['XPS의 특성 중 하나,','낮은 수분 흡수'],
  ['구매 전 압축강도 확인','용도에 맞는 제품 선택'],
  ['구조와 특성을 확인하고','사용 환경에 맞게 선택'],
];
const titles = ['둘 다 단열재,\n무엇이 다를까요?', '만드는 방식,\n구조의 차이', 'XPS의 특성,\n낮은 수분 흡수', '구매할 땐,\n압축강도 확인', '색깔보다 중요한\n구조와 특성'];

const CellDiagram = ({eps=false, small=false}:{eps?:boolean;small?:boolean}) => <svg width={small?230:342} height={small?170:276} viewBox="0 0 342 276">
  <defs><clipPath id={eps?'eps-clip':'xps-clip'}><rect x="8" y="8" width="326" height="260" rx="16"/></clipPath></defs>
  <rect x="8" y="8" width="326" height="260" rx="16" fill={eps?'#FFFFFF':'#F2A6C7'} stroke={eps?'#8D96A6':C.pink} strokeWidth="3"/>
  <g clipPath={`url(#${eps?'eps-clip':'xps-clip'})`}>
    {eps ? Array.from({length:30},(_,i)=>{const col=i%6,row=Math.floor(i/6),cx=11+col*63+(row%2)*30,cy=18+row*62;return <g key={i}><circle cx={cx} cy={cy} r={33} fill="#FAFBFC" stroke="#8D96A6" strokeWidth="2.5"/>{[-1,0,1].map((q)=><circle key={q} cx={cx+q*12} cy={cy+(q%2)*10} r="4" fill="#D7DDE5"/>)}</g>})
      : Array.from({length:240},(_,i)=>{const col=i%20,row=Math.floor(i/20),x=3+col*19+(row%2)*9.5,y=6+row*22;return <polygon key={i} points={`${x},${y-12} ${x+10},${y-6} ${x+10},${y+6} ${x},${y+12} ${x-10},${y+6} ${x-10},${y-6}`} fill="#F2A6C7" stroke="#C96593" strokeWidth="1.5"/>;})}
  </g>
</svg>;
const Drop = ({size=80}:{size?:number}) => <svg width={size} height={size} viewBox="0 0 100 100"><path d="M50 8C43 26 20 48 20 64a30 30 0 0 0 60 0C80 48 57 26 50 8Z" fill={C.blue}/><path d="M34 66q2 12 14 14" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"/></svg>;
const Tag = ({children}:{children:React.ReactNode}) => <div style={{fontSize:30,color:C.sub,letterSpacing:1,fontWeight:600}}>{children}</div>;
const Pair = ({children}:{children:React.ReactNode})=><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>{children}</div>;
const Card = ({xps=false,children,height=680}:{xps?:boolean;children:React.ReactNode;height?:number})=><div style={{height,background:xps?C.pinkPale:'white',border:`2px solid ${xps?'#E5A4BF':C.line}`,borderRadius:28,padding:'34px 28px',boxSizing:'border-box',textAlign:'center'}}><div style={{fontSize:92,fontWeight:800,color:xps?C.pink:C.ink,letterSpacing:-4}}>{xps?'XPS':'EPS'}</div><div style={{fontSize:34,fontWeight:600,marginTop:6,marginBottom:34}}>{xps?'압출법 보온판':'비드법 보온판'}</div>{children}</div>;
const DiagramNote = ({text='대표 색상으로 구분한 개념도 · 실제 확대비율과 다름'}:{text?:string})=><div style={{fontSize:25,color:C.sub,textAlign:'center',marginTop:25}}>{text}</div>;
const SiteIcon = ({roof=false}:{roof?:boolean})=><svg width="165" height="140" viewBox="0 0 180 150" stroke={C.blue} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round">{roof?<><path d="M22 125V55H158V125M12 54H168M22 40H158"/><path d="M50 76H75V101H50ZM106 76H131V101H106Z"/></>:<><path d="M15 102H165M15 121H165M25 95V35M155 95V35"/><path d="M78 27V76M62 61L78 78L95 61"/></>}</svg>;

const Scene = ({n}:{n:number}) => {
  const frame=useCurrentFrame();
  const settle=interpolate(frame,[0,12],[8,0],clamp);
  return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD,padding:'135px 66px'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Tag>단열재 비교 가이드</Tag><Tag>0{n+1} / 05</Tag></div>
    <div style={{height:3,background:C.line,marginTop:30}}><div style={{height:3,width:`${(n+1)*20}%`,background:C.blue}}/></div>
    <div style={{fontSize:79,fontWeight:800,lineHeight:1.23,whiteSpace:'pre-line',letterSpacing:-3,marginTop:65}}>{titles[n]}</div>
    <div style={{position:'absolute',left:66,right:66,top:550,transform:`translateY(${n===0?0:settle}px)`}}>
      {n===0 && <><Pair><Card xps><CellDiagram/><div style={{fontSize:40,fontWeight:700,marginTop:28}}>압출 발포</div></Card><Card><CellDiagram eps/><div style={{fontSize:40,fontWeight:700,marginTop:28}}>비드 성형</div></Card></Pair><div style={{position:'absolute',top:280,left:'50%',transform:'translateX(-50%)',background:C.ink,color:'white',borderRadius:40,padding:'14px 12px',fontSize:30,fontWeight:800}}>VS</div><DiagramNote/></>}
      {n===1 && <><Pair><Card xps><CellDiagram/><div style={{fontSize:43,fontWeight:700,lineHeight:1.4,marginTop:22,color:C.pink}}>압출법<br/>독립기포 구조</div></Card><Card><CellDiagram eps/><div style={{fontSize:43,fontWeight:700,lineHeight:1.4,marginTop:22,color:C.ink}}>비드법<br/>알갱이 구조</div></Card></Pair><DiagramNote/><div style={{fontSize:27,color:C.sub,textAlign:'center',marginTop:24}}>EPS도 비드 내부에 독립기포가 있습니다</div></>}
      {n===2 && <><Pair><Card xps height={640}><div style={{display:'flex',justifyContent:'center',gap:12,margin:'12px 0 30px'}}>{[0,1,2].map(i=><div key={i} style={{transform:`translateY(${interpolate(frame,[i*6,i*6+14],[-12,0],clamp)}px)`}}><Drop size={65}/></div>)}</div><div style={{fontSize:53,fontWeight:800,lineHeight:1.35,color:C.pink}}>낮은<br/>수분 흡수</div><div style={{fontSize:30,marginTop:34}}>XPS의 대표 특성</div></Card><Card height={640}><CellDiagram eps small/><div style={{fontSize:35,fontWeight:700,lineHeight:1.45,marginTop:26}}>제품별 성능과<br/>사용 조건 확인</div></Card></Pair><div style={{fontSize:31,textAlign:'center',marginTop:42,color:C.sub}}>낮은 흡수 ≠ 완전 방수</div></>}
      {n===3 && <><Pair><Card xps height={520}><CellDiagram small/></Card><Card height={520}><CellDiagram eps small/></Card></Pair><div style={{fontSize:30,textAlign:'center',marginTop:40,color:C.sub}}>제품 종류·등급별 요구 성능</div><div style={{fontSize:52,fontWeight:800,textAlign:'center',marginTop:20}}>용도에 맞는 압축강도</div><DiagramNote text="어느 한쪽이 항상 더 강한 것은 아닙니다"/></>}
      {n===4 && <><Pair><Card xps height={610}><CellDiagram small/><div style={{fontSize:37,fontWeight:700,lineHeight:1.6,marginTop:28}}>압출법<br/>독립기포 구조<br/>낮은 수분 흡수</div></Card><Card height={610}><CellDiagram eps small/><div style={{fontSize:37,fontWeight:700,lineHeight:1.6,marginTop:28}}>비드법<br/>알갱이 구조</div></Card></Pair><div style={{fontSize:47,fontWeight:800,textAlign:'center',marginTop:44,color:C.blue}}>사용 환경에 맞는 선택</div><DiagramNote/></>}
    </div>
    <div style={{position:'absolute',left:66,right:66,bottom:230,borderTop:`2px solid ${C.line}`,paddingTop:32,textAlign:'center',fontSize:51,fontWeight:700,lineHeight:1.42,whiteSpace:'pre-line'}}>{subtitles[n].join('\n')}</div>
    {n===1 && <div style={{position:"absolute",left:66,right:66,top:1360,display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,fontSize:30,lineHeight:1.45,textAlign:"center",color:C.sub}}><div><div>제품 예</div><div>아이소핑크 · 골드폼</div></div><div><div>통용 표현</div><div>흔히 ‘스티로폼’으로 부름</div></div></div>}
    <Audio src={staticFile(`assets/audio/scene0${n+1}-v2.mp3`)}/>
  </AbsoluteFill>;
};

const PhotoScene = ({n}:{n:number}) => {
  const frame=useCurrentFrame();
  const scale=interpolate(frame,[0,DURATIONS[n]-1],[1,1.02],clamp);
  const moisture=n===2;
  const summary=n===4;
  const file=moisture?'xps-moisture-hybrid-candidate-v1.png':'xps-eps-hook-hybrid-candidate-v1.png';
  return <AbsoluteFill style={{background:C.paper,color:C.ink,fontFamily:PRETENDARD,overflow:'hidden'}}>
    {!summary && <Img src={staticFile('assets/images/'+file)} style={{position:'absolute',width:1080,height:1920,objectFit:'cover',transform:`scale(${scale})`,transformOrigin:'50% 55%'}}/>}
    <div style={{position:'absolute',inset:'135px 66px auto'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}><Tag>단열재 비교 가이드</Tag><Tag>0{n+1} / 05</Tag></div>
      <div style={{height:3,background:C.line,marginTop:30}}><div style={{height:3,width:`${(n+1)*20}%`,background:C.blue}}/></div>
      <div style={{fontSize:79,fontWeight:800,lineHeight:1.23,whiteSpace:'pre-line',letterSpacing:-3,marginTop:65}}>{titles[n]}</div>
    </div>
    {!summary && <div style={{position:'absolute',top:535,left:66,right:66,display:'flex',justifyContent:moisture?'flex-start':'space-around',alignItems:'center',fontWeight:800,fontSize:60}}>
      <span style={{color:C.pink}}>XPS</span>{!moisture && <><span style={{fontSize:33}}>VS</span><span>EPS</span></>}
    </div>}
    {summary && <>
      <div style={{position:'absolute',left:66,right:66,top:550,height:475,borderRadius:28,overflow:'hidden'}}>
        <Img src={staticFile('assets/images/'+file)} style={{position:'absolute',width:948,height:1684,top:-545}}/>
      </div>
      <div style={{position:'absolute',left:66,right:66,top:1050}}><Pair>
        <div style={{textAlign:'center',background:C.pinkPale,borderRadius:20,padding:20}}><div style={{fontSize:55,fontWeight:800,color:C.pink}}>XPS</div><div style={{fontSize:33,lineHeight:1.45}}>압출법 · 독립기포 구조<br/>낮은 수분 흡수</div></div>
        <div style={{textAlign:'center',background:'white',border:`2px solid ${C.line}`,borderRadius:20,padding:20}}><div style={{fontSize:55,fontWeight:800}}>EPS</div><div style={{fontSize:33,lineHeight:1.45}}>비드법<br/>알갱이 구조</div></div>
      </Pair><div style={{fontSize:45,fontWeight:800,textAlign:'center',marginTop:25,color:C.blue}}>사용 환경에 맞는 선택</div></div>
    </>}
    <div style={{position:'absolute',top:summary?1350:1335,left:66,right:66,textAlign:'center',fontSize:27,color:C.sub}}>
      {moisture?'연출 이미지 · 흡수율 시험 장면이 아닙니다': '외형 비교용 연출 이미지 · 미세구조 증거 아님'}
      {moisture && <div style={{marginTop:12,fontSize:30}}>낮은 흡수 ≠ 완전 방수</div>}
    </div>
    <div style={{position:'absolute',left:66,right:66,bottom:230,borderTop:`2px solid ${C.line}`,paddingTop:32,textAlign:'center',fontSize:51,fontWeight:700,lineHeight:1.42,whiteSpace:'pre-line'}}>{subtitles[n].join('\n')}</div>
    <Audio src={staticFile(`assets/audio/scene0${n+1}-v2.mp3`)}/>
  </AbsoluteFill>;
};

const Film = ()=><AbsoluteFill>{DURATIONS.map((d,n)=><Sequence key={n} from={DURATIONS.slice(0,n).reduce((a,b)=>a+b,0)} durationInFrames={d}>{[0,2,4].includes(n)?<PhotoScene n={n}/>:<Scene n={n}/>}</Sequence>)}<Sequence from={BODY_FRAMES} durationInFrames={ENDING_FRAMES}><Ending/></Sequence></AbsoluteFill>;
registerRoot(()=><Composition id="XpsVsEpsTestV4" component={Film} width={1080} height={1920} fps={FPS} durationInFrames={BODY_FRAMES+ENDING_FRAMES}/>);

