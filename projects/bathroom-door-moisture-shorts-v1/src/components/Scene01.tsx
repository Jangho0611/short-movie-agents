import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const SCENE01_DURATION = 93; // 3.888s @ 24fps (scene01-v2.mp3)

export const Scene01: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENE01_DURATION], [1, 1.08], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const transformStyle = 'scale(' + scale + ')';

  return (
    <AbsoluteFill style={{backgroundColor: '#FFFFFF', overflow: 'hidden'}}>
      <Img
        src={staticFile('assets/images/scene01-start-v1.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: transformStyle,
          transformOrigin: 'center center',
        }}
      />
      <Audio src={staticFile('assets/audio/scene01-v2.mp3')} />
    </AbsoluteFill>
  );
};
