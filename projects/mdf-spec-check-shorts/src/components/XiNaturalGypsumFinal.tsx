import {AbsoluteFill, Sequence} from 'remotion';
import {DaesanLogoEnding, DAESAN_LOGO_ENDING_DURATION_IN_FRAMES} from './DaesanLogoEnding';
import {Scene01Video, SCENE01_DURATION_IN_FRAMES} from './Scene01Video';
import {Scene02Static, SCENE02_DURATION_IN_FRAMES} from './Scene02Static';
import {Scene03Static, SCENE03_DURATION_IN_FRAMES} from './Scene03Static';
import {Scene04Static, SCENE04_DURATION_IN_FRAMES} from './Scene04Static';
import {Scene05Static, SCENE05_DURATION_IN_FRAMES} from './Scene05Static';

export const XI_NATURAL_GYPSUM_FINAL_DURATION_IN_FRAMES = 869;

const SCENE02_START = SCENE01_DURATION_IN_FRAMES;
const SCENE03_START = SCENE02_START + SCENE02_DURATION_IN_FRAMES;
const SCENE04_START = SCENE03_START + SCENE03_DURATION_IN_FRAMES;
const SCENE05_START = SCENE04_START + SCENE04_DURATION_IN_FRAMES;
const ENDING_START = SCENE05_START + SCENE05_DURATION_IN_FRAMES;

export const XiNaturalGypsumFinal: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#fff'}}>
      <Sequence from={0} durationInFrames={SCENE01_DURATION_IN_FRAMES} premountFor={24}>
        <Scene01Video />
      </Sequence>
      <Sequence from={SCENE02_START} durationInFrames={SCENE02_DURATION_IN_FRAMES} premountFor={24}>
        <Scene02Static />
      </Sequence>
      <Sequence from={SCENE03_START} durationInFrames={SCENE03_DURATION_IN_FRAMES} premountFor={24}>
        <Scene03Static />
      </Sequence>
      <Sequence from={SCENE04_START} durationInFrames={SCENE04_DURATION_IN_FRAMES} premountFor={24}>
        <Scene04Static />
      </Sequence>
      <Sequence from={SCENE05_START} durationInFrames={SCENE05_DURATION_IN_FRAMES} premountFor={24}>
        <Scene05Static />
      </Sequence>
      <Sequence from={ENDING_START} durationInFrames={DAESAN_LOGO_ENDING_DURATION_IN_FRAMES} premountFor={24}>
        <DaesanLogoEnding />
      </Sequence>
    </AbsoluteFill>
  );
};
