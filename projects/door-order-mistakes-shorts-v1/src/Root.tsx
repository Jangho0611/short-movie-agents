import React from 'react';
import {AbsoluteFill, Composition, Series} from 'remotion';
import {Scene} from './Scenes';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import timing from './timing.json';

// Body durations are placeholders. Recalculate in Terminal after measured TTS.
const bodyFrames = timing.scenes.reduce((sum, scene) => sum + scene.frames, 0);
const format = {fps: timing.fps, width: 1080, height: 1920};
export const FullVideo: React.FC = () => (
  <AbsoluteFill><Series>
    {timing.scenes.map((scene) => (
      <Series.Sequence key={scene.scene} durationInFrames={scene.frames}>
        <Scene n={scene.scene}/>
      </Series.Sequence>
    ))}
    <Series.Sequence durationInFrames={timing.endingFrames}><DaesanEnding/></Series.Sequence>
  </Series></AbsoluteFill>
);
export const RemotionRoot: React.FC = () => <>
  <Composition id="DoorOrderMistakesFull" component={FullVideo} durationInFrames={bodyFrames + timing.endingFrames} {...format}/>
  {timing.scenes.map((scene) => <Composition key={scene.scene} id={`Scene${scene.scene}`} component={Scene} defaultProps={{n: scene.scene}} durationInFrames={scene.frames} {...format}/>)}
  <Composition id="DaesanEnding" component={DaesanEnding} durationInFrames={timing.endingFrames} {...format}/>
</>;
