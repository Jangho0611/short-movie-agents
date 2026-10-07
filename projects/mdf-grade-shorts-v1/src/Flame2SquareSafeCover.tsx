import {AbsoluteFill, Img, staticFile} from 'remotion';

const FONT = 'Pretendard, Apple SD Gothic Neo, sans-serif';

export const Flame2SquareSafeCover: React.FC = () => (
  <AbsoluteFill style={{fontFamily: FONT, overflow: 'hidden', backgroundColor: '#3A5267'}}>
    <Img src={staticFile('assets/images/scene01-start-v4.png')} style={{position: 'absolute', inset: 0, width: 1080, height: 1920, objectFit: 'cover'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(33,52,68,.28) 0%,rgba(33,52,68,.08) 48%,rgba(33,52,68,0) 65%)'}} />
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 14% 58%,rgba(117,157,181,.34),transparent 31%),radial-gradient(circle at 90% 18%,rgba(218,230,236,.16),transparent 28%)'}} />
    <div style={{position: 'absolute', left: 88, top: 286, display: 'flex', alignItems: 'center', gap: 14, fontSize: 28, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.035em'}}>
      <span style={{display: 'block', width: 6, height: 34, borderRadius: 2, background: '#EB674E'}} />
      <span>건축자재 상식 · 방염 처리</span>
    </div>
    <div style={{position: 'absolute', left: 52, top: 340, width: 640, height: 310, boxSizing: 'border-box', padding: '30px 32px', borderRadius: 28, background: 'linear-gradient(135deg,rgba(29,55,73,.92),rgba(48,77,96,.78))', border: '1px solid rgba(255,255,255,.22)', boxShadow: '0 18px 50px rgba(14,32,45,.22)', backdropFilter: 'blur(10px)'}}>
      <div style={{position: 'absolute', right: 28, top: 25, display: 'flex', gap: 10}}><span style={{width: 12, height: 12, borderRadius: 99, background: '#EB674E'}} /><span style={{width: 12, height: 12, borderRadius: 99, background: 'rgba(255,255,255,.55)'}} /></div>
      <div style={{fontSize: 66, lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.055em', color: '#FFFFFF'}}>
        <div>안쪽에 숨은 이 골조</div><div>방염 처리</div><div style={{color: '#EB674E'}}>해야 할까요?</div>
      </div>
    </div>
    <div style={{position: 'absolute', left: 88, top: 1376, display: 'flex', alignItems: 'center', gap: 16, color: '#FFFFFF'}}>
      <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width: 64, height: 64, objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />
      <div><div style={{fontSize: 30, fontWeight: 800, letterSpacing: '0.06em', lineHeight: 1}}>DAESAN</div><div style={{fontSize: 19, fontWeight: 600, marginTop: 7}}>대산종합건축자재</div></div>
    </div>
  </AbsoluteFill>
);
