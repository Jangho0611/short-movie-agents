import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene2V3,scene2v3Frames} from './Scene2V3';
registerRoot(()=><Composition id="Scene2V3" component={Scene2V3} durationInFrames={scene2v3Frames} fps={30} width={1080} height={1920}/>);
