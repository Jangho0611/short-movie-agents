import {Composition} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04, SCENE04_DURATION} from './components/Scene04';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {Scene06, SCENE06_DURATION} from './components/Scene06';
import {Scene07, SCENE07_DURATION} from './components/Scene07';
import {Episode1Full, EPISODE1_FULL_DURATION} from './Episode1Full';
import {Flame1SquareSafeCover, UV1SquareSafeCover, UV2SquareSafeCover, UV3SquareSafeCover} from './SquareSafeCovers';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="UV1SquareSafeCover" component={UV1SquareSafeCover} durationInFrames={1} fps={30} width={1080} height={1920} />
    <Composition id="UV2SquareSafeCover" component={UV2SquareSafeCover} durationInFrames={1} fps={30} width={1080} height={1920} />
    <Composition id="UV3SquareSafeCover" component={UV3SquareSafeCover} durationInFrames={1} fps={30} width={1080} height={1920} />
    <Composition id="Flame1SquareSafeCover" component={Flame1SquareSafeCover} durationInFrames={1} fps={30} width={1080} height={1920} />
    <Composition
      id="EnvironmentCheck"
      component={EnvironmentCheck}
      durationInFrames={1}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene01"
      component={Scene01}
      durationInFrames={SCENE01_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene02"
      component={Scene02}
      durationInFrames={SCENE02_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene03"
      component={Scene03}
      durationInFrames={SCENE03_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene04"
      component={Scene04}
      durationInFrames={SCENE04_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene05"
      component={Scene05}
      durationInFrames={SCENE05_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene06"
      component={Scene06}
      durationInFrames={SCENE06_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="Scene07"
      component={Scene07}
      durationInFrames={SCENE07_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
    <Composition
      id="FlameRetardantEpisode1Full"
      component={Episode1Full}
      durationInFrames={EPISODE1_FULL_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);
