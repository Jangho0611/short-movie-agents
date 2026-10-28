import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene3V5} from './Scene3V5';
registerRoot(()=><Composition id="Scene3V5" component={Scene3V5} durationInFrames={255} fps={30} width={1080} height={1920}/>);
