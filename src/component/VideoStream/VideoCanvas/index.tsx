import { useRef, useCallback } from 'react';
import { Tldraw, TldrawApp } from '@tldraw/tldraw';

import { VideoCanvasContainer } from './style';

interface Props {
  noteType: number;
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
}

const VideoCanvas: React.FC<Props> = ({ noteType, videoCanvasRef }: Props) => {
  const outerRef = useRef<HTMLDivElement | null>(null);

  const handleMount = useCallback((app: TldrawApp) => {
    videoCanvasRef.current = app;
  }, []);

  return (
    <VideoCanvasContainer ref={outerRef} noteType={noteType}>
      <Tldraw onMount={handleMount} showMenu={false} showPages={false} showUI={false} />
    </VideoCanvasContainer>
  );
};

export default VideoCanvas;
