import { useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';

const videoSource: string =
  'https://service-video-storage.s3.ap-northeast-2.amazonaws.com/test_hls/Default/HLS/test_hls_360.m3u8';

const VideoStream: React.FC = () => {
  const playerRef = useRef(null);

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src={videoSource}
      autoPlay={true}
      controls={true}
      width="50%"
      height="auto"
    />
  );
};

export default VideoStream;
