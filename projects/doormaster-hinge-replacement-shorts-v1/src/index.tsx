import React from 'react';
import {AbsoluteFill, Audio, Composition, Img, OffthreadVideo, Sequence, interpolate, registerRoot, staticFile, useCurrentFrame} from 'remotion';
import timeline from '../docs/tts-timeline-v4.json';
import './series.css';

type Scene = typeof timeline.scenes[number];
const sign = staticFile('assets/images/doormaster-series-sign-v2.png');
const ending = staticFile('daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4');
const progress = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

function Hook({frame}: {frame: number}) {
  const emphasis = progress(frame, 4, 22);
  return <>
    <svg viewBox="185 0 550 390" style={{height:625,marginBottom:38}} aria-label="문짝의 경첩 위치와 확대도">
      <rect x="242" y="28" width="181" height="326" rx="3" fill="#dfcfb9" stroke="#49463f" strokeWidth="5"/>
      <circle cx="401" cy="199" r="6" fill="#49463f"/>
      <path d="M243 111 H472 L511 152" stroke="#49463f" strokeWidth="3" fill="none"/>
      <circle cx="243" cy="111" r={10+6*emphasis} fill="#ffe600" stroke="#49463f" strokeWidth="3"/>
      <circle cx="588" cy="196" r="97" fill="#fffdf6" stroke="#49463f" strokeWidth="3"/>
      <svg x="532" y="127" width="112" height="138" viewBox="70 88 310 365">
        <image href={staticFile('assets/images/scene02-hinge-comparison-v2.svg')} width="900" height="560"/>
      </svg>
    </svg>
    <div className="hook">문짝만 바꾸는데,<br/><mark style={{backgroundSize: (45 + 55 * progress(frame, 0, 20)) + '% 100%'}}>경첩까지?</mark></div>
  </>;
}

function Mortise({frame}: {frame:number}) {
  return <><div className="eyebrow">나비경첩 · 설치 원리 개념도</div><h1>문틀에 남는 홈</h1>
    <Img src={staticFile('assets/images/scene03-doorframe-hinge-mortise-v5.svg')} style={{width:'100%',marginTop:32}}/>
    <p>{frame < 103 ? <>날개가 들어갔던 자리와<br/>나사 구멍이 남아요</> : <>홈의 위아래를 잇는<br/><mark>세로 단면을 볼까요?</mark></>}</p></>;
}

function Repair({scene, frame}: {scene: Scene; frame: number}) {
  const steps = scene.repairAnimationFrames!;
  const [fill, sand, film] = steps.map(({frames}) => progress(frame, frames[0], frames[1]-1));
  const active = frame < steps[1].frames[0] ? 0 : frame < steps[2].frames[0] ? 1 : 2;
  const surface = 290 - 14 * fill * (1-sand);
  return <><div className="eyebrow">홈의 세로 단면 · 시공 원리</div><h1>경첩 홈 보수</h1>
    <svg className="section" viewBox="0 0 880 440" aria-label="문틀 홈 보수 단면 개념도">
      <path d="M40 290 H280 V360 H600 V290 H840 V428 H40Z" fill="#c6ad91"/>
      <path d="M280 360 H600 V290 H280Z" fill="#e4ddd0" transform={'translate(0 '+(360*(1-fill))+') scale(1 '+fill+')'}/>
      <path d={'M280 290 Q440 '+(2*surface-290)+' 600 290 Z'} fill="#e4ddd0"/>
      <path d="M40 290 H280 V360 H600 V290 H840" fill="none" stroke="#50483f" strokeWidth="3"/>
      <rect x="40" y="280" height="10" width={800*film} fill="#807d72"/>
      {sand>0 && sand<1 && <rect x={250+330*sand} y={surface-10} width="74" height="9" rx="3" fill="#49463f"/>}
    </svg>
    <div className="steps">{['퍼티 메우기','면 다듬기','필름 마감'].map((label,i)=><div key={label} className={i===active?'active':''}><small>0{i+1}</small>{label}</div>)}</div>
    <p>{film===1?'인테리어필름 마감 완료':['퍼티로 홈을 메웁니다','표면을 평평하게 다듬습니다','인테리어필름을 덮습니다'][active]}</p></>;
}

function Film({frame}: {frame: number}) {
  // Scene-local 133 is absolute 738, the end of the measured conditional pause.
  const frameFocus = progress(frame, 16, 23) * (1 - progress(frame, 54, 62));
  const doorFocus = progress(frame, 54, 62);
  const comparison = progress(frame, 126, 133);
  const frameActive = frame >= 16 && frame < 55;
  const doorActive = frame >= 55;
  const diagramLayer: React.CSSProperties = {position:'absolute',inset:0,display:'flex',flexDirection:'column',justifyContent:'center'};
  return <>
    {comparison < 1 && <div style={{...diagramLayer,opacity:1-comparison}}>
      <h1>문틀과 문짝의 마감</h1>
      <svg viewBox="0 0 900 640" style={{width:'100%',marginTop:45}} aria-label="문틀 테두리와 안쪽 ABS 문짝의 마감 부위">
        <path d="M76 596 V42 H413 V596 H387 V69 H102 V596Z" fill="#d4c8b5" stroke="#48453f" strokeWidth="4"/>
        <rect x="107" y="74" width="275" height="521" fill="#ded6c7" stroke="#48453f" strokeWidth="3"/>
        <path d="M340 350 H365" stroke="#514f48" strokeWidth="8" strokeLinecap="round"/>
        <path d="M89 594 V56 H400 V594" fill="none" stroke="#ffe600" strokeWidth="15" opacity={frameFocus}/>
        <rect x="117" y="84" width="255" height="501" rx="2" fill="none" stroke="#ffe600" strokeWidth="7" opacity={doorFocus}/>
        <g fill="none" stroke="#68645b" strokeWidth="3">
          <path d="M400 136 H492"/><path d="M272 422 H492"/>
        </g>
        <g fill="#303431" fontSize="44"><text x="509" y="150">문틀</text><text x="509" y="435">새 ABS 도어</text></g>
        {frameActive && <text x="509" y="205" fontSize="39" fill="#303431">현장 인테리어필름</text>}
        {doorActive && <text x="509" y="490" fontSize="39" fill="#303431">데코필름 방식</text>}
      </svg>
    </div>}
    {frame >= 126 && <div style={{...diagramLayer,opacity:comparison,background:'#f7f5f0'}}>
      <div className="eyebrow">YL40 · 표면 비교 예시</div>
      <h1 style={{fontSize:66}}><mark>색상 · 표면 질감 차이 가능</mark></h1>
      <div style={{marginTop:55,padding:18,border:'2px solid #ccc6bb',borderRadius:16,background:'#fffdf8'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',textAlign:'center',fontSize:40,marginBottom:18}}><span>인테리어필름 사양</span><span>ABS 표면 사양</span></div>
        <Img src={staticFile('assets/images/yl40-film-vs-abs-centered-v2.png')} style={{display:'block',width:'100%',height:'auto'}}/>
      </div>
    </div>}
  </>;
}

function Checklist({frame}: {frame:number}) {
  return <><Img className="small-sign" src={sign}/><h1>문짝 교체 전!</h1>
    <div className="checks">{['기존 경첩 자리','문틀 마감','새 도어의 필름 마감 방식'].map((item,i)=>{
      const amount=progress(frame,[48,83,125][i],[55,90,132][i]);
      return <div key={item}><b style={{backgroundColor:amount===1?'#ffe600':'transparent'}}>{amount===1?'✓':i+1}</b>{item}</div>;
    })}</div></>;
}

function SceneView({scene}: {scene:Scene}) {
  const frame=useCurrentFrame();
  const content = () => {
    switch(scene.scene) {
      case 1: return <Hook frame={frame}/>;
      case 2: return <><div className="eyebrow">펼친 구조 개념도</div><h1>경첩이 달라지면?</h1><Img src={staticFile("assets/images/scene02-hinge-comparison-v2.svg")}/><div style={{display:"flex",justifyContent:"space-around",fontSize:51}}><span>나비경첩</span><span>이지경첩</span></div><p style={{alignSelf:"flex-end",marginRight:14,textAlign:"center",fontSize:48,opacity:progress(frame,48,56)}}><mark>이지경첩은</mark> 작은 날개가<br/>빈자리로 포개집니다</p></>;
      case 3: return <Mortise frame={frame}/>;
      case 4: return <Repair frame={scene.sceneFrames[0]+frame} scene={scene}/>;
      case 5: return <Film frame={frame}/>;
      case 6: return <Checklist frame={frame}/>;
      default: throw new Error('Unknown scene');
    }
  };
  return <AbsoluteFill className="scene"><div className="page">{content()}</div></AbsoluteFill>;
}

function Episode() {
  return <AbsoluteFill>{timeline.scenes.map(scene=><React.Fragment key={scene.scene}>
    <Sequence name={'Scene '+scene.scene} from={scene.sceneFrames[0]} durationInFrames={scene.sceneFrames[1]-scene.sceneFrames[0]}><SceneView scene={scene}/></Sequence>
    <Sequence name={'TTS '+scene.scene} from={scene.ttsFrames[0]} durationInFrames={scene.ttsFrames[1]-scene.ttsFrames[0]}><Audio src={staticFile(scene.ttsFile)}/></Sequence>
  </React.Fragment>)}
    <Sequence name="승인 공통 엔딩" from={timeline.endingStartFrame} durationInFrames={timeline.endingFrames}><OffthreadVideo src={ending} style={{width:'100%',height:'100%'}}/></Sequence>
  </AbsoluteFill>;
}
registerRoot(()=> <Composition id="HingeReplacement" component={Episode} width={1080} height={1920} fps={timeline.fps} durationInFrames={timeline.totalFrames}/>);
