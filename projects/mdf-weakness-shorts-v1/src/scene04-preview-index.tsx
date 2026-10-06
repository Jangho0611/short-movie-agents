import {Composition, registerRoot} from 'remotion';
import {Scene04, SCENE04_DURATION} from './components/Scene04';

const Scene04PreviewRoot: React.FC = () => (
  <Composition id="Scene04Preview" component={Scene04} durationInFrames={SCENE04_DURATION} fps={30} width={1080} height={1920} />
);

registerRoot(Scene04PreviewRoot);
