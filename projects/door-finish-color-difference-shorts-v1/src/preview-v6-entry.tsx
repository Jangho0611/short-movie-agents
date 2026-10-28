import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {PreviewV2Scene,lengths} from './PreviewV6Scenes';
import {Scene2V7} from './Scene2V8';
import {Scene3V6} from './Scene3V7';
registerRoot(()=><>{[1,4,5].map(scene=><Composition key={scene} id={`Scene${scene}Clean`} component={PreviewV2Scene} defaultProps={{scene}} durationInFrames={lengths[scene]} fps={30} width={1080} height={1920}/>)}<Composition id="Scene2Clean" component={Scene2V7} durationInFrames={286} fps={30} width={1080} height={1920}/><Composition id="Scene3Clean" component={Scene3V6} durationInFrames={255} fps={30} width={1080} height={1920}/></>);
