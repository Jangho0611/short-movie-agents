import {Audio, Composition, Sequence, staticFile} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {SceneCaption} from './components/SceneCaption';
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

// Timeline layout for full 6-scene video
// FPS: 24 (all scenes)
// Resolution: Match to individual scene requirements (will be managed per composition)

const SCENE1_START = 0;
const SCENE2_START = SCENE1_START + SCENE1.durationInFrames;
const SCENE3_START = SCENE2_START + SCENE2.durationInFrames;
const SCENE4_START = SCENE3_START + SCENE3.durationInFrames;
const SCENE5_START = SCENE4_START + SCENE4.durationInFrames;
const SCENE6_START = SCENE5_START + SCENE5_FLOW.durationInFrames;

const TOTAL_FRAMES = SCENE6_START + SCENE5.durationInFrames;

const TimelineLayout: React.FC = () => {
  return (
    <>
      <Sequence from={SCENE1_START} durationInFrames={SCENE1.durationInFrames}>
        <Scene1 />
        <Audio
          startFrom={5}
          src={staticFile('assets/audio/scene01-tts.mp3')}
        />
        <Sequence from={4} durationInFrames={SCENE1.durationInFrames - 4}>
          <SceneCaption text={'석고가 두부에도\n쓰인다고요?'} />
        </Sequence>
      </Sequence>

      <Sequence from={SCENE2_START} durationInFrames={SCENE2.durationInFrames}>
        <Scene2 />
        <Audio src={staticFile('assets/audio/scene02-tts.mp3')} />
        <Sequence durationInFrames={103}>
          <SceneCaption text={'황산칼슘은\n식품첨가물로도 쓰입니다'} />
        </Sequence>
        <Sequence from={103} durationInFrames={SCENE2.durationInFrames - 103}>
          <SceneCaption text={'두부 응고제로도\n사용되죠'} />
        </Sequence>
      </Sequence>

      <Sequence from={SCENE3_START} durationInFrames={SCENE3.durationInFrames}>
        <Scene3 />
        <Audio src={staticFile('assets/audio/scene03-tts.mp3')} />
        <SceneCaption text={'석고를 가공한 재료는\n의료용 깁스에도 쓰입니다'} />
      </Sequence>

      <Sequence from={SCENE4_START} durationInFrames={SCENE4.durationInFrames}>
        <Scene4 />
        <Audio src={staticFile('assets/audio/scene04-tts.mp3')} />
        <SceneCaption text={'하지만 건축용 석고보드는\n먹는 제품이 아닙니다'} />
      </Sequence>

      <Sequence from={SCENE5_START} durationInFrames={SCENE5_FLOW.durationInFrames}>
        <Scene5 />
        <Audio src={staticFile('assets/audio/scene05-tts.mp3')} />
        <Sequence durationInFrames={67}>
          <SceneCaption text={'자이 천연석고보드의\n포인트는'} />
        </Sequence>
        <Sequence from={67} durationInFrames={SCENE5_FLOW.durationInFrames - 67}>
          <SceneCaption text={'천연석고를 원료로\n사용한다는 점입니다'} />
        </Sequence>
      </Sequence>

      <Sequence from={SCENE6_START} durationInFrames={SCENE5.durationInFrames}>
        <Scene5Ending />
        <Audio src={staticFile('assets/audio/scene06-tts.mp3')} />
      </Sequence>
    </>
  );
};

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
        id="DaesanEnding"
        component={Scene5Ending}
        durationInFrames={SCENE5.durationInFrames}
        fps={24}
        width={720}
        height={1280}
      />

      <Composition
        id="XiNaturalGypsumLayout"
        component={TimelineLayout}
        durationInFrames={TOTAL_FRAMES}
        fps={24}
        width={1080}
        height={1920}
      />
    </>
  );
};
