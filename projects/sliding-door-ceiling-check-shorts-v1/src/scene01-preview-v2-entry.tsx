import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {Scene01PreviewV2} from './Scene01PreviewV2';
registerRoot(()=> <Composition id="Scene01PreviewV2" component={Scene01PreviewV2} durationInFrames={126} fps={30} width={1080} height={1920}/>);
