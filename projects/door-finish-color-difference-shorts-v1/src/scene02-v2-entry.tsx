import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene2V2,scene2v2Frames} from './Scene2V2';
registerRoot(()=><Composition id="Scene2V2" component={Scene2V2} durationInFrames={scene2v2Frames} fps={30} width={1080} height={1920}/>);
