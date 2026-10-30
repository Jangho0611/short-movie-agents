import {Composition,registerRoot} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {LotPreview,LotScene} from './LotPreview';
import scenes from './timeline-v1.json';
const Root=()=> <>{scenes.map((s,i)=><Composition key={s.scene} id={`Scene0${s.scene}`} component={LotScene} defaultProps={{index:i}} durationInFrames={s.frames} fps={30} width={1080} height={1920}/>)}<Composition id="DoorFilmLotPreviewV1" component={LotPreview} durationInFrames={scenes.reduce((n,s)=>n+s.frames,170)} fps={30} width={1080} height={1920}/><Composition id="DaesanEndingApprovedV1" component={DaesanEnding} durationInFrames={170} fps={30} width={1080} height={1920}/></>;
registerRoot(Root);
