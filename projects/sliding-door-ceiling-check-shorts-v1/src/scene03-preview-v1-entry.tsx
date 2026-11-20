import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene03PreviewV1} from './Scene03PreviewV1';
registerRoot(()=> <Composition id="Scene03PreviewV1" component={Scene03PreviewV1} durationInFrames={144} fps={30} width={1080} height={1920}/>);
