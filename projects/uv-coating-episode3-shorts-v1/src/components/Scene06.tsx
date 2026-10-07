import {EpisodeScene} from './EpisodeScene';

export const SCENE06_DURATION = 189;

export const Scene06: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode3-scene06-veo-v2.mp4"
    audio="assets/audio/episode3-scene06-tts-v2.wav"
    durationInFrames={SCENE06_DURATION}
    caption={<><div>굳혀서 보호하는 방식</div><div>광택은 그 안에서 선택</div></>}
    fontSize={54}
    videoDurationInFrames={120}
    videoScale={1.02}
  />
);
