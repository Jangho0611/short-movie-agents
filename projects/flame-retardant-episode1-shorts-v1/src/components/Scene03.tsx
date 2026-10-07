import {EpisodeScene} from './EpisodeScene';

export const SCENE03_DURATION = 148;

export const Scene03: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/scene03-flow-v1.mp4"
    audio="assets/audio/scene03.wav"
    durationInFrames={SCENE03_DURATION}
    caption={<><div>확산을 늦춰서</div><div>피난 시간을 벌어줍니다</div></>}
    fontSize={56}
    videoDurationInFrames={SCENE03_DURATION}
    videoScale={1.05}
  />
);
