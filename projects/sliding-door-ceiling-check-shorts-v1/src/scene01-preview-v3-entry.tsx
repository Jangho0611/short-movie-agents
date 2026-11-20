import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene01PreviewV3} from './Scene01PreviewV3';
registerRoot(()=> <Composition id="Scene01PreviewV3" component={Scene01PreviewV3} durationInFrames={126} fps={30} width={1080} height={1920}/>);
