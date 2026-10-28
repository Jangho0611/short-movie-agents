import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene2V6,scene2v6Frames} from './Scene2V6';
registerRoot(()=><Composition id="Scene2V6" component={Scene2V6} durationInFrames={scene2v6Frames} fps={30} width={1080} height={1920}/>);
