import {Composition} from 'remotion';
import {EnvironmentCheck} from './components/EnvironmentCheck';
import {Scene03Preview} from './components/Scene03Preview';
import {Scene03FinalPreview} from './components/Scene03FinalPreview';
import {Scene04FinalPreview} from './components/Scene04FinalPreview';
import {SosongSilentPreview, SOSONG_SILENT_PREVIEW_TOTAL_FRAMES} from './components/SosongSilentPreview';
import {SosongFinal, SOSONG_FINAL_TOTAL_FRAMES} from './components/SosongFinal';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EnvironmentCheck"
        component={EnvironmentCheck}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Scene03Preview"
        component={Scene03Preview}
        durationInFrames={96}
        fps={24}
        width={720}
        height={1280}
      />
      <Composition
        id="Scene03FinalPreview"
        component={Scene03FinalPreview}
        durationInFrames={96}
        fps={24}
        width={720}
        height={1280}
      />
      <Composition
        id="Scene04FinalPreview"
        component={Scene04FinalPreview}
        durationInFrames={96}
        fps={24}
        width={720}
        height={1280}
      />
      <Composition
        id="SosongSilentPreview"
        component={SosongSilentPreview}
        durationInFrames={SOSONG_SILENT_PREVIEW_TOTAL_FRAMES}
        fps={24}
        width={720}
        height={1280}
      />
      <Composition
        id="SosongFinal"
        component={SosongFinal}
        durationInFrames={SOSONG_FINAL_TOTAL_FRAMES}
        fps={24}
        width={720}
        height={1280}
      />
    </>
  );
};
