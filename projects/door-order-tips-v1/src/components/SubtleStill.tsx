import type {ReactNode} from 'react';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {MOTION} from '../design/tokens';

export const EntrySettle: React.FC<{
  children: ReactNode;
  scaleFrom?: number;
}> = ({children, scaleFrom = MOTION.entryScale}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, MOTION.entryFrames - 1], [scaleFrom, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const opacity = interpolate(
    frame,
    [0, MOTION.opacityFrames - 1],
    [MOTION.entryOpacity, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    },
  );

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export const SubtleStill: React.FC<{
  src: string;
}> = ({src}) => (
  <EntrySettle>
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </AbsoluteFill>
  </EntrySettle>
);
