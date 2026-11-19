import React from 'react';
import {AbsoluteFill, Audio, Img, OffthreadVideo, Sequence, staticFile, useCurrentFrame, interpolate} from 'remotion';
import './daesan-ending/approved/fonts';

const green='#146335', ink='#182620', muted='#47594e', paper='#f6f5f1', line='#d8e0d8';
const products=[
 {name:'히든경첩', key:'basic',kg:60,deg:180,cap:'플라스틱 캡'},
 {name:'슬림히든경첩',key:'slim',kg:80,deg:180,cap:'금속 캡 · 자석 고정'},
 {name:'이지히든경첩',key:'easy',kg:50,deg:125,cap:''},
 {name:'슬림이지히든경첩',key:'slim-easy',kg:40,deg:110,cap:''},
];
export const frames=[96,174,180,198,348,258,170];
const tracks=['scene01-tts-v3-breath-c.mp3','scene02-tts-v5.mp3','scene03-tts-v4.mp3','scene04-tts-v4.mp3','scene05-tts-v4.mp3','scene06-tts-v3-breath-c.mp3'];
const panel:React.CSSProperties={background:'white',border:'2px solid '+line,borderRadius:28,padding:'28px 34px'};
const tag:React.CSSProperties={fontSize:35,fontWeight:600,color:muted};
const photo=(key:string,w:number,h:number)=> <Img src={staticFile('assets/images/preview-v1/'+key+'.png')} style={{width:w,height:h,objectFit:'contain',borderRadius:12}}/>;
function Heading({label,title}:{label:string,title:string}){
 return <><div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:18,color:green,fontSize:34,fontWeight:800}}><span style={{width:56,height:7,background:green}}/>{label}</div><div style={{fontSize:76,fontWeight:800,letterSpacing:-3,margin:'18px 0 36px'}}>{title}</div></>;
}
function Hook(){return <><Heading label="대산 건축자재  /  도어 하드웨어" title="히든경첩, 무엇이 다를까요?"/><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>{products.map((p,i)=><div key={p.key} style={{...panel,padding:'26px 10px',textAlign:'center'}}>
 <div style={{height:230,display:'grid',placeItems:'center'}}>{photo(p.key,265,212)}</div><div style={{fontSize:46,fontWeight:800,letterSpacing:-2}}>{p.name}</div><div style={{...tag,fontSize:31,marginTop:12}}>{i<2?'문틀 매립 홈 필요':'문틀 매립 홈 불필요'}</div></div>)}</div><div style={{fontSize:43,marginTop:36,fontWeight:600}}>하중 · 개방각 · 문틀 가공</div></>}
function Angle({deg}:{deg:number}){
 const f=useCurrentFrame(),a=interpolate(f,[10,43],[0,deg],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),r=a*Math.PI/180;
 const path=(rad:number)=>'M '+(185+rad)+' 157 A '+rad+' '+rad+' 0 0 0 '+(185+rad*Math.cos(r))+' '+(157-rad*Math.sin(r));
 return <div style={{...panel,display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',justifyItems:'center',height:200,boxSizing:'border-box'}}><div><div style={tag}>최대 개방각 개념도</div><strong style={{fontSize:72}}>{deg}°</strong></div>
 <svg viewBox="0 0 370 185" width="370" height="180"><path d="M 325 157 A 140 140 0 0 0 45 157" fill="none" stroke="#bac6bc" strokeWidth="4" strokeDasharray="7 7"/><path d="M40 157 H331" stroke="#a2aea2" strokeWidth="4" strokeDasharray="10 7"/><rect x="156" y="163" width="58" height="13" rx="3" fill={ink}/><path d={path(140)} fill="none" stroke={green} strokeWidth="7"/><path d="M185 157 H325" transform={'rotate('+(-a)+' 185 157)'} stroke={green} strokeWidth="10" strokeLinecap="round"/><circle cx="185" cy="157" r="9" fill={ink}/></svg></div>
}
function Mortise({need}:{need:boolean}){
 return <div style={{...panel,display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',justifyItems:'center',height:208,boxSizing:'border-box'}}>
   <div><div style={{...tag,fontSize:32}}>문틀 측면 가공 면 개념도</div><b style={{fontSize:43,letterSpacing:-1.5}}>문틀 매립 홈 {need?'필요':'불필요'}</b></div>
   <svg width="285" height="154" viewBox="0 0 285 154">
     <rect x="46" y="4" width="193" height="146" rx="6" fill="#e8e4da" stroke="#908f84" strokeWidth="3"/>
     {need&&<g>
       <rect x="97" y="21" width="91" height="112" rx="3" fill="#677465"/>
       <path d="M97 21 H188 L177 33 H108 Z" fill="#4d5e50"/>
       <path d="M97 21 L108 33 V121 L97 133 Z" fill="#5c6b5c"/>
       <path d="M188 21 V133 L177 121 V33 Z" fill="#bcc7b6"/>
       <path d="M97 133 L108 121 H177 L188 133 Z" fill="#d1d8cc"/>
       <rect x="108" y="33" width="69" height="88" fill="#98a591"/>
       <rect x="97" y="21" width="91" height="112" rx="3" fill="none" stroke={green} strokeWidth="3"/>
     </g>}
   </svg></div>
}
type Notice = {from:number; text:string; detail?:string; restrictionFrom?:number; warning?:boolean};
const notices:Notice[][] = [
 [
   {from:28, text:products[0].cap+' · 별도 지그 필요'},
   {from:70, text:'카탈로그 설치 지침', detail:'도어당 경첩 3개 설치'},
 ],
 [
   {from:26, text:products[1].cap+' · 별도 지그 필요'},
   {from:65, text:'히든경첩 → 슬림히든경첩', detail:'60kg → 80kg'},
 ],
 [
   {from:0, text:'45T ABS 도어', detail:'폭 900mm · 높이 2,380mm 이하'},
   {from:20, text:'문틀 별도 매립 홈 가공 불필요'},
   {from:43, text:'당기는 방향 히든 마감 가능', restrictionFrom:52},
 ],
 [
   {from:0, text:'35T ABS 도어', detail:'폭 900mm · 높이 2,380mm 이하'},
   {from:20, text:'문틀 별도 매립 홈 가공 불필요'},
   {from:55, text:'당기는 방향 히든 마감 가능'},
   {from:105, text:'45T ABS 도어도 적용 가능', detail:'하중에 따라 경첩 추가 여부 확인 · 발주 전 문의'},
   {from:202, text:'단, 45T 어깨 가공 히든도어에는 사용 불가', warning:true},
 ],
];
function Product({i}:{i:number}){
 const p=products[i],f=useCurrentFrame();
 const visibleNotices = notices[i].filter(notice => f >= notice.from);
 return <><div style={{fontSize:76,fontWeight:800,letterSpacing:-3,marginBottom:36}}>{p.name}</div><div style={{...panel,display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',justifyItems:'center',height:310,boxSizing:'border-box'}}>
 <div><div style={tag}>최대 하중</div><div style={{color:green,fontSize:110,fontWeight:800,lineHeight:1.05}}>{p.kg}<span style={{fontSize:54}}>kg</span></div><div style={{fontSize:38,fontWeight:600,marginTop:10}}>경첩 2개 기준</div></div>
 {photo(i===3?'slim-easy-detail':p.key,i===3?390:i===2?300:172,i===3?234:245)}</div>
 <div style={{marginTop:18,display:'grid',gap:18}}><Angle deg={p.deg}/><Mortise need={i<2}/></div>
 <div style={{display:'grid',gap:12,marginTop:16}}>
 {visibleNotices.map(({from,text,detail,restrictionFrom,warning})=><div key={from} style={{
   opacity:i===3 && from>0 ? interpolate(f-from,[0,4],[0.35,1],{extrapolateRight:'clamp'}) : 1,
   background:warning?'#64382c':'#e2eee3',color:warning?'white':ink,
   borderRadius:20,padding:'14px 20px',fontSize:40,lineHeight:1.2,fontWeight:700,letterSpacing:-1,
 }}>
   <div>{text}</div>{detail&&<div style={{fontWeight:800,marginTop:4}}>{detail}</div>}
   {restrictionFrom!==undefined&&<div style={{visibility:f>=restrictionFrom?'visible':'hidden',background:'#64382c',color:'white',borderRadius:'0 0 20px 20px',padding:'12px 14px',margin:'10px -20px -14px'}}>단, 45T 어깨 가공 히든도어에는 사용 불가</div>}
 </div>)}</div></>
}
function Compare(){const f=useCurrentFrame(),col=f<84?1:f<162?2:3;return <><Heading label="대산 건축자재  /  선택 기준" title="네 가지, 한눈에 비교"/><div style={{...tag,marginBottom:22}}>최대 하중은 경첩 2개 기준</div>
 <div style={{border:'2px solid '+line,borderRadius:24,overflow:'hidden'}}>{[['제품명','최대 하중','개방각','문틀 매립 홈'],...products.map((p,i)=>[p.name,p.kg+'kg',p.deg+'°',i<2?'필요':'불필요'])].map((row,i)=><div key={i} style={{display:'grid',gridTemplateColumns:'2.2fr .91fr .95fr 1.22fr',background:i?'white':'#edf0e9'}}>{row.map((v,j)=><div key={j} style={{display:'flex',alignItems:'center',justifyContent:j?'center':'flex-start',height:i?137:96,paddingLeft:j?0:16,borderBottom:'1px solid '+line,background:j===col?'#d6ead8':undefined,color:j===col?green:ink,fontWeight:j===col||j===0?800:600,fontSize:i?(j?40:38):33,letterSpacing:-1.3}}>{v}</div>)}</div>)}</div></>}
function Body({i}:{i:number}){return <AbsoluteFill style={{fontFamily:'Pretendard, sans-serif',background:paper,color:ink}}><div style={{position:'absolute',top:215,left:98,right:98,textAlign:'center'}}>{i===0?<Hook/>:i===5?<Compare/>:<Product i={i-1}/>}</div><Sequence from={i===3||i===4 ? 27 : 0}><Audio src={staticFile('assets/audio/'+tracks[i])}/></Sequence></AbsoluteFill>}
export function HingePreview(){let start=0;return <AbsoluteFill>{frames.map((length,i)=>{const from=start;start+=length;return <Sequence key={i} from={from} durationInFrames={length}>{i<6?<Body i={i}/>:<OffthreadVideo src={staticFile('daesan-ending/video/daesan-headquarters-ending-approved-v1.mp4')}/>}</Sequence>})}</AbsoluteFill>}
