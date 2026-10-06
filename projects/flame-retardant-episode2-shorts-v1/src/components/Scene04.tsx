import {EpisodeScene} from './EpisodeScene';

export const SCENE04_DURATION = 174;

export const Scene04: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/scene04-final.mp4"
    audio="assets/audio/scene04.wav"
    durationInFrames={SCENE04_DURATION}
    videoDurationInFrames={SCENE04_DURATION}
    caption={<><div>마감재 뒤 골조는 안 보이니</div><div>방염 의무 없음</div></>}
    fontSize={52}
  />
);
