import {Composition} from 'remotion';
import {Scene01, SCENE01_DURATION} from './components/Scene01';

export const Scene01PreviewRoot: React.FC = () => (
  <Composition
    id="Scene01Preview"
    component={Scene01}
    durationInFrames={SCENE01_DURATION}
    fps={30}
    width={1080}
    height={1920}
  />
);
