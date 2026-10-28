import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene2V7,scene2v7Frames} from './Scene2V7';
registerRoot(()=><Composition id="Scene2V7" component={Scene2V7} durationInFrames={scene2v7Frames} fps={30} width={1080} height={1920}/>);
