import React from 'react';
import {Composition,Sequence} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {Content,FRAMES,Scene} from './Scenes';
const contentFrames=FRAMES.reduce((a,b)=>a+b,0);
const Full=()=> <><Sequence durationInFrames={contentFrames}><Content/></Sequence><Sequence from={contentFrames} durationInFrames={170}><DaesanEnding/></Sequence></>;
export const Root=()=> <>{FRAMES.map((duration,i)=><Composition key={i} id={`Scene0${i+1}`} component={Scene} defaultProps={{id:i+1}} width={1080} height={1920} fps={30} durationInFrames={duration}/>)}<Composition id="DoorFrameWidth" component={Full} width={1080} height={1920} fps={30} durationInFrames={contentFrames+170}/><Composition id="DaesanEnding" component={DaesanEnding} width={1080} height={1920} fps={30} durationInFrames={170}/></>;
