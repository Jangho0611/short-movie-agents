import {Composition} from 'remotion';
import {Scene01} from './components/Scene01';
import {MdfSpecCheckFinal, MDF_FINAL_DURATION} from './components/MdfSpecCheckFinal';
import {Scene04} from './components/Scene04';
import {Scene05} from './components/Scene05';
import {Scene03} from './components/Scene03';
import {Scene02} from './components/Scene02';
import {Scene5Ending} from './scene5/Scene5Ending';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene02Static, SCENE02_DURATION_IN_FRAMES} from './components/Scene02Static';
import {Scene03Static, SCENE03_DURATION_IN_FRAMES} from './components/Scene03Static';
import {Scene04Static, SCENE04_DURATION_IN_FRAMES} from './components/Scene04Static';
import {Scene05Static, SCENE05_DURATION_IN_FRAMES} from './components/Scene05Static';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="Scene01" component={Scene01} durationInFrames={162}
        fps={24} width={1080} height={1920} />
      <Composition id="MdfSpecCheckFinal" component={MdfSpecCheckFinal}
        durationInFrames={MDF_FINAL_DURATION} fps={24} width={1080} height={1920} />
      <Composition id="Scene04" component={Scene04} durationInFrames={159}
        fps={24} width={1080} height={1920} />
      <Composition id="Scene05" component={Scene05} durationInFrames={120}
        fps={24} width={1080} height={1920} />
      <Composition id="Scene03" component={Scene03} durationInFrames={145}
        fps={24} width={1080} height={1920} />
      <Composition id="Scene02" component={Scene02} durationInFrames={149}
        fps={24} width={1080} height={1920} />
      <Composition
        id="EnvironmentCheck"
        component={EnvironmentCheck}
        durationInFrames={1}
        fps={30}
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
      <Composition
        id="SceneEnding"
        component={Scene5Ending}
        durationInFrames={136}
        fps={24}
        width={1080}
        height={1920}
      />
    </>
  );
};
