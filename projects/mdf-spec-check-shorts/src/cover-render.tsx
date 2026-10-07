import {AbsoluteFill, Composition, Img, registerRoot, staticFile} from 'remotion';
import {PRETENDARD} from './scene5/fonts';

const Cover: React.FC = () => <AbsoluteFill style={{fontFamily: PRETENDARD, overflow: 'hidden'}}>
  <Img src={staticFile('assets/images/scene01-final-1080x1920.png')}
    style={{width: 1080, height: 1920, transform: 'scale(1.18)', transformOrigin: '50% 84%'}} />
  <div style={{position: 'absolute', left: 76, top: 444, color: '#146335',
    fontSize: 30, fontWeight: 700, lineHeight: '40px', paddingLeft: 29,
    borderLeft: '9px solid #146335'}}>건축자재 상식 · MDF</div>
  <div style={{position: 'absolute', left: 44, top: 496, padding: 32,
    borderRadius: 24, backgroundColor: '#c5b0f4', color: '#171a18',
    fontSize: 86, fontWeight: 800, letterSpacing: -3, lineHeight: 1.2,
    whiteSpace: 'pre'}}>내가 산 <span style={{color: '#146335'}}>MDF</span>,{'\n'}왜 가볍고 잘 휘지?</div>
  <div style={{position: 'absolute', left: 76, top: 1384, display: 'flex',
    alignItems: 'center', gap: 16}}>
    <Img src={staticFile('assets/logos/daesanlogo2.png')}
      style={{width: 82, height: 82, objectFit: 'contain'}} />
    <div>
      <div style={{fontFamily: 'Arial, sans-serif', fontSize: 43, fontWeight: 700,
        letterSpacing: 2, color: '#146335', lineHeight: '49px'}}>DAESAN</div>
      <div style={{fontSize: 25, fontWeight: 700, color: '#303733',
        lineHeight: '36px'}}>대산종합건축자재</div>
    </div>
  </div>
</AbsoluteFill>;

registerRoot(() => <Composition id="MdfCover" component={Cover}
  durationInFrames={1} fps={24} width={1080} height={1920} />);
