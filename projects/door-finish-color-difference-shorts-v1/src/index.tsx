import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {DaesanEnding} from './daesan-ending/DaesanEnding';
import {DoorScene,frames} from './DoorFinish';
registerRoot(() => <>{frames.map((durationInFrames,i)=><Composition key={i} id={`Scene${i+1}`} component={DoorScene} defaultProps={{scene:i+1}} durationInFrames={durationInFrames} fps={30} width={1080} height={1920}/>)}<Composition id="DaesanEnding" component={DaesanEnding} durationInFrames={170} fps={30} width={1080} height={1920}/></>);
