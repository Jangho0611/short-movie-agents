import {AbsoluteFill, Freeze, Sequence, Video, staticFile} from 'remotion';
import {SCENE3} from './brief';

// Scene 3: 깁스한 작은 대산이 Flow
// Duration: 4.5초 (108 frames @ 24fps)
// The original Flow runs for 96 frames at its native rate, followed by a
// 12-frame hold on its final stable frame.

export const Scene3: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={SCENE3.flowDurationInFrames}>
        <Video muted src={staticFile('assets/video/scene03-flow-v1.mp4')} />
      </Sequence>
      <Sequence
        from={SCENE3.flowDurationInFrames}
        durationInFrames={SCENE3.holdDurationInFrames}
      >
        <Freeze frame={SCENE3.flowDurationInFrames - 1}>
          <Video muted src={staticFile('assets/video/scene03-flow-v1.mp4')} />
        </Freeze>
      </Sequence>
    </AbsoluteFill>
  );
};
