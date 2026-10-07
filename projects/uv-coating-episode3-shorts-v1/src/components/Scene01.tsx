import {EpisodeScene} from './EpisodeScene';

export const SCENE01_DURATION = 132;

export const Scene01: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode3-scene01-veo-v2.mp4"
    audio="assets/audio/episode3-scene01-tts-v3.wav"
    durationInFrames={SCENE01_DURATION}
    caption="UV코팅 = 반짝이는 유광?"
    fontSize={64}
    videoDurationInFrames={112}
    videoScale={1.02}
  />
);
