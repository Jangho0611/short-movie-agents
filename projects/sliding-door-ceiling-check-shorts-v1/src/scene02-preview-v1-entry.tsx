import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene02PreviewV1} from './Scene02PreviewV1';
registerRoot(()=> <Composition id="Scene02PreviewV1" component={Scene02PreviewV1} durationInFrames={204} fps={30} width={1080} height={1920}/>);
