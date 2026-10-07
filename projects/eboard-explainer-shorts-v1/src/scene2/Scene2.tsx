import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {TopTitle} from '../components/TopTitle';
import {PRETENDARD} from '../scene5/fonts';

const LayerLabel: React.FC<{enter: number; left: number; text: string; top: number}> = ({enter, left, text, top}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [enter, enter + 10], [0.3, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        padding: '10px 18px',
        backgroundColor: '#F7F1E7',
        border: '2px solid #171717',
        color: '#171717',
        fontFamily: PRETENDARD,
        fontSize: 36,
        fontWeight: 800,
        letterSpacing: '-0.035em',
        opacity,
      }}
    >
      {text}
    </div>
  );
};

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 150], [1, 1.012], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#F7F2E9'}}>
      <Img
        src={staticFile('references/scene02-base-v1.png')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
      <TopTitle><div>이보드는 어떻게</div><div>구성돼 있을까?</div></TopTitle>
      <LayerLabel enter={107} left={610} top={610} text="부직포" />
      <LayerLabel enter={84} left={540} top={900} text="PP 표면판" />
      <LayerLabel enter={24} left={300} top={1080} text="XPS 심재" />
    </AbsoluteFill>
  );
};
