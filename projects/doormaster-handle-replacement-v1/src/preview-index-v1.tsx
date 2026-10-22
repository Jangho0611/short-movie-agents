import React from 'react';
import {AbsoluteFill,Img,staticFile,useCurrentFrame,Composition,registerRoot,Sequence} from 'remotion';
import {DoorMasterBodyCaptionV4} from './DoorMasterBodyCaptionV4';
import {Scene04PreviewV1} from './Scene04PreviewV1';
import {PRETENDARD} from './daesan-ending/approved/fonts';
const specs=[
 {frames:111,start:0,image:'scene01-before-candidate-v1.png',onset:12,cues:[{at:12,lines:['오래된 방문','손잡이만 바꿀까?']}],note:'기존 손잡이 · 교체 전 외관 예시'},
 {frames:145,start:111,image:'scene02-after-candidate-v1.png',onset:11,cues:[{at:11,lines:['문짝은 그대로','느낌은 새롭게!']}],note:'교체 후 외관 예시 · 실제 설치 호환성 미검증'},
 {frames:140,start:256,image:'scene03-handle-removed-candidate-v2.png',onset:16,cues:[{at:16,lines:['교체 전','조건부터 확인!']}],note:'손잡이 탈거 연출 · 실제 타공 치수 미검증'},
 {frames:225,start:396,image:'',onset:13,cues:[],note:''},
 {frames:146,start:621,image:'scene02-after-candidate-v1.png',onset:7,cues:[{at:7,lines:['조건이 맞으면','손잡이만 교체!']}],note:'외관 예시 · 제품·설치 조건 확인 필요'},
];
function Visual({scene=0}:{scene:number}){const f=useCurrentFrame(),s=specs[scene];if(scene===3)return <Scene04PreviewV1/>;const cue=s.cues.filter(c=>f>=c.at).at(-1);return <AbsoluteFill style={{background:'#F4F1E9',fontFamily:PRETENDARD}}><Img src={staticFile('assets/images/'+s.image)} style={{position:'absolute',inset:0,width:1080,height:1920}}/>{cue&&<DoorMasterBodyCaptionV4 lines={cue.lines} local={f-cue.at}/>}<div style={{position:'absolute',left:64,right:64,bottom:190,padding:'22px 26px',background:'rgba(244,241,233,.96)',color:'#303431',fontSize:30,fontWeight:600,lineHeight:1.4}}>{s.note}</div></AbsoluteFill>}
const Body=()=> <AbsoluteFill>{specs.map((s,i)=><Sequence key={i} from={s.start} durationInFrames={s.frames}><Visual scene={i}/></Sequence>)}</AbsoluteFill>;
registerRoot(()=> <><Composition id="HandleBodyVisualV1" component={Body} durationInFrames={767} fps={30} width={1080} height={1920}/>{specs.map((s,i)=><Composition key={i} id={'HandleScene'+(i+1)+'VisualV1'} component={Visual} defaultProps={{scene:i}} durationInFrames={s.frames} fps={30} width={1080} height={1920}/>)}</>);
