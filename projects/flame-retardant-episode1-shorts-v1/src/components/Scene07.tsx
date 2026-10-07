import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';

export const SCENE07_DURATION = 170;

export const Scene07: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#000000'}}>
    <Audio src={staticFile('assets/audio/scene07-ending.wav')} />
    <OffthreadVideo
      src={staticFile('assets/video/scene07-daesan-ending-final.mp4')}
      muted
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
  </AbsoluteFill>
);
