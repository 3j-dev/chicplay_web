import ReactHlsPlayer from 'react-hls-player';
import FormData from 'form-data';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

interface DimensionProps {
  w: number;
  h: number;
}

const videoSource: string | undefined = process.env.TEST_VIDEO_URL;

interface StreamProps {
  snapShotClicked: boolean;
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSnapShotURL: React.Dispatch<React.SetStateAction<string>>;
}

const VideoStream: React.FC<StreamProps> = ({
  snapShotClicked,
  setSnapShotClicked,
  setSnapShotURL,
}: StreamProps) => {
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

      canvasRef.current?.toBlob((blob) => {
        const formData = new FormData();
        formData.append('multipartFile', blob, 'test.png');
        axios
          .post(process.env.SNAPSHOT_API, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              //Authorization: sessionStorage.getItem("jwt")
            },
          })
          .then((response) => {
            setSnapShotURL(response.data[0].filePath);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

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
  }, [snapShotClicked]);

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
    </>
  );
};

export default VideoStream;
