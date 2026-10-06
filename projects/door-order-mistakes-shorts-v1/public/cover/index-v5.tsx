import React from 'react';
import {AbsoluteFill, Img, staticFile, delayRender, continueRender, cancelRender} from 'remotion';
import {FrontDoor} from '../../src/OrderDiagrams';

// Cover-local font loading; no video source or global font changes.
if (typeof document !== 'undefined') {
  for (const [weight, name] of [['500','Medium'],['600','SemiBold'],['800','ExtraBold'],['900','Black']]) {
    const handle = delayRender(`Cover v2 Pretendard ${weight}`);
    const face = new FontFace('Pretendard', `url(${staticFile(`assets/fonts/Pretendard-${name}.woff2`)})`, {weight});
    face.load().then(loaded => {document.fonts.add(loaded); continueRender(handle);}).catch(cancelRender);
  }
}

const GREEN = '#123628';
const DARK = '#17201D';
const ACCENT = '#D95C4A';
const CARD = '#F4EFE7';

export const DoorOrderMistakesCoverV5 = () => {
  return (
    <AbsoluteFill
      style={{
        background: '#EEE8DE',
        fontFamily: 'Pretendard, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* category */}
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 333,
          width: 8,
          height: 30,
          borderRadius: 4,
          background: ACCENT,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 114,
          top: 326,
          fontSize: 30,
          fontWeight: 600,
          color: DARK,
        }}
      >
        건축자재 상식 · 도어 주문
      </div>

      {/* headline card */}
      <div
        style={{
          position: 'absolute',
          left: 53,
          top: 395,
          width: 717,
          height: 353,
          borderRadius: 36,
          background: '#FFF1B8',
          boxShadow: '0 18px 50px rgba(30,35,30,0.10)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 39,
            top: 46,
            fontSize: 60,
            lineHeight: '92px',
            fontWeight: 900,
            letterSpacing: -2.4,
            color: DARK,
          }}
        >
          <div>도어 주문</div>
          <div>사소한 착오가</div>
          <div style={{color: ACCENT}}>재주문으로?!</div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: 48,
            top: 30,
            display: 'flex',
            gap: 8,
          }}
        >
          <div style={{width:12,height:12,borderRadius:99,background:ACCENT}} />
          <div style={{width:12,height:12,borderRadius:99,background:'#C9C7C1'}} />
        </div>
      </div>

      {/* One large Hero group. FrontDoor returns <g>, so an SVG viewport is required.
          Tight viewBox preserves its original geometry, including the frame and baseline.
          Door viewport: x260 y760 w480 h672; visible frame approx x296..704, y762..1423.
          All hero graphics use the existing approved vector/PNG without reshaping. */}
      <svg
        viewBox="200 60 400 560"
        width={480}
        height={672}
        style={{position:'absolute', left:260, top:760, overflow:'visible'}}
        aria-label="도어 주문 Hero"
      >
        <FrontDoor />
      </svg>

      {/* Original PNG has substantial transparent padding. 495px = v1 275px × 1.8.
          Opaque face/body stays roughly y1030..1390; no flip, crop, or deformation. */}
      <Img
        src={staticFile('assets/images/daesani-cover-open-arms.png')}
        style={{position:'absolute', left:-45, top:855, width:495, height:'auto', objectFit:'contain'}}
      />

      {/* Short connectors bind the three specification cards to this door. */}
      <svg width={1080} height={1920} style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <g fill="none" stroke="#B8AC9C" strokeWidth={3}>
          <path d="M320 903L340 918" />
          <path d="M700 922H684" />
          <path d="M690 1094H650" />
        </g>
      </svg>
      {[
        {text:'좌 ↔ 우', x:30, y:795},
        {text:'4방 ↔ 3방', x:700, y:868},
        {text:'48Ø ↔ 55Ø', x:690, y:1040},
      ].map(({text,x,y}) => (
        <div key={text} style={{
          position:'absolute',left:x,top:y,width:340,height:108,
          boxSizing:'border-box',padding:'24px 28px',borderRadius:24,
          background:'#FFFFFF',border:'2px solid #DDD7CC',
          display:'flex',alignItems:'center',justifyContent:'center',gap:14,
          fontSize:42,lineHeight:'54px',fontWeight:800,color:DARK,
          whiteSpace:'nowrap',letterSpacing:-1.2,
        }}>
          <span>{text}</span><span style={{color:ACCENT}}>×</span>
        </div>
      ))}

      {/* brand lockup */}
      <div
        style={{
          position: 'absolute',
          left: 710,
          top: 1406,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Img
          src={staticFile('assets/logos/daesanlogo2.png')}
          style={{
            width: 78,
            height: 78,
            objectFit: 'contain',
          }}
        />

        <div style={{marginLeft:12}}>
          <div
            style={{
              fontSize:46,
              lineHeight:'50px',
              fontWeight:900,
              color:GREEN,
              letterSpacing:-1.2,
            }}
          >
            DAESAN
          </div>

          <div
            style={{
              marginTop:4,
              fontSize:26,
              fontWeight:500,
              color:GREEN,
            }}
          >
            대산종합건축자재
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
