import {Composition, registerRoot} from 'remotion';
import {Scene05, SCENE05_DURATION} from './components/Scene05';
const Root: React.FC = () => <Composition id="Scene05Preview" component={Scene05} durationInFrames={SCENE05_DURATION} fps={30} width={1080} height={1920} />;
registerRoot(Root);
