import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene2V4,scene2v4Frames} from './Scene2V4';
registerRoot(()=><Composition id="Scene2V4" component={Scene2V4} durationInFrames={scene2v4Frames} fps={30} width={1080} height={1920}/>);
