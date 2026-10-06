import {Composition, registerRoot} from 'remotion';
import {Scene03} from './components/Scene03';
const Scene03PreviewRoot: React.FC = () => (
  <Composition id="Scene03Preview" component={Scene03} durationInFrames={357} fps={60} width={1080} height={1920} />
);
registerRoot(Scene03PreviewRoot);
