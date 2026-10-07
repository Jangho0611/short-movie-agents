import {EpisodeScene, Green} from './EpisodeScene';

export const SCENE06_DURATION = 154;

export const Scene06: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode2-scene06-veo-v1.mp4"
    audio="assets/audio/episode2-scene06-tts-v3.wav"
    durationInFrames={SCENE06_DURATION}
    caption={<><div>보이는 면 말고</div><div style={{marginTop: 8}}><Green>새로 생긴 면입니다</Green></div></>}
    fontSize={60}
  />
);
