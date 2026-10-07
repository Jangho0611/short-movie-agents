import {Composition} from 'remotion';
import {Episode2Preview, EPISODE2_DURATION} from './Episode2Preview';
import {Flame2SquareSafeCover} from './Flame2SquareSafeCover';

export const Episode2PreviewRoot: React.FC = () => (<>
  <Composition id="Episode2Preview" component={Episode2Preview} durationInFrames={EPISODE2_DURATION} fps={30} width={1080} height={1920} />
  <Composition id="Flame2SquareSafeCover" component={Flame2SquareSafeCover} durationInFrames={1} fps={30} width={1080} height={1920} />
</>
);
