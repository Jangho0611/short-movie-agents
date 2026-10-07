import {
  AbsoluteFill,
  Audio,
  Freeze,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {Scene8Ending} from './scene8/Scene8Ending';
import {
  Scene1Full,
  Scene2Full,
  Scene3Full,
  Scene4Full,
  Scene5Full,
  Scene6Full,
  Scene7Full,
} from './scenes/ContentScenes';
import {SCENE_TIMING} from './timing';

const scenes = [
  {component: Scene1Full, durationInFrames: SCENE_TIMING.scene1.durationInFrames, audio: 'assets/audio/scene01-tts-v9.mp3', audioFrom: 0},
  {component: Scene2Full, durationInFrames: SCENE_TIMING.scene2.durationInFrames, audio: 'assets/audio/scene02-tts-v6.mp3', audioFrom: 0},
  {component: Scene3Full, durationInFrames: SCENE_TIMING.scene3.durationInFrames, audio: 'assets/audio/scene03-tts-v6.mp3', audioFrom: 0},
  {component: Scene4Full, durationInFrames: SCENE_TIMING.scene4.durationInFrames, audio: 'assets/audio/scene04-tts-v6.mp3', audioFrom: 4},
  {component: Scene5Full, durationInFrames: SCENE_TIMING.scene5.durationInFrames, audio: 'assets/audio/scene05-tts-v8.mp3', audioFrom: 8},
  {component: Scene6Full, durationInFrames: SCENE_TIMING.scene6.durationInFrames, audio: 'assets/audio/scene06-tts-v9.mp3', audioFrom: 0},
  {component: Scene7Full, durationInFrames: SCENE_TIMING.scene7.durationInFrames, audio: 'assets/audio/scene07-tts-v6.mp3', audioFrom: 0},
  {component: Scene8Ending, durationInFrames: SCENE_TIMING.scene8.durationInFrames, audio: 'assets/audio/scene08-ending-tts.mp3', audioFrom: 0},
] as const;

const DISSOLVE_FRAMES = 6;
const DISSOLVE_AFTER_SCENES = new Set([1, 3, 4, 5]);

const DissolveOut: React.FC<{
  scene: React.FC;
  freezeFrame: number;
}> = ({scene: Scene, freezeFrame}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, DISSOLVE_FRAMES - 1], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{opacity}}>
      <Freeze frame={freezeFrame}>
        <Scene />
      </Freeze>
    </AbsoluteFill>
  );
};

export const FullPreview: React.FC = () => {
  let from = 0;

  return (
    <AbsoluteFill style={{backgroundColor: '#111111'}}>
      {scenes.map(({component: Scene, durationInFrames, audio, audioFrom}, index) => {
        const sceneFrom = from;
        from += durationInFrames;
        return (
          <Sequence
            key={index}
            from={sceneFrom}
            durationInFrames={durationInFrames}
            name={`Scene ${index + 1}`}
          >
            <Scene />
            <Sequence from={audioFrom}>
              <Audio src={staticFile(audio)} />
            </Sequence>
          </Sequence>
        );
      })}
      {scenes.slice(0, -1).map(({component: Scene, durationInFrames}, index) => {
        const boundary = scenes
          .slice(0, index + 1)
          .reduce((sum, scene) => sum + scene.durationInFrames, 0);
        if (!DISSOLVE_AFTER_SCENES.has(index)) {
          return null;
        }
        return (
          <Sequence
            key={`dissolve-${index}`}
            from={boundary}
            durationInFrames={DISSOLVE_FRAMES}
            name={`Dissolve ${index + 1}-${index + 2}`}
          >
            <DissolveOut scene={Scene} freezeFrame={durationInFrames - 1} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
