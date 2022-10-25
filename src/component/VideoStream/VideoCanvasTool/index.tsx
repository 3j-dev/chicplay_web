import { BsChevronDown, BsXLg, BsChevronUp, BsFillRecordCircleFill } from 'react-icons/bs';
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
import useCanvasRecord from '@/hook/useCanvasRecord';
import { Colors } from '@/util/Constant';

interface Props {
  videoCanvasRef: React.MutableRefObject<TldrawApp | null>;
  canvasActivated: boolean;
  setCanvasActivated: React.Dispatch<React.SetStateAction<boolean>>;
  playerRef: React.RefObject<HTMLVideoElement>;
  visualIndexImageFilePathList: string[];
}

const convertNumber = (number: number, isFloor: boolean): number => {
  const convertedNum = isFloor ? Math.floor(number / 10) * 10 : Math.ceil(number / 10) * 10;
  return convertedNum;
};

const VideoCanvasTool: React.FC<Props> = ({
  videoCanvasRef,
  canvasActivated,
  setCanvasActivated,
  playerRef,
  visualIndexImageFilePathList,
}: Props) => {
  const [canvasToolMinimized, setCanvasToolMinimized] = useState<Boolean>(false);
  const visualIndexingRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [isRecordActive, setIsRecordActive] = useState<boolean>(false);
  const {
    canvasRecordTimeline,
    startCanvasRecord,
    endCanvasRecord,
    getCanvasRecord,
    deleteCanvasRecord,
  } = useCanvasRecord();

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

  const recordClickHandler = () => {
    setIsRecordActive((prev) => !prev);
    if (playerRef && playerRef.current && videoCanvasRef && videoCanvasRef.current)
      isRecordActive
        ? startCanvasRecord(
            videoCanvasRef.current,
            'username',
            convertNumber(playerRef.current.currentTime, true).toString(),
          )
        : endCanvasRecord(
            videoCanvasRef.current,
            convertNumber(playerRef.current.currentTime, false).toString(),
          );
  };

  return (
    <VideoCanvasToolContainer canvasActivated={canvasActivated}>
      <VideoCanvasToolBar>
        <VideoCanvasTitle>
          <BsXLg color="white" size="16" onClick={() => setCanvasActivated(false)} />
          <VideoCanvasText>영상 필기</VideoCanvasText>
        </VideoCanvasTitle>
        <VideoCanvasTools>
          {videoCanvasRef.current !== null && (
            <CanvasNoteTool tlDrawApp={videoCanvasRef.current} isPlusFeatureIn={true}>
              <BsFillRecordCircleFill
                onClick={recordClickHandler}
                color={isRecordActive ? Colors.Red : Colors.White}
                size="24"
              />
            </CanvasNoteTool>
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
        {visualIndexImageFilePathList.map((pileFath, idx) => (
          <VideoSnapImage
            src={pileFath}
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
