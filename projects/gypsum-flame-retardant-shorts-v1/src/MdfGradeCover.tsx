import {AbsoluteFill, Img, staticFile} from 'remotion';
import {PRETENDARD} from './design/fonts';

const GREEN = '#146335';
const LOGO_GREEN = '#123628';
const label: React.CSSProperties = {position: 'absolute', top: 870, width: 42, textAlign: 'center', fontSize: 25, fontWeight: 800, color: '#292929'};

export const MdfGradeCover: React.FC = () => (
  <AbsoluteFill style={{fontFamily: PRETENDARD, overflow: 'hidden', backgroundColor: '#F7F7F5'}}>
    <Img src={staticFile('assets/images/scene01-start-v16.png')} style={{position: 'absolute', inset: 0, width: 1080, height: 1920, objectFit: 'cover'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(247,247,245,.96) 0%,rgba(247,247,245,.72) 31%,rgba(247,247,245,0) 55%)'}} />
    <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{position: 'absolute', inset: 0}}>
      <rect x="76" y="290" width="9" height="40" rx="4.5" fill={GREEN} />
      <text x="105" y="318" fontFamily={PRETENDARD} fontSize="30" fontWeight="700" letterSpacing="-0.5" fill="#30302E">건축자재 상식 · MDF</text>
      <text x="76" y="465" fontFamily={PRETENDARD} fontSize="92" fontWeight="800" letterSpacing="-3" fill={GREEN}>E0, E1 MDF,</text>
      <text x="76" y="590" fontFamily={PRETENDARD} fontSize="92" fontWeight="800" letterSpacing="-3" fill="#171717">뭐가 다를까?</text>
      <text x="788" y="1570" fontFamily="Arial, sans-serif" fontSize="43" fontWeight="700" letterSpacing="2" fill={LOGO_GREEN}>DAESAN</text>
      <text x="788" y="1609" fontFamily={PRETENDARD} fontSize="25" fontWeight="700" letterSpacing="-0.5" fill={LOGO_GREEN}>대산종합건축자재</text>
    </svg>
    <div style={{...label, left: 797}}>E0</div><div style={{...label, left: 906}}>E1</div>
    <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{position: 'absolute', left: 690, top: 1538, width: 82, height: 82, objectFit: 'contain'}} />
  </AbsoluteFill>
);
