import {registerRoot, Composition} from 'remotion';
import {DoorOrderMistakesCoverV5} from './index-v5';

const Root = () => (
  <Composition
    id="DoorOrderMistakesCoverV5"
    component={DoorOrderMistakesCoverV5}
    width={1080}
    height={1920}
    fps={30}
    durationInFrames={1}
  />
);

registerRoot(Root);
