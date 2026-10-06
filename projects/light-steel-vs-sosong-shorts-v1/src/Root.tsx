import React from 'react';
import {Composition} from 'remotion';
import {Preview,SceneWithAudio,ApprovedEnding} from './Preview';
import timing from './timing-v5.json';
export const Root:React.FC=()=> <>
 <Composition id="LightSteelVsSosong" component={Preview} width={1080} height={1920} fps={30} durationInFrames={timing.totalFrames}/>
 {timing.scenes.map((s,i)=><Composition key={s.id} id={`Scene0${i+1}`} component={SceneWithAudio} defaultProps={{index:i}} width={1080} height={1920} fps={30} durationInFrames={s.frames}/>)}
 <Composition id="ApprovedEnding" component={ApprovedEnding} width={1080} height={1920} fps={30} durationInFrames={170}/>
</>;
