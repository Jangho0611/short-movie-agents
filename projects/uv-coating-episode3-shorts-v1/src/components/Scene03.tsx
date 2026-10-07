import {EpisodeScene} from './EpisodeScene';

export const SCENE03_DURATION = 150;

export const Scene03: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode3-scene03-flow-v1.mp4"
    audio="assets/audio/episode3-scene03-tts-v2.wav"
    durationInFrames={SCENE03_DURATION}
    caption={<><div>자외선을 쏘여서</div><div>도료를 순간적으로 굳힙니다</div></>}
    fontSize={56}
    videoDurationInFrames={150}
    videoScale={1.05}
  />
);
