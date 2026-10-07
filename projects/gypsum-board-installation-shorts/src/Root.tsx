import {Composition} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene4WallReveal} from './scene4/Scene4WallReveal';
import {Scene5Ending} from './scene5/Scene5Ending';
import {SCENE5} from './scene5/brief';

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
        id="Scene4WallReveal"
        component={Scene4WallReveal}
        durationInFrames={96}
        fps={24}
        width={720}
        height={1280}
      />

      <Composition
        id="DaesanEnding"
        component={Scene5Ending}
        durationInFrames={SCENE5.durationInFrames}
        fps={24}
        width={720}
        height={1280}
      />
    </>
  );
};
