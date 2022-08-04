import ReactHlsPlayer from 'react-hls-player';
import FormData from 'form-data';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

interface DimensionProps {
  w: number;
  h: number;
}

const videoSource: string =
  'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/HLS/test_hls_360.m3u8';

interface Props {
  snapShotClicked: boolean;
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoStream: React.FC<Props> = ({ snapShotClicked, setSnapShotClicked }) => {
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
          .post('http://15.164.222.41:8080/api/img/snapshot', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              //Authorization: sessionStorage.getItem("jwt")
            },
          })
          .then((response) => {
            console.log('성공' + JSON.stringify(response.data));
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
        canvasRef.current.width = w;
        canvasRef.current.height = h;
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
