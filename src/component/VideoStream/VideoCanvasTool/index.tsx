import { BsChevronDown, BsXLg, BsChevronUp } from 'react-icons/bs';
import { TldrawApp } from '@tldraw/tldraw';
import rafSchd from 'raf-schd';
import { useState, useRef } from 'react';

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
import CanvasNoteTool from '@/component/VideoNote/CanvasNote/CanvasNoteTool';
import { timeArr, imageArr } from './temp.data';

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
  const visualIndexingRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const snapShotMove = (idx: number): void => {
    if (playerRef && playerRef.current) playerRef.current.currentTime = idx * 5;
  };

  const onDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
    if (visualIndexingRef && visualIndexingRef.current)
      setStartX(event.pageX + visualIndexingRef.current.scrollLeft);
  };

  const onDragEnd = () => setIsDrag(false);

  const onDragMove = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    if (isDrag && visualIndexingRef && visualIndexingRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = visualIndexingRef.current;

      visualIndexingRef.current.scrollLeft = startX - event.pageX;
      if (scrollLeft === 0) setStartX(event.pageX);
      else if (scrollWidth <= clientWidth + scrollLeft) setStartX(event.pageX + scrollLeft);
    }
  };

  const throttledOnDragMove = rafSchd(onDragMove);

  return (
    <VideoCanvasToolContainer canvasActivated={canvasActivated}>
      <VideoCanvasToolBar>
        <VideoCanvasTitle>
          <BsXLg color="white" size="16" onClick={() => setCanvasActivated(false)} />
          <VideoCanvasText>영상 필기</VideoCanvasText>
        </VideoCanvasTitle>
        <VideoCanvasTools>
          {videoCanvasRef.current !== null && (
            <CanvasNoteTool tlDrawApp={videoCanvasRef.current} isPlusFeatureIn={true} />
          )}
        </VideoCanvasTools>
        <VideoCanvasMinimize onClick={() => setCanvasToolMinimized((prev) => !prev)}>
          {canvasToolMinimized ? <BsChevronUp color="white" /> : <BsChevronDown color="white" />}
        </VideoCanvasMinimize>
      </VideoCanvasToolBar>
      <VideoVisualIndexing
        ref={visualIndexingRef}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? throttledOnDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
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
