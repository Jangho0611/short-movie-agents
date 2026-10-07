import {EpisodeScene, Green} from './EpisodeScene';

export const SCENE04_DURATION = 135;

export const Scene04: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode2-scene04-veo-v1.mp4"
    audio="assets/audio/episode2-scene04-tts-v1.wav"
    durationInFrames={SCENE04_DURATION}
    caption={<><div>드릴홀이나 CNC 가공부도</div><div style={{marginTop: 8}}><Green>마찬가지입니다</Green></div></>}
    fontSize={52}
  />
);
