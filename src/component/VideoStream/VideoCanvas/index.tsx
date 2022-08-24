import { useRef, useCallback } from 'react';
import { Tldraw, TldrawApp } from '@tldraw/tldraw';

import { VideoCanvasContainer } from './style';

interface Props {
  canvasActivated: boolean;
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
}

const VideoCanvas: React.FC<Props> = ({ canvasActivated, videoCanvasRef }: Props) => {
  const outerRef = useRef<HTMLDivElement | null>(null);

  const handleMount = useCallback((app: TldrawApp) => {
    videoCanvasRef.current = app;
  }, []);

  return (
    <VideoCanvasContainer ref={outerRef} canvasActivated={canvasActivated}>
      <Tldraw onMount={handleMount} showMenu={false} showPages={false} showUI={false} />
    </VideoCanvasContainer>
  );
};

export default VideoCanvas;
