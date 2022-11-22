import ReactHlsPlayer from 'react-hls-player';
import FormData from 'form-data';
import { TldrawApp } from '@tldraw/tldraw';
import { BsPencilSquare } from 'react-icons/bs';
import { useRef, useState, useEffect, useCallback } from 'react';

import { postSnapshot } from '@/api/stream';
import VideoCanvas from './VideoCanvas';
import VideoControl from './VideoControl';
import VideoCanvasTool from './VideoCanvasTool';
import { VideoStreamContainer, Video, VideoCanvasButton } from './style';
import VideoTopBar from './VideoTopBar';
import { IndivudalVideoInfoT } from '@/interfaces/stream';
import useInterval from '@/hook/useInterval';
import { freshProgressRate } from '@/api/stream';

interface DimensionProps {
  w: number;
  h: number;
}

interface StreamProps {
  snapShotClicked: boolean;
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSnapShotURL: React.Dispatch<React.SetStateAction<string>>;
  individualVideoInfo: IndivudalVideoInfoT;
  individualVideoId: string;
}

const VideoStream: React.FC<StreamProps> = ({
  snapShotClicked,
  setSnapShotClicked,
  setSnapShotURL,
  individualVideoInfo,
  individualVideoId,
}: StreamProps) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoCanvasRef = useRef<TldrawApp | null>(null);
  const [dimensions, setDimensions] = useState<DimensionProps>({ w: 0, h: 0 });
  const [canvasActivated, setCanvasActivated] = useState<boolean>(false);
  //useSnapShot custom hook 사용해서 정리하기

  const context = canvasRef === null ? null : canvasRef.current?.getContext('2d');

  const getVideoSizeData = (videoRef: React.RefObject<HTMLVideoElement>) => {
    const ratio: number = videoRef.current!.videoWidth / videoRef.current!.videoHeight;
    const w: number = videoRef.current!.videoWidth - 100;
    const h: number = w / ratio;
    return {
      ratio,
      w,
      h,
    };
  }; // get videoRef & return videoElement's ratio, width, height

  const snapShot = () => {
    if (context && playerRef.current) {
      context.fillRect(0, 0, dimensions.w, dimensions.h);
      context.drawImage(playerRef.current, 0, 0, dimensions.w, dimensions.h);

      canvasRef.current?.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('image', blob, 'test.png');
        if (playerRef && playerRef.current) {
          const { data } = await postSnapshot(
            individualVideoId,
            Math.trunc(playerRef.current.currentTime),
            formData,
          );
          setSnapShotURL(data.filePath);
        }
      });
    }
  }; // drawing video snapshot on canvas and post with axios then get filepath on S3 storage

  useEffect(() => {
    // Add listener when the video is actually available for
    // the browser to be able to check the dimensions of the video.
    if (playerRef.current) {
      playerRef.current.addEventListener('loadedmetadata', () => {
        const { w, h } = getVideoSizeData(playerRef);
        canvasRef.current!.width = w;
        canvasRef.current!.height = h;
        setDimensions({
          w,
          h,
        });
      });
    }
  }, []);

  useEffect(() => {
    snapShotClicked && snapShot();
    setSnapShotClicked(false);
  }, [setSnapShotClicked, snapShotClicked]);
  // chang state by snapshot action

  const updateVideoProgressRate = () => {
    if (playerRef && playerRef.current) {
      const progressRate: number =
        Math.round(playerRef.current.currentTime / playerRef.current.duration) * 100;
      freshProgressRate(individualVideoId, progressRate);
    }
  };

  useInterval(updateVideoProgressRate, 1000);

  return (
    <VideoStreamContainer>
      <VideoTopBar videoTitle={individualVideoInfo.title} />
      <Video>
        <ReactHlsPlayer
          playerRef={playerRef}
          src={individualVideoInfo.videoFilePath}
          controls={false}
          muted={true}
          width="100%"
        />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <VideoCanvas canvasActivated={canvasActivated} videoCanvasRef={videoCanvasRef} />
        <VideoCanvasButton
          canvasActivated={canvasActivated}
          onClick={() => setCanvasActivated(true)}
        >
          <BsPencilSquare size={30} color="white" />
        </VideoCanvasButton>
      </Video>
      <VideoCanvasTool
        playerRef={playerRef}
        videoCanvasRef={videoCanvasRef}
        canvasActivated={canvasActivated}
        setCanvasActivated={setCanvasActivated}
        visualIndexImageFilePathList={individualVideoInfo.visualIndexImageFilePathList}
      />
      <VideoControl playerRef={playerRef} />
    </VideoStreamContainer>
  );
};

export default VideoStream;
