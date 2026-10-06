import {Config} from '@remotion/cli/config';
import {existsSync} from 'node:fs';

// Use the existing local browser; no bundled browser or node_modules is copied.
const installedChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (process.env.REMOTION_BROWSER_EXECUTABLE) {
  Config.setBrowserExecutable(process.env.REMOTION_BROWSER_EXECUTABLE);
} else if (existsSync(installedChrome)) {
  Config.setBrowserExecutable(installedChrome);
}
Config.setOverwriteOutput(false);
