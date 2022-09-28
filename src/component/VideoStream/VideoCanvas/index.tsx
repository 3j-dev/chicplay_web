import { useRef, useCallback } from 'react';
import { Tldraw, TldrawApp } from '@tldraw/tldraw';

import { VideoCanvasContainer } from './style';
import { canvasRecordInitialState } from './constant';

interface Props {
  canvasActivated: boolean;
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
}

const VideoCanvas: React.FC<Props> = ({ canvasActivated, videoCanvasRef }: Props) => {
  const outerRef = useRef<HTMLDivElement | null>(null);

  const handleMount = useCallback(
    (app: TldrawApp) => {
      videoCanvasRef.current = app;
    },
    [videoCanvasRef],
  );

  const handleChange = useCallback((appState: TldrawApp) => {
    console.log(appState.document);
  }, []);

  return (
    <VideoCanvasContainer ref={outerRef} canvasActivated={canvasActivated}>
      <Tldraw
        onMount={handleMount}
        onChange={handleChange}
        showMenu={false}
        showPages={false}
        showUI={false}
        document={canvasRecordInitialState}
      />
    </VideoCanvasContainer>
  );
};

export default VideoCanvas;
