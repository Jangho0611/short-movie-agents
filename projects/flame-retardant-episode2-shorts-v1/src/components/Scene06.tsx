import {EpisodeScene} from './EpisodeScene';

export const SCENE06_DURATION = 185;

export const Scene06: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/scene06-veo-v2.mp4"
    audio="assets/audio/scene06.wav"
    durationInFrames={SCENE06_DURATION}
    caption={<><div>불을 막는 게 아니라</div><div>안전할 시간을 만드는 것</div></>}
    fontSize={54}
    videoDurationInFrames={SCENE06_DURATION}
  />
);
