import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene3V3} from './Scene3V3';
registerRoot(()=><Composition id="Scene3V3" component={Scene3V3} durationInFrames={255} fps={30} width={1080} height={1920}/>);
