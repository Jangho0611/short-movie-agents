import {AbsoluteFill, Img, staticFile} from 'remotion';

const FONT = 'Pretendard, Apple SD Gothic Neo, sans-serif';
const green = '#146335';

const Brand: React.FC<{light?: boolean; left?: number}> = ({light = false, left = 88}) => {
  const color = light ? '#FFFFFF' : '#0F3A2A';
  return (
    <div style={{position: 'absolute', left, top: 1376, display: 'flex', alignItems: 'center', gap: 16, color}}>
      <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width: 64, height: 64, objectFit: 'contain', filter: light ? 'brightness(0) invert(1)' : undefined}} />
      <div>
        <div style={{fontSize: 30, fontWeight: 800, letterSpacing: '0.06em', lineHeight: 1}}>DAESAN</div>
        <div style={{fontSize: 19, fontWeight: 600, marginTop: 7}}>대산종합건축자재</div>
      </div>
    </div>
  );
};

const Category: React.FC<{light?: boolean; flame?: boolean}> = ({light = false, flame = false}) => (
  <div style={{position: 'absolute', left: 88, top: 286, display: 'flex', alignItems: 'center', gap: 14, fontSize: 28, fontWeight: 700, color: light ? '#FFFFFF' : green, letterSpacing: '-0.035em'}}>
    <span style={{display: 'block', width: 6, height: 34, borderRadius: 2, background: flame ? '#EB674E' : green}} />
    <span>건축자재 상식 · {flame ? '방염판' : 'UV코팅판'}</span>
  </div>
);

const Headline: React.FC<{lines: string[]; light?: boolean; accent?: string}> = ({lines, light = false, accent = green}) => (
  <div style={{position: 'absolute', left: 52, top: 340, width: 720, height: 356, boxSizing: 'border-box', padding: '34px 36px', borderRadius: 32, background: light ? 'linear-gradient(135deg,rgba(29,55,73,.92),rgba(48,77,96,.78))' : 'linear-gradient(135deg,rgba(237,247,241,.96),rgba(248,245,235,.88))', border: `1px solid ${light ? 'rgba(255,255,255,.22)' : 'rgba(20,99,53,.15)'}`, boxShadow: light ? '0 18px 50px rgba(14,32,45,.22)' : '0 18px 50px rgba(71,60,38,.10)', backdropFilter: 'blur(10px)'}}>
    <div style={{position: 'absolute', right: 28, top: 25, display: 'flex', gap: 10}}><span style={{width: 12, height: 12, borderRadius: 99, background: accent}} /><span style={{width: 12, height: 12, borderRadius: 99, background: light ? 'rgba(255,255,255,.55)' : 'rgba(32,35,33,.22)'}} /></div>
    <div style={{fontSize: 76, lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.055em', color: light ? '#FFFFFF' : '#202321'}}>
      {lines.map((line, index) => <div key={line} style={{color: index === lines.length - 1 ? accent : undefined}}>{line}</div>)}
    </div>
  </div>
);

export const UV1SquareSafeCover: React.FC = () => (
  <AbsoluteFill style={{fontFamily: FONT, overflow: 'hidden', background: '#F8F4EA'}}>
    <Img src={staticFile('covers/square-safe/sources/uv1-original-cover-clean.png')} style={{position: 'absolute', inset: 0, width: 1080, height: 1920, objectFit: 'cover'}} />
    <Category />
    <div style={{position: 'absolute', left: 88, top: 370, fontSize: 72, lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.055em', color: '#202321'}}>
      <div>왜 더 비싼</div><div>UV코팅판을</div><div style={{color: green}}>쓸까요?</div>
    </div>
    <Brand left={88} />
  </AbsoluteFill>
);

export const UV2SquareSafeCover: React.FC = () => (
  <AbsoluteFill style={{fontFamily: FONT, overflow: 'hidden', backgroundColor: '#F6F2E9'}}>
    <Img src={staticFile('covers/square-safe/sources/uv2-visual.png')} style={{position: 'absolute', inset: 0, width: 1080, height: 1920, objectFit: 'cover', transform: 'translateY(-34px) scale(.93)'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(248,247,243,.66) 0%,rgba(248,247,243,.30) 38%,rgba(248,247,243,0) 58%)'}} />
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 8% 64%,rgba(207,226,214,.32),transparent 30%),linear-gradient(120deg,rgba(255,255,255,.10),rgba(215,190,145,.08))'}} />
    <Category />
    <Headline lines={['UV코팅판,', '자르면 옆면도', '코팅될까?']} />
    <Brand />
  </AbsoluteFill>
);

export const UV3SquareSafeCover: React.FC = () => (
  <AbsoluteFill style={{fontFamily: FONT, overflow: 'hidden', backgroundColor: '#F7F8F9'}}>
    <Img src={staticFile('covers/square-safe/sources/uv3-visual.png')} style={{position: 'absolute', inset: 0, width: 1080, height: 1920, objectFit: 'cover'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(255,255,255,.45) 0%,rgba(255,255,255,.15) 42%,rgba(255,255,255,0) 60%)'}} />
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 60%,rgba(202,226,212,.30),transparent 30%),radial-gradient(circle at 88% 20%,rgba(214,223,226,.34),transparent 30%)'}} />
    <Category />
    <Headline lines={['UV코팅 =', '반짝이는', '유광?']} />
    <Brand left={720} />
  </AbsoluteFill>
);

export const Flame1SquareSafeCover: React.FC = () => (
  <AbsoluteFill style={{fontFamily: FONT, overflow: 'hidden', backgroundColor: '#3A5267'}}>
    <Img src={staticFile('covers/square-safe/sources/flame1-visual.png')} style={{position: 'absolute', inset: 0, width: 1080, height: 1920, objectFit: 'cover'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(33,52,68,.28) 0%,rgba(33,52,68,.08) 48%,rgba(33,52,68,0) 65%)'}} />
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 14% 58%,rgba(117,157,181,.34),transparent 31%),radial-gradient(circle at 90% 18%,rgba(218,230,236,.16),transparent 28%)'}} />
    <Category light flame />
    <Headline lines={['방염판은', '절대 안', '탈까?']} light accent="#EB674E" />
    <Brand left={720} />
  </AbsoluteFill>
);
