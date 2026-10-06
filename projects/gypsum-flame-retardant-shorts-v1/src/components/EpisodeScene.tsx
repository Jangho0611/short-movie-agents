import {AbsoluteFill, Audio, Easing, Freeze, OffthreadVideo, Sequence, staticFile, interpolate, useCurrentFrame} from 'remotion';
import {PRETENDARD} from '../design/fonts';

export const Green: React.FC<React.PropsWithChildren> = ({children}) => <span style={{color: '#146335'}}>{children}</span>;

export const EpisodeScene: React.FC<{media: string; audio: string; caption: React.ReactNode; durationInFrames: number; mediaFrames?: number; scale?: number; origin?: string; freeze?: boolean; labels?: React.ReactNode; kind?: 'video' | 'image'; videoDurationInFrames?: number; videoScale?: number; captionBackgroundColor?: string; captionTextColor?: string; captionBorderColor?: string}> = ({media, audio, caption, durationInFrames, mediaFrames, videoDurationInFrames, scale, videoScale, origin = 'center', freeze = false, labels}) => {
  const resolvedFrames = mediaFrames ?? videoDurationInFrames ?? durationInFrames;
  const resolvedScale = scale ?? videoScale ?? 1;
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [6, 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const mediaEl = <AbsoluteFill style={{transform: `scale(${resolvedScale})`, transformOrigin: origin}}><OffthreadVideo src={staticFile(media)} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />{labels}</AbsoluteFill>;
  return <AbsoluteFill style={{backgroundColor: '#F7F7F5', overflow: 'hidden', fontFamily: PRETENDARD}}>
    <Audio src={staticFile(audio)} />
    {freeze ? <Freeze frame={0}>{mediaEl}</Freeze> : <><Sequence durationInFrames={Math.min(resolvedFrames, durationInFrames)}>{mediaEl}</Sequence>{durationInFrames > resolvedFrames && <Sequence from={resolvedFrames}><Freeze frame={Math.max(0, resolvedFrames - 1)}>{mediaEl}</Freeze></Sequence>}</>}
    <div style={{position: 'absolute', top: 144, left: 72, right: 72, display: 'flex', justifyContent: 'center', opacity}}>
      <div style={{maxWidth: 900, padding: '18px 30px 20px', borderRadius: 18, background: 'rgba(255,255,255,0.95)', color: '#222', boxShadow: '0 10px 30px rgba(0,0,0,0.10)', textAlign: 'center', fontSize: 56, fontWeight: 800, lineHeight: 1.22, letterSpacing: '-0.035em', wordBreak: 'keep-all'}}>{caption}</div>
    </div>
  </AbsoluteFill>;
};
