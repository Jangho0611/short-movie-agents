import {EpisodeScene} from './EpisodeScene';

export const SCENE02_DURATION = 153;

export const Scene02: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode3-scene02-veo-v1.mp4"
    audio="assets/audio/episode3-scene02-tts-v2.wav"
    durationInFrames={SCENE02_DURATION}
    caption={<><div>UV코팅은 광택이 아니라</div><div>표면을 굳히는 방식입니다</div></>}
    fontSize={54}
    videoDurationInFrames={120}
    videoScale={1.02}
  />
);
