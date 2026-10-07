import {AbsoluteFill, Img, staticFile} from 'remotion';

export const Scene1: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#111111'}}>
    <Img
      src={staticFile('references/scene01-installation-start-v4.png')}
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
  </AbsoluteFill>
);
