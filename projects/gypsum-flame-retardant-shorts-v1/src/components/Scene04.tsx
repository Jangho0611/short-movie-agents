import {EpisodeScene, Green} from './EpisodeScene';
export const SCENE04_DURATION = 237;
export const Scene04: React.FC = () => <EpisodeScene media="assets/video/scene04-flow-v1.mp4" audio="assets/audio/scene04.mp3" durationInFrames={SCENE04_DURATION} mediaFrames={SCENE04_DURATION} caption={<><div>아이 방처럼 민감한 공간이면</div><div>방출량이 <Green>적은 등급</Green>을</div></>} />;
