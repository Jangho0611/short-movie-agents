import {AbsoluteFill} from 'remotion';
import {EpisodeScene} from './EpisodeScene';

export const SCENE01_DURATION = 105;

export const Scene01: React.FC = () => (
  <AbsoluteFill>
    <EpisodeScene
      kind="video"
      media="assets/video/scene01-flow-final.mp4"
      audio="assets/audio/scene01.wav"
      durationInFrames={SCENE01_DURATION}
      caption="벽 안쪽에 숨은 이 골조, 방염 처리해야 할까요?"
      fontSize={58}
      videoDurationInFrames={SCENE01_DURATION}
    />
    <div
      style={{
        position: 'absolute',
        left: 850,
        top: 1690,
        width: 100,
        height: 100,
        borderRadius: 18,
        background: 'linear-gradient(180deg, #7B756B 0%, #898379 100%)',
        filter: 'blur(7px)',
        transform: 'scale(1.12)',
      }}
    />
  </AbsoluteFill>
);
