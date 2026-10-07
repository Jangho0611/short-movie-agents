import {AbsoluteFill, Audio, Sequence, Series, staticFile} from 'remotion';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04, SCENE04_DURATION} from './components/Scene04';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {Ending} from './ending/Ending';
import {Caption} from './design/Caption';

const ENDING_DURATION = 136;

const SCENE02_START = SCENE01_DURATION;
const SCENE03_START = SCENE02_START + SCENE02_DURATION;
const SCENE04_START = SCENE03_START + SCENE03_DURATION;
const SCENE05_START = SCENE04_START + SCENE04_DURATION;
const ENDING_START = SCENE05_START + SCENE05_DURATION;

export const FULL_VIDEO_DURATION = ENDING_START + ENDING_DURATION;

const INK = '#000000';
const LIME = '#DCEEB1';
const LILAC = '#C5B0F4';
const CREAM = '#F4ECD6';
const MINT = '#C8E6CD';
const PINK = '#EFD4D4';

export const FullVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#FFFFFF'}}>
      <Series>
        <Series.Sequence durationInFrames={SCENE01_DURATION}>
          <Scene01 />
          <Sequence from={0} durationInFrames={48}>
            <Caption durationInFrames={48} bg={LIME} color={INK} lines={['환기가 안 되는 화장실 문은', '습기를 계속 머금어요']} />
          </Sequence>
          <Sequence from={48} durationInFrames={SCENE01_DURATION - 48}>
            <Caption durationInFrames={SCENE01_DURATION - 48} bg={LIME} color={INK} lines={['방치된 지 몇 년 만에', '이렇게 시트지가 벗겨져요']} />
          </Sequence>
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE02_DURATION}>
          <Scene02 />
          <Sequence from={0} durationInFrames={55}>
            <Caption durationInFrames={55} bg={LILAC} color={INK} lines={['멤브레인 도어는', 'MDF·HDF에 필름을 씌운 구조']} />
          </Sequence>
          <Sequence from={55} durationInFrames={SCENE02_DURATION - 55}>
            <Caption durationInFrames={SCENE02_DURATION - 55} bg={LILAC} color={INK} lines={['MDF·HDF 표면재가 습기에 약해', '화장실엔 추천하지 않아요']} />
          </Sequence>
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE03_DURATION}>
          <Scene03 />
          <Sequence from={0} durationInFrames={65}>
            <Caption durationInFrames={65} bg={CREAM} color={INK} lines={['ABS 도어는', '허니컴 코어에 ABS 표면 마감']} />
          </Sequence>
          <Sequence from={65} durationInFrames={SCENE03_DURATION - 65}>
            <Caption durationInFrames={SCENE03_DURATION - 65} bg={CREAM} color={INK} lines={['단단하고 습기에 강해', '화장실에도 잘 맞아요']} />
          </Sequence>
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE04_DURATION}>
          <Scene04 />
          <Sequence from={0} durationInFrames={90}>
            <Caption durationInFrames={90} bg={MINT} color={INK} lines={['욕실처럼 습한 공간엔', 'ABS 도어가 안전한 선택이에요']} />
          </Sequence>
          <Sequence from={90} durationInFrames={SCENE04_DURATION - 90}>
            <Caption durationInFrames={SCENE04_DURATION - 90} bg={MINT} color={INK} lines={['거실 같은 건식 공간은', '어떤 도어를 써도 괜찮아요']} />
          </Sequence>
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE05_DURATION}>
          <Scene05 />
          <Sequence from={0} durationInFrames={46}>
            <Caption durationInFrames={46} bg={PINK} color={INK} lines={['공간에 안 맞는 도어를', '그냥 무시하고 설치하면']} />
          </Sequence>
          <Sequence from={46} durationInFrames={SCENE05_DURATION - 46}>
            <Caption durationInFrames={SCENE05_DURATION - 46} bg={PINK} color={INK} lines={['몇 년 뒤 도어를 다시 뜯어내는', '재시공 비용이 발생해요']} />
          </Sequence>
        </Series.Sequence>
        <Series.Sequence durationInFrames={ENDING_DURATION}>
          <Ending />
        </Series.Sequence>
      </Series>
      <Sequence from={SCENE02_START} durationInFrames={SCENE02_DURATION}>
        <Audio src={staticFile('assets/audio/scene02-v3.mp3')} />
      </Sequence>
      <Sequence from={SCENE03_START} durationInFrames={SCENE03_DURATION}>
        <Audio src={staticFile('assets/audio/scene03.mp3')} />
      </Sequence>
      <Sequence from={SCENE04_START} durationInFrames={SCENE04_DURATION}>
        <Audio src={staticFile('assets/audio/scene04-v5.mp3')} />
      </Sequence>
    </AbsoluteFill>
  );
};
