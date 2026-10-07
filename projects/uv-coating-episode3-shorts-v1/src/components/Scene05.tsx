import {EpisodeScene} from './EpisodeScene';

export const SCENE05_DURATION = 153;

export const Scene05: React.FC = () => (
  <EpisodeScene
    kind="image"
    media="assets/images/episode3-scene05-startframe-v9.png"
    audio="assets/audio/episode3-scene05-tts-v2.wav"
    durationInFrames={SCENE05_DURATION}
    caption={<><div>광택과는 별개라서</div><div>유광도 무광도 가능합니다</div></>}
    fontSize={56}
    imageZoomTo={1.025}
  />
);
