import {Audio, Composition, Sequence, staticFile} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene1} from './scene1/Scene1';
import {SCENE1} from './scene1/brief';
import {Scene2} from './scene2/Scene2';
import {SCENE2} from './scene2/brief';
import {Scene3} from './scene3/Scene3';
import {SCENE3} from './scene3/brief';
import {Scene4} from './scene4/Scene4';
import {SCENE4} from './scene4/brief';
import {Scene5} from './scene5/Scene5';
import {SCENE5_FLOW} from './scene5/brief-flow';
import {Scene5Ending} from './scene5/Scene5Ending';
import {SCENE5} from './scene5/brief';
import {Scene6} from './scene6/Scene6';
import {SCENE6} from './scene6/brief';

const SCENE1_START = 0;
const SCENE2_START = SCENE1_START + SCENE1.durationInFrames;
const SCENE3_START = SCENE2_START + SCENE2.durationInFrames;
const SCENE4_START = SCENE3_START + SCENE3.durationInFrames;
const SCENE5_START = SCENE4_START + SCENE4.durationInFrames;
const SCENE6_START = SCENE5_START + SCENE5_FLOW.durationInFrames;
const SCENE7_START = SCENE6_START + SCENE6.durationInFrames;
const TOTAL_FRAMES = SCENE7_START + SCENE5.durationInFrames;

const TimelineLayout: React.FC = () => (
  <>
    <Sequence from={SCENE1_START} durationInFrames={SCENE1.durationInFrames}>
      <Scene1 />
      <Audio src={staticFile('assets/audio/scene01-tts.mp3')} />
    </Sequence>

    <Sequence from={SCENE2_START} durationInFrames={SCENE2.durationInFrames}>
      <Scene2 />
      <Audio src={staticFile('assets/audio/scene02-tts.mp3')} />
    </Sequence>

    <Sequence from={SCENE3_START} durationInFrames={SCENE3.durationInFrames}>
      <Scene3 />
      <Audio src={staticFile('assets/audio/scene03-tts.mp3')} />
    </Sequence>

    <Sequence from={SCENE4_START} durationInFrames={SCENE4.durationInFrames}>
      <Scene4 />
      <Audio src={staticFile('assets/audio/scene04-tts.mp3')} />
    </Sequence>

    <Sequence from={SCENE5_START} durationInFrames={SCENE5_FLOW.durationInFrames}>
      <Scene5 />
    </Sequence>

    <Sequence from={SCENE5_START} durationInFrames={SCENE5_FLOW.audioDurationInFrames}>
      <Audio src={staticFile('assets/audio/scene05-tts.mp3')} />
    </Sequence>

    <Sequence from={SCENE6_START} durationInFrames={SCENE6.durationInFrames}>
      <Scene6 />
      <Sequence from={SCENE5_FLOW.audioDurationInFrames - SCENE5_FLOW.durationInFrames}>
        <Audio src={staticFile('assets/audio/scene06-tts.mp3')} />
      </Sequence>
    </Sequence>

    <Sequence from={SCENE7_START} durationInFrames={SCENE5.durationInFrames}>
      <Scene5Ending />
      <Audio src={staticFile('assets/audio/scene07-ending-tts.mp3')} />
    </Sequence>
  </>
);

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
      id="DaesanEnding"
      component={Scene5Ending}
      durationInFrames={SCENE5.durationInFrames}
      fps={24}
      width={720}
      height={1280}
    />
    <Composition
      id="Scene6Preview"
      component={Scene6}
      durationInFrames={SCENE6.durationInFrames}
      fps={24}
      width={1080}
      height={1920}
    />
    <Composition
      id="EboardExplainerFull"
      component={TimelineLayout}
      durationInFrames={TOTAL_FRAMES}
      fps={24}
      width={1080}
      height={1920}
    />
  </>
);
