import {EpisodeScene, Green} from './EpisodeScene';

export const SCENE01_DURATION = 154;

export const Scene01: React.FC = () => (
  <EpisodeScene
    kind="video"
    media="assets/video/episode2-scene01-veo-v3.mp4"
    audio="assets/audio/episode2-scene01-tts-v3.wav"
    durationInFrames={SCENE01_DURATION}
    caption={<><div>자르면 옆면도</div><div style={{marginTop: 8}}><Green>코팅돼 있을까요?</Green></div></>}
    fontSize={62}
  />
);
