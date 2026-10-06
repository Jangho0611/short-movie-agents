import React from 'react';
import {AbsoluteFill, Composition, Series} from 'remotion';
import {Scene} from './Scenes';
import {Ending} from './ending/Ending';
import timing from './timing.json';
const total=timing.reduce((s,r)=>s+r.frames,0);
export const FullVideo:React.FC=()=> <AbsoluteFill><Series>{timing.slice(0,6).map(t=><Series.Sequence key={t.scene} durationInFrames={t.frames}><Scene n={t.scene}/></Series.Sequence>)}<Series.Sequence durationInFrames={136}><Ending/></Series.Sequence></Series></AbsoluteFill>;
export const RemotionRoot:React.FC=()=> <><Composition id="DoorDirectionFull" component={FullVideo} durationInFrames={total} fps={24} width={1080} height={1920}/>{timing.slice(0,6).map(t=><Composition key={t.scene} id={`Scene${t.scene}`} component={Scene} defaultProps={{n:t.scene}} durationInFrames={t.frames} fps={24} width={1080} height={1920}/>)}<Composition id="Ending" component={Ending} durationInFrames={136} fps={24} width={1080} height={1920}/></>;
