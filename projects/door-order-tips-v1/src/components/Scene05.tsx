import {AbsoluteFill, Audio, Img, staticFile} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';

export const SCENE05_DURATION = 104;

const Green: React.FC<React.PropsWithChildren> = ({children}) => (
  <span style={{color: COLORS.daesanGreen}}>{children}</span>
);

export const Scene05: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: COLORS.canvas, color: COLORS.ink, fontFamily: PRETENDARD}}>
    <Audio src={staticFile('assets/audio/scene05.mp3')} />
    <div style={{position: 'absolute', top: SAFE_AREA.captionTop, left: SAFE_AREA.horizontal, right: SAFE_AREA.horizontal}}>
      <div style={{...TYPOGRAPHY.caption}}>④ 로고 확인</div>
      <div style={{marginTop: 28, fontSize: 32, fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.035em', whiteSpace: 'nowrap'}}>
        로고 있으면 <Green>더도어</Green>(보급형) · 없으면 <Green>영림도어</Green>(고급형)
      </div>
    </div>
    <div style={{position: 'absolute', top: 490, left: SAFE_AREA.horizontal, right: SAFE_AREA.horizontal, display: 'flex', gap: 24}}>
      {[
        {image: 'thedoor-composited.jpg', brand: '더도어', grade: '보급형', label: '로고 있음'},
        {image: 'yeongrim-door-nologo.jpg', brand: '영림도어', grade: '고급형', label: '로고 없음'},
      ].map(({image, brand, grade, label}) => (
        <div key={brand} style={{flex: 1, minWidth: 0, overflow: 'hidden', backgroundColor: COLORS.surface, border: `1px solid ${COLORS.hairline}`, borderTop: `8px solid ${COLORS.daesanGreen}`, borderRadius: 24, boxShadow: '0 14px 36px rgba(23,23,23,0.06)'}}>
          <div style={{padding: '34px 28px', ...TYPOGRAPHY.comparisonLabel, color: COLORS.daesanGreen}}>{brand}<span style={{marginLeft: 12, fontSize: 24, fontWeight: 600, color: COLORS.inkMuted}}>{grade}</span></div>
          <Img src={staticFile(`assets/images/${image}`)} style={{display: 'block', width: '100%', height: 660, objectFit: 'cover', objectPosition: 'center'}} />
          <div style={{padding: '30px 28px', fontSize: 32, fontWeight: 700, textAlign: 'center'}}>{label}</div>
        </div>
      ))}
    </div>
  </AbsoluteFill>
);
