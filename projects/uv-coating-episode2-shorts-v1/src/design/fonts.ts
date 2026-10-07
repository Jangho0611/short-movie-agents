import {continueRender, delayRender, staticFile} from 'remotion';

export const PRETENDARD = 'Pretendard';

const weights = [
  {weight: '500', file: 'Pretendard-Medium.woff2'},
  {weight: '600', file: 'Pretendard-SemiBold.woff2'},
  {weight: '700', file: 'Pretendard-Bold.woff2'},
  {weight: '800', file: 'Pretendard-ExtraBold.woff2'},
] as const;

weights.forEach(({weight, file}) => {
  const handle = delayRender(`Loading Pretendard ${weight}`);
  const fontFace = new FontFace(
    PRETENDARD,
    `url(${staticFile(`assets/fonts/${file}`)})`,
    {weight},
  );

  fontFace
    .load()
    .then((loaded) => {
      document.fonts.add(loaded);
      continueRender(handle);
    })
    .catch((error) => {
      console.error(`Failed to load Pretendard ${weight}`, error);
      continueRender(handle);
    });
});
