import {EpisodeScene} from './EpisodeScene';

export const SCENE04_DURATION = 159;

export const Scene04: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode3-scene04-flow-v1.mp4"
    audio="assets/audio/episode3-scene04-tts-v2.wav"
    durationInFrames={SCENE04_DURATION}
    caption={<><div>이렇게 굳으면 표면이 단단해지고</div><div>스크래치에도 강해집니다</div></>}
    fontSize={52}
    videoDurationInFrames={159}
    videoScale={1.05}
  />
);
