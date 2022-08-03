import { useRef, useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';

interface DimensionProps {
  w: number;
  h: number;
}

const videoSource: string =
  'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/HLS/test_hls_360.m3u8';

const VideoStream: React.FC = () => {
  const playerRef = useRef<React.RefObject<HTMLVideoElement>>(null);
  const canvasRef = useRef<React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  > | null>(null);
  const [dimensions, setDimensions] = useState<DimensionProps>({ w: 0, h: 0 });

  const context = canvasRef === null ? null : canvasRef.current?.getContext('2d');

  const getVideoSizeData = (videoRef) => {
    const ratio: number = videoRef.current.videoWidth / videoRef.current.videoHeight;
    const w: number = videoRef.current.videoWidth - 100;
    const h: number = w / ratio;
    return {
      ratio,
      w,
      h,
    };
  };

  const snapShot = () => {
    if (context && playerRef.current) {
      context.fillRect(0, 0, dimensions.w, dimensions.h);
      context.drawImage(playerRef.current, 0, 0, dimensions.w, dimensions.h);
      const snapShotImage: HTMLImageElement = new Image();
      snapShotImage.src = canvasRef.current?.toBlob(() => {}, 'image/webp', 1.0);
      console.log(snapShotImage);
    }
  };

  useEffect(() => {
    // Add listener when the video is actually available for
    // the browser to be able to check the dimensions of the video.
    if (playerRef.current) {
      playerRef.current.addEventListener('loadedmetadata', () => {
        const { w, h } = getVideoSizeData(playerRef);
        canvasRef.current.width = w;
        canvasRef.current.height = h;
        setDimensions({
          w,
          h,
        });
      });
    }
  }, []);

  return (
    <>
      <ReactHlsPlayer
        playerRef={playerRef}
        src={videoSource}
        autoPlay={true}
        controls={true}
        width="50%"
        height="auto"
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={snapShot}>Take Screenshot</button>
    </>
  );
};

export default VideoStream;
