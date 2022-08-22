import {
  TbClick,
  TbPencil,
  TbEraser,
  TbArrowUpRight,
  TbRectangle,
  TbCircle,
  TbTrash,
} from 'react-icons/tb';
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
      <TbClick onClick={() => tlDrawApp?.selectTool('select')} />
      <TbPencil onClick={() => tlDrawApp?.selectTool(TDShapeType.Draw)} />
      <TbEraser onClick={() => tlDrawApp?.selectTool('erase')} />
      <TbArrowUpRight onClick={() => tlDrawApp?.selectTool(TDShapeType.Arrow)} />
      <TbRectangle onClick={() => tlDrawApp?.selectTool(TDShapeType.Rectangle)} />
      <TbCircle onClick={() => tlDrawApp?.selectTool(TDShapeType.Ellipse)} />
      <TbTrash onClick={clearDrawing} />
    </VideoCanvasToolContainer>
  );
};

export default VideoCanvasTool;
