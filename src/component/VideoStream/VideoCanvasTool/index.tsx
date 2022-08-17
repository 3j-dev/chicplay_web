import { Click, Pencil, Eraser, ArrowUpRight, Rectangle, Circle, Trash } from 'tabler-icons-react';
import { TldrawApp, TDShapeType } from '@tldraw/tldraw';

import { VideoCanvasToolContainer } from './style';

interface Props {
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
  noteType: number;
}

const VideoCanvasTool: React.FC<Props> = ({ videoCanvasRef, noteType }: Props) => {
  const tlDrawApp = videoCanvasRef.current;
  const clearDrawing = () => {
    if (!tlDrawApp) return;
    const tool = tlDrawApp.useStore.getState().appState.activeTool;
    tlDrawApp.deleteAll();
    tlDrawApp.selectTool(tool);
  };

  return (
    <VideoCanvasToolContainer noteType={noteType}>
      <Click onClick={() => tlDrawApp?.selectTool('select')} />
      <Pencil onClick={() => tlDrawApp?.selectTool(TDShapeType.Draw)} />
      <Eraser onClick={() => tlDrawApp?.selectTool('erase')} />
      <ArrowUpRight onClick={() => tlDrawApp?.selectTool(TDShapeType.Arrow)} />
      <Rectangle onClick={() => tlDrawApp?.selectTool(TDShapeType.Rectangle)} />
      <Circle onClick={() => tlDrawApp?.selectTool(TDShapeType.Ellipse)} />
      <Trash onClick={clearDrawing} />
    </VideoCanvasToolContainer>
  );
};

export default VideoCanvasTool;
