import {ScenePlaceholder} from './ScenePlaceholder';
import {Scene01VeoLegacy} from './Scene01VeoLegacy';
import {DARUKKI_SCENE_SPECS} from './scene-spec';

// Scene01Remotion (static-image Ken Burns version) is preserved as a backup
// only — see 26.08.13수정.md. The active Scene 1 is the legacy-Veo clip.
export const DarukkiScene01 = Scene01VeoLegacy;
export const DarukkiScene02: React.FC = () => <ScenePlaceholder spec={DARUKKI_SCENE_SPECS[2]} />;
export const DarukkiScene03: React.FC = () => <ScenePlaceholder spec={DARUKKI_SCENE_SPECS[3]} />;
export const DarukkiScene04: React.FC = () => <ScenePlaceholder spec={DARUKKI_SCENE_SPECS[4]} />;
export const DarukkiScene05: React.FC = () => <ScenePlaceholder spec={DARUKKI_SCENE_SPECS[5]} />;
export const DarukkiScene06: React.FC = () => <ScenePlaceholder spec={DARUKKI_SCENE_SPECS[6]} />;
