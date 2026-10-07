import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {TopTitle} from '../components/TopTitle';
import {PRETENDARD} from '../scene5/fonts';

const labelStyle = {
  position: 'absolute' as const,
  top: 1690,
  width: 430,
  textAlign: 'center' as const,
  color: '#171717',
  fontFamily: PRETENDARD,
  fontSize: 40,
  fontWeight: 800,
};

const emphasis = (frame: number, points: [number, number, number]) =>
  interpolate(frame, points, [1, 1.02, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const left = emphasis(frame, [15, 35, 55]);
  const right = emphasis(frame, [55, 85, 115]);

  return <AbsoluteFill style={{backgroundColor: '#F7F2E9'}}>
    <Img
      src={staticFile('references/scene03-base-v1.png')}
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
    <TopTitle><div>별도 석고보드 공정을</div><div>줄일 수 있습니다</div></TopTitle>
    <div style={{...labelStyle, left: 48, transform: `scale(${left})`}}>XPS + 석고보드</div>
    <div style={{...labelStyle, right: 48, transform: `scale(${right})`}}>이보드</div>
  </AbsoluteFill>
};
