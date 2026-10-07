import {AbsoluteFill, Img, staticFile} from 'remotion';
import {PRETENDARD} from './design/fonts';

const Cover: React.FC<{visual: string}> = ({visual}) => (
  <AbsoluteFill style={{fontFamily: PRETENDARD, backgroundColor: '#F6F2E9', overflow: 'hidden'}}>
    <Img src={staticFile(visual)} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(248,247,243,0.72) 0%, rgba(248,247,243,0.22) 34%, rgba(248,247,243,0) 58%)'}} />

    <div style={{position: 'absolute', top: 144, left: 92, right: 92}}>
      <div style={{fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: '#146335', marginBottom: 24}}>
        건축자재 상식 · UV코팅판
      </div>
      <div style={{fontSize: 88, lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.055em', color: '#252724', textShadow: '0 2px 14px rgba(255,255,255,0.32)'}}>
        <div>UV코팅판,</div>
        <div>자르면 옆면도</div>
        <div><span style={{color: '#146335'}}>코팅될까?</span></div>
      </div>
    </div>

    <div style={{position: 'absolute', left: 92, bottom: 72, display: 'flex', alignItems: 'center', gap: 18, color: '#0F3A2A'}}>
      <Img src={staticFile('assets/logos/daesanlogo2.png')} style={{width: 58, height: 58, objectFit: 'contain'}} />
      <div>
        <div style={{fontSize: 28, fontWeight: 800, letterSpacing: '0.08em'}}>DAESAN</div>
        <div style={{fontSize: 19, fontWeight: 600, marginTop: 3}}>대산종합건축자재</div>
      </div>
    </div>
  </AbsoluteFill>
);

export const Episode2CoverFinal: React.FC = () => <Cover visual="covers/vertex/episode2-cover-visual-b-v1.png" />;
