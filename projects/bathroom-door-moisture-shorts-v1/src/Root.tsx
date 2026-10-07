import {Composition} from 'remotion';
import {Ending} from './ending/Ending';
import {Scene01, SCENE01_DURATION} from './components/Scene01';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
import {Scene03, SCENE03_DURATION} from './components/Scene03';
import {Scene04, SCENE04_DURATION} from './components/Scene04';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
import {FullVideo, FULL_VIDEO_DURATION} from './FullVideo';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Ending" component={Ending} durationInFrames={136} fps={24} width={1080} height={1920} />
    <Composition id="Scene01" component={Scene01} durationInFrames={SCENE01_DURATION} fps={24} width={1080} height={1920} />
    <Composition id="Scene02" component={Scene02} durationInFrames={SCENE02_DURATION} fps={24} width={1080} height={1920} />
    <Composition id="Scene03" component={Scene03} durationInFrames={SCENE03_DURATION} fps={24} width={1080} height={1920} />
    <Composition id="Scene04" component={Scene04} durationInFrames={SCENE04_DURATION} fps={24} width={1080} height={1920} />
    <Composition id="Scene05" component={Scene05} durationInFrames={SCENE05_DURATION} fps={24} width={1080} height={1920} />
    <Composition id="FullVideo" component={FullVideo} durationInFrames={FULL_VIDEO_DURATION} fps={24} width={1080} height={1920} />
  </>
);
