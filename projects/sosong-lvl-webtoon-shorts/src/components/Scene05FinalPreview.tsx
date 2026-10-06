import {AbsoluteFill, Freeze, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';

const LAST_NORMAL_FRAME = 80;

export const Scene05FinalPreview: React.FC = () => {
  const frame = useCurrentFrame();
  const clampedFrame = Math.min(frame, LAST_NORMAL_FRAME);

  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff'}}>
      <Freeze frame={clampedFrame}>
        <OffthreadVideo
          src={staticFile('assets/video/scene05-veo-v2.mp4')}
          muted
          style={{width: '100%', height: '100%', objectFit: 'contain'}}
        />
      </Freeze>
    </AbsoluteFill>
  );
};
