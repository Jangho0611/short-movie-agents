import {EpisodeScene, Green} from './EpisodeScene';

export const SCENE02_DURATION = 60;

export const Scene02: React.FC = () => (
  <EpisodeScene
    kind="image"
    media="assets/images/episode2-scene02-startframe-v1.png"
    audio="assets/audio/episode2-scene02-tts-v1.wav"
    durationInFrames={SCENE02_DURATION}
    caption={<Green>아닙니다</Green>}
    fontSize={66}
  />
);
