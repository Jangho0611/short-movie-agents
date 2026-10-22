import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene04InfoV1,SCENE04_TIMING} from './Scene04InfoV1';
registerRoot(()=> <Composition id="Scene04InfoV1" component={Scene04InfoV1} width={1080} height={1920} fps={SCENE04_TIMING.fps} durationInFrames={SCENE04_TIMING.duration}/>);
