import {
  BsFillCursorFill,
  BsFillPenFill,
  BsFillEraserFill,
  BsArrowUpRight,
  BsCircle,
  BsChevronDown,
  BsXLg,
  BsChevronUp,
  BsTrash,
} from 'react-icons/bs';
import { BiRectangle } from 'react-icons/bi';
import { TldrawApp, TDShapeType } from '@tldraw/tldraw';
import { useState } from 'react';

import {
  VideoCanvasToolBar,
  VideoCanvasToolContainer,
  VideoCanvasTools,
  VideoCanvasTitle,
  VideoCanvasText,
  VideoCanvasMinimize,
  VideoVisualIndexing,
  VideoSnapImage,
  VideoSnapTime,
} from './style';
import { convertTime } from '@/util/convertTime';

interface Props {
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
  canvasActivated: boolean;
  setCanvasActivated: React.Dispatch<React.SetStateAction<boolean>>;
  playerRef: React.RefObject<HTMLVideoElement>;
}

const VideoCanvasTool: React.FC<Props> = ({
  videoCanvasRef,
  canvasActivated,
  setCanvasActivated,
  playerRef,
}: Props) => {
  const [canvasToolMinimized, setCanvasToolMinimized] = useState<Boolean>(false);

  const tlDrawApp = videoCanvasRef.current;
  const clearDrawing = () => {
    if (!tlDrawApp) return;
    const tool = tlDrawApp.useStore.getState().appState.activeTool;
    tlDrawApp.deleteAll();
    tlDrawApp.selectTool(tool);
  };

  const timeArr: string[] = [
    '00:00',
    '00:05',
    '00:10',
    '00:15',
    '00:20',
    '00:25',
    '00:30',
    '00:35',
    '00:40',
    '00:45',
    '00:50',
  ];
  const imageArr: string[] = [
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000000.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000001.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000002.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000003.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000004.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000005.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000006.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000007.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000008.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000009.jpg',
    'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/Thumbnails/test_hls.0000010.jpg',
  ];

  const snapShotMove = (idx: number): void => {
    if (playerRef && playerRef.current) playerRef.current.currentTime = idx * 5;
  };

  return (
    <VideoCanvasToolContainer canvasActivated={canvasActivated}>
      <VideoCanvasToolBar>
        <VideoCanvasTitle>
          <BsXLg color="white" size="16" onClick={() => setCanvasActivated(false)} />
          <VideoCanvasText>영상 필기</VideoCanvasText>
        </VideoCanvasTitle>
        <VideoCanvasTools>
          <BsFillCursorFill
            onClick={() => tlDrawApp?.selectTool('select')}
            color="white"
            size="20"
          />
          <BsFillPenFill
            onClick={() => tlDrawApp?.selectTool(TDShapeType.Draw)}
            color="white"
            size="20"
          />
          <BsFillEraserFill
            onClick={() => tlDrawApp?.selectTool('erase')}
            color="white"
            size="20"
          />
          <BsArrowUpRight
            onClick={() => tlDrawApp?.selectTool(TDShapeType.Arrow)}
            color="white"
            size="20"
          />
          <BiRectangle
            onClick={() => tlDrawApp?.selectTool(TDShapeType.Rectangle)}
            color="white"
            size="20"
          />
          <BsCircle
            onClick={() => tlDrawApp?.selectTool(TDShapeType.Ellipse)}
            color="white"
            size="20"
          />
          <BsTrash onClick={clearDrawing} color="white" size="20" />
        </VideoCanvasTools>
        <VideoCanvasMinimize onClick={() => setCanvasToolMinimized((prev) => !prev)}>
          {canvasToolMinimized ? <BsChevronUp color="white" /> : <BsChevronDown color="white" />}
        </VideoCanvasMinimize>
      </VideoCanvasToolBar>
      <VideoVisualIndexing>
        {timeArr.map((cur, idx) => (
          <VideoSnapImage
            src={imageArr[idx]}
            alt="snapimage"
            key={idx}
            onClick={() => snapShotMove(idx)}
          />
        ))}
      </VideoVisualIndexing>
    </VideoCanvasToolContainer>
  );
};

export default VideoCanvasTool;
