import {EpisodeScene, Green} from './EpisodeScene';

export const SCENE03_DURATION = 194;

export const Scene03: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode2-scene03-veo-v2.mp4"
    audio="assets/audio/episode2-scene03-tts-v9.wav"
    durationInFrames={SCENE03_DURATION}
    caption={<><div>원래 코팅된 표면과 달리</div><div style={{marginTop: 8}}><Green>절단면은 원재료가 노출됩니다</Green></div></>}
    fontSize={48}
  />
);
