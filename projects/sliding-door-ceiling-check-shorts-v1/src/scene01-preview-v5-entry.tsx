import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene01PreviewV5} from './Scene01PreviewV5';
registerRoot(()=> <Composition id="Scene01PreviewV5" component={Scene01PreviewV5} durationInFrames={126} fps={30} width={1080} height={1920}/>);
