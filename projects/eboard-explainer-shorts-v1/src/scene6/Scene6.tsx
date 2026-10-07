import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {TopTitle} from '../components/TopTitle';
import {SCENE6} from './brief';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(
    frame,
    [0, 52, SCENE6.durationInFrames - SCENE6.finalHoldInFrames],
    [1, 1.015, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill style={{backgroundColor: '#F7F2E9'}}>
      <Img
        src={staticFile('references/scene06-base-v1.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
      <Sequence durationInFrames={39}>
        <TopTitle><div>마감 전에는 꼭!</div></TopTitle>
      </Sequence>
      <Sequence from={39} durationInFrames={SCENE6.durationInFrames - 39}>
        <TopTitle><div>이음부 처리는</div><div>꼼꼼하게</div></TopTitle>
      </Sequence>
    </AbsoluteFill>
  );
};
