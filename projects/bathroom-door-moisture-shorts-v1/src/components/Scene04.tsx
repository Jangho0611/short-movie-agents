import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const SCENE04_DURATION = 144; // 6.000s @ 24fps (scene04-v5.mp3)

const WET_HOLD_END = 55;
const CROSSFADE_END = 70;

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();

  const introOpacity = interpolate(frame, [0, 4], [0, 1], {extrapolateRight: 'clamp'});

  const wetBaseOpacity = interpolate(frame, [WET_HOLD_END, CROSSFADE_END], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const dryOpacity = interpolate(frame, [WET_HOLD_END, CROSSFADE_END], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const wetOpacity = wetBaseOpacity * introOpacity;

  return (
    <AbsoluteFill style={{backgroundColor: '#FFFFFF'}}>
      <AbsoluteFill style={{opacity: wetOpacity}}>
        <Img
          src={staticFile('assets/images/scene04-wet-v1.png')}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{opacity: dryOpacity}}>
        <Img
          src={staticFile('assets/images/scene04-dry-v1.png')}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
