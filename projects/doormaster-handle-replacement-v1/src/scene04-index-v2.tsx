import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene04InfoV2,SCENE04_TIMING} from './Scene04InfoV2';
registerRoot(()=> <Composition id="Scene04InfoV2" component={Scene04InfoV2} width={1080} height={1920} fps={SCENE04_TIMING.fps} durationInFrames={SCENE04_TIMING.duration}/>);
