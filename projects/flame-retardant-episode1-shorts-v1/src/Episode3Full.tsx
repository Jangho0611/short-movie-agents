import {Series} from 'remotion';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04, SCENE04_DURATION} from './components/Scene04';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {Scene06, SCENE06_DURATION} from './components/Scene06';
import {Scene07} from './components/Scene07';

export const SCENE07_DURATION_AT_30_FPS = 170;

export const EPISODE3_FULL_DURATION =
  SCENE01_DURATION +
  SCENE02_DURATION +
  SCENE03_DURATION +
  SCENE04_DURATION +
  SCENE05_DURATION +
  SCENE06_DURATION +
  SCENE07_DURATION_AT_30_FPS;

export const Episode3Full: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={SCENE01_DURATION}><Scene01 /></Series.Sequence>
    <Series.Sequence durationInFrames={SCENE02_DURATION}><Scene02 /></Series.Sequence>
    {/* Flow source is 8 seconds; use its natural opening 7.5 seconds. Embedded bars/watermark are removed by scaled cover crop. */}
    <Series.Sequence durationInFrames={SCENE03_DURATION}><Scene03 /></Series.Sequence>
    {/* Flow source is 8 seconds; use its natural opening 6.5 seconds. Embedded bars/watermark are removed by scaled cover crop. */}
    <Series.Sequence durationInFrames={SCENE04_DURATION}><Scene04 /></Series.Sequence>
    <Series.Sequence durationInFrames={SCENE05_DURATION}><Scene05 /></Series.Sequence>
    <Series.Sequence durationInFrames={SCENE06_DURATION}><Scene06 /></Series.Sequence>
    <Series.Sequence durationInFrames={SCENE07_DURATION_AT_30_FPS}><Scene07 /></Series.Sequence>
  </Series>
);
