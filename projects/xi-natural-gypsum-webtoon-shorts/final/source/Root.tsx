import {Composition} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene02Static, SCENE02_DURATION_IN_FRAMES} from './components/Scene02Static';
import {Scene03Static, SCENE03_DURATION_IN_FRAMES} from './components/Scene03Static';
import {Scene04Static, SCENE04_DURATION_IN_FRAMES} from './components/Scene04Static';
import {Scene05Static, SCENE05_DURATION_IN_FRAMES} from './components/Scene05Static';
import {
  XiNaturalGypsumFinal,
  XI_NATURAL_GYPSUM_FINAL_DURATION_IN_FRAMES,
} from './components/XiNaturalGypsumFinal';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EnvironmentCheck"
        component={EnvironmentCheck}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="XiNaturalGypsumFinal"
        component={XiNaturalGypsumFinal}
        durationInFrames={XI_NATURAL_GYPSUM_FINAL_DURATION_IN_FRAMES}
        fps={24}
        width={1080}
        height={1920}
      />
      <Composition
        id="Scene02Static"
        component={Scene02Static}
        durationInFrames={SCENE02_DURATION_IN_FRAMES}
        fps={24}
        width={1080}
        height={1920}
      />
      <Composition
        id="Scene03Static"
        component={Scene03Static}
        durationInFrames={SCENE03_DURATION_IN_FRAMES}
        fps={24}
        width={1080}
        height={1920}
      />
      <Composition
        id="Scene04Static"
        component={Scene04Static}
        durationInFrames={SCENE04_DURATION_IN_FRAMES}
        fps={24}
        width={1080}
        height={1920}
      />
      <Composition
        id="Scene05Static"
        component={Scene05Static}
        durationInFrames={SCENE05_DURATION_IN_FRAMES}
        fps={24}
        width={1080}
        height={1920}
      />
    </>
  );
};
