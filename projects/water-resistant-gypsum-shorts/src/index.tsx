import React from 'react';
import {AbsoluteFill, Audio, Composition, Freeze, Img, Sequence, interpolate, registerRoot, staticFile, useCurrentFrame} from 'remotion';
import {Scene5Ending} from './scene5/Scene5Ending';
import {PRETENDARD} from './scene5/fonts';

const durations = [105, 132, 174, 99];
const green = '#245F52';
const captions = ['습기 많은 공간,\n일반 석고보드도 괜찮을까?', '습기 대응이 필요한 곳엔\n방수석고보드', '욕실·주방처럼\n습기가 많은 공간에', '공간에 맞는 선택이\n올바른 시공의 시작'];
const Drop = ({size = 90}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 100 100"><path d="M50 7 C43 23 20 46 20 64 A30 30 0 0 0 80 64 C80 46 57 23 50 7Z" fill="#73BED6"/><path d="M34 63 Q34 76 46 79" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/></svg>;
const Room = ({kitchen}: {kitchen?: boolean}) => <svg width="330" height="330" viewBox="0 0 300 300" fill="none" stroke={green} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
  {kitchen ? <><path d="M35 142H265V258H35Z M35 188H265 M150 190V258 M65 116V55H235V116 M150 55V116"/><path d="M175 140V111Q175 85 201 93V106 M165 149H238"/><circle cx="95" cy="215" r="3"/></> : <><path d="M40 172H262L242 240H67Z M78 241V260 M228 241V260 M69 167V77Q69 39 117 43V66"/><path d="M98 76H145 M104 94V105 M123 94V115 M141 94V105"/></>}
</svg>;

const Scene = ({n}: {n: number}) => {
  const frame = useCurrentFrame();
  const rise = interpolate(frame, [0, 12], [14, 0], {extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{background: '#F7F5F0', color: '#24342E', fontFamily: PRETENDARD, padding: '155px 78px'}}>
    <div style={{fontSize: 30, letterSpacing: 4, color: green, fontWeight: 700}}>자재 선택 가이드 <span style={{float:'right'}}>0{n+1} / 04</span></div>
    <div style={{height: 5, background: '#DDE5DF', marginTop: 28}}><div style={{height:'100%',width:`${(n+1)*25}%`,background:green}}/></div>
    <div style={{fontSize: 76, fontWeight: 800, lineHeight: 1.22, marginTop: 70, whiteSpace:'pre-line', letterSpacing:-3}}>{['습기 많은 곳,\n그냥 써도 될까요?', '선택 기준은\n습기 대응', '어디에\n사용할까요?', '공간을 보고,\n자재를 고르세요.'][n]}</div>
    <div style={{position:'absolute',top:560,left:78,right:78,height:740,transform:`translateY(${rise}px)`}}>
      {n === 0 && <><Img src={staticFile('assets/images/xi-natural-gypsum-board-angle-v1.jpeg')} style={{width:924,height:650,objectFit:'cover',borderRadius:30}}/><div style={{position:'absolute',right:25,top:24,background:'#F7F5F0',borderRadius:30,padding:20,display:'flex',alignItems:'center',gap:12}}><Drop/><span style={{fontSize:80,fontWeight:800}}>?</span></div><div style={{fontSize:30,marginTop:22,color:'#59645D'}}>일반 석고보드 · 실제 제품 사진</div></>}
      {n === 1 && <div style={{display:'flex',flexDirection:'column',gap:24}}><div style={{background:'#E8E7E1',borderRadius:28,padding:42,fontSize:43,fontWeight:600}}>일반 석고보드 <span style={{display:'block',fontSize:30,marginTop:16,color:'#657068'}}>사용 공간의 습기 조건 확인</span></div><div style={{background:green,color:'white',borderRadius:28,padding:42,display:'flex',alignItems:'center',gap:24}}><Drop size={130}/><div style={{fontSize:60,fontWeight:800}}>방수석고보드<div style={{fontSize:33,marginTop:22,fontWeight:500}}>습기가 많은 공간에 사용하는 선택지</div></div></div><div style={{fontSize:28,color:'#6E7771',padding:15}}>제품 외형을 대신한 정보 그래픽</div></div>}
      {n === 2 && <><div style={{display:'flex',gap:24}}>{[false,true].map((k,i)=><div key={i} style={{flex:1,background:'white',borderRadius:32,textAlign:'center',padding:'30px 0'}}><Room kitchen={k}/><div style={{fontSize:56,fontWeight:700,marginTop:16}}>{k?'주방':'욕실'}</div></div>)}</div><div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24,marginTop:60,fontSize:40,color:green}}><Drop size={70}/>습기가 많은 실내 공간</div></>}
      {n === 3 && <div style={{background:green,color:'white',borderRadius:36,padding:'55px 45px',textAlign:'center'}}><Drop size={145}/><div style={{fontSize:70,fontWeight:800,marginTop:20}}>방수석고보드</div><div style={{height:2,background:'#709B8C',margin:'44px 0'}}/><div style={{fontSize:45,lineHeight:1.7}}>공간의 습기 조건 확인<br/>용도에 맞는 자재 선택</div></div>}
    </div>
    <div style={{position:'absolute',left:78,right:78,bottom:230,borderTop:'2px solid #D5DDD5',paddingTop:36,fontSize:52,fontWeight:700,textAlign:'center',lineHeight:1.45,whiteSpace:'pre-line'}}>{captions[n]}</div>
    <Audio src={staticFile(`assets/audio/scene0${n+1}-v1.mp3`)}/>
  </AbsoluteFill>;
};
// Exact wrapper from the approved final: 170 frames at 30fps, original 24fps animation.
const EndingAtOriginalSpeed = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill><Freeze frame={Math.min(135, Math.floor((frame * 24) / 30))}><Scene5Ending/></Freeze><Audio src={staticFile('assets/audio/scene06-tts-v3.mp3')}/></AbsoluteFill>;
};
const Film = () => <AbsoluteFill>{durations.map((d,n)=><Sequence key={n} from={durations.slice(0,n).reduce((a,b)=>a+b,0)} durationInFrames={d}><Scene n={n}/></Sequence>)}<Sequence from={510} durationInFrames={170}><EndingAtOriginalSpeed/></Sequence></AbsoluteFill>;
registerRoot(()=><Composition id="WaterResistantGypsumTest" component={Film} width={1080} height={1920} fps={30} durationInFrames={680}/>);
