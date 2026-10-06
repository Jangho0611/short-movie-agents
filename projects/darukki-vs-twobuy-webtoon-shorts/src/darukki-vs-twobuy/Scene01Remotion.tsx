import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../scene5/fonts';

export const SCENE01_REMOTION_FPS = 30;
export const SCENE01_REMOTION_DURATION_IN_FRAMES = 141;

export const Scene01Remotion: React.FC = () => {
  const frame = useCurrentFrame();
  const midpoint = Math.floor((SCENE01_REMOTION_DURATION_IN_FRAMES - 1) / 2);
  const scale = interpolate(
    frame,
    [0, midpoint, SCENE01_REMOTION_DURATION_IN_FRAMES - 1],
    [1, 1.01, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const captionOpacity = interpolate(
    frame,
    [0, 6, SCENE01_REMOTION_DURATION_IN_FRAMES - 7, SCENE01_REMOTION_DURATION_IN_FRAMES - 1],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill style={{backgroundColor: '#fff', overflow: 'hidden'}}>
      <Img
        src={staticFile('references/scene01-hook-reference-approved-v1.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          transformOrigin: '50% 50%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 130,
          left: 60,
          right: 60,
          color: '#1e1e1e',
          fontFamily: PRETENDARD,
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.3,
          textAlign: 'center',
          whiteSpace: 'pre-line',
          textShadow: '0 1px 2px rgba(0,0,0,0.15)',
          opacity: captionOpacity,
        }}
      >
        {'다루끼랑 투바이,\n뭐가 다른 걸까?'}
      </div>

      <Audio src={staticFile('assets/audio/scene01-tts-final-v1.mp3')} />
    </AbsoluteFill>
  );
};
