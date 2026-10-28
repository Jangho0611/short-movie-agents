import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene3V6} from './Scene3V6';
registerRoot(()=><Composition id="Scene3V6" component={Scene3V6} durationInFrames={255} fps={30} width={1080} height={1920}/>);
