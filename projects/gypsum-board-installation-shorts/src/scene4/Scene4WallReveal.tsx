import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';

const WIDTH = 720;
const REVEAL_START = 12;
const REVEAL_END = 84;

export const Scene4WallReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(
    frame,
    [REVEAL_START, REVEAL_END],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.cubic),
    },
  );

  return (
    <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#c2beb5'}}>
      <Img
        src={staticFile('references/scene05-start-v1.png')}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: `${reveal * 100}%`,
          overflow: 'hidden',
        }}
      >
        <Img
          src={staticFile('references/scene05-end-v1.png')}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: WIDTH,
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
