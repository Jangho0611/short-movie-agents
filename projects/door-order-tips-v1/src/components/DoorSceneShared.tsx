import {AbsoluteFill, Audio, Easing, Img, interpolate, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../design/fonts';
import {COLORS, SAFE_AREA, TYPOGRAPHY} from '../design/tokens';
import {EASING_STANDARD} from '../ending/tokens';

export const green = COLORS.daesanGreen;
export const Highlight: React.FC<React.PropsWithChildren> = ({children}) => <span style={{color: green}}>{children}</span>;
export const progress = (frame: number, start: number, end: number) => interpolate(frame, [start, end], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(...EASING_STANDARD)});
export const DoorShell: React.FC<React.PropsWithChildren<{audio: string; title: string; subtitle: React.ReactNode}>> = ({audio, title, subtitle, children}) => (
  <AbsoluteFill style={{background: COLORS.canvas, color: COLORS.ink, fontFamily: PRETENDARD}}>
    <Audio src={staticFile(`assets/audio/${audio}.mp3`)} />
    <div style={{position: 'absolute', top: SAFE_AREA.captionTop, left: SAFE_AREA.horizontal, right: SAFE_AREA.horizontal}}>
      <div style={{...TYPOGRAPHY.caption}}>{title}</div>
      <div style={{marginTop: 28, fontSize: 32, fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.035em', whiteSpace: 'nowrap'}}>{subtitle}</div>
    </div>
    {children}
  </AbsoluteFill>
);
export const Cards: React.FC<React.PropsWithChildren> = ({children}) => <div style={{position: 'absolute', top: 490, left: 88, right: 88, display: 'flex', gap: 24}}>{children}</div>;
export const DoorCard: React.FC<React.PropsWithChildren<{title: string}>> = ({title, children}) => (
  <div style={{flex: 1, minWidth: 0, overflow: 'hidden', background: COLORS.surface, border: `1px solid ${COLORS.hairline}`, borderTop: `8px solid ${green}`, borderRadius: 24, boxShadow: '0 14px 36px rgba(23,23,23,0.06)'}}>
    <div style={{padding: '34px 28px', ...TYPOGRAPHY.comparisonLabel, color: green}}>{title}</div>{children}
  </div>
);
export const CharacterScene: React.FC<{audio: string; ending?: boolean}> = ({audio, ending = false}) => {
  return <AbsoluteFill style={{background: '#F5F5F3', fontFamily: PRETENDARD, color: COLORS.ink, overflow: 'hidden'}}>
    <Audio src={staticFile(`assets/audio/${audio}.mp3`)} />
    <OffthreadVideo src={staticFile('assets/video/daesan-motion-v1.mp4')} muted style={{position:'absolute', top:0, left:0, width:1080, height:1920, objectFit:'cover'}} />
    <div style={{position: 'absolute', top: 230, left: 70, right: 70, textAlign: 'center', fontSize: 64, fontWeight: 800, lineHeight: 1.4, letterSpacing: '-0.035em'}}>
      {ending ? <><div>이 <Highlight>4가지</Highlight>만 기억하면</div><div>도어 발주 절대 안 틀립니다</div></> : <><div>도어 발주 어렵다고요?</div><div>이 <Highlight>4가지</Highlight>만 알면 끝</div></>}
    </div>
  </AbsoluteFill>;
};
