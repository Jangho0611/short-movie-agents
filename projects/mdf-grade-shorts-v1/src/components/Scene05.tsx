import {EpisodeScene, Green} from './EpisodeScene';
export const SCENE05_DURATION = 213;
export const Scene05: React.FC = () => <EpisodeScene media="assets/video/scene05-flow-v1.mp4" audio="assets/audio/scene05.mp3" durationInFrames={SCENE05_DURATION} mediaFrames={SCENE05_DURATION} caption={<><div>거실·복도 같은 공간이면</div><div>용도에 맞는 <Green>등급인지 확인</Green></div></>} />;
