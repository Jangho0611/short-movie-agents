import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {PreviewV3Scene} from './DoorPanelV3';
import timing from './timing-v3.json';
registerRoot(()=> <>{[0,1,3,4,5].map(i=><Composition key={i} id={`PreviewV3Scene${i+1}`} component={PreviewV3Scene} defaultProps={{scene:i}} width={1080} height={1920} fps={30} durationInFrames={timing.scenes[i].frames}/>)}</>);
