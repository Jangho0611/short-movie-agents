import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene01PreviewV4} from './Scene01PreviewV4';
registerRoot(()=> <Composition id="Scene01PreviewV4" component={Scene01PreviewV4} durationInFrames={126} fps={30} width={1080} height={1920}/>);
