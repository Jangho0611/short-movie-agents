import {Composition, registerRoot} from 'remotion';
import {Cover} from './Cover';
registerRoot(()=><Composition id="SosongCover" component={Cover} width={1080} height={1920} fps={30} durationInFrames={1}/>);
