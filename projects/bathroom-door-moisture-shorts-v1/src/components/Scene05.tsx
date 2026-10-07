import {AbsoluteFill, Audio, OffthreadVideo, staticFile} from 'remotion';

export const SCENE05_DURATION = 108; // 4.488s @ 24fps (scene05-v6.mp3)

export const Scene05: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#FFFFFF'}}>
      <OffthreadVideo
        src={staticFile('assets/video/scene05-gesture-v1.mp4')}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
      <Audio src={staticFile('assets/audio/scene05-v6.mp3')} />
    </AbsoluteFill>
  );
};
