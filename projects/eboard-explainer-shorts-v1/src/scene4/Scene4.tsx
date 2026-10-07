import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {TopTitle} from '../components/TopTitle';
import {PRETENDARD} from '../scene5/fonts';

const emphasis = (frame: number, points: [number, number, number]) =>
  interpolate(frame, points, [1, 1.025, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const left = emphasis(frame, [35, 50, 65]);
  const right = emphasis(frame, [60, 75, 90]);
  const label = {
    position: 'absolute' as const,
    top: 1810,
    width: 410,
    color: '#171717',
    fontFamily: PRETENDARD,
    fontSize: 44,
    fontWeight: 800,
    textAlign: 'center' as const,
  };

  return (
    <AbsoluteFill style={{backgroundColor: '#F7F2E9'}}>
      <Img
        src={staticFile('references/scene04-base-v1.png')}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
      <TopTitle><div>최종 마감에 따라</div><div>표면이 달라집니다</div></TopTitle>
      <div style={{...label, left: 70, transform: `scale(${left})`}}>도배용</div>
      <div style={{...label, right: 70, transform: `scale(${right})`}}>페인트용</div>
    </AbsoluteFill>
  );
};
