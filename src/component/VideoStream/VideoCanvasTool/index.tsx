import { Click, Pencil, Eraser, ArrowUpRight, Rectangle, Circle, Trash } from 'tabler-icons-react';
import { TldrawApp, TDShapeType } from '@tldraw/tldraw';

import { VideoCanvasToolContainer } from './style';

interface Props {
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
}

const VideoCanvasTool: React.FC<Props> = ({ videoCanvasRef }: Props) => {
  const tlDrawApp = videoCanvasRef.current;
  return (
    <VideoCanvasToolContainer>
      <Click onClick={() => tlDrawApp?.selectTool('select')} />
      <Pencil onClick={() => tlDrawApp?.selectTool(TDShapeType.Draw)} />
      <Eraser onClick={() => tlDrawApp?.selectTool('erase')} />
      <ArrowUpRight onClick={() => tlDrawApp?.selectTool(TDShapeType.Arrow)} />
      <Rectangle onClick={() => tlDrawApp?.selectTool(TDShapeType.Rectangle)} />
      <Circle onClick={() => tlDrawApp?.selectTool(TDShapeType.Ellipse)} />
    </VideoCanvasToolContainer>
  );
};

export default VideoCanvasTool;
