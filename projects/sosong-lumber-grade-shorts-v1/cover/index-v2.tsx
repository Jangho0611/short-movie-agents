import {Composition, registerRoot} from 'remotion';
import {CoverV2} from './CoverV2';
registerRoot(()=><Composition id="SosongCoverV2" component={CoverV2} width={1080} height={1920} fps={30} durationInFrames={1}/>);
