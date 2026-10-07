import {EpisodeScene} from './EpisodeScene';

export const SCENE01_DURATION = 97;

export const Scene01: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/scene01-veo-v2-trimmed.mp4"
    audio="assets/audio/scene01.wav"
    durationInFrames={SCENE01_DURATION}
    caption="방염판은 절대 안 탈까?"
    fontSize={64}
    videoDurationInFrames={SCENE01_DURATION}
  />
);
