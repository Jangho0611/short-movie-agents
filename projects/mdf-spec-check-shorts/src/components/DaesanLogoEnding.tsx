import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {Scene5Ending} from '../scene5/Scene5Ending';

export const DAESAN_LOGO_ENDING_DURATION_IN_FRAMES = 117;

export const DaesanLogoEnding: React.FC = () => {
  return (
    <AbsoluteFill>
      <Scene5Ending />
      <Audio src={staticFile('assets/audio/scene06-tts-v3.mp3')} />
    </AbsoluteFill>
  );
};
