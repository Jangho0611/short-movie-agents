import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene2V5,scene2v5Frames} from './Scene2V5';
registerRoot(()=><Composition id="Scene2V5" component={Scene2V5} durationInFrames={scene2v5Frames} fps={30} width={1080} height={1920}/>);
