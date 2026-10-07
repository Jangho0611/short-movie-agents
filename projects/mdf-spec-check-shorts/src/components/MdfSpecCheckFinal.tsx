import {AbsoluteFill, Audio, Series, staticFile} from 'remotion';
import {Scene01} from './Scene01';
import {Scene02} from './Scene02';
import {Scene03} from './Scene03';
import {Scene04} from './Scene04';
import {Scene05} from './Scene05';
import {Scene5Ending} from '../scene5/Scene5Ending';

export const MDF_SCENE_DURATIONS = [162, 149, 145, 159, 120, 136] as const;
export const MDF_FINAL_DURATION = MDF_SCENE_DURATIONS.reduce((sum, frames) => sum + frames, 0);

export const MdfSpecCheckFinal: React.FC = () => (
  <AbsoluteFill>
    <Series>
      <Series.Sequence durationInFrames={MDF_SCENE_DURATIONS[0]}>
        <Scene01 />
        <Audio src={staticFile('assets/audio/scene01-tts-v3.mp3')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={MDF_SCENE_DURATIONS[1]}>
        <Scene02 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={MDF_SCENE_DURATIONS[2]}>
        <Scene03 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={MDF_SCENE_DURATIONS[3]}>
        <Scene04 />
        <Audio src={staticFile('assets/audio/scene04-tts-v3.mp3')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={MDF_SCENE_DURATIONS[4]}>
        <Scene05 />
        <Audio src={staticFile('assets/audio/scene05-tts-v3.mp3')} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={MDF_SCENE_DURATIONS[5]}>
        <Scene5Ending />
        <Audio src={staticFile('assets/audio/scene-ending-tts.mp3')} />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
