import {EpisodeScene} from './EpisodeScene';

export const SCENE04_DURATION = 159;

export const Scene04: React.FC = () => (
  <EpisodeScene
    kind="image"
    media="assets/images/scene04-start-v11.png"
    audio="assets/audio/scene04.wav"
    durationInFrames={SCENE04_DURATION}
    caption={<><div>정해진 기준으로</div><div>검사를 통과해야 해요</div></>}
    fontSize={52}
  />
);
