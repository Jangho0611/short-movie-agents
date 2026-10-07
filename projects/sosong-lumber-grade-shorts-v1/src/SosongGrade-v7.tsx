import {DaesanEnding} from './daesan-ending/DaesanEnding';
import React, {CSSProperties, useEffect, useState} from 'react';
import {AbsoluteFill, Audio, Freeze, Img, OffthreadVideo, Sequence, cancelRender, continueRender, delayRender, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Scene5Ending} from './scene5/Scene5Ending';
import {PRETENDARD} from './scene5/fonts';
import timing from './timing.json';

// Content scenes: Figma's clear hierarchy; Linear's restrained information alignment.
// Existing product geometry and original brand ending always take precedence.
const INK = '#202924';
const GREEN = '#235C45';
const SUB = '#65716A';
const PAPER = '#FDFDFD'; // Matches the opaque approved character videos (253,253,253).
const MINT = '#DDECE2';
const bundleFile = 'assets/images/scene01-vertex-reference-v4.png';
const comparisonFile = 'assets/images/scene02-reference-v1.png';
const fit = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

const LayoutAudit: React.FC = () => {
  const [handle]=useState(()=>delayRender('Checking safe text and character layout'));
  useEffect(()=>{
    document.fonts.ready.then(()=>{
      try {
        const textElements=Array.from(document.querySelectorAll<HTMLElement>('[data-safe-text]'));
        for(const element of textElements){
          const range=document.createRange();range.selectNodeContents(element);
          const rect=range.getBoundingClientRect();
          const css=getComputedStyle(element);
          const lineHeight=parseFloat(css.lineHeight);
          if(rect.left<64 || rect.right>990 || rect.top<130 || rect.bottom>1700 || element.getBoundingClientRect().height>lineHeight*2.1){
            throw new Error(`Text safe-area/line-count failure: ${element.textContent}`);
          }
        }
        const overlap=(a:DOMRect,b:DOMRect)=>a.left<b.right && a.right>b.left && a.top<b.bottom && a.bottom>b.top;
        const products=Array.from(document.querySelectorAll('[data-product]'));
        for(const char of Array.from(document.querySelectorAll('[data-character]'))){
          const c=char.getBoundingClientRect();
          if(products.some(p=>overlap(c,p.getBoundingClientRect())) || textElements.some(t=>overlap(c,t.getBoundingClientRect()))){
            throw new Error('Opaque character rectangle covers a product or text');
          }
        }
        continueRender(handle);
      } catch(error){cancelRender(error instanceof Error?error:new Error(String(error)));}
    });
  },[handle]);
  return null;
};

const Text: React.FC<{children: React.ReactNode; top: number; left?: number; width?: number;
  size?: number; weight?: number; color?: string; center?: boolean; style?: CSSProperties}> =
  ({children,top,left=88,width=880,size=40,weight=600,color=INK,center=false,style}) =>
  <div data-safe-text style={{position:'absolute',top,left,width,fontSize:size,fontWeight:weight,
    lineHeight:1.28,letterSpacing:'-0.035em',whiteSpace:'pre-line',textAlign:center?'center':'left',color,...style}}>{children}</div>;

const Heading: React.FC<{lines: [string,string]; size?:number; top?:number}> = ({lines,size=78,top=330}) =>
  <Text top={top} size={size} weight={800} style={{lineHeight:1.24}}>
    <span style={{whiteSpace:'nowrap'}}>{lines[0]}</span><br/>
    <span style={{whiteSpace:'nowrap',color:GREEN,boxShadow:`inset 0 -25px ${MINT}`}}>{lines[1]}</span>
  </Text>;

const Frame: React.FC<{number:number;label:string;children:React.ReactNode}> = ({number,label,children}) =>
  <AbsoluteFill style={{background:PAPER,color:INK,fontFamily:PRETENDARD,overflow:'hidden'}}>
    <div style={{position:'absolute',left:88,top:171,width:8,height:30,background:GREEN}}/>
    <Text top={166} left={114} width={750} size={29} weight={600} color={SUB}>{label}</Text>
    <Text top={168} left={868} width={100} size={25} color={SUB} style={{textAlign:'right',letterSpacing:'0.02em'}}>{String(number).padStart(2,'0')} / 06</Text>
    {children}
    <LayoutAudit/>
  </AbsoluteFill>;

// A geometric viewport over the unmodified approved A1. The polygon only excludes
// adjacent burned-in copy and character outside the bundle; no product pixels are re-drawn.
const Bundle: React.FC<{x:number;y:number;width:number}> = ({x,y,width}) =>
  <svg data-product="bundle" viewBox="153 407 312 200" width={width} height={width*200/312}
    style={{position:'absolute',left:x,top:y,overflow:'hidden'}}>
    <defs><clipPath id="bundle-crop"><polygon points="153,501 376,407 465,418 465,491 278,607 153,592"/></clipPath></defs>
    <image href={staticFile(bundleFile)} width="768" height="1376" clipPath="url(#bundle-crop)"/>
  </svg>;

// Opaque MP4 is retained intact: only empty margins are cropped. No chroma key,
// luma key, recoloring or character edge processing. Original audio is muted.
const Character: React.FC<{file:string;x:number;y:number;scale?:number}> = ({file,x,y,scale=0.82}) => {
  const frame=useCurrentFrame();
  return <div data-character style={{position:'absolute',left:x,top:y,width:460*scale,height:570*scale,overflow:'hidden'}}>
    <Freeze frame={Math.min(frame,118)}>
      <OffthreadVideo src={staticFile(`assets/video/${file}`)} muted
        style={{position:'absolute',left:-150*scale,top:-395*scale,width:720*scale,height:1280*scale}}/>
    </Freeze>
  </div>;
};

const Hook: React.FC = () => {
  const frame=useCurrentFrame();
  const scale=interpolate(frame,[0,12],[0.97,1],fit);
  return <Frame number={1} label="소송각재 · 등급과 품질">
    <Text top={264} size={38} weight={600} color={SUB}>소송각재도 등급이 있어요?</Text>
    <Heading top={360} lines={['같은 소송각재인데','왜 품질이 다를까?']}/>
    <div style={{position:'absolute',inset:0,transform:`scale(${scale})`,transformOrigin:'650px 1020px'}}>
      <Bundle x={294} y={790} width={670}/>
    </div>
    <Character file="daesani-point-right.mp4" x={73} y={1240} scale={0.65}/>
  </Frame>;
};

const Markings: React.FC = () => {
  const frame=useCurrentFrame();
  const opacity=interpolate(frame,[8,18],[0,1],fit);
  return <Frame number={2} label="제품 정보 · 표기 위치">
    <Text top={330} size={78} weight={800}>단면 프린팅</Text>
    <Bundle x={114} y={770} width={840}/>
    {/* One location marker on the visible front end face; no printed content. */}
    <svg width={1080} height={1920} style={{position:'absolute',inset:0,opacity}}>
      <path d="M190 700 L150 700 L150 1088 L195 1088" stroke={GREEN} strokeWidth={3} fill="none"/>
      <circle cx="195" cy="1088" r="9" fill="none" stroke={GREEN} strokeWidth="3"/>
    </svg>
    <Text top={638} left={128} width={420} size={36}>단면 프린팅</Text>
    <Text top={1390} size={44} weight={600}>{'제품에 따라 등급 정보가\n표시되기도 합니다'}</Text>
    <Text top={1520} size={32} color={SUB}>번들 포장 시에도 라벨로 표기되어 있습니다</Text>
    <Text top={1610} size={27} color={SUB}>표기 방식과 기준은 제품마다 다를 수 있음</Text>
  </Frame>;
};

const Market: React.FC = () => <Frame number={3} label="대산 현업 경험 · 주문 표현">
  <Text top={342} size={81} weight={800}>자재 구매 시엔 보통</Text>
  <Text top={452} size={60} weight={800} color={GREEN}>“다루끼 주세요 / 투바이 주세요”</Text>
  <div style={{position:'absolute',left:88,top:589,width:865,height:3,background:'#CCD6CF'}}/>
  <Bundle x={123} y={778} width={824}/>
  <Text top={1415} size={43}>등급보다 품목·규격 중심으로 주문</Text>
  <Text top={1565} size={27} color={SUB}>대산의 현업 경험을 바탕으로 한 설명입니다</Text>
</Frame>;

const BundleLimits: React.FC = () => {
  const frame=useCurrentFrame();
  const progress=interpolate(frame,[8,92],[0,1],fit);
  const eased=progress*progress*(3-2*progress);
  const cx=205+355*eased;
  const cy=1235-190*eased;
  const zoom=1.4;
  return <Frame number={4} label="묶음 상태 · 확인의 한계">
    <Heading size={64} lines={['한 단씩 묶여 있는 소송각재','풀기 전엔 안쪽 확인이 어렵습니다']}/>
    <Bundle x={113} y={792} width={842}/>
    <svg width={1080} height={1920} style={{position:'absolute',inset:0}}>
      <defs>
        <clipPath id="inspection-lens"><circle cx={cx} cy={cy} r="125"/></clipPath>
        <clipPath id="inspection-product"><polygon points="153,501 376,407 465,418 465,491 278,607 153,592"/></clipPath>
      </defs>
      <path d={`M ${cx+92} ${cy+92} L ${cx+178} ${cy+178}`} stroke={INK} strokeWidth="29" strokeLinecap="round"/>
      <g clipPath="url(#inspection-lens)">
        <circle cx={cx} cy={cy} r="125" fill={PAPER}/>
        {/* Magnify the same visible pixels about the moving lens center. */}
        <g transform={`translate(${cx} ${cy}) scale(${zoom}) translate(${-cx} ${-cy})`}>
          <svg x="113" y="792" width="842" height={842*200/312} viewBox="153 407 312 200" overflow="hidden">
            <image href={staticFile(bundleFile)} width="768" height="1376" clipPath="url(#inspection-product)"/>
          </svg>
        </g>
      </g>
      <circle cx={cx} cy={cy} r="127" fill="none" stroke={GREEN} strokeWidth="9"/>
      <circle cx={cx} cy={cy} r="119" fill="none" stroke="#FFFFFF" strokeWidth="3"/>
    </svg>
    <Text top={1465} size={46} weight={700}>묶음 안쪽의 상태는?</Text>
    <Text top={1570} size={27} color={SUB}>포장 내부를 투시하거나 재현한 이미지가 아닙니다</Text>
  </Frame>;
};

const Quality: React.FC = () => {
  const frame=useCurrentFrame();
  const opacity=interpolate(frame,[8,17],[0,1],fit);
  return <Frame number={5} label="품질 확인 · 실제 상태 차이">
    <Heading size={77} lines={['같은 이름 · 같은 규격','≠ 항상 같은 상태']}/>
    <Text top={646} left={115} width={400} size={36} weight={700}>반듯한 각재</Text>
    <Text top={646} left={595} width={370} size={36} weight={700} color={GREEN}>휨이 보이는 각재</Text>
    <div data-product="comparison" style={{position:'absolute',left:70,top:718,width:904,height:605,overflow:'hidden'}}>
      <Img src={staticFile(comparisonFile)} style={{position:'absolute',width:904,height:1672*904/941,top:-657*904/941,left:0}}/>
    </div>
    <div style={{position:'absolute',left:88,top:1394,width:864,height:3,background:'#CBD5CE',opacity}}/>
    <Text top={1445} size={46} weight={600} style={{opacity}}>휨 · 뒤틀림 · 옹이 · 갈라짐</Text>
    <Text top={1564} size={27} color={SUB}>상태 차이 설명용 이미지 · 등급별 실물 비교 아님</Text>
  </Frame>;
};

const Conclusion: React.FC = () => <Frame number={6} label="소송각재 · 비교의 기준">
  <Heading size={62} lines={['같은 다루끼 · 같은 투바이','다 똑같은 자재는 아닙니다']}/>
  <Text top={601} size={34}>이름과 규격이 같아도 실제 품질은 다를 수 있습니다</Text>
  <Bundle x={270} y={708} width={680}/>
  <Character file="daesani-open-arms-explain.mp4" x={83} y={1160} scale={0.80}/>
</Frame>;

// Same 170 frames @ 30fps and the exact 24fps frame mapping as the source's
// DarukkiVsTwobuyFinal/EndingAtOriginalSpeed. Dependency files are byte-identical.
export const ApprovedEnding: React.FC = () => {
  const frame=useCurrentFrame();
  return <AbsoluteFill>
    <Freeze frame={Math.min(135,Math.floor(frame*24/30))}><Scene5Ending/></Freeze>
    <Audio src={staticFile('assets/audio/ending-approved-v3.mp3')}/>
  </AbsoluteFill>;
};

const components=[Hook,Markings,Market,BundleLimits,Quality,Conclusion];
export const SosongGrade: React.FC = () => <AbsoluteFill>
  {timing.scenes.map((scene,index)=>{
    const Component=components[index];
    return <Sequence key={scene.id} from={scene.from} durationInFrames={scene.durationInFrames}>
      <Component/>
      <Audio src={staticFile(`assets/audio/${scene.audio}`)}/>
    </Sequence>;
  })}
  <Sequence from={timing.ending.from} durationInFrames={170}><DaesanEnding/></Sequence>
</AbsoluteFill>;
