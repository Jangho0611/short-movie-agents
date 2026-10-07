import {Composition} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene1} from './scene1/Scene1';
import {SCENE1} from './scene1/brief';
import {Scene6} from './scene6/Scene6';
import {SCENE6} from './scene6/brief';
import {Scene8Ending} from './scene8/Scene8Ending';
import {SCENE8} from './scene8/brief';
import {FullPreview} from './FullPreview';
import {FPS, FULL_DURATION_IN_FRAMES} from './timing';

export const RemotionRoot: React.FC = () => (
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
      id="EboardInstallationScene1"
      component={Scene1}
      durationInFrames={SCENE1.durationInFrames}
      fps={24}
      width={1080}
      height={1920}
    />
    <Composition
      id="EboardInstallationScene6"
      component={Scene6}
      durationInFrames={SCENE6.durationInFrames}
      fps={SCENE6.fps}
      width={1080}
      height={1920}
    />
    <Composition
      id="EboardInstallationScene8Ending"
      component={Scene8Ending}
      durationInFrames={SCENE8.durationInFrames}
      fps={SCENE8.fps}
      width={1080}
      height={1920}
    />
    <Composition
      id="EboardInstallationFullPreview"
      component={FullPreview}
      durationInFrames={FULL_DURATION_IN_FRAMES}
      fps={FPS}
      width={1080}
      height={1920}
    />
  </>
);
