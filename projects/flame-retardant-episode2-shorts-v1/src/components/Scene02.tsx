import {EpisodeScene} from './EpisodeScene';

export const SCENE02_DURATION = 155;

export const Scene02: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/scene02-veo-v2-trimmed.mp4"
    audio="assets/audio/scene02.wav"
    durationInFrames={SCENE02_DURATION}
    caption={<><div>완전 불연이 아니라</div><div>확산을 늦추는 처리</div></>}
    fontSize={54}
    videoDurationInFrames={SCENE02_DURATION}
  />
);
