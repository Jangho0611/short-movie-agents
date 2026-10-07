import type {CSSProperties} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../scene5/fonts';

export const TopTitle: React.FC<{children: React.ReactNode; style?: CSSProperties}> = ({children, style}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const translateY = interpolate(frame, [0, 12], [12, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', top: 128, left: 88, right: 88, color: '#171717', fontFamily: PRETENDARD, fontSize: 78, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.045em', wordBreak: 'keep-all', opacity, transform: `translateY(${translateY}px)`, ...style}}>
      {children}
    </div>
  );
};
