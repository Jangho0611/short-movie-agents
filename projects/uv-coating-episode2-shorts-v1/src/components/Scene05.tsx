import {EpisodeScene, Green} from './EpisodeScene';

export const SCENE05_DURATION = 180;

export const Scene05: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode2-scene05-veo-v2-trimmed.mp4"
    audio="assets/audio/episode2-scene05-tts-v1.wav"
    durationInFrames={SCENE05_DURATION}
    caption={<><div>노출되거나 수분이 닿는다면</div><div style={{marginTop: 8}}><Green>제품 지침대로 마감하세요</Green></div></>}
    fontSize={52}
  />
);
