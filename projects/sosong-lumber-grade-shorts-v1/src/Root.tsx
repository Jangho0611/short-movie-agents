import {Composition} from 'remotion';
import {SosongGrade, ApprovedEnding} from './SosongGrade';
import timing from './timing.json';

export const Root: React.FC = () => <>
  <Composition id="SosongGrade" component={SosongGrade}
    width={1080} height={1920} fps={30} durationInFrames={timing.totalFrames}/>
  <Composition id="ApprovedEnding" component={ApprovedEnding}
    width={1080} height={1920} fps={30} durationInFrames={170}/>
</>;
