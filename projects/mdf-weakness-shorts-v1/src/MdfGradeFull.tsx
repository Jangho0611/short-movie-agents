import {AbsoluteFill, Sequence} from 'remotion';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04, SCENE04_DURATION} from './components/Scene04';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {Scene06, SCENE06_DURATION} from './components/Scene06';

export const MDF_GRADE_FULL_DURATION = SCENE01_DURATION + SCENE02_DURATION + SCENE03_DURATION + SCENE04_DURATION + SCENE05_DURATION + SCENE06_DURATION;
export const MdfGradeFull: React.FC = () => {
  const scenes = [[Scene01, SCENE01_DURATION], [Scene02, SCENE02_DURATION], [Scene03, SCENE03_DURATION], [Scene04, SCENE04_DURATION], [Scene05, SCENE05_DURATION], [Scene06, SCENE06_DURATION]] as const;
  let from = 0;
  return <AbsoluteFill>{scenes.map(([Component, duration], index) => {const start = from; from += duration; return <Sequence key={index} from={start} durationInFrames={duration}><Component /></Sequence>;})}</AbsoluteFill>;
};
