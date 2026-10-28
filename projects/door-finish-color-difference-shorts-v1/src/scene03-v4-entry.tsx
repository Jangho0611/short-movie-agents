import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene3V4} from './Scene3V4';
registerRoot(()=><Composition id="Scene3V4" component={Scene3V4} durationInFrames={255} fps={30} width={1080} height={1920}/>);
