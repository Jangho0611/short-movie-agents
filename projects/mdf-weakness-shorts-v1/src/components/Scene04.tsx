import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const SCENE04_DURATION = 168;
const WIPE_START = 72;
const WIPE_END = 96;

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();
  const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
  const zoom = interpolate(frame, [0, WIPE_END], [1, 1.055], clamp);
  const wipe = interpolate(frame, [WIPE_START, WIPE_END], [0, 100], {
    ...clamp,
    easing: Easing.inOut(Easing.cubic),
  });
  const pan = interpolate(frame, [WIPE_START, SCENE04_DURATION - 1], [-18, 18], clamp);

  return (
    <AbsoluteFill style={{backgroundColor: '#e4dfd7', overflow: 'hidden'}}>
      <Img
        src={staticFile('references/products/surface-close-v4.jpg')}
        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% 50%', transform: `scale(${zoom})`}}
      />
      <AbsoluteFill style={{clipPath: `inset(0 ${100 - wipe}% 0 0)`}}>
        <Img
          src={staticFile('generated/scene4-sheet-finish-interior-v1.png')}
          style={{width: '100%', height: '100%', objectFit: 'cover', transform: `translateX(${pan}px) scale(1.045)`}}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
