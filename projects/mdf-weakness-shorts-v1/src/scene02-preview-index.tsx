import {Composition, registerRoot} from 'remotion';
import {Scene02, SCENE02_DURATION} from './components/Scene02';
const Scene02PreviewRoot: React.FC = () => (
  <Composition id="Scene02Preview" component={Scene02} durationInFrames={SCENE02_DURATION} fps={30} width={1080} height={1920} />
);
registerRoot(Scene02PreviewRoot);
