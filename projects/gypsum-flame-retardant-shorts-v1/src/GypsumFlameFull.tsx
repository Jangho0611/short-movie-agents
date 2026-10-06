import {AbsoluteFill, Audio, OffthreadVideo, Sequence, staticFile} from 'remotion';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04_1, SCENE04_1_DURATION} from './components/Scene04-1';
import {Scene04_2, SCENE04_2_DURATION} from './components/Scene04-2';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {Scene06, SCENE06_DURATION} from './components/Scene06';

const ENDING_DURATION = Math.ceil(5.666667 * 30);

const Ending07: React.FC = () => (
  <AbsoluteFill>
    <OffthreadVideo
      src={staticFile('assets/video/scene07-daesan-ending-final.mp4')}
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
    <Audio src={staticFile('assets/audio/scene07-ending.wav')} />
  </AbsoluteFill>
);

export const GYPSUM_FLAME_FULL_DURATION =
  SCENE01_DURATION +
  SCENE02_DURATION +
  SCENE03_DURATION +
  SCENE04_1_DURATION +
  SCENE04_2_DURATION +
  SCENE05_DURATION +
  SCENE06_DURATION +
  ENDING_DURATION;

export const GypsumFlameFull: React.FC = () => {
  const scenes = [
    [Scene01, SCENE01_DURATION],
    [Scene02, SCENE02_DURATION],
    [Scene03, SCENE03_DURATION],
    [Scene04_1, SCENE04_1_DURATION],
    [Scene04_2, SCENE04_2_DURATION],
    [Scene05, SCENE05_DURATION],
    [Scene06, SCENE06_DURATION],
    [Ending07, ENDING_DURATION],
  ] as const;

  let from = 0;
  return (
    <AbsoluteFill>
      {scenes.map(([Component, duration], index) => {
        const start = from;
        from += duration;
        return (
          <Sequence key={index} from={start} durationInFrames={duration}>
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
