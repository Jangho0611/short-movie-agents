import {Composition,Sequence,AbsoluteFill} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {Body,SCENES} from './Scenes';
import {TIMELINE,BODY_FRAMES} from './timeline';
const Full=()=> <AbsoluteFill><Sequence durationInFrames={BODY_FRAMES}><Body/></Sequence><Sequence from={BODY_FRAMES} durationInFrames={170}><DaesanEnding/></Sequence></AbsoluteFill>;
export const RemotionRoot=()=> <>
 <Composition id="DoorFrameOrderFull" component={Full} width={1080} height={1920} fps={30} durationInFrames={BODY_FRAMES+170}/>
 <Composition id="DoorFrameOrderBody" component={Body} width={1080} height={1920} fps={30} durationInFrames={BODY_FRAMES}/>
 {TIMELINE.map((s,i)=><Composition key={s.id} id={s.id} component={SCENES[i]} width={1080} height={1920} fps={30} durationInFrames={s.frames}/>)}
 <Composition id="DaesanEnding" component={DaesanEnding} width={1080} height={1920} fps={30} durationInFrames={170}/>
 </>;
