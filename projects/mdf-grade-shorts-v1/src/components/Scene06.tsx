import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';
export const SCENE06_DURATION = 170;
export const Scene06: React.FC = () => <AbsoluteFill style={{backgroundColor: '#F7F7F5'}}><Audio src={staticFile('assets/audio/scene07-ending.wav')} /><OffthreadVideo src={staticFile('assets/video/scene07-daesan-ending-final.mp4')} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} /></AbsoluteFill>;
