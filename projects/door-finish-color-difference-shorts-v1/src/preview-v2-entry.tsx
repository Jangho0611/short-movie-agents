import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {PreviewV2Scene,lengths} from './PreviewV2Scenes';
registerRoot(()=><>{[1,3,4,5].map(scene=><Composition key={scene} id={`Scene${scene}V2`} component={PreviewV2Scene} defaultProps={{scene}} durationInFrames={lengths[scene]} fps={30} width={1080} height={1920}/>)}</>);
